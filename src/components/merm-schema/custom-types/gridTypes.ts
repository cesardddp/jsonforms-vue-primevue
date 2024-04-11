import {
	ColumnNode,
	ColumnProps
} from "primevue/column";
import {
	type DataTableProps,
	DataTableFilterMeta,
} from "primevue/datatable";

export interface Col extends ColumnProps {
	field: string;
	actions?: 
		{
			tailwindButtonSeverity?: string;
			label: string;
			icon?: string;
			function: (args:{
				data: any;
				node: any;
				column: ColumnNode;
				field: string;
				index: number;
				frozenRow: boolean;
				editorInitCallback: (event: Event) => void;
				rowTogglerCallback: (event: Event) => void;
			})=>void;
		}[];
	colClass?: string;
	img?: string | boolean;
	imgClass?: string;
}

type GridFunctions = {
	functions?: {
		[key: string]: Function;
	};

	actionLabel?: {
		[key: string]: string;
	};
};

// export interface GridProps extends Omit<DataTableProps,"value"> {
export interface GridProps extends DataTableProps {
	value: any[];
	emptyMessage?: string;
	loadingMessage?: string;
	searchBar?: boolean;
	searchBarClass?: string;
	columns: Col[];
	filters?: DataTableFilterMeta;
	gridFunctions?: GridFunctions;
	actionsHeader?: [
		{
			actionButtonClass: string;
			label: string;
			function: {
				class: string;
				name: string;
			};
		}
	];

}
