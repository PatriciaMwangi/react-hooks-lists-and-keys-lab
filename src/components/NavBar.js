import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkElement=links.map((link,index)=>{
    return <a key ={index}href={"#"+link}>{link}</a>
  })

  return <nav>{linkElement}</nav>;
}

export default NavBar;
