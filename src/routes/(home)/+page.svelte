<script>
	import Hero from '$lib/Hero.svelte'
	import Intro from './Intro.svelte'
	import Stats from './Stats.svelte'
	import PowerMove from './PowerMove.svelte'
	import TakeAction from './TakeAction.svelte'
	import VisionSuccess from './VisionSuccess.svelte'
	import BetterWorld from './BetterWorld.svelte'
	import WhatHappens from './WhatHappens.svelte'
	import LivesChanged from './LivesChanged.svelte'
	import JoinMovement from './JoinMovement.svelte'
	import StayInformed from './StayInformed.svelte'
	import PreFooter from './PreFooter.svelte'

	export let data
</script>

<svelte:head>
	<title>Home - The Unknowns of Human Trafficking – Share The Signal</title>
	<meta
		name="description"
		content="At Share The Signal, we provide preventative education on awareness and understanding of grooming, the often-overlooked precursor to human trafficking.
"
	/>
</svelte:head>

<Hero
	main="Unmasking the Hidden Threats of <span style='color: var(--teal);'>Grooming</span>"
	description="The often-overlooked precursor to human trafficking."
	src="/home/home-hero.jpg"
	overlayColorStart="#000a"
	overlayColorEnd="transparent"
/>
<Intro />
<Stats items={data.stats} />
<PowerMove />
<TakeAction />
<VisionSuccess items={data.visionSuccess} />
<BetterWorld />
<WhatHappens />
<LivesChanged quotes={data.quotes} />
<JoinMovement />
<StayInformed />
<PreFooter />
