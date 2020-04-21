import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication-service';
let RegisterPage = class RegisterPage {
    constructor(authenticationService, registerInfo) {
        this.authenticationService = authenticationService;
        this.registerInfo = registerInfo;
    }
    goRegister() {
        this.registerInfo.email = "brockhayes123@gmail.com";
        this.registerInfo.password = "test";
        this.registerInfo.confirmPassword = "test";
        this.authenticationService.register(this.registerInfo);
    }
    ngOnInit() {
    }
};
RegisterPage = tslib_1.__decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.page.html',
        styleUrls: ['./register.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [AuthenticationService, Object])
], RegisterPage);
export { RegisterPage };
//# sourceMappingURL=register.page.js.map