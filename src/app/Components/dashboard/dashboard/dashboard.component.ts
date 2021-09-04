import { Component, OnInit, Input } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LabelComponent } from '../../label/label.component';
import { LabelService } from 'src/app/Services/label/label.service';
import { DataservicesService } from 'src/app/Services/dataservices.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy, OnInit {
  hide: Boolean = false;
  advancedUser: Boolean = true;
  hideNoteBar: Boolean = false;
  labels:any
  
  isExpandable: boolean = false;
  mobileQuery: MediaQueryList;
  fillerNav = Array.from({ length: 10 }, (_, i) => ``);

  fillerContent = Array.from({ length: 10 }, () =>
    "");

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private routers: Router,
    private labeldialog: MatDialog, private label: LabelService, private data: DataservicesService) {


    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener,
    );
  }

  ngOnInit(): void {
    // this.data.recievedMessage.subscribe(response=>{
    //   this.GetAllLabel();
    // });
    this.GetAllLabel();
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  GetAllLabel() {
    this.label.GetAllLabel('Notes/GelLabel').subscribe((response: any) => {
      this.labels=response.data;
    console.log(this.label)
    // this.data.sendMessage(this.labels);
      })
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
  openDialog(labels: any) {
    let diaLogRef = this.labeldialog.open(LabelComponent, {
      data: labels,
  
    });
    console.log(labels);
    diaLogRef.afterClosed().subscribe()
  }

}

