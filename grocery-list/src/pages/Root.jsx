import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <>
            {/* <h1>Test Root Layout</h1> */}
            <Outlet />
        </>
    );
}

export default Root;