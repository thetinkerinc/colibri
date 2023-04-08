<script>
import Anchored from '$components/_anchored.svelte';
import Prop from '$components/prop.svelte';

let openElem;
let openOpen = false;

let anchorElem;
let anchorOpen = false;

let positionElem;
let positionOpen;
</script>

<Prop name="open" type="boolean" code="">
	<svelte:fragment slot="type">
		<span class="code">string</span>
	</svelte:fragment>
	<svelte:fragment slot="fallback">
		<span class="code text-sky-600">false</span>
	</svelte:fragment>
	<svelte:fragment slot="description">Whether or not the content should be shown.</svelte:fragment>
	<svelte:fragment slot="example">
		<div
			class="inline-block"
			bind:this={openElem}
			on:mouseenter={() => (openOpen = true)}
			on:mouseleave={() => (openOpen = false)}>
			Hover over me
		</div>
		<Anchored open={openOpen} anchor={openElem} position="right">
			<div>Here I am</div>
		</Anchored>
	</svelte:fragment>
</Prop>

<Prop name="anchor" type="HTMLElement" code="">
	<svelte:fragment slot="type">
		<span class="code">
			<a
				href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement"
				target="_blank"
				rel="noopener noreferrer">
				HTMLElement
			</a>
		</span>
	</svelte:fragment>
	<svelte:fragment slot="fallback">--</svelte:fragment>
	<svelte:fragment slot="description">
		The element to which the content should be anchored. This should usually be obtained through
		<span class="code">bind:this</span>
		on the anchor element, which can then be passed directly in as a prop.
	</svelte:fragment>
	<svelte:fragment slot="example">
		<div
			class="inline-block"
			bind:this={anchorElem}
			on:mouseenter={() => (anchorOpen = true)}
			on:mouseleave={() => (anchorOpen = false)}>
			My anchored content should be shown
		</div>
		<Anchored open={anchorOpen} anchor={anchorElem} position="right">
			<div>Here I am</div>
		</Anchored>
	</svelte:fragment>
</Prop>

<Prop name="position" type="string" code="">
	<svelte:fragment slot="type">
		<span class="code">string</span>
		- One of
		<span class="code text-rose-500">'top'</span>,
		<span class="code text-rose-500">'left'</span>,
		<span class="code text-rose-500">'bottom'</span>,
		<span class="code text-rose-500">'right'</span>, or
		<span class="code text-rose-500">'center'</span>
	</svelte:fragment>
	<svelte:fragment slot="fallback">
		<span class="code text-rose-500">'center'</span>
	</svelte:fragment>
	<svelte:fragment slot="description">
		Where in relation to the anchor element the content should be placed. The content will try to
		stay in the preferred position when possible, but for positions other than
		<span class="code text-rose-500">'center'</span>, it will flip sides if it would otherwise be
		outside its container.
	</svelte:fragment>
	<svelte:fragment slot="example">
		<div
			class="inline-block"
			bind:this={positionElem}
			on:mouseenter={() => (positionOpen = true)}
			on:mouseleave={() => (positionOpen = false)}>
			My anchored content should be shown
		</div>
		<Anchored open={positionOpen} anchor={positionElem} position="right">
			<div>Here I am</div>
		</Anchored>
	</svelte:fragment>
</Prop>

<Prop name="nudge" type="number" code="">
	<svelte:fragment slot="type">
		<span class="code">number</span>
	</svelte:fragment>
	<svelte:fragment slot="fallback">--</svelte:fragment>
	<svelte:fragment slot="description">
		Where in relation to the anchor element the content should be placed. The content will try to
		stay in the preferred position when possible, but for positions other than
		<span class="code text-rose-500">'center'</span>, it will flip sides if it would otherwise be
		outside its container.
	</svelte:fragment>
	<svelte:fragment slot="example">
		<div
			class="inline-block"
			bind:this={positionElem}
			on:mouseenter={() => (positionOpen = true)}
			on:mouseleave={() => (positionOpen = false)}>
			My anchored content should be shown
		</div>
		<Anchored open={positionOpen} anchor={positionElem} position="right">
			<div>Here I am</div>
		</Anchored>
	</svelte:fragment>
</Prop>
