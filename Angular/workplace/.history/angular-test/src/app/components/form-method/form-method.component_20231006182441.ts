import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-method',
  templateUrl: './form-method.component.html',
  styleUrls: ['./form-method.component.css']
})
export class FormMethodComponent implements OnInit{
  form: FormGroup

  ngOnInit(): void {
  }

}