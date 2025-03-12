<section class="full-width">
	<div class="inner space">
		<div class="flow overlay">
			<h1 class="title">Donate</h1>
			<div class="tagline h2 balance">
				Grooming is the Silent Gateway to Trafficking
			</div>
			<div class="tagline h3 balance">
				It’s happening in schools, workplaces, and even suburban homes—before anyone
				realizes the danger. Your donation fuels prevention. We’re building
				awareness, education, and action against grooming. Be part of the foundation.
				Every dollar is an investment in safety.
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
		/* --overlay-color: #49a6b666; */
		--overlay-color: #000a;
		max-width: max-content;
		margin-inline: auto;
		padding: var(--size-3);
		/* border-image: fill 0 linear-gradient(90deg, #000a, #000a); */
		border-image: fill 0
			linear-gradient(90deg, var(--overlay-color), var(--overlay-color));
		/* text-shadow: 0 0 4px rgba(0, 0, 0, 0.5); */
		backdrop-filter: blur(var(--size-2));
		/* background-color: #0001; */
		box-shadow:
			0 -1px 2px 0 hsl(220 40% 2% / calc(10% + 2%)),
			0 3px 2px -2px hsl(220 40% 2% / calc(10% + 3%)),
			0 7px 5px -2px hsl(220 40% 2% / calc(10% + 3%)),
			0 12px 10px -2px hsl(220 40% 2% / calc(10% + 4%)),
			0 22px 18px -2px hsl(220 40% 2% / calc(10% + 5%)),
			0 41px 33px -2px hsl(220 40% 2% / calc(10% + 6%)),
			0 100px 80px -2px hsl(220 40% 2% / calc(10% + 7%));
	}

	h1 {
		color: var(--yellow);
	}

	.h2 {
		color: var(--teal);
	}

	.tagline {
		max-width: 46rem;
		margin-inline: auto;
		font-weight: 400;
		line-height: 1.5;
		text-align: center;
	}

	.tagline span {
		color: var(--yellow);
		/* font-weight: bold; */
	}
</style>
