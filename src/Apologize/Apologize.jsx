import React, { useState } from "react";

const Apologize = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-xl shadow-lg">
            <p className="text-center font-semibold mb-4">
              Nii ada surat dikit buat adek 👉👈
            </p>
            <div className="flex justify-center">
              <button
                onClick={handleClosePopup}
                className="bg-green-500 font-semibold text-white w-full py-2 rounded"
              >
                Baca surat
              </button>
            </div>
          </div>
        </div>
      )}
      {!showPopup && (
        <div>
          <div className="container">
            <div className="valentines">
              <div className="envelope">
                <div className="card">
                  <div className="text">
                    Happy <br /> 9th Monthversary <br /> Sayang <br /> I Love
                    You <br /> More
                  </div>
                  <div className="heart"></div>
                </div>
              </div>
              <div className="front"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Apologize;
