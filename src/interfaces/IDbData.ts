export interface IFrontpageDbData {
    primary_key: string;
    top_header: string;
    header: string;
    front_page_body: string;
}

export interface IResourceDbData {
    primary_key: string;
    title: string;
    description: string;
    footer: string;
}

export interface ITagData {
    primary_key: string;
    title: string;
}