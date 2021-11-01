SELECT * FROM users 
    JOIN caregivers ON users.id = caregivers.user_id
    JOIN caregiver_schedule ON caregivers.id = caregiver_schedule.caregiver_id 
    JOIN caregiver_patient ON caregivers.id = caregiver_patient.caregiver_id
    JOIN patients ON caregiver_patient.patient_id = patients.id
    WHERE caregiver_schedule.week_day = 1
    AND caregiver_schedule.from_time <= 600
    AND caregiver_schedule.to_time > 600
    AND EXISTS (SELECT * FROM caregiver_patient WHERE patient_id IN (1) AND caregiver_id=caregivers.user_id);