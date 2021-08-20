import { motion } from "framer-motion"
import styled from "styled-components"
import card_light from "../../assets/light_card.svg"
export const CardActivitiesContainer = styled(motion.div)`
	background-color: var(--light-vanilla);
	height: 125px;
	border-radius: 1rem;
	max-width: 450px;
	min-width: 20vw;
	width: 100%;
	display: flex;
	overflow: hidden;
	border: 1px solid var(--vanilla);
	cursor: pointer;
	@media only screen and (min-width: 768px) {
		min-width: 450px;
		width: 450px;
		height: 150px;
		flex: 100%;
	}
	@media only screen and (min-width: 950px) {
		min-width: 450px;
		width: 450px;
		height: 150px;
		flex: calc(33% - 2rem);
	}
`
export const Background = styled.div`
	background-color: var(--light-green);
	background-image: url(${card_light});
	background-size: 365%;
	background-position: -35px -30px;
	background-repeat: no-repeat;
	width: 50px;
	@media only screen and (min-width: 768px) {
		width: 100px;
		background-size: 175%;
		background-position-x: -25px;
	}
`
export const CardActivitiesContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	width: 70%;
	padding: 10px;
`
export const CardActivitiesTitleContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	h4 {
		color: var(--dark-green);
		font-size: var(--card-title-size);
	}
	button {
		background: none;
		border: none;
		svg {
			color: var(--red);
		}
	}
`
export const CardActivitiesInfoContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	h4 {
		color: var(--dark-green);
		font-size: var(--card-title-size);
		font-weight: normal;
	}
	p {
		font-size: var(--card-text-size);
		color: var(--medium-gray);
	}
`
