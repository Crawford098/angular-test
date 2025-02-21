import { Component } from "@angular/core";
import { Request } from "../../services/requests/Request";
import { CommonModule } from "@angular/common";
import { catchError } from "rxjs";
import { of } from 'rxjs';
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
    disabled: string = '';

    constructor(private request: Request) {}

    saveProduct(productName : string, developerName: string) {

        if(this.disabled !== "disabled") {
            const data = {
                "productName": productName,
                "developerName": developerName
            }
    
            this.request.post<ApiResponse>('http://localhost:3000/api/product', data).pipe(
                catchError(error => {
                    this.alert(error.error);
                    return of(null)
                })
            ).subscribe(res => {
                console.log(res);

                if(res && res.result === 1) {
                    this.alert(res);
                }
            })
        }   
    }

    alert(result: ApiResponse) {

        console.log(result);
        
        if (result.result === 1) {
            this.returnData = result.data;
            this.message = result.message;
        } else {
            this.message = result.message;
            this.activeDisabled();
        }

        this.success = true;
        setTimeout(() => {
            this.success = false;
        }, 6000);
    }

    activeDisabled() {
        this.disabled = "disabled"
        setTimeout(() => {
            this.disabled = ""
       }, 6000);
    }
}