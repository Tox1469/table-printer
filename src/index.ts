// table-printer: print arrays as ASCII tables
export type Align = 'left' | 'right' | 'center';

export interface Column<T> {
  key: keyof T;
  header: string;
  align?: Align;
  width?: number;
}

function pad(str: string, width: number, align: Align): string {
  const diff = width - str.length;
  if (diff <= 0) return str;
  if (align === 'right') return ' '.repeat(diff) + str;
  if (align === 'center') {
    const l = Math.floor(diff / 2);
    return ' '.repeat(l) + str + ' '.repeat(diff - l);
  }
  return str + ' '.repeat(diff);
}

export function printTable<T extends Record<string, any>>(rows: T[], columns: Column<T>[]): string {
  const widths = columns.map((c) => {
    const headerLen = c.header.length;
    const maxData = rows.reduce((m, r) => Math.max(m, String(r[c.key] ?? '').length), 0);
    return c.width ?? Math.max(headerLen, maxData);
  });
  const sep = '+' + widths.map((w) => '-'.repeat(w + 2)).join('+') + '+';
  const renderRow = (cells: string[]) =>
    '|' + cells.map((c, i) => ' ' + pad(c, widths[i], columns[i].align ?? 'left') + ' ').join('|') + '|';
  const lines: string[] = [];
  lines.push(sep);
  lines.push(renderRow(columns.map((c) => c.header)));
  lines.push(sep);
  for (const r of rows) {
    lines.push(renderRow(columns.map((c) => String(r[c.key] ?? ''))));
  }
  lines.push(sep);
  return lines.join('\n');
}
