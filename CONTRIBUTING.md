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
- [Optional] Install recommended extension if you want to work with vue part
- Run `pnpm gen` to generate required things, if you made changes to src/.vitepress/{components,spoilers} by adding, deleting or renaming files, run this command again
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
2. Full Solution (Code that can be copied and will pass in grader without any modification required)
  must be under spoiler tag, put that source code in `src/.vitepress/spoilers`.

To create a spoiler, do

```jsx
<Spoiler>
  <SPOILERNAME />
</Spoiler>
```

Where `SPOILERNAME` is `S` follows with the file name without `_`

For example, `00_Intro_01` becomes `S00Intro01`

3. Add sidebar item in `src/.vitepress/solutions.ts`
