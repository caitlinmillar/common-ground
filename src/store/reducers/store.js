import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage
import data from './data'
import { useDispatch, useSelector } from 'react-redux'

const rootReducer = combineReducers({
    data
})

const persistedReducer = persistReducer(
    {
        key: 'root',
        storage,
        whitelist: ['data']
    },
    rootReducer
)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
})


export const useAppDispatch = () => useDispatch()
export const useAppSelector = useSelector

export const persistor = persistStore(store)
