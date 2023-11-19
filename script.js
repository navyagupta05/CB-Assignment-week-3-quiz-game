// Questions that will be asked
const Questions = [{
	q: "The answer is really big.",
	a: [{ text: "THE ANSWER", isCorrect: true },
	{ text: "really big", isCorrect: false },
	{ text: "An elephant", isCorrect: false },
	{ text: "Bhupendra Jogi", isCorrect: false }
	]

},
{
	q: "A farmer has 17 goats. All of them but 8 die. How many goats are alive?",
	a: [{ text: "9", isCorrect: false, isSelected: false },
	{ text: "17", isCorrect: false },
	{ text: "25", isCorrect: false },
	{ text: "8", isCorrect: true }
	]

},
{
	q: " How do you organize a space party?",
	a: [{ text: "Hire a professional party planner", isCorrect: false },
	{ text: "Call NASA for advice", isCorrect: false },
	{ text: "You planet", isCorrect: true },
	{ text: "Hire an alien DJ", isCorrect: false }
	]

},
{
	q: "Why did the math book look sad?",
	a: [{ text: "Because it had too many problems", isCorrect: false, isSelected: false },
	{ text: "Because it couldn't find its x", isCorrect: false },
	{ text: "Because it lost its numbers", isCorrect: false },
	{ text: "Because it was too thick", isCorrect: true }
	]

},
{
	q: "Why don't skeletons fight each other?",
	a: [{ text: "They're dead tired", isCorrect: false, isSelected: false },
	{ text: "They're all bone and no muscle", isCorrect: false },
	{ text: "They're afraid of their own kind", isCorrect: false },
	{ text: "They don't have the guts", isCorrect: true }
	]

},


]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}
