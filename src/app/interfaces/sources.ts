export interface RootObject {
    status: string;
    sources: Source[];
}

export interface Source {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface RespuestaSources{
    status: string;
    sources: Source[];
}