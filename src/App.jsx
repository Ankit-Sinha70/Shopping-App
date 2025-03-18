import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignUpPage from "./pages/SignUpPage";
import Categories from "./pages/Categories";
import Women from "./pages/Women";
import CartPage from "./pages/CartPage";
import ProfilePage from "./pages/ProfilePage";
import WelcomeScreen from "./pages/WelcomeScreen";
import LogInPage from "./pages/LogInPage";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Routes>
        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/categories"
          element={
            <>
              <Navbar />
              <Categories />
              <Footer />
            </>
          }
        />
        <Route
          path="/women"
          element={
            <>
              <Navbar />
              <Women />
              <Footer />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <Navbar />
              <CartPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/account"
          element={
            <>
              <Navbar />
              <ProfilePage />
              <Footer />
            </>
          }
        />
        <Route
          path="/signUp"
          element={
            <>
              {/* <Navbar /> */}
              <SignUpPage />
              {/* <Footer /> */}
            </>
          }
        />
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/login" element={<LogInPage />} />
      </Routes>
      
    </div>
  );
}

export default App;
