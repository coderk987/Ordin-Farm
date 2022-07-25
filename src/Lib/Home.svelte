<script>
    import { arrayUnion, doc , query, collection, where, onSnapshot , updateDoc ,deleteDoc, getDoc , addDoc} from "firebase/firestore";
    import { dbUser } from "../stores";
    import {db} from '../firebase';
    import { onMount } from "svelte";
    import TitleHead from "../Widgets/TitleHead.svelte";

    let q=query(
		collection(db, 'notices'),
        where('to', '==', ($dbUser.email))
    )
	let notifs = [];
	const unsubscribe = onSnapshot(q, (querySnapshot) => {
		let fb = [];
		querySnapshot.forEach((doc) => {
			let item = { ...doc.data(), id: doc.id };
			fb = [item, ...fb];
		});
		notifs = fb;
	});

    function decline(notif){
        deleteDoc(doc(db, "notices", notif.id))
    }
    function accept(notif){
        updateDoc(doc(db,"users",notif.from), {
            workers: arrayUnion('/users/'+$dbUser.email)
        });
        deleteDoc(doc(db, "notices", notif.id))
    }

    let forWorker='',task='';

    let Tasks = [];
    let taskQ=query(collection(db, 'tasks'),where(($dbUser.role=='o' ?'owner' :'toMail'), '==', $dbUser.email));
	const taskSub = onSnapshot(taskQ, (querySnapshot) => {
		let fb = [];
		querySnapshot.forEach((doc) => {
			let item = { ...doc.data(), id: doc.id };
			fb = [item, ...fb];
		});
		Tasks = fb;
	});

    function addTask(){
        addDoc(collection(db,"tasks"),{
            owner: $dbUser.email,
            worker: forWorker.name,
            toMail: forWorker.mail,
            task: task,
            date: new Date()
        })
    }

    let workSelect=[];

    const getWorkersList = async (arr) => {
        let list = [];
        for(let i=0;i<arr.length;i++){
            const d = await getDoc(doc(db, "users", arr[i]));
            let temp = d.data();
            temp = {
              ...temp,
              email:d.id
            }
            list.push(temp);
        };
        workSelect=list
    }

    onMount(async () => {
        getWorkersList($dbUser.workers)
    });
</script>

<div>
    <TitleHead msg="Dashboard" icon="bi bi-house-fill" />
    {#if $dbUser.role=='w'}
        <div class="notifs">
           {#each notifs as notif}
                <div class="notifItem">
                    <div class="text">
                        <h1>{notif.from}</h1>
                        <h2>Wants to make you a worker</h2>
                    </div>
                    <button on:click={()=>accept(notif)}>&check;</button>
                    <button on:click={()=>decline(notif)}>&Cross;</button>
                </div>
            {/each} 
        </div>
        
    {/if}
    {#if $dbUser.role=='o'}
    <div class="center">
        <div class="taskForm">
            <h1>Create New Task</h1>
            <input type="text" id="task" bind:value={task} />
            <select name="" id="" bind:value={forWorker}>
                <!--Loop each over workersList with parameter dbUser.workers -->
                <option value="" disabled selected>Select Worker</option>
                {#each workSelect as worker}
                    <option value={worker}>{worker.name}</option>
                {/each}
            </select>
            <button on:click={addTask}>Add Task</button>
        </div>
    </div>
        
    {/if}
        <div class="taskList">
            {#each Tasks as Task}
                <div class="taskItem">
                    <h3 class="prog">{Math.floor(Math.random() * 90)} % Progress</h3>
                    <h1>{Task.task}</h1>
                    <h3 class="date"><i class="bi bi-calendar-fill"></i> {Task.date}</h3>
                    <h2 class="given"><i class="bi bi-file-person-fill"></i> {Task.worker}</h2>
                </div>
            {/each}
        </div>
    
</div>

<style>
    .notifs{
        padding: 1em 0;
        display:flex;
        flex-direction:column;
        align-items: center;
    }
    .notifItem{
        display:flex;
        justify-content: space-between;
        align-items: center;
        background-color: black;
        border-radius: 5px;
        padding: 0.5em;
    }
    .notifItem > *{
        margin: 0 0.5em;
    }
    .notifItem h1,h2{
        font-size: 1.2em;
        color: gray;
        font-weight: 300;
    }
    .notifItem h1{
        font-weight: 700;
        color:#2CB67D;
    }
    .notifItem button{
        font-size: 1.2em;
        color: white;
        background: #2CB67D;
        border: none;
        padding: 0.8em 0.5em;
        border-radius: 100%;
        font-weight: 800;
        line-height: 0;
    }

    .taskList{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1em;
    }
    .taskItem{
        width: 100%;
        display:flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0.7em;
        border: 2px solid #323239;
        border-radius: 5px;
    }

    .prog{
        color: #2CB67D;
    }

    .taskItem>h1{
        margin-bottom: 1em;
    }

    .date{
        display:flex;
        align-items: center;
    }
    .taskItem i{
        color: #2CB67D;
        font-size: 1.5em;
        margin-right: 1em;
    }

    .given{
        margin-top: 1.5em;
        font-weight: 700;
        color: #2CB67D;
        display:flex;
        align-items: center;
    }
    .given>i{
        color: whitesmoke;
    }

    .center{
        display:flex;
        justify-content: center;
        margin-top: 1em;
        width: 100%;
        padding: 0 1em;
    }
    .taskForm{
        display:flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 1em;
        border: 2px solid #323239;
        border-radius: 5px;
        width: 100%;
    }
    .taskForm>input{
        margin-top: 1em;
    }
    input,select{
        background-color: black;
        border: 2px solid #2CB67D;
        width: 100%;
        padding: 0.2em 0.5em;
        border-radius: 5px;
        color: white;
        font-size: 1.2em;
        font-weight: 700;
    }
    select{
        margin-top: 0.5em;
    }
    .taskForm button{
        font-size: 1.2em;
        color: white;
        background: rgb(14, 14, 14);
        color:#2CB67D;
        border: 1px solid currentColor;
        padding: 0.8em 2em;
        border-radius: 20px;
        font-weight: 800;
        line-height: 0;
        margin-top: 1em;
        align-self:center;
    }
</style>