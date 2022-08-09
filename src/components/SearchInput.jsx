import { useContext, useRef } from "react";
import repositoryContext from "../store/RepositoryContext";

const SearchInput = () =>{
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
<div className="mt-4 plr-3"> 
    <form onSubmit={onFormSubmit}>
      <input placeholder="Search User...." onChange={onInputChange} value={query} type="text" />
      <input className="btn btn-success" type="submit" />
    </form>
</div>
  );
}

export default SearchInput;
