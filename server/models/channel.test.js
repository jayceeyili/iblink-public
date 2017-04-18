const channel = require('./channel');

test('Channel model creates new channels', () => {
  const ch1 = channel.getNewChannel();
  const ch2 = channel.getNewChannel();
  const ch3 = channel.getNewChannel();
  expect(ch1).toBe(1);
  expect(ch2).toBe(2);
  expect(ch3).toBe(3);
});

test('Channel model deletes and replaces old channels', () => {
  channel.deleteChannel(2);
  const ch2 = channel.getNewChannel();
  expect(ch2).toBe(2);
});

