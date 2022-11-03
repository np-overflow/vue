---
theme: geist
colorSchema: light
highlighter: shiki
drawings:
  persist: true
fonts:
  sans: Inter
  mono: Jetbrains Mono
  weights: 200,400,600,800

info: |
  # Overflow Vue Workshop

  Part one

  Links to other slides:
    * [Part one](https://vue.np-overflow.club/day-one)
    * [Part two](https://vue.np-overflow.club/day-two)

src: introduction.md
---

---
layout: cover
---

# Web Fundamentals

6.35pm - 7.20pm

<style>
h1 {
  background-color: orange;
  background-image: linear-gradient(45deg, orange 10%, orangered 50%);
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

# How does the web work?

HTTP: Hypertext Transfer Protocol [^1]

<v-click>

Sending data (files) over the internet

* The foundation of any data exchange on the Web

</v-click>

<v-click>

Request --> Response

* A client-server protocol; requests are initiated by the recipient, usually the Web browser

</v-click>

::right::

<div v-click class="flex h-full items-center">

```mermaid {scale:0.5}
sequenceDiagram
  participant L as Your laptop
  participant W as Rando web server

  L->>W: Give me content
  W->>L: Content
```

</div>

[^1]: [Learn more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)

---

# HTTP status codes

<v-clicks>

* Indicates the type of response; each range represents a different kind
* Number ranging from `100` - `599`

</v-clicks>

<v-click>

| Range         | Type                  | Common examples             |
| ------------- | --------------------- | --------------------------- |
| `100` - `199` | Information responses | `101` Switching Protocol    |
| `200` - `299` | Successful responses  | `200` OK                    |
| `300` - `399` | Redirection messages  | `301` Moved Permanently     |
| `400` - `499` | Client errors         | `404` Not Found             |
| `500` - `599` | Server errors         | `503` Service Unavailable   |

</v-click>

---
layout: center
---

# HTML, CSS, JS

<style>
h1 {
  background-color: blueviolet;
  background-image: linear-gradient(45deg, blueviolet 20%, red 80%);
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

# HTML, CSS, JS

* HTML: Hypertext Markup Language
  * Provides the content of your webpage

* CSS: Cascading Style Sheets
  * Provides styling of your webpage

* JS: JavaScript
  * Provides the functionality of your webpage

::right::

<div flex="~ col" class="h-full justify-center">
  <div class="flex justify-between">
    <img class="w-32" src="https://api.iconify.design/logos:javascript.svg"/>
    <img class="w-32" src="https://api.iconify.design/logos:css-3.svg"/>
  </div>
  <img class="w-32 self-center" src="https://api.iconify.design/logos:html-5.svg"/>
</div>

---
src: ./html.md
---


---
layout: cover
---

# Break

7.35pm - 7.45pm

<style>
h1 {
  background-color: orange;
  background-image: linear-gradient(45deg, orange 10%, orangered 50%);
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>
---
src: ./js-part-1.md
---



---
src: ./js-part-2.md
---

---
layout: center
---

# A HTML file

---
src: ./html-file-structure.md
---
---
layout: center
---

# Vue

<style>
h1 {
  background-color: green;
  background-image: linear-gradient(315deg,#42d392 15%, #647eff);
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
src: ./vue.md
---

---

# Practical time


* Build a to do list
* **Bonus 🏆**: Add funny styles
* **Bonus 🏆**: Add grouping for your to do items


---
layout: cover
---

# Thank you for comming !

(☞ﾟヮﾟ)☞ ☜(ﾟヮﾟ☜)

<style>
h1 {
  background-color: orange;
  background-image: linear-gradient(45deg, orange 10%, orangered 50%);
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

<div flex="~ col" class="h-full justify-center">

 <img class="w-64 self-center" src="https://user-images.githubusercontent.com/53942938/199658874-9a7c189b-4c1c-4e34-ac0c-09d01e0ae8ad.png"/> 

</div>

