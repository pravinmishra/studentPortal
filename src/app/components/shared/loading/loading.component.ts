import { Component } from '@angular/core';


@Component({
    selector: 'orbba-loading',
    templateUrl: 'loading.component.html',
    inputs: ['loading']
})
export class LoadingComponent {
    public loading:boolean;
    constructor(){
        this.loading = false;
    }
    
}