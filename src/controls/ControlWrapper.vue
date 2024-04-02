<template>
  <div v-if="visible" :id="id" :class="styles.control.root">
    <label :class="[styles.control.label, required ? styles.control.required : '']" :for="id + '-input'">
      {{ label }}
      <span v-if="showAsterisk" :class="styles.control.asterisk">*</span>
    </label>
    <div :class="styles.control.wrapper">
      <slot v-bind="{
    handleChange,
    inputValue
  }"></slot>
    </div>

    <!-- mostra erro se houver caso contrário mostra a descrição se estiver focado -->
    <p :class="styles.control.description ?? 'text-sm text-gray-500'">
      {{ showDescription ? description : null }}
    </p>
    <p :class="styles.control.error!=='error' ?styles.control.error: 'text-red-600 m-0'" role="alert">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script lang="ts">
import { isDescriptionHidden } from '@jsonforms/core';
import { defineComponent, PropType } from 'vue';
import { Styles } from '../styles';
import { Options } from '../util';
import { InputType, useField } from 'vee-validate';

export default defineComponent({
  name: 'ControlWrapper',
  setup(props, ctx) {
    const {
      value: inputValue,
      errorMessage,
      errors,
      handleBlur,
      handleChange,
      // checked,
      // meta,
      // checkedValue,
      // uncheckedValue,
    } = useField(props.path, undefined, {
      type:props.type as InputType,
      // initialValue: props.initialValue,
      // syncVModel: true,
      ...(props.type === "checkbox"
		? {
				checkedValue: true,
				uncheckedValue: false,
				type: "checkbox",
		  }
		: {}),
    });
    return {
      inputValue,
      errorMessage,
      errors,
      handleBlur,
      handleChange,
    }
  },
  props: {
    path: { // faz papel de "name", adicionado por mim
      required: true,
       //InputType
      type: String as PropType<InputType>,
    },
    type: { // adicionado por mim
      required: true,
      type: String,
    },
    id: {
      required: true,
      type: String,
    },
    description: {
      required: false as const,
      type: String,
      default: undefined,
    },
    errors: {
      required: false as const,
      type: String,
      default: undefined,
    },
    errorMessage: {
      required: false as const,
      type: String,
      default: undefined,
    },
    label: {
      required: false as const,
      type: String,
      default: undefined,
    },
    appliedOptions: {
      required: false as const,
      type: Object as PropType<Options>,
      default: undefined,
    },
    visible: {
      required: false as const,
      type: Boolean,
      default: true,
    },
    required: {
      required: false as const,
      type: Boolean,
      default: false,
    },
    isFocused: {
      required: false as const,
      type: Boolean,
      default: false,
    },
    styles: {
      required: true,
      type: Object as PropType<Styles>,
    },
  },
  computed: {
    showDescription(): boolean {
      return !isDescriptionHidden(
        this.visible,
        this.description,
        this.isFocused,
        !!this.appliedOptions?.showUnfocusedDescription
      );
    },
    showAsterisk(): boolean {
      return this.required && !this.appliedOptions?.hideRequiredAsterisk;
    },
  },
});
</script>
