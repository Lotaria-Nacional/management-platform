"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UserRoleEnum = void 0;
const entity_1 = require("@/core/domain/entity");
exports.UserRoleEnum = {
    ADMIN: "Admin",
    AREA_MANAGER: "Area manager",
    SUPERVISOR: "Supervisor",
};
class User extends entity_1.Entity {
    static create(props) {
        return new User({
            ...props,
            created_at: props.created_at ?? new Date()
        });
    }
    get first_name() {
        return this.props.first_name;
    }
    set first_name(value) {
        this.props.first_name = value;
    }
    get last_name() {
        return this.props.last_name;
    }
    set last_name(value) {
        this.props.last_name = value;
    }
    get email() {
        return this.props.email;
    }
    set email(value) {
        this.props.email = value;
    }
    get password() {
        return this.props.password;
    }
    set password(value) {
        this.props.password = value;
    }
    get role() {
        return this.props.role;
    }
    set role(value) {
        this.props.role = value;
    }
}
exports.User = User;
//# sourceMappingURL=user.js.map