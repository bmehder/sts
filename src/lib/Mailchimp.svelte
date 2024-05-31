<div class="container-wrap">
	<form action="https://sharethesignal.us13.list-manage.com/subscribe/post?u=8afd1aad99227bd12d71f0187&amp;id=20dd1efacc&amp;f_id=00f153e2f0" method="post">
		<input type="text" name="FNAME" placeholder="First name..." />
		<input type="text" name="LNAME" placeholder="Last name..." />
		<input type="email" name="EMAIL" placeholder="Email address..." />
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
