import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

const BASE = 'http://localhost:8090/api/recepti';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
};

@Injectable()
export class RecepieService {

    constructor(private http: HttpClient) {}

    public getAll(): Observable<any> {
        return this.http .get(`${BASE}`);
    }

    public getOne(id): Observable<any> {
        return this.http.get(`${BASE}/${id}`);
    }

    public createOne(object): Observable<any> {
        return this.http.post(`${BASE}`, object, httpOptions);
    }

    public deleteOne(id): Observable<any> {
        return this.http.delete(`${BASE}/${id}`);
    }

    public editOne(id, object) {
        return this.http.put(`${BASE}/${id}`, object, httpOptions);
    }
}