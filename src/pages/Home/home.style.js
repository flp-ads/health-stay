import styled from "styled-components"

export const Container = styled.div`
	background-color: var(--vanilla);
	width: 100%;
	min-height: calc(100vh - calc(45px + 1rem));
	display: flex;
	flex-direction: column;

	@media (min-width: 768px) {
		min-height: calc(100vh - calc(45px + 2rem));
		flex-direction: row;
		position: fixed;
		top: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
`

export const HomeTitleContainer = styled.div`
	background-color: var(--vanilla);
	height: 60vh;
	display: flex;
	justify-content: center;

	div {
		display: flex;
		flex-direction: column;
		align-items: left;
		margin-top: 100px;

		p {
			font-size: 1.7rem;
			color: var(--dark-green);
		}

		strong {
			font-size: 2rem;
			color: var(--light-green);
		}
	}

	@media (min-width: 768px) {
		min-height: calc(100vh - calc(45px + 2rem));
		width: 50%;
		height: 105vh;

		div {
			margin-top: 160px;
			p {
				font-size: 2.5rem;
			}
			strong {
				font-size: 3.7rem;
			}
		}
	}
`

export const HomeButtonContainer = styled.div`
	background-color: var(--white);
	height: 60vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	div {
		margin-top: 1%;
	}

	div.container {
		margin-top: 100px;

		button {
			margin: 0 auto;
		}
	}

	fieldset {
		margin-top: 1%;
		border-top: 1px solid var(--light-green);
		border-left: none;
		border-right: none;
		border-bottom: none;
		display: block;
		text-align: center;
		height: 45px;
		width: 270px;

		@media (min-width: 768px) {
			height: 63px;
			width: 324px;
			margin-top: 5%;
		}
	}

	fieldset legend {
		padding: 5px 10px;
		color: var(--light-green);
	}

	@media (min-width: 768px) {
		min-height: calc(100vh - calc(45px + 2rem));
		width: 50%;
		height: 105vh;
	}
`

export const Header = styled.header`
	background-color: var(--light-green);
	position: fixed;
	color: var(--white);
	padding: 0.5rem 1rem;
	width: 100%;

	div.header_container {
		display: flex;
		justify-content: space-around;

		button {
			background-color: transparent;
			margin: 0 2vh;
			border: none;
			color: var(--dark-green);
		}
	}

	div h1 {
		display: flex;
	}

	div h1 img {
		width: 200px;
		height: auto;
	}

	@media (min-width: 768px) {
		padding: 2rem 1rem;
		position: fixed;
		top: 0;
		left: 0;

		div h1 img {
			width: 250px;
		}

		div.header_container {
			display: flex;
			justify-content: space-between;
			margin-right: 70px;
			button {
				background-color: transparent;
				margin: 0 20px;
				border: none;
				color: var(--dark-green);
			}
		}
	}
`

export const BackgroundHeader = styled.div`
	height: 0;
	width: 0;
	display: none;
	img {
		display: none;
	}

	@media (min-width: 768px) {
		position: absolute;
		z-index: 100;
		top: 0;
		right: 0;
		overflow: hidden;
		height: 60vh;
		width: 170px;
		display: block;

		img {
			display: block;
			position: absolute;
			top: -375px;
			right: -375px;
			transform: rotate(-227deg);
			width: 710px;
			height: auto;
		}
	}
`

export const BackgroundImage = styled.div`
	position: absolute;
	width: 99%;
	height: 55vh;
	left: 0;
	top: 27vh;
	overflow: hidden;

	img {
		position: absolute;
		width: 420px;
		height: auto;
		right: 0;
		left: -45px;
		top: 12px;
		transform: rotate(-12.35deg);
	}

	@media (min-width: 768px) {
		overflow: initial;
		width: 50%;
		height: 17vh;
		left: 0;
		top: -35vh;

		img {
			width: 120%;
			left: -6vh;
			top: 75vh;
			transform: rotate(-8.35deg);
		}
	}
`
