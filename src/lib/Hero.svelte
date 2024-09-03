<script>
	// export let lead = ''
	export let main = ''
	export let description = ''
	export let src = ''
	export let width = '25'
	// export let leadColor = 'var(--teal)'
	export let isCentered = false
	export let isDownload = true
	export let isButton = true
	export let isBalance = true
	// export let overlayColor = '#0002'
	export let overlayColorStart = '#0002'
	export let overlayColorEnd = '#0002'
</script>

<div
	class="hero full-width"
	style="background-image: url({src}); text-align:{isCentered &&
		'center'}; border-image: fill 0 linear-gradient(90deg, {overlayColorStart}, {overlayColorEnd});"
>
	<div
		class="inner fixed-flow"
		style="max-width: {width}rem; margin-inline:{isCentered && 'auto'};"
	>
		<!-- <div class="lead" style="color: {leadColor};">{lead}</div> -->
		<div class="main" class:balance={isBalance}>{@html main}</div>
		<div class="description">{@html description}</div>
		{#if isButton}
			<a href="/donate" class="button" target="_blank">Donate now</a>
		{/if}
	</div>
	{#if isDownload}
		<div class="free-guide">
			<a href="/guide-share-the-signal.pdf" target="_blank"
				>DOWNLOAD FREE GUIDE ON SIGNS OF MODERN DAY TRAFFICKING
			</a> – it's not what you think
		</div>
	{/if}
</div>

<style>
	.hero {
		/* border-image: fill 0 linear-gradient(transparent, #000a); */
		padding-block: var(--size-6);
		background-size: cover;
		background-position: center;
	}

	.inner {
		color: white;
	}

	/* .lead {
		color: var(--teal);
		font-size: var(--size-1-5);
		font-weight: 600;
		text-shadow: 1px 1px 1px #545454;
	} */

	.main {
		font-size: var(--size-3);
		font-weight: 600;
		line-height: 1.1;
	}

	.description {
		font-size: var(--size-1-5);
		font-weight: 300;

		& span {
			font-style: italic;
		}
	}

	.fixed-flow > * + * {
		margin-block-start: 1.5rem;
	}

	.free-guide {
		padding-block-start: var(--size-4);
		color: white;
		font-weight: 600;
		line-height: 1.5;

		& a {
			color: var(--yellow);

			&:hover {
				color: white;
			}
		}
	}

	.button:hover {
		background-color: var(--teal);
		color: white;
	}
</style>
