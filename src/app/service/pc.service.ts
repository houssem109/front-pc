import { Injectable } from '@angular/core';
import { Pc } from '../model/pc.model';
import { Marque } from '../model/marque.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { MarqueWrapper } from '../model/marqueWrapped.model';
import { AuthService } from './auth.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class PcService {
  pcs!: Pc[];
  marques!: Marque[];

  pc!: Pc;

  constructor(private http: HttpClient, private authService: AuthService) {
    /* this.marques = [
      { idMarque: 1, nomMarque: 'MSI' },
      { idMarque: 2, nomMarque: 'GIGABYTE' },
      { idMarque: 3, nomMarque: 'Dell' },
      { idMarque: 4, nomMarque: 'HP' },
      { idMarque: 5, nomMarque: 'Lenovo' },
      { idMarque: 6, nomMarque: 'Acer' },
      { idMarque: 7, nomMarque: 'Asus' },
      { idMarque: 8, nomMarque: 'Samsung' },
      { idMarque: 9, nomMarque: 'Toshiba' },
      { idMarque: 10, nomMarque: 'Apple' },
      { idMarque: 11, nomMarque: 'Razer' },
      { idMarque: 12, nomMarque: 'Alienware' },
      { idMarque: 13, nomMarque: 'Microsoft' },
      { idMarque: 14, nomMarque: 'Sony' },
      { idMarque: 15, nomMarque: 'Huawei' },
      { idMarque: 16, nomMarque: 'Fujitsu' },
      { idMarque: 17, nomMarque: 'Origin PC' },
      { idMarque: 18, nomMarque: 'CyberPowerPC' },
      { idMarque: 19, nomMarque: 'iBUYPOWER' },
      { idMarque: 20, nomMarque: 'EVGA' },
    ];
    this.pcs = [
      {
        idPc: 1,
        marque: { idMarque: 1, nomMarque: 'MSI' },
        modele: 'gf63',
        processeur: 'i5-11400H',
        memoireRAM: 24,
        capaciteStockage: 512,
        carteGraphique: 'Nvidia  GeForce GTX 1650',
        systemeExploitation: 'Windows 10 Professionnel',
        prix: 2900,
        dateAchat: new Date('09/20/2022'),
        email:"houssembenjaafar105@gmail.com"
      },
      {
        idPc: 2,
        marque: { idMarque: 2, nomMarque: 'GIGABYTE' },
        modele: 'G5 KF5',
        processeur: 'i5-13500H',
        memoireRAM: 16,
        capaciteStockage: 1024,
        carteGraphique: 'Nvidia GeForce RTX 4060',
        systemeExploitation: 'Windows 11 Professionnel',
        prix: 3159,
        dateAchat: new Date('12/20/2024'),
        email:"houssembenjaafar109@gmail.com"
      },
    ] */
  }
  /* ListePcs(): Pc[] {
    return this.pcs;
  } */

  ListePcs(): Observable<Pc[]> {
    // return this.http.get<Pc[]>(environment.apiURL);
    
    return this.http.get<Pc[]>(environment.apiURL + '/all');
  }

  /* AjouterPc(pc: Pc) {
    this.pcs.push(pc);
  } */

  AjouterPc(pc: Pc): Observable<Pc> {
    //return this.http.post<Pc>(environment.apiURL, pc, httpOptions);
    return this.http.post<Pc>(environment.apiURL + '/addpc', pc);
  }


  SupprimerPc(id: number) {
    const url = `${environment.apiURL}/delpc/${id}`;
    //return this.http.delete(url, httpOptions);
  
    return this.http.delete(url);
  }

  /* ConsulterPc(id: number): Pc {
    this.pc=this.pcs.find((p) => p.idPc == id)!;
    return this.pc!;
  } */
  ConsulterPc(id: number): Observable<Pc> {
    const url = `${environment.apiURL}/getbyid/${id}`;
    //return this.http.get<Pc>(url);
    
    return this.http.get<Pc>(url);
  }

  /* updatePc(p: Pc) {
    const index = this.pcs.indexOf(p, 0);
    if (index !== -1) {
      this.pcs.splice(index, 1);
      this.pcs.splice(index, 0, p);
    }
  } */
  updatePc(pc: Pc): Observable<Pc> {
    //  return this.http.put<Pc>(environment.apiURL, pc, httpOptions);
      

    return this.http.put<Pc>(environment.apiURL + '/updatepc', pc,);
  }

  /*   ListMarques(): Marque[] {
    return this.marques;
  } */
  ListMarques(): Observable<MarqueWrapper> {
    //return this.http.get<MarqueWrapper>(environment.apiURLMar);
    
    return this.http.get<MarqueWrapper>(environment.apiURLMar);
  }
  ConsulterMarques(id: number): Marque {
    return this.marques.find((mar) => mar.idMarque == id)!;
  }

  rechercherParMarque(idMar: number): Observable<Pc[]> {
    const url = `${environment.apiURL}/pcsmar/${idMar}`;
    return this.http.get<Pc[]>(url);
  }
  rechercherParModele(modele: string): Observable<Pc[]> {
    const url = `${environment.apiURL}/pcsByModele/${modele}`;
    return this.http.get<Pc[]>(url);
  }
  ajouterMarque(mar: Marque): Observable<Marque> {
    return this.http.post<Marque>(environment.apiURLMar, mar, httpOptions);
  }
}
