<p align="center">
    <h1>polish-word-variations</h1>
    <div>Utility library to define and obtain word variations for polish words - singular and plural forms (dependant on count) for various polish cases.</div>
</p>

## Table of contents

1. [Getting Started](#getting-started)

2. [Usage](#usage)

3. [Features](#features)



## Getting Started
`npm i polish-word-variations`


## Usage
### General

```ts
import { wordVariations } from 'polish-word-variations';
```

### Browser

In browser wordVariations package is wrapped twice `wordVariations.wordVariations`.

```html
<script src="https://cdn.jsdelivr.net/npm/polish-word-variations@latest/dist/index.browser.js"></script>
<script>
    console.log(wordVariations.wordVariations);
</script>
```


## Features
Based on:

-   http://free.of.pl/g/grzegorj/gram/pl/gram04.html
-   https://rjp.pan.pl/index.php?option=com_content&view=article&id=1011:skadnia-liczebnikow-70&catid=44&Itemid=145

