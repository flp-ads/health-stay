import { StyledInput } from "./input.style";

const Input = ({ icon: Icon, register, name, error, ...rest }) => {
  return (
    <StyledInput isDenied={!!error}>
      <div>
        {Icon && <Icon />}
        <input {...register(name)} {...rest} />
      </div>
      {!!error && <span>{error}</span>}
    </StyledInput>
  );
};

export default Input;
