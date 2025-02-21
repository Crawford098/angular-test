import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class Request {

    constructor(private http: HttpClient){}

    public get<T> (url: string) : Observable<T> {
        return this.http.get<T>(url);
    }

    public post<T> (url: string, data: any): Observable<T> {

        const headers = new HttpHeaders({
            "Content-Type": "application/json"
          });
          
        return this.http.post<T>(url, data, { headers });
    }
}