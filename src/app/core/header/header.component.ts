import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router:Router) { }

  token!: string | null;

  ngOnInit(): void {
    this.token = this.readLocalStorageValue('token')

  }

  readLocalStorageValue(key: string): string|null {
    return localStorage.getItem(key);
}

  logOut(){
    localStorage.clear();
    this.router.navigateByUrl('login');

  }

}
