"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Province = void 0;
const entity_1 = require("@/core/domain/entity");
class Province extends entity_1.Entity {
    static create(props, id) {
        return new Province({
            ...props,
            created_at: props.created_at ?? new Date()
        }, id);
    }
    get name() {
        return this.props.name;
    }
    set name(value) {
        this.props.name = value;
    }
    get created_at() {
        return this.props.created_at;
    }
    get cities() {
        return this.props.cities;
    }
    set cities(value) {
        this.props.cities = value;
    }
}
exports.Province = Province;
//# sourceMappingURL=province.entity.js.map