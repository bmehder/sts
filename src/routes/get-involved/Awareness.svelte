<section class="space full-width flow">
	<div class="h2 balance">
		Without awareness and action, victims may remain trapped in abusive situations,
		facing further exploitation and danger. Your involvement is crucial in preventing
		this outcome.
	</div>
	<div class="cta">
		<a class="button" href="/donate/" target="_blank">Donate now</a>
		<a class="download-link" href="/guide-share-the-signal.pdf" target="_blank"
			>Download free Guide</a
		>
	</div>
</section>

<style>
	section {
		background-color: var(--red);
		color: white;
		text-align: center;
	}

	.cta {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: var(--size-2);

		@media (width < 32rem) {
			flex-direction: column;
		}
	}

	.button:hover {
		background-color: var(--teal);
		color: white;
	}

	.download-link {
		color: white;

		&:hover {
			text-decoration: none;
		}
	}
</style>
