import { IFrontpageDbData } from "../interfaces/IFrontpageDbData"

export const frontPageMapper = (dbData: IFrontpageDbData) => {
    return {
        "topHeader": dbData.top_header,
        "header": dbData.header,
        "frontPageBody": dbData.front_page_body
    }
}