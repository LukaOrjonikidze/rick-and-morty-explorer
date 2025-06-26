import { useFavorites } from '../../context/FavoritesContext';
import { useLanguage } from '../../hooks/useLanguage';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import '../CharactersPage/CharactersPage.scss';

const FavoritesPage = () => {
  const { favorites } = useFavorites();
  const { t } = useLanguage();

  return (
    <div className="characters-page"> 
      <h1>{t('favoritesTitle')}</h1>
      
      {favorites.length === 0 ? (
        <p>{t('noFavorites')}</p>
      ) : (
        <div className="characters-grid">
          {favorites.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;