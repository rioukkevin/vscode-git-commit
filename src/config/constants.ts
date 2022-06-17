import { IQuickPickSettings } from '../typings/quickPick';
import { EXTENSION_NAME } from './const';

export const QUICKPICKITEMSKEKE: Array<IQuickPickSettings> = [
  {
    label: '✨feature',
    detail: 'Select when creating new things',
  },
  {
    label: '🐞 fix',
    detail: 'Select when fixing a bug',
  },
  {
    label: '📄 docs',
    detail: 'Select when editing documentation',
  },
  {
    label: '🖥️ wip',
    detail: 'Select when work is not finished',
  },
  {
    label: '🚅 perfs',
    detail: 'Select when working on performances',
  },
  {
    label: '⏪ rollback',
    detail: 'Select when undoing something',
  },
  {
    label: '🔵 other',
    detail: 'Select when fixing a bug',
  },
];

export const QUICKPICKITEMSANGULAR: Array<IQuickPickSettings> = [
  {
    label: '✨ feat',
    detail: 'Select when creating new things',
  },
  {
    label: '🐞 fix',
    detail: 'Select when fixing a bug',
  },
  {
    label: '📄 docs',
    detail: 'Select when editing documentation',
  },
  {
    label: '🚀 ci',
    detail: 'Select when editing CI scripts',
  },
  {
    label: '🖥️ build',
    detail: 'Select when concerning build change or external dependencies',
  },
  {
    label: '⚙️ refactor',
    detail: 'Select when no new performances or no new functionnality',
  },
  {
    label: '🌈 style',
    detail: 'Select when working on code style',
  },
  {
    label: '⚡ perf',
    detail: 'Select when working on performances',
  },
  {
    label: '⏪ revert',
    detail: 'Select when going back',
  },
  {
    label: '🔵 test',
    detail: 'Select when adding or editing tests',
  },
];

export const QUICKPICKITEMSSEMANTIC: Array<IQuickPickSettings> = [
  {
    label: '✨ feat',
    detail: 'new feature for the user, not a new feature for build script',
  },
  {
    label: '🐞 fix',
    detail: 'bug fix for the user, not a fix to a build script',
  },
  {
    label: '📄 docs',
    detail: 'changes to the documentation',
  },
  {
    label: '🌈 style',
    detail: 'formatting, missing semi colons, etc; no production code change',
  },
  {
    label: '⚙️ refactor',
    detail: 'refactoring production code, eg. renaming a variable',
  },
  {
    label: '🔵 test',
    detail:
      'adding missing tests, refactoring tests; no production code change',
  },
  {
    label: '🚀 chore',
    detail: 'updating grunt tasks etc; no production code change',
  },
];

export const QUICKPICKITEMSALPHA8: Array<IQuickPickSettings> = [
  {
    label: '✨ feat',
    detail: 'A new feature. Correlates with MINOR in SemVer',
  },
  {
    label: '🐞 fix',
    detail: 'A bug fix. Correlates with PATCH in SemVer',
  },
  {
    label: '📄 docs',
    detail: 'Documentation only changes',
  },
  {
    label: '🌈 style',
    detail:
      'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
  },
  {
    label: '⚙️ refactor',
    detail: 'A code change that neither fixes a bug nor adds a feature',
  },
  {
    label: '🕜 perf',
    detail: 'A code change that improves performance',
  },
  {
    label: '🧪 test',
    detail: 'Adding missing or correcting existing tests',
  },
  {
    label: '🏗️ build',
    detail:
      'Changes that affect the build system or external dependencies (example scopes: pip, docker, npm)',
  },
  {
    label: '🤹 ci',
    detail:
      'Changes to our CI configuration files and scripts (example scopes: GitLabCI)',
  },
];

export const QUICKPICKITEMSUNDEFINED: Array<IQuickPickSettings> = [
  {
    label: 'Unknow Variable',
    detail: `It seems like you use an undefined preset in  setting ${EXTENSION_NAME}.variables`,
  },
];
