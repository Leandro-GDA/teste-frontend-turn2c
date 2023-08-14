import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogCardComponent } from 'src/app/components/dog-card/dog-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Dog } from 'src/app/classes/dog';
import { DogService } from 'src/app/services/dog.service';
import { Breed } from 'src/app/classes/breed';
import { PaginationComponent } from 'src/app/components/pagination/pagination.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, DogCardComponent ,FontAwesomeModule, RouterLink, PaginationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faUser = faUser;
  dogs !: Dog[];
  breeds !: Breed[]
  breedId !: string;
  
  constructor(private dogService: DogService){
    
  }


  ngOnInit(): void {
    this.dogService.dogList()
    .subscribe(res =>{
      this.dogs = res;
    })

    this.dogService.breedsList()
    .subscribe(res =>{
      this.breeds = res;
    })

  }

  breedFilter(event: Event){
    const input = (event.target as HTMLSelectElement).value
    this.breedId = input;
    this.dogService.dogList({
      breedId : input,
    }).subscribe(res => {
      this.dogs = res;
      
    });
  }

  handlePagination(page : number){
    this.dogService.dogList({
      breedId: this.breedId,
      page
    }).subscribe(res => {
      this.dogs = res;
      
    });
  }

}
