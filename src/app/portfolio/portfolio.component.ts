import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  showcard(){
    console.log('tmm kamal')
    document.querySelector('.p-aaa')

// $('.portfolio-modal ').click(function(){

// })
  }

}
