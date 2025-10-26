import { useCallback, useContext, useState } from "react"
import useAxios from "./useAxios"
import Swal from "sweetalert2"
import CustomContext from "../context/CustomContext"

export type Role = {
    roleId: number
    roleName: string
}

export type User = {
    userId: number
    role: Role
    userName: string
    password: string
    token: string
    deleteFlg: number
    createdAt: string
    updatedAt: string
}

export type UserRequest = {
    updateType?: string
    userId?: number
    userName?: string
    password?: string
    token?: string
}

const useUser = () => {
    const { SET_REFRESH, USER_ID, USER_NAME } = useContext(CustomContext)
    const [userLoad, setUserLoad] = useState(false)
    const [users, setUsers] = useState<Array<User>>([])
    const [userData, setUserData] = useState<UserRequest>({
        updateType: "",
        userId: USER_ID,
        userName: USER_NAME,
        password: "",
        token: "",
    })

    const updateUser = useCallback((data: UserRequest) => {
        if (data.updateType == "ユーザー名") {
            if (data.userName) {
                if (data.userName.length > 30) {
                    Swal.fire({
                        title: "30文字以内",
                        icon: "error",
                        timer: 1500,
                        timerProgressBar: true,
                    })
                    return
                }
            } else {
                Swal.fire({
                    title: "ユーザー名を入力してください",
                    icon: "error",
                    timer: 1500,
                    timerProgressBar: true,
                })
                return
            }
        }
        if (data.updateType == "パスワード") {
            if (data.password) {
                if (data.password.length < 8) {
                    Swal.fire({
                        title: "最低8文字以上",
                        icon: "error",
                        timer: 1500,
                        timerProgressBar: true,
                    })
                    return
                }
            } else {
                Swal.fire({
                    title: "パスワードを入力してください",
                    icon: "error",
                    timer: 1500,
                    timerProgressBar: true,
                })
                return
            }
        }
        setUserLoad(true)
        const request = JSON.stringify(data)
        useAxios("post", "/api/updateUser", request)
            .then((response) => {
                if (response.status == 200) {
                    if (typeof window !== "undefined" && data.updateType == "ユーザー名") localStorage.setItem("userName", data.userName!)
                    SET_REFRESH!((cnt) => cnt + 1)
                    Swal.fire({
                        title: `${data.updateType}を更新しました。`,
                        icon: "success",
                        timer: 1500,
                        timerProgressBar: true,
                    })
                } else {
                    console.error(response.messages)
                }
            })
            .catch((error) => console.error(error))
            .finally(() => setUserLoad(false))
    }, [])

    return {
        userLoad,
        users,
        userData,
        setUserData,
        updateUser,
    }
}

export default useUser