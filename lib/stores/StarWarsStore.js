import { create } from 'zustand';

export const useCharacterStore = create((set) => ({
    characters: null,
    setCharacters: (data) => {
        set((state) => ({
            characters: data
        }))
    }
}));

export default useCharacterStore;