import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, AfterContentInit, AfterViewInit{
  name:string = 

  constructor() { 
    console.log("ChildComponent constructor");
  }

  ngOnInit(): void {
    console.log("ChildComponent ngOnInit");
  }

  ngAfterContentInit(): void {
    console.log("ChildComponent ngAfterContentInit");
  }

  ngAfterViewInit(): void {
    console.log("ChildComponent ngAfterViewInit");
  }
}