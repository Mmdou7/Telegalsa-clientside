import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  bgImgUrl = "../assets/imgs/Rectangle 706.png"
  imgUrl  = "../assets/imgs/—Pngtree—e-learning education online illustration_6548963 1 copy 1.png"
  logo  = "../assets/imgs/Asset 1 1.png "


  constructor() { }

  ngOnInit(): void {
  }

}
