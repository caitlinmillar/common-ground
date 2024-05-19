import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './store/reducers/store'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ROUTES } from './constants/Routes'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import Header from './components/header'
import Footer from './components/footer'

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Header />
                <Router>
                    <Routes>
                        <Route path="*" element={<NotFoundPage />} />
                        <Route path={ROUTES.HOMEPAGE_ROUTE} element={<HomePage />} />
                    </Routes>
                </Router>
                <Footer />
            </PersistGate>
        </Provider>
    )
}

export default App
