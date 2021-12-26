import { Basket } from "./basket";

export interface User {
    email: String;
    token: String;
    basket?: Basket;
    roles?: string[];
}