<script>
	import Hero from '$lib/Hero.svelte'
	import ResourcesTrustedGuide from '$lib/Resources/ResourcesTrustedGuide.svelte'
	import ResourcesExplore from '$lib/Resources/ResourcesExplore.svelte'
	import ResourcesSteps from '$lib/Resources/ResourcesSteps.svelte'
	import ResourcesCombating from '$lib/Resources/ResourcesCombating.svelte'
	import TwoColumn from '$lib/TwoColumn.svelte'
	import ResourcesFailure from '$lib/Resources/ResourcesFailure.svelte'
	import ResourcesDifference from '$lib/Resources/ResourcesDifference.svelte'
</script>

<Hero
	lead="Resources for Human Trafficking Awareness and Support"
	main="Are you deeply concerned about human trafficking and its impact on individuals, communities, and society?"
	description="Despite increased awareness, human trafficking remains a pervasive global issue, leaving victims vulnerable and unable to seek help due to a lack of comprehensive information and support resources."
	src="/resources/group-therapy-session.jpg"
/>

<ResourcesTrustedGuide />

<ResourcesExplore />

<ResourcesSteps />

<ResourcesCombating />

<TwoColumn
	title="Become a Powerful Advocate"
	content="By utilizing our resources and taking action, you become a powerful advocate in the fight against human trafficking, contributing to the prevention of exploitation and the empowerment of victims."
	src="/resources/women-hugging.jpg"
/>

<ResourcesFailure />

<ResourcesDifference />

<style>
	:global(.hero .inner) {
		max-width: 52rem !important;
	}

	:global(.image) {
		background-position: 70% 0%;
    border-image: fill 0 linear-gradient(90deg, #000f, transparent);
	}
</style>
