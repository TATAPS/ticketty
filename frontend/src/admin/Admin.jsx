import React from "react";
import Card from "../../reusable-components/RenderCard";
import AddBusinessOutlinedIcon from "@mui/icons-material/AddBusinessOutlined";
import EngineeringIcon from "@mui/icons-material/Engineering";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DoneIcon from "@mui/icons-material/Done";
import "../../reusable-components/RenderCard.css";

const Admin = () => {
  return (
    <div>
      <h1>Admin</h1>
      <div className="card">
        <Card title="Add a New Company">
          <AddBusinessOutlinedIcon sx={{ fontSize: 150, color: "#6c9bcf" }} />
        </Card>
        <Card title="Add a New Contact">
          <PersonAddIcon sx={{ fontSize: 150, color: "#6c9bcf" }} />
        </Card>
        <Card title="Add a New Engineer">
          <EngineeringIcon sx={{ fontSize: 150, color: "#6c9bcf" }} />
        </Card>
        <Card title="Add a New Priority">
          <PriorityHighIcon sx={{ fontSize: 150, color: "#6c9bcf" }} />
        </Card>
        <Card title="Add a New Status">
          <DoneIcon sx={{ fontSize: 150, color: "#6c9bcf" }} />
        </Card>
      </div>
    </div>
  );
};

export default Admin;
