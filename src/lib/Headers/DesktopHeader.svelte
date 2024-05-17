<script>
	import { page } from '$app/stores'
  import Play from '$lib/icons/Play.svelte'
  import { openModal } from 'svelte-modals'
  import Modal from '$lib/Modal.svelte'

  export let menuItems = []
  
  function handleClick() {
    openModal(Modal, { title: "Alert", message: "This is an alert" })
  }
</script>

<header class="content-grid full-width">
  <div class="inner">
    <div class="logo">
      <a href="/"><img src="/logo.png" alt="Share the Signal Logo"></a>
    </div>
    <div class="navigation">
      <div class="secondary-navigation">
        <ul>
          <li><button class="a" on:click={handleClick}><Play /><span>View Share The Signal video</span></button></li>
          <li><a class="button" href="/">Donate now</a></li>
        </ul>
      </div>
      <nav class="main-navigation">
        <ul>
          {#each menuItems as { name, url }}        
            <li><a aria-current={$page.url.pathname === url} href="{url}">{name}</a></li>
          {/each}
        </ul>
      </nav>
    </div>
  </div>
</header>

<style>
  header {
    padding-block: var(--size);
    background-color: white;
    border-bottom: 1px solid #d9d9d9;
  }
  
  .inner {
    display: flex;
    justify-content: space-between;
  }

  .navigation {
    display: grid;
    align-items: center;
  }

  a {
		position: relative;
    color: black;
    font-weight: 600;
    text-decoration: none;

    &:hover {
      color: var(--teal);
    }

    &[aria-current='true'] {
      color: var(--teal);
    }

    &[aria-current='true']::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: calc(var(--size-0-5) * -0.5);
      width: 100%;
      height: 2px;
      background-color: var(--teal);
      view-transition-name: active-page;
    }
  }

  .secondary-navigation ul {
    justify-content: end;
    align-items: center;

    & a:not(.button) {
      color: var(--teal);
      text-decoration: underline;
    }
    
    & .a {
      display: flex;
      align-items: center;
      gap: var(--size-0-5);
      padding-block: 0;
      text-decoration: underline;
      box-shadow: none;

      &:hover {
        text-decoration: none;
      }
      
      &:focus-visible {
        outline: none;
      }
    }
    
    & .button {
      padding-block: 0;
      background-color: var(--teal);
      color: white;
    }

    & li:first-of-type a {
      display: flex;
      align-items: center;
      gap: var(--size-0-5);
    }
  }

  ul {
    display: flex;
    gap: var(--size-2);
  }
</style>