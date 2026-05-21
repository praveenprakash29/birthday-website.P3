"use client";

import { useState } from "react";

export default function Home() {

  const [name, setName] = useState("");
  const [showBlast, setShowBlast] = useState(false);
  const [showGame, setShowGame] = useState(false);
  const [showSecondPage, setShowSecondPage] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const [showWishPage, setShowWishPage] = useState(false);
  const [showDoraemon, setShowDoraemon] = useState(false);

  const [clickedButtons, setClickedButtons] = useState<string[]>([]);

  // FIRST PAGE NAME CHECK
  const handleEnter = () => {

    if (name.trim().toLowerCase() !== "priyanka") {

      alert("Wrong Name 😜 Try Again ");
      return;
    }

    setShowBlast(true);

    setTimeout(() => {
      setShowBlast(false);
      setShowGame(true);
    }, 2200);
  };

  // FINAL FIXED GAME FUNCTION
  const handleGameAnswer = (answer: string) => {

    // WRONG ANSWERS
    if (answer !== "Priyanka") {

      if (answer === "Bangaram") {
        alert("Ayyoo 😭 Bangaram kaaduuuu ");
      }

      if (answer === "P3") {
        alert("Abba 😂 p3 enti");
      }

      if (answer === "Bondam") {
        alert("Nv Bakka Danive lee 😜 Kochem Brain use cheyi");
      }

      setWrongAnswer(true);

      setTimeout(() => {
        setWrongAnswer(false);
      }, 1500);

      let updatedButtons = [...clickedButtons];

      if (!updatedButtons.includes(answer)) {
        updatedButtons.push(answer);
        setClickedButtons(updatedButtons);
      }

      // AFTER ALL 3 WRONG BUTTONS CLICKED
      if (updatedButtons.length >= 3) {

        setTimeout(() => {

          setShowBlast(true);

          setTimeout(() => {

            setShowGame(false);
            setShowWishPage(true);

          }, 2200);

        }, 1200);
      }

      return;
    }

    // CORRECT ANSWER
    setShowBlast(true);

    setTimeout(() => {

      setShowGame(false);
      setShowWishPage(true);

    }, 2200);
  };

  return (
    <>

      {/* FIRST LANDING PAGE */}
      {!showGame && !showSecondPage && !showWishPage && (

        <div className="min-h-screen bg-gradient-to-br from-[#ffe4ec] via-[#ffd6e7] to-[#ffc2dc] flex items-center justify-center overflow-hidden relative px-6">

          {/* Background Emojis */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">

            {Array.from({ length: 20 }).map((_, i) => {

              const emojis = [
                "🐷",
                "🐖",
                "✨",
                "🌸",
                "💖",
                "💕",
                "🎂",
                "💫"
              ];

              return (
                <div
                  key={i}
                  className="absolute animate-[floating_3s_ease-in-out_infinite] opacity-90"
                  style={{
                    left: `${(i * 5) % 100}%`,
                    top: `${(i * 7) % 100}%`,
                    fontSize: "20px",
                    animationDuration: "3s",
                    transform: `rotate(${i * 20}deg)`
                  }}
                >
                  {emojis[i % emojis.length]}
                </div>
              );
            })}

          </div>

          {/* Blast Animation */}
          {showBlast && (

            <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md overflow-hidden">

              <div className="absolute w-[500px] h-[300px] md:h-[500px] bg-pink-500 rounded-full blur-[180px] opacity-40 animate-pulse"></div>

              {Array.from({ length: 25 }).map((_, i) => (

                <div
                  key={i}
                  className="absolute text-pink-300 animate-ping"
                  style={{
                    left: `${(i * 5) % 100}%`,
                    top: `${(i * 7) % 100}%`,
                    fontSize: "30px",
                    animationDuration: "2s",
                  }}
                >
                  💖
                </div>

              ))}

              <div className="relative animate-[pulse_1s_ease-in-out_infinite]">

                <div className="absolute inset-0 bg-red-500 blur-[80px] opacity-50 rounded-full"></div>

                <button
                  type="button"
                  className="relative text-[150px] text-[#ff2e63] drop-shadow-[0_0_40px_rgba(255,0,90,0.9)] transition-all duration-500 scale-125"
                >
                  ❤
                </button>

              </div>

            </div>

          )}

          {/* Card */}
          <div className="relative z-10 w-full max-w-2xl">

            <div className="relative bg-white/20 backdrop-blur-2xl border border-white/30 rounded-[30px] md:rounded-[50px] p-6 md:p-12 overflow-hidden">

              <h1 className="text-4xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4">
                Happy Birthday
              </h1>

              <p className="text-center text-gray-700 text-xl mb-10 leading-relaxed">
                Enter Birthday Girl Name
              </p>

              <div className="space-y-6">

                <input
                  type="text"
                  placeholder="Enter Your Name ❤️"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-5 rounded-3xl bg-white/60 border border-white/40 outline-none text-lg"
                />

                <button
                  onClick={handleEnter}
                  className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-5 rounded-3xl text-lg md:text-2xl font-bold"
                >
                  Continue
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

      {/* GAME PAGE */}
      {showGame && !showWishPage && (

        <div className="min-h-screen bg-gradient-to-b from-rose-100 to-pink-200 flex flex-col items-center justify-center text-center px-6">

          <div className="bg-white/30 backdrop-blur-2xl rounded-[30px] md:rounded-[50px] p-6 md:p-12 shadow-2xl max-w-2xl w-full">

            <h1 className="text-3xl md:text-5xl font-extrabold text-rose-500 mb-6">
              💘
            </h1>

            <p className="text-lg md:text-2xl text-gray-700 mb-10">
              Happy Birthday To...? 🎂
            </p>

            {wrongAnswer && (
              <div className="bg-red-100 border border-red-300 text-red-500 text-center py-4 rounded-2xl text-lg font-semibold mb-6">
                Oops 😜 Wrong Answer Potti...
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">

              <button
                onClick={() => handleGameAnswer("Bangaram")}
                className="bg-white/80 py-4 rounded-2xl text-lg font-bold"
              >
                Bangaram 😅
              </button>

              <button
                onClick={() => handleGameAnswer("Priyanka")}
                className="bg-gradient-to-r from-rose-500 to-pink-500 text-white py-4 rounded-2xl text-lg font-bold"
              >
                Priyanka 💖
              </button>

              <button
                onClick={() => handleGameAnswer("P3")}
                className="bg-white/80 py-4 rounded-2xl text-lg font-bold"
              >
                p3 😂
              </button>

              <button
                onClick={() => handleGameAnswer("Bondam")}
                className="bg-white/80 py-4 rounded-2xl text-lg font-bold"
              >
                Bondam 🤭
              </button>

            </div>

          </div>

        </div>

      )}

    </>
  );
}