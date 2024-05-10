import dynamic from "next/dynamic";
import App from "./App";

const Home=() =>{
  return (
    <main>
      <div>
        <App />
      </div>
    </main>
  );
}

export default dynamic(() => Promise.resolve(Home), {
  ssr: false,
});
