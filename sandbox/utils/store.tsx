import { createContext, FC, useState } from 'react';
import { CustomElement } from '../typings/Editor';
import { IStore, IStoreTemplate } from '../typings/Store';
import { parseVariableFromTemplate } from './template';

const DEFAULT_TEMPLATE: IStoreTemplate = [
  {
    type: 'line',
    children: [
      { text: 'feat', variable: true },
      { text: '(' },
      { text: 'scope', variable: true },
      { text: '): ' },
      { text: 'message', variable: true },
      { text: ' ' },
    ],
  },
];

export const DEFAULT_VALUE: IStore = {
  template: DEFAULT_TEMPLATE,
  variables: {},
  defaultVariablesValues: {},
  insertionMode: false,
  setVariable: () => [],
  setTemplate: () => [],
  setDefaultVariableValue: () => '',
  setInsertionMode: () => false,
};

export const Store = createContext<IStore>(DEFAULT_VALUE);

// Provider
export const StoreProvider: FC<any> = (props) => {
  const [template, setTemplateState] =
    useState<IStore['template']>(DEFAULT_TEMPLATE);
  const [variables, setVariablesState] = useState<IStore['variables']>({});
  const [insertionMode, setInsertionModeState] = useState(true);
  const [defaultVariablesValues, setDefaultVariablesValuesState] = useState<
    IStore['defaultVariablesValues']
  >({});

  const setTemplate: IStore['setTemplate'] = (value) => {
    updateVariablesNames(value);
    setTemplateState(value);
    return value;
  };
  const setVariable: IStore['setVariable'] = (name, value) => {
    setVariablesState((oldValue) => {
      return { ...oldValue, [name]: value };
    });
    return value;
  };

  const setInsertionMode: IStore['setInsertionMode'] = (value) => {
    setInsertionModeState(value);
    return value;
  };

  const setDefaultVariableValue: IStore['setDefaultVariableValue'] = (
    name,
    value
  ) => {
    setDefaultVariablesValuesState((oldValue) => ({
      ...oldValue,
      [name]: value,
    }));
    return value;
  };

  // Utils
  const updateVariableName = (oldName?: string, newName?: string) => {
    if (oldName && newName) {
      setVariablesState({
        ...variables,
        [oldName]: undefined,
        [newName]: variables[oldName],
      });
    } else if (oldName && !newName) {
      setVariablesState({
        ...variables,
        [oldName]: undefined,
      });
    }
  };

  const updateVariablesNames = (newTemplate: IStoreTemplate) => {
    const oldVariablesNames =
      parseVariableFromTemplate(template as CustomElement[]) ?? [];
    const newVariablesNames =
      parseVariableFromTemplate(newTemplate as CustomElement[]) ?? [];

    const oldChangedName = oldVariablesNames.filter(
      (n) => !newVariablesNames.includes(n)
    )[0];
    const newChangedName = newVariablesNames.filter(
      (n) => !oldVariablesNames.includes(n)
    )[0];

    updateVariableName(oldChangedName, newChangedName);
  };

  return (
    <Store.Provider
      value={{
        template,
        variables,
        insertionMode,
        defaultVariablesValues,
        setTemplate,
        setVariable,
        setDefaultVariableValue,
        setInsertionMode,
      }}
    >
      {props.children}
    </Store.Provider>
  );
};

// Consumer
interface IStoreConsumerProps {
  children: any;
}

export const StoreConsumer: FC<IStoreConsumerProps> = (props) => {
  const { children: Children } = props;
  return <Store.Consumer>{(value) => <Children {...value} />}</Store.Consumer>;
};
