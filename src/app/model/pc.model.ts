import { Marque } from "./marque.model";

export class Pc {
    idPc!: number;
    marque!: Marque;
    modele!: string;
    processeur!: string;
    memoireRAM!: number;
    capaciteStockage!: number;
    carteGraphique!: string;
    systemeExploitation!: string;
    prix!:number
    dateAchat!: Date;
    email!:string;
}