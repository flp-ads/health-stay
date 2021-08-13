import { StyledInput } from "./styles";

const Input = ({ icon: Icon, ...rest }) => {
  return (
    <StyledInput>
      {Icon && <Icon />}
      <input {...rest} />
    </StyledInput>
  );
};

export default Input;
