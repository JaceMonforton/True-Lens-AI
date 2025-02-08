# This file is for communication of the ML model and LLM's API's
import requests
import os
import bias_detection

def submitPromptForEval(model, prompt):
    if model.lower() == "openai":
        open_Ai_Return = submitPromptForEvalOpenAI(prompt)
        return open_Ai_Return

# OPEN AI CALL for EVALUATION
def submitPromptForEvalOpenAI(prompt):
    print("Open AI Response:")
    print("----------------------------------")
    # Accessing the OPENAI API for completions (returning responses)
    url = "https://api.openai.com/v1/chat/completions"

    # Specifying the key and autorization
    headers = {"Authorization": f"Bearer {os.environ['Api Key OpenAi']}"}

    # Specify the data to be sent to the API
    data = {
        "messages": [{"role": "user", "content": prompt}],
        "model": "gpt-4o-mini"  
    }

    # Send post request using headers and data for evaluation
    response = requests.post(url, headers=headers, json=data)

    # Print and return only the response within the choices[0] > message > content
    print(response.json()["choices"][0]["message"]["content"])
    return response.json()["choices"][0]["message"]["content"]
