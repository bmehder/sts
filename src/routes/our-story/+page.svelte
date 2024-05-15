<script>
	import StoryTitle from '$lib/Story/StoryTitle.svelte'
	import StoryVictims from '$lib/Story/StoryVictims.svelte'
	import TwoColumn from '$lib/TwoColumn.svelte'
	import StoryCollaboration from '$lib/Story/StoryCollaboration.svelte'
	import StoryPlan from '$lib/Story/StoryPlan.svelte'
	import StorySupport from '$lib/Story/StorySupport.svelte'
	import StoryDownload from '$lib/Story/StoryDownload.svelte'
</script>

<StoryTitle />
<StoryVictims />
<TwoColumn
	title="Our Role"
	content="<span class='bold'>Share The Signal</span> serves as a <span class='bold'>compassionate and knowledgeable guide</span> in the fight against human trafficking."
	src="/story/hands-holding-each-other-support.jpg"
/>
<StoryCollaboration />
<StoryPlan />
<StorySupport />
<StoryDownload />
