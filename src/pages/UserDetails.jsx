import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUsersData } from "../redux/features/user/usersSlice";
import Loader from "../components/Loader";
import Container from "../components/Container";
import { motion } from "framer-motion";
import 'react-lazy-load-image-component/src/effects/blur.css';
import useScroll from "../hook/useScroll";
import UserDetailsLeftSection from "../components/UserDetailsLeftSection";
import UserDetailsRightSection from "../components/UserDetailsRightSection";

const UserDetails = () => {
    // stop default scroll behavior on dynamic route
    useScroll(location.pathname);

    const dispatch = useDispatch();
    const { data: users, loading } = useSelector((state) => state.usersSlice);

    useEffect(() => {
        dispatch(fetchUsersData());
    }, [dispatch]);

    const { id } = useParams();
    const user = users.find((currentUser) => currentUser.id === parseInt(id));

    // Convert the input date to a JavaScript Date object
    const date = new Date(user?.birth_of_date);

    // Define an array of month names
    const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr',
        'May', 'Jun', 'Jul', 'Aug',
        'Sep', 'Oct', 'Nov', 'Dec'
    ];

    // Extract the day, month, and year from the Date object
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    // Create the formatted date string
    const formattedBithDay = `${day} ${monthNames[monthIndex]} ${year}`;

    if (loading || !user || !users) {
        return <Loader />
    }

    return (
        <section className="pt-32 pb-16 scroll-mt-32 scroll-mb-16">
            <Container className="grid lg:grid-cols-3 gap-8">

                {/* left section */}
                <div className="h-auto">
                    <UserDetailsLeftSection {...user} />
                </div>

                {/* right section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="lg:col-span-2">
                    <UserDetailsRightSection {...user} formattedBithDay={formattedBithDay} />
                </motion.div>
                
            </Container>
        </section>
    );
};

export default UserDetails;