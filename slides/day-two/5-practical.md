---
layout: center
---

# <fluent-emoji-sparkles /> Practical time <fluent-emoji-sparkles />

---
layout: center
---

# <fluent-emoji-sparkles /> Theme Selector!! <fluent-emoji-sparkles />

---
layout: two-cols
---

# Installing Dependencies

* Install dependencies from package.json

> Installs color-modes, TailwindCSS, & Daisy UI

::right::

`Terminal`

```
pnpm install -D @nuxtjs/color-mode @nuxtjs/tailwindcss daisyui
```

---
layout: two-cols
---

# Configurations

> Create `tailwind.config.js` & `nuxt.config.ts` inside `nuxt-starter` folder

* Ensure you create these two files inside `nuxt-starter`
* Do not confuse with `nuxt-daisyui` folder

::right::

`tailwind.config.js`

```js
module.exports = {
  plugins: [require('daisyui')],
};
```


`nuxt.config.ts`

```ts
// https://v2.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  colorMode: {
    preference: 'system', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: '',
  },
})
```

---
layout: two-cols
---

# Set-up for theme.vue

> Copy paste the following into theme.vue

::right::

`theme.vue`

```html
<script setup>
const colorMode = useColorMode();
const themes = [
  'system',
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter',
];
</script>
};

```

---
layout: center
---

# <fluent-emoji-sparkles /> To-Do List!! <fluent-emoji-sparkles />
