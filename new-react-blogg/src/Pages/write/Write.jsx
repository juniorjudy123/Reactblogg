import "./writeStyles.css"

export default function Write() {
	return (
		<div className="Write">
			<img
				src="https://images.pexels.com/photos/289586/pexels-photo-289586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
				alt="imageFile"
				className="write-img"
			></img>
			<form className="writeForm">
				<div className="writeFormGroup">
					<label htmlFor="fileInput">
						<i className="writeIcon fa-solid fa-plus"></i>
					</label>
					<input
						type="file"
						id="fileInput"
						className="writeInput"
						style={{ display: "none" }}
					/>
					<input
						type="text"
						placeholder="What is your blog about?"
						className="writeInput"
						autoFocus={true}
					/>
				</div>
				<div className="writeFormGroup">
					<textarea
						placeholder="Tell your story..."
						type="text"
						className="writeInputText"
					></textarea>
				</div>
				<button className="writeSubmit">Publish</button>
			</form>
		</div>
	)
}
