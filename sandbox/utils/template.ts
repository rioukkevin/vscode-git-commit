import { Descendant } from 'slate';
import { CustomElement } from '../typings/Editor';

export const templateSerializer = (descendants: Descendant[]) => {
  const totalLines = descendants.length;
  const lines = descendants.map((line: any, i) => {
    const l = line.children
      .map((t: any) => (t.variable ? `{${t.text.toLowerCase()}}` : t.text))
      .reduce((a: any, b: any) => `${a}${b}`);

    return i < totalLines ? `\n  "${l}"` : '';
  });

  return lines.length > 1
    ? `[${lines.reduce((a: any, b: any) => `${a}${b}`)}\n]`
    : `[${lines[0]}\n]`;
};
export const parseVariableFromTemplate = (template: CustomElement[]) => {
  if (template.length > 1) {
    return template
      .map((line) => {
        return line.children
          .filter((t: any) => t.variable)
          .map((el) => el.text.toLowerCase());
      })
      .reduce((a: string[], b: string[]) => [...a, ...b]);
  } else {
    return template
      .find((l) => !!l.children)
      ?.children.filter((t) => !!t.variable)
      .map((el) => el.text.toLowerCase());
  }
};
