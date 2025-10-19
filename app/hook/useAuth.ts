import axios from "axios"
import { useCallback } from "react"

const useAuth = () => {

    const getCsrfToken = useCallback(() => {
        const fullDomain: string = String(process.env.NEXT_PUBLIC_API_DOMAIN)
        axios.get(`${fullDomain}/csrf`, {
            withCredentials: true,
        })
            .then((response) => {
                if (typeof window !== "undefined") localStorage.setItem("_csrf", response.data.token)
            })
            .catch((error) => console.error(error))
    }, [])


    return {
        getCsrfToken,
    }
}

export default useAuth