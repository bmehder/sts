<section class="full-width space">
  <div class="inner">
    <div class="flow">
      <h2>Stay informed</h2>
      <p>Sign up for our newsletter to get the latest on our fight against human trafficking, success stories, and how you can play a part in saving lives.</p>
    </div>
    <div>
      <form>
        <input type="text" name="first-name" placeholder="First Name...">
        <input type="email" name="email" placeholder="Email Address...">
        <input type="text" name="last-name" placeholder="Last Name...">
        <button>Sign up</button>
      </form>
    </div>
  </div>
  <div class="together flow">
    Together, we're not just sharing signals; we're building bridges to freedom. Every sign
    you recognize, every story you share, every dollar you donate brings someone closer to
    safety and further from harm.<br /><p>Join us in turning awareness into action.</p
    >
  </div>
</section>

<style>
  section {
    position: relative;
    padding-block-end: var(--size-6);
    background-color: var(--green);
    color: white;
  }

  .inner {
    max-width: 52rem;
    display: grid;
    align-items: center;
    gap: var(--size-3);
    margin-inline: auto;

    @media (width > 32rem) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  form {
    display: grid;
    gap: var(--size-0-5);
    
    @media (width > 40rem) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  form > * {
    align-self: end;
  }

  .together {
		position: absolute;
    width: 100%;
    left: 50%;
    bottom: -60%;
    translate: -50% 0;
    z-index: 1;
		max-width: 52rem;
		padding: var(--size-4);
		background-color: black;
		color: white;
		text-align: center;
		font-weight: 400;
		border-radius: var(--size);
		box-shadow: 1px 1px 5px black;
    
    @media (width > 32rem) {
      bottom: calc(var(--size-4) * -2.75);
    }
	}

	.together p {
		color: var(--yellow);
	}
  
</style>