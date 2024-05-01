<template>
  <div class="book-train">
    <h1>Galaxy Trains</h1>
    <h2>Ride green between planets. 💫</h2>

    <radio-button-group
      @ticket-type-changed="ticketTypeChanged"
    ></radio-button-group>

    <GalaxyDatePicker v-model="startDate"></GalaxyDatePicker>
    <GalaxyDatePicker
      v-if="ticketType === 'Return'"
      v-model="endDate"
    ></GalaxyDatePicker>

    <p v-if="startDate">
      <strong>Out trip</strong> {{ format(startDate) }}<br />
      <span v-if="endDate"
        ><strong>Return trip</strong> {{ format(endDate) }}</span
      >
    </p>

    <button class="book-button" :disabled="!isValid">
      {{ isValid ? "Book" : "Can't book until valid" }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GalaxyDatePicker from "./GalaxyDatePicker.vue";
import RadioButtonGroup from "./RadioButtonGroup.vue";
import { GalaxyTrainsData } from "../types/GalaxyTrainsData";
import { validate, format } from "../utils/GalaxyTrainsUtils";

export default defineComponent({
  name: "MainComponent",
  components: { GalaxyDatePicker, RadioButtonGroup },
  data(): GalaxyTrainsData {
    return {
      ticketType: "Single",
      startDate: null,
      endDate: null,
      isValid: false,
    };
  },
  watch: {
    startDate() {
      this.isValid = validate(this.startDate, this.endDate, this.ticketType);
    },
    endDate() {
      this.isValid = validate(this.startDate, this.endDate, this.ticketType);
    },
  },
  computed: {
    // Currently not used
    queryParams() {
      const params = new URLSearchParams(window.location.search);
      return {
        departure: params.get("departure"),
        return: params.get("return"),
      };
    },
  },
  methods: {
    ticketTypeChanged(type) {
      if (type === "Single") {
        this.endDate = null;
      }
      this.ticketType = type;
      this.isValid = validate(this.startDate, this.endDate, this.ticketType);
    },
    validate,
    format,
  },
  mounted() {
    console.log(this.queryParams);
  },
});
</script>
