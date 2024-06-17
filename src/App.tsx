import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.style.scss'
import Layout from './layouts/Layout'
import { ThemeProvider, createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#A1A1AA',
    },
  },
});

export function App() {

    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />} >
            
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    )
}
