import { Content } from "../components/Content";
import "../components/Card.css";
export const Card = ({ subjectName, code, faculty }) => {
  return (
    <Content>
      <div className="super-container">
        <div className="small-container">
          <h2> {subjectName}</h2>
          <p className="codigo"> {code}</p>
          <h3> {faculty}</h3>
        </div>
        <div>
          <button className="button-container">VER</button>
        </div>
      </div>
    </Content>
  );
};
