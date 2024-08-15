import React from "react";
import { useParams } from "react-router-dom";
import QRCode from "react-qr-code";
import { serverUrl } from "../../helpers/constants";

const QrCodePage: React.FC = () => {
  const { shortUrl } = useParams<{ shortUrl: string }>();

  // Construct the full URL for the QR code
  const qrCodeUrl = `${serverUrl}/api/shortUrl/${shortUrl}`;

  // Function to handle navigation to the home page with reload
  const goHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="container mx-auto pt-10 pb-10 text-center">
      <h1 className="text-2xl font-bold mb-4">QR Code for {shortUrl}</h1>
      <div className="mb-4">
        <QRCode value={qrCodeUrl} />
      </div>
      <button
        onClick={goHome}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Back to Home
      </button>
    </div>
  );
};

export default QrCodePage;
