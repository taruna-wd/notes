import React, { useState } from "react";


function Tools() {
  const [disabled, setDisabled] = useState(false);
  const [ischecked, setIsChecked] = useState(true); // for screen 
  return (
    <div className="w-1/2">

      <div className="flex float-end justify-between items-center w-1/3 ">
        <div className="hover:border  bg-transparent p-2 size-8 text-center  ">
          <i className="fa-solid fa-reply"></i>
        </div>
        <div className="hover:border  bg-transparent p-2 size-8">
          <i className="fa-solid fa-share"></i>
        </div>
        <div className="hover:border  bg-transparent p-2 size-8" onClick={()=> setIsChecked(!ischecked)} >
          {ischecked ? (
                        <i className="fa-solid fa-expand"></i>

          ) : (
            <i className="fa-solid fa-compress"></i>

          )  }
        </div>
        <div className="hover:border  bg-transparent p-2 size-8">
          {" "}
          <i className="fa-solid fa-ellipsis-vertical"></i>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Tools;
