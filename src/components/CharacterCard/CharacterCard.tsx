import { Link } from 'react-router-dom';
import type { Character } from '../../types/api.types';
import './CharacterCard.scss';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  const statusClass = character.status.toLowerCase();

  return (
    <Link to={`/character/${character.id}`} className="character-card">
      <img src={character.image} alt={character.name} className="character-card__image" />
      <div className="character-card__info">
        <h3 className="character-card__name">{character.name}</h3>
        <p className="character-card__status">
          <span className={`status-icon ${statusClass}`}></span>
          {character.status} - {character.species}
        </p>
      </div>
    </Link>
  );
};

export default CharacterCard;