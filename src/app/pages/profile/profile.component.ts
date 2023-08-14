import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { MyCardComponent } from 'src/app/components/my-card/my-card.component';
import { HttpClient } from '@angular/common/http';
import { DogService } from 'src/app/services/dog.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, MyCardComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})


export class ProfileComponent  {
  

  
  onChangeFile(event?: Event){
   
  }

  onUpload(){
  }
} 
