import getVariables from './server.config';
import Redis from 'ioredis';
const redisport = getVariables('redisPort');
const redishost = getVariables('redisHost');

type RedisConfigObject = {
  port: number,
  host: string
}

const config: RedisConfigObject = {
  port: parseInt(redisport),
  host: redishost
}

const redisConnection = new Redis(config);

export default redisConnection;


