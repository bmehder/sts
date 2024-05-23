<script>
  import FormSparkAsync from '$lib/FormSparkAsync.svelte'

  export let data
</script>

<svelte:head>
	<title>Contact - Fight Human Trafficking – Share The Signal</title>
	<meta name="description" content="Contact Share The Signal. Fight Human Trafficking, Save Lives. We will respond to your message as soon as possible.">
</svelte:head>

<section class="space flow full-width">
  <h1 class="title">Contact</h1>
  <FormSparkAsync id={data.FORMSPARK_ID} botpoisonKey={data.BOTPOISON_KEY} />
</section>