<section class="full-width">
	<div class="inner">
		<div class="flow text">
			<p class="h2">
				<span>Support our mission</span> by donating to combat human trafficking and provide resources
				to empower victims.
			</p>
      <a href="/" class="button">Donate now</a>
		</div>
		<div class="image"></div>
	</div>
</section>

<style>
	section {
		background-color: black;
		color: white;
	}

	.inner {
		display: grid;
		gap: var(--size-3);
    
		& .image {
      width: 100%;
			height: 100%;
			background-image: url('/story/support-our-mission.jpg');
      border-image: fill 0 linear-gradient(90deg, transparent, #000f);
			background-size: cover;
      background-repeat: no-repeat;
		}
    
		& .text {
      padding-block: calc(var(--size-2) * 4);
			padding-inline: var(--size-2);
		}
    
		& .h2 {
      font-size: var(--size-2);
			line-height: 1.5;

      & span {
        color: var(--teal)
      }
		}

		& p {
			font-weight: 400;
			line-height: 1.5;
		}

		@media (width > 48rem) {
			grid-template-columns: repeat(2, 1fr);
			align-items: center;
		}
	}
</style>
