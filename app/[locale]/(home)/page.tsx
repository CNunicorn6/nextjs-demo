import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { signIn } from "@/auth"
import UserAuthInfo from "@/components/UserAuthInfo"

interface Props {
    params: {
        locale: string;
    };
}

export default function Page({ params: { locale } }: Props) {

    const t = useTranslations('HomePage');


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
                <ul>
                    <li>
                        <Link href="/" locale='zh-CN'>
                            {t('zh-CN')}
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
                    await signIn("credentials", formData)
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