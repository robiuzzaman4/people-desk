import { RefreshCcw } from "lucide-react";

const Loader = () => {
    return (
        <div className="w-full mx-auto py-16 flex items-center justify-center">
            <RefreshCcw size={16} strokeWidth={1.5} className="text-violet-500 dark:text-violet-500 animate-spin"/>
        </div>
    );
};

export default Loader;