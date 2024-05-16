<script>
	import Hamburger from '$lib/icons/Hamburger.svelte'
	import Close from '$lib/icons/Close.svelte'

  export let menuItems = []
	let isOpen = false

	function toggleMenu() {
		isOpen = !isOpen
	}
	
  function closeMenu() {
		isOpen = false
	}
</script>

<header>
	<div class="top">
		<div class="logo">
			<a href="/" on:click={closeMenu}>
				<img src="/logo.png" alt="Logo" />
			</a>
		</div>
		<div class="hamburger">
			<button on:click={toggleMenu}>
        {#if isOpen}
          <Close />
        {:else}
          <Hamburger />
        {/if}
			</button>
		</div>
	</div>

	{#if isOpen}
		<nav>
			<ul class="flow">
        {#each menuItems as { name, url }}        
  				<li><a on:click={toggleMenu} href="{url}">{name}</a></li>
        {/each}
			</ul>
		</nav>
	{/if}
</header>

<style>
	header {
		display: grid;
		gap: 1.5rem;
		padding: 1.5rem;
		background-color: white;
	}

	.top {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

  .logo img {
    max-width: 10rem;
  }

  nav {
		min-height: 100dvh;
  }

	ul {
		list-style: none;
	}

	li {
		padding-block-end: 0.5rem;
		border-bottom: 1px solid var(--teal);
	}

	a {
    display: block;
		color: black;
    text-decoration: none;
	}

  button {
    padding: 0;
    background: none;
    border: none;
    box-shadow: none;
  }
</style>