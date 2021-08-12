import { motion } from "framer-motion"
import styled from "styled-components"
import bg_img from "../../assets/light_card_full.svg"

export const Container = styled(motion.div)`
	background-color: red;
	height: 125px;
	border-radius: 1rem;
	max-width: 400px;
	display: flex;
	overflow: hidden;
	margin: 1rem;
	border: 1px solid red;

	div.groupCard__image_container {
		background-color: var(--light-green);
		background-image: url(${bg_img});
		background-size: 175%;
		background-position: -25px -30px;
		background-repeat: no-repeat;
		width: 100px;
	}

	div.groupCard__info_container {
		padding: 1rem;

		h4 {
			font-size: 1.1rem;
		}

		p {
			font-size: 0.8rem;
		}
	}
`

export const UsersBottom = styled(motion.div)``
