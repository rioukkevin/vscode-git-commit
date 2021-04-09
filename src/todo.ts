import { IQuickPickItem } from './typings/quickPick';

type IParamsVariable = string | IQuickPickItem[];

// Process
/**
 * parseTemplate
 * forEach variables
 *    if variable in params.variables
 *      if variable.type === string
 *         get options from configFiles
 *         display select
 *      if variable.type === array
 *         display variable with contnet in params
 *    else
 *       display fulltext
 * */
