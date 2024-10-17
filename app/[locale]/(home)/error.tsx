'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  const t = useTranslations('Errors.500');
  
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
      <p>{t('errorMessage', { message: error.message })}</p>
      <button
        onClick={() => reset()}
        style={{
          padding: '0.5rem 1rem',
          fontSize: '1rem',
          cursor: 'pointer',
          backgroundColor: '#0070f3',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        {t('tryAgain')}
      </button>
      <div style={{ marginTop: '1rem' }}>
        <a href="/" style={{ color: '#0070f3' }}>
          {t('goHome')}
        </a>
      </div>
    </div>
  );
}