import { StyledInput } from "./input.style";

const Input = ({ icon: Icon, ...rest }) => {
  return (
    <StyledInput>
      {Icon && <Icon />}
      <input {...rest} />
    </StyledInput>
  );
};

export default Input;
