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

function NavLink(props) {
  return (
    <>
      <li>
        <Link className="font-bold" to={props.link}>
          {props.text}
        </Link>
      </li>
    </>
  );
}

export default function DashboardLayout(props) {
  return (
    <div className="flex flex-row">
      <nav className="h-screen px-8  bg-gray-100 shadow border">
        <div className="pt-8">
          <p className="mx-auto w-auto text-center font-extrabold text-indigo-600">
            MemoryLamp
          </p>
        </div>
        <ul className="pt-12 space-y-2 text-gray-800">
          <NavLink link="/translations" text="Translations" />
          <NavLink link="/verses" text="Verses" />
          <NavLink link="/collections" text="Collections" />
          <hr />
          <NavLink link="/" text="Logout" />
        </ul>
      </nav>
      <div className="container px-8 pt-8">
        <SelectedPage page={props.page} />
      </div>
    </div>
  );
}
