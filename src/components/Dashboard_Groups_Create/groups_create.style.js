import styled from "styled-components"

export const CardsList = styled.div`
	display: grid;
	place-items: center;
	min-height: 300px;

	form {
		max-width: 600px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	@media only screen and (min-width: 768px) {
		min-height: 450px;
	}
`
