"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pos = void 0;
const entity_1 = require("@/core/domain/entity");
class Pos extends entity_1.Entity {
    static create(props, id) {
        return new Pos({
            ...props,
            created_at: props.created_at ?? new Date(),
        }, id);
    }
    update(data) {
        if (data.province_id)
            this.province_id = data.province_id;
        if (data.area_id)
            this.area_id = data.area_id;
        if (data.zone_id)
            this.zone_id = data.zone_id;
        if (data.type_id)
            this.type_id = data.type_id;
        if (data.subtype_id)
            this.subtype_id = data.subtype_id;
        if (data.latitude)
            this.latitude = data.latitude;
        if (data.longitude)
            this.longitude = data.longitude;
        if (data.administration_id)
            this.administration_id = data.administration_id;
        if ("agent_id" in data) {
            this.agent_id = data.agent_id ?? undefined;
        }
        if ("licence_id" in data) {
            this.licence_id = data.licence_id ?? undefined;
        }
    }
    get id_reference() {
        return this.props.id_reference;
    }
    set id_reference(value) {
        this.props.id_reference = value;
    }
    get status() {
        return this.props.status;
    }
    set status(value) {
        this.props.status = value;
    }
    get latitude() {
        return this.props.latitude;
    }
    set latitude(value) {
        this.props.latitude = value;
    }
    get longitude() {
        return this.props.longitude;
    }
    set longitude(value) {
        this.props.longitude = value;
    }
    get city_id() {
        return this.props.city_id;
    }
    set city_id(value) {
        this.props.city_id = value;
    }
    get zone_id() {
        return this.props.zone_id;
    }
    set zone_id(value) {
        this.props.zone_id = value;
    }
    get type_id() {
        return this.props.type_id;
    }
    set type_id(value) {
        this.props.type_id = value;
    }
    get subtype_id() {
        return this.props.subtype_id;
    }
    set subtype_id(value) {
        this.props.subtype_id = value;
    }
    get area_id() {
        return this.props.area_id;
    }
    set area_id(value) {
        this.props.area_id = value;
    }
    get agent_id() {
        return this.props.agent_id;
    }
    set agent_id(value) {
        this.props.agent_id = value;
    }
    get licence_id() {
        return this.props.licence_id;
    }
    set licence_id(value) {
        this.props.licence_id = value;
    }
    get province_id() {
        return this.props.province_id;
    }
    set province_id(value) {
        this.props.province_id = value;
    }
    get administration_id() {
        return this.props.administration_id;
    }
    set administration_id(value) {
        this.props.administration_id = value;
    }
    get createdAt() {
        return this.props.created_at;
    }
    set createdAt(value) {
        this.props.created_at = value;
    }
    checkPosStatus() {
        this.status = !this.props.agent;
    }
}
exports.Pos = Pos;
//# sourceMappingURL=pos.entity.js.map