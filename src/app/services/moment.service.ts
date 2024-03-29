import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Moment } from '../interfaces/Moments';
import { environment } from 'src/environments/environment';
import { Form } from '@angular/forms';
import { Response } from '../interfaces/Response';

@Injectable({providedIn: 'root'})

export class MomentService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/moments`;

  constructor(private httpClient: HttpClient) { }

  //RESPOSTA (RESPONSE) QUE VAI CONTER UM ARRAY DE MOMENTS( MOMENT[]);
  getMoments(): Observable<Response<Moment[]>> {
    return this.httpClient.get<Response<Moment[]>>(this.apiUrl);
  }
  
  getMoment(id: Number): Observable<Response<Moment>>{
    return this.httpClient.get<Response<Moment>>(`${this.apiUrl}/${id}`);
  }

  createMoment(formData: FormData): Observable<FormData>{
    return this.httpClient.post<FormData>(this.apiUrl, formData);
  }

  removeMoment(id: Number){
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }

  editMoment(id: Number, formData: FormData): Observable<FormData>{
    return this.httpClient.put<FormData>(`${this.apiUrl}/${id}`, formData);
  }
}