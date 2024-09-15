<script>
	export let data

	const date = new Date(data.post[0].date).toLocaleDateString('en-US', {
		dateStyle: 'full',
	})
</script>

<section>
	<article class="space flow">
		{#each data.post as post}
			{#if post._embedded['wp:featuredmedia']?.[0].source_url}
				<img
					src={post._embedded['wp:featuredmedia']?.[0].source_url}
					alt={post._embedded['wp:featuredmedia']?.[0].alt_text}
				/>
			{/if}
			<h1>{@html post.title.rendered}</h1>
			<div class="flow">
				<time datetime={post.date}>{date}</time>
				{@html post.content.rendered}
			</div>
		{/each}
	</article>
</section>

<style>
	article {
		max-inline-size: 65ch;
		font-size: 1.125rem;
		line-height: 1.7;
	}

	h1 {
		line-height: 1.1;
	}

	time {
		font-weight: 600;
	}

	article :global(ol) {
		list-style-type: decimal;
	}

	article :global(:where(h1, h2, h3)) {
		text-wrap: balance;
	}

	article :global(:where(p, li)) {
		text-wrap: pretty;
	}
</style>
