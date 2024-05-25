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
	<title>Home - Fight Human Trafficking, Save Lives – Share The Signal</title>
	<meta name="description" content="At Share The Signal, our mission is clear: to end human trafficking by empowering you with knowledge, tools, and the courage to act when you see the signs.">
</svelte:head>

<Hero
	lead="Fight Trafficking, Save Lives:"
	main="Be the Force of Change."
	description="Transform lives by spotting the signs and taking action. Your involvement directly contributes to rescues and recovery — <span>be part of the solution</span>."
	src="/home/home-hero.jpg"
	overlayColorStart="#0006"
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
