import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LandingPage from "./pages/LandingPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreatePage from "./pages/CreatePage.jsx";
import EditPage from "./pages/EditPage.jsx";
import Navbar from "./components/Navbar";
import ReadMorePage from "./pages/ReadMorePage";
import { createContext, useContext, useState } from "react";

const ArticleDataContext = createContext();

function ArticleDataProvider({ children }) {
  const [ArticleData, setArticleData] = useState([]); // Your initial data state

  return (
    <ArticleDataContext.Provider value={{ ArticleData, setArticleData }}>
      {children}
    </ArticleDataContext.Provider>
  );
}

export { ArticleDataContext, ArticleDataProvider };

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    // errorElement: < />,
  },
  {
    path: "/createPage",
    element: <CreatePage />,
    // errorElement: < />,
  },
  {
    path: "/editPage/:articleId",
    element: <EditPage />,
    // errorElement: < />,
  },
  {
    path: "/readMorePage/:articleId",
    element: <ReadMorePage />,
    // errorElement: < />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ArticleDataProvider>
      <RouterProvider router={router} />
    </ArticleDataProvider>
  </React.StrictMode>
);
