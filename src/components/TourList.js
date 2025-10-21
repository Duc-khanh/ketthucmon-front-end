import React, { useEffect, useState } from "react";
import api from "../services/api";
import { Link, useNavigate } from "react-router-dom";

function TourList() {
  const [tuors, setTuors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTuors();
  }, []);

  const fetchTuors = async () => {
    const res = await api.get("/tuors");
    setTuors(res.data);
  };

  const goToDeletePage = (id) => {
    navigate(`/delete/${id}`);
  };

  return (
    <div className="container mt-4">
      <h2>Danh sách Tour du lịch</h2>
      <Link to="/add" className="btn btn-success mb-3">Thêm</Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Tên</th>
            <th>Giá</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {tuors.map((t) => (
            <tr key={t.id}>
              <td>{t.id}</td>
              <td>
                <Link to={`/tuors/${t.id}`} className="text-decoration-none text-primary">
                  {t.title}
                </Link>
              </td>
              <td>{t.price}</td>
              <td>
                <Link to={`/edit/${t.id}`} className="btn btn-primary btn-sm me-2">Edit</Link>
                <button className="btn btn-danger btn-sm" onClick={() => goToDeletePage(t.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TourList;
