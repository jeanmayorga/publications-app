export interface Publication {
    title: string;
    body: string;
    author: Author;
    created_at: Date | string;
}
export interface Author{
    first_name: string;
    last_name: string;
    email: string;
    birthday: Date | string;
}