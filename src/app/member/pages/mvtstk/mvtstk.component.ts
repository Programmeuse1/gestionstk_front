import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DetailMvtstkComponent} from "./detail-mvtstk/detail-mvtstk.component";
import {FormBuilder} from "@angular/forms";
import {MvtStockDto} from "../../../../gs-api/src/models/mvt-stock-dto";
import {MvtstkService} from "./service/mvtstk.service";

@Component({
  selector: 'app-mvtstk',
  templateUrl: './mvtstk.component.html',
  styleUrls: ['./mvtstk.component.scss']
})
export class MvtstkComponent implements OnInit{

  mvtStockDto: MvtStockDto [] = [];
  mvtStkList: Array<MvtStockDto> = [];

  searchForm = this.fb.group({
    article: [],
    dateEnregistrement: [],
    nombreDeResultat: ["10"],
  });

  constructor(
    private ngbModal: NgbModal,
    private fb: FormBuilder,
    private mvtstkService: MvtstkService
  ) {}


  openModalCorrection(): void {
    const modalRef = this.ngbModal.open(DetailMvtstkComponent, {size: 'lg', backdrop: 'static', animation: true});
    modalRef.closed.subscribe((res) => {
      if('success-commandesfournisseurs' === res) {

      }
    })
  }

  ngOnInit(): void{
    this.getMvtStkList();
  }

  getMvtStkList(){
    this.mvtstkService.findMvtStkAll().subscribe({
      next: value =>{
        this.mvtStkList = value;
        console.log(this.mvtStkList);
      },
      error:error => {

      }
    })
  }


  findAll(){
    this.mvtstkService.listingMvtStock({
      article: this.searchForm.value.article ?? undefined,
      dateEnregistrement: this.searchForm.value.dateEnregistrement ?? undefined,
      nombreDeResultat: this.searchForm.value.nombreDeResultat ?? "10"
    }
    ).subscribe({
      next: response =>{
        this.mvtStkList = response;
      },
      error: err => console.log(err)
    })
  }
}
