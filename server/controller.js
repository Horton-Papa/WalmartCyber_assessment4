module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req,res) => {
        const fortunes = [
            "Play lotto today",
            "You will meet someone special today",
            "There will be rain in the afternoon",
            "Keep your eyes open for something extraordinary",
            "It might be good to take the alternate route today"
        ];

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },

    getPetName: (req,res) => {
        const petNames = {
            dog: "shnoop",
            cat: "whisky"
        }

        // pet type from request
        // destructure the request from the URL assign pet type to the category
        const { category: petType } = req.params;

        let randomIndex = Math.floor(Math.random() * Object.values(petNames).length);

        let petName = petType ? petNames[petType] : Object.values(petNames)[randomIndex];

        res.status(200).send(`Your pet's suggested name is ${petName}`);
    },

    getNumber: (req,res) => {
        let randomNumber = Math.floor(Math.random() * 11 ); // 0 - 10

        res.status(200).send(`Your random integer between 0 and 10 (inclusive) is ${randomNumber}.`);
    },

    postFeedback: (req,res) => {
        const { feedback } = req.body;

        // NTS: I cannot seem to get this part to work. ASk on Wed
        if (!feedback) {
            return res.status(400).send(`Cannot press submit on blank feedback.`);
        }

        res.status(200).send(`Thank you for providing the following feedback: "${feedback}"`);
    }


}