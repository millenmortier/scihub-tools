"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const url_1 = require("url");
const jsdom_1 = require("jsdom");
const url_2 = require("./url");
const SCIHUB_URL = 'https://sci-hub.hkvisa.net/';
const _getPdfUrlFromDocument = (doc) => {
    let element = doc.querySelector('#article iframe') || doc.querySelector('#article embed');
    if (!element) {
        throw new Error("Couldn't find a PDF link in the SciHub page");
    }
    return element.getAttribute('src') || '';
};
function getPdfLink(articleUrl) {
    return __awaiter(this, void 0, void 0, function* () {
        const params = new url_1.URLSearchParams({ request: articleUrl });
        const response = yield axios_1.default.post(`${SCIHUB_URL}`, params.toString());
        const { window: { document }, } = new jsdom_1.JSDOM(response.data);
        try {
            return (0, url_2.sanitize)(_getPdfUrlFromDocument(document));
        }
        catch (_a) {
            return null;
        }
    });
}
exports.default = getPdfLink;
