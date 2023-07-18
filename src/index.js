import "./index.css";
import App from "./App";
import AppNoSuspense from "./AppNoSuspense";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import rootReducer from "./reducers";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const store = configureStore({
  reducer: rootReducer,
});
const persistor = persistStore(store);
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={true} />
          <App />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();