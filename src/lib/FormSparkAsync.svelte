<script>
  import { onMount } from 'svelte'
  import Botpoison from "@botpoison/browser"
  import Spinner from '$lib/Spinner.svelte'

  export let id = ''
  export let botpoisonKey = ''
  export let isPhoneRequired = false

  const FORMSPARK_ACTION_URL = `https://submit-form.com/${id}`

  let formElement

  let firstName = ''
  let lastName = ''
  let email = ''
  let phone = ''
  let requestEvaluation = false
  let message = ''

  let isSubmitting = false
  let isSubmitted = false
  let botpoison = null

  onMount(() => {
    botpoison = new Botpoison({
      publicKey: botpoisonKey,
    })
  })

  const handleSubmit = async url => {
    try {
      isSubmitting = true

      const { solution } = await botpoison.challenge()

      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          message,
          _botpoison: solution,
          _email: {
            from: 'Share The Signal',
            subject: `Contact Form Submission: ${lastName}, ${firstName}`,
            template: {
              title: false,
              footer: false,
            },
          },
        }),
      })

      formElement.reset()
    } catch (err) {
      console.error(err)
    } finally {
      isSubmitting = false
      isSubmitted = true
    }
  }
</script>

<!-- <svelte:head>
  <script src="https://unpkg.com/@botpoison/browser" async></script>
</svelte:head> -->

<div class="flow">
  {#if isSubmitted}
    <p class="h2">Thank you for your message!</p>
    <p class="h3">
      We have received your message and will contact you as soon as possible.</p>
  {:else}
    <h2>Send Us A Message</h2>
    <form
      bind:this={formElement}
      class="flow"
      on:submit|preventDefault={() => handleSubmit(FORMSPARK_ACTION_URL)}
    >
      <div class="columns">
        <div>
          <label for="first-name">First Name <span>*</span></label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            bind:value={firstName}
            required
          />
        </div>
        <div>
          <label for="last-name">Last Name <span>*</span></label>
          <input
            type="text"
            id="last-name"
            name="last-name"
            bind:value={lastName}
            required
          />
        </div>
      </div>
      <div class="columns">
        <div>
          <label for="email">Email <span>*</span></label>
          <input type="email" id="email" name="email" bind:value={email} required />
        </div>
        <div>
          <label for="phone"
            >Phone {#if isPhoneRequired}<span>*</span>{/if}</label
          >
          <input
            type="phone"
            id="phone"
            name="phone"
            bind:value={phone}
            required={isPhoneRequired}
          />
        </div>
      </div>
      <!-- <div class="request-evaluation">
        <input
          type="checkbox"
          name="Evaluation"
          id="request-evaluation"
          bind:checked={requestEvaluation}
        />
        <label for="request-evaluation">I would like to buy you a cup of coffee.</label>
      </div> -->
      <div>
        <label for="message">Message <span>*</span></label>
        <textarea bind:value={message} rows="10" id="message" name="message" required />
      </div>
      <div style="display: contents;">
        <input
          type="checkbox"
          name="_honeypot"
          style="display:none"
          tabindex="-1"
          autocomplete="off"
        />
      </div>
      <div>
        <button type="submit">
          {#if isSubmitting}
            <Spinner />
          {:else}
            Submit Message
          {/if}
        </button>
      </div>
    </form>
  {/if}
</div>

<style>
  .h2,
  .h3 {
    line-height: 1.5;
  }

  form {
    width: min(100%, 42em);
    padding: var(--size-2);
    background-color: #545454;
    background-color: var(--teal);
    color: white;
    border-radius: var(--size-0-5);
  }

  .columns {
    gap: var(--size);
  }

  div {
    display: grid;
    gap: calc(var(--size-0-5) / 2);
  }

  span {
    color: var(--red);
  }

  label {
    margin-block-end: var(--size-0-5);
  }

  label, button {
    color: black;
  }
  
  input, textarea, button {
    border: 1px solid #d9d9d9;
  }

  button {
    padding-block: var(--size);

    &:hover {
      background-color: black;
      color: white;
    }
  }
</style>
