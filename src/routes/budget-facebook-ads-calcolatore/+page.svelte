<script lang="ts">
	import logo from '$lib/images/figoli-studio.png'
	let target = 5000 // €
	let ltv = 100 // €
	let cpm = 4.5 // €
	let ctr = 1.2 // percentage
	$: decimalCtr = ctr / 100
	let conversionRate = 1.0 // percentage
	$: decimalCr = conversionRate / 100

	$: cpc = Math.round((cpm / 1000 / decimalCtr) * 100) / 100 // €
	$: sales = Math.round((target / ltv) * 100) / 100 // number
	$: clicks = Math.round((sales / decimalCr) * 100) / 100 //number
	$: cpa = Math.round((cpc / decimalCr) * 100) / 100 // €
	$: budget = Math.round(cpa * sales)
</script>

<svelte:head>
	<title>Il Calcolatore di Budget Facebook Ads da Figoli Studio</title>
	<meta
		name="description"
		content="Usa il calcolatore del budget Facebook Ads gratuito di Figoli Studio per vedere quanto andrai a spendere e quanto otterrai in ritorno."
	/>
</svelte:head>

<section>
	<a
		style="text-align:center;"
		class="base-link"
		href="https://matteofigoli.it/"
		target="_blank"
		rel="noreferrer"
	>
		<img src={logo} alt="figoli studio logo ufficiale" width="180" height="106" />
		<p style="margin: 0 0 0 -1.5em;">Cos'è Figoli Studio?</p>
	</a>
	<h1>Il Calcolatore di Budget Facebook Ads</h1>
	<p class="subheading">
		Usa questo calcolatore per individuare il budget da utilizzare su Facebook Ads mensilmente,
		basandoti sull'obiettivo di guadagno che ti vuoi preporre.
	</p>
	<div class="outer-container">
		<div class="inner-container">
			<p class="step">1. Modifica i numeri qua sotto</p>
			<div class="field">
				<p class="field-label">Obiettivo ipotetico di guadagno</p>
				<input class="base-input" type="number" bind:value={target} min="1" /> € in totale
			</div>
			<div class="field">
				<p class="field-label">
					Ordine medio del prodotto/servizio (o meglio Lifetime Value del cliente)
					<span class="tooltip">
						i <span class="tooltiptext"
							>Per saperne di più su LTV, <a
								class="base-link"
								href="https://www.serverplan.com/blog/customer-lifetime-value/"
								target="_blank"
								rel="noreferrer">leggi questa guida veloce</a
							>.</span
						>
					</span>
				</p>
				<input class="base-input" type="number" bind:value={ltv} min="1" /> € di media
			</div>
			<div class="field">
				<p class="field-label">
					Costo per 1000 impression (CPM)
					<span class="tooltip">
						i <span class="tooltiptext"
							>Puoi ricavare il CPM da test esplorativi precedenti oppure dai report di benchmark
							che trovi online. Secondo <a
								class="base-link"
								href="https://adcostly.com/facebook-ads-cost/italy"
								target="_blank"
								rel="noreferrer">AdCostly</a
							>, il CPM medio in Italia ad oggi è di € 5.4.</span
						>
					</span>
				</p>
				<input class="base-input" type="number" bind:value={cpm} min="0" /> € ad impressione
			</div>
			<div class="field">
				<p class="field-label">
					Click Through Rate delle inserzioni (CTR) <span class="tooltip">
						i <span class="tooltiptext"
							>I CTR variano a seconda dei settori, degli obiettivi di campagna e della qualità
							delle creatività, però è realistico muoversi in una forbice tra l'0.5% e l'1.8%
							(Fonte: <a
								class="base-link"
								href="https://www.wordstream.com/blog/ws/2019/11/12/facebook-ad-benchmarks"
								target="_blank"
								rel="noreferrer">WordStream</a
							>)</span
						>
					</span>
				</p>
				<input class="base-input" type="number" bind:value={ctr} max="100" min="0.1" /> % di media
			</div>
			<div class="field">
				<p class="field-label">
					Tasso di conversione di vendita dell'e-commerce <span class="tooltip">
						i <span class="tooltiptext"
							>Il tasso di conversione varia per mille fattori. Se il sito è già attivo, ricavalo da
							Analytics, altrimenti è realistico un range tra lo 0,8% e il 2%.</span
						>
					</span>
				</p>
				<input class="base-input" type="number" bind:value={conversionRate} max="100" min="0.1" /> %
				di media
			</div>
		</div>
		<div class="inner-container">
			<p class="step">2. Esamina i risultati</p>
			<div class="result">
				<p class="result-label">Costo per click</p>
				<p class="result-number">{cpc} € a click</p>
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
				<p class="result-number">{cpa} € ad acquisizione</p>
			</div>
		</div>
	</div>
	<div style="max-width: 1020px;" class="inner-container">
		<p class="step">3. Scopri il tuo budget</p>
		<div class="cta-section">
			<div class="result budget">
				<p class="result-label">Stima di budget</p>
				<p class="result-number">{budget} € al mese</p>
			</div>
			<div class="cta">
				<h2 class="cta-title">Vuoi sapere come utilizzare al meglio questo budget?</h2>
				<p class="cta-text">
					Abbiamo creato una guida che ti permette di scegliere il consulente ideale per realizzare
					i tuoi obiettivi pubblicitari.
				</p>
				<a
					class="cta-button"
					href="https://matteofigoli.it/guida-scegliere-social-advertising/"
					target="_blank"
					rel="noreferrer">Leggi la guida completa</a
				>
			</div>
		</div>
	</div>
	<div class="tutorial">
		<h2 class="tutorial-heading">Come usare il calcolatore di budget Facebook Ads</h2>
		<img class="tutorial-text" />
		<p>
			Non hai mai investito nelle Facebook Ads e vuoi capire quanto budget serve per ottenere
			risultati? O stai già investendo ma non sei sulla strada giusta?
		</p>
		<p>
			<a class="base-link" href="https://matteofigoli.it/guide/facebook-ads-costo-pubblicita/"
				>I costi pubblicitari Facebook</a
			>
			e quelli di
			<a class="base-link" href="https://matteofigoli.it/guide/instagram-ads-costo/"
				>Instagram Ads</a
			> sembrano campati in aria se non si tiene conto delle variabili in gioco.
		</p>

		<p>
			Fare riferimento a numeri precisi permette di proteggersi da consulenti poco professionali e
			investimenti senza possibilità di funzionare. Solo così si può progettare un vero ritorno
			sull&apos;investimento, a livello economico e di consapevolezza di marca.
		</p>

		<p>
			Il nostro calcolatore di budget per Facebook e Instagram Ads parte dalla nostra esperienza e
			ti aiuta a capire come funziona la logica dietro la definizione del budget, le variabili che
			la influenzano e quello che puoi fare per migliorare.
		</p>

		<h2>Le metriche da conoscere prima di usarlo</h2>

		<p>
			Questo calcolatore funziona meglio soprattutto per gli e-commerce, ma con i dovuti distinguo è
			applicabile anche ad attività di generazione di contatti di valore (Lead Generation).
		</p>

		<h3>CPM - Costo per 1000 Impression</h3>
		<p>
			Questa metrica ci indica quanto costa far vedere il nostro annuncio a mille persone. Di solito
			è una metrica “oggettiva”, risultante delle aste pubblicitarie che avvengono tra i diversi
			inserzionisti sulle piattaforme.
		</p>

		<h3>CTR - Click Through Rate</h3>
		<p>
			Ovvero la percentuale di utenti che cliccano sul nostro annuncio. Più è alto, più il nostro
			annuncio sarà attraente per gli utenti.
		</p>
		<p>
			Si tratta di una metrica su cui abbiamo un forte controllo, perché dipende da quanto il nostro
			annuncio - e la sua creatività - attira l&apos;attenzione degli utenti.
		</p>

		<h3>Tasso di conversione</h3>
		<p>
			Il tasso di utenti che compie l'azione che vogliamo compia. Possono essere vendite sul sito
			e-commerce o raccolta contatti (Lead Generation) dentro o fuori dalla piattaforma. Una metrica
			che ci dice quanto la pagina o il modulo su cui portiamo l&apos;utente è per lui interessante
			al punto di spingerlo a compiere un&apos;azione rilevante a livello di business.
		</p>

		<h3>Lifetime Value</h3>
		<p>
			Ossia quanto valore complessivo ci permette di generare un nuovo cliente, quanto guadagniamo
			da ogni nuovo cliente in media. Se si tratta di ordini fatti una volta sola, corrisponde al
			valore dell&apos;ordine medio. Se il cliente compra più volte nel tempo, il valore complessivo
			medio che porta nelle tasche della nostra azienda. Più saremo bravi a fidelizzare il cliente,
			più il ritorno dell&apos;investimento rispetto al primo contatto sarà alto.
		</p>

		<h2>Come si usa</h2>

		<p>Inserisci i dati richiesti dal calcolatore se li conosci.</p>

		<p>
			Se non li conosci, ipotizza un valore il più realistico possibile rispetto alla tua azienda.
			Inserisci un obiettivo di fatturatoIl calcolatore restituirà una proiezione dei dati utili a
			raggiungere l'obiettivo, tra cui il budget minimo da cui partire.
		</p>

		<h2>Avvertenza</h2>

		<p>
			Si tratta di dati generici, un calcolatore così semplice non tiene conto delle variabili e
			frizioni presenti nel mondo reale. Restituirà dei risultati ipotetici, calcolati in un
			ambiente “di laboratorio” dove nessuna variabile esterna si intromette per cambiare le
			proiezioni.
		</p>

		<p>
			Serve a mostrare solamente una cifra minima da cui partire, per sgombrare il campo da
			aspettative irrealistiche
		</p>

		<p>Ad esempio, tra le cose che non vengono considerate ci sono le seguenti:</p>

		<p>
			I clic sul link non sono tutti visite al sito: si stima che se il caricamento della pagina è
			lento, una buona percentuale di utenti abbandoni il sito invece di attendere (15-25%)
		</p>

		<p>
			Il calcolatore ipotizza solo conversioni a freddo, mentre il percorso di conversione, ovvero
			il percorso che l'utente fa dal conoscerci all'acquisto, è la maggior parte delle volte
			composta da due fasi, per cui andrebbero considerati budget ad hoc.
		</p>

		<h2>Una panoramica ipotetica, ma razionale</h2>

		<p>Prendi il numero che vedi come un punto di partenza, utile per ragionare.</p>
		<p>
			Sii allo stesso tempo pronto ad accettare evidenze che potrebbero emergere in corso
			d&apos;opera, come eventuali difetti dei tuoi asset digitali.
		</p>

		<p>
			Le variabili da considerare sono tante, per questo è fondamentale non improvvisarsi nella
			gestione delle Facebook Ads.
		</p>

		<p>
			Se stai cercando un consulente per l&apos;Advertising del tuo business e non sai da dove
			partire, abbiamo scritto una <a
				class="base-link"
				href="https://matteofigoli.it/guida-scegliere-social-advertising/"
				target="_blank"
				rel="noreferrer">guida per scegliere il tuo consulente ideale.</a
			>
		</p>

		<a
			style="display: block; margin-top: 3em;"
			href="https://matteofigoli.it/guida-scegliere-social-advertising/"
			target="_blank"
			rel="noreferrer"
		>
			<img style="width: 100%;" src="/guida-cta.png" alt="guida social ads fornitore" />
		</a>
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
		max-width: 960px;
	}

	.tooltip {
		position: relative;
		display: inline-block;
		border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
		background-color: white;
		width: 20px;
		height: 20px;
		border-radius: 50px;
		color: #222222;
		text-align: center;
	}

	.tooltip:hover {
		cursor: pointer;
	}

	/* Tooltip text */
	.tooltip .tooltiptext {
		visibility: hidden;
		width: 150px;
		background-color: white;
		color: #222222;
		top: 100%;
		left: 50%;
		text-align: center;
		padding: 0.5em;
		margin-top: 1px;
		font-size: 0.8rem;
		margin-left: -120px;
		box-shadow: 0px 0px 25px -10px #222222;
		position: absolute;
		z-index: 1;
	}

	.tooltip:hover .tooltiptext {
		visibility: visible;
	}

	.outer-container {
		display: flex;
		width: 100%;
	}

	.inner-container {
		margin: 1em;
		padding: 0 1em;
		width: 100%;
		border: 4px solid #222222;
		box-shadow: 0.5em 0.5em 0 var(--color-theme-1);
	}

	.step {
		text-align: center;
		font-size: 1.1rem;
		font-style: italic;
		margin-top: 3em;
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

	.result-number {
		font-size: 1.5rem;
	}

	.tutorial-heading {
		margin-top: 2em;
		text-align: center;
	}

	.tutorial-text {
		max-width: 660px;
		font-size: 1.05rem;
	}

	.base-link {
		text-decoration: underline;
		color: #1e72bd;
	}

	.base-link:hover {
		color: #222222;
	}

	.divider {
		width: 100%;
		border-width: 1px;
		border-style: solid;
		margin: 3em 0;
	}

	.cta-section {
		display: flex;
	}

	.cta,
	.budget {
		width: 50%;
		margin: 2em;
		padding: 0;
	}

	.cta {
		background-color: var(--color-theme-1);
		padding: 2em;
	}

	.cta-title {
		margin: 0;
	}

	.cta-text {
		margin-bottom: 1em;
	}

	.cta-button {
		display: block;
		background-color: #222222;
		color: var(--color-theme-1);
		padding: 0.5em;
	}

	.copyright {
		text-align: center;
	}

	.copyright p {
		margin: 0.5em 0;
	}

	@media (max-width: 800px) {
		.outer-container {
			flex-direction: column;
			align-items: center;
		}

		.cta-section {
			flex-direction: column;
		}

		.cta,
		.budget {
			width: inherit;
		}
	}
</style>
