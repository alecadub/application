<template>
  <div>
    <table class="table-auto m-auto">
      <caption></caption>
      <thead>
        <tr>
          <th id="business" class="lt-grey p-3">Business Hours</th>
          <template v-for="availability in availabilities">
            <th :id="availability" class="lt-grey p-3">
              {{ availability.weekday }}
            </th>
          </template>
        </tr>
      </thead>
      <tr>
        <td class="lt-grey p-3">Opening Hours</td>
        <template v-for="availability in availabilities">
          <td class="lt-grey p-3">
            {{ formatAvailability(availability.opening_hours) }}
          </td>
        </template>
      </tr>
      <tr>
        <td class="lt-grey p-3">Closing Hours</td>
        <template v-for="availability in availabilities">
          <td class="lt-grey p-3">
            {{ formatAvailability(availability.closing_hours) }}
          </td>
        </template>
      </tr>
    </table>
  </div>
</template>

<script>
import JetButton from "@src/Jetstream/Button";
import JetInput from "@src/Jetstream/Input";
import JetActionMessage from "@src/Jetstream/ActionMessage";
import JetFormSection from "@src/Jetstream/FormSection";
import JetInputError from "@src/Jetstream/InputError";
import JetLabel from "@src/Jetstream/Label";
import JetDropdown from "@src/Jetstream/Dropdown";
import JetDropdownLink from "@src/Jetstream/DropdownLink";
import JetNavLink from "@src/Components/Navbar/NavLink";
import JetSecondaryButton from "@src/Jetstream/SecondaryButton";
import moment from "moment";
import axios from "axios";

export default {
  components: {
    JetButton,
    JetInput,
    JetFormSection,
    JetActionMessage,
    JetInputError,
    JetLabel,
    JetDropdown,
    JetDropdownLink,
    JetNavLink,
    JetSecondaryButton
  },

  props: {
    room: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      availabilities: []
    };
  },
  methods: {
    moment: function(date) {
      return moment(date).format("HH:mm:ss");
    },
    formatAvailability(date) {
      return moment(date, "HH:mm:ss").format("HH:mm");
    }
  },
  watch: {
    room(room) {
      this.availabilities = room?.availabilities;
    }
  }
};
</script>
