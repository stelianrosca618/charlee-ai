import logo from './logo.svg';
import './App.css';
import { Router } from './router';
import { CssBaseline, createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material";
let theme = createTheme({  
  typography: {
    fontFamily: 'sans-serif'
  },
});
theme = responsiveFontSizes(theme);
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
          
        <Router />
      </ThemeProvider>
      
    </div>
  );
}

export default App;
