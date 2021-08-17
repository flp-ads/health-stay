import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import GlobalStyle from "./styles/global"
import Routes from "./routes"

function App() {
	return (
		<div>
			<GlobalStyle />
			<ToastContainer />
			<Routes />
		</div>
	)
}

export default App
