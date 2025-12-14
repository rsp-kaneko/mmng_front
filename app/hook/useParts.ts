import { useCallback, useState } from "react"
import useAxios from "./useAxios"

export type PartsCategory = {
    partsCategoryId: number
    categoryName: string
    iconUrl: string
}

const useParts = () => {
    const [partsLoad, setPartsLoad] = useState(false)
    const [partsCategories, setPartsCategories] = useState<Array<PartsCategory>>([])

    /**
     * PartsCategory全取得
     */
    const getAllPartsCategories = useCallback(() => {
        useAxios("get", "/api/getAllPartsCategories")
            .then((response) => {
                if (response.status == 200) {
                    setPartsCategories(response.partsCategoryList)
                } else {
                    console.error(response.message)
                }
            })
            .catch((error) => console.error(error))
    }, [])

    return {
        partsLoad,
        partsCategories,
        getAllPartsCategories,
    }
}

export default useParts