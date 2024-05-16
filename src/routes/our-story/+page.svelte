<script>
	import Title from './Title.svelte'
	import Victims from './Victims.svelte'
	import TwoColumn from '$lib/TwoColumn.svelte'
	import Collaboration from './Collaboration.svelte'
	import Plan from './Plan.svelte'
	import Support from './Support.svelte'
	import Download from './Download.svelte'
</script>

<Title />
<Victims />
<TwoColumn
	title="Our Role"
	content="<span class='bold'>Share The Signal</span> serves as a <span class='bold'>compassionate and knowledgeable guide</span> in the fight against human trafficking."
	src="/story/hands-holding-each-other-support.jpg"
/>
<Collaboration />
<Plan />
<Support />
<Download />
