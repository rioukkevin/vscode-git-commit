import { QuickPickItem, QuickPickOptions } from 'vscode';
import * as vscode from 'vscode';

// @types
export interface CommitType extends QuickPickItem {
  label: string
  key: string | number
  detail: string
};

export interface CommitTypesPreset {
  rioukkevin: Array<CommitType>,
  angular: Array<CommitType>
}

// Data
const commitTypesKeke: Array<CommitType> = [
  {
    label: '✨feature',
    detail: 'Select when creating new things',
    key: 'feature'
  },
  {
    label: '🐞fix',
    detail: 'Select when fixing a bug',
    key: 'fix'
  },
  {
    label: '📄docs',
    detail: 'Select when editing documentation',
    key: 'docs'
  },
  {
    label: '🖥️wip',
    detail: 'Select when work is not finished',
    key: 'wip'
  },
  {
    label: '🚅perfs',
    detail: 'Select when working on performances',
    key: 'perfs'
  },
  {
    label: '⏪rollback',
    detail: 'Select when undoing something',
    key: 'rollback'
  },
  {
    label: '🔵other',
    detail: 'Select when fixing a bug',
    key: 'other'
  }
];

const commitTypesAngular: Array<CommitType> = [
  {
    label: '✨feat',
    detail: 'Select when creating new things',
    key: 'feature'
  },
  {
    label: '🐞fix',
    detail: 'Select when fixing a bug',
    key: 'fix'
  },
  {
    label: '📄docs',
    detail: 'Select when editing documentation',
    key: 'docs'
  },
  {
    label: '🚀ci',
    detail: 'Select when editing CI scripts',
    key: 'ci'
  },
  {
    label: '🖥️build',
    detail: 'Select when concerning build change or external dependencies',
    key: 'build'
  },
  {
    label: '⚙️refactor',
    detail: 'Select when no new performances or no new functionnality',
    key: 'refactor'
  },
  {
    label: '🌈style',
    detail: 'Select when working on code style',
    key: 'style'
  },
  {
    label: '⚡perf',
    detail: 'Select when working on performances',
    key: 'perf'
  },
  {
    label: '⏪revert',
    detail: 'Select when going back',
    key: 'revert'
  },
  {
    label: '🔵test',
    detail: 'Select when adding or editing tests',
    key: 'test'
  }
];

const commitTypesSemantic: Array<CommitType> = [
  {
    label: '✨feat',
    detail: 'new feature for the user, not a new feature for build script',
    key: 'feature'
  },
  {
    label: '🐞fix',
    detail: 'bug fix for the user, not a fix to a build script',
    key: 'fix'
  },
  {
    label: '📄docs',
    detail: 'changes to the documentation',
    key: 'docs'
  },
  {
    label: '🌈style',
    detail: 'formatting, missing semi colons, etc; no production code change',
    key: 'style'
  },
  {
    label: '⚙️refactor',
    detail: 'refactoring production code, eg. renaming a variable',
    key: 'refactor'
  },
  {
    label: '🔵test',
    detail: 'adding missing tests, refactoring tests; no production code change',
    key: 'test'
  },
  {
    label: '🚀chore',
    detail: 'updating grunt tasks etc; no production code change',
    key: 'test'
  }
];


const commitTypesAlpha8: Array<CommitType> = [
  {
    label: '✨feat',
    detail: 'A new feature. Correlates with MINOR in SemVer',
    key: 'feature'
  },
  {
    label: '🐞fix',
    detail: 'A bug fix. Correlates with PATCH in SemVer',
    key: 'fix'
  },
  {
    label: '📄docs',
    detail: 'Documentation only changes',
    key: 'docs'
  },
  {
    label: '🌈style',
    detail: 'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
    key: 'style'
  },
  {
    label: '⚙️refactor',
    detail: 'A code change that neither fixes a bug nor adds a feature',
    key: 'refactor'
  },
  {
    label: '🕜perf',
    detail: 'A code change that improves performance',
    key: 'perf'
  },
  {
    label: '🧪test',
    detail: 'Adding missing or correcting existing tests',
    key: 'test'
  },
  {
    label: '🏗️build',
    detail: 'Changes that affect the build system or external dependencies (example scopes: pip, docker, npm)',
    key: 'build'
  },
  {
    label: '🤹ci',
    detail: 'Changes to our CI configuration files and scripts (example scopes: GitLabCI)',
    key: 'ci'
  }
];

// Exports
export const commitTypesSelector = (name: string): Array<CommitType> => {
  if(name === 'Angular') {return commitTypesAngular;}
  if(name === 'Semantic Commit Messages') {return commitTypesSemantic;}
  if(name === 'Alpha8') {return commitTypesAlpha8;}
  else {return commitTypesKeke;}
};

// export const commitTypes: Array<CommitType> = commitTypesKeke;

// Options
export const CommitTypeOptions: QuickPickOptions = {
  matchOnDescription: true,
  matchOnDetail: true,
  ignoreFocusOut: true,
  placeHolder: 'Now, you\'re able to choose a prefix for your commit 😉'
};
