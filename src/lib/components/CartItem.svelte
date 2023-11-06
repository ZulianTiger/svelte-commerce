<script>
	import { removeFromCart } from '$lib/stores/cart';
	export let index;
	export let product;

	const handleRemoveFromCart = () => removeFromCart(index);
</script>

<div class="group relative grid grid-cols-6 gap-2 border-b border-neutral-600">
	<div>
		<img src={product.image} alt={product.name} />
	</div>
	<div class="col-span-3">
		<p class="text-white font-bold text-xl">{product.name}</p>
		<p class="text-neutral-500">{product.description}</p>
	</div>
	<div class="col-span-2">
		<p class="text-white">${parseFloat(product.price).toFixed(2)} USD</p>
	</div>
	<button
		class="absolute top-0 right-0 rounded-full p-1 border border-white opacity-0 group-hover:opacity-100 hover:border-red-500 duration-300"
		on:click={handleRemoveFromCart}
	>
		<img src="/delete-icon.png" alt="" class="h-4 w-4" />
	</button>
</div>
