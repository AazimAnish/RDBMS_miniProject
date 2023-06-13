import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import Resources from "./pages/Resources/Resources";
import SignUpMail from "./pages/SignUpMail/SignUpMail";
import Login from "./pages/login/login";
import { useEffect } from "react";
import HomeCircle from "./pages/learningCircle/HomeCircle/HomeCircle";
import CreateCircle from "./pages/learningCircle/CreateCircle/CreateCircle";
import JoinCircle from "./pages/learningCircle/JoinCircle/JoinCircle";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import CirclePage from "./pages/learningCircle/CirclePage/CirclePage";



function App() {
  const location = useLocation();
  const pathname = location.pathname;
    const navigationType = useNavigationType();


  useEffect(() => {
    if (navigationType !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [navigationType, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/resources":
        title = "";
        metaDescription = "";
        break;
      case "/signup-mail":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/signup-password":
        title = "";
        metaDescription = "";
        break;
      case "/home-circle":
          title = "";
          metaDescription = "";
          break;
      case "/join-circle":
          title = "";
          metaDescription = "";
          break;
      case "/create-circle":
          title = "";
          metaDescription = "";
          break;
      case "/circle-details":
            title = "";
            metaDescription = "";
            break;
      case "/profile-page":
          title = "";
          metaDescription="";
          break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
  
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/signup-mail" element={<SignUpMail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create-circle" element={<CreateCircle />} />
      <Route path="/join-circle" element={<JoinCircle />} />
      <Route path="/home-circle" element={<HomeCircle />} />
      <Route path="/profile-page" element={<ProfilePage />} />
      <Route path="/circle-details" element={<CirclePage />} />
    </Routes>
    
  );
}
export default App;
