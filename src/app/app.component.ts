import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-driven-form-2';
  @ViewChild('myForm') form: NgForm | undefined;
  
  onSubmit(){
    console.log(this.form);
  }
}
