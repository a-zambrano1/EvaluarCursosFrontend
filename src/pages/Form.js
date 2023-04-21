import { useState } from "react";
import { Content } from "../components/Content";
import { AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router";
import { useMutation } from "react-query";
import { COURSE_SELECT_ROUTE } from "../middleware/constants";
import { sendForm } from "../middleware/fetchers";

const QUESTIONS = {
  q1: {
    aspect: "Materia: Importancia en el plan de estudios",
    question:
      "¿Cómo califica la importancia del curso dentro del plan de estudios?",
  },
  q2: {
    aspect: "Materia: Relación con los prerrequisitos",
    question:
      "¿Cómo considera que es la relación de la materia con sus prerrequisitos?",
  },
  q3: {
    aspect: "Materia: Actualidad",
    question:
      "¿Cómo evalúa la materia en cuánto a la actualidad y vigencia de sus temas?",
  },
  q4: {
    aspect: "Profesor: Manejo de evaluaciones",
    question:
      "¿Cómo evalúa la elaboración de evaluaciones y exámenes del profesor?",
  },
  q5: {
    aspect: "Profesor: Manejo de evaluaciones",
    question:
      "¿Cómo considera la objetividad del profesor a la hora de calificar?",
  },
  q6: {
    aspect: "Profesor: Relación con los estudiantes",
    question:
      "¿Cómo califica la disposición del profesor a atender dudas fuera del horario regular?",
  },
  q7: {
    aspect: "Profesor: Relación con los estudiantes",
    question:
      "¿Cómo considera que es el respeto y ecuanimidad con los estudiantes?",
  },
  q8: {
    aspect: "Profesor: Conocimientos",
    question:
      "¿Cómo califica el dominio sobre los temas explicados por parte del profesor?",
  },
  q9: {
    aspect: "Profesor: Conocimientos",
    question: "¿Como califica la seguridad de exposición del profesor?",
  },
  q10: {
    aspect: "Profesor: Conocimientos",
    question:
      "¿Cómo evalúa las respuestas a las preguntas e inquietudes de los estudiantes?",
  },
  feedback: {
    question: "¿Qué retroalimentación general tiene sobre el curso o profesor?",
  },
};

const FeedbackPage = ({ onEvaluation, onSend }) => {
  const [feedbackText, setFeedbackText] = useState("");

  return (
    <Content>
      <div className="form">
        <p className="form_aspect">Retroalimentación</p>
        <p className="form_question">
          ¿Por último, que comentarios y/o retroalimentación tienes con respecto
          a este curso o profesor?
        </p>
        <textarea
          value={feedbackText}
          rows={5}
          onChange={(e) => setFeedbackText(e.target.value)}
          placeholder="Escribe una retroalimentación"
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button className="form" onClick={() => onEvaluation("feedback", 0)}>
            <FontAwesomeIcon
              icon={faArrowLeftLong}
              style={{ marginRight: "12px" }}
            />
            Anterior
          </button>
          <button className="form" onClick={onSend}>
            Enviar
            <FontAwesomeIcon
              icon={faPaperPlane}
              style={{ marginLeft: "12px" }}
            />
          </button>
        </div>
      </div>
    </Content>
  );
};

const Question = ({ id, aspect, question, onEvaluation }) => {
  return (
    <Content>
      <div className="form">
        <p className="form_aspect">{aspect}</p>
        <p className="form_question">{question}</p>
        <div className="form_buttons">
          <button className="form" onClick={() => onEvaluation(id, 1)}>
            Muy malo
          </button>
          <button className="form" onClick={() => onEvaluation(id, 2)}>
            Malo
          </button>
          <button className="form" onClick={() => onEvaluation(id, 3)}>
            Regular
          </button>
          <button className="form" onClick={() => onEvaluation(id, 4)}>
            Bueno
          </button>
          <button className="form" onClick={() => onEvaluation(id, 5)}>
            Excelente
          </button>
        </div>

        <div
          style={{
            marginTop: "40px",
          }}
        >
          <button className="form" onClick={() => onEvaluation(id, 0)}>
            <FontAwesomeIcon
              icon={faArrowLeftLong}
              style={{ marginRight: "12px" }}
            />
            Anterior
          </button>
        </div>
      </div>
    </Content>
  );
};

export const Form = () => {
  function handleEvaluation(questionID, grade) {
    if (grade > 0) {
      setData({
        ...data,
        [questionID]: grade,
      });
    }

    const next_id_idx =
      Object.keys(QUESTIONS).indexOf(questionID) + (grade > 0 ? 1 : -1);
    if (next_id_idx >= 0) {
      const next_id = Object.keys(QUESTIONS)[next_id_idx];
      setCQ(next_id);
    } else {
      navigate(COURSE_SELECT_ROUTE);
    }
  }

  function handleSendForm() {
    sendFormMutation.mutate({
      formData: data,
      id: state.id,
    });
  }

  const { state } = useLocation();

  const [data, setData] = useState({
    q1: null,
    q2: null,
    q3: null,
    q4: null,
    q5: null,
    q6: null,
    q7: null,
    q8: null,
    q9: null,
    q10: null,
    feedback: null,
  });

  const [CQ, setCQ] = useState("q1");

  const navigate = useNavigate();

  const sendFormMutation = useMutation({
    mutationFn: sendForm,
  });

  return (
    <AnimatePresence mode="wait">
      {CQ === "feedback" ? (
        <FeedbackPage onEvaluation={handleEvaluation} onSend={handleSendForm} />
      ) : (
        <Question
          id={CQ}
          key={CQ}
          aspect={QUESTIONS[CQ].aspect}
          question={QUESTIONS[CQ].question}
          onEvaluation={handleEvaluation}
        />
      )}
    </AnimatePresence>
  );
};
