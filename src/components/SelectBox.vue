<template>
  <div class="card">
    <InputText
      v-if="content.inputType === 'text'"
      :name="content.name"
      :label="content.label"
      :class="content.cssClass"
      :placeholder="content.placeholder"
      @input="updateInputFormData"
      :inputData="form[content.name]"
      v-model="form[content.name]"
    />
    <InputSelect
      v-else
      :options="content.options"
      :name="content.name"
      :selectID="content.id"
      :selectName="content.name"
      :placeholder="content.placeholder"
      :label="content.label"
      :topCss="content.cssClass"
      v-model="form[content.name]"
      :inputData="form[content.name]"
      @input="updateSelectFormData"
    />
    <EventButton
      :buttons="content.buttons"
      :data="form"
      :disabled="btnDisable"
      @submitForm="processForm"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-facing-decorator";
import InputText from "@components/Input/Text.vue";
import InputSelect from "@components/Input/Select.vue";
import EventButton from "@components/Event/Button.vue";

@Component({
  name: "SelectBox",
  emits: ["updateSystemName", "updateResults", "updateBtn", "completeResults"],
  components: {
    InputText,
    InputSelect,
    EventButton,
  },
})
export default class SelectBox extends Vue {
  @Prop({ type: Object })
  public content?: any;
  @Prop({ type: Boolean })
  public btnDisable?: boolean;

  form: any = {};

  updateSelectFormData(name: string, data: any) {
    this.form[name] = data;
    this.$emit("updateResults", this.form);
  }

  updateInputFormData(name: string, data: any) {
    this.form[name] = data;
    this.$emit("updateResults", this.form);
    this.$emit("updateBtn", true);
  }

  processForm(data: any) {
    this.$emit("completeResults", true);
  }
}
</script>
