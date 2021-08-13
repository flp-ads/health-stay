import { StyledButton } from "./button.style";

const Button = ({ isVanilla = false, children, ...rest }) => {
  return (
    <StyledButton isVanilla={isVanilla} type="button" {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
