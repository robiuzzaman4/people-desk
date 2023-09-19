import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersData } from "../redux/features/user/usersSlice";
import Loader from "./Loader";
import UserCard from "./UserCard";
import Container from "./Container";

const AllUsers = () => {
    const dispatch = useDispatch();
    const { data: users, loading } = useSelector((state) => state.usersSlice);

    useEffect(() => {
        dispatch(fetchUsersData());
    }, [dispatch]);

    if (loading) {
        return <Loader />
    }

    return (
        <Container className="py-16">
            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 scroll-mt-36" id="allusers">
                {
                    users?.map((user) => (
                        <UserCard key={user.id} {...user} />
                    ))
                }
            </section>
        </Container>
    );
};

export default AllUsers;