import { get } from "../utils/http"

export const getCate = (params) => {
    return get('cms/category/list',params)
}