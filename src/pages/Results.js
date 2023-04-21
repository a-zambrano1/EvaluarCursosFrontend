import { Content } from "../components/Content";
import { Card } from "../components/Card";
import "../components/Card.css";
import { useState } from "react";
export const Results = () => {
  const [results, setResults] = useState([
    {
      subjectName: "Cálculo",
      code: "COD.38714",
      faculty: "Facultad de Ingeniería",
    },
    {
      subjectName: "Ecuaciones",
      code: "COD.38754",
      faculty: "Facultad de Ingeniería",
    },
    {
      subjectName: "Inglés",
      code: "COD.38455",
      faculty: "Facultad de Ingeniería",
    },
  ]);
  return (
    <Content>
      <div className="container1">
        {results.map((result, index) => (
          <Card
            key={index}
            subjectName={result.subjectName}
            code={result.code}
            faculty={result.faculty}
          />
        ))}
      </div>
    </Content>
  );
};
