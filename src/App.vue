<template>
  <SelectBox
    v-for="(content, index) in fields"
    :key="index"
    :content="content"
    class="mb-3"
    :btnDisable="btnStatus"
    @updateBtn="updateBtn"
    @updateResults="updateResults"
    @completeResults="completeResults"
  />
  <div v-if="results.completed" class="card">
    <div class="card-content">
      <div class="content">
        <h3>Results:</h3>
        <p>
          <template v-if="results.make === 'audi'">I have an</template>
          <template v-else>I have a</template>
          {{ results.make }} and the colour is {{ results.colour }}.
        </p>
        <p v-if="results.colour === 'red'">THE CAR IS RED! NICE!!</p>
        <p>REF: {{ results.code }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-facing-decorator";
import SelectBox from "@components/SelectBox.vue";

@Component({
  name: "App",
  components: {
    SelectBox,
  },
})
export default class App extends Vue {
  btnStatus: boolean = true;
  results: any = {};
  fields: any = [
    {
      id: "carMake",
      label: "Make:",
      cssClass: "column is-10",
      name: "make",
      inputType: "select",
      options: [
        { id: "audi", name: "Audi" },
        { id: "bmw", name: "BMW" },
        { id: "vauxhal", name: "Vauxhal" },
        { id: "mercedes", name: "Mercedes" },
        { id: "peugeot", name: "Peugeot" },
        { id: "renault", name: "Renault" },
      ],
      placeholder: "Please select a car make",
    },
    {
      id: "carColour",
      label: "Colour:",
      cssClass: "column is-10",
      name: "colour",
      inputType: "select",
      options: [
        { id: "blue", name: "Blue" },
        { id: "red", name: "Red" },
        { id: "black", name: "Black" },
        { id: "orange", name: "Orange" },
      ],
      placeholder: "Please select a car colour",
    },
    {
      id: "carCode",
      label: "Code:",
      cssClass: "column is-10",
      name: "code",
      inputType: "text",
      buttons: [
        {
          title: "Done",
          id: "doneNextBtn",
          topCss: "buttons is-right",
          css: "is-default modal-default-button",
          disabled: this.btnStatus,
          method: {
            name: "submitBtn",
            action: "completeFormAction",
          },
        },
      ],
    },
  ];

  updateResults(data: any) {
    let entries = Object.entries(data);

    entries.map(([key, value] = entry) => {
      this.results[key] = value;
    });
  }

  updateBtn() {
    this.btnStatus = false;
  }

  completeResults(bool: boolean) {
    this.results.completed = true;
  }
}
</script>
