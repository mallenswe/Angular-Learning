import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input() element: { type: string, name: string, content: string };

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes called', { changes });
  }

  ngOnInit() {
    console.log('init called');
  }

  // ngDoCheck() {
  //   console.log('do check called')
  // }

  ngAfterContentInit() {
    console.log('After Content Init');
  }

  ngAfterContentChecked() {
    console.log('After content checked');
  }

  ngAfterViewInit() {
    console.log('after view init');
  }

  ngAfterViewChecked() {
    console.log('after view checked');
  }

  ngOnDestroy() {
    console.log('on destroy');
  }

}
