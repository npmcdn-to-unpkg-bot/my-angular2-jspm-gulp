// import {Component, View, bootstrap} from 'angular2/angular2';
import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';


@Component({
    selector: 'my-app',
    template: `
    <h1>Contact</h1> 
    <ul>
        <li *ngFor="#contact of contacts; #i = index; #last = last; #even = even; #odd = odd;"
            (click)="selectContact(contact)">
            {{ i }}: {{ contact.name }}
        </li>
    </ul>
    
    <pre>{{ contact | json}}</pre>
    `
})
class AppComponent {
    constructor() {
        this.contact = {};
        this.contacts = [
            {
                name: 'ding', 
                age: 50
            }, 
            {
                name: 'xiao', 
                age: 20
            }, 
            {
                name: 'ming',
                age: 25
            }
        ]
        this.isShowDetail = false;
    }
    
    toggleDetail() {
        this.isShowDetail = !this.isShowDetail;
    }
    selectContact(contact) {
        this.contact = contact;
    }
}


bootstrap(AppComponent);