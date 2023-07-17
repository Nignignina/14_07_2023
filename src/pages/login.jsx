import { useContext } from "react";
import { AuthContext } from "./_app";
export default function login() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      ciao {user.name}
      <label htmlFor="/"> Registrati</label>;
    </div>
  );
}
