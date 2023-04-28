<table
	class="my-2 w-full border-separate border-spacing-0
           overflow-hidden rounded-lg border border-gray-400">
	<tr class="bg-gray-200">
		<th>Name</th>
		<th>Type</th>
		<th>Default</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>
			<span class="code text-black">
				<slot name="name" />
			</span>
		</td>
		<td>
			<slot name="type" />
		</td>
		<td>
			<slot name="fallback" />
		</td>
		<td>
			<slot name="description" />
		</td>
	</tr>
</table>

<style>
th,
td {
	@apply py-2 px-4;
}
th:not(:last-child),
td:not(:last-child) {
	@apply border-r border-r-gray-400;
}
th {
	@apply border-b border-b-gray-400;
}
</style>
