<section class="breakout">
	<div class="inner half-space">
		<div>
			<img
				src="/our-work/taking-our-message-global.jpg"
				alt="hands holding each other for support"
			/>
		</div>
		<div class="flow text">
			<h2>Taking Our Message Global</h2>
			<p>
				We’re not stopping at just one film. To ensure our message reaches as many
				people as possible, we’ve made the film available in Spanish and eight
				dialects from India.
			</p>
			<p>
				By breaking down language barriers, we’re extending our reach and empowering
				more communities to recognize and act on the signs of trafficking.
			</p>
			<a href="/donate/" class="button" target="_blank">Donate Now</a>
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

	.text {
		padding-inline: var(--size-2);
		font-size: calc(var(--size) * 1.2);
		line-height: 1.7;
	}

	.inner {
		display: grid;
		gap: var(--size);

		@media (width > 49rem) {
			grid-template-columns: repeat(2, 1fr);
			align-items: center;
		}
	}

	.button {
		background-color: var(--yellow);
	}

	.button:hover {
		background-color: white;
	}
</style>
