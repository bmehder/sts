<script>
	import { fade } from 'svelte/transition'
	import '@fontsource-variable/manrope';
	import '$lib/styles/app.css'
	import '$lib/styles/skins.css'
	import '$lib/styles/layouts.css'
	import '$lib/styles/utilities.css'
	import '$lib/styles/misc.css'
	import menuItems from "$lib/Headers/menu-items.js";
	import ViewTransition from '$lib/ViewTransition.svelte'
	import Header from '$lib/Headers/Header.svelte'
	import Footer from '$lib/Footer.svelte'
	import BackToTop from '$lib/BackToTop.svelte'
  import { Modals, closeModal } from 'svelte-modals'
</script>

<svelte:head>
	<script defer data-domain="sharethesignal.com" src="https://plausible.io/js/script.js"></script>
</svelte:head>

<ViewTransition />

<Header {menuItems} />

<main id="main-content" class="content-grid">
	<slot />
</main>

<Footer />

<BackToTop />

<Modals>
  <div
		role="button"
		tabindex="0"
    slot="backdrop"
    class="backdrop"
    on:click={closeModal}
		on:keydown={evt => evt.key === 'Escape' && closeModal()}
		in:fade|global={{duration: 200}} out:fade|global={{duration: 100}}
  />
</Modals>