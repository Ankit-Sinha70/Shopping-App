import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
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
import PlaceOrderPage from "./pages/PlaceOrderPage";
import Shoes from "./pages/Shoes";
import PaymentPage from "./pages/PaymentPage";
import ProductDetailsPage from "./pages/ProductDetailPage";
import SettingsPage from "./pages/SettingPage";
import OrdersPage from "./pages/OrdersPage";
import OrderDetails from "./pages/OrderDetails";
import WishList from "./pages/WishList";

function App() {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Paths where the Navbar should not appear
  const hideNavbarRoutes = [
    "/",
    "/login",
    "/signUp",
    "/welcomeScreen2",
    "/success",
    "/placeOrder",
  ];

  // Paths where the Footer should not appear
  const hideFooterRoutes = [
    "/placeOrder",
    "/payments",
    "/settings",
    "/product-details",
    "/notification",
    "/success",
    "/cart",
    "/account",
    "/orderDetails",
    "/wishlist",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Conditionally render Navbar */}
      {!isMobile && !hideNavbarRoutes.includes(location.pathname) && <Navbar />}

      {/* Main Content */}
      <div className="flex-grow">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/women" element={<Women />} />
          <Route path="/cart" element={<CartPage />} />
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
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/account" element={<ProfilePage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/orderDetails" element={<OrderDetails />} />
          <Route path="/wishlist" element={<WishList />} />
        </Routes>
      </div>

      {/* Conditionally render Footer */}
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default App;
