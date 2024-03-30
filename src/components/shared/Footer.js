
const Footer = () =>
{
    return (
        <footer className="bg-gray-800 p-6 text-center text-white mt-20">
            <p className="mb-6">© { new Date().getFullYear() } Your Site. All rights reserved.</p>
            <div className="flex justify-center space-x-4">
                <a href="#" className="hover:underline">Terms</a>
                <a href="#" className="hover:underline">Privacy</a>
                <a href="#" className="hover:underline">Contact</a>
            </div>
        </footer>
    );
};

export default Footer;