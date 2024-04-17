interface ButtonProps {
  contents: string;
  classes?: string;
  onClick: () => void;
}

const Button = ({ contents, classes, onClick }: ButtonProps) => {
  return (
    <button className={classes ? classes : ""} onClick={onClick}>
      {contents}
    </button>
  );
};

export default Button;
