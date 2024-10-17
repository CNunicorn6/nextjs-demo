import Link from 'next/link';
import { useTranslations } from 'next-intl';
import styles from '@/styles/not-found.module.css'; // 使用 CSS 模块

export default function NotFound() {
  const t = useTranslations('Errors.404');

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