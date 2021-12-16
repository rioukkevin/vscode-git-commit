import React, { FC, useContext } from 'react';
import { Descendant } from 'slate';
import { Store } from '../utils/store';
import { templateSerializer } from '../utils/template';
import Pre from './core/Pre';

interface IProps {}

const TemplateRenderer: FC<IProps> = (props) => {
  const { template } = useContext(Store);
  return (
    <Pre>{`"vscodeGitCommit.template": ${templateSerializer(template)}`}</Pre>
  );
};

export default TemplateRenderer;
