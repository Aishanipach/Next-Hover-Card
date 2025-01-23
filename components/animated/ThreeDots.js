import Image from "next/image";
import "./style.css";
import asterisk from "../../public/asterisk.png";

// Standalone dot typing animation: document snippet @Aishanipach

function ThreeDots() {
  return (
    <div>
      <div className="snippet" data-title="dot-typing">
        <div className="stage flex flex-column">
          {[1, 2, 3].map((index) => {
            return (
              <Image
                key={index}
                src={asterisk}
                className="dot-typing"
                alt={"popping icon"}
              ></Image>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ThreeDots;
