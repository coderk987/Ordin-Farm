<script>
	import { onMount } from "svelte";
	import Data from "./Lib/Data.svelte";
	import Login from "./Lib/Login.svelte";
	import { user, dbUser , tab} from "./stores";
	import Settings from "./Lib/Settings.svelte";
	import Workers from "./Lib/Workers.svelte";
	import Home from "./Lib/Home.svelte";

	onMount(() => {
		console.log($user);
		console.log($dbUser);
	});
</script>

{#if $dbUser}
	<div>
		{#if $tab=='home'}
			<Home />
		{:else if $tab=='data'}
			<Data />
		{:else if $tab=='set'}
			<Settings />
		{:else if $tab=='find'}
			<Workers/>
		{/if}
		<div class="empty"></div>
	</div>
	<div class="nav">
		<svg
			on:click={()=>{$tab='home'}}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="-2 -2 24 24"
			width="24"
			fill="currentColor"
			><path
				d="M18 18V7.132l-8-4.8-8 4.8V18h4v-2.75a4 4 0 1 1 8 0V18h4zm-6 2v-4.75a2 2 0 1 0-4 0V20H2a2 2 0 0 1-2-2V7.132a2 2 0 0 1 .971-1.715l8-4.8a2 2 0 0 1 2.058 0l8 4.8A2 2 0 0 1 20 7.132V18a2 2 0 0 1-2 2h-6z"
			/></svg
		>
		<svg
			on:click={()=>{$tab='data'}}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="-5 -4 24 24"
			width="24"
			fill="currentColor"
			><path
				d="M1 0a1 1 0 0 1 1 1v14a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1zm12 4a1 1 0 0 1 1 1v10a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1zM7 8a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1z"
			/></svg
		>
		<svg
			on:click={()=>{$tab='find'}}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="-2 -2 24 24"
			width="24"
			fill="currentColor"
			><path
				d="M3.534 10.07a1 1 0 1 1 .733 1.86A3.579 3.579 0 0 0 2 15.26V17a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1.647a3.658 3.658 0 0 0-2.356-3.419 1 1 0 1 1 .712-1.868A5.658 5.658 0 0 1 14 15.353V17a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-1.74a5.579 5.579 0 0 1 3.534-5.19zM7 0a4 4 0 0 1 4 4v2a4 4 0 1 1-8 0V4a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0V4a2 2 0 0 0-2-2zm10 3h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0V7h-2a1 1 0 0 1 0-2h2V3a1 1 0 0 1 2 0v2z"
			/></svg
		>
		<svg
			on:click={()=>{$tab='set'}}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="-2 -2 24 24"
			width="24"
			fill="currentColor"
			><path
				d="M20 8.163A2.106 2.106 0 0 0 18.926 10c0 .789.433 1.476 1.074 1.837l-.717 2.406a2.105 2.105 0 0 0-2.218 3.058l-2.062 1.602A2.104 2.104 0 0 0 11.633 20l-3.29-.008a2.104 2.104 0 0 0-3.362-1.094l-2.06-1.615A2.105 2.105 0 0 0 .715 14.24L0 11.825A2.106 2.106 0 0 0 1.051 10C1.051 9.22.63 8.54 0 8.175L.715 5.76a2.105 2.105 0 0 0 2.207-3.043L4.98 1.102A2.104 2.104 0 0 0 8.342.008L11.634 0a2.104 2.104 0 0 0 3.37 1.097l2.06 1.603a2.105 2.105 0 0 0 2.218 3.058L20 8.162zM14.823 3.68c0-.063.002-.125.005-.188l-.08-.062a4.103 4.103 0 0 1-4.308-1.428l-.904.002a4.1 4.1 0 0 1-4.29 1.43l-.095.076A4.108 4.108 0 0 1 2.279 7.6a4.1 4.1 0 0 1 .772 2.399c0 .882-.28 1.715-.772 2.4a4.108 4.108 0 0 1 2.872 4.09l.096.075a4.104 4.104 0 0 1 4.289 1.43l.904.002a4.1 4.1 0 0 1 4.307-1.428l.08-.062A4.108 4.108 0 0 1 17.7 12.4a4.102 4.102 0 0 1-.773-2.4c0-.882.281-1.716.773-2.4a4.108 4.108 0 0 1-2.876-3.919zM10 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
			/></svg
		>
	</div>
{:else}
	<Login />
{/if}

<style>
	.empty{
		height: 50px;
	}
	.nav {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		height: 50px;
		background-color: #141414;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 1;
		font-size: 1.8em;
	}
</style>
