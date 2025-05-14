import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Marque } from '../model/marque.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-marque',
  imports: [CommonModule, FormsModule],
  templateUrl: './update-marque.component.html',
  styles: ``,
})
export class UpdateMarqueComponent implements OnInit {
  @Input()
  marque!: Marque;

  @Output()
  marqueUpdated = new EventEmitter<Marque>();
  
  @Input()
  ajout!: boolean;
  ngOnInit(): void {
    console.log('ngOnInit du composant UpdateMarque ', this.marque);
  }
  constructor() {}

  saveMarque() {
    this.marqueUpdated.emit(this.marque);
  }
}
