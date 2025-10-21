import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

function TourDelete() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tour, setTour] = useState(null);

  useEffect(() => {
    api.get(`/tuors/${id}`)
      .then((res) => setTour(res.data))
      .catch(() => navigate("/")); // Nếu không tìm thấy thì quay lại
  }, [id, navigate]);

  const handleDelete = async () => {
    await api.delete(`/tuors/${id}`);
    navigate("/"); // Quay về danh sách sau khi xóa
  };

  const handleCancel = () => {
    navigate("/");
  };

  if (!tour) return <div className="container mt-4">Đang tải...</div>;

  return (
    <div className="container mt-5">
     <h2>Xóa Tour</h2>
      <div className="card p-4">
       <p> <strong>Tour du lịch </strong> {tour.title}
        </p> 
        <p><strong>Giá:</strong> {tour.price} VND</p>
        <p><strong>Giới thiệu:</strong> {tour.description}</p>
      </div>

      <div className="mt-4 d-flex gap-2">
        <button className="btn btn-danger" onClick={handleDelete}>
          Xóa
        </button>
        <button className="btn btn-secondary" onClick={handleCancel}>
          Danh sách
        </button>
      </div>
    </div>
  );
}

export default TourDelete;
