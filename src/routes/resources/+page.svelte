<script>
	import Hero from '$lib/Hero.svelte'
	import TrustedGuide from './TrustedGuide.svelte'
	import Explore from './Explore.svelte'
	import Steps from './Steps.svelte'
	import Combating from './Combating.svelte'
	import TwoColumn from '$lib/TwoColumn.svelte'
	import Failure from './Failure.svelte'
	import Difference from './Difference.svelte'
</script>

<Hero
	lead="Resources for Human Trafficking Awareness and Support"
	main="Are you deeply concerned about human trafficking and its impact on individuals, communities, and society?"
	description="Despite increased awareness, human trafficking remains a pervasive global issue, leaving victims vulnerable and unable to seek help due to a lack of comprehensive information and support resources."
	src="/resources/group-therapy-session.jpg"
	width="52"
/>

<TrustedGuide />

<Explore />

<Steps />

<Combating />

<TwoColumn
	title="Become a Powerful Advocate"
	content="By utilizing our resources and taking action, you become a powerful advocate in the fight against human trafficking, contributing to the prevention of exploitation and the empowerment of victims."
	src="/resources/women-hugging.jpg"
/>

<Failure />

<Difference />

<style>
	:global(.image) {
		background-position: 70% 0%;
    border-image: fill 0 linear-gradient(90deg, #000f, transparent);
	}
</style>
