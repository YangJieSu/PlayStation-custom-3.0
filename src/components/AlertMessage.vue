<template>
  <div class="message-alert" :class="{ 'active': messages.length !== 0 }">
    <div
      class="alert alert-dismissible mb-0 rounded-0"
      :class="'alert-' + item.status"
      v-for="(item, index) in messages"
      :key="index"
    >
      {{ item.message }}
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
        @click="removeMessage(index)"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {};
  },
  methods: {
    removeMessage(i) {
      const vm = this;
      vm.$store.dispatch('alertModules/removeMessage', i);
    },
    removeMessageWithTiming(timestamp) {
      const vm = this;
      vm.$store.dispatch('alertModules/removeMessageWithTiming', timestamp);
    },
  },
  computed: {
    ...mapGetters('alertModules', ['messages']),
  },
  created() {},
};
</script>
