<script>
	import DesktopHeader from '$lib/Headers/DesktopHeader.svelte'
	import MobileHeader from '$lib/Headers/MobileHeader.svelte'

	export let mobileThreshold = 960

	let innerWidth
</script>

<svelte:window bind:innerWidth />

{#if innerWidth < mobileThreshold}
	<MobileHeader />
{:else}
	<DesktopHeader />
{/if}