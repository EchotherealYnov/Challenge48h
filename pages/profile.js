import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { login, logout, selectUser } from "../features/userSlice";
import { useRouter } from "next/router";
import { useEffect } from "react";

const profile = () => {
  const user = useSelector(selectUser);
  const router = useRouter();

  useEffect(() => {
    
  }, []);

  return (
    <div className="h-screen bg-black text-white">
      <Head>
        <title>Meet 29 -Votre Profile</title>
        <link
          rel="icon"
          href="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
        />
      </Head>
      <Header /> 
      {user ? (
        <div className="flex flex-col w-1/2 mx-auto pt-[8%] max-w-3xl">
          <h1 className="text-6xl font-normal border-b border-[#282c2d] mb-5">
            Editer le Profil
          </h1>
          <div className="flex">
            <img
              src="https://th.bing.com/th/id/OIP.Dc_CS8r1PeYQs5rDkMTXOQAAAA?w=186&h=186&c=7&r=0&o=5&dpr=1.25&pid=1.7"
              alt=""
              className="h-[100px]"
            />
            <div className="ml-6 flex-1">
              <h2 className="bg-gray-600 p-4 text-base pl-5">{user.email}</h2>
              <div>
                <button
                  onClick={() => loggedIn=false}
                  className="px-3 py-4 text-base w-full mt-[5%] border-none cursor-pointer bg-[#282c2d] hover:scale-110 duration-200 transition transform ease-out cursor-pointer hover:z-20"
                >
                  Se déconnecter
                </button>
              </div>
            </div>
          </div>
        </div>
      )
      
      : (
        <div className="flex flex-col w-1/2 mx-auto pt-[8%] max-w-3xl">
          <h1 className="text-3xl font-normal border-b border-[#282c2d] mb-5">
            Vous êtes connecté!
          </h1>
          <button
            onClick={() => router.push("/")}
            className="px-3 py-4 text-base w-full mt-[5%] border-none cursor-pointer bg-[#2e8b57] hover:scale-110 duration-200 transition transform ease-out cursor-pointer hover:z-20"
          >
            Se déconnecter
          </button>
          <button
            onClick={() => router.push("/Home")}
            className="px-3 py-4 text-base w-full mt-[5%] border-none cursor-pointer bg-[#2e8b57] hover:scale-110 duration-200 transition transform ease-out cursor-pointer hover:z-20"
          >
            Retourner à l'accueil
          </button>
        </div>
      )}
    </div>
  );
};

export default profile;
