import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OptionselectPage } from './optionselect.page';
const routes = [
    {
        path: '',
        component: OptionselectPage
    }
];
let OptionselectPageRoutingModule = class OptionselectPageRoutingModule {
};
OptionselectPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], OptionselectPageRoutingModule);
export { OptionselectPageRoutingModule };
//# sourceMappingURL=optionselect-routing.module.js.map