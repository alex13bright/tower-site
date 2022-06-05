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
