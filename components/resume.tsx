import { useState } from "react";
import { Button } from "./ui/button";

export default function resumePage() {
  const [showResume, setShowResume] = useState(false);

  return (
    <>
      <Button onClick={() => setShowResume(true)}>Resume</Button>

      {showResume && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg w-4/5 max-w-3xl">
            <button
              className="absolute top-2 right-2 text-black"
              onClick={() => setShowResume(false)}
            >
              ✖
            </button>
            <iframe
              src="C:\Users\sanja\Downloads\sk-portfolio\Sanjaykumarm-Resume.pdf"
              className="w-full h-96"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
