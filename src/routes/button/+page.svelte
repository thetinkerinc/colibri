<script>
import Button from '$components/button.svelte';
import Example from '$components/example.svelte';
import Prop from '$components/prop.svelte';
</script>

<style>
#wide-button :global(.full-width) {
	width: 100%;
}
</style>

<svelte:head>
	<title>Button</title>
</svelte:head>

<div class="text-3xl mb-1">Button</div>

<div class="text-lg">
	A flexible button component suitable for various common tasks. It can act as a standard button
	which emits a click event, as a link to another page, as a trigger for an async action, and has
	the ability to confirm with the user before performing an action.
</div>

<div class="text-2xl mt-4">Basic usage</div>
<Example>
	<svelte:fragment slot="code">
		{`
        <script>
        import { Button } from 'colibri';

        function handleClick() {
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

<div class="text-2xl mt-4">Props</div>
<div class="flex flex-col gap-10">
	<!-- type -->
	<div>
		<Prop>
			<svelte:fragment slot="name">type</svelte:fragment>
			<svelte:fragment slot="type">
				<span class="code">string</span>
				- One of
				<span class="code text-rose-600">'primary'</span>
				or <span class="code text-rose-600">'secondary'</span>
			</svelte:fragment>
			<svelte:fragment slot="fallback">
				<span class="code text-rose-600">'primary'</span>
			</svelte:fragment>
			<svelte:fragment slot="description">
				Whether to use the primary or secondary theme for the button.
			</svelte:fragment>
		</Prop>
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
	</div>

	<!-- disabled -->
	<div>
		<Prop>
			<svelte:fragment slot="name">disabled</svelte:fragment>
			<svelte:fragment slot="type">
				<span class="code">boolean</span>
			</svelte:fragment>
			<svelte:fragment slot="fallback">
				<span class="code text-sky-500">false</span>
			</svelte:fragment>
			<svelte:fragment slot="description">
				When true, will disable the button as well as give visual indication to the user. Won't emit
				click events, navigate, or ask for confirmation when true.
			</svelte:fragment>
		</Prop>
		<Example>
			<svelte:fragment slot="code">
				{`
                <Button disabled={true}>Disabled button</Button>
                `}
			</svelte:fragment>
			<svelte:fragment slot="result">
				<Button disabled={true}>Disabled button</Button>
			</svelte:fragment>
		</Example>
	</div>

	<!-- loading -->
	<div>
		<Prop>
			<svelte:fragment slot="name">loading</svelte:fragment>
			<svelte:fragment slot="type">
				<span class="code">boolean</span>
			</svelte:fragment>
			<svelte:fragment slot="fallback">
				<span class="code text-sky-500">false</span>
			</svelte:fragment>
			<svelte:fragment slot="description">
				When true, will show a spinning loading indicator in place of the button's regular content.
				Won't emit click events, navigate, or ask for confirmation when true.
			</svelte:fragment>
		</Prop>
		<Example>
			<svelte:fragment slot="code">
				{`
                <Button loading={true}>Loading</Button>
                `}
			</svelte:fragment>
			<svelte:fragment slot="result">
				<Button loading={true}>Loading</Button>
			</svelte:fragment>
		</Example>
	</div>

	<!-- rounded -->
	<div>
		<Prop>
			<svelte:fragment slot="name">rounded</svelte:fragment>
			<svelte:fragment slot="type">
				<span class="code">boolean</span>
			</svelte:fragment>
			<svelte:fragment slot="fallback">
				<span class="code text-sky-500">false</span>
			</svelte:fragment>
			<svelte:fragment slot="description">
				When true, will fully round the edges of the button.
			</svelte:fragment>
		</Prop>
		<Example>
			<svelte:fragment slot="code">
				{`
                <Button rounded={true}>Rounded button</Button>
                `}
			</svelte:fragment>
			<svelte:fragment slot="result">
				<Button rounded={true}>Rounded button</Button>
			</svelte:fragment>
		</Example>
	</div>

	<!-- href -->
	<div>
		<Prop>
			<svelte:fragment slot="name">href</svelte:fragment>
			<svelte:fragment slot="type">
				<span class="code">string</span>
			</svelte:fragment>
			<svelte:fragment slot="fallback">--</svelte:fragment>
			<svelte:fragment slot="description">
				When set, the button will act as an
				<span class="code">{'<a>'}</span>
				tag. It won't emit the usual click event, instead it will simply navigate to the specified URL.
			</svelte:fragment>
		</Prop>
		<Example>
			<svelte:fragment slot="code">
				{`
                <Button href="/">Colibri</Button>
                `}
			</svelte:fragment>
			<svelte:fragment slot="result">
				<Button href="/">Colibri</Button>
			</svelte:fragment>
		</Example>
	</div>

	<!-- external -->
	<div>
		<Prop>
			<svelte:fragment slot="name">external</svelte:fragment>
			<svelte:fragment slot="type">
				<span class="code">boolean</span>
			</svelte:fragment>
			<svelte:fragment slot="fallback">
				<span class="code text-sky-500">false</span>
			</svelte:fragment>
			<svelte:fragment slot="description">
				For use in conjunction with
				<span class="code">href</span>. When true, will open the specified link in a new tab.
			</svelte:fragment>
		</Prop>
		<Example>
			<svelte:fragment slot="code">
				{`
                <Button
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    external={true}>
                    External link
                </Button>
                `}
			</svelte:fragment>
			<svelte:fragment slot="result">
				<Button href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" external={true}>
					External link
				</Button>
			</svelte:fragment>
		</Example>
	</div>

	<!-- confirm -->
	<div>
		<Prop>
			<svelte:fragment slot="name">confirm</svelte:fragment>
			<svelte:fragment slot="type">
				<span class="code">string</span>
			</svelte:fragment>
			<svelte:fragment slot="fallback">--</svelte:fragment>
			<svelte:fragment slot="description">
				When a button is clicked with
				<span class="code">confirm</span>
				set, a modal will appear first to confirm the action. The string passed will be the content of
				the modal. The click event won't be emitted until the user confirms the action, and won't be
				emitted at all if they cancel the action or close the modal.
			</svelte:fragment>
		</Prop>
		<Example>
			<svelte:fragment slot="code">
				{`
                <Button confirm="Are you sure?">Check first</Button>
                `}
			</svelte:fragment>
			<svelte:fragment slot="result">
				<Button confirm="Are you sure?">Check first</Button>
			</svelte:fragment>
		</Example>
	</div>

	<!-- class -->
	<div>
		<Prop>
			<svelte:fragment slot="name">class</svelte:fragment>
			<svelte:fragment slot="type">
				<span class="code">string</span>
			</svelte:fragment>
			<svelte:fragment slot="fallback">--</svelte:fragment>
			<svelte:fragment slot="description">
				Allows you to pass in extra class names which will be applied to the outer container of the
				button. Can be especially useful for extra styling when using a utility framework like
				Tailwind. But the same result can be achieved with vanilla CSS as shown below.
			</svelte:fragment>
		</Prop>
		<Example>
			<svelte:fragment slot="code">
				{`
                <style>
                #wide-button :global(.full-width) {
                    width: 100%;
                }
                <\/style>

                <Button class="w-full mb-2">Tailwind classes</Button>
                <div id="wide-button">
                    <Button class="full-width">Custom CSS</Button>
                </div>
                `}
			</svelte:fragment>
			<svelte:fragment slot="result">
				<Button class="w-full mb-2">Tailwind classes</Button>
				<div id="wide-button">
					<Button class="full-width">Custom CSS</Button>
				</div>
			</svelte:fragment>
		</Example>
	</div>
</div>
