import "./sidebarStyles.css"

export default function Sidebar() {
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
					<li className="sidebarListItem">Life</li>
					<li className="sidebarListItem">Music</li>
					<li className="sidebarListItem">Sports</li>
					<li className="sidebarListItem">Food</li>
					<li className="sidebarListItem">Tech</li>
					<li className="sidebarListItem">Fishing</li>
					<li className="sidebarListItem">Travel</li>
					<li className="sidebarListItem">Games</li>
					<li className="sidebarListItem">Movies</li>
					<li className="sidebarListItem">Books</li>
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
