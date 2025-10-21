import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../services/api";

function TourDetail() {
  const { id } = useParams();
  const [tour, setTour] = useState(null);

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const res = await api.get(`/tuors/${id}`);
        setTour(res.data);
      } catch (error) {
        console.error("Lỗi khi tải tour:", error);
      }
    };
    fetchTour();
  }, [id]);

  if (!tour) {
    return <div className="container mt-4">Đang tải...</div>;
  }

  return (
    <div className="container mt-4">
      <h2>Chi tiết Tour</h2>
      <div className="card p-4">
       <p> <strong>Tour du lịch </strong> {tour.title}
        </p> 
        <p><strong>Giá:</strong> {tour.price} VND</p>
        <p><strong>Giới thiệu:</strong> {tour.description}</p>
      </div>
      <Link to="/" className="btn btn-secondary mt-3">Danh sách</Link>
    </div>
  );
}

export default TourDetail;
