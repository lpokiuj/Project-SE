    import useSWR from 'swr'
    import HeaderTabs from "./AppHeader"
    import { Footer } from './Footer'

    export default function Layout({ children }) {
    const { data, error } = useSWR('/api/navigation', fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

        return (
        <>
        	<HeaderTabs user ={{ image: '/public/'}}></HeaderTabs>
            <main>{children}</main>
            <Footer />
        </>
        )
    }