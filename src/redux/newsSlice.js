import {createSlice} from '@reduxjs/toolkit';

const newsSlice = createSlice({
    name: 'news',
    initialState: [
    ],
    reducers: {
        saveNews: (state, action) => {
            const newNews = {
                id:Date.now(),
                image: action.payload.image,
                date: action.payload.date,
                source:action.payload.source,
                title: action.payload.title,
                description: action.payload.description
            };
            state.push(newNews)
        },
    }
})

export const { saveNews } = newsSlice.actions
export default newsSlice.reducer;