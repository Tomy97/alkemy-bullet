export interface Users {
    count:    number;
    next:     string;
    previous: null;
    results:  Results[];
}

export interface Results {
    id:    number;
    email: string;
}
