import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit{
  title = 'template-demo';
  imgUrl = 'https://picsum.photos/20';
  count = 0;
  name: string = '';
  userName: string;
  private _customerName: string;
  @ViewChild('nameRef')nameElementRef:ElementRef;

  ngAfterViewInit(){
    this.nameElementRef.nativeElement.focus()
    console.log(this.nameElementRef)
  }

  get customerName(): string {
    return this._customerName;
  }

  set customerName(value: string) {
    this._customerName = value;
    if (value === 'Gans') {
      alert('hello gans');
    }
  }
  greetUser(updatedValue) {
    this.userName = updatedValue;
    if (updatedValue === 'Gans') {
      alert('hello gans');
    }
  }
  incrementCount() {
    this.count += 1;
  }
}
