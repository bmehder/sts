<section class="space full-width flow">
	<h2>The Plan</h2>
	<div class="h2 balance">
		Our approach involves a simple, step-by-step plan to combat human trafficking and
		abduction
	</div>
	<div class="space cards">
		<div class="card flow">
			<div class="h3">#1</div>
			<p>Educate individuals about distress signals and how to recognize and use them.</p>
		</div>
		<div class="card flow">
			<div class="h3">#2</div>
			<p>Provide resources and support to victims seeking assistance.</p>
		</div>
		<div class="card flow">
			<div class="h3">#3</div>
			<p>Collaborate with law enforcement and other organizations to ensure victims' safety and recovery.</p>
		</div>
		<div class="card flow">
			<div class="h3">#4</div>
			<p>Advocate for policy changes to prevent human trafficking and support survivors.</p>
		</div>
	</div>
</section>

<style>
	section {
		background-color: var(--yellow);
		color: white;
		text-align: center;
	}

	@media (width < 49rem) {
		.space {
			padding-block: var(--size-3);
		}
	}

	.cards {
		display: grid;
		gap: var(--size);
		grid-template-columns: repeat(2, 1fr);

		@media (width > 49rem) {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	.card {
		padding: var(--size-2);
		background-color: white;
		color: black;
		text-align: left;
		border-radius: var(--size);
		box-shadow: 0 1px 13px rgba(0, 0, 0, 0.1);

		& .h3 {
			color: var(--yellow);
		}

		/* & p {
			@media (width > 49rem) {
				padding: var(--size);
			}
		} */
	}
</style>
