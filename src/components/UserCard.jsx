import { useMotionTemplate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion"
import { Mail } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const UserCard = ({ id, name, email, photo_url }) => {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    const handleMouseMove = ({ clientX, clientY, currentTarget }) => {
        let bounds = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - bounds.left);
        mouseY.set(clientY - bounds.top);
    }
    
    return (
        <Link to={`users/${id}`}>
            <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.5 }}
                onMouseMove={handleMouseMove} className="h-auto w-full bg-slate-200 dark:bg-slate-900 grid place-items-center relative group rounded-lg cursor-pointer z-10">
                <div className="w-[calc(100%-2px)] h-[calc(100%-2px)] bg-slate-50 dark:bg-slate-950 z-30 rounded-lg p-8 flex flex-col items-center gap-4">
                    {/* user image */}
                    <div className="w-24 h-24 flex items-center justify-center border-2 border-violet-500 dark:border-violet-500 rounded-full z-50">
                        <LazyLoadImage
                            effect="blur"
                            src={photo_url}
                            alt="user profile picture"
                            className="w-20 h-20 rounded-full object-cover" />
                    </div>

                    <div className="flex flex-col items-center gap-2 z-50">
                        {/* user name */}
                        <h2 className="text-2xl font-semibold">
                            {name}
                        </h2>

                        {/* user email */}
                        <span className="text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-2">
                            <div className="w-8 h-8 grid place-items-center rounded-md bg-purple-500/10 dark:bg-violet-500/10 text-purple-500 dark:text-violet-500">
                                <Mail size={16} />
                            </div>
                            <p>{email}</p>
                        </span>
                    </div>
                </div>

                {/* spotlight hover bg */}
                <motion.div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition rounded-lg z-40"
                    style={{
                        background: useMotionTemplate`radial-gradient(
                        250px circle at ${mouseX}px ${mouseY}px,
                        rgba(139, 92, 246, 0.15),
                        transparent 80%
                        )`
                    }}>
                </motion.div>

                {/* spotlight hover border */}
                <motion.div className="absolute -inset-0 pointer-events-none opacity-0 group-hover:opacity-100 rounded-lg transition z-20"
                    style={{
                        background: useMotionTemplate`radial-gradient(
                        250px circle at ${mouseX}px ${mouseY}px,
                        rgb(139, 92, 246),
                        transparent 80%
                        )`
                    }}>
                </motion.div>
            </motion.div >
        </Link>
    );
};

export default UserCard;