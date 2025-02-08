# This file is for communication of the ML model and LLM's API's
import requests
import os
import bias_detection

def submitPromptForEval(model, prompt):
    if model.lower() == "openai":
        open_Ai_Return = submitPromptForEvalOpenAI(prompt)
        return open_Ai_Return
    elif model.lower() == "gemini":
        gemini_Return = submitPromptForEvalGemini(prompt)
        return gemini_Return
    elif model.lower() == "deepseek":
        deepseek_Return = submitPromptForEvalDeepSeek(prompt)
        #return deepseek_Return


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

def submitPromptForEvalGemini(prompt):
    print("Gemini Response:")
    print("----------------------------------")
    # Accessing the GEMINI API for completions (returning responses)
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={os.environ['GEMINI_API_KEY']}"

    headers = {
        "Content-Type": "application/json"
    }

    data = {
        "contents": [
            {
                "parts": [
                    {"text": prompt}
                ]
            }
        ]
    }

    # Send post request using headers and data for evaluation
    response = requests.post(url, headers=headers, json=data)

    # Access the response from the API text
    response = response.json()['candidates'][0]['content']['parts'][0]['text']

    # Print and return only the response
    print(response)
    return response

def submitPromptForEvalDeepSeek(prompt):
    print("DeepSeek Response:")
    print("----------------------------------")
    # Accessing the DeepSeek API for completions (returning responses)

    response = requests.post(
        url="https://openrouter.ai/api/v1/chat/completions",
        headers={
            "Authorization": f"Bearer {os.environ['OpenRouter']}",
            "Content-Type": "application/json",
        },
        json={
            "model": "deepseek/deepseek-r1",
            "messages": [
            {
                "role": "user",
                "content": "What is the meaning of life?"
            }
            ],
        }
    )
    print(response.json()["choices"][0]["message"]["content"])