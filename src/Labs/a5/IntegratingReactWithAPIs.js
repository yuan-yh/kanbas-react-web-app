import axios from "axios";
import React, { useEffect, useState } from "react";
function IntegratingReactWithAPIs() {
  const [welcome, setWelcome] = useState("");
  const fetchWelcome = async () => {
    const response = await axios.get("http://localhost:4000/a5/welcome");
    setWelcome(response.data);
  };
  useEffect(() => {
    fetchWelcome();
  }, []);
  return (
    <div>
      <h1>Integrating React with APIs</h1>
      <h2>Fetching Welcome</h2>
      <h3>{welcome}</h3>
    </div>
  );
}
export default IntegratingReactWithAPIs;