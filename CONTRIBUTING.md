# Contributing Guideline

## Installation

### Prerequisites

- Visual Studio Code
- node 16 (recommended)
- yarn

Or if you don't need to preview your website, you can skip these steps

### Steps

- Clone the repository (or fork)
- Run `yarn install`
- [Optional] Install recommended extension if you want to work with vue part
- Run `yarn gen` to generate required things, if you made changes to src/.vitepress/{components,spoilers} by adding, deleting or renaming files, run this command again
- To preview the website run `yarn dev`

## Markdown

Vitepress have special syntax on top of normal markdown magics.

See here https://vitepress.vuejs.org/guide/markdown.html

### LaTeX with KaTeX

This website use KaTeX to render latex elements, this allow you to write almost
enough LaTeX to explain the solution.

$ax^2 + bx + c = 0 \to x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$
