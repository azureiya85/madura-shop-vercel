<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { data } from '$lib/data/product';
	import { goto } from '$app/navigation';
	import { get } from 'svelte/store';

	let id = get(page).params.id; // Correct way to get URL params
	let product = data.find((item) => item.id === id);

	// Redirect if product is not found
	onMount(() => {
		if (!product) {
			goto('/404'); // Redirect to 404 page
		}
	});
</script>

{#if product}
	<div class="w-screen h-screen flex justify-center items-center p-5">
		<div class="h-1/2 flex bg-slate-200 rounded-md">
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
				<p class="font-semibold text-md text-red-500">Rp {product.price}</p>
				<button class="p-3 bg-amber-600 text-white rounded-md font-semibold w-40 h-14">
					Beli Sekarang!
				</button>
			</div>
		</div>
	</div>
{:else}
	<h2 class="text-amber-700 font-semibold text-lg">Maaf, produk yang anda cari tidak ada!</h2>
{/if}
