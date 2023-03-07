const Options = (props) => {
  return (
    <div className="options">
      <h1 className="options-header py-2 w-8/12 mx-auto">{props.title}</h1>
      <div className="options-container">
        {props.options.map((option) => {
          return (
            <div
              className="option-item "
              onClick={option.handler}
              key={option.id}
            >
              {option.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Options;
