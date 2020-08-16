import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../../services/ProduitService';
import { variable } from '@angular/compiler/src/output/output_ast';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})

//Validation:
export class ProduitComponent implements OnInit {
  crudForm= new FormGroup({
    nomproduit : new FormControl('', Validators.required),
    prixproduit : new FormControl('', Validators.required),
    quantiteproduit : new FormControl('', Validators.required),
  })
  get nomproduit() {return this.crudForm.get('nomproduit')}


  //Tableau qui regroupe tous les objets et un objet vide pour vider les champs
myArray : any = [];
monproduit : any = {
  id:'',
  nom:'',
  prix:'',
  quantite:''
}
  condition = false;


  constructor( private Myvar: ProduitService) { }

  ngOnInit() {
    this.getProduit();
  }

  //CRUD:
  //Methode get
  getProduit(){
    this.Myvar.getAll()
    .subscribe(data => {
      this.myArray = data;
    })
    
  }
  //Methode delete

  deleteProduits(id){
    this.Myvar.delete(id)
    .subscribe(() => {
      this.myArray = this.myArray.filter
      (Myvariable => Myvariable.id != id)
    })
  }

   //Methode Ajouter

   addproduit(){
    this.Myvar.add(this.monproduit)
    .subscribe((variable) => {
      this.myArray = [variable, ...this.myArray];
      this.viderchamp();
   })
   // Methode pour Vider les champs
   }
   viderchamp(){
    this.monproduit = {
      id:'',
      nom:'',
      prix:'',
      quantite:''
    }
   }

   //Methode Update
   editerproduit(variable){
   this.monproduit = variable;
   this.condition = true;
}
  updateproduit(){
  this.Myvar.update(this.monproduit)
  .subscribe((variable) => {
    this.viderchamp();
    this.condition = false;

  })
}








}