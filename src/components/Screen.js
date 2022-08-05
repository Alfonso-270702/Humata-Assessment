import "./Screen.css";

const Screen = ({ value }) => {
  return (
    <div className="screen box_number">
      <div className="box">
        <div className="title">Number 1</div>
        <div className="value">{value.num1}</div>
      </div>
      <div className="box">
        <div className="title"> Number 2</div>
        <div className="value">{value.num2}</div>
      </div>
      <div className="box">
        <div className="title">Result</div>
        <div className="value">{value.res}</div>
      </div>
    </div>
  );
};

export default Screen;
