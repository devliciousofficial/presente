import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  public inicio: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.inicio = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
