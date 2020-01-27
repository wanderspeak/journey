import { IHero, createHeroSnippet } from '../hero';

test('hero snippets', () => {
  const hero: IHero = {
    id: '1234',
    name: 'John',
    description: null,
    timestamp: 123,
    email: null,
    taverns: [],
  };
  expect(createHeroSnippet(hero)).toEqual({
    id: '1234',
    name: 'John',
    taverns: [],
  });
});
