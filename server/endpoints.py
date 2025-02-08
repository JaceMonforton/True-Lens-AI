from flask import Flask, jsonify, request
from flask_cors import CORS  # Import CORS
import main as mn  # Import your main logic

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})

@app.route('/api/evaluate_prompt', methods=['POST'])
def evaluate_prompt():
    data = request.get_json()
    model = data.get("model")  # LLM Model we want to evaluate
    prompt = data.get("prompt")  # Prompt we are evaluating

    if not model or not prompt:
        return jsonify({"error": "Model and prompt are required"}), 400

    # Call main() with the correct parameters
    evaluation_result, scores = mn.main(model, prompt)

    return jsonify({
        "evaluation_result": evaluation_result,
        "scores": scores
    })

if __name__ == '__main__':
    app.run(debug=True)
