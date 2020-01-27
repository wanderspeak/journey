import { ITavern } from './tavern';
import * as _ from 'lodash';

export interface IHero {
  id: string;
  name: string | null;
  description: string | null;
  timestamp: number;
  email: string | null;
  taverns: ITavern[];
}

export interface IHeroSnippet {
  id: string;
  name: string;
  taverns: ITavern[];
}

export const HeroSnippetFields = new Set(['id', 'name', 'taverns']);

export function createHeroSnippet(hero: IHero): IHeroSnippet {
  return _.pickBy(hero, (v, k) => HeroSnippetFields.has(k)) as IHeroSnippet;
}
