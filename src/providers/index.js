import { GroupProvider } from "./Groups"
import { HabitsProvider } from "./Habits"
import { UserContextProvider } from "./User"

const Providers = ({ children }) => {
	return (
		<UserContextProvider>
			<GroupProvider>
				<HabitsProvider>{children}</HabitsProvider>
			</GroupProvider>
		</UserContextProvider>
	)
}

export default Providers
