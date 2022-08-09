const RepositoryItem = (props) => {
  const { name, fork, updated_at, description, html_url, language } = props;

  return (
    <div>
      <a href={html_url}>{name} </a>
      <ul>
        <li> {description} </li>
        <li> {fork} </li>
        <li> {updated_at} </li>
        <li> {props.private ? "private" : "public"} </li>
        <li> {language}</li>
      </ul>
    </div>
  );
};

export default RepositoryItem;
