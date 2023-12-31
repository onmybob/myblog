"use client";

import PageProgress from "@/components/PageProgress";
import { headSearchStore, useStore2 } from "_store/headSearch";
import { useRouter } from "next/navigation";

export default function WebLayout({ children }: { children: React.ReactNode }) {
  const { key, setKey } = headSearchStore();
  const searchKey = () => {
    const route = useRouter();
    route.push(`?key=${key}`);
  };
  return (
    <>
      <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl	">
            <div>
              <a href="#" className="flex items-center mr-10">
                {/* <Image
                  src="/logo.svg"
                  alt="me"
                  width="100"
                  height="100"
                  priority={true}
                /> */}
              </a>
            </div>
            <div className="flex items-center">
              <ul className="flex  flex-row space-x-6 text-lg text-[#121212]">
                <li>
                  <a href="#">Photo</a>
                </li>
                <li className="text-gray-400">/</li>
                <li>
                  <a href="#">About</a>
                </li>
                <li className="text-gray-400">/</li>
                <li>
                  <a href="#">Event</a>
                </li>
                <li className="text-gray-400">/</li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>

            <div>
              <form>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="search"
                    value={key}
                    onChange={(e) => setKey(e.target.value)}
                    className="border-none   block w-full p-2 pl-10 focus:outline-none  text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                    placeholder="Search"
                  />
                  <button
                    type="button"
                    onClick={searchKey}
                    className="absolute top-0 right-0 p-2.5 h-full  font-medium text-white bg-gray-600 rounded-r-lg border border-gray-600 hover:bg-gray-600   focus:outline-none "
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </nav>
      </header>
      <PageProgress />
      {children}
      <footer>
        <div className=" flex text-center py-14 justify-center text-gray-600 border-t-[1px] mt-10">
          Designed & Made By Bob Wang {key}
        </div>
      </footer>
    </>
  );
}
