"use strict";
//['page','limit','sortBy','sortOrder']
Object.defineProperty(exports, "__esModule", { value: true });
const pick = (obj, keys) => {
    const finalObj = {};
    // obj sample { page: '1', limit: '2', year: '20', title: 'autumn' }
    // keys sample ['searchTerm','title','code','year']
    for (const key of keys) {
        if (obj && Object.hasOwnProperty.call(obj, key)) {
            finalObj[key] = obj[key];
        }
    }
    return finalObj;
};
exports.default = pick;
