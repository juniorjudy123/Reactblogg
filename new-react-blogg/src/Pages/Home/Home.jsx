import "./homeStyles.css"
import Header from "../../components/header/Header"
import Sidebar from "../../components/sidebar/Sidebar"
import Posts from "../../components/posts/Posts"
// import axios from "axios"
// import { useEffect, useState } from "react"

export default function Home() {
	// const [posts, setPosts] = useState([])

	// useEffect(() => {
	// 	const fetchPosts = async () => {
	// 		const res = await axios.get("/posts")
	// 		console.log("data:", res.data)

	// 		setPosts(res.data)
	// 		console.log("postdata:", posts)
	// 	}
	// 	fetchPosts()
	// }, [])
	return (
		<>
			<Header />
			<div className="home">
				<Posts />
				<Sidebar />
			</div>
		</>
	)
}
