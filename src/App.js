import { Route, Routes } from "react-router-dom";
import "./App.css";

import { TweetsPage } from "components/TweetsWidget/TweetPage/TweetPage";
import { Header } from "./components/Header/Header";
import { HomePage } from "./components/HomePage/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path="/tweets" element={<TweetsPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
