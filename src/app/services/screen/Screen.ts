import { BreakpointObserver, BreakpointState } from "@angular/cdk/layout";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class Screen {

    deviceType = 'desktop';

    constructor(private breakpointObserver: BreakpointObserver) { 
        this.breakpointObserver.observe([
            '(max-width: 379px)',
            '(min-width: 280px) and (max-width: 399px)',
            '(min-width: 400px) and (max-width: 576px)',
            
            '(min-width: 577px) and (max-width: 750px)',

            '(min-width: 751px) and (max-width: 992px)',
            '(min-width: 993px)'
        ]).subscribe( (state:BreakpointState) => {
            if (state.breakpoints['(max-width: 379px)'] || state.breakpoints['(min-width: 280px) and (max-width: 399px)'] || state.breakpoints['(min-width: 400px) and (max-width: 576px)']) {

                this.deviceType = 'mobile';

            } else if (state.breakpoints['(min-width: 577px) and (max-width: 750px)']) {

                this.deviceType = 'tablet';

            } else {

                this.deviceType = 'desktop';

            }
        })
    }

    getScreen()  : string{
        return this.deviceType;
    }
}