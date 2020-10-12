export interface IAction {
  name: string;
  action: (...params: any) => string;
}

export interface IWorkflow {
  name: string;
  steps: IAction[];
}
