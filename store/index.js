import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      me: '',
      chatContents: []
    }),
    mutations: {
      SET_CHAT_CONTENTS (state) {
        let chatContents = []
        for (let i = 0; i < 10; i++) {
          chatContents.push({
            name: 'name',
            text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
            createdAt: '11月 24日 19:00:00'
          })
        }

        state.chatContents = chatContents
      },
      SET_ME(state, name){
        state.me = name
      }
    }
  })
}

export default createStore