import { CustomElement } from '../typings/Editor';

export const parseVariable = (template: CustomElement[]) => {
  console.log('TOTO', template);
  if (template.length > 1) {
    return template
      .map((line) => {
        console.log('LINE', line);
        return line.children
          .filter((t: any) => t.variable)
          .map((el) => el.text);
      })
      .reduce((a: string[], b: string[]) => [...a, ...b]);
  } else {
    return template
      .find((l) => !!l.children)
      ?.children.filter((t) => !!t.variable)
      .map((el) => el.text);
  }
};
