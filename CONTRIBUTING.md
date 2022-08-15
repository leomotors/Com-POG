# Contributing Guideline

## Installation

### Prerequisites

- Visual Studio Code
- node 16
- pnpm 7

Or if you don't need to preview your website, you can skip these steps

### Steps

- Clone the repository (or fork)
- Run `pnpm install`
- **IMPORTANT** Run `pnpm gen`, normally this will be run in actions, so running
  it locally without github token will generate mock files (for preview only).
- Write your solution (Will be covered in next step)
- To preview the website run `pnpm dev`

## Markdown

Vitepress have special syntax on top of normal markdown magics.

See here https://vitepress.vuejs.org/guide/markdown.html

### LaTeX with KaTeX

This website use KaTeX to render latex elements, this allow you to write almost
enough LaTeX to explain the solution.

$ax^2 + bx + c = 0 \to x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$

## Writing Solution

Steps:

1. Create a `md` file in `src/solutions`
2. Because this website does not promote plagiarizing, Full Solution
  (Code that will give 100 Score without any modification)
  must be under spoiler.

To create a spoiler

````mdx
<Spoiler />

```py
print("Hello World")
```
````

Basically, you would put `<Spoiler />` in front of element you want to hide.  
Please run the local development to check if it worked correctly.

3. Add sidebar item in `src/.vitepress/solutions.ts`, existing code will tell you the format.

## Other contributions also welcomed!

- Add learning material `/learning/material`, guide, fix typo, etc.
