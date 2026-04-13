[![CI](https://img.shields.io/github/actions/workflow/status/Tox1469/table-printer/ci.yml?style=flat-square&label=ci)](https://github.com/Tox1469/table-printer/actions)
[![License](https://img.shields.io/github/license/Tox1469/table-printer?style=flat-square)](LICENSE)
[![Release](https://img.shields.io/github/v/release/Tox1469/table-printer?style=flat-square)](https://github.com/Tox1469/table-printer/releases)
[![Stars](https://img.shields.io/github/stars/Tox1469/table-printer?style=flat-square)](https://github.com/Tox1469/table-printer/stargazers)

---

# table-printer

Imprime arrays como tabelas ASCII com alinhamento configuravel.

## Instalação

```bash
npm install table-printer
```

## Uso

```ts
import { printTable } from 'table-printer';

const out = printTable(
  [{ nome: 'Ana', idade: 30 }, { nome: 'Bia', idade: 25 }],
  [{ key: 'nome', header: 'Nome' }, { key: 'idade', header: 'Idade', align: 'right' }]
);
console.log(out);
```

## API

- `printTable(rows, columns)` retorna string
- `Column<T>`: `{ key, header, align?, width? }`

## Licença

MIT