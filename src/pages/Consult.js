import { Content } from "../components/Content";
import React, { useState } from "react";
import Select from "../components/Select";

export const Consult = () => {
  const inquirie = [
    {
      semester: "2021-1",
      faculty: "Ingenieria",
      subject_matter: ["Cálculo diferencial", "Introducción", "Geometria"],
    },
    {
      semester: "2023-1",
      faculty: "Medicina",
      subject_matter: ["Cálculo diferencial", "Introducción", "Geometria"],
    },
    {
      semester: "2022-1",
      faculty: "Artes",
      subject_matter: ["Cálculo diferencial", "Introducción", "Geometria"],
    },
  ];
  const [selectedSemester, setSelectedSemester] = useState(-1);
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const subjectMatterOptions = inquirie[selectedFaculty]?.subject_matter || [];
  const handlerSemesterChange = (e) => {
    const option = e.target.value;
    console.log(option);
    setSelectedSemester(option);
  };

  const handleFacultyChange = (e) => {
    const option = e.target.value;
    setSelectedFaculty(option);
  };

  return (
    <Content>
      <div className="container">
        <p className="title">Consulta de Evaluaciones</p>
        <div className="container2">
          <h3 style={{ marginRight: "10px" }}>Semestre</h3>
          <Select
            options={inquirie.map((item, i) => ({
              value: i,
              label: item.semester,
            }))}
            onChange={handlerSemesterChange}
          />
        </div>
        <div className="container2">
          <h3 style={{ marginRight: "10px" }}>Facultad</h3>
          <Select
            options={inquirie.map((item, i) => ({
              value: i,
              label: item.faculty,
            }))}
            onChange={handleFacultyChange}
          />
        </div>
        <div className="container2">
          <h3 style={{ marginRight: "10px" }}>Materia</h3>
          <Select
            options={subjectMatterOptions.map((item, i) => ({
              value: i,
              label: item,
            }))}
            onChange={() => {}}
          />
        </div>
        <button>Buscar</button>
      </div>
    </Content>
  );
};
