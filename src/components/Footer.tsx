const Footer: React.FC = () => {
    return (
        <footer className="w-full  bg-gradient-to-l from-main to-PrimaryAccent border-t border-main">
            <div className="max-w-7xl mx-auto px-4 py-6">
                <p className="text-white text-center text-lg">
                    © {new Date().getFullYear()} | The Badr Lab | All Rights Reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer; 
