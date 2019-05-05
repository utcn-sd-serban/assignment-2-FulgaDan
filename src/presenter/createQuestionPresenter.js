import questionModel from "../model/QuestionModel";


class CreateQuestionPresenter {
    onCreate() {
        questionModel.addQuestion(questionModel.state.newQuestion.title, questionModel.state.newQuestion.text, 
            questionModel.state.newQuestion.author, questionModel.state.newQuestion.date, questionModel.state.newQuestion.tags );
        questionModel.changeNewQuestionProperty("title", "");
        questionModel.changeNewQuestionProperty("text", "");
        questionModel.changeNewQuestionProperty("author", "");
        questionModel.changeNewQuestionProperty("date", "");
        questionModel.changeNewQuestionProperty("tags", "");
        window.location.assign("#/question-list");
    }
    onChange(property, value){
        questionModel.changeNewQuestionProperty(property, value);
    }
}

const createQuestionPresenter = new CreateQuestionPresenter();

export default createQuestionPresenter;