import type { Locale } from './main';
import type { Network } from './Network';

export type Room = {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: Locale;
    main: {
      id: string;
      network: {
        data: Network[];
      };
    };
  };
};
