"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitize = void 0;
const url_1 = require("url");
/**
 * Trims off the hash
 *
 * @param url a url, potentially with hash
 * @returns a url without has
 */
const sanitize = (url) => {
    const { protocol, host, pathname } = new url_1.URL(url);
    return `${protocol}//${host}${pathname}`;
};
exports.sanitize = sanitize;
