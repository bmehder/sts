<script>
	import Hero from '$lib/Hero.svelte'
	import InvolvedUnderstanding from '$lib/Involved/InvolvedUnderstanding.svelte'
	import TwoColumn from '$lib/TwoColumn.svelte'
	import InvolvedCollaboration from '$lib/Involved/InvolvedCollaboration.svelte'
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
<style>
	:global(.image) {
		background-position: 70% 0%;
    border-image: fill 0 linear-gradient(90deg, #000f, transparent);

	}
</style>