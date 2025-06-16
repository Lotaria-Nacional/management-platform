"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanObject = cleanObject;
function cleanObject(obj) {
    return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v !== undefined));
}
//# sourceMappingURL=clean-filters.js.map