import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OptionselectPageRoutingModule } from './optionselect-routing.module';
import { OptionselectPage } from './optionselect.page';
let OptionselectPageModule = class OptionselectPageModule {
};
OptionselectPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            OptionselectPageRoutingModule
        ],
        declarations: [OptionselectPage]
    })
], OptionselectPageModule);
export { OptionselectPageModule };
//# sourceMappingURL=optionselect.module.js.map