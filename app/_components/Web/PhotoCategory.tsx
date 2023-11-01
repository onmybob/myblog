import { categories } from "_constants";

const PhotoCategory = () => {
  return (
    <div className="mt-10 mb-5 border-b-[1px] px-5">
      <div className="mx-auto max-w-screen-2xl">
        <ul className="flex flex-row gap-12   text-gray-600">
          {categories.map((item, index) => {
            const Icon = item.icon;
            return (
              <li
                className={`flex flex-row gap-2 pb-5 pr-2${
                  index === 1
                    ? " font-bold  text-black border-b-[3px] border-black"
                    : ""
                }`}
                key={index}
              >
                <p className="bg-gray-0  rounded-full text-xs	font-normal flex items-center justify-center">
                  <Icon size={18} />
                </p>
                <a href={`/album/${item.tag}`}>{item.tag}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PhotoCategory;
