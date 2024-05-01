<template>
  <div class="date-picker">
    <VueDatePicker v-model="value" :format="format"></VueDatePicker>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { format } from "../utils/GalaxyTrainsUtils";

export default defineComponent({
  name: "GalaxyDatePicker",
  components: { VueDatePicker },
  props: {
    modelValue: Date,
  },
  emits: ['update:modelValue'],
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      }
    }
  },
  methods: {
    format
  },
});
</script>
