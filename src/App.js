import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";

import { useSelector } from "react-redux";
import UserProfile from "./components/UserProfile";
// import Counter from "./componenetsWithoutToolkit/Counter";
// import Counter from "./classComponents/Counter";

function App() {
  const authState = useSelector((state) => state.auth);
  return (
    <Fragment>
      <Header />
      {!authState.isAuthenticated && <Auth />}
      {authState.isAuthenticated && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
