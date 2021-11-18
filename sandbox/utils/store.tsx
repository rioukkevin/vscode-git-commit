import { createContext, FC, ReactChild, useState } from 'react';
import { CustomElement } from '../typings/Editor';
import { IStore, IStoreTemplate } from '../typings/Store';
import { parseVariableFromTemplate } from './template';

export const DEFAULT_VALUE: IStore = {
  template: [],
  variables: {},
  setVariable: () => [],
  setTemplate: () => [],
};

export const Store = createContext<IStore>(DEFAULT_VALUE);

// Provider
export const StoreProvider: FC<any> = (props) => {
  const [template, setTemplateState] = useState<IStore['template']>([]);
  const [variables, setVariablesState] = useState<IStore['variables']>({});

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
    const keyer =
      oldVariablesNames?.length > newVariablesNames?.length
        ? oldVariablesNames
        : newVariablesNames;

    keyer.map((_, i) => {
      updateVariableName(oldVariablesNames[i], newVariablesNames[i]);
    });
  };

  return (
    <Store.Provider
      value={{
        template,
        variables,
        setTemplate,
        setVariable,
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
