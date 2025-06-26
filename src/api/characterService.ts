import type { Character, CharacterApiResponse } from '../types/api.types';

const API_BASE_URL = 'https://rickandmortyapi.com/api';

export const getCharacters = async (page = 1): Promise<CharacterApiResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/character?page=${page}`);
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    const data: CharacterApiResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw error;
  }
};

export const getCharacterById = async (id: string | number): Promise<Character> => {
  try {
    const response = await fetch(`${API_BASE_URL}/character/${id}`);
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    const data: Character = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching character with id ${id}:`, error);
    throw error;
  }
};