import LoginPage from "./pages/login/LoginPage";
import TranslationList from "./pages/dashboard/translations/TranslationList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DashboardLayout from "./pages/dashboard/DashboardLayout";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/translations">
            <DashboardLayout page="translations" />
          </Route>
          <Route path="/verses">
            <DashboardLayout page="verses" />
          </Route>
          <Route path="/collections">
            <DashboardLayout page="collections" />
          </Route>
          <Route path="/">
            <LoginPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
