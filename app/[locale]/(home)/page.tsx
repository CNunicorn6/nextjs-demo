import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

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
        </div>
    );
}