import { Component, OnInit } from '@angular/core';
import { Pc } from '../model/pc.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Marque } from '../model/marque.model';
import { PcService } from '../service/pc.service';

@Component({
  selector: 'app-recherche-par-marque',
  standalone: true,

  imports: [CommonModule,FormsModule],
  templateUrl: './recherche-par-marque.component.html',
  styles: ``,
})
export class RechercheParMarqueComponent implements OnInit {
  pcs!: Pc[];
  idMarque!: number;
  marques!: Marque[];

  constructor(private pcService: PcService ) {}

  ngOnInit(): void {
    this.pcService.ListMarques().subscribe((mars) => {
      this.marques = mars._embedded.marques;
      console.log(mars);
    });
  }
  onChange() {
    this.pcService
      .rechercherParMarque(this.idMarque)
      .subscribe((pc) => (this.pcs = pc));
  }
}
