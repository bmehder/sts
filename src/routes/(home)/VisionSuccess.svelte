<script>
	export let items = []
</script>

<section class="space full-width">
	<div class="intro flow">
		<h2 class="balance">
			What If You Could Stop Trafficking—Before It Starts?
		</h2>
		<h3 class="balance" style="color: var(--teal);">
			You can.
			When people understand grooming, they make different choices.
			They ask the right questions.
			They intervene sooner.
			That’s the moment everything changes.
		</h3>
		<p>This is what we’re doing by simply educating ourselves.</p>
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
