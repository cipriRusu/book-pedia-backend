import { IFrontpageDbData } from "../interfaces/IDbData";
import { IResourceDbData } from "../interfaces/IDbData";
import { IFrontPageMapping, IResourceMapper } from "../interfaces/IMapper";

export const frontPageMapper = (dbData: IFrontpageDbData, resources: IResourceDbData[]): IFrontPageMapping | null => {
    return {
        "topHeader": dbData.top_header,
        "header": dbData.header,
        "frontPageBody": dbData.front_page_body,
        "cards": resources.map((resource: IResourceDbData) => {
            return { ...resource, content: resource.description }
        })
    }
}

export const resourceMapper = (dbData: IResourceDbData): IResourceMapper | null  => {
    return {
        "title": dbData.title,
        "description": dbData.description,
        "footer": dbData.footer
    }
}