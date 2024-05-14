<script>
	export let quote = ''
	export let cite = ''
</script>

<div class="quote flow">
	<p>"{quote}"</p>
	<div class="cite">{cite}</div>
</div>

<style>
	.quote {
		overflow: hidden;
	}

	.quote p {
		font-style: italic;
	}

	.quote .cite {
		color: var(--red);
	}
</style>
