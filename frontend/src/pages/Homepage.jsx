import React from "react";
import LoginComp from "../components/Auth/LoginComp";
import SignupComp from "../components/Auth/SignupComp";


const Homepage = () => {
 const [switchComp, setSwitchComp] = React.useState(false)

 const handleChangeComp = () =>{
  setSwitchComp(s => !s);
 }
  return (
    <div className="flex justify-center items-center min-h-screen max-h-screen">
     { switchComp? <SignupComp handleChangeToLogin={handleChangeComp}/>:<LoginComp handleChangeToSignup={handleChangeComp}/>}
    </div>
  );
};

export default Homepage;
