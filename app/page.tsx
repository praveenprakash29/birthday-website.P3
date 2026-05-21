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

  // GAME ANSWER CHECK
  const handleGameAnswer = (answer: string) => {

    // WRONG ANSWERS
    if (answer !== "Priyanka") {

      // Funny Messages
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

      // Store unique clicked buttons
      let updatedButtons = [...clickedButtons];

      if (!updatedButtons.includes(answer)) {
        updatedButtons.push(answer);
        setClickedButtons(updatedButtons);
      }

      // AFTER ALL 3 WRONG BUTTONS CLICKED
      if (updatedButtons.length >= 3) {

        // Disable clicking temporarily
        const allBtns =
          document.querySelectorAll(".game-btn");

        allBtns.forEach((btn) => {
          (btn as HTMLButtonElement).disabled = true;
        });

        // WAIT 30 SECONDS
        setTimeout(() => {

          const wrongBtns =
            document.querySelectorAll(".wrong-btn");

          // Animate wrong buttons
          wrongBtns.forEach((btn) => {

            (btn as HTMLElement).style.transition =
              "all 1s ease";

            (btn as HTMLElement).style.opacity = "0";

            (btn as HTMLElement).style.transform =
              "scale(0.4) translateY(50px)";
          });

          const priyankaBtn =
            document.getElementById("priyanka-btn");

          if (priyankaBtn) {

            priyankaBtn.classList.remove(
              "translate-x-132",
              "-translate-x-132",
              "translate-y-120",
              "-translate-y-120",
              "translate-x-94",
              "-translate-x-94",
              "translate-y-106",
              "-translate-y-106"
            );

            // CENTER BIG BUTTON ANIMATION
            priyankaBtn.classList.add(
              "col-span-2",
              "mx-auto",
              "w-[220px]",
              "scale-170"
            );
          }

          // OPEN WISH PAGE
          setTimeout(() => {

            setShowBlast(true);

            setTimeout(() => {

              setShowGame(false);
              setShowWishPage(true);

            }, 2200);

          }, 1200);

        }, 2000);
      }

      return;
    }

    // CORRECT ANSWER BEFORE 3 WRONG CLICKS
    if (clickedButtons.length < 3) {

      setShowBlast(true);

      setTimeout(() => {

        setShowGame(false);
        setShowWishPage(true);

      }, 2200);
    }
  };

  return (
    <>

      {/* FIRST LANDING PAGE */}
      {!showGame && !showSecondPage && !showWishPage && (

        <div className="min-h-screen bg-gradient-to-br from-[#ffe4ec] via-[#ffd6e7] to-[#ffc2dc] flex items-center justify-center overflow-hidden relative px-6">

          {/* Cute Romantic Background Emojis */}
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

          {/* CINEMATIC ROMANTIC TRANSITION */}
          {showBlast && (

            <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md overflow-hidden">

              {/* Background Glow */}
              <div className="absolute w-[500px] h-[300px] md:h-[500px] bg-pink-500 rounded-full blur-[180px] opacity-40 animate-pulse"></div>

              {/* Floating Hearts */}
              {Array.from({ length: 25 }).map((_, i) => (

                <div
                  key={i}
                  className="absolute text-pink-300 animate-ping"
                  style={{
                    left: `${(i * 5) % 100}%`,
                    top: `${(i * 7) % 100}%`,
                    fontSize: "30px",
                    animationDuration: `${1 + Math.random() * 2}s`,
                  }}
                >
                  💖
                </div>

              ))}

              {/* Main Heart */}
              <div className="relative animate-[pulse_1s_ease-in-out_infinite]">

                <div className="absolute inset-0 bg-red-500 blur-[80px] opacity-50 rounded-full"></div>

                <button
                  type="button"
                  aria-label="Play celebration animation"
                  className="relative text-[150px] text-[#ff2e63] drop-shadow-[0_0_40px_rgba(255,0,90,0.9)] transition-all duration-500 scale-125"
                >
                  ❤
                </button>

              </div>

            </div>

          )}

          {/* Premium Card */}
          <div className="relative z-10 w-full max-w-2xl">

            <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-300 rounded-full blur-[120px] opacity-40"></div>
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-rose-400 rounded-full blur-[120px] opacity-40"></div>

            <div className="relative bg-white/20 backdrop-blur-2xl border border-white/30 shadow-[0_8px_40px_rgba(255,105,180,0.25)] rounded-[30px] md:rounded-[50px] p-6 md:p-12 overflow-hidden">

              <div className="absolute top-6 right-8 text-3xl animate-bounce">
                💖
              </div>

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
                  className="w-full p-5 rounded-3xl bg-white/60 border border-white/40 outline-none text-lg shadow-lg focus:ring-4 focus:ring-pink-300"
                />

                <button
                  onClick={handleEnter}
                  className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-5 rounded-3xl text-lg md:text-2xl font-bold hover:scale-105 transition-all duration-500 shadow-[0_8px_30px_rgba(255,20,147,0.4)]"
                >
                  Continue
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

      {/* GAME PAGE */}
      {showGame && !showSecondPage && !showWishPage && (

        <div className="min-h-screen bg-gradient-to-b from-rose-100 to-pink-200 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">

          {/* CINEMATIC ROMANTIC TRANSITION */}
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
                    animationDuration: `${1 + Math.random() * 2}s`,
                  }}
                >
                  🐖
                </div>

              ))}

              <div className="relative animate-[pulse_1s_ease-in-out_infinite]">

                <div className="absolute inset-0 bg-red-500 blur-[80px] opacity-50 rounded-full"></div>

                <button
                  type="button"
                  aria-label="Play celebration animation"
                  className="relative text-[150px] text-[#ff2e63] drop-shadow-[0_0_40px_rgba(255,0,90,0.9)] transition-all duration-500 scale-125"
                >
                  ❤
                </button>

              </div>

            </div>

          )}

          <div className="absolute top-10 left-10 text-3xl md:text-5xl animate-pulse">
            🐖
          </div>

          <div className="absolute bottom-10 right-10 text-3xl md:text-5xl animate-pulse">
            🐖
          </div>

          <div className="bg-white/30 backdrop-blur-2xl border border-white/40 rounded-[30px] md:rounded-[50px] p-6 md:p-12 shadow-2xl max-w-2xl w-full relative z-10">

            <h1 className="text-3xl md:text-5xl font-extrabold text-rose-500 mb-6">
              💘
            </h1>

            <p className="text-lg md:text-2xl text-gray-700 mb-10">
              Happy Birthday To...? 🎂
            </p>

            {wrongAnswer && (
              <div className="bg-red-100 border border-red-300 text-red-500 text-center py-4 rounded-2xl text-lg font-semibold animate-[floating_3s_ease-in-out_infinite] mb-6">
                Oops 😜 Wrong Answer Potti...
              </div>
            )}

            {/* Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">

              <button
                onClick={() => handleGameAnswer("Bangaram")}
                className="game-btn wrong-btn bg-white/80 hover:bg-rose-100 py-4 md:py-5 rounded-2xl md:rounded-3xl text-lg md:text-xl font-bold transition-all duration-300 shadow-md"
              >
                Bangaram 😅
              </button>

              <button
                id="priyanka-btn"
                onClick={() => handleGameAnswer("Priyanka")}
                onMouseEnter={(e) => {

                  if (clickedButtons.length >= 3) return;

                  const positions = [
                    "translate-x-132",
                    "-translate-x-132",
                    "translate-y-120",
                    "-translate-y-120",
                    "translate-x-94 translate-y-106",
                    "-translate-x-94 -translate-y-106",
                  ];

                  const random =
                    positions[Math.floor(Math.random() * positions.length)];

                  e.currentTarget.className =
                    `game-btn bg-gradient-to-r from-rose-500 to-pink-500 text-white py-4 md:py-5 rounded-2xl md:rounded-3xl text-lg md:text-xl font-bold shadow-xl transition-all duration-300 transform ${random}`;
                }}
                onMouseLeave={(e) => {

                  if (clickedButtons.length >= 3) return;

                  e.currentTarget.className =
                    "game-btn bg-gradient-to-r from-rose-500 to-pink-500 text-white py-4 md:py-5 rounded-2xl md:rounded-3xl text-lg md:text-xl font-bold shadow-xl transition-all duration-300";
                }}
                className="game-btn bg-gradient-to-r from-rose-500 to-pink-500 text-white py-4 md:py-5 rounded-2xl md:rounded-3xl text-lg md:text-xl font-bold shadow-xl transition-all duration-300"
              >
                Priyanka 💖
              </button>

              <button
                onClick={() => handleGameAnswer("P3")}
                className="game-btn wrong-btn bg-white/80 hover:bg-rose-100 py-4 md:py-5 rounded-2xl md:rounded-3xl text-lg md:text-xl font-bold transition-all duration-300 shadow-md"
              >
                p3 😂
              </button>

              <button
                onClick={() => handleGameAnswer("Bondam")}
                className="game-btn wrong-btn bg-white/80 hover:bg-rose-100 py-4 md:py-5 rounded-2xl md:rounded-3xl text-lg md:text-xl font-bold transition-all duration-300 shadow-md"
              >
                Bondam 🤭
              </button>

            </div>

          </div>

        </div>

      )}

      {/* THIRD PAGE */}
      {showWishPage && !showSecondPage && (

        <div className="min-h-screen bg-gradient-to-b from-rose-100 via-pink-50 to-white flex flex-col items-center justify-center text-center px-6 overflow-hidden relative">

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
                  }}
                >
                  {emojis[i % emojis.length]}
                </div>
              );
            })}

          </div>

          <div className="relative z-10 max-w-full md:max-w-4xl w-full">

            <h1 className="text-4xl md:text-7xl font-extrabold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-6 animate-[floating_3s_ease-in-out_infinite]">
              Happy Birthday 💖
            </h1>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-700 mb-8">
              Priyanka ✨
            </h2>

            <p className="text-lg md:text-2xl text-gray-600 leading-loose mb-10">
              Wishing you endless happiness, magical moments,
              smiles, love and beautiful memories forever 💖
            </p>

            <img
              src="/wish.png"
              alt="wish"
              className="w-full max-w-3xl mx-auto h-[300px] md:h-[500px] object-cover rounded-[20px] md:rounded-[40px] shadow-2xl hover:scale-105 transition-all duration-700"
            />

            <div className="mt-12">

              <button
                onClick={() => {

                  setShowWishPage(false);
                  setShowSecondPage(true);

                  setTimeout(() => {
                    setShowDoraemon(true);
                  }, 1000);

                }}
                className="bg-gradient-to-r from-rose-500 to-pink-500 text-white py-5 px-12 rounded-3xl text-lg md:text-2xl font-bold hover:scale-105 transition-all duration-500 shadow-[0_8px_30px_rgba(255,20,147,0.4)]"
              >
                Continue 💖
              </button>

            </div>

          </div>

        </div>

      )}

      {/* FINAL PAGE */}
      {showSecondPage && (

        <div className="min-h-screen bg-gradient-to-b from-rose-100 via-pink-50 to-white flex flex-col items-center justify-center text-center px-6 overflow-hidden relative">
          <div className="
absolute
top-0
left-0
w-full
h-full
bg-[radial-gradient(circle_at_top,rgba(255,192,203,0.35),transparent_60%)]
pointer-events-none
"></div>
<div className="absolute top-0 left-0 w-96 h-96 bg-pink-300 blur-[150px] opacity-30 rounded-full"></div>

<div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-400 blur-[150px] opacity-30 rounded-full"></div>
          <div className="relative z-10 max-w-6xl w-full">

  <audio autoPlay loop>
    <source
      src="/Poolu Pooyu - SenSongsmp3.Co.mp3"
      type="audio/mp3"
    />
  </audio>

  {/* DORAEMON */}

            {/* DORAEMON */}
            {showDoraemon && (

              <div className="flex flex-col items-center mb-12 opacity-0 animate-[fadeUp_1.5s_ease_forwards]">

                <img
                  src="/doraemon.png"
                  alt="doraemon"
                  className="w-[140px] md:w-[220px] animate-[floating_3s_ease-in-out_infinite]"
                />

                <div className="bg-white px-8 py-5 rounded-[30px] shadow-xl text-lg md:text-2xl font-bold text-gray-700 mt-4 opacity-0 animate-[fadeUp_1s_ease_forwards]">
                  Hello Priyanka 👋💖 <br />
                  Happy Birthday To You 🎂✨
                </div>

              </div>

            )}

            <h1 className="text-4xl md:text-7xl font-extrabold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-6">
              Happy Birthday
            </h1>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-700 mb-10">
              Priyanka 💖
            </h2>

           {/* VIDEO */}

<div className="relative mb-14">

  <div className="
    absolute
    top-1/2
    left-1/2
    -translate-x-1/2
    -translate-y-1/2
    w-[80%]
    h-[80%]
    bg-pink-400
    blur-[150px]
    opacity-20
    -z-10
  "></div>

  <video
    autoPlay
    muted
    loop
    controls
    className="
      w-full
      max-w-full
      md:max-w-4xl
      mx-auto
      rounded-[20px]
      md:rounded-[40px]
      shadow-[0_10px_60px_rgba(255,105,180,0.4)]
      border
      border-white/30
    "
  >
    <source
      src="/birthday.mp4.mp4"
      type="video/mp4"
    />
  </video>

</div>

            {/* PHOTO GALLERY */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8 md:mt-14">

              {[
  "/p1.png",
  "/p2.png",
  "/p3.png",
  "/p4.png",
].map((photo, index) => (

  <div
  key={index}

  style={{
    animationDelay: `${index * 0.7}s`
  }}

  className="
    relative
    group
    overflow-hidden
    rounded-[30px]
    bg-white/30
    backdrop-blur-xl
    border
    border-white/40
    shadow-2xl
    hover:scale-105
    transition-all
    duration-500
    opacity-0
    animate-[fadeUp_1s_ease_forwards]
  "
>

    <img
      src={photo}
      alt="memory"
      className="w-full h-[180px] md:h-[250px] object-cover"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

    <div className="absolute bottom-4 left-4 text-white font-bold text-lg">
      Memory 💖
    </div>
    <p className="
mt-10
text-lg
md:text-2xl
text-gray-700
font-medium
leading-loose
animate-[fadeUp_1.5s_ease_forwards]
">
  Made with lots of love 💖
</p>

  </div>

))}

            </div>

          </div>

        </div>

      )}

    </>
  );
}