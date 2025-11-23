import { useCallback, useContext, useState } from "react"
import useAxios from "./useAxios"
import CustomContext from "../context/CustomContext"
import { MessageTooltipRequest } from "../component/common/tooltip/MessageTooltip"

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
    const [userMessage, setUserMessage] = useState<MessageTooltipRequest>({
        type: "",
        message: "",
        status: "info",
    })
    const [userData, setUserData] = useState<UserRequest>({
        updateType: "",
        userId: USER_ID,
        userName: USER_NAME,
        password: "",
        token: "",
    })

    /**
     * Error Message
     */
    const validation = (data: UserRequest) => {
        let errMsg = ""

        if (data.updateType == "userName") {
            if (data.userName) {
                if (data.userName.length > 30) {
                    errMsg = "30文字以内"
                }
            } else {
                errMsg = "入力必須"
            }
        }
        if (data.updateType == "password") {
            if (data.password) {
                if (data.password.length < 8) {
                    errMsg = "最低8文字以上"
                }
            } else {
                errMsg = "入力必須"
            }
        }

        return errMsg
    }

    const updateUser = useCallback((data: UserRequest) => {
        const errMsg: string = validation(data)
        if (errMsg != "") {
            setUserMessage({
                type: data.updateType!,
                status: "error",
                message: errMsg,
            })
            return
        }

        setUserLoad(true)
        const request = JSON.stringify(data)
        useAxios("post", "/api/updateUser", request)
            .then((response) => {
                if (response.status == 200) {
                    if (typeof window !== "undefined" && data.updateType == "userName") localStorage.setItem("userName", data.userName!)
                    setUserMessage({
                        type: data.updateType!,
                        status: "success",
                        message: "更新しました"
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
        userMessage,
        setUserData,
        updateUser,
    }
}

export default useUser