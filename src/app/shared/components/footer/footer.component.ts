import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  textFooter = "There is no one who loves pain itself, who seeks after it who seeks after it and wants to have it, simply because it is pain"


  constructor() { }

  ngOnInit(): void {
  }

}
