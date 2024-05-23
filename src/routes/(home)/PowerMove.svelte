<script>
	import Downloads from '$lib/icons/Downloads.svelte'
	import Eyes from '$lib/icons/Eyes.svelte'
	import Bang from '$lib/icons/Bang.svelte'
	import Heart from '$lib/icons/Heart.svelte'
	import Share from '$lib/icons/Share.svelte'
	import Shield from '$lib/icons/Shield.svelte'
</script>

<section class="space">
	<h2>Your power move against Human Trafficking</h2>

	<div>
		<div class="step"><span class="bold">STEP 1:</span> Learn & Spot</div>
		<div class="item flow">
			<Downloads />
			<h3>Download the Guide</h3>
			<p>Quick start with essential knowledge.</p>
			<a href="/">Download here</a>
		</div>

		<div class="item flow">
			<Eyes />
			<h3>Spot the Signs</h3>
			<p class="balance">Recognize distress signals in everyday encounters.</p>
			<a href="/">View video here</a>
		</div>
	</div>
</section>

<section class="space">
	<div>
		<div class="step"><span class="bold">STEP 2:</span> Act & Report</div>
		<div class="item flow">
			<Bang />
			<h3>Report & Rescue</h3>
			<p>See something? Say something. Your call can save lives.</p>
		</div>

		<div class="item flow">
			<Shield />
			<h3>Advocate for Change</h3>
			<p class="balance">Push for policies that protect and empower survivors.</p>
		</div>
	</div>
</section>

<section class="space">
	<div>
		<div class="step"><span class="bold">STEP 3:</span> Amplify & Support</div>
		<div class="item flow">
			<Heart />
			<h3>Donate</h3>
			<p>Fuel our fight. Every dollar extends our reach and rescues more lives.</p>
			<a href="/donate">Donate now</a>
		</div>

		<div class="item flow">
			<Share />
			<h3>Share</h3>
			<p class="balance">
				Blast our message on your social. More eyes = more awareness = more lives saved.
			</p>
			<a href="/">Share on your social</a>
		</div>
	</div>
</section>

<style>
	section > div {
		position: relative;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		background-color: white;
		box-shadow: 0 1px 13px #e9e9e9;
		border-radius: var(--size-0-5);
    
    @media (width > 32rem) {
      gap: var(--size-6);
    }
	}

	.space {
		padding-block: var(--size-3);
	}

	h2 {
		margin-block-start: var(--size-2);
		margin-block-end: var(--size-3);
		color: var(--teal);
		text-align: center;
	}

	.step {
		width: 20rem;
		position: absolute;
		top: calc(var(--size-1-5) * -1);
		padding-block: var(--size-0-5);
		background-color: var(--teal);
		color: white;
		font-size: var(--size-1-5);
		font-size: var(--size-1-5);
		font-family: 600;
		text-align: center;
		border-radius: var(--size-0-5);
	}

	.item {
		max-width: 16rem;
    padding-block: var(--size-3);
		text-align: center;

		@media (width > 32rem) {
			padding-block: var(--size-6);
		}
	}

	.item a {
		display: inline-block;

		&:hover {
			text-decoration: none;
		}
	}
</style>
