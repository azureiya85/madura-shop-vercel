<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { data } from '$lib/data/product';
	import { get } from 'svelte/store';
	import type { DataProduct } from '$lib/data/product';

	let id: string;
	let product: DataProduct | undefined = undefined; // Explicitly define the type

	// Get the `id` from the URL
	onMount(() => {
		const $page = get(page);
		id = $page.params.id;

		product = data.find((item) => item.id === id);

		// Redirect to /404 if product is not found
		if (!product) {
			goto('/errorpage');
		}
	});
</script>

{#if product}
	<div class="bg-primary-50 w-screen h-screen flex justify-center items-center p-5">
		<div class="h-1/2 flex bg-secondary-100 rounded-md">
			<div class="w-1/2 p-5 rounded-md">
				<img
					src={product.image !== ''
						? product.image
						: 'https://i.pinimg.com/736x/2a/86/a5/2a86a560f0559704310d98fc32bd3d32.jpg'}
					class="w-full h-full rounded-md"
				/>
			</div>
			<div class="flex flex-col gap-y-5 justify-center">
				<h2 class="font-semibold text-lg text-slate-700">{product.title}</h2>
				<p class="text-md text-slate-500">{product.detail}</p>
				<p class="font-semibold text-md text-primary-500">Rp {product.price}</p>
				<button
					class="p-3 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-semibold w-40 h-14"
				>
					Beli Sekarang!
				</button>
			</div>
		</div>
	</div>
{:else}
	<h2 class="text-amber-700 font-semibold text-lg">Maaf, produk yang anda cari tidak ada!</h2>
{/if}
