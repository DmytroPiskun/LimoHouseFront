import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./routes";
import { useEffect } from "react";

const AppRouter = () => {
  useEffect(() => {
    document.body.style.margin = "0px";
    return () => {
      document.body.style.margin = null;
    };
  }, []);

  return (
    <Router>
      <Routes>
        {routes.map(({ component: Component, path, name, layoutType }) => (
          <Route path={path} key={name} element={<Component />} />
        ))}
      </Routes>
    </Router>
  );
};

export default AppRouter;
