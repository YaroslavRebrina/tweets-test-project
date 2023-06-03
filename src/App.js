import { Route, Routes } from "react-router-dom";
import "./App.css";

import { TweetsPage } from "components/TweetsWidget/TweetPage/TweetPage";

function App() {
  return (
    <Routes>
      {/* <Route path="/home"></Route> */}
      <Route path="/tweets" element={<TweetsPage />} />
      <Route path="*" element={<TweetsPage />} />
    </Routes>
  );
}

export default App;
