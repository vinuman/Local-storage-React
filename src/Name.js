import { useState, useEffect } from "react";
import Uppercase from "./Uppercase";

const Name = () => {
  let [name, setName] = useState("");
  const [renderUpperCase, setRenderUpperCase] = useState(false);

  /*  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);
 */
  const addToLocal = () => {
    localStorage.setItem("name", JSON.stringify(name));
    setRenderUpperCase(false);
    setTimeout(() => setRenderUpperCase(true), 2000);
  };

  return (
    <>
      <div>
        <input onChange={(e) => setName(e.target.value)} type="text"></input>
        <button onClick={addToLocal}>Add to local</button>
        {renderUpperCase && <Uppercase />}
      </div>
    </>
  );
};

export default Name;
