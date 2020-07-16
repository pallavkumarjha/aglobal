import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RoleDialogComponent } from '../role-dialog/role-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  ELEMENT_DATA = [
    { name: 'Home',icon: 'home',supervisor: true, super_admin: true, fleet_manager: false, driver: true,admin: true},
    { name: 'Trips',icon: 'home',supervisor: true, super_admin: true, fleet_manager: true, driver: true,admin: true},
    { name: 'Past Trips',icon: 'home',supervisor: true, super_admin: true, fleet_manager: false, driver: true,admin: true},
    { name: 'Create Trip',icon: 'home',supervisor: true, super_admin: true, fleet_manager: false, driver: true,admin: true},
    { name: 'Alerts',icon: 'home',supervisor: true, super_admin: true, fleet_manager: false, driver: true,admin: true},
    { name: 'Alert Management',icon: 'home',supervisor: true, super_admin: true, fleet_manager: false, driver: true,admin: true},
    { name: 'Sensors',icon: 'home',supervisor: true, super_admin: true, fleet_manager: false, driver: true,admin: true},
    { name: 'Add Sensors',icon: 'home',supervisor: true, super_admin: true, fleet_manager: false, driver: true,admin: true},
    { name: 'Routes',icon: 'home',supervisor: true, super_admin: true, fleet_manager: false, driver: true,admin: true},
    { name: 'Add Routes',icon: 'home',supervisor: true, super_admin: true, fleet_manager: false, driver: true,admin: true},
    { name: 'Users',icon: 'home',supervisor: true, super_admin: true, fleet_manager: false, driver: true,admin: true},
    { name: 'Add Users',icon: 'home',supervisor: true, super_admin: true, fleet_manager: false, driver: true,admin: true},
    { name: 'Dashboard',icon: 'home',supervisor: true, super_admin: true, fleet_manager: false, driver: true,admin: true},
    { name: 'Report',icon: 'home',supervisor: true, super_admin: true, fleet_manager: false, driver: true,admin: true},
    { name: 'Role Settings',icon: 'home',supervisor: true, super_admin: true, fleet_manager: false, driver: true,admin: true},
  ];

  roles = [
    {
      name: 'Supervisor',
      isActive: true,
      totalAccess: this.getAccessPoints('supervisor')
    },
    {
      name: 'Super Admin',
      isActive: true,
      totalAccess: this.getAccessPoints('super_admin')
    },
    {
      name: 'Fleet Manager',
      isActive: true,
      totalAccess: this.getAccessPoints('fleet_manager')
    },
    {
      name: 'Driver',
      isActive: true,
      totalAccess: this.getAccessPoints('driver')
    },
    {
      name: 'Admin',
      isActive: true,
      totalAccess: this.getAccessPoints('admin')
    }

  ]

  getAccessPoints(role){
    let count = 0;
    this.ELEMENT_DATA.forEach(ele => {
      if(ele[role]){
        count++;
      }
    });
    return count;
  }
  
  searchForm: FormGroup; 
  displayedColumns: string[] = ['Description','Supervisor', 'Super Admin', 'Fleet Manager', 'Driver', 'Admin'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void { 
    this.searchForm = new FormGroup({
    search: new FormControl(null),
   });
  }

  submitSearch(form){
    console.log(form);
  }

  userStatusSelect(value){
    console.log(value);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RoleDialogComponent, {
      width: '700px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      // this.animal = result;
    });
  }
}

