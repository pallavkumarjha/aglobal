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
    console.log(this.roleForm.value);
    console.log(this.accessForm.value);
  }


}
