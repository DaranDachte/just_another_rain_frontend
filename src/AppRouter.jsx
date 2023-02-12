import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Diary from "./pages/Diary";
import TestsNewsDonations from "./pages/TestsNewsDonations";
import QuestionsAndAnswers from "./pages/QuestionsAndAnswers";
import Gallery from "./pages/Gallery";
import Welcome from "./pages/Welcome";
import Notfound from "./pages/Notfound";
const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/tests_and_news" element={<TestsNewsDonations />} />
        <Route path="/questions_and_answers" element={<QuestionsAndAnswers />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
