<script>
    import { collection, query , onSnapshot, where, addDoc } from "firebase/firestore";
    import { db } from "../firebase";
    import {onMount} from 'svelte';
    import {dbUser} from '../stores';
    import TitleHead from '../Widgets/TitleHead.svelte';

    let q = query(
		collection(db, 'users'),
        where('role', '==', 'w')
	);
	let list = [];
	const unsubscribe = onSnapshot(q, (querySnapshot) => {
		let fb = [];
		querySnapshot.forEach((doc) => {
			let item = { ...doc.data(), id: doc.id };
			fb = [item, ...fb];
		});
		list = fb;
	});

    function sendNotice(worker){
        addDoc(collection(db,"notices"),{
            from: $dbUser.email,
            to: worker
        })
    }
</script>

<div>
    <TitleHead msg="Find Workers" icon="bi bi-person-plus-fill" />
    <h1 style="margin-left: 0.5em">Reccomended</h1>
    <div class="workerList">
        {#each list as worker}
            <div class="workerItem">
                <img src="https://picsum.photos/100" alt="" srcset="">
                <div class="txt">
                    <h1>{worker.name}</h1>
                    <h2>{worker.crop[0]} ; {worker.exp} Years Experience </h2>
                </div>
                
                {#if $dbUser.role=='w'}
                    <button on:click={()=>sendNotice(worker.id)}><i class="bi bi-person-plus-fill"></i></button>
                {/if}
            </div>
        {/each}
    </div>
</div>

<style>
    .workerList{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0.5em;
    }
    .workerItem{
        display: flex;
        justify-content: flex-start;
        padding: 0.5em;
        font-size: 1em;
        align-items:center;
    }

    .workerItem h1{
        font-size: 2em;
    }
    
    .workerItem h2{
        font-size: 1em;
        color:#2CB67D;
    }

    img{
        width: 80px;
        height: 80px;
        margin-right: 0.5em;
    }
    .txt{
        display:flex;
        flex-direction: column;
    }
    button{
        font-size: 1.2em;
        color: #2CB67D;
        background: none;
        border: none;
        border-radius: 100%;
        font-weight: 800;
        line-height: 0;
        margin-left: 0.5em;
    }
</style>