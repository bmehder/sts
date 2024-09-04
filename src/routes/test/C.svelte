<script>
	import Sveltetube from '$lib/Sveltetube.svelte'
</script>

<section>
	<div class="inner space flow">
		<h2>A Short Film with a Lasting Impact</h2>
		<div class="video-wrapper">
			<Sveltetube id="t1tIY5bgYto" />
		</div>
		<p>
			The short film they produced wasn’t just another piece of media; it was a deep
			dive into the hidden world of human trafficking, exposing the grooming
			processes that often go unnoticed in our communities. This film was designed to
			educate viewers on the subtle signs of trafficking, especially in places where
			it’s least expected—middle America and affluent neighborhoods where secrecy is
			often a shield for criminal activity.
		</p>
		<p>
			The impact of the film was immediate. It was accepted into three prestigious
			film festivals, including New York Fashion Week, where journalists interviewed
			Doug about the project’s significance. The film’s message resonated with
			audiences and industry professionals alike, leading to its recognition at the
			Telly Awards, where it won in its category.
		</p>
		<p>
			This recognition was more than just an accolade; it validated the importance of
			our work and the necessity of our mission. The film also caught the attention
			of Rotary District 5340, and Don was invited to present at a special Homeland
			Security event focused on human trafficking in October 2022. These
			opportunities have given us unique insights into the world of
			trafficking—insights that are often overlooked by even the most seasoned law
			enforcement agencies.
		</p>
	</div>
</section>

<style>
	section {
		font-size: calc(var(--size) * 1.2);
		line-height: 1.5;
	}

	.video-wrapper {
		width: min(100%, 32rem);
		float: right;
		padding-bottom: var(--size-2);

		@media screen and (width > 36rem) {
			padding: var(--size);
			padding-top: var(--size-0-5);
		}
	}

	h2 {
		color: var(--red);
	}
</style>
