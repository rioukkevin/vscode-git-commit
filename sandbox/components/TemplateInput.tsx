import React, {
  useMemo,
  FC,
  useCallback,
  useContext,
  useState,
  useEffect,
} from 'react';
import { createEditor, Descendant } from 'slate';
import { Slate, Editable, withReact, RenderLeafProps } from 'slate-react';
import styles from '../styles/Input.module.css';
import { DEFAULT_VALUE, Store } from '../utils/store';
import { buildOnKeyDown, Leaf } from './TemplateInput.utils';

interface IProps {}

const TemplateInput: FC<IProps> = (props) => {
  const [value, setValue] = useState<Descendant[]>(DEFAULT_VALUE['template']);

  const { template, setTemplate } = useContext(Store);

  const editor = useMemo(() => withReact(createEditor()), []);

  const handleChange = (newValue: Descendant[]) => {
    setValue(newValue);
    setTemplate(newValue);
  };

  const renderLeaf = useCallback((props: RenderLeafProps) => {
    return <Leaf {...props} />;
  }, []);

  useEffect(() => {
    setValue(template);
  }, [template]);

  return (
    <Slate editor={editor} value={value} onChange={handleChange}>
      <Editable
        className={styles.editor}
        placeholder="Enter some plain text..."
        renderLeaf={renderLeaf}
        onKeyDown={buildOnKeyDown(editor)}
      />
    </Slate>
  );
};

export default TemplateInput;
