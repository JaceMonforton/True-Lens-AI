import app as ap
import bias_detection as bd

# Main logic for the server and the bias detection
def main(model, prompt):
    print("Main function started")
    return_LLM_response = ap.submitPromptForEval(model, prompt)

    returned_scores = None  

    if return_LLM_response != "Model not found":
        returned_scores = bd.detectBias(return_LLM_response)

    print("Returning prompts and scores..")
    return return_LLM_response, returned_scores