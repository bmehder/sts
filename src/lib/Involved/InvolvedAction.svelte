<section class="space full-width flow">
  <h2>Take Action Today</h2>
  <p class="tagline">Here's a simple, step-by-step plan for how you can get involved and make a difference</p>

  <div class="auto-grid">
		<div class="card flow">
			<div class="h3">#1</div>
			<p>Volunteer your time and skills to support our mission.</p>
      <a href="/" class="button">Take the first step now</a>
		</div>
		<div class="card flow">
			<div class="h3">#2</div>
			<p>Host fundraising events to raise awareness and funds for our cause.</p>
      <a href="/" class="button">Take the first step now</a>
		</div>
		<div class="card flow">
      <div class="h3">#3</div>
			<p>Advocate for policy changes to protect and empower survivors.</p>
      <a href="/" class="button">Take the first step now</a>
		</div>
	</div>
</section>

<style>
  section {
    background-color: var(--red);
    color: white;
    text-align: center;
  }

  .tagline {
    max-width: 24rem;
    margin-inline: auto;
  }

  .card {
    display: grid;
		padding: var(--size-2);
		background-color: white;
		color: black;
		text-align: left;
		border-radius: var(--size);
		box-shadow: 0 1px 13px rgba(0, 0, 0, 0.1);

		& .h3 {
			color: var(--red);
      font-weight: 600;
		}

		& p {
			padding: var(--size);
		}

    & .button {
      display: block;
      margin-block: auto;
      margin-inline: auto;
      background-color: black;
      color: white;
      text-align: center;
    }
	}
</style>