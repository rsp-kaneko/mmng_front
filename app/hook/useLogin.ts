import { useCallback, useState } from "react"
import { redirect } from "next/navigation"
import useAxios from "./useAxios"
import Swal from "sweetalert2"

const useLogin = () => {
    const [loginLoad, setLoginLoad] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false)
    const [authData, setAuthData] = useState({
        auth: false,
        userId: 0,
        userName: ""
    })

    const loginCheck = useCallback((type: string) => {
        if (typeof window !== "undefined") {
            const token: string = String(window.localStorage.getItem("token"))
            if (token !== undefined) {
                const request = JSON.stringify({token})
                useAxios("post", "/api/loginTokenCheck", request)
                    .then((response) => {
                        if (response.status == 200) {
                            window.localStorage.setItem("userId", response.userId)
                            window.localStorage.setItem("userName", response.userName)
                            setAuthData({
                                auth: true,
                                userId: response.userId,
                                userName: response.userName
                            })
                            setLoggedIn(true)
                        } else if (response.status == 400) {
                            type == "auth" && redirect("/web/login")
                        }
                    })
                    .catch((error) => {
                        type == "auth" && redirect("/web/login")
                    })
            } else {
                type == "auth" && redirect("/web/login")
            }
        }
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
                        location.href = "/web/user"
                    }

                } else if (response.status == 400) {
                    Swal.fire({
                        title: response.message,
                        icon: "error",
                        timer: 1500,
                        timerProgressBar: true
                    })
                } else {
                    console.error(response.message)
                }
            })
            .catch((error) => console.error(error))
    }, [])

    const logout = useCallback(() => {
        window.localStorage.removeItem("token")
        window.localStorage.removeItem("userName")
        window.localStorage.removeItem("userId")
        redirect("/web/login")
    }, [])

    return {
        loginLoad,
        loggedIn,
        authData,
        loginCheck,
        login,
        logout,
    }
}

export default useLogin