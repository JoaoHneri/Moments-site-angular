import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Moment } from '../interfaces/Moments';
import { environment } from 'src/environments/environment';
import { Form } from '@angular/forms';

@Injectable({providedIn: 'root'})

export class MomentService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/moments`;

  constructor(private httpClient: HttpClient) { }
  
  createMoment(formData: FormData): Observable<FormData>{
    return this.httpClient.post<FormData>(this.apiUrl, formData);
  }
}