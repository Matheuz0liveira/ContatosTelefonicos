import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  lista: Contato[]
}

const initialState: ContatosState = {
  lista: [
    {
      nome: 'Sam Witwicky',
      telefone: '(56) 9988-7755',
      email: 'camaromuitoloko@gmail.com',
      id: 1
    },
    {
      nome: 'Dominic Toretto',
      telefone: '(64) 8899-7766',
      email: 'charger@gmail.com',
      id: 2
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.lista = state.lista.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.lista.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexDoContato !== -1) {
        state.lista[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const ultimoContato = state.lista[state.lista.length - 1]

      const contatoNovo = {
        ...action.payload,
        id: ultimoContato ? ultimoContato.id + 1 : 1
      }
      state.lista.push(contatoNovo)
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions
export default contatosSlice.reducer
