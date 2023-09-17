"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginationHelpers = void 0;
const calculatePagination = (options) => {
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
exports.paginationHelpers = {
    calculatePagination,
};
