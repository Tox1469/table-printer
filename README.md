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
