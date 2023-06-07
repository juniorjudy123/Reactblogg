import { useContext } from "react"
import "./navbarStyles.css"
import { Link } from "react-router-dom"
import { Context } from "../../context/context"

export default function Navbar() {
	const { user } = useContext(Context)
	return (
		<div className="nav">
			<div className="topLeftCorner">
				<i className="topLeftIcons fa-brands fa-square-facebook"></i>
				<i className="topLeftIcons fa-brands fa-twitter"></i>
				<i className="topLeftIcons fa-brands fa-pinterest"></i>
				<i className="topLeftIcons fa-brands fa-instagram"></i>
			</div>
			<div className="topCenter">
				<ul className="topCenterList">
					<li className="TopCenterListItem">
						<Link className="link" to="/">
							Home
						</Link>
					</li>
					<li className="TopCenterListItem">
						<Link className="link" to="/About">
							About
						</Link>
					</li>
					<li className="TopCenterListItem">
						<Link className="link" to="/Contact">
							Contact
						</Link>
					</li>
					<li className="TopCenterListItem">
						<Link className="link" to="/Write">
							Write
						</Link>
					</li>
					<li className="TopCenterListItem">{user && "Logout "}</li>
				</ul>
			</div>
			<div className="topRightCorner">
				{user ? (
					<img
						className="TopRightImg"
						src="https://pbs.twimg.com/profile_images/1485050791488483328/UNJ05AV8_400x400.jpg"
						alt="profilePic"
					></img>
				) : (
					<ul className="topCenterList">
						<li className="TopCenterListItem">
							<Link className="link" to="/Login">
								Login
							</Link>
						</li>
						<li className="TopCenterListItem">
							<Link className="link" to="/Register">
								Register
							</Link>
						</li>
					</ul>
				)}

				<i className="TopSearchIcon fa-solid fa-magnifying-glass"></i>
			</div>
		</div>
	)
}
