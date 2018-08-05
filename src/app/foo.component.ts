import { Component } from '@angular/core';
import {AppService, RestMsg} from './app.service'

@Component({
  selector: 'foo-details',
  providers: [AppService],  
  template: `<div class="container">
    <h1 class="col-sm-12">Message Details</h1>
    <div class="col-sm-12">
        <label class="col-sm-3">Name</label> <span>{{restMsg.name}}</span>
    </div>
    <div class="col-sm-12">
        <button class="btn btn-primary" (click)="getMsg()" type="submit">New Message</button>        
    </div>
</div>`
})

export class FooComponent {
    public restMsg = new RestMsg('Hello World');
    private restUrl = 'http://localhost:8089/api/user';  

    constructor(private _service:AppService) {}

    getMsg(){
        this._service.getResource(this.restUrl)
         .subscribe(
                     data => this.restMsg = data,
                     error =>  this.restMsg.name = 'Error');
    }
}