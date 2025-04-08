<script>
	import TikTok from '$lib/icons/TikTok.svelte'
	import Instagram from '$lib/icons/Instagram.svelte'
	import Facebook from '$lib/icons/Facebook.svelte'
</script>

<section class="full-width space">
	<div class="inner">
		<div class="grid">
			<div class="flow">
				<h3 style="color: var(--red);">What Happens If We Don't Act?</h3>
				<ul class="list">
					<li>
						<span class="bold">Predators keep targeting unnoticed</span>
					</li>
					<li>
						<span class="bold">Teens keep thinking it’s “just a relationship”</span>
					</li>
					<li>
						<span class="bold">Parents stay unaware until it’s too late</span>
					</li>
					<li>
						<span class="bold">The cycle keeps going, and we stay reactive instead of proactive</span>
					</li>
				</ul>
			</div>
			<div class="flow">
				<h3 style="color: var(--teal);">Your Action's Impact:</h3>
				<ul class="list">
					<li>
						<span class="bold">Spot and Report:</span> More chances to identify and save
						victims.
					</li>
					<li>
						<span class="bold">Cut Off Funding:</span> Each donation disrupts traffickers'
						financial flows.
					</li>
					<li>
						<span class="bold">Restore Hope:</span> Your engagement can rebuild lives
						and futures.
					</li>
					<li>
						<span class="bold">Strengthen Communities:</span> Awareness creates safer,
						resilient neighborhoods.
					</li>
					<li>
						<span class="bold">Drive Change:</span> Collective voices push for impactful
						legal and social reforms.
					</li>
				</ul>
			</div>
		</div>
		<div class="footer">
			<span style="color: var(--red);">Choose Action.</span>
			<span style="color: var(--teal);">Change Lives.</span>
			<ul class="socials">
				<li><a class="button" href="/donate/" target="_blank">Donate now</a></li>
				<li class="flex">
					<p>Follow us on social</p>
					<TikTok />
					<Instagram />
					<Facebook />
				</li>
			</ul>
		</div>
	</div>
</section>

<style>
	section {
		background-color: white;
	}

	.inner {
		max-width: 58rem;
		box-shadow: 0 1px 13px #e9e9e9;
		margin-inline: auto;
		padding-block-end: var(--size-3);
	}

	.grid {
		display: grid;
		gap: var(--size-6);
		padding: var(--size-3);

		@media (width > 32rem) {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	.list {
		padding-inline-start: var(--size);
		font-weight: 400;
	}

	.list > * + * {
		margin-block-start: var(--size-2);
	}

	.footer {
		text-align: center;
	}

	.footer span {
		font-weight: 600;
	}

	.socials {
		justify-content: center;
		align-items: center;
		gap: var(--size);

		@media (width > 32rem) {
			display: flex;
		}
	}

	.socials li:last-child {
		align-items: center;
	}

	.socials > * {
		margin-block-start: var(--size-2);
	}

	.button {
		background-color: black;
		color: white;

		&:hover {
			background-color: var(--teal);
		}
	}
	.flex {
		gap: var(--size-0-5);
		justify-content: center;
	}
</style>
