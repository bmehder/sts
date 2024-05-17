<script>
	import { fade } from 'svelte/transition'
	import { closeModal } from 'svelte-modals'
	import Sveltetube from '$lib/Sveltetube.svelte'

	// provided by <Modals />
	export let isOpen

	// export let title
	// export let message

	const handleKeydown = evt => evt.key === 'Escape' && closeModal()
</script>

<svelte:window on:keydown={handleKeydown} />

{#if isOpen}
	<!-- <div
		role="dialog"
		class="modal"
		in:fade|global={{ duration: 200 }}
		out:fade|global={{ duration: 100 }}
	> -->
	<div
		class="modal"
		in:fade|global={{ duration: 200 }}
		out:fade|global={{ duration: 100 }}
	>
		<div class="contents">
			<Sveltetube />
			<!-- <h2>{title}</h2>
			<p>{message}</p>
			<div class="actions">
				<button on:click={closeModal}>OK</button>
			</div> -->
		</div>
	</div>
{/if}

<style>
	.modal {
		position: fixed;
		inset: 0;
		display: flex;
		justify-content: center;
		align-items: center;

		/* allow click-through to backdrop */
		pointer-events: none;
	}

	.contents {
		/* min-width: 240px; */
		min-width: 80%;
		border-radius: 6px;
		padding: 16px;
		background: white;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		pointer-events: auto;
	}

	/* h2 {
		text-align: center;
		font-size: 24px;
	}

	p {
		text-align: center;
		margin-top: 16px;
	}

	.actions {
		margin-top: 32px;
		display: flex;
		justify-content: flex-end;
	} */
</style>
