import errorImg from "./error.gif";

const ErrorMessage = () => {
  return (
    <img
      src={errorImg}
      alt="ERROR"
      style={{
        width: "50%",
        height: "50%",
        margin: "0 auto",
        display: "block",
      }}
    />
  );
};

export default ErrorMessage;
