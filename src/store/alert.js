export default {
  namespaced: true,
  strict: true,
  state: {
    messages: [],
  },
  mutations: {
    ADDMESSAGE(state, payload) {
      state.messages.push(payload);
    },
    REMOVEMESSAGE(state, payload) {
      state.messages.splice(payload, 1);
    },
  },
  actions: {
    updateMeaasge(context, { message, status = 'danger' }) {
      const timestamp = Math.floor(new Date() / 1000);
      context.commit('ADDMESSAGE', {
        message,
        status,
        timestamp,
      });
      context.dispatch('removeMessageWithTiming', timestamp);
    },
    removeMessage(context, i) {
      context.commit('REMOVEMESSAGE', i);
    },
    removeMessageWithTiming(context, timestamp) {
      setTimeout(() => {
        context.state.messages.forEach((item, index) => {
          if (item.timestamp === timestamp) {
            context.commit('REMOVEMESSAGE', index);
          }
        });
      }, 3000);
    },
  },
  getters: {
    messages(state) {
      return state.messages;
    },
  },
};
