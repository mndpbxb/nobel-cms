import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/collapse";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/modal";
import "bootstrap/js/dist/tab.js";
import "./App.scss";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { Suspense, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { HeaderContextProvider } from "./context/HeaderContext";
import { UserContextProvider } from "./context/UserContext";
import PrivateRoutes from "./routes/PrivateRoutes";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import 'react-toastify/dist/ReactToastify.css';

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'

function App() {
  // Disable Console
  useEffect(() => {
    // Disable Console during production
    if (process.env.NODE_ENV === "production") {
      console.log = function () {};
      window.console.log =
        window.console.debug =
        window.console.info =
        window.console.error =
          function () {
            return false;
          };
    }
  }, []);

  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: "poppins",
        textTransform: "none",
        fontSize: "1rem",
      },
    },
  });

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: true,
        retry: false,
        staleTime: 5 * 60 * 1000,
      },
    },
  });

  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <ThemeProvider theme={theme}>
          <UserContextProvider>
            <HeaderContextProvider>
              <Suspense fallback={<LoadingSpinner />}>
                <PrivateRoutes />
              </Suspense>
            </HeaderContextProvider>
          </UserContextProvider>
          <ToastContainer
            pauseOnHover
            position="bottom-right"
            autoClose={2500}
          />
        </ThemeProvider>
      </QueryClientProvider>
    </React.Fragment>
  );
}

export default App;
