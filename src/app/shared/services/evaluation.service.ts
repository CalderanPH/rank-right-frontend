import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Evaluation} from "../dto/Evaluation";


@Injectable({
  providedIn: 'root'
})
export class EvaluationService {
  private url = `${environment.apiUrl}/evaluation`;

  constructor(private http: HttpClient) {
  }

  create(body: any): Observable<HttpResponse<void>> {
    return this.http.post<HttpResponse<void>>(this.url, body);
  }

  findAll(): Observable<Evaluation[]> {
    return this.http.get<Evaluation[]>(`${this.url}/findAll`);
  }
}
