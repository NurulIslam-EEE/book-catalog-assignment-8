type IOptions = {
  page?: number;
  limit?: number;
  sortBy?: string;
  size?: number;
};

type IOptionsResult = {
  page: number;
  limit: number;
  skip: number;
  size: number;
  sortBy: string;
};

const calculatePagination = (options: IOptions): IOptionsResult => {
  const page = Number(options.page || 1);
  const limit = Number(options.limit || 5);
  const size = Number(options.size || 5);
  const skip = (page - 1) * size;

  const sortBy = options.sortBy || "createdAt";

  return {
    page,
    limit,
    skip,
    size,
    sortBy,
  };
};

export const paginationHelpers = {
  calculatePagination,
};
