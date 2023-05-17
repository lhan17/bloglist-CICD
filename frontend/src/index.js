import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import notificationReducer from './reducers/notificationReducer.js'
import blogReducer from './reducers/blogReducer'
import userReducer from './reducers/userReducer'
import { BrowserRouter as Router } from 'react-router-dom'
import usersReducer from './reducers/usersReducer'

const store = configureStore({
    reducer: {
        notification: notificationReducer,
        blog: blogReducer,
        user: userReducer,
        users: usersReducer,
    },
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
)
