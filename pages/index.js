import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import Banner1 from "@/components/sections/Banner1"
import Categories1 from "@/components/sections/Categories1"
import Course3 from "@/components/sections/Course3"
import Cta2 from "@/components/sections/Cta2"
import Instructor1 from "@/components/sections/Instructor1"
import Newsletter1 from "@/components/sections/Newsletter1"
import Testimonial2 from "@/components/sections/Testimonial2"
import Fact1 from "@/components/sections/Fact1"
import VideoCard from "@/components/sections/videoCard"

export default function Home1() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Banner1 />
                <Fact1 />
                <About1 />
                <Course3 />
                <Categories1 />
                <Cta2 />
                <Testimonial2 />
                <Instructor1 />
                <Newsletter1 />
            </Layout>
        </>
    )
}