import { ITavern, createTavernSnippet } from '../tavern';
import { FreeSpeechRules } from '../rules';

test('tavern snippets', () => {
  const name = 'Free Speech Zone';
  const domain = 'freespeech.wanderspeak.com';
  const tavern: ITavern = {
    name,
    description: null,
    domain,
    rules: FreeSpeechRules,
  };
  expect(createTavernSnippet(tavern)).toEqual({
    name,
    domain,
  });
});
