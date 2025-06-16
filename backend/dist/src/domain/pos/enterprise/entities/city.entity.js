"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.City = void 0;
const entity_1 = require("@/core/domain/entity");
class City extends entity_1.Entity {
    static create(props, id) {
        return new City({
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
    get province_id() {
        return this.props.province_id;
    }
    set province_id(value) {
        this.props.province_id = value;
    }
    get created_at() {
        return this.props.created_at;
    }
    get areas() {
        return this.props.areas;
    }
    set areas(value) {
        this.props.areas = value;
    }
}
exports.City = City;
//# sourceMappingURL=city.entity.js.map