import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Permission = () => {
  const [showFirstPopup, setShowFirstPopup] = useState(true);
  const [showSecondPopup, setShowSecondPopup] = useState(false);
  const navigate = useNavigate();

  const handleFirstPopup = () => {
    setShowFirstPopup(false);
    setShowSecondPopup(true);
  };

  const handleYes = () => {
    alert("Yeayyy.. maaci cantiknya mas 😘");
    navigate("/apologize");
  };

  const handleNo = () => {
    alert("Masa ga dimaafin 😢? Plis sayang maafin dong 🥹");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {showFirstPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white py-7 px-8 rounded-xl shadow-lg">
            <p className="text-center font-semibold mb-4">
              Teruntuk Dwi Hartini, <br /> cintaku, cantikku, duniaku
            </p>
            <div className="flex justify-center">
              <button
                onClick={handleFirstPopup}
                className="bg-green-500 font-semibold text-white w-full py-2 rounded"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
      {showSecondPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-xl shadow-lg">
            <p className="text-center font-semibold mb-4">
              Halooo cantikk... <br />
              Maafin mas yaa sayang 🥹
            </p>
            <div className="flex justify-between">
              <button
                onClick={handleNo}
                className="bg-red-500 text-white w-1/2 py-2 rounded mr-2"
              >
                No
              </button>
              <button
                onClick={handleYes}
                className="bg-green-500 text-white w-full py-2 rounded"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Permission;
