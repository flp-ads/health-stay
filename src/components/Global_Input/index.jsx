import { ErrorMessage, StyledInput } from "./input.style";

const Input = ({ icon: Icon, register, name, error = "", list, selectPlaceholder = '' , ...rest  }) => {
  return (
    <StyledInput isDenied={!!error}>
      <div>
        {Icon && <Icon />}
        {list ? (
          <select {...rest}>
            <option value="" disabled selected>{selectPlaceholder}</option>
            {list.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
        ) : (
          <input {...register(name)} {...rest} />
        )}
      </div>
      <ErrorMessage>{error}</ErrorMessage>
    </StyledInput>
  );
};

export default Input;
