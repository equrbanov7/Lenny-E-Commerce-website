import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, useLocation } from "react-router-dom";
import { store, persistor } from "./redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import React from "react";

// eslint-disable-next-line react-refresh/only-export-components
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render anything
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <ScrollToTop />
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
