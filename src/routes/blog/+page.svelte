<script>
	export let data

	const getDate = date =>
		new Date(date).toLocaleDateString('en-US', {
			dateStyle: 'full',
		})
</script>

<svelte:head>
	<title>Blog - Share the Signal</title>
	<meta
		name="description"
		content="Articles about the prevention of Grooming, Human Trafficking, and how you can help!"
	/>
</svelte:head>

<section class="full-width">
	<div class="space">
		<h1 class="title">Blog</h1>
	</div>
</section>

<section>
	<div class="posts space">
		{#each data.posts as post}
			<div class="half-space flow">
				<!-- {#if post._embedded['wp:featuredmedia']?.[0].source_url}
					<a href="/{post.slug}">
						<img
							class="square"
							src={post._embedded['wp:featuredmedia']?.[0].source_url}
							alt={post._embedded['wp:featuredmedia']?.[0].alt_text}
						/>
					</a>
				{/if} -->
				<h2 class="balance">
					<a href="/{post.slug}">{@html post.title.rendered}</a>
				</h2>
				<div class="pretty flow">
					<time datetime={post.date}>{getDate(post.date)}</time>
					{@html post.excerpt.rendered}
				</div>
				<a href="/{post.slug}" class="button">Read Post</a>
			</div>
		{/each}
	</div>
</section>

<style>
	section:has(.title) {
		background-color: black;
	}

	.posts {
		max-inline-size: 65ch;
		font-size: 1.125rem;
		line-height: 1.7;
	}

	h2 a {
		text-decoration: none;

		&:where(:hover, :focus-visible) {
			text-decoration: underline;
		}
	}

	time {
		font-weight: 600;
	}

	.button {
		background-color: var(--teal);
		color: white;

		&:where(:hover, :focus-visible) {
			background-color: black;
		}
	}
</style>
