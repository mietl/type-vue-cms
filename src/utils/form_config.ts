import type { ITileItem } from '@/types/form';
export function findFormItemByProp(config: ITileItem[], prop: string): ITileItem | null {
  for (let i = 0; i < config.length; i++) {
    if (config[i].prop === prop) {
      return config[i];
    }
  }

  return null;
}

