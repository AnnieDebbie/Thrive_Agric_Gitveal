import { useContext, useRef } from "react";
import repositoryContext from "../store/RepositoryContext";

function SearchInput() {
  const { query, setQuery, setRepositories, setIsLoading } =
    useContext(repositoryContext);
  function onInputChange(e) {
    setQuery(e.target.value);
  }

  function onFormSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch(`https://api.github.com/users/${query}/repos`)
      .then((res) => res.json())
      .then((resObject) => {
        setRepositories(resObject ?? []);
        setIsLoading(false);
        console.log(resObject);
      });
  }
  return (
    <form onSubmit={onFormSubmit}>
      <input onChange={onInputChange} value={query} type="text" />
      <input type="submit" />
    </form>
  );
}

export default SearchInput;