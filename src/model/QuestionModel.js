import {EventEmitter} from 'events'

class QuestionModel extends EventEmitter {
    constructor(){
        super();
        this.state = {
            questions: [{
                title: "How to dispatch an action?",
                text: "I need to dispatch an action using Redux",
                author: "Dave",
                date: "04/05/2019",
                tags: ["React ", "React-Native"]
            },
            {
                title: "maven dependency failing",
                text: "maven fails to install",
                author: "Anna",
                date: "03/05/2019",
                tags: ["Java ", "Maven"]
            }],

            newQuestion: {
                title: "",
                text: "",
                author: "",
                date: "",
                tags: []
            },

            indexFilter: -1
        };
    }

    addQuestion(title, text, author, date, tags){
        this.state = {
            ...this.state,
            questions: this.state.questions.concat([{
                title: title,
                text: text,
                author: author,
                date: date,
                tags: tags
            }])
        };
        this.emit("change", this.state);
    }

    changeNewQuestionProperty(property, value){
        this.state = {
            ...this.state,
            newQuestion: {
                ...this.state.newQuestion,
                [property]: value
            }
        };
        this.emit("change", this.state);
    }

    changeIndexFilter(index){
        this.state = {
            ...this.state,
            indexFilter: index
        };
        this.emit("change", this.state);
    }

    changeTitleFilter(value ){
        this.state = {
            ...this.state,
            searchTitle: value
            }
        
        this.emit("change", this.state);
    }
}

const questionModel = new QuestionModel();
export default questionModel;