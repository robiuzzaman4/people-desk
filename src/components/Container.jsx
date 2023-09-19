const Container = ({ children, className }) => {
    return (
        <div className={`w-full max-w-screen-xl mx-auto px-4 sm:px-8 md:px-12 ${className ? className : ""}`}>
            {children}
        </div>
    );
};

export default Container;