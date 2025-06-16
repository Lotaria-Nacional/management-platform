"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subtype = void 0;
const entity_1 = require("@/core/domain/entity");
class Subtype extends entity_1.Entity {
    static create(props, id) {
        return new Subtype({
            ...props,
            created_at: props.created_at ?? new Date(),
        }, id);
    }
    get name() {
        return this.props.name;
    }
    set name(value) {
        this.props.name = value;
    }
    get type_id() {
        return this.props.type_id;
    }
    set type_id(value) {
        this.props.type_id = value;
    }
    get created_at() {
        return this.props.created_at;
    }
}
exports.Subtype = Subtype;
//# sourceMappingURL=subtype.entity.js.map