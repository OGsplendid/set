import Team from '../main';

test('should return size === 1', () => {
  const character = {
    name: 'Jhon',
    health: 10,
  };
  const team = new Team();
  team.add(character);
  expect(team.members.size).toBe(1);
});

test('should return size === 2', () => {
  const hero = { name: 'Jhon', health: 10 };
  const hero2 = { name: 'Pete', health: 15 };
  const team = new Team();
  team.addAll(hero, hero2, hero);
  expect(team.members.size).toBe(2);
});

test('turning members from Set into array', () => {
  const hero = { name: 'Jhon', health: 10 };
  const hero2 = { name: 'Pete', health: 15 };
  const team = new Team();
  team.addAll(hero, hero2, hero);
  const result = [hero, { name: 'Pete', health: 15 }];
  team.toArray();
  expect(team.toArray()).toEqual(result);
});
