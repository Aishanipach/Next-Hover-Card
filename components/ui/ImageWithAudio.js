import { useRef } from "react";
import Image from "next/image";

const ImageWithAudio = ({ imgName, imgAlt, audioSrc, onClick }) => {
  const audioRef = useRef(null);

  const handleMouseOver = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 3;
      audioRef.current.play();
    }
  };

  const handleMouseOut = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 3;
    }
  };

  return (
    <div
      className="cursor-pointer"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{ position: "relative" }}
      onClick={onClick}
    >
      <Image
        src={imgName}
        alt={imgAlt}
        width={200} // Set appropriate width
        height={200} // Set appropriate height
      />
      <audio ref={audioRef} src={audioSrc} />
    </div>
  );
};

export default ImageWithAudio;
