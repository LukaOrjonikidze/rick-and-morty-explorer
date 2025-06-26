import { useEffect, useState } from 'react';
import { useApi } from '../../hooks/useApi';
import { getCharacters } from '../../api/characterService';
import type { CharacterApiResponse } from '../../types/api.types';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import './CharactersPage.scss';
import { useLanguage } from '../../hooks/useLanguage';

const CharactersPage = () => {
  const { t } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);
  const { data, error, loading, request: fetchCharacters } = useApi<CharacterApiResponse>(getCharacters);

  useEffect(() => {
    fetchCharacters(currentPage);
    window.scrollTo(0, 0);
  }, [currentPage, fetchCharacters]);

  const handleNextPage = () => {
    if (data?.info.next) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (data?.info.prev) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="characters-page">
      <h1>{t('navCharacters')}</h1>

      {loading && <p>Loading characters...</p>}
      {error && <p className="error-message">Error: {error}</p>}

            {data && (
        <>
          <div className="pagination-controls">
            <button onClick={handlePrevPage} disabled={!data.info.prev || loading}>
              ←
            </button>
            <span>Page {currentPage} of {data.info.pages}</span>
            <button onClick={handleNextPage} disabled={!data.info.next || loading}>
              →
            </button>
          </div>

          <div className="characters-grid">
            {data.results.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>

          <div className="pagination-controls bottom">
             <button onClick={handlePrevPage} disabled={!data.info.prev || loading}>
              ←
            </button>
            <span>Page {currentPage} of {data.info.pages}</span>
            <button onClick={handleNextPage} disabled={!data.info.next || loading}>
              →
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CharactersPage;