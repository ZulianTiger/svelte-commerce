<script>
	import ShopCard from '../lib/components/ShopCard.svelte';

	export let data;
</script>

<div class="grid grid-cols-3 gap-6 mt-6 mb-6">
	{#if data.products.length > 0}
		{#each data.products as product}
			<ShopCard id={product.id} name={product.name} price={product.price} image={product.image} />
		{/each}
	{:else}
		<p class="w-full text-center pt-32">No products are currently available</p>
	{/if}
</div>
