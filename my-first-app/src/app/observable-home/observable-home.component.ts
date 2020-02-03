import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable, Observer} from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { ObservableUserService } from '../observable-user/observable-user.service';
@Component({
  selector: 'app-observable-home',
  templateUrl: './observable-home.component.html',
  styleUrls: ['./observable-home.component.css']
})
export class ObservableHomeComponent implements OnInit, OnDestroy {
  private firstObservableSubscription: Subscription;
  private activatedSub: Subscription;
  userActivated = false;

  constructor(private observableUserService: ObservableUserService) { }

  ngOnInit() {
    this.activatedSub = this.observableUserService.activatedEmiiter.subscribe(didActivate => {
      this.userActivated = didActivate;
    });
    // this.firstObservableSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });
    const customIntervalObservable =  new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('count is greater than 3'));
        }
        count++;
      }, 1000);
    });

    this.firstObservableSubscription = customIntervalObservable.pipe(filter(data => {
      return data > 0;
    }), map((data: number)  => {
      return `Round: ${(data + 1)}`;
    })).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error.message);
    }, () => {
      console.log('Completed');
    });
  }
  ngOnDestroy(): void {
    this.firstObservableSubscription.unsubscribe();
    this.activatedSub.unsubscribe();
  }

}
