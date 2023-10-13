import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    latestJob: [],

    category: [
        { id: 1, name: "Devops", value: "devops", isChecked: false },
        { id: 2, name: "Front-End", value: "frontend", isChecked: false },
        { id: 3, name: "Back-End", value: "backend", isChecked: false },
    ],
    // instructors: [
    //     { id: 1, name: "Dang Minh Quan", value: "dangminhquan", isChecked: false },
    //     { id: 2, name: "Pham Vu Tien", value: "jacksonalive", isChecked: false },
    // ],
    price: [
        { id: 1, name: "Free", value: "free", isChecked: false },
        { id: 2, name: "Tính Phí", value: "paid", isChecked: false }
    ],
    // language: [
    //     { id: 1, name: "China", value: "china", isChecked: false },
    //     { id: 2, name: "English", value: "english", isChecked: false },
    //     { id: 3, name: "French", value: "french", isChecked: false },
    //     { id: 4, name: "German", value: "german", isChecked: false },
    //     { id: 5, name: "Italian", value: "italian", isChecked: false },
    //     { id: 6, name: "Spanish", value: "spanish", isChecked: false }
    // ],
    difficulty: [
        { id: 1, name: "Cơ Bản", value: "basic", isChecked: false },
        { id: 2, name: "Nâng Cao", value: "intermediate", isChecked: false },
        { id: 3, name: "Expert", value: "expert", isChecked: false }
    ],
    // rating: [
    //     { id: 1, name: "one", value: "one", isChecked: false },
    //     { id: 2, name: "Two", value: "two", isChecked: false },
    //     { id: 3, name: "Three", value: "three", isChecked: false },
    //     { id: 4, name: "Four", value: "four", isChecked: false },
    //     { id: 5, name: "Five", value: "five", isChecked: false }
    // ],
}

export const jobSlice = createSlice({
    name: "course",
    initialState,
    reducers: {
        categoryCheck: (state, { payload }) => {
            state?.category?.map((item) => {
                if (item.id === payload) {
                    if (item.isChecked) {
                        item.isChecked = false
                    } else {
                        item.isChecked = true
                    }
                }
                return {
                    ...item,
                }
            })
        },
        clearCategoryToggle: (state) => {
            state?.category?.map((item) => {
                item.isChecked = false
                return {
                    ...item,
                }
            })
        },

        instructorsCheck: (state, { payload }) => {
            state?.instructors?.map((item) => {
                if (item.id === payload) {
                    if (item.isChecked) {
                        item.isChecked = false
                    } else {
                        item.isChecked = true
                    }
                }
                return {
                    ...item,
                }
            })
        },
        clearInstructorToggle: (state) => {
            state?.instructors?.map((item) => {
                item.isChecked = false
                return {
                    ...item,
                }
            })
        },

        priceCheck: (state, { payload }) => {
            state?.price?.map((item) => {
                if (item.id === payload) {
                    if (item.isChecked) {
                        item.isChecked = false
                    } else {
                        item.isChecked = true
                    }
                }
                return {
                    ...item,
                }
            })
        },
        clearPriceToggle: (state) => {
            state?.price?.map((item) => {
                item.isChecked = false
                return {
                    ...item,
                }
            })
        },

        languageCheck: (state, { payload }) => {
            state?.language?.map((item) => {
                if (item.id === payload) {
                    if (item.isChecked) {
                        item.isChecked = false
                    } else {
                        item.isChecked = true
                    }
                }
                return {
                    ...item,
                }
            })
        },
        clearLanguageToggle: (state) => {
            state?.language?.map((item) => {
                item.isChecked = false
                return {
                    ...item,
                }
            })
        },

        difficultyCheck: (state, { payload }) => {
            state?.difficulty?.map((item) => {
                if (item.id === payload) {
                    if (item.isChecked) {
                        item.isChecked = false
                    } else {
                        item.isChecked = true
                    }
                }
                return {
                    ...item,
                }
            })
        },
        clearDifficultyToggle: (state) => {
            state?.difficulty?.map((item) => {
                item.isChecked = false
                return {
                    ...item,
                }
            })
        },
    },
})

export const {
    instructorsCheck,
    categoryCheck,
    priceCheck,
    languageCheck,
    difficultyCheck,
    clearInstructorToggle,
    clearCategoryToggle,
    clearPriceToggle,
    clearLanguageToggle,
    clearDifficultyToggle,
} = jobSlice.actions

export default jobSlice.reducer
