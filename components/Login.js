import Head from "next/head";
import { useState } from "react";
import SignIn from "./SignIn";
import { React } from "react";

const Login = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div
      className="relative h-full"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://www.doyourevent.fr/images/2020/08/26/modeles-d-organisation-doyourevent.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <Head>
        <title>Meet29 - Login</title>
      </Head>
      <div>
        <img
          src="https://cdn.discordapp.com/attachments/975668516814479431/975697646029250630/logo_g29.png"
          alt=""
          className="fixed left-0 w-[180px] object-contain pl-5 pt-5"
        />

        <button
          className="fixed right-[20px] top-[20px] py-[5px] px-[20px] text-base text-white bg-[#2e8b57] hover:scale-110 duration-200 transition transform ease-out cursor-pointer hover:z-20"
          onClick={() => setSignIn(true)}
        >
          S'identifier
        </button>

        <div
          className="w-full h-[100vh] z-10"
          style={{
            background: "rgba(0,0,0,0.5)",
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 60%,rgba(0,0,0,0.4) 100%)`,
          }}
        />

        <div className="absolute top-[12%] mx-auto w-full text-center z-10 text-white p-5">
          {signIn ? (
            <SignIn />
          ) : (
            <>
              <h1 className="text-7xl mb-5 ">
             Votre platforme <br></br>
              de team building
              </h1>
              <h2 className="text-3xl font-normal mb-[30px]">
              Où que vous soyez. Rejoignez des events.
              </h2>
              <h3 className="text-xl mb-5">
              Tous l'actu sur les sports
              </h3>

              <div className="h-[30px]">
                <form>
                  <input
                    type="email"
                    placeholder="Adresse e-mail"
                    className="p-4 outline-black max-w-[600px] w-[40%] rounded-full text-black"
                  />
                  <br/><br/>
                  
                  <input
                    type="name"
                    placeholder="Nom"
                    className="p-4 outline-black max-w-[600px] w-[40%] rounded-full text-black"
                  />
                    <br/><br/>
                 
        
                  <input
                    type="first name"
                    placeholder="Prénom"
                    className="p-4 outline-black max-w-[600px] w-[40%] rounded-full text-black"
                  />
                   <br/><br/>
                   
                   <input
                    type="password"
                    placeholder="Mot de passe"
                    className="p-4 outline-black max-w-[600px] w-[40%] rounded-full text-black"
                  />
                  <br/><br/>
                  <button
                    className="px-20 py-8 text-base rounded-lg bg-[#2e8b57] hover:scale-110 duration-200 transition transform ease-out cursor-pointer hover:z-20"
                    onClick={() => setSignIn(true)}
                  >
                    COMMENCER
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
