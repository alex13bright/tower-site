import type { Locale } from '~/api-types/main';
import type { Room } from './Room';

export type Network = {
  data: {
    id: number;
    attributes: {
      name: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      rooms: { data: Room[] };
      locale: Locale;
      localizations: { data: Network[] };
    };
  };
};
