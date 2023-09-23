type IOptions = {
  page?: number;
  limit?: number;
  sortby?: string;
  sortorder?: "asc" | "desc";
  size?: number;
};

type IOptionsResult = {
  page: number;
  limit: number;
  skip: number;
  size: number;
  sortBy: string;
  sortOrder: "asc" | "desc";
};

const calculatePagination = (options: IOptions): IOptionsResult => {
  const page = Number(options.page || 1);
  const limit = Number(options.limit || 5);
  const size = Number(options.size || 5);
  const skip = (page - 1) * size;

  const sortBy = options.sortby || "title";
  const sortOrder = options.sortorder || "desc";

  return {
    page,
    limit,
    skip,
    size,
    sortBy,
    sortOrder,
  };
};

export const paginationHelpers = {
  calculatePagination,
};
