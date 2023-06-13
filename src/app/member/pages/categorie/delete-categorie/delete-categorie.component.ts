import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {CategoryDto} from "../../../../../gs-api/src/models/category-dto";
import {CategorieService} from "../service/categorie.service";

@Component({
  selector: 'app-delete-categorie',
  templateUrl: './delete-categorie.component.html',
  styleUrls: ['./delete-categorie.component.scss']
})
export class DeleteCategorieComponent implements OnInit {

  categoryDto: CategoryDto = {};

  constructor(private activeModal: NgbActiveModal,
              private categorieService: CategorieService,
              /* private toastr: ToastrService*/) { }

  ngOnInit(): void {
  }

  onDeleteCategory(id: any) {
    this.categorieService.deleteCategorie(id).subscribe({
      next: response =>{
        this.activeModal.close('success');
        this.cancel();
      }, error: error =>{
        //this.toastr.error(error.message);
        this.cancel();
      }
    })
  }

  cancel(): void {
    this.activeModal.dismiss('cancel');
  }

}
