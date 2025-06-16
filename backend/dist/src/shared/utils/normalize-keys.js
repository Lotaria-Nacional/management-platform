"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeKeys = normalizeKeys;
function normalizeKeys(obj) {
    const normalized = {};
    for (const key in obj) {
        const cleanKey = key.toLowerCase().replace(/\s+/g, "");
        normalized[cleanKey] = obj[key];
    }
    return normalized;
}
//# sourceMappingURL=normalize-keys.js.map