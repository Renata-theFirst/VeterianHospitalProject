/* import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
      //counter: counterReducer,
    },
  });
  
  export type AppDispatch = typeof store.dispatch;
  export type RootState = ReturnType<typeof store.getState>;
  export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
  >; */


import { createSlice, configureStore } from '@reduxjs/toolkit'

interface Theme {
  color:string;
  fontSize:string;
} 

interface ThemePalete {
  [key:string]:Theme
}

 enum ThemeNames {
  big='big', normal='normal'
} 

interface State {currentTheme:ThemeNames}

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

export function getThemeByName(name:ThemeNames):Theme {
  return ThemePaleteData[name];
}

const themeSlice = createSlice({
  name: 'currentTheme',
  initialState: {
    currentTheme:ThemeNames.big
  },
  reducers: {
    toggle: (state:State) => {
      if(state.currentTheme === ThemeNames.big) {
        return {currentTheme:ThemeNames.normal}
      } else {
        return {currentTheme:ThemeNames.big}
      }
    }
  }
}) 

  
export const { toggle } = themeSlice.actions

export const store = configureStore({
  reducer: themeSlice.reducer
})


