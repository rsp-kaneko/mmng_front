import { useCallback, useState } from "react"
import axios from "axios"
import { redirect } from "next/navigation"
import useAxios from "./useAxios"

const useLogin = () => {
    const [loginLoad, setLoginLoad] = useState(false)
    const URL: string = typeof window != "undefined" ? `http://${location.hostname}:8080` : ""

    const loginCheck = useCallback(() => {

    }, [])

    const login = useCallback((data: {userName: string, password: string}) => {
        const {userName, password} = data

        setLoginLoad(true)
        const request = JSON.stringify({userName, password})
        useAxios("post", "/api/login", request)
            .then((response) => {
                if (response.status == 200) {
                    if (typeof window !== "undefined") {
                        window.localStorage.setItem("token", response.token)
                        window.localStorage.setItem("userName", response.userName)
                        window.localStorage.setItem("userId", response.userId)
                    }
                    alert("Login Now")

                } else if (response.status == 400) {
                    alert(response.message)
                } else {
                    console.error(response.message)
                }
            })
            .catch((error) => console.error(error))
            .finally(() => setLoginLoad(false))
    }, [])

    const logout = useCallback(() => {
        window.localStorage.removeItem("token")
        redirect("/web")
    }, [])

    return {
        loginLoad,
        loginCheck,
        login,
        logout,
    }
}

export default useLogin