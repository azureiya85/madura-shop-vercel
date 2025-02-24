<script lang="ts">
	export let id: string;
	export let title: string;
	export let description: string;
	export let image: string;
	export let price: number;
	export let category: string;
</script>

<a href={`/productlist/${id}`} class="block">
	<div
		class="mt-3 bg-secondary-100 border p-4 rounded shadow-sm transition-transform transform
		       hover:bg-secondary-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
	>
		<img
			src={image.trim() !== ''
				? image
				: 'https://i.pinimg.com/736x/2a/86/a5/2a86a560f0559704310d98fc32bd3d32.jpg'}
			alt={title}
			class="w-full h-40 object-cover mb-2 rounded"
		/>

		<div class="flex flex-col gap-y-5">
			<h2 class="text-lg text-slate-800 font-semibold">{title}</h2>
			<p class="text-slate-600">{description}</p>
			<p class="font-bold text-primary-500">Rp {price.toLocaleString('id-ID')}</p>
			<p class="text-sm text-gray-500">Category: {category}</p>
		</div>
	</div>
</a>
