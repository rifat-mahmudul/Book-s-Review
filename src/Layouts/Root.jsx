import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";

function Root() {

  return (
    <>
      <Nav></Nav>
      <Outlet></Outlet>
    </>
  )
}

export default Root;
