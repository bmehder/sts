<script>
	import '$lib/styles/app.css'
	import '$lib/styles/skins.css'
	import '$lib/styles/layouts.css'
	import '$lib/styles/utilities.css'
	import '$lib/styles/misc.css'
	import ViewTransition from '$lib/ViewTransition.svelte'
	import Header from '$lib/Headers/Header.svelte'
	import Footer from '$lib/Footer.svelte'
	import BackToTop from '$lib/BackToTop.svelte'

	export let data
</script>

<ViewTransition />

<Header menuItems={data.menuItems} />

<main class="content-grid">
	<slot />
</main>

<Footer />

<BackToTop />