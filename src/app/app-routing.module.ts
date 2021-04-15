import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'connexion',
    pathMatch: 'full'
  },

  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'villa',
    loadChildren: () => import('./villa/villa.module').then( m => m.VillaPageModule)
  },
  {
    path: 'acceuil',
    loadChildren: () => import('./acceuil/acceuil.module').then( m => m.AcceuilPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'categorie',
    loadChildren: () => import('./categorie/categorie.module').then( m => m.CategoriePageModule)
  },
  {
    path: 'post',
    loadChildren: () => import('./post/post.module').then( m => m.PostPageModule)
  },
  {
    path: 'appartement',
    loadChildren: () => import('./appartement/appartement.module').then( m => m.AppartementPageModule)
  },
  {
    path: 'autre',
    loadChildren: () => import('./autre/autre.module').then( m => m.AutrePageModule)
  },
  {
    path: 'commentaire',
    loadChildren: () => import('./commentaire/commentaire.module').then( m => m.CommentairePageModule)
  },
  {
    path: 'compte',
    loadChildren: () => import('./compte/compte.module').then( m => m.ComptePageModule)
  },
  {
    path: 'hightech',
    loadChildren: () => import('./hightech/hightech.module').then( m => m.HightechPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'reservation',
    loadChildren: () => import('./reservation/reservation.module').then( m => m.ReservationPageModule)
  },
  {
    path: 'studio',
    loadChildren: () => import('./studio/studio.module').then( m => m.StudioPageModule)
  },
  {
    path: 'tchat',
    loadChildren: () => import('./tchat/tchat.module').then( m => m.TchatPageModule)
  },
  {
    path: 'terrain',
    loadChildren: () => import('./terrain/terrain.module').then( m => m.TerrainPageModule)
  },
  {
    path: 'appartmoderne',
    loadChildren: () => import('./appartmoderne/appartmoderne.module').then( m => m.AppartmodernePageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'modal-post',
    loadChildren: () => import('./modal-post/modal-post.module').then( m => m.ModalPostPageModule)
  },
  {
    path: 'studio-meuble',
    loadChildren: () => import('./studio-meuble/studio-meuble.module').then( m => m.StudioMeublePageModule)
  },
  {
    path: 'villa-meuble',
    loadChildren: () => import('./villa-meuble/villa-meuble.module').then( m => m.VillaMeublePageModule)
  },
  {
    path: 'tchat-p',
    loadChildren: () => import('./tchat-p/tchat-p.module').then( m => m.TchatPPageModule)
  },
  {
    path: 'reservation-in',
    loadChildren: () => import('./reservation-in/reservation-in.module').then( m => m.ReservationInPageModule)
  },  {
    path: 'devenir-prestataire',
    loadChildren: () => import('./utilisateur/devenir-prestataire/devenir-prestataire.module').then( m => m.DevenirPrestatairePageModule)
  },
  {
    path: 'inscription-prestataire',
    loadChildren: () => import('./utilisateur/inscription-prestataire/inscription-prestataire.module').then( m => m.InscriptionPrestatairePageModule)
  }

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
