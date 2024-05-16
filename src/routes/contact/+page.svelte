<script>
  import FormSparkAsync from '$lib/FormSparkAsync.svelte'

  const FORMSPARK_ID = ''
  const BOTPOISON_KEY = 'pk_a3136ac2-f7c3-4fee-8735-5285801ca731'
</script>

<svelte:head>
	<title>Contact - Fight Human Trafficking – Share The Signal</title>
	<meta name="description" content="Contact Share The Signal. Fight Human Trafficking, Save Lives. We will respond to your message as soon as possible.">
</svelte:head>

<section class="space flow full-width">
  <h1 class="title">Contact</h1>
  <FormSparkAsync id={FORMSPARK_ID} botpoisonKey={BOTPOISON_KEY} />
</section>

<style>
  h1 {
    color: var(--teal);
  }
  
  section {
    /* background-color: white; */
  }
</style>