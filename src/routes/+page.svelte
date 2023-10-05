<script>
	import { fade } from 'svelte/transition';
	import welcome from '$lib/images/gnosis-logo.svg';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="gnosis wallet demo app" />
</svelte:head>

<section>
		<div class="welcome mb-4">
			<picture>
				<source srcset={welcome} type="image/svg" />
				<img src={welcome} alt="Gnosis Wallet" />
			</picture>
		</div>

	<h1 class="mb-4">
		Welcome to<br>
		<strong>Gnosis Wallet</strong>
	</h1>
</section>

<div class="w-full h-full flex flex-col items-center justify-center">
	<div style="width: 80%; height: 100%; text-align:center; margin: 0 auto">
		<button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Dark</button>
		<a href="" class="text-gray-700 mb-20">I already have a Circles account</a>
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
