<script>
	export let items = []
</script>

<section class="space full-width flow">
	<h2>Three Simple Steps to Take Action</h2>

	<div class="auto-grid">
		{#each items as { title, content }}
			<div class="card flow">
				<div class="h3">{title}</div>
				<p>{content}</p>
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
	}
</style>
