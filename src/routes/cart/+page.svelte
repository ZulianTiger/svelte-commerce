<div class="text-white px-96 py-12">
	<div class="flex justify-between items-center">
		<h1 class="text-4xl font-bold">Cart</h1>
		<a href="/categories" class="text-neutral-400 underline hover:text-blue-500 duration-300"
			>Continue shopping</a
		>
	</div>
	<div class="py-12 flex flex-col space-y-4">
		{#if false}
			<p>Cart items...</p>
		{:else}
			<p class="text-center text-neutral-400 text-2xl mt-12">Your cart is empty</p>
		{/if}
	</div>
	{#if false}
		<div class="flex flex-col items-end space-y-4">
			<h2 class="text-xl font-bold">Total: $0 USD</h2>
			<button class="bg-blue-500 rouned-full px-4 py-2 font-bold hover:bg-blue-600 duration-300">
				Proceed to checkout
			</button>
		</div>
	{/if}
</div>
