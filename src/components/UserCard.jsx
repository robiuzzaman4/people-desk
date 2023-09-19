import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const UserCard = ({ id, name, email, photo_url }) => {
    return (
        <Link to={`users/${id}`}>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-8 flex flex-col items-center gap-4 overflow-hidden group">

                {/* user image */}
                <div className="w-24 h-24 flex items-center justify-center border-2 border-violet-500 dark:border-sky-500 rounded-full">
                    <LazyLoadImage
                        effect="blur"
                        src={photo_url}
                        alt="user profile picture"
                        className="w-20 h-20 rounded-full object-cover" />
                </div>

                <div className="flex flex-col items-center gap-2">
                    {/* user name */}
                    <h2 className="text-2xl font-semibold">
                        {name}
                    </h2>

                    {/* user email */}
                    <span className="text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-2">
                        <div className="w-8 h-8 grid place-items-center rounded-md bg-purple-500/10 dark:bg-sky-500/10 text-purple-500 dark:text-sky-500">
                            <Mail size={16} />
                        </div>
                        <p>{email}</p>
                    </span>
                </div>

                {/* bottom div */}
                <div className="absolute bottom-0 h-1 w-full bg-violet-500 dark:bg-sky-500 hidden group-hover:block transition-colors"></div>

            </motion.div>
        </Link>
    );
};

export default UserCard;