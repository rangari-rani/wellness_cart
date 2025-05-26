import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Header from "./Header";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { getBasketFromLocalStorage } from "../util/util";
import { useAppDispatch } from "../store/configureStore";
import { fetchCurrentUser } from "../../features/account/accountSlice";
import agent from "../api/agent";
import { setBasket } from "../../features/basket/basketSlice";
import Spinner from "./Spinner";
import Footer from "../../features/home/Footer";
import React from "react";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const basket = getBasketFromLocalStorage();
    dispatch(fetchCurrentUser());
    if(basket){
      agent.Basket.get()
      .then(basket=>dispatch(setBasket(basket)))
      .catch(error=>console.log(error))
      .finally(()=>setLoading(false))
    }else{
      setLoading(false);
    }
  })

  const theme = createTheme({
    palette:{
      mode:paletteType,
    }
  })
  function handleThemeChange(){
    setDarkMode(!darkMode);
  }
  if(loading)return <Spinner message="Getting Basket..."/>
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
      <CssBaseline />
  
      {/* Wrap everything in a flex column layout */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
  
        {/* Make main content grow to fill space */}
        <Container sx={{ paddingTop: "64px", flexGrow: 1 }}>
          <Outlet />
        </Container>
  
        <Footer />
      </div>
    </ThemeProvider>
  );
  
}

export default App