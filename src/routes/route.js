import { Redirect, Route as ReactDOMRoute } from "react-router";
import { useLogin } from "../providers/User";

const Route = ({isPrivate = false, component: Component, ...rest}) => {

    // token vem da context API
    const { accToken } = useLogin();

    // true true => ok
    // true false => login
    // false true  => dashboard
    // false false => ok

    return (

        <ReactDOMRoute
            {...rest}
            render={() => {
                return isPrivate === !!accToken ? <Component /> : <Redirect to={isPrivate ? '/login' : '/dashboard/home'}/>
            }} />
    )
}

export default Route