import axios from "axios"

const useAxios = async (method: string, url: string, request?: {}) => {
    const fullDomain: string = String(process.env.NEXT_PUBLIC_API_DOMAIN)

    const response = await axios({
        method,
        url: `${fullDomain}${url}`,
        headers: {
            "Content-Type": "application/json",
        },
        data: request
    })

    return response.data
}

export default useAxios