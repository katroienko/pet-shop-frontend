import { ClipLoader } from "react-spinners";

const Loader = ({loading}) => {
  return (
    <ClipLoader
      color={"#5573AB"}
      loading={loading}
      cssOverride={{
        borderWidth: "4px",
        display: "block",
        margin: "0 auto"
      }}
      size={50}
      speedMultiplier={0.7}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Loader;
