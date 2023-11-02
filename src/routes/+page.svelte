<script>
	export let data;
</script>

<p class="text-white">
	{#if data.products.length > 0}
		{JSON.stringify(data)}
	{:else}
		<p class="w-full text-center pt-32">No products are currently available</p>
	{/if}
</p>
