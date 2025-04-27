// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Favorites } from "./pages/Favorites";
import { Settings } from "./pages/Settings";
import { TopicDetail } from "./pages/TopicDetail";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-pastel-pink via-pastel-lavender to-pastel-sky">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/topics/:id" element={<TopicDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
