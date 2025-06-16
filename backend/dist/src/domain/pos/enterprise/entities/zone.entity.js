"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zone = void 0;
const entity_1 = require("@/core/domain/entity");
class Zone extends entity_1.Entity {
    static create(props, id) {
        return new Zone({
            ...props,
            created_at: props.created_at ?? new Date()
        }, id);
    }
    get area_id() {
        return this.props.area_id;
    }
    set area_id(value) {
        this.props.area_id = value;
    }
    get value() {
        return this.props.value;
    }
    set value(value) {
        this.props.value = value;
    }
    get created_at() {
        return this.props.created_at;
    }
}
exports.Zone = Zone;
//# sourceMappingURL=zone.entity.js.map