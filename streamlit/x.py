from joblib import load
import pandas as pd
import streamlit as st


skillMapper = ['C/C++', 'CSS', 'Cloud Computing', 'Data Mining', 'Data Science', 'Deep Learning ', 'Google Drive', 'HTML', 'Java', 'Java Script', 'MS Office', 'MY SQL', 'Machine Learning', 'Open Source', 'Oracle', 'PHP', 'Python', 'SQL', 'Spreadsheets', 'Word Press']
expertiseMapper = ['App Developer', 'Asset Management', 'Customer Relations', 'Customer Service', 'Data Analyst', 'Data Scientist', 'Frontend Developer', 'Human Resources', 'ML engineer', 'Quality Assurance', 'Research and Development', 'Sales and Marketing', 'Tech Support', 'Test Engineer', 'Web Developer']


model = load('model.joblib')


st.title("Welcome to Mentor Matching :)")

expertise = st.selectbox("Area of expertise", expertiseMapper)

skill1 = st.selectbox("Skill 1", skillMapper)

skill2 = st.selectbox("Skill 2", skillMapper)

skill3 = st.selectbox("Skill 3", skillMapper)

def predict():
    test_data = [expertiseMapper.index(expertise), skillMapper.index(skill1), skillMapper.index(skill2), skillMapper.index(skill3)]
    test_data = pd.DataFrame(test_data)
    test_data_t = test_data.transpose()
    if(len(model.predict(test_data_t)[0])!=0):
        st.success('Suggested Mentor: ' + str(model.predict(test_data_t)[0]))
    else:
        st.error('No Mentor Found')



trigger = st.button('Predict', on_click=predict)


