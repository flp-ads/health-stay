import { ErrorMessage, StyledInput } from "./input.style"

const Input = ({ icon: Icon, register, name, error = '', ...rest }) => {
	return (
		<StyledInput isDenied={!!error}>
			<div>
				{Icon && <Icon />}
				<input {...register(name)} {...rest} />
			</div>
			<ErrorMessage>{error}</ErrorMessage>
		</StyledInput>
	)
}

export default Input
