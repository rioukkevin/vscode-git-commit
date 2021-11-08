import React, { FC } from 'react';
import { Descendant } from 'slate';
import Pre from './core/Pre';
import { serializer } from './TemplateRenderer.utils';

interface IProps {
  template: Descendant[];
}

const TemplateRenderer: FC<IProps> = (props) => {
  const { template } = props;
  return <Pre>{`"vscodeGitCommit.template": ${serializer(template)}`}</Pre>;
};

export default TemplateRenderer;
