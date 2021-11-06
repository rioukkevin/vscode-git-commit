import { BaseEditor } from 'slate';
import { ReactEditor } from 'slate-react';
import { HistoryEditor } from 'slate-history';

type CustomText = { text: string; variable?: boolean };

export type LineElement = {
  type: 'line';
  children: CustomText[];
};

type CustomElement = LineElement;

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & HistoryEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}
