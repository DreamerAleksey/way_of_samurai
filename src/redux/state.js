import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state : {
        profilePage: {
            posts : [
                {id: 1, message: 'Hi, how are you?', likesCount: 0},
                {id: 2, message: '1231231231', likesCount: 23},
                {id: 3, message: 'Fine thanks and you?', likesCount: 26}
            ],
            newPostText: 'some message'
        },
        dialogsPage : {
            dialogs: [
                {id: 1, name: 'Vasya'},
                {id: 2, name: 'Andry'},
                {id: 3, name: 'Petr'}
            ],
            messages : [
                {id: 1, message: 'Hi'},
                {id: 2, message: '1231231231'},
                {id: 3, message: 'asdasdasdas'}
            ],
            newMessageBody: '',
        },
        sidebar: {}
    },
    getState () {
        return this._state;
    },
    _callSubscriber () {
        console.log('123');
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch (action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;