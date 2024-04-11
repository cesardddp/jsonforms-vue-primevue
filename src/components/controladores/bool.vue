<script lang="ts" setup>
import type { ControlElement } from "@jsonforms/core";
import { rendererProps, useJsonFormsControl } from "@jsonforms/vue";
import { useField } from "vee-validate";

const props = defineProps(rendererProps<ControlElement>());

const controler = useJsonFormsControl(props);

const {
	value,
	// handleBlur,
	errors,
	handleChange,
	checked,
} = useField(controler.control.value.path, undefined, {
	checkedValue: true,
	uncheckedValue: false,
	type: "checkbox",
});
</script>
<template>
	<label>
		{{ controler.control.value.label }}

		<Checkbox
			:value
			:id="props.path"
			:name="controler.control.value.path"
			@change="handleChange"
			:binary="true"
			:checked="checked"
		/>
	</label>
	<!-- <p class="text-red-500 text-xs italic">{{ errorMessage }}</p> -->
	<p v-for="erro in errors" class="text-red-500 text-xs italic">{{ erro }}</p>
</template>
