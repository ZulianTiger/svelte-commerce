<script>
	import CartButton from './CartButton.svelte';
</script>

<nav class="flex justify-between items-center py-6 text-neutral-400 font-bold">
	<ul class="flex items-center space-x-8">
		<li>
			<a href="/">
				<img src="/logo.png" alt="Svelte Commerce Logo" />
			</a>
		</li>
		<li>
			<a href="/categories" class="hover:text-blue-500 duration-300"> Categories </a>
		</li>
		<li>
			<a href="/about" class="hover:text-blue-500 duration-300"> About </a>
		</li>
	</ul>
	<div>
		<a href="/cart">
			<CartButton />
		</a>
	</div>
</nav>
