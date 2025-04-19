<script>
	import Notice from '$lib/Notice.svelte';
	import DesktopHeader from '$lib/Headers/DesktopHeader.svelte'
	import MobileHeader from '$lib/Headers/MobileHeader.svelte'

	export let mobileThreshold = 960
	export let menuItems

	let innerWidth
</script>

<svelte:window bind:innerWidth />

<Notice />

{#if innerWidth < mobileThreshold}
	<MobileHeader {menuItems} />
{:else}
	<DesktopHeader {menuItems} />
{/if}