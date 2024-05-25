<div class="container-wrap">
	<form>
		<input type="text" name="first-name" placeholder="First name..." />
		<input type="text" name="last-name" placeholder="Last name..." />
		<input type="email" name="email" placeholder="Email address..." />
		<button>Sign up</button>
	</form>
</div>

<style>
	form {
		display: grid;
		gap: var(--size);

		& button {
      padding-inline: var(--size-2);
			justify-self: start;
      align-self: center;
		}

    & input {
      padding: var(--size);
    }

		@container (width > 24rem) {
			grid-template-columns: repeat(2, 1fr);
		}
	}

</style>
