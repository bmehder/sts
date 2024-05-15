<script>
	import Hero from '$lib/Hero.svelte'
	import HomeIntro from '$lib/Home/HomeIntro.svelte'
	import HomeStats from '$lib/Home/HomeStats.svelte'
	import HomePowerMove from '$lib/Home/HomePowerMove.svelte'
	import HomeTakeAction from '$lib/Home/HomeTakeAction.svelte'
	import HomeVisionSuccess from '$lib/Home/HomeVisionSuccess.svelte'
	import HomeBetterWorld from '$lib/Home/HomeBetterWorld.svelte'
	import HomeWhatHappens from '$lib/Home/HomeWhatHappens.svelte'
	import HomeLivesChanged from '$lib/Home/HomeLivesChanged.svelte'
	import HomeJoinMovement from '$lib/Home/HomeJoinMovement.svelte'
	import HomeStayInformed from '$lib/Home/HomeStayInformed.svelte'
	import HomePreFooter from '$lib/Home/HomePreFooter.svelte'

	export let data
</script>

<Hero
	lead="Fight Trafficking, Save Lives:"
	main="Be the Force of Change."
	description="Transform lives by spotting the signs and taking action. Your involvement directly contributes to rescues and recovery — <span>be part of the solution</span>."
	src="/home/home-hero.jpg"
/>
<HomeIntro />
<HomeStats />
<HomePowerMove />
<HomeTakeAction />
<HomeVisionSuccess />
<HomeBetterWorld />
<HomeWhatHappens />
<HomeLivesChanged quotes={data.quotes} />
<HomeJoinMovement />
<HomeStayInformed />
<HomePreFooter />
