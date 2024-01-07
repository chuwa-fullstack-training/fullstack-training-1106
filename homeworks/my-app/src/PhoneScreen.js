import "./PhoneScreen.css"; // Import a CSS file for styling if needed

const PhoneScreen = () => {
  const handleClick = (number) => {
    console.log(number);
  };

  return (
    <div className="phone-screen">
      <div className="btn-container">
        <div className="bar-container">Status bar</div>

        <div className="d-flex justify-content-around mt-4">
          {[1, 2, 3, 4].map((number) => (
            <button
              key={number}
              className="btn btn-light btn-custom"
              onClick={() => handleClick(number)}
            >
             {number}
            </button>
          ))}
        </div>
        <div className="d-flex justify-content-around mt-4">
          {[5, 6, 7, 8].map((number) => (
            <button
              key={number}
              className="btn btn-light btn-custom"
              onClick={() => handleClick(number)}
            >
              {number}
            </button>
          ))}
        </div>

        <div className="d-flex justify-content-around mt-4">
          {[9, 10, 11, 12].map((number) => (
            <button
              key={number}
              className="btn btn-light btn-custom"
              onClick={() => handleClick(number)}
            >
              {number}
            </button>
          ))}
        </div>
        <div className="d-flex justify-content-around mt-4">
          {[13, 14, 15, 16].map((number) => (
            <button
              key={number}
              className="btn btn-light btn-custom"
              onClick={() => handleClick(number)}
            >
              {number}
            </button>
          ))}
        </div>
        <div className="d-flex justify-content-around mt-5 mb-5">
          {[17, 18, 19, 20].map((number) => (
            <button
              key={number}
              className="btn btn-light btn-custom"
              onClick={() => handleClick(number)}
            >
              {number}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhoneScreen;
