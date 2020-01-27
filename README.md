# Wanderspeak: Journey

This typescript library provides the core API for the wanderspeak decentralized social network. 

## Beginning a journey

```ts
const journey = Journey.begin();
journey.set({ name: "D'Artagnan" });
journey.post('Hello, World!');
```

## Restoring a journey

```ts
// Definition for our hero, the current user
const hero = {
  id: '1234',
  name: "D'Artagnan",
  taverns: [
    {
      name: 'Wanderspeak Social',
      domain: 'social.wanderspeak.com'
    }
  ]
};

// Definition for the hero's adventure log (posts)
const log = {
  stories: [
    {
      content: 'Hello, World!',
      timestamp: 1580021475
    }
  ]
};

// User settings, keys, other confidential information
const secrets = {
  key: '45678'
}

const journey = new Journey(hero, log, secrets);
```
