import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";

function TourForm() {
  const [tour, setTour] = useState({ title: "", price: "", description: "" });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      api.get(`/tuors/${id}`).then((res) => setTour(res.data));
    }
  }, [id]);

  const handleChange = (e) => {
    setTour({ ...tour, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await api.put(`/tuors/${id}`, tour);
    } else {
      await api.post("/tuors", tour);
    }
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <h2>{id ? "Cập nhật Tour" : "Thêm Tour mới"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Tên tour</label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={tour.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Giá</label>
          <input
            type="number"
            name="price"
            className="form-control"
            value={tour.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Mô tả</label>
          <textarea
            name="description"
            className="form-control"
            value={tour.description}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
        </div>

        <div className="d-flex gap-2">
          <button className="btn btn-success" type="submit">
            {id ? "Sửa" : "Thêm mới"}
          </button>

        
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleCancel}
          >
            Hủy
          </button>
        </div>
      </form>
    </div>
  );
}

export default TourForm;
