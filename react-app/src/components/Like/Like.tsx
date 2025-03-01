import React, { useState } from "react";
import { BiSolidLike, BiLike } from "react-icons/bi";

interface Props {
  onClick: () => void;
}

function Like({ onClick }: Props) {
  const toggle = () => {
    setLiked(!like);
    onClick();
  };
  const [like, setLiked] = useState(true);
  return (
    <div>
      {like ? (
        <BiSolidLike color="blue" size={25} onClick={toggle} />
      ) : (
        <BiLike size={25} onClick={toggle} />
      )}
    </div>
  );
}

export default Like;
