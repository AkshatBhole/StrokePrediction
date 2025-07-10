const PredictionCard = ({ data }) => (
  <div className="card">
    <h3>{data.gender}, Age {data.age}</h3>
    <p><strong>Prediction:</strong> {data.prediction === 1 ? "High Risk" : "Low Risk"}</p>
    <p><strong>Probability:</strong> {(data.probability * 100).toFixed(2)}%</p>
  </div>
);

export default PredictionCard;
