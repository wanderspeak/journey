import { Journey } from '../journey';

test('verify begin journey', () => {
  const journey = Journey.begin();
  expect(journey.hero).toHaveProperty('id');
  expect(journey.hero.name).toBeNull();
  expect(journey.hero.description).toBeNull();
  expect(journey.hero.email).toBeNull();
  expect(journey.hero).toHaveProperty('timestamp');
  expect(journey.hero.taverns).toEqual([]);
  expect(journey.log.stories).toEqual([]);
  expect(journey.getSecrets()).toEqual({ keys: {} });
});

test('verify set', () => {
  const TestName = 'John';
  const journey = Journey.begin();
  expect(journey.hero.name).toBeNull();
  journey.set({ name: TestName });
  expect(journey.hero.name).toEqual(TestName);
});

test('verify secrets', () => {
  // Test values
  const Server1 = 'tavern.wanderspeak.com';
  const ServerKey1 = '1234';
  const Server2 = 'science.wanderspeak.com';
  const ServerKey2 = '5678';

  // Begin a journey
  const journey = Journey.begin();

  // Set the first secret; the key for a server
  expect(journey.getSecrets()).toEqual({ keys: {} });
  journey.setSecrets({ keys: { [Server1]: ServerKey1 } });
  expect(journey.getSecrets()).toEqual({
    keys: {
      [Server1]: ServerKey1,
    },
  });

  // Set the second secret; a key for another server
  journey.setSecrets({ keys: { [Server2]: ServerKey2 } });
  expect(journey.getSecrets()).toEqual({
    keys: {
      [Server1]: ServerKey1,
      [Server2]: ServerKey2,
    },
  });

  // Get the entire keys property
  expect(journey.getSecret('keys')).toEqual({
    [Server1]: ServerKey1,
    [Server2]: ServerKey2,
  });
  expect(journey.getSecret('doesnotexist')).toBeNull();

  // Get specific keys
  expect(journey.getSecret(['keys', Server1])).toEqual(ServerKey1);
  expect(journey.getSecret(['keys', Server2])).toEqual(ServerKey2);
  expect(journey.getSecret(['keys', 'doesnotexist'])).toBeNull();
});

test('verify post', () => {
  // Test values
  const postContent1 = 'Hello, World!';
  const postContent2 = 'World, Hello!';

  // Begin a journey
  const journey = Journey.begin();
  expect(journey.log.stories).toHaveLength(0);

  // Make the first post
  journey.post(postContent1);
  expect(journey.log.stories).toHaveLength(1);
  expect(journey.log.stories[0].content).toEqual(postContent1);

  // Make the second post
  journey.post(postContent2);
  expect(journey.log.stories).toHaveLength(2);
  expect(journey.log.stories[0].content).toEqual(postContent2);
  expect(journey.log.stories[1].content).toEqual(postContent1);
});
