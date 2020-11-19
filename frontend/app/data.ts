export interface Items {
    id: number,
    customer: string,
    vendor: string,
    delivertAt: string,
    totalPrice: number,
    itemsPrice: number
    // [propName: string]: any;
    // [propName: number]: any;
}
export interface Data {
    page: number, pageSize: number, total: number, count: number, items: Array<Items>
}