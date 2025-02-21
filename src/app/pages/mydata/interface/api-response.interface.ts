export interface ApiResponse {
    result: number,
    message: string,
    data: {
        developerName: string,
        productName: string
    }
}