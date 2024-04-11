import { DropdownProps } from "primevue/dropdown";
import { SelectButtonProps } from "primevue/selectbutton";
import { WatchStopHandle } from "vue";
import { AmplifyFormVue } from "../merm-types";
import { JsonSchema7 } from "@jsonforms/core";

export type fieldType = {
	form?: string;
	modelValue?: string | boolean|string[];
	initialValue?: any;
	label: string;
	type: inputType;

	// as: "input" | "select" | "textarea";
	name: string;

	action?: (
		// fieldsValues?: Ref<GenericObject>,
		//TODO não sei se ficaram assim
		// fieldContext?: Ref<Map<
		// 	string,
		// 	{
		// 		isArray: boolean;
		// 		group: string;
		// 		resetField:FieldContext<any>["resetField"];
		// 		ctx: FieldContext<any>;
		// 		handleChange(
		// 			e: unknown,
		// 			shouldValidate?: boolean | undefined
		// 		): void;
		// 		props: fieldType;
		// 		disabled: boolean | Ref[];
		// 		stopWatcherAction: WatchStopHandle[];
		// 	}
		// >>,
		index?: number
	) => WatchStopHandle;
	disabled?: boolean;
	nestFromField?: string;
	mask?: string;
	indice?: number;
	// type h1-6
	labelWraperTag?: ValidHTMLTags;
	inputClass?: string | string[];
	inputWrapperClass?: string | string[];
	labelClass?: string | string[];
	outerClass?: string | string[];
	errorMessagesClass?: string | string[];
	hidden?: boolean;
	omit?: boolean;
	helpClass?: string | string[];
	// options?: string[];
	selectOptionsConfig?: DropdownProps;
	selectOptions?: SelectButtonProps;

	help?: string;
	id?: string;
	rules?: string[] | string;
	naoUsar?: boolean;
	placeholder?: string;
	Avatar?: boolean;
};
export interface veeFormProps {
	populateData?: any;
	isWizard?: boolean;
	fieldName?: string;
	groups?: Array<Omit<veeFormProps, "groups">>;
	outerGroupClass?: string | string[];
	submitClass?: string | string[];
	formClass?: string | string[];
	formLabel?: string;
	formLabelClass?: string | string[];
	id?: string;
	isArray?: boolean;
	fields?: fieldType[];
}
export type FormSchemaParseado = Omit<AmplifyFormVue, "schema"> & {
	 jsonForm: JsonSchema7 
};

export type inputType =
	| "text"
	| "textarea"
	| "select"
	| "radio"
	| "checkbox"
	| "file"
	| "date"
	| "datetime-local"
	| "time"
	| "hidden"
	| "number"
	| "email"
	| "password"
	| "search"
	| "tel"
	| "url"
	| "color"
	| "range"
	| "month"
	| "week"
	| "select-multiple"
	| "select-one"
	| "input"
	| "week"
	| "selectButton";

export enum veeRules {
	"alpha",
	"alpha_dash",
	"alpha_num",
	"alpha_spaces",
	"between",
	"confirmed",
	"digits",
	"dimensions",
	"email",
	"ext",
	"image",
	"integer",
	"is",
	"is_not",
	"length",
	"max",
	"max_value",
	"mimes",
	"min",
	"min_value",
	"not_one_of",
	"numeric",
	"one_of",
	"regex",
	"required",
	"size",
	"toTypedSchema",
	"url ",
}
type ValidHTMLTags =
	| "b"
	| "em"
	| "i"
	| "small"
	| "strong"
	| "sub"
	| "sup"
	| "ins"
	| "del"
	| "mark"
	| "span"
	| "p"
	| "div"
	| "h1"
	| "h2"
	| "h3"
	| "h4"
	| "h5"
	| "h6"
	| "s"
	| "u"
	| "b"
	| "cite"
	| "dfn"
	| "abbr"
	| "time"
	| "code"
	| "var"
	| "samp"
	| "kbd"
	| "q"
	| "span"
	| "p"
	| "div"
	| "a"
	| "pre"
	| "br"
	| "hr"
	| "img"
	| "figure"
	| "figcaption"
	| "ul"
	| "ol"
	| "li"
	| "dl"
	| "dt"
	| "dd"
	| "table"
	| "caption"
	| "th"
	| "tr"
	| "td"
	| "thead"
	| "tbody"
	| "tfoot"
	| "col"
	| "colgroup"
	| "blockquote"
	| "details"
	| "dialog"
	| "summary"
	| "fieldset"
	| "legend"
	| "label"
	| "form"
	| "input"
	| "button"
	| "select"
	| "datalist"
	| "optgroup"
	| "option"
	| "textarea"
	| "output"
	| "progress"
	| "meter"
	| "menu"
	| "menuitem"
	| "applet"
	| "embed"
	| "object"
	| "param"
	| "video"
	| "audio"
	| "source"
	| "track"
	| "canvas"
	| "map"
	| "area"
	| "svg"
	| "math"
	| "iframe"
	| "frame"
	| "frameset"
	| "noframes"
	| "bdo"
	| "ruby"
	| "rt"
	| "rp"
	| "bdi"
	| "wbr";
