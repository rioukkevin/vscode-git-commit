export type TVariable = {
  key: string;
  value: string;
};

export const templateParser = (template: string): string[] => {
  const matches = [...template.matchAll(/{\s*[\w\.]+\s*}/g)];
  let variables = matches
    .map((e) => e[0].match(/[\w\.]+/g))
    .map((e) => (e ? e[0] : null))
    .filter((e) => e !== null);
  // @ts-ignore
  return variables;
};

export const templateSerialize = (
  template: string,
  data: TVariable[]
): string => {
  let newTemplate = template;
  for (let i = 0; i < data.length; i++) {
    const e = data[i];
    newTemplate = newTemplate.replace(`{${e.key}}`, e.value);
  }
  return newTemplate;
};
