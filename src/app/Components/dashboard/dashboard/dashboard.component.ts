import { Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy, OnInit {
  hide: Boolean = false;
  advancedUser: Boolean = true;
  hideNoteBar: Boolean = false;

  isExpandable: boolean = false;
  mobileQuery: MediaQueryList;
  fillerNav = Array.from({ length: 10 }, (_, i) => ``);

  fillerContent = Array.from({ length: 10 }, () =>
    "");

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private routers: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  refresh() {
    window.location.reload();
  }  
  logout() {
    sessionStorage.clear();
    localStorage.clear();
    this.routers.navigateByUrl('login');
  }
  changeHide() {
    this.hide = !this.hide;
  }
}

