import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TranslationList from "./translations/TranslationList";
import VerseList from "./verses/VerseList";
import CollectionList from "./collections/CollectionList";

export function SelectedPage(props) {
  switch (props.page) {
    case "translations":
      return <TranslationList />;
    case "verses":
      return <VerseList />;
    case "collections":
      return <CollectionList />;
    default:
      return <h1>Page not found</h1>;
  }
}

export default function DashboardLayout(props) {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/translations">Translations</Link>
          </li>
          <li>
            <Link to="/verses">Verses</Link>
          </li>
          <li>
            <Link to="/collections">Collections</Link>
          </li>
          <li>
            <Link to="/">Log out</Link>
          </li>
        </ul>
      </nav>
      <SelectedPage page={props.page} />
    </div>
  );
}
