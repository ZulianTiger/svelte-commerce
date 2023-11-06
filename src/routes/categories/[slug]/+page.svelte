<script>
	import ShopCard from '$lib/components/ShopCard.svelte';
	export let data;
</script>

<div class="col-span-7 grid grid-cols-3 gap-6">
	{#if data.category.products.length > 0}
		{#each data.category.products as product}
			<ShopCard id={product.id} name={product.name} price={product.price} image={product.image} />
		{/each}
	{:else}
		<p class="text-center text-neutral-400 text-2xl col-span-3 mt-12">No products found</p>
	{/if}
</div>
