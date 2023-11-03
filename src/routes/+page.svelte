<script>
	export let data;
</script>

<p class="text-white">
	{#if data.products.length > 0}
		{#each data.products as product}
			<p>{product.name} / {product.price} / {product.description}</p>
		{/each}
	{:else}
		<p class="w-full text-center pt-32">No products are currently available</p>
	{/if}
</p>
