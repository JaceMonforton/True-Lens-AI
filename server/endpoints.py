
from flask import Flask, jsonify, request
import main as mn

app = Flask(__name__)

# Endpoint to handle the prompt evaluation
@app.route('/api/evaluate_prompt', methods=['POST'])
def evaluate_prompt(model, prompt):
    # Get the model and prompt from the request
    data = request.get_json()
    model = data.get("model") # LLM Model we want to evaluate
    prompt = data.get("prompt") # Prompt we are evaluating
    
    # Error catching for missing data from frontend
    if not model or not prompt:
        return jsonify({"error": "Model and prompt are required"}), 400
    
    # Call the existing function to submit the prompt for evaluation
    evaluation_result = mn.main(model, prompt)
    
    return jsonify({"evaluation_result": evaluation_result})

if __name__ == '__main__':
    app.run(debug=True)
