# colibri

Colibri is a lightweight, customizable component library for Svelte apps. Our goal is to provide you with a set of components for the majority of common use cases, letting you build on top of that to realize your ideas without worrying about finding or building basic interactive elements. We also want to give you the flexibility to style the components however you want while keeping things consistent for you.

See our documentation at https://colibri-thetinkerinc.vercel.app/

[![npm version](https://badge.fury.io/js/@thetinkerinc%2Fcolibri.svg)](https://badge.fury.io/js/@thetinkerinc%2Fcolibri)

## Getting started

1.  Install the library

```
npm install @thetinkerinc/colibri
```

2.  Import the base styles and a theme somehwere that will apply to all pages of your app.
    For SvelteKit this will usually be in your root +layout.svelte file

```
<script>
    import '@thetinkerinc/colibri/styles/all.css';
    import '@thetinkerinc/colibri/themes/colibri.css';
</script>
```

3. Start using components

```
 <script>
import { Button } from '@thetinkerinc/colibri';

function handleClick() {
    console.log("That's all there is to it!");
}
</script>

<Button on:click={handleClick}>Click me</Button>
```

This is a new library, so we're still working on adding new components and features as well as working on stability. If something isn't working as you'd expect, or if there is a component you would like to see, please open up an issue! We'll try to get on it as soon as possible.

In the meantime, here's our current roadmap of what we'd like to work on:

- More components!
  - We have a few more components in development, but we would like to expand even more to make sure we have you covered in almost any situation
- More themes + theme editor
  - We currently only have a light and dark mode. We want to give you more options, as well as the ability to easily create your own custom themes.
- Showcase
  - We want to see whatyou make with Colibri!
- Accessibility
  - We want to make sure all components adhere to best practices to be able to reach as many people as possible
