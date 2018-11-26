import Vuex from 'vuex'
import { firebaseMutations, firebaseAction } from 'vuexfire'
import firebase from '~/service/firebase'
import moment from 'moment'
const db = firebase.database()
const chatRef = db.ref("/chat")

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      me: '',
      chatContents: []
    }),
    getters:{
      chatContents(state){
        state.chatContents.sort((left, right)=>{
          return moment(right.createdAt).diff(left.createdAt)
        })
        return state.chatContents
      }
    },
    mutations: {
      ...firebaseMutations,
      SET_ME(state, name){
        state.me = name
      }
    },
    actions:{
      INIT_CHAT: firebaseAction(({ bindFirebaseRef }) => {
        bindFirebaseRef('chatContents', chatRef)
      }),
      UPDATE_CHAT_CONTENTS: firebaseAction(({state}, {text}) => {
        chatRef.push({
          name: state.me,
          text,
          createdAt: moment().format("YYYY-MM-DD h:mm:ss")
        });
      }),
    }
  })
}

export default createStore