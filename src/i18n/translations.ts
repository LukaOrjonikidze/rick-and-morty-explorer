type TranslationKeys = {
  [key: string]: string;
};

export const translations: { [key: string]: TranslationKeys } = {
  en: {
    navHome: 'Home',
    navCharacters: 'Characters',
    navFavorites: 'Favorites',
    homeTitle: 'Welcome to the Rick and Morty Universe Explorer!',
    homeDescription: 'Explore characters, locations, and episodes from the show.',
    favoritesTitle: 'My Favorite Characters',
    noFavorites: 'You have no favorite characters yet. Go find some!',
  },
  ge: {
    navHome: 'მთავარი',
    navCharacters: 'პერსონაჟები',
    navFavorites: 'ფავორიტები',
    homeTitle: 'კეთილი იყოს თქვენი მობრძანება რიკ და მორტის სამყაროში!',
    homeDescription: 'აღმოაჩინეთ შოუს პერსონაჟები, ლოკაციები და ეპიზოდები.',
    favoritesTitle: 'ჩემი ფავორიტი პერსონაჟები',
    noFavorites: 'თქვენ ჯერ არ გყავთ ფავორიტი პერსონაჟები. წადი იპოვე!',
  },
};