import { Game } from "~/types"

type State = {
  numbers: number[]
  remaining: number
  selectedGame: Game | null
}

type Action =
  | { type: 'addNumber', payload: number }
  | { type: 'removeNumber', payload: number }
  | { type: 'clearGame' }
  | { type: 'completeGame', payload: number[] }
  | { type: 'selectGame', payload: Game }
  | { type: 'setRemaining', payload: number }
  | { type: 'setNumbers', payload: number[] }

export const initialState: State = {
  numbers: [],
  remaining: 0,
  selectedGame: null
}

export const Reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'addNumber':
      return {
        ...state,
        numbers: state.numbers.concat(action.payload),
        remaining: state.remaining - 1,
      }

    case 'removeNumber':
      return {
        ...state,
        numbers: state.numbers.filter(number => number !== action.payload),
        remaining: state.remaining + 1,
      }

    case 'clearGame':
      return {
        ...state,
        remaining: state.selectedGame!.max_number,
        numbers: [],
      }

    case 'completeGame':
      return {
        ...state,
        numbers: action.payload,
        remaining: 0,
      }

    case 'selectGame': {
      return {
        ...state,
        selectedGame: action.payload,
        remaining: action.payload.max_number,
        numbers: []
      }
    }

    case 'setRemaining':
      return {
        ...state,
        remaining: action.payload,
      }

    case 'setNumbers': {
      return {
        ...state,
        numbers: action.payload,
        remaining: 0,
      }
    }

    default:
      return state
  }
}
