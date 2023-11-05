<script>
	import CategoryItem from '../../lib/components/CategoryItem.svelte';
	import { page } from '$app/stores';

	export let data;
</script>

<div class="grid grid-cols-8 gap-6">
	<div>
		<p class="text-neutral-400 uppercase text-xs font-bold">Categories</p>
		<ul class="text-white mt-2.5 space-y-1">
			<CategoryItem name="All" slug="" active={$page.route.id === '/categories'} />
			{#each data.categories as category}
				<CategoryItem
					name={category.name}
					slug={category.slug}
					active={'/' + $page.params.slug === category.slug}
				/>
			{/each}
		</ul>
	</div>
	<slot />
</div>
