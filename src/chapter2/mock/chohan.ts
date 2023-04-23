import { seed } from './seed';

export const chohan = (): '丁' | '半' => {
  return seed() % 2 === 0 ? '丁' : '半';
};
