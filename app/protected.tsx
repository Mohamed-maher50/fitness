import React from "react";
import { useSession } from "next-auth/react";
const Protected = () => {
  const session = useSession();
  console.log(session);
  return <div>protected</div>;
};

export default Protected;
