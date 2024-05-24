<section class="space full-width">
	<div class="inner">
		<div>
			<img
				src="/story/hands-holding-each-other-support.jpg"
				alt="hands holding each other for support"
			/>
		</div>
		<div class="flow text">
			<h2>Support our mission</h2>
			<p class="h3">
				Share The Signal serves as your <span class="bold"
					>guide in the fight against human trafficking</span
				>, offering empathy and authority in addressing this critical issue.<br /><br />We
				understand the challenges and complexities victims face, and we're here to provide
				support and resources to help them find safety.
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

		@media (width > 49rem) {
			grid-template-columns: repeat(2, 1fr);
			align-items: center;
		}
	}
</style>
