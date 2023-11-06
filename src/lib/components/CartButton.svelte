<script>
	import { get } from 'svelte/store';
	import { cartItems } from '../stores/cart';

	let quantity = get(cartItems).length;

	cartItems.subscribe((newCartItems) => {
		quantity = newCartItems.length;
	});
</script>

<div class="relative border border-white rounded-lg p-2 hover:border-blue-500 duration-300">
	<img src="shopping-cart.png" alt="Cart" class="h-4" />
	{#if quantity > 0}
		<div
			class="absolute top-[-10px] right-[-10px] p-1 w-5 h-5 bg-blue-500 flex justify-center items-center rounded-full"
		>
			<span class="text-xs text-white">{quantity}</span>
		</div>
	{/if}
</div>
