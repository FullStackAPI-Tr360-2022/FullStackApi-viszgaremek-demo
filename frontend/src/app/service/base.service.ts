import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T extends {_id?: string}> {

  list: T[] = [];

  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    @Inject(String) private entityName: string,
  ) { }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiUrl}${this.entityName}`);
  }

  getOne(id: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}${this.entityName}/${id}`);
  }

  update(entity: T): Observable<T> {
    const id = entity._id;
    delete entity._id;
    return this.http.patch<T>(
      `${this.apiUrl}${this.entityName}/${id}`,
      entity,
    );
  }

  create(entity: T): Observable<T> {
    return this.http.post<T>(
      `${this.apiUrl}${this.entityName}`,
      entity,
    );
  }

  search(queryString: string): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiUrl}${this.entityName}/search?${queryString}`);
  }

}
