import { get } from "../utils/http"

export const getCate = (params) => {
    return get('shop/goods/category/all',params)
}