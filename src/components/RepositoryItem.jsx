const RepositoryItem = (props) => {
  const { name, fork, updated_at, description, html_url, language } = props;
  
const formatDate = function (date, locale) {
 date = new Date(date)
   function calcDaysPassed(date1, date2) {
        return Math.round((date1 - date2) / (1000 * 60 * 60 * 24));
          }
  const daysPassed = calcDaysPassed(new Date(), date);
  if (daysPassed === 0) return 'Today';
    if (daysPassed === 1) return 'Yesterday';
      if (daysPassed <= 7) return `${daysPassed} days ago`;
            if (daysPassed <=30) return 'This month';
      else {
          return new Intl.DateTimeFormat(locale).format(date);
            }
            };
  return (
      <div className="list-group">
            <div className="list-group-item list-group-item-action" aria-current="true">
                    <div className="d-flex w-100 justify-content-between">
                              <a href={html_url} className="link-dark">
                                          <h5 className="mb-1">{name}</h5>
                                                  </a>
                                                                          <span className="badge bg-success rounded-pill"> {props.private ? "private" : "public"}</span>
          
                  </div>
        <p className="mb-1">{description}</p>
                <div className  ="d-flex w-100 justify-content-between">
                        <small> { formatDate(updated_at, "en-US")}</small>
                                <small> {language}</small>
                                        </div>
                                              </div>

    </div>
      );
      };
export default RepositoryItem;
