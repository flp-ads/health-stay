import styled from "styled-components"

export const Container = styled.div`
	background-color: var(--light-gray);
	width: 100%;
	min-height: calc(100vh - calc(45px + 1rem));
	margin-top: calc(45px + 1rem);

	div.inner_container {
		width: 100%;
		min-height: calc(100vh - calc(45px + 1rem));
		position: relative;
	}

	@media only screen and (min-width: 768px) {
		min-height: calc(100vh - calc(45px + 2rem));
		margin-top: calc(45px + 2rem);

		div.inner_container {
			min-height: calc(100vh - calc(45px + 2rem));
		}
	}
`

export const Header = styled.header`
	z-index: 150;
	background-color: var(--light-green);
	position: fixed;
	top: 0;
	left: 0;
	padding: 0.5rem 1rem;
	width: 100%;

	div.header_container {
		display: flex;
		justify-content: space-between;
	}

	div h1 {
		display: flex;
	}

	div h1 img {
		width: 200px;
		height: auto;
	}

	@media only screen and (min-width: 768px) {
		padding: 1rem;
	}
`
export const User = styled.div`
	background-color: var(--dark-green);
	border-radius: 50%;
	width: 45px;
	height: 45px;
	color: var(--vanilla);
	display: grid;
	place-items: center;
	font-size: 2rem;
	text-transform: uppercase;
`
export const BackgroundImage = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	overflow: hidden;
	height: 50vh;
	width: 90vw;

	img {
		position: absolute;
		top: -115px;
		right: -295px;
		transform: rotate(-180deg);
		width: 515px;
		height: auto;
	}

	@media only screen and (min-width: 768px) {
		img {
			top: -182px;
			right: -176px;
			transform: rotate(-168deg);
			width: 570px;
		}
	}
`
