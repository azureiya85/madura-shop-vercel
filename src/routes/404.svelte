<script lang="ts">
	import { goto } from '$app/navigation';
</script>

<div class="flex flex-col items-center justify-center h-screen bg-gray-100 text-center gap-y-5">
	<h1 class="text-6xl font-bold text-amber-700">404</h1>
	<p class="text-xl font-bold text-amber-500">Halaman tidak ditemukan</p>
	<button
		class="bg-secondary-500 hover:bg-secondary-700 font-semibold text-white p-3 rounded-md"
		on:click={() => goto('/productlist')}
	>
		Silahkan kembali ke halaman utama
	</button>
</div>
