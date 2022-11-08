<script>
	import Counter from '$lib/components/Counter.svelte'
	import logo from '$lib/images/figoli-studio.png'
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
			</div>
			<div class="field">
				<p class="field-label">
					Ordine medio del prodotto/servizio (o meglio Lifetime Value del cliente)
				</p>
			</div>
			<div class="field">
				<p class="field-label">Costo per 1000 impression (CPM)</p>
			</div>
			<div class="field">
				<p class="field-label">Click Through Rate delle inserzioni (CTR)</p>
			</div>
			<div class="field">
				<p class="field-label">Tasso di conversione di vendita dell'e-commerce</p>
			</div>
		</div>
		<p>»</p>
		<div class="inner-container">
			<div class="result">
				<p class="result-label">Costo per click</p>
				<p class="result-number">1000</p>
			</div>
			<div class="result">
				<p class="result-label">
					Numero di vendite necessarie per raggiungere l'obiettivo di fatturato
				</p>
				<p class="result-number">1000</p>
			</div>
			<div class="result">
				<p class="result-label">
					Numero di clic necessari per raggiungere l'obiettivo di fatturato
				</p>
				<p class="result-number">1000</p>
			</div>
			<div class="result">
				<p class="result-label">Costo per acquisizione (CPA)</p>
				<p class="result-number">1000</p>
			</div>
		</div>
	</div>
	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
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
		border: 2px solid red;
		margin: 1em;
		padding: 0 1em;
		height: fit-content;
		width: 100%;
	}
</style>
