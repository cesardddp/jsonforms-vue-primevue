<script lang="ts" setup>
import type { ControlElement } from "@jsonforms/core";
import { rendererProps, useJsonFormsControl } from "@jsonforms/vue";
import wrapper from "./wrapper.vue";

const props = defineProps(rendererProps<ControlElement>());

const controler = useJsonFormsControl(props);


</script>
<template>
	<wrapper :path="controler.control.value.path" :label="controler.control.value.label" v-slot="{
    handleChange,
    handleBlur,
    value,
	checked
  }">
  <!-- bool -->
    <Checkbox
			:value
			:id="props.path"
			:name="controler.control.value.path"
			@change="handleChange"
			:binary="true"
			:checked="checked"
		/>
  </wrapper>

</template>
