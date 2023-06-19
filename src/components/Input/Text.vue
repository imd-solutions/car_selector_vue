<template>
  <div class="input-text" :class="topCss">
    <label class="inputLabel" v-text="label"></label>
    <div :class="[cssClass, { 'has-icons-left': icon }]">
      <input
        ref="input"
        :id="selectID"
        :name="name"
        :placeholder="placeholder"
        :maxlength="maxlength"
        :type="type"
        class="input"
        :value="inputData"
        @input="updateValue(name, $event.target)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-facing-decorator";

@Component({
  name: "InputText",
  emits: ["input"],
})
export default class InputText extends Vue {
  @Prop({ type: String })
  public name!: string;

  @Prop({ type: [String, Number] })
  public inputData!: [String, Number];

  @Prop({ type: Number })
  public maxlength!: number;

  @Prop({ type: String })
  public placeholder!: string;

  @Prop({ type: String })
  public type!: string;

  @Prop({ type: [String, Number, Boolean] })
  public value!: [String, Number, Boolean];

  @Prop({ type: String })
  public label!: string;

  @Prop({ type: String })
  public topCss!: string;

  @Prop({ type: String })
  public cssClass!: string;

  @Prop({ type: String })
  public selectID!: string;

  @Prop({ type: String })
  public inputClass!: String;

  @Prop({ type: Object })
  public icon!: Icon;

  updateValue(name: string, eventTarget: any) {
    this.$emit("input", name, eventTarget.value);
  }
}
</script>
