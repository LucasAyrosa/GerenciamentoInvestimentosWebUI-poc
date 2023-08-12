export interface createOperationRequest {
    ticket: string,
    custodity: string,
    wallet: string,
    type: operationType,
    quantity: number,
    unitValue: number
}

export enum operationType {
    buy,
    sell
}