import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function ProductLayout ( {
    children,
} )
{
    return (
        <>
            <Navbar />
            <section>
                { children }
            </section>
            <Footer />
        </>
    )
        ;
}