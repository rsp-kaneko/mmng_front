import { useCallback, useState } from "react"
import { UserRequest } from "./useUser"
import axios from "axios"

const useLogin = () => {
    const [loginLoad, setLoginLoad] = useState(false)

    const loginCheck = useCallback(() => {

    }, [])

    const login = useCallback((data: UserRequest) => {
        const {userName, password} = data

        setLoginLoad(true)
        const request = JSON.stringify({userName, password})
        axios.post("./api/login", request)
            .then((response) => {
                const resData = response.data
                if (resData.status == 200) {
                    window.localStorage.setItem("token", resData.token)

                } else if (resData.status == 400) {

                } else {
                    console.error(resData.message)
                }
            })
            .catch((error) => console.error(error))
            .finally(() => setLoginLoad(false))
    }, [])

    const logout = useCallback(() => {
        window.localStorage.removeItem("token")
    }, [])

    return {
        loginLoad,
        loginCheck,
        login,
        logout,
    }
}

export default useLogin