import { useLanguage } from '../hooks/useLanguage';

const HomePage = () => {
  const { t } = useLanguage();

  return (
    <div>
      <h1>{t('homeTitle')}</h1>
      <br />
      <p>{t('homeDescription')}</p>
    </div>
  );
};

export default HomePage;