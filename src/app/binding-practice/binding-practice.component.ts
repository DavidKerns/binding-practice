import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-practice',
  templateUrl: './binding-practice.component.html',
  styleUrls: ['./binding-practice.component.css']
})
export class BindingPracticeComponent implements OnInit {
myImageSource: string = 'https://i.pinimg.com/736x/e1/a0/0b/e1a00bad8d5aaf5a9c6dc13568597c23--tibetan-mastiff-puppies-mastiff-dogs.jpg';
  constructor() { }

  ngOnInit() {
  }

}
