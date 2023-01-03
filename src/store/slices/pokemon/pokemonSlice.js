import { createSlice } from '@reduxjs/toolkit'

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    page: 0,
    pokemons: [],
    isLoading: false,
  },
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true
    },
    stopLoadingPokemons: (state) => {
      state.isLoading = false
    },
    setPokemons: (state, action) => {
      state.isLoading = false
      state.page = action.payload.page
      state.pokemons = action.payload.pokemons
    }
  },
})
export const { startLoadingPokemons, stopLoadingPokemons, setPokemons } = pokemonSlice.actions