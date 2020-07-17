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
    { id:1, name: 'Home',icon: 'home',supervisor: true, super_admin: true, fleet_manager: false, driver: true,admin: true},
    { id:2, name: 'Trips',icon: 'home',supervisor: true, super_admin: true, fleet_manager: true, driver: true,admin: true},
    { id:3, name: 'Past Trips',icon: 'home',supervisor: true, super_admin: true, fleet_manager: false, driver: true,admin: true},
    { id:4, name: 'Create Trip',icon: 'home',supervisor: true, super_admin: true, fleet_manager: false, driver: true,admin: true},
    { id:5, name: 'Alerts',icon: 'home',supervisor: true, super_admin: true, fleet_manager: false, driver: true,admin: true},
    { id:6, name: 'Alert Management',icon: 'home',supervisor: true, super_admin: true, fleet_manager: false, driver: true,admin: true},
    { id:7, name: 'Sensors',icon: 'home',supervisor: true, super_admin: true, fleet_manager: false, driver: true,admin: true},
    { id:8, name: 'Add Sensors',icon: 'home',supervisor: true, super_admin: true, fleet_manager: false, driver: true,admin: true},
    { id:9, name: 'Routes',icon: 'home',supervisor: true, super_admin: true, fleet_manager: false, driver: true,admin: true},
    { id:10, name: 'Add Routes',icon: 'home',supervisor: true, super_admin: true, fleet_manager: false, driver: true,admin: true},
    { id:11, name: 'Users',icon: 'home',supervisor: true, super_admin: true, fleet_manager: false, driver: true,admin: true},
    { id:12, name: 'Add Users',icon: 'home',supervisor: true, super_admin: true, fleet_manager: false, driver: true,admin: true},
    { id:13, name: 'Dashboard',icon: 'home',supervisor: true, super_admin: true, fleet_manager: false, driver: true,admin: true},
    { id:14, name: 'Report',icon: 'home',supervisor: true, super_admin: true, fleet_manager: false, driver: true,admin: true},
    { id:15, name: 'Role Settings',icon: 'home',supervisor: true, super_admin: true, fleet_manager: false, driver: true,admin: true},
  ];

  roles = [
    {
      name: 'Supervisor',
      isActive: true,
      columnName:'supervisor',
      totalAccess: this.getAccessPoints('supervisor')
    },
    {
      name: 'Super Admin',
      isActive: true,
      columnName:'super_admin',
      totalAccess: this.getAccessPoints('super_admin')
    },
    {
      name: 'Fleet Manager',
      isActive: true,
      columnName:'fleet_manager',
      totalAccess: this.getAccessPoints('fleet_manager')
    },
    {
      name: 'Driver',
      isActive: true,
      columnName:'driver',
      totalAccess: this.getAccessPoints('driver')
    },
    {
      name: 'Admin',
      isActive: true,
      columnName:'admin',
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
      maxHeight: '700px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.transformData(result);
      // this.animal = result;
    });
  }

  transformData(result) {
    let roleName = result.name;
    roleName = roleName.split(' ').join('');
    this.ELEMENT_DATA.forEach(ele =>{
      if(ele.id == 1){
        ele[roleName] = result[1];
      }
      if(ele.id == 2){
        ele[roleName] = result[2];
      }
      if(ele.id == 3){
        ele[roleName] = result[3];
      }
      if(ele.id == 4){
        ele[roleName] = result[4];
      }
      if(ele.id == 5){
        ele[roleName] = result[5];
      }
      if(ele.id == 6){
        ele[roleName] = result[6];
      }
      if(ele.id == 7){
        ele[roleName] = result[7];
      }
      if(ele.id == 8){
        ele[roleName] = result[8];
      }
      if(ele.id == 9){
        ele[roleName] = result[9];
      }
      if(ele.id == 10){
        ele[roleName] = result[10];
      }
      if(ele.id == 11){
        ele[roleName] = result[11];
      }
      if(ele.id == 12){
        ele[roleName] = result[12];
      }
      if(ele.id == 13){
        ele[roleName] = result[13];
      }
      if(ele.id == 14){
        ele[roleName] = result[14];
      }
      if(ele.id == 15){
        ele[roleName] = result[15];
      }
    });
    let obj = {
      name: `${result.name}`,
      isActive: (result.isActive == 'true'),
      columnName: roleName,
      totalAccess: this.getAccessPoints(roleName),
    };
    this.roles.push(obj);
    this.displayedColumns.push(result.name);
    console.log(this.ELEMENT_DATA);
  }
}

