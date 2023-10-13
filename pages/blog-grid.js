import BlogPost from "@/components/blog/BlogPost"
import Layout from "@/components/layout/Layout"
export default function BlogGrid() {
    return (
        <>
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Donate">
                <section className="blog-grid-area section-py-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <BlogPost showItem={6} style={4} showPagination />
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}