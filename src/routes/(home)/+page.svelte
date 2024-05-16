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

<Hero
	lead="Fight Trafficking, Save Lives:"
	main="Be the Force of Change."
	description="Transform lives by spotting the signs and taking action. Your involvement directly contributes to rescues and recovery — <span>be part of the solution</span>."
	src="/home/home-hero.jpg"
/>
<Intro />
<Stats />
<PowerMove />
<TakeAction />
<VisionSuccess />
<BetterWorld />
<WhatHappens />
<LivesChanged quotes={data.quotes} />
<JoinMovement />
<StayInformed />
<PreFooter />
