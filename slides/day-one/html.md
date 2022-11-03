# HTML elements

* Elements are the **basic building blocks** of what you see on a webpage
  * They can be anything: text, buttons, links, and more!
* Some elements usually contain other elements within them; there are some terminologies commonly used to describe the elements and their relationships to each other
    * The element containing other elements is known as the _parent_
    * The element inside another is a _child_
    * Elements in a parent are known as _siblings_ to each other

<br/>

<RunnerWebsite code="<h1>I am an element</h1><button>So am I</button>">

```html
<h1>I am an element</h1>
<button>So am I</button>
```

</RunnerWebsite>

---
layout: two-cols
---

# HTML tags

* Specifies what the element is
* Many types of elements you can choose from: [^1]
  * headings (`h1` to `h6`)
  * buttons
  * input fields (`input`)
  * containers (`div` and `span` )

*Create a tag* by wrapping an element type in `<` and `>`

Every tag **needs** a closing tag, which is created by wrapping the element type in `</` and `>`

::right::

<div class="flex flex-col h-full justify-center">

##### Headings

<RunnerWebsite code="<h1>hello</h1><h2>Smaller hello</h2>">

```html
<h1>
  hello
</h1>
<h2>
  Smaller hello
</h2>
```

</RunnerWebsite>

<br/>

##### Buttons

<RunnerWebsite code="<button>BUTTOTOOTTN</button>">

```html
<button>
  BUTTOTOOTTN
</button>
```

</RunnerWebsite>
</div>

[^1]: [A list of HTML tags; read at your own free time!](https://www.w3schools.com/TAGs/)

---
layout: two-cols
---

<div class="flex flex-col items-between">

# HTML attributes

* Additional values that configure the elements or adjust their behavior in various ways [^1]
* Some examples of attributes:
  * `style`
  * `type` (commonly used with `input` tags)
  * `className`
  * `id`

<br />

##### Inputs

<RunnerWebsite code='<div style="padding: 0.3em;"><input type="submit"/><br/><input type="date"/><br/><input type="checkbox"/></div>'>

```html
<input
  type="submit" />
<input
  type="datetime" />
<input
  type="checkbox" />
```

</RunnerWebsite>
</div>

::right::

<div class="flex flex-col h-full ml-5 justify-center">

##### Headings

<RunnerWebsite code='<h1 style="color: red;">hello</h1><h2 style="color: blue;">Smaller hello</h2>'>

```html
<h1
  style="color: red;">
  hello
</h1>
<h2
  style="color: blue;">
  Smaller hello
</h2>
```

</RunnerWebsite>

<br/>

##### Buttons

<RunnerWebsite code='<button style="background: red;">BUTTOTOOTTN</button>'>

```html
<button
  style="background: red;">
  BUTTOTOOTTN
</button>
```

</RunnerWebsite>
</div>

[^1]: [More about attributes](https://www.w3schools.com/htmL/html_attributes.asp)

