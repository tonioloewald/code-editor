# code-editor

[github](https://github.com/tonioloewald/code-editor/) | [live demo](https://tonioloewald.github.io/code-editor/) | [npm](https://www.npmjs.com/package/code-editor)

**blueprint src url** `https://tonioloewald.github.io/code-editor/dist/blueprint.js`

To create your own web-component blueprint, simply use `code-editor` thus:

```
npx code-editor my-custom-element
```

> The example web-component is a toggle-switch.

```
<code-editor id="basic" checked>
  <div slot="on">on</div>
  <div slot="off">off</div>
</code-editor>
```

## Loading a blueprint

If you just want to bundle the component…

```
import { makeComponent } from 'xinjs'
import blueprint from 'code-editor'

const { creator } = makeBlueprint( 'code-editor', blueprint )

document.body.append( creator() )
```

If you want to use a CDN:

```
<script type="module">
  import 'https://cdn.jsdelivr.net/npm/xinjs@0.7.1/dist/module.js'
</script>
<xin-loader>
  <xin-blueprint tag="code-editor" src="https://tonioloewald.github.io/code-editor/dist/blueprint.js"></xin-blueprint>
</xin-loader>
<code-editor></code-editor>
```

You can also use `<xin-loader>` and `<xin-blueprint>` or `makeComponent` to load blueprints at runtime.

## Development

This project is designed for use with [Bun](https://bun.sh).

The blueprint code is `./src/blueprint.ts` and unless it's complicated there's no reason
it can't all be in one source file.

`./index.html` exercises your blueprint.

To install dependencies:

```bash
bun install
```

To run:

```bash
bun start
```

## Development

This project is designed for use with [Bun](https://bun.sh).

The blueprint code is `./src/blueprint.ts` and unless it's complicated there's no reason
it can't all be in one source file.

`./index.html` exercises your blueprint.

To install dependencies:

```bash
bun install
```

To run:

```bash
bun start
```
