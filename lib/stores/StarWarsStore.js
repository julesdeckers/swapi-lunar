import { create } from 'zustand';

export const useCharacterStore = create((set) => ({
    characters: [],
    fetchCharacters: async () => {
        const response = await fetch("https://swapi.dev/api/people")
        set({ characters: await response.json() })
    }
}));