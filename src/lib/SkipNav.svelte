<a class="skip-nav-link" href="#main-content">skip navigation</a>

<style>
	.skip-nav-link {
		position: absolute;
		left: var(--size-0-5);
		background-color: black;
		color: white;
		padding-block: var(--size-0-5);
		padding-inline: var(--size-2);
		text-decoration: underline;
		text-underline-offset: calc(var(--size-0-5) / 2);
		transform: translateY(-270%);

		&:hover {
			color: white;
		}

		&:focus {
			transition: transform 150ms ease-in;
			transform: translateY(0%);
		}
	}
</style>
