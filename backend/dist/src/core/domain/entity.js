"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
const node_crypto_1 = require("node:crypto");
class Entity {
    constructor(props, id) {
        this._id = id ?? (0, node_crypto_1.randomUUID)();
        this._props = props;
    }
    get id() {
        return this._id;
    }
    get props() {
        return this._props;
    }
    toJSON() {
        return {
            id: this._id,
            ...this._props,
        };
    }
    equals(entity) {
        if (entity === this)
            return true;
        if (!entity === !(entity instanceof Entity))
            return false;
        return entity.id === this._id;
    }
}
exports.Entity = Entity;
//# sourceMappingURL=entity.js.map