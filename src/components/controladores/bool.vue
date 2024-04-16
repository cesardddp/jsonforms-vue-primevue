<script lang="ts" setup>
import type { ControlElement } from "@jsonforms/core";
import { rendererProps, useJsonFormsControl } from "@jsonforms/vue";
import wrapper from "./wrapper.vue";
import Checkbox from "primevue/checkbox";
import { computed, ref } from "vue";

const props = defineProps(rendererProps<ControlElement>());

const controler = useJsonFormsControl(props);

const wrapperRef = ref<InstanceType<typeof wrapper> | null>(null);

const value = computed({
	get: () => {
		return wrapperRef.value?.value;
	},
	set: (newValue) => {
		wrapperRef.value?.handleChange(newValue);
	}
});

</script>
<template>
	<wrapper ref="wrapperRef" :path="controler.control.value.path" :label="controler.control.value.label">
		<!-- bool -->
		<Checkbox :value :id="props.path" :name="controler.control.value.path" v-model="value" binary :checked="wrapperRef?.checked" />
	</wrapper>
</template>
