import * as tslib_1 from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConnectionService } from './connection-services';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
let AuthenticationService = class AuthenticationService {
    constructor(http, connectionService) {
        this.http = http;
        this.connectionService = connectionService;
    }
    register(registerModel) {
        return this.http.post(`${this.connectionService.api}/mobile/Auth/Register`, registerModel)
            .map((res) => {
            return res;
        })
            .catch((err) => {
            return Observable.throw(err);
        });
    }
    login(loginModel) {
        return this.http.post(`${this.connectionService.api}/mobile/Login`, loginModel)
            .map((res) => {
            return res;
        })
            .catch((err) => {
            return Observable.throw(err);
        });
    }
};
AuthenticationService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [HttpClient,
        ConnectionService])
], AuthenticationService);
export { AuthenticationService };
//# sourceMappingURL=authentication-service.js.map