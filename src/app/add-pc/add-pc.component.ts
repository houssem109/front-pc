import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pc } from '../model/pc.model';
import { PcService } from '../service/pc.service';
import { Marque } from '../model/marque.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-pc',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-pc.component.html',
})
export class AddPcComponent implements OnInit {
  newPc = new Pc();
  marques!: Marque[];
  newIdMarque!: number;
  newMarque!: Marque;

  constructor(private pcService: PcService, private router: Router) {}

  ngOnInit(): void {
    this.pcService.ListMarques().subscribe((mars) => {
      this.marques = mars._embedded.marques;
    
  });
  }

  addPc() {
    /*    //console.log(this.newPc);
    this.newMarque = this.pcService.ConsulterMarques(this.newIdMarque);
    this.newPc.marque = this.newMarque;
    this.pcService.AjouterPc(this.newPc);
    this.router.navigate(['/pcs']); */
     this.newPc.marque = this.marques.find(
      (mar) => mar.idMarque == this.newIdMarque
    )!; 
    this.pcService.AjouterPc(this.newPc).subscribe((pc) => {
      this.router.navigate(['/pcs']);
    });
  }
}
