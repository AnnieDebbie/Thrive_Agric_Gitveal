import { createContext, useState } from "react";

const repositoryContext = createContext();

export const RepositoryProvider = (props) => {
  const [query, setQuery] = useState("");
  const [repositories, setRepositories] = useState([]);
  const [organizations, setOrganizations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  return (
    <repositoryContext.Provider
      value={{ query, setQuery, repositories, setRepositories, isLoading, setIsLoading, organizations, setOrganizations }}
    >
      {props.children}
    </repositoryContext.Provider>
  );
};
export default repositoryContext;
