import styled from "styled-components"
import { motion } from "framer-motion"

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
