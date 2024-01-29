const complimentBtn = document.querySelector("#complimentButton");
const fortuneBtn = document.querySelector('#fortuneButton');
const petBtn = document.querySelector('#petNameButton');
const numberBtn = document.querySelector('#luckyNumber');
const form = document.querySelector('#feedbackForm');

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

// add feature to get a pet name suggestion based on the type of pet with a URL parameter.
const getPetName = () => {
    const petType = prompt("Provide type: cat or dog? (Optional)");

    // define URL based on prompt response
    const URL = petType ? `http://localhost:4000/api/pet/${petType}` : `http://localhost:4000/api/pet/`;

    axios.get(URL)
        .then(res => {
            const data = res.data;
            alert(data);
        })
};

//add feature to get a lucky number
const getNumber = () => {
    axios.get("http://localhost:4000/api/number/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
}

// axios POST request for the contents of the form
const postFeedback = (content) => {
    axios.post("http://localhost:4000/api/feedback", {"feedback" : content})
        .then(res => {
            const data = res.data;
            alert(data);
        })
}

complimentBtn.addEventListener('click', getCompliment);
fortuneBtn.addEventListener('click', getFortune); 
petBtn.addEventListener('click', getPetName); //feature 2
numberBtn.addEventListener('click', getNumber); //feature 3

//feature 4
form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    //getter
    const formInput = document.querySelector('#input');
    const content = formInput.value;

    //call axios post funciton
    postFeedback(content)
});