<script lang="ts">
import { isLayout, rankWith } from "@jsonforms/core";
import type { JsonFormsRendererRegistryEntry, Layout } from "@jsonforms/core";
import { defineComponent } from "vue";
import {
	DispatchRenderer,
	rendererProps,
	useJsonFormsLayout,
} from "@jsonforms/vue";
import { computed } from "vue";

const LayuotRenderizador = defineComponent({
	name: "LayuotRenderizador",
	components: {
		DispatchRenderer,
	},
	props: {
		...rendererProps<Layout>(),
	},
	setup(props) {
		return useJsonFormsLayout(props);
	},
	computed: {
		sortedElements() {
			// @ts-ignore
			const elements = [...(this.layout.uischema as any).elements]
			return elements
				.sort(
					(a: any, b: any) => (
						(Number(a.options?.order ?? 0))
							> (Number(b.options?.order ?? 0)) ? 1 : -1))
		},
	},
});

export default LayuotRenderizador;

// export const entry: JsonFormsRendererRegistryEntry = {
// 	renderer: LayuotRenderizador,
// 	tester: rankWith(2, isLayout),
// };
</script>

<template>

	<div 
		v-for="(element, index) in sortedElements"
		:key="`${element.scope}-${index}`"
		class="mb-3 w-full"
	>
		<!-- {{ `${element.scope}-${index}` }} -->
		<!-- {{ element.options.order }} -->
		<!-- @ts-ignore -->
		<DispatchRenderer v-bind:schema="(layout as any).schema" v-bind:uischema="element" v-bind:path="(layout as any).path"
			v-bind:enabled="(layout as any).enabled" v-bind:renderers="(layout as any).renderers" v-bind:cells="(layout as any).cells" />
	</div>
</template>
