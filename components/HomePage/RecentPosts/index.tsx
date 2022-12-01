export default () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-3 ">
      {new Array(9).fill("").map((it) => {
        return (
          <div className="lg:h-42 box-border h-24 pb-2 md:h-36">
            <div className="h-full w-full bg-gray-400 p-2  dark:bg-gray-700">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
              minus laborum, vel porro laboriosam natus?
            </div>
          </div>
        );
      })}
    </div>
  );
};
