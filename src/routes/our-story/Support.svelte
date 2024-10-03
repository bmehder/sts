<section class="space full-width">
	<div class="inner">
		<div class="flow text">
			<div class="h2">
				<span>Support our mission</span> by donating to combat human trafficking and provide
				resources to empower victims.
			</div>
			<a class="button" href="/donate" target="_blank">Donate now</a>
		</div>
		<div class="image">
			<img
				class="square"
				src="/story/support-our-mission.jpg"
				alt="woman's face close up"
			/>
		</div>
	</div>
</section>

<style>
	section {
		background-color: black;
		color: white;
	}

	.h2 {
		line-height: 1.4;
	}

	.h2 span {
		color: var(--teal);
	}

	.text {
		padding-inline: var(--size-2);

		@media (width < 49rem) {
			text-align: center;
			order: 1;
		}
	}

	.image {
		padding-inline: var(--size-2);
	}

	.button {
		&:hover {
			background-color: var(--teal);
			color: white;
		}
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
