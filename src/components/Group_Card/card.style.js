import { motion } from "framer-motion"
import styled, { css } from "styled-components"
import bg_img from "../../assets/light_card_full.svg"

export const Container = styled(motion.div)`
	background-color: var(--light-vanilla);
	height: 125px;
	border-radius: 1rem;
	max-width: 400px;
	display: flex;
	overflow: hidden;
	margin: 1rem;
	border: 1px solid var(--vanilla);

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
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		flex-direction: column;
		flex: 1;

		div.inf__text_container {
			width: 100%;
			h4 {
				font-size: var(--card-title-size);
				color: var(--dark-green);
			}

			p {
				font-size: var(--card-text-size);
				color: var(--medium-gray);
			}
		}

		div.info__icon_container {
			position: absolute;
			padding: 1rem;
			top: 0;
			right: 0;
			color: ${(props) =>
				props.isSubscribed ? css`var(--red)` : css`var(--medium-gray)`};
		}

		div.info__users {
			position: relative;
			width: min-content;
			/* justify-content: flex-end; */
			height: 25px;
			width: 125px;
		}
	}
`

export const UsersBottom = styled(motion.div)`
	text-transform: uppercase;
	background-color: var(--light-green);
	color: var(--dark-green);
	display: grid;
	place-items: center;
	position: absolute;
	top: 0;
	z-index: ${(props) => (props.Overflow ? 0 : 1)};
	right: calc(${(props) => props.index} * 20px);
	font-size: ${(props) => (props.Overflow ? css`0.65rem` : css`1rem`)};
	width: 25px;
	height: 25px;
	border-radius: 50%;
	box-shadow: 2px 0 2px rgba(0, 0, 0, 0.25);
`
