<script>
	import Hero from '$lib/Hero.svelte'
	import InvolvedUnderstanding from '$lib/Involved/InvolvedUnderstanding.svelte'
	import TwoColumn from '$lib/TwoColumn.svelte'
	import InvolvedCollaboration from '$lib/Involved/InvolvedCollaboration.svelte'
	import InvolvedAction from '$lib/Involved/InvolvedAction.svelte'
	import InvolvedDownload from '$lib/Involved/InvolvedDownload.svelte'
	import CenteredHero from '$lib/CenteredHero.svelte'
	import InvolvedImpact from '$lib/Involved/InvolvedImpact.svelte'
	import InvolvedAwareness from '$lib/Involved/InvolvedAwareness.svelte'
	import InvolvedStories from '$lib/Involved/InvolvedStories.svelte'

	export let data
</script>

<Hero
	lead="Get Involved with Share The Signal"
	main="Join Us in Making a Difference"
	description="You, our valued supporter, have the power to make a difference in the lives of victims and survivors of human trafficking."
  src="/involved/get-involved-hero.jpg"
/>

<InvolvedUnderstanding />

<TwoColumn
	title="Our Role"
	content="Share The Signal serves as your <span class='bold'>guide in the fight against human trafficking</span>, offering empathy and authority in addressing this critical issue.<br /><br />We understand the challenges and complexities victims face, and we're here to provide support and resources to help them find safety."
	src="/involved/sad-woman.jpg"
/>

<InvolvedCollaboration />

<InvolvedAction />

<InvolvedDownload />

<CenteredHero
	lead="Vision of Change"
	main="Imagine a world where every individual has the knowledge, resources, and support to seek help and reclaim their autonomy. "
	description="By getting involved with Share The Signal, you're helping to create that world."
  src="/involved/latin-people-training-outdoors.jpg"
/>

<InvolvedImpact />

<InvolvedAwareness />

<InvolvedStories quotes={data.quotes} />

<style>
	:global(.image) {
		background-position: 70% 0%;
    border-image: fill 0 linear-gradient(90deg, #000f, transparent);

	}
</style>