import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useApi } from '../../hooks/useApi';
import { getCharacterById } from '../../api/characterService';
import type { Character } from '../../types/api.types';
import './CharacterDetailPage.scss';
import { useFavorites } from '../../context/FavoritesContext';

const CharacterDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate(); 
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const {
    data: character,
    error,
    loading,
    request: fetchCharacter
  } = useApi<Character>(getCharacterById);

  useEffect(() => {
    if (id) {
      fetchCharacter(id);
    }
  }, [id, fetchCharacter]); 

  if (loading) return <p>Loading character details...</p>;
  if (error) return <p className="error-message">Error: {error}</p>;
  if (!character) return <p>Character not found.</p>;

  const isFav = isFavorite(character.id);

  const handleToggleFavorite = () => {
    if (isFav) {
      removeFavorite(character.id);
    } else {
      addFavorite(character);
    }
  };

  const statusClass = character.status.toLowerCase();

  return (
    <div className="character-detail-page">
      <button onClick={() => navigate(-1)} className="back-button">
        ← Back to List
      </button>
      <div className="detail-content">
        <img src={character.image} alt={character.name} className="detail-image" />
        <div className="detail-info">
          <div className="name-header">
            <h1>{character.name}</h1>
            <button onClick={handleToggleFavorite} className={`favorite-button ${isFav ? 'favorited' : ''}`}>
              {isFav ? '★ Unfavorite' : '☆ Favorite'}
            </button>
          </div>
          <p className="status">
            <span className={`status-icon ${statusClass}`}></span>
            {character.status} - {character.species}
          </p>
          <div className="info-grid">
            <div className="info-item">
              <span>Gender:</span>
              <p>{character.gender}</p>
            </div>
            <div className="info-item">
              <span>Origin:</span>
              <p>{character.origin.name}</p>
            </div>
            <div className="info-item">
              <span>Last Known Location:</span>
              <p>{character.location.name}</p>
            </div>
            <div className="info-item">
              <span>Appeared in:</span>
              <p>{character.episode.length} episodes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetailPage;