<script>
	export let items = []
</script>

<section class="space full-width">
	<div class="intro flow">
		<h2 class="balance">
			Imagine a world where every attempt to enslave and exploit meets an unbreakable wall
			of informed guardians.<br /><span>That's the world you're helping to build.</span>
		</h2>
		<p>Here's the vision of success, painted with the strokes of your actions:</p>
	</div>

	<div class="grid">
		{#each items as { image, title, content, isBalance }}
			<div class="flow" style="background-image: url({image});">
				<h3 class:balance={isBalance}>{title}</h3>
				<p>{content}</p>
			</div>
		{/each}
	</div>
</section>

<style>
	section {
		background-color: white;
	}

	.intro {
		margin-block-end: var(--size-2);
		text-align: center;
	}

	h2 span {
		color: var(--teal);
	}

	.grid {
		gap: var(--size-0-5);
		font-weight: 400;

		@media (width > 40rem) {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	.grid div {
		display: grid;
		grid-template-rows: subgrid;
		grid-row: span 2;
		padding-block: var(--size-6);
		padding-inline: var(--size-4);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		color: white;
		border-image: fill 0 linear-gradient(#0005, #0009);
		box-shadow: 0 1px 13px #e9e9e9;

		@media (width < 32rem) {
			padding: var(--size-2);
		}
	}

	.grid div h3 {
		margin-block-start: auto;
	}

	h3 {
		font-weight: 600;
	}
</style>
