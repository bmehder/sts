<script>
	import Title from './Title.svelte'
	import Victims from './Victims.svelte'
	import Role from './Role.svelte'
	import Collaboration from './Collaboration.svelte'
	import Plan from './Plan.svelte'
	import Support from './Support.svelte'
	import Download from './Download.svelte'

	export let data
</script>

<svelte:head>
	<title>Our Story - Fight Human Trafficking – Share The Signal</title>
	<meta name="description" content="At Share The Signal, our heroes are individuals who seek to end human trafficking and empower victims. Fight Human Trafficking, Save Lives.">
</svelte:head>

<Title />
<Victims />
<Role />
<Collaboration />
<Plan items={data.plans} />
<Support />
<Download />
