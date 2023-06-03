import { Route, Routes } from "react-router-dom";
import "./App.css";
import { TweetCard } from "components/TweetsWidget/TweetPage/TweetCard/TweetCard";

function App() {
  return (
    <Routes>
      {/* <Route path="/home"></Route> */}
      <Route path="/tweets" element={<TweetCard />} />
      <Route path="*" />
    </Routes>
  );
}

export default App;
