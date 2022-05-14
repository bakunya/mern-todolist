import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import SuspenseFallback from '@/components/pages/SuspenseFallback'

const SignUp = lazy(() => import('@/components/pages/SignUp'))
const SignIn = lazy(() => import('@/components/pages/SignIn'))
const NotFound = lazy(() => import('@/components/pages/NotFound'))
const Dashboard = lazy(() => import('@/components/pages/Dashboard'))

const index = () => {

    return (
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={
                        <Suspense fallback={<SuspenseFallback />}>
                            <Dashboard />
                        </Suspense>
                    } />
                    <Route path="/signin" element={
                        <Suspense fallback={<SuspenseFallback />}>
                            <SignIn />
                        </Suspense>
                    } />
                    <Route path="/signup" element={
                        <Suspense fallback={<SuspenseFallback />}>
                            <SignUp />
                        </Suspense>
                    } />
                    <Route path="*" element={
                        <Suspense fallback={<SuspenseFallback />}>
                            <NotFound />
                        </Suspense>
                    } />
            </Routes>
        </BrowserRouter>
    )
}

export default index