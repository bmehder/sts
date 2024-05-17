<script>
	import { fly } from 'svelte/transition'
	export let quote = ''
	export let cite = ''
	export let direction = ''

	const transitions = {
		forward: {
			in: { x: -200, delay: 300 },
			out: { x: 200, duration: 250, delay: 0 },
		},
		reverse: {
			in: { x: 200, delay: 300 },
			out: { x: -200, duration: 250, delay: 0 },
		},
	}
</script>

<div class="quote">
	{#key quote}
		<div
			class="flow"
			in:fly={direction === 'forward' ? transitions.forward.in : transitions.reverse.in}
			out:fly={direction === 'reverse' ? transitions.reverse.out : transitions.forward.out}
		>
			<p>"{quote}"</p>
			<div class="cite">{cite}</div>
		</div>
	{/key}
</div>

<style>
	.quote {
		height: 150px;
		overflow: hidden;
	}

	.quote p {
		font-style: italic;
	}

	.quote .cite {
		color: var(--red);
	}
</style>
