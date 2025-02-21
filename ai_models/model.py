from fastapi import FastAPI
import joblib

app = FastAPI()

model = joblib.load("disease_prediction_model.pkl")

@app.post("/predict")
async def predict(data: dict):
    symptoms = data["symptoms"]
    prediction = model.predict([symptoms])
    return {"disease": prediction[0]}
