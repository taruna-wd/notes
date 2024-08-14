import React, { useState } from "react";


function Tools() {
  const [disabled, setDisabled] = useState(false);
  const [ischecked, setIsChecked] = useState(false);
  return (
    <div className="w-1/2">

      <div className="flex float-end justify-between w-full ">
        <div className="hover:border  bg-transparent p-2  ">
          <i className="fa-solid fa-reply"></i>
        </div>
        <div>
          <i className="fa-solid fa-share"></i>
        </div>
        <div >
          {" "}
          {ischecked ? (
            <i className="fa-solid fa-compress"></i>
          ) : (
            <i className="fa-solid fa-expand"></i>
          )}{" "}
        </div>
        <div>
          {" "}
          <i className="fa-solid fa-ellipsis-vertical"></i>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Tools;
