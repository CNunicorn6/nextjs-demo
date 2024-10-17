

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { getLangDir } from 'rtl-detect';
import { getTranslations } from 'next-intl/server';

type Props = {
  params: { locale: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
    locale
  };
}

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // 创建国际化上下文消息
  const messages = await getMessages();

  const direction = getLangDir(locale);

  return (
    <html lang={locale} dir={direction}>
      <body>
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/activity">Activity</a>
              </li>
              <li>
                <a href="/cart">Cart</a>
              </li>
              <li>
                <a href="/account">Account</a>
              </li>
              <li>
                <a href="/conference">conference</a>
              </li>
            </ul>
          </nav>
        </header>
        <h1>This is Home Layout</h1>
        {/* Layout UI */}
        <main>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </main>
      </body>
    </html>
  )
}