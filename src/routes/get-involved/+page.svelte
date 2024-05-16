<script>
	import Hero from '$lib/Hero.svelte'
	import Understanding from './Understanding.svelte'
	import TwoColumn from '$lib/TwoColumn.svelte'
	import Collaboration from './Collaboration.svelte'
	import Action from './Action.svelte'
	import Download from './Download.svelte'
	import CenteredHero from '$lib/CenteredHero.svelte'
	import Impact from './Impact.svelte'
	import Awareness from './Awareness.svelte'
	import Stories from './Stories.svelte'

	export let data
</script>

<Hero
	lead="Get Involved with Share The Signal"
	main="Join Us in Making a Difference"
	description="You, our valued supporter, have the power to make a difference in the lives of victims and survivors of human trafficking."
  src="/involved/get-involved-hero.jpg"
/>

<Understanding />

<TwoColumn
	title="Our Role"
	content="Share The Signal serves as your <span class='bold'>guide in the fight against human trafficking</span>, offering empathy and authority in addressing this critical issue.<br /><br />We understand the challenges and complexities victims face, and we're here to provide support and resources to help them find safety."
	src="involved/sad-woman.jpg"
/>

<Collaboration />

<Action />

<Download />

<CenteredHero
	lead="Vision of Change"
	main="Imagine a world where every individual has the knowledge, resources, and support to seek help and reclaim their autonomy. "
	description="By getting involved with Share The Signal, you're helping to create that world."
  src="/involved/latin-people-training-outdoors.jpg"
/>

<Impact />

<Awareness />

<Stories quotes={data.quotes} />

<style>
	:global(.image) {
		background-position: 70% 0%;
    border-image: fill 0 linear-gradient(90deg, #000f, transparent);
	}
</style>