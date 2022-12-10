import errorImg from "./error.gif";

const ErrorMessage = ({ maxWidth, maxHeight }) => {
  return (
    <img
      src={errorImg}
      alt="ERROR"
      style={{
        width: "50%",
        height: "50%",
        maxWidth: maxWidth || "inherit",
        maxHeight: maxHeight || "inherit",
        margin: "0 auto",
        display: "block",
      }}
    />
  );
};

export default ErrorMessage;
