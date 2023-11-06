<script>
	export let data;
</script>

<div
	class="text-white group grid grid-cols-3 gap-6 mt-6 bg-black rounded-md h-[720px] border border-neutral-800 p-10"
>
	<div class="col-span-2 h-full flex items-center justify-center">
		<img
			src={data.product.image}
			alt={data.product.name}
			class="h-[500px] group-hover:h-[620px] duration-500"
		/>
	</div>
	<div class="flex flex-col space-y-4">
		<h1 class="text-5xl bold">{data.product.name}</h1>
		<div class="bg-blue-500 w-fit py-1.5 px-2.5 rounded-full">
			${parseFloat(data.product.price).toFixed(2)} USD
		</div>
		<hr />
		<p class="text-neutral-400">{data.product.description}</p>
		<button class="bg-blue-600 rounded-full px-6 py-4 hover:bg-blue-500 duration-300">
			Add to cart
		</button>
	</div>
</div>
