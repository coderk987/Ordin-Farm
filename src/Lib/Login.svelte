<script>
    import { createUserWithEmailAndPassword , signInWithEmailAndPassword , signOut } from "firebase/auth";
    import { doc, getDoc, setDoc } from "firebase/firestore";
    import { auth, db } from '../firebase';
    import {user , dbUser} from '../stores';

    let email='';
    let pass='';
    let name='';
    let phone='';
    let role='';
    let crop='';
    let lat='';
    let long='';
    let wage=0;
    let exp=0;

    let list=['rice','maize','wheat'];
    let err='';

    function validReg(){
        if(email=='' || pass=='' || name=='' || role=='' || phone=='' || crop==''){
                err='Please Fill All Fields';
                return false;
        }
        return true;
    }

    function signupEmail(){
        if(validReg()){
        createUserWithEmailAndPassword(auth,email,pass).then(function(result){
            setDoc(doc(db,'users',email),{
                name:name,
                phone:phone,
                role:role,
                crop: [crop],
                farm: [lat+' '+long],
                wage:wage,
                exp:exp,
                img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png",
                workers: []
            }).then(function(result){
                $dbUser=result;
                $dbUser={...$dbUser,email:email};
            }).catch(function(error){
                console.log(error);
            });
            $user=result;
        }).catch(function(error){
            console.log(error);
        });
    }
    }

    let logMail='';
    let logPass='';
    let logErr='';
    function validLog(){
        if(logMail=='' || logPass==''){
                logErr='Please Fill All Fields';
                return false;
        }
        return true;
    }
    function loginEmail(){
        if(validLog()){
        signInWithEmailAndPassword(auth,logMail,logPass).then(function(result){
            getDoc(doc(db,'users',logMail)).then(function(result){
                console.log(result.data())
                $dbUser=result.data();
                $dbUser={...$dbUser,email:logMail};
            }).catch(function(error){
                console.log(error);
            });
            $user=result;
        }).catch(function(error){
            console.log(error);
        });
    }
    }
</script>

<div class="mainBody">
    <center>
    <div class="register">
        <h1>Register:</h1>
        <h2 class="slog">Be a part of the Community.</h2>
        <input bind:value={email} type="email" placeholder="Email" />
        <input bind:value={pass} type="password" placeholder="Password" />
        <input bind:value={name} type="text" placeholder="Name" />
        <input bind:value={phone} type="number" placeholder="Number" />

        <select name="" id="" bind:value={role} placeholder="Role">
            <option value="" disabled selected>Select Role</option>
            <option value="o">Owner</option>
            <option value="w">Worker</option>
        </select>
        {#if role=='o'}
            Crop: 
            <select name="" id="" bind:value={crop}>
                <option value="" disabled selected>Select Crop</option>
                {#each list as item}
                    <option value={item}>{item}</option>
                {/each}
            </select>
            Farm Information: <br/>
            <input type="text" bind:value={lat}  placeholder="Farm Latitude"/>
            <input type="text" bind:value={long} placeholder="Farm Longitude"/>
        {:else if role=='w'}
            <select name="" id="" bind:value={crop}>
                <option value="" disabled selected>Select Crop</option>
                {#each list as item}
                    <option value={item}>{item}</option>
                {/each}
            </select>
            <input type="number" bind:value={wage} placeholder="Wage" />
            <input type="number" bind:value={exp} placeholder="Experience"/>
        {/if}
        <button on:click={signupEmail}>
            Register
        </button>
        <hr/>
        <p>{err}</p>
    </div>
    <div class="break">
        <h2>Or</h2>
    </div>
    <div class="login">
        <h1>Login:</h1>
        <h2 class="slog">Glad to have you back.</h2>
        <input bind:value={logMail} type="email" placeholder="Email" />
        <input bind:value={logPass} type="password" placeholder="Password" />
        <button on:click={loginEmail}>
            Login
        </button>
        <p>{logErr}</p>
    </div>
    </center>
</div>

<style>
    .mainBody{
        display:flex;
        flex-direction: column;
        align-items:center;
        padding: 1em 0;
    }
    .login , .register{
        display:flex;
        flex-direction:column;
        align-items: flex-start;
        flex: 1;
    }
    .break{
        color: gray;
        font-weight: 200;
        font-size: 1rem;
        position:relative;
    }
    .break::after{
        content: "";
        position:absolute;
        width: 40%;
        height: 1px;
        background-color: gray;
        top: 1.2em;
        left: 0;
    }
    .break::before{
        content: "";
        position:absolute;
        width: 40%;
        height: 1px;
        background-color: gray;
        top: 1.2em;
        right: 0;
    }
    input,select{
        background-color: rgb(0, 0, 0);
        color: white;
        border: 1px solid #2CB67D;
        padding: 0.5em;
        margin: 0.5em 0;
        border-radius: 5px;
    }

    button{
        background-color: #242629;
        border-radius: 20px;
        padding: 0.3em 2em;
        border: 1px solid #2CB67D;
        color:whitesmoke;
    }

    .slog{
        color: gray;
        font-weight: 200;
        font-size: 1rem;
    }
</style>