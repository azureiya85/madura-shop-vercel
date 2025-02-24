<script lang="ts">
	import Layout from './Layout.svelte';
	import { goto } from '$app/navigation';

	function handleShopNow() {
		goto('/productlist');
	}
</script>

<Layout>
	<div class="flex w-full h-full">
		<div
			class="w-full h-screen flex flex-col gap-y-20 justify-center items-start bg-secondary-400 p-10"
		>
			<div class="font-bold text-2xl">
				<p>Madura Shop - Buka Sampai Kiamat</p>
			</div>
			<div class="font-medium">
				<p>Belanja Sembako Murah & Terjangkau!</p>
				<p>Dapatkan harga terbaik untuk kebutuhan sehari-hari hanya di Madura Shop</p>
			</div>
			<button
				on:click={handleShopNow}
				class="bg-primary-600 hover:bg-primary-700 rounded-md text-center p-3 font-semibold"
			>
				Belanja Sekarang
			</button>
		</div>
		<div class="w-full h-screen flex justify-center items-center">
			<img
				src="https://i.pinimg.com/736x/69/9e/63/699e632ee8a0e8eb0be76f42bd7adc55.jpg"
				class="w-80 h-80 rounded-md"
			/>
		</div>
	</div>
</Layout>
