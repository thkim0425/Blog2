import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import { PostIdProvider } from "./contexts/PostContext";

const Root = ({ store }) => {
  console.log("/Root.js");
  return (
    <Provider store={store}>
      <PostIdProvider>
        <BrowserRouter>
          <Route path="/" component={App} />
        </BrowserRouter>
      </PostIdProvider>
    </Provider>
  );
};

export default Root;
