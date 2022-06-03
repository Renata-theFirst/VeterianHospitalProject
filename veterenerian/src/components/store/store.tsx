import { createSlice, configureStore, createAsyncThunk } from '@reduxjs/toolkit'

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

interface State {currentTheme:ThemeNames, balance:number, busy: boolean}

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

function timeout(ms:number)
 {
    return new Promise(resolve => setTimeout(resolve, ms));
}


export const LoadBalance = createAsyncThunk(
  'sets/async',
  async () => {
    await timeout(3000);
    return {balance:5000, busy:false};
  }
)
const LoadBalancePending = (state:State) => {Object.assign(state,{busy:true})};
const LoadBalanceRejected = (state:State) => {Object.assign(state,{busy:false})};
const LoadBalanceFulfilled = (state:State, action:any) => {
  Object.assign(state, action.payload);
  
}
const initState: State = {
  currentTheme:ThemeNames.normal,
  balance:0,
  busy:false,
}
const themeSlice = createSlice({
  name: 'sets',
  initialState: initState,
  reducers: {
    toggle:(state:State) => {
      if(state.currentTheme === ThemeNames.big) {
        return {...state, currentTheme:ThemeNames.normal}
      } else {
        return {...state, currentTheme:ThemeNames.big}
      }
    }
  },
  extraReducers:{
    [String(LoadBalance.pending)]:LoadBalancePending,
    [String(LoadBalance.rejected)]:LoadBalanceRejected,
    [String(LoadBalance.fulfilled)]:LoadBalanceFulfilled,
  }
}) 

export const { actions } = themeSlice;

export const store = configureStore({
  reducer: {sets: themeSlice.reducer}
})


