import rnvLogo from "../assets/rnv-logo.svg";

const Logo = () => {
  return (
    <div>
      <img
        src={rnvLogo}
        className="logo"
        alt="Retreats and Venues logo"
        aria-label="Retreats and Venues logo"
      />
    </div>
  );
};

export default Logo;
