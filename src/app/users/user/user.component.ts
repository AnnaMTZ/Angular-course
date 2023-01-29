import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number; name: string };

  paramsSubscription: Subscription;

  // needs to be injected to have access to a currently loaded route (js object with a lot of metadata about this route)
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'], // retrieving the id from app.modules users/:id path
      name: this.route.snapshot.params['name'], // retrieving the id from app.modules users/:name path
    };
    // to get the data which changes
    this.paramsSubscription = this.route.params // params is an observable (helps to work with async tasks)
      .subscribe((params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      });
  }

  /// subscription is not getting destroyed when a component gets destroyed, adding this lifecycle will unsubscribe
  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
