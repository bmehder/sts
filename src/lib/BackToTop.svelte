<script>
	import { fade } from 'svelte/transition'

	export let threshold = 1000

	const scrollToTop = () => window.scrollTo(0, 0)

	let scrollY
</script>

<svelte:window bind:scrollY />

{#if scrollY > threshold}
	<button transition:fade on:click={scrollToTop}>
		&#8963;
	</button>
{/if}

<style>
	button {
    width: var(--size-3);
    height: var(--size-3);
    display: grid;
    place-items: center;
		position: fixed;
		right: 2rem;
		bottom: 2rem;
		padding: 0;
    aspect-ratio: 1;
		color: #545454;
    font-size: 1.5rem;
    border: 3px solid #545454;
		border-radius: 50%;
		transition: scale 150ms ease;
	}

	button:hover {
		outline: none;
		scale: 0.95;
	}
</style>