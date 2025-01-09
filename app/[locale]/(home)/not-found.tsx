import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import styles from '@/styles/not-found.module.css'; // 使用 CSS 模块

export default async function NotFound() {
  const t = await getTranslations('Errors.404');

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{t('title')}</h1>
      <p className={styles.message}>
        {t('message')}
      </p>
      <Link href="/">
        <a className={styles.link}>{t('homeLink')}</a>
      </Link>
      <Link href="javascript:history.back()">
        <a className={styles.link}>{t('previousPageLink')}</a>
      </Link>
      <Link href="/help">
        <a className={styles.link}>{t('helpLink')}</a>
      </Link>
    </div>
  );
}