import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import Providers from "./providers"
import { AnimatePresence } from "framer-motion"

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Providers>
				<AnimatePresence>
					<App />
				</AnimatePresence>
			</Providers>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
)
