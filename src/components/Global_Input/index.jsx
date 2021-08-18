import { ErrorMessage, StyledInput } from "./input.style"

const Input = ({
	icon: Icon,
	register,
	name,
	error = "",
	list,
	selectPlaceholder = "",
	...rest
}) => {
	return (
		<StyledInput isDenied={!!error}>
			<div>
				{Icon && <Icon />}
				{list ? (
					<select {...register(name)} {...rest} defaultValue="">
						<option value="" disabled>
							{selectPlaceholder}
						</option>
						{list.map((item, index) => (
							<option key={index} value={item}>
								{item}
							</option>
						))}
					</select>
				) : (
					<input {...register(name)} {...rest} />
				)}
			</div>
			<ErrorMessage>{error}</ErrorMessage>
		</StyledInput>
	)
}

export default Input
