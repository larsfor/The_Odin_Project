// import { Outlet } from "react-router-dom";
import DefaultProfile from "./DefaultPage";
import Spinach from "./Spinach";
import Popeye from "./Popeye";

export default function ShoppingPage() {
    return (
      <>
      <div>
        <h1>Hello from shopping page!</h1>
        <p>So, how are you?</p>
        <hr />
        <h2>The shopping page visited is here:</h2>
        {name === "popeye" ? (
        <Popeye />
      ) : name === "spinach" ? (
        <Spinach />
      ) : (
        <DefaultProfile />
      )}
      </div>
      </>
    );
  }