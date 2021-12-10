import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-enviado',
  templateUrl: './email-enviado.page.html',
  styleUrls: ['./email-enviado.page.scss'],
})
export class EmailEnviadoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() { this.router.navigateByUrl('/login', { replaceUrl: true });};

}
