import ThreeDots from "./animated/ThreeDots";

export function BentoGrid() {
  return (
    <div>
      <div className="grid grid-cols-12 gap-4">
        {/* First Row */}

        <div className="col-span-3 h-60">
          <div className="grid grid-rows-1 gap-1 ">
            <div className="col-span-2 h-20 bento-comp justify-center">
              <ThreeDots />
            </div>
            <div className="col-span-2 bg-blue-400 h-40 bento-comp">
              kid is not my son7
            </div>
          </div>
        </div>
        <div className="col-span-3 bg-blue-400 h-60 bento-comp">
          Billie jean 1
        </div>
        <div className="col-span-6 bg-green-400 h-60 bento-comp">
          She is not my lover 2 (1/4 width)
        </div>

        {/* Second Row */}
        <div className="col-span-2 bg-red-400 h-60 bento-comp">
          She is just a girl 3 (1/6 width)
        </div>
        <div className="col-span-5 bg-yellow-400 h-60 bento-comp">
          who claims i am the one 4 (5/6 width)
        </div>
        <div className="col-span-5 bg-yellow-400 h-60 bento-comp">
          who claims i am the one 4 (5/6 width)
        </div>
      </div>
    </div>
  );
}
