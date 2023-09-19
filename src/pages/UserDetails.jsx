import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUsersData } from "../redux/features/user/usersSlice";
import Loader from "../components/Loader";
import Container from "../components/Container";
import { CalendarClock, CalendarDays, Compass, Droplets, Globe2, GraduationCap, Landmark, Mail, MapPin, Phone, UserCircle } from "lucide-react";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import useScroll from "../hook/useScroll";

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
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="h-auto">
                    <div
                        className="relative w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-8 flex flex-col items-center gap-4 overflow-hidden group">

                        {/* user image */}
                        <div className="w-24 h-24 flex items-center justify-center border-2 border-violet-500 dark:border-sky-500 rounded-full">
                            <LazyLoadImage
                            effect="blur"
                                src={user?.photo_url}
                                alt="user profile picture"
                                className="w-20 h-20 rounded-full object-cover" />
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            {/* user name */}
                            <h2 className="text-2xl font-semibold">
                                {user?.name}
                            </h2>

                            {/* user email */}
                            <span className="text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-2">
                                <div className="w-8 h-8 grid place-items-center rounded-md bg-purple-500/10 dark:bg-sky-500/10 text-purple-500 dark:text-sky-500">
                                    <Mail size={16} />
                                </div>
                                <p>{user?.email}</p>
                            </span>
                        </div>

                        {/* bottom div */}
                        <div className="absolute bottom-0 h-1 w-full bg-violet-500 dark:bg-sky-500 hidden group-hover:block transition-colors"></div>

                    </div>
                </motion.div>

                {/* right section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="lg:col-span-2 relative w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-8 grid lg:grid-cols-2 gap-8 overflow-hidden group">
                    {/* user title */}
                    <span className="text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-2 bg-slate-100 dark:bg-slate-900/50 w-full h-auto rounded-md p-4 relative">

                        <div className="absolute text-xs font-normal -top-2.5 left-1/2 transform -translate-x-1/2 h-auto w-fit mx-auto py-0.5 px-1 rounded bg-purple-500/10 dark:bg-sky-500/10 text-purple-500 dark:text-sky-500">
                            Title
                        </div>

                        <div className="w-8 h-8 grid place-items-center rounded-md bg-purple-500/10 dark:bg-sky-500/10 text-purple-500 dark:text-sky-500">
                            <GraduationCap size={16} />
                        </div>
                        <p>{user?.title}</p>
                    </span>

                    {/* user phone */}
                    <span className="text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-2 bg-slate-100 dark:bg-slate-900/50 w-full rounded-md p-4 relative">

                        <div className="absolute text-xs font-normal -top-2.5 left-1/2 transform -translate-x-1/2 h-auto w-fit mx-auto py-0.5 px-1 rounded bg-purple-500/10 dark:bg-sky-500/10 text-purple-500 dark:text-sky-500">
                            Phone
                        </div>

                        <div className="w-8 h-8 grid place-items-center rounded-md bg-purple-500/10 dark:bg-sky-500/10 text-purple-500 dark:text-sky-500">
                            <Phone size={16} />
                        </div>
                        <p>{user?.phone}</p>
                    </span>

                    {/* user address */}
                    <span className="text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-2 bg-slate-100 dark:bg-slate-900/50 w-full rounded-md p-4 relative">

                        <div className="absolute text-xs font-normal -top-2.5 left-1/2 transform -translate-x-1/2 h-auto w-fit mx-auto py-0.5 px-1 rounded bg-purple-500/10 dark:bg-sky-500/10 text-purple-500 dark:text-sky-500">
                            Address
                        </div>

                        <div className="w-8 h-8 grid place-items-center rounded-md bg-purple-500/10 dark:bg-sky-500/10 text-purple-500 dark:text-sky-500">
                            <MapPin size={16} />
                        </div>
                        <p>{user?.address}</p>
                    </span>

                    {/* user city */}
                    <span className="text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-2 bg-slate-100 dark:bg-slate-900/50 w-full rounded-md p-4 relative">

                        <div className="absolute text-xs font-normal -top-2.5 left-1/2 transform -translate-x-1/2 h-auto w-fit mx-auto py-0.5 px-1 rounded bg-purple-500/10 dark:bg-sky-500/10 text-purple-500 dark:text-sky-500">
                            City
                        </div>

                        <div className="w-8 h-8 grid place-items-center rounded-md bg-purple-500/10 dark:bg-sky-500/10 text-purple-500 dark:text-sky-500">
                            <Landmark size={16} />
                        </div>
                        <p>{user?.city}</p>
                    </span>

                    {/* user country */}
                    <span className="text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-2 bg-slate-100 dark:bg-slate-900/50 w-full rounded-md p-4 relative">

                        <div className="absolute text-xs font-normal -top-2.5 left-1/2 transform -translate-x-1/2 h-auto w-fit mx-auto py-0.5 px-1 rounded bg-purple-500/10 dark:bg-sky-500/10 text-purple-500 dark:text-sky-500">
                            Country
                        </div>

                        <div className="w-8 h-8 grid place-items-center rounded-md bg-purple-500/10 dark:bg-sky-500/10 text-purple-500 dark:text-sky-500">
                            <Globe2 size={16} />
                        </div>
                        <p>{user?.country}</p>
                    </span>

                    {/* user zip code */}
                    <span className="text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-2 bg-slate-100 dark:bg-slate-900/50 w-full rounded-md p-4 relative">

                        <div className="absolute text-xs font-normal -top-2.5 left-1/2 transform -translate-x-1/2 h-auto w-fit mx-auto py-0.5 px-1 rounded bg-purple-500/10 dark:bg-sky-500/10 text-purple-500 dark:text-sky-500">
                            Zip Code
                        </div>

                        <div className="w-8 h-8 grid place-items-center rounded-md bg-purple-500/10 dark:bg-sky-500/10 text-purple-500 dark:text-sky-500">
                            <Compass size={16} />
                        </div>
                        <p>{user?.zip_code}</p>
                    </span>

                    {/* user gender */}
                    <span className="text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-2 bg-slate-100 dark:bg-slate-900/50 w-full rounded-md p-4 relative">

                        <div className="absolute text-xs font-normal -top-2.5 left-1/2 transform -translate-x-1/2 h-auto w-fit mx-auto py-0.5 px-1 rounded bg-purple-500/10 dark:bg-sky-500/10 text-purple-500 dark:text-sky-500">
                            Gender
                        </div>

                        <div className="w-8 h-8 grid place-items-center rounded-md bg-purple-500/10 dark:bg-sky-500/10 text-purple-500 dark:text-sky-500">
                            <UserCircle size={16} />
                        </div>
                        <p>{user?.gender}</p>
                    </span>

                    {/* user gender */}
                    <span className="text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-2 bg-slate-100 dark:bg-slate-900/50 w-full rounded-md p-4 relative">

                        <div className="absolute text-xs font-normal -top-2.5 left-1/2 transform -translate-x-1/2 h-auto w-fit mx-auto py-0.5 px-1 rounded bg-purple-500/10 dark:bg-sky-500/10 text-purple-500 dark:text-sky-500">
                            Birth of Date
                        </div>

                        <div className="w-8 h-8 grid place-items-center rounded-md bg-purple-500/10 dark:bg-sky-500/10 text-purple-500 dark:text-sky-500">
                            <CalendarDays size={16} />
                        </div>
                        <p>{formattedBithDay}</p>
                    </span>

                    {/* user blood group */}
                    <span className="text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-2 bg-slate-100 dark:bg-slate-900/50 w-full rounded-md p-4 relative">

                        <div className="absolute text-xs font-normal -top-2.5 left-1/2 transform -translate-x-1/2 h-auto w-fit mx-auto py-0.5 px-1 rounded bg-purple-500/10 dark:bg-sky-500/10 text-purple-500 dark:text-sky-500">
                            Blood Group
                        </div>

                        <div className="w-8 h-8 grid place-items-center rounded-md bg-purple-500/10 dark:bg-sky-500/10 text-purple-500 dark:text-sky-500">
                            <Droplets size={16} />
                        </div>
                        <p>{user?.blood_group}</p>
                    </span>

                    {/* user age */}
                    <span className="text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-2 bg-slate-100 dark:bg-slate-900/50 w-full rounded-md p-4 relative">

                        <div className="absolute text-xs font-normal -top-2.5 left-1/2 transform -translate-x-1/2 h-auto w-fit mx-auto py-0.5 px-1 rounded bg-purple-500/10 dark:bg-sky-500/10 text-purple-500 dark:text-sky-500">
                            Age
                        </div>

                        <div className="w-8 h-8 grid place-items-center rounded-md bg-purple-500/10 dark:bg-sky-500/10 text-purple-500 dark:text-sky-500">
                            <CalendarClock size={16} />
                        </div>
                        <p>{user?.age} Years</p>
                    </span>



                    {/* bottom div */}
                    <div className="absolute bottom-0 h-1 w-full bg-violet-500 dark:bg-sky-500 hidden group-hover:block transition-colors"></div>
                </motion.div>

            </Container>
        </section>
    );
};

export default UserDetails;