import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Dog } from "../classes/dog";
import { environment } from "src/environments/environment.development";
import { Breed } from "../classes/breed";

@Injectable({
  providedIn:'root'
})
export class DogService{

  private apiUrl: string = environment.apiUrl;
  private headers = new HttpHeaders({
    'x-api-key': 'live_ZytFR3VJ5aR78bzaDueOqUq7AWoQn9YKX5kxfTAGffVIogE6x7newSLGqMAOoGYA',
  })

  constructor(private  httpClient : HttpClient){}

  dogList(params?: dogListParams) : Observable<Dog[]>{

    return this.httpClient.get<Dog[]>(`${this.apiUrl}?limit=8&has_breeds=1&page=${params?.page||0}${params?.breedId&&params?.breedId!=="0"?`&breed_ids=${params.breedId}`:'' }`, {headers: this.headers});
  }

  breedsList(){
    return this.httpClient.get<Breed[]>(`https://api.thedogapi.com/v1/breeds?limit=10`, {headers: this.headers});
  }

  uploadFile(file: File){
    const form = new FormData()
    form.append("file",file);
    return this.httpClient.post(`https://api.thedogapi.com/v1/images/upload`, form ,{headers: this.headers});
  }
  
}



type dogListParams = {
  page?: number,
  breedId?: string
}