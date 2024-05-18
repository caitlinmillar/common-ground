import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './store/reducers/store'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ROUTES } from './constants/Routes'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
            <Router>
            <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path={ROUTES.HOMEPAGE_ROUTE} element={<HomePage />} />
            </Routes>
        </Router>
            </PersistGate>
        </Provider>
    )
}

export default App
