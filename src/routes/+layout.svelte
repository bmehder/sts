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

<ViewTransition />

<Header {menuItems} />

<main class="content-grid">
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