<section class="space full-width">
	<div class="inner">
		<div>
			<img
        class="square"
				src="/resources/women-hugging.jpg"
				alt="two women hugging"
			/>
		</div>
		<div class="flow text">
			<h2>Become a Powerful Advocate</h2>
			<p class="h3">
				By utilizing our resources and taking action, you become a powerful advocate in the fight against human trafficking, contributing to the prevention of exploitation and the empowerment of victims.
			</p>
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
		line-height: 1.4;
	}

	.text {
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
