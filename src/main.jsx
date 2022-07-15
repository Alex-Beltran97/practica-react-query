import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { PostProvider } from "./context/postContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <PostProvider>
        <App />
        <ReactQueryDevtools />
      </PostProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
