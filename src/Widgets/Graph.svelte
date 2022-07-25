<script defer>
    import Chart from "chart.js";
    import { onMount } from "svelte";

    let av=Math.floor(Math.random()*(50-30+1)+30);
    let avList=[av,av,av,av,av];
    let dataList=[];
    for(let i=0;i<5;i++){
      //Find random number between -5 and 10
      let r=Math.floor(Math.random()*(10-(-5)+1)+(-5));
        dataList.push(av+r);
    }
    onMount(() => {
      const data = {
        labels: [" ", " ", " ", " ", " "],
        datasets: [
          {
            label: "test",
            data: dataList,
            fill: false,
            borderColor: "#2CB67D",
            backgroundColor: "rgba(255,0,0,0)",
            tension: 0.4
          },
          {
            label: "AV",
            data: avList,
            fill: false,
            borderColor: "rgba(40,40,40)",
            backgroundColor: "rgba(255,0,0,0)",
            tension: 0.4,
            borderDash: [10, 5]
          }
        ]
      };
      
  
      const ctx = document.getElementById("chart").getContext("2d");
      if (ctx == null) console.log("ctx is null");
      new Chart(ctx, {
        type: "line",
        data: data,
        options: {
          scales: {
            xAxes: [
              {
                gridLines: {
                  color: "rgba(0, 0, 0, 0)"
                }
              }
            ],
            yAxes: [
              {
                ticks: {
                  display: false
                },
                gridLines: {
                  color: "rgba(0, 0, 0, 0)"
                }
              }
            ]
          },
          elements: {
            point: {
              radius: 0
            }
          },
          legend: {
            display: false
          },
          tooltips: {
            callbacks: {
              label: function(tooltipItem) {
                return tooltipItem.yLabel;
              }
            }
          }
        }
      });
    });
  </script>

<h1>
  Harvest Period Graph:
</h1>

<div class="chart-container">
	<canvas id="chart"></canvas>
</div>

<h2>
  You are {(dataList[4]>=av) ?"ahead" :"behind"} by <span>{Math.abs(dataList[4]-av)} days.</span>
</h2>

<style>
  h1{
    margin: 1em 0 0 0.5em;
    font-weight: 300;
    font-size: 1.5em;
  }
  h2{
    text-align: center;
    font-weight: 300;
    font-size: 1.2em;
  }
  span{
    color: #2CB67D;
    font-size: 1.3em;
  }
    .chart-container {
        width: 100vw;
        overflow-x: auto;
    }
</style>