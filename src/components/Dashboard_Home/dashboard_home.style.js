import { motion } from "framer-motion"
import styled from "styled-components"
import { GlobalContainer } from "../../styles/global"

export const Container = styled(motion.div)`
	padding: 1rem;
	position: relative;
	margin-bottom: 66px;

	@media only screen and (min-width: 768px) {
		margin: 0 3px 0px 200px;
	}
`

export const Username = styled(motion.p)`
	font-size: 1.5rem;
	color: var(--dark-green);
	margin-bottom: 1.5rem;

	span {
		font-weight: bold;
	}

	p {
		color: var(--medium-gray);
		font-size: 1rem;
		margin-top: 0.25rem;
	}

	@media only screen and (min-width: 768px) {
		margin-top: 2rem;
		font-size: 2.25rem;

		p {
			font-size: 1.25rem;
		}
	}
`

export const Cards = styled(motion.div)`
	display: flex;
	gap: 1rem;
	flex-direction: column;

	@media only screen and (min-width: 768px) {
		flex-direction: row;
		flex-wrap: wrap;
	}
`

export const Overview = styled(GlobalContainer)`
	flex: 100%;

	@media only screen and (min-width: 768px) {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: center;
		padding: 2rem;
	}
`

export const Header = styled.h2`
	font-weight: normal;
	color: var(--dark-green);
	margin-bottom: 1rem;
	font-size: 1.5rem;
	height: min-content;

	span {
		font-weight: bold;
	}

	@media only screen and (min-width: 768px) {
		flex: 100%;
		margin: 0;
	}
`

export const OverviewItem = styled(motion.p)`
	text-align: center;
	color: var(--medium-gray);
	font-size: 1.2rem;

	p {
		font-weight: bold;
		color: var(--light-green);
	}

	@media only screen and (min-width: 768px) {
		margin: 0 5rem;
	}
`
export const MyGroups = styled(Overview)`
	padding: 1rem;

	@media only screen and (min-width: 768px) {
		flex: calc(45% - 0.5rem);
		padding: 2rem;
	}
`

export const CardsList = styled(motion.div)`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	@media only screen and (min-width: 768px) {
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
	}
`

export const All = styled(motion.p)`
	cursor: pointer;
	margin: 1rem 1rem 0 0;
	text-align: right;
	font-size: 0.8rem;
	color: var(--light-green);

	span {
		font-weight: bold;
	}

	@media only screen and (min-width: 768px) {
		flex: 100%;
	}
`

export const MyHabits = styled(MyGroups)``
