<script lang="ts" setup>
import type { ControlElement } from "@jsonforms/core";
import { rendererProps, useJsonFormsControl } from "@jsonforms/vue";
import { useField } from "vee-validate";

const props = defineProps(rendererProps<ControlElement>());

const controler = useJsonFormsControl(props);

const {
	value,
	// handleBlur,
	// errorMessage,
	errors,
	handleChange,
} = useField(controler.control.value.path, undefined);
</script>
<template>
	<label>
		{{ controler.control.value.label }}
		<Calendar
			@date-select="handleChange"
			dateFormat="dd/mm/yy"
			type="date"
			:id="controler.control.value.path"
			:name="controler.control.value.path"
			:model-value="value as string"
		/>
	</label>
	<!-- <p class="text-red-500 text-xs italic">{{ errorMessage }}</p> -->
	<p v-for="erro in errors" class="text-red-500 text-xs italic">{{ erro }}</p>
</template>
