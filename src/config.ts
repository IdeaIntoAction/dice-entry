import nodeConfig from 'config';

export interface IConfig {
  server: {
    port: number,
  },
  auth: {
    secret: string,
  }
}

export const config: IConfig = {
  server: nodeConfig.get('server'),
  auth: nodeConfig.get('auth'),
};
