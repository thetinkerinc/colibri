<script>
	import Button from '$components/button.svelte';
	import Example from '$components/example.svelte';
</script>

<svelte:head>
	<title>Button</title>
</svelte:head>
<div class="text-2xl mb-1">Button</div>
<div class="text-lg">
	A flexible button component suitable for various common tasks. It can act as a standard button
	emitting a click event, as a link to another page, as a trigger for an async action, and has the
	ability to confirm with the user before performing an action.
</div>
<div class="text-xl mt-4">Basic usage</div>
<Example>
	<svelte:fragment slot="code">
		{`
    <script>
    import {Button} from 'colibri';

    function handleClick(){
        console.log('button clicked');
    }
    </script>

    <Button on:click={handleClick}>Click me</Button>
    `}
	</svelte:fragment>
	<svelte:fragment slot="result">
		<Button on:click={() => console.log('button clicked')}>Click me</Button>
	</svelte:fragment>
</Example>
<div class="text-xl mt-4">Props</div>
<div>type</div>
<Example>
	<svelte:fragment slot="code">
		{`
        <Button type="primary">Primary button</Button>
        <Button type="secondary">Secondary button</Button>
        `}
	</svelte:fragment>
	<svelte:fragment slot="result">
		<div class="flex flex-col gap-2">
			<div>
				<Button type="primary">Primary button</Button>
			</div>
			<div>
				<Button type="secondary">Secondary button</Button>
			</div>
		</div>
	</svelte:fragment>
</Example>
