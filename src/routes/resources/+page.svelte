<script>
	import Hero from '$lib/Hero.svelte'
	import TrustedGuide from './TrustedGuide.svelte'
	import Explore from './Explore.svelte'
	import Steps from './Steps.svelte'
	import Combating from './Combating.svelte'
	import Advocate from './Advocate.svelte'
	import Failure from './Failure.svelte'
	import Difference from './Difference.svelte'

	export let data
</script>

<svelte:head>
	<title>Resources for Human Trafficking Awareness – Share The Signal</title>
	<meta name="description" content="Dive into our curated collection of articles, guides, videos, and toolkits to deepen your understanding of human trafficking, its signs, and its impact.">
</svelte:head>

<Hero
	lead="Resources for Human Trafficking Awareness and Support"
	main="Are you deeply concerned about human trafficking and its impact on individuals, communities, and society?"
	description="Despite increased awareness, human trafficking remains a pervasive global issue, leaving victims vulnerable and unable to seek help due to a lack of comprehensive information and support resources."
	src="/resources/group-therapy-session.jpg"
	isButton="{false}"
	isDownload="{false}"
	width="42"
	overlayColorStart="#0006"
	overlayColorEnd="transparent"
/>

<TrustedGuide />

<Explore />

<Steps items={data.steps} />

<Combating />

<Advocate />

<Failure />

<Difference />