<script>
    import { onMount } from "svelte";

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '08e3940308msh7d9dc3a32b35aa4p1ef015jsn3659b393e25e',
            'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
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
        let lat=10,long=10;
        navigator.geolocation.getCurrentPosition(function(position) {
            lat = position.coords.latitude;
            long = position.coords.longitude;
        });
        fetch(`https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily?lat=${lat}&lon=${long}`, options)
            .then(response => response.json())
            .then(response => forecast=response.data)
            .catch(err => console.error(err));
    });
</script>

<main>
    <h1>
        Weather Report
    </h1>
    <div class="weather">
        {#each forecast as item,i}
            <div class="item">
                {#if item.clouds>=30}
                    <h1><i class="bi bi-cloud-drizzle-fill"></i></h1>
                    
                {/if}
                {#if item.clouds<30 && item.clouds>20}
                    <h1><i class="bi bi-cloud-fill"></i></h1>
                {/if}
                {#if item.clouds<20}
                    <h1><i class="bi bi-sun-fill"></i></h1>
                {/if}
                <h1>{item.max_temp}</h1>
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
        flex: 1 1 0px;
    }
    .item i{
        color: #2CB67D;
    }
</style>