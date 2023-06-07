import { useState } from "react"
import "./registerStyles.css"
import { Link, redirect } from "react-router-dom"
import axios from "axios"

export default function Register() {
	const [username, setUsername] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [error, setError] = useState(false)

	const handleSubmit = async (e) => {
		e.preventDefault() // while submitting will not refresh page
		setError(false)
		try {
			const res = await axios.post("/auth/register", {
				username,
				email,
				password,
			})
			res.data && window.location.replace("/login")
		} catch (err) {
			setError(true)
		}
	}
	return (
		<div className="register">
			<span className="registerTitle">Register</span>
			<form className="registerForm" onSubmit={handleSubmit}>
				<label>Username </label>
				<input
					className="registerInput"
					type="text"
					placeholder="Enter your Username..."
					onChange={(e) => setUsername(e.target.value)}
				/>
				<label>Email </label>
				<input
					className="registerInput"
					type="text"
					placeholder="Enter your Email..."
					onChange={(e) => setEmail(e.target.value)}
				/>
				<label>Password</label>
				<input
					className="registerInput"
					type="Password"
					placeholder="Enter your password..."
					onChange={(e) => setPassword(e.target.value)}
				/>

				<button className="registerButton" type="submit">
					Register
				</button>
			</form>
			<button className="registerLoginButton">
				<Link className="link" to="/Login">
					Login
				</Link>
			</button>
			{error && (
				<span style={{ color: "yellow", marginTop: "10px" }}>
					Something went wrong!!!.Please try again.
				</span>
			)}
		</div>
	)
}
