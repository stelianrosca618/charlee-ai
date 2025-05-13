import logo from './logo.svg';
import './App.css';
import { Router } from './router';
import { APIProvider } from "@vis.gl/react-google-maps";
import { ToastContainer, toast } from 'react-toastify';
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
        <APIProvider apiKey='AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao'>
          <Router />
          <ToastContainer />
        </APIProvider>
      </ThemeProvider>
      
    </div>
  );
}

export default App;
