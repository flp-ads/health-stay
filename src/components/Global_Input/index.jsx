import { StyledInput } from "./input.style";

const Input = ({ icon: Icon, register, name, ...rest }) => {
  return (
    <StyledInput>
      {Icon && <Icon />}
      <input {...register(name)} {...rest} />
    </StyledInput>
  );
};

export default Input;
