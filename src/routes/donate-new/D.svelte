<section class="breakout">
	<div class="inner">
		<div class="flow text">
			<h2 class="balance">Real Impact</h2>
			<blockquote>
				"Someone recognized the distress signal I learned here. That moment saved my
				life."
			</blockquote>
			<p>– Elena, survivor</p>
			<p><strong>Thousands impacted. Millions to go.</strong> Help us reach them.</p>
			<a
				href="https://www.paypal.com/donate/?hosted_button_id=N6FYJYP5NU2XQ"
				class="button"
				target="_blank">Donate Now</a
			>
		</div>
		<div>
			<img
				src="/our-work/taking-our-message-global.jpg"
				alt="hands holding each other for support"
			/>
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
		/* padding-inline: var(--size-2); */
		font-size: calc(var(--size) * 1.2);
		line-height: 1.7;
	}

	.inner {
		display: grid;
		gap: var(--size-3);

		@media (width >= 49rem) {
			grid-template-columns: repeat(2, 1fr);
			align-items: center;
			padding: var(--size-2);
		}

		& .text {
			@media (width < 49rem) {
				grid-column-start: 1;
				grid-row: 2;
			}
		}

		& .image-wrapper {
			@media (width < 49rem) {
				grid-column-start: 1;
				grid-row: 1;
			}
		}
	}

	blockquote {
		font-style: italic;
	}

	.button {
		background-color: var(--yellow);
	}

	.button:hover {
		background-color: white;
	}
</style>
