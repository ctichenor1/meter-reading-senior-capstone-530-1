import * as tslib_1 from "tslib";
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
let ConnectionService = class ConnectionService {
    constructor(http) {
        this.http = http;
        this.apiValue = new EventEmitter();
        this.apiValue.subscribe((value) => {
            this.api = 'http://${value}/api';
        });
    }
};
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], ConnectionService.prototype, "apiValue", void 0);
ConnectionService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], ConnectionService);
export { ConnectionService };
//# sourceMappingURL=connection-services.js.map