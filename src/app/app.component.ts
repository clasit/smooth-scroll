import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'smooth-scroll';
  elementList = [
    1, 2, 3, 4, 5, 
    6 ,7 , 8 , 9, 10,
    11, 12, 13, 14, 15, 
    16, 17, 18, 19, 20
  ];

  public selectItem(e) {
    // (1) Get item
    const item: HTMLElement = e.target;
    const container: HTMLElement = item.parentElement;
    const frame: HTMLElement = container.offsetParent as HTMLElement;

    // item.scrollIntoView({ behavior: 'smooth' });
    console.log(container.scrollLeft, item.scrollLeft);
    console.log(`item Offset -> ${item.offsetLeft}`);

    console.log(
      item.clientWidth,
      container.offsetWidth, 
      frame.offsetWidth / 2, 
      item.offsetLeft + (frame.offsetWidth / 2));

    container.scrollLeft = item.offsetLeft - (frame.offsetWidth / 2);

    // debugger
  }
}
