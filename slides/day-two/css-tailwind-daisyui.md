---
layout: cover
---

# CSS

<style>
h1 {
  background-color: #2563eb;
  background-image: linear-gradient(45deg, #2563eb 10%, #4f46e5 50%);
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
layout: two-cols
---

# CSS

* Style elements and make them look ✨ fancy ✨💄💁 [^1]
* We've already used CSS in the `style` attribute previously
  * This is called an **inline style**

[^1]: [More about CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

::right::

`index.html`

<RunnerWebsite code="<div style='background: lightblue;'>The background will be blue</div>">

```html
<div style="background: lightblue;">
  The background will be light blue
</div>
```

</RunnerWebsite>

---

# Powerful CSS

* CSS provides us a multitude of ways to style our elements

### Element ID (<code style="font-size: 1.2rem;">#</code>)

You can style every element individually! These are like inline styles but more powerful.

<div grid="~ cols-2">

```html {all|6}
<div id="bg">
  The background will be light blue
</div>

<style>
  #bg {
    background: lightblue;
  }
</style>
```

<RunnerWebsite code="<div style='background: lightblue;'>The background will be light blue</div>"/>

</div>

---

# Powerful CSS

* CSS provides us a multitude of ways to style our elements

### Classes (<code style="font-size: 1.2rem;">.</code>)

You can share styles across multiple elements!

<div grid="~ cols-2">

```html {all|1,4|9}
<div class="bg-blue">
  The background will be light blue
</div>
<div class="bg-blue">
  This background will also be light blue
</div>

<style>
  .bg-blue {
    background: lightblue;
  }
</style>
```

<RunnerWebsite code="<div style='background: lightblue;'>The background will be light blue</div><div style='background: lightblue;'>This background will also be light blue</div>"/>

</div>

---

# TailwindCSS

<v-clicks>

* [TailwindCSS](https://tailwindcss.com) is a utility-first CSS framework
* It provides small "helper" classes that you can use to
* Covers almost every styling option available in vanilla CSS
* Style your elements in every possible way

<div grid="~ cols-2" gap="3">
<div>

**Without TailwindCSS**
```html
<div style="background: #000000">
  This is black
</div>
```

</div>
<div>

**With <fluent-emoji-sparkles/> TailwindCSS <fluent-emoji-sparkles/>**
```html
<div class="bg-black">
  This is black
</div>
```

</div>
</div>

</v-clicks>

---
layout: iframe-right
url: https://vue.np-overflow.club/examples/nuxt-daisyui/theme
---

# DaisyUI

* DaisyUI is an "add on" to TailwindCSS
* It provides an opinionated style for common HTML elements

For example, this button on the right --->

<br/>

_Hint: try clicking on the option menu and changing the theme!_
