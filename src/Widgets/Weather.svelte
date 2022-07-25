<script>
    import { onMount } from "svelte";

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '38ca3414dbmsh2a1a5a049cd6a69p15700ajsn337caada5613',
            'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
        }
    };
    let months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    let forecast=[];
    function findDate(i){
        const date= new Date();
        date.setDate(date.getDate()+i);
        console.log(date.getDate(),date.getMonth(date))
        let suf='th';
        if(date.getDate()%10==1) suf='st';
        else if(date.getDate()%10==2) suf='nd';
        else if(date.getDate()%10==3) suf='rd';
        return date.getDate()+suf+ ' ' + months[date.getMonth(date)];
    }
    onMount(() => {
        fetch('https://community-open-weather-map.p.rapidapi.com/climate/month?q=Gurgaon&units=metric', options)
        .then((dt)=>dt=dt.json())
        .then((dt)=>forecast=dt.list)
        .then((dt)=>console.log(forecast[0]));
    });
</script>

<main>
    <h1>
        Weather Report
    </h1>
    <div class="weather">
        {#each forecast as item,i}
            <div class="item">
                {#if item.temp.average>=30}
                    <h1><i class="bi bi-sun-fill"></i></h1>
                {/if}
                {#if item.temp.average<30 && item.temp.average>20}
                    <h1><i class="bi bi-cloud-fill"></i></h1>
                {/if}
                {#if item.temp.average<20}
                    <h1><i class="bi bi-cloud-drizzle-fill"></i></h1>
                {/if}
                <h1>{item.temp.average}</h1>
                {#if i==0}
                    <h2>Today</h2>
                {:else if i==1}
                    <h2>Tomorrow</h2>
                {:else}
                    <h2>{findDate(i)}</h2>
                {/if}
            </div>
        {/each}
    </div>
</main>

<style>
    .weather{
        display:flex;
        justify-content: flex-start;
        overflow-x: scroll;
        flex-wrap: nowrap;
    }
    .item{
        width: 150px;
        border: 1px solid black;
        margin: 1em;
        padding: 1em;
        height: max-content;
        white-space: nowrap;
        text-align:center;
        background: black;
        border-radius: 5px;
    }
    .item i{
        color: #2CB67D;
    }
</style>