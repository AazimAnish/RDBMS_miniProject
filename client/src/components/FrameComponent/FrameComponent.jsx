/* eslint-disable react/prop-types */
import { useMemo } from "react";
import "./FrameComponent.css";
const FrameComponent = ({
  socialMediaLogo,
  propAlignItems,
  propJustifyContent,
  propWidth,
  propCursor,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      alignItems: propAlignItems,
      justifyContent: propJustifyContent,
    };
  }, [propAlignItems, propJustifyContent]);

  const socialMediaSignuploginStyle = useMemo(() => {
    return {
      width: propWidth,
      cursor: propCursor,
    };
  }, [propWidth, propCursor]);

  return (
    <div className="social-media-signuplogin-wrapper" style={frameDivStyle}>
      <div
        className="social-media-signuplogin"
        style={socialMediaSignuploginStyle}
      >
        <div className="social-media-logo-parent">
          <img className="social-media-logo" alt="" src={socialMediaLogo} />
          <div className="continue-with-google">Continue with Google</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
