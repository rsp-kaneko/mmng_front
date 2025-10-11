import { useState } from "react"

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
    userId?: number
    userName?: string
    password?: string
    token?: string
}

const useUser = () => {
    const [userLoad, setUserLoad] = useState(false)
    const [users, setUsers] = useState<Array<User>>([])
    const [userData, setUserData] = useState<UserRequest>({
        userId: 0,
        userName: "",
        password: "",
        token: "",
    })

    return {
        userLoad,
        users,
        userData,
        setUserData,
    }
}

export default useUser