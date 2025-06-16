"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Supervision = void 0;
const entity_1 = require("@/core/domain/entity");
class Supervision extends entity_1.Entity {
    static create(props, id) {
        return new Supervision({
            ...props,
            created_at: props.created_at ?? new Date(),
            updated_at: props.updated_at ?? new Date(),
        }, id);
    }
    get agent_id() {
        return this.props.agent_id;
    }
    get image() {
        return this.props.image;
    }
    set image(image) {
        this.props.image = image;
    }
    get additional_info() {
        return this.props.additional_info;
    }
    set additional_info(value) {
        this.props.additional_info = value;
    }
    get items() {
        return this.props.items;
    }
    get created_at() {
        return this.props.created_at;
    }
    get updated_at() {
        return this.props.updated_at;
    }
}
exports.Supervision = Supervision;
//# sourceMappingURL=supervision.entity.js.map