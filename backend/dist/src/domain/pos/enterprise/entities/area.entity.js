"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Area = void 0;
const entity_1 = require("@/core/domain/entity");
class Area extends entity_1.Entity {
    static create(props, id) {
        return new Area({
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
    get city_id() {
        return this.props.city_id;
    }
    set city_id(value) {
        this.props.city_id = value;
    }
    get created_at() {
        return this.props.created_at;
    }
    get zones() {
        return this.props.zones;
    }
    set zones(value) {
        this.props.zones = value;
    }
}
exports.Area = Area;
//# sourceMappingURL=area.entity.js.map