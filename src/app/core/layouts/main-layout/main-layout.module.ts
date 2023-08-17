import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from "./components/main-layout.component";
import { AppHeaderComponent } from "../../components/app-header/app-header.component";
import { AppFooterComponent } from "../../components/app-footer/app-footer.component";
import { SharedModule } from "../../../shared/shared.module";
import { CoreModule } from "../../core.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";


@NgModule({
    declarations: [
        MainLayoutComponent,
        AppHeaderComponent,
        AppFooterComponent
    ],
    imports: [
        CommonModule,
        MainLayoutRoutingModule,
        SharedModule,
        CoreModule,
        FontAwesomeModule,
        NgOptimizedImage
    ],
    exports: []
})
export class MainLayoutModule {
}
