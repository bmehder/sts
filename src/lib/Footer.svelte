<script>
  import Instagram from '$lib/icons/Instagram.svelte';
  import Facebook from '$lib/icons/Facebook.svelte';
	import TikTok from '$lib/icons/TikTok.svelte'
	import Mailchimp from '$lib/Mailchimp.svelte'
</script>

<footer class="space content-grid full-width">
  <div class="inner flow">
    <div class="flow">
      <img style="max-width: 20rem;" src="/logo-footer.png" alt="logo">
      <p class="h3 balance">For more information or to get involved, <span class="bold">contact us</span>.</p>
      <p style="color: var(--yellow);">Get our emails</p>
      <div class="socials">
        <ul>
          <li><TikTok /></li>
          <li><Instagram /></li>
          <li><Facebook /></li>
        </ul>
      </div>
    </div>
    <div class="flow">
      <div class="h2">Stay informed and join the fight against human trafficking.</div>
      <Mailchimp />
    </div>
    <div class="copyright">© Copyright 2024 Share The Signal. All Rights Reserved.</div>
  </div>
</footer>

<style>
  footer {
    background-color: black;
    color: white;
  }

  .inner {
    @media (width > 32rem) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--size-3);
    }
  }

  .socials ul {
    display: flex;
    align-items: center;
    gap: var(--size-0-5);
  }

  .copyright {
    grid-column: span 2;
  }
</style>