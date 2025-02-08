from flask import Flask, jsonify, request
from flask_cors import CORS
import main as mn  # Your model logic

app = Flask(__name__)
CORS(app)  # Allow frontend to communicate with Flask

@app.route('/api/evaluate_prompt', methods=['POST'])
def evaluate_prompt():
    data = request.get_json()
    model = data.get("model")
    prompt = data.get("prompt")

    if not model or not prompt:
        return jsonify({"error": "Model and prompt are required"}), 400

    evaluation_result = mn.main(model, prompt)  # Call your evaluation function

    return jsonify({"evaluation_result": evaluation_result})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
