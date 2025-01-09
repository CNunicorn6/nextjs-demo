import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { signIn } from "@/auth"
import UserAuthInfo from "@/components/UserAuthInfo"

interface Props {
    params: Promise<{ locale: string }>
}

export default async function Page({ params }: Props) {
    const { locale } = await params;

    const t = await getTranslations('HomePage');

    return (
        <div>
            <h1>{t('title')}</h1>
            <p>{t('welcomeMessage')}</p>
            <Link href="/about">{t('aboutLinkText')}</Link>
            <br />
            <Link href="/help">{t('helpLinkText')}</Link>
            <br />
            <h2>{t('language')}: {locale}</h2>
            <label>
                {t('languageSwitch')}
                <ul className="list-none">
                    <li>
                        <Link href="/" locale='zh'>
                            {t('zh')}
                        </Link>
                    </li>
                    <li>
                        <Link href="/" locale='en'>
                            {t('en')}
                        </Link>
                    </li>
                </ul>
            </label>
        
            <div>登录</div>
            <form
                action={async (formData) => {
                    "use server"
                    await signIn("credentials", formData).catch((error: Error) => {
                        console.error("Sign in failed: ", error);
                    });
                }}
            >
                <input type="hidden" name="csrfToken" value="csrfToken" />
                <label>
                    Email
                    <input type="text" id="email" name="email" />
                </label>
                <label>
                    Password
                    <input type="password" id="password" name="password" />
                </label>
                <button type="submit">Sign in</button>
            </form>
            <UserAuthInfo />
        </div>
    );
}