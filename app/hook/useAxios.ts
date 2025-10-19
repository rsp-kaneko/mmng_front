import axios from "axios"

const useAxios = async (method: string, url: string, request?: {}) => {
    const fullDomain: string = String(process.env.NEXT_PUBLIC_API_DOMAIN)
    let csrf = ""

    if (method != "get" || url != "/api/login") {
        if (typeof window !== "undefined") {
            csrf = String(localStorage.getItem("_csrf"))
        }
    }

    const response = await axios({
        method,
        url: `${fullDomain}${url}`,
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-TOKEN": csrf,
        },
        withCredentials: true,
        data: request
    })

    return response.data
}

export default useAxios