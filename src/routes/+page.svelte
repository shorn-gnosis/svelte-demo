<script>
	import welcome from '$lib/images/gnosis-logo.svg';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="gnosis wallet demo app" />
</svelte:head>

<section>
		<div class="welcome">
			<picture>
				<source srcset={welcome} type="image/svg" />
				<img src={welcome} alt="Gnosis Wallet" />
			</picture>
		</div>

	<h1>
		Welcome to<br>
		<strong>Gnosis Wallet</strong>
	</h1>
</section>

<div class="w-full h-full bg-gray-100 flex flex-col items-center justify-center">
	<div style="width: 80%; height: 100%; text-align:center; margin: 0 auto">
		<button>Create a new wallet</button>
		<p class="text-gray-700 text-lg font-semibold mb-20">I already have a Circles account</p>
	</div>
	
	<!-- Other elements from the design -->
  </div>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: end;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
