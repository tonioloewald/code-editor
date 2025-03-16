# code-editor

[github](https://github.com/tonioloewald/code-editor/) | [live demo](https://tonioloewald.github.io/code-editor/) | [npm](https://www.npmjs.com/package/xin-code-editor)

This is a `xinjs` component blueprint that inserts a code editor (using the [Ace editor](https://ace.c9.io/)).

This means you can insert a code editor with syntax highlighting as simply as this:

```
// grab xinjs from a cdn
<script type="module">
  import 'https://cdn.jsdelivr.net/npm/xinjs@0.8.8/dist/module.js'
</script>
<xin-loader>
  <xin-blueprint tag="code-editor" src="https://tonioloewald.github.io/code-editor/dist/blueprint.js"></xin-blueprint>
</xin-loader>
<code-editor mode="javascript">
  console.log('hello world')
</code-editor>
```
