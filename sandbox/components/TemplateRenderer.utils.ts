import { Descendant } from 'slate';

export const serializer = (descendants: Descendant[]) => {
  const totalLines = descendants.length;
  const lines = descendants.map((line: any, i) => {
    const l = line.children
      .map((t: any) => (t.variable ? `{${t.text}}` : t.text))
      .reduce((a: any, b: any) => `${a}${b}`);

    return i < totalLines ? `\n  "${l}"` : '';
  });

  return lines.length > 1
    ? `[${lines.reduce((a: any, b: any) => `${a}${b}`)}\n]`
    : `[${lines[0]}\n]`;
};
