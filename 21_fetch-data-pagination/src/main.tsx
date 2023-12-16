import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import PostList from "./PostList.tsx";
import "./styles.css";

const client = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <PostList />
    </QueryClientProvider>
  </React.StrictMode>
);
