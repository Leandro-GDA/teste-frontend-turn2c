import { Component, Input } from '@angular/core';
import { Dog } from 'src/app/classes/dog';
import { DogService } from 'src/app/services/dog.service';

@Component({
  selector: 'app-dog-card', standalone: true,
  templateUrl: './dog-card.component.html',
  styleUrls: ['./dog-card.component.scss']
})
export class DogCardComponent  {
  @Input() dog !: Dog
}


