import React, { useState } from "react";
import AddSpeakerButton from "../components/AddSpeakerButton";
import AddSpeakerSidebar from "../components/AddSpeakerSidebar";

const Home = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	const toggleSidebar = (open) => () => {
		setSidebarOpen(open);
	};

	return (
		<div style={{ padding: "24px" }}>
			<AddSpeakerButton onClick={toggleSidebar(true)} />
			<AddSpeakerSidebar isOpen={sidebarOpen} onClose={toggleSidebar(false)} />
		</div>
	);
};

export default Home;
