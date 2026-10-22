export interface IFrontPageMapping {
    topHeader: string;
    header: string;
    frontPageBody: string;
    cards: Array<IFrontPageCard>
}

interface IFrontPageCard {
    title: string,
    description: string,
    footer: string
}

export interface IResourceMapper {
    title: string;
    description: string;
    footer: string;
}