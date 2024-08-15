import { Routes, Route } from "react-router-dom";
import Container from "./components/containers/container";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import QrCodePage from "./components/extra/qrCode";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/qrcode/:shortUrl" element={<QrCodePage />} />
        {/* Add more routes here if needed */}
      </Routes>
      <Footer />
    </>
  );
}
