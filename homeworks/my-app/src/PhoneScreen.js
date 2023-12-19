import "./PhoneScreen.css"; // Import a CSS file for styling if needed

const PhoneScreen = () => {
  return (
    <div className="phone-screen">
      <div className="btn-container">
        <div className="bar-container">Status bar</div>

        <div className="d-flex justify-content-around mt-4">
          <button className="btn btn-light btn-custom">1</button>
          <button className="btn btn-light btn-custom">2</button>
          <button className="btn btn-light btn-custom">3</button>
          <button className="btn btn-light btn-custom">4</button>
        </div>
        <div className="d-flex justify-content-around mt-4">
          <button className="btn btn-light btn-custom">5</button>
          <button className="btn btn-light btn-custom">6</button>
          <button className="btn btn-light btn-custom">7</button>
          <button className="btn btn-light btn-custom">8</button>
        </div>

        <div className="d-flex justify-content-around mt-4">
          <button className="btn btn-light btn-custom">9</button>
          <button className="btn btn-light btn-custom">10</button>
          <button className="btn btn-light btn-custom">11</button>
          <button className="btn btn-light btn-custom">12</button>
        </div>
        <div className="d-flex justify-content-around mt-4">
          <button className="btn btn-light btn-custom">13</button>
          <button className="btn btn-light btn-custom">14</button>
          <button className="btn btn-light btn-custom">15</button>
          <button className="btn btn-light btn-custom">16</button>
        </div>
        <div className="d-flex justify-content-around mt-5 mb-5">
          <button className="btn btn-light btn-custom">17</button>
          <button className="btn btn-light btn-custom">18</button>
          <button className="btn btn-light btn-custom">19</button>
          <button className="btn btn-light btn-custom">20</button>
        </div>
      </div>
    </div>
  );
};

export default PhoneScreen;
