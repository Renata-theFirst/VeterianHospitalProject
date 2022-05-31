import { createContext } from "react";

/* type Action = {type: 'toggle'} 
type Dispatch = (action: Action) => void
type State = {currentTheme: ThemeName}
type ThemeName = 'normal'| 'big'
type ToggleProviderProps = {children: React.ReactNode}
interface Themes{
    [ThemeName: string]:{
        color:string;
        fontSize:string;
    }
}

export const themes:Themes = {
    normal: {
        color:'rgba(242,243,244, 0.9)',
        fontSize:'100%'
    },
    big: {
        color:'rgb(0,0,0)',
        fontSize:'200%'
    },
};


export const ThemeContext = React.createContext<
{state: State; dispatch: Dispatch} | undefined
>(undefined);

function toggleReducer(state: State, action: Action) {
    console.log(state);
  switch (action.type) {
    case 'toggle': {
      return   {currentTheme: state.count + 1} 
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function ToggleProvider({children}: ToggleProviderProps) {
  const [state, dispatch] = React.useReducer(toggleReducer, {currentTheme: themes.normal})
  const value = {state, dispatch}
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

function useToggle() {
  const context = React.useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider')
  }
  return context
}

export {ToggleProvider, useToggle} */

/* Способ почти рабочий. Почти... */

/* type Theme = {
    big:{
        color:string;
        fontSize:string;
    },
    normal:{}
}

export const theme:Theme = {
    big:{
        color:'rgb(0,0,0)',
        fontSize:'200%'
    },
    normal:{}
};


export const themeData = {
    theme: theme.normal,
    toggleTheme: () => {
        console.log(theme);
       //theme === theme.normal ? theme.big : theme.normal
    },
}
  
export const ThemeContext = React.createContext(themeData); */

/* Новый способ */
interface iTheme{
    color:string;
    fontSize:string;
}

interface iThemes{
    big: iTheme,
    normal: iTheme,
};

export const themes:iThemes = {
    big:{
        color:'rgb(0,0,0)',
        fontSize:'200%',
    },
    normal:{
        color:'rgba(242,243,244, 0.9)',
        fontSize:'100%',
    },
};

export default createContext({
    themes: {},
    theme: {},
    setTheme: () => {},
});

