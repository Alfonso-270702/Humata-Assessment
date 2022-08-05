import "./Button.css";

const Button = ({ className, value, onClick, disabled }) => {
  return (
    <button
      className={className}
      onClick={onClick}
      disabled={value === "ON/OFF" ? false : disabled}
    >
      {value}
    </button>
  );
};

export default Button;
