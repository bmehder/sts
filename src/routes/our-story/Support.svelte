<section class="space full-width">
	<div class="inner">
		<div class="flow text">
			<h2>Our Role</h2>
			<p class="h3">
				<span class="bold">Share The Signal</span> serves as a
				<span class="bold">compassionate and knowledgeable guide</span> in the fight against
				human trafficking.
			</p>
			<a href="/" class="button">Donate now</a>
		</div>
		<div class="image">
			<img class="square" src="/story/support-our-mission.jpg" alt="woman's face close up" />
		</div>
	</div>
</section>

<style>
	section {
		background-color: black;
		color: white;
	}

	h2 {
		color: var(--teal);
	}

	.h3 {
		line-height: 1.7;
	}

	.text {
		padding-inline: var(--size-2);

		@media (width < 48rem) {
			order: 1;
		}
	}
	
	.image {
		padding-inline: var(--size-2);
	}

	.inner {
		display: grid;
		gap: var(--size-3);

		@media (width > 48rem) {
			grid-template-columns: repeat(2, 1fr);
			align-items: center;
		}
	}
</style>
