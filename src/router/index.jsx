import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./routes";

const AppRouter = () => {
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
