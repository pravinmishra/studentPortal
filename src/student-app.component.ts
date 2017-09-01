import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd, NavigationStart } from '@angular/router';
import { SharedService  } from './app/components/shared/shared.service';
@Component({
  selector: 'student-app',
  templateUrl: 'student-app.component.html'
})

export class StudentAppComponent {
  public load:boolean;
  constructor(titleService: Title, router: Router, activatedRoute: ActivatedRoute,private _shareservice:SharedService) {

    router.events.subscribe(event => {
      this.load=this._shareservice.getFlag();
      //Navigation End
      if (event instanceof NavigationEnd) {
        var title = this.getTitle(router.routerState, router.routerState.root).join('-');
        if (title) {
          titleService.setTitle('Student | ' + title);
        } else {
          titleService.setTitle('Student');
        }

      }
    });
  }

  // collect that title data properties from all child routes
  // there might be a better way but this worked for me
  getTitle(state: any, parent: any) {
    var data: any = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if (state && parent) {
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }
}
