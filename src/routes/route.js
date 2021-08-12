import { Redirect, Route as ReactDOMRoute } from "react-router";

const Route = ({isPrivate = false, component: Component, ...rest}) => {

    // token vem da context API



    return (

        <ReactDOMRoute
            {...rest}
            render={() => {
                return isPrivate ? <Component /> : <Redirect to={isPrivate ? '/login' : '/dashboard'} />
            }} />
    )
}

export default Route