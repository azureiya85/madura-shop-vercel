<script lang="ts">
	import { onMount } from 'svelte';
	import Card from '$lib/components/Card.svelte';
	import { data, type DataProduct } from '$lib/data/product';

	let search = '';
	let category = 'All';
	let sort = 'None';

	const categories = ['All', 'Beras', 'Minyak', 'Gula', 'Telur'];
	const sortOptions = ['None', 'Harga Terendah ke Harga Tertinggi', 'Harga Tertinggi ke Terendah'];

	let filteredProducts: DataProduct[] = [];

	// Filter, search, and sort logic
	const filterProducts = () => {
		filteredProducts = data
			.filter((product) => (category === 'All' ? true : product.category === category))
			.filter((product) =>
				[product.title, product.description, product.price.toString()].some((field) =>
					field.toLowerCase().includes(search.toLowerCase())
				)
			)
			.sort((a, b) => {
				if (sort === 'Harga Terendah ke Harga Tertinggi') {
					return a.price - b.price;
				} else if (sort === 'Harga Tertinggi ke Terendah') {
					return b.price - a.price;
				} else {
					return 0;
				}
			});
	};

	onMount(() => {
		filterProducts();
	});
</script>

<!-- Sticky Header for Search, Filter, and Sorting -->
<div
	class="sticky text-slate-800 top-0 bg-secondary-400 shadow-md p-4 flex justify-between flex-wrap gap-4 items-center z-50"
>
	<input
		type="text"
		bind:value={search}
		placeholder="Search products..."
		class="border p-2 rounded-md w-full sm:w-1/4"
		on:input={filterProducts}
	/>
	<select bind:value={category} class="border p-2 rounded-md" on:change={filterProducts}>
		{#each categories as item}
			<option value={item}>{item}</option>
		{/each}
	</select>
	<select bind:value={sort} class="border p-2 rounded-md" on:change={filterProducts}>
		{#each sortOptions as item}
			<option value={item}>{item}</option>
		{/each}
	</select>
	<div class="text-primary-50 pr-5 text-2xl ml-60 font-extrabold">Madura Shop</div>
</div>

<!-- Product Grid -->
<div class="bg-primary-50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-5">
	{#each filteredProducts as item}
		<Card
			id={item.id}
			title={item.title}
			description={item.description}
			image={item.image}
			price={item.price}
			category={item.category}
		/>
	{/each}
</div>
