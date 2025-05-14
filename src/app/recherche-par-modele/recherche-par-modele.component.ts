import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PcService } from '../service/pc.service';
import { Pc } from '../model/pc.model';
import { SearchFilterPipe } from '../search-filter.pipe';

@Component({
  selector: 'app-recherche-par-modele',
  standalone: true,

  imports: [FormsModule, CommonModule,SearchFilterPipe],
  templateUrl: './recherche-par-modele.component.html',
  styles: ``,
})
export class RechercheParModeleComponent implements OnInit {
  modelePc!: string;
  pcs!: Pc[];
  allPcs!: Pc[];
  searchTerm!: string;



  constructor(private pcService: PcService) {}
  
  
  
  ngOnInit(): void {
    this.pcService.ListePcs().subscribe((pc) => {
      this.pcs = pc;
    });
  }
  /* rechercherPcs() {
    if (this.modelePc) {
      this.pcService
        .rechercherParModele(this.modelePc)
        .subscribe((pcs) => (console.log(pcs), (this.pcs = pcs)));
    } else {
      this.pcService.ListePcs().subscribe((pc) => {
        this.pcs = pc;
      });
    }
  }

 */
  OnKeyUp(filterText: string) {
    this.pcs = this.allPcs.filter((pc) =>
      pc.modele.toLowerCase().includes(filterText.toLowerCase())
    );
  }

}