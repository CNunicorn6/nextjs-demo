
import { auth, signOut } from "@/auth"

export default async function UserAuthInfo() {
    const session = await auth();

    if (!session) {
        return (
            <div>
                <div>未登录</div>
                <div>请登录</div>
            </div>
        )
    }

    return (
        <div>
            <div>已登录</div>
            <div>用户信息</div>
            <div>id: {session.user?.id}</div>
            <div>name: {session.user?.name}</div>
            <div>email: {session.user?.email}</div>
            <button onClick={() => signOut()}>退出</button>
        </div>
    )
}