<script>
	export let items = []
</script>

<section class="space full-width flow">
	<h2>Take Action Today</h2>
	<p class="tagline">
		Here's a simple, step-by-step plan for how you can get involved and make a difference
	</p>

	<div class="auto-grid">
		{#each items as { title, content }}
			<div class="card flow">
				<div class="h3">{title}</div>
				<p>{content}</p>
				<a href="/contact" class="button">Take the first step now</a>
			</div>
		{/each}
	</div>
</section>

<style>
	section {
		background-color: var(--red);
		color: white;
		text-align: center;
	}

	.tagline {
		max-width: 24rem;
		margin-inline: auto;
	}

	.card {
		display: grid;
		padding: var(--size-2);
		background-color: white;
		color: black;
		text-align: left;
		border-radius: var(--size);
		box-shadow: 0 1px 13px rgba(0, 0, 0, 0.1);

		& .h3 {
			color: var(--red);
			font-weight: 600;
		}

		& p {
			padding: var(--size);
		}

		& .button {
			display: block;
			margin-block: auto;
			margin-inline: auto;
			background-color: black;
			color: white;
			text-align: center;

			&:hover {
				background-color: var(--teal);
			}
		}
	}
</style>
