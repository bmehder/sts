<script>
  import { page } from "$app/stores"
</script>

<section class="space">
  <h1>{$page.status}</h1>
  <h2>{$page.error.message}</h2>
</section>

<style>
  section {
    text-align: center;
  }
</style>