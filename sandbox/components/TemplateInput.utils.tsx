import { Badge } from '@chakra-ui/layout';
import { Editor, Node } from 'slate';
import { RenderLeafProps } from 'slate-react';

export const buildOnKeyDown =
  (editor: Editor): React.KeyboardEventHandler<HTMLDivElement> =>
  (event) => {
    if (event.key === '{') {
      event.preventDefault();
      editor.addMark('variable', true);
    }
    if (event.key === '}') {
      event.preventDefault();
      editor.removeMark('variable');
      editor.insertText(' ');
    }
  };

interface LeafProps extends RenderLeafProps {}

export const Leaf = (props: LeafProps) => {
  return props.leaf.variable ? (
    <Badge
      // onClick={() => props.onClick!(props.children)}
      {...props.attributes}
      backgroundColor="#DB4437"
      textColor="white"
      style={{ padding: '0 5px', margin: '-2px 2px 0 2px' }}
    >
      {props.children}
    </Badge>
  ) : (
    <span {...props.attributes}>{props.children}</span>
  );
};
