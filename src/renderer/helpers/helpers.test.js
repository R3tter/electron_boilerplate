import { generateEventObj } from './index';

test('Test generateEventObj', () => {
  const event = generateEventObj('name', 'Ivan');
  console.log(event);
  expect(event).toEqual({
    target: {
      name: 'name',
      value: 'Ivan'
    }
  });
})
