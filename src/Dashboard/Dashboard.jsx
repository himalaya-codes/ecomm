
import { Route, Routes, useNavigate } from 'react-router-dom'

const Dashboard = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Dashboard_page />} />
                <Route path="/usertwo" element={<User_two />} />
                <Route path="/userthree" element={<User_three />} />
                <Route path="/userfour" element={<User_four />} />
            </Routes>
        </>
    )
}

const Dashboard_page = () => {
    const navigate = useNavigate();

    return (
        <>
            <p>click on buttons to go on pages</p>
            <button onClick={() => navigate("usertwo")}>user two</button>
            <button onClick={() => navigate("userthree")}>user three</button>
            <button onClick={() => navigate("userfour")}>user four</button>
            <button onClick={() => navigate("/dashboard")}>Dashboard</button>
        </>
    )
}

const User_two = () => {
    return (
        <>
            <p>uuer Two Component</p>
        </>
    )
}

const User_three = () => {
    return (
        <>
            <p>uuer Three Component</p>
        </>
    )
}

const User_four = () => {
    const navigate = useNavigate();
    return (
        <>
            <p>uuer four Component</p>
            <button onClick={() => navigate("/dashboard")}>Dashboard</button>
        </>
    )
}

export default Dashboard;
