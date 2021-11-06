import React, { useState, useMemo, FC, useCallback, useEffect } from 'react';
import { createEditor, Descendant, Element, Node } from 'slate';
import { Slate, Editable, withReact, RenderLeafProps } from 'slate-react';
import styles from '../styles/Input.module.css';
import { buildOnKeyDown, Leaf } from './TemplateInput.utils';

interface IProps {
  onType: (value: Descendant[]) => void;
}

const initialValue: Descendant[] = [
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

const TemplateInput: FC<IProps> = (props) => {
  const [value, setValue] = useState<Descendant[]>(initialValue);
  const editor = useMemo(() => withReact(createEditor()), []);

  const handleChange = (newValue: Descendant[]) => {
    // @ts-ignore
    window.toto = newValue;
    setValue(newValue);
    props.onType(newValue);
  };

  const handleClickLeaf = (children: any) => {
    console.log(children.props.text.text);
  };

  useEffect(() => {
    props.onType(initialValue);
  }, []);

  const renderLeaf = useCallback((props: RenderLeafProps) => {
    return <Leaf onClick={handleClickLeaf} {...props} />;
  }, []);

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
