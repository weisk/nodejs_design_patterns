# 1. suggestion: aysnc your callbacks

the following signature is the conventional 'callback pattern'

```js
readFile(file, 'utf8', (err, content) => {
```

which we can 'coolify' with util.promisify ;D (node builtin library)

```js
import { promisify } from 'util';
import { readFile } from 'fs';

const read = promisify(readFile);
```

now `read` returns a promise, so we can do this now:

```js
async function find(file) {
  try {
    const content = await read(file);
    console.log(content);
  } catch (err) {
    throw err;
  }
}
```

# 2.  question:

- what will happen in your implementation if I want to find all occurrences
of 'her'?

