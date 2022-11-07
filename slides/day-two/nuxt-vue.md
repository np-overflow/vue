---
layout: two-cols
---

# Vue + Nuxt = ❤

<v-clicks>

* Nuxt is a framework for Vue
* Built in routing, data fetching utilities, etc
* Optimized for speed
  * Near instant loading powered by Vite
  * See your changes right after saving the file
* Build your Vue project for production
  * Automagically bundles and optimizes your code
* Allows you to use libraries from [NPM](https://npmjs.com) (Node Package Manager) and other cool Vue features

</v-clicks>

::right::

<div class="h-full flex items-center justify-center">
  <div class="flex items-center justify-center text-7xl">
    <img class="w-32" src="https://api.iconify.design/logos:vue.svg"/>
      😍
    <img class="w-40" src="https://api.iconify.design/logos:nuxt-icon.svg"/>
  </div>
</div>

---
layout: center
---

<div class="text-center">

# ⚠️ Demo on screen ⚠️

🙌 Remember to follow along! 🙌

</div>

---

# Creating a Nuxt project

* We will be using GitPod
* Click [here](https://gitpod.io/#https://github.com/np-overflow/vue) to get started

---

# Nuxt project structure

* `index.html`
  * Starting point of the Vite application
* `public`
  * Folder containing static assets, i.e. images, etc
  * Files in this folder will retain its original file name when deploying
* `src`
  * Folder containing source code

---

# Directory layout

| Path           | Purpose                             |
| -------------- | ----------------------------------- |
| `App.vue`      | Root Component                      |
| `pages/`       | Different pages of your application |
| `layouts/`     | Layouts that each page will use     |
| `composables/` | Composable functions                |
| `components/`  | Vue components                      |

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

```vue {all|1-2|1|4-5|7-8|all}
<script setup>
const I_CAN_BE_USED_IN_THE_TEMPLATE = 'hello'
</script>

<template>
  <h1>{{ I_CAN_BE_USED_IN_THE_TEMPLATE }}</h1>
</template>

<style>
</style>
```

---

# Vue Composables

* Splitting your reactive variables and logic into its own function
* Makes your reactive logic **reusable**
* Example
  * [VueUse](https://vueuse.org/functions.html), a collection of composables

#### Conventions

* File name: `snake-case`
* Composable name: `use*`
  * i.e. `useSomething`, `useFirebase`

---
layout: two-cols
---

# Vue component lifecycle

* Whenever a component shows on the screen, or disappears on the screen, we can tell Vue to call a function
* These functions are called lifecycle hooks

[Read more](https://vuejs.org/guide/essentials/lifecycle.html)

::right::

`Component.vue`

```vue {all|3|5-7|9-11|all}

<script setup>
import {onMounted, onBeforeUnmount} from 'vue'

onMounted(function () {
    console.log('The component showed on the screen')
})

onBeforeUnmount(function () {
    console.log('The component is about to disappear')
})
</script>

<template>
    <h1>HELLO!</h1>
</template>
```

---
layout: two-cols
---

# Vue props

* Props allow you to pass Javascript values to your Vue components
* To define the props of a component, use `defineProps`
* `defineProps` takes in an `Object` containing the types of your props

::right::

`Message.vue`

```html

<script setup>
    const props = defineProps({
        personName: String,
        msg: String
    })
</script>

<template>
    <span>{{ props.personName }} sent {{ props.msg }}</span>
</template>
```

`Chat.vue`

```html {all|6}
<script setup>
    import Message from 'Message.vue'
</script>

<template>
    <Message person-name="Qin Guan" msg="HELLO!"></Message>
</template>
```

---
layout: two-cols
---

# Vue slots

* Slots allow you to add template content to your Vue components
* In contrast to props, which only allows you to add Javascript values
* Add slots to a component by using `<slot></slot>`

::right::

`StyledHeader.vue`

```html {all|3}
<template>
    <h1 class="text-red-500">
        <slot></slot>
    </h1>
</template>
```

`Page.vue`

```html {all|6}
<script setup>
    import StyledHeader from 'StyledHeader.vue'
</script>

<template>
    <StyledHeader>This will be red</StyledHeader>
</template>
```

---
layout: two-cols
---

# Vue directives

These are some directives we might be using later

* `v-bind`: "binds" a reactive value to a specified attribute

Please familiarize yourself with the default directives available!

::right::

`{ setup }`

```javascript
return {
    classNames: ref('text-red-100')
}
```

`{ template }`

```html
<input v-bind:class="classNames"/>
```
