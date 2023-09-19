import Container from "./Container";

const Hero = () => {
    return (
        <section className="pt-32 pb-16 border-b border-slate-200 dark:border-slate-800 h-screen flex items-center justify-center relative overflow-hidden">
            <Container>
                {/* hero content */}
                <div className="w-full py-16 border border-dashed border-slate-200 dark:border-slate-800 z-50 flex flex-col items-center justify-center gap-8">
                    <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold max-w-lg mx-auto px-4 sm:px-0">
                        Discover Intriguing User Profiles on People Desk
                    </h1>
                    <a href="/#allusers" className="z-30 px-4 py-2 bg-violet-500 dark:bg-sky-500 text-slate-50 border-4 border-purple-200/60 dark:border-sky-900/60 rounded-full hover:scale-110 transition">
                        Explore Now
                    </a>
                </div>
            </Container>

            {/* gradients */}
            <div className="absolute -top-4 -right-4 h-80 w-56 lg:h-96  rotate-45 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-800 filter blur-3xl opacity-20">
            </div>
            <div className="absolute -bottom-4 -left-4 h-80 w-56 lg:h-96  rotate-45 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-800 filter blur-3xl opacity-20">
            </div>
        </section>
    );
};

export default Hero;