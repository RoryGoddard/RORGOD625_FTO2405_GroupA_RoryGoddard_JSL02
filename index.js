const welcomeMessage = () => {
    const today = new Date().toDateString();
    document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
welcomeMessage();

const displayWorkoutRoutine = () => {
    const workoutInput = document.querySelector('#workoutInput').value;
    const workoutList = document.querySelector('#workoutList');
    const newWorkout = document.createElement('li');
    newWorkout.textContent = workoutInput;
    workoutList.appendChild(newWorkout);
};

document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);

// ⚠️⚠️⚠️ Lesson 3: Creating and Removing Elements ⚠️⚠️⚠️
// Function to add new fitness goals and remove completed ones
// NOW LET'S DEBUG TO PREVENT DUPLICATE GOALS FROM BEING SUBMITTED 🚀

const addNewGoal = () => {
    // Define variables to reference the goalinput, to create a new goal li, and a remove button
    const goalInputEl = document.querySelector("#goalInput")
    const newGoalEl = document.createElement("li")
    const removeBtnEl = document.createElement("button")
    
    // Remove button logic
    removeBtnEl.textContent = "Remove"
    removeBtnEl.classList.add("remove-button")
    removeBtnEl.addEventListener("click", function() {
        goalList.removeChild(newGoalEl)
        this.remove()
    })

    // New Goal logic
    newGoalEl.textContent = goalInputEl.value
    for (let i = 0; i < goalList.querySelectorAll("#goalList li").length; i++) {
        if (goalList.querySelectorAll("#goalList li")[i].textContent === newGoalEl.textContent) {
            alert("This goal already exists.")
            return
        }
    }

    goalList.appendChild(newGoalEl)
    goalList.appendChild(removeBtnEl)
    goalInputEl.value = ""
};

// Add event listener to the goal submit button
document.querySelector('#submitGoal').addEventListener('click', addNewGoal);

/// Add functionality to prevent negative glasses of water
let waterIntake = 0;
const updateWaterIntake = (change) => {
    let waterConsumedDivEl = document.querySelector("#waterIntakeDisplay")
    let waterText = waterConsumedDivEl.textContent
    let glasses = Number(Array.from(waterText)[0])
    if (change < 0 && glasses === 0) {
        return
    } else {
        waterIntake += change;
        document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
    }
};

document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));

const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Updated workout progress...";
    document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress...";
};

updateProgressCharts();

const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

document.querySelector('#themeToggle').addEventListener('click', toggleTheme);

const submitMealPlan = (event) => {
    event.preventDefault(); 
    alert('Meal plan submitted successfully! 🍴');
};

document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);
