<script lang="ts">
	import logo from '$lib/images/figoli-studio.png'
	let target = 5000 // €
	let ltv = 100 // €
	let cpm = 4.5 // €
	let ctr = 0.012 // percentage
	let conversionRate = 0.01 // percentage
	$: cpc = Math.round((cpm / 1000 / ctr) * 100) / 100 // €
	$: sales = Math.round((target / ltv) * 100) / 100 // number
	$: clicks = Math.round((sales / conversionRate) * 100) / 100 //number
	$: cpa = Math.round((cpc / conversionRate) * 100) / 100 // €
</script>

<svelte:head>
	<title>Il Calcolatore di Budget Facebook Ads da Figoli Studio</title>
	<meta
		name="description"
		content="Usa il calcolatore del budget Facebook Ads gratuito di Figoli Studio per vedere quanto andrai a spendere e quanto otterrai in ritorno."
	/>
</svelte:head>

<section>
	<a href="https://matteofigoli.it/" target="_blank" rel="noreferrer">
		<img src={logo} alt="figoli studio logo ufficiale" width="180" height="106" />
	</a>
	<h1>Il Calcolatore di Budget Facebook Ads</h1>
	<p class="subheading">
		Usa questo calcolatore per individuare il budget da utilizzare su Facebook Ads mensilmente,
		basandoti sull'obiettivo di guadagno che ti vuoi preporre.
	</p>
	<div class="outer-container">
		<div class="inner-container">
			<div class="field">
				<p class="field-label">Obiettivo ipotetico di guadagno</p>
				<input type="number" bind:value={target} />
			</div>
			<div class="field">
				<p class="field-label">
					Ordine medio del prodotto/servizio (o meglio Lifetime Value del cliente)
				</p>
				<input type="number" bind:value={ltv} />
			</div>
			<div class="field">
				<p class="field-label">Costo per 1000 impression (CPM)</p>
				<input type="number" bind:value={cpm} />
			</div>
			<div class="field">
				<p class="field-label">Click Through Rate delle inserzioni (CTR)</p>
				<input type="number" bind:value={ctr} max="100" min="0" />
			</div>
			<div class="field">
				<p class="field-label">Tasso di conversione di vendita dell'e-commerce</p>
				<input type="number" bind:value={conversionRate} max="100" min="0" />
			</div>
		</div>
		<p class="separator-desktop">→</p>
		<p class="separator-mobile">↓</p>
		<div class="inner-container">
			<div class="result">
				<p class="result-label">Costo per click</p>
				<p class="result-number">{cpc} €</p>
			</div>
			<div class="result">
				<p class="result-label">
					Numero di vendite necessarie per raggiungere l'obiettivo di fatturato
				</p>
				<p class="result-number">{sales} vendite</p>
			</div>
			<div class="result">
				<p class="result-label">
					Numero di clic necessari per raggiungere l'obiettivo di fatturato
				</p>
				<p class="result-number">{clicks} clic</p>
			</div>
			<div class="result">
				<p class="result-label">Costo per acquisizione (CPA)</p>
				<p class="result-number">{cpa} €</p>
			</div>
		</div>
	</div>
	<div class="tutorial">
		<h2 class="tutorial-heading">Come usare il calcolatore di budget Facebook Ads</h2>
		<div class="tutorial-text">
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			<p>
				Delectus libero dolor nostrum, eaque, aperiam commodi nesciunt illum consequatur aliquam
				esse obcaecati nemo, nihil quasi tenetur mollitia! Odio laborum maiores debitis!
			</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			<p>
				Delectus libero dolor nostrum, eaque, aperiam commodi nesciunt illum consequatur aliquam
				esse obcaecati nemo, nihil quasi tenetur mollitia! Odio laborum maiores debitis!
			</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			<p>
				Delectus libero dolor nostrum, eaque, aperiam commodi nesciunt illum consequatur aliquam
				esse obcaecati nemo, nihil quasi tenetur mollitia! Odio laborum maiores debitis!
			</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			<p>
				Delectus libero dolor nostrum, eaque, aperiam commodi nesciunt illum consequatur aliquam
				esse obcaecati nemo, nihil quasi tenetur mollitia! Odio laborum maiores debitis!
			</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			<p>
				Delectus libero dolor nostrum, eaque, aperiam commodi nesciunt illum consequatur aliquam
				esse obcaecati nemo, nihil quasi tenetur mollitia! Odio laborum maiores debitis!
			</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			<p>
				Delectus libero dolor nostrum, eaque, aperiam commodi nesciunt illum consequatur aliquam
				esse obcaecati nemo, nihil quasi tenetur mollitia! Odio laborum maiores debitis!
			</p>
		</div>
	</div>
	<hr class="divider" />
	<div class="copyright">
		<p>&copy; 2022 Tutti i diritti riservati</p>
		<p>Matteo Figoli | Via Marcello Malpighi, 12 – 50139 Firenze | P.IVA 06839670483</p>
		<p>Chiara Mulas | Via Pietro Colletta, 23 - 50136 Firenze | P.IVA 06920470488</p>
	</div>
	<p class="legal">
		<a
			href="https://www.iubenda.com/privacy-policy/32625153/full-legal"
			target="_blank"
			rel="noreferrer">Privacy Policy</a
		>
		|
		<a href="https://matteofigoli.it/credits/" target="_blank" rel="noreferrer">Credits</a>
	</p>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
		margin: 0 1em;
	}

	.subheading {
		text-align: center;
		font-style: italic;
		font-size: 1.4rem;
	}

	.outer-container {
		display: flex;
		align-items: center;
		width: 100%;
	}

	.inner-container {
		margin: 1em;
		padding: 0 1em;
		height: fit-content;
		width: 100%;
	}

	.separator-desktop,
	.separator-mobile {
		font-size: 2rem;
	}

	.separator-mobile {
		display: none;
	}

	.field,
	.result {
		border: 2px solid #222222;
		box-shadow: 0.5em 0.5em 0 var(--color-theme-1);
	}

	.field p,
	.result p {
		margin-top: 0;
	}

	.field,
	.result {
		padding: 1em;
		margin: 2em 0;
	}

	.field-label,
	.result-label {
		background-color: #222222;
		color: var(--color-theme-1);
		padding: 0.5em;
	}

	.tutorial-heading {
		text-align: center;
	}

	.tutorial-text {
		max-width: 660px;
		font-size: 1.05rem;
	}

	.divider {
		width: 100%;
		border-width: 1px;
		border-style: solid;
		margin: 3em 0;
	}

	.copyright {
		text-align: center;
	}

	.copyright p {
		margin: 0.5em 0;
	}

	@media (max-width: 760px) {
		.outer-container {
			flex-direction: column;
		}

		.separator-desktop {
			display: none;
		}

		.separator-mobile {
			display: block;
		}
	}
</style>
