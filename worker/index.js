const keys = require('./keys');
const redis = require('redis');

const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000,
});
const sub = redisClient.duplicate();

function fib(index) {
  if (index < 3) return 1;
  return fib(index - 1) + fib(index - 2);
}

sub.on('message', (channel, msg) => {
  redisClient.hset('values', msg, fib(parseInt(msg)));
});
sub.subscribe('insert');