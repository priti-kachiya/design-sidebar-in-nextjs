import React from "react";
import { Button } from "@mui/material";

const AddSpeakerButton = ({ onClick }) => {
	return (
		<Button
			variant="contained"
			sx={{
				backgroundColor: "#E3825E",
				color: "#FFF",
				textTransform: "none",
				fontWeight: "bold",
			}}
			onClick={onClick}
		>
			Add Speaker
		</Button>
	);
};

export default AddSpeakerButton;
