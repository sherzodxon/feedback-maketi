import { createContext, useContext, useEffect, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [ posts, setPosts ] = useState(null);
  const [ isFetched, setFetched ] = useState(false);

  useEffect(() => {
    if (!isFetched) {
      setFetched(true);
      fetch('/data.json')
        .then(res => res.json())
        .then(data => {
          setPosts({
            ...data,
            productRequests: data.productRequests.map(product => ({
              ...product,
              isLiked: false,
            }))
          });
        });
    }
  }, [isFetched]);

  if (!posts) {
    return null;
  }

  return (
    <DataContext.Provider value={{posts, setPosts}}>
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => {
  return useContext(DataContext);
}

export default DataProvider;