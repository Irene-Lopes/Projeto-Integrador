import json
import random

def load_questions_from_file(file_path):
    questions = []
    with open(file_path, 'r', encoding='utf-8') as file:
        for line in file:
            question_text, answers_text, correct_answer = line.strip().split('|')
            answers = answers_text.split(',')
            question = {
                'question': question_text,
                'answers': answers,
                'correct': correct_answer
            }
            questions.append(question)
    return questions

file_path = 'questions.txt'

questions_db = load_questions_from_file(file_path)

selected_questions = random.sample(questions_db, min(10, len(questions_db)))

with open('questions.json', 'w', encoding='utf-8') as json_file:
    json.dump(selected_questions, json_file, ensure_ascii=False, indent=4)

print("Perguntas geradas e salvas em 'questions.json'.")
