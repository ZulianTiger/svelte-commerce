<script>
	export let name;
	export let slug;
	export let active;

	import { classes } from '$lib/helpers/classes';
</script>

<li>
	<a
		href={`/categories${slug}`}
		class={classes(
			'hover:text-blue-500 duration-300',
			active ? 'text-blue-500 underline' : 'text-white'
		)}
	>
		{name}
	</a>
</li>
