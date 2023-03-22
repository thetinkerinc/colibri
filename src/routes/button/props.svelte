<script>
import Button from '$components/button.svelte';
import Prop from '$components/prop.svelte';

import typeProp from './type-prop.svelte?raw';
import disabledProp from './disabled-prop.svelte?raw';
import loadingProp from './loading-prop.svelte?raw';
import roundedProp from './rounded-prop.svelte?raw';
import hrefProp from './href-prop.svelte?raw';
import externalProp from './external-prop.svelte?raw';
import classProp from './class-prop.svelte?raw';
</script>

<style>
#wide-button :global(.full-width) {
	width: 100%;
}
</style>

<Prop name="type" type="string" code={typeProp}>
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
	<svelte:fragment slot="example">
		<div class="flex flex-col gap-2">
			<div>
				<Button type="primary">Primary button</Button>
			</div>
			<div>
				<Button type="secondary">Secondary button</Button>
			</div>
		</div>
	</svelte:fragment>
</Prop>

<Prop name="disabled" type="boolean" code={disabledProp}>
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
	<svelte:fragment slot="example">
		<Button disabled={true}>Disabled button</Button>
	</svelte:fragment>
</Prop>

<Prop name="loading" type="boolean" code={loadingProp}>
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
	<svelte:fragment slot="example">
		<Button loading={true}>Loading</Button>
	</svelte:fragment>
</Prop>

<Prop name="rounded" type="boolean" code={roundedProp}>
	<svelte:fragment slot="type">
		<span class="code">boolean</span>
	</svelte:fragment>
	<svelte:fragment slot="fallback">
		<span class="code text-sky-500">false</span>
	</svelte:fragment>
	<svelte:fragment slot="description">
		When true, will fully round the edges of the button.
	</svelte:fragment>
	<svelte:fragment slot="example">
		<Button rounded={true}>Rounded button</Button>
	</svelte:fragment>
</Prop>

<Prop name="href" type="string" code={hrefProp}>
	<svelte:fragment slot="type">
		<span class="code">string</span>
	</svelte:fragment>
	<svelte:fragment slot="fallback">--</svelte:fragment>
	<svelte:fragment slot="description">
		When set, the button will act as an
		<span class="code">{'<a>'}</span>
		tag. It won't emit the usual click event, instead it will simply navigate to the specified URL.
	</svelte:fragment>
	<svelte:fragment slot="example">
		<Button href="/">Colibri</Button>
	</svelte:fragment>
</Prop>

<Prop name="external" type="boolean" code={externalProp}>
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
	<svelte:fragment slot="example">
		<Button href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" external={true}>
			External link
		</Button>
	</svelte:fragment>
</Prop>

<Prop name="class" type="string" code={classProp}>
	<svelte:fragment slot="type">
		<span class="code">string</span>
	</svelte:fragment>
	<svelte:fragment slot="fallback">--</svelte:fragment>
	<svelte:fragment slot="description">
		Allows you to pass in extra class names which will be applied to the outer container of the
		button. Can be especially useful for extra styling when using a utility framework like Tailwind.
		But the same result can be achieved with vanilla CSS as shown below.
	</svelte:fragment>
	<svelte:fragment slot="example">
		<Button class="mb-2 w-full">Tailwind classes</Button>
		<div id="wide-button">
			<Button class="full-width">Custom CSS</Button>
		</div>
	</svelte:fragment>
</Prop>
