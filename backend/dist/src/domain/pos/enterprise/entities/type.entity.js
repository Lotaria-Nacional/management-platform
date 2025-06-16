"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Type = void 0;
const entity_1 = require("@/core/domain/entity");
class Type extends entity_1.Entity {
    static create(props, id) {
        return new Type({
            ...props,
            subtypes: props.subtypes ?? [],
            created_at: props.created_at ?? new Date(),
        }, id);
    }
    get name() {
        return this.props.name;
    }
    set name(value) {
        this.props.name = value;
    }
    get subtypes() {
        return this.props.subtypes ?? [];
    }
    set subtypes(value) {
        this.props.subtypes = value;
    }
    get created_at() {
        return this.props.created_at;
    }
}
exports.Type = Type;
//# sourceMappingURL=type.entity.js.map