import questionModel from "../model/QuestionModel";


class QuestionsListPresenter {
    onCreateQuestion() {
        window.location.assign("#/create-question");
    }    
}

const questionsListPresenter = new QuestionsListPresenter();

export default questionsListPresenter;