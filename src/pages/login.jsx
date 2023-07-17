import { useContext } from "react";
import { AuthContext } from ".";

export default function login() {
  const userData = useContext(AuthContext);
  const Username = userData.user.name;

  //   const inputValue =
  return (
    <div>
      ciao {Username}
      <label htmlFor="/"> Registrati</label>;
    </div>
  );
}
