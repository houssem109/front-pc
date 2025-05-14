import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Pc } from '../model/pc.model';
import { PcService } from '../service/pc.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-pcs',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './pcs.component.html',
})
export class PcsComponent implements OnInit {
  pcs!: Pc[];
  constructor(private pcService: PcService,
    public authService: AuthService
  ) {
    //this.pcs = this.pcService.ListePcs();
  }
  ngOnInit(): void {
    this.chargerPc();

  }
  chargerPc(){
    this.pcService.ListePcs().subscribe(pcs => {
      this.pcs = pcs;
      });
  }
  supprimerPc(p: Pc) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.pcService.SupprimerPc(p.idPc).subscribe(() => {
    console.log("pc supprimé");
    this.chargerPc();
    });
    } 

    
  modifierPc(p: Pc) {
    console.log(p);
  }
}
