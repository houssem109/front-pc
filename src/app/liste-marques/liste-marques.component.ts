import { Component, OnInit } from '@angular/core';
import { PcService } from '../service/pc.service';
import { Marque } from '../model/marque.model';
import { UpdateMarqueComponent } from '../update-marque/update-marque.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-liste-marques',
  imports: [CommonModule, UpdateMarqueComponent],
  templateUrl: './liste-marques.component.html',
  styles: ``,
})
export class ListeMarquesComponent implements OnInit {
  marques!: Marque[];
  updatedMar: Marque = { idMarque: 0, nomMarque: '' };
  ajout: boolean = true;

  constructor(private pcService: PcService) {}

  ngOnInit(): void {
    this.pcService.ListMarques().subscribe((mars) => {
      this.marques = mars._embedded.marques;
      console.log(mars);
    });
  }
  marqueUpdated(mar: Marque) {
    console.log('marque updated', mar);
    this.pcService.ajouterMarque(mar).subscribe(() => {
      this.chargerMarques();
    });
  }
  chargerMarques() {
    this.pcService.ListMarques().subscribe((mars) => {
      this.marques = mars._embedded.marques;
    });
  }
  updateMar(mar: Marque) {
    this.updatedMar = mar;
    this.ajout=false; 

  }
}
