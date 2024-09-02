import dotenv from 'dotenv';

dotenv.config();

const _config: any = {
  port: process.env.PORT
}

function getVariables(value: string): string{
    
    if(!_config[value]) throw new Error('Invalid key passed');

    const varibles: string = _config[value];
    return varibles;
}

export default getVariables;