
import { getMessages } from 'next-intl/server';
import Providers from '@/app/providers';
import '@/app/globals.css';

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: LocaleType }>
}) {
  const { locale } = await params;
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
          <Providers locale={locale} messages={messages}>
            {children}
          </Providers>
      </body>
    </html>
  )
}