import { Injectable } from "@angular/core";
import { CounterService } from "./active-users/counter.service";

@Injectable()
export class UsersService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private counterService: CounterService) {};

SetToActive(id: number) {
  this.activeUsers.push(this.inactiveUsers[id]);
  this.inactiveUsers.splice(id, 1);
  this.counterService.incrementInactiveToActive();
}

SetToInactive(id: number) {
  this.inactiveUsers.push(this.activeUsers[id]);
  this.activeUsers.splice(id, 1);
  this.counterService.incrementActiveToInactive();
  }
}


