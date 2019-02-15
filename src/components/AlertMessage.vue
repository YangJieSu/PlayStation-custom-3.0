<template>
  <div class="message-alert" :class="{ 'active': messages.length !== 0 }">
    <div class="alert alert-dismissible  mb-0 rounded-0" :class="'alert-' + item.status" v-for="(item, index) in messages" :key="index">
      {{ item.message }}
      <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="removeMessage(index)">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      messages: [],
    }
  },
  methods: {
    updateMeaasge(message, status) {
      const vm = this;
      const timestamp = Math.floor(new Date() / 1000);
      vm.messages.push({
        message,
        status,
        timestamp
      });
      vm.removeMessageWithTiming(timestamp);
    },
    removeMessage(i) {
      const vm = this;
      vm.messages.splice(i, 1);
    },
    removeMessageWithTiming(timestamp) {
      const vm = this;
      setTimeout(() => {
        vm.messages.forEach((item, index) => {
          if(item.timestamp == timestamp) {
            vm.messages.splice(index, 1);
          }
        });
      }, 1500);
    }
  },
  created() {
    const vm = this;
    vm.$bus.$on('message:push', (message, status = 'warning') => {
      vm.updateMeaasge(message, status);
    });
  },
}
</script>
