---
layout: cover
---
# Overflow Vue Workshop

Day [1]

6.30pm -- 8.30pm

<div class="m-6 abs-br">

Before we start, open the slides on your laptop: **https://vue.np-overflow.club**

</div>

<!--
Very color
-->

<style>
h1 {
  background-color: orange;
  background-image: linear-gradient(45deg, orange 10%, orangered 30%);
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

# Before we start...

<span class="text-xl">

How's everyone doing today?

</span>

<span class="text-4xl">

😀😔😭💔😓😞😖
<br/>
(●'◡'●)
<br/>

</span>

A few things:

* Install [Visual Studio Code](https://code.visualstudio.com)[^1]
* Visit the [workshop site (https://vue.np-overflow.club)](https://vue.np-overflow.club) often
  - All resources will be accessible from this URL, including this presentation!

[^1]: Feel free to use other text editors, but at your own discretion!

---

# Agenda of the day

| Time            | Activity          |
| --------------- | ----------------- |
| 6.30pm - 6.35pm | Arrival           |
| 6.35pm - 7.00pm | Web fundamentals  |
| 7.00pm - 7.20pm | Javascript        |
| 7.20pm - 7.30pm | Break             |
| 7.30pm - 7.45pm | Structure of HTML |
| 7.45pm - 8.30pm | VueJS |
---

# Finding your way around things

### Resources

- [https://vue.np-overflow.club](https://vue.np-overflow.club)
  - All resources will be accessible from this URL, including this presentation!

---

# Finding your way around things

### Using the slides

Interactive examples like this:

<div grid="~ gap-4 cols-2">
<div>

<Runner code="console.log('Welcome to Vue! 🐔');console.error('React > Vue');">

```js
console.log("Welcome to Vue! 🐔");
console.error("React > Vue");
```

</Runner>

are available throughout the slides!

</div>
</div>

---

# Ground rules

<div grid="~ cols-3" class="gap-20 mt-25">
<div class="flex flex-col text-center items-center">
  <img class="h-32 w-32" src="https://api.iconify.design/eos-icons:machine-learning.svg" />
  <h4>Create a conducive learning environment</h4>
</div>
<div class="flex flex-col text-center items-center">
  <img class="h-32 w-32" src="https://api.iconify.design/akar-icons:chat-question.svg" />
  <h4>Dont be afraid to ask questions</h4>
</div>
<div class="flex flex-col text-center items-center">
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="h-32 text-orange-600 w-32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M10.5 15.5c0 .37-.1.7-.28 1c-.34-.59-.98-1-1.72-1s-1.38.41-1.72 1c-.17-.3-.28-.63-.28-1c0-1.1.9-2 2-2s2 .9 2 2M23 15v3c0 .55-.45 1-1 1h-1v1c0 1.11-.89 2-2 2H5a2 2 0 0 1-2-2v-1H2c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1c0-3.87 3.13-7 7-7h1V5.73c-.6-.34-1-.99-1-1.73c0-1.1.9-2 2-2s2 .9 2 2c0 .74-.4 1.39-1 1.73V7h1c3.87 0 7 3.13 7 7h1c.55 0 1 .45 1 1m-2 1h-2v-2c0-2.76-2.24-5-5-5h-4c-2.76 0-5 2.24-5 5v2H3v1h2v3h14v-3h2v-1m-5.5-2.5c-1.1 0-2 .9-2 2c0 .37.11.7.28 1c.34-.59.98-1 1.72-1s1.38.41 1.72 1c.18-.3.28-.63.28-1a2 2 0 0 0-2-2Z"></path></svg>
<h4>Have fun!</h4>
</div>
</div>

<!--
1. We're all here to learn. It's alright if you're not familiar with things.
2. We want  to create an amazing learning experience of all of you, but that requires your participation as well. Take the initiative and clarify any doubts you may have. Be proactive in class and complete the tasks.
3. Have fun!
-->
