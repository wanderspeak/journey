import { IRuleSet } from './rules';
import * as _ from 'lodash';

export interface ITavern {
  name: string | null;
  description: string | null;
  domain: string;
  rules: IRuleSet | null;
}

export interface ITavernSnippet {
  name: string;
  domain: string;
}

export const TavernSnippetFields = new Set(['name', 'domain']);

export function createTavernSnippet(hero: ITavern): ITavernSnippet {
  return _.pickBy(hero, (v, k) => TavernSnippetFields.has(k)) as ITavernSnippet;
}
