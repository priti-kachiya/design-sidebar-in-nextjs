import React, { useState } from "react";
import {
	Drawer,
	AppBar,
	Toolbar,
	IconButton,
	TextField,
	List,
	Button,
	Box,
	InputAdornment,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import SpeakerItem from "./SpeakerItem";

const speakersList = [
	{
		id: 1,
		name: "Eleanor Pena",
		title: "President of Sales",
		organization: "XYZ Organisation",
	},
	{
		id: 2,
		name: "Esther Howard",
		title: "Marketing Coordinator",
		organization: "XYZ Organisation",
	},
	{
		id: 3,
		name: "Albert Flores",
		title: "Nursing Assistant",
		organization: "XYZ Organisation",
	},
	{
		id: 4,
		name: "John Doe",
		title: "Marketing Head",
		organization: "XYZ Organisation",
	},
	{
		id: 5,
		name: "Savannah Nguyen",
		title: "Web Designer",
		organization: "XYZ Organisation",
	},
	{
		id: 6,
		name: "Eleanor Pena",
		title: "President of Sales",
		organization: "XYZ Organisation",
	},
	{
		id: 7,
		name: "Esther Howard",
		title: "Marketing Coordinator",
		organization: "XYZ Organisation",
	},
	{
		id: 8,
		name: "Albert Flores",
		title: "Nursing Assistant",
		organization: "XYZ Organisation",
	},
];

const AddSpeakerSidebar = ({ isOpen, onClose }) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedSpeakers, setSelectedSpeakers] = useState([]);

	const handleSelectSpeaker = (id) => {
		setSelectedSpeakers((prevSelected) =>
			prevSelected.includes(id)
				? prevSelected.filter((speakerId) => speakerId !== id)
				: [...prevSelected, id]
		);
	};

	const filteredSpeakers = speakersList.filter((speaker) =>
		speaker.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<Drawer anchor="right" open={isOpen} onClose={onClose}>
			<Box sx={{ maxWidth: "400px", height: "99%" }}>
				{/* Header */}
				<AppBar
					position="sticky"
					sx={{
						backgroundColor: "#bcbcbc29",
						color: "#000",
						borderTopLeftRadius: "15px",
					}}
				>
					<Toolbar>
						<Box sx={{ flexGrow: 1 }}>
							<h3>Add Speaker</h3>
						</Box>
						<IconButton edge="end" onClick={onClose}>
							<CloseIcon />
						</IconButton>
					</Toolbar>
				</AppBar>

				{/* Search */}
				{/* Search */}
				<Box sx={{ padding: "10px" }}>
					<TextField
						variant="outlined"
						placeholder="Search..."
						fullWidth
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<SearchIcon
										sx={{
											color: "#9E9E9E",
											fontSize: "20px",
											marginLeft: "10px",
											marginRight: "10px",
										}}
									/>
								</InputAdornment>
							),
							sx: {
								paddingLeft: "10px",
								paddingRight: "10px",
							},
						}}
					/>
				</Box>

				{/* Speaker List (scrollable) */}
				<Box
					sx={{
						overflowY: "auto",
						height: "calc(100vh - 200px)",
						padding: "0 16px",
						// overflowY: "scroll",
						"&::-webkit-scrollbar": {
							display: "none",
						},
						"-ms-overflow-style": "none", // for Internet Explorer, Edge
						"scrollbar-width": "none", // for Firefox
					}}
				>
					<List>
						{filteredSpeakers.map((speaker) => (
							<SpeakerItem
								key={speaker.id}
								speaker={speaker}
								isSelected={selectedSpeakers.includes(speaker.id)}
								onSelect={handleSelectSpeaker}
							/>
						))}
					</List>
				</Box>

				{/* Footer */}
				<Box
					sx={{
						padding: "16px",
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<Button
						variant="contained"
						sx={{
							backgroundColor: "#E3825E",
							color: "#FFF",
							textTransform: "none",
							fontWeight: "bold",
						}}
						disabled={selectedSpeakers.length === 0}
					>
						Add
					</Button>
					<Button
						variant="outlined"
						onClick={onClose}
						sx={{ color: "#E3825E", borderColor: "#E3825E" }}
					>
						Cancel
					</Button>
				</Box>
			</Box>
		</Drawer>
	);
};

export default AddSpeakerSidebar;
