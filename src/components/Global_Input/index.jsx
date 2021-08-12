import { StyledInput } from "./styles";

const Global_Input = ({ icon: Icon, ...rest }) => {
  return (
    <StyledInput>
      {Icon && <Icon />}
      <input {...rest} />
    </StyledInput>
  );
};

export default Global_Input;
