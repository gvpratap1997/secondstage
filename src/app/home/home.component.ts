import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Speech from 'speak-tts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private rout: Router) { }
  values: string;

  ngOnInit() {
    console.log("my input", this.values);
    const speech = new Speech()
    if (speech.hasBrowserSupport()) {
      speech.speak({
        text: this.values,
      }).then(() => {
        console.log("Success !")
      }).catch(e => {
        console.error("An error occurred :", e)
      })
    }
  }

  title = 'rout';
  data() {
    debugger;
    this.rout.navigate(['parent']);
  }
  doTextareaValueChange(event) {
    debugger;
    this.values = event.target.value;
    this.ngOnInit();
  }
  data2() {
    debugger;
    this.rout.navigate(['child']);
  }

}
