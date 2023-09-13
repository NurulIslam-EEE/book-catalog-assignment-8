export type IPaginationOptions = {
  page?: number;
  limit?: number;
  sortBy?: string;
  skip?: number;
  sortOrder?: "asc" | "desc";

  size?: number;
  total?: number;
  totalPage?: number;
};
