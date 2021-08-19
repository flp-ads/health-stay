import { GroupsProvider } from "./Groups"
import { GroupProvider } from "./Group"
import { HabitsProvider } from "./Habits"
import { UserContextProvider } from "./User"

const Providers = ({ children }) => {
	return (
		<UserContextProvider>
			<GroupsProvider>
				<HabitsProvider>
					<GroupProvider>{children}</GroupProvider>
				</HabitsProvider>
			</GroupsProvider>
		</UserContextProvider>
	)
}

export default Providers
