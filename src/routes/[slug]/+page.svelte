<script>
	export let data

	const date = new Date(data.post[0].date).toLocaleDateString('en-US', {
		dateStyle: 'full',
	})
</script>

<svelte:head>
	{#if data?.post[0]?.yoast_head_json}
		<title>{data?.post[0].yoast_head_json.og_title}</title>
		<meta
			name="description"
			content={data?.post[0].yoast_head_json.og_description}
		/>
		{#if data?.post[0].yoast_head_json.og_image?.length}
			<meta
				property="og:image"
				content={data?.post[0].yoast_head_json.og_image[0].url}
			/>
			<meta
				property="og:image:width"
				content={data?.post[0].yoast_head_json.og_image[0].width}
			/>
			<meta
				property="og:image:height"
				content={data?.post[0].yoast_head_json.og_image[0].height}
			/>
			<!-- <meta
				property="og:image:alt"
				content={data?.post[0].yoast_head_json.og_image[0].alt}
			/> -->
		{/if}
	{/if}
</svelte:head>

<article>
	<section>
		<div class="space flow">
			{#each data.post as post}
				<h1>{@html post.title.rendered}</h1>
				{#if post._embedded['wp:featuredmedia']?.[0].source_url}
					<img
						src={post._embedded['wp:featuredmedia']?.[0].source_url}
						alt={post._embedded['wp:featuredmedia']?.[0].alt_text}
					/>
				{/if}
				<div class="flow">
					<time datetime={post.date}>{date}</time>
					{@html post.content.rendered}
				</div>
			{/each}
		</div>
	</section>
</article>

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
