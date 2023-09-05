import React, { useEffect, useState } from "react";
import { useRef } from "react";
import defaultImg from "../../assets/images.png";
import { AiOutlineUser } from "react-icons/ai";
const Avatar = (props) => {
  const inputRef = useRef(null);

  const handleImageClick = () => {
    inputRef.current.click();
  };
  const [image, setImage] = useState();
  useEffect(() => {
    return () => {
      image && URL.revokeObjectURL(image.preview);
    };
  }, [image]);
  const handlePreviewImage = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setImage(file);
    console.log(URL.createObjectURL(file));
  };
  return (
    <div className={props.styles} onClick={handleImageClick}>
      {image ? (
        <img src={image.preview} alt="" className="rounded w-full h-full" />
      ) : (
        <img src={defaultImg} alt="" className="rounded w-full h-full " />
      )}
      <input
        type="file"
        ref={inputRef}
        onChange={handlePreviewImage}
        name={props.name}
        className="hidden"
        id="image_product"
      />
    </div>
  );
};

export default Avatar;