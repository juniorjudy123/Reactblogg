import { useEffect, useState } from "react"
import "./sidebarStyles.css"
import axios from "axios"
import { Link } from "react-router-dom"

export default function Sidebar() {
	const [cats, setCats] = useState([])

	useEffect(() => {
		const getCats = async () => {
			const res = await axios.get("/categories")
			setCats(res.data)
		}
		getCats()
	}, [])

	return (
		<div className="sidebar">
			<div className="sidebarItem">
				<span className="sidebarTitle">ABOUT ME</span>
				<img
					src="https://pbs.twimg.com/profile_images/1485050791488483328/UNJ05AV8_400x400.jpg"
					alt="sidebarImg"
				/>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut ratione
					qui unde, sint ea vitae sunt exercitationem eveniet.
				</p>
			</div>
			<div className="SidebarItem">
				<span className="sidebarTitle">CATEGORIES</span>
				<ul className="sidebarList">
					{cats.map((c) => (
						<Link to={`/?cat=${c.name}`} className="link">
							<li className="sidebarListItem">{c.name}</li>
						</Link>
					))}
				</ul>
			</div>
			<div className="SidebarItem">
				<span className="sidebarTitle">Follow Us</span>
				<div className="sidebarSocial">
					<i className="sidebarIcons fa-brands fa-square-facebook"></i>
					<i className="sidebarIcons fa-brands fa-twitter"></i>
					<i className="sidebarIcons fa-brands fa-pinterest"></i>
					<i className="sidebarIcons fa-brands fa-instagram"></i>
				</div>
			</div>
		</div>
	)
}
