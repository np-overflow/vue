import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Overflow Vue Workshop",
  description: "A VitePress Site",
  outDir: 'dist/',
  srcExclude: ["examples/**", "slides/**"],
  ignoreDeadLinks: true,
  rewrites: {
    'README.md': 'index.md'
  },
  themeConfig: {
    outline: 'deep'
  }
})
