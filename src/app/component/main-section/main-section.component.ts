import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css']
})
export class MainSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images = ['../../assets/image/banner2.jpg', '../../assets/image/banner1.jpg', '../../assets/image/banner3.jpg']
}
