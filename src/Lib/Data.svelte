<script>
    import Weather from "../Widgets/Weather.svelte";
    import Graph from "../Widgets/Graph.svelte"; 
    import Soil from "../Widgets/Soil.svelte";
    import TitleHead from "../Widgets/TitleHead.svelte";
</script>

<main>
    <TitleHead msg="Crop Data" icon="bi bi-gear-fill" />
    <!--Weather -->
    <Graph />
    <Soil />
</main>

<style>
</style>