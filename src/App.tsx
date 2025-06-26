import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import CharactersPage from './pages/CharactersPage/CharactersPage';
import CharacterDetailPage from './pages/CharacterDetailPage/CharacterDetailPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';

import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { FavoritesProvider } from './context/FavoritesContext';

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <FavoritesProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="characters" element={<CharactersPage />} />
              <Route path="character/:id" element={<CharacterDetailPage />} />
              <Route path="favorites" element={<FavoritesPage />} />
            </Route>
          </Routes>
        </FavoritesProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;