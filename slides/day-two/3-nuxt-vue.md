---
layout: cover
---

<img class="w-100" src="https://api.iconify.design/logos:nuxt.svg"/>

---
layout: two-cols
---

# Vue + Nuxt = <fluent-emoji-green-heart/>

<v-clicks>

* Nuxt is a framework for Vue, built on Node.js
* Built in routing, data fetching utilities, etc
* Optimized for speed
  * Near instant loading powered by Vite [^1]
  * See your changes right after saving the file
* Build your Vue project for production
  * Automagically bundles and optimizes your code
* Allows you to use libraries from [npm](https://npmjs.com) (Node Package Manager) and other cool Vue features

</v-clicks>

::right::

<div class="h-full flex items-center justify-center">
  <div class="flex items-center justify-center text-7xl gap-4">
    <img class="w-32" src="https://api.iconify.design/logos:vue.svg"/>
    <fluent-emoji-smiling-face-with-heart-eyes/>
    <img class="w-40" src="https://api.iconify.design/logos:nuxt-icon.svg"/>
  </div>
</div>

[^1]: [What is Vite?](https://vitejs.dev/guide/why.html#why-vite)

---
layout: center
---

<div class="text-center">

# <fluent-emoji-warning/> Demo on screen <fluent-emoji-warning/>

<fluent-emoji-raising-hands/> Remember to follow along! <fluent-emoji-raising-hands/>

</div>

---

# Get started with Nuxt

We've created a starter project for you!

<Task>

1. Copy and paste the following code into your terminal:

```bash
cd examples/nuxt-starter && pnpm dev
```

2. Click "Open Preview"

![GitPod Prompt](/images/gitpod-prompt.png)

3. Admire the starter project while waiting for others

</Task>

---

# Project structure

These are the most important files/folders. [See even more here](https://v3.nuxtjs.org/guide/directory-structure/nuxt).

| File/folder      | Description                    |
| ---------------- | ------------------------------ |
| `package.json`   | The npm packages your app uses |
| `app.vue`        | Starting point of your Vue app |
| `nuxt.config.ts` | Nuxt configuration file        |
| `layouts/`       | Layouts for your pages         |
| `pages`          | Pages of your app              |
| `public/`        | Static files (e.g. images)     |

---
layout: two-cols
---

# Vue SFC

* **SFC**: Single File Components
* Combines CSS, HTML, and JS into a single `.vue` file
* Recommended way to write Vue components
* Provides some time saving features

* `<script setup>` contains the `setup` function
  * Any variables declared here can be used in the template

::right::

`Component.vue`

```vue {all|1|2|5,7|6|all}
<script setup>
const I_CAN_BE_USED_IN_THE_TEMPLATE = 'hello'
</script>

<template>
  <h1>{{ I_CAN_BE_USED_IN_THE_TEMPLATE }}</h1>
</template>

<style>
</style>
```
