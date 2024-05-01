<template>
  <div class="radio-button-group">
    <div class="radio-group">
      <input
        type="radio"
        id="single"
        name="single_or_return"
        :value="'Single'"
        v-model="ticketType"
        @change="this.$emit('ticketTypeChanged', this.ticketType)"
      />
      <label for="single">Single</label>
    </div>

    <div class="radio-group">
      <input
        type="radio"
        id="return"
        name="single_or_return"
        :value="'Return'"
        v-model="ticketType"
        @change="this.$emit('ticketTypeChanged', this.ticketType)"
      />
      <label for="return">Return</label>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RadioButtonGroup",
  components: {},
  data() {
    return {
      ticketType: "Single",
    };
  },
});
</script>
