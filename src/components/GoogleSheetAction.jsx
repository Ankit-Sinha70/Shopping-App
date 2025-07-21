// GmailConnect.jsx or .tsx
import { useEffect, useState } from "react";

const GmailConnect = () => {
  const [composioReady, setComposioReady] = useState(false);

  useEffect(() => {
    const check = setInterval(() => {
      if (window.Composio) {
        console.log("✅ Composio loaded");

        window.Composio.init({
          apiKey: import.meta.env.VITE_COMPOSIO_API_KEY,
        });

        setComposioReady(true);
        clearInterval(check);
      }
    }, 300);

    return () => clearInterval(check);
  }, []);

  const handleConnectGmail = () => {
    console.log("Button clicked");

    if (!window.Composio || typeof window.Composio.authenticate !== "function") {
      alert("❌ Composio SDK not loaded correctly");
      return;
    }

    window.Composio.authenticate({
      integration: "gmail", // service you want to connect to
      successRedirectUrl: window.location.href,
    });
  };

  return (
    <div className="flex flex-col items-center mt-6">
      <button
        onClick={handleConnectGmail}
        disabled={!composioReady}
        className={`px-6 py-2 rounded text-white ${
          composioReady ? "bg-green-600 hover:bg-green-700" : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Connect Gmail
      </button>
    </div>
  );
};

export default GmailConnect;
