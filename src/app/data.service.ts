import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  serviceData="the data inside service file"
serviceMethod(data:any){
  alert(data)
}
  constructor() { }
}
