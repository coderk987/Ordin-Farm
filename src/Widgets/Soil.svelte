<script>
    import { onMount } from "svelte";

    let dt=[
        {
            "N": 65,
            "P": 37,
            "K": 40,
            "temperature": 23.35905428,
            "humidity": 83.59512273,
            "ph": 5.333322606,
            "rainfall": 188.413665,
            "label": "rice"
        },
        {
            "N": 83,
            "P": 57,
            "K": 19,
            "temperature": 25.73044432,
            "humidity": 70.74739256,
            "ph": 6.877869005,
            "rainfall": 98.73771338,
            "label": "maize"
        },
        {
            "N": 75,
            "P": 49,
            "K": 15,
            "temperature": 21.53574127,
            "humidity": 71.50905983,
            "ph": 5.918263801,
            "rainfall": 102.4852929,
            "label": "wheat"
        }
    ]

    let crops=[
        {
            name: 'Rice',
            rate: 1,
            img: "https://www.haifa-group.com/sites/default/files/field/image/Rice%20Mobile%20banner.png",
            cl: 'green'
        },
        {
            name: 'Wheat',
            rate: 2,
            img: "https://www.world-grain.com/ext/resources/Article-Images/2020/02/Wheat_photo-cred-Adobe-stock_E-2.jpg?t=1582297332&width=1080",
            cl: 'green'
        },
        {
            name: 'Maize',
            rate: 0,
            img: "https://b3n8a3n8.rocketcdn.me/wp-content/uploads/2021/06/corn-vs-maize-01-1140x641.jpg",
            cl: 'green'
        }
    ]

    onMount(()=>{
        //random number between 10 and 90
        let k=Math.floor(Math.random()*(90-10+1)+10);
        let n=Math.floor(Math.random()*(90-10+1)+10);
        let p=Math.floor(Math.random()*(90-10+1)+10);
        for(let i=0;i<3;i++){
            let diff=0;
            diff+=(Math.abs(k-dt[i].K));
            diff+=(Math.abs(p-dt[i].P));
            diff+=(Math.abs(n-dt[i].N));
            crops[i].rate=Math.round((5.0-(diff*0.1))*10)/10;
            if(crops[i].rate<0) crops[i].cl='red';
            else if(crops[i].rate>=0 && crops[i].rate<3) crops[i].cl='green';
            else crops[i].cl='blue';
            console.log(crops[i].cl);
        }
    })
</script>

<div>
    <div class="cropList">
        {#each crops as crop,i }
            <div class="cropItem">
                <img src={crop.img} alt="" srcset="">
                <div class="txt">
                    <h1>{crop.name}</h1>
                    <h2 class="{crop.cl}">{(crop.rate>0) ?'+' :''}{crop.rate} Harvest Rate</h2>                
                </div>
            </div>
        {/each}
    </div>
</div>

<style>

    .cropItem{
        display: flex;
        margin: 0.5em 0;
    }
    .cropList{
        display:flex;
        flex-direction: column;
        padding: 1em;
    }
    img{
        height: 100px;
        width: 100px;
        border-radius: 5px;
        margin-right: 1em;
    }
    .red{
        color: #CC474C;
    }
    .green{
        color: #2CB67D;
    }
    .blue{
        color: #A4BFE4;
    }
</style>