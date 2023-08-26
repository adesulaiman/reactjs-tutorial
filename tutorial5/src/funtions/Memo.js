import { memo } from "react";

const Memo = ({ variable }) => {
    console.log("child render");
    return (
      <>
        <h2>My Todos</h2>
        {variable.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
      </>
    );
  };
  
  export default memo(Memo);