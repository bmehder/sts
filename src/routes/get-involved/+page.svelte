<script>
	import Hero from '$lib/Hero.svelte'
	import Understanding from './Understanding.svelte'
	import TwoColumn from '$lib/TwoColumn.svelte'
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

<TwoColumn
	title="Our Role"
	content="Share The Signal serves as your <span class='bold'>guide in the fight against human trafficking</span>, offering empathy and authority in addressing this critical issue.<br /><br />We understand the challenges and complexities victims face, and we're here to provide support and resources to help them find safety."
	src="/involved/sad-woman.jpg"
	className="our-role"
/>

<Collaboration />

<Action />

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
    /* border-image: fill 0 linear-gradient(90deg, #000f, transparent); */
	}
</style>