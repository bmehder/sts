<section class="full-width">
	<div class="inner space">
		<div class="flow overlay">
			<h1 class="title">Our Work</h1>
			<div class="tagline h2 balance">
				We're on a mission to disrupt the cycle of human trafficking through
				awareness, education, and action. Our journey started with a vision — <span
					>a late-night dream that turned into a powerful tool for change</span
				> — and has grown into a movement that is making waves across the globe.
			</div>
			<!-- <div><a href="/get-involved" class="button">Get Involved</a></div> -->
		</div>
	</div>
</section>

<style>
	section {
		background-image: url('/our-work/our-work-hero.jpg');
		/* background-image: url('https://picsum.photos/1200/767'); */
		border-image: fill 0 linear-gradient(90deg, #0003, #0003);
		background-size: cover;
		color: white;
		text-align: center;
	}

	.overlay {
		max-width: max-content;
		margin-inline: auto;
		padding: var(--size-3);
		border-image: fill 0 linear-gradient(90deg, #0006, #0006);
		text-shadow: 0 0 1px black;
		backdrop-filter: blur(10px);
		box-shadow:
			0 -1px 2px 0 hsl(220 40% 2% / calc(10% + 2%)),
			0 3px 2px -2px hsl(220 40% 2% / calc(10% + 3%)),
			0 7px 5px -2px hsl(220 40% 2% / calc(10% + 3%)),
			0 12px 10px -2px hsl(220 40% 2% / calc(10% + 4%)),
			0 22px 18px -2px hsl(220 40% 2% / calc(10% + 5%)),
			0 41px 33px -2px hsl(220 40% 2% / calc(10% + 6%)),
			0 100px 80px -2px hsl(220 40% 2% / calc(10% + 7%));
	}

	.tagline {
		max-width: 46rem;
		margin-inline: auto;
		font-weight: 400;
		line-height: 1.4;
		text-align: center;
	}

	.tagline span {
		color: var(--yellow);
		font-weight: bold;
	}
</style>
