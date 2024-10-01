import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Constants } from "../util/utils";

@Injectable()
export class CrudService{
    private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

    constructor(private http: HttpClient) { }

   
    public post(url: string, item: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.post(url, JSON.stringify(item), Constants.httpOptions).toPromise()
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                });
        });
    }
}