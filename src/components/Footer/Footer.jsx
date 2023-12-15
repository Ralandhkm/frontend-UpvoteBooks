const Footer = () => {
    return (
        <footer id="footer" className="w-full bg-[#2F2F8A]/20 py-10 flex flex-col justify-center text-center mt-20">
            <h6 className="text-sky-600 font-bold text-2xl">Follow our socials</h6>
            <span className="flex justify-around items-center [&>i]:text-2xl mt-6 w-1/6 mx-auto">
                <i className="bi bi-youtube"></i>
                <i className="bi bi-twitter"></i>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-instagram"></i>
            </span>
            <hr className="w-full md:w-[500px] mx-auto mt-10 border-white/10" />
            <p className="mt-4 text-white/70">&copy; Upvote books Inc. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
