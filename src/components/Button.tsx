import { ReactNode } from "react";

interface ButtonProps {
  contents: string | ReactNode;
  classes?: string;
  onClick: () => void;
}

export const Button = ({ contents, classes, onClick }: ButtonProps) => {
  return (
    <button className={classes ? classes : ""} onClick={onClick}>
      {contents}
    </button>
  );
};
