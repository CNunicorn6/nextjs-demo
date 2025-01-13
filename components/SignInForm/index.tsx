import { signIn } from "@/auth"

const SignInForm = () => {
    return (
        <div>
            <div>登录</div>
            <form
                action={async (formData) => {
                    "use server"
                    await signIn("credentials", formData)
                }}
            >
                <label>
                    Email
                    <input name="email" type="email" />
                </label>
                <label>
                    Password
                    <input name="password" type="password" />
                </label>
                <button type="submit">Sign in</button>
            </form>
        </div>
    );
};

export default SignInForm;