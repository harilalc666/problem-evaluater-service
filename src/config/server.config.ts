import dotenv from 'dotenv';

dotenv.config();

const _config: any = {
  port: process.env.PORT,
  redisPort: process.env.REDIS_PORT,
  redisHost: process.env.REDIS_HOST,
}

function getVariables(value: string): string {
    
    if(!_config[value]) throw new BaseException('Invalid key passed', 400);

    const varibles: string = _config[value];
    return varibles;
}

export default getVariables;