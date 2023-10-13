import CategoryLevel from "../filter/Categories"
import DifficultyFilter from "../filter/DifficultyFilter"
import Instructor from "../filter/Instructor"
import LanguageFilter from "../filter/LanguageFilter"
import PriceFilter from "../filter/PriceFilter"
import Link from "next/link"
const FilterCourses = () => {
    return (
        <>
            <aside className="courses__sidebar">
                <div className="shop-widget">
                    <h4 className="widget-title">Theo Role</h4>
                    <div className="shop-cat-list">
                        <CategoryLevel />
                    </div>
                </div>
                <div className="shop-widget">
                    <h4 className="widget-title">Loại Giá</h4>
                    <div className="shop-cat-list">
                        <PriceFilter />
                    </div>
                </div>
                <div className="shop-widget">
                    <h4 className="widget-title">Độ Khó</h4>
                    <div className="shop-cat-list">
                        <DifficultyFilter />
                    </div>
                </div>
                <div className="shop-widget">
                    <h4 className="widget-title">Popular Tags</h4>
                    <div className="tagcloud">
                        <Link href="/403">Art  Design</Link>
                        <Link href="/403">Courses</Link>
                        <Link href="/403">Education</Link>
                        <Link href="/403">App</Link>
                        <Link href="/403">Video</Link>
                        <Link href="/403">UX Course</Link>
                        <Link href="/403">Learning</Link>
                        <Link href="/403">Programming</Link>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default FilterCourses
