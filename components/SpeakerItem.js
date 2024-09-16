import React from "react";
import {
	ListItem,
	ListItemText,
	Checkbox,
	IconButton,
	Typography,
	Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import MuiLink from "@mui/material/Link";
import ListItemAvatar from "@mui/material/ListItemAvatar";

const SpeakerItem = ({ speaker, isSelected, onSelect }) => {
	return (
		<ListItem
			button
			onClick={() => onSelect(speaker.id)}
			sx={{
				border: isSelected ? "1px solid green" : "1px solid lightgrey",
				borderRadius: "8px",
				padding: "15px 10px",
				marginBottom: "8px",
				display: "flex",
				alignItems: "start",
			}}
		>
			<AccountCircleRoundedIcon
				sx={{ fontSize: "60px", marginRight: "10px", color: "text.secondary" }}
			></AccountCircleRoundedIcon>
			<ListItemText
				primary={
					<Typography variant="body1" fontWeight="bold">
						{speaker.name}
					</Typography>
				}
				secondary={
					<>
						<Box display="flex" justifyContent="flex-start" alignItems="center">
							<Typography
								variant="body2"
								sx={{
									fontSize: "0.65rem",
								}}
							>
								{speaker.title}
							</Typography>

							<Typography
								variant="body2"
								sx={{ marginLeft: "8px", fontSize: "0.65rem" }}
							>
								|
							</Typography>
							<Typography
								variant="body2"
								sx={{ marginLeft: "8px", fontSize: "0.65rem" }}
							>
								{speaker.organization}
							</Typography>
						</Box>
						<Typography
							variant="body2"
							align="start"
							sx={{
								color: "text.secondary",
								marginTop: "5px",
							}}
						>
							<MuiLink
								onClick={(e) => e.stopPropagation()}
								sx={{
									fontSize: "14px",
									padding: "0px",
									color: "#E3825E",
									textDecoration: "none",
								}}
							>
								<EditIcon
									sx={{
										color: "#E3825E",
										fontSize: "16px",
										// border: "1px solid #E3825E",
										marginBottom: "2px",
									}}
								/>{" "}
								{/* <Typography
									variant="body2"
									fontWeight="bold"
									sx={{ marginLeft: "8px" }}
								> */}
								Edit Speaker
								{/* </Typography> */}
							</MuiLink>
							{/* <MuiLink color="inherit" href="https://mui.com/">
								Edit Specker
							</MuiLink>{" "} */}
						</Typography>
					</>
				}
			/>

			<Checkbox
				sx={{ fontSize: "15px", marginTop: "0px" }}
				checked={isSelected}
				disableRipple
			/>
		</ListItem>
	);
};

export default SpeakerItem;
