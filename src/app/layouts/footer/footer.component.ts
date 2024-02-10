import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  constructor() {

  }

  date!:number ;

  ngOnInit(): void{
    const todayd = new Date()
    this.date = todayd.getFullYear();
  }
}
