import "./settingsStyles.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
	return (
		<div className="settings">
			<div className="settingsWrapper">
				<div className="settingsTitle">
					<span className="settingsUpdateTitle">Update your Account</span>
					<span className="settingsDeleteTitle">Delete Account</span>
				</div>
				<form action="" className="settingsForm">
					<label>Profile Picture</label>
					<div className="settingsPP">
						<img
							src="https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg"
							alt="profile img"
						/>
						<label htmlFor="fileInput">
							<i class=" userPPIcon fa-solid fa-circle-user"></i>
						</label>
						<input type="file" id="fileInput" style={{ display: "none" }} />
					</div>
					<label>Username</label>
					<input type="text" placeholder="Benoy" />
					<label>Email</label>
					<input type="password" placeholder="Benoyjudy@gmail.com" />
					<label>Username</label>
					<input type="password" />
					<button className="settingsSubmit">Update</button>
				</form>
			</div>
			<Sidebar />
		</div>
	)
}
