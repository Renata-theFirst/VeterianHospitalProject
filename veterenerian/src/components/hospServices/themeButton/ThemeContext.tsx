import { createContext, useContext, useReducer } from "react";

type Theme = {
    color:string;
    fontSize:string;
}

type ThemePalete = {
    [key:string]:Theme
}

enum ThemeNames {
    big='big', normal='normal'
}

type Action = {type: 'toggle'} 

type Dispatch = (action: Action) => void

type ThemeProviderProps = {children: React.ReactNode}

type State = {currentTheme:ThemeNames}

const ThemePaleteData:ThemePalete ={
    [ThemeNames.big]:{
        color:'rgb(0,0,0)',
        fontSize:'200%',
    },
    [ThemeNames.normal]:{
        color:'rgba(242,243,244, 0.9)',
        fontSize:'100%',
    },
}

const ThemeContext = createContext<
  {state: State; dispatch: Dispatch} | undefined
>(undefined)

//const ThemeContext = createContext();
function getThemeByName(name:ThemeNames):Theme {
    return ThemePaleteData[name];
}

function themeReducer(state:State, action:Action) {
    switch (action.type) {
      case 'toggle': {
        if(state.currentTheme === ThemeNames.big) {
            return {currentTheme:ThemeNames.normal}
        } else {
            return {currentTheme:ThemeNames.big}
        }
      }
      default: {
        throw new Error(`Unhandled action type`)
      }
    }
}
  
function ThemeProvider({children}: ThemeProviderProps) {
    const [state, dispatch] = useReducer(themeReducer, {currentTheme:ThemeNames.normal});
    const value = {state, dispatch};
    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

function useTheme() {
    const context = useContext(ThemeContext)
    if (context === undefined) {
      throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}
  
export {ThemeProvider, useTheme, getThemeByName}