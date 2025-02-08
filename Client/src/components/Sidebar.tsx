import React from "react";
import "../Sidebar.css";
import { useNavigate } from "react-router";
import { HomeOutlined, StockOutlined, EditOutlined} from "@ant-design/icons";
const Sidebar: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="sidebar">
            <button className="sidebar-item" onClick={() => navigate("/")}><HomeOutlined /></button>
            <button className="sidebar-item" onClick={() => navigate("/home")}><EditOutlined /></button>
            <button className="sidebar-item" onClick={() => navigate("/results")}><StockOutlined /></button>
        </div>
    );
};

export default Sidebar;