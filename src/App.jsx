import "./App.css";
import Body from "./components/Body.jsx";
import Head from "./components/Head.jsx";
import { Provider } from "react-redux";
import store from "./utils/store.js";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainContainer from "./components/MainContainer.jsx";
import WatchPage from "./components/WatchPage.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <Head />
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
