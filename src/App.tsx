import "./App.css";
import SignUp from "./components/SignUp";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <>
      <div className="grid justify-center items-center mx-auto w-full h-[100vh] max-w-[1200px]">
        <div>
          <h1 className="text-white text-4xl">thanks for making it in</h1>
          <p className="text-white">
            please create an account to get access...
          </p>
          <div className="mt-5 bg-red py-6 px-6">
            <SignUp></SignUp>
            <UserProfile></UserProfile>
          </div>
        </div>
      </div>
      <div className="bg-img fixed z-[-1] top-0 left-0 w-full h-[100vh]"></div>
    </>
  );
}

export default App;
