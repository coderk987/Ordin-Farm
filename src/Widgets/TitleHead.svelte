<script>
    export let msg;
    export let icon;
</script>

<div>
    <i class={icon}></i>
    <span>{msg}</span>
</div>

<style>
    div{
        display:flex;
        justify-content: flex-start;
        align-items: center;
        padding: 1em;
        border-bottom: 2px solid #323239;
    }
    i{
        font-size: 1.5em;
        color: #2CB67D;
        margin-right: 1em;
    }
    span{
        font-size: 1.2em;
        color: white;
    }
</style>