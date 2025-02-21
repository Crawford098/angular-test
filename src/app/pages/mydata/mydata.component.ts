import { Component } from "@angular/core";
import { Request } from "../../services/requests/Request";
import { CommonModule } from "@angular/common";
import { catchError } from "rxjs";
import { ApiResponse } from "./interface/api-response.interface";

@Component({
    selector: 'my-data',
    standalone: true,
    styleUrl: './mydata.component.css',
    templateUrl: './mydata.component.html',
    imports: [CommonModule]
})

export class MyData {

    success: boolean = false;
    message: string = "";
    returnData: any = {};

    constructor(private request: Request) {}

    saveProduct() {

        const data = {
            "productName": "Aplicación Demo",
            "developerName": "Juan Pérez"
          }

            this.request.post<ApiResponse>('http://localhost:3000/api/product', data).subscribe(res => {
                console.log(res);

                if(res.result === 1) {
                    this.alert(res);
                }
            })
    }


    alert(result: ApiResponse) {
        this.success = true;
        this.message = result.message;
        this.returnData = result.data;

        setTimeout(() => {
            this.success = false;
        }, 4000);
    }
}