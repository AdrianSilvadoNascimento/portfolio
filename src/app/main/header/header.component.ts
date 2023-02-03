import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  years: number = 21
  yearToCount: number = 2023

  constructor() {}

  ngOnInit(): void {
    const birthdayDate = new Date(this.yearToCount, 10, 8).getDate()
    const today = new Date().getDate()

    if (today === birthdayDate) {
      this.years++
      this.yearToCount++
    }
  }
}
