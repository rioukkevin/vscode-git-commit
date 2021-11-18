export interface IRendererVariable {
  label: string;
  detail?: string;
  key: string;
}

export type IRendererTemplate = string;

export interface IRenderer {
  template: IRendererTemplate;
  variables: IRendererVariable[];
}
