<script>
	import Title from './Title.svelte'
	import Victims from './Victims.svelte'
	import TwoColumn from '$lib/TwoColumn.svelte'
	import Collaboration from './Collaboration.svelte'
	import Plan from './Plan.svelte'
	import Support from './Support.svelte'
	import Download from './Download.svelte'
</script>

<svelte:head>
	<title>Our Story - Fight Human Trafficking – Share The Signal</title>
	<meta name="description" content="At Share The Signal, our heroes are individuals who seek to end human trafficking and empower victims. Fight Human Trafficking, Save Lives.">
</svelte:head>

<Title />
<Victims />
<TwoColumn
	title="Our Role"
	content="<span class='bold'>Share The Signal</span> serves as a <span class='bold'>compassionate and knowledgeable guide</span> in the fight against human trafficking."
	src="/story/hands-holding-each-other-support.jpg"
	className="our-role"
/>
<Collaboration />
<Plan />
<Support />
<Download />
