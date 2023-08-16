import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AccessTokenInterceptor } from "./interceptors/access-token.interceptor";
import { UnauthorizedInterceptor } from "./interceptors/unauthorized.interceptor";
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';

@NgModule({
    declarations: [
    AppHeaderComponent,
    AppFooterComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        HttpClientModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AccessTokenInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: UnauthorizedInterceptor,
            multi: true
        }
    ]
})
export class CoreModule {
}
