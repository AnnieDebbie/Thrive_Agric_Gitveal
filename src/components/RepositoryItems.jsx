import { useContext } from "react";
import repositoryContext from "../store/RepositoryContext";
import Spinner from "./Spinner";
import RepositoryItem from "./RepositoryItem";

const RepositoryItems = () => {
  const { repositories, isLoading } = useContext(repositoryContext);
  repositories.sort((a, b) => b.updated_at.localeCompare(a.updated_at));

  return isLoading ? (
    <Spinner />
  ) : (
    repositories.map((props, key) => <RepositoryItem key={key} {...props} />)
  );
};

export default RepositoryItems;