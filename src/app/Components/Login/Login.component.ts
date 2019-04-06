import { Component, OnInit } from '@angular/core';
import { TouchID } from '@ionic-native/touch-id/ngx';
import { Routes, RouterModule,Router } from '@angular/router';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.scss']
})
export class LoginComponent implements OnInit {

  constructor(private touchId: TouchID,private router :Router) { 
    this.ScanFinger();
  }

  PrintFinger()
  {
this.ScanFinger()
  }

  ScanFinger()
  {
    this.touchId.isAvailable()
  .then(
    function(msg) {alert('ok: ' + msg)}, // success handler: fingerprint accepted
   function(msg) {alert('not ok: ' + JSON.stringify(msg))}
  );

this.touchId.verifyFingerprint('Scan your fingerprint please')
  .then(
    function(msg) {
      this.router.navigate(['/Home'])
    }, // success handler: fingerprint accepted
    function(msg) {alert('not ok: ' + JSON.stringify(msg))}
  );

  }
  Login()
  {
    this.router.navigate(['/Home'])
  }

  ngOnInit() {
  }

}
