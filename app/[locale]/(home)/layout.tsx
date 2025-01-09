

import { NextIntlClientProvider } from 'next-intl';
import { getLangDir } from 'rtl-detect';
import { getTranslations, getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
// import Link from 'next/link';
import NavigationLink from '@/components/NavigationLink';
import type { Metadata } from 'next/types';


interface PageProps {
  params: Promise<{ locale: LocaleType }>
  children: React.ReactNode;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  // 确保对 params 进行 await
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function RootLayout({
  children,
  params,
}: PageProps) {

  const { locale } = await params; // 确保对 params 进行 await
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as LocaleType)) {
    notFound();
  }
  // 创建国际化上下文消息
  const messages = await getMessages();

  const direction = getLangDir(locale);

  const t = await getTranslations('HomePage');

  return (
    <html lang={locale} dir={direction}>
      <body>
        <header>
          <nav>
            <ul className="list-none">
              <li>
                <NavigationLink href="/">{t('Nav.home')}</NavigationLink>
              </li>
              <li>
                <NavigationLink href="/about">{t('Nav.about')}</NavigationLink>
              </li>
              <li>
                <NavigationLink href="/activity">{t('Nav.activity')}</NavigationLink>
              </li>
              <li>
                <NavigationLink href="/cart">{t('Nav.cart')}</NavigationLink>
              </li>
              <li>
                <NavigationLink href="/account">{t('Nav.account')}</NavigationLink>
              </li>
              <li>
                <NavigationLink href="/conference">{t('Nav.conference')}</NavigationLink>
              </li>
            </ul>
          </nav>
        </header>
        <h1>This is Home Layout</h1>
        {/* Layout UI */}
        <main>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </main>
      </body>
    </html>
  )
}