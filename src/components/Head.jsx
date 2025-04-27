import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResult } from "../utils/searchSlice";

const Head = () => {
  const [searchQuarry, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    // Debouncing the search query
    // make a api call after every key press
    // if diff. between two key press is less than 200ms
    // then cancel the api call
    const timer = setTimeout(() => {
      if (searchCache[searchQuarry]) {
        setSuggestions(searchCache[searchQuarry]);
      } else {
        getSuggestions();
      }
    }, 200);
    /**
     * if the search query is already present in the cache then get data from the cache
     * else make an api call
     *    searchCache[searchQuarry]
     *      searchCache is an object where key is the search query and we pass the "searchQuery" to find out data
     *     searchCache[searchQuarry] is an array of suggestions
     *  {
     *      "hell": ["hello", "hello world", "hello there"]
     *  }
     */
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuarry]);

  const getSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuarry);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResult({ [searchQuarry]: json[1] }));
  };

  /**
   * dispatch(cacheResult({ [searchQuarry]: json[1] }));
   *  {
   *    [searchQuarry]: json[1]
   *  }
   *   Example of this format:
   *       {
   *        "hello": ["hello", "hello world", "hello there"] // hello is the search query
   *       }
   *    */

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <header className="grid grid-flow-col p-2 shadow-sm ">
      <section className="flex items-center gap-5 col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-10 cursor-pointer"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.Y2aw9V2DSejGNJGZm4-zOAHaHa%3Fpid%3DApi&f=1&ipt=128f85145d67c3444d81d86a8f7e62f4afb57bb5f690015132326fd956efcefc"
          alt="menu"
        />
        <img
          className="h-13"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2020%2F04%2FYouTube-Logo.png&f=1&nofb=1&ipt=3f6cd22e19e150688b8afec064917ed43fa46904357f4c99fd92d048ec9da54e"
          alt="logo"
        />
      </section>
      <section className="col-span-10 flex justify-center flex-col relative">
        <div className="flex justify-center">
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setShowSuggestions(false);
              }
            }}
            value={searchQuarry}
            type="text"
            className="w-1/2 border p-2 px-4 border-gray-600 rounded-l-full"
            placeholder="Search"
          />
          <button className="border border-gray-400 p-2 px-5 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestions && searchQuarry.length > 0 && (
          <div className="flex p-5 rounded absolute top-14 left-64  bg-white w-1/2  ">
            <ul className="w-1/2 flex flex-col gap-2">
              {suggestions.map((suggestion) => {
                return (
                  <li key={suggestion} className="hover:bg-gray-100">
                    🔍 {suggestion}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </section>
      <section className="col-span-1 flex items-center justify-end">
        <img
          className="h-6"
          src="https://static.vecteezy.com/system/resources/previews/001/505/138/non_2x/notification-bell-icon-free-vector.jpg"
          alt="notification"
        />
        <img
          className="h-8 mx-6"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficon-library.com%2Fimages%2Fgeneric-user-icon%2Fgeneric-user-icon-13.jpg&f=1&nofb=1&ipt=bdc20ebaf2eb9320caf4410d3a0cfc6cd418cc5ef12eccebede935aefa4a84ce"
          alt="user"
        />
      </section>
    </header>
  );
};

export default Head;
