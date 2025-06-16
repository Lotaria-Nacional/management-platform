"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Licence = void 0;
const entity_1 = require("@/core/domain/entity");
const licence_enums_1 = require("../enums/licence.enums");
class Licence extends entity_1.Entity {
    static create(props, id) {
        return new Licence({
            ...props,
            licence_reference: props.licence_reference.toUpperCase(),
            created_at: props.created_at ?? new Date(),
        }, id);
    }
    update(data) {
        const { licence_reference, administration_id, pos_id } = data;
        if (pos_id !== undefined)
            this.props.pos_id = pos_id;
        if (licence_reference !== undefined)
            this.props.licence_reference = licence_reference.toUpperCase();
        if (administration_id !== undefined)
            this.props.administration_id = administration_id;
    }
    get licence_reference() {
        return this.props.licence_reference;
    }
    set licence_reference(value) {
        this.props.licence_reference = value.toUpperCase();
    }
    get status() {
        return this.props.status;
    }
    set status(value) {
        this.props.status = value;
    }
    get pos_id() {
        return this.props.pos_id;
    }
    set pos_id(value) {
        this.props.pos_id = value;
    }
    get administration_id() {
        return this.props.administration_id;
    }
    set administration_id(value) {
        this.props.administration_id = value;
    }
    get created_at() {
        return this.props.created_at;
    }
    checkLicenceStatus() {
        if (this.props.pos_id || this.props.pos) {
            this.status = licence_enums_1.LicenceStatusEnum.USED;
        }
    }
}
exports.Licence = Licence;
//# sourceMappingURL=licence.entity.js.map