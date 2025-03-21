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
import WelcomeScreen2 from "./pages/WelcomeScreen2";
import SuccessPage from "./pages/SuccessPage";
import NotificationComponent from "./components/Notification";
import { useEffect, useState } from "react";
import PlaceOrderPage from "./pages/PlaceOrderPage";
import Shoes from "./pages/Shoes";
import PaymentPage from "./pages/PaymentPage";
import ProductDetailsPage from "./pages/ProductDetailPage";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // paths where the Navbar should not appear
  const hideNavbarRoutes = [
    "/",
    "/login",
    "/signUp",
    "/welcomeScreen2",
    "/success",
    "/placeOrder",
  ];

  // paths where the footer should not appear
  const hideFooterRoutes = [
    "/placeOrder",
    "/payments",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Conditionally render Navbar only if not isMobile and not on hidden routes */}
      {!isMobile && !hideFooterRoutes && !hideNavbarRoutes.includes(window.location.pathname) && (
        <Navbar />
      )}

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/women" element={<Women />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/account" element={<ProfilePage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/welcomeScreen2" element={<WelcomeScreen2 />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/notification" element={<NotificationComponent />} />
        <Route path="/placeOrder" element={<PlaceOrderPage />} />
        <Route path="/payments" element={<PaymentPage />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/product-details" element={<ProductDetailsPage />} />

      </Routes>

      {/* Display Footer on all pages except the excluded ones */}
      {!hideNavbarRoutes.includes(window.location.pathname) && <Footer />}
    </div>
  );
}

export default App;
