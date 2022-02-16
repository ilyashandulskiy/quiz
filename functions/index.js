const cors = require('cors')({origin: true});
const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.getQuizList = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        const ref = admin.database().ref("quiz");
        const quizes = [];

        ref.once('value', snap => {

            Object.keys(snap.val()).forEach(function(key) {
                const quiz = snap.val()[key];
                quizes.push({ "title": quiz.title, "length": quiz.questions.length, "id": key })
            });
        })
        .then(() => response.send(JSON.stringify(quizes)))
    });
});

exports.getQuiz = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        const ref = admin.database().ref("quiz/" + request.query.id);

        ref.once('value', snap => {

            if (snap.val()) {
                response.send(snap.val())
            } else {
                response.send('error')
            }
        })
    });
});

exports.newQuiz = functions.https.onRequest((request, response) => {
    cors(request, response, () => {

        const newId = Math.round(Math.random() * 1000) + '';

        const ref = admin.database().ref("quiz/" + newId);

        ref.set(request.body, () => response.send(newId))
    });
});