import { createContext, useReducer } from "react"

const INIT_STATE = {
  city: null,
  dates: [],
  options: {
    adult: null,
    children: null,
    room: null,
  },
}

export const SearchContext = createContext(INIT_STATE)

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "NEW_SEARCH":
        return action.payload
      case "RESET_SEARCH":
        return INIT_STATE
      default:
        return state
    }
  }, INIT_STATE)

  return (
    <SearchContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}
