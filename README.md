# SciHub tools

Some simple tools for when working with SciHub.

Functions that this package exports:

- `getPdfLink`: retrieves a link to the PDF file that SciHub unlocks for you,
  based on a given article link

## Installation

```sh
npm i @millenmortier/scihub-tools
```

## Usage

### `getPdfLink`

```js
import { getPdfLink } from '@millenmortier/scihub-tools'

async function start() {
  // ARTICLE_URL should be the url you would enter in SciHub
  // pdfLink is a link to the PDF that SciHub resultingly unlocks for you
  const pdfLink = await getPdfLink('ARTICLE_URL')
}

start().catch(console.error)
```
