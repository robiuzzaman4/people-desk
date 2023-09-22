import { useMotionTemplate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion"
import { CalendarClock, CalendarDays, Compass, Droplets, Globe2, GraduationCap, Landmark, MapPin, Phone, UserCircle } from "lucide-react";

const UserDetailsRightSection = ({ title, phone, address, city, country, zip_code, gender, blood_group, age, formattedBithDay }) => {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    const handleMouseMove = ({ clientX, clientY, currentTarget }) => {
        let bounds = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - bounds.left);
        mouseY.set(clientY - bounds.top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            onMouseMove={handleMouseMove} className="h-auto w-full bg-slate-200 dark:bg-slate-900 grid place-items-center relative group rounded-lg cursor-pointer z-10">
            <div className="w-[calc(100%-2px)] h-[calc(100%-2px)] bg-slate-50 dark:bg-slate-950 z-30 rounded-lg p-8 grid lg:grid-cols-2 gap-8">
                {/* user title */}
                <span className="text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-2 bg-slate-100 dark:bg-slate-900/50 w-full h-auto rounded-md p-4 relative z-50">

                    <div className="absolute text-xs font-normal -top-2.5 left-1/2 transform -translate-x-1/2 h-auto w-fit mx-auto py-0.5 px-1 rounded bg-purple-500/10 dark:bg-violet-500/10 text-purple-500 dark:text-violet-500">
                        Title
                    </div>

                    <div className="w-8 h-8 grid place-items-center rounded-md bg-purple-500/10 dark:bg-violet-500/10 text-purple-500 dark:text-violet-500">
                        <GraduationCap size={16} />
                    </div>
                    <p>{title}</p>
                </span>

                {/* user phone */}
                <span className="text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-2 bg-slate-100 dark:bg-slate-900/50 w-full rounded-md p-4 relative z-50">

                    <div className="absolute text-xs font-normal -top-2.5 left-1/2 transform -translate-x-1/2 h-auto w-fit mx-auto py-0.5 px-1 rounded bg-purple-500/10 dark:bg-violet-500/10 text-purple-500 dark:text-violet-500">
                        Phone
                    </div>

                    <div className="w-8 h-8 grid place-items-center rounded-md bg-purple-500/10 dark:bg-violet-500/10 text-purple-500 dark:text-violet-500">
                        <Phone size={16} />
                    </div>
                    <p>{phone}</p>
                </span>

                {/* user address */}
                <span className="text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-2 bg-slate-100 dark:bg-slate-900/50 w-full rounded-md p-4 relative z-50">

                    <div className="absolute text-xs font-normal -top-2.5 left-1/2 transform -translate-x-1/2 h-auto w-fit mx-auto py-0.5 px-1 rounded bg-purple-500/10 dark:bg-violet-500/10 text-purple-500 dark:text-violet-500">
                        Address
                    </div>

                    <div className="w-8 h-8 grid place-items-center rounded-md bg-purple-500/10 dark:bg-violet-500/10 text-purple-500 dark:text-violet-500">
                        <MapPin size={16} />
                    </div>
                    <p>{address}</p>
                </span>

                {/* user city */}
                <span className="text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-2 bg-slate-100 dark:bg-slate-900/50 w-full rounded-md p-4 relative z-50">

                    <div className="absolute text-xs font-normal -top-2.5 left-1/2 transform -translate-x-1/2 h-auto w-fit mx-auto py-0.5 px-1 rounded bg-purple-500/10 dark:bg-violet-500/10 text-purple-500 dark:text-violet-500">
                        City
                    </div>

                    <div className="w-8 h-8 grid place-items-center rounded-md bg-purple-500/10 dark:bg-violet-500/10 text-purple-500 dark:text-violet-500">
                        <Landmark size={16} />
                    </div>
                    <p>{city}</p>
                </span>

                {/* user country */}
                <span className="text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-2 bg-slate-100 dark:bg-slate-900/50 w-full rounded-md p-4 relative z-50">

                    <div className="absolute text-xs font-normal -top-2.5 left-1/2 transform -translate-x-1/2 h-auto w-fit mx-auto py-0.5 px-1 rounded bg-purple-500/10 dark:bg-violet-500/10 text-purple-500 dark:text-violet-500">
                        Country
                    </div>

                    <div className="w-8 h-8 grid place-items-center rounded-md bg-purple-500/10 dark:bg-violet-500/10 text-purple-500 dark:text-violet-500">
                        <Globe2 size={16} />
                    </div>
                    <p>{country}</p>
                </span>

                {/* user zip code */}
                <span className="text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-2 bg-slate-100 dark:bg-slate-900/50 w-full rounded-md p-4 relative z-50">

                    <div className="absolute text-xs font-normal -top-2.5 left-1/2 transform -translate-x-1/2 h-auto w-fit mx-auto py-0.5 px-1 rounded bg-purple-500/10 dark:bg-violet-500/10 text-purple-500 dark:text-violet-500">
                        Zip Code
                    </div>

                    <div className="w-8 h-8 grid place-items-center rounded-md bg-purple-500/10 dark:bg-violet-500/10 text-purple-500 dark:text-violet-500">
                        <Compass size={16} />
                    </div>
                    <p>{zip_code}</p>
                </span>

                {/* user gender */}
                <span className="text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-2 bg-slate-100 dark:bg-slate-900/50 w-full rounded-md p-4 relative z-50">

                    <div className="absolute text-xs font-normal -top-2.5 left-1/2 transform -translate-x-1/2 h-auto w-fit mx-auto py-0.5 px-1 rounded bg-purple-500/10 dark:bg-violet-500/10 text-purple-500 dark:text-violet-500">
                        Gender
                    </div>

                    <div className="w-8 h-8 grid place-items-center rounded-md bg-purple-500/10 dark:bg-violet-500/10 text-purple-500 dark:text-violet-500">
                        <UserCircle size={16} />
                    </div>
                    <p>{gender}</p>
                </span>

                {/* user gender */}
                <span className="text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-2 bg-slate-100 dark:bg-slate-900/50 w-full rounded-md p-4 relative z-50">

                    <div className="absolute text-xs font-normal -top-2.5 left-1/2 transform -translate-x-1/2 h-auto w-fit mx-auto py-0.5 px-1 rounded bg-purple-500/10 dark:bg-violet-500/10 text-purple-500 dark:text-violet-500">
                        Birth of Date
                    </div>

                    <div className="w-8 h-8 grid place-items-center rounded-md bg-purple-500/10 dark:bg-violet-500/10 text-purple-500 dark:text-violet-500">
                        <CalendarDays size={16} />
                    </div>
                    <p>{formattedBithDay}</p>
                </span>

                {/* user blood group */}
                <span className="text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-2 bg-slate-100 dark:bg-slate-900/50 w-full rounded-md p-4 relative z-50">

                    <div className="absolute text-xs font-normal -top-2.5 left-1/2 transform -translate-x-1/2 h-auto w-fit mx-auto py-0.5 px-1 rounded bg-purple-500/10 dark:bg-violet-500/10 text-purple-500 dark:text-violet-500">
                        Blood Group
                    </div>

                    <div className="w-8 h-8 grid place-items-center rounded-md bg-purple-500/10 dark:bg-violet-500/10 text-purple-500 dark:text-violet-500">
                        <Droplets size={16} />
                    </div>
                    <p>{blood_group}</p>
                </span>

                {/* user age */}
                <span className="text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-2 bg-slate-100 dark:bg-slate-900/50 w-full rounded-md p-4 relative z-50">

                    <div className="absolute text-xs font-normal -top-2.5 left-1/2 transform -translate-x-1/2 h-auto w-fit mx-auto py-0.5 px-1 rounded bg-purple-500/10 dark:bg-violet-500/10 text-purple-500 dark:text-violet-500">
                        Age
                    </div>

                    <div className="w-8 h-8 grid place-items-center rounded-md bg-purple-500/10 dark:bg-violet-500/10 text-purple-500 dark:text-violet-500">
                        <CalendarClock size={16} />
                    </div>
                    <p>{age} Years</p>
                </span>
            </div>

            {/* spotlight hover bg */}
            <motion.div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition rounded-lg z-40"
                style={{
                    background: useMotionTemplate`radial-gradient(
                        350px circle at ${mouseX}px ${mouseY}px,
                        rgba(139, 92, 246, 0.15),
                        transparent 80%
                        )`
                }}>
            </motion.div>

            {/* spotlight hover border */}
            <motion.div className="absolute -inset-0 pointer-events-none opacity-0 group-hover:opacity-100 rounded-lg transition z-20"
                style={{
                    background: useMotionTemplate`radial-gradient(
                        350px circle at ${mouseX}px ${mouseY}px,
                        rgb(139, 92, 246),
                        transparent 80%
                        )`
                }}>
            </motion.div>
        </motion.div >
    );
};

export default UserDetailsRightSection;