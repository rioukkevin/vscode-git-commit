export interface IAction {
  name: string;
  action: (...params: any) => string;
}
