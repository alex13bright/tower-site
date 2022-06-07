import {Locale} from "~/core/types";

export type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};
export type ApiListResponse<T> = {
  data: T[];
  meta: {
    pagination: Pagination;
  };
};
export type Network = {
  data: {
    id: number;
    attributes: {
      name: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      // rooms: { data: Room[] };
      locale: Locale;
      localizations?: { data: Network[] };
    };
  };
};
export type Room = {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: Locale;
    localizations?: { data: Room[] };
    main: {
      id: string;
      network: {
        data: Network[];
      };
    };
  };
};
