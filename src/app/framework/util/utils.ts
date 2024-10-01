import { HttpHeaders } from "@angular/common/http";
import { environment } from "src/enviroments/enviroment";
// import { env } from "process";
// import { environment } from "src/environments/environment";

export class Constants {

    // static httpOptions(url: string, httpOptions: any) {
    //     throw new Error('Method not implemented.');
    // }

    public static httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        })
    };

    public static URL_GUARDARTAREA = environment.HOST + '/crearTarea';
    public static URL_BUSCADOR = environment.HOST + '/encontrar';
}