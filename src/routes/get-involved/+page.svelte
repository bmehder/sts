<script>
	import Hero from '$lib/Hero.svelte'
	import Understanding from './Understanding.svelte'
	import Role from './Role.svelte'
	import Collaboration from './Collaboration.svelte'
	import Action from './Action.svelte'
	import Download from './Download.svelte'
	import Impact from './Impact.svelte'
	import Awareness from './Awareness.svelte'
	import Stories from './Stories.svelte'

	export let data
</script>

<svelte:head>
	<title>Get Involved - Fight Human Trafficking – Share The Signal</title>
	<meta name="description" content="Share The Signal. You, our valued supporter, have the power to make a difference in the lives of victims and survivors of human trafficking.">
</svelte:head>

<Hero
	lead="Get Involved with Share The Signal"
	main="Join Us in Making a Difference"
	description="You, our valued supporter, have the power to make a difference in the lives of victims and survivors of human trafficking."
  src="/involved/get-involved-hero.jpg"
	width="32"
	overlayColorStart="#0006"
	overlayColorEnd="transparent"
/>

<Understanding />

<Role />

<Collaboration />

<Action items={data.actions} />

<Download />

<Hero
	lead="Vision of Change"
	main="Imagine a world where every individual has the knowledge, resources, and support to seek help and reclaim their autonomy."
	description="By getting involved with Share The Signal, you're helping to create that world."
	src="/involved/latin-people-training-outdoors.jpg"
	width="54"
	isCentered={true}
	isDownload={false}
	isBalance={false}
	leadColor="var(--yellow)"
	overlayColorStart="#0006"
	overlayColorEnd="#0006"
/>

<Impact />

<Awareness />

<Stories quotes={data.quotes} />

<style>
	:global(.image) {
		background-position: 75% 0%;
	}
</style>