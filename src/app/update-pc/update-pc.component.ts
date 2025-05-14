import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PcService } from '../service/pc.service';
import { Pc } from '../model/pc.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Marque } from '../model/marque.model';

@Component({
  selector: 'app-update-pc',
  standalone: true,
  imports: [FormsModule, CommonModule],

  templateUrl: './update-pc.component.html',
  styles: ``,
})
export class UpdatePcComponent implements OnInit {
  currentPc = new Pc();

  marques!: Marque[];
  updateIdMarque! : number;
  constructor(
    private pcService: PcService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.pcService.ListMarques().subscribe((mars) => {
      this.marques = mars._embedded.marques;
      console.log(mars);
    });
    this.pcService.ConsulterPc(this.activatedRoute.snapshot.params['id']).subscribe((pc) => {
      this.currentPc = pc;
      this.updateIdMarque = this.currentPc.marque.idMarque;
    })
  }

  updatePc() {

    this.currentPc.marque = this.marques.find(
      (mar) => mar.idMarque == this.updateIdMarque
    )!;
    this.pcService.updatePc(this.currentPc).subscribe((pc) => {
      this.router.navigate(['/pcs']);
    });
  }
}
