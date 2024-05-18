<section class="space full-width">
	<div class="inner">
		<div class="flow">
			<h2>Impact of Your Support</h2>
			<p class="h3">
				Your support empowers victims to seek help, escape dangerous situations, and
				rebuild their lives free from exploitation.
			</p>
			<a href="/" class="button">Donate now</a>
		</div>
		<div class="image-container">
      <img class="back" src="/resources/group-therapy-session.jpg" alt="brunette woman" />
      <img class="front" src="/involved/brunette-woman.jpg" alt="brunette woman" />
		</div>
	</div>
</section>

<style>
	section {
    padding-block-start: calc(var(--size-2) * 5);
		background-color: white;
	}

	.inner {
		display: grid;
		gap: var(--size-4);

		@media (width > 48rem) {
			grid-template-columns: repeat(2, 1fr);
			/* align-items: center; */
		}
	}

	h2 {
		color: var(--red);
	}

	.button {
		background-color: black;
		color: white;
	}

	img {
		aspect-ratio: 4/3;
		object-fit: cover;
		border-radius: var(--size-0-5);
	}

  .image-container {
    position: relative;
    isolation: isolate;
  }
  
  .back {
    display: none;
    
    @media (width > 64rem) {
      display: block;
      position: absolute;
      left: var(--size-1-5);
      bottom: var(--size-1-5);
      z-index: -1;
      left: var(--size-4);
      bottom: var(--size-4);
    }
  }
</style>
