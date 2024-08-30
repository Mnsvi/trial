document.addEventListener('DOMContentLoaded', function() {
    const startWorkoutButton = document.getElementById('startWorkout');
    const workoutPlanDiv = document.getElementById('workoutPlan');
    const profileForm = document.getElementById('profileForm');
    const progressTrackerDiv = document.getElementById('progressTracker');

    const workouts = {
        loseWeight: ['Running', 'Cycling', 'Jump Rope', 'HIIT'],
        buildMuscle: ['Push-ups', 'Pull-ups', 'Squats', 'Deadlifts'],
        stayFit: ['Yoga', 'Pilates', 'Walking', 'Swimming']
    };

    startWorkoutButton.addEventListener('click', function() {
        const goal = document.getElementById('goal').value;
        const selectedWorkouts = workouts[goal];
        let workoutHTML = '<ul>';
        selectedWorkouts.forEach(function(workout) {
            workoutHTML += `<li>${workout}</li>`;
        });
        workoutHTML += '</ul>';
        workoutPlanDiv.innerHTML = workoutHTML;
    });

    profileForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const weight = document.getElementById('weight').value;
        const goal = document.getElementById('goal').value;

        const profileSummary = `
            <h3>Profile Summary</h3>
            <p>Name: ${name}</p>
            <p>Age: ${age}</p>
            <p>Weight: ${weight} kg</p>
            <p>Goal: ${goal}</p>
        `;

        progressTrackerDiv.innerHTML = profileSummary;
    });
});
