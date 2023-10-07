import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent {
  contactForm: FormGroup = new FormGroup({
    contacts: new FormArray([]) 
  });

  get contacts() {
    return this.contactForm.get("contacts") as FormArray
  }

  addContacts() {
    let newContacts: FormGroup = new FormGroup({
      address: new FormControl(),
      phone: new FormControl(),
      name: new FormControl()
    });

    this.contacts.push(newContacts);
  }

  ngOnInit() {
    // 添加默认的联系方式
    this.addContact()
  }

}
