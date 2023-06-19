<template>
  <section :class="{ columns: btnSide, 'is-multiline': multiline }">
    <div v-for="(btn, index) in buttons" :class="btn.topCss" :key="index">
      <button
        v-if="btn.hide !== false"
        :key="index"
        :title="btn.btnTitle ? btn.btnTitle : btn.title"
        @click.prevent="
          processMethods(
            btn.method.name,
            btn.method.action,
            btn.method?.additional
          )
        "
        :id="btn.id"
        :class="['button', btn.css, btn.size, btn.width]"
        :disabled="disabled"
      >
        <i v-if="btn.icon" :class="['fa', btn.icon]"></i>
        <span>{{ btn.title }}</span>
      </button>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-facing-decorator";

@Component({
  name: "Buttons",
  emits: ["submitForm"],
})
export default class Buttons extends Vue {
  @Prop({ type: Array })
  public buttons!: Button[];
  @Prop({ type: Boolean })
  public valid!: boolean;
  @Prop({ type: Boolean })
  public btnSide!: boolean;
  @Prop({ type: Boolean })
  public multiline!: boolean;
  @Prop({ type: String })
  public additionalCss!: string | null;
  @Prop({ type: Object })
  public data!: any | null;
  @Prop({ type: Boolean })
  public disabled!: boolean;

  // Process the function calls from the parent component.
  processMethods(
    function_name: string,
    function_action: string | undefined,
    additional_action: string | undefined
  ): void {
    (this as any)[function_name](function_action, additional_action);
  }

  submitBtn(action: string) {
    this.$emit("submitForm", action, this.data);
  }
}
</script>
