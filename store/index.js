import Vuex from 'vuex'
import { firebaseMutations, firebaseAction } from 'vuexfire'
import firebase from '~/service/firebase'
const db = firebase.database()
const chatRef = db.ref("chat")

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      me: '',
      chatContents: []
    }),
    mutations: {
      ...firebaseMutations,
      SET_ME(state, name){
        state.me = name
      }
    },
    actions:{
      INIT_CHAT: firebaseAction(({ bindFirebaseRef,unbindFirebaseRef }) => {
        console.log(chatRef)
        // bindFirebaseRef('chatContents', chatRef).then(data => console.log(data))
      }),
      UPDATE_CHAT_CONTENTS: firebaseAction(({state}, text) => {
        chatRef.set({
          name: state.me,
          text,
          createdAt: '11月 24日 19:00:00'
        });
      }),
    }
  })
}

export default createStore