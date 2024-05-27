<script>
	import { tweened } from 'svelte/motion'
	import { cubicOut } from 'svelte/easing'
	import { observer } from '$lib/utils.js'

	export let items = []

	const tweenOptions = {
		duration: 2000,
		easing: cubicOut,
	}

	const value0 = tweened(0, tweenOptions)
	const value1 = tweened(0, tweenOptions)
	const value2 = tweened(0, tweenOptions)
	const value3 = tweened(0, tweenOptions)
	const value4 = tweened(0, tweenOptions)
	const value5 = tweened(0, tweenOptions)

	const callbacks = {
		in: () => {
			value0.set(+items[0].title)
			value1.set(+items[1].title)
			value2.set(+items[2].title)
			value3.set(+items[3].title)
			value4.set(+items[4].title)
			value5.set(+items[5].title)
		},
		out: () => {
			value0.set(0)
			value1.set(0)
			value2.set(0)
			value3.set(0)
			value4.set(0)
			value5.set(0)
		},
	}
</script>

<section class="full-width">
	<div class="inner auto-grid" use:observer={callbacks}>
		{#each items as { title, content }, idx}
			<div class="item">
				<!-- <div class="heading">{title} M</div> -->
				{#if idx === 0}
					<div class="heading">{$value0.toFixed(1)} M</div>
				{/if}
				{#if idx === 1}
					<div class="heading">{$value1.toFixed(1)} M</div>
				{/if}
				{#if idx === 2}
					<div class="heading">{$value2.toFixed(1)} M</div>
				{/if}
				{#if idx === 3}
					<div class="heading">{parseInt($value3)} M</div>
				{/if}
				{#if idx === 4}
					<div class="heading">{$value4.toFixed(1)} M</div>
				{/if}
				{#if idx === 5}
					<div class="heading">${parseInt($value5)} B</div>
				{/if}
				<div class="content">{@html content}</div>
			</div>
		{/each}
	</div>
</section>

<style>
	section {
		padding-block-end: var(--size-6);
		background-color: white;
	}

	.inner {
		gap: var(--size);
		font-weight: 400;
	}

	.item {
		aspect-ratio: 1;
		display: grid;
		padding: var(--size-2);
		background-color: var(--red);
		color: white;
		border-radius: var(--size);
		box-shadow: 2px 2px 6px #bebebe;
	}

	.heading {
		font-size: var(--size-4);
		font-weight: 700;
	}

	.content {
		margin-block-start: auto;
	}

	.content :global(.italic) {
		font-weight: 300;
		font-style: italic;
	}
</style>
