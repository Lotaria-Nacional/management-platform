"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Administration = void 0;
const entity_1 = require("@/core/domain/entity");
class Administration extends entity_1.Entity {
    static create(props, id) {
        return new Administration({
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
    get licences_id() {
        return this.props.licences_id;
    }
    set licences_id(values) {
        this.props.licences_id = values;
    }
    addLicence(licenceId) {
        if (!this.props.licences_id.includes(licenceId)) {
            this.props.licences_id.push(licenceId);
        }
    }
    removeLicence(licenceId) {
        this.props.licences_id = this.props.licences_id.filter(id => id !== licenceId);
    }
    get created_at() {
        return this.props.created_at;
    }
}
exports.Administration = Administration;
//# sourceMappingURL=administration.entity.js.map