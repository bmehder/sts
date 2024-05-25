<script>
	import TikTok from '$lib/icons/TikTok.svelte'
	import Instagram from '$lib/icons/Instagram.svelte'
	import Facebook from '$lib/icons/Facebook.svelte'
</script>

<div class="outer">
  <p>Take Action Now. Your Move Can Change the Game.</p>
  <div class="inner">
    <ul>
      <li><TikTok /></li>
      <li><Instagram /></li>
      <li><Facebook /></li>
    </ul>
  </div>
</div>

<style>
  div {
    padding-block: var(--size);
    color: var(--red);
    text-align: center;
    font-weight: 600;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--size);
  }
</style>