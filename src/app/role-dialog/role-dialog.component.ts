import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-role-dialog',
  templateUrl: './role-dialog.component.html',
  styleUrls: ['./role-dialog.component.scss']
})
export class RoleDialogComponent implements OnInit {

  
  matcher = new MyErrorStateMatcher();

  roleForm: FormGroup;
  accessForm: FormGroup;

  constructor(private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<RoleDialogComponent>) {}


  roleFormSubmit(form){
    console.log(form);
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.roleForm = this._formBuilder.group({
      name: ['', Validators.required],
      isActive: [null, Validators.required]
    });

    this.accessForm = this._formBuilder.group({
      home: this._formBuilder.group({
        mobile: [],
        web: []
      }),
      trips: this._formBuilder.group({
        mobile: [],
        web: []
      }),
      past_trips: this._formBuilder.group({
        mobile: [],
        web: []
      }),
      create_trip: this._formBuilder.group({
        mobile: [],
        web: []
      }),
      alerts: this._formBuilder.group({
        mobile: [],
        web: []
      }),
      alert_management: this._formBuilder.group({
        mobile: [],
        web: []
      }),
      sensors: this._formBuilder.group({
        mobile: [],
        web: []
      }),
      add_sensors: this._formBuilder.group({
        mobile: [],
        web: []
      }),
      routes: this._formBuilder.group({
        mobile: [],
        web: []
      }),
      add_routes: this._formBuilder.group({
        mobile: [],
        web: []
      }),
      users: this._formBuilder.group({
        mobile: [],
        web: []
      }),
      add_users: this._formBuilder.group({
        mobile: [],
        web: []
      }),
      dashboard: this._formBuilder.group({
        mobile: [],
        web: []
      }),
      report: this._formBuilder.group({
        mobile: [],
        web: []
      }),
      role_settings: this._formBuilder.group({
        mobile: [],
        web: []
      }),
    });
  }

  submitRoleData(){
    let data = this.transformData(this.roleForm.value, this.accessForm.value);
  }

  transformData(roleForm, accessForm){
    let data = {
      name: roleForm.name,
      isActive: roleForm.isActive.mobile || roleForm.isActive.web,
      10: accessForm.add_routes || accessForm.add_routes,
      12: accessForm.add_users.mobile || accessForm.add_users.web,
      8: accessForm.add_sensors.mobile || accessForm.add_sensors.web,
      5: accessForm.alerts.mobile || accessForm.alerts.web,
      6: accessForm.alert_management.mobile || accessForm.alert_management.web,
      13: accessForm.dashboard.mobile || accessForm.dashboard.web,
      4: accessForm.create_trip.mobile || accessForm.create_trip.web,
      3: accessForm.past_trips.mobile || accessForm.past_trips.web,
      1: accessForm.home.mobile || accessForm.home.web,
      15: accessForm.role_settings.mobile || accessForm.role_settings.web,
      14: accessForm.report.mobile || accessForm.report.web,
      7: accessForm.sensors.mobile || accessForm.sensors.web,
      9: accessForm.routes.mobile || accessForm.routes.web,
      11: accessForm.users.mobile || accessForm.users.web,
      2: accessForm.trips.mobile || accessForm.trips.web
    }

    this.dialogRef.close(data);
  }
}
