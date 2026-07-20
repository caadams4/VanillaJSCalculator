import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ScrollToTop } from "./components/ScrollToTop";
import { About } from "./pages/About";
import { BookDemo } from "./pages/BookDemo";
import { CaseStudies } from "./pages/CaseStudies";
import { Home } from "./pages/Home";
import { Legal } from "./pages/Legal";
import { Platform } from "./pages/Platform";
import { SolutionDetail } from "./pages/SolutionDetail";
import { Solutions } from "./pages/Solutions";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/:slug" element={<SolutionDetail />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/about" element={<About />} />
          <Route path="/book-a-demo" element={<BookDemo />} />
          <Route path="/privacy" element={<Legal kind="privacy" />} />
          <Route path="/terms" element={<Legal kind="terms" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
