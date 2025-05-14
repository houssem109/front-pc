import { Routes } from '@angular/router';
import { PcsComponent } from './pcs/pcs.component';
import { AddPcComponent } from './add-pc/add-pc.component';
import { UpdatePcComponent } from './update-pc/update-pc.component';
import { RechercheParMarqueComponent } from './recherche-par-marque/recherche-par-marque.component';
import { RechercheParModeleComponent } from './recherche-par-modele/recherche-par-modele.component';
import { ListeMarquesComponent } from './liste-marques/liste-marques.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { pcGuard } from './pc.guard';
import { RegisterComponent } from './register/register.component';
import { VerifEmailComponent } from './verif-email/verif-email.component';

export const routes: Routes = [
  { path: 'pcs', component: PcsComponent },
  { path: 'add-pc', component: AddPcComponent, canActivate: [pcGuard] },
  { path: 'updatePc/:id', component: UpdatePcComponent },
  { path: 'rechercheParMarque', component: RechercheParMarqueComponent },
  { path: 'RechercheParModele', component: RechercheParModeleComponent },
  { path: 'listeMarque', component: ListeMarquesComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'pcs', pathMatch: 'full' },
  { path: 'app-forbidden', component: ForbiddenComponent },
  { path: 'register', component: RegisterComponent },
{ path: 'verifEmail', component: VerifEmailComponent },
];
