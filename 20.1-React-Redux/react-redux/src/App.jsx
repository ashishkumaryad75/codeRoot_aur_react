import Counter from "./components/Counter.jsx";
import Header from "./components/Header.jsx";
import Auth from "./components/Auth.jsx";
import UserProfile from "./components/UserProfile.jsx";
import { useSelector } from "react-redux";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
