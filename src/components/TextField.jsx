import { useMemo } from "react";
import PropTypes from "prop-types";
import "./TextField.css";

const TextField = ({
  label,
  icon,
  value,
  onChange,
  textFieldWidth,
  textFieldZIndex,
  rectangle1Display,
}) => {
  const textFieldStyle = useMemo(() => {
    return {
      width: textFieldWidth,
      zIndex: textFieldZIndex,
    };
  }, [textFieldWidth, textFieldZIndex]);

  const passwordHideSeeStyle = useMemo(() => {
    return {
      display: rectangle1Display,
    };
  }, [rectangle1Display]);

  

  return (
    <div className="text-field2" style={textFieldStyle}>
      <div className="label-group">
        <div className="label1">{label}</div>
        <div className="password-hide-see1" style={passwordHideSeeStyle}>
          <img className="icon1" alt="" src={icon} />
          <div className="hide1">Hide</div>
        </div>
      </div>
        
          <input
            type="text"
            value={value}
            onChange={onChange}
            className="div7"
          />
        
      
      <div className="error-message1">Error message</div>
    </div>
  );
};

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  icons: PropTypes.string.isRequired,
  textFieldWidth: PropTypes.string,
  textFieldZIndex: PropTypes.number,
  rectangle1Display: PropTypes.string,
  propDisplay: PropTypes.string,
};

export default TextField;
