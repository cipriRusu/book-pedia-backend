import { IFrontpageDbData } from "../interfaces/IDbData";
import { IResourceDbData } from "../interfaces/IDbData";

export const frontPageMapper = (dbData: IFrontpageDbData, resources: IResourceDbData[]) => {
    return {
        "topHeader": dbData.top_header,
        "header": dbData.header,
        "frontPageBody": dbData.front_page_body,
        "cards": resources.map((resource: IResourceDbData) => {
            return { ...resource, content: resource.description }
        })
    }
}