import * as prettier from 'prettier';
import { Buffer } from 'buffer';
import { parse } from 'svelte/compiler';

var Ri = Object.create;
var ct = Object.defineProperty;
var Ui = Object.getOwnPropertyDescriptor;
var ji = Object.getOwnPropertyNames;
var $i = Object.getPrototypeOf,
	Vi = Object.prototype.hasOwnProperty;
var ps = (a, t) => () => (t || a((t = { exports: {} }).exports, t), t.exports),
	zi = (a, t) => {
		for (var e in t) ct(a, e, { get: t[e], enumerable: !0 });
	},
	Ki = (a, t, e, s) => {
		if ((t && typeof t == 'object') || typeof t == 'function')
			for (let i of ji(t))
				!Vi.call(a, i) &&
					i !== e &&
					ct(a, i, {
						get: () => t[i],
						enumerable: !(s = Ui(t, i)) || s.enumerable
					});
		return a;
	};
var pt = (a, t, e) => (
	(e = a != null ? Ri($i(a)) : {}),
	Ki(
		t || !a || !a.__esModule
			? ct(e, 'default', { value: a, enumerable: !0 })
			: e,
		a
	)
);
var rs = ps((Me) => {
	Object.defineProperty(Me, '__esModule', { value: !0 });
	function He(a, t) {
		if (a == null) return {};
		var e = {},
			s = Object.keys(a),
			i,
			r;
		for (r = 0; r < s.length; r++)
			(i = s[r]), !(t.indexOf(i) >= 0) && (e[i] = a[i]);
		return e;
	}
	var B = class {
			constructor(t, e, s) {
				(this.line = void 0),
					(this.column = void 0),
					(this.index = void 0),
					(this.line = t),
					(this.column = e),
					(this.index = s);
			}
		},
		fe = class {
			constructor(t, e) {
				(this.start = void 0),
					(this.end = void 0),
					(this.filename = void 0),
					(this.identifierName = void 0),
					(this.start = t),
					(this.end = e);
			}
		};
	function L(a, t) {
		let { line: e, column: s, index: i } = a;
		return new B(e, s + t, i + t);
	}
	var Pt = {
			SyntaxError: 'BABEL_PARSER_SYNTAX_ERROR',
			SourceTypeModuleError: 'BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED'
		},
		qi = (a, t = a.length - 1) => ({
			get() {
				return a.reduce((e, s) => e[s], this);
			},
			set(e) {
				a.reduce((s, i, r) => (r === t ? (s[i] = e) : s[i]), this);
			}
		}),
		Hi = (a, t, e) =>
			Object.keys(e)
				.map((s) => [s, e[s]])
				.filter(([, s]) => !!s)
				.map(([s, i]) => [
					s,
					typeof i == 'function'
						? { value: i, enumerable: !1 }
						: typeof i.reflect == 'string'
						? Object.assign({}, i, qi(i.reflect.split('.')))
						: i
				])
				.reduce(
					(s, [i, r]) =>
						Object.defineProperty(s, i, Object.assign({ configurable: !0 }, r)),
					Object.assign(new a(), t)
				),
		Wi = {
			ImportMetaOutsideModule: {
				message: `import.meta may appear only with 'sourceType: "module"'`,
				code: Pt.SourceTypeModuleError
			},
			ImportOutsideModule: {
				message: `'import' and 'export' may appear only with 'sourceType: "module"'`,
				code: Pt.SourceTypeModuleError
			}
		},
		us = {
			ArrayPattern: 'array destructuring pattern',
			AssignmentExpression: 'assignment expression',
			AssignmentPattern: 'assignment expression',
			ArrowFunctionExpression: 'arrow function expression',
			ConditionalExpression: 'conditional expression',
			CatchClause: 'catch clause',
			ForOfStatement: 'for-of statement',
			ForInStatement: 'for-in statement',
			ForStatement: 'for-loop',
			FormalParameters: 'function parameter list',
			Identifier: 'identifier',
			ImportSpecifier: 'import specifier',
			ImportDefaultSpecifier: 'import default specifier',
			ImportNamespaceSpecifier: 'import namespace specifier',
			ObjectPattern: 'object destructuring pattern',
			ParenthesizedExpression: 'parenthesized expression',
			RestElement: 'rest element',
			UpdateExpression: {
				true: 'prefix operation',
				false: 'postfix operation'
			},
			VariableDeclarator: 'variable declaration',
			YieldExpression: 'yield expression'
		},
		Tt = ({ type: a, prefix: t }) =>
			a === 'UpdateExpression' ? us.UpdateExpression[String(t)] : us[a],
		Ji = {
			AccessorIsGenerator: ({ kind: a }) => `A ${a}ter cannot be a generator.`,
			ArgumentsInClass:
				"'arguments' is only allowed in functions and class methods.",
			AsyncFunctionInSingleStatementContext:
				'Async functions can only be declared at the top level or inside a block.',
			AwaitBindingIdentifier:
				"Can not use 'await' as identifier inside an async function.",
			AwaitBindingIdentifierInStaticBlock:
				"Can not use 'await' as identifier inside a static block.",
			AwaitExpressionFormalParameter:
				"'await' is not allowed in async function parameters.",
			AwaitUsingNotInAsyncContext:
				"'await using' is only allowed within async functions and at the top levels of modules.",
			AwaitNotInAsyncContext:
				"'await' is only allowed within async functions and at the top levels of modules.",
			AwaitNotInAsyncFunction:
				"'await' is only allowed within async functions.",
			BadGetterArity: "A 'get' accessor must not have any formal parameters.",
			BadSetterArity:
				"A 'set' accessor must have exactly one formal parameter.",
			BadSetterRestParameter:
				"A 'set' accessor function argument must not be a rest parameter.",
			ConstructorClassField:
				"Classes may not have a field named 'constructor'.",
			ConstructorClassPrivateField:
				"Classes may not have a private field named '#constructor'.",
			ConstructorIsAccessor: 'Class constructor may not be an accessor.',
			ConstructorIsAsync: "Constructor can't be an async function.",
			ConstructorIsGenerator: "Constructor can't be a generator.",
			DeclarationMissingInitializer: ({ kind: a }) =>
				`Missing initializer in ${a} declaration.`,
			DecoratorArgumentsOutsideParentheses:
				"Decorator arguments must be moved inside parentheses: use '@(decorator(args))' instead of '@(decorator)(args)'.",
			DecoratorBeforeExport:
				"Decorators must be placed *before* the 'export' keyword. Remove the 'decoratorsBeforeExport: true' option to use the 'export @decorator class {}' syntax.",
			DecoratorsBeforeAfterExport:
				"Decorators can be placed *either* before or after the 'export' keyword, but not in both locations at the same time.",
			DecoratorConstructor:
				"Decorators can't be used with a constructor. Did you mean '@dec class { ... }'?",
			DecoratorExportClass:
				"Decorators must be placed *after* the 'export' keyword. Remove the 'decoratorsBeforeExport: false' option to use the '@decorator export class {}' syntax.",
			DecoratorSemicolon: 'Decorators must not be followed by a semicolon.',
			DecoratorStaticBlock: "Decorators can't be used with a static block.",
			DeletePrivateField: 'Deleting a private field is not allowed.',
			DestructureNamedImport:
				'ES2015 named imports do not destructure. Use another statement for destructuring after the import.',
			DuplicateConstructor: 'Duplicate constructor in the same class.',
			DuplicateDefaultExport: 'Only one default export allowed per module.',
			DuplicateExport: ({ exportName: a }) =>
				`\`${a}\` has already been exported. Exported identifiers must be unique.`,
			DuplicateProto: 'Redefinition of __proto__ property.',
			DuplicateRegExpFlags: 'Duplicate regular expression flag.',
			ElementAfterRest: 'Rest element must be last element.',
			EscapedCharNotAnIdentifier: 'Invalid Unicode escape.',
			ExportBindingIsString: ({
				localName: a,
				exportName: t
			}) => `A string literal cannot be used as an exported binding without \`from\`.
- Did you mean \`export { '${a}' as '${t}' } from 'some-module'\`?`,
			ExportDefaultFromAsIdentifier:
				"'from' is not allowed as an identifier after 'export default'.",
			ForInOfLoopInitializer: ({ type: a }) =>
				`'${
					a === 'ForInStatement' ? 'for-in' : 'for-of'
				}' loop variable declaration may not have an initializer.`,
			ForInUsing: "For-in loop may not start with 'using' declaration.",
			ForOfAsync: "The left-hand side of a for-of loop may not be 'async'.",
			ForOfLet: "The left-hand side of a for-of loop may not start with 'let'.",
			GeneratorInSingleStatementContext:
				'Generators can only be declared at the top level or inside a block.',
			IllegalBreakContinue: ({ type: a }) =>
				`Unsyntactic ${a === 'BreakStatement' ? 'break' : 'continue'}.`,
			IllegalLanguageModeDirective:
				"Illegal 'use strict' directive in function with non-simple parameter list.",
			IllegalReturn: "'return' outside of function.",
			ImportAttributesUseAssert:
				'The `assert` keyword in import attributes is deprecated and it has been replaced by the `with` keyword. You can enable the `deprecatedAssertSyntax: true` option in the import attributes plugin to suppress this error.',
			ImportBindingIsString: ({
				importName: a
			}) => `A string literal cannot be used as an imported binding.
- Did you mean \`import { "${a}" as foo }\`?`,
			ImportCallArgumentTrailingComma:
				'Trailing comma is disallowed inside import(...) arguments.',
			ImportCallArity: ({ maxArgumentCount: a }) =>
				`\`import()\` requires exactly ${
					a === 1 ? 'one argument' : 'one or two arguments'
				}.`,
			ImportCallNotNewExpression: 'Cannot use new with import(...).',
			ImportCallSpreadArgument: '`...` is not allowed in `import()`.',
			ImportJSONBindingNotDefault:
				'A JSON module can only be imported with `default`.',
			ImportReflectionHasAssertion: '`import module x` cannot have assertions.',
			ImportReflectionNotBinding:
				'Only `import module x from "./module"` is valid.',
			IncompatibleRegExpUVFlags:
				"The 'u' and 'v' regular expression flags cannot be enabled at the same time.",
			InvalidBigIntLiteral: 'Invalid BigIntLiteral.',
			InvalidCodePoint: 'Code point out of bounds.',
			InvalidCoverInitializedName: 'Invalid shorthand property initializer.',
			InvalidDecimal: 'Invalid decimal.',
			InvalidDigit: ({ radix: a }) => `Expected number in radix ${a}.`,
			InvalidEscapeSequence: 'Bad character escape sequence.',
			InvalidEscapeSequenceTemplate: 'Invalid escape sequence in template.',
			InvalidEscapedReservedWord: ({ reservedWord: a }) =>
				`Escape sequence in keyword ${a}.`,
			InvalidIdentifier: ({ identifierName: a }) => `Invalid identifier ${a}.`,
			InvalidLhs: ({ ancestor: a }) => `Invalid left-hand side in ${Tt(a)}.`,
			InvalidLhsBinding: ({ ancestor: a }) =>
				`Binding invalid left-hand side in ${Tt(a)}.`,
			InvalidNumber: 'Invalid number.',
			InvalidOrMissingExponent:
				"Floating-point numbers require a valid exponent after the 'e'.",
			InvalidOrUnexpectedToken: ({ unexpected: a }) =>
				`Unexpected character '${a}'.`,
			InvalidParenthesizedAssignment:
				'Invalid parenthesized assignment pattern.',
			InvalidPrivateFieldResolution: ({ identifierName: a }) =>
				`Private name #${a} is not defined.`,
			InvalidPropertyBindingPattern: 'Binding member expression.',
			InvalidRecordProperty:
				'Only properties and spread elements are allowed in record definitions.',
			InvalidRestAssignmentPattern: "Invalid rest operator's argument.",
			LabelRedeclaration: ({ labelName: a }) =>
				`Label '${a}' is already declared.`,
			LetInLexicalBinding:
				"'let' is not allowed to be used as a name in 'let' or 'const' declarations.",
			LineTerminatorBeforeArrow: "No line break is allowed before '=>'.",
			MalformedRegExpFlags: 'Invalid regular expression flag.',
			MissingClassName: 'A class name is required.',
			MissingEqInAssignment:
				"Only '=' operator can be used for specifying default value.",
			MissingSemicolon: 'Missing semicolon.',
			MissingPlugin: ({ missingPlugin: a }) =>
				`This experimental syntax requires enabling the parser plugin: ${a
					.map((t) => JSON.stringify(t))
					.join(', ')}.`,
			MissingOneOfPlugins: ({ missingPlugin: a }) =>
				`This experimental syntax requires enabling one of the following parser plugin(s): ${a
					.map((t) => JSON.stringify(t))
					.join(', ')}.`,
			MissingUnicodeEscape: 'Expecting Unicode escape sequence \\uXXXX.',
			MixingCoalesceWithLogical:
				'Nullish coalescing operator(??) requires parens when mixing with logical operators.',
			ModuleAttributeDifferentFromType:
				'The only accepted module attribute is `type`.',
			ModuleAttributeInvalidValue:
				'Only string literals are allowed as module attribute values.',
			ModuleAttributesWithDuplicateKeys: ({ key: a }) =>
				`Duplicate key "${a}" is not allowed in module attributes.`,
			ModuleExportNameHasLoneSurrogate: ({ surrogateCharCode: a }) =>
				`An export name cannot include a lone surrogate, found '\\u${a.toString(
					16
				)}'.`,
			ModuleExportUndefined: ({ localName: a }) =>
				`Export '${a}' is not defined.`,
			MultipleDefaultsInSwitch: 'Multiple default clauses.',
			NewlineAfterThrow: 'Illegal newline after throw.',
			NoCatchOrFinally: 'Missing catch or finally clause.',
			NumberIdentifier: 'Identifier directly after number.',
			NumericSeparatorInEscapeSequence:
				'Numeric separators are not allowed inside unicode escape sequences or hex escape sequences.',
			ObsoleteAwaitStar:
				"'await*' has been removed from the async functions proposal. Use Promise.all() instead.",
			OptionalChainingNoNew:
				'Constructors in/after an Optional Chain are not allowed.',
			OptionalChainingNoTemplate:
				'Tagged Template Literals are not allowed in optionalChain.',
			OverrideOnConstructor:
				"'override' modifier cannot appear on a constructor declaration.",
			ParamDupe: 'Argument name clash.',
			PatternHasAccessor: "Object pattern can't contain getter or setter.",
			PatternHasMethod: "Object pattern can't contain methods.",
			PrivateInExpectedIn: ({ identifierName: a }) =>
				`Private names are only allowed in property accesses (\`obj.#${a}\`) or in \`in\` expressions (\`#${a} in obj\`).`,
			PrivateNameRedeclaration: ({ identifierName: a }) =>
				`Duplicate private name #${a}.`,
			RecordExpressionBarIncorrectEndSyntaxType:
				"Record expressions ending with '|}' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
			RecordExpressionBarIncorrectStartSyntaxType:
				"Record expressions starting with '{|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
			RecordExpressionHashIncorrectStartSyntaxType:
				"Record expressions starting with '#{' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'.",
			RecordNoProto: "'__proto__' is not allowed in Record expressions.",
			RestTrailingComma: 'Unexpected trailing comma after rest element.',
			SloppyFunction:
				'In non-strict mode code, functions can only be declared at top level or inside a block.',
			SloppyFunctionAnnexB:
				'In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement.',
			StaticPrototype: 'Classes may not have static property named prototype.',
			SuperNotAllowed:
				"`super()` is only valid inside a class constructor of a subclass. Maybe a typo in the method name ('constructor') or not extending another class?",
			SuperPrivateField: "Private fields can't be accessed on super.",
			TrailingDecorator: 'Decorators must be attached to a class element.',
			TupleExpressionBarIncorrectEndSyntaxType:
				"Tuple expressions ending with '|]' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
			TupleExpressionBarIncorrectStartSyntaxType:
				"Tuple expressions starting with '[|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
			TupleExpressionHashIncorrectStartSyntaxType:
				"Tuple expressions starting with '#[' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'.",
			UnexpectedArgumentPlaceholder: 'Unexpected argument placeholder.',
			UnexpectedAwaitAfterPipelineBody:
				'Unexpected "await" after pipeline body; await must have parentheses in minimal proposal.',
			UnexpectedDigitAfterHash: 'Unexpected digit after hash token.',
			UnexpectedImportExport:
				"'import' and 'export' may only appear at the top level.",
			UnexpectedKeyword: ({ keyword: a }) => `Unexpected keyword '${a}'.`,
			UnexpectedLeadingDecorator:
				'Leading decorators must be attached to a class declaration.',
			UnexpectedLexicalDeclaration:
				'Lexical declaration cannot appear in a single-statement context.',
			UnexpectedNewTarget:
				'`new.target` can only be used in functions or class properties.',
			UnexpectedNumericSeparator:
				'A numeric separator is only allowed between two digits.',
			UnexpectedPrivateField: 'Unexpected private name.',
			UnexpectedReservedWord: ({ reservedWord: a }) =>
				`Unexpected reserved word '${a}'.`,
			UnexpectedSuper: "'super' is only allowed in object methods and classes.",
			UnexpectedToken: ({ expected: a, unexpected: t }) =>
				`Unexpected token${t ? ` '${t}'.` : ''}${a ? `, expected "${a}"` : ''}`,
			UnexpectedTokenUnaryExponentiation:
				'Illegal expression. Wrap left hand side or entire exponentiation in parentheses.',
			UnexpectedUsingDeclaration:
				'Using declaration cannot appear in the top level when source type is `script`.',
			UnsupportedBind: 'Binding should be performed on object property.',
			UnsupportedDecoratorExport:
				'A decorated export must export a class declaration.',
			UnsupportedDefaultExport:
				'Only expressions, functions or classes are allowed as the `default` export.',
			UnsupportedImport:
				'`import` can only be used in `import()` or `import.meta`.',
			UnsupportedMetaProperty: ({ target: a, onlyValidPropertyName: t }) =>
				`The only valid meta property for ${a} is ${a}.${t}.`,
			UnsupportedParameterDecorator:
				'Decorators cannot be used to decorate parameters.',
			UnsupportedPropertyDecorator:
				'Decorators cannot be used to decorate object literal properties.',
			UnsupportedSuper:
				"'super' can only be used with function calls (i.e. super()) or in property accesses (i.e. super.prop or super[prop]).",
			UnterminatedComment: 'Unterminated comment.',
			UnterminatedRegExp: 'Unterminated regular expression.',
			UnterminatedString: 'Unterminated string constant.',
			UnterminatedTemplate: 'Unterminated template.',
			UsingDeclarationHasBindingPattern:
				'Using declaration cannot have destructuring patterns.',
			VarRedeclaration: ({ identifierName: a }) =>
				`Identifier '${a}' has already been declared.`,
			YieldBindingIdentifier:
				"Can not use 'yield' as identifier inside a generator.",
			YieldInParameter: 'Yield expression is not allowed in formal parameters.',
			ZeroDigitNumericSeparator:
				'Numeric separator can not be used after leading 0.'
		},
		Xi = {
			StrictDelete: 'Deleting local variable in strict mode.',
			StrictEvalArguments: ({ referenceName: a }) =>
				`Assigning to '${a}' in strict mode.`,
			StrictEvalArgumentsBinding: ({ bindingName: a }) =>
				`Binding '${a}' in strict mode.`,
			StrictFunction:
				'In strict mode code, functions can only be declared at top level or inside a block.',
			StrictNumericEscape:
				"The only valid numeric escape in strict mode is '\\0'.",
			StrictOctalLiteral:
				'Legacy octal literals are not allowed in strict mode.',
			StrictWith: "'with' in strict mode."
		},
		Gi = new Set([
			'ArrowFunctionExpression',
			'AssignmentExpression',
			'ConditionalExpression',
			'YieldExpression'
		]),
		Yi = {
			PipeBodyIsTighter:
				'Unexpected yield after pipeline body; any yield expression acting as Hack-style pipe body must be parenthesized due to its loose operator precedence.',
			PipeTopicRequiresHackPipes:
				'Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.',
			PipeTopicUnbound:
				'Topic reference is unbound; it must be inside a pipe body.',
			PipeTopicUnconfiguredToken: ({ token: a }) =>
				`Invalid topic token ${a}. In order to use ${a} as a topic reference, the pipelineOperator plugin must be configured with { "proposal": "hack", "topicToken": "${a}" }.`,
			PipeTopicUnused:
				'Hack-style pipe body does not contain a topic reference; Hack-style pipes must use topic at least once.',
			PipeUnparenthesizedBody: ({ type: a }) =>
				`Hack-style pipe body cannot be an unparenthesized ${Tt({
					type: a
				})}; please wrap it in parentheses.`,
			PipelineBodyNoArrow:
				'Unexpected arrow "=>" after pipeline body; arrow function in pipeline body must be parenthesized.',
			PipelineBodySequenceExpression:
				'Pipeline body may not be a comma-separated sequence expression.',
			PipelineHeadSequenceExpression:
				'Pipeline head should not be a comma-separated sequence expression.',
			PipelineTopicUnused:
				'Pipeline is in topic style but does not use topic reference.',
			PrimaryTopicNotAllowed:
				'Topic reference was used in a lexical context without topic binding.',
			PrimaryTopicRequiresSmartPipeline:
				'Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.'
		},
		Qi = ['toMessage'],
		Zi = ['message'];
	function er(a) {
		let { toMessage: t } = a,
			e = He(a, Qi);
		return function s({ loc: i, details: r }) {
			return Hi(SyntaxError, Object.assign({}, e, { loc: i }), {
				clone(n = {}) {
					let o = n.loc || {};
					return s({
						loc: new B(
							'line' in o ? o.line : this.loc.line,
							'column' in o ? o.column : this.loc.column,
							'index' in o ? o.index : this.loc.index
						),
						details: Object.assign({}, this.details, n.details)
					});
				},
				details: { value: r, enumerable: !1 },
				message: {
					get() {
						return `${t(this.details)} (${this.loc.line}:${this.loc.column})`;
					},
					set(n) {
						Object.defineProperty(this, 'message', { value: n });
					}
				},
				pos: { reflect: 'loc.index', enumerable: !0 },
				missingPlugin: 'missingPlugin' in r && {
					reflect: 'details.missingPlugin',
					enumerable: !0
				}
			});
		};
	}
	function V(a, t) {
		if (Array.isArray(a)) return (s) => V(s, a[0]);
		let e = {};
		for (let s of Object.keys(a)) {
			let i = a[s],
				r =
					typeof i == 'string'
						? { message: () => i }
						: typeof i == 'function'
						? { message: i }
						: i,
				{ message: n } = r,
				o = He(r, Zi),
				h = typeof n == 'string' ? () => n : n;
			e[s] = er(
				Object.assign(
					{ code: Pt.SyntaxError, reasonCode: s, toMessage: h },
					t ? { syntaxPlugin: t } : {},
					o
				)
			);
		}
		return e;
	}
	var p = Object.assign({}, V(Wi), V(Ji), V(Xi), V`pipelineOperator`(Yi)),
		{ defineProperty: tr } = Object,
		fs = (a, t) => tr(a, t, { enumerable: !1, value: a[t] });
	function Ae(a) {
		return (
			a.loc.start && fs(a.loc.start, 'index'),
			a.loc.end && fs(a.loc.end, 'index'),
			a
		);
	}
	var sr = (a) =>
			class extends a {
				parse() {
					let e = Ae(super.parse());
					return this.options.tokens && (e.tokens = e.tokens.map(Ae)), e;
				}
				parseRegExpLiteral({ pattern: e, flags: s }) {
					let i = null;
					try {
						i = new RegExp(e, s);
					} catch {}
					let r = this.estreeParseLiteral(i);
					return (r.regex = { pattern: e, flags: s }), r;
				}
				parseBigIntLiteral(e) {
					let s;
					try {
						s = BigInt(e);
					} catch {
						s = null;
					}
					let i = this.estreeParseLiteral(s);
					return (i.bigint = String(i.value || e)), i;
				}
				parseDecimalLiteral(e) {
					let i = this.estreeParseLiteral(null);
					return (i.decimal = String(i.value || e)), i;
				}
				estreeParseLiteral(e) {
					return this.parseLiteral(e, 'Literal');
				}
				parseStringLiteral(e) {
					return this.estreeParseLiteral(e);
				}
				parseNumericLiteral(e) {
					return this.estreeParseLiteral(e);
				}
				parseNullLiteral() {
					return this.estreeParseLiteral(null);
				}
				parseBooleanLiteral(e) {
					return this.estreeParseLiteral(e);
				}
				directiveToStmt(e) {
					let s = e.value;
					delete e.value,
						(s.type = 'Literal'),
						(s.raw = s.extra.raw),
						(s.value = s.extra.expressionValue);
					let i = e;
					return (
						(i.type = 'ExpressionStatement'),
						(i.expression = s),
						(i.directive = s.extra.rawValue),
						delete s.extra,
						i
					);
				}
				initFunction(e, s) {
					super.initFunction(e, s), (e.expression = !1);
				}
				checkDeclaration(e) {
					e != null && this.isObjectProperty(e)
						? this.checkDeclaration(e.value)
						: super.checkDeclaration(e);
				}
				getObjectOrClassMethodParams(e) {
					return e.value.params;
				}
				isValidDirective(e) {
					var s;
					return (
						e.type === 'ExpressionStatement' &&
						e.expression.type === 'Literal' &&
						typeof e.expression.value == 'string' &&
						!((s = e.expression.extra) != null && s.parenthesized)
					);
				}
				parseBlockBody(e, s, i, r, n) {
					super.parseBlockBody(e, s, i, r, n);
					let o = e.directives.map((h) => this.directiveToStmt(h));
					(e.body = o.concat(e.body)), delete e.directives;
				}
				pushClassMethod(e, s, i, r, n, o) {
					this.parseMethod(s, i, r, n, o, 'ClassMethod', !0),
						s.typeParameters &&
							((s.value.typeParameters = s.typeParameters),
							delete s.typeParameters),
						e.body.push(s);
				}
				parsePrivateName() {
					let e = super.parsePrivateName();
					return this.getPluginOption('estree', 'classFeatures')
						? this.convertPrivateNameToPrivateIdentifier(e)
						: e;
				}
				convertPrivateNameToPrivateIdentifier(e) {
					let s = super.getPrivateNameSV(e);
					return (
						(e = e),
						delete e.id,
						(e.name = s),
						(e.type = 'PrivateIdentifier'),
						e
					);
				}
				isPrivateName(e) {
					return this.getPluginOption('estree', 'classFeatures')
						? e.type === 'PrivateIdentifier'
						: super.isPrivateName(e);
				}
				getPrivateNameSV(e) {
					return this.getPluginOption('estree', 'classFeatures')
						? e.name
						: super.getPrivateNameSV(e);
				}
				parseLiteral(e, s) {
					let i = super.parseLiteral(e, s);
					return (i.raw = i.extra.raw), delete i.extra, i;
				}
				parseFunctionBody(e, s, i = !1) {
					super.parseFunctionBody(e, s, i),
						(e.expression = e.body.type !== 'BlockStatement');
				}
				parseMethod(e, s, i, r, n, o, h = !1) {
					let l = this.startNode();
					return (
						(l.kind = e.kind),
						(l = super.parseMethod(l, s, i, r, n, o, h)),
						(l.type = 'FunctionExpression'),
						delete l.kind,
						(e.value = l),
						o === 'ClassPrivateMethod' && (e.computed = !1),
						this.finishNode(e, 'MethodDefinition')
					);
				}
				parseClassProperty(...e) {
					let s = super.parseClassProperty(...e);
					return (
						this.getPluginOption('estree', 'classFeatures') &&
							(s.type = 'PropertyDefinition'),
						s
					);
				}
				parseClassPrivateProperty(...e) {
					let s = super.parseClassPrivateProperty(...e);
					return (
						this.getPluginOption('estree', 'classFeatures') &&
							((s.type = 'PropertyDefinition'), (s.computed = !1)),
						s
					);
				}
				parseObjectMethod(e, s, i, r, n) {
					let o = super.parseObjectMethod(e, s, i, r, n);
					return (
						o &&
							((o.type = 'Property'),
							o.kind === 'method' && (o.kind = 'init'),
							(o.shorthand = !1)),
						o
					);
				}
				parseObjectProperty(e, s, i, r) {
					let n = super.parseObjectProperty(e, s, i, r);
					return n && ((n.kind = 'init'), (n.type = 'Property')), n;
				}
				isValidLVal(e, s, i) {
					return e === 'Property' ? 'value' : super.isValidLVal(e, s, i);
				}
				isAssignable(e, s) {
					return e != null && this.isObjectProperty(e)
						? this.isAssignable(e.value, s)
						: super.isAssignable(e, s);
				}
				toAssignable(e, s = !1) {
					if (e != null && this.isObjectProperty(e)) {
						let { key: i, value: r } = e;
						this.isPrivateName(i) &&
							this.classScope.usePrivateName(
								this.getPrivateNameSV(i),
								i.loc.start
							),
							this.toAssignable(r, s);
					} else super.toAssignable(e, s);
				}
				toAssignableObjectExpressionProp(e, s, i) {
					e.kind === 'get' || e.kind === 'set'
						? this.raise(p.PatternHasAccessor, { at: e.key })
						: e.method
						? this.raise(p.PatternHasMethod, { at: e.key })
						: super.toAssignableObjectExpressionProp(e, s, i);
				}
				finishCallExpression(e, s) {
					let i = super.finishCallExpression(e, s);
					if (i.callee.type === 'Import') {
						if (
							((i.type = 'ImportExpression'),
							(i.source = i.arguments[0]),
							this.hasPlugin('importAttributes') ||
								this.hasPlugin('importAssertions'))
						) {
							var r;
							i.attributes = (r = i.arguments[1]) != null ? r : null;
						}
						delete i.arguments, delete i.callee;
					}
					return i;
				}
				toReferencedArguments(e) {
					e.type !== 'ImportExpression' && super.toReferencedArguments(e);
				}
				parseExport(e, s) {
					let i = this.state.lastTokStartLoc,
						r = super.parseExport(e, s);
					switch (r.type) {
						case 'ExportAllDeclaration':
							r.exported = null;
							break;
						case 'ExportNamedDeclaration':
							r.specifiers.length === 1 &&
								r.specifiers[0].type === 'ExportNamespaceSpecifier' &&
								((r.type = 'ExportAllDeclaration'),
								(r.exported = r.specifiers[0].exported),
								delete r.specifiers);
						case 'ExportDefaultDeclaration':
							{
								var n;
								let { declaration: o } = r;
								(o == null ? void 0 : o.type) === 'ClassDeclaration' &&
									((n = o.decorators) == null ? void 0 : n.length) > 0 &&
									o.start === r.start &&
									this.resetStartLocation(r, i);
							}
							break;
					}
					return r;
				}
				parseSubscript(e, s, i, r) {
					let n = super.parseSubscript(e, s, i, r);
					if (r.optionalChainMember) {
						if (
							((n.type === 'OptionalMemberExpression' ||
								n.type === 'OptionalCallExpression') &&
								(n.type = n.type.substring(8)),
							r.stop)
						) {
							let o = this.startNodeAtNode(n);
							return (o.expression = n), this.finishNode(o, 'ChainExpression');
						}
					} else
						(n.type === 'MemberExpression' || n.type === 'CallExpression') &&
							(n.optional = !1);
					return n;
				}
				hasPropertyAsPrivateName(e) {
					return (
						e.type === 'ChainExpression' && (e = e.expression),
						super.hasPropertyAsPrivateName(e)
					);
				}
				isObjectProperty(e) {
					return e.type === 'Property' && e.kind === 'init' && !e.method;
				}
				isObjectMethod(e) {
					return e.method || e.kind === 'get' || e.kind === 'set';
				}
				finishNodeAt(e, s, i) {
					return Ae(super.finishNodeAt(e, s, i));
				}
				resetStartLocation(e, s) {
					super.resetStartLocation(e, s), Ae(e);
				}
				resetEndLocation(e, s = this.state.lastTokEndLoc) {
					super.resetEndLocation(e, s), Ae(e);
				}
			},
		Z = class {
			constructor(t, e) {
				(this.token = void 0),
					(this.preserveSpace = void 0),
					(this.token = t),
					(this.preserveSpace = !!e);
			}
		},
		E = {
			brace: new Z('{'),
			j_oTag: new Z('<tag'),
			j_cTag: new Z('</tag'),
			j_expr: new Z('<tag>...</tag>', !0)
		};
	E.template = new Z('`', !0);
	var g = !0,
		m = !0,
		ut = !0,
		Se = !0,
		q = !0,
		ir = !0,
		We = class {
			constructor(t, e = {}) {
				(this.label = void 0),
					(this.keyword = void 0),
					(this.beforeExpr = void 0),
					(this.startsExpr = void 0),
					(this.rightAssociative = void 0),
					(this.isLoop = void 0),
					(this.isAssign = void 0),
					(this.prefix = void 0),
					(this.postfix = void 0),
					(this.binop = void 0),
					(this.label = t),
					(this.keyword = e.keyword),
					(this.beforeExpr = !!e.beforeExpr),
					(this.startsExpr = !!e.startsExpr),
					(this.rightAssociative = !!e.rightAssociative),
					(this.isLoop = !!e.isLoop),
					(this.isAssign = !!e.isAssign),
					(this.prefix = !!e.prefix),
					(this.postfix = !!e.postfix),
					(this.binop = e.binop != null ? e.binop : null),
					(this.updateContext = null);
			}
		},
		zt = new Map();
	function A(a, t = {}) {
		t.keyword = a;
		let e = P(a, t);
		return zt.set(a, e), e;
	}
	function v(a, t) {
		return P(a, { beforeExpr: g, binop: t });
	}
	var Ie = -1,
		j = [],
		Kt = [],
		qt = [],
		Ht = [],
		Wt = [],
		Jt = [];
	function P(a, t = {}) {
		var e, s, i, r;
		return (
			++Ie,
			Kt.push(a),
			qt.push((e = t.binop) != null ? e : -1),
			Ht.push((s = t.beforeExpr) != null ? s : !1),
			Wt.push((i = t.startsExpr) != null ? i : !1),
			Jt.push((r = t.prefix) != null ? r : !1),
			j.push(new We(a, t)),
			Ie
		);
	}
	function b(a, t = {}) {
		var e, s, i, r;
		return (
			++Ie,
			zt.set(a, Ie),
			Kt.push(a),
			qt.push((e = t.binop) != null ? e : -1),
			Ht.push((s = t.beforeExpr) != null ? s : !1),
			Wt.push((i = t.startsExpr) != null ? i : !1),
			Jt.push((r = t.prefix) != null ? r : !1),
			j.push(new We('name', t)),
			Ie
		);
	}
	var rr = {
		bracketL: P('[', { beforeExpr: g, startsExpr: m }),
		bracketHashL: P('#[', { beforeExpr: g, startsExpr: m }),
		bracketBarL: P('[|', { beforeExpr: g, startsExpr: m }),
		bracketR: P(']'),
		bracketBarR: P('|]'),
		braceL: P('{', { beforeExpr: g, startsExpr: m }),
		braceBarL: P('{|', { beforeExpr: g, startsExpr: m }),
		braceHashL: P('#{', { beforeExpr: g, startsExpr: m }),
		braceR: P('}'),
		braceBarR: P('|}'),
		parenL: P('(', { beforeExpr: g, startsExpr: m }),
		parenR: P(')'),
		comma: P(',', { beforeExpr: g }),
		semi: P(';', { beforeExpr: g }),
		colon: P(':', { beforeExpr: g }),
		doubleColon: P('::', { beforeExpr: g }),
		dot: P('.'),
		question: P('?', { beforeExpr: g }),
		questionDot: P('?.'),
		arrow: P('=>', { beforeExpr: g }),
		template: P('template'),
		ellipsis: P('...', { beforeExpr: g }),
		backQuote: P('`', { startsExpr: m }),
		dollarBraceL: P('${', { beforeExpr: g, startsExpr: m }),
		templateTail: P('...`', { startsExpr: m }),
		templateNonTail: P('...${', { beforeExpr: g, startsExpr: m }),
		at: P('@'),
		hash: P('#', { startsExpr: m }),
		interpreterDirective: P('#!...'),
		eq: P('=', { beforeExpr: g, isAssign: Se }),
		assign: P('_=', { beforeExpr: g, isAssign: Se }),
		slashAssign: P('_=', { beforeExpr: g, isAssign: Se }),
		xorAssign: P('_=', { beforeExpr: g, isAssign: Se }),
		moduloAssign: P('_=', { beforeExpr: g, isAssign: Se }),
		incDec: P('++/--', { prefix: q, postfix: ir, startsExpr: m }),
		bang: P('!', { beforeExpr: g, prefix: q, startsExpr: m }),
		tilde: P('~', { beforeExpr: g, prefix: q, startsExpr: m }),
		doubleCaret: P('^^', { startsExpr: m }),
		doubleAt: P('@@', { startsExpr: m }),
		pipeline: v('|>', 0),
		nullishCoalescing: v('??', 1),
		logicalOR: v('||', 1),
		logicalAND: v('&&', 2),
		bitwiseOR: v('|', 3),
		bitwiseXOR: v('^', 4),
		bitwiseAND: v('&', 5),
		equality: v('==/!=/===/!==', 6),
		lt: v('</>/<=/>=', 7),
		gt: v('</>/<=/>=', 7),
		relational: v('</>/<=/>=', 7),
		bitShift: v('<</>>/>>>', 8),
		bitShiftL: v('<</>>/>>>', 8),
		bitShiftR: v('<</>>/>>>', 8),
		plusMin: P('+/-', { beforeExpr: g, binop: 9, prefix: q, startsExpr: m }),
		modulo: P('%', { binop: 10, startsExpr: m }),
		star: P('*', { binop: 10 }),
		slash: v('/', 10),
		exponent: P('**', { beforeExpr: g, binop: 11, rightAssociative: !0 }),
		_in: A('in', { beforeExpr: g, binop: 7 }),
		_instanceof: A('instanceof', { beforeExpr: g, binop: 7 }),
		_break: A('break'),
		_case: A('case', { beforeExpr: g }),
		_catch: A('catch'),
		_continue: A('continue'),
		_debugger: A('debugger'),
		_default: A('default', { beforeExpr: g }),
		_else: A('else', { beforeExpr: g }),
		_finally: A('finally'),
		_function: A('function', { startsExpr: m }),
		_if: A('if'),
		_return: A('return', { beforeExpr: g }),
		_switch: A('switch'),
		_throw: A('throw', { beforeExpr: g, prefix: q, startsExpr: m }),
		_try: A('try'),
		_var: A('var'),
		_const: A('const'),
		_with: A('with'),
		_new: A('new', { beforeExpr: g, startsExpr: m }),
		_this: A('this', { startsExpr: m }),
		_super: A('super', { startsExpr: m }),
		_class: A('class', { startsExpr: m }),
		_extends: A('extends', { beforeExpr: g }),
		_export: A('export'),
		_import: A('import', { startsExpr: m }),
		_null: A('null', { startsExpr: m }),
		_true: A('true', { startsExpr: m }),
		_false: A('false', { startsExpr: m }),
		_typeof: A('typeof', { beforeExpr: g, prefix: q, startsExpr: m }),
		_void: A('void', { beforeExpr: g, prefix: q, startsExpr: m }),
		_delete: A('delete', { beforeExpr: g, prefix: q, startsExpr: m }),
		_do: A('do', { isLoop: ut, beforeExpr: g }),
		_for: A('for', { isLoop: ut }),
		_while: A('while', { isLoop: ut }),
		_as: b('as', { startsExpr: m }),
		_assert: b('assert', { startsExpr: m }),
		_async: b('async', { startsExpr: m }),
		_await: b('await', { startsExpr: m }),
		_from: b('from', { startsExpr: m }),
		_get: b('get', { startsExpr: m }),
		_let: b('let', { startsExpr: m }),
		_meta: b('meta', { startsExpr: m }),
		_of: b('of', { startsExpr: m }),
		_sent: b('sent', { startsExpr: m }),
		_set: b('set', { startsExpr: m }),
		_static: b('static', { startsExpr: m }),
		_using: b('using', { startsExpr: m }),
		_yield: b('yield', { startsExpr: m }),
		_asserts: b('asserts', { startsExpr: m }),
		_checks: b('checks', { startsExpr: m }),
		_exports: b('exports', { startsExpr: m }),
		_global: b('global', { startsExpr: m }),
		_implements: b('implements', { startsExpr: m }),
		_intrinsic: b('intrinsic', { startsExpr: m }),
		_infer: b('infer', { startsExpr: m }),
		_is: b('is', { startsExpr: m }),
		_mixins: b('mixins', { startsExpr: m }),
		_proto: b('proto', { startsExpr: m }),
		_require: b('require', { startsExpr: m }),
		_satisfies: b('satisfies', { startsExpr: m }),
		_keyof: b('keyof', { startsExpr: m }),
		_readonly: b('readonly', { startsExpr: m }),
		_unique: b('unique', { startsExpr: m }),
		_abstract: b('abstract', { startsExpr: m }),
		_declare: b('declare', { startsExpr: m }),
		_enum: b('enum', { startsExpr: m }),
		_module: b('module', { startsExpr: m }),
		_namespace: b('namespace', { startsExpr: m }),
		_interface: b('interface', { startsExpr: m }),
		_type: b('type', { startsExpr: m }),
		_opaque: b('opaque', { startsExpr: m }),
		name: P('name', { startsExpr: m }),
		string: P('string', { startsExpr: m }),
		num: P('num', { startsExpr: m }),
		bigint: P('bigint', { startsExpr: m }),
		decimal: P('decimal', { startsExpr: m }),
		regexp: P('regexp', { startsExpr: m }),
		privateName: P('#name', { startsExpr: m }),
		eof: P('eof'),
		jsxName: P('jsxName'),
		jsxText: P('jsxText', { beforeExpr: !0 }),
		jsxTagStart: P('jsxTagStart', { startsExpr: !0 }),
		jsxTagEnd: P('jsxTagEnd'),
		placeholder: P('%%', { startsExpr: !0 })
	};
	function S(a) {
		return a >= 93 && a <= 130;
	}
	function ar(a) {
		return a <= 92;
	}
	function M(a) {
		return a >= 58 && a <= 130;
	}
	function ks(a) {
		return a >= 58 && a <= 134;
	}
	function nr(a) {
		return Ht[a];
	}
	function gt(a) {
		return Wt[a];
	}
	function or(a) {
		return a >= 29 && a <= 33;
	}
	function ds(a) {
		return a >= 127 && a <= 129;
	}
	function hr(a) {
		return a >= 90 && a <= 92;
	}
	function Xt(a) {
		return a >= 58 && a <= 92;
	}
	function lr(a) {
		return a >= 39 && a <= 59;
	}
	function cr(a) {
		return a === 34;
	}
	function pr(a) {
		return Jt[a];
	}
	function ur(a) {
		return a >= 119 && a <= 121;
	}
	function fr(a) {
		return a >= 122 && a <= 128;
	}
	function J(a) {
		return Kt[a];
	}
	function Ve(a) {
		return qt[a];
	}
	function dr(a) {
		return a === 57;
	}
	function Je(a) {
		return a >= 24 && a <= 25;
	}
	function U(a) {
		return j[a];
	}
	(j[8].updateContext = (a) => {
		a.pop();
	}),
		(j[5].updateContext =
			j[7].updateContext =
			j[23].updateContext =
				(a) => {
					a.push(E.brace);
				}),
		(j[22].updateContext = (a) => {
			a[a.length - 1] === E.template ? a.pop() : a.push(E.template);
		}),
		(j[140].updateContext = (a) => {
			a.push(E.j_expr, E.j_oTag);
		});
	var Gt =
			'\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC',
		vs =
			'\u200C\u200D\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0CF3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF-\u1ACE\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F',
		mr = new RegExp('[' + Gt + ']'),
		yr = new RegExp('[' + Gt + vs + ']');
	Gt = vs = null;
	var Ls = [
			0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48,
			48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35,
			5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 68,
			310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3,
			22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16,
			3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14,
			17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21,
			43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30,
			0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1,
			64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2,
			4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185,
			46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63,
			32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0,
			29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 264, 8, 2, 36, 18, 0,
			50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18,
			16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16,
			1071, 18, 5, 4026, 582, 8634, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3,
			32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9,
			1237, 43, 8, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9,
			395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3,
			3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4,
			6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30,
			2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19,
			43, 485, 27, 757, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2,
			26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2,
			2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3,
			2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7, 221,
			3, 5761, 15, 7472, 3104, 541, 1507, 4938, 6, 4191
		],
		xr = [
			509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1,
			574, 3, 9, 9, 370, 1, 81, 2, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1,
			11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49,
			13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3,
			1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9,
			214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14,
			166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9,
			41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13,
			123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10,
			1, 2, 0, 49, 6, 4, 4, 14, 9, 5351, 0, 7, 14, 13835, 9, 87, 9, 39, 4, 60,
			6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4706, 45, 3, 22,
			543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0,
			15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10,
			9, 357, 0, 62, 13, 499, 13, 983, 6, 110, 6, 6, 9, 4759, 9, 787719, 239
		];
	function bt(a, t) {
		let e = 65536;
		for (let s = 0, i = t.length; s < i; s += 2) {
			if (((e += t[s]), e > a)) return !1;
			if (((e += t[s + 1]), e >= a)) return !0;
		}
		return !1;
	}
	function $(a) {
		return a < 65
			? a === 36
			: a <= 90
			? !0
			: a < 97
			? a === 95
			: a <= 122
			? !0
			: a <= 65535
			? a >= 170 && mr.test(String.fromCharCode(a))
			: bt(a, Ls);
	}
	function he(a) {
		return a < 48
			? a === 36
			: a < 58
			? !0
			: a < 65
			? !1
			: a <= 90
			? !0
			: a < 97
			? a === 95
			: a <= 122
			? !0
			: a <= 65535
			? a >= 170 && yr.test(String.fromCharCode(a))
			: bt(a, Ls) || bt(a, xr);
	}
	var Yt = {
			keyword: [
				'break',
				'case',
				'catch',
				'continue',
				'debugger',
				'default',
				'do',
				'else',
				'finally',
				'for',
				'function',
				'if',
				'return',
				'switch',
				'throw',
				'try',
				'var',
				'const',
				'while',
				'with',
				'new',
				'this',
				'super',
				'class',
				'extends',
				'export',
				'import',
				'null',
				'true',
				'false',
				'in',
				'instanceof',
				'typeof',
				'void',
				'delete'
			],
			strict: [
				'implements',
				'interface',
				'let',
				'package',
				'private',
				'protected',
				'public',
				'static',
				'yield'
			],
			strictBind: ['eval', 'arguments']
		},
		Pr = new Set(Yt.keyword),
		Tr = new Set(Yt.strict),
		gr = new Set(Yt.strictBind);
	function Ds(a, t) {
		return (t && a === 'await') || a === 'enum';
	}
	function Ms(a, t) {
		return Ds(a, t) || Tr.has(a);
	}
	function Os(a) {
		return gr.has(a);
	}
	function Bs(a, t) {
		return Ms(a, t) || Os(a);
	}
	function br(a) {
		return Pr.has(a);
	}
	function Ar(a, t, e) {
		return a === 64 && t === 64 && $(e);
	}
	var Sr = new Set([
		'break',
		'case',
		'catch',
		'continue',
		'debugger',
		'default',
		'do',
		'else',
		'finally',
		'for',
		'function',
		'if',
		'return',
		'switch',
		'throw',
		'try',
		'var',
		'const',
		'while',
		'with',
		'new',
		'this',
		'super',
		'class',
		'extends',
		'export',
		'import',
		'null',
		'true',
		'false',
		'in',
		'instanceof',
		'typeof',
		'void',
		'delete',
		'implements',
		'interface',
		'let',
		'package',
		'private',
		'protected',
		'public',
		'static',
		'yield',
		'eval',
		'arguments',
		'enum',
		'await'
	]);
	function Er(a) {
		return Sr.has(a);
	}
	var ae = 0,
		ne = 1,
		z = 2,
		Qt = 4,
		Fs = 8,
		Xe = 16,
		_s = 32,
		ee = 64,
		Ge = 128,
		le = 256,
		Ue = ne | z | Ge | le,
		F = 1,
		se = 2,
		Rs = 4,
		te = 8,
		ze = 16,
		Us = 64,
		Ye = 128,
		At = 256,
		St = 512,
		Zt = 1024,
		Et = 2048,
		Ne = 4096,
		st = 8192,
		js = F | se | te | Ye | st,
		ce = F | 0 | te | st,
		Cr = F | 0 | te | 0,
		Qe = F | 0 | Rs | 0,
		$s = F | 0 | ze | 0,
		wr = 0 | se | 0 | Ye,
		Ir = 0 | se | 0 | 0,
		Vs = F | se | te | At | st,
		ms = 0 | Zt,
		W = 0 | Us,
		Nr = F | 0 | 0 | Us,
		kr = Vs | St,
		vr = 0 | Zt,
		ys = 0 | se | 0 | Ne,
		Lr = Et,
		Ze = 4,
		es = 2,
		ts = 1,
		ft = es | ts,
		Dr = es | Ze,
		Mr = ts | Ze,
		Or = es,
		Br = ts,
		dt = 0,
		ve = class {
			constructor(t) {
				(this.var = new Set()),
					(this.lexical = new Set()),
					(this.functions = new Set()),
					(this.flags = t);
			}
		},
		Le = class {
			constructor(t, e) {
				(this.parser = void 0),
					(this.scopeStack = []),
					(this.inModule = void 0),
					(this.undefinedExports = new Map()),
					(this.parser = t),
					(this.inModule = e);
			}
			get inTopLevel() {
				return (this.currentScope().flags & ne) > 0;
			}
			get inFunction() {
				return (this.currentVarScopeFlags() & z) > 0;
			}
			get allowSuper() {
				return (this.currentThisScopeFlags() & Xe) > 0;
			}
			get allowDirectSuper() {
				return (this.currentThisScopeFlags() & _s) > 0;
			}
			get inClass() {
				return (this.currentThisScopeFlags() & ee) > 0;
			}
			get inClassAndNotInNonArrowFunction() {
				let t = this.currentThisScopeFlags();
				return (t & ee) > 0 && (t & z) === 0;
			}
			get inStaticBlock() {
				for (let t = this.scopeStack.length - 1; ; t--) {
					let { flags: e } = this.scopeStack[t];
					if (e & Ge) return !0;
					if (e & (Ue | ee)) return !1;
				}
			}
			get inNonArrowFunction() {
				return (this.currentThisScopeFlags() & z) > 0;
			}
			get treatFunctionsAsVar() {
				return this.treatFunctionsAsVarInScope(this.currentScope());
			}
			createScope(t) {
				return new ve(t);
			}
			enter(t) {
				this.scopeStack.push(this.createScope(t));
			}
			exit() {
				return this.scopeStack.pop().flags;
			}
			treatFunctionsAsVarInScope(t) {
				return !!(
					t.flags & (z | Ge) ||
					(!this.parser.inModule && t.flags & ne)
				);
			}
			declareName(t, e, s) {
				let i = this.currentScope();
				if (e & te || e & ze)
					this.checkRedeclarationInScope(i, t, e, s),
						e & ze ? i.functions.add(t) : i.lexical.add(t),
						e & te && this.maybeExportDefined(i, t);
				else if (e & Rs)
					for (
						let r = this.scopeStack.length - 1;
						r >= 0 &&
						((i = this.scopeStack[r]),
						this.checkRedeclarationInScope(i, t, e, s),
						i.var.add(t),
						this.maybeExportDefined(i, t),
						!(i.flags & Ue));
						--r
					);
				this.parser.inModule && i.flags & ne && this.undefinedExports.delete(t);
			}
			maybeExportDefined(t, e) {
				this.parser.inModule && t.flags & ne && this.undefinedExports.delete(e);
			}
			checkRedeclarationInScope(t, e, s, i) {
				this.isRedeclaredInScope(t, e, s) &&
					this.parser.raise(p.VarRedeclaration, { at: i, identifierName: e });
			}
			isRedeclaredInScope(t, e, s) {
				return s & F
					? s & te
						? t.lexical.has(e) || t.functions.has(e) || t.var.has(e)
						: s & ze
						? t.lexical.has(e) ||
						  (!this.treatFunctionsAsVarInScope(t) && t.var.has(e))
						: (t.lexical.has(e) &&
								!(t.flags & Fs && t.lexical.values().next().value === e)) ||
						  (!this.treatFunctionsAsVarInScope(t) && t.functions.has(e))
					: !1;
			}
			checkLocalExport(t) {
				let { name: e } = t,
					s = this.scopeStack[0];
				!s.lexical.has(e) &&
					!s.var.has(e) &&
					!s.functions.has(e) &&
					this.undefinedExports.set(e, t.loc.start);
			}
			currentScope() {
				return this.scopeStack[this.scopeStack.length - 1];
			}
			currentVarScopeFlags() {
				for (let t = this.scopeStack.length - 1; ; t--) {
					let { flags: e } = this.scopeStack[t];
					if (e & Ue) return e;
				}
			}
			currentThisScopeFlags() {
				for (let t = this.scopeStack.length - 1; ; t--) {
					let { flags: e } = this.scopeStack[t];
					if (e & (Ue | ee) && !(e & Qt)) return e;
				}
			}
		},
		Ct = class extends ve {
			constructor(...t) {
				super(...t), (this.declareFunctions = new Set());
			}
		},
		wt = class extends Le {
			createScope(t) {
				return new Ct(t);
			}
			declareName(t, e, s) {
				let i = this.currentScope();
				if (e & Et) {
					this.checkRedeclarationInScope(i, t, e, s),
						this.maybeExportDefined(i, t),
						i.declareFunctions.add(t);
					return;
				}
				super.declareName(t, e, s);
			}
			isRedeclaredInScope(t, e, s) {
				return super.isRedeclaredInScope(t, e, s)
					? !0
					: s & Et
					? !t.declareFunctions.has(e) &&
					  (t.lexical.has(e) || t.functions.has(e))
					: !1;
			}
			checkLocalExport(t) {
				this.scopeStack[0].declareFunctions.has(t.name) ||
					super.checkLocalExport(t);
			}
		},
		It = class {
			constructor() {
				(this.sawUnambiguousESM = !1), (this.ambiguousScriptDifferentAst = !1);
			}
			hasPlugin(t) {
				if (typeof t == 'string') return this.plugins.has(t);
				{
					let [e, s] = t;
					if (!this.hasPlugin(e)) return !1;
					let i = this.plugins.get(e);
					for (let r of Object.keys(s))
						if ((i == null ? void 0 : i[r]) !== s[r]) return !1;
					return !0;
				}
			}
			getPluginOption(t, e) {
				var s;
				return (s = this.plugins.get(t)) == null ? void 0 : s[e];
			}
		};
	function zs(a, t) {
		a.trailingComments === void 0
			? (a.trailingComments = t)
			: a.trailingComments.unshift(...t);
	}
	function Fr(a, t) {
		a.leadingComments === void 0
			? (a.leadingComments = t)
			: a.leadingComments.unshift(...t);
	}
	function De(a, t) {
		a.innerComments === void 0
			? (a.innerComments = t)
			: a.innerComments.unshift(...t);
	}
	function Ee(a, t, e) {
		let s = null,
			i = t.length;
		for (; s === null && i > 0; ) s = t[--i];
		s === null || s.start > e.start ? De(a, e.comments) : zs(s, e.comments);
	}
	var Nt = class extends It {
			addComment(t) {
				this.filename && (t.loc.filename = this.filename),
					this.state.comments.push(t);
			}
			processComment(t) {
				let { commentStack: e } = this.state,
					s = e.length;
				if (s === 0) return;
				let i = s - 1,
					r = e[i];
				r.start === t.end && ((r.leadingNode = t), i--);
				let { start: n } = t;
				for (; i >= 0; i--) {
					let o = e[i],
						h = o.end;
					if (h > n)
						(o.containingNode = t), this.finalizeComment(o), e.splice(i, 1);
					else {
						h === n && (o.trailingNode = t);
						break;
					}
				}
			}
			finalizeComment(t) {
				let { comments: e } = t;
				if (t.leadingNode !== null || t.trailingNode !== null)
					t.leadingNode !== null && zs(t.leadingNode, e),
						t.trailingNode !== null && Fr(t.trailingNode, e);
				else {
					let { containingNode: s, start: i } = t;
					if (this.input.charCodeAt(i - 1) === 44)
						switch (s.type) {
							case 'ObjectExpression':
							case 'ObjectPattern':
							case 'RecordExpression':
								Ee(s, s.properties, t);
								break;
							case 'CallExpression':
							case 'OptionalCallExpression':
								Ee(s, s.arguments, t);
								break;
							case 'FunctionDeclaration':
							case 'FunctionExpression':
							case 'ArrowFunctionExpression':
							case 'ObjectMethod':
							case 'ClassMethod':
							case 'ClassPrivateMethod':
								Ee(s, s.params, t);
								break;
							case 'ArrayExpression':
							case 'ArrayPattern':
							case 'TupleExpression':
								Ee(s, s.elements, t);
								break;
							case 'ExportNamedDeclaration':
							case 'ImportDeclaration':
								Ee(s, s.specifiers, t);
								break;
							default:
								De(s, e);
						}
					else De(s, e);
				}
			}
			finalizeRemainingComments() {
				let { commentStack: t } = this.state;
				for (let e = t.length - 1; e >= 0; e--) this.finalizeComment(t[e]);
				this.state.commentStack = [];
			}
			resetPreviousNodeTrailingComments(t) {
				let { commentStack: e } = this.state,
					{ length: s } = e;
				if (s === 0) return;
				let i = e[s - 1];
				i.leadingNode === t && (i.leadingNode = null);
			}
			resetPreviousIdentifierLeadingComments(t) {
				let { commentStack: e } = this.state,
					{ length: s } = e;
				s !== 0 &&
					(e[s - 1].trailingNode === t
						? (e[s - 1].trailingNode = null)
						: s >= 2 &&
						  e[s - 2].trailingNode === t &&
						  (e[s - 2].trailingNode = null));
			}
			takeSurroundingComments(t, e, s) {
				let { commentStack: i } = this.state,
					r = i.length;
				if (r === 0) return;
				let n = r - 1;
				for (; n >= 0; n--) {
					let o = i[n],
						h = o.end;
					if (o.start === s) o.leadingNode = t;
					else if (h === e) o.trailingNode = t;
					else if (h < e) break;
				}
			}
		},
		Ks = /\r\n?|[\n\u2028\u2029]/,
		je = new RegExp(Ks.source, 'g');
	function ke(a) {
		switch (a) {
			case 10:
			case 13:
			case 8232:
			case 8233:
				return !0;
			default:
				return !1;
		}
	}
	var mt = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
		Ke = /(?:[^\S\n\r\u2028\u2029]|\/\/.*|\/\*.*?\*\/)*/g,
		xs = new RegExp(
			'(?=(' +
				Ke.source +
				'))\\1' +
				/(?=[\n\r\u2028\u2029]|\/\*(?!.*?\*\/)|$)/.source,
			'y'
		);
	function _r(a) {
		switch (a) {
			case 9:
			case 11:
			case 12:
			case 32:
			case 160:
			case 5760:
			case 8192:
			case 8193:
			case 8194:
			case 8195:
			case 8196:
			case 8197:
			case 8198:
			case 8199:
			case 8200:
			case 8201:
			case 8202:
			case 8239:
			case 8287:
			case 12288:
			case 65279:
				return !0;
			default:
				return !1;
		}
	}
	var kt = class a {
			constructor() {
				(this.strict = void 0),
					(this.curLine = void 0),
					(this.lineStart = void 0),
					(this.startLoc = void 0),
					(this.endLoc = void 0),
					(this.errors = []),
					(this.potentialArrowAt = -1),
					(this.noArrowAt = []),
					(this.noArrowParamsConversionAt = []),
					(this.maybeInArrowParameters = !1),
					(this.inType = !1),
					(this.noAnonFunctionType = !1),
					(this.hasFlowComment = !1),
					(this.isAmbientContext = !1),
					(this.inAbstractClass = !1),
					(this.inDisallowConditionalTypesContext = !1),
					(this.topicContext = {
						maxNumOfResolvableTopics: 0,
						maxTopicIndex: null
					}),
					(this.soloAwait = !1),
					(this.inFSharpPipelineDirectBody = !1),
					(this.labels = []),
					(this.comments = []),
					(this.commentStack = []),
					(this.pos = 0),
					(this.type = 137),
					(this.value = null),
					(this.start = 0),
					(this.end = 0),
					(this.lastTokEndLoc = null),
					(this.lastTokStartLoc = null),
					(this.lastTokStart = 0),
					(this.context = [E.brace]),
					(this.canStartJSXElement = !0),
					(this.containsEsc = !1),
					(this.firstInvalidTemplateEscapePos = null),
					(this.strictErrors = new Map()),
					(this.tokensLength = 0);
			}
			init({ strictMode: t, sourceType: e, startLine: s, startColumn: i }) {
				(this.strict = t === !1 ? !1 : t === !0 ? !0 : e === 'module'),
					(this.curLine = s),
					(this.lineStart = -i),
					(this.startLoc = this.endLoc = new B(s, i, 0));
			}
			curPosition() {
				return new B(this.curLine, this.pos - this.lineStart, this.pos);
			}
			clone(t) {
				let e = new a(),
					s = Object.keys(this);
				for (let i = 0, r = s.length; i < r; i++) {
					let n = s[i],
						o = this[n];
					!t && Array.isArray(o) && (o = o.slice()), (e[n] = o);
				}
				return e;
			}
		},
		Rr = function (t) {
			return t >= 48 && t <= 57;
		},
		Ps = {
			decBinOct: new Set([46, 66, 69, 79, 95, 98, 101, 111]),
			hex: new Set([46, 88, 95, 120])
		},
		$e = {
			bin: (a) => a === 48 || a === 49,
			oct: (a) => a >= 48 && a <= 55,
			dec: (a) => a >= 48 && a <= 57,
			hex: (a) =>
				(a >= 48 && a <= 57) || (a >= 65 && a <= 70) || (a >= 97 && a <= 102)
		};
	function Ts(a, t, e, s, i, r) {
		let n = e,
			o = s,
			h = i,
			l = '',
			c = null,
			u = e,
			{ length: d } = t;
		for (;;) {
			if (e >= d) {
				r.unterminated(n, o, h), (l += t.slice(u, e));
				break;
			}
			let f = t.charCodeAt(e);
			if (Ur(a, f, t, e)) {
				l += t.slice(u, e);
				break;
			}
			if (f === 92) {
				l += t.slice(u, e);
				let x = jr(t, e, s, i, a === 'template', r);
				x.ch === null && !c
					? (c = { pos: e, lineStart: s, curLine: i })
					: (l += x.ch),
					({ pos: e, lineStart: s, curLine: i } = x),
					(u = e);
			} else
				f === 8232 || f === 8233
					? (++e, ++i, (s = e))
					: f === 10 || f === 13
					? a === 'template'
						? ((l +=
								t.slice(u, e) +
								`
`),
						  ++e,
						  f === 13 && t.charCodeAt(e) === 10 && ++e,
						  ++i,
						  (u = s = e))
						: r.unterminated(n, o, h)
					: ++e;
		}
		return {
			pos: e,
			str: l,
			firstInvalidLoc: c,
			lineStart: s,
			curLine: i,
			containsInvalid: !!c
		};
	}
	function Ur(a, t, e, s) {
		return a === 'template'
			? t === 96 || (t === 36 && e.charCodeAt(s + 1) === 123)
			: t === (a === 'double' ? 34 : 39);
	}
	function jr(a, t, e, s, i, r) {
		let n = !i;
		t++;
		let o = (l) => ({ pos: t, ch: l, lineStart: e, curLine: s }),
			h = a.charCodeAt(t++);
		switch (h) {
			case 110:
				return o(`
`);
			case 114:
				return o('\r');
			case 120: {
				let l;
				return (
					({ code: l, pos: t } = vt(a, t, e, s, 2, !1, n, r)),
					o(l === null ? null : String.fromCharCode(l))
				);
			}
			case 117: {
				let l;
				return (
					({ code: l, pos: t } = Hs(a, t, e, s, n, r)),
					o(l === null ? null : String.fromCodePoint(l))
				);
			}
			case 116:
				return o('	');
			case 98:
				return o('\b');
			case 118:
				return o('\v');
			case 102:
				return o('\f');
			case 13:
				a.charCodeAt(t) === 10 && ++t;
			case 10:
				(e = t), ++s;
			case 8232:
			case 8233:
				return o('');
			case 56:
			case 57:
				if (i) return o(null);
				r.strictNumericEscape(t - 1, e, s);
			default:
				if (h >= 48 && h <= 55) {
					let l = t - 1,
						u = a.slice(l, t + 2).match(/^[0-7]+/)[0],
						d = parseInt(u, 8);
					d > 255 && ((u = u.slice(0, -1)), (d = parseInt(u, 8))),
						(t += u.length - 1);
					let f = a.charCodeAt(t);
					if (u !== '0' || f === 56 || f === 57) {
						if (i) return o(null);
						r.strictNumericEscape(l, e, s);
					}
					return o(String.fromCharCode(d));
				}
				return o(String.fromCharCode(h));
		}
	}
	function vt(a, t, e, s, i, r, n, o) {
		let h = t,
			l;
		return (
			({ n: l, pos: t } = qs(a, t, e, s, 16, i, r, !1, o, !n)),
			l === null && (n ? o.invalidEscapeSequence(h, e, s) : (t = h - 1)),
			{ code: l, pos: t }
		);
	}
	function qs(a, t, e, s, i, r, n, o, h, l) {
		let c = t,
			u = i === 16 ? Ps.hex : Ps.decBinOct,
			d = i === 16 ? $e.hex : i === 10 ? $e.dec : i === 8 ? $e.oct : $e.bin,
			f = !1,
			x = 0;
		for (let I = 0, C = r ?? 1 / 0; I < C; ++I) {
			let w = a.charCodeAt(t),
				N;
			if (w === 95 && o !== 'bail') {
				let Re = a.charCodeAt(t - 1),
					be = a.charCodeAt(t + 1);
				if (o) {
					if (Number.isNaN(be) || !d(be) || u.has(Re) || u.has(be)) {
						if (l) return { n: null, pos: t };
						h.unexpectedNumericSeparator(t, e, s);
					}
				} else {
					if (l) return { n: null, pos: t };
					h.numericSeparatorInEscapeSequence(t, e, s);
				}
				++t;
				continue;
			}
			if (
				(w >= 97
					? (N = w - 97 + 10)
					: w >= 65
					? (N = w - 65 + 10)
					: Rr(w)
					? (N = w - 48)
					: (N = 1 / 0),
				N >= i)
			) {
				if (N <= 9 && l) return { n: null, pos: t };
				if (N <= 9 && h.invalidDigit(t, e, s, i)) N = 0;
				else if (n) (N = 0), (f = !0);
				else break;
			}
			++t, (x = x * i + N);
		}
		return t === c || (r != null && t - c !== r) || f
			? { n: null, pos: t }
			: { n: x, pos: t };
	}
	function Hs(a, t, e, s, i, r) {
		let n = a.charCodeAt(t),
			o;
		if (n === 123) {
			if (
				(++t,
				({ code: o, pos: t } = vt(a, t, e, s, a.indexOf('}', t) - t, !0, i, r)),
				++t,
				o !== null && o > 1114111)
			)
				if (i) r.invalidCodePoint(t, e, s);
				else return { code: null, pos: t };
		} else ({ code: o, pos: t } = vt(a, t, e, s, 4, !1, i, r));
		return { code: o, pos: t };
	}
	var $r = ['at'],
		Vr = ['at'];
	function Ce(a, t, e) {
		return new B(e, a - t, a);
	}
	var zr = new Set([103, 109, 115, 105, 121, 117, 100, 118]),
		O = class {
			constructor(t) {
				(this.type = t.type),
					(this.value = t.value),
					(this.start = t.start),
					(this.end = t.end),
					(this.loc = new fe(t.startLoc, t.endLoc));
			}
		},
		Lt = class extends Nt {
			constructor(t, e) {
				super(),
					(this.isLookahead = void 0),
					(this.tokens = []),
					(this.errorHandlers_readInt = {
						invalidDigit: (s, i, r, n) =>
							this.options.errorRecovery
								? (this.raise(p.InvalidDigit, { at: Ce(s, i, r), radix: n }),
								  !0)
								: !1,
						numericSeparatorInEscapeSequence: this.errorBuilder(
							p.NumericSeparatorInEscapeSequence
						),
						unexpectedNumericSeparator: this.errorBuilder(
							p.UnexpectedNumericSeparator
						)
					}),
					(this.errorHandlers_readCodePoint = Object.assign(
						{},
						this.errorHandlers_readInt,
						{
							invalidEscapeSequence: this.errorBuilder(p.InvalidEscapeSequence),
							invalidCodePoint: this.errorBuilder(p.InvalidCodePoint)
						}
					)),
					(this.errorHandlers_readStringContents_string = Object.assign(
						{},
						this.errorHandlers_readCodePoint,
						{
							strictNumericEscape: (s, i, r) => {
								this.recordStrictModeErrors(p.StrictNumericEscape, {
									at: Ce(s, i, r)
								});
							},
							unterminated: (s, i, r) => {
								throw this.raise(p.UnterminatedString, { at: Ce(s - 1, i, r) });
							}
						}
					)),
					(this.errorHandlers_readStringContents_template = Object.assign(
						{},
						this.errorHandlers_readCodePoint,
						{
							strictNumericEscape: this.errorBuilder(p.StrictNumericEscape),
							unterminated: (s, i, r) => {
								throw this.raise(p.UnterminatedTemplate, { at: Ce(s, i, r) });
							}
						}
					)),
					(this.state = new kt()),
					this.state.init(t),
					(this.input = e),
					(this.length = e.length),
					(this.isLookahead = !1);
			}
			pushToken(t) {
				(this.tokens.length = this.state.tokensLength),
					this.tokens.push(t),
					++this.state.tokensLength;
			}
			next() {
				this.checkKeywordEscapes(),
					this.options.tokens && this.pushToken(new O(this.state)),
					(this.state.lastTokStart = this.state.start),
					(this.state.lastTokEndLoc = this.state.endLoc),
					(this.state.lastTokStartLoc = this.state.startLoc),
					this.nextToken();
			}
			eat(t) {
				return this.match(t) ? (this.next(), !0) : !1;
			}
			match(t) {
				return this.state.type === t;
			}
			createLookaheadState(t) {
				return {
					pos: t.pos,
					value: null,
					type: t.type,
					start: t.start,
					end: t.end,
					context: [this.curContext()],
					inType: t.inType,
					startLoc: t.startLoc,
					lastTokEndLoc: t.lastTokEndLoc,
					curLine: t.curLine,
					lineStart: t.lineStart,
					curPosition: t.curPosition
				};
			}
			lookahead() {
				let t = this.state;
				(this.state = this.createLookaheadState(t)),
					(this.isLookahead = !0),
					this.nextToken(),
					(this.isLookahead = !1);
				let e = this.state;
				return (this.state = t), e;
			}
			nextTokenStart() {
				return this.nextTokenStartSince(this.state.pos);
			}
			nextTokenStartSince(t) {
				return (mt.lastIndex = t), mt.test(this.input) ? mt.lastIndex : t;
			}
			lookaheadCharCode() {
				return this.input.charCodeAt(this.nextTokenStart());
			}
			nextTokenInLineStart() {
				return this.nextTokenInLineStartSince(this.state.pos);
			}
			nextTokenInLineStartSince(t) {
				return (Ke.lastIndex = t), Ke.test(this.input) ? Ke.lastIndex : t;
			}
			lookaheadInLineCharCode() {
				return this.input.charCodeAt(this.nextTokenInLineStart());
			}
			codePointAtPos(t) {
				let e = this.input.charCodeAt(t);
				if ((e & 64512) === 55296 && ++t < this.input.length) {
					let s = this.input.charCodeAt(t);
					(s & 64512) === 56320 &&
						(e = 65536 + ((e & 1023) << 10) + (s & 1023));
				}
				return e;
			}
			setStrict(t) {
				(this.state.strict = t),
					t &&
						(this.state.strictErrors.forEach(([e, s]) =>
							this.raise(e, { at: s })
						),
						this.state.strictErrors.clear());
			}
			curContext() {
				return this.state.context[this.state.context.length - 1];
			}
			nextToken() {
				if (
					(this.skipSpace(),
					(this.state.start = this.state.pos),
					this.isLookahead || (this.state.startLoc = this.state.curPosition()),
					this.state.pos >= this.length)
				) {
					this.finishToken(137);
					return;
				}
				this.getTokenFromCode(this.codePointAtPos(this.state.pos));
			}
			skipBlockComment(t) {
				let e;
				this.isLookahead || (e = this.state.curPosition());
				let s = this.state.pos,
					i = this.input.indexOf(t, s + 2);
				if (i === -1)
					throw this.raise(p.UnterminatedComment, {
						at: this.state.curPosition()
					});
				for (
					this.state.pos = i + t.length, je.lastIndex = s + 2;
					je.test(this.input) && je.lastIndex <= i;

				)
					++this.state.curLine, (this.state.lineStart = je.lastIndex);
				if (this.isLookahead) return;
				let r = {
					type: 'CommentBlock',
					value: this.input.slice(s + 2, i),
					start: s,
					end: i + t.length,
					loc: new fe(e, this.state.curPosition())
				};
				return this.options.tokens && this.pushToken(r), r;
			}
			skipLineComment(t) {
				let e = this.state.pos,
					s;
				this.isLookahead || (s = this.state.curPosition());
				let i = this.input.charCodeAt((this.state.pos += t));
				if (this.state.pos < this.length)
					for (; !ke(i) && ++this.state.pos < this.length; )
						i = this.input.charCodeAt(this.state.pos);
				if (this.isLookahead) return;
				let r = this.state.pos,
					o = {
						type: 'CommentLine',
						value: this.input.slice(e + t, r),
						start: e,
						end: r,
						loc: new fe(s, this.state.curPosition())
					};
				return this.options.tokens && this.pushToken(o), o;
			}
			skipSpace() {
				let t = this.state.pos,
					e = [];
				e: for (; this.state.pos < this.length; ) {
					let s = this.input.charCodeAt(this.state.pos);
					switch (s) {
						case 32:
						case 160:
						case 9:
							++this.state.pos;
							break;
						case 13:
							this.input.charCodeAt(this.state.pos + 1) === 10 &&
								++this.state.pos;
						case 10:
						case 8232:
						case 8233:
							++this.state.pos,
								++this.state.curLine,
								(this.state.lineStart = this.state.pos);
							break;
						case 47:
							switch (this.input.charCodeAt(this.state.pos + 1)) {
								case 42: {
									let i = this.skipBlockComment('*/');
									i !== void 0 &&
										(this.addComment(i),
										this.options.attachComment && e.push(i));
									break;
								}
								case 47: {
									let i = this.skipLineComment(2);
									i !== void 0 &&
										(this.addComment(i),
										this.options.attachComment && e.push(i));
									break;
								}
								default:
									break e;
							}
							break;
						default:
							if (_r(s)) ++this.state.pos;
							else if (s === 45 && !this.inModule && this.options.annexB) {
								let i = this.state.pos;
								if (
									this.input.charCodeAt(i + 1) === 45 &&
									this.input.charCodeAt(i + 2) === 62 &&
									(t === 0 || this.state.lineStart > t)
								) {
									let r = this.skipLineComment(3);
									r !== void 0 &&
										(this.addComment(r),
										this.options.attachComment && e.push(r));
								} else break e;
							} else if (s === 60 && !this.inModule && this.options.annexB) {
								let i = this.state.pos;
								if (
									this.input.charCodeAt(i + 1) === 33 &&
									this.input.charCodeAt(i + 2) === 45 &&
									this.input.charCodeAt(i + 3) === 45
								) {
									let r = this.skipLineComment(4);
									r !== void 0 &&
										(this.addComment(r),
										this.options.attachComment && e.push(r));
								} else break e;
							} else break e;
					}
				}
				if (e.length > 0) {
					let s = this.state.pos,
						i = {
							start: t,
							end: s,
							comments: e,
							leadingNode: null,
							trailingNode: null,
							containingNode: null
						};
					this.state.commentStack.push(i);
				}
			}
			finishToken(t, e) {
				(this.state.end = this.state.pos),
					(this.state.endLoc = this.state.curPosition());
				let s = this.state.type;
				(this.state.type = t),
					(this.state.value = e),
					this.isLookahead || this.updateContext(s);
			}
			replaceToken(t) {
				(this.state.type = t), this.updateContext();
			}
			readToken_numberSign() {
				if (this.state.pos === 0 && this.readToken_interpreter()) return;
				let t = this.state.pos + 1,
					e = this.codePointAtPos(t);
				if (e >= 48 && e <= 57)
					throw this.raise(p.UnexpectedDigitAfterHash, {
						at: this.state.curPosition()
					});
				if (e === 123 || (e === 91 && this.hasPlugin('recordAndTuple'))) {
					if (
						(this.expectPlugin('recordAndTuple'),
						this.getPluginOption('recordAndTuple', 'syntaxType') === 'bar')
					)
						throw this.raise(
							e === 123
								? p.RecordExpressionHashIncorrectStartSyntaxType
								: p.TupleExpressionHashIncorrectStartSyntaxType,
							{ at: this.state.curPosition() }
						);
					(this.state.pos += 2),
						e === 123 ? this.finishToken(7) : this.finishToken(1);
				} else
					$(e)
						? (++this.state.pos, this.finishToken(136, this.readWord1(e)))
						: e === 92
						? (++this.state.pos, this.finishToken(136, this.readWord1()))
						: this.finishOp(27, 1);
			}
			readToken_dot() {
				let t = this.input.charCodeAt(this.state.pos + 1);
				if (t >= 48 && t <= 57) {
					this.readNumber(!0);
					return;
				}
				t === 46 && this.input.charCodeAt(this.state.pos + 2) === 46
					? ((this.state.pos += 3), this.finishToken(21))
					: (++this.state.pos, this.finishToken(16));
			}
			readToken_slash() {
				this.input.charCodeAt(this.state.pos + 1) === 61
					? this.finishOp(31, 2)
					: this.finishOp(56, 1);
			}
			readToken_interpreter() {
				if (this.state.pos !== 0 || this.length < 2) return !1;
				let t = this.input.charCodeAt(this.state.pos + 1);
				if (t !== 33) return !1;
				let e = this.state.pos;
				for (this.state.pos += 1; !ke(t) && ++this.state.pos < this.length; )
					t = this.input.charCodeAt(this.state.pos);
				let s = this.input.slice(e + 2, this.state.pos);
				return this.finishToken(28, s), !0;
			}
			readToken_mult_modulo(t) {
				let e = t === 42 ? 55 : 54,
					s = 1,
					i = this.input.charCodeAt(this.state.pos + 1);
				t === 42 &&
					i === 42 &&
					(s++, (i = this.input.charCodeAt(this.state.pos + 2)), (e = 57)),
					i === 61 && !this.state.inType && (s++, (e = t === 37 ? 33 : 30)),
					this.finishOp(e, s);
			}
			readToken_pipe_amp(t) {
				let e = this.input.charCodeAt(this.state.pos + 1);
				if (e === t) {
					this.input.charCodeAt(this.state.pos + 2) === 61
						? this.finishOp(30, 3)
						: this.finishOp(t === 124 ? 41 : 42, 2);
					return;
				}
				if (t === 124) {
					if (e === 62) {
						this.finishOp(39, 2);
						return;
					}
					if (this.hasPlugin('recordAndTuple') && e === 125) {
						if (this.getPluginOption('recordAndTuple', 'syntaxType') !== 'bar')
							throw this.raise(p.RecordExpressionBarIncorrectEndSyntaxType, {
								at: this.state.curPosition()
							});
						(this.state.pos += 2), this.finishToken(9);
						return;
					}
					if (this.hasPlugin('recordAndTuple') && e === 93) {
						if (this.getPluginOption('recordAndTuple', 'syntaxType') !== 'bar')
							throw this.raise(p.TupleExpressionBarIncorrectEndSyntaxType, {
								at: this.state.curPosition()
							});
						(this.state.pos += 2), this.finishToken(4);
						return;
					}
				}
				if (e === 61) {
					this.finishOp(30, 2);
					return;
				}
				this.finishOp(t === 124 ? 43 : 45, 1);
			}
			readToken_caret() {
				let t = this.input.charCodeAt(this.state.pos + 1);
				t === 61 && !this.state.inType
					? this.finishOp(32, 2)
					: t === 94 &&
					  this.hasPlugin([
							'pipelineOperator',
							{ proposal: 'hack', topicToken: '^^' }
					  ])
					? (this.finishOp(37, 2),
					  this.input.codePointAt(this.state.pos) === 94 && this.unexpected())
					: this.finishOp(44, 1);
			}
			readToken_atSign() {
				this.input.charCodeAt(this.state.pos + 1) === 64 &&
				this.hasPlugin([
					'pipelineOperator',
					{ proposal: 'hack', topicToken: '@@' }
				])
					? this.finishOp(38, 2)
					: this.finishOp(26, 1);
			}
			readToken_plus_min(t) {
				let e = this.input.charCodeAt(this.state.pos + 1);
				if (e === t) {
					this.finishOp(34, 2);
					return;
				}
				e === 61 ? this.finishOp(30, 2) : this.finishOp(53, 1);
			}
			readToken_lt() {
				let { pos: t } = this.state,
					e = this.input.charCodeAt(t + 1);
				if (e === 60) {
					if (this.input.charCodeAt(t + 2) === 61) {
						this.finishOp(30, 3);
						return;
					}
					this.finishOp(51, 2);
					return;
				}
				if (e === 61) {
					this.finishOp(49, 2);
					return;
				}
				this.finishOp(47, 1);
			}
			readToken_gt() {
				let { pos: t } = this.state,
					e = this.input.charCodeAt(t + 1);
				if (e === 62) {
					let s = this.input.charCodeAt(t + 2) === 62 ? 3 : 2;
					if (this.input.charCodeAt(t + s) === 61) {
						this.finishOp(30, s + 1);
						return;
					}
					this.finishOp(52, s);
					return;
				}
				if (e === 61) {
					this.finishOp(49, 2);
					return;
				}
				this.finishOp(48, 1);
			}
			readToken_eq_excl(t) {
				let e = this.input.charCodeAt(this.state.pos + 1);
				if (e === 61) {
					this.finishOp(
						46,
						this.input.charCodeAt(this.state.pos + 2) === 61 ? 3 : 2
					);
					return;
				}
				if (t === 61 && e === 62) {
					(this.state.pos += 2), this.finishToken(19);
					return;
				}
				this.finishOp(t === 61 ? 29 : 35, 1);
			}
			readToken_question() {
				let t = this.input.charCodeAt(this.state.pos + 1),
					e = this.input.charCodeAt(this.state.pos + 2);
				t === 63
					? e === 61
						? this.finishOp(30, 3)
						: this.finishOp(40, 2)
					: t === 46 && !(e >= 48 && e <= 57)
					? ((this.state.pos += 2), this.finishToken(18))
					: (++this.state.pos, this.finishToken(17));
			}
			getTokenFromCode(t) {
				switch (t) {
					case 46:
						this.readToken_dot();
						return;
					case 40:
						++this.state.pos, this.finishToken(10);
						return;
					case 41:
						++this.state.pos, this.finishToken(11);
						return;
					case 59:
						++this.state.pos, this.finishToken(13);
						return;
					case 44:
						++this.state.pos, this.finishToken(12);
						return;
					case 91:
						if (
							this.hasPlugin('recordAndTuple') &&
							this.input.charCodeAt(this.state.pos + 1) === 124
						) {
							if (
								this.getPluginOption('recordAndTuple', 'syntaxType') !== 'bar'
							)
								throw this.raise(p.TupleExpressionBarIncorrectStartSyntaxType, {
									at: this.state.curPosition()
								});
							(this.state.pos += 2), this.finishToken(2);
						} else ++this.state.pos, this.finishToken(0);
						return;
					case 93:
						++this.state.pos, this.finishToken(3);
						return;
					case 123:
						if (
							this.hasPlugin('recordAndTuple') &&
							this.input.charCodeAt(this.state.pos + 1) === 124
						) {
							if (
								this.getPluginOption('recordAndTuple', 'syntaxType') !== 'bar'
							)
								throw this.raise(
									p.RecordExpressionBarIncorrectStartSyntaxType,
									{ at: this.state.curPosition() }
								);
							(this.state.pos += 2), this.finishToken(6);
						} else ++this.state.pos, this.finishToken(5);
						return;
					case 125:
						++this.state.pos, this.finishToken(8);
						return;
					case 58:
						this.hasPlugin('functionBind') &&
						this.input.charCodeAt(this.state.pos + 1) === 58
							? this.finishOp(15, 2)
							: (++this.state.pos, this.finishToken(14));
						return;
					case 63:
						this.readToken_question();
						return;
					case 96:
						this.readTemplateToken();
						return;
					case 48: {
						let e = this.input.charCodeAt(this.state.pos + 1);
						if (e === 120 || e === 88) {
							this.readRadixNumber(16);
							return;
						}
						if (e === 111 || e === 79) {
							this.readRadixNumber(8);
							return;
						}
						if (e === 98 || e === 66) {
							this.readRadixNumber(2);
							return;
						}
					}
					case 49:
					case 50:
					case 51:
					case 52:
					case 53:
					case 54:
					case 55:
					case 56:
					case 57:
						this.readNumber(!1);
						return;
					case 34:
					case 39:
						this.readString(t);
						return;
					case 47:
						this.readToken_slash();
						return;
					case 37:
					case 42:
						this.readToken_mult_modulo(t);
						return;
					case 124:
					case 38:
						this.readToken_pipe_amp(t);
						return;
					case 94:
						this.readToken_caret();
						return;
					case 43:
					case 45:
						this.readToken_plus_min(t);
						return;
					case 60:
						this.readToken_lt();
						return;
					case 62:
						this.readToken_gt();
						return;
					case 61:
					case 33:
						this.readToken_eq_excl(t);
						return;
					case 126:
						this.finishOp(36, 1);
						return;
					case 64:
						this.readToken_atSign();
						return;
					case 35:
						this.readToken_numberSign();
						return;
					case 92:
						this.readWord();
						return;
					default:
						if ($(t)) {
							this.readWord(t);
							return;
						}
				}
				throw this.raise(p.InvalidOrUnexpectedToken, {
					at: this.state.curPosition(),
					unexpected: String.fromCodePoint(t)
				});
			}
			finishOp(t, e) {
				let s = this.input.slice(this.state.pos, this.state.pos + e);
				(this.state.pos += e), this.finishToken(t, s);
			}
			readRegexp() {
				let t = this.state.startLoc,
					e = this.state.start + 1,
					s,
					i,
					{ pos: r } = this.state;
				for (; ; ++r) {
					if (r >= this.length)
						throw this.raise(p.UnterminatedRegExp, { at: L(t, 1) });
					let l = this.input.charCodeAt(r);
					if (ke(l)) throw this.raise(p.UnterminatedRegExp, { at: L(t, 1) });
					if (s) s = !1;
					else {
						if (l === 91) i = !0;
						else if (l === 93 && i) i = !1;
						else if (l === 47 && !i) break;
						s = l === 92;
					}
				}
				let n = this.input.slice(e, r);
				++r;
				let o = '',
					h = () => L(t, r + 2 - e);
				for (; r < this.length; ) {
					let l = this.codePointAtPos(r),
						c = String.fromCharCode(l);
					if (zr.has(l))
						l === 118
							? o.includes('u') &&
							  this.raise(p.IncompatibleRegExpUVFlags, { at: h() })
							: l === 117 &&
							  o.includes('v') &&
							  this.raise(p.IncompatibleRegExpUVFlags, { at: h() }),
							o.includes(c) && this.raise(p.DuplicateRegExpFlags, { at: h() });
					else if (he(l) || l === 92)
						this.raise(p.MalformedRegExpFlags, { at: h() });
					else break;
					++r, (o += c);
				}
				(this.state.pos = r), this.finishToken(135, { pattern: n, flags: o });
			}
			readInt(t, e, s = !1, i = !0) {
				let { n: r, pos: n } = qs(
					this.input,
					this.state.pos,
					this.state.lineStart,
					this.state.curLine,
					t,
					e,
					s,
					i,
					this.errorHandlers_readInt,
					!1
				);
				return (this.state.pos = n), r;
			}
			readRadixNumber(t) {
				let e = this.state.curPosition(),
					s = !1;
				this.state.pos += 2;
				let i = this.readInt(t);
				i == null && this.raise(p.InvalidDigit, { at: L(e, 2), radix: t });
				let r = this.input.charCodeAt(this.state.pos);
				if (r === 110) ++this.state.pos, (s = !0);
				else if (r === 109) throw this.raise(p.InvalidDecimal, { at: e });
				if ($(this.codePointAtPos(this.state.pos)))
					throw this.raise(p.NumberIdentifier, {
						at: this.state.curPosition()
					});
				if (s) {
					let n = this.input
						.slice(e.index, this.state.pos)
						.replace(/[_n]/g, '');
					this.finishToken(133, n);
					return;
				}
				this.finishToken(132, i);
			}
			readNumber(t) {
				let e = this.state.pos,
					s = this.state.curPosition(),
					i = !1,
					r = !1,
					n = !1,
					o = !1,
					h = !1;
				!t &&
					this.readInt(10) === null &&
					this.raise(p.InvalidNumber, { at: this.state.curPosition() });
				let l = this.state.pos - e >= 2 && this.input.charCodeAt(e) === 48;
				if (l) {
					let f = this.input.slice(e, this.state.pos);
					if (
						(this.recordStrictModeErrors(p.StrictOctalLiteral, { at: s }),
						!this.state.strict)
					) {
						let x = f.indexOf('_');
						x > 0 && this.raise(p.ZeroDigitNumericSeparator, { at: L(s, x) });
					}
					h = l && !/[89]/.test(f);
				}
				let c = this.input.charCodeAt(this.state.pos);
				if (
					(c === 46 &&
						!h &&
						(++this.state.pos,
						this.readInt(10),
						(i = !0),
						(c = this.input.charCodeAt(this.state.pos))),
					(c === 69 || c === 101) &&
						!h &&
						((c = this.input.charCodeAt(++this.state.pos)),
						(c === 43 || c === 45) && ++this.state.pos,
						this.readInt(10) === null &&
							this.raise(p.InvalidOrMissingExponent, { at: s }),
						(i = !0),
						(o = !0),
						(c = this.input.charCodeAt(this.state.pos))),
					c === 110 &&
						((i || l) && this.raise(p.InvalidBigIntLiteral, { at: s }),
						++this.state.pos,
						(r = !0)),
					c === 109 &&
						(this.expectPlugin('decimal', this.state.curPosition()),
						(o || l) && this.raise(p.InvalidDecimal, { at: s }),
						++this.state.pos,
						(n = !0)),
					$(this.codePointAtPos(this.state.pos)))
				)
					throw this.raise(p.NumberIdentifier, {
						at: this.state.curPosition()
					});
				let u = this.input.slice(e, this.state.pos).replace(/[_mn]/g, '');
				if (r) {
					this.finishToken(133, u);
					return;
				}
				if (n) {
					this.finishToken(134, u);
					return;
				}
				let d = h ? parseInt(u, 8) : parseFloat(u);
				this.finishToken(132, d);
			}
			readCodePoint(t) {
				let { code: e, pos: s } = Hs(
					this.input,
					this.state.pos,
					this.state.lineStart,
					this.state.curLine,
					t,
					this.errorHandlers_readCodePoint
				);
				return (this.state.pos = s), e;
			}
			readString(t) {
				let {
					str: e,
					pos: s,
					curLine: i,
					lineStart: r
				} = Ts(
					t === 34 ? 'double' : 'single',
					this.input,
					this.state.pos + 1,
					this.state.lineStart,
					this.state.curLine,
					this.errorHandlers_readStringContents_string
				);
				(this.state.pos = s + 1),
					(this.state.lineStart = r),
					(this.state.curLine = i),
					this.finishToken(131, e);
			}
			readTemplateContinuation() {
				this.match(8) || this.unexpected(null, 8),
					this.state.pos--,
					this.readTemplateToken();
			}
			readTemplateToken() {
				let t = this.input[this.state.pos],
					{
						str: e,
						firstInvalidLoc: s,
						pos: i,
						curLine: r,
						lineStart: n
					} = Ts(
						'template',
						this.input,
						this.state.pos + 1,
						this.state.lineStart,
						this.state.curLine,
						this.errorHandlers_readStringContents_template
					);
				(this.state.pos = i + 1),
					(this.state.lineStart = n),
					(this.state.curLine = r),
					s &&
						(this.state.firstInvalidTemplateEscapePos = new B(
							s.curLine,
							s.pos - s.lineStart,
							s.pos
						)),
					this.input.codePointAt(i) === 96
						? this.finishToken(24, s ? null : t + e + '`')
						: (this.state.pos++, this.finishToken(25, s ? null : t + e + '${'));
			}
			recordStrictModeErrors(t, { at: e }) {
				let s = e.index;
				this.state.strict && !this.state.strictErrors.has(s)
					? this.raise(t, { at: e })
					: this.state.strictErrors.set(s, [t, e]);
			}
			readWord1(t) {
				this.state.containsEsc = !1;
				let e = '',
					s = this.state.pos,
					i = this.state.pos;
				for (
					t !== void 0 && (this.state.pos += t <= 65535 ? 1 : 2);
					this.state.pos < this.length;

				) {
					let r = this.codePointAtPos(this.state.pos);
					if (he(r)) this.state.pos += r <= 65535 ? 1 : 2;
					else if (r === 92) {
						(this.state.containsEsc = !0),
							(e += this.input.slice(i, this.state.pos));
						let n = this.state.curPosition(),
							o = this.state.pos === s ? $ : he;
						if (this.input.charCodeAt(++this.state.pos) !== 117) {
							this.raise(p.MissingUnicodeEscape, {
								at: this.state.curPosition()
							}),
								(i = this.state.pos - 1);
							continue;
						}
						++this.state.pos;
						let h = this.readCodePoint(!0);
						h !== null &&
							(o(h) || this.raise(p.EscapedCharNotAnIdentifier, { at: n }),
							(e += String.fromCodePoint(h))),
							(i = this.state.pos);
					} else break;
				}
				return e + this.input.slice(i, this.state.pos);
			}
			readWord(t) {
				let e = this.readWord1(t),
					s = zt.get(e);
				s !== void 0 ? this.finishToken(s, J(s)) : this.finishToken(130, e);
			}
			checkKeywordEscapes() {
				let { type: t } = this.state;
				Xt(t) &&
					this.state.containsEsc &&
					this.raise(p.InvalidEscapedReservedWord, {
						at: this.state.startLoc,
						reservedWord: J(t)
					});
			}
			raise(t, e) {
				let { at: s } = e,
					i = He(e, $r),
					r = s instanceof B ? s : s.loc.start,
					n = t({ loc: r, details: i });
				if (!this.options.errorRecovery) throw n;
				return this.isLookahead || this.state.errors.push(n), n;
			}
			raiseOverwrite(t, e) {
				let { at: s } = e,
					i = He(e, Vr),
					r = s instanceof B ? s : s.loc.start,
					n = r.index,
					o = this.state.errors;
				for (let h = o.length - 1; h >= 0; h--) {
					let l = o[h];
					if (l.loc.index === n) return (o[h] = t({ loc: r, details: i }));
					if (l.loc.index < n) break;
				}
				return this.raise(t, e);
			}
			updateContext(t) {}
			unexpected(t, e) {
				throw this.raise(p.UnexpectedToken, {
					expected: e ? J(e) : null,
					at: t ?? this.state.startLoc
				});
			}
			expectPlugin(t, e) {
				if (this.hasPlugin(t)) return !0;
				throw this.raise(p.MissingPlugin, {
					at: e ?? this.state.startLoc,
					missingPlugin: [t]
				});
			}
			expectOnePlugin(t) {
				if (!t.some((e) => this.hasPlugin(e)))
					throw this.raise(p.MissingOneOfPlugins, {
						at: this.state.startLoc,
						missingPlugin: t
					});
			}
			errorBuilder(t) {
				return (e, s, i) => {
					this.raise(t, { at: Ce(e, s, i) });
				};
			}
		},
		Dt = class {
			constructor() {
				(this.privateNames = new Set()),
					(this.loneAccessors = new Map()),
					(this.undefinedPrivateNames = new Map());
			}
		},
		Mt = class {
			constructor(t) {
				(this.parser = void 0),
					(this.stack = []),
					(this.undefinedPrivateNames = new Map()),
					(this.parser = t);
			}
			current() {
				return this.stack[this.stack.length - 1];
			}
			enter() {
				this.stack.push(new Dt());
			}
			exit() {
				let t = this.stack.pop(),
					e = this.current();
				for (let [s, i] of Array.from(t.undefinedPrivateNames))
					e
						? e.undefinedPrivateNames.has(s) ||
						  e.undefinedPrivateNames.set(s, i)
						: this.parser.raise(p.InvalidPrivateFieldResolution, {
								at: i,
								identifierName: s
						  });
			}
			declarePrivateName(t, e, s) {
				let {
						privateNames: i,
						loneAccessors: r,
						undefinedPrivateNames: n
					} = this.current(),
					o = i.has(t);
				if (e & ft) {
					let h = o && r.get(t);
					if (h) {
						let l = h & Ze,
							c = e & Ze,
							u = h & ft,
							d = e & ft;
						(o = u === d || l !== c), o || r.delete(t);
					} else o || r.set(t, e);
				}
				o &&
					this.parser.raise(p.PrivateNameRedeclaration, {
						at: s,
						identifierName: t
					}),
					i.add(t),
					n.delete(t);
			}
			usePrivateName(t, e) {
				let s;
				for (s of this.stack) if (s.privateNames.has(t)) return;
				s
					? s.undefinedPrivateNames.set(t, e)
					: this.parser.raise(p.InvalidPrivateFieldResolution, {
							at: e,
							identifierName: t
					  });
			}
		},
		Kr = 0,
		Ws = 1,
		ss = 2,
		Js = 3,
		de = class {
			constructor(t = Kr) {
				(this.type = void 0), (this.type = t);
			}
			canBeArrowParameterDeclaration() {
				return this.type === ss || this.type === Ws;
			}
			isCertainlyParameterDeclaration() {
				return this.type === Js;
			}
		},
		et = class extends de {
			constructor(t) {
				super(t), (this.declarationErrors = new Map());
			}
			recordDeclarationError(t, { at: e }) {
				let s = e.index;
				this.declarationErrors.set(s, [t, e]);
			}
			clearDeclarationError(t) {
				this.declarationErrors.delete(t);
			}
			iterateErrors(t) {
				this.declarationErrors.forEach(t);
			}
		},
		Ot = class {
			constructor(t) {
				(this.parser = void 0), (this.stack = [new de()]), (this.parser = t);
			}
			enter(t) {
				this.stack.push(t);
			}
			exit() {
				this.stack.pop();
			}
			recordParameterInitializerError(t, { at: e }) {
				let s = { at: e.loc.start },
					{ stack: i } = this,
					r = i.length - 1,
					n = i[r];
				for (; !n.isCertainlyParameterDeclaration(); ) {
					if (n.canBeArrowParameterDeclaration())
						n.recordDeclarationError(t, s);
					else return;
					n = i[--r];
				}
				this.parser.raise(t, s);
			}
			recordArrowParameterBindingError(t, { at: e }) {
				let { stack: s } = this,
					i = s[s.length - 1],
					r = { at: e.loc.start };
				if (i.isCertainlyParameterDeclaration()) this.parser.raise(t, r);
				else if (i.canBeArrowParameterDeclaration())
					i.recordDeclarationError(t, r);
				else return;
			}
			recordAsyncArrowParametersError({ at: t }) {
				let { stack: e } = this,
					s = e.length - 1,
					i = e[s];
				for (; i.canBeArrowParameterDeclaration(); )
					i.type === ss &&
						i.recordDeclarationError(p.AwaitBindingIdentifier, { at: t }),
						(i = e[--s]);
			}
			validateAsPattern() {
				let { stack: t } = this,
					e = t[t.length - 1];
				e.canBeArrowParameterDeclaration() &&
					e.iterateErrors(([s, i]) => {
						this.parser.raise(s, { at: i });
						let r = t.length - 2,
							n = t[r];
						for (; n.canBeArrowParameterDeclaration(); )
							n.clearDeclarationError(i.index), (n = t[--r]);
					});
			}
		};
	function qr() {
		return new de(Js);
	}
	function Hr() {
		return new et(Ws);
	}
	function Wr() {
		return new et(ss);
	}
	function Xs() {
		return new de();
	}
	var pe = 0,
		Gs = 1,
		it = 2,
		Ys = 4,
		re = 8,
		Bt = class {
			constructor() {
				this.stacks = [];
			}
			enter(t) {
				this.stacks.push(t);
			}
			exit() {
				this.stacks.pop();
			}
			currentFlags() {
				return this.stacks[this.stacks.length - 1];
			}
			get hasAwait() {
				return (this.currentFlags() & it) > 0;
			}
			get hasYield() {
				return (this.currentFlags() & Gs) > 0;
			}
			get hasReturn() {
				return (this.currentFlags() & Ys) > 0;
			}
			get hasIn() {
				return (this.currentFlags() & re) > 0;
			}
		};
	function qe(a, t) {
		return (a ? it : 0) | (t ? Gs : 0);
	}
	var Ft = class extends Lt {
			addExtra(t, e, s, i = !0) {
				if (!t) return;
				let r = (t.extra = t.extra || {});
				i
					? (r[e] = s)
					: Object.defineProperty(r, e, { enumerable: i, value: s });
			}
			isContextual(t) {
				return this.state.type === t && !this.state.containsEsc;
			}
			isUnparsedContextual(t, e) {
				let s = t + e.length;
				if (this.input.slice(t, s) === e) {
					let i = this.input.charCodeAt(s);
					return !(he(i) || (i & 64512) === 55296);
				}
				return !1;
			}
			isLookaheadContextual(t) {
				let e = this.nextTokenStart();
				return this.isUnparsedContextual(e, t);
			}
			eatContextual(t) {
				return this.isContextual(t) ? (this.next(), !0) : !1;
			}
			expectContextual(t, e) {
				if (!this.eatContextual(t)) {
					if (e != null) throw this.raise(e, { at: this.state.startLoc });
					this.unexpected(null, t);
				}
			}
			canInsertSemicolon() {
				return this.match(137) || this.match(8) || this.hasPrecedingLineBreak();
			}
			hasPrecedingLineBreak() {
				return Ks.test(
					this.input.slice(this.state.lastTokEndLoc.index, this.state.start)
				);
			}
			hasFollowingLineBreak() {
				return (xs.lastIndex = this.state.end), xs.test(this.input);
			}
			isLineTerminator() {
				return this.eat(13) || this.canInsertSemicolon();
			}
			semicolon(t = !0) {
				(t ? this.isLineTerminator() : this.eat(13)) ||
					this.raise(p.MissingSemicolon, { at: this.state.lastTokEndLoc });
			}
			expect(t, e) {
				this.eat(t) || this.unexpected(e, t);
			}
			tryParse(t, e = this.state.clone()) {
				let s = { node: null };
				try {
					let i = t((r = null) => {
						throw ((s.node = r), s);
					});
					if (this.state.errors.length > e.errors.length) {
						let r = this.state;
						return (
							(this.state = e),
							(this.state.tokensLength = r.tokensLength),
							{
								node: i,
								error: r.errors[e.errors.length],
								thrown: !1,
								aborted: !1,
								failState: r
							}
						);
					}
					return {
						node: i,
						error: null,
						thrown: !1,
						aborted: !1,
						failState: null
					};
				} catch (i) {
					let r = this.state;
					if (((this.state = e), i instanceof SyntaxError))
						return {
							node: null,
							error: i,
							thrown: !0,
							aborted: !1,
							failState: r
						};
					if (i === s)
						return {
							node: s.node,
							error: null,
							thrown: !1,
							aborted: !0,
							failState: r
						};
					throw i;
				}
			}
			checkExpressionErrors(t, e) {
				if (!t) return !1;
				let {
						shorthandAssignLoc: s,
						doubleProtoLoc: i,
						privateKeyLoc: r,
						optionalParametersLoc: n
					} = t,
					o = !!s || !!i || !!n || !!r;
				if (!e) return o;
				s != null && this.raise(p.InvalidCoverInitializedName, { at: s }),
					i != null && this.raise(p.DuplicateProto, { at: i }),
					r != null && this.raise(p.UnexpectedPrivateField, { at: r }),
					n != null && this.unexpected(n);
			}
			isLiteralPropertyName() {
				return ks(this.state.type);
			}
			isPrivateName(t) {
				return t.type === 'PrivateName';
			}
			getPrivateNameSV(t) {
				return t.id.name;
			}
			hasPropertyAsPrivateName(t) {
				return (
					(t.type === 'MemberExpression' ||
						t.type === 'OptionalMemberExpression') &&
					this.isPrivateName(t.property)
				);
			}
			isObjectProperty(t) {
				return t.type === 'ObjectProperty';
			}
			isObjectMethod(t) {
				return t.type === 'ObjectMethod';
			}
			initializeScopes(t = this.options.sourceType === 'module') {
				let e = this.state.labels;
				this.state.labels = [];
				let s = this.exportedIdentifiers;
				this.exportedIdentifiers = new Set();
				let i = this.inModule;
				this.inModule = t;
				let r = this.scope,
					n = this.getScopeHandler();
				this.scope = new n(this, t);
				let o = this.prodParam;
				this.prodParam = new Bt();
				let h = this.classScope;
				this.classScope = new Mt(this);
				let l = this.expressionScope;
				return (
					(this.expressionScope = new Ot(this)),
					() => {
						(this.state.labels = e),
							(this.exportedIdentifiers = s),
							(this.inModule = i),
							(this.scope = r),
							(this.prodParam = o),
							(this.classScope = h),
							(this.expressionScope = l);
					}
				);
			}
			enterInitialScopes() {
				let t = pe;
				this.inModule && (t |= it),
					this.scope.enter(ne),
					this.prodParam.enter(t);
			}
			checkDestructuringPrivate(t) {
				let { privateKeyLoc: e } = t;
				e !== null && this.expectPlugin('destructuringPrivate', e);
			}
		},
		ue = class {
			constructor() {
				(this.shorthandAssignLoc = null),
					(this.doubleProtoLoc = null),
					(this.privateKeyLoc = null),
					(this.optionalParametersLoc = null);
			}
		},
		me = class {
			constructor(t, e, s) {
				(this.type = ''),
					(this.start = e),
					(this.end = 0),
					(this.loc = new fe(s)),
					t != null && t.options.ranges && (this.range = [e, 0]),
					t != null && t.filename && (this.loc.filename = t.filename);
			}
		},
		is = me.prototype;
	is.__clone = function () {
		let a = new me(void 0, this.start, this.loc.start),
			t = Object.keys(this);
		for (let e = 0, s = t.length; e < s; e++) {
			let i = t[e];
			i !== 'leadingComments' &&
				i !== 'trailingComments' &&
				i !== 'innerComments' &&
				(a[i] = this[i]);
		}
		return a;
	};
	function Jr(a) {
		return K(a);
	}
	function K(a) {
		let { type: t, start: e, end: s, loc: i, range: r, extra: n, name: o } = a,
			h = Object.create(is);
		return (
			(h.type = t),
			(h.start = e),
			(h.end = s),
			(h.loc = i),
			(h.range = r),
			(h.extra = n),
			(h.name = o),
			t === 'Placeholder' && (h.expectedNode = a.expectedNode),
			h
		);
	}
	function Xr(a) {
		let { type: t, start: e, end: s, loc: i, range: r, extra: n } = a;
		if (t === 'Placeholder') return Jr(a);
		let o = Object.create(is);
		return (
			(o.type = t),
			(o.start = e),
			(o.end = s),
			(o.loc = i),
			(o.range = r),
			a.raw !== void 0 ? (o.raw = a.raw) : (o.extra = n),
			(o.value = a.value),
			o
		);
	}
	var _t = class extends Ft {
			startNode() {
				return new me(this, this.state.start, this.state.startLoc);
			}
			startNodeAt(t) {
				return new me(this, t.index, t);
			}
			startNodeAtNode(t) {
				return this.startNodeAt(t.loc.start);
			}
			finishNode(t, e) {
				return this.finishNodeAt(t, e, this.state.lastTokEndLoc);
			}
			finishNodeAt(t, e, s) {
				return (
					(t.type = e),
					(t.end = s.index),
					(t.loc.end = s),
					this.options.ranges && (t.range[1] = s.index),
					this.options.attachComment && this.processComment(t),
					t
				);
			}
			resetStartLocation(t, e) {
				(t.start = e.index),
					(t.loc.start = e),
					this.options.ranges && (t.range[0] = e.index);
			}
			resetEndLocation(t, e = this.state.lastTokEndLoc) {
				(t.end = e.index),
					(t.loc.end = e),
					this.options.ranges && (t.range[1] = e.index);
			}
			resetStartLocationFromNode(t, e) {
				this.resetStartLocation(t, e.loc.start);
			}
		},
		Gr = new Set([
			'_',
			'any',
			'bool',
			'boolean',
			'empty',
			'extends',
			'false',
			'interface',
			'mixed',
			'null',
			'number',
			'static',
			'string',
			'true',
			'typeof',
			'void'
		]),
		T = V`flow`({
			AmbiguousConditionalArrow:
				'Ambiguous expression: wrap the arrow functions in parentheses to disambiguate.',
			AmbiguousDeclareModuleKind:
				'Found both `declare module.exports` and `declare export` in the same module. Modules can only have 1 since they are either an ES module or they are a CommonJS module.',
			AssignReservedType: ({ reservedType: a }) =>
				`Cannot overwrite reserved type ${a}.`,
			DeclareClassElement:
				'The `declare` modifier can only appear on class fields.',
			DeclareClassFieldInitializer:
				'Initializers are not allowed in fields with the `declare` modifier.',
			DuplicateDeclareModuleExports:
				'Duplicate `declare module.exports` statement.',
			EnumBooleanMemberNotInitialized: ({ memberName: a, enumName: t }) =>
				`Boolean enum members need to be initialized. Use either \`${a} = true,\` or \`${a} = false,\` in enum \`${t}\`.`,
			EnumDuplicateMemberName: ({ memberName: a, enumName: t }) =>
				`Enum member names need to be unique, but the name \`${a}\` has already been used before in enum \`${t}\`.`,
			EnumInconsistentMemberValues: ({ enumName: a }) =>
				`Enum \`${a}\` has inconsistent member initializers. Either use no initializers, or consistently use literals (either booleans, numbers, or strings) for all member initializers.`,
			EnumInvalidExplicitType: ({ invalidEnumType: a, enumName: t }) =>
				`Enum type \`${a}\` is not valid. Use one of \`boolean\`, \`number\`, \`string\`, or \`symbol\` in enum \`${t}\`.`,
			EnumInvalidExplicitTypeUnknownSupplied: ({ enumName: a }) =>
				`Supplied enum type is not valid. Use one of \`boolean\`, \`number\`, \`string\`, or \`symbol\` in enum \`${a}\`.`,
			EnumInvalidMemberInitializerPrimaryType: ({
				enumName: a,
				memberName: t,
				explicitType: e
			}) =>
				`Enum \`${a}\` has type \`${e}\`, so the initializer of \`${t}\` needs to be a ${e} literal.`,
			EnumInvalidMemberInitializerSymbolType: ({
				enumName: a,
				memberName: t
			}) =>
				`Symbol enum members cannot be initialized. Use \`${t},\` in enum \`${a}\`.`,
			EnumInvalidMemberInitializerUnknownType: ({
				enumName: a,
				memberName: t
			}) =>
				`The enum member initializer for \`${t}\` needs to be a literal (either a boolean, number, or string) in enum \`${a}\`.`,
			EnumInvalidMemberName: ({ enumName: a, memberName: t, suggestion: e }) =>
				`Enum member names cannot start with lowercase 'a' through 'z'. Instead of using \`${t}\`, consider using \`${e}\`, in enum \`${a}\`.`,
			EnumNumberMemberNotInitialized: ({ enumName: a, memberName: t }) =>
				`Number enum members need to be initialized, e.g. \`${t} = 1\` in enum \`${a}\`.`,
			EnumStringMemberInconsistentlyInitailized: ({ enumName: a }) =>
				`String enum members need to consistently either all use initializers, or use no initializers, in enum \`${a}\`.`,
			GetterMayNotHaveThisParam: 'A getter cannot have a `this` parameter.',
			ImportReflectionHasImportType:
				'An `import module` declaration can not use `type` or `typeof` keyword.',
			ImportTypeShorthandOnlyInPureImport:
				'The `type` and `typeof` keywords on named imports can only be used on regular `import` statements. It cannot be used with `import type` or `import typeof` statements.',
			InexactInsideExact:
				'Explicit inexact syntax cannot appear inside an explicit exact object type.',
			InexactInsideNonObject:
				'Explicit inexact syntax cannot appear in class or interface definitions.',
			InexactVariance: 'Explicit inexact syntax cannot have variance.',
			InvalidNonTypeImportInDeclareModule:
				'Imports within a `declare module` body must always be `import type` or `import typeof`.',
			MissingTypeParamDefault:
				'Type parameter declaration needs a default, since a preceding type parameter declaration has a default.',
			NestedDeclareModule:
				'`declare module` cannot be used inside another `declare module`.',
			NestedFlowComment:
				'Cannot have a flow comment inside another flow comment.',
			PatternIsOptional: Object.assign(
				{
					message:
						'A binding pattern parameter cannot be optional in an implementation signature.'
				},
				{ reasonCode: 'OptionalBindingPattern' }
			),
			SetterMayNotHaveThisParam: 'A setter cannot have a `this` parameter.',
			SpreadVariance: 'Spread properties cannot have variance.',
			ThisParamAnnotationRequired:
				'A type annotation is required for the `this` parameter.',
			ThisParamBannedInConstructor:
				"Constructors cannot have a `this` parameter; constructors don't bind `this` like other functions.",
			ThisParamMayNotBeOptional: 'The `this` parameter cannot be optional.',
			ThisParamMustBeFirst:
				'The `this` parameter must be the first function parameter.',
			ThisParamNoDefault: 'The `this` parameter may not have a default value.',
			TypeBeforeInitializer:
				'Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.',
			TypeCastInPattern:
				'The type cast expression is expected to be wrapped with parenthesis.',
			UnexpectedExplicitInexactInObject:
				'Explicit inexact syntax must appear at the end of an inexact object.',
			UnexpectedReservedType: ({ reservedType: a }) =>
				`Unexpected reserved type ${a}.`,
			UnexpectedReservedUnderscore:
				'`_` is only allowed as a type argument to call or new.',
			UnexpectedSpaceBetweenModuloChecks:
				'Spaces between `%` and `checks` are not allowed here.',
			UnexpectedSpreadType:
				'Spread operator cannot appear in class or interface definitions.',
			UnexpectedSubtractionOperand:
				'Unexpected token, expected "number" or "bigint".',
			UnexpectedTokenAfterTypeParameter:
				'Expected an arrow function after this type parameter declaration.',
			UnexpectedTypeParameterBeforeAsyncArrowFunction:
				'Type parameters must come after the async keyword, e.g. instead of `<T> async () => {}`, use `async <T>() => {}`.',
			UnsupportedDeclareExportKind: ({
				unsupportedExportKind: a,
				suggestion: t
			}) => `\`declare export ${a}\` is not supported. Use \`${t}\` instead.`,
			UnsupportedStatementInDeclareModule:
				'Only declares and type imports are allowed inside declare module.',
			UnterminatedFlowComment: 'Unterminated flow-comment.'
		});
	function Yr(a) {
		return (
			a.type === 'DeclareExportAllDeclaration' ||
			(a.type === 'DeclareExportDeclaration' &&
				(!a.declaration ||
					(a.declaration.type !== 'TypeAlias' &&
						a.declaration.type !== 'InterfaceDeclaration')))
		);
	}
	function gs(a) {
		return a.importKind === 'type' || a.importKind === 'typeof';
	}
	var Qr = {
		const: 'declare export var',
		let: 'declare export var',
		type: 'export type',
		interface: 'export interface'
	};
	function Zr(a, t) {
		let e = [],
			s = [];
		for (let i = 0; i < a.length; i++) (t(a[i], i, a) ? e : s).push(a[i]);
		return [e, s];
	}
	var ea = /\*?\s*@((?:no)?flow)\b/,
		ta = (a) =>
			class extends a {
				constructor(...e) {
					super(...e), (this.flowPragma = void 0);
				}
				getScopeHandler() {
					return wt;
				}
				shouldParseTypes() {
					return (
						this.getPluginOption('flow', 'all') || this.flowPragma === 'flow'
					);
				}
				shouldParseEnums() {
					return !!this.getPluginOption('flow', 'enums');
				}
				finishToken(e, s) {
					e !== 131 &&
						e !== 13 &&
						e !== 28 &&
						this.flowPragma === void 0 &&
						(this.flowPragma = null),
						super.finishToken(e, s);
				}
				addComment(e) {
					if (this.flowPragma === void 0) {
						let s = ea.exec(e.value);
						if (s)
							if (s[1] === 'flow') this.flowPragma = 'flow';
							else if (s[1] === 'noflow') this.flowPragma = 'noflow';
							else throw new Error('Unexpected flow pragma');
					}
					super.addComment(e);
				}
				flowParseTypeInitialiser(e) {
					let s = this.state.inType;
					(this.state.inType = !0), this.expect(e || 14);
					let i = this.flowParseType();
					return (this.state.inType = s), i;
				}
				flowParsePredicate() {
					let e = this.startNode(),
						s = this.state.startLoc;
					return (
						this.next(),
						this.expectContextual(108),
						this.state.lastTokStart > s.index + 1 &&
							this.raise(T.UnexpectedSpaceBetweenModuloChecks, { at: s }),
						this.eat(10)
							? ((e.value = super.parseExpression()),
							  this.expect(11),
							  this.finishNode(e, 'DeclaredPredicate'))
							: this.finishNode(e, 'InferredPredicate')
					);
				}
				flowParseTypeAndPredicateInitialiser() {
					let e = this.state.inType;
					(this.state.inType = !0), this.expect(14);
					let s = null,
						i = null;
					return (
						this.match(54)
							? ((this.state.inType = e), (i = this.flowParsePredicate()))
							: ((s = this.flowParseType()),
							  (this.state.inType = e),
							  this.match(54) && (i = this.flowParsePredicate())),
						[s, i]
					);
				}
				flowParseDeclareClass(e) {
					return (
						this.next(),
						this.flowParseInterfaceish(e, !0),
						this.finishNode(e, 'DeclareClass')
					);
				}
				flowParseDeclareFunction(e) {
					this.next();
					let s = (e.id = this.parseIdentifier()),
						i = this.startNode(),
						r = this.startNode();
					this.match(47)
						? (i.typeParameters = this.flowParseTypeParameterDeclaration())
						: (i.typeParameters = null),
						this.expect(10);
					let n = this.flowParseFunctionTypeParams();
					return (
						(i.params = n.params),
						(i.rest = n.rest),
						(i.this = n._this),
						this.expect(11),
						([i.returnType, e.predicate] =
							this.flowParseTypeAndPredicateInitialiser()),
						(r.typeAnnotation = this.finishNode(i, 'FunctionTypeAnnotation')),
						(s.typeAnnotation = this.finishNode(r, 'TypeAnnotation')),
						this.resetEndLocation(s),
						this.semicolon(),
						this.scope.declareName(e.id.name, Lr, e.id.loc.start),
						this.finishNode(e, 'DeclareFunction')
					);
				}
				flowParseDeclare(e, s) {
					if (this.match(80)) return this.flowParseDeclareClass(e);
					if (this.match(68)) return this.flowParseDeclareFunction(e);
					if (this.match(74)) return this.flowParseDeclareVariable(e);
					if (this.eatContextual(125))
						return this.match(16)
							? this.flowParseDeclareModuleExports(e)
							: (s &&
									this.raise(T.NestedDeclareModule, {
										at: this.state.lastTokStartLoc
									}),
							  this.flowParseDeclareModule(e));
					if (this.isContextual(128)) return this.flowParseDeclareTypeAlias(e);
					if (this.isContextual(129)) return this.flowParseDeclareOpaqueType(e);
					if (this.isContextual(127)) return this.flowParseDeclareInterface(e);
					if (this.match(82))
						return this.flowParseDeclareExportDeclaration(e, s);
					this.unexpected();
				}
				flowParseDeclareVariable(e) {
					return (
						this.next(),
						(e.id = this.flowParseTypeAnnotatableIdentifier(!0)),
						this.scope.declareName(e.id.name, Qe, e.id.loc.start),
						this.semicolon(),
						this.finishNode(e, 'DeclareVariable')
					);
				}
				flowParseDeclareModule(e) {
					this.scope.enter(ae),
						this.match(131)
							? (e.id = super.parseExprAtom())
							: (e.id = this.parseIdentifier());
					let s = (e.body = this.startNode()),
						i = (s.body = []);
					for (this.expect(5); !this.match(8); ) {
						let o = this.startNode();
						this.match(83)
							? (this.next(),
							  !this.isContextual(128) &&
									!this.match(87) &&
									this.raise(T.InvalidNonTypeImportInDeclareModule, {
										at: this.state.lastTokStartLoc
									}),
							  super.parseImport(o))
							: (this.expectContextual(
									123,
									T.UnsupportedStatementInDeclareModule
							  ),
							  (o = this.flowParseDeclare(o, !0))),
							i.push(o);
					}
					this.scope.exit(),
						this.expect(8),
						this.finishNode(s, 'BlockStatement');
					let r = null,
						n = !1;
					return (
						i.forEach((o) => {
							Yr(o)
								? (r === 'CommonJS' &&
										this.raise(T.AmbiguousDeclareModuleKind, { at: o }),
								  (r = 'ES'))
								: o.type === 'DeclareModuleExports' &&
								  (n && this.raise(T.DuplicateDeclareModuleExports, { at: o }),
								  r === 'ES' &&
										this.raise(T.AmbiguousDeclareModuleKind, { at: o }),
								  (r = 'CommonJS'),
								  (n = !0));
						}),
						(e.kind = r || 'CommonJS'),
						this.finishNode(e, 'DeclareModule')
					);
				}
				flowParseDeclareExportDeclaration(e, s) {
					if ((this.expect(82), this.eat(65)))
						return (
							this.match(68) || this.match(80)
								? (e.declaration = this.flowParseDeclare(this.startNode()))
								: ((e.declaration = this.flowParseType()), this.semicolon()),
							(e.default = !0),
							this.finishNode(e, 'DeclareExportDeclaration')
						);
					if (
						this.match(75) ||
						this.isLet() ||
						((this.isContextual(128) || this.isContextual(127)) && !s)
					) {
						let i = this.state.value;
						throw this.raise(T.UnsupportedDeclareExportKind, {
							at: this.state.startLoc,
							unsupportedExportKind: i,
							suggestion: Qr[i]
						});
					}
					if (
						this.match(74) ||
						this.match(68) ||
						this.match(80) ||
						this.isContextual(129)
					)
						return (
							(e.declaration = this.flowParseDeclare(this.startNode())),
							(e.default = !1),
							this.finishNode(e, 'DeclareExportDeclaration')
						);
					if (
						this.match(55) ||
						this.match(5) ||
						this.isContextual(127) ||
						this.isContextual(128) ||
						this.isContextual(129)
					)
						return (
							(e = this.parseExport(e, null)),
							e.type === 'ExportNamedDeclaration' &&
								((e.type = 'ExportDeclaration'),
								(e.default = !1),
								delete e.exportKind),
							(e.type = 'Declare' + e.type),
							e
						);
					this.unexpected();
				}
				flowParseDeclareModuleExports(e) {
					return (
						this.next(),
						this.expectContextual(109),
						(e.typeAnnotation = this.flowParseTypeAnnotation()),
						this.semicolon(),
						this.finishNode(e, 'DeclareModuleExports')
					);
				}
				flowParseDeclareTypeAlias(e) {
					this.next();
					let s = this.flowParseTypeAlias(e);
					return (s.type = 'DeclareTypeAlias'), s;
				}
				flowParseDeclareOpaqueType(e) {
					this.next();
					let s = this.flowParseOpaqueType(e, !0);
					return (s.type = 'DeclareOpaqueType'), s;
				}
				flowParseDeclareInterface(e) {
					return (
						this.next(),
						this.flowParseInterfaceish(e, !1),
						this.finishNode(e, 'DeclareInterface')
					);
				}
				flowParseInterfaceish(e, s) {
					if (
						((e.id = this.flowParseRestrictedIdentifier(!s, !0)),
						this.scope.declareName(e.id.name, s ? $s : ce, e.id.loc.start),
						this.match(47)
							? (e.typeParameters = this.flowParseTypeParameterDeclaration())
							: (e.typeParameters = null),
						(e.extends = []),
						this.eat(81))
					)
						do e.extends.push(this.flowParseInterfaceExtends());
						while (!s && this.eat(12));
					if (s) {
						if (((e.implements = []), (e.mixins = []), this.eatContextual(115)))
							do e.mixins.push(this.flowParseInterfaceExtends());
							while (this.eat(12));
						if (this.eatContextual(111))
							do e.implements.push(this.flowParseInterfaceExtends());
							while (this.eat(12));
					}
					e.body = this.flowParseObjectType({
						allowStatic: s,
						allowExact: !1,
						allowSpread: !1,
						allowProto: s,
						allowInexact: !1
					});
				}
				flowParseInterfaceExtends() {
					let e = this.startNode();
					return (
						(e.id = this.flowParseQualifiedTypeIdentifier()),
						this.match(47)
							? (e.typeParameters = this.flowParseTypeParameterInstantiation())
							: (e.typeParameters = null),
						this.finishNode(e, 'InterfaceExtends')
					);
				}
				flowParseInterface(e) {
					return (
						this.flowParseInterfaceish(e, !1),
						this.finishNode(e, 'InterfaceDeclaration')
					);
				}
				checkNotUnderscore(e) {
					e === '_' &&
						this.raise(T.UnexpectedReservedUnderscore, {
							at: this.state.startLoc
						});
				}
				checkReservedType(e, s, i) {
					Gr.has(e) &&
						this.raise(i ? T.AssignReservedType : T.UnexpectedReservedType, {
							at: s,
							reservedType: e
						});
				}
				flowParseRestrictedIdentifier(e, s) {
					return (
						this.checkReservedType(this.state.value, this.state.startLoc, s),
						this.parseIdentifier(e)
					);
				}
				flowParseTypeAlias(e) {
					return (
						(e.id = this.flowParseRestrictedIdentifier(!1, !0)),
						this.scope.declareName(e.id.name, ce, e.id.loc.start),
						this.match(47)
							? (e.typeParameters = this.flowParseTypeParameterDeclaration())
							: (e.typeParameters = null),
						(e.right = this.flowParseTypeInitialiser(29)),
						this.semicolon(),
						this.finishNode(e, 'TypeAlias')
					);
				}
				flowParseOpaqueType(e, s) {
					return (
						this.expectContextual(128),
						(e.id = this.flowParseRestrictedIdentifier(!0, !0)),
						this.scope.declareName(e.id.name, ce, e.id.loc.start),
						this.match(47)
							? (e.typeParameters = this.flowParseTypeParameterDeclaration())
							: (e.typeParameters = null),
						(e.supertype = null),
						this.match(14) && (e.supertype = this.flowParseTypeInitialiser(14)),
						(e.impltype = null),
						s || (e.impltype = this.flowParseTypeInitialiser(29)),
						this.semicolon(),
						this.finishNode(e, 'OpaqueType')
					);
				}
				flowParseTypeParameter(e = !1) {
					let s = this.state.startLoc,
						i = this.startNode(),
						r = this.flowParseVariance(),
						n = this.flowParseTypeAnnotatableIdentifier();
					return (
						(i.name = n.name),
						(i.variance = r),
						(i.bound = n.typeAnnotation),
						this.match(29)
							? (this.eat(29), (i.default = this.flowParseType()))
							: e && this.raise(T.MissingTypeParamDefault, { at: s }),
						this.finishNode(i, 'TypeParameter')
					);
				}
				flowParseTypeParameterDeclaration() {
					let e = this.state.inType,
						s = this.startNode();
					(s.params = []),
						(this.state.inType = !0),
						this.match(47) || this.match(140) ? this.next() : this.unexpected();
					let i = !1;
					do {
						let r = this.flowParseTypeParameter(i);
						s.params.push(r),
							r.default && (i = !0),
							this.match(48) || this.expect(12);
					} while (!this.match(48));
					return (
						this.expect(48),
						(this.state.inType = e),
						this.finishNode(s, 'TypeParameterDeclaration')
					);
				}
				flowParseTypeParameterInstantiation() {
					let e = this.startNode(),
						s = this.state.inType;
					(e.params = []), (this.state.inType = !0), this.expect(47);
					let i = this.state.noAnonFunctionType;
					for (this.state.noAnonFunctionType = !1; !this.match(48); )
						e.params.push(this.flowParseType()),
							this.match(48) || this.expect(12);
					return (
						(this.state.noAnonFunctionType = i),
						this.expect(48),
						(this.state.inType = s),
						this.finishNode(e, 'TypeParameterInstantiation')
					);
				}
				flowParseTypeParameterInstantiationCallOrNew() {
					let e = this.startNode(),
						s = this.state.inType;
					for (
						e.params = [], this.state.inType = !0, this.expect(47);
						!this.match(48);

					)
						e.params.push(this.flowParseTypeOrImplicitInstantiation()),
							this.match(48) || this.expect(12);
					return (
						this.expect(48),
						(this.state.inType = s),
						this.finishNode(e, 'TypeParameterInstantiation')
					);
				}
				flowParseInterfaceType() {
					let e = this.startNode();
					if ((this.expectContextual(127), (e.extends = []), this.eat(81)))
						do e.extends.push(this.flowParseInterfaceExtends());
						while (this.eat(12));
					return (
						(e.body = this.flowParseObjectType({
							allowStatic: !1,
							allowExact: !1,
							allowSpread: !1,
							allowProto: !1,
							allowInexact: !1
						})),
						this.finishNode(e, 'InterfaceTypeAnnotation')
					);
				}
				flowParseObjectPropertyKey() {
					return this.match(132) || this.match(131)
						? super.parseExprAtom()
						: this.parseIdentifier(!0);
				}
				flowParseObjectTypeIndexer(e, s, i) {
					return (
						(e.static = s),
						this.lookahead().type === 14
							? ((e.id = this.flowParseObjectPropertyKey()),
							  (e.key = this.flowParseTypeInitialiser()))
							: ((e.id = null), (e.key = this.flowParseType())),
						this.expect(3),
						(e.value = this.flowParseTypeInitialiser()),
						(e.variance = i),
						this.finishNode(e, 'ObjectTypeIndexer')
					);
				}
				flowParseObjectTypeInternalSlot(e, s) {
					return (
						(e.static = s),
						(e.id = this.flowParseObjectPropertyKey()),
						this.expect(3),
						this.expect(3),
						this.match(47) || this.match(10)
							? ((e.method = !0),
							  (e.optional = !1),
							  (e.value = this.flowParseObjectTypeMethodish(
									this.startNodeAt(e.loc.start)
							  )))
							: ((e.method = !1),
							  this.eat(17) && (e.optional = !0),
							  (e.value = this.flowParseTypeInitialiser())),
						this.finishNode(e, 'ObjectTypeInternalSlot')
					);
				}
				flowParseObjectTypeMethodish(e) {
					for (
						e.params = [],
							e.rest = null,
							e.typeParameters = null,
							e.this = null,
							this.match(47) &&
								(e.typeParameters = this.flowParseTypeParameterDeclaration()),
							this.expect(10),
							this.match(78) &&
								((e.this = this.flowParseFunctionTypeParam(!0)),
								(e.this.name = null),
								this.match(11) || this.expect(12));
						!this.match(11) && !this.match(21);

					)
						e.params.push(this.flowParseFunctionTypeParam(!1)),
							this.match(11) || this.expect(12);
					return (
						this.eat(21) && (e.rest = this.flowParseFunctionTypeParam(!1)),
						this.expect(11),
						(e.returnType = this.flowParseTypeInitialiser()),
						this.finishNode(e, 'FunctionTypeAnnotation')
					);
				}
				flowParseObjectTypeCallProperty(e, s) {
					let i = this.startNode();
					return (
						(e.static = s),
						(e.value = this.flowParseObjectTypeMethodish(i)),
						this.finishNode(e, 'ObjectTypeCallProperty')
					);
				}
				flowParseObjectType({
					allowStatic: e,
					allowExact: s,
					allowSpread: i,
					allowProto: r,
					allowInexact: n
				}) {
					let o = this.state.inType;
					this.state.inType = !0;
					let h = this.startNode();
					(h.callProperties = []),
						(h.properties = []),
						(h.indexers = []),
						(h.internalSlots = []);
					let l,
						c,
						u = !1;
					for (
						s && this.match(6)
							? (this.expect(6), (l = 9), (c = !0))
							: (this.expect(5), (l = 8), (c = !1)),
							h.exact = c;
						!this.match(l);

					) {
						let f = !1,
							x = null,
							I = null,
							C = this.startNode();
						if (r && this.isContextual(116)) {
							let N = this.lookahead();
							N.type !== 14 &&
								N.type !== 17 &&
								(this.next(), (x = this.state.startLoc), (e = !1));
						}
						if (e && this.isContextual(104)) {
							let N = this.lookahead();
							N.type !== 14 && N.type !== 17 && (this.next(), (f = !0));
						}
						let w = this.flowParseVariance();
						if (this.eat(0))
							x != null && this.unexpected(x),
								this.eat(0)
									? (w && this.unexpected(w.loc.start),
									  h.internalSlots.push(
											this.flowParseObjectTypeInternalSlot(C, f)
									  ))
									: h.indexers.push(this.flowParseObjectTypeIndexer(C, f, w));
						else if (this.match(10) || this.match(47))
							x != null && this.unexpected(x),
								w && this.unexpected(w.loc.start),
								h.callProperties.push(
									this.flowParseObjectTypeCallProperty(C, f)
								);
						else {
							let N = 'init';
							if (this.isContextual(98) || this.isContextual(103)) {
								let be = this.lookahead();
								ks(be.type) && ((N = this.state.value), this.next());
							}
							let Re = this.flowParseObjectTypeProperty(
								C,
								f,
								x,
								w,
								N,
								i,
								n ?? !c
							);
							Re === null
								? ((u = !0), (I = this.state.lastTokStartLoc))
								: h.properties.push(Re);
						}
						this.flowObjectTypeSemicolon(),
							I &&
								!this.match(8) &&
								!this.match(9) &&
								this.raise(T.UnexpectedExplicitInexactInObject, { at: I });
					}
					this.expect(l), i && (h.inexact = u);
					let d = this.finishNode(h, 'ObjectTypeAnnotation');
					return (this.state.inType = o), d;
				}
				flowParseObjectTypeProperty(e, s, i, r, n, o, h) {
					if (this.eat(21))
						return this.match(12) ||
							this.match(13) ||
							this.match(8) ||
							this.match(9)
							? (o
									? h ||
									  this.raise(T.InexactInsideExact, {
											at: this.state.lastTokStartLoc
									  })
									: this.raise(T.InexactInsideNonObject, {
											at: this.state.lastTokStartLoc
									  }),
							  r && this.raise(T.InexactVariance, { at: r }),
							  null)
							: (o ||
									this.raise(T.UnexpectedSpreadType, {
										at: this.state.lastTokStartLoc
									}),
							  i != null && this.unexpected(i),
							  r && this.raise(T.SpreadVariance, { at: r }),
							  (e.argument = this.flowParseType()),
							  this.finishNode(e, 'ObjectTypeSpreadProperty'));
					{
						(e.key = this.flowParseObjectPropertyKey()),
							(e.static = s),
							(e.proto = i != null),
							(e.kind = n);
						let l = !1;
						return (
							this.match(47) || this.match(10)
								? ((e.method = !0),
								  i != null && this.unexpected(i),
								  r && this.unexpected(r.loc.start),
								  (e.value = this.flowParseObjectTypeMethodish(
										this.startNodeAt(e.loc.start)
								  )),
								  (n === 'get' || n === 'set') &&
										this.flowCheckGetterSetterParams(e),
								  !o &&
										e.key.name === 'constructor' &&
										e.value.this &&
										this.raise(T.ThisParamBannedInConstructor, {
											at: e.value.this
										}))
								: (n !== 'init' && this.unexpected(),
								  (e.method = !1),
								  this.eat(17) && (l = !0),
								  (e.value = this.flowParseTypeInitialiser()),
								  (e.variance = r)),
							(e.optional = l),
							this.finishNode(e, 'ObjectTypeProperty')
						);
					}
				}
				flowCheckGetterSetterParams(e) {
					let s = e.kind === 'get' ? 0 : 1,
						i = e.value.params.length + (e.value.rest ? 1 : 0);
					e.value.this &&
						this.raise(
							e.kind === 'get'
								? T.GetterMayNotHaveThisParam
								: T.SetterMayNotHaveThisParam,
							{ at: e.value.this }
						),
						i !== s &&
							this.raise(
								e.kind === 'get' ? p.BadGetterArity : p.BadSetterArity,
								{ at: e }
							),
						e.kind === 'set' &&
							e.value.rest &&
							this.raise(p.BadSetterRestParameter, { at: e });
				}
				flowObjectTypeSemicolon() {
					!this.eat(13) &&
						!this.eat(12) &&
						!this.match(8) &&
						!this.match(9) &&
						this.unexpected();
				}
				flowParseQualifiedTypeIdentifier(e, s) {
					e != null || (e = this.state.startLoc);
					let r = s || this.flowParseRestrictedIdentifier(!0);
					for (; this.eat(16); ) {
						let n = this.startNodeAt(e);
						(n.qualification = r),
							(n.id = this.flowParseRestrictedIdentifier(!0)),
							(r = this.finishNode(n, 'QualifiedTypeIdentifier'));
					}
					return r;
				}
				flowParseGenericType(e, s) {
					let i = this.startNodeAt(e);
					return (
						(i.typeParameters = null),
						(i.id = this.flowParseQualifiedTypeIdentifier(e, s)),
						this.match(47) &&
							(i.typeParameters = this.flowParseTypeParameterInstantiation()),
						this.finishNode(i, 'GenericTypeAnnotation')
					);
				}
				flowParseTypeofType() {
					let e = this.startNode();
					return (
						this.expect(87),
						(e.argument = this.flowParsePrimaryType()),
						this.finishNode(e, 'TypeofTypeAnnotation')
					);
				}
				flowParseTupleType() {
					let e = this.startNode();
					for (
						e.types = [], this.expect(0);
						this.state.pos < this.length &&
						!this.match(3) &&
						(e.types.push(this.flowParseType()), !this.match(3));

					)
						this.expect(12);
					return this.expect(3), this.finishNode(e, 'TupleTypeAnnotation');
				}
				flowParseFunctionTypeParam(e) {
					let s = null,
						i = !1,
						r = null,
						n = this.startNode(),
						o = this.lookahead(),
						h = this.state.type === 78;
					return (
						o.type === 14 || o.type === 17
							? (h && !e && this.raise(T.ThisParamMustBeFirst, { at: n }),
							  (s = this.parseIdentifier(h)),
							  this.eat(17) &&
									((i = !0),
									h && this.raise(T.ThisParamMayNotBeOptional, { at: n })),
							  (r = this.flowParseTypeInitialiser()))
							: (r = this.flowParseType()),
						(n.name = s),
						(n.optional = i),
						(n.typeAnnotation = r),
						this.finishNode(n, 'FunctionTypeParam')
					);
				}
				reinterpretTypeAsFunctionTypeParam(e) {
					let s = this.startNodeAt(e.loc.start);
					return (
						(s.name = null),
						(s.optional = !1),
						(s.typeAnnotation = e),
						this.finishNode(s, 'FunctionTypeParam')
					);
				}
				flowParseFunctionTypeParams(e = []) {
					let s = null,
						i = null;
					for (
						this.match(78) &&
						((i = this.flowParseFunctionTypeParam(!0)),
						(i.name = null),
						this.match(11) || this.expect(12));
						!this.match(11) && !this.match(21);

					)
						e.push(this.flowParseFunctionTypeParam(!1)),
							this.match(11) || this.expect(12);
					return (
						this.eat(21) && (s = this.flowParseFunctionTypeParam(!1)),
						{ params: e, rest: s, _this: i }
					);
				}
				flowIdentToTypeAnnotation(e, s, i) {
					switch (i.name) {
						case 'any':
							return this.finishNode(s, 'AnyTypeAnnotation');
						case 'bool':
						case 'boolean':
							return this.finishNode(s, 'BooleanTypeAnnotation');
						case 'mixed':
							return this.finishNode(s, 'MixedTypeAnnotation');
						case 'empty':
							return this.finishNode(s, 'EmptyTypeAnnotation');
						case 'number':
							return this.finishNode(s, 'NumberTypeAnnotation');
						case 'string':
							return this.finishNode(s, 'StringTypeAnnotation');
						case 'symbol':
							return this.finishNode(s, 'SymbolTypeAnnotation');
						default:
							return (
								this.checkNotUnderscore(i.name), this.flowParseGenericType(e, i)
							);
					}
				}
				flowParsePrimaryType() {
					let e = this.state.startLoc,
						s = this.startNode(),
						i,
						r,
						n = !1,
						o = this.state.noAnonFunctionType;
					switch (this.state.type) {
						case 5:
							return this.flowParseObjectType({
								allowStatic: !1,
								allowExact: !1,
								allowSpread: !0,
								allowProto: !1,
								allowInexact: !0
							});
						case 6:
							return this.flowParseObjectType({
								allowStatic: !1,
								allowExact: !0,
								allowSpread: !0,
								allowProto: !1,
								allowInexact: !1
							});
						case 0:
							return (
								(this.state.noAnonFunctionType = !1),
								(r = this.flowParseTupleType()),
								(this.state.noAnonFunctionType = o),
								r
							);
						case 47:
							return (
								(s.typeParameters = this.flowParseTypeParameterDeclaration()),
								this.expect(10),
								(i = this.flowParseFunctionTypeParams()),
								(s.params = i.params),
								(s.rest = i.rest),
								(s.this = i._this),
								this.expect(11),
								this.expect(19),
								(s.returnType = this.flowParseType()),
								this.finishNode(s, 'FunctionTypeAnnotation')
							);
						case 10:
							if ((this.next(), !this.match(11) && !this.match(21)))
								if (S(this.state.type) || this.match(78)) {
									let h = this.lookahead().type;
									n = h !== 17 && h !== 14;
								} else n = !0;
							if (n) {
								if (
									((this.state.noAnonFunctionType = !1),
									(r = this.flowParseType()),
									(this.state.noAnonFunctionType = o),
									this.state.noAnonFunctionType ||
										!(
											this.match(12) ||
											(this.match(11) && this.lookahead().type === 19)
										))
								)
									return this.expect(11), r;
								this.eat(12);
							}
							return (
								r
									? (i = this.flowParseFunctionTypeParams([
											this.reinterpretTypeAsFunctionTypeParam(r)
									  ]))
									: (i = this.flowParseFunctionTypeParams()),
								(s.params = i.params),
								(s.rest = i.rest),
								(s.this = i._this),
								this.expect(11),
								this.expect(19),
								(s.returnType = this.flowParseType()),
								(s.typeParameters = null),
								this.finishNode(s, 'FunctionTypeAnnotation')
							);
						case 131:
							return this.parseLiteral(
								this.state.value,
								'StringLiteralTypeAnnotation'
							);
						case 85:
						case 86:
							return (
								(s.value = this.match(85)),
								this.next(),
								this.finishNode(s, 'BooleanLiteralTypeAnnotation')
							);
						case 53:
							if (this.state.value === '-') {
								if ((this.next(), this.match(132)))
									return this.parseLiteralAtNode(
										-this.state.value,
										'NumberLiteralTypeAnnotation',
										s
									);
								if (this.match(133))
									return this.parseLiteralAtNode(
										-this.state.value,
										'BigIntLiteralTypeAnnotation',
										s
									);
								throw this.raise(T.UnexpectedSubtractionOperand, {
									at: this.state.startLoc
								});
							}
							this.unexpected();
							return;
						case 132:
							return this.parseLiteral(
								this.state.value,
								'NumberLiteralTypeAnnotation'
							);
						case 133:
							return this.parseLiteral(
								this.state.value,
								'BigIntLiteralTypeAnnotation'
							);
						case 88:
							return this.next(), this.finishNode(s, 'VoidTypeAnnotation');
						case 84:
							return (
								this.next(), this.finishNode(s, 'NullLiteralTypeAnnotation')
							);
						case 78:
							return this.next(), this.finishNode(s, 'ThisTypeAnnotation');
						case 55:
							return this.next(), this.finishNode(s, 'ExistsTypeAnnotation');
						case 87:
							return this.flowParseTypeofType();
						default:
							if (Xt(this.state.type)) {
								let h = J(this.state.type);
								return this.next(), super.createIdentifier(s, h);
							} else if (S(this.state.type))
								return this.isContextual(127)
									? this.flowParseInterfaceType()
									: this.flowIdentToTypeAnnotation(
											e,
											s,
											this.parseIdentifier()
									  );
					}
					this.unexpected();
				}
				flowParsePostfixType() {
					let e = this.state.startLoc,
						s = this.flowParsePrimaryType(),
						i = !1;
					for (
						;
						(this.match(0) || this.match(18)) && !this.canInsertSemicolon();

					) {
						let r = this.startNodeAt(e),
							n = this.eat(18);
						(i = i || n),
							this.expect(0),
							!n && this.match(3)
								? ((r.elementType = s),
								  this.next(),
								  (s = this.finishNode(r, 'ArrayTypeAnnotation')))
								: ((r.objectType = s),
								  (r.indexType = this.flowParseType()),
								  this.expect(3),
								  i
										? ((r.optional = n),
										  (s = this.finishNode(r, 'OptionalIndexedAccessType')))
										: (s = this.finishNode(r, 'IndexedAccessType')));
					}
					return s;
				}
				flowParsePrefixType() {
					let e = this.startNode();
					return this.eat(17)
						? ((e.typeAnnotation = this.flowParsePrefixType()),
						  this.finishNode(e, 'NullableTypeAnnotation'))
						: this.flowParsePostfixType();
				}
				flowParseAnonFunctionWithoutParens() {
					let e = this.flowParsePrefixType();
					if (!this.state.noAnonFunctionType && this.eat(19)) {
						let s = this.startNodeAt(e.loc.start);
						return (
							(s.params = [this.reinterpretTypeAsFunctionTypeParam(e)]),
							(s.rest = null),
							(s.this = null),
							(s.returnType = this.flowParseType()),
							(s.typeParameters = null),
							this.finishNode(s, 'FunctionTypeAnnotation')
						);
					}
					return e;
				}
				flowParseIntersectionType() {
					let e = this.startNode();
					this.eat(45);
					let s = this.flowParseAnonFunctionWithoutParens();
					for (e.types = [s]; this.eat(45); )
						e.types.push(this.flowParseAnonFunctionWithoutParens());
					return e.types.length === 1
						? s
						: this.finishNode(e, 'IntersectionTypeAnnotation');
				}
				flowParseUnionType() {
					let e = this.startNode();
					this.eat(43);
					let s = this.flowParseIntersectionType();
					for (e.types = [s]; this.eat(43); )
						e.types.push(this.flowParseIntersectionType());
					return e.types.length === 1
						? s
						: this.finishNode(e, 'UnionTypeAnnotation');
				}
				flowParseType() {
					let e = this.state.inType;
					this.state.inType = !0;
					let s = this.flowParseUnionType();
					return (this.state.inType = e), s;
				}
				flowParseTypeOrImplicitInstantiation() {
					if (this.state.type === 130 && this.state.value === '_') {
						let e = this.state.startLoc,
							s = this.parseIdentifier();
						return this.flowParseGenericType(e, s);
					} else return this.flowParseType();
				}
				flowParseTypeAnnotation() {
					let e = this.startNode();
					return (
						(e.typeAnnotation = this.flowParseTypeInitialiser()),
						this.finishNode(e, 'TypeAnnotation')
					);
				}
				flowParseTypeAnnotatableIdentifier(e) {
					let s = e
						? this.parseIdentifier()
						: this.flowParseRestrictedIdentifier();
					return (
						this.match(14) &&
							((s.typeAnnotation = this.flowParseTypeAnnotation()),
							this.resetEndLocation(s)),
						s
					);
				}
				typeCastToParameter(e) {
					return (
						(e.expression.typeAnnotation = e.typeAnnotation),
						this.resetEndLocation(e.expression, e.typeAnnotation.loc.end),
						e.expression
					);
				}
				flowParseVariance() {
					let e = null;
					return this.match(53)
						? ((e = this.startNode()),
						  this.state.value === '+' ? (e.kind = 'plus') : (e.kind = 'minus'),
						  this.next(),
						  this.finishNode(e, 'Variance'))
						: e;
				}
				parseFunctionBody(e, s, i = !1) {
					if (s) {
						this.forwardNoArrowParamsConversionAt(e, () =>
							super.parseFunctionBody(e, !0, i)
						);
						return;
					}
					super.parseFunctionBody(e, !1, i);
				}
				parseFunctionBodyAndFinish(e, s, i = !1) {
					if (this.match(14)) {
						let r = this.startNode();
						([r.typeAnnotation, e.predicate] =
							this.flowParseTypeAndPredicateInitialiser()),
							(e.returnType = r.typeAnnotation
								? this.finishNode(r, 'TypeAnnotation')
								: null);
					}
					return super.parseFunctionBodyAndFinish(e, s, i);
				}
				parseStatementLike(e) {
					if (this.state.strict && this.isContextual(127)) {
						let i = this.lookahead();
						if (M(i.type)) {
							let r = this.startNode();
							return this.next(), this.flowParseInterface(r);
						}
					} else if (this.shouldParseEnums() && this.isContextual(124)) {
						let i = this.startNode();
						return this.next(), this.flowParseEnumDeclaration(i);
					}
					let s = super.parseStatementLike(e);
					return (
						this.flowPragma === void 0 &&
							!this.isValidDirective(s) &&
							(this.flowPragma = null),
						s
					);
				}
				parseExpressionStatement(e, s, i) {
					if (s.type === 'Identifier') {
						if (s.name === 'declare') {
							if (
								this.match(80) ||
								S(this.state.type) ||
								this.match(68) ||
								this.match(74) ||
								this.match(82)
							)
								return this.flowParseDeclare(e);
						} else if (S(this.state.type)) {
							if (s.name === 'interface') return this.flowParseInterface(e);
							if (s.name === 'type') return this.flowParseTypeAlias(e);
							if (s.name === 'opaque') return this.flowParseOpaqueType(e, !1);
						}
					}
					return super.parseExpressionStatement(e, s, i);
				}
				shouldParseExportDeclaration() {
					let { type: e } = this.state;
					return ds(e) || (this.shouldParseEnums() && e === 124)
						? !this.state.containsEsc
						: super.shouldParseExportDeclaration();
				}
				isExportDefaultSpecifier() {
					let { type: e } = this.state;
					return ds(e) || (this.shouldParseEnums() && e === 124)
						? this.state.containsEsc
						: super.isExportDefaultSpecifier();
				}
				parseExportDefaultExpression() {
					if (this.shouldParseEnums() && this.isContextual(124)) {
						let e = this.startNode();
						return this.next(), this.flowParseEnumDeclaration(e);
					}
					return super.parseExportDefaultExpression();
				}
				parseConditional(e, s, i) {
					if (!this.match(17)) return e;
					if (this.state.maybeInArrowParameters) {
						let d = this.lookaheadCharCode();
						if (d === 44 || d === 61 || d === 58 || d === 41)
							return this.setOptionalParametersError(i), e;
					}
					this.expect(17);
					let r = this.state.clone(),
						n = this.state.noArrowAt,
						o = this.startNodeAt(s),
						{ consequent: h, failed: l } = this.tryParseConditionalConsequent(),
						[c, u] = this.getArrowLikeExpressions(h);
					if (l || u.length > 0) {
						let d = [...n];
						if (u.length > 0) {
							(this.state = r), (this.state.noArrowAt = d);
							for (let f = 0; f < u.length; f++) d.push(u[f].start);
							({ consequent: h, failed: l } =
								this.tryParseConditionalConsequent()),
								([c, u] = this.getArrowLikeExpressions(h));
						}
						l &&
							c.length > 1 &&
							this.raise(T.AmbiguousConditionalArrow, { at: r.startLoc }),
							l &&
								c.length === 1 &&
								((this.state = r),
								d.push(c[0].start),
								(this.state.noArrowAt = d),
								({ consequent: h, failed: l } =
									this.tryParseConditionalConsequent()));
					}
					return (
						this.getArrowLikeExpressions(h, !0),
						(this.state.noArrowAt = n),
						this.expect(14),
						(o.test = e),
						(o.consequent = h),
						(o.alternate = this.forwardNoArrowParamsConversionAt(o, () =>
							this.parseMaybeAssign(void 0, void 0)
						)),
						this.finishNode(o, 'ConditionalExpression')
					);
				}
				tryParseConditionalConsequent() {
					this.state.noArrowParamsConversionAt.push(this.state.start);
					let e = this.parseMaybeAssignAllowIn(),
						s = !this.match(14);
					return (
						this.state.noArrowParamsConversionAt.pop(),
						{ consequent: e, failed: s }
					);
				}
				getArrowLikeExpressions(e, s) {
					let i = [e],
						r = [];
					for (; i.length !== 0; ) {
						let n = i.pop();
						n.type === 'ArrowFunctionExpression'
							? (n.typeParameters || !n.returnType
									? this.finishArrowValidation(n)
									: r.push(n),
							  i.push(n.body))
							: n.type === 'ConditionalExpression' &&
							  (i.push(n.consequent), i.push(n.alternate));
					}
					return s
						? (r.forEach((n) => this.finishArrowValidation(n)), [r, []])
						: Zr(r, (n) => n.params.every((o) => this.isAssignable(o, !0)));
				}
				finishArrowValidation(e) {
					var s;
					this.toAssignableList(
						e.params,
						(s = e.extra) == null ? void 0 : s.trailingCommaLoc,
						!1
					),
						this.scope.enter(z | Qt),
						super.checkParams(e, !1, !0),
						this.scope.exit();
				}
				forwardNoArrowParamsConversionAt(e, s) {
					let i;
					return (
						this.state.noArrowParamsConversionAt.indexOf(e.start) !== -1
							? (this.state.noArrowParamsConversionAt.push(this.state.start),
							  (i = s()),
							  this.state.noArrowParamsConversionAt.pop())
							: (i = s()),
						i
					);
				}
				parseParenItem(e, s) {
					if (
						((e = super.parseParenItem(e, s)),
						this.eat(17) && ((e.optional = !0), this.resetEndLocation(e)),
						this.match(14))
					) {
						let i = this.startNodeAt(s);
						return (
							(i.expression = e),
							(i.typeAnnotation = this.flowParseTypeAnnotation()),
							this.finishNode(i, 'TypeCastExpression')
						);
					}
					return e;
				}
				assertModuleNodeAllowed(e) {
					(e.type === 'ImportDeclaration' &&
						(e.importKind === 'type' || e.importKind === 'typeof')) ||
						(e.type === 'ExportNamedDeclaration' && e.exportKind === 'type') ||
						(e.type === 'ExportAllDeclaration' && e.exportKind === 'type') ||
						super.assertModuleNodeAllowed(e);
				}
				parseExportDeclaration(e) {
					if (this.isContextual(128)) {
						e.exportKind = 'type';
						let s = this.startNode();
						return (
							this.next(),
							this.match(5)
								? ((e.specifiers = this.parseExportSpecifiers(!0)),
								  super.parseExportFrom(e),
								  null)
								: this.flowParseTypeAlias(s)
						);
					} else if (this.isContextual(129)) {
						e.exportKind = 'type';
						let s = this.startNode();
						return this.next(), this.flowParseOpaqueType(s, !1);
					} else if (this.isContextual(127)) {
						e.exportKind = 'type';
						let s = this.startNode();
						return this.next(), this.flowParseInterface(s);
					} else if (this.shouldParseEnums() && this.isContextual(124)) {
						e.exportKind = 'value';
						let s = this.startNode();
						return this.next(), this.flowParseEnumDeclaration(s);
					} else return super.parseExportDeclaration(e);
				}
				eatExportStar(e) {
					return super.eatExportStar(e)
						? !0
						: this.isContextual(128) && this.lookahead().type === 55
						? ((e.exportKind = 'type'), this.next(), this.next(), !0)
						: !1;
				}
				maybeParseExportNamespaceSpecifier(e) {
					let { startLoc: s } = this.state,
						i = super.maybeParseExportNamespaceSpecifier(e);
					return i && e.exportKind === 'type' && this.unexpected(s), i;
				}
				parseClassId(e, s, i) {
					super.parseClassId(e, s, i),
						this.match(47) &&
							(e.typeParameters = this.flowParseTypeParameterDeclaration());
				}
				parseClassMember(e, s, i) {
					let { startLoc: r } = this.state;
					if (this.isContextual(123)) {
						if (super.parseClassMemberFromModifier(e, s)) return;
						s.declare = !0;
					}
					super.parseClassMember(e, s, i),
						s.declare &&
							(s.type !== 'ClassProperty' &&
							s.type !== 'ClassPrivateProperty' &&
							s.type !== 'PropertyDefinition'
								? this.raise(T.DeclareClassElement, { at: r })
								: s.value &&
								  this.raise(T.DeclareClassFieldInitializer, { at: s.value }));
				}
				isIterator(e) {
					return e === 'iterator' || e === 'asyncIterator';
				}
				readIterator() {
					let e = super.readWord1(),
						s = '@@' + e;
					(!this.isIterator(e) || !this.state.inType) &&
						this.raise(p.InvalidIdentifier, {
							at: this.state.curPosition(),
							identifierName: s
						}),
						this.finishToken(130, s);
				}
				getTokenFromCode(e) {
					let s = this.input.charCodeAt(this.state.pos + 1);
					e === 123 && s === 124
						? this.finishOp(6, 2)
						: this.state.inType && (e === 62 || e === 60)
						? this.finishOp(e === 62 ? 48 : 47, 1)
						: this.state.inType && e === 63
						? s === 46
							? this.finishOp(18, 2)
							: this.finishOp(17, 1)
						: Ar(e, s, this.input.charCodeAt(this.state.pos + 2))
						? ((this.state.pos += 2), this.readIterator())
						: super.getTokenFromCode(e);
				}
				isAssignable(e, s) {
					return e.type === 'TypeCastExpression'
						? this.isAssignable(e.expression, s)
						: super.isAssignable(e, s);
				}
				toAssignable(e, s = !1) {
					!s &&
						e.type === 'AssignmentExpression' &&
						e.left.type === 'TypeCastExpression' &&
						(e.left = this.typeCastToParameter(e.left)),
						super.toAssignable(e, s);
				}
				toAssignableList(e, s, i) {
					for (let r = 0; r < e.length; r++) {
						let n = e[r];
						(n == null ? void 0 : n.type) === 'TypeCastExpression' &&
							(e[r] = this.typeCastToParameter(n));
					}
					super.toAssignableList(e, s, i);
				}
				toReferencedList(e, s) {
					for (let r = 0; r < e.length; r++) {
						var i;
						let n = e[r];
						n &&
							n.type === 'TypeCastExpression' &&
							!((i = n.extra) != null && i.parenthesized) &&
							(e.length > 1 || !s) &&
							this.raise(T.TypeCastInPattern, { at: n.typeAnnotation });
					}
					return e;
				}
				parseArrayLike(e, s, i, r) {
					let n = super.parseArrayLike(e, s, i, r);
					return (
						s &&
							!this.state.maybeInArrowParameters &&
							this.toReferencedList(n.elements),
						n
					);
				}
				isValidLVal(e, s, i) {
					return e === 'TypeCastExpression' || super.isValidLVal(e, s, i);
				}
				parseClassProperty(e) {
					return (
						this.match(14) &&
							(e.typeAnnotation = this.flowParseTypeAnnotation()),
						super.parseClassProperty(e)
					);
				}
				parseClassPrivateProperty(e) {
					return (
						this.match(14) &&
							(e.typeAnnotation = this.flowParseTypeAnnotation()),
						super.parseClassPrivateProperty(e)
					);
				}
				isClassMethod() {
					return this.match(47) || super.isClassMethod();
				}
				isClassProperty() {
					return this.match(14) || super.isClassProperty();
				}
				isNonstaticConstructor(e) {
					return !this.match(14) && super.isNonstaticConstructor(e);
				}
				pushClassMethod(e, s, i, r, n, o) {
					if (
						(s.variance && this.unexpected(s.variance.loc.start),
						delete s.variance,
						this.match(47) &&
							(s.typeParameters = this.flowParseTypeParameterDeclaration()),
						super.pushClassMethod(e, s, i, r, n, o),
						s.params && n)
					) {
						let h = s.params;
						h.length > 0 &&
							this.isThisParam(h[0]) &&
							this.raise(T.ThisParamBannedInConstructor, { at: s });
					} else if (s.type === 'MethodDefinition' && n && s.value.params) {
						let h = s.value.params;
						h.length > 0 &&
							this.isThisParam(h[0]) &&
							this.raise(T.ThisParamBannedInConstructor, { at: s });
					}
				}
				pushClassPrivateMethod(e, s, i, r) {
					s.variance && this.unexpected(s.variance.loc.start),
						delete s.variance,
						this.match(47) &&
							(s.typeParameters = this.flowParseTypeParameterDeclaration()),
						super.pushClassPrivateMethod(e, s, i, r);
				}
				parseClassSuper(e) {
					if (
						(super.parseClassSuper(e),
						e.superClass &&
							this.match(47) &&
							(e.superTypeParameters =
								this.flowParseTypeParameterInstantiation()),
						this.isContextual(111))
					) {
						this.next();
						let s = (e.implements = []);
						do {
							let i = this.startNode();
							(i.id = this.flowParseRestrictedIdentifier(!0)),
								this.match(47)
									? (i.typeParameters =
											this.flowParseTypeParameterInstantiation())
									: (i.typeParameters = null),
								s.push(this.finishNode(i, 'ClassImplements'));
						} while (this.eat(12));
					}
				}
				checkGetterSetterParams(e) {
					super.checkGetterSetterParams(e);
					let s = this.getObjectOrClassMethodParams(e);
					if (s.length > 0) {
						let i = s[0];
						this.isThisParam(i) && e.kind === 'get'
							? this.raise(T.GetterMayNotHaveThisParam, { at: i })
							: this.isThisParam(i) &&
							  this.raise(T.SetterMayNotHaveThisParam, { at: i });
					}
				}
				parsePropertyNamePrefixOperator(e) {
					e.variance = this.flowParseVariance();
				}
				parseObjPropValue(e, s, i, r, n, o, h) {
					e.variance && this.unexpected(e.variance.loc.start),
						delete e.variance;
					let l;
					this.match(47) &&
						!o &&
						((l = this.flowParseTypeParameterDeclaration()),
						this.match(10) || this.unexpected());
					let c = super.parseObjPropValue(e, s, i, r, n, o, h);
					return l && ((c.value || c).typeParameters = l), c;
				}
				parseAssignableListItemTypes(e) {
					return (
						this.eat(17) &&
							(e.type !== 'Identifier' &&
								this.raise(T.PatternIsOptional, { at: e }),
							this.isThisParam(e) &&
								this.raise(T.ThisParamMayNotBeOptional, { at: e }),
							(e.optional = !0)),
						this.match(14)
							? (e.typeAnnotation = this.flowParseTypeAnnotation())
							: this.isThisParam(e) &&
							  this.raise(T.ThisParamAnnotationRequired, { at: e }),
						this.match(29) &&
							this.isThisParam(e) &&
							this.raise(T.ThisParamNoDefault, { at: e }),
						this.resetEndLocation(e),
						e
					);
				}
				parseMaybeDefault(e, s) {
					let i = super.parseMaybeDefault(e, s);
					return (
						i.type === 'AssignmentPattern' &&
							i.typeAnnotation &&
							i.right.start < i.typeAnnotation.start &&
							this.raise(T.TypeBeforeInitializer, { at: i.typeAnnotation }),
						i
					);
				}
				checkImportReflection(e) {
					super.checkImportReflection(e),
						e.module &&
							e.importKind !== 'value' &&
							this.raise(T.ImportReflectionHasImportType, {
								at: e.specifiers[0].loc.start
							});
				}
				parseImportSpecifierLocal(e, s, i) {
					(s.local = gs(e)
						? this.flowParseRestrictedIdentifier(!0, !0)
						: this.parseIdentifier()),
						e.specifiers.push(this.finishImportSpecifier(s, i));
				}
				isPotentialImportPhase(e) {
					if (super.isPotentialImportPhase(e)) return !0;
					if (this.isContextual(128)) {
						if (!e) return !0;
						let s = this.lookaheadCharCode();
						return s === 123 || s === 42;
					}
					return !e && this.isContextual(87);
				}
				applyImportPhase(e, s, i, r) {
					if ((super.applyImportPhase(e, s, i, r), s)) {
						if (!i && this.match(65)) return;
						e.exportKind = i === 'type' ? i : 'value';
					} else
						i === 'type' && this.match(55) && this.unexpected(),
							(e.importKind = i === 'type' || i === 'typeof' ? i : 'value');
				}
				parseImportSpecifier(e, s, i, r, n) {
					let o = e.imported,
						h = null;
					o.type === 'Identifier' &&
						(o.name === 'type'
							? (h = 'type')
							: o.name === 'typeof' && (h = 'typeof'));
					let l = !1;
					if (this.isContextual(93) && !this.isLookaheadContextual('as')) {
						let u = this.parseIdentifier(!0);
						h !== null && !M(this.state.type)
							? ((e.imported = u), (e.importKind = h), (e.local = K(u)))
							: ((e.imported = o),
							  (e.importKind = null),
							  (e.local = this.parseIdentifier()));
					} else {
						if (h !== null && M(this.state.type))
							(e.imported = this.parseIdentifier(!0)), (e.importKind = h);
						else {
							if (s)
								throw this.raise(p.ImportBindingIsString, {
									at: e,
									importName: o.value
								});
							(e.imported = o), (e.importKind = null);
						}
						this.eatContextual(93)
							? (e.local = this.parseIdentifier())
							: ((l = !0), (e.local = K(e.imported)));
					}
					let c = gs(e);
					return (
						i &&
							c &&
							this.raise(T.ImportTypeShorthandOnlyInPureImport, { at: e }),
						(i || c) &&
							this.checkReservedType(e.local.name, e.local.loc.start, !0),
						l &&
							!i &&
							!c &&
							this.checkReservedWord(e.local.name, e.loc.start, !0, !0),
						this.finishImportSpecifier(e, 'ImportSpecifier')
					);
				}
				parseBindingAtom() {
					switch (this.state.type) {
						case 78:
							return this.parseIdentifier(!0);
						default:
							return super.parseBindingAtom();
					}
				}
				parseFunctionParams(e, s) {
					let i = e.kind;
					i !== 'get' &&
						i !== 'set' &&
						this.match(47) &&
						(e.typeParameters = this.flowParseTypeParameterDeclaration()),
						super.parseFunctionParams(e, s);
				}
				parseVarId(e, s) {
					super.parseVarId(e, s),
						this.match(14) &&
							((e.id.typeAnnotation = this.flowParseTypeAnnotation()),
							this.resetEndLocation(e.id));
				}
				parseAsyncArrowFromCallExpression(e, s) {
					if (this.match(14)) {
						let i = this.state.noAnonFunctionType;
						(this.state.noAnonFunctionType = !0),
							(e.returnType = this.flowParseTypeAnnotation()),
							(this.state.noAnonFunctionType = i);
					}
					return super.parseAsyncArrowFromCallExpression(e, s);
				}
				shouldParseAsyncArrow() {
					return this.match(14) || super.shouldParseAsyncArrow();
				}
				parseMaybeAssign(e, s) {
					var i;
					let r = null,
						n;
					if (this.hasPlugin('jsx') && (this.match(140) || this.match(47))) {
						if (
							((r = this.state.clone()),
							(n = this.tryParse(() => super.parseMaybeAssign(e, s), r)),
							!n.error)
						)
							return n.node;
						let { context: l } = this.state,
							c = l[l.length - 1];
						(c === E.j_oTag || c === E.j_expr) && l.pop();
					}
					if (((i = n) != null && i.error) || this.match(47)) {
						var o, h;
						r = r || this.state.clone();
						let l,
							c = this.tryParse((d) => {
								var f;
								l = this.flowParseTypeParameterDeclaration();
								let x = this.forwardNoArrowParamsConversionAt(l, () => {
									let C = super.parseMaybeAssign(e, s);
									return this.resetStartLocationFromNode(C, l), C;
								});
								(f = x.extra) != null && f.parenthesized && d();
								let I = this.maybeUnwrapTypeCastExpression(x);
								return (
									I.type !== 'ArrowFunctionExpression' && d(),
									(I.typeParameters = l),
									this.resetStartLocationFromNode(I, l),
									x
								);
							}, r),
							u = null;
						if (
							c.node &&
							this.maybeUnwrapTypeCastExpression(c.node).type ===
								'ArrowFunctionExpression'
						) {
							if (!c.error && !c.aborted)
								return (
									c.node.async &&
										this.raise(
											T.UnexpectedTypeParameterBeforeAsyncArrowFunction,
											{ at: l }
										),
									c.node
								);
							u = c.node;
						}
						if ((o = n) != null && o.node)
							return (this.state = n.failState), n.node;
						if (u) return (this.state = c.failState), u;
						throw (h = n) != null && h.thrown
							? n.error
							: c.thrown
							? c.error
							: this.raise(T.UnexpectedTokenAfterTypeParameter, { at: l });
					}
					return super.parseMaybeAssign(e, s);
				}
				parseArrow(e) {
					if (this.match(14)) {
						let s = this.tryParse(() => {
							let i = this.state.noAnonFunctionType;
							this.state.noAnonFunctionType = !0;
							let r = this.startNode();
							return (
								([r.typeAnnotation, e.predicate] =
									this.flowParseTypeAndPredicateInitialiser()),
								(this.state.noAnonFunctionType = i),
								this.canInsertSemicolon() && this.unexpected(),
								this.match(19) || this.unexpected(),
								r
							);
						});
						if (s.thrown) return null;
						s.error && (this.state = s.failState),
							(e.returnType = s.node.typeAnnotation
								? this.finishNode(s.node, 'TypeAnnotation')
								: null);
					}
					return super.parseArrow(e);
				}
				shouldParseArrow(e) {
					return this.match(14) || super.shouldParseArrow(e);
				}
				setArrowFunctionParameters(e, s) {
					this.state.noArrowParamsConversionAt.indexOf(e.start) !== -1
						? (e.params = s)
						: super.setArrowFunctionParameters(e, s);
				}
				checkParams(e, s, i, r = !0) {
					if (
						!(i && this.state.noArrowParamsConversionAt.indexOf(e.start) !== -1)
					) {
						for (let n = 0; n < e.params.length; n++)
							this.isThisParam(e.params[n]) &&
								n > 0 &&
								this.raise(T.ThisParamMustBeFirst, { at: e.params[n] });
						super.checkParams(e, s, i, r);
					}
				}
				parseParenAndDistinguishExpression(e) {
					return super.parseParenAndDistinguishExpression(
						e && this.state.noArrowAt.indexOf(this.state.start) === -1
					);
				}
				parseSubscripts(e, s, i) {
					if (
						e.type === 'Identifier' &&
						e.name === 'async' &&
						this.state.noArrowAt.indexOf(s.index) !== -1
					) {
						this.next();
						let r = this.startNodeAt(s);
						(r.callee = e),
							(r.arguments = super.parseCallExpressionArguments(11, !1)),
							(e = this.finishNode(r, 'CallExpression'));
					} else if (
						e.type === 'Identifier' &&
						e.name === 'async' &&
						this.match(47)
					) {
						let r = this.state.clone(),
							n = this.tryParse(
								(h) => this.parseAsyncArrowWithTypeParameters(s) || h(),
								r
							);
						if (!n.error && !n.aborted) return n.node;
						let o = this.tryParse(() => super.parseSubscripts(e, s, i), r);
						if (o.node && !o.error) return o.node;
						if (n.node) return (this.state = n.failState), n.node;
						if (o.node) return (this.state = o.failState), o.node;
						throw n.error || o.error;
					}
					return super.parseSubscripts(e, s, i);
				}
				parseSubscript(e, s, i, r) {
					if (this.match(18) && this.isLookaheadToken_lt()) {
						if (((r.optionalChainMember = !0), i)) return (r.stop = !0), e;
						this.next();
						let n = this.startNodeAt(s);
						return (
							(n.callee = e),
							(n.typeArguments = this.flowParseTypeParameterInstantiation()),
							this.expect(10),
							(n.arguments = this.parseCallExpressionArguments(11, !1)),
							(n.optional = !0),
							this.finishCallExpression(n, !0)
						);
					} else if (!i && this.shouldParseTypes() && this.match(47)) {
						let n = this.startNodeAt(s);
						n.callee = e;
						let o = this.tryParse(
							() => (
								(n.typeArguments =
									this.flowParseTypeParameterInstantiationCallOrNew()),
								this.expect(10),
								(n.arguments = super.parseCallExpressionArguments(11, !1)),
								r.optionalChainMember && (n.optional = !1),
								this.finishCallExpression(n, r.optionalChainMember)
							)
						);
						if (o.node) return o.error && (this.state = o.failState), o.node;
					}
					return super.parseSubscript(e, s, i, r);
				}
				parseNewCallee(e) {
					super.parseNewCallee(e);
					let s = null;
					this.shouldParseTypes() &&
						this.match(47) &&
						(s = this.tryParse(() =>
							this.flowParseTypeParameterInstantiationCallOrNew()
						).node),
						(e.typeArguments = s);
				}
				parseAsyncArrowWithTypeParameters(e) {
					let s = this.startNodeAt(e);
					if ((this.parseFunctionParams(s, !1), !!this.parseArrow(s)))
						return super.parseArrowExpression(s, void 0, !0);
				}
				readToken_mult_modulo(e) {
					let s = this.input.charCodeAt(this.state.pos + 1);
					if (e === 42 && s === 47 && this.state.hasFlowComment) {
						(this.state.hasFlowComment = !1),
							(this.state.pos += 2),
							this.nextToken();
						return;
					}
					super.readToken_mult_modulo(e);
				}
				readToken_pipe_amp(e) {
					let s = this.input.charCodeAt(this.state.pos + 1);
					if (e === 124 && s === 125) {
						this.finishOp(9, 2);
						return;
					}
					super.readToken_pipe_amp(e);
				}
				parseTopLevel(e, s) {
					let i = super.parseTopLevel(e, s);
					return (
						this.state.hasFlowComment &&
							this.raise(T.UnterminatedFlowComment, {
								at: this.state.curPosition()
							}),
						i
					);
				}
				skipBlockComment() {
					if (this.hasPlugin('flowComments') && this.skipFlowComment()) {
						if (this.state.hasFlowComment)
							throw this.raise(T.NestedFlowComment, {
								at: this.state.startLoc
							});
						this.hasFlowCommentCompletion();
						let e = this.skipFlowComment();
						e && ((this.state.pos += e), (this.state.hasFlowComment = !0));
						return;
					}
					return super.skipBlockComment(
						this.state.hasFlowComment ? '*-/' : '*/'
					);
				}
				skipFlowComment() {
					let { pos: e } = this.state,
						s = 2;
					for (; [32, 9].includes(this.input.charCodeAt(e + s)); ) s++;
					let i = this.input.charCodeAt(s + e),
						r = this.input.charCodeAt(s + e + 1);
					return i === 58 && r === 58
						? s + 2
						: this.input.slice(s + e, s + e + 12) === 'flow-include'
						? s + 12
						: i === 58 && r !== 58
						? s
						: !1;
				}
				hasFlowCommentCompletion() {
					if (this.input.indexOf('*/', this.state.pos) === -1)
						throw this.raise(p.UnterminatedComment, {
							at: this.state.curPosition()
						});
				}
				flowEnumErrorBooleanMemberNotInitialized(
					e,
					{ enumName: s, memberName: i }
				) {
					this.raise(T.EnumBooleanMemberNotInitialized, {
						at: e,
						memberName: i,
						enumName: s
					});
				}
				flowEnumErrorInvalidMemberInitializer(e, s) {
					return this.raise(
						s.explicitType
							? s.explicitType === 'symbol'
								? T.EnumInvalidMemberInitializerSymbolType
								: T.EnumInvalidMemberInitializerPrimaryType
							: T.EnumInvalidMemberInitializerUnknownType,
						Object.assign({ at: e }, s)
					);
				}
				flowEnumErrorNumberMemberNotInitialized(
					e,
					{ enumName: s, memberName: i }
				) {
					this.raise(T.EnumNumberMemberNotInitialized, {
						at: e,
						enumName: s,
						memberName: i
					});
				}
				flowEnumErrorStringMemberInconsistentlyInitailized(e, { enumName: s }) {
					this.raise(T.EnumStringMemberInconsistentlyInitailized, {
						at: e,
						enumName: s
					});
				}
				flowEnumMemberInit() {
					let e = this.state.startLoc,
						s = () => this.match(12) || this.match(8);
					switch (this.state.type) {
						case 132: {
							let i = this.parseNumericLiteral(this.state.value);
							return s()
								? { type: 'number', loc: i.loc.start, value: i }
								: { type: 'invalid', loc: e };
						}
						case 131: {
							let i = this.parseStringLiteral(this.state.value);
							return s()
								? { type: 'string', loc: i.loc.start, value: i }
								: { type: 'invalid', loc: e };
						}
						case 85:
						case 86: {
							let i = this.parseBooleanLiteral(this.match(85));
							return s()
								? { type: 'boolean', loc: i.loc.start, value: i }
								: { type: 'invalid', loc: e };
						}
						default:
							return { type: 'invalid', loc: e };
					}
				}
				flowEnumMemberRaw() {
					let e = this.state.startLoc,
						s = this.parseIdentifier(!0),
						i = this.eat(29)
							? this.flowEnumMemberInit()
							: { type: 'none', loc: e };
					return { id: s, init: i };
				}
				flowEnumCheckExplicitTypeMismatch(e, s, i) {
					let { explicitType: r } = s;
					r !== null &&
						r !== i &&
						this.flowEnumErrorInvalidMemberInitializer(e, s);
				}
				flowEnumMembers({ enumName: e, explicitType: s }) {
					let i = new Set(),
						r = {
							booleanMembers: [],
							numberMembers: [],
							stringMembers: [],
							defaultedMembers: []
						},
						n = !1;
					for (; !this.match(8); ) {
						if (this.eat(21)) {
							n = !0;
							break;
						}
						let o = this.startNode(),
							{ id: h, init: l } = this.flowEnumMemberRaw(),
							c = h.name;
						if (c === '') continue;
						/^[a-z]/.test(c) &&
							this.raise(T.EnumInvalidMemberName, {
								at: h,
								memberName: c,
								suggestion: c[0].toUpperCase() + c.slice(1),
								enumName: e
							}),
							i.has(c) &&
								this.raise(T.EnumDuplicateMemberName, {
									at: h,
									memberName: c,
									enumName: e
								}),
							i.add(c);
						let u = { enumName: e, explicitType: s, memberName: c };
						switch (((o.id = h), l.type)) {
							case 'boolean': {
								this.flowEnumCheckExplicitTypeMismatch(l.loc, u, 'boolean'),
									(o.init = l.value),
									r.booleanMembers.push(
										this.finishNode(o, 'EnumBooleanMember')
									);
								break;
							}
							case 'number': {
								this.flowEnumCheckExplicitTypeMismatch(l.loc, u, 'number'),
									(o.init = l.value),
									r.numberMembers.push(this.finishNode(o, 'EnumNumberMember'));
								break;
							}
							case 'string': {
								this.flowEnumCheckExplicitTypeMismatch(l.loc, u, 'string'),
									(o.init = l.value),
									r.stringMembers.push(this.finishNode(o, 'EnumStringMember'));
								break;
							}
							case 'invalid':
								throw this.flowEnumErrorInvalidMemberInitializer(l.loc, u);
							case 'none':
								switch (s) {
									case 'boolean':
										this.flowEnumErrorBooleanMemberNotInitialized(l.loc, u);
										break;
									case 'number':
										this.flowEnumErrorNumberMemberNotInitialized(l.loc, u);
										break;
									default:
										r.defaultedMembers.push(
											this.finishNode(o, 'EnumDefaultedMember')
										);
								}
						}
						this.match(8) || this.expect(12);
					}
					return { members: r, hasUnknownMembers: n };
				}
				flowEnumStringMembers(e, s, { enumName: i }) {
					if (e.length === 0) return s;
					if (s.length === 0) return e;
					if (s.length > e.length) {
						for (let r of e)
							this.flowEnumErrorStringMemberInconsistentlyInitailized(r, {
								enumName: i
							});
						return s;
					} else {
						for (let r of s)
							this.flowEnumErrorStringMemberInconsistentlyInitailized(r, {
								enumName: i
							});
						return e;
					}
				}
				flowEnumParseExplicitType({ enumName: e }) {
					if (!this.eatContextual(101)) return null;
					if (!S(this.state.type))
						throw this.raise(T.EnumInvalidExplicitTypeUnknownSupplied, {
							at: this.state.startLoc,
							enumName: e
						});
					let { value: s } = this.state;
					return (
						this.next(),
						s !== 'boolean' &&
							s !== 'number' &&
							s !== 'string' &&
							s !== 'symbol' &&
							this.raise(T.EnumInvalidExplicitType, {
								at: this.state.startLoc,
								enumName: e,
								invalidEnumType: s
							}),
						s
					);
				}
				flowEnumBody(e, s) {
					let i = s.name,
						r = s.loc.start,
						n = this.flowEnumParseExplicitType({ enumName: i });
					this.expect(5);
					let { members: o, hasUnknownMembers: h } = this.flowEnumMembers({
						enumName: i,
						explicitType: n
					});
					switch (((e.hasUnknownMembers = h), n)) {
						case 'boolean':
							return (
								(e.explicitType = !0),
								(e.members = o.booleanMembers),
								this.expect(8),
								this.finishNode(e, 'EnumBooleanBody')
							);
						case 'number':
							return (
								(e.explicitType = !0),
								(e.members = o.numberMembers),
								this.expect(8),
								this.finishNode(e, 'EnumNumberBody')
							);
						case 'string':
							return (
								(e.explicitType = !0),
								(e.members = this.flowEnumStringMembers(
									o.stringMembers,
									o.defaultedMembers,
									{ enumName: i }
								)),
								this.expect(8),
								this.finishNode(e, 'EnumStringBody')
							);
						case 'symbol':
							return (
								(e.members = o.defaultedMembers),
								this.expect(8),
								this.finishNode(e, 'EnumSymbolBody')
							);
						default: {
							let l = () => (
								(e.members = []),
								this.expect(8),
								this.finishNode(e, 'EnumStringBody')
							);
							e.explicitType = !1;
							let c = o.booleanMembers.length,
								u = o.numberMembers.length,
								d = o.stringMembers.length,
								f = o.defaultedMembers.length;
							if (!c && !u && !d && !f) return l();
							if (!c && !u)
								return (
									(e.members = this.flowEnumStringMembers(
										o.stringMembers,
										o.defaultedMembers,
										{ enumName: i }
									)),
									this.expect(8),
									this.finishNode(e, 'EnumStringBody')
								);
							if (!u && !d && c >= f) {
								for (let x of o.defaultedMembers)
									this.flowEnumErrorBooleanMemberNotInitialized(x.loc.start, {
										enumName: i,
										memberName: x.id.name
									});
								return (
									(e.members = o.booleanMembers),
									this.expect(8),
									this.finishNode(e, 'EnumBooleanBody')
								);
							} else if (!c && !d && u >= f) {
								for (let x of o.defaultedMembers)
									this.flowEnumErrorNumberMemberNotInitialized(x.loc.start, {
										enumName: i,
										memberName: x.id.name
									});
								return (
									(e.members = o.numberMembers),
									this.expect(8),
									this.finishNode(e, 'EnumNumberBody')
								);
							} else
								return (
									this.raise(T.EnumInconsistentMemberValues, {
										at: r,
										enumName: i
									}),
									l()
								);
						}
					}
				}
				flowParseEnumDeclaration(e) {
					let s = this.parseIdentifier();
					return (
						(e.id = s),
						(e.body = this.flowEnumBody(this.startNode(), s)),
						this.finishNode(e, 'EnumDeclaration')
					);
				}
				isLookaheadToken_lt() {
					let e = this.nextTokenStart();
					if (this.input.charCodeAt(e) === 60) {
						let s = this.input.charCodeAt(e + 1);
						return s !== 60 && s !== 61;
					}
					return !1;
				}
				maybeUnwrapTypeCastExpression(e) {
					return e.type === 'TypeCastExpression' ? e.expression : e;
				}
			},
		Y = V`jsx`({
			AttributeIsEmpty:
				'JSX attributes must only be assigned a non-empty expression.',
			MissingClosingTagElement: ({ openingTagName: a }) =>
				`Expected corresponding JSX closing tag for <${a}>.`,
			MissingClosingTagFragment:
				'Expected corresponding JSX closing tag for <>.',
			UnexpectedSequenceExpression:
				'Sequence expressions cannot be directly nested inside JSX. Did you mean to wrap it in parentheses (...)?',
			UnexpectedToken: ({ unexpected: a, HTMLEntity: t }) =>
				`Unexpected token \`${a}\`. Did you mean \`${t}\` or \`{'${a}'}\`?`,
			UnsupportedJsxValue:
				'JSX value should be either an expression or a quoted JSX text.',
			UnterminatedJsxContent: 'Unterminated JSX contents.',
			UnwrappedAdjacentJSXElements:
				'Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?'
		});
	function H(a) {
		return a
			? a.type === 'JSXOpeningFragment' || a.type === 'JSXClosingFragment'
			: !1;
	}
	function oe(a) {
		if (a.type === 'JSXIdentifier') return a.name;
		if (a.type === 'JSXNamespacedName')
			return a.namespace.name + ':' + a.name.name;
		if (a.type === 'JSXMemberExpression')
			return oe(a.object) + '.' + oe(a.property);
		throw new Error('Node had unexpected type: ' + a.type);
	}
	var sa = (a) =>
			class extends a {
				jsxReadToken() {
					let e = '',
						s = this.state.pos;
					for (;;) {
						if (this.state.pos >= this.length)
							throw this.raise(Y.UnterminatedJsxContent, {
								at: this.state.startLoc
							});
						let i = this.input.charCodeAt(this.state.pos);
						switch (i) {
							case 60:
							case 123:
								if (this.state.pos === this.state.start) {
									i === 60 && this.state.canStartJSXElement
										? (++this.state.pos, this.finishToken(140))
										: super.getTokenFromCode(i);
									return;
								}
								(e += this.input.slice(s, this.state.pos)),
									this.finishToken(139, e);
								return;
							case 38:
								(e += this.input.slice(s, this.state.pos)),
									(e += this.jsxReadEntity()),
									(s = this.state.pos);
								break;
							case 62:
							case 125:
							default:
								ke(i)
									? ((e += this.input.slice(s, this.state.pos)),
									  (e += this.jsxReadNewLine(!0)),
									  (s = this.state.pos))
									: ++this.state.pos;
						}
					}
				}
				jsxReadNewLine(e) {
					let s = this.input.charCodeAt(this.state.pos),
						i;
					return (
						++this.state.pos,
						s === 13 && this.input.charCodeAt(this.state.pos) === 10
							? (++this.state.pos,
							  (i = e
									? `
`
									: `\r
`))
							: (i = String.fromCharCode(s)),
						++this.state.curLine,
						(this.state.lineStart = this.state.pos),
						i
					);
				}
				jsxReadString(e) {
					let s = '',
						i = ++this.state.pos;
					for (;;) {
						if (this.state.pos >= this.length)
							throw this.raise(p.UnterminatedString, {
								at: this.state.startLoc
							});
						let r = this.input.charCodeAt(this.state.pos);
						if (r === e) break;
						r === 38
							? ((s += this.input.slice(i, this.state.pos)),
							  (s += this.jsxReadEntity()),
							  (i = this.state.pos))
							: ke(r)
							? ((s += this.input.slice(i, this.state.pos)),
							  (s += this.jsxReadNewLine(!1)),
							  (i = this.state.pos))
							: ++this.state.pos;
					}
					(s += this.input.slice(i, this.state.pos++)),
						this.finishToken(131, s);
				}
				jsxReadEntity() {
					let e = ++this.state.pos;
					if (this.codePointAtPos(this.state.pos) === 35) {
						++this.state.pos;
						let s = 10;
						this.codePointAtPos(this.state.pos) === 120 &&
							((s = 16), ++this.state.pos);
						let i = this.readInt(s, void 0, !1, 'bail');
						if (i !== null && this.codePointAtPos(this.state.pos) === 59)
							return ++this.state.pos, String.fromCodePoint(i);
					} else {
						let s = 0,
							i = !1;
						for (
							;
							s++ < 10 &&
							this.state.pos < this.length &&
							!(i = this.codePointAtPos(this.state.pos) == 59);

						)
							++this.state.pos;
						if (i) {
							let r = this.input.slice(e, this.state.pos),
								n = void 0;
							if ((++this.state.pos, n));
						}
					}
					return (this.state.pos = e), '&';
				}
				jsxReadWord() {
					let e,
						s = this.state.pos;
					do e = this.input.charCodeAt(++this.state.pos);
					while (he(e) || e === 45);
					this.finishToken(138, this.input.slice(s, this.state.pos));
				}
				jsxParseIdentifier() {
					let e = this.startNode();
					return (
						this.match(138)
							? (e.name = this.state.value)
							: Xt(this.state.type)
							? (e.name = J(this.state.type))
							: this.unexpected(),
						this.next(),
						this.finishNode(e, 'JSXIdentifier')
					);
				}
				jsxParseNamespacedName() {
					let e = this.state.startLoc,
						s = this.jsxParseIdentifier();
					if (!this.eat(14)) return s;
					let i = this.startNodeAt(e);
					return (
						(i.namespace = s),
						(i.name = this.jsxParseIdentifier()),
						this.finishNode(i, 'JSXNamespacedName')
					);
				}
				jsxParseElementName() {
					let e = this.state.startLoc,
						s = this.jsxParseNamespacedName();
					if (s.type === 'JSXNamespacedName') return s;
					for (; this.eat(16); ) {
						let i = this.startNodeAt(e);
						(i.object = s),
							(i.property = this.jsxParseIdentifier()),
							(s = this.finishNode(i, 'JSXMemberExpression'));
					}
					return s;
				}
				jsxParseAttributeValue() {
					let e;
					switch (this.state.type) {
						case 5:
							return (
								(e = this.startNode()),
								this.setContext(E.brace),
								this.next(),
								(e = this.jsxParseExpressionContainer(e, E.j_oTag)),
								e.expression.type === 'JSXEmptyExpression' &&
									this.raise(Y.AttributeIsEmpty, { at: e }),
								e
							);
						case 140:
						case 131:
							return this.parseExprAtom();
						default:
							throw this.raise(Y.UnsupportedJsxValue, {
								at: this.state.startLoc
							});
					}
				}
				jsxParseEmptyExpression() {
					let e = this.startNodeAt(this.state.lastTokEndLoc);
					return this.finishNodeAt(
						e,
						'JSXEmptyExpression',
						this.state.startLoc
					);
				}
				jsxParseSpreadChild(e) {
					return (
						this.next(),
						(e.expression = this.parseExpression()),
						this.setContext(E.j_expr),
						(this.state.canStartJSXElement = !0),
						this.expect(8),
						this.finishNode(e, 'JSXSpreadChild')
					);
				}
				jsxParseExpressionContainer(e, s) {
					if (this.match(8)) e.expression = this.jsxParseEmptyExpression();
					else {
						let i = this.parseExpression();
						e.expression = i;
					}
					return (
						this.setContext(s),
						(this.state.canStartJSXElement = !0),
						this.expect(8),
						this.finishNode(e, 'JSXExpressionContainer')
					);
				}
				jsxParseAttribute() {
					let e = this.startNode();
					return this.match(5)
						? (this.setContext(E.brace),
						  this.next(),
						  this.expect(21),
						  (e.argument = this.parseMaybeAssignAllowIn()),
						  this.setContext(E.j_oTag),
						  (this.state.canStartJSXElement = !0),
						  this.expect(8),
						  this.finishNode(e, 'JSXSpreadAttribute'))
						: ((e.name = this.jsxParseNamespacedName()),
						  (e.value = this.eat(29) ? this.jsxParseAttributeValue() : null),
						  this.finishNode(e, 'JSXAttribute'));
				}
				jsxParseOpeningElementAt(e) {
					let s = this.startNodeAt(e);
					return this.eat(141)
						? this.finishNode(s, 'JSXOpeningFragment')
						: ((s.name = this.jsxParseElementName()),
						  this.jsxParseOpeningElementAfterName(s));
				}
				jsxParseOpeningElementAfterName(e) {
					let s = [];
					for (; !this.match(56) && !this.match(141); )
						s.push(this.jsxParseAttribute());
					return (
						(e.attributes = s),
						(e.selfClosing = this.eat(56)),
						this.expect(141),
						this.finishNode(e, 'JSXOpeningElement')
					);
				}
				jsxParseClosingElementAt(e) {
					let s = this.startNodeAt(e);
					return this.eat(141)
						? this.finishNode(s, 'JSXClosingFragment')
						: ((s.name = this.jsxParseElementName()),
						  this.expect(141),
						  this.finishNode(s, 'JSXClosingElement'));
				}
				jsxParseElementAt(e) {
					let s = this.startNodeAt(e),
						i = [],
						r = this.jsxParseOpeningElementAt(e),
						n = null;
					if (!r.selfClosing) {
						e: for (;;)
							switch (this.state.type) {
								case 140:
									if (((e = this.state.startLoc), this.next(), this.eat(56))) {
										n = this.jsxParseClosingElementAt(e);
										break e;
									}
									i.push(this.jsxParseElementAt(e));
									break;
								case 139:
									i.push(this.parseExprAtom());
									break;
								case 5: {
									let o = this.startNode();
									this.setContext(E.brace),
										this.next(),
										this.match(21)
											? i.push(this.jsxParseSpreadChild(o))
											: i.push(this.jsxParseExpressionContainer(o, E.j_expr));
									break;
								}
								default:
									this.unexpected();
							}
						H(r) && !H(n) && n !== null
							? this.raise(Y.MissingClosingTagFragment, { at: n })
							: !H(r) && H(n)
							? this.raise(Y.MissingClosingTagElement, {
									at: n,
									openingTagName: oe(r.name)
							  })
							: !H(r) &&
							  !H(n) &&
							  oe(n.name) !== oe(r.name) &&
							  this.raise(Y.MissingClosingTagElement, {
									at: n,
									openingTagName: oe(r.name)
							  });
					}
					if (
						(H(r)
							? ((s.openingFragment = r), (s.closingFragment = n))
							: ((s.openingElement = r), (s.closingElement = n)),
						(s.children = i),
						this.match(47))
					)
						throw this.raise(Y.UnwrappedAdjacentJSXElements, {
							at: this.state.startLoc
						});
					return H(r)
						? this.finishNode(s, 'JSXFragment')
						: this.finishNode(s, 'JSXElement');
				}
				jsxParseElement() {
					let e = this.state.startLoc;
					return this.next(), this.jsxParseElementAt(e);
				}
				setContext(e) {
					let { context: s } = this.state;
					s[s.length - 1] = e;
				}
				parseExprAtom(e) {
					return this.match(139)
						? this.parseLiteral(this.state.value, 'JSXText')
						: this.match(140)
						? this.jsxParseElement()
						: this.match(47) && this.input.charCodeAt(this.state.pos) !== 33
						? (this.replaceToken(140), this.jsxParseElement())
						: super.parseExprAtom(e);
				}
				skipSpace() {
					this.curContext().preserveSpace || super.skipSpace();
				}
				getTokenFromCode(e) {
					let s = this.curContext();
					if (s === E.j_expr) {
						this.jsxReadToken();
						return;
					}
					if (s === E.j_oTag || s === E.j_cTag) {
						if ($(e)) {
							this.jsxReadWord();
							return;
						}
						if (e === 62) {
							++this.state.pos, this.finishToken(141);
							return;
						}
						if ((e === 34 || e === 39) && s === E.j_oTag) {
							this.jsxReadString(e);
							return;
						}
					}
					if (
						e === 60 &&
						this.state.canStartJSXElement &&
						this.input.charCodeAt(this.state.pos + 1) !== 33
					) {
						++this.state.pos, this.finishToken(140);
						return;
					}
					super.getTokenFromCode(e);
				}
				updateContext(e) {
					let { context: s, type: i } = this.state;
					if (i === 56 && e === 140)
						s.splice(-2, 2, E.j_cTag), (this.state.canStartJSXElement = !1);
					else if (i === 140) s.push(E.j_oTag);
					else if (i === 141) {
						let r = s[s.length - 1];
						(r === E.j_oTag && e === 56) || r === E.j_cTag
							? (s.pop(),
							  (this.state.canStartJSXElement = s[s.length - 1] === E.j_expr))
							: (this.setContext(E.j_expr),
							  (this.state.canStartJSXElement = !0));
					} else this.state.canStartJSXElement = nr(i);
				}
			},
		Rt = class extends ve {
			constructor(...t) {
				super(...t),
					(this.types = new Set()),
					(this.enums = new Set()),
					(this.constEnums = new Set()),
					(this.classes = new Set()),
					(this.exportOnlyBindings = new Set());
			}
		},
		Ut = class extends Le {
			constructor(...t) {
				super(...t), (this.importsStack = []);
			}
			createScope(t) {
				return this.importsStack.push(new Set()), new Rt(t);
			}
			enter(t) {
				t == le && this.importsStack.push(new Set()), super.enter(t);
			}
			exit() {
				let t = super.exit();
				return t == le && this.importsStack.pop(), t;
			}
			hasImport(t, e) {
				let s = this.importsStack.length;
				if (this.importsStack[s - 1].has(t)) return !0;
				if (!e && s > 1) {
					for (let i = 0; i < s - 1; i++)
						if (this.importsStack[i].has(t)) return !0;
				}
				return !1;
			}
			declareName(t, e, s) {
				if (e & Ne) {
					this.hasImport(t, !0) &&
						this.parser.raise(p.VarRedeclaration, { at: s, identifierName: t }),
						this.importsStack[this.importsStack.length - 1].add(t);
					return;
				}
				let i = this.currentScope();
				if (e & Zt) {
					this.maybeExportDefined(i, t), i.exportOnlyBindings.add(t);
					return;
				}
				super.declareName(t, e, s),
					e & se &&
						(e & F ||
							(this.checkRedeclarationInScope(i, t, e, s),
							this.maybeExportDefined(i, t)),
						i.types.add(t)),
					e & At && i.enums.add(t),
					e & St && i.constEnums.add(t),
					e & Ye && i.classes.add(t);
			}
			isRedeclaredInScope(t, e, s) {
				if (t.enums.has(e)) {
					if (s & At) {
						let i = !!(s & St),
							r = t.constEnums.has(e);
						return i !== r;
					}
					return !0;
				}
				return s & Ye && t.classes.has(e)
					? t.lexical.has(e)
						? !!(s & F)
						: !1
					: s & se && t.types.has(e)
					? !0
					: super.isRedeclaredInScope(t, e, s);
			}
			checkLocalExport(t) {
				let { name: e } = t;
				if (this.hasImport(e)) return;
				let s = this.scopeStack.length;
				for (let i = s - 1; i >= 0; i--) {
					let r = this.scopeStack[i];
					if (r.types.has(e) || r.exportOnlyBindings.has(e)) return;
				}
				super.checkLocalExport(t);
			}
		},
		ia = (a, t) => Object.hasOwnProperty.call(a, t) && a[t],
		Qs = (a) => (a.type === 'ParenthesizedExpression' ? Qs(a.expression) : a),
		jt = class extends _t {
			toAssignable(t, e = !1) {
				var s, i;
				let r;
				switch (
					((t.type === 'ParenthesizedExpression' ||
						((s = t.extra) != null && s.parenthesized)) &&
						((r = Qs(t)),
						e
							? r.type === 'Identifier'
								? this.expressionScope.recordArrowParameterBindingError(
										p.InvalidParenthesizedAssignment,
										{ at: t }
								  )
								: r.type !== 'MemberExpression' &&
								  this.raise(p.InvalidParenthesizedAssignment, { at: t })
							: this.raise(p.InvalidParenthesizedAssignment, { at: t })),
					t.type)
				) {
					case 'Identifier':
					case 'ObjectPattern':
					case 'ArrayPattern':
					case 'AssignmentPattern':
					case 'RestElement':
						break;
					case 'ObjectExpression':
						t.type = 'ObjectPattern';
						for (let o = 0, h = t.properties.length, l = h - 1; o < h; o++) {
							var n;
							let c = t.properties[o],
								u = o === l;
							this.toAssignableObjectExpressionProp(c, u, e),
								u &&
									c.type === 'RestElement' &&
									(n = t.extra) != null &&
									n.trailingCommaLoc &&
									this.raise(p.RestTrailingComma, {
										at: t.extra.trailingCommaLoc
									});
						}
						break;
					case 'ObjectProperty': {
						let { key: o, value: h } = t;
						this.isPrivateName(o) &&
							this.classScope.usePrivateName(
								this.getPrivateNameSV(o),
								o.loc.start
							),
							this.toAssignable(h, e);
						break;
					}
					case 'SpreadElement':
						throw new Error(
							"Internal @babel/parser error (this is a bug, please report it). SpreadElement should be converted by .toAssignable's caller."
						);
					case 'ArrayExpression':
						(t.type = 'ArrayPattern'),
							this.toAssignableList(
								t.elements,
								(i = t.extra) == null ? void 0 : i.trailingCommaLoc,
								e
							);
						break;
					case 'AssignmentExpression':
						t.operator !== '=' &&
							this.raise(p.MissingEqInAssignment, { at: t.left.loc.end }),
							(t.type = 'AssignmentPattern'),
							delete t.operator,
							this.toAssignable(t.left, e);
						break;
					case 'ParenthesizedExpression':
						this.toAssignable(r, e);
						break;
				}
			}
			toAssignableObjectExpressionProp(t, e, s) {
				if (t.type === 'ObjectMethod')
					this.raise(
						t.kind === 'get' || t.kind === 'set'
							? p.PatternHasAccessor
							: p.PatternHasMethod,
						{ at: t.key }
					);
				else if (t.type === 'SpreadElement') {
					t.type = 'RestElement';
					let i = t.argument;
					this.checkToRestConversion(i, !1),
						this.toAssignable(i, s),
						e || this.raise(p.RestTrailingComma, { at: t });
				} else this.toAssignable(t, s);
			}
			toAssignableList(t, e, s) {
				let i = t.length - 1;
				for (let r = 0; r <= i; r++) {
					let n = t[r];
					if (n) {
						if (n.type === 'SpreadElement') {
							n.type = 'RestElement';
							let o = n.argument;
							this.checkToRestConversion(o, !0), this.toAssignable(o, s);
						} else this.toAssignable(n, s);
						n.type === 'RestElement' &&
							(r < i
								? this.raise(p.RestTrailingComma, { at: n })
								: e && this.raise(p.RestTrailingComma, { at: e }));
					}
				}
			}
			isAssignable(t, e) {
				switch (t.type) {
					case 'Identifier':
					case 'ObjectPattern':
					case 'ArrayPattern':
					case 'AssignmentPattern':
					case 'RestElement':
						return !0;
					case 'ObjectExpression': {
						let s = t.properties.length - 1;
						return t.properties.every(
							(i, r) =>
								i.type !== 'ObjectMethod' &&
								(r === s || i.type !== 'SpreadElement') &&
								this.isAssignable(i)
						);
					}
					case 'ObjectProperty':
						return this.isAssignable(t.value);
					case 'SpreadElement':
						return this.isAssignable(t.argument);
					case 'ArrayExpression':
						return t.elements.every((s) => s === null || this.isAssignable(s));
					case 'AssignmentExpression':
						return t.operator === '=';
					case 'ParenthesizedExpression':
						return this.isAssignable(t.expression);
					case 'MemberExpression':
					case 'OptionalMemberExpression':
						return !e;
					default:
						return !1;
				}
			}
			toReferencedList(t, e) {
				return t;
			}
			toReferencedListDeep(t, e) {
				this.toReferencedList(t, e);
				for (let s of t)
					(s == null ? void 0 : s.type) === 'ArrayExpression' &&
						this.toReferencedListDeep(s.elements);
			}
			parseSpread(t) {
				let e = this.startNode();
				return (
					this.next(),
					(e.argument = this.parseMaybeAssignAllowIn(t, void 0)),
					this.finishNode(e, 'SpreadElement')
				);
			}
			parseRestBinding() {
				let t = this.startNode();
				return (
					this.next(),
					(t.argument = this.parseBindingAtom()),
					this.finishNode(t, 'RestElement')
				);
			}
			parseBindingAtom() {
				switch (this.state.type) {
					case 0: {
						let t = this.startNode();
						return (
							this.next(),
							(t.elements = this.parseBindingList(3, 93, 1)),
							this.finishNode(t, 'ArrayPattern')
						);
					}
					case 5:
						return this.parseObjectLike(8, !0);
				}
				return this.parseIdentifier();
			}
			parseBindingList(t, e, s) {
				let i = s & 1,
					r = [],
					n = !0;
				for (; !this.eat(t); )
					if ((n ? (n = !1) : this.expect(12), i && this.match(12)))
						r.push(null);
					else {
						if (this.eat(t)) break;
						if (this.match(21)) {
							if (
								(r.push(
									this.parseAssignableListItemTypes(this.parseRestBinding(), s)
								),
								!this.checkCommaAfterRest(e))
							) {
								this.expect(t);
								break;
							}
						} else {
							let o = [];
							for (
								this.match(26) &&
								this.hasPlugin('decorators') &&
								this.raise(p.UnsupportedParameterDecorator, {
									at: this.state.startLoc
								});
								this.match(26);

							)
								o.push(this.parseDecorator());
							r.push(this.parseAssignableListItem(s, o));
						}
					}
				return r;
			}
			parseBindingRestProperty(t) {
				return (
					this.next(),
					(t.argument = this.parseIdentifier()),
					this.checkCommaAfterRest(125),
					this.finishNode(t, 'RestElement')
				);
			}
			parseBindingProperty() {
				let t = this.startNode(),
					{ type: e, startLoc: s } = this.state;
				return e === 21
					? this.parseBindingRestProperty(t)
					: (e === 136
							? (this.expectPlugin('destructuringPrivate', s),
							  this.classScope.usePrivateName(this.state.value, s),
							  (t.key = this.parsePrivateName()))
							: this.parsePropertyName(t),
					  (t.method = !1),
					  this.parseObjPropValue(t, s, !1, !1, !0, !1));
			}
			parseAssignableListItem(t, e) {
				let s = this.parseMaybeDefault();
				this.parseAssignableListItemTypes(s, t);
				let i = this.parseMaybeDefault(s.loc.start, s);
				return e.length && (s.decorators = e), i;
			}
			parseAssignableListItemTypes(t, e) {
				return t;
			}
			parseMaybeDefault(t, e) {
				var i;
				if (
					(t != null || (t = this.state.startLoc),
					(e = (i = e) != null ? i : this.parseBindingAtom()),
					!this.eat(29))
				)
					return e;
				let r = this.startNodeAt(t);
				return (
					(r.left = e),
					(r.right = this.parseMaybeAssignAllowIn()),
					this.finishNode(r, 'AssignmentPattern')
				);
			}
			isValidLVal(t, e, s) {
				return ia(
					{
						AssignmentPattern: 'left',
						RestElement: 'argument',
						ObjectProperty: 'value',
						ParenthesizedExpression: 'expression',
						ArrayPattern: 'elements',
						ObjectPattern: 'properties'
					},
					t
				);
			}
			checkLVal(
				t,
				{
					in: e,
					binding: s = W,
					checkClashes: i = !1,
					strictModeChanged: r = !1,
					hasParenthesizedAncestor: n = !1
				}
			) {
				var o;
				let h = t.type;
				if (this.isObjectMethod(t)) return;
				if (h === 'MemberExpression') {
					s !== W && this.raise(p.InvalidPropertyBindingPattern, { at: t });
					return;
				}
				if (h === 'Identifier') {
					this.checkIdentifier(t, s, r);
					let { name: f } = t;
					i && (i.has(f) ? this.raise(p.ParamDupe, { at: t }) : i.add(f));
					return;
				}
				let l = this.isValidLVal(
					h,
					!(n || ((o = t.extra) != null && o.parenthesized)) &&
						e.type === 'AssignmentExpression',
					s
				);
				if (l === !0) return;
				if (l === !1) {
					let f = s === W ? p.InvalidLhs : p.InvalidLhsBinding;
					this.raise(f, { at: t, ancestor: e });
					return;
				}
				let [c, u] = Array.isArray(l)
						? l
						: [l, h === 'ParenthesizedExpression'],
					d =
						h === 'ArrayPattern' ||
						h === 'ObjectPattern' ||
						h === 'ParenthesizedExpression'
							? { type: h }
							: e;
				for (let f of [].concat(t[c]))
					f &&
						this.checkLVal(f, {
							in: d,
							binding: s,
							checkClashes: i,
							strictModeChanged: r,
							hasParenthesizedAncestor: u
						});
			}
			checkIdentifier(t, e, s = !1) {
				this.state.strict &&
					(s ? Bs(t.name, this.inModule) : Os(t.name)) &&
					(e === W
						? this.raise(p.StrictEvalArguments, {
								at: t,
								referenceName: t.name
						  })
						: this.raise(p.StrictEvalArgumentsBinding, {
								at: t,
								bindingName: t.name
						  })),
					e & st &&
						t.name === 'let' &&
						this.raise(p.LetInLexicalBinding, { at: t }),
					e & W || this.declareNameFromIdentifier(t, e);
			}
			declareNameFromIdentifier(t, e) {
				this.scope.declareName(t.name, e, t.loc.start);
			}
			checkToRestConversion(t, e) {
				switch (t.type) {
					case 'ParenthesizedExpression':
						this.checkToRestConversion(t.expression, e);
						break;
					case 'Identifier':
					case 'MemberExpression':
						break;
					case 'ArrayExpression':
					case 'ObjectExpression':
						if (e) break;
					default:
						this.raise(p.InvalidRestAssignmentPattern, { at: t });
				}
			}
			checkCommaAfterRest(t) {
				return this.match(12)
					? (this.raise(
							this.lookaheadCharCode() === t
								? p.RestTrailingComma
								: p.ElementAfterRest,
							{ at: this.state.startLoc }
					  ),
					  !0)
					: !1;
			}
		},
		ra = (a, t) => Object.hasOwnProperty.call(a, t) && a[t];
	function aa(a) {
		if (a == null) throw new Error(`Unexpected ${a} value.`);
		return a;
	}
	function bs(a) {
		if (!a) throw new Error('Assert fail');
	}
	var y = V`typescript`({
		AbstractMethodHasImplementation: ({ methodName: a }) =>
			`Method '${a}' cannot have an implementation because it is marked abstract.`,
		AbstractPropertyHasInitializer: ({ propertyName: a }) =>
			`Property '${a}' cannot have an initializer because it is marked abstract.`,
		AccesorCannotDeclareThisParameter:
			"'get' and 'set' accessors cannot declare 'this' parameters.",
		AccesorCannotHaveTypeParameters: 'An accessor cannot have type parameters.',
		AccessorCannotBeOptional:
			"An 'accessor' property cannot be declared optional.",
		ClassMethodHasDeclare: "Class methods cannot have the 'declare' modifier.",
		ClassMethodHasReadonly:
			"Class methods cannot have the 'readonly' modifier.",
		ConstInitiailizerMustBeStringOrNumericLiteralOrLiteralEnumReference:
			"A 'const' initializer in an ambient context must be a string or numeric literal or literal enum reference.",
		ConstructorHasTypeParameters:
			'Type parameters cannot appear on a constructor declaration.',
		DeclareAccessor: ({ kind: a }) => `'declare' is not allowed in ${a}ters.`,
		DeclareClassFieldHasInitializer:
			'Initializers are not allowed in ambient contexts.',
		DeclareFunctionHasImplementation:
			'An implementation cannot be declared in ambient contexts.',
		DuplicateAccessibilityModifier: ({ modifier: a }) =>
			'Accessibility modifier already seen.',
		DuplicateModifier: ({ modifier: a }) => `Duplicate modifier: '${a}'.`,
		EmptyHeritageClauseType: ({ token: a }) => `'${a}' list cannot be empty.`,
		EmptyTypeArguments: 'Type argument list cannot be empty.',
		EmptyTypeParameters: 'Type parameter list cannot be empty.',
		ExpectedAmbientAfterExportDeclare:
			"'export declare' must be followed by an ambient declaration.",
		ImportAliasHasImportType: "An import alias can not use 'import type'.",
		ImportReflectionHasImportType:
			'An `import module` declaration can not use `type` modifier',
		IncompatibleModifiers: ({ modifiers: a }) =>
			`'${a[0]}' modifier cannot be used with '${a[1]}' modifier.`,
		IndexSignatureHasAbstract:
			"Index signatures cannot have the 'abstract' modifier.",
		IndexSignatureHasAccessibility: ({ modifier: a }) =>
			`Index signatures cannot have an accessibility modifier ('${a}').`,
		IndexSignatureHasDeclare:
			"Index signatures cannot have the 'declare' modifier.",
		IndexSignatureHasOverride:
			"'override' modifier cannot appear on an index signature.",
		IndexSignatureHasStatic:
			"Index signatures cannot have the 'static' modifier.",
		InitializerNotAllowedInAmbientContext:
			'Initializers are not allowed in ambient contexts.',
		InvalidModifierOnTypeMember: ({ modifier: a }) =>
			`'${a}' modifier cannot appear on a type member.`,
		InvalidModifierOnTypeParameter: ({ modifier: a }) =>
			`'${a}' modifier cannot appear on a type parameter.`,
		InvalidModifierOnTypeParameterPositions: ({ modifier: a }) =>
			`'${a}' modifier can only appear on a type parameter of a class, interface or type alias.`,
		InvalidModifiersOrder: ({ orderedModifiers: a }) =>
			`'${a[0]}' modifier must precede '${a[1]}' modifier.`,
		InvalidPropertyAccessAfterInstantiationExpression:
			'Invalid property access after an instantiation expression. You can either wrap the instantiation expression in parentheses, or delete the type arguments.',
		InvalidTupleMemberLabel:
			'Tuple members must be labeled with a simple identifier.',
		MissingInterfaceName:
			"'interface' declarations must be followed by an identifier.",
		MixedLabeledAndUnlabeledElements:
			'Tuple members must all have names or all not have names.',
		NonAbstractClassHasAbstractMethod:
			'Abstract methods can only appear within an abstract class.',
		NonClassMethodPropertyHasAbstractModifer:
			"'abstract' modifier can only appear on a class, method, or property declaration.",
		OptionalTypeBeforeRequired:
			'A required element cannot follow an optional element.',
		OverrideNotInSubClass:
			"This member cannot have an 'override' modifier because its containing class does not extend another class.",
		PatternIsOptional:
			'A binding pattern parameter cannot be optional in an implementation signature.',
		PrivateElementHasAbstract:
			"Private elements cannot have the 'abstract' modifier.",
		PrivateElementHasAccessibility: ({ modifier: a }) =>
			`Private elements cannot have an accessibility modifier ('${a}').`,
		ReadonlyForMethodSignature:
			"'readonly' modifier can only appear on a property declaration or index signature.",
		ReservedArrowTypeParam:
			'This syntax is reserved in files with the .mts or .cts extension. Add a trailing comma, as in `<T,>() => ...`.',
		ReservedTypeAssertion:
			'This syntax is reserved in files with the .mts or .cts extension. Use an `as` expression instead.',
		SetAccesorCannotHaveOptionalParameter:
			"A 'set' accessor cannot have an optional parameter.",
		SetAccesorCannotHaveRestParameter:
			"A 'set' accessor cannot have rest parameter.",
		SetAccesorCannotHaveReturnType:
			"A 'set' accessor cannot have a return type annotation.",
		SingleTypeParameterWithoutTrailingComma: ({ typeParameterName: a }) =>
			`Single type parameter ${a} should have a trailing comma. Example usage: <${a},>.`,
		StaticBlockCannotHaveModifier:
			'Static class blocks cannot have any modifier.',
		TupleOptionalAfterType:
			'A labeled tuple optional element must be declared using a question mark after the name and before the colon (`name?: type`), rather than after the type (`name: type?`).',
		TypeAnnotationAfterAssign:
			'Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.',
		TypeImportCannotSpecifyDefaultAndNamed:
			'A type-only import can specify a default import or named bindings, but not both.',
		TypeModifierIsUsedInTypeExports:
			"The 'type' modifier cannot be used on a named export when 'export type' is used on its export statement.",
		TypeModifierIsUsedInTypeImports:
			"The 'type' modifier cannot be used on a named import when 'import type' is used on its import statement.",
		UnexpectedParameterModifier:
			'A parameter property is only allowed in a constructor implementation.',
		UnexpectedReadonly:
			"'readonly' type modifier is only permitted on array and tuple literal types.",
		UnexpectedTypeAnnotation: 'Did not expect a type annotation here.',
		UnexpectedTypeCastInParameter:
			'Unexpected type cast in parameter position.',
		UnsupportedImportTypeArgument:
			'Argument in a type import must be a string literal.',
		UnsupportedParameterPropertyKind:
			'A parameter property may not be declared using a binding pattern.',
		UnsupportedSignatureParameterKind: ({ type: a }) =>
			`Name in a signature must be an Identifier, ObjectPattern or ArrayPattern, instead got ${a}.`
	});
	function na(a) {
		switch (a) {
			case 'any':
				return 'TSAnyKeyword';
			case 'boolean':
				return 'TSBooleanKeyword';
			case 'bigint':
				return 'TSBigIntKeyword';
			case 'never':
				return 'TSNeverKeyword';
			case 'number':
				return 'TSNumberKeyword';
			case 'object':
				return 'TSObjectKeyword';
			case 'string':
				return 'TSStringKeyword';
			case 'symbol':
				return 'TSSymbolKeyword';
			case 'undefined':
				return 'TSUndefinedKeyword';
			case 'unknown':
				return 'TSUnknownKeyword';
			default:
				return;
		}
	}
	function As(a) {
		return a === 'private' || a === 'public' || a === 'protected';
	}
	function oa(a) {
		return a === 'in' || a === 'out';
	}
	var ha = (a) =>
		class extends a {
			constructor(...e) {
				super(...e),
					(this.tsParseInOutModifiers = this.tsParseModifiers.bind(this, {
						allowedModifiers: ['in', 'out'],
						disallowedModifiers: [
							'const',
							'public',
							'private',
							'protected',
							'readonly',
							'declare',
							'abstract',
							'override'
						],
						errorTemplate: y.InvalidModifierOnTypeParameter
					})),
					(this.tsParseConstModifier = this.tsParseModifiers.bind(this, {
						allowedModifiers: ['const'],
						disallowedModifiers: ['in', 'out'],
						errorTemplate: y.InvalidModifierOnTypeParameterPositions
					})),
					(this.tsParseInOutConstModifiers = this.tsParseModifiers.bind(this, {
						allowedModifiers: ['in', 'out', 'const'],
						disallowedModifiers: [
							'public',
							'private',
							'protected',
							'readonly',
							'declare',
							'abstract',
							'override'
						],
						errorTemplate: y.InvalidModifierOnTypeParameter
					}));
			}
			getScopeHandler() {
				return Ut;
			}
			tsIsIdentifier() {
				return S(this.state.type);
			}
			tsTokenCanFollowModifier() {
				return (
					(this.match(0) ||
						this.match(5) ||
						this.match(55) ||
						this.match(21) ||
						this.match(136) ||
						this.isLiteralPropertyName()) &&
					!this.hasPrecedingLineBreak()
				);
			}
			tsNextTokenCanFollowModifier() {
				return this.next(), this.tsTokenCanFollowModifier();
			}
			tsParseModifier(e, s) {
				if (
					!S(this.state.type) &&
					this.state.type !== 58 &&
					this.state.type !== 75
				)
					return;
				let i = this.state.value;
				if (e.indexOf(i) !== -1) {
					if (s && this.tsIsStartOfStaticBlocks()) return;
					if (this.tsTryParse(this.tsNextTokenCanFollowModifier.bind(this)))
						return i;
				}
			}
			tsParseModifiers(
				{
					allowedModifiers: e,
					disallowedModifiers: s,
					stopOnStartOfClassStaticBlock: i,
					errorTemplate: r = y.InvalidModifierOnTypeMember
				},
				n
			) {
				let o = (l, c, u, d) => {
						c === u &&
							n[d] &&
							this.raise(y.InvalidModifiersOrder, {
								at: l,
								orderedModifiers: [u, d]
							});
					},
					h = (l, c, u, d) => {
						((n[u] && c === d) || (n[d] && c === u)) &&
							this.raise(y.IncompatibleModifiers, { at: l, modifiers: [u, d] });
					};
				for (;;) {
					let { startLoc: l } = this.state,
						c = this.tsParseModifier(e.concat(s ?? []), i);
					if (!c) break;
					As(c)
						? n.accessibility
							? this.raise(y.DuplicateAccessibilityModifier, {
									at: l,
									modifier: c
							  })
							: (o(l, c, c, 'override'),
							  o(l, c, c, 'static'),
							  o(l, c, c, 'readonly'),
							  (n.accessibility = c))
						: oa(c)
						? (n[c] && this.raise(y.DuplicateModifier, { at: l, modifier: c }),
						  (n[c] = !0),
						  o(l, c, 'in', 'out'))
						: (Object.hasOwnProperty.call(n, c)
								? this.raise(y.DuplicateModifier, { at: l, modifier: c })
								: (o(l, c, 'static', 'readonly'),
								  o(l, c, 'static', 'override'),
								  o(l, c, 'override', 'readonly'),
								  o(l, c, 'abstract', 'override'),
								  h(l, c, 'declare', 'override'),
								  h(l, c, 'static', 'abstract')),
						  (n[c] = !0)),
						s != null && s.includes(c) && this.raise(r, { at: l, modifier: c });
				}
			}
			tsIsListTerminator(e) {
				switch (e) {
					case 'EnumMembers':
					case 'TypeMembers':
						return this.match(8);
					case 'HeritageClauseElement':
						return this.match(5);
					case 'TupleElementTypes':
						return this.match(3);
					case 'TypeParametersOrArguments':
						return this.match(48);
				}
			}
			tsParseList(e, s) {
				let i = [];
				for (; !this.tsIsListTerminator(e); ) i.push(s());
				return i;
			}
			tsParseDelimitedList(e, s, i) {
				return aa(this.tsParseDelimitedListWorker(e, s, !0, i));
			}
			tsParseDelimitedListWorker(e, s, i, r) {
				let n = [],
					o = -1;
				for (; !this.tsIsListTerminator(e); ) {
					o = -1;
					let h = s();
					if (h == null) return;
					if ((n.push(h), this.eat(12))) {
						o = this.state.lastTokStart;
						continue;
					}
					if (this.tsIsListTerminator(e)) break;
					i && this.expect(12);
					return;
				}
				return r && (r.value = o), n;
			}
			tsParseBracketedList(e, s, i, r, n) {
				r || (i ? this.expect(0) : this.expect(47));
				let o = this.tsParseDelimitedList(e, s, n);
				return i ? this.expect(3) : this.expect(48), o;
			}
			tsParseImportType() {
				let e = this.startNode();
				return (
					this.expect(83),
					this.expect(10),
					this.match(131) ||
						this.raise(y.UnsupportedImportTypeArgument, {
							at: this.state.startLoc
						}),
					(e.argument = super.parseExprAtom()),
					this.expect(11),
					this.eat(16) && (e.qualifier = this.tsParseEntityName()),
					this.match(47) && (e.typeParameters = this.tsParseTypeArguments()),
					this.finishNode(e, 'TSImportType')
				);
			}
			tsParseEntityName(e = !0) {
				let s = this.parseIdentifier(e);
				for (; this.eat(16); ) {
					let i = this.startNodeAtNode(s);
					(i.left = s),
						(i.right = this.parseIdentifier(e)),
						(s = this.finishNode(i, 'TSQualifiedName'));
				}
				return s;
			}
			tsParseTypeReference() {
				let e = this.startNode();
				return (
					(e.typeName = this.tsParseEntityName()),
					!this.hasPrecedingLineBreak() &&
						this.match(47) &&
						(e.typeParameters = this.tsParseTypeArguments()),
					this.finishNode(e, 'TSTypeReference')
				);
			}
			tsParseThisTypePredicate(e) {
				this.next();
				let s = this.startNodeAtNode(e);
				return (
					(s.parameterName = e),
					(s.typeAnnotation = this.tsParseTypeAnnotation(!1)),
					(s.asserts = !1),
					this.finishNode(s, 'TSTypePredicate')
				);
			}
			tsParseThisTypeNode() {
				let e = this.startNode();
				return this.next(), this.finishNode(e, 'TSThisType');
			}
			tsParseTypeQuery() {
				let e = this.startNode();
				return (
					this.expect(87),
					this.match(83)
						? (e.exprName = this.tsParseImportType())
						: (e.exprName = this.tsParseEntityName()),
					!this.hasPrecedingLineBreak() &&
						this.match(47) &&
						(e.typeParameters = this.tsParseTypeArguments()),
					this.finishNode(e, 'TSTypeQuery')
				);
			}
			tsParseTypeParameter(e) {
				let s = this.startNode();
				return (
					e(s),
					(s.name = this.tsParseTypeParameterName()),
					(s.constraint = this.tsEatThenParseType(81)),
					(s.default = this.tsEatThenParseType(29)),
					this.finishNode(s, 'TSTypeParameter')
				);
			}
			tsTryParseTypeParameters(e) {
				if (this.match(47)) return this.tsParseTypeParameters(e);
			}
			tsParseTypeParameters(e) {
				let s = this.startNode();
				this.match(47) || this.match(140) ? this.next() : this.unexpected();
				let i = { value: -1 };
				return (
					(s.params = this.tsParseBracketedList(
						'TypeParametersOrArguments',
						this.tsParseTypeParameter.bind(this, e),
						!1,
						!0,
						i
					)),
					s.params.length === 0 && this.raise(y.EmptyTypeParameters, { at: s }),
					i.value !== -1 && this.addExtra(s, 'trailingComma', i.value),
					this.finishNode(s, 'TSTypeParameterDeclaration')
				);
			}
			tsFillSignature(e, s) {
				let i = e === 19,
					r = 'parameters',
					n = 'typeAnnotation';
				(s.typeParameters = this.tsTryParseTypeParameters(
					this.tsParseConstModifier
				)),
					this.expect(10),
					(s[r] = this.tsParseBindingListForSignature()),
					i
						? (s[n] = this.tsParseTypeOrTypePredicateAnnotation(e))
						: this.match(e) &&
						  (s[n] = this.tsParseTypeOrTypePredicateAnnotation(e));
			}
			tsParseBindingListForSignature() {
				let e = super.parseBindingList(11, 41, 2);
				for (let s of e) {
					let { type: i } = s;
					(i === 'AssignmentPattern' || i === 'TSParameterProperty') &&
						this.raise(y.UnsupportedSignatureParameterKind, { at: s, type: i });
				}
				return e;
			}
			tsParseTypeMemberSemicolon() {
				!this.eat(12) && !this.isLineTerminator() && this.expect(13);
			}
			tsParseSignatureMember(e, s) {
				return (
					this.tsFillSignature(14, s),
					this.tsParseTypeMemberSemicolon(),
					this.finishNode(s, e)
				);
			}
			tsIsUnambiguouslyIndexSignature() {
				return (
					this.next(), S(this.state.type) ? (this.next(), this.match(14)) : !1
				);
			}
			tsTryParseIndexSignature(e) {
				if (
					!(
						this.match(0) &&
						this.tsLookAhead(this.tsIsUnambiguouslyIndexSignature.bind(this))
					)
				)
					return;
				this.expect(0);
				let s = this.parseIdentifier();
				(s.typeAnnotation = this.tsParseTypeAnnotation()),
					this.resetEndLocation(s),
					this.expect(3),
					(e.parameters = [s]);
				let i = this.tsTryParseTypeAnnotation();
				return (
					i && (e.typeAnnotation = i),
					this.tsParseTypeMemberSemicolon(),
					this.finishNode(e, 'TSIndexSignature')
				);
			}
			tsParsePropertyOrMethodSignature(e, s) {
				this.eat(17) && (e.optional = !0);
				let i = e;
				if (this.match(10) || this.match(47)) {
					s && this.raise(y.ReadonlyForMethodSignature, { at: e });
					let r = i;
					r.kind &&
						this.match(47) &&
						this.raise(y.AccesorCannotHaveTypeParameters, {
							at: this.state.curPosition()
						}),
						this.tsFillSignature(14, r),
						this.tsParseTypeMemberSemicolon();
					let n = 'parameters',
						o = 'typeAnnotation';
					if (r.kind === 'get')
						r[n].length > 0 &&
							(this.raise(p.BadGetterArity, { at: this.state.curPosition() }),
							this.isThisParam(r[n][0]) &&
								this.raise(y.AccesorCannotDeclareThisParameter, {
									at: this.state.curPosition()
								}));
					else if (r.kind === 'set') {
						if (r[n].length !== 1)
							this.raise(p.BadSetterArity, { at: this.state.curPosition() });
						else {
							let h = r[n][0];
							this.isThisParam(h) &&
								this.raise(y.AccesorCannotDeclareThisParameter, {
									at: this.state.curPosition()
								}),
								h.type === 'Identifier' &&
									h.optional &&
									this.raise(y.SetAccesorCannotHaveOptionalParameter, {
										at: this.state.curPosition()
									}),
								h.type === 'RestElement' &&
									this.raise(y.SetAccesorCannotHaveRestParameter, {
										at: this.state.curPosition()
									});
						}
						r[o] && this.raise(y.SetAccesorCannotHaveReturnType, { at: r[o] });
					} else r.kind = 'method';
					return this.finishNode(r, 'TSMethodSignature');
				} else {
					let r = i;
					s && (r.readonly = !0);
					let n = this.tsTryParseTypeAnnotation();
					return (
						n && (r.typeAnnotation = n),
						this.tsParseTypeMemberSemicolon(),
						this.finishNode(r, 'TSPropertySignature')
					);
				}
			}
			tsParseTypeMember() {
				let e = this.startNode();
				if (this.match(10) || this.match(47))
					return this.tsParseSignatureMember('TSCallSignatureDeclaration', e);
				if (this.match(77)) {
					let i = this.startNode();
					return (
						this.next(),
						this.match(10) || this.match(47)
							? this.tsParseSignatureMember(
									'TSConstructSignatureDeclaration',
									e
							  )
							: ((e.key = this.createIdentifier(i, 'new')),
							  this.tsParsePropertyOrMethodSignature(e, !1))
					);
				}
				this.tsParseModifiers(
					{
						allowedModifiers: ['readonly'],
						disallowedModifiers: [
							'declare',
							'abstract',
							'private',
							'protected',
							'public',
							'static',
							'override'
						]
					},
					e
				);
				let s = this.tsTryParseIndexSignature(e);
				return (
					s ||
					(super.parsePropertyName(e),
					!e.computed &&
						e.key.type === 'Identifier' &&
						(e.key.name === 'get' || e.key.name === 'set') &&
						this.tsTokenCanFollowModifier() &&
						((e.kind = e.key.name), super.parsePropertyName(e)),
					this.tsParsePropertyOrMethodSignature(e, !!e.readonly))
				);
			}
			tsParseTypeLiteral() {
				let e = this.startNode();
				return (
					(e.members = this.tsParseObjectTypeMembers()),
					this.finishNode(e, 'TSTypeLiteral')
				);
			}
			tsParseObjectTypeMembers() {
				this.expect(5);
				let e = this.tsParseList(
					'TypeMembers',
					this.tsParseTypeMember.bind(this)
				);
				return this.expect(8), e;
			}
			tsIsStartOfMappedType() {
				return (
					this.next(),
					this.eat(53)
						? this.isContextual(120)
						: (this.isContextual(120) && this.next(),
						  !this.match(0) || (this.next(), !this.tsIsIdentifier())
								? !1
								: (this.next(), this.match(58)))
				);
			}
			tsParseMappedTypeParameter() {
				let e = this.startNode();
				return (
					(e.name = this.tsParseTypeParameterName()),
					(e.constraint = this.tsExpectThenParseType(58)),
					this.finishNode(e, 'TSTypeParameter')
				);
			}
			tsParseMappedType() {
				let e = this.startNode();
				return (
					this.expect(5),
					this.match(53)
						? ((e.readonly = this.state.value),
						  this.next(),
						  this.expectContextual(120))
						: this.eatContextual(120) && (e.readonly = !0),
					this.expect(0),
					(e.typeParameter = this.tsParseMappedTypeParameter()),
					(e.nameType = this.eatContextual(93) ? this.tsParseType() : null),
					this.expect(3),
					this.match(53)
						? ((e.optional = this.state.value), this.next(), this.expect(17))
						: this.eat(17) && (e.optional = !0),
					(e.typeAnnotation = this.tsTryParseType()),
					this.semicolon(),
					this.expect(8),
					this.finishNode(e, 'TSMappedType')
				);
			}
			tsParseTupleType() {
				let e = this.startNode();
				e.elementTypes = this.tsParseBracketedList(
					'TupleElementTypes',
					this.tsParseTupleElementType.bind(this),
					!0,
					!1
				);
				let s = !1,
					i = null;
				return (
					e.elementTypes.forEach((r) => {
						let { type: o } = r;
						s &&
							o !== 'TSRestType' &&
							o !== 'TSOptionalType' &&
							!(o === 'TSNamedTupleMember' && r.optional) &&
							this.raise(y.OptionalTypeBeforeRequired, { at: r }),
							s ||
								(s =
									(o === 'TSNamedTupleMember' && r.optional) ||
									o === 'TSOptionalType');
						let h = o;
						o === 'TSRestType' && ((r = r.typeAnnotation), (h = r.type));
						let l = h === 'TSNamedTupleMember';
						i != null || (i = l),
							i !== l &&
								this.raise(y.MixedLabeledAndUnlabeledElements, { at: r });
					}),
					this.finishNode(e, 'TSTupleType')
				);
			}
			tsParseTupleElementType() {
				let { startLoc: e } = this.state,
					s = this.eat(21),
					i,
					r,
					n,
					o,
					l = M(this.state.type) ? this.lookaheadCharCode() : null;
				if (l === 58)
					(i = !0),
						(n = !1),
						(r = this.parseIdentifier(!0)),
						this.expect(14),
						(o = this.tsParseType());
				else if (l === 63) {
					n = !0;
					let c = this.state.startLoc,
						u = this.state.value,
						d = this.tsParseNonArrayType();
					this.lookaheadCharCode() === 58
						? ((i = !0),
						  (r = this.createIdentifier(this.startNodeAt(c), u)),
						  this.expect(17),
						  this.expect(14),
						  (o = this.tsParseType()))
						: ((i = !1), (o = d), this.expect(17));
				} else (o = this.tsParseType()), (n = this.eat(17)), (i = this.eat(14));
				if (i) {
					let c;
					r
						? ((c = this.startNodeAtNode(r)),
						  (c.optional = n),
						  (c.label = r),
						  (c.elementType = o),
						  this.eat(17) &&
								((c.optional = !0),
								this.raise(y.TupleOptionalAfterType, {
									at: this.state.lastTokStartLoc
								})))
						: ((c = this.startNodeAtNode(o)),
						  (c.optional = n),
						  this.raise(y.InvalidTupleMemberLabel, { at: o }),
						  (c.label = o),
						  (c.elementType = this.tsParseType())),
						(o = this.finishNode(c, 'TSNamedTupleMember'));
				} else if (n) {
					let c = this.startNodeAtNode(o);
					(c.typeAnnotation = o), (o = this.finishNode(c, 'TSOptionalType'));
				}
				if (s) {
					let c = this.startNodeAt(e);
					(c.typeAnnotation = o), (o = this.finishNode(c, 'TSRestType'));
				}
				return o;
			}
			tsParseParenthesizedType() {
				let e = this.startNode();
				return (
					this.expect(10),
					(e.typeAnnotation = this.tsParseType()),
					this.expect(11),
					this.finishNode(e, 'TSParenthesizedType')
				);
			}
			tsParseFunctionOrConstructorType(e, s) {
				let i = this.startNode();
				return (
					e === 'TSConstructorType' &&
						((i.abstract = !!s), s && this.next(), this.next()),
					this.tsInAllowConditionalTypesContext(() =>
						this.tsFillSignature(19, i)
					),
					this.finishNode(i, e)
				);
			}
			tsParseLiteralTypeNode() {
				let e = this.startNode();
				switch (this.state.type) {
					case 132:
					case 133:
					case 131:
					case 85:
					case 86:
						e.literal = super.parseExprAtom();
						break;
					default:
						this.unexpected();
				}
				return this.finishNode(e, 'TSLiteralType');
			}
			tsParseTemplateLiteralType() {
				let e = this.startNode();
				return (
					(e.literal = super.parseTemplate(!1)),
					this.finishNode(e, 'TSLiteralType')
				);
			}
			parseTemplateSubstitution() {
				return this.state.inType
					? this.tsParseType()
					: super.parseTemplateSubstitution();
			}
			tsParseThisTypeOrThisTypePredicate() {
				let e = this.tsParseThisTypeNode();
				return this.isContextual(114) && !this.hasPrecedingLineBreak()
					? this.tsParseThisTypePredicate(e)
					: e;
			}
			tsParseNonArrayType() {
				switch (this.state.type) {
					case 131:
					case 132:
					case 133:
					case 85:
					case 86:
						return this.tsParseLiteralTypeNode();
					case 53:
						if (this.state.value === '-') {
							let e = this.startNode(),
								s = this.lookahead();
							return (
								s.type !== 132 && s.type !== 133 && this.unexpected(),
								(e.literal = this.parseMaybeUnary()),
								this.finishNode(e, 'TSLiteralType')
							);
						}
						break;
					case 78:
						return this.tsParseThisTypeOrThisTypePredicate();
					case 87:
						return this.tsParseTypeQuery();
					case 83:
						return this.tsParseImportType();
					case 5:
						return this.tsLookAhead(this.tsIsStartOfMappedType.bind(this))
							? this.tsParseMappedType()
							: this.tsParseTypeLiteral();
					case 0:
						return this.tsParseTupleType();
					case 10:
						return this.tsParseParenthesizedType();
					case 25:
					case 24:
						return this.tsParseTemplateLiteralType();
					default: {
						let { type: e } = this.state;
						if (S(e) || e === 88 || e === 84) {
							let s =
								e === 88
									? 'TSVoidKeyword'
									: e === 84
									? 'TSNullKeyword'
									: na(this.state.value);
							if (s !== void 0 && this.lookaheadCharCode() !== 46) {
								let i = this.startNode();
								return this.next(), this.finishNode(i, s);
							}
							return this.tsParseTypeReference();
						}
					}
				}
				this.unexpected();
			}
			tsParseArrayTypeOrHigher() {
				let e = this.tsParseNonArrayType();
				for (; !this.hasPrecedingLineBreak() && this.eat(0); )
					if (this.match(3)) {
						let s = this.startNodeAtNode(e);
						(s.elementType = e),
							this.expect(3),
							(e = this.finishNode(s, 'TSArrayType'));
					} else {
						let s = this.startNodeAtNode(e);
						(s.objectType = e),
							(s.indexType = this.tsParseType()),
							this.expect(3),
							(e = this.finishNode(s, 'TSIndexedAccessType'));
					}
				return e;
			}
			tsParseTypeOperator() {
				let e = this.startNode(),
					s = this.state.value;
				return (
					this.next(),
					(e.operator = s),
					(e.typeAnnotation = this.tsParseTypeOperatorOrHigher()),
					s === 'readonly' && this.tsCheckTypeAnnotationForReadOnly(e),
					this.finishNode(e, 'TSTypeOperator')
				);
			}
			tsCheckTypeAnnotationForReadOnly(e) {
				switch (e.typeAnnotation.type) {
					case 'TSTupleType':
					case 'TSArrayType':
						return;
					default:
						this.raise(y.UnexpectedReadonly, { at: e });
				}
			}
			tsParseInferType() {
				let e = this.startNode();
				this.expectContextual(113);
				let s = this.startNode();
				return (
					(s.name = this.tsParseTypeParameterName()),
					(s.constraint = this.tsTryParse(() =>
						this.tsParseConstraintForInferType()
					)),
					(e.typeParameter = this.finishNode(s, 'TSTypeParameter')),
					this.finishNode(e, 'TSInferType')
				);
			}
			tsParseConstraintForInferType() {
				if (this.eat(81)) {
					let e = this.tsInDisallowConditionalTypesContext(() =>
						this.tsParseType()
					);
					if (this.state.inDisallowConditionalTypesContext || !this.match(17))
						return e;
				}
			}
			tsParseTypeOperatorOrHigher() {
				return ur(this.state.type) && !this.state.containsEsc
					? this.tsParseTypeOperator()
					: this.isContextual(113)
					? this.tsParseInferType()
					: this.tsInAllowConditionalTypesContext(() =>
							this.tsParseArrayTypeOrHigher()
					  );
			}
			tsParseUnionOrIntersectionType(e, s, i) {
				let r = this.startNode(),
					n = this.eat(i),
					o = [];
				do o.push(s());
				while (this.eat(i));
				return o.length === 1 && !n
					? o[0]
					: ((r.types = o), this.finishNode(r, e));
			}
			tsParseIntersectionTypeOrHigher() {
				return this.tsParseUnionOrIntersectionType(
					'TSIntersectionType',
					this.tsParseTypeOperatorOrHigher.bind(this),
					45
				);
			}
			tsParseUnionTypeOrHigher() {
				return this.tsParseUnionOrIntersectionType(
					'TSUnionType',
					this.tsParseIntersectionTypeOrHigher.bind(this),
					43
				);
			}
			tsIsStartOfFunctionType() {
				return this.match(47)
					? !0
					: this.match(10) &&
							this.tsLookAhead(
								this.tsIsUnambiguouslyStartOfFunctionType.bind(this)
							);
			}
			tsSkipParameterStart() {
				if (S(this.state.type) || this.match(78)) return this.next(), !0;
				if (this.match(5)) {
					let { errors: e } = this.state,
						s = e.length;
					try {
						return this.parseObjectLike(8, !0), e.length === s;
					} catch {
						return !1;
					}
				}
				if (this.match(0)) {
					this.next();
					let { errors: e } = this.state,
						s = e.length;
					try {
						return super.parseBindingList(3, 93, 1), e.length === s;
					} catch {
						return !1;
					}
				}
				return !1;
			}
			tsIsUnambiguouslyStartOfFunctionType() {
				return (
					this.next(),
					!!(
						this.match(11) ||
						this.match(21) ||
						(this.tsSkipParameterStart() &&
							(this.match(14) ||
								this.match(12) ||
								this.match(17) ||
								this.match(29) ||
								(this.match(11) && (this.next(), this.match(19)))))
					)
				);
			}
			tsParseTypeOrTypePredicateAnnotation(e) {
				return this.tsInType(() => {
					let s = this.startNode();
					this.expect(e);
					let i = this.startNode(),
						r = !!this.tsTryParse(this.tsParseTypePredicateAsserts.bind(this));
					if (r && this.match(78)) {
						let h = this.tsParseThisTypeOrThisTypePredicate();
						return (
							h.type === 'TSThisType'
								? ((i.parameterName = h),
								  (i.asserts = !0),
								  (i.typeAnnotation = null),
								  (h = this.finishNode(i, 'TSTypePredicate')))
								: (this.resetStartLocationFromNode(h, i), (h.asserts = !0)),
							(s.typeAnnotation = h),
							this.finishNode(s, 'TSTypeAnnotation')
						);
					}
					let n =
						this.tsIsIdentifier() &&
						this.tsTryParse(this.tsParseTypePredicatePrefix.bind(this));
					if (!n)
						return r
							? ((i.parameterName = this.parseIdentifier()),
							  (i.asserts = r),
							  (i.typeAnnotation = null),
							  (s.typeAnnotation = this.finishNode(i, 'TSTypePredicate')),
							  this.finishNode(s, 'TSTypeAnnotation'))
							: this.tsParseTypeAnnotation(!1, s);
					let o = this.tsParseTypeAnnotation(!1);
					return (
						(i.parameterName = n),
						(i.typeAnnotation = o),
						(i.asserts = r),
						(s.typeAnnotation = this.finishNode(i, 'TSTypePredicate')),
						this.finishNode(s, 'TSTypeAnnotation')
					);
				});
			}
			tsTryParseTypeOrTypePredicateAnnotation() {
				if (this.match(14))
					return this.tsParseTypeOrTypePredicateAnnotation(14);
			}
			tsTryParseTypeAnnotation() {
				if (this.match(14)) return this.tsParseTypeAnnotation();
			}
			tsTryParseType() {
				return this.tsEatThenParseType(14);
			}
			tsParseTypePredicatePrefix() {
				let e = this.parseIdentifier();
				if (this.isContextual(114) && !this.hasPrecedingLineBreak())
					return this.next(), e;
			}
			tsParseTypePredicateAsserts() {
				if (this.state.type !== 107) return !1;
				let e = this.state.containsEsc;
				return (
					this.next(),
					!S(this.state.type) && !this.match(78)
						? !1
						: (e &&
								this.raise(p.InvalidEscapedReservedWord, {
									at: this.state.lastTokStartLoc,
									reservedWord: 'asserts'
								}),
						  !0)
				);
			}
			tsParseTypeAnnotation(e = !0, s = this.startNode()) {
				return (
					this.tsInType(() => {
						e && this.expect(14), (s.typeAnnotation = this.tsParseType());
					}),
					this.finishNode(s, 'TSTypeAnnotation')
				);
			}
			tsParseType() {
				bs(this.state.inType);
				let e = this.tsParseNonConditionalType();
				if (
					this.state.inDisallowConditionalTypesContext ||
					this.hasPrecedingLineBreak() ||
					!this.eat(81)
				)
					return e;
				let s = this.startNodeAtNode(e);
				return (
					(s.checkType = e),
					(s.extendsType = this.tsInDisallowConditionalTypesContext(() =>
						this.tsParseNonConditionalType()
					)),
					this.expect(17),
					(s.trueType = this.tsInAllowConditionalTypesContext(() =>
						this.tsParseType()
					)),
					this.expect(14),
					(s.falseType = this.tsInAllowConditionalTypesContext(() =>
						this.tsParseType()
					)),
					this.finishNode(s, 'TSConditionalType')
				);
			}
			isAbstractConstructorSignature() {
				return this.isContextual(122) && this.lookahead().type === 77;
			}
			tsParseNonConditionalType() {
				return this.tsIsStartOfFunctionType()
					? this.tsParseFunctionOrConstructorType('TSFunctionType')
					: this.match(77)
					? this.tsParseFunctionOrConstructorType('TSConstructorType')
					: this.isAbstractConstructorSignature()
					? this.tsParseFunctionOrConstructorType('TSConstructorType', !0)
					: this.tsParseUnionTypeOrHigher();
			}
			tsParseTypeAssertion() {
				this.getPluginOption('typescript', 'disallowAmbiguousJSXLike') &&
					this.raise(y.ReservedTypeAssertion, { at: this.state.startLoc });
				let e = this.startNode();
				return (
					(e.typeAnnotation = this.tsInType(
						() => (
							this.next(),
							this.match(75) ? this.tsParseTypeReference() : this.tsParseType()
						)
					)),
					this.expect(48),
					(e.expression = this.parseMaybeUnary()),
					this.finishNode(e, 'TSTypeAssertion')
				);
			}
			tsParseHeritageClause(e) {
				let s = this.state.startLoc,
					i = this.tsParseDelimitedList('HeritageClauseElement', () => {
						let r = this.startNode();
						return (
							(r.expression = this.tsParseEntityName()),
							this.match(47) &&
								(r.typeParameters = this.tsParseTypeArguments()),
							this.finishNode(r, 'TSExpressionWithTypeArguments')
						);
					});
				return (
					i.length ||
						this.raise(y.EmptyHeritageClauseType, { at: s, token: e }),
					i
				);
			}
			tsParseInterfaceDeclaration(e, s = {}) {
				if (this.hasFollowingLineBreak()) return null;
				this.expectContextual(127),
					s.declare && (e.declare = !0),
					S(this.state.type)
						? ((e.id = this.parseIdentifier()), this.checkIdentifier(e.id, wr))
						: ((e.id = null),
						  this.raise(y.MissingInterfaceName, { at: this.state.startLoc })),
					(e.typeParameters = this.tsTryParseTypeParameters(
						this.tsParseInOutConstModifiers
					)),
					this.eat(81) && (e.extends = this.tsParseHeritageClause('extends'));
				let i = this.startNode();
				return (
					(i.body = this.tsInType(this.tsParseObjectTypeMembers.bind(this))),
					(e.body = this.finishNode(i, 'TSInterfaceBody')),
					this.finishNode(e, 'TSInterfaceDeclaration')
				);
			}
			tsParseTypeAliasDeclaration(e) {
				return (
					(e.id = this.parseIdentifier()),
					this.checkIdentifier(e.id, Ir),
					(e.typeAnnotation = this.tsInType(() => {
						if (
							((e.typeParameters = this.tsTryParseTypeParameters(
								this.tsParseInOutModifiers
							)),
							this.expect(29),
							this.isContextual(112) && this.lookahead().type !== 16)
						) {
							let s = this.startNode();
							return this.next(), this.finishNode(s, 'TSIntrinsicKeyword');
						}
						return this.tsParseType();
					})),
					this.semicolon(),
					this.finishNode(e, 'TSTypeAliasDeclaration')
				);
			}
			tsInNoContext(e) {
				let s = this.state.context;
				this.state.context = [s[0]];
				try {
					return e();
				} finally {
					this.state.context = s;
				}
			}
			tsInType(e) {
				let s = this.state.inType;
				this.state.inType = !0;
				try {
					return e();
				} finally {
					this.state.inType = s;
				}
			}
			tsInDisallowConditionalTypesContext(e) {
				let s = this.state.inDisallowConditionalTypesContext;
				this.state.inDisallowConditionalTypesContext = !0;
				try {
					return e();
				} finally {
					this.state.inDisallowConditionalTypesContext = s;
				}
			}
			tsInAllowConditionalTypesContext(e) {
				let s = this.state.inDisallowConditionalTypesContext;
				this.state.inDisallowConditionalTypesContext = !1;
				try {
					return e();
				} finally {
					this.state.inDisallowConditionalTypesContext = s;
				}
			}
			tsEatThenParseType(e) {
				if (this.match(e)) return this.tsNextThenParseType();
			}
			tsExpectThenParseType(e) {
				return this.tsInType(() => (this.expect(e), this.tsParseType()));
			}
			tsNextThenParseType() {
				return this.tsInType(() => (this.next(), this.tsParseType()));
			}
			tsParseEnumMember() {
				let e = this.startNode();
				return (
					(e.id = this.match(131)
						? super.parseStringLiteral(this.state.value)
						: this.parseIdentifier(!0)),
					this.eat(29) && (e.initializer = super.parseMaybeAssignAllowIn()),
					this.finishNode(e, 'TSEnumMember')
				);
			}
			tsParseEnumDeclaration(e, s = {}) {
				return (
					s.const && (e.const = !0),
					s.declare && (e.declare = !0),
					this.expectContextual(124),
					(e.id = this.parseIdentifier()),
					this.checkIdentifier(e.id, e.const ? kr : Vs),
					this.expect(5),
					(e.members = this.tsParseDelimitedList(
						'EnumMembers',
						this.tsParseEnumMember.bind(this)
					)),
					this.expect(8),
					this.finishNode(e, 'TSEnumDeclaration')
				);
			}
			tsParseModuleBlock() {
				let e = this.startNode();
				return (
					this.scope.enter(ae),
					this.expect(5),
					super.parseBlockOrModuleBlockBody((e.body = []), void 0, !0, 8),
					this.scope.exit(),
					this.finishNode(e, 'TSModuleBlock')
				);
			}
			tsParseModuleOrNamespaceDeclaration(e, s = !1) {
				if (
					((e.id = this.parseIdentifier()),
					s || this.checkIdentifier(e.id, vr),
					this.eat(16))
				) {
					let i = this.startNode();
					this.tsParseModuleOrNamespaceDeclaration(i, !0), (e.body = i);
				} else
					this.scope.enter(le),
						this.prodParam.enter(pe),
						(e.body = this.tsParseModuleBlock()),
						this.prodParam.exit(),
						this.scope.exit();
				return this.finishNode(e, 'TSModuleDeclaration');
			}
			tsParseAmbientExternalModuleDeclaration(e) {
				return (
					this.isContextual(110)
						? ((e.global = !0), (e.id = this.parseIdentifier()))
						: this.match(131)
						? (e.id = super.parseStringLiteral(this.state.value))
						: this.unexpected(),
					this.match(5)
						? (this.scope.enter(le),
						  this.prodParam.enter(pe),
						  (e.body = this.tsParseModuleBlock()),
						  this.prodParam.exit(),
						  this.scope.exit())
						: this.semicolon(),
					this.finishNode(e, 'TSModuleDeclaration')
				);
			}
			tsParseImportEqualsDeclaration(e, s, i) {
				(e.isExport = i || !1),
					(e.id = s || this.parseIdentifier()),
					this.checkIdentifier(e.id, Ne),
					this.expect(29);
				let r = this.tsParseModuleReference();
				return (
					e.importKind === 'type' &&
						r.type !== 'TSExternalModuleReference' &&
						this.raise(y.ImportAliasHasImportType, { at: r }),
					(e.moduleReference = r),
					this.semicolon(),
					this.finishNode(e, 'TSImportEqualsDeclaration')
				);
			}
			tsIsExternalModuleReference() {
				return this.isContextual(117) && this.lookaheadCharCode() === 40;
			}
			tsParseModuleReference() {
				return this.tsIsExternalModuleReference()
					? this.tsParseExternalModuleReference()
					: this.tsParseEntityName(!1);
			}
			tsParseExternalModuleReference() {
				let e = this.startNode();
				return (
					this.expectContextual(117),
					this.expect(10),
					this.match(131) || this.unexpected(),
					(e.expression = super.parseExprAtom()),
					this.expect(11),
					(this.sawUnambiguousESM = !0),
					this.finishNode(e, 'TSExternalModuleReference')
				);
			}
			tsLookAhead(e) {
				let s = this.state.clone(),
					i = e();
				return (this.state = s), i;
			}
			tsTryParseAndCatch(e) {
				let s = this.tryParse((i) => e() || i());
				if (!(s.aborted || !s.node))
					return s.error && (this.state = s.failState), s.node;
			}
			tsTryParse(e) {
				let s = this.state.clone(),
					i = e();
				if (i !== void 0 && i !== !1) return i;
				this.state = s;
			}
			tsTryParseDeclare(e) {
				if (this.isLineTerminator()) return;
				let s = this.state.type,
					i;
				return (
					this.isContextual(99) && ((s = 74), (i = 'let')),
					this.tsInAmbientContext(() => {
						switch (s) {
							case 68:
								return (
									(e.declare = !0), super.parseFunctionStatement(e, !1, !1)
								);
							case 80:
								return (e.declare = !0), this.parseClass(e, !0, !1);
							case 124:
								return this.tsParseEnumDeclaration(e, { declare: !0 });
							case 110:
								return this.tsParseAmbientExternalModuleDeclaration(e);
							case 75:
							case 74:
								return !this.match(75) || !this.isLookaheadContextual('enum')
									? ((e.declare = !0),
									  this.parseVarStatement(e, i || this.state.value, !0))
									: (this.expect(75),
									  this.tsParseEnumDeclaration(e, { const: !0, declare: !0 }));
							case 127: {
								let r = this.tsParseInterfaceDeclaration(e, { declare: !0 });
								if (r) return r;
							}
							default:
								if (S(s))
									return this.tsParseDeclaration(e, this.state.value, !0, null);
						}
					})
				);
			}
			tsTryParseExportDeclaration() {
				return this.tsParseDeclaration(
					this.startNode(),
					this.state.value,
					!0,
					null
				);
			}
			tsParseExpressionStatement(e, s, i) {
				switch (s.name) {
					case 'declare': {
						let r = this.tsTryParseDeclare(e);
						return r && (r.declare = !0), r;
					}
					case 'global':
						if (this.match(5)) {
							this.scope.enter(le), this.prodParam.enter(pe);
							let r = e;
							return (
								(r.global = !0),
								(r.id = s),
								(r.body = this.tsParseModuleBlock()),
								this.scope.exit(),
								this.prodParam.exit(),
								this.finishNode(r, 'TSModuleDeclaration')
							);
						}
						break;
					default:
						return this.tsParseDeclaration(e, s.name, !1, i);
				}
			}
			tsParseDeclaration(e, s, i, r) {
				switch (s) {
					case 'abstract':
						if (
							this.tsCheckLineTerminator(i) &&
							(this.match(80) || S(this.state.type))
						)
							return this.tsParseAbstractDeclaration(e, r);
						break;
					case 'module':
						if (this.tsCheckLineTerminator(i)) {
							if (this.match(131))
								return this.tsParseAmbientExternalModuleDeclaration(e);
							if (S(this.state.type))
								return this.tsParseModuleOrNamespaceDeclaration(e);
						}
						break;
					case 'namespace':
						if (this.tsCheckLineTerminator(i) && S(this.state.type))
							return this.tsParseModuleOrNamespaceDeclaration(e);
						break;
					case 'type':
						if (this.tsCheckLineTerminator(i) && S(this.state.type))
							return this.tsParseTypeAliasDeclaration(e);
						break;
				}
			}
			tsCheckLineTerminator(e) {
				return e
					? this.hasFollowingLineBreak()
						? !1
						: (this.next(), !0)
					: !this.isLineTerminator();
			}
			tsTryParseGenericAsyncArrowFunction(e) {
				if (!this.match(47)) return;
				let s = this.state.maybeInArrowParameters;
				this.state.maybeInArrowParameters = !0;
				let i = this.tsTryParseAndCatch(() => {
					let r = this.startNodeAt(e);
					return (
						(r.typeParameters = this.tsParseTypeParameters(
							this.tsParseConstModifier
						)),
						super.parseFunctionParams(r),
						(r.returnType = this.tsTryParseTypeOrTypePredicateAnnotation()),
						this.expect(19),
						r
					);
				});
				if (((this.state.maybeInArrowParameters = s), !!i))
					return super.parseArrowExpression(i, null, !0);
			}
			tsParseTypeArgumentsInExpression() {
				if (this.reScan_lt() === 47) return this.tsParseTypeArguments();
			}
			tsParseTypeArguments() {
				let e = this.startNode();
				return (
					(e.params = this.tsInType(() =>
						this.tsInNoContext(
							() => (
								this.expect(47),
								this.tsParseDelimitedList(
									'TypeParametersOrArguments',
									this.tsParseType.bind(this)
								)
							)
						)
					)),
					e.params.length === 0
						? this.raise(y.EmptyTypeArguments, { at: e })
						: !this.state.inType &&
						  this.curContext() === E.brace &&
						  this.reScan_lt_gt(),
					this.expect(48),
					this.finishNode(e, 'TSTypeParameterInstantiation')
				);
			}
			tsIsDeclarationStart() {
				return fr(this.state.type);
			}
			isExportDefaultSpecifier() {
				return this.tsIsDeclarationStart()
					? !1
					: super.isExportDefaultSpecifier();
			}
			parseAssignableListItem(e, s) {
				let i = this.state.startLoc,
					r = {};
				this.tsParseModifiers(
					{
						allowedModifiers: [
							'public',
							'private',
							'protected',
							'override',
							'readonly'
						]
					},
					r
				);
				let n = r.accessibility,
					o = r.override,
					h = r.readonly;
				!(e & 4) &&
					(n || h || o) &&
					this.raise(y.UnexpectedParameterModifier, { at: i });
				let l = this.parseMaybeDefault();
				this.parseAssignableListItemTypes(l, e);
				let c = this.parseMaybeDefault(l.loc.start, l);
				if (n || h || o) {
					let u = this.startNodeAt(i);
					return (
						s.length && (u.decorators = s),
						n && (u.accessibility = n),
						h && (u.readonly = h),
						o && (u.override = o),
						c.type !== 'Identifier' &&
							c.type !== 'AssignmentPattern' &&
							this.raise(y.UnsupportedParameterPropertyKind, { at: u }),
						(u.parameter = c),
						this.finishNode(u, 'TSParameterProperty')
					);
				}
				return s.length && (l.decorators = s), c;
			}
			isSimpleParameter(e) {
				return (
					(e.type === 'TSParameterProperty' &&
						super.isSimpleParameter(e.parameter)) ||
					super.isSimpleParameter(e)
				);
			}
			tsDisallowOptionalPattern(e) {
				for (let s of e.params)
					s.type !== 'Identifier' &&
						s.optional &&
						!this.state.isAmbientContext &&
						this.raise(y.PatternIsOptional, { at: s });
			}
			setArrowFunctionParameters(e, s, i) {
				super.setArrowFunctionParameters(e, s, i),
					this.tsDisallowOptionalPattern(e);
			}
			parseFunctionBodyAndFinish(e, s, i = !1) {
				this.match(14) &&
					(e.returnType = this.tsParseTypeOrTypePredicateAnnotation(14));
				let r =
					s === 'FunctionDeclaration'
						? 'TSDeclareFunction'
						: s === 'ClassMethod' || s === 'ClassPrivateMethod'
						? 'TSDeclareMethod'
						: void 0;
				return r && !this.match(5) && this.isLineTerminator()
					? this.finishNode(e, r)
					: r === 'TSDeclareFunction' &&
					  this.state.isAmbientContext &&
					  (this.raise(y.DeclareFunctionHasImplementation, { at: e }),
					  e.declare)
					? super.parseFunctionBodyAndFinish(e, r, i)
					: (this.tsDisallowOptionalPattern(e),
					  super.parseFunctionBodyAndFinish(e, s, i));
			}
			registerFunctionStatementId(e) {
				!e.body && e.id
					? this.checkIdentifier(e.id, ms)
					: super.registerFunctionStatementId(e);
			}
			tsCheckForInvalidTypeCasts(e) {
				e.forEach((s) => {
					(s == null ? void 0 : s.type) === 'TSTypeCastExpression' &&
						this.raise(y.UnexpectedTypeAnnotation, { at: s.typeAnnotation });
				});
			}
			toReferencedList(e, s) {
				return this.tsCheckForInvalidTypeCasts(e), e;
			}
			parseArrayLike(e, s, i, r) {
				let n = super.parseArrayLike(e, s, i, r);
				return (
					n.type === 'ArrayExpression' &&
						this.tsCheckForInvalidTypeCasts(n.elements),
					n
				);
			}
			parseSubscript(e, s, i, r) {
				if (!this.hasPrecedingLineBreak() && this.match(35)) {
					(this.state.canStartJSXElement = !1), this.next();
					let o = this.startNodeAt(s);
					return (o.expression = e), this.finishNode(o, 'TSNonNullExpression');
				}
				let n = !1;
				if (this.match(18) && this.lookaheadCharCode() === 60) {
					if (i) return (r.stop = !0), e;
					(r.optionalChainMember = n = !0), this.next();
				}
				if (this.match(47) || this.match(51)) {
					let o,
						h = this.tsTryParseAndCatch(() => {
							if (!i && this.atPossibleAsyncArrow(e)) {
								let d = this.tsTryParseGenericAsyncArrowFunction(s);
								if (d) return d;
							}
							let l = this.tsParseTypeArgumentsInExpression();
							if (!l) return;
							if (n && !this.match(10)) {
								o = this.state.curPosition();
								return;
							}
							if (Je(this.state.type)) {
								let d = super.parseTaggedTemplateExpression(e, s, r);
								return (d.typeParameters = l), d;
							}
							if (!i && this.eat(10)) {
								let d = this.startNodeAt(s);
								return (
									(d.callee = e),
									(d.arguments = this.parseCallExpressionArguments(11, !1)),
									this.tsCheckForInvalidTypeCasts(d.arguments),
									(d.typeParameters = l),
									r.optionalChainMember && (d.optional = n),
									this.finishCallExpression(d, r.optionalChainMember)
								);
							}
							let c = this.state.type;
							if (
								c === 48 ||
								c === 52 ||
								(c !== 10 && gt(c) && !this.hasPrecedingLineBreak())
							)
								return;
							let u = this.startNodeAt(s);
							return (
								(u.expression = e),
								(u.typeParameters = l),
								this.finishNode(u, 'TSInstantiationExpression')
							);
						});
					if ((o && this.unexpected(o, 10), h))
						return (
							h.type === 'TSInstantiationExpression' &&
								(this.match(16) ||
									(this.match(18) && this.lookaheadCharCode() !== 40)) &&
								this.raise(
									y.InvalidPropertyAccessAfterInstantiationExpression,
									{ at: this.state.startLoc }
								),
							h
						);
				}
				return super.parseSubscript(e, s, i, r);
			}
			parseNewCallee(e) {
				var s;
				super.parseNewCallee(e);
				let { callee: i } = e;
				i.type === 'TSInstantiationExpression' &&
					!((s = i.extra) != null && s.parenthesized) &&
					((e.typeParameters = i.typeParameters), (e.callee = i.expression));
			}
			parseExprOp(e, s, i) {
				let r;
				if (
					Ve(58) > i &&
					!this.hasPrecedingLineBreak() &&
					(this.isContextual(93) || (r = this.isContextual(118)))
				) {
					let n = this.startNodeAt(s);
					return (
						(n.expression = e),
						(n.typeAnnotation = this.tsInType(
							() => (
								this.next(),
								this.match(75)
									? (r &&
											this.raise(p.UnexpectedKeyword, {
												at: this.state.startLoc,
												keyword: 'const'
											}),
									  this.tsParseTypeReference())
									: this.tsParseType()
							)
						)),
						this.finishNode(n, r ? 'TSSatisfiesExpression' : 'TSAsExpression'),
						this.reScan_lt_gt(),
						this.parseExprOp(n, s, i)
					);
				}
				return super.parseExprOp(e, s, i);
			}
			checkReservedWord(e, s, i, r) {
				this.state.isAmbientContext || super.checkReservedWord(e, s, i, r);
			}
			checkImportReflection(e) {
				super.checkImportReflection(e),
					e.module &&
						e.importKind !== 'value' &&
						this.raise(y.ImportReflectionHasImportType, {
							at: e.specifiers[0].loc.start
						});
			}
			checkDuplicateExports() {}
			isPotentialImportPhase(e) {
				if (super.isPotentialImportPhase(e)) return !0;
				if (this.isContextual(128)) {
					let s = this.lookaheadCharCode();
					return e ? s === 123 || s === 42 : s !== 61;
				}
				return !e && this.isContextual(87);
			}
			applyImportPhase(e, s, i, r) {
				super.applyImportPhase(e, s, i, r),
					s
						? (e.exportKind = i === 'type' ? 'type' : 'value')
						: (e.importKind = i === 'type' || i === 'typeof' ? i : 'value');
			}
			parseImport(e) {
				if (this.match(131))
					return (e.importKind = 'value'), super.parseImport(e);
				let s;
				if (S(this.state.type) && this.lookaheadCharCode() === 61)
					return (
						(e.importKind = 'value'), this.tsParseImportEqualsDeclaration(e)
					);
				if (this.isContextual(128)) {
					let i = this.parseMaybeImportPhase(e, !1);
					if (this.lookaheadCharCode() === 61)
						return this.tsParseImportEqualsDeclaration(e, i);
					s = super.parseImportSpecifiersAndAfter(e, i);
				} else s = super.parseImport(e);
				return (
					s.importKind === 'type' &&
						s.specifiers.length > 1 &&
						s.specifiers[0].type === 'ImportDefaultSpecifier' &&
						this.raise(y.TypeImportCannotSpecifyDefaultAndNamed, { at: s }),
					s
				);
			}
			parseExport(e, s) {
				if (this.match(83)) {
					this.next();
					let i = null;
					return (
						this.isContextual(128) && this.isPotentialImportPhase(!1)
							? (i = this.parseMaybeImportPhase(e, !1))
							: (e.importKind = 'value'),
						this.tsParseImportEqualsDeclaration(e, i, !0)
					);
				} else if (this.eat(29)) {
					let i = e;
					return (
						(i.expression = super.parseExpression()),
						this.semicolon(),
						(this.sawUnambiguousESM = !0),
						this.finishNode(i, 'TSExportAssignment')
					);
				} else if (this.eatContextual(93)) {
					let i = e;
					return (
						this.expectContextual(126),
						(i.id = this.parseIdentifier()),
						this.semicolon(),
						this.finishNode(i, 'TSNamespaceExportDeclaration')
					);
				} else return super.parseExport(e, s);
			}
			isAbstractClass() {
				return this.isContextual(122) && this.lookahead().type === 80;
			}
			parseExportDefaultExpression() {
				if (this.isAbstractClass()) {
					let e = this.startNode();
					return this.next(), (e.abstract = !0), this.parseClass(e, !0, !0);
				}
				if (this.match(127)) {
					let e = this.tsParseInterfaceDeclaration(this.startNode());
					if (e) return e;
				}
				return super.parseExportDefaultExpression();
			}
			parseVarStatement(e, s, i = !1) {
				let { isAmbientContext: r } = this.state,
					n = super.parseVarStatement(e, s, i || r);
				if (!r) return n;
				for (let { id: o, init: h } of n.declarations)
					h &&
						(s !== 'const' || o.typeAnnotation
							? this.raise(y.InitializerNotAllowedInAmbientContext, { at: h })
							: ca(h, this.hasPlugin('estree')) ||
							  this.raise(
									y.ConstInitiailizerMustBeStringOrNumericLiteralOrLiteralEnumReference,
									{ at: h }
							  ));
				return n;
			}
			parseStatementContent(e, s) {
				if (this.match(75) && this.isLookaheadContextual('enum')) {
					let i = this.startNode();
					return this.expect(75), this.tsParseEnumDeclaration(i, { const: !0 });
				}
				if (this.isContextual(124))
					return this.tsParseEnumDeclaration(this.startNode());
				if (this.isContextual(127)) {
					let i = this.tsParseInterfaceDeclaration(this.startNode());
					if (i) return i;
				}
				return super.parseStatementContent(e, s);
			}
			parseAccessModifier() {
				return this.tsParseModifier(['public', 'protected', 'private']);
			}
			tsHasSomeModifiers(e, s) {
				return s.some((i) => (As(i) ? e.accessibility === i : !!e[i]));
			}
			tsIsStartOfStaticBlocks() {
				return this.isContextual(104) && this.lookaheadCharCode() === 123;
			}
			parseClassMember(e, s, i) {
				let r = [
					'declare',
					'private',
					'public',
					'protected',
					'override',
					'abstract',
					'readonly',
					'static'
				];
				this.tsParseModifiers(
					{
						allowedModifiers: r,
						disallowedModifiers: ['in', 'out'],
						stopOnStartOfClassStaticBlock: !0,
						errorTemplate: y.InvalidModifierOnTypeParameterPositions
					},
					s
				);
				let n = () => {
					this.tsIsStartOfStaticBlocks()
						? (this.next(),
						  this.next(),
						  this.tsHasSomeModifiers(s, r) &&
								this.raise(y.StaticBlockCannotHaveModifier, {
									at: this.state.curPosition()
								}),
						  super.parseClassStaticBlock(e, s))
						: this.parseClassMemberWithIsStatic(e, s, i, !!s.static);
				};
				s.declare ? this.tsInAmbientContext(n) : n();
			}
			parseClassMemberWithIsStatic(e, s, i, r) {
				let n = this.tsTryParseIndexSignature(s);
				if (n) {
					e.body.push(n),
						s.abstract && this.raise(y.IndexSignatureHasAbstract, { at: s }),
						s.accessibility &&
							this.raise(y.IndexSignatureHasAccessibility, {
								at: s,
								modifier: s.accessibility
							}),
						s.declare && this.raise(y.IndexSignatureHasDeclare, { at: s }),
						s.override && this.raise(y.IndexSignatureHasOverride, { at: s });
					return;
				}
				!this.state.inAbstractClass &&
					s.abstract &&
					this.raise(y.NonAbstractClassHasAbstractMethod, { at: s }),
					s.override &&
						(i.hadSuperClass || this.raise(y.OverrideNotInSubClass, { at: s })),
					super.parseClassMemberWithIsStatic(e, s, i, r);
			}
			parsePostMemberNameModifiers(e) {
				this.eat(17) && (e.optional = !0),
					e.readonly &&
						this.match(10) &&
						this.raise(y.ClassMethodHasReadonly, { at: e }),
					e.declare &&
						this.match(10) &&
						this.raise(y.ClassMethodHasDeclare, { at: e });
			}
			parseExpressionStatement(e, s, i) {
				return (
					(s.type === 'Identifier'
						? this.tsParseExpressionStatement(e, s, i)
						: void 0) || super.parseExpressionStatement(e, s, i)
				);
			}
			shouldParseExportDeclaration() {
				return this.tsIsDeclarationStart()
					? !0
					: super.shouldParseExportDeclaration();
			}
			parseConditional(e, s, i) {
				if (!this.state.maybeInArrowParameters || !this.match(17))
					return super.parseConditional(e, s, i);
				let r = this.tryParse(() => super.parseConditional(e, s));
				return r.node
					? (r.error && (this.state = r.failState), r.node)
					: (r.error && super.setOptionalParametersError(i, r.error), e);
			}
			parseParenItem(e, s) {
				if (
					((e = super.parseParenItem(e, s)),
					this.eat(17) && ((e.optional = !0), this.resetEndLocation(e)),
					this.match(14))
				) {
					let i = this.startNodeAt(s);
					return (
						(i.expression = e),
						(i.typeAnnotation = this.tsParseTypeAnnotation()),
						this.finishNode(i, 'TSTypeCastExpression')
					);
				}
				return e;
			}
			parseExportDeclaration(e) {
				if (!this.state.isAmbientContext && this.isContextual(123))
					return this.tsInAmbientContext(() => this.parseExportDeclaration(e));
				let s = this.state.startLoc,
					i = this.eatContextual(123);
				if (
					i &&
					(this.isContextual(123) || !this.shouldParseExportDeclaration())
				)
					throw this.raise(y.ExpectedAmbientAfterExportDeclare, {
						at: this.state.startLoc
					});
				let n =
					(S(this.state.type) && this.tsTryParseExportDeclaration()) ||
					super.parseExportDeclaration(e);
				return n
					? ((n.type === 'TSInterfaceDeclaration' ||
							n.type === 'TSTypeAliasDeclaration' ||
							i) &&
							(e.exportKind = 'type'),
					  i && (this.resetStartLocation(n, s), (n.declare = !0)),
					  n)
					: null;
			}
			parseClassId(e, s, i, r) {
				if ((!s || i) && this.isContextual(111)) return;
				super.parseClassId(e, s, i, e.declare ? ms : js);
				let n = this.tsTryParseTypeParameters(this.tsParseInOutConstModifiers);
				n && (e.typeParameters = n);
			}
			parseClassPropertyAnnotation(e) {
				e.optional ||
					(this.eat(35)
						? (e.definite = !0)
						: this.eat(17) && (e.optional = !0));
				let s = this.tsTryParseTypeAnnotation();
				s && (e.typeAnnotation = s);
			}
			parseClassProperty(e) {
				if (
					(this.parseClassPropertyAnnotation(e),
					this.state.isAmbientContext &&
						!(e.readonly && !e.typeAnnotation) &&
						this.match(29) &&
						this.raise(y.DeclareClassFieldHasInitializer, {
							at: this.state.startLoc
						}),
					e.abstract && this.match(29))
				) {
					let { key: s } = e;
					this.raise(y.AbstractPropertyHasInitializer, {
						at: this.state.startLoc,
						propertyName:
							s.type === 'Identifier' && !e.computed
								? s.name
								: `[${this.input.slice(s.start, s.end)}]`
					});
				}
				return super.parseClassProperty(e);
			}
			parseClassPrivateProperty(e) {
				return (
					e.abstract && this.raise(y.PrivateElementHasAbstract, { at: e }),
					e.accessibility &&
						this.raise(y.PrivateElementHasAccessibility, {
							at: e,
							modifier: e.accessibility
						}),
					this.parseClassPropertyAnnotation(e),
					super.parseClassPrivateProperty(e)
				);
			}
			parseClassAccessorProperty(e) {
				return (
					this.parseClassPropertyAnnotation(e),
					e.optional && this.raise(y.AccessorCannotBeOptional, { at: e }),
					super.parseClassAccessorProperty(e)
				);
			}
			pushClassMethod(e, s, i, r, n, o) {
				let h = this.tsTryParseTypeParameters(this.tsParseConstModifier);
				h && n && this.raise(y.ConstructorHasTypeParameters, { at: h });
				let { declare: l = !1, kind: c } = s;
				l &&
					(c === 'get' || c === 'set') &&
					this.raise(y.DeclareAccessor, { at: s, kind: c }),
					h && (s.typeParameters = h),
					super.pushClassMethod(e, s, i, r, n, o);
			}
			pushClassPrivateMethod(e, s, i, r) {
				let n = this.tsTryParseTypeParameters(this.tsParseConstModifier);
				n && (s.typeParameters = n), super.pushClassPrivateMethod(e, s, i, r);
			}
			declareClassPrivateMethodInScope(e, s) {
				e.type !== 'TSDeclareMethod' &&
					((e.type === 'MethodDefinition' && !e.value.body) ||
						super.declareClassPrivateMethodInScope(e, s));
			}
			parseClassSuper(e) {
				super.parseClassSuper(e),
					e.superClass &&
						(this.match(47) || this.match(51)) &&
						(e.superTypeParameters = this.tsParseTypeArgumentsInExpression()),
					this.eatContextual(111) &&
						(e.implements = this.tsParseHeritageClause('implements'));
			}
			parseObjPropValue(e, s, i, r, n, o, h) {
				let l = this.tsTryParseTypeParameters(this.tsParseConstModifier);
				return (
					l && (e.typeParameters = l),
					super.parseObjPropValue(e, s, i, r, n, o, h)
				);
			}
			parseFunctionParams(e, s) {
				let i = this.tsTryParseTypeParameters(this.tsParseConstModifier);
				i && (e.typeParameters = i), super.parseFunctionParams(e, s);
			}
			parseVarId(e, s) {
				super.parseVarId(e, s),
					e.id.type === 'Identifier' &&
						!this.hasPrecedingLineBreak() &&
						this.eat(35) &&
						(e.definite = !0);
				let i = this.tsTryParseTypeAnnotation();
				i && ((e.id.typeAnnotation = i), this.resetEndLocation(e.id));
			}
			parseAsyncArrowFromCallExpression(e, s) {
				return (
					this.match(14) && (e.returnType = this.tsParseTypeAnnotation()),
					super.parseAsyncArrowFromCallExpression(e, s)
				);
			}
			parseMaybeAssign(e, s) {
				var i, r, n, o, h;
				let l, c, u;
				if (this.hasPlugin('jsx') && (this.match(140) || this.match(47))) {
					if (
						((l = this.state.clone()),
						(c = this.tryParse(() => super.parseMaybeAssign(e, s), l)),
						!c.error)
					)
						return c.node;
					let { context: x } = this.state,
						I = x[x.length - 1];
					(I === E.j_oTag || I === E.j_expr) && x.pop();
				}
				if (!((i = c) != null && i.error) && !this.match(47))
					return super.parseMaybeAssign(e, s);
				(!l || l === this.state) && (l = this.state.clone());
				let d,
					f = this.tryParse((x) => {
						var I, C;
						d = this.tsParseTypeParameters(this.tsParseConstModifier);
						let w = super.parseMaybeAssign(e, s);
						return (
							(w.type !== 'ArrowFunctionExpression' ||
								((I = w.extra) != null && I.parenthesized)) &&
								x(),
							((C = d) == null ? void 0 : C.params.length) !== 0 &&
								this.resetStartLocationFromNode(w, d),
							(w.typeParameters = d),
							w
						);
					}, l);
				if (!f.error && !f.aborted)
					return d && this.reportReservedArrowTypeParam(d), f.node;
				if (
					!c &&
					(bs(!this.hasPlugin('jsx')),
					(u = this.tryParse(() => super.parseMaybeAssign(e, s), l)),
					!u.error)
				)
					return u.node;
				if ((r = c) != null && r.node)
					return (this.state = c.failState), c.node;
				if (f.node)
					return (
						(this.state = f.failState),
						d && this.reportReservedArrowTypeParam(d),
						f.node
					);
				if ((n = u) != null && n.node)
					return (this.state = u.failState), u.node;
				throw (
					((o = c) == null ? void 0 : o.error) ||
					f.error ||
					((h = u) == null ? void 0 : h.error)
				);
			}
			reportReservedArrowTypeParam(e) {
				var s;
				e.params.length === 1 &&
					!e.params[0].constraint &&
					!((s = e.extra) != null && s.trailingComma) &&
					this.getPluginOption('typescript', 'disallowAmbiguousJSXLike') &&
					this.raise(y.ReservedArrowTypeParam, { at: e });
			}
			parseMaybeUnary(e, s) {
				return !this.hasPlugin('jsx') && this.match(47)
					? this.tsParseTypeAssertion()
					: super.parseMaybeUnary(e, s);
			}
			parseArrow(e) {
				if (this.match(14)) {
					let s = this.tryParse((i) => {
						let r = this.tsParseTypeOrTypePredicateAnnotation(14);
						return (this.canInsertSemicolon() || !this.match(19)) && i(), r;
					});
					if (s.aborted) return;
					s.thrown ||
						(s.error && (this.state = s.failState), (e.returnType = s.node));
				}
				return super.parseArrow(e);
			}
			parseAssignableListItemTypes(e, s) {
				if (!(s & 2)) return e;
				this.eat(17) && (e.optional = !0);
				let i = this.tsTryParseTypeAnnotation();
				return i && (e.typeAnnotation = i), this.resetEndLocation(e), e;
			}
			isAssignable(e, s) {
				switch (e.type) {
					case 'TSTypeCastExpression':
						return this.isAssignable(e.expression, s);
					case 'TSParameterProperty':
						return !0;
					default:
						return super.isAssignable(e, s);
				}
			}
			toAssignable(e, s = !1) {
				switch (e.type) {
					case 'ParenthesizedExpression':
						this.toAssignableParenthesizedExpression(e, s);
						break;
					case 'TSAsExpression':
					case 'TSSatisfiesExpression':
					case 'TSNonNullExpression':
					case 'TSTypeAssertion':
						s
							? this.expressionScope.recordArrowParameterBindingError(
									y.UnexpectedTypeCastInParameter,
									{ at: e }
							  )
							: this.raise(y.UnexpectedTypeCastInParameter, { at: e }),
							this.toAssignable(e.expression, s);
						break;
					case 'AssignmentExpression':
						!s &&
							e.left.type === 'TSTypeCastExpression' &&
							(e.left = this.typeCastToParameter(e.left));
					default:
						super.toAssignable(e, s);
				}
			}
			toAssignableParenthesizedExpression(e, s) {
				switch (e.expression.type) {
					case 'TSAsExpression':
					case 'TSSatisfiesExpression':
					case 'TSNonNullExpression':
					case 'TSTypeAssertion':
					case 'ParenthesizedExpression':
						this.toAssignable(e.expression, s);
						break;
					default:
						super.toAssignable(e, s);
				}
			}
			checkToRestConversion(e, s) {
				switch (e.type) {
					case 'TSAsExpression':
					case 'TSSatisfiesExpression':
					case 'TSTypeAssertion':
					case 'TSNonNullExpression':
						this.checkToRestConversion(e.expression, !1);
						break;
					default:
						super.checkToRestConversion(e, s);
				}
			}
			isValidLVal(e, s, i) {
				return (
					ra(
						{
							TSTypeCastExpression: !0,
							TSParameterProperty: 'parameter',
							TSNonNullExpression: 'expression',
							TSAsExpression: (i !== W || !s) && ['expression', !0],
							TSSatisfiesExpression: (i !== W || !s) && ['expression', !0],
							TSTypeAssertion: (i !== W || !s) && ['expression', !0]
						},
						e
					) || super.isValidLVal(e, s, i)
				);
			}
			parseBindingAtom() {
				return this.state.type === 78
					? this.parseIdentifier(!0)
					: super.parseBindingAtom();
			}
			parseMaybeDecoratorArguments(e) {
				if (this.match(47) || this.match(51)) {
					let s = this.tsParseTypeArgumentsInExpression();
					if (this.match(10)) {
						let i = super.parseMaybeDecoratorArguments(e);
						return (i.typeParameters = s), i;
					}
					this.unexpected(null, 10);
				}
				return super.parseMaybeDecoratorArguments(e);
			}
			checkCommaAfterRest(e) {
				return this.state.isAmbientContext &&
					this.match(12) &&
					this.lookaheadCharCode() === e
					? (this.next(), !1)
					: super.checkCommaAfterRest(e);
			}
			isClassMethod() {
				return this.match(47) || super.isClassMethod();
			}
			isClassProperty() {
				return this.match(35) || this.match(14) || super.isClassProperty();
			}
			parseMaybeDefault(e, s) {
				let i = super.parseMaybeDefault(e, s);
				return (
					i.type === 'AssignmentPattern' &&
						i.typeAnnotation &&
						i.right.start < i.typeAnnotation.start &&
						this.raise(y.TypeAnnotationAfterAssign, { at: i.typeAnnotation }),
					i
				);
			}
			getTokenFromCode(e) {
				if (this.state.inType) {
					if (e === 62) {
						this.finishOp(48, 1);
						return;
					}
					if (e === 60) {
						this.finishOp(47, 1);
						return;
					}
				}
				super.getTokenFromCode(e);
			}
			reScan_lt_gt() {
				let { type: e } = this.state;
				e === 47
					? ((this.state.pos -= 1), this.readToken_lt())
					: e === 48 && ((this.state.pos -= 1), this.readToken_gt());
			}
			reScan_lt() {
				let { type: e } = this.state;
				return e === 51 ? ((this.state.pos -= 2), this.finishOp(47, 1), 47) : e;
			}
			toAssignableList(e, s, i) {
				for (let r = 0; r < e.length; r++) {
					let n = e[r];
					(n == null ? void 0 : n.type) === 'TSTypeCastExpression' &&
						(e[r] = this.typeCastToParameter(n));
				}
				super.toAssignableList(e, s, i);
			}
			typeCastToParameter(e) {
				return (
					(e.expression.typeAnnotation = e.typeAnnotation),
					this.resetEndLocation(e.expression, e.typeAnnotation.loc.end),
					e.expression
				);
			}
			shouldParseArrow(e) {
				return this.match(14)
					? e.every((s) => this.isAssignable(s, !0))
					: super.shouldParseArrow(e);
			}
			shouldParseAsyncArrow() {
				return this.match(14) || super.shouldParseAsyncArrow();
			}
			canHaveLeadingDecorator() {
				return super.canHaveLeadingDecorator() || this.isAbstractClass();
			}
			jsxParseOpeningElementAfterName(e) {
				if (this.match(47) || this.match(51)) {
					let s = this.tsTryParseAndCatch(() =>
						this.tsParseTypeArgumentsInExpression()
					);
					s && (e.typeParameters = s);
				}
				return super.jsxParseOpeningElementAfterName(e);
			}
			getGetterSetterExpectedParamCount(e) {
				let s = super.getGetterSetterExpectedParamCount(e),
					r = this.getObjectOrClassMethodParams(e)[0];
				return r && this.isThisParam(r) ? s + 1 : s;
			}
			parseCatchClauseParam() {
				let e = super.parseCatchClauseParam(),
					s = this.tsTryParseTypeAnnotation();
				return s && ((e.typeAnnotation = s), this.resetEndLocation(e)), e;
			}
			tsInAmbientContext(e) {
				let s = this.state.isAmbientContext;
				this.state.isAmbientContext = !0;
				try {
					return e();
				} finally {
					this.state.isAmbientContext = s;
				}
			}
			parseClass(e, s, i) {
				let r = this.state.inAbstractClass;
				this.state.inAbstractClass = !!e.abstract;
				try {
					return super.parseClass(e, s, i);
				} finally {
					this.state.inAbstractClass = r;
				}
			}
			tsParseAbstractDeclaration(e, s) {
				if (this.match(80))
					return (
						(e.abstract = !0),
						this.maybeTakeDecorators(s, this.parseClass(e, !0, !1))
					);
				if (this.isContextual(127)) {
					if (!this.hasFollowingLineBreak())
						return (
							(e.abstract = !0),
							this.raise(y.NonClassMethodPropertyHasAbstractModifer, { at: e }),
							this.tsParseInterfaceDeclaration(e)
						);
				} else this.unexpected(null, 80);
			}
			parseMethod(e, s, i, r, n, o, h) {
				let l = super.parseMethod(e, s, i, r, n, o, h);
				if (
					l.abstract &&
					(this.hasPlugin('estree') ? !!l.value.body : !!l.body)
				) {
					let { key: u } = l;
					this.raise(y.AbstractMethodHasImplementation, {
						at: l,
						methodName:
							u.type === 'Identifier' && !l.computed
								? u.name
								: `[${this.input.slice(u.start, u.end)}]`
					});
				}
				return l;
			}
			tsParseTypeParameterName() {
				return this.parseIdentifier().name;
			}
			shouldParseAsAmbientContext() {
				return !!this.getPluginOption('typescript', 'dts');
			}
			parse() {
				return (
					this.shouldParseAsAmbientContext() &&
						(this.state.isAmbientContext = !0),
					super.parse()
				);
			}
			getExpression() {
				return (
					this.shouldParseAsAmbientContext() &&
						(this.state.isAmbientContext = !0),
					super.getExpression()
				);
			}
			parseExportSpecifier(e, s, i, r) {
				return !s && r
					? (this.parseTypeOnlyImportExportSpecifier(e, !1, i),
					  this.finishNode(e, 'ExportSpecifier'))
					: ((e.exportKind = 'value'), super.parseExportSpecifier(e, s, i, r));
			}
			parseImportSpecifier(e, s, i, r, n) {
				return !s && r
					? (this.parseTypeOnlyImportExportSpecifier(e, !0, i),
					  this.finishNode(e, 'ImportSpecifier'))
					: ((e.importKind = 'value'),
					  super.parseImportSpecifier(e, s, i, r, i ? ys : Ne));
			}
			parseTypeOnlyImportExportSpecifier(e, s, i) {
				let r = s ? 'imported' : 'local',
					n = s ? 'local' : 'exported',
					o = e[r],
					h,
					l = !1,
					c = !0,
					u = o.loc.start;
				if (this.isContextual(93)) {
					let f = this.parseIdentifier();
					if (this.isContextual(93)) {
						let x = this.parseIdentifier();
						M(this.state.type)
							? ((l = !0),
							  (o = f),
							  (h = s ? this.parseIdentifier() : this.parseModuleExportName()),
							  (c = !1))
							: ((h = x), (c = !1));
					} else
						M(this.state.type)
							? ((c = !1),
							  (h = s ? this.parseIdentifier() : this.parseModuleExportName()))
							: ((l = !0), (o = f));
				} else
					M(this.state.type) &&
						((l = !0),
						s
							? ((o = this.parseIdentifier(!0)),
							  this.isContextual(93) ||
									this.checkReservedWord(o.name, o.loc.start, !0, !0))
							: (o = this.parseModuleExportName()));
				l &&
					i &&
					this.raise(
						s
							? y.TypeModifierIsUsedInTypeImports
							: y.TypeModifierIsUsedInTypeExports,
						{ at: u }
					),
					(e[r] = o),
					(e[n] = h);
				let d = s ? 'importKind' : 'exportKind';
				(e[d] = l ? 'type' : 'value'),
					c &&
						this.eatContextual(93) &&
						(e[n] = s ? this.parseIdentifier() : this.parseModuleExportName()),
					e[n] || (e[n] = K(e[r])),
					s && this.checkIdentifier(e[n], l ? ys : Ne);
			}
		};
	function la(a) {
		if (a.type !== 'MemberExpression') return !1;
		let { computed: t, property: e } = a;
		return t &&
			e.type !== 'StringLiteral' &&
			(e.type !== 'TemplateLiteral' || e.expressions.length > 0)
			? !1
			: ei(a.object);
	}
	function ca(a, t) {
		var e;
		let { type: s } = a;
		if ((e = a.extra) != null && e.parenthesized) return !1;
		if (t) {
			if (s === 'Literal') {
				let { value: i } = a;
				if (typeof i == 'string' || typeof i == 'boolean') return !0;
			}
		} else if (s === 'StringLiteral' || s === 'BooleanLiteral') return !0;
		return !!(
			Zs(a, t) ||
			pa(a, t) ||
			(s === 'TemplateLiteral' && a.expressions.length === 0) ||
			la(a)
		);
	}
	function Zs(a, t) {
		return t
			? a.type === 'Literal' && (typeof a.value == 'number' || 'bigint' in a)
			: a.type === 'NumericLiteral' || a.type === 'BigIntLiteral';
	}
	function pa(a, t) {
		if (a.type === 'UnaryExpression') {
			let { operator: e, argument: s } = a;
			if (e === '-' && Zs(s, t)) return !0;
		}
		return !1;
	}
	function ei(a) {
		return a.type === 'Identifier'
			? !0
			: a.type !== 'MemberExpression' || a.computed
			? !1
			: ei(a.object);
	}
	var Ss = V`placeholders`({
			ClassNameIsRequired: 'A class name is required.',
			UnexpectedSpace: 'Unexpected space in placeholder.'
		}),
		ua = (a) =>
			class extends a {
				parsePlaceholder(e) {
					if (this.match(142)) {
						let s = this.startNode();
						return (
							this.next(),
							this.assertNoSpace(),
							(s.name = super.parseIdentifier(!0)),
							this.assertNoSpace(),
							this.expect(142),
							this.finishPlaceholder(s, e)
						);
					}
				}
				finishPlaceholder(e, s) {
					let i = !!(e.expectedNode && e.type === 'Placeholder');
					return (
						(e.expectedNode = s), i ? e : this.finishNode(e, 'Placeholder')
					);
				}
				getTokenFromCode(e) {
					e === 37 && this.input.charCodeAt(this.state.pos + 1) === 37
						? this.finishOp(142, 2)
						: super.getTokenFromCode(e);
				}
				parseExprAtom(e) {
					return this.parsePlaceholder('Expression') || super.parseExprAtom(e);
				}
				parseIdentifier(e) {
					return (
						this.parsePlaceholder('Identifier') || super.parseIdentifier(e)
					);
				}
				checkReservedWord(e, s, i, r) {
					e !== void 0 && super.checkReservedWord(e, s, i, r);
				}
				parseBindingAtom() {
					return this.parsePlaceholder('Pattern') || super.parseBindingAtom();
				}
				isValidLVal(e, s, i) {
					return e === 'Placeholder' || super.isValidLVal(e, s, i);
				}
				toAssignable(e, s) {
					e && e.type === 'Placeholder' && e.expectedNode === 'Expression'
						? (e.expectedNode = 'Pattern')
						: super.toAssignable(e, s);
				}
				chStartsBindingIdentifier(e, s) {
					return !!(
						super.chStartsBindingIdentifier(e, s) ||
						this.lookahead().type === 142
					);
				}
				verifyBreakContinue(e, s) {
					(e.label && e.label.type === 'Placeholder') ||
						super.verifyBreakContinue(e, s);
				}
				parseExpressionStatement(e, s) {
					if (s.type !== 'Placeholder' || (s.extra && s.extra.parenthesized))
						return super.parseExpressionStatement(e, s);
					if (this.match(14)) {
						let i = e;
						return (
							(i.label = this.finishPlaceholder(s, 'Identifier')),
							this.next(),
							(i.body =
								super.parseStatementOrSloppyAnnexBFunctionDeclaration()),
							this.finishNode(i, 'LabeledStatement')
						);
					}
					return (
						this.semicolon(),
						(e.name = s.name),
						this.finishPlaceholder(e, 'Statement')
					);
				}
				parseBlock(e, s, i) {
					return (
						this.parsePlaceholder('BlockStatement') || super.parseBlock(e, s, i)
					);
				}
				parseFunctionId(e) {
					return (
						this.parsePlaceholder('Identifier') || super.parseFunctionId(e)
					);
				}
				parseClass(e, s, i) {
					let r = s ? 'ClassDeclaration' : 'ClassExpression';
					this.next();
					let n = this.state.strict,
						o = this.parsePlaceholder('Identifier');
					if (o)
						if (this.match(81) || this.match(142) || this.match(5)) e.id = o;
						else {
							if (i || !s)
								return (
									(e.id = null),
									(e.body = this.finishPlaceholder(o, 'ClassBody')),
									this.finishNode(e, r)
								);
							throw this.raise(Ss.ClassNameIsRequired, {
								at: this.state.startLoc
							});
						}
					else this.parseClassId(e, s, i);
					return (
						super.parseClassSuper(e),
						(e.body =
							this.parsePlaceholder('ClassBody') ||
							super.parseClassBody(!!e.superClass, n)),
						this.finishNode(e, r)
					);
				}
				parseExport(e, s) {
					let i = this.parsePlaceholder('Identifier');
					if (!i) return super.parseExport(e, s);
					if (!this.isContextual(97) && !this.match(12))
						return (
							(e.specifiers = []),
							(e.source = null),
							(e.declaration = this.finishPlaceholder(i, 'Declaration')),
							this.finishNode(e, 'ExportNamedDeclaration')
						);
					this.expectPlugin('exportDefaultFrom');
					let r = this.startNode();
					return (
						(r.exported = i),
						(e.specifiers = [this.finishNode(r, 'ExportDefaultSpecifier')]),
						super.parseExport(e, s)
					);
				}
				isExportDefaultSpecifier() {
					if (this.match(65)) {
						let e = this.nextTokenStart();
						if (
							this.isUnparsedContextual(e, 'from') &&
							this.input.startsWith(J(142), this.nextTokenStartSince(e + 4))
						)
							return !0;
					}
					return super.isExportDefaultSpecifier();
				}
				maybeParseExportDefaultSpecifier(e, s) {
					var i;
					return (i = e.specifiers) != null && i.length
						? !0
						: super.maybeParseExportDefaultSpecifier(e, s);
				}
				checkExport(e) {
					let { specifiers: s } = e;
					s != null &&
						s.length &&
						(e.specifiers = s.filter((i) => i.exported.type === 'Placeholder')),
						super.checkExport(e),
						(e.specifiers = s);
				}
				parseImport(e) {
					let s = this.parsePlaceholder('Identifier');
					if (!s) return super.parseImport(e);
					if (((e.specifiers = []), !this.isContextual(97) && !this.match(12)))
						return (
							(e.source = this.finishPlaceholder(s, 'StringLiteral')),
							this.semicolon(),
							this.finishNode(e, 'ImportDeclaration')
						);
					let i = this.startNodeAtNode(s);
					return (
						(i.local = s),
						e.specifiers.push(this.finishNode(i, 'ImportDefaultSpecifier')),
						this.eat(12) &&
							(this.maybeParseStarImportSpecifier(e) ||
								this.parseNamedImportSpecifiers(e)),
						this.expectContextual(97),
						(e.source = this.parseImportSource()),
						this.semicolon(),
						this.finishNode(e, 'ImportDeclaration')
					);
				}
				parseImportSource() {
					return (
						this.parsePlaceholder('StringLiteral') || super.parseImportSource()
					);
				}
				assertNoSpace() {
					this.state.start > this.state.lastTokEndLoc.index &&
						this.raise(Ss.UnexpectedSpace, { at: this.state.lastTokEndLoc });
				}
			},
		fa = (a) =>
			class extends a {
				parseV8Intrinsic() {
					if (this.match(54)) {
						let e = this.state.startLoc,
							s = this.startNode();
						if ((this.next(), S(this.state.type))) {
							let i = this.parseIdentifierName(),
								r = this.createIdentifier(s, i);
							if (((r.type = 'V8IntrinsicIdentifier'), this.match(10)))
								return r;
						}
						this.unexpected(e);
					}
				}
				parseExprAtom(e) {
					return this.parseV8Intrinsic() || super.parseExprAtom(e);
				}
			};
	function k(a, t) {
		let [e, s] = typeof t == 'string' ? [t, {}] : t,
			i = Object.keys(s),
			r = i.length === 0;
		return a.some((n) => {
			if (typeof n == 'string') return r && n === e;
			{
				let [o, h] = n;
				if (o !== e) return !1;
				for (let l of i) if (h[l] !== s[l]) return !1;
				return !0;
			}
		});
	}
	function Q(a, t, e) {
		let s = a.find((i) => (Array.isArray(i) ? i[0] === t : i === t));
		return s && Array.isArray(s) && s.length > 1 ? s[1][e] : null;
	}
	var Es = ['minimal', 'fsharp', 'hack', 'smart'],
		Cs = ['^^', '@@', '^', '%', '#'],
		ws = ['hash', 'bar'];
	function da(a) {
		if (k(a, 'decorators')) {
			if (k(a, 'decorators-legacy'))
				throw new Error(
					'Cannot use the decorators and decorators-legacy plugin together'
				);
			let t = Q(a, 'decorators', 'decoratorsBeforeExport');
			if (t != null && typeof t != 'boolean')
				throw new Error(
					"'decoratorsBeforeExport' must be a boolean, if specified."
				);
			let e = Q(a, 'decorators', 'allowCallParenthesized');
			if (e != null && typeof e != 'boolean')
				throw new Error("'allowCallParenthesized' must be a boolean.");
		}
		if (k(a, 'flow') && k(a, 'typescript'))
			throw new Error('Cannot combine flow and typescript plugins.');
		if (k(a, 'placeholders') && k(a, 'v8intrinsic'))
			throw new Error('Cannot combine placeholders and v8intrinsic plugins.');
		if (k(a, 'pipelineOperator')) {
			let t = Q(a, 'pipelineOperator', 'proposal');
			if (!Es.includes(t)) {
				let s = Es.map((i) => `"${i}"`).join(', ');
				throw new Error(
					`"pipelineOperator" requires "proposal" option whose value must be one of: ${s}.`
				);
			}
			let e = k(a, ['recordAndTuple', { syntaxType: 'hash' }]);
			if (t === 'hack') {
				if (k(a, 'placeholders'))
					throw new Error(
						'Cannot combine placeholders plugin and Hack-style pipes.'
					);
				if (k(a, 'v8intrinsic'))
					throw new Error(
						'Cannot combine v8intrinsic plugin and Hack-style pipes.'
					);
				let s = Q(a, 'pipelineOperator', 'topicToken');
				if (!Cs.includes(s)) {
					let i = Cs.map((r) => `"${r}"`).join(', ');
					throw new Error(
						`"pipelineOperator" in "proposal": "hack" mode also requires a "topicToken" option whose value must be one of: ${i}.`
					);
				}
				if (s === '#' && e)
					throw new Error(
						'Plugin conflict between `["pipelineOperator", { proposal: "hack", topicToken: "#" }]` and `["recordAndtuple", { syntaxType: "hash"}]`.'
					);
			} else if (t === 'smart' && e)
				throw new Error(
					'Plugin conflict between `["pipelineOperator", { proposal: "smart" }]` and `["recordAndtuple", { syntaxType: "hash"}]`.'
				);
		}
		if (k(a, 'moduleAttributes')) {
			if (k(a, 'importAssertions') || k(a, 'importAttributes'))
				throw new Error(
					'Cannot combine importAssertions, importAttributes and moduleAttributes plugins.'
				);
			if (Q(a, 'moduleAttributes', 'version') !== 'may-2020')
				throw new Error(
					"The 'moduleAttributes' plugin requires a 'version' option, representing the last proposal update. Currently, the only supported value is 'may-2020'."
				);
		}
		if (k(a, 'importAssertions') && k(a, 'importAttributes'))
			throw new Error(
				'Cannot combine importAssertions and importAttributes plugins.'
			);
		if (
			k(a, 'recordAndTuple') &&
			Q(a, 'recordAndTuple', 'syntaxType') != null &&
			!ws.includes(Q(a, 'recordAndTuple', 'syntaxType'))
		)
			throw new Error(
				"The 'syntaxType' option of the 'recordAndTuple' plugin must be one of: " +
					ws.map((t) => `'${t}'`).join(', ')
			);
		if (k(a, 'asyncDoExpressions') && !k(a, 'doExpressions')) {
			let t = new Error(
				"'asyncDoExpressions' requires 'doExpressions', please add 'doExpressions' to parser plugins."
			);
			throw ((t.missingPlugins = 'doExpressions'), t);
		}
	}
	var ti = {
			estree: sr,
			jsx: sa,
			flow: ta,
			typescript: ha,
			v8intrinsic: fa,
			placeholders: ua
		},
		ma = Object.keys(ti),
		Is = {
			sourceType: 'script',
			sourceFilename: void 0,
			startColumn: 0,
			startLine: 1,
			allowAwaitOutsideFunction: !1,
			allowReturnOutsideFunction: !1,
			allowNewTargetOutsideFunction: !1,
			allowImportExportEverywhere: !1,
			allowSuperOutsideMethod: !1,
			allowUndeclaredExports: !1,
			plugins: [],
			strictMode: null,
			ranges: !1,
			tokens: !1,
			createParenthesizedExpressions: !1,
			errorRecovery: !1,
			attachComment: !0,
			annexB: !0
		};
	function ya(a) {
		if (a && a.annexB != null && a.annexB !== !1)
			throw new Error('The `annexB` option can only be set to `false`.');
		let t = {};
		for (let e of Object.keys(Is)) t[e] = a && a[e] != null ? a[e] : Is[e];
		return t;
	}
	var $t = class extends jt {
			checkProto(t, e, s, i) {
				if (
					t.type === 'SpreadElement' ||
					this.isObjectMethod(t) ||
					t.computed ||
					t.shorthand
				)
					return;
				let r = t.key;
				if ((r.type === 'Identifier' ? r.name : r.value) === '__proto__') {
					if (e) {
						this.raise(p.RecordNoProto, { at: r });
						return;
					}
					s.used &&
						(i
							? i.doubleProtoLoc === null && (i.doubleProtoLoc = r.loc.start)
							: this.raise(p.DuplicateProto, { at: r })),
						(s.used = !0);
				}
			}
			shouldExitDescending(t, e) {
				return t.type === 'ArrowFunctionExpression' && t.start === e;
			}
			getExpression() {
				this.enterInitialScopes(), this.nextToken();
				let t = this.parseExpression();
				return (
					this.match(137) || this.unexpected(),
					this.finalizeRemainingComments(),
					(t.comments = this.state.comments),
					(t.errors = this.state.errors),
					this.options.tokens && (t.tokens = this.tokens),
					t
				);
			}
			parseExpression(t, e) {
				return t
					? this.disallowInAnd(() => this.parseExpressionBase(e))
					: this.allowInAnd(() => this.parseExpressionBase(e));
			}
			parseExpressionBase(t) {
				let e = this.state.startLoc,
					s = this.parseMaybeAssign(t);
				if (this.match(12)) {
					let i = this.startNodeAt(e);
					for (i.expressions = [s]; this.eat(12); )
						i.expressions.push(this.parseMaybeAssign(t));
					return (
						this.toReferencedList(i.expressions),
						this.finishNode(i, 'SequenceExpression')
					);
				}
				return s;
			}
			parseMaybeAssignDisallowIn(t, e) {
				return this.disallowInAnd(() => this.parseMaybeAssign(t, e));
			}
			parseMaybeAssignAllowIn(t, e) {
				return this.allowInAnd(() => this.parseMaybeAssign(t, e));
			}
			setOptionalParametersError(t, e) {
				var s;
				t.optionalParametersLoc =
					(s = e == null ? void 0 : e.loc) != null ? s : this.state.startLoc;
			}
			parseMaybeAssign(t, e) {
				let s = this.state.startLoc;
				if (this.isContextual(106) && this.prodParam.hasYield) {
					let o = this.parseYield();
					return e && (o = e.call(this, o, s)), o;
				}
				let i;
				t ? (i = !1) : ((t = new ue()), (i = !0));
				let { type: r } = this.state;
				(r === 10 || S(r)) && (this.state.potentialArrowAt = this.state.start);
				let n = this.parseMaybeConditional(t);
				if ((e && (n = e.call(this, n, s)), or(this.state.type))) {
					let o = this.startNodeAt(s),
						h = this.state.value;
					if (((o.operator = h), this.match(29))) {
						this.toAssignable(n, !0), (o.left = n);
						let l = s.index;
						t.doubleProtoLoc != null &&
							t.doubleProtoLoc.index >= l &&
							(t.doubleProtoLoc = null),
							t.shorthandAssignLoc != null &&
								t.shorthandAssignLoc.index >= l &&
								(t.shorthandAssignLoc = null),
							t.privateKeyLoc != null &&
								t.privateKeyLoc.index >= l &&
								(this.checkDestructuringPrivate(t), (t.privateKeyLoc = null));
					} else o.left = n;
					return (
						this.next(),
						(o.right = this.parseMaybeAssign()),
						this.checkLVal(n, {
							in: this.finishNode(o, 'AssignmentExpression')
						}),
						o
					);
				} else i && this.checkExpressionErrors(t, !0);
				return n;
			}
			parseMaybeConditional(t) {
				let e = this.state.startLoc,
					s = this.state.potentialArrowAt,
					i = this.parseExprOps(t);
				return this.shouldExitDescending(i, s)
					? i
					: this.parseConditional(i, e, t);
			}
			parseConditional(t, e, s) {
				if (this.eat(17)) {
					let i = this.startNodeAt(e);
					return (
						(i.test = t),
						(i.consequent = this.parseMaybeAssignAllowIn()),
						this.expect(14),
						(i.alternate = this.parseMaybeAssign()),
						this.finishNode(i, 'ConditionalExpression')
					);
				}
				return t;
			}
			parseMaybeUnaryOrPrivate(t) {
				return this.match(136)
					? this.parsePrivateName()
					: this.parseMaybeUnary(t);
			}
			parseExprOps(t) {
				let e = this.state.startLoc,
					s = this.state.potentialArrowAt,
					i = this.parseMaybeUnaryOrPrivate(t);
				return this.shouldExitDescending(i, s) ? i : this.parseExprOp(i, e, -1);
			}
			parseExprOp(t, e, s) {
				if (this.isPrivateName(t)) {
					let r = this.getPrivateNameSV(t);
					(s >= Ve(58) || !this.prodParam.hasIn || !this.match(58)) &&
						this.raise(p.PrivateInExpectedIn, { at: t, identifierName: r }),
						this.classScope.usePrivateName(r, t.loc.start);
				}
				let i = this.state.type;
				if (lr(i) && (this.prodParam.hasIn || !this.match(58))) {
					let r = Ve(i);
					if (r > s) {
						if (i === 39) {
							if (
								(this.expectPlugin('pipelineOperator'),
								this.state.inFSharpPipelineDirectBody)
							)
								return t;
							this.checkPipelineAtInfixOperator(t, e);
						}
						let n = this.startNodeAt(e);
						(n.left = t), (n.operator = this.state.value);
						let o = i === 41 || i === 42,
							h = i === 40;
						if (
							(h && (r = Ve(42)),
							this.next(),
							i === 39 &&
								this.hasPlugin(['pipelineOperator', { proposal: 'minimal' }]) &&
								this.state.type === 96 &&
								this.prodParam.hasAwait)
						)
							throw this.raise(p.UnexpectedAwaitAfterPipelineBody, {
								at: this.state.startLoc
							});
						n.right = this.parseExprOpRightExpr(i, r);
						let l = this.finishNode(
								n,
								o || h ? 'LogicalExpression' : 'BinaryExpression'
							),
							c = this.state.type;
						if ((h && (c === 41 || c === 42)) || (o && c === 40))
							throw this.raise(p.MixingCoalesceWithLogical, {
								at: this.state.startLoc
							});
						return this.parseExprOp(l, e, s);
					}
				}
				return t;
			}
			parseExprOpRightExpr(t, e) {
				let s = this.state.startLoc;
				switch (t) {
					case 39:
						switch (this.getPluginOption('pipelineOperator', 'proposal')) {
							case 'hack':
								return this.withTopicBindingContext(() =>
									this.parseHackPipeBody()
								);
							case 'smart':
								return this.withTopicBindingContext(() => {
									if (this.prodParam.hasYield && this.isContextual(106))
										throw this.raise(p.PipeBodyIsTighter, {
											at: this.state.startLoc
										});
									return this.parseSmartPipelineBodyInStyle(
										this.parseExprOpBaseRightExpr(t, e),
										s
									);
								});
							case 'fsharp':
								return this.withSoloAwaitPermittingContext(() =>
									this.parseFSharpPipelineBody(e)
								);
						}
					default:
						return this.parseExprOpBaseRightExpr(t, e);
				}
			}
			parseExprOpBaseRightExpr(t, e) {
				let s = this.state.startLoc;
				return this.parseExprOp(
					this.parseMaybeUnaryOrPrivate(),
					s,
					dr(t) ? e - 1 : e
				);
			}
			parseHackPipeBody() {
				var t;
				let { startLoc: e } = this.state,
					s = this.parseMaybeAssign();
				return (
					Gi.has(s.type) &&
						!((t = s.extra) != null && t.parenthesized) &&
						this.raise(p.PipeUnparenthesizedBody, { at: e, type: s.type }),
					this.topicReferenceWasUsedInCurrentContext() ||
						this.raise(p.PipeTopicUnused, { at: e }),
					s
				);
			}
			checkExponentialAfterUnary(t) {
				this.match(57) &&
					this.raise(p.UnexpectedTokenUnaryExponentiation, { at: t.argument });
			}
			parseMaybeUnary(t, e) {
				let s = this.state.startLoc,
					i = this.isContextual(96);
				if (i && this.isAwaitAllowed()) {
					this.next();
					let h = this.parseAwait(s);
					return e || this.checkExponentialAfterUnary(h), h;
				}
				let r = this.match(34),
					n = this.startNode();
				if (pr(this.state.type)) {
					(n.operator = this.state.value),
						(n.prefix = !0),
						this.match(72) && this.expectPlugin('throwExpressions');
					let h = this.match(89);
					if (
						(this.next(),
						(n.argument = this.parseMaybeUnary(null, !0)),
						this.checkExpressionErrors(t, !0),
						this.state.strict && h)
					) {
						let l = n.argument;
						l.type === 'Identifier'
							? this.raise(p.StrictDelete, { at: n })
							: this.hasPropertyAsPrivateName(l) &&
							  this.raise(p.DeletePrivateField, { at: n });
					}
					if (!r)
						return (
							e || this.checkExponentialAfterUnary(n),
							this.finishNode(n, 'UnaryExpression')
						);
				}
				let o = this.parseUpdate(n, r, t);
				if (i) {
					let { type: h } = this.state;
					if (
						(this.hasPlugin('v8intrinsic')
							? gt(h)
							: gt(h) && !this.match(54)) &&
						!this.isAmbiguousAwait()
					)
						return (
							this.raiseOverwrite(p.AwaitNotInAsyncContext, { at: s }),
							this.parseAwait(s)
						);
				}
				return o;
			}
			parseUpdate(t, e, s) {
				if (e) {
					let n = t;
					return (
						this.checkLVal(n.argument, {
							in: this.finishNode(n, 'UpdateExpression')
						}),
						t
					);
				}
				let i = this.state.startLoc,
					r = this.parseExprSubscripts(s);
				if (this.checkExpressionErrors(s, !1)) return r;
				for (; cr(this.state.type) && !this.canInsertSemicolon(); ) {
					let n = this.startNodeAt(i);
					(n.operator = this.state.value),
						(n.prefix = !1),
						(n.argument = r),
						this.next(),
						this.checkLVal(r, {
							in: (r = this.finishNode(n, 'UpdateExpression'))
						});
				}
				return r;
			}
			parseExprSubscripts(t) {
				let e = this.state.startLoc,
					s = this.state.potentialArrowAt,
					i = this.parseExprAtom(t);
				return this.shouldExitDescending(i, s) ? i : this.parseSubscripts(i, e);
			}
			parseSubscripts(t, e, s) {
				let i = {
					optionalChainMember: !1,
					maybeAsyncArrow: this.atPossibleAsyncArrow(t),
					stop: !1
				};
				do (t = this.parseSubscript(t, e, s, i)), (i.maybeAsyncArrow = !1);
				while (!i.stop);
				return t;
			}
			parseSubscript(t, e, s, i) {
				let { type: r } = this.state;
				if (!s && r === 15) return this.parseBind(t, e, s, i);
				if (Je(r)) return this.parseTaggedTemplateExpression(t, e, i);
				let n = !1;
				if (r === 18) {
					if (
						s &&
						(this.raise(p.OptionalChainingNoNew, { at: this.state.startLoc }),
						this.lookaheadCharCode() === 40)
					)
						return (i.stop = !0), t;
					(i.optionalChainMember = n = !0), this.next();
				}
				if (!s && this.match(10))
					return this.parseCoverCallAndAsyncArrowHead(t, e, i, n);
				{
					let o = this.eat(0);
					return o || n || this.eat(16)
						? this.parseMember(t, e, i, o, n)
						: ((i.stop = !0), t);
				}
			}
			parseMember(t, e, s, i, r) {
				let n = this.startNodeAt(e);
				return (
					(n.object = t),
					(n.computed = i),
					i
						? ((n.property = this.parseExpression()), this.expect(3))
						: this.match(136)
						? (t.type === 'Super' && this.raise(p.SuperPrivateField, { at: e }),
						  this.classScope.usePrivateName(
								this.state.value,
								this.state.startLoc
						  ),
						  (n.property = this.parsePrivateName()))
						: (n.property = this.parseIdentifier(!0)),
					s.optionalChainMember
						? ((n.optional = r), this.finishNode(n, 'OptionalMemberExpression'))
						: this.finishNode(n, 'MemberExpression')
				);
			}
			parseBind(t, e, s, i) {
				let r = this.startNodeAt(e);
				return (
					(r.object = t),
					this.next(),
					(r.callee = this.parseNoCallExpr()),
					(i.stop = !0),
					this.parseSubscripts(this.finishNode(r, 'BindExpression'), e, s)
				);
			}
			parseCoverCallAndAsyncArrowHead(t, e, s, i) {
				let r = this.state.maybeInArrowParameters,
					n = null;
				(this.state.maybeInArrowParameters = !0), this.next();
				let o = this.startNodeAt(e);
				o.callee = t;
				let { maybeAsyncArrow: h, optionalChainMember: l } = s;
				h && (this.expressionScope.enter(Wr()), (n = new ue())),
					l && (o.optional = i),
					i
						? (o.arguments = this.parseCallExpressionArguments(11))
						: (o.arguments = this.parseCallExpressionArguments(
								11,
								t.type === 'Import',
								t.type !== 'Super',
								o,
								n
						  ));
				let c = this.finishCallExpression(o, l);
				return (
					h && this.shouldParseAsyncArrow() && !i
						? ((s.stop = !0),
						  this.checkDestructuringPrivate(n),
						  this.expressionScope.validateAsPattern(),
						  this.expressionScope.exit(),
						  (c = this.parseAsyncArrowFromCallExpression(
								this.startNodeAt(e),
								c
						  )))
						: (h &&
								(this.checkExpressionErrors(n, !0),
								this.expressionScope.exit()),
						  this.toReferencedArguments(c)),
					(this.state.maybeInArrowParameters = r),
					c
				);
			}
			toReferencedArguments(t, e) {
				this.toReferencedListDeep(t.arguments, e);
			}
			parseTaggedTemplateExpression(t, e, s) {
				let i = this.startNodeAt(e);
				return (
					(i.tag = t),
					(i.quasi = this.parseTemplate(!0)),
					s.optionalChainMember &&
						this.raise(p.OptionalChainingNoTemplate, { at: e }),
					this.finishNode(i, 'TaggedTemplateExpression')
				);
			}
			atPossibleAsyncArrow(t) {
				return (
					t.type === 'Identifier' &&
					t.name === 'async' &&
					this.state.lastTokEndLoc.index === t.end &&
					!this.canInsertSemicolon() &&
					t.end - t.start === 5 &&
					t.start === this.state.potentialArrowAt
				);
			}
			expectImportAttributesPlugin() {
				this.hasPlugin('importAssertions') ||
					this.expectPlugin('importAttributes');
			}
			finishCallExpression(t, e) {
				if (t.callee.type === 'Import')
					if (
						(t.arguments.length === 2 &&
							(this.hasPlugin('moduleAttributes') ||
								this.expectImportAttributesPlugin()),
						t.arguments.length === 0 || t.arguments.length > 2)
					)
						this.raise(p.ImportCallArity, {
							at: t,
							maxArgumentCount:
								this.hasPlugin('importAttributes') ||
								this.hasPlugin('importAssertions') ||
								this.hasPlugin('moduleAttributes')
									? 2
									: 1
						});
					else
						for (let s of t.arguments)
							s.type === 'SpreadElement' &&
								this.raise(p.ImportCallSpreadArgument, { at: s });
				return this.finishNode(
					t,
					e ? 'OptionalCallExpression' : 'CallExpression'
				);
			}
			parseCallExpressionArguments(t, e, s, i, r) {
				let n = [],
					o = !0,
					h = this.state.inFSharpPipelineDirectBody;
				for (this.state.inFSharpPipelineDirectBody = !1; !this.eat(t); ) {
					if (o) o = !1;
					else if ((this.expect(12), this.match(t))) {
						e &&
							!this.hasPlugin('importAttributes') &&
							!this.hasPlugin('importAssertions') &&
							!this.hasPlugin('moduleAttributes') &&
							this.raise(p.ImportCallArgumentTrailingComma, {
								at: this.state.lastTokStartLoc
							}),
							i && this.addTrailingCommaExtraToNode(i),
							this.next();
						break;
					}
					n.push(this.parseExprListItem(!1, r, s));
				}
				return (this.state.inFSharpPipelineDirectBody = h), n;
			}
			shouldParseAsyncArrow() {
				return this.match(19) && !this.canInsertSemicolon();
			}
			parseAsyncArrowFromCallExpression(t, e) {
				var s;
				return (
					this.resetPreviousNodeTrailingComments(e),
					this.expect(19),
					this.parseArrowExpression(
						t,
						e.arguments,
						!0,
						(s = e.extra) == null ? void 0 : s.trailingCommaLoc
					),
					e.innerComments && De(t, e.innerComments),
					e.callee.trailingComments && De(t, e.callee.trailingComments),
					t
				);
			}
			parseNoCallExpr() {
				let t = this.state.startLoc;
				return this.parseSubscripts(this.parseExprAtom(), t, !0);
			}
			parseExprAtom(t) {
				let e,
					s = null,
					{ type: i } = this.state;
				switch (i) {
					case 79:
						return this.parseSuper();
					case 83:
						return (
							(e = this.startNode()),
							this.next(),
							this.match(16)
								? this.parseImportMetaProperty(e)
								: (this.match(10) ||
										this.raise(p.UnsupportedImport, {
											at: this.state.lastTokStartLoc
										}),
								  this.finishNode(e, 'Import'))
						);
					case 78:
						return (
							(e = this.startNode()),
							this.next(),
							this.finishNode(e, 'ThisExpression')
						);
					case 90:
						return this.parseDo(this.startNode(), !1);
					case 56:
					case 31:
						return this.readRegexp(), this.parseRegExpLiteral(this.state.value);
					case 132:
						return this.parseNumericLiteral(this.state.value);
					case 133:
						return this.parseBigIntLiteral(this.state.value);
					case 134:
						return this.parseDecimalLiteral(this.state.value);
					case 131:
						return this.parseStringLiteral(this.state.value);
					case 84:
						return this.parseNullLiteral();
					case 85:
						return this.parseBooleanLiteral(!0);
					case 86:
						return this.parseBooleanLiteral(!1);
					case 10: {
						let r = this.state.potentialArrowAt === this.state.start;
						return this.parseParenAndDistinguishExpression(r);
					}
					case 2:
					case 1:
						return this.parseArrayLike(this.state.type === 2 ? 4 : 3, !1, !0);
					case 0:
						return this.parseArrayLike(3, !0, !1, t);
					case 6:
					case 7:
						return this.parseObjectLike(this.state.type === 6 ? 9 : 8, !1, !0);
					case 5:
						return this.parseObjectLike(8, !1, !1, t);
					case 68:
						return this.parseFunctionOrFunctionSent();
					case 26:
						s = this.parseDecorators();
					case 80:
						return this.parseClass(
							this.maybeTakeDecorators(s, this.startNode()),
							!1
						);
					case 77:
						return this.parseNewOrNewTarget();
					case 25:
					case 24:
						return this.parseTemplate(!1);
					case 15: {
						(e = this.startNode()), this.next(), (e.object = null);
						let r = (e.callee = this.parseNoCallExpr());
						if (r.type === 'MemberExpression')
							return this.finishNode(e, 'BindExpression');
						throw this.raise(p.UnsupportedBind, { at: r });
					}
					case 136:
						return (
							this.raise(p.PrivateInExpectedIn, {
								at: this.state.startLoc,
								identifierName: this.state.value
							}),
							this.parsePrivateName()
						);
					case 33:
						return this.parseTopicReferenceThenEqualsSign(54, '%');
					case 32:
						return this.parseTopicReferenceThenEqualsSign(44, '^');
					case 37:
					case 38:
						return this.parseTopicReference('hack');
					case 44:
					case 54:
					case 27: {
						let r = this.getPluginOption('pipelineOperator', 'proposal');
						if (r) return this.parseTopicReference(r);
						this.unexpected();
						break;
					}
					case 47: {
						let r = this.input.codePointAt(this.nextTokenStart());
						$(r) || r === 62
							? this.expectOnePlugin(['jsx', 'flow', 'typescript'])
							: this.unexpected();
						break;
					}
					default:
						if (S(i)) {
							if (
								this.isContextual(125) &&
								this.lookaheadInLineCharCode() === 123
							)
								return this.parseModuleExpression();
							let r = this.state.potentialArrowAt === this.state.start,
								n = this.state.containsEsc,
								o = this.parseIdentifier();
							if (!n && o.name === 'async' && !this.canInsertSemicolon()) {
								let { type: h } = this.state;
								if (h === 68)
									return (
										this.resetPreviousNodeTrailingComments(o),
										this.next(),
										this.parseAsyncFunctionExpression(this.startNodeAtNode(o))
									);
								if (S(h))
									return this.lookaheadCharCode() === 61
										? this.parseAsyncArrowUnaryFunction(this.startNodeAtNode(o))
										: o;
								if (h === 90)
									return (
										this.resetPreviousNodeTrailingComments(o),
										this.parseDo(this.startNodeAtNode(o), !0)
									);
							}
							return r && this.match(19) && !this.canInsertSemicolon()
								? (this.next(),
								  this.parseArrowExpression(this.startNodeAtNode(o), [o], !1))
								: o;
						} else this.unexpected();
				}
			}
			parseTopicReferenceThenEqualsSign(t, e) {
				let s = this.getPluginOption('pipelineOperator', 'proposal');
				if (s)
					return (
						(this.state.type = t),
						(this.state.value = e),
						this.state.pos--,
						this.state.end--,
						(this.state.endLoc = L(this.state.endLoc, -1)),
						this.parseTopicReference(s)
					);
				this.unexpected();
			}
			parseTopicReference(t) {
				let e = this.startNode(),
					s = this.state.startLoc,
					i = this.state.type;
				return this.next(), this.finishTopicReference(e, s, t, i);
			}
			finishTopicReference(t, e, s, i) {
				if (this.testTopicReferenceConfiguration(s, e, i)) {
					let r =
						s === 'smart' ? 'PipelinePrimaryTopicReference' : 'TopicReference';
					return (
						this.topicReferenceIsAllowedInCurrentContext() ||
							this.raise(
								s === 'smart' ? p.PrimaryTopicNotAllowed : p.PipeTopicUnbound,
								{ at: e }
							),
						this.registerTopicReference(),
						this.finishNode(t, r)
					);
				} else
					throw this.raise(p.PipeTopicUnconfiguredToken, {
						at: e,
						token: J(i)
					});
			}
			testTopicReferenceConfiguration(t, e, s) {
				switch (t) {
					case 'hack':
						return this.hasPlugin(['pipelineOperator', { topicToken: J(s) }]);
					case 'smart':
						return s === 27;
					default:
						throw this.raise(p.PipeTopicRequiresHackPipes, { at: e });
				}
			}
			parseAsyncArrowUnaryFunction(t) {
				this.prodParam.enter(qe(!0, this.prodParam.hasYield));
				let e = [this.parseIdentifier()];
				return (
					this.prodParam.exit(),
					this.hasPrecedingLineBreak() &&
						this.raise(p.LineTerminatorBeforeArrow, {
							at: this.state.curPosition()
						}),
					this.expect(19),
					this.parseArrowExpression(t, e, !0)
				);
			}
			parseDo(t, e) {
				this.expectPlugin('doExpressions'),
					e && this.expectPlugin('asyncDoExpressions'),
					(t.async = e),
					this.next();
				let s = this.state.labels;
				return (
					(this.state.labels = []),
					e
						? (this.prodParam.enter(it),
						  (t.body = this.parseBlock()),
						  this.prodParam.exit())
						: (t.body = this.parseBlock()),
					(this.state.labels = s),
					this.finishNode(t, 'DoExpression')
				);
			}
			parseSuper() {
				let t = this.startNode();
				return (
					this.next(),
					this.match(10) &&
					!this.scope.allowDirectSuper &&
					!this.options.allowSuperOutsideMethod
						? this.raise(p.SuperNotAllowed, { at: t })
						: !this.scope.allowSuper &&
						  !this.options.allowSuperOutsideMethod &&
						  this.raise(p.UnexpectedSuper, { at: t }),
					!this.match(10) &&
						!this.match(0) &&
						!this.match(16) &&
						this.raise(p.UnsupportedSuper, { at: t }),
					this.finishNode(t, 'Super')
				);
			}
			parsePrivateName() {
				let t = this.startNode(),
					e = this.startNodeAt(L(this.state.startLoc, 1)),
					s = this.state.value;
				return (
					this.next(),
					(t.id = this.createIdentifier(e, s)),
					this.finishNode(t, 'PrivateName')
				);
			}
			parseFunctionOrFunctionSent() {
				let t = this.startNode();
				if ((this.next(), this.prodParam.hasYield && this.match(16))) {
					let e = this.createIdentifier(this.startNodeAtNode(t), 'function');
					return (
						this.next(),
						this.match(102)
							? this.expectPlugin('functionSent')
							: this.hasPlugin('functionSent') || this.unexpected(),
						this.parseMetaProperty(t, e, 'sent')
					);
				}
				return this.parseFunction(t);
			}
			parseMetaProperty(t, e, s) {
				t.meta = e;
				let i = this.state.containsEsc;
				return (
					(t.property = this.parseIdentifier(!0)),
					(t.property.name !== s || i) &&
						this.raise(p.UnsupportedMetaProperty, {
							at: t.property,
							target: e.name,
							onlyValidPropertyName: s
						}),
					this.finishNode(t, 'MetaProperty')
				);
			}
			parseImportMetaProperty(t) {
				let e = this.createIdentifier(this.startNodeAtNode(t), 'import');
				return (
					this.next(),
					this.isContextual(100) &&
						(this.inModule || this.raise(p.ImportMetaOutsideModule, { at: e }),
						(this.sawUnambiguousESM = !0)),
					this.parseMetaProperty(t, e, 'meta')
				);
			}
			parseLiteralAtNode(t, e, s) {
				return (
					this.addExtra(s, 'rawValue', t),
					this.addExtra(s, 'raw', this.input.slice(s.start, this.state.end)),
					(s.value = t),
					this.next(),
					this.finishNode(s, e)
				);
			}
			parseLiteral(t, e) {
				let s = this.startNode();
				return this.parseLiteralAtNode(t, e, s);
			}
			parseStringLiteral(t) {
				return this.parseLiteral(t, 'StringLiteral');
			}
			parseNumericLiteral(t) {
				return this.parseLiteral(t, 'NumericLiteral');
			}
			parseBigIntLiteral(t) {
				return this.parseLiteral(t, 'BigIntLiteral');
			}
			parseDecimalLiteral(t) {
				return this.parseLiteral(t, 'DecimalLiteral');
			}
			parseRegExpLiteral(t) {
				let e = this.parseLiteral(t.value, 'RegExpLiteral');
				return (e.pattern = t.pattern), (e.flags = t.flags), e;
			}
			parseBooleanLiteral(t) {
				let e = this.startNode();
				return (e.value = t), this.next(), this.finishNode(e, 'BooleanLiteral');
			}
			parseNullLiteral() {
				let t = this.startNode();
				return this.next(), this.finishNode(t, 'NullLiteral');
			}
			parseParenAndDistinguishExpression(t) {
				let e = this.state.startLoc,
					s;
				this.next(), this.expressionScope.enter(Hr());
				let i = this.state.maybeInArrowParameters,
					r = this.state.inFSharpPipelineDirectBody;
				(this.state.maybeInArrowParameters = !0),
					(this.state.inFSharpPipelineDirectBody = !1);
				let n = this.state.startLoc,
					o = [],
					h = new ue(),
					l = !0,
					c,
					u;
				for (; !this.match(11); ) {
					if (l) l = !1;
					else if (
						(this.expect(
							12,
							h.optionalParametersLoc === null ? null : h.optionalParametersLoc
						),
						this.match(11))
					) {
						u = this.state.startLoc;
						break;
					}
					if (this.match(21)) {
						let x = this.state.startLoc;
						if (
							((c = this.state.startLoc),
							o.push(this.parseParenItem(this.parseRestBinding(), x)),
							!this.checkCommaAfterRest(41))
						)
							break;
					} else o.push(this.parseMaybeAssignAllowIn(h, this.parseParenItem));
				}
				let d = this.state.lastTokEndLoc;
				this.expect(11),
					(this.state.maybeInArrowParameters = i),
					(this.state.inFSharpPipelineDirectBody = r);
				let f = this.startNodeAt(e);
				return t && this.shouldParseArrow(o) && (f = this.parseArrow(f))
					? (this.checkDestructuringPrivate(h),
					  this.expressionScope.validateAsPattern(),
					  this.expressionScope.exit(),
					  this.parseArrowExpression(f, o, !1),
					  f)
					: (this.expressionScope.exit(),
					  o.length || this.unexpected(this.state.lastTokStartLoc),
					  u && this.unexpected(u),
					  c && this.unexpected(c),
					  this.checkExpressionErrors(h, !0),
					  this.toReferencedListDeep(o, !0),
					  o.length > 1
							? ((s = this.startNodeAt(n)),
							  (s.expressions = o),
							  this.finishNode(s, 'SequenceExpression'),
							  this.resetEndLocation(s, d))
							: (s = o[0]),
					  this.wrapParenthesis(e, s));
			}
			wrapParenthesis(t, e) {
				if (!this.options.createParenthesizedExpressions)
					return (
						this.addExtra(e, 'parenthesized', !0),
						this.addExtra(e, 'parenStart', t.index),
						this.takeSurroundingComments(
							e,
							t.index,
							this.state.lastTokEndLoc.index
						),
						e
					);
				let s = this.startNodeAt(t);
				return (
					(s.expression = e), this.finishNode(s, 'ParenthesizedExpression')
				);
			}
			shouldParseArrow(t) {
				return !this.canInsertSemicolon();
			}
			parseArrow(t) {
				if (this.eat(19)) return t;
			}
			parseParenItem(t, e) {
				return t;
			}
			parseNewOrNewTarget() {
				let t = this.startNode();
				if ((this.next(), this.match(16))) {
					let e = this.createIdentifier(this.startNodeAtNode(t), 'new');
					this.next();
					let s = this.parseMetaProperty(t, e, 'target');
					return (
						!this.scope.inNonArrowFunction &&
							!this.scope.inClass &&
							!this.options.allowNewTargetOutsideFunction &&
							this.raise(p.UnexpectedNewTarget, { at: s }),
						s
					);
				}
				return this.parseNew(t);
			}
			parseNew(t) {
				if ((this.parseNewCallee(t), this.eat(10))) {
					let e = this.parseExprList(11);
					this.toReferencedList(e), (t.arguments = e);
				} else t.arguments = [];
				return this.finishNode(t, 'NewExpression');
			}
			parseNewCallee(t) {
				(t.callee = this.parseNoCallExpr()),
					t.callee.type === 'Import' &&
						this.raise(p.ImportCallNotNewExpression, { at: t.callee });
			}
			parseTemplateElement(t) {
				let { start: e, startLoc: s, end: i, value: r } = this.state,
					n = e + 1,
					o = this.startNodeAt(L(s, 1));
				r === null &&
					(t ||
						this.raise(p.InvalidEscapeSequenceTemplate, {
							at: L(this.state.firstInvalidTemplateEscapePos, 1)
						}));
				let h = this.match(24),
					l = h ? -1 : -2,
					c = i + l;
				(o.value = {
					raw: this.input.slice(n, c).replace(
						/\r\n?/g,
						`
`
					),
					cooked: r === null ? null : r.slice(1, l)
				}),
					(o.tail = h),
					this.next();
				let u = this.finishNode(o, 'TemplateElement');
				return this.resetEndLocation(u, L(this.state.lastTokEndLoc, l)), u;
			}
			parseTemplate(t) {
				let e = this.startNode();
				e.expressions = [];
				let s = this.parseTemplateElement(t);
				for (e.quasis = [s]; !s.tail; )
					e.expressions.push(this.parseTemplateSubstitution()),
						this.readTemplateContinuation(),
						e.quasis.push((s = this.parseTemplateElement(t)));
				return this.finishNode(e, 'TemplateLiteral');
			}
			parseTemplateSubstitution() {
				return this.parseExpression();
			}
			parseObjectLike(t, e, s, i) {
				s && this.expectPlugin('recordAndTuple');
				let r = this.state.inFSharpPipelineDirectBody;
				this.state.inFSharpPipelineDirectBody = !1;
				let n = Object.create(null),
					o = !0,
					h = this.startNode();
				for (h.properties = [], this.next(); !this.match(t); ) {
					if (o) o = !1;
					else if ((this.expect(12), this.match(t))) {
						this.addTrailingCommaExtraToNode(h);
						break;
					}
					let c;
					e
						? (c = this.parseBindingProperty())
						: ((c = this.parsePropertyDefinition(i)),
						  this.checkProto(c, s, n, i)),
						s &&
							!this.isObjectProperty(c) &&
							c.type !== 'SpreadElement' &&
							this.raise(p.InvalidRecordProperty, { at: c }),
						c.shorthand && this.addExtra(c, 'shorthand', !0),
						h.properties.push(c);
				}
				this.next(), (this.state.inFSharpPipelineDirectBody = r);
				let l = 'ObjectExpression';
				return (
					e ? (l = 'ObjectPattern') : s && (l = 'RecordExpression'),
					this.finishNode(h, l)
				);
			}
			addTrailingCommaExtraToNode(t) {
				this.addExtra(t, 'trailingComma', this.state.lastTokStart),
					this.addExtra(t, 'trailingCommaLoc', this.state.lastTokStartLoc, !1);
			}
			maybeAsyncOrAccessorProp(t) {
				return (
					!t.computed &&
					t.key.type === 'Identifier' &&
					(this.isLiteralPropertyName() || this.match(0) || this.match(55))
				);
			}
			parsePropertyDefinition(t) {
				let e = [];
				if (this.match(26))
					for (
						this.hasPlugin('decorators') &&
						this.raise(p.UnsupportedPropertyDecorator, {
							at: this.state.startLoc
						});
						this.match(26);

					)
						e.push(this.parseDecorator());
				let s = this.startNode(),
					i = !1,
					r = !1,
					n;
				if (this.match(21))
					return e.length && this.unexpected(), this.parseSpread();
				e.length && ((s.decorators = e), (e = [])),
					(s.method = !1),
					t && (n = this.state.startLoc);
				let o = this.eat(55);
				this.parsePropertyNamePrefixOperator(s);
				let h = this.state.containsEsc,
					l = this.parsePropertyName(s, t);
				if (!o && !h && this.maybeAsyncOrAccessorProp(s)) {
					let c = l.name;
					c === 'async' &&
						!this.hasPrecedingLineBreak() &&
						((i = !0),
						this.resetPreviousNodeTrailingComments(l),
						(o = this.eat(55)),
						this.parsePropertyName(s)),
						(c === 'get' || c === 'set') &&
							((r = !0),
							this.resetPreviousNodeTrailingComments(l),
							(s.kind = c),
							this.match(55) &&
								((o = !0),
								this.raise(p.AccessorIsGenerator, {
									at: this.state.curPosition(),
									kind: c
								}),
								this.next()),
							this.parsePropertyName(s));
				}
				return this.parseObjPropValue(s, n, o, i, !1, r, t);
			}
			getGetterSetterExpectedParamCount(t) {
				return t.kind === 'get' ? 0 : 1;
			}
			getObjectOrClassMethodParams(t) {
				return t.params;
			}
			checkGetterSetterParams(t) {
				var e;
				let s = this.getGetterSetterExpectedParamCount(t),
					i = this.getObjectOrClassMethodParams(t);
				i.length !== s &&
					this.raise(t.kind === 'get' ? p.BadGetterArity : p.BadSetterArity, {
						at: t
					}),
					t.kind === 'set' &&
						((e = i[i.length - 1]) == null ? void 0 : e.type) ===
							'RestElement' &&
						this.raise(p.BadSetterRestParameter, { at: t });
			}
			parseObjectMethod(t, e, s, i, r) {
				if (r) {
					let n = this.parseMethod(t, e, !1, !1, !1, 'ObjectMethod');
					return this.checkGetterSetterParams(n), n;
				}
				if (s || e || this.match(10))
					return (
						i && this.unexpected(),
						(t.kind = 'method'),
						(t.method = !0),
						this.parseMethod(t, e, s, !1, !1, 'ObjectMethod')
					);
			}
			parseObjectProperty(t, e, s, i) {
				if (((t.shorthand = !1), this.eat(14)))
					return (
						(t.value = s
							? this.parseMaybeDefault(this.state.startLoc)
							: this.parseMaybeAssignAllowIn(i)),
						this.finishNode(t, 'ObjectProperty')
					);
				if (!t.computed && t.key.type === 'Identifier') {
					if ((this.checkReservedWord(t.key.name, t.key.loc.start, !0, !1), s))
						t.value = this.parseMaybeDefault(e, K(t.key));
					else if (this.match(29)) {
						let r = this.state.startLoc;
						i != null
							? i.shorthandAssignLoc === null && (i.shorthandAssignLoc = r)
							: this.raise(p.InvalidCoverInitializedName, { at: r }),
							(t.value = this.parseMaybeDefault(e, K(t.key)));
					} else t.value = K(t.key);
					return (t.shorthand = !0), this.finishNode(t, 'ObjectProperty');
				}
			}
			parseObjPropValue(t, e, s, i, r, n, o) {
				let h =
					this.parseObjectMethod(t, s, i, r, n) ||
					this.parseObjectProperty(t, e, r, o);
				return h || this.unexpected(), h;
			}
			parsePropertyName(t, e) {
				if (this.eat(0))
					(t.computed = !0),
						(t.key = this.parseMaybeAssignAllowIn()),
						this.expect(3);
				else {
					let { type: s, value: i } = this.state,
						r;
					if (M(s)) r = this.parseIdentifier(!0);
					else
						switch (s) {
							case 132:
								r = this.parseNumericLiteral(i);
								break;
							case 131:
								r = this.parseStringLiteral(i);
								break;
							case 133:
								r = this.parseBigIntLiteral(i);
								break;
							case 134:
								r = this.parseDecimalLiteral(i);
								break;
							case 136: {
								let n = this.state.startLoc;
								e != null
									? e.privateKeyLoc === null && (e.privateKeyLoc = n)
									: this.raise(p.UnexpectedPrivateField, { at: n }),
									(r = this.parsePrivateName());
								break;
							}
							default:
								this.unexpected();
						}
					(t.key = r), s !== 136 && (t.computed = !1);
				}
				return t.key;
			}
			initFunction(t, e) {
				(t.id = null), (t.generator = !1), (t.async = e);
			}
			parseMethod(t, e, s, i, r, n, o = !1) {
				this.initFunction(t, s),
					(t.generator = e),
					this.scope.enter(z | Xe | (o ? ee : 0) | (r ? _s : 0)),
					this.prodParam.enter(qe(s, t.generator)),
					this.parseFunctionParams(t, i);
				let h = this.parseFunctionBodyAndFinish(t, n, !0);
				return this.prodParam.exit(), this.scope.exit(), h;
			}
			parseArrayLike(t, e, s, i) {
				s && this.expectPlugin('recordAndTuple');
				let r = this.state.inFSharpPipelineDirectBody;
				this.state.inFSharpPipelineDirectBody = !1;
				let n = this.startNode();
				return (
					this.next(),
					(n.elements = this.parseExprList(t, !s, i, n)),
					(this.state.inFSharpPipelineDirectBody = r),
					this.finishNode(n, s ? 'TupleExpression' : 'ArrayExpression')
				);
			}
			parseArrowExpression(t, e, s, i) {
				this.scope.enter(z | Qt);
				let r = qe(s, !1);
				!this.match(5) && this.prodParam.hasIn && (r |= re),
					this.prodParam.enter(r),
					this.initFunction(t, s);
				let n = this.state.maybeInArrowParameters;
				return (
					e &&
						((this.state.maybeInArrowParameters = !0),
						this.setArrowFunctionParameters(t, e, i)),
					(this.state.maybeInArrowParameters = !1),
					this.parseFunctionBody(t, !0),
					this.prodParam.exit(),
					this.scope.exit(),
					(this.state.maybeInArrowParameters = n),
					this.finishNode(t, 'ArrowFunctionExpression')
				);
			}
			setArrowFunctionParameters(t, e, s) {
				this.toAssignableList(e, s, !1), (t.params = e);
			}
			parseFunctionBodyAndFinish(t, e, s = !1) {
				return this.parseFunctionBody(t, !1, s), this.finishNode(t, e);
			}
			parseFunctionBody(t, e, s = !1) {
				let i = e && !this.match(5);
				if ((this.expressionScope.enter(Xs()), i))
					(t.body = this.parseMaybeAssign()), this.checkParams(t, !1, e, !1);
				else {
					let r = this.state.strict,
						n = this.state.labels;
					(this.state.labels = []),
						this.prodParam.enter(this.prodParam.currentFlags() | Ys),
						(t.body = this.parseBlock(!0, !1, (o) => {
							let h = !this.isSimpleParamList(t.params);
							o &&
								h &&
								this.raise(p.IllegalLanguageModeDirective, {
									at:
										(t.kind === 'method' || t.kind === 'constructor') && t.key
											? t.key.loc.end
											: t
								});
							let l = !r && this.state.strict;
							this.checkParams(t, !this.state.strict && !e && !s && !h, e, l),
								this.state.strict && t.id && this.checkIdentifier(t.id, Nr, l);
						})),
						this.prodParam.exit(),
						(this.state.labels = n);
				}
				this.expressionScope.exit();
			}
			isSimpleParameter(t) {
				return t.type === 'Identifier';
			}
			isSimpleParamList(t) {
				for (let e = 0, s = t.length; e < s; e++)
					if (!this.isSimpleParameter(t[e])) return !1;
				return !0;
			}
			checkParams(t, e, s, i = !0) {
				let r = !e && new Set(),
					n = { type: 'FormalParameters' };
				for (let o of t.params)
					this.checkLVal(o, {
						in: n,
						binding: Qe,
						checkClashes: r,
						strictModeChanged: i
					});
			}
			parseExprList(t, e, s, i) {
				let r = [],
					n = !0;
				for (; !this.eat(t); ) {
					if (n) n = !1;
					else if ((this.expect(12), this.match(t))) {
						i && this.addTrailingCommaExtraToNode(i), this.next();
						break;
					}
					r.push(this.parseExprListItem(e, s));
				}
				return r;
			}
			parseExprListItem(t, e, s) {
				let i;
				if (this.match(12))
					t ||
						this.raise(p.UnexpectedToken, {
							at: this.state.curPosition(),
							unexpected: ','
						}),
						(i = null);
				else if (this.match(21)) {
					let r = this.state.startLoc;
					i = this.parseParenItem(this.parseSpread(e), r);
				} else if (this.match(17)) {
					this.expectPlugin('partialApplication'),
						s ||
							this.raise(p.UnexpectedArgumentPlaceholder, {
								at: this.state.startLoc
							});
					let r = this.startNode();
					this.next(), (i = this.finishNode(r, 'ArgumentPlaceholder'));
				} else i = this.parseMaybeAssignAllowIn(e, this.parseParenItem);
				return i;
			}
			parseIdentifier(t) {
				let e = this.startNode(),
					s = this.parseIdentifierName(t);
				return this.createIdentifier(e, s);
			}
			createIdentifier(t, e) {
				return (
					(t.name = e),
					(t.loc.identifierName = e),
					this.finishNode(t, 'Identifier')
				);
			}
			parseIdentifierName(t) {
				let e,
					{ startLoc: s, type: i } = this.state;
				M(i) ? (e = this.state.value) : this.unexpected();
				let r = ar(i);
				return (
					t ? r && this.replaceToken(130) : this.checkReservedWord(e, s, r, !1),
					this.next(),
					e
				);
			}
			checkReservedWord(t, e, s, i) {
				if (t.length > 10 || !Er(t)) return;
				if (s && br(t)) {
					this.raise(p.UnexpectedKeyword, { at: e, keyword: t });
					return;
				}
				if ((this.state.strict ? (i ? Bs : Ms) : Ds)(t, this.inModule)) {
					this.raise(p.UnexpectedReservedWord, { at: e, reservedWord: t });
					return;
				} else if (t === 'yield') {
					if (this.prodParam.hasYield) {
						this.raise(p.YieldBindingIdentifier, { at: e });
						return;
					}
				} else if (t === 'await') {
					if (this.prodParam.hasAwait) {
						this.raise(p.AwaitBindingIdentifier, { at: e });
						return;
					}
					if (this.scope.inStaticBlock) {
						this.raise(p.AwaitBindingIdentifierInStaticBlock, { at: e });
						return;
					}
					this.expressionScope.recordAsyncArrowParametersError({ at: e });
				} else if (
					t === 'arguments' &&
					this.scope.inClassAndNotInNonArrowFunction
				) {
					this.raise(p.ArgumentsInClass, { at: e });
					return;
				}
			}
			isAwaitAllowed() {
				return !!(
					this.prodParam.hasAwait ||
					(this.options.allowAwaitOutsideFunction && !this.scope.inFunction)
				);
			}
			parseAwait(t) {
				let e = this.startNodeAt(t);
				return (
					this.expressionScope.recordParameterInitializerError(
						p.AwaitExpressionFormalParameter,
						{ at: e }
					),
					this.eat(55) && this.raise(p.ObsoleteAwaitStar, { at: e }),
					!this.scope.inFunction &&
						!this.options.allowAwaitOutsideFunction &&
						(this.isAmbiguousAwait()
							? (this.ambiguousScriptDifferentAst = !0)
							: (this.sawUnambiguousESM = !0)),
					this.state.soloAwait || (e.argument = this.parseMaybeUnary(null, !0)),
					this.finishNode(e, 'AwaitExpression')
				);
			}
			isAmbiguousAwait() {
				if (this.hasPrecedingLineBreak()) return !0;
				let { type: t } = this.state;
				return (
					t === 53 ||
					t === 10 ||
					t === 0 ||
					Je(t) ||
					(t === 101 && !this.state.containsEsc) ||
					t === 135 ||
					t === 56 ||
					(this.hasPlugin('v8intrinsic') && t === 54)
				);
			}
			parseYield() {
				let t = this.startNode();
				this.expressionScope.recordParameterInitializerError(
					p.YieldInParameter,
					{ at: t }
				),
					this.next();
				let e = !1,
					s = null;
				if (!this.hasPrecedingLineBreak())
					switch (((e = this.eat(55)), this.state.type)) {
						case 13:
						case 137:
						case 8:
						case 11:
						case 3:
						case 9:
						case 14:
						case 12:
							if (!e) break;
						default:
							s = this.parseMaybeAssign();
					}
				return (
					(t.delegate = e),
					(t.argument = s),
					this.finishNode(t, 'YieldExpression')
				);
			}
			checkPipelineAtInfixOperator(t, e) {
				this.hasPlugin(['pipelineOperator', { proposal: 'smart' }]) &&
					t.type === 'SequenceExpression' &&
					this.raise(p.PipelineHeadSequenceExpression, { at: e });
			}
			parseSmartPipelineBodyInStyle(t, e) {
				if (this.isSimpleReference(t)) {
					let s = this.startNodeAt(e);
					return (s.callee = t), this.finishNode(s, 'PipelineBareFunction');
				} else {
					let s = this.startNodeAt(e);
					return (
						this.checkSmartPipeTopicBodyEarlyErrors(e),
						(s.expression = t),
						this.finishNode(s, 'PipelineTopicExpression')
					);
				}
			}
			isSimpleReference(t) {
				switch (t.type) {
					case 'MemberExpression':
						return !t.computed && this.isSimpleReference(t.object);
					case 'Identifier':
						return !0;
					default:
						return !1;
				}
			}
			checkSmartPipeTopicBodyEarlyErrors(t) {
				if (this.match(19))
					throw this.raise(p.PipelineBodyNoArrow, { at: this.state.startLoc });
				this.topicReferenceWasUsedInCurrentContext() ||
					this.raise(p.PipelineTopicUnused, { at: t });
			}
			withTopicBindingContext(t) {
				let e = this.state.topicContext;
				this.state.topicContext = {
					maxNumOfResolvableTopics: 1,
					maxTopicIndex: null
				};
				try {
					return t();
				} finally {
					this.state.topicContext = e;
				}
			}
			withSmartMixTopicForbiddingContext(t) {
				if (this.hasPlugin(['pipelineOperator', { proposal: 'smart' }])) {
					let e = this.state.topicContext;
					this.state.topicContext = {
						maxNumOfResolvableTopics: 0,
						maxTopicIndex: null
					};
					try {
						return t();
					} finally {
						this.state.topicContext = e;
					}
				} else return t();
			}
			withSoloAwaitPermittingContext(t) {
				let e = this.state.soloAwait;
				this.state.soloAwait = !0;
				try {
					return t();
				} finally {
					this.state.soloAwait = e;
				}
			}
			allowInAnd(t) {
				let e = this.prodParam.currentFlags();
				if (re & ~e) {
					this.prodParam.enter(e | re);
					try {
						return t();
					} finally {
						this.prodParam.exit();
					}
				}
				return t();
			}
			disallowInAnd(t) {
				let e = this.prodParam.currentFlags();
				if (re & e) {
					this.prodParam.enter(e & ~re);
					try {
						return t();
					} finally {
						this.prodParam.exit();
					}
				}
				return t();
			}
			registerTopicReference() {
				this.state.topicContext.maxTopicIndex = 0;
			}
			topicReferenceIsAllowedInCurrentContext() {
				return this.state.topicContext.maxNumOfResolvableTopics >= 1;
			}
			topicReferenceWasUsedInCurrentContext() {
				return (
					this.state.topicContext.maxTopicIndex != null &&
					this.state.topicContext.maxTopicIndex >= 0
				);
			}
			parseFSharpPipelineBody(t) {
				let e = this.state.startLoc;
				this.state.potentialArrowAt = this.state.start;
				let s = this.state.inFSharpPipelineDirectBody;
				this.state.inFSharpPipelineDirectBody = !0;
				let i = this.parseExprOp(this.parseMaybeUnaryOrPrivate(), e, t);
				return (this.state.inFSharpPipelineDirectBody = s), i;
			}
			parseModuleExpression() {
				this.expectPlugin('moduleBlocks');
				let t = this.startNode();
				this.next(), this.match(5) || this.unexpected(null, 5);
				let e = this.startNodeAt(this.state.endLoc);
				this.next();
				let s = this.initializeScopes(!0);
				this.enterInitialScopes();
				try {
					t.body = this.parseProgram(e, 8, 'module');
				} finally {
					s();
				}
				return this.finishNode(t, 'ModuleExpression');
			}
			parsePropertyNamePrefixOperator(t) {}
		},
		yt = { kind: 'loop' },
		xa = { kind: 'switch' },
		Pa = /[\uD800-\uDFFF]/u,
		xt = /in(?:stanceof)?/y;
	function Ta(a, t) {
		for (let e = 0; e < a.length; e++) {
			let s = a[e],
				{ type: i } = s;
			if (typeof i == 'number') {
				{
					if (i === 136) {
						let { loc: r, start: n, value: o, end: h } = s,
							l = n + 1,
							c = L(r.start, 1);
						a.splice(
							e,
							1,
							new O({
								type: U(27),
								value: '#',
								start: n,
								end: l,
								startLoc: r.start,
								endLoc: c
							}),
							new O({
								type: U(130),
								value: o,
								start: l,
								end: h,
								startLoc: c,
								endLoc: r.end
							})
						),
							e++;
						continue;
					}
					if (Je(i)) {
						let { loc: r, start: n, value: o, end: h } = s,
							l = n + 1,
							c = L(r.start, 1),
							u;
						t.charCodeAt(n) === 96
							? (u = new O({
									type: U(22),
									value: '`',
									start: n,
									end: l,
									startLoc: r.start,
									endLoc: c
							  }))
							: (u = new O({
									type: U(8),
									value: '}',
									start: n,
									end: l,
									startLoc: r.start,
									endLoc: c
							  }));
						let d, f, x, I;
						i === 24
							? ((f = h - 1),
							  (x = L(r.end, -1)),
							  (d = o === null ? null : o.slice(1, -1)),
							  (I = new O({
									type: U(22),
									value: '`',
									start: f,
									end: h,
									startLoc: x,
									endLoc: r.end
							  })))
							: ((f = h - 2),
							  (x = L(r.end, -2)),
							  (d = o === null ? null : o.slice(1, -2)),
							  (I = new O({
									type: U(23),
									value: '${',
									start: f,
									end: h,
									startLoc: x,
									endLoc: r.end
							  }))),
							a.splice(
								e,
								1,
								u,
								new O({
									type: U(20),
									value: d,
									start: l,
									end: f,
									startLoc: c,
									endLoc: x
								}),
								I
							),
							(e += 2);
						continue;
					}
				}
				s.type = U(i);
			}
		}
		return a;
	}
	var Vt = class extends $t {
			parseTopLevel(t, e) {
				return (
					(t.program = this.parseProgram(e)),
					(t.comments = this.state.comments),
					this.options.tokens && (t.tokens = Ta(this.tokens, this.input)),
					this.finishNode(t, 'File')
				);
			}
			parseProgram(t, e = 137, s = this.options.sourceType) {
				if (
					((t.sourceType = s),
					(t.interpreter = this.parseInterpreterDirective()),
					this.parseBlockBody(t, !0, !0, e),
					this.inModule &&
						!this.options.allowUndeclaredExports &&
						this.scope.undefinedExports.size > 0)
				)
					for (let [r, n] of Array.from(this.scope.undefinedExports))
						this.raise(p.ModuleExportUndefined, { at: n, localName: r });
				let i;
				return (
					e === 137
						? (i = this.finishNode(t, 'Program'))
						: (i = this.finishNodeAt(t, 'Program', L(this.state.startLoc, -1))),
					i
				);
			}
			stmtToDirective(t) {
				let e = t;
				(e.type = 'Directive'), (e.value = e.expression), delete e.expression;
				let s = e.value,
					i = s.value,
					r = this.input.slice(s.start, s.end),
					n = (s.value = r.slice(1, -1));
				return (
					this.addExtra(s, 'raw', r),
					this.addExtra(s, 'rawValue', n),
					this.addExtra(s, 'expressionValue', i),
					(s.type = 'DirectiveLiteral'),
					e
				);
			}
			parseInterpreterDirective() {
				if (!this.match(28)) return null;
				let t = this.startNode();
				return (
					(t.value = this.state.value),
					this.next(),
					this.finishNode(t, 'InterpreterDirective')
				);
			}
			isLet() {
				return this.isContextual(99) ? this.hasFollowingBindingAtom() : !1;
			}
			chStartsBindingIdentifier(t, e) {
				if ($(t)) {
					if (((xt.lastIndex = e), xt.test(this.input))) {
						let s = this.codePointAtPos(xt.lastIndex);
						if (!he(s) && s !== 92) return !1;
					}
					return !0;
				} else return t === 92;
			}
			chStartsBindingPattern(t) {
				return t === 91 || t === 123;
			}
			hasFollowingBindingAtom() {
				let t = this.nextTokenStart(),
					e = this.codePointAtPos(t);
				return (
					this.chStartsBindingPattern(e) || this.chStartsBindingIdentifier(e, t)
				);
			}
			hasInLineFollowingBindingIdentifier() {
				let t = this.nextTokenInLineStart(),
					e = this.codePointAtPos(t);
				return this.chStartsBindingIdentifier(e, t);
			}
			startsUsingForOf() {
				let { type: t, containsEsc: e } = this.lookahead();
				if (t === 101 && !e) return !1;
				if (S(t) && !this.hasFollowingLineBreak())
					return this.expectPlugin('explicitResourceManagement'), !0;
			}
			startsAwaitUsing() {
				let t = this.nextTokenInLineStart();
				if (this.isUnparsedContextual(t, 'using')) {
					t = this.nextTokenInLineStartSince(t + 5);
					let e = this.codePointAtPos(t);
					if (this.chStartsBindingIdentifier(e, t))
						return this.expectPlugin('explicitResourceManagement'), !0;
				}
				return !1;
			}
			parseModuleItem() {
				return this.parseStatementLike(15);
			}
			parseStatementListItem() {
				return this.parseStatementLike(
					6 | (!this.options.annexB || this.state.strict ? 0 : 8)
				);
			}
			parseStatementOrSloppyAnnexBFunctionDeclaration(t = !1) {
				let e = 0;
				return (
					this.options.annexB &&
						!this.state.strict &&
						((e |= 4), t && (e |= 8)),
					this.parseStatementLike(e)
				);
			}
			parseStatement() {
				return this.parseStatementLike(0);
			}
			parseStatementLike(t) {
				let e = null;
				return (
					this.match(26) && (e = this.parseDecorators(!0)),
					this.parseStatementContent(t, e)
				);
			}
			parseStatementContent(t, e) {
				let s = this.state.type,
					i = this.startNode(),
					r = !!(t & 2),
					n = !!(t & 4),
					o = t & 1;
				switch (s) {
					case 60:
						return this.parseBreakContinueStatement(i, !0);
					case 63:
						return this.parseBreakContinueStatement(i, !1);
					case 64:
						return this.parseDebuggerStatement(i);
					case 90:
						return this.parseDoWhileStatement(i);
					case 91:
						return this.parseForStatement(i);
					case 68:
						if (this.lookaheadCharCode() === 46) break;
						return (
							n ||
								this.raise(
									this.state.strict
										? p.StrictFunction
										: this.options.annexB
										? p.SloppyFunctionAnnexB
										: p.SloppyFunction,
									{ at: this.state.startLoc }
								),
							this.parseFunctionStatement(i, !1, !r && n)
						);
					case 80:
						return (
							r || this.unexpected(),
							this.parseClass(this.maybeTakeDecorators(e, i), !0)
						);
					case 69:
						return this.parseIfStatement(i);
					case 70:
						return this.parseReturnStatement(i);
					case 71:
						return this.parseSwitchStatement(i);
					case 72:
						return this.parseThrowStatement(i);
					case 73:
						return this.parseTryStatement(i);
					case 96:
						if (!this.state.containsEsc && this.startsAwaitUsing())
							return (
								this.isAwaitAllowed()
									? r || this.raise(p.UnexpectedLexicalDeclaration, { at: i })
									: this.raise(p.AwaitUsingNotInAsyncContext, { at: i }),
								this.next(),
								this.parseVarStatement(i, 'await using')
							);
						break;
					case 105:
						if (
							this.state.containsEsc ||
							!this.hasInLineFollowingBindingIdentifier()
						)
							break;
						return (
							this.expectPlugin('explicitResourceManagement'),
							!this.scope.inModule && this.scope.inTopLevel
								? this.raise(p.UnexpectedUsingDeclaration, {
										at: this.state.startLoc
								  })
								: r ||
								  this.raise(p.UnexpectedLexicalDeclaration, {
										at: this.state.startLoc
								  }),
							this.parseVarStatement(i, 'using')
						);
					case 99: {
						if (this.state.containsEsc) break;
						let c = this.nextTokenStart(),
							u = this.codePointAtPos(c);
						if (
							u !== 91 &&
							((!r && this.hasFollowingLineBreak()) ||
								(!this.chStartsBindingIdentifier(u, c) && u !== 123))
						)
							break;
					}
					case 75:
						r ||
							this.raise(p.UnexpectedLexicalDeclaration, {
								at: this.state.startLoc
							});
					case 74: {
						let c = this.state.value;
						return this.parseVarStatement(i, c);
					}
					case 92:
						return this.parseWhileStatement(i);
					case 76:
						return this.parseWithStatement(i);
					case 5:
						return this.parseBlock();
					case 13:
						return this.parseEmptyStatement(i);
					case 83: {
						let c = this.lookaheadCharCode();
						if (c === 40 || c === 46) break;
					}
					case 82: {
						!this.options.allowImportExportEverywhere &&
							!o &&
							this.raise(p.UnexpectedImportExport, { at: this.state.startLoc }),
							this.next();
						let c;
						return (
							s === 83
								? ((c = this.parseImport(i)),
								  c.type === 'ImportDeclaration' &&
										(!c.importKind || c.importKind === 'value') &&
										(this.sawUnambiguousESM = !0))
								: ((c = this.parseExport(i, e)),
								  ((c.type === 'ExportNamedDeclaration' &&
										(!c.exportKind || c.exportKind === 'value')) ||
										(c.type === 'ExportAllDeclaration' &&
											(!c.exportKind || c.exportKind === 'value')) ||
										c.type === 'ExportDefaultDeclaration') &&
										(this.sawUnambiguousESM = !0)),
							this.assertModuleNodeAllowed(c),
							c
						);
					}
					default:
						if (this.isAsyncFunction())
							return (
								r ||
									this.raise(p.AsyncFunctionInSingleStatementContext, {
										at: this.state.startLoc
									}),
								this.next(),
								this.parseFunctionStatement(i, !0, !r && n)
							);
				}
				let h = this.state.value,
					l = this.parseExpression();
				return S(s) && l.type === 'Identifier' && this.eat(14)
					? this.parseLabeledStatement(i, h, l, t)
					: this.parseExpressionStatement(i, l, e);
			}
			assertModuleNodeAllowed(t) {
				!this.options.allowImportExportEverywhere &&
					!this.inModule &&
					this.raise(p.ImportOutsideModule, { at: t });
			}
			decoratorsEnabledBeforeExport() {
				return this.hasPlugin('decorators-legacy')
					? !0
					: this.hasPlugin('decorators') &&
							this.getPluginOption('decorators', 'decoratorsBeforeExport') !==
								!1;
			}
			maybeTakeDecorators(t, e, s) {
				return (
					t &&
						(e.decorators && e.decorators.length > 0
							? (typeof this.getPluginOption(
									'decorators',
									'decoratorsBeforeExport'
							  ) != 'boolean' &&
									this.raise(p.DecoratorsBeforeAfterExport, {
										at: e.decorators[0]
									}),
							  e.decorators.unshift(...t))
							: (e.decorators = t),
						this.resetStartLocationFromNode(e, t[0]),
						s && this.resetStartLocationFromNode(s, e)),
					e
				);
			}
			canHaveLeadingDecorator() {
				return this.match(80);
			}
			parseDecorators(t) {
				let e = [];
				do e.push(this.parseDecorator());
				while (this.match(26));
				if (this.match(82))
					t || this.unexpected(),
						this.decoratorsEnabledBeforeExport() ||
							this.raise(p.DecoratorExportClass, { at: this.state.startLoc });
				else if (!this.canHaveLeadingDecorator())
					throw this.raise(p.UnexpectedLeadingDecorator, {
						at: this.state.startLoc
					});
				return e;
			}
			parseDecorator() {
				this.expectOnePlugin(['decorators', 'decorators-legacy']);
				let t = this.startNode();
				if ((this.next(), this.hasPlugin('decorators'))) {
					let e = this.state.startLoc,
						s;
					if (this.match(10)) {
						let i = this.state.startLoc;
						this.next(),
							(s = this.parseExpression()),
							this.expect(11),
							(s = this.wrapParenthesis(i, s));
						let r = this.state.startLoc;
						(t.expression = this.parseMaybeDecoratorArguments(s)),
							this.getPluginOption('decorators', 'allowCallParenthesized') ===
								!1 &&
								t.expression !== s &&
								this.raise(p.DecoratorArgumentsOutsideParentheses, { at: r });
					} else {
						for (s = this.parseIdentifier(!1); this.eat(16); ) {
							let i = this.startNodeAt(e);
							(i.object = s),
								this.match(136)
									? (this.classScope.usePrivateName(
											this.state.value,
											this.state.startLoc
									  ),
									  (i.property = this.parsePrivateName()))
									: (i.property = this.parseIdentifier(!0)),
								(i.computed = !1),
								(s = this.finishNode(i, 'MemberExpression'));
						}
						t.expression = this.parseMaybeDecoratorArguments(s);
					}
				} else t.expression = this.parseExprSubscripts();
				return this.finishNode(t, 'Decorator');
			}
			parseMaybeDecoratorArguments(t) {
				if (this.eat(10)) {
					let e = this.startNodeAtNode(t);
					return (
						(e.callee = t),
						(e.arguments = this.parseCallExpressionArguments(11, !1)),
						this.toReferencedList(e.arguments),
						this.finishNode(e, 'CallExpression')
					);
				}
				return t;
			}
			parseBreakContinueStatement(t, e) {
				return (
					this.next(),
					this.isLineTerminator()
						? (t.label = null)
						: ((t.label = this.parseIdentifier()), this.semicolon()),
					this.verifyBreakContinue(t, e),
					this.finishNode(t, e ? 'BreakStatement' : 'ContinueStatement')
				);
			}
			verifyBreakContinue(t, e) {
				let s;
				for (s = 0; s < this.state.labels.length; ++s) {
					let i = this.state.labels[s];
					if (
						(t.label == null || i.name === t.label.name) &&
						((i.kind != null && (e || i.kind === 'loop')) || (t.label && e))
					)
						break;
				}
				if (s === this.state.labels.length) {
					let i = e ? 'BreakStatement' : 'ContinueStatement';
					this.raise(p.IllegalBreakContinue, { at: t, type: i });
				}
			}
			parseDebuggerStatement(t) {
				return (
					this.next(), this.semicolon(), this.finishNode(t, 'DebuggerStatement')
				);
			}
			parseHeaderExpression() {
				this.expect(10);
				let t = this.parseExpression();
				return this.expect(11), t;
			}
			parseDoWhileStatement(t) {
				return (
					this.next(),
					this.state.labels.push(yt),
					(t.body = this.withSmartMixTopicForbiddingContext(() =>
						this.parseStatement()
					)),
					this.state.labels.pop(),
					this.expect(92),
					(t.test = this.parseHeaderExpression()),
					this.eat(13),
					this.finishNode(t, 'DoWhileStatement')
				);
			}
			parseForStatement(t) {
				this.next(), this.state.labels.push(yt);
				let e = null;
				if (
					(this.isAwaitAllowed() &&
						this.eatContextual(96) &&
						(e = this.state.lastTokStartLoc),
					this.scope.enter(ae),
					this.expect(10),
					this.match(13))
				)
					return e !== null && this.unexpected(e), this.parseFor(t, null);
				let s = this.isContextual(99);
				{
					let h = this.isContextual(96) && this.startsAwaitUsing(),
						l = h || (this.isContextual(105) && this.startsUsingForOf()),
						c = (s && this.hasFollowingBindingAtom()) || l;
					if (this.match(74) || this.match(75) || c) {
						let u = this.startNode(),
							d;
						h
							? ((d = 'await using'),
							  this.isAwaitAllowed() ||
									this.raise(p.AwaitUsingNotInAsyncContext, {
										at: this.state.startLoc
									}),
							  this.next())
							: (d = this.state.value),
							this.next(),
							this.parseVar(u, !0, d);
						let f = this.finishNode(u, 'VariableDeclaration'),
							x = this.match(58);
						return (
							x && l && this.raise(p.ForInUsing, { at: f }),
							(x || this.isContextual(101)) && f.declarations.length === 1
								? this.parseForIn(t, f, e)
								: (e !== null && this.unexpected(e), this.parseFor(t, f))
						);
					}
				}
				let i = this.isContextual(95),
					r = new ue(),
					n = this.parseExpression(!0, r),
					o = this.isContextual(101);
				if (
					(o &&
						(s && this.raise(p.ForOfLet, { at: n }),
						e === null &&
							i &&
							n.type === 'Identifier' &&
							this.raise(p.ForOfAsync, { at: n })),
					o || this.match(58))
				) {
					this.checkDestructuringPrivate(r), this.toAssignable(n, !0);
					let h = o ? 'ForOfStatement' : 'ForInStatement';
					return (
						this.checkLVal(n, { in: { type: h } }), this.parseForIn(t, n, e)
					);
				} else this.checkExpressionErrors(r, !0);
				return e !== null && this.unexpected(e), this.parseFor(t, n);
			}
			parseFunctionStatement(t, e, s) {
				return (
					this.next(), this.parseFunction(t, 1 | (s ? 2 : 0) | (e ? 8 : 0))
				);
			}
			parseIfStatement(t) {
				return (
					this.next(),
					(t.test = this.parseHeaderExpression()),
					(t.consequent =
						this.parseStatementOrSloppyAnnexBFunctionDeclaration()),
					(t.alternate = this.eat(66)
						? this.parseStatementOrSloppyAnnexBFunctionDeclaration()
						: null),
					this.finishNode(t, 'IfStatement')
				);
			}
			parseReturnStatement(t) {
				return (
					!this.prodParam.hasReturn &&
						!this.options.allowReturnOutsideFunction &&
						this.raise(p.IllegalReturn, { at: this.state.startLoc }),
					this.next(),
					this.isLineTerminator()
						? (t.argument = null)
						: ((t.argument = this.parseExpression()), this.semicolon()),
					this.finishNode(t, 'ReturnStatement')
				);
			}
			parseSwitchStatement(t) {
				this.next(), (t.discriminant = this.parseHeaderExpression());
				let e = (t.cases = []);
				this.expect(5), this.state.labels.push(xa), this.scope.enter(ae);
				let s;
				for (let i; !this.match(8); )
					if (this.match(61) || this.match(65)) {
						let r = this.match(61);
						s && this.finishNode(s, 'SwitchCase'),
							e.push((s = this.startNode())),
							(s.consequent = []),
							this.next(),
							r
								? (s.test = this.parseExpression())
								: (i &&
										this.raise(p.MultipleDefaultsInSwitch, {
											at: this.state.lastTokStartLoc
										}),
								  (i = !0),
								  (s.test = null)),
							this.expect(14);
					} else
						s
							? s.consequent.push(this.parseStatementListItem())
							: this.unexpected();
				return (
					this.scope.exit(),
					s && this.finishNode(s, 'SwitchCase'),
					this.next(),
					this.state.labels.pop(),
					this.finishNode(t, 'SwitchStatement')
				);
			}
			parseThrowStatement(t) {
				return (
					this.next(),
					this.hasPrecedingLineBreak() &&
						this.raise(p.NewlineAfterThrow, { at: this.state.lastTokEndLoc }),
					(t.argument = this.parseExpression()),
					this.semicolon(),
					this.finishNode(t, 'ThrowStatement')
				);
			}
			parseCatchClauseParam() {
				let t = this.parseBindingAtom();
				return (
					this.scope.enter(
						this.options.annexB && t.type === 'Identifier' ? Fs : 0
					),
					this.checkLVal(t, { in: { type: 'CatchClause' }, binding: Cr }),
					t
				);
			}
			parseTryStatement(t) {
				if (
					(this.next(),
					(t.block = this.parseBlock()),
					(t.handler = null),
					this.match(62))
				) {
					let e = this.startNode();
					this.next(),
						this.match(10)
							? (this.expect(10),
							  (e.param = this.parseCatchClauseParam()),
							  this.expect(11))
							: ((e.param = null), this.scope.enter(ae)),
						(e.body = this.withSmartMixTopicForbiddingContext(() =>
							this.parseBlock(!1, !1)
						)),
						this.scope.exit(),
						(t.handler = this.finishNode(e, 'CatchClause'));
				}
				return (
					(t.finalizer = this.eat(67) ? this.parseBlock() : null),
					!t.handler &&
						!t.finalizer &&
						this.raise(p.NoCatchOrFinally, { at: t }),
					this.finishNode(t, 'TryStatement')
				);
			}
			parseVarStatement(t, e, s = !1) {
				return (
					this.next(),
					this.parseVar(t, !1, e, s),
					this.semicolon(),
					this.finishNode(t, 'VariableDeclaration')
				);
			}
			parseWhileStatement(t) {
				return (
					this.next(),
					(t.test = this.parseHeaderExpression()),
					this.state.labels.push(yt),
					(t.body = this.withSmartMixTopicForbiddingContext(() =>
						this.parseStatement()
					)),
					this.state.labels.pop(),
					this.finishNode(t, 'WhileStatement')
				);
			}
			parseWithStatement(t) {
				return (
					this.state.strict &&
						this.raise(p.StrictWith, { at: this.state.startLoc }),
					this.next(),
					(t.object = this.parseHeaderExpression()),
					(t.body = this.withSmartMixTopicForbiddingContext(() =>
						this.parseStatement()
					)),
					this.finishNode(t, 'WithStatement')
				);
			}
			parseEmptyStatement(t) {
				return this.next(), this.finishNode(t, 'EmptyStatement');
			}
			parseLabeledStatement(t, e, s, i) {
				for (let n of this.state.labels)
					n.name === e &&
						this.raise(p.LabelRedeclaration, { at: s, labelName: e });
				let r = hr(this.state.type) ? 'loop' : this.match(71) ? 'switch' : null;
				for (let n = this.state.labels.length - 1; n >= 0; n--) {
					let o = this.state.labels[n];
					if (o.statementStart === t.start)
						(o.statementStart = this.state.start), (o.kind = r);
					else break;
				}
				return (
					this.state.labels.push({
						name: e,
						kind: r,
						statementStart: this.state.start
					}),
					(t.body =
						i & 8
							? this.parseStatementOrSloppyAnnexBFunctionDeclaration(!0)
							: this.parseStatement()),
					this.state.labels.pop(),
					(t.label = s),
					this.finishNode(t, 'LabeledStatement')
				);
			}
			parseExpressionStatement(t, e, s) {
				return (
					(t.expression = e),
					this.semicolon(),
					this.finishNode(t, 'ExpressionStatement')
				);
			}
			parseBlock(t = !1, e = !0, s) {
				let i = this.startNode();
				return (
					t && this.state.strictErrors.clear(),
					this.expect(5),
					e && this.scope.enter(ae),
					this.parseBlockBody(i, t, !1, 8, s),
					e && this.scope.exit(),
					this.finishNode(i, 'BlockStatement')
				);
			}
			isValidDirective(t) {
				return (
					t.type === 'ExpressionStatement' &&
					t.expression.type === 'StringLiteral' &&
					!t.expression.extra.parenthesized
				);
			}
			parseBlockBody(t, e, s, i, r) {
				let n = (t.body = []),
					o = (t.directives = []);
				this.parseBlockOrModuleBlockBody(n, e ? o : void 0, s, i, r);
			}
			parseBlockOrModuleBlockBody(t, e, s, i, r) {
				let n = this.state.strict,
					o = !1,
					h = !1;
				for (; !this.match(i); ) {
					let l = s ? this.parseModuleItem() : this.parseStatementListItem();
					if (e && !h) {
						if (this.isValidDirective(l)) {
							let c = this.stmtToDirective(l);
							e.push(c),
								!o &&
									c.value.value === 'use strict' &&
									((o = !0), this.setStrict(!0));
							continue;
						}
						(h = !0), this.state.strictErrors.clear();
					}
					t.push(l);
				}
				r && r.call(this, o), n || this.setStrict(!1), this.next();
			}
			parseFor(t, e) {
				return (
					(t.init = e),
					this.semicolon(!1),
					(t.test = this.match(13) ? null : this.parseExpression()),
					this.semicolon(!1),
					(t.update = this.match(11) ? null : this.parseExpression()),
					this.expect(11),
					(t.body = this.withSmartMixTopicForbiddingContext(() =>
						this.parseStatement()
					)),
					this.scope.exit(),
					this.state.labels.pop(),
					this.finishNode(t, 'ForStatement')
				);
			}
			parseForIn(t, e, s) {
				let i = this.match(58);
				return (
					this.next(),
					i ? s !== null && this.unexpected(s) : (t.await = s !== null),
					e.type === 'VariableDeclaration' &&
						e.declarations[0].init != null &&
						(!i ||
							!this.options.annexB ||
							this.state.strict ||
							e.kind !== 'var' ||
							e.declarations[0].id.type !== 'Identifier') &&
						this.raise(p.ForInOfLoopInitializer, {
							at: e,
							type: i ? 'ForInStatement' : 'ForOfStatement'
						}),
					e.type === 'AssignmentPattern' &&
						this.raise(p.InvalidLhs, {
							at: e,
							ancestor: { type: 'ForStatement' }
						}),
					(t.left = e),
					(t.right = i
						? this.parseExpression()
						: this.parseMaybeAssignAllowIn()),
					this.expect(11),
					(t.body = this.withSmartMixTopicForbiddingContext(() =>
						this.parseStatement()
					)),
					this.scope.exit(),
					this.state.labels.pop(),
					this.finishNode(t, i ? 'ForInStatement' : 'ForOfStatement')
				);
			}
			parseVar(t, e, s, i = !1) {
				let r = (t.declarations = []);
				for (t.kind = s; ; ) {
					let n = this.startNode();
					if (
						(this.parseVarId(n, s),
						(n.init = this.eat(29)
							? e
								? this.parseMaybeAssignDisallowIn()
								: this.parseMaybeAssignAllowIn()
							: null),
						n.init === null &&
							!i &&
							(n.id.type !== 'Identifier' &&
							!(e && (this.match(58) || this.isContextual(101)))
								? this.raise(p.DeclarationMissingInitializer, {
										at: this.state.lastTokEndLoc,
										kind: 'destructuring'
								  })
								: s === 'const' &&
								  !(this.match(58) || this.isContextual(101)) &&
								  this.raise(p.DeclarationMissingInitializer, {
										at: this.state.lastTokEndLoc,
										kind: 'const'
								  })),
						r.push(this.finishNode(n, 'VariableDeclarator')),
						!this.eat(12))
					)
						break;
				}
				return t;
			}
			parseVarId(t, e) {
				let s = this.parseBindingAtom();
				this.checkLVal(s, {
					in: { type: 'VariableDeclarator' },
					binding: e === 'var' ? Qe : ce
				}),
					(t.id = s);
			}
			parseAsyncFunctionExpression(t) {
				return this.parseFunction(t, 8);
			}
			parseFunction(t, e = 0) {
				let s = e & 2,
					i = !!(e & 1),
					r = i && !(e & 4),
					n = !!(e & 8);
				this.initFunction(t, n),
					this.match(55) &&
						(s &&
							this.raise(p.GeneratorInSingleStatementContext, {
								at: this.state.startLoc
							}),
						this.next(),
						(t.generator = !0)),
					i && (t.id = this.parseFunctionId(r));
				let o = this.state.maybeInArrowParameters;
				return (
					(this.state.maybeInArrowParameters = !1),
					this.scope.enter(z),
					this.prodParam.enter(qe(n, t.generator)),
					i || (t.id = this.parseFunctionId()),
					this.parseFunctionParams(t, !1),
					this.withSmartMixTopicForbiddingContext(() => {
						this.parseFunctionBodyAndFinish(
							t,
							i ? 'FunctionDeclaration' : 'FunctionExpression'
						);
					}),
					this.prodParam.exit(),
					this.scope.exit(),
					i && !s && this.registerFunctionStatementId(t),
					(this.state.maybeInArrowParameters = o),
					t
				);
			}
			parseFunctionId(t) {
				return t || S(this.state.type) ? this.parseIdentifier() : null;
			}
			parseFunctionParams(t, e) {
				this.expect(10),
					this.expressionScope.enter(qr()),
					(t.params = this.parseBindingList(11, 41, 2 | (e ? 4 : 0))),
					this.expressionScope.exit();
			}
			registerFunctionStatementId(t) {
				t.id &&
					this.scope.declareName(
						t.id.name,
						!this.options.annexB || this.state.strict || t.generator || t.async
							? this.scope.treatFunctionsAsVar
								? Qe
								: ce
							: $s,
						t.id.loc.start
					);
			}
			parseClass(t, e, s) {
				this.next();
				let i = this.state.strict;
				return (
					(this.state.strict = !0),
					this.parseClassId(t, e, s),
					this.parseClassSuper(t),
					(t.body = this.parseClassBody(!!t.superClass, i)),
					this.finishNode(t, e ? 'ClassDeclaration' : 'ClassExpression')
				);
			}
			isClassProperty() {
				return this.match(29) || this.match(13) || this.match(8);
			}
			isClassMethod() {
				return this.match(10);
			}
			isNonstaticConstructor(t) {
				return (
					!t.computed &&
					!t.static &&
					(t.key.name === 'constructor' || t.key.value === 'constructor')
				);
			}
			parseClassBody(t, e) {
				this.classScope.enter();
				let s = { hadConstructor: !1, hadSuperClass: t },
					i = [],
					r = this.startNode();
				if (
					((r.body = []),
					this.expect(5),
					this.withSmartMixTopicForbiddingContext(() => {
						for (; !this.match(8); ) {
							if (this.eat(13)) {
								if (i.length > 0)
									throw this.raise(p.DecoratorSemicolon, {
										at: this.state.lastTokEndLoc
									});
								continue;
							}
							if (this.match(26)) {
								i.push(this.parseDecorator());
								continue;
							}
							let n = this.startNode();
							i.length &&
								((n.decorators = i),
								this.resetStartLocationFromNode(n, i[0]),
								(i = [])),
								this.parseClassMember(r, n, s),
								n.kind === 'constructor' &&
									n.decorators &&
									n.decorators.length > 0 &&
									this.raise(p.DecoratorConstructor, { at: n });
						}
					}),
					(this.state.strict = e),
					this.next(),
					i.length)
				)
					throw this.raise(p.TrailingDecorator, { at: this.state.startLoc });
				return this.classScope.exit(), this.finishNode(r, 'ClassBody');
			}
			parseClassMemberFromModifier(t, e) {
				let s = this.parseIdentifier(!0);
				if (this.isClassMethod()) {
					let i = e;
					return (
						(i.kind = 'method'),
						(i.computed = !1),
						(i.key = s),
						(i.static = !1),
						this.pushClassMethod(t, i, !1, !1, !1, !1),
						!0
					);
				} else if (this.isClassProperty()) {
					let i = e;
					return (
						(i.computed = !1),
						(i.key = s),
						(i.static = !1),
						t.body.push(this.parseClassProperty(i)),
						!0
					);
				}
				return this.resetPreviousNodeTrailingComments(s), !1;
			}
			parseClassMember(t, e, s) {
				let i = this.isContextual(104);
				if (i) {
					if (this.parseClassMemberFromModifier(t, e)) return;
					if (this.eat(5)) {
						this.parseClassStaticBlock(t, e);
						return;
					}
				}
				this.parseClassMemberWithIsStatic(t, e, s, i);
			}
			parseClassMemberWithIsStatic(t, e, s, i) {
				let r = e,
					n = e,
					o = e,
					h = e,
					l = e,
					c = r,
					u = r;
				if (
					((e.static = i),
					this.parsePropertyNamePrefixOperator(e),
					this.eat(55))
				) {
					c.kind = 'method';
					let C = this.match(136);
					if ((this.parseClassElementName(c), C)) {
						this.pushClassPrivateMethod(t, n, !0, !1);
						return;
					}
					this.isNonstaticConstructor(r) &&
						this.raise(p.ConstructorIsGenerator, { at: r.key }),
						this.pushClassMethod(t, r, !0, !1, !1, !1);
					return;
				}
				let d = S(this.state.type) && !this.state.containsEsc,
					f = this.match(136),
					x = this.parseClassElementName(e),
					I = this.state.startLoc;
				if ((this.parsePostMemberNameModifiers(u), this.isClassMethod())) {
					if (((c.kind = 'method'), f)) {
						this.pushClassPrivateMethod(t, n, !1, !1);
						return;
					}
					let C = this.isNonstaticConstructor(r),
						w = !1;
					C &&
						((r.kind = 'constructor'),
						s.hadConstructor &&
							!this.hasPlugin('typescript') &&
							this.raise(p.DuplicateConstructor, { at: x }),
						C &&
							this.hasPlugin('typescript') &&
							e.override &&
							this.raise(p.OverrideOnConstructor, { at: x }),
						(s.hadConstructor = !0),
						(w = s.hadSuperClass)),
						this.pushClassMethod(t, r, !1, !1, C, w);
				} else if (this.isClassProperty())
					f
						? this.pushClassPrivateProperty(t, h)
						: this.pushClassProperty(t, o);
				else if (d && x.name === 'async' && !this.isLineTerminator()) {
					this.resetPreviousNodeTrailingComments(x);
					let C = this.eat(55);
					u.optional && this.unexpected(I), (c.kind = 'method');
					let w = this.match(136);
					this.parseClassElementName(c),
						this.parsePostMemberNameModifiers(u),
						w
							? this.pushClassPrivateMethod(t, n, C, !0)
							: (this.isNonstaticConstructor(r) &&
									this.raise(p.ConstructorIsAsync, { at: r.key }),
							  this.pushClassMethod(t, r, C, !0, !1, !1));
				} else if (
					d &&
					(x.name === 'get' || x.name === 'set') &&
					!(this.match(55) && this.isLineTerminator())
				) {
					this.resetPreviousNodeTrailingComments(x), (c.kind = x.name);
					let C = this.match(136);
					this.parseClassElementName(r),
						C
							? this.pushClassPrivateMethod(t, n, !1, !1)
							: (this.isNonstaticConstructor(r) &&
									this.raise(p.ConstructorIsAccessor, { at: r.key }),
							  this.pushClassMethod(t, r, !1, !1, !1, !1)),
						this.checkGetterSetterParams(r);
				} else if (d && x.name === 'accessor' && !this.isLineTerminator()) {
					this.expectPlugin('decoratorAutoAccessors'),
						this.resetPreviousNodeTrailingComments(x);
					let C = this.match(136);
					this.parseClassElementName(o),
						this.pushClassAccessorProperty(t, l, C);
				} else
					this.isLineTerminator()
						? f
							? this.pushClassPrivateProperty(t, h)
							: this.pushClassProperty(t, o)
						: this.unexpected();
			}
			parseClassElementName(t) {
				let { type: e, value: s } = this.state;
				if (
					((e === 130 || e === 131) &&
						t.static &&
						s === 'prototype' &&
						this.raise(p.StaticPrototype, { at: this.state.startLoc }),
					e === 136)
				) {
					s === 'constructor' &&
						this.raise(p.ConstructorClassPrivateField, {
							at: this.state.startLoc
						});
					let i = this.parsePrivateName();
					return (t.key = i), i;
				}
				return this.parsePropertyName(t);
			}
			parseClassStaticBlock(t, e) {
				var s;
				this.scope.enter(ee | Ge | Xe);
				let i = this.state.labels;
				(this.state.labels = []), this.prodParam.enter(pe);
				let r = (e.body = []);
				this.parseBlockOrModuleBlockBody(r, void 0, !1, 8),
					this.prodParam.exit(),
					this.scope.exit(),
					(this.state.labels = i),
					t.body.push(this.finishNode(e, 'StaticBlock')),
					(s = e.decorators) != null &&
						s.length &&
						this.raise(p.DecoratorStaticBlock, { at: e });
			}
			pushClassProperty(t, e) {
				!e.computed &&
					(e.key.name === 'constructor' || e.key.value === 'constructor') &&
					this.raise(p.ConstructorClassField, { at: e.key }),
					t.body.push(this.parseClassProperty(e));
			}
			pushClassPrivateProperty(t, e) {
				let s = this.parseClassPrivateProperty(e);
				t.body.push(s),
					this.classScope.declarePrivateName(
						this.getPrivateNameSV(s.key),
						dt,
						s.key.loc.start
					);
			}
			pushClassAccessorProperty(t, e, s) {
				if (!s && !e.computed) {
					let r = e.key;
					(r.name === 'constructor' || r.value === 'constructor') &&
						this.raise(p.ConstructorClassField, { at: r });
				}
				let i = this.parseClassAccessorProperty(e);
				t.body.push(i),
					s &&
						this.classScope.declarePrivateName(
							this.getPrivateNameSV(i.key),
							dt,
							i.key.loc.start
						);
			}
			pushClassMethod(t, e, s, i, r, n) {
				t.body.push(this.parseMethod(e, s, i, r, n, 'ClassMethod', !0));
			}
			pushClassPrivateMethod(t, e, s, i) {
				let r = this.parseMethod(e, s, i, !1, !1, 'ClassPrivateMethod', !0);
				t.body.push(r);
				let n =
					r.kind === 'get'
						? r.static
							? Dr
							: Or
						: r.kind === 'set'
						? r.static
							? Mr
							: Br
						: dt;
				this.declareClassPrivateMethodInScope(r, n);
			}
			declareClassPrivateMethodInScope(t, e) {
				this.classScope.declarePrivateName(
					this.getPrivateNameSV(t.key),
					e,
					t.key.loc.start
				);
			}
			parsePostMemberNameModifiers(t) {}
			parseClassPrivateProperty(t) {
				return (
					this.parseInitializer(t),
					this.semicolon(),
					this.finishNode(t, 'ClassPrivateProperty')
				);
			}
			parseClassProperty(t) {
				return (
					this.parseInitializer(t),
					this.semicolon(),
					this.finishNode(t, 'ClassProperty')
				);
			}
			parseClassAccessorProperty(t) {
				return (
					this.parseInitializer(t),
					this.semicolon(),
					this.finishNode(t, 'ClassAccessorProperty')
				);
			}
			parseInitializer(t) {
				this.scope.enter(ee | Xe),
					this.expressionScope.enter(Xs()),
					this.prodParam.enter(pe),
					(t.value = this.eat(29) ? this.parseMaybeAssignAllowIn() : null),
					this.expressionScope.exit(),
					this.prodParam.exit(),
					this.scope.exit();
			}
			parseClassId(t, e, s, i = js) {
				if (S(this.state.type))
					(t.id = this.parseIdentifier()),
						e && this.declareNameFromIdentifier(t.id, i);
				else if (s || !e) t.id = null;
				else throw this.raise(p.MissingClassName, { at: this.state.startLoc });
			}
			parseClassSuper(t) {
				t.superClass = this.eat(81) ? this.parseExprSubscripts() : null;
			}
			parseExport(t, e) {
				let s = this.parseMaybeImportPhase(t, !0),
					i = this.maybeParseExportDefaultSpecifier(t, s),
					r = !i || this.eat(12),
					n = r && this.eatExportStar(t),
					o = n && this.maybeParseExportNamespaceSpecifier(t),
					h = r && (!o || this.eat(12)),
					l = i || n;
				if (n && !o) {
					if ((i && this.unexpected(), e))
						throw this.raise(p.UnsupportedDecoratorExport, { at: t });
					return (
						this.parseExportFrom(t, !0),
						this.finishNode(t, 'ExportAllDeclaration')
					);
				}
				let c = this.maybeParseExportNamedSpecifiers(t);
				i && r && !n && !c && this.unexpected(null, 5),
					o && h && this.unexpected(null, 97);
				let u;
				if (l || c) {
					if (((u = !1), e))
						throw this.raise(p.UnsupportedDecoratorExport, { at: t });
					this.parseExportFrom(t, l);
				} else u = this.maybeParseExportDeclaration(t);
				if (l || c || u) {
					var d;
					let f = t;
					if (
						(this.checkExport(f, !0, !1, !!f.source),
						((d = f.declaration) == null ? void 0 : d.type) ===
							'ClassDeclaration')
					)
						this.maybeTakeDecorators(e, f.declaration, f);
					else if (e) throw this.raise(p.UnsupportedDecoratorExport, { at: t });
					return this.finishNode(f, 'ExportNamedDeclaration');
				}
				if (this.eat(65)) {
					let f = t,
						x = this.parseExportDefaultExpression();
					if (((f.declaration = x), x.type === 'ClassDeclaration'))
						this.maybeTakeDecorators(e, x, f);
					else if (e) throw this.raise(p.UnsupportedDecoratorExport, { at: t });
					return (
						this.checkExport(f, !0, !0),
						this.finishNode(f, 'ExportDefaultDeclaration')
					);
				}
				this.unexpected(null, 5);
			}
			eatExportStar(t) {
				return this.eat(55);
			}
			maybeParseExportDefaultSpecifier(t, e) {
				if (e || this.isExportDefaultSpecifier()) {
					this.expectPlugin(
						'exportDefaultFrom',
						e == null ? void 0 : e.loc.start
					);
					let s = e || this.parseIdentifier(!0),
						i = this.startNodeAtNode(s);
					return (
						(i.exported = s),
						(t.specifiers = [this.finishNode(i, 'ExportDefaultSpecifier')]),
						!0
					);
				}
				return !1;
			}
			maybeParseExportNamespaceSpecifier(t) {
				if (this.isContextual(93)) {
					t.specifiers || (t.specifiers = []);
					let e = this.startNodeAt(this.state.lastTokStartLoc);
					return (
						this.next(),
						(e.exported = this.parseModuleExportName()),
						t.specifiers.push(this.finishNode(e, 'ExportNamespaceSpecifier')),
						!0
					);
				}
				return !1;
			}
			maybeParseExportNamedSpecifiers(t) {
				if (this.match(5)) {
					t.specifiers || (t.specifiers = []);
					let e = t.exportKind === 'type';
					return (
						t.specifiers.push(...this.parseExportSpecifiers(e)),
						(t.source = null),
						(t.declaration = null),
						this.hasPlugin('importAssertions') && (t.assertions = []),
						!0
					);
				}
				return !1;
			}
			maybeParseExportDeclaration(t) {
				return this.shouldParseExportDeclaration()
					? ((t.specifiers = []),
					  (t.source = null),
					  this.hasPlugin('importAssertions') && (t.assertions = []),
					  (t.declaration = this.parseExportDeclaration(t)),
					  !0)
					: !1;
			}
			isAsyncFunction() {
				if (!this.isContextual(95)) return !1;
				let t = this.nextTokenInLineStart();
				return this.isUnparsedContextual(t, 'function');
			}
			parseExportDefaultExpression() {
				let t = this.startNode();
				if (this.match(68)) return this.next(), this.parseFunction(t, 5);
				if (this.isAsyncFunction())
					return this.next(), this.next(), this.parseFunction(t, 13);
				if (this.match(80)) return this.parseClass(t, !0, !0);
				if (this.match(26))
					return (
						this.hasPlugin('decorators') &&
							this.getPluginOption('decorators', 'decoratorsBeforeExport') ===
								!0 &&
							this.raise(p.DecoratorBeforeExport, { at: this.state.startLoc }),
						this.parseClass(
							this.maybeTakeDecorators(
								this.parseDecorators(!1),
								this.startNode()
							),
							!0,
							!0
						)
					);
				if (this.match(75) || this.match(74) || this.isLet())
					throw this.raise(p.UnsupportedDefaultExport, {
						at: this.state.startLoc
					});
				let e = this.parseMaybeAssignAllowIn();
				return this.semicolon(), e;
			}
			parseExportDeclaration(t) {
				return this.match(80)
					? this.parseClass(this.startNode(), !0, !1)
					: this.parseStatementListItem();
			}
			isExportDefaultSpecifier() {
				let { type: t } = this.state;
				if (S(t)) {
					if ((t === 95 && !this.state.containsEsc) || t === 99) return !1;
					if ((t === 128 || t === 127) && !this.state.containsEsc) {
						let { type: i } = this.lookahead();
						if ((S(i) && i !== 97) || i === 5)
							return this.expectOnePlugin(['flow', 'typescript']), !1;
					}
				} else if (!this.match(65)) return !1;
				let e = this.nextTokenStart(),
					s = this.isUnparsedContextual(e, 'from');
				if (this.input.charCodeAt(e) === 44 || (S(this.state.type) && s))
					return !0;
				if (this.match(65) && s) {
					let i = this.input.charCodeAt(this.nextTokenStartSince(e + 4));
					return i === 34 || i === 39;
				}
				return !1;
			}
			parseExportFrom(t, e) {
				this.eatContextual(97)
					? ((t.source = this.parseImportSource()),
					  this.checkExport(t),
					  this.maybeParseImportAttributes(t),
					  this.checkJSONModuleImport(t))
					: e && this.unexpected(),
					this.semicolon();
			}
			shouldParseExportDeclaration() {
				let { type: t } = this.state;
				return t === 26 &&
					(this.expectOnePlugin(['decorators', 'decorators-legacy']),
					this.hasPlugin('decorators'))
					? (this.getPluginOption('decorators', 'decoratorsBeforeExport') ===
							!0 &&
							this.raise(p.DecoratorBeforeExport, { at: this.state.startLoc }),
					  !0)
					: t === 74 ||
							t === 75 ||
							t === 68 ||
							t === 80 ||
							this.isLet() ||
							this.isAsyncFunction();
			}
			checkExport(t, e, s, i) {
				if (e) {
					if (s) {
						if (
							(this.checkDuplicateExports(t, 'default'),
							this.hasPlugin('exportDefaultFrom'))
						) {
							var r;
							let n = t.declaration;
							n.type === 'Identifier' &&
								n.name === 'from' &&
								n.end - n.start === 4 &&
								!((r = n.extra) != null && r.parenthesized) &&
								this.raise(p.ExportDefaultFromAsIdentifier, { at: n });
						}
					} else if (t.specifiers && t.specifiers.length)
						for (let n of t.specifiers) {
							let { exported: o } = n,
								h = o.type === 'Identifier' ? o.name : o.value;
							if ((this.checkDuplicateExports(n, h), !i && n.local)) {
								let { local: l } = n;
								l.type !== 'Identifier'
									? this.raise(p.ExportBindingIsString, {
											at: n,
											localName: l.value,
											exportName: h
									  })
									: (this.checkReservedWord(l.name, l.loc.start, !0, !1),
									  this.scope.checkLocalExport(l));
							}
						}
					else if (t.declaration) {
						if (
							t.declaration.type === 'FunctionDeclaration' ||
							t.declaration.type === 'ClassDeclaration'
						) {
							let n = t.declaration.id;
							if (!n) throw new Error('Assertion failure');
							this.checkDuplicateExports(t, n.name);
						} else if (t.declaration.type === 'VariableDeclaration')
							for (let n of t.declaration.declarations)
								this.checkDeclaration(n.id);
					}
				}
			}
			checkDeclaration(t) {
				if (t.type === 'Identifier') this.checkDuplicateExports(t, t.name);
				else if (t.type === 'ObjectPattern')
					for (let e of t.properties) this.checkDeclaration(e);
				else if (t.type === 'ArrayPattern')
					for (let e of t.elements) e && this.checkDeclaration(e);
				else
					t.type === 'ObjectProperty'
						? this.checkDeclaration(t.value)
						: t.type === 'RestElement'
						? this.checkDeclaration(t.argument)
						: t.type === 'AssignmentPattern' && this.checkDeclaration(t.left);
			}
			checkDuplicateExports(t, e) {
				this.exportedIdentifiers.has(e) &&
					(e === 'default'
						? this.raise(p.DuplicateDefaultExport, { at: t })
						: this.raise(p.DuplicateExport, { at: t, exportName: e })),
					this.exportedIdentifiers.add(e);
			}
			parseExportSpecifiers(t) {
				let e = [],
					s = !0;
				for (this.expect(5); !this.eat(8); ) {
					if (s) s = !1;
					else if ((this.expect(12), this.eat(8))) break;
					let i = this.isContextual(128),
						r = this.match(131),
						n = this.startNode();
					(n.local = this.parseModuleExportName()),
						e.push(this.parseExportSpecifier(n, r, t, i));
				}
				return e;
			}
			parseExportSpecifier(t, e, s, i) {
				return (
					this.eatContextual(93)
						? (t.exported = this.parseModuleExportName())
						: e
						? (t.exported = Xr(t.local))
						: t.exported || (t.exported = K(t.local)),
					this.finishNode(t, 'ExportSpecifier')
				);
			}
			parseModuleExportName() {
				if (this.match(131)) {
					let t = this.parseStringLiteral(this.state.value),
						e = t.value.match(Pa);
					return (
						e &&
							this.raise(p.ModuleExportNameHasLoneSurrogate, {
								at: t,
								surrogateCharCode: e[0].charCodeAt(0)
							}),
						t
					);
				}
				return this.parseIdentifier(!0);
			}
			isJSONModuleImport(t) {
				return t.assertions != null
					? t.assertions.some(
							({ key: e, value: s }) =>
								s.value === 'json' &&
								(e.type === 'Identifier'
									? e.name === 'type'
									: e.value === 'type')
					  )
					: !1;
			}
			checkImportReflection(t) {
				if (t.module) {
					var e;
					(t.specifiers.length !== 1 ||
						t.specifiers[0].type !== 'ImportDefaultSpecifier') &&
						this.raise(p.ImportReflectionNotBinding, {
							at: t.specifiers[0].loc.start
						}),
						((e = t.assertions) == null ? void 0 : e.length) > 0 &&
							this.raise(p.ImportReflectionHasAssertion, {
								at: t.specifiers[0].loc.start
							});
				}
			}
			checkJSONModuleImport(t) {
				if (this.isJSONModuleImport(t) && t.type !== 'ExportAllDeclaration') {
					let { specifiers: e } = t;
					if (e != null) {
						let s = e.find((i) => {
							let r;
							if (
								(i.type === 'ExportSpecifier'
									? (r = i.local)
									: i.type === 'ImportSpecifier' && (r = i.imported),
								r !== void 0)
							)
								return r.type === 'Identifier'
									? r.name !== 'default'
									: r.value !== 'default';
						});
						s !== void 0 &&
							this.raise(p.ImportJSONBindingNotDefault, { at: s.loc.start });
					}
				}
			}
			isPotentialImportPhase(t) {
				return !t && this.isContextual(125);
			}
			applyImportPhase(t, e, s, i) {
				e ||
					(s === 'module'
						? (this.expectPlugin('importReflection', i), (t.module = !0))
						: this.hasPlugin('importReflection') && (t.module = !1));
			}
			parseMaybeImportPhase(t, e) {
				if (!this.isPotentialImportPhase(e))
					return this.applyImportPhase(t, e, null), null;
				let s = this.parseIdentifier(!0),
					{ type: i } = this.state;
				return (M(i) ? i !== 97 || this.lookaheadCharCode() === 102 : i !== 12)
					? (this.resetPreviousIdentifierLeadingComments(s),
					  this.applyImportPhase(t, e, s.name, s.loc.start),
					  null)
					: (this.applyImportPhase(t, e, null), s);
			}
			isPrecedingIdImportPhase(t) {
				let { type: e } = this.state;
				return S(e) ? e !== 97 || this.lookaheadCharCode() === 102 : e !== 12;
			}
			parseImport(t) {
				return this.match(131)
					? this.parseImportSourceAndAttributes(t)
					: this.parseImportSpecifiersAndAfter(
							t,
							this.parseMaybeImportPhase(t, !1)
					  );
			}
			parseImportSpecifiersAndAfter(t, e) {
				t.specifiers = [];
				let i = !this.maybeParseDefaultImportSpecifier(t, e) || this.eat(12),
					r = i && this.maybeParseStarImportSpecifier(t);
				return (
					i && !r && this.parseNamedImportSpecifiers(t),
					this.expectContextual(97),
					this.parseImportSourceAndAttributes(t)
				);
			}
			parseImportSourceAndAttributes(t) {
				return (
					t.specifiers != null || (t.specifiers = []),
					(t.source = this.parseImportSource()),
					this.maybeParseImportAttributes(t),
					this.checkImportReflection(t),
					this.checkJSONModuleImport(t),
					this.semicolon(),
					this.finishNode(t, 'ImportDeclaration')
				);
			}
			parseImportSource() {
				return this.match(131) || this.unexpected(), this.parseExprAtom();
			}
			parseImportSpecifierLocal(t, e, s) {
				(e.local = this.parseIdentifier()),
					t.specifiers.push(this.finishImportSpecifier(e, s));
			}
			finishImportSpecifier(t, e, s = ce) {
				return (
					this.checkLVal(t.local, { in: { type: e }, binding: s }),
					this.finishNode(t, e)
				);
			}
			parseImportAttributes() {
				this.expect(5);
				let t = [],
					e = new Set();
				do {
					if (this.match(8)) break;
					let s = this.startNode(),
						i = this.state.value;
					if (
						(e.has(i) &&
							this.raise(p.ModuleAttributesWithDuplicateKeys, {
								at: this.state.startLoc,
								key: i
							}),
						e.add(i),
						this.match(131)
							? (s.key = this.parseStringLiteral(i))
							: (s.key = this.parseIdentifier(!0)),
						this.expect(14),
						!this.match(131))
					)
						throw this.raise(p.ModuleAttributeInvalidValue, {
							at: this.state.startLoc
						});
					(s.value = this.parseStringLiteral(this.state.value)),
						t.push(this.finishNode(s, 'ImportAttribute'));
				} while (this.eat(12));
				return this.expect(8), t;
			}
			parseModuleAttributes() {
				let t = [],
					e = new Set();
				do {
					let s = this.startNode();
					if (
						((s.key = this.parseIdentifier(!0)),
						s.key.name !== 'type' &&
							this.raise(p.ModuleAttributeDifferentFromType, { at: s.key }),
						e.has(s.key.name) &&
							this.raise(p.ModuleAttributesWithDuplicateKeys, {
								at: s.key,
								key: s.key.name
							}),
						e.add(s.key.name),
						this.expect(14),
						!this.match(131))
					)
						throw this.raise(p.ModuleAttributeInvalidValue, {
							at: this.state.startLoc
						});
					(s.value = this.parseStringLiteral(this.state.value)),
						t.push(this.finishNode(s, 'ImportAttribute'));
				} while (this.eat(12));
				return t;
			}
			maybeParseImportAttributes(t) {
				let e,
					s = !1;
				if (this.match(76)) {
					if (this.hasPrecedingLineBreak() && this.lookaheadCharCode() === 40)
						return;
					this.next(),
						this.hasPlugin('moduleAttributes')
							? (e = this.parseModuleAttributes())
							: (this.expectImportAttributesPlugin(),
							  (e = this.parseImportAttributes())),
						(s = !0);
				} else if (this.isContextual(94) && !this.hasPrecedingLineBreak())
					this.hasPlugin('importAttributes')
						? (this.getPluginOption(
								'importAttributes',
								'deprecatedAssertSyntax'
						  ) !== !0 &&
								this.raise(p.ImportAttributesUseAssert, {
									at: this.state.startLoc
								}),
						  this.addExtra(t, 'deprecatedAssertSyntax', !0))
						: this.expectOnePlugin(['importAttributes', 'importAssertions']),
						this.next(),
						(e = this.parseImportAttributes());
				else if (
					this.hasPlugin('importAttributes') ||
					this.hasPlugin('importAssertions')
				)
					e = [];
				else if (this.hasPlugin('moduleAttributes')) e = [];
				else return;
				!s && this.hasPlugin('importAssertions')
					? (t.assertions = e)
					: (t.attributes = e);
			}
			maybeParseDefaultImportSpecifier(t, e) {
				if (e) {
					let s = this.startNodeAtNode(e);
					return (
						(s.local = e),
						t.specifiers.push(
							this.finishImportSpecifier(s, 'ImportDefaultSpecifier')
						),
						!0
					);
				} else if (M(this.state.type))
					return (
						this.parseImportSpecifierLocal(
							t,
							this.startNode(),
							'ImportDefaultSpecifier'
						),
						!0
					);
				return !1;
			}
			maybeParseStarImportSpecifier(t) {
				if (this.match(55)) {
					let e = this.startNode();
					return (
						this.next(),
						this.expectContextual(93),
						this.parseImportSpecifierLocal(t, e, 'ImportNamespaceSpecifier'),
						!0
					);
				}
				return !1;
			}
			parseNamedImportSpecifiers(t) {
				let e = !0;
				for (this.expect(5); !this.eat(8); ) {
					if (e) e = !1;
					else {
						if (this.eat(14))
							throw this.raise(p.DestructureNamedImport, {
								at: this.state.startLoc
							});
						if ((this.expect(12), this.eat(8))) break;
					}
					let s = this.startNode(),
						i = this.match(131),
						r = this.isContextual(128);
					s.imported = this.parseModuleExportName();
					let n = this.parseImportSpecifier(
						s,
						i,
						t.importKind === 'type' || t.importKind === 'typeof',
						r,
						void 0
					);
					t.specifiers.push(n);
				}
			}
			parseImportSpecifier(t, e, s, i, r) {
				if (this.eatContextual(93)) t.local = this.parseIdentifier();
				else {
					let { imported: n } = t;
					if (e)
						throw this.raise(p.ImportBindingIsString, {
							at: t,
							importName: n.value
						});
					this.checkReservedWord(n.name, t.loc.start, !0, !0),
						t.local || (t.local = K(n));
				}
				return this.finishImportSpecifier(t, 'ImportSpecifier', r);
			}
			isThisParam(t) {
				return t.type === 'Identifier' && t.name === 'this';
			}
		},
		tt = class extends Vt {
			constructor(t, e) {
				(t = ya(t)),
					super(t, e),
					(this.options = t),
					this.initializeScopes(),
					(this.plugins = ga(this.options.plugins)),
					(this.filename = t.sourceFilename);
			}
			getScopeHandler() {
				return Le;
			}
			parse() {
				this.enterInitialScopes();
				let t = this.startNode(),
					e = this.startNode();
				return (
					this.nextToken(),
					(t.errors = null),
					this.parseTopLevel(t, e),
					(t.errors = this.state.errors),
					t
				);
			}
		};
	function ga(a) {
		let t = new Map();
		for (let e of a) {
			let [s, i] = Array.isArray(e) ? e : [e, {}];
			t.has(s) || t.set(s, i || {});
		}
		return t;
	}
	function ba(a, t) {
		var e;
		if (((e = t) == null ? void 0 : e.sourceType) === 'unambiguous') {
			t = Object.assign({}, t);
			try {
				t.sourceType = 'module';
				let s = we(t, a),
					i = s.parse();
				if (s.sawUnambiguousESM) return i;
				if (s.ambiguousScriptDifferentAst)
					try {
						return (t.sourceType = 'script'), we(t, a).parse();
					} catch {}
				else i.program.sourceType = 'script';
				return i;
			} catch (s) {
				try {
					return (t.sourceType = 'script'), we(t, a).parse();
				} catch {}
				throw s;
			}
		} else return we(t, a).parse();
	}
	function Aa(a, t) {
		let e = we(t, a);
		return e.options.strictMode && (e.state.strict = !0), e.getExpression();
	}
	function Sa(a) {
		let t = {};
		for (let e of Object.keys(a)) t[e] = U(a[e]);
		return t;
	}
	var Ea = Sa(rr);
	function we(a, t) {
		let e = tt;
		return (
			a != null && a.plugins && (da(a.plugins), (e = Ca(a.plugins))),
			new e(a, t)
		);
	}
	var Ns = {};
	function Ca(a) {
		let t = ma.filter((i) => k(a, i)),
			e = t.join('/'),
			s = Ns[e];
		if (!s) {
			s = tt;
			for (let i of t) s = ti[i](s);
			Ns[e] = s;
		}
		return s;
	}
	Me.parse = ba;
	Me.parseExpression = Aa;
	Me.tokTypes = Ea;
});
var mi = ps((ie) => {
	Object.defineProperty(ie, '__esModule', { value: !0 });
	ie.extract = _a;
	ie.parse = Ua;
	ie.parseWithComments = di;
	ie.print = ja;
	ie.strip = Ra;
	var Da = /\*\/$/,
		Ma = /^\/\*\*?/,
		ui = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/,
		Oa = /(^|\s+)\/\/([^\r\n]*)/g,
		li = /^(\r?\n)+/,
		Ba =
			/(?:^|\r?\n) *(@[^\r\n]*?) *\r?\n *(?![^@\r\n]*\/\/[^]*)([^@\r\n\s][^@\r\n]+?) *\r?\n/g,
		ci = /(?:^|\r?\n) *@(\S+) *([^\r\n]*)/g,
		Fa = /(\r?\n|^) *\* ?/g,
		fi = [];
	function _a(a) {
		let t = a.match(ui);
		return t ? t[0].trimLeft() : '';
	}
	function Ra(a) {
		let t = a.match(ui);
		return t && t[0] ? a.substring(t[0].length) : a;
	}
	function Ua(a) {
		return di(a).pragmas;
	}
	function di(a) {
		let t = `
`;
		a = a.replace(Ma, '').replace(Da, '').replace(Fa, '$1');
		let e = '';
		for (; e !== a; ) (e = a), (a = a.replace(Ba, `${t}$1 $2${t}`));
		a = a.replace(li, '').trimRight();
		let s = Object.create(null),
			i = a.replace(ci, '').replace(li, '').trimRight(),
			r;
		for (; (r = ci.exec(a)); ) {
			let n = r[2].replace(Oa, '');
			typeof s[r[1]] == 'string' || Array.isArray(s[r[1]])
				? (s[r[1]] = fi.concat(s[r[1]], n))
				: (s[r[1]] = n);
		}
		return { comments: i, pragmas: s };
	}
	function ja({ comments: a = '', pragmas: t = {} }) {
		let e = `
`,
			s = '/**',
			i = ' *',
			r = ' */',
			n = Object.keys(t),
			o = n
				.map((l) => pi(l, t[l]))
				.reduce((l, c) => l.concat(c), [])
				.map((l) => `${i} ${l}${e}`)
				.join('');
		if (!a) {
			if (n.length === 0) return '';
			if (n.length === 1 && !Array.isArray(t[n[0]])) {
				let l = t[n[0]];
				return `${s} ${pi(n[0], l)[0]}${r}`;
			}
		}
		let h =
			a
				.split(e)
				.map((l) => `${i} ${l}`)
				.join(e) + e;
		return s + e + (a ? h : '') + (a && n.length ? i + e : '') + o + r;
	}
	function pi(a, t) {
		return fi.concat(t).map((e) => `@${a} ${e}`.trim());
	}
});
var cs = {};
zi(cs, { parsers: () => dn });
var lt = pt(rs(), 1);
function wa(a) {
	let t = [];
	for (let e of a)
		try {
			return e();
		} catch (s) {
			t.push(s);
		}
	throw Object.assign(new Error('All combinations failed'), { errors: t });
}
var si = wa;
function Ia(a) {
	if (!a.startsWith('#!')) return '';
	let t = a.indexOf(`
`);
	return t === -1 ? a : a.slice(0, t);
}
var rt = Ia;
function Na(a, t) {
	if (t === !1) return !1;
	if (a.charAt(t) === '/' && a.charAt(t + 1) === '*') {
		for (let e = t + 2; e < a.length; ++e)
			if (a.charAt(e) === '*' && a.charAt(e + 1) === '/') return e + 2;
	}
	return t;
}
var ii = Na;
function ka(a, t, e) {
	let s = !!(e != null && e.backwards);
	if (t === !1) return !1;
	let i = a.charAt(t);
	if (s) {
		if (
			a.charAt(t - 1) === '\r' &&
			i ===
				`
`
		)
			return t - 2;
		if (
			i ===
				`
` ||
			i === '\r' ||
			i === '\u2028' ||
			i === '\u2029'
		)
			return t - 1;
	} else {
		if (
			i === '\r' &&
			a.charAt(t + 1) ===
				`
`
		)
			return t + 2;
		if (
			i ===
				`
` ||
			i === '\r' ||
			i === '\u2028' ||
			i === '\u2029'
		)
			return t + 1;
	}
	return t;
}
var ri = ka;
function at(a) {
	return (t, e, s) => {
		let i = !!(s != null && s.backwards);
		if (e === !1) return !1;
		let { length: r } = t,
			n = e;
		for (; n >= 0 && n < r; ) {
			let o = t.charAt(n);
			if (a instanceof RegExp) {
				if (!a.test(o)) return n;
			} else if (!a.includes(o)) return n;
			i ? n-- : n++;
		}
		return n === -1 || n === r ? n : !1;
	};
}
var ai = at(' 	'),
	ni = at(/[^\n\r]/);
function va(a, t) {
	return t === !1
		? !1
		: a.charAt(t) === '/' && a.charAt(t + 1) === '/'
		? ni(a, t)
		: t;
}
var oi = va;
function La(a, t) {
	let e = null,
		s = t;
	for (; s !== e; )
		(e = s), (s = ai(a, s)), (s = ii(a, s)), (s = oi(a, s)), (s = ri(a, s));
	return s;
}
var hi = La;
var ye = pt(mi(), 1);
function $a(a) {
	let t = rt(a);
	t && (a = a.slice(t.length + 1));
	let e = (0, ye.extract)(a),
		{ pragmas: s, comments: i } = (0, ye.parseWithComments)(e);
	return { shebang: t, text: a, pragmas: s, comments: i };
}
function yi(a) {
	let { pragmas: t } = $a(a);
	return (
		Object.prototype.hasOwnProperty.call(t, 'prettier') ||
		Object.prototype.hasOwnProperty.call(t, 'format')
	);
}
function Va(a) {
	return Array.isArray(a) && a.length > 0;
}
var X = Va;
function D(a) {
	var s;
	let t = a.range ? a.range[0] : a.start,
		e = ((s = a.declaration) == null ? void 0 : s.decorators) ?? a.decorators;
	return X(e) ? Math.min(D(e[0]), t) : t;
}
function _(a) {
	return a.range ? a.range[1] : a.end;
}
function za(a) {
	return (
		(a = typeof a == 'function' ? { parse: a } : a),
		{ astFormat: 'estree', hasPragma: yi, locStart: D, locEnd: _, ...a }
	);
}
var xe = za;
function Ka(a, t) {
	let e = new SyntaxError(
		a + ' (' + t.loc.start.line + ':' + t.loc.start.column + ')'
	);
	return Object.assign(e, t);
}
var Pe = Ka;
function qa(a) {
	let { message: t, loc: e } = a;
	return Pe(t.replace(/ \(.*\)$/, ''), {
		loc: { start: { line: e ? e.line : 0, column: e ? e.column + 1 : 0 } },
		cause: a
	});
}
var Oe = qa;
var Ha = (a, t, e) => {
		if (!(a && t == null))
			return Array.isArray(t) || typeof t == 'string'
				? t[e < 0 ? t.length + e : e]
				: t.at(e);
	},
	as = Ha;
function Wa(a) {
	return (a = new Set(a)), (t) => a.has(t == null ? void 0 : t.type);
}
var xi = Wa;
var Ja = xi(['Block', 'CommentBlock', 'MultiLine']),
	Be = Ja;
function Xa(a) {
	return Be(a) && a.value[0] === '*' && /@(?:type|satisfies)\b/.test(a.value);
}
var Pi = Xa;
function Ga(a) {
	let t = `*${a.value}*`.split(`
`);
	return t.length > 1 && t.every((e) => e.trimStart()[0] === '*');
}
var ns = Ga;
var Fe = null;
function _e(a) {
	if (Fe !== null && typeof Fe.property) {
		let t = Fe;
		return (Fe = _e.prototype = null), t;
	}
	return (Fe = _e.prototype = a ?? Object.create(null)), new _e();
}
var Ya = 10;
for (let a = 0; a <= Ya; a++) _e();
function os(a) {
	return _e(a);
}
function Qa(a, t = 'type') {
	os(a);
	function e(s) {
		let i = s[t],
			r = a[i];
		if (!Array.isArray(r))
			throw Object.assign(new Error(`Missing visitor keys for '${i}'.`), {
				node: s
			});
		return r;
	}
	return e;
}
var Ti = Qa;
var gi = {
	ArrayExpression: ['elements'],
	AssignmentExpression: ['left', 'right'],
	BinaryExpression: ['left', 'right'],
	InterpreterDirective: [],
	Directive: ['value'],
	DirectiveLiteral: [],
	BlockStatement: ['directives', 'body'],
	BreakStatement: ['label'],
	CallExpression: ['callee', 'arguments', 'typeParameters', 'typeArguments'],
	CatchClause: ['param', 'body'],
	ConditionalExpression: ['test', 'consequent', 'alternate'],
	ContinueStatement: ['label'],
	DebuggerStatement: [],
	DoWhileStatement: ['test', 'body'],
	EmptyStatement: [],
	ExpressionStatement: ['expression'],
	File: ['program'],
	ForInStatement: ['left', 'right', 'body'],
	ForStatement: ['init', 'test', 'update', 'body'],
	FunctionDeclaration: [
		'id',
		'params',
		'body',
		'returnType',
		'typeParameters',
		'predicate'
	],
	FunctionExpression: ['id', 'params', 'body', 'returnType', 'typeParameters'],
	Identifier: ['typeAnnotation', 'decorators'],
	IfStatement: ['test', 'consequent', 'alternate'],
	LabeledStatement: ['label', 'body'],
	StringLiteral: [],
	NumericLiteral: [],
	NullLiteral: [],
	BooleanLiteral: [],
	RegExpLiteral: [],
	LogicalExpression: ['left', 'right'],
	MemberExpression: ['object', 'property'],
	NewExpression: ['callee', 'arguments', 'typeParameters', 'typeArguments'],
	Program: ['directives', 'body'],
	ObjectExpression: ['properties'],
	ObjectMethod: [
		'key',
		'params',
		'body',
		'decorators',
		'returnType',
		'typeParameters'
	],
	ObjectProperty: ['key', 'value', 'decorators'],
	RestElement: ['argument', 'typeAnnotation', 'decorators'],
	ReturnStatement: ['argument'],
	SequenceExpression: ['expressions'],
	ParenthesizedExpression: ['expression'],
	SwitchCase: ['test', 'consequent'],
	SwitchStatement: ['discriminant', 'cases'],
	ThisExpression: [],
	ThrowStatement: ['argument'],
	TryStatement: ['block', 'handler', 'finalizer'],
	UnaryExpression: ['argument'],
	UpdateExpression: ['argument'],
	VariableDeclaration: ['declarations'],
	VariableDeclarator: ['id', 'init'],
	WhileStatement: ['test', 'body'],
	WithStatement: ['object', 'body'],
	AssignmentPattern: ['left', 'right', 'decorators', 'typeAnnotation'],
	ArrayPattern: ['elements', 'typeAnnotation', 'decorators'],
	ArrowFunctionExpression: [
		'params',
		'body',
		'returnType',
		'typeParameters',
		'predicate'
	],
	ClassBody: ['body'],
	ClassExpression: [
		'id',
		'body',
		'superClass',
		'mixins',
		'typeParameters',
		'superTypeParameters',
		'implements',
		'decorators'
	],
	ClassDeclaration: [
		'id',
		'body',
		'superClass',
		'mixins',
		'typeParameters',
		'superTypeParameters',
		'implements',
		'decorators'
	],
	ExportAllDeclaration: ['source', 'attributes', 'assertions', 'exported'],
	ExportDefaultDeclaration: ['declaration'],
	ExportNamedDeclaration: [
		'declaration',
		'specifiers',
		'source',
		'attributes',
		'assertions'
	],
	ExportSpecifier: ['local', 'exported'],
	ForOfStatement: ['left', 'right', 'body'],
	ImportDeclaration: ['specifiers', 'source', 'attributes', 'assertions'],
	ImportDefaultSpecifier: ['local'],
	ImportNamespaceSpecifier: ['local'],
	ImportSpecifier: ['local', 'imported'],
	MetaProperty: ['meta', 'property'],
	ClassMethod: [
		'key',
		'params',
		'body',
		'decorators',
		'returnType',
		'typeParameters'
	],
	ObjectPattern: ['properties', 'typeAnnotation', 'decorators'],
	SpreadElement: ['argument'],
	Super: [],
	TaggedTemplateExpression: ['tag', 'quasi', 'typeParameters'],
	TemplateElement: [],
	TemplateLiteral: ['quasis', 'expressions'],
	YieldExpression: ['argument'],
	AwaitExpression: ['argument'],
	Import: [],
	BigIntLiteral: [],
	ExportNamespaceSpecifier: ['exported'],
	OptionalMemberExpression: ['object', 'property'],
	OptionalCallExpression: [
		'callee',
		'arguments',
		'typeParameters',
		'typeArguments'
	],
	ClassProperty: ['key', 'value', 'typeAnnotation', 'decorators', 'variance'],
	ClassAccessorProperty: ['key', 'value', 'typeAnnotation', 'decorators'],
	ClassPrivateProperty: [
		'key',
		'value',
		'decorators',
		'typeAnnotation',
		'variance'
	],
	ClassPrivateMethod: [
		'key',
		'params',
		'body',
		'decorators',
		'returnType',
		'typeParameters'
	],
	PrivateName: ['id'],
	StaticBlock: ['body'],
	AnyTypeAnnotation: [],
	ArrayTypeAnnotation: ['elementType'],
	BooleanTypeAnnotation: [],
	BooleanLiteralTypeAnnotation: [],
	NullLiteralTypeAnnotation: [],
	ClassImplements: ['id', 'typeParameters'],
	DeclareClass: [
		'id',
		'typeParameters',
		'extends',
		'mixins',
		'implements',
		'body'
	],
	DeclareFunction: ['id', 'predicate'],
	DeclareInterface: ['id', 'typeParameters', 'extends', 'body'],
	DeclareModule: ['id', 'body'],
	DeclareModuleExports: ['typeAnnotation'],
	DeclareTypeAlias: ['id', 'typeParameters', 'right'],
	DeclareOpaqueType: ['id', 'typeParameters', 'supertype'],
	DeclareVariable: ['id'],
	DeclareExportDeclaration: ['declaration', 'specifiers', 'source'],
	DeclareExportAllDeclaration: ['source'],
	DeclaredPredicate: ['value'],
	ExistsTypeAnnotation: [],
	FunctionTypeAnnotation: [
		'typeParameters',
		'params',
		'rest',
		'returnType',
		'this'
	],
	FunctionTypeParam: ['name', 'typeAnnotation'],
	GenericTypeAnnotation: ['id', 'typeParameters'],
	InferredPredicate: [],
	InterfaceExtends: ['id', 'typeParameters'],
	InterfaceDeclaration: ['id', 'typeParameters', 'extends', 'body'],
	InterfaceTypeAnnotation: ['extends', 'body'],
	IntersectionTypeAnnotation: ['types'],
	MixedTypeAnnotation: [],
	EmptyTypeAnnotation: [],
	NullableTypeAnnotation: ['typeAnnotation'],
	NumberLiteralTypeAnnotation: [],
	NumberTypeAnnotation: [],
	ObjectTypeAnnotation: [
		'properties',
		'indexers',
		'callProperties',
		'internalSlots'
	],
	ObjectTypeInternalSlot: ['id', 'value', 'optional', 'static', 'method'],
	ObjectTypeCallProperty: ['value'],
	ObjectTypeIndexer: ['id', 'key', 'value', 'variance'],
	ObjectTypeProperty: ['key', 'value', 'variance'],
	ObjectTypeSpreadProperty: ['argument'],
	OpaqueType: ['id', 'typeParameters', 'supertype', 'impltype'],
	QualifiedTypeIdentifier: ['id', 'qualification'],
	StringLiteralTypeAnnotation: [],
	StringTypeAnnotation: [],
	SymbolTypeAnnotation: [],
	ThisTypeAnnotation: [],
	TupleTypeAnnotation: ['types', 'elementTypes'],
	TypeofTypeAnnotation: ['argument'],
	TypeAlias: ['id', 'typeParameters', 'right'],
	TypeAnnotation: ['typeAnnotation'],
	TypeCastExpression: ['expression', 'typeAnnotation'],
	TypeParameter: ['bound', 'default', 'variance'],
	TypeParameterDeclaration: ['params'],
	TypeParameterInstantiation: ['params'],
	UnionTypeAnnotation: ['types'],
	Variance: [],
	VoidTypeAnnotation: [],
	EnumDeclaration: ['id', 'body'],
	EnumBooleanBody: ['members'],
	EnumNumberBody: ['members'],
	EnumStringBody: ['members'],
	EnumSymbolBody: ['members'],
	EnumBooleanMember: ['id', 'init'],
	EnumNumberMember: ['id', 'init'],
	EnumStringMember: ['id', 'init'],
	EnumDefaultedMember: ['id'],
	IndexedAccessType: ['objectType', 'indexType'],
	OptionalIndexedAccessType: ['objectType', 'indexType'],
	JSXAttribute: ['name', 'value'],
	JSXClosingElement: ['name'],
	JSXElement: ['openingElement', 'children', 'closingElement'],
	JSXEmptyExpression: [],
	JSXExpressionContainer: ['expression'],
	JSXSpreadChild: ['expression'],
	JSXIdentifier: [],
	JSXMemberExpression: ['object', 'property'],
	JSXNamespacedName: ['namespace', 'name'],
	JSXOpeningElement: ['name', 'attributes', 'typeParameters'],
	JSXSpreadAttribute: ['argument'],
	JSXText: [],
	JSXFragment: ['openingFragment', 'children', 'closingFragment'],
	JSXOpeningFragment: [],
	JSXClosingFragment: [],
	Noop: [],
	Placeholder: [],
	V8IntrinsicIdentifier: [],
	ArgumentPlaceholder: [],
	BindExpression: ['object', 'callee'],
	ImportAttribute: ['key', 'value'],
	Decorator: ['expression'],
	DoExpression: ['body'],
	ExportDefaultSpecifier: ['exported'],
	RecordExpression: ['properties'],
	TupleExpression: ['elements'],
	DecimalLiteral: [],
	ModuleExpression: ['body'],
	TopicReference: [],
	PipelineTopicExpression: ['expression'],
	PipelineBareFunction: ['callee'],
	PipelinePrimaryTopicReference: [],
	TSParameterProperty: ['parameter', 'decorators'],
	TSDeclareFunction: ['id', 'typeParameters', 'params', 'returnType', 'body'],
	TSDeclareMethod: [
		'decorators',
		'key',
		'typeParameters',
		'params',
		'returnType'
	],
	TSQualifiedName: ['left', 'right'],
	TSCallSignatureDeclaration: [
		'typeParameters',
		'parameters',
		'typeAnnotation',
		'params',
		'returnType'
	],
	TSConstructSignatureDeclaration: [
		'typeParameters',
		'parameters',
		'typeAnnotation',
		'params',
		'returnType'
	],
	TSPropertySignature: ['key', 'typeAnnotation'],
	TSMethodSignature: [
		'key',
		'typeParameters',
		'parameters',
		'typeAnnotation',
		'params',
		'returnType'
	],
	TSIndexSignature: ['parameters', 'typeAnnotation'],
	TSAnyKeyword: [],
	TSBooleanKeyword: [],
	TSBigIntKeyword: [],
	TSIntrinsicKeyword: [],
	TSNeverKeyword: [],
	TSNullKeyword: [],
	TSNumberKeyword: [],
	TSObjectKeyword: [],
	TSStringKeyword: [],
	TSSymbolKeyword: [],
	TSUndefinedKeyword: [],
	TSUnknownKeyword: [],
	TSVoidKeyword: [],
	TSThisType: [],
	TSFunctionType: [
		'typeParameters',
		'parameters',
		'typeAnnotation',
		'params',
		'returnType'
	],
	TSConstructorType: [
		'typeParameters',
		'parameters',
		'typeAnnotation',
		'params',
		'returnType'
	],
	TSTypeReference: ['typeName', 'typeParameters'],
	TSTypePredicate: ['parameterName', 'typeAnnotation'],
	TSTypeQuery: ['exprName', 'typeParameters'],
	TSTypeLiteral: ['members'],
	TSArrayType: ['elementType'],
	TSTupleType: ['elementTypes'],
	TSOptionalType: ['typeAnnotation'],
	TSRestType: ['typeAnnotation'],
	TSNamedTupleMember: ['label', 'elementType'],
	TSUnionType: ['types'],
	TSIntersectionType: ['types'],
	TSConditionalType: ['checkType', 'extendsType', 'trueType', 'falseType'],
	TSInferType: ['typeParameter'],
	TSParenthesizedType: ['typeAnnotation'],
	TSTypeOperator: ['typeAnnotation'],
	TSIndexedAccessType: ['objectType', 'indexType'],
	TSMappedType: ['typeParameter', 'typeAnnotation', 'nameType'],
	TSLiteralType: ['literal'],
	TSExpressionWithTypeArguments: ['expression', 'typeParameters'],
	TSInterfaceDeclaration: ['id', 'typeParameters', 'extends', 'body'],
	TSInterfaceBody: ['body'],
	TSTypeAliasDeclaration: ['id', 'typeParameters', 'typeAnnotation'],
	TSInstantiationExpression: ['expression', 'typeParameters'],
	TSAsExpression: ['expression', 'typeAnnotation'],
	TSSatisfiesExpression: ['expression', 'typeAnnotation'],
	TSTypeAssertion: ['typeAnnotation', 'expression'],
	TSEnumDeclaration: ['id', 'members'],
	TSEnumMember: ['id', 'initializer'],
	TSModuleDeclaration: ['id', 'body'],
	TSModuleBlock: ['body'],
	TSImportType: ['argument', 'qualifier', 'typeParameters', 'parameter'],
	TSImportEqualsDeclaration: ['id', 'moduleReference'],
	TSExternalModuleReference: ['expression'],
	TSNonNullExpression: ['expression'],
	TSExportAssignment: ['expression'],
	TSNamespaceExportDeclaration: ['id'],
	TSTypeAnnotation: ['typeAnnotation'],
	TSTypeParameterInstantiation: ['params'],
	TSTypeParameterDeclaration: ['params'],
	TSTypeParameter: ['constraint', 'default', 'name'],
	ChainExpression: ['expression'],
	ExperimentalRestProperty: ['argument'],
	ExperimentalSpreadProperty: ['argument'],
	ImportExpression: ['source', 'attributes'],
	Literal: [],
	MethodDefinition: ['decorators', 'key', 'value'],
	PrivateIdentifier: [],
	Property: ['key', 'value'],
	PropertyDefinition: [
		'decorators',
		'key',
		'typeAnnotation',
		'value',
		'variance'
	],
	AccessorProperty: ['decorators', 'key', 'typeAnnotation', 'value'],
	TSAbstractAccessorProperty: ['decorators', 'key', 'typeAnnotation'],
	TSAbstractKeyword: [],
	TSAbstractMethodDefinition: ['key', 'value'],
	TSAbstractPropertyDefinition: ['decorators', 'key', 'typeAnnotation'],
	TSAsyncKeyword: [],
	TSClassImplements: ['expression', 'typeParameters'],
	TSDeclareKeyword: [],
	TSEmptyBodyFunctionExpression: [
		'id',
		'typeParameters',
		'params',
		'returnType'
	],
	TSExportKeyword: [],
	TSInterfaceHeritage: ['expression', 'typeParameters'],
	TSPrivateKeyword: [],
	TSProtectedKeyword: [],
	TSPublicKeyword: [],
	TSReadonlyKeyword: [],
	TSStaticKeyword: [],
	TSTemplateLiteralType: ['quasis', 'types'],
	BigIntLiteralTypeAnnotation: [],
	BigIntTypeAnnotation: [],
	ConditionalTypeAnnotation: [
		'checkType',
		'extendsType',
		'trueType',
		'falseType'
	],
	DeclareEnum: ['id', 'body'],
	InferTypeAnnotation: ['typeParameter'],
	KeyofTypeAnnotation: ['argument'],
	ObjectTypeMappedTypeProperty: [
		'keyTparam',
		'propType',
		'sourceType',
		'variance'
	],
	QualifiedTypeofIdentifier: ['qualification', 'id'],
	TupleTypeLabeledElement: ['label', 'elementType', 'variance'],
	TupleTypeSpreadElement: ['label', 'typeAnnotation'],
	TypePredicate: ['parameterName', 'typeAnnotation', 'asserts'],
	NGRoot: ['node'],
	NGPipeExpression: ['left', 'right', 'arguments'],
	NGChainedExpression: ['expressions'],
	NGEmptyExpression: [],
	NGMicrosyntax: ['body'],
	NGMicrosyntaxKey: [],
	NGMicrosyntaxExpression: ['expression', 'alias'],
	NGMicrosyntaxKeyedExpression: ['key', 'expression'],
	NGMicrosyntaxLet: ['key', 'value'],
	NGMicrosyntaxAs: ['key', 'alias'],
	JsExpressionRoot: ['node'],
	JsonRoot: ['node'],
	TSJSDocAllType: [],
	TSJSDocUnknownType: [],
	TSJSDocNullableType: ['typeAnnotation'],
	TSJSDocNonNullableType: ['typeAnnotation'],
	NeverTypeAnnotation: [],
	UndefinedTypeAnnotation: [],
	UnknownTypeAnnotation: []
};
var Za = Ti(gi),
	bi = Za;
function hs(a, t) {
	if (!(a !== null && typeof a == 'object')) return a;
	if (Array.isArray(a)) {
		for (let s = 0; s < a.length; s++) a[s] = hs(a[s], t);
		return a;
	}
	let e = bi(a);
	for (let s = 0; s < e.length; s++) a[e[s]] = hs(a[e[s]], t);
	return t(a) || a;
}
var nt = hs;
function en(a, t) {
	let { start: e, end: s } = a.loc;
	throw Pe(t, {
		loc: {
			start: { line: e.line, column: e.column + 1 },
			end: { line: s.line, column: s.column + 1 }
		}
	});
}
var ot = en;
function tn(a, t) {
	let { parser: e, text: s } = t;
	if (a.type === 'File' && a.program.interpreter) {
		let {
			program: { interpreter: r },
			comments: n
		} = a;
		delete a.program.interpreter, n.unshift(r);
	}
	if (e === 'babel') {
		let r = new Set();
		(a = nt(a, (n) => {
			var o;
			(o = n.leadingComments) != null && o.some(Pi) && r.add(D(n));
		})),
			(a = nt(a, (n) => {
				if (n.type === 'ParenthesizedExpression') {
					let { expression: o } = n;
					if (o.type === 'TypeCastExpression') return (o.range = n.range), o;
					let h = D(n);
					if (!r.has(h))
						return (o.extra = { ...o.extra, parenthesized: !0 }), o;
				}
			}));
	}
	if (
		((a = nt(a, (r) => {
			switch (r.type) {
				case 'LogicalExpression':
					if (Ai(r)) return ls(r);
					break;
				case 'VariableDeclaration': {
					let n = as(!1, r.declarations, -1);
					n != null && n.init && i(r, n);
					break;
				}
				case 'TSParenthesizedType':
					return r.typeAnnotation;
				case 'TSTypeParameter':
					if (typeof r.name == 'string') {
						let n = D(r);
						r.name = {
							type: 'Identifier',
							name: r.name,
							range: [n, n + r.name.length]
						};
					}
					break;
				case 'ObjectExpression':
					if (e === 'typescript') {
						let n = r.properties.find(
							(o) =>
								o.type === 'Property' &&
								o.value.type === 'TSEmptyBodyFunctionExpression'
						);
						n && ot(n.value, 'Unexpected token.');
					}
					break;
				case 'TSInterfaceDeclaration':
					X(r.implements) &&
						ot(
							r.implements[0],
							"Interface declaration cannot have 'implements' clause."
						);
					break;
				case 'TSPropertySignature':
					r.initializer &&
						ot(
							r.initializer,
							'An interface property cannot have an initializer.'
						);
					break;
				case 'TopicReference':
					a.extra = { ...a.extra, __isUsingHackPipeline: !0 };
					break;
				case 'ExportAllDeclaration': {
					let { exported: n } = r;
					if (
						e === 'meriyah' &&
						(n == null ? void 0 : n.type) === 'Identifier'
					) {
						let o = s.slice(D(n), _(n));
						(o.startsWith('"') || o.startsWith("'")) &&
							(r.exported = {
								...r.exported,
								type: 'Literal',
								value: r.exported.name,
								raw: o
							});
					}
					break;
				}
				case 'TSUnionType':
				case 'TSIntersectionType':
					if (r.types.length === 1) return r.types[0];
					break;
			}
		})),
		X(a.comments))
	) {
		let r = as(!1, a.comments, -1);
		for (let n = a.comments.length - 2; n >= 0; n--) {
			let o = a.comments[n];
			_(o) === D(r) &&
				Be(o) &&
				Be(r) &&
				ns(o) &&
				ns(r) &&
				(a.comments.splice(n + 1, 1),
				(o.value += '*//*' + r.value),
				(o.range = [D(o), _(r)])),
				(r = o);
		}
	}
	return a.type === 'Program' && (a.range = [0, s.length]), a;
	function i(r, n) {
		s[_(n)] !== ';' && (r.range = [D(r), _(n)]);
	}
}
function Ai(a) {
	return (
		a.type === 'LogicalExpression' &&
		a.right.type === 'LogicalExpression' &&
		a.operator === a.right.operator
	);
}
function ls(a) {
	return Ai(a)
		? ls({
				type: 'LogicalExpression',
				operator: a.operator,
				left: ls({
					type: 'LogicalExpression',
					operator: a.operator,
					left: a.left,
					right: a.right.left,
					range: [D(a.left), _(a.right.left)]
				}),
				right: a.right.right,
				range: [D(a), _(a)]
		  })
		: a;
}
var Si = tn;
function sn(a) {
	let { filepath: t } = a;
	if (t) {
		if (((t = t.toLowerCase()), t.endsWith('.cjs'))) return 'script';
		if (t.endsWith('.mjs')) return 'module';
	}
}
var Ei = sn;
function rn(a, t) {
	let { type: e = 'JsExpressionRoot', rootMarker: s, text: i } = t,
		{ tokens: r, comments: n } = a;
	return (
		delete a.tokens,
		delete a.comments,
		{
			tokens: r,
			comments: n,
			type: e,
			node: a,
			range: [0, i.length],
			rootMarker: s
		}
	);
}
var ht = rn;
var Te = (a) => xe(cn(a)),
	an = {
		sourceType: 'module',
		allowImportExportEverywhere: !0,
		allowReturnOutsideFunction: !0,
		allowNewTargetOutsideFunction: !0,
		allowSuperOutsideMethod: !0,
		allowUndeclaredExports: !0,
		errorRecovery: !0,
		createParenthesizedExpressions: !0,
		plugins: [
			'doExpressions',
			'exportDefaultFrom',
			'functionBind',
			'functionSent',
			'throwExpressions',
			'partialApplication',
			'decorators',
			'decimal',
			'moduleBlocks',
			'asyncDoExpressions',
			'regexpUnicodeSets',
			'destructuringPrivate',
			'decoratorAutoAccessors',
			'importReflection',
			'explicitResourceManagement',
			['importAttributes', { deprecatedAssertSyntax: !0 }]
		],
		tokens: !0,
		ranges: !0
	},
	nn = ['recordAndTuple', { syntaxType: 'hash' }],
	Ci = 'v8intrinsic',
	wi = [
		['pipelineOperator', { proposal: 'hack', topicToken: '%' }],
		['pipelineOperator', { proposal: 'minimal' }],
		['pipelineOperator', { proposal: 'fsharp' }]
	],
	R = (a, t = an) => ({ ...t, plugins: [...t.plugins, ...a] }),
	on = /@(?:no)?flow\b/;
function hn(a, t) {
	var i;
	if ((i = t.filepath) != null && i.endsWith('.js.flow')) return !0;
	let e = rt(a);
	e && (a = a.slice(e.length));
	let s = hi(a, 0);
	return s !== !1 && (a = a.slice(0, s)), on.test(a);
}
function ln(a, t, e) {
	let s = a(t, e),
		i = s.errors.find((r) => !pn.has(r.reasonCode));
	if (i) throw i;
	return s;
}
function cn({ isExpression: a = !1, optionsCombinations: t }) {
	return (e, s = {}) => {
		if ((s.parser === 'babel' || s.parser === '__babel_estree') && hn(e, s))
			return (s.parser = 'babel-flow'), Di.parse(e, s);
		let i = t;
		(s.__babelSourceType ?? Ei(s)) === 'script' &&
			(i = i.map((l) => ({ ...l, sourceType: 'script' }))),
			/#[[{]/.test(e) && (i = i.map((l) => R([nn], l)));
		let n = /%[A-Z]/.test(e);
		e.includes('|>')
			? (i = (n ? [...wi, Ci] : wi).flatMap((c) => i.map((u) => R([c], u))))
			: n && (i = i.map((l) => R([Ci], l)));
		let o = a ? lt.parseExpression : lt.parse,
			h;
		try {
			h = si(i.map((l) => () => ln(o, e, l)));
		} catch ({ errors: [l] }) {
			throw Oe(l);
		}
		return (
			a && (h = ht(h, { text: e, rootMarker: s.rootMarker })),
			Si(h, { parser: 'babel', text: e })
		);
	};
}
var pn = new Set([
		'StrictNumericEscape',
		'StrictWith',
		'StrictOctalLiteral',
		'StrictDelete',
		'StrictEvalArguments',
		'StrictEvalArgumentsBinding',
		'StrictFunction',
		'EmptyTypeArguments',
		'EmptyTypeParameters',
		'ConstructorHasTypeParameters',
		'UnsupportedParameterPropertyKind',
		'MixedLabeledAndUnlabeledElements',
		'DuplicateAccessibilityModifier',
		'DecoratorExportClass',
		'ParamDupe',
		'InvalidDecimal',
		'RestTrailingComma',
		'UnsupportedParameterDecorator',
		'UnterminatedJsxContent',
		'UnexpectedReservedWord',
		'ModuleAttributesWithDuplicateKeys',
		'LineTerminatorBeforeArrow',
		'InvalidEscapeSequenceTemplate',
		'NonAbstractClassHasAbstractMethod',
		'OptionalTypeBeforeRequired',
		'PatternIsOptional',
		'OptionalBindingPattern',
		'DeclareClassFieldHasInitializer',
		'TypeImportCannotSpecifyDefaultAndNamed',
		'DeclareFunctionHasImplementation',
		'ConstructorClassField',
		'VarRedeclaration',
		'InvalidPrivateFieldResolution',
		'DuplicateExport'
	]),
	Li = [R(['jsx'])],
	Ii = Te({ optionsCombinations: Li }),
	Ni = Te({
		optionsCombinations: [R(['jsx', 'typescript']), R(['typescript'])]
	}),
	ki = Te({ isExpression: !0, optionsCombinations: [R(['jsx'])] }),
	vi = Te({ isExpression: !0, optionsCombinations: [R(['typescript'])] }),
	Di = Te({
		optionsCombinations: [
			R(['jsx', ['flow', { all: !0, enums: !0 }], 'flowComments'])
		]
	}),
	un = Te({ optionsCombinations: Li.map((a) => R(['estree'], a)) }),
	Mi = {
		babel: Ii,
		'babel-flow': Di,
		'babel-ts': Ni,
		__js_expression: ki,
		__ts_expression: vi,
		__vue_expression: ki,
		__vue_ts_expression: vi,
		__vue_event_binding: Ii,
		__vue_ts_event_binding: Ni,
		__babel_estree: un
	};
var Bi = pt(rs(), 1);
function Fi(a = {}) {
	let { allowComments: t = !0 } = a;
	return function (s) {
		let i;
		try {
			i = (0, Bi.parseExpression)(s, { tokens: !0, ranges: !0 });
		} catch (r) {
			throw (r == null ? void 0 : r.reasonCode) === 'MissingPlugin' ||
				(r == null ? void 0 : r.reasonCode) === 'MissingOneOfPlugins'
				? Oe({ message: 'Unexpected token', loc: r.loc })
				: Oe(r);
		}
		if (!t && X(i.comments)) throw G(i.comments[0], 'Comment');
		return ge(i), ht(i, { type: 'JsonRoot', text: s });
	};
}
function G(a, t) {
	let [e, s] = [a.loc.start, a.loc.end].map(({ line: i, column: r }) => ({
		line: i,
		column: r + 1
	}));
	return Pe(`${t} is not allowed in JSON.`, { loc: { start: e, end: s } });
}
function ge(a) {
	switch (a.type) {
		case 'ArrayExpression':
			for (let t of a.elements) t !== null && ge(t);
			return;
		case 'ObjectExpression':
			for (let t of a.properties) ge(t);
			return;
		case 'ObjectProperty':
			if (a.computed) throw G(a.key, 'Computed key');
			if (a.shorthand) throw G(a.key, 'Shorthand property');
			a.key.type !== 'Identifier' && ge(a.key), ge(a.value);
			return;
		case 'UnaryExpression': {
			let { operator: t, argument: e } = a;
			if (t !== '+' && t !== '-') throw G(a, `Operator '${a.operator}'`);
			if (
				e.type === 'NumericLiteral' ||
				(e.type === 'Identifier' && (e.name === 'Infinity' || e.name === 'NaN'))
			)
				return;
			throw G(e, `Operator '${t}' before '${e.type}'`);
		}
		case 'Identifier':
			if (a.name !== 'Infinity' && a.name !== 'NaN' && a.name !== 'undefined')
				throw G(a, `Identifier '${a.name}'`);
			return;
		case 'TemplateLiteral':
			if (X(a.expressions))
				throw G(a.expressions[0], "'TemplateLiteral' with expression");
			for (let t of a.quasis) ge(t);
			return;
		case 'NullLiteral':
		case 'BooleanLiteral':
		case 'NumericLiteral':
		case 'StringLiteral':
		case 'TemplateElement':
			return;
		default:
			throw G(a, `'${a.type}'`);
	}
}
var Oi = Fi(),
	fn = {
		json: xe({
			parse: Oi,
			hasPragma() {
				return !0;
			}
		}),
		json5: xe(Oi),
		'json-stringify': xe({
			parse: Fi({ allowComments: !1 }),
			astFormat: 'estree-json'
		})
	},
	_i = fn;
var dn = { ...Mi, ..._i };

// @see http://xahlee.info/js/html5_non-closing_tag.html
const selfClosingTags = [
	'area',
	'base',
	'br',
	'col',
	'embed',
	'hr',
	'img',
	'input',
	'link',
	'meta',
	'param',
	'source',
	'track',
	'wbr'
];
// https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements#Elements
const blockElements = [
	'address',
	'article',
	'aside',
	'blockquote',
	'details',
	'dialog',
	'dd',
	'div',
	'dl',
	'dt',
	'fieldset',
	'figcaption',
	'figure',
	'footer',
	'form',
	'h1',
	'h2',
	'h3',
	'h4',
	'h5',
	'h6',
	'header',
	'hgroup',
	'hr',
	'li',
	'main',
	'nav',
	'ol',
	'p',
	'pre',
	'section',
	'table',
	'ul'
];
/**
 * HTML attributes that we may safely reformat (trim whitespace, add or remove newlines)
 */
const formattableAttributes = [
	// None at the moment
	// Prettier HTML does not format attributes at all
	// and to be consistent we leave this array empty for now
];

const snippedTagContentAttribute = '✂prettier:content✂';
function snipScriptAndStyleTagContent(source) {
	let scriptMatchSpans = getMatchIndexes('script');
	let styleMatchSpans = getMatchIndexes('style');
	return snipTagContent(
		snipTagContent(source, 'script', '{}', styleMatchSpans),
		'style',
		'',
		scriptMatchSpans
	);
	function getMatchIndexes(tagName) {
		const regex = getRegexp(tagName);
		const indexes = [];
		let match = null;
		while ((match = regex.exec(source)) != null) {
			if (source.slice(match.index, match.index + 4) !== '<!--') {
				indexes.push([match.index, regex.lastIndex]);
			}
		}
		return indexes;
	}
	function snipTagContent(_source, tagName, placeholder, otherSpans) {
		const regex = getRegexp(tagName);
		let newScriptMatchSpans = scriptMatchSpans;
		let newStyleMatchSpans = styleMatchSpans;
		// Replace valid matches
		const newSource = _source.replace(
			regex,
			(match, attributes, content, index) => {
				if (match.startsWith('<!--') || withinOtherSpan(index)) {
					return match;
				}
				const encodedContent = Buffer.from(content).toString('base64');
				const newContent = `<${tagName}${attributes} ${snippedTagContentAttribute}="${encodedContent}">${placeholder}</${tagName}>`;
				// Adjust the spans because the source now has a different content length
				const lengthDiff = match.length - newContent.length;
				newScriptMatchSpans = adjustSpans(
					scriptMatchSpans,
					newScriptMatchSpans
				);
				newStyleMatchSpans = adjustSpans(styleMatchSpans, newStyleMatchSpans);
				function adjustSpans(oldSpans, newSpans) {
					return oldSpans.map((oldSpan, idx) => {
						const newSpan = newSpans[idx];
						// Do the check using the old spans because the replace function works
						// on the old spans. Replace oldSpans with newSpans afterwards.
						if (oldSpan[0] > index) {
							// span is after the match -> adjust start and end
							return [newSpan[0] - lengthDiff, newSpan[1] - lengthDiff];
						} else if (oldSpan[0] === index) {
							// span is the match -> adjust end only
							return [newSpan[0], newSpan[1] - lengthDiff];
						} else {
							// span is before the match -> nothing to adjust
							return newSpan;
						}
					});
				}
				return newContent;
			}
		);
		// Now that the replacement function ran, we can adjust the spans for the next run
		scriptMatchSpans = newScriptMatchSpans;
		styleMatchSpans = newStyleMatchSpans;
		return newSource;
		function withinOtherSpan(idx) {
			return otherSpans.some(
				(otherSpan) => idx > otherSpan[0] && idx < otherSpan[1]
			);
		}
	}
	function getRegexp(tagName) {
		return new RegExp(
			`<!--[^]*?-->|<${tagName}([^]*?)>([^]*?)<\/${tagName}>`,
			'g'
		);
	}
}
function hasSnippedContent(text) {
	return text.includes(snippedTagContentAttribute);
}
function unsnipContent(text) {
	const regex = /(<\w+.*?)\s*✂prettier:content✂="(.*?)">.*?(?=<\/)/gi;
	return text.replace(regex, (_, start, encodedContent) => {
		const content = Buffer.from(encodedContent, 'base64').toString('utf8');
		return `${start}>${content}`;
	});
}

function makeChoice(choice) {
	return { value: choice, description: choice };
}
const options = {
	svelteSortOrder: {
		category: 'Svelte',
		type: 'choice',
		default: 'options-scripts-markup-styles',
		description: 'Sort order for scripts, markup, and styles',
		choices: [
			makeChoice('options-scripts-markup-styles'),
			makeChoice('options-scripts-styles-markup'),
			makeChoice('options-markup-styles-scripts'),
			makeChoice('options-markup-scripts-styles'),
			makeChoice('options-styles-markup-scripts'),
			makeChoice('options-styles-scripts-markup'),
			makeChoice('scripts-options-markup-styles'),
			makeChoice('scripts-options-styles-markup'),
			makeChoice('markup-options-styles-scripts'),
			makeChoice('markup-options-scripts-styles'),
			makeChoice('styles-options-markup-scripts'),
			makeChoice('styles-options-scripts-markup'),
			makeChoice('scripts-markup-options-styles'),
			makeChoice('scripts-styles-options-markup'),
			makeChoice('markup-styles-options-scripts'),
			makeChoice('markup-scripts-options-styles'),
			makeChoice('styles-markup-options-scripts'),
			makeChoice('styles-scripts-options-markup'),
			makeChoice('scripts-markup-styles-options'),
			makeChoice('scripts-styles-markup-options'),
			makeChoice('markup-styles-scripts-options'),
			makeChoice('markup-scripts-styles-options'),
			makeChoice('styles-markup-scripts-options'),
			makeChoice('styles-scripts-markup-options'),
			makeChoice('none')
		]
	},
	svelteStrictMode: {
		category: 'Svelte',
		type: 'boolean',
		default: false,
		description:
			'More strict HTML syntax: Quotes in attributes, no self-closing DOM tags'
	},
	svelteBracketNewLine: {
		category: 'Svelte',
		type: 'boolean',
		description: 'Put the `>` of a multiline element on a new line',
		deprecated: '2.5.0'
	},
	svelteAllowShorthand: {
		category: 'Svelte',
		type: 'boolean',
		default: true,
		description:
			'Option to enable/disable component attribute shorthand if attribute name and expressions are same'
	},
	svelteIndentScriptAndStyle: {
		category: 'Svelte',
		type: 'boolean',
		default: true,
		description:
			'Whether or not to indent the code inside <script> and <style> tags in Svelte files'
	}
};
const sortOrderSeparator = '-';
function parseSortOrder(sortOrder = 'options-scripts-markup-styles') {
	if (sortOrder === 'none') {
		return [];
	}
	const order = sortOrder.split(sortOrderSeparator);
	// For backwards compatibility: Add options to beginning if not present
	if (!order.includes('options')) {
		throw new Error('svelteSortOrder is missing option `options`');
	}
	return order;
}
function isBracketSameLine(options) {
	return options.svelteBracketNewLine != null
		? !options.svelteBracketNewLine
		: options.bracketSameLine != null
		? options.bracketSameLine
		: false;
}

/**
 * Determines whether or not given node
 * is the root of the Svelte AST.
 */
function isASTNode(n) {
	return n && n.__isRoot;
}
function isPreTagContent(path) {
	const stack = path.stack;
	return stack.some(
		(node) =>
			(node.type === 'Element' && node.name.toLowerCase() === 'pre') ||
			(node.type === 'Attribute' && !formattableAttributes.includes(node.name))
	);
}
function flatten(arrays) {
	return [].concat.apply([], arrays);
}
function findLastIndex(isMatch, items) {
	for (let i = items.length - 1; i >= 0; i--) {
		if (isMatch(items[i], i)) {
			return i;
		}
	}
	return -1;
}
function replaceEndOfLineWith(text, replacement) {
	const parts = [];
	for (const part of text.split('\n')) {
		if (parts.length > 0) {
			parts.push(replacement);
		}
		if (part.endsWith('\r')) {
			parts.push(part.slice(0, -1));
		} else {
			parts.push(part);
		}
	}
	return parts;
}
function getAttributeLine(node, options) {
	const { hardline, line } = prettier.doc.builders;
	const hasThisBinding =
		(node.type === 'InlineComponent' && !!node.expression) ||
		(node.type === 'Element' && !!node.tag);
	const attributes = node.attributes.filter(
		(attribute) => attribute.name !== snippedTagContentAttribute
	);
	return options.singleAttributePerLine &&
		(attributes.length > 1 || (attributes.length && hasThisBinding))
		? hardline
		: line;
}
function printWithPrependedAttributeLine(node, options, print) {
	return (path) =>
		path.getNode().name !== snippedTagContentAttribute
			? [getAttributeLine(node, options), path.call(print)]
			: '';
}

/**
 * Check if doc is a hardline.
 * We can't just rely on a simple equality check because the doc could be created with another
 * runtime version of prettier than what we import, making a reference check fail.
 */
function isHardline(docToCheck) {
	return (
		docToCheck === prettier.doc.builders.hardline ||
		deepEqual(docToCheck, prettier.doc.builders.hardline)
	);
}
/**
 * Simple deep equal function which suits our needs. Only works properly on POJOs without cyclic deps.
 */
function deepEqual(x, y) {
	if (x === y) {
		return true;
	} else if (
		typeof x == 'object' &&
		x != null &&
		typeof y == 'object' &&
		y != null
	) {
		if (Object.keys(x).length != Object.keys(y).length) return false;
		for (var prop in x) {
			if (y.hasOwnProperty(prop)) {
				if (!deepEqual(x[prop], y[prop])) return false;
			} else {
				return false;
			}
		}
		return true;
	} else {
		return false;
	}
}
function isDocCommand(doc) {
	return typeof doc === 'object' && doc !== null;
}
function isLine(docToCheck) {
	return (
		isHardline(docToCheck) ||
		(isDocCommand(docToCheck) && docToCheck.type === 'line') ||
		(Array.isArray(docToCheck) && docToCheck.every(isLine))
	);
}
/**
 * Check if the doc is empty, i.e. consists of nothing more than empty strings (possibly nested).
 */
function isEmptyDoc(doc) {
	if (typeof doc === 'string') {
		return doc.length === 0;
	}
	if (isDocCommand(doc) && doc.type === 'line') {
		return !doc.keepIfLonely;
	}
	if (Array.isArray(doc)) {
		return doc.length === 0;
	}
	const { contents } = doc;
	if (contents) {
		return isEmptyDoc(contents);
	}
	const { parts } = doc;
	if (parts) {
		return isEmptyGroup(parts);
	}
	return false;
}
function isEmptyGroup(group) {
	return !group.find((doc) => !isEmptyDoc(doc));
}
/**
 * Trims both leading and trailing nodes matching `isWhitespace` independent of nesting level
 * (though all trimmed adjacent nodes need to be a the same level). Modifies the `docs` array.
 */
function trim(docs, isWhitespace) {
	trimLeft(docs, isWhitespace);
	trimRight(docs, isWhitespace);
	return docs;
}
/**
 * Trims the leading nodes matching `isWhitespace` independent of nesting level (though all nodes need to be a the same level).
 * If there are empty docs before the first whitespace, they are removed, too.
 */
function trimLeft(group, isWhitespace) {
	let firstNonWhitespace = group.findIndex(
		(doc) => !isEmptyDoc(doc) && !isWhitespace(doc)
	);
	if (firstNonWhitespace < 0 && group.length) {
		firstNonWhitespace = group.length;
	}
	if (firstNonWhitespace > 0) {
		const removed = group.splice(0, firstNonWhitespace);
		if (removed.every(isEmptyDoc)) {
			return trimLeft(group, isWhitespace);
		}
	} else {
		const parts = getParts(group[0]);
		if (parts) {
			return trimLeft(parts, isWhitespace);
		}
	}
}
/**
 * Trims the trailing nodes matching `isWhitespace` independent of nesting level (though all nodes need to be a the same level).
 * If there are empty docs after the last whitespace, they are removed, too.
 */
function trimRight(group, isWhitespace) {
	let lastNonWhitespace = group.length
		? findLastIndex((doc) => !isEmptyDoc(doc) && !isWhitespace(doc), group)
		: 0;
	if (lastNonWhitespace < group.length - 1) {
		const removed = group.splice(lastNonWhitespace + 1);
		if (removed.every(isEmptyDoc)) {
			return trimRight(group, isWhitespace);
		}
	} else {
		const parts = getParts(group[group.length - 1]);
		if (parts) {
			return trimRight(parts, isWhitespace);
		}
	}
}
function getParts(doc) {
	if (typeof doc === 'object') {
		if (Array.isArray(doc)) {
			return doc;
		}
		if (doc.type === 'fill') {
			return doc.parts;
		}
		if (doc.type === 'group') {
			return getParts(doc.contents);
		}
	}
}
/**
 * `(foo = bar)` => `foo = bar`
 */
function removeParentheses(doc) {
	return trim([doc], (_doc) => _doc === '(' || _doc === ')')[0];
}

const unsupportedLanguages = [
	'coffee',
	'coffeescript',
	'styl',
	'stylus',
	'sass'
];
function isInlineElement(path, options, node) {
	return (
		node &&
		node.type === 'Element' &&
		!isBlockElement(node, options) &&
		!isPreTagContent(path)
	);
}
function isBlockElement(node, options) {
	return (
		node &&
		node.type === 'Element' &&
		options.htmlWhitespaceSensitivity !== 'strict' &&
		(options.htmlWhitespaceSensitivity === 'ignore' ||
			blockElements.includes(node.name))
	);
}
function isSvelteBlock(node) {
	return [
		'IfBlock',
		'AwaitBlock',
		'CatchBlock',
		'EachBlock',
		'ElseBlock',
		'KeyBlock',
		'PendingBlock',
		'ThenBlock'
	].includes(node.type);
}
function isNodeWithChildren(node) {
	return node.children;
}
function getChildren(node) {
	return isNodeWithChildren(node) ? node.children : [];
}
/**
 * Returns siblings, that is, the children of the parent.
 */
function getSiblings(path) {
	let parent = path.getParentNode();
	if (isASTNode(parent)) {
		parent = parent.html;
	}
	return getChildren(parent);
}
/**
 * Returns the next sibling node.
 */
function getNextNode(path, node = path.getNode()) {
	return getSiblings(path).find((child) => child.start === node.end);
}
/**
 * Returns the comment that is above the current node.
 */
function getLeadingComment(path) {
	const siblings = getSiblings(path);
	let node = path.getNode();
	let prev = siblings.find((child) => child.end === node.start);
	while (prev) {
		if (
			prev.type === 'Comment' &&
			!isIgnoreStartDirective(prev) &&
			!isIgnoreEndDirective(prev)
		) {
			return prev;
		} else if (isEmptyTextNode(prev)) {
			node = prev;
			prev = siblings.find((child) => child.end === node.start);
		} else {
			return undefined;
		}
	}
}
/**
 * Did there use to be any embedded object (that has been snipped out of the AST to be moved)
 * at the specified position?
 */
function doesEmbedStartAfterNode(node, path, siblings = getSiblings(path)) {
	// If node is not at the top level of html, an embed cannot start after it,
	// because embeds are only at the top level
	if (!isNodeTopLevelHTML(node, path)) {
		return false;
	}
	const position = node.end;
	const root = path.stack[0];
	const embeds = [root.css, root.html, root.instance, root.js, root.module];
	const nextNode = siblings[siblings.indexOf(node) + 1];
	return embeds.find(
		(n) => n && n.start >= position && (!nextNode || n.end <= nextNode.start)
	);
}
function isNodeTopLevelHTML(node, path) {
	const root = path.stack[0];
	return (
		!!root.html && !!root.html.children && root.html.children.includes(node)
	);
}
function isEmptyTextNode(node) {
	return !!node && node.type === 'Text' && getUnencodedText(node).trim() === '';
}
function isIgnoreDirective(node) {
	return (
		!!node && node.type === 'Comment' && node.data.trim() === 'prettier-ignore'
	);
}
function isIgnoreStartDirective(node) {
	return (
		!!node &&
		node.type === 'Comment' &&
		node.data.trim() === 'prettier-ignore-start'
	);
}
function isIgnoreEndDirective(node) {
	return (
		!!node &&
		node.type === 'Comment' &&
		node.data.trim() === 'prettier-ignore-end'
	);
}
function printRaw(node, originalText, stripLeadingAndTrailingNewline = false) {
	if (node.children.length === 0) {
		return '';
	}
	const firstChild = node.children[0];
	const lastChild = node.children[node.children.length - 1];
	let raw = originalText.substring(firstChild.start, lastChild.end);
	if (!stripLeadingAndTrailingNewline) {
		return raw;
	}
	if (startsWithLinebreak(raw)) {
		raw = raw.substring(raw.indexOf('\n') + 1);
	}
	if (endsWithLinebreak(raw)) {
		raw = raw.substring(0, raw.lastIndexOf('\n'));
		if (raw.charAt(raw.length - 1) === '\r') {
			raw = raw.substring(0, raw.length - 1);
		}
	}
	return raw;
}
function isTextNode(node) {
	return node.type === 'Text';
}
function getAttributeValue(attributeName, node) {
	var _a;
	const attributes = (_a = node.attributes) !== null && _a !== void 0 ? _a : [];
	const langAttribute = attributes.find(
		(attribute) => attribute.name === attributeName
	);
	return langAttribute && langAttribute.value;
}
function getAttributeTextValue(attributeName, node) {
	const value = getAttributeValue(attributeName, node);
	if (value != null && typeof value === 'object') {
		const textValue = value.find(isTextNode);
		if (textValue) {
			return textValue.data;
		}
	}
	return null;
}
function getLangAttribute(node) {
	const value =
		getAttributeTextValue('lang', node) || getAttributeTextValue('type', node);
	if (value != null) {
		return value.replace(/^text\//, '');
	} else {
		return null;
	}
}
/**
 * Checks whether the node contains a `lang` or `type` attribute with a value corresponding to
 * a language we cannot format. This might for example be `<template lang="pug">`.
 * If the node does not contain a `lang` attribute, the result is true.
 */
function isNodeSupportedLanguage(node) {
	const lang = getLangAttribute(node);
	return !(lang && unsupportedLanguages.includes(lang));
}
/**
 * Checks whether the node contains a `lang` or `type` attribute which indicates that
 * the script contents are written in TypeScript. Note that the absence of the tag
 * does not mean it's not TypeScript, because the user could have set the default
 * to TypeScript in his settings.
 */
function isTypeScript(node) {
	const lang = getLangAttribute(node) || '';
	return ['typescript', 'ts'].includes(lang);
}
function isLess(node) {
	const lang = getLangAttribute(node) || '';
	return ['less'].includes(lang);
}
function isScss(node) {
	const lang = getLangAttribute(node) || '';
	return ['sass', 'scss'].includes(lang);
}
function isPugTemplate(node) {
	return (
		node.type === 'Element' &&
		node.name === 'template' &&
		getLangAttribute(node) === 'pug'
	);
}
function isLoneMustacheTag(node) {
	return node !== true && node.length === 1 && node[0].type === 'MustacheTag';
}
function isAttributeShorthand(node) {
	return (
		node !== true && node.length === 1 && node[0].type === 'AttributeShorthand'
	);
}
/**
 * True if node is of type `{a}` or `a={a}`
 */
function isOrCanBeConvertedToShorthand(node) {
	if (isAttributeShorthand(node.value)) {
		return true;
	}
	if (isLoneMustacheTag(node.value)) {
		const expression = node.value[0].expression;
		return expression.type === 'Identifier' && expression.name === node.name;
	}
	return false;
}
function getUnencodedText(node) {
	// `raw` will contain HTML entities in unencoded form
	return node.raw || node.data;
}
function isTextNodeStartingWithLinebreak(node, nrLines = 1) {
	return (
		node.type === 'Text' && startsWithLinebreak(getUnencodedText(node), nrLines)
	);
}
function startsWithLinebreak(text, nrLines = 1) {
	return new RegExp(`^([\\t\\f\\r ]*\\n){${nrLines}}`).test(text);
}
function isTextNodeEndingWithLinebreak(node, nrLines = 1) {
	return (
		node.type === 'Text' && endsWithLinebreak(getUnencodedText(node), nrLines)
	);
}
function endsWithLinebreak(text, nrLines = 1) {
	return new RegExp(`(\\n[\\t\\f\\r ]*){${nrLines}}$`).test(text);
}
function isTextNodeStartingWithWhitespace(node) {
	return node.type === 'Text' && /^\s/.test(getUnencodedText(node));
}
function isTextNodeEndingWithWhitespace(node) {
	return node.type === 'Text' && /\s$/.test(getUnencodedText(node));
}
function trimTextNodeRight(node) {
	node.raw = node.raw && node.raw.trimRight();
	node.data = node.data && node.data.trimRight();
}
function trimTextNodeLeft(node) {
	node.raw = node.raw && node.raw.trimLeft();
	node.data = node.data && node.data.trimLeft();
}
/**
 * Remove all leading whitespace up until the first non-empty text node,
 * and all trailing whitespace from the last non-empty text node onwards.
 */
function trimChildren(children, path) {
	let firstNonEmptyNode = children.findIndex(
		(n) => !isEmptyTextNode(n) && !doesEmbedStartAfterNode(n, path)
	);
	firstNonEmptyNode =
		firstNonEmptyNode === -1 ? children.length - 1 : firstNonEmptyNode;
	let lastNonEmptyNode = findLastIndex((n, idx) => {
		// Last node is ok to end at the start of an embedded region,
		// if it's not a comment (which should stick to the region)
		return (
			!isEmptyTextNode(n) &&
			((idx === children.length - 1 && n.type !== 'Comment') ||
				!doesEmbedStartAfterNode(n, path))
		);
	}, children);
	lastNonEmptyNode = lastNonEmptyNode === -1 ? 0 : lastNonEmptyNode;
	for (let i = 0; i <= firstNonEmptyNode; i++) {
		const n = children[i];
		if (n.type === 'Text') {
			trimTextNodeLeft(n);
		}
	}
	for (let i = children.length - 1; i >= lastNonEmptyNode; i--) {
		const n = children[i];
		if (n.type === 'Text') {
			trimTextNodeRight(n);
		}
	}
}
/**
 * Check if given node's start tag should hug its first child. This is the case for inline elements when there's
 * no whitespace between the `>` and the first child.
 */
function shouldHugStart(node, isSupportedLanguage, options) {
	if (!isSupportedLanguage) {
		return true;
	}
	if (isBlockElement(node, options)) {
		return false;
	}
	if (!isNodeWithChildren(node)) {
		return false;
	}
	const children = node.children;
	if (children.length === 0) {
		return true;
	}
	if (options.htmlWhitespaceSensitivity === 'ignore') {
		return false;
	}
	const firstChild = children[0];
	return !isTextNodeStartingWithWhitespace(firstChild);
}
/**
 * Check if given node's end tag should hug its last child. This is the case for inline elements when there's
 * no whitespace between the last child and the `</`.
 */
function shouldHugEnd(node, isSupportedLanguage, options) {
	if (!isSupportedLanguage) {
		return true;
	}
	if (isBlockElement(node, options)) {
		return false;
	}
	if (!isNodeWithChildren(node)) {
		return false;
	}
	const children = node.children;
	if (children.length === 0) {
		return true;
	}
	if (options.htmlWhitespaceSensitivity === 'ignore') {
		return false;
	}
	const lastChild = children[children.length - 1];
	return !isTextNodeEndingWithWhitespace(lastChild);
}
/**
 * Check for a svelte block if there's whitespace at the start and if it's a space or a line.
 */
function checkWhitespaceAtStartOfSvelteBlock(node, options) {
	if (!isSvelteBlock(node) || !isNodeWithChildren(node)) {
		return 'none';
	}
	const children = node.children;
	if (children.length === 0) {
		return 'none';
	}
	const firstChild = children[0];
	if (isTextNodeStartingWithLinebreak(firstChild)) {
		return 'line';
	} else if (isTextNodeStartingWithWhitespace(firstChild)) {
		return 'space';
	}
	// This extra check is necessary because the Svelte AST might swallow whitespace between
	// the block's starting end and its first child.
	const parentOpeningEnd = options.originalText.lastIndexOf(
		'}',
		firstChild.start
	);
	if (parentOpeningEnd > 0 && firstChild.start > parentOpeningEnd + 1) {
		const textBetween = options.originalText.substring(
			parentOpeningEnd + 1,
			firstChild.start
		);
		if (textBetween.trim() === '') {
			return startsWithLinebreak(textBetween) ? 'line' : 'space';
		}
	}
	return 'none';
}
/**
 * Check for a svelte block if there's whitespace at the end and if it's a space or a line.
 */
function checkWhitespaceAtEndOfSvelteBlock(node, options) {
	if (!isSvelteBlock(node) || !isNodeWithChildren(node)) {
		return 'none';
	}
	const children = node.children;
	if (children.length === 0) {
		return 'none';
	}
	const lastChild = children[children.length - 1];
	if (isTextNodeEndingWithLinebreak(lastChild)) {
		return 'line';
	} else if (isTextNodeEndingWithWhitespace(lastChild)) {
		return 'space';
	}
	// This extra check is necessary because the Svelte AST might swallow whitespace between
	// the last child and the block's ending start.
	const parentClosingStart = options.originalText.indexOf('{', lastChild.end);
	if (parentClosingStart > 0 && lastChild.end < parentClosingStart) {
		const textBetween = options.originalText.substring(
			lastChild.end,
			parentClosingStart
		);
		if (textBetween.trim() === '') {
			return endsWithLinebreak(textBetween) ? 'line' : 'space';
		}
	}
	return 'none';
}
function isInsideQuotedAttribute(path, options) {
	const stack = path.stack;
	return stack.some(
		(node) =>
			node.type === 'Attribute' &&
			(!isLoneMustacheTag(node.value) || options.svelteStrictMode)
	);
}
/**
 * Returns true if the softline between `</tagName` and `>` can be omitted.
 */
function canOmitSoftlineBeforeClosingTag(node, path, options) {
	return (
		isBracketSameLine(options) &&
		(!hugsStartOfNextNode(node, options) ||
			isLastChildWithinParentBlockElement(path, options))
	);
}
/**
 * Return true if given node does not hug the next node, meaning there's whitespace
 * or the end of the doc afterwards.
 */
function hugsStartOfNextNode(node, options) {
	if (node.end === options.originalText.length) {
		// end of document
		return false;
	}
	return !options.originalText.substring(node.end).match(/^\s/);
}
function isLastChildWithinParentBlockElement(path, options) {
	const parent = path.getParentNode();
	if (!parent || !isBlockElement(parent, options)) {
		return false;
	}
	const children = getChildren(parent);
	const lastChild = children[children.length - 1];
	return lastChild === path.getNode();
}
function assignCommentsToNodes(ast) {
	if (ast.module) {
		ast.module.comments = removeAndGetLeadingComments(ast, ast.module);
	}
	if (ast.instance) {
		ast.instance.comments = removeAndGetLeadingComments(ast, ast.instance);
	}
	if (ast.css) {
		ast.css.comments = removeAndGetLeadingComments(ast, ast.css);
	}
}
/**
 * Returns the comments that are above the current node and deletes them from the html ast.
 */
function removeAndGetLeadingComments(ast, current) {
	const siblings = getChildren(ast.html);
	const comments = [];
	const newlines = [];
	if (!siblings.length) {
		return [];
	}
	let node = current;
	let prev = siblings.find((child) => child.end === node.start);
	while (prev) {
		if (
			prev.type === 'Comment' &&
			!isIgnoreStartDirective(prev) &&
			!isIgnoreEndDirective(prev)
		) {
			comments.push(prev);
			if (comments.length !== newlines.length) {
				newlines.push({ type: 'Text', data: '', raw: '', start: -1, end: -1 });
			}
		} else if (isEmptyTextNode(prev)) {
			newlines.push(prev);
		} else {
			break;
		}
		node = prev;
		prev = siblings.find((child) => child.end === node.start);
	}
	newlines.length = comments.length; // could be one more if first comment is preceeded by empty text node
	for (const comment of comments) {
		siblings.splice(siblings.indexOf(comment), 1);
	}
	for (const text of newlines) {
		siblings.splice(siblings.indexOf(text), 1);
	}
	return comments
		.map((comment, i) => ({
			comment,
			emptyLineAfter: getUnencodedText(newlines[i]).split('\n').length > 2
		}))
		.reverse();
}

const {
	join,
	line,
	group,
	indent,
	dedent,
	softline,
	hardline,
	fill,
	breakParent,
	literalline
} = prettier.doc.builders;
function hasPragma(text) {
	return /^\s*<!--\s*@(format|prettier)\W/.test(text);
}
let ignoreNext = false;
let ignoreRange = false;
let svelteOptionsDoc;
function print(path, options, print) {
	var _a, _b;
	const bracketSameLine = isBracketSameLine(options);
	const n = path.getValue();
	if (!n) {
		return '';
	}
	if (isASTNode(n)) {
		return printTopLevelParts(n, options, path, print);
	}
	const [open, close] = options.svelteStrictMode ? ['"{', '}"'] : ['{', '}'];
	const printJsExpression = () => [
		open,
		printJS(path, print, 'expression'),
		close
	];
	const node = n;
	if (
		(ignoreNext || (ignoreRange && !isIgnoreEndDirective(node))) &&
		(node.type !== 'Text' || !isEmptyTextNode(node))
	) {
		if (ignoreNext) {
			ignoreNext = false;
		}
		return flatten(
			options.originalText
				.slice(options.locStart(node), options.locEnd(node))
				.split('\n')
				.map((o, i) => (i == 0 ? [o] : [literalline, o]))
		);
	}
	switch (node.type) {
		case 'Fragment':
			const children = node.children;
			if (children.length === 0 || children.every(isEmptyTextNode)) {
				return '';
			}
			if (!isPreTagContent(path)) {
				trimChildren(node.children, path);
				const output = trim(
					[printChildren(path, print, options)],
					(n) =>
						isLine(n) ||
						(typeof n === 'string' && n.trim() === '') ||
						// Because printChildren may append this at the end and
						// may hide other lines before it
						n === breakParent
				);
				if (output.every((doc) => isEmptyDoc(doc))) {
					return '';
				}
				return group([...output, hardline]);
			} else {
				return group(path.map(print, 'children'));
			}
		case 'Text':
			if (!isPreTagContent(path)) {
				if (isEmptyTextNode(node)) {
					const hasWhiteSpace =
						getUnencodedText(node).trim().length <
						getUnencodedText(node).length;
					const hasOneOrMoreNewlines = /\n/.test(getUnencodedText(node));
					const hasTwoOrMoreNewlines = /\n\r?\s*\n\r?/.test(
						getUnencodedText(node)
					);
					if (hasTwoOrMoreNewlines) {
						return [hardline, hardline];
					}
					if (hasOneOrMoreNewlines) {
						return hardline;
					}
					if (hasWhiteSpace) {
						return line;
					}
					return '';
				}
				/**
				 * For non-empty text nodes each sequence of non-whitespace characters (effectively,
				 * each "word") is joined by a single `line`, which will be rendered as a single space
				 * until this node's current line is out of room, at which `fill` will break at the
				 * most convenient instance of `line`.
				 */
				return fill(splitTextToDocs(node));
			} else {
				let rawText = getUnencodedText(node);
				const parent = path.getParentNode();
				if (parent.type === 'Attribute') {
					// Direct child of attribute value -> add literallines at end of lines
					// so that other things don't break in unexpected places
					if (
						parent.name === 'class' &&
						path.getParentNode(1).type === 'Element'
					) {
						// Special treatment for class attribute on html elements. Prettier
						// will force everything into one line, we deviate from that and preserve lines.
						rawText = rawText.replace(
							/([^ \t\n])(([ \t]+$)|([ \t]+(\r?\n))|[ \t]+)/g,
							// Remove trailing whitespace in lines with non-whitespace characters
							// except at the end of the string
							(
								match,
								characterBeforeWhitespace,
								_,
								isEndOfString,
								isEndOfLine,
								endOfLine
							) =>
								isEndOfString
									? match
									: characterBeforeWhitespace + (isEndOfLine ? endOfLine : ' ')
						);
						// Shrink trailing whitespace in case it's followed by a mustache tag
						// and remove it completely if it's at the end of the string, but not
						// if it's on its own line
						rawText = rawText.replace(
							/([^ \t\n])[ \t]+$/,
							parent.value.indexOf(node) === parent.value.length - 1
								? '$1'
								: '$1 '
						);
					}
					return replaceEndOfLineWith(rawText, literalline);
				}
				return rawText;
			}
		case 'Element':
		case 'InlineComponent':
		case 'Slot':
		case 'SlotTemplate':
		case 'Window':
		case 'Head':
		case 'Title': {
			const isSupportedLanguage = !(
				node.name === 'template' && !isNodeSupportedLanguage(node)
			);
			const isEmpty = node.children.every((child) => isEmptyTextNode(child));
			const isDoctypeTag = node.name.toUpperCase() === '!DOCTYPE';
			const didSelfClose = options.originalText[node.end - 2] === '/';
			const isSelfClosingTag =
				isEmpty &&
				((((node.type === 'Element' && !options.svelteStrictMode) ||
					node.type === 'Head' ||
					node.type === 'InlineComponent' ||
					node.type === 'SlotTemplate' ||
					node.type === 'Title') &&
					didSelfClose) ||
					node.type === 'Slot' ||
					node.type === 'Window' ||
					selfClosingTags.indexOf(node.name) !== -1 ||
					isDoctypeTag);
			// Order important: print attributes first
			const attributes = path.map(
				printWithPrependedAttributeLine(node, options, print),
				'attributes'
			);
			const attributeLine = getAttributeLine(node, options);
			const possibleThisBinding =
				node.type === 'InlineComponent' && node.expression
					? [attributeLine, 'this=', ...printJsExpression()]
					: node.type === 'Element' && node.tag
					? [
							attributeLine,
							'this=',
							...(typeof node.tag === 'string'
								? [`"${node.tag}"`]
								: [open, printJS(path, print, 'tag'), close])
					  ]
					: '';
			if (isSelfClosingTag) {
				return group([
					'<',
					node.name,
					indent(
						group([
							possibleThisBinding,
							...attributes,
							bracketSameLine || isDoctypeTag ? '' : dedent(line)
						])
					),
					...[
						bracketSameLine && !isDoctypeTag ? ' ' : '',
						`${isDoctypeTag ? '' : '/'}>`
					]
				]);
			}
			const children = node.children;
			const firstChild = children[0];
			const lastChild = children[children.length - 1];
			// Is a function which is invoked later because printChildren will manipulate child nodes
			// which would wrongfully change the other checks about hugging etc done beforehand
			let body;
			const hugStart = shouldHugStart(node, isSupportedLanguage, options);
			const hugEnd = shouldHugEnd(node, isSupportedLanguage, options);
			if (isEmpty) {
				body =
					isInlineElement(path, options, node) &&
					node.children.length &&
					isTextNodeStartingWithWhitespace(node.children[0]) &&
					!isPreTagContent(path)
						? () => line
						: () => (bracketSameLine ? softline : '');
			} else if (isPreTagContent(path)) {
				body = () => printPre(node, options.originalText, path, print);
			} else if (!isSupportedLanguage) {
				body = () => printRaw(node, options.originalText, true);
			} else if (
				isInlineElement(path, options, node) &&
				!isPreTagContent(path)
			) {
				body = () => printChildren(path, print, options);
			} else {
				body = () => printChildren(path, print, options);
			}
			const openingTag = [
				'<',
				node.name,
				indent(
					group([
						possibleThisBinding,
						...attributes,
						hugStart && !isEmpty
							? ''
							: !bracketSameLine && !isPreTagContent(path)
							? dedent(softline)
							: ''
					])
				)
			];
			if (!isSupportedLanguage && !isEmpty) {
				// Format template tags so that there's a hardline but no indention.
				// That way the `lang="X"` and the closing `>` of the start tag stay in one line
				// which is the 99% use case.
				return group([
					...openingTag,
					'>',
					group([hardline, body(), hardline]),
					`</${node.name}>`
				]);
			}
			if (hugStart && hugEnd) {
				const huggedContent = [
					softline,
					group(['>', body(), `</${node.name}`])
				];
				const omitSoftlineBeforeClosingTag =
					(isEmpty && !bracketSameLine) ||
					canOmitSoftlineBeforeClosingTag(node, path, options);
				return group([
					...openingTag,
					isEmpty ? group(huggedContent) : group(indent(huggedContent)),
					omitSoftlineBeforeClosingTag ? '' : softline,
					'>'
				]);
			}
			// No hugging of content means it's either a block element and/or there's whitespace at the start/end
			let noHugSeparatorStart = softline;
			let noHugSeparatorEnd = softline;
			if (isPreTagContent(path)) {
				noHugSeparatorStart = '';
				noHugSeparatorEnd = '';
			} else {
				let didSetEndSeparator = false;
				if (!hugStart && firstChild && firstChild.type === 'Text') {
					if (
						isTextNodeStartingWithLinebreak(firstChild) &&
						firstChild !== lastChild &&
						(!isInlineElement(path, options, node) ||
							isTextNodeEndingWithWhitespace(lastChild))
					) {
						noHugSeparatorStart = hardline;
						noHugSeparatorEnd = hardline;
						didSetEndSeparator = true;
					} else if (isInlineElement(path, options, node)) {
						noHugSeparatorStart = line;
					}
					trimTextNodeLeft(firstChild);
				}
				if (!hugEnd && lastChild && lastChild.type === 'Text') {
					if (isInlineElement(path, options, node) && !didSetEndSeparator) {
						noHugSeparatorEnd = line;
					}
					trimTextNodeRight(lastChild);
				}
			}
			if (hugStart) {
				return group([
					...openingTag,
					indent([softline, group(['>', body()])]),
					noHugSeparatorEnd,
					`</${node.name}>`
				]);
			}
			if (hugEnd) {
				return group([
					...openingTag,
					'>',
					indent([noHugSeparatorStart, group([body(), `</${node.name}`])]),
					canOmitSoftlineBeforeClosingTag(node, path, options) ? '' : softline,
					'>'
				]);
			}
			if (isEmpty) {
				return group([...openingTag, '>', body(), `</${node.name}>`]);
			}
			return group([
				...openingTag,
				'>',
				indent([noHugSeparatorStart, body()]),
				noHugSeparatorEnd,
				`</${node.name}>`
			]);
		}
		case 'Options':
			if (options.svelteSortOrder !== 'none') {
				throw new Error(
					'Options tags should have been handled by prepareChildren'
				);
			}
		// else fall through to Body
		case 'Body':
		case 'Document':
			return group([
				'<',
				node.name,
				indent(
					group([
						...path.map(
							printWithPrependedAttributeLine(node, options, print),
							'attributes'
						),
						bracketSameLine ? '' : dedent(line)
					])
				),
				...[bracketSameLine ? ' ' : '', '/>']
			]);
		case 'Document':
			return group([
				'<',
				node.name,
				indent(
					group([
						...path.map(
							printWithPrependedAttributeLine(node, options, print),
							'attributes'
						),
						bracketSameLine ? '' : dedent(line)
					])
				),
				...[bracketSameLine ? ' ' : '', '/>']
			]);
		case 'Identifier':
			return node.name;
		case 'AttributeShorthand': {
			return node.expression.name;
		}
		case 'Attribute': {
			if (isOrCanBeConvertedToShorthand(node)) {
				if (options.svelteAllowShorthand) {
					return ['{', node.name, '}'];
				} else if (options.svelteStrictMode) {
					return [node.name, '="{', node.name, '}"'];
				} else {
					return [node.name, '={', node.name, '}'];
				}
			} else {
				if (node.value === true) {
					return [node.name];
				}
				const quotes =
					!isLoneMustacheTag(node.value) ||
					((_a = options.svelteStrictMode) !== null && _a !== void 0
						? _a
						: false);
				const attrNodeValue = printAttributeNodeValue(
					path,
					print,
					quotes,
					node
				);
				if (quotes) {
					return [node.name, '=', '"', attrNodeValue, '"'];
				} else {
					return [node.name, '=', attrNodeValue];
				}
			}
		}
		case 'MustacheTag':
			return ['{', printJS(path, print, 'expression'), '}'];
		case 'IfBlock': {
			const def = [
				'{#if ',
				printJS(path, print, 'expression'),
				'}',
				printSvelteBlockChildren(path, print, options)
			];
			if (node.else) {
				def.push(path.call(print, 'else'));
			}
			def.push('{/if}');
			return group([def, breakParent]);
		}
		case 'ElseBlock': {
			// Else if
			const parent = path.getParentNode();
			if (
				node.children.length === 1 &&
				node.children[0].type === 'IfBlock' &&
				parent.type !== 'EachBlock'
			) {
				const ifNode = node.children[0];
				const def = [
					'{:else if ',
					path.map(
						(ifPath) => printJS(ifPath, print, 'expression'),
						'children'
					)[0],
					'}',
					path.map(
						(ifPath) => printSvelteBlockChildren(ifPath, print, options),
						'children'
					)[0]
				];
				if (ifNode.else) {
					def.push(
						path.map((ifPath) => ifPath.call(print, 'else'), 'children')[0]
					);
				}
				return def;
			}
			return ['{:else}', printSvelteBlockChildren(path, print, options)];
		}
		case 'EachBlock': {
			const def = [
				'{#each ',
				printJS(path, print, 'expression'),
				' as',
				expandNode(node.context)
			];
			if (node.index) {
				def.push(', ', node.index);
			}
			if (node.key) {
				def.push(' (', printJS(path, print, 'key'), ')');
			}
			def.push('}', printSvelteBlockChildren(path, print, options));
			if (node.else) {
				def.push(path.call(print, 'else'));
			}
			def.push('{/each}');
			return group([def, breakParent]);
		}
		case 'AwaitBlock': {
			const hasPendingBlock = node.pending.children.some(
				(n) => !isEmptyTextNode(n)
			);
			const hasThenBlock = node.then.children.some((n) => !isEmptyTextNode(n));
			const hasCatchBlock = node.catch.children.some(
				(n) => !isEmptyTextNode(n)
			);
			let block = [];
			if (!hasPendingBlock && hasThenBlock) {
				block.push(
					group([
						'{#await ',
						printJS(path, print, 'expression'),
						' then',
						expandNode(node.value),
						'}'
					]),
					path.call(print, 'then')
				);
			} else if (!hasPendingBlock && hasCatchBlock) {
				block.push(
					group([
						'{#await ',
						printJS(path, print, 'expression'),
						' catch',
						expandNode(node.error),
						'}'
					]),
					path.call(print, 'catch')
				);
			} else {
				block.push(
					group(['{#await ', printJS(path, print, 'expression'), '}'])
				);
				if (hasPendingBlock) {
					block.push(path.call(print, 'pending'));
				}
				if (hasThenBlock) {
					block.push(
						group(['{:then', expandNode(node.value), '}']),
						path.call(print, 'then')
					);
				}
			}
			if ((hasPendingBlock || hasThenBlock) && hasCatchBlock) {
				block.push(
					group(['{:catch', expandNode(node.error), '}']),
					path.call(print, 'catch')
				);
			}
			block.push('{/await}');
			return group(block);
		}
		case 'KeyBlock': {
			const def = [
				'{#key ',
				printJS(path, print, 'expression'),
				'}',
				printSvelteBlockChildren(path, print, options)
			];
			def.push('{/key}');
			return group([def, breakParent]);
		}
		case 'ThenBlock':
		case 'PendingBlock':
		case 'CatchBlock':
			return printSvelteBlockChildren(path, print, options);
		case 'EventHandler':
			return [
				'on:',
				node.name,
				node.modifiers && node.modifiers.length
					? ['|', join('|', node.modifiers)]
					: '',
				node.expression ? ['=', ...printJsExpression()] : ''
			];
		case 'Binding':
			return [
				'bind:',
				node.name,
				node.expression.type === 'Identifier' &&
				node.expression.name === node.name &&
				options.svelteAllowShorthand
					? ''
					: ['=', ...printJsExpression()]
			];
		case 'Class':
			return [
				'class:',
				node.name,
				node.expression.type === 'Identifier' &&
				node.expression.name === node.name &&
				options.svelteAllowShorthand
					? ''
					: ['=', ...printJsExpression()]
			];
		case 'StyleDirective':
			const prefix = [
				'style:',
				node.name,
				node.modifiers && node.modifiers.length
					? ['|', join('|', node.modifiers)]
					: ''
			];
			if (isOrCanBeConvertedToShorthand(node) || node.value === true) {
				if (options.svelteAllowShorthand) {
					return [...prefix];
				} else if (options.svelteStrictMode) {
					return [...prefix, '="{', node.name, '}"'];
				} else {
					return [...prefix, '={', node.name, '}'];
				}
			} else {
				const quotes =
					!isLoneMustacheTag(node.value) ||
					((_b = options.svelteStrictMode) !== null && _b !== void 0
						? _b
						: false);
				const attrNodeValue = printAttributeNodeValue(
					path,
					print,
					quotes,
					node
				);
				if (quotes) {
					return [...prefix, '=', '"', attrNodeValue, '"'];
				} else {
					return [...prefix, '=', attrNodeValue];
				}
			}
		case 'Let':
			return [
				'let:',
				node.name,
				// shorthand let directives have `null` expressions
				!node.expression ||
				(node.expression.type === 'Identifier' &&
					node.expression.name === node.name)
					? ''
					: ['=', ...printJsExpression()]
			];
		case 'DebugTag':
			return [
				'{@debug',
				node.identifiers.length > 0
					? [' ', join(', ', path.map(print, 'identifiers'))]
					: '',
				'}'
			];
		case 'Ref':
			return ['ref:', node.name];
		case 'Comment': {
			const nodeAfterComment = getNextNode(path);
			if (isIgnoreStartDirective(node) && isNodeTopLevelHTML(node, path)) {
				ignoreRange = true;
			} else if (isIgnoreEndDirective(node) && isNodeTopLevelHTML(node, path)) {
				ignoreRange = false;
			} else if (
				// If there is no sibling node that starts right after us but the parent indicates
				// that there used to be, that means that node was actually an embedded `<style>`
				// or `<script>` node that was cut out.
				// If so, the comment does not refer to the next line we will see.
				// The `embed` function handles printing the comment in the right place.
				doesEmbedStartAfterNode(node, path) ||
				(isEmptyTextNode(nodeAfterComment) &&
					doesEmbedStartAfterNode(nodeAfterComment, path))
			) {
				return '';
			} else if (isIgnoreDirective(node)) {
				ignoreNext = true;
			}
			return printComment(node);
		}
		case 'Transition':
			const kind =
				node.intro && node.outro ? 'transition' : node.intro ? 'in' : 'out';
			return [
				kind,
				':',
				node.name,
				node.modifiers && node.modifiers.length
					? ['|', join('|', node.modifiers)]
					: '',
				node.expression ? ['=', ...printJsExpression()] : ''
			];
		case 'Action':
			return [
				'use:',
				node.name,
				node.expression ? ['=', ...printJsExpression()] : ''
			];
		case 'Animation':
			return [
				'animate:',
				node.name,
				node.expression ? ['=', ...printJsExpression()] : ''
			];
		case 'RawMustacheTag':
			return ['{@html ', printJS(path, print, 'expression'), '}'];
		case 'Spread':
			return ['{...', printJS(path, print, 'expression'), '}'];
		case 'ConstTag':
			return ['{@const ', printJS(path, print, 'expression'), '}'];
	}
	console.error(JSON.stringify(node, null, 4));
	throw new Error('unknown node type: ' + node.type);
}
function printTopLevelParts(n, options, path, print) {
	if (options.svelteSortOrder === 'none') {
		const topLevelPartsByEnd = {};
		if (n.module) {
			topLevelPartsByEnd[n.module.end] = n.module;
		}
		if (n.instance) {
			topLevelPartsByEnd[n.instance.end] = n.instance;
		}
		if (n.css) {
			topLevelPartsByEnd[n.css.end] = n.css;
		}
		const children = getChildren(n.html);
		for (let i = 0; i < children.length; i++) {
			const node = children[i];
			if (topLevelPartsByEnd[node.start]) {
				children.splice(i, 0, topLevelPartsByEnd[node.start]);
				delete topLevelPartsByEnd[node.start];
			}
		}
		const result = path.call(print, 'html');
		if (options.insertPragma && !hasPragma(options.originalText)) {
			return [`<!-- @format -->`, hardline, result];
		} else {
			return result;
		}
	}
	const parts = {
		options: [],
		scripts: [],
		markup: [],
		styles: []
	};
	// scripts
	if (n.module) {
		parts.scripts.push(path.call(print, 'module'));
	}
	if (n.instance) {
		parts.scripts.push(path.call(print, 'instance'));
	}
	// styles
	if (n.css) {
		parts.styles.push(path.call(print, 'css'));
	}
	// markup
	const htmlDoc = path.call(print, 'html');
	if (htmlDoc) {
		parts.markup.push(htmlDoc);
	}
	if (svelteOptionsDoc) {
		parts.options.push(svelteOptionsDoc);
	}
	const docs = flatten(
		parseSortOrder(options.svelteSortOrder).map((p) => parts[p])
	);
	// Need to reset these because they are global and could affect the next formatting run
	ignoreNext = false;
	ignoreRange = false;
	svelteOptionsDoc = undefined;
	// If this is invoked as an embed of markdown, remove the last hardline.
	// The markdown parser tries this, too, but fails because it does not
	// recurse into concats. Doing this will prevent an empty line
	// at the end of the embedded code block.
	if (options.parentParser === 'markdown') {
		const lastDoc = docs[docs.length - 1];
		trimRight([lastDoc], isLine);
	}
	if (options.insertPragma && !hasPragma(options.originalText)) {
		return [`<!-- @format -->`, hardline, group(docs)];
	} else {
		return group([join(hardline, docs)]);
	}
}
function printAttributeNodeValue(path, print, quotes, node) {
	const valueDocs = path.map((childPath) => childPath.call(print), 'value');
	if (!quotes || !formattableAttributes.includes(node.name)) {
		return valueDocs;
	} else {
		return indent(group(trim(valueDocs, isLine)));
	}
}
function printSvelteBlockChildren(path, print, options) {
	const node = path.getValue();
	const children = node.children;
	if (!children || children.length === 0) {
		return '';
	}
	const whitespaceAtStartOfBlock = checkWhitespaceAtStartOfSvelteBlock(
		node,
		options
	);
	const whitespaceAtEndOfBlock = checkWhitespaceAtEndOfSvelteBlock(
		node,
		options
	);
	const startline =
		whitespaceAtStartOfBlock === 'none'
			? ''
			: whitespaceAtEndOfBlock === 'line' || whitespaceAtStartOfBlock === 'line'
			? hardline
			: line;
	const endline =
		whitespaceAtEndOfBlock === 'none'
			? ''
			: whitespaceAtEndOfBlock === 'line' || whitespaceAtStartOfBlock === 'line'
			? hardline
			: line;
	const firstChild = children[0];
	const lastChild = children[children.length - 1];
	if (isTextNodeStartingWithWhitespace(firstChild)) {
		trimTextNodeLeft(firstChild);
	}
	if (isTextNodeEndingWithWhitespace(lastChild)) {
		trimTextNodeRight(lastChild);
	}
	return [
		indent([startline, group(printChildren(path, print, options))]),
		endline
	];
}
function printPre(node, originalText, path, print) {
	const result = [];
	const length = node.children.length;
	for (let i = 0; i < length; i++) {
		const child = node.children[i];
		if (child.type === 'Text') {
			const lines = originalText
				.substring(child.start, child.end)
				.split(/\r?\n/);
			lines.forEach((line, j) => {
				if (j > 0) result.push(literalline);
				result.push(line);
			});
		} else {
			result.push(path.call(print, 'children', i));
		}
	}
	return result;
}
function printChildren(path, print, options) {
	if (isPreTagContent(path)) {
		return path.map(print, 'children');
	}
	const childNodes = prepareChildren(
		path.getValue().children,
		path,
		print,
		options
	);
	// modify original array because it's accessed later through map(print, 'children', idx)
	path.getValue().children = childNodes;
	if (childNodes.length === 0) {
		return '';
	}
	const childDocs = [];
	let handleWhitespaceOfPrevTextNode = false;
	for (let i = 0; i < childNodes.length; i++) {
		const childNode = childNodes[i];
		if (childNode.type === 'Text') {
			handleTextChild(i, childNode);
		} else if (isBlockElement(childNode, options)) {
			handleBlockChild(i);
		} else if (isInlineElement(path, options, childNode)) {
			handleInlineChild(i);
		} else {
			childDocs.push(printChild(i));
			handleWhitespaceOfPrevTextNode = false;
		}
	}
	// If there's at least one block element and more than one node, break content
	const forceBreakContent =
		childNodes.length > 1 &&
		childNodes.some((child) => isBlockElement(child, options));
	if (forceBreakContent) {
		childDocs.push(breakParent);
	}
	return childDocs;
	function printChild(idx) {
		return path.call(print, 'children', idx);
	}
	/**
	 * Print inline child. Hug whitespace of previous text child if there was one.
	 */
	function handleInlineChild(idx) {
		if (handleWhitespaceOfPrevTextNode) {
			childDocs.push(group([line, printChild(idx)]));
		} else {
			childDocs.push(printChild(idx));
		}
		handleWhitespaceOfPrevTextNode = false;
	}
	/**
	 * Print block element. Add softlines around it if needed
	 * so it breaks into a separate line if children are broken up.
	 * Don't add lines at the start/end if it's the first/last child because this
	 * kind of whitespace handling is done in the parent already.
	 */
	function handleBlockChild(idx) {
		const prevChild = childNodes[idx - 1];
		if (
			prevChild &&
			!isBlockElement(prevChild, options) &&
			(prevChild.type !== 'Text' ||
				handleWhitespaceOfPrevTextNode ||
				!isTextNodeEndingWithWhitespace(prevChild))
		) {
			childDocs.push(softline);
		}
		childDocs.push(printChild(idx));
		const nextChild = childNodes[idx + 1];
		if (
			nextChild &&
			(nextChild.type !== 'Text' ||
				// Only handle text which starts with a whitespace and has text afterwards,
				// or is empty but followed by an inline element. The latter is done
				// so that if the children break, the inline element afterwards is in a separate line.
				((!isEmptyTextNode(nextChild) ||
					(childNodes[idx + 2] &&
						isInlineElement(path, options, childNodes[idx + 2]))) &&
					!isTextNodeStartingWithLinebreak(nextChild)))
		) {
			childDocs.push(softline);
		}
		handleWhitespaceOfPrevTextNode = false;
	}
	/**
	 * Print text child. First/last child white space handling
	 * is done in parent already. By definition of the Svelte AST,
	 * a text node always is inbetween other tags. Add hardlines
	 * if the users wants to have them inbetween.
	 * If the text is trimmed right, toggle flag telling
	 * subsequent (inline)block element to alter its printing logic
	 * to check if they need to hug or print lines themselves.
	 */
	function handleTextChild(idx, childNode) {
		handleWhitespaceOfPrevTextNode = false;
		if (idx === 0 || idx === childNodes.length - 1) {
			childDocs.push(printChild(idx));
			return;
		}
		const prevNode = childNodes[idx - 1];
		const nextNode = childNodes[idx + 1];
		if (
			isTextNodeStartingWithWhitespace(childNode) &&
			// If node is empty, go straight through to checking the right end
			!isEmptyTextNode(childNode)
		) {
			if (
				isInlineElement(path, options, prevNode) &&
				!isTextNodeStartingWithLinebreak(childNode)
			) {
				trimTextNodeLeft(childNode);
				const lastChildDoc = childDocs.pop();
				childDocs.push(group([lastChildDoc, line]));
			}
			if (
				isBlockElement(prevNode, options) &&
				!isTextNodeStartingWithLinebreak(childNode)
			) {
				trimTextNodeLeft(childNode);
			}
		}
		if (isTextNodeEndingWithWhitespace(childNode)) {
			if (
				isInlineElement(path, options, nextNode) &&
				!isTextNodeEndingWithLinebreak(childNode)
			) {
				handleWhitespaceOfPrevTextNode =
					!prevNode || !isBlockElement(prevNode, options);
				trimTextNodeRight(childNode);
			}
			if (
				isBlockElement(nextNode, options) &&
				!isTextNodeEndingWithLinebreak(childNode, 2)
			) {
				handleWhitespaceOfPrevTextNode =
					!prevNode || !isBlockElement(prevNode, options);
				trimTextNodeRight(childNode);
			}
		}
		childDocs.push(printChild(idx));
	}
}
/**
 * `svelte:options` is part of the html part but needs to be snipped out and handled
 * separately to reorder it as configured. The comment above it should be moved with it.
 * Do that here.
 */
function prepareChildren(children, path, print, options) {
	let svelteOptionsComment;
	const childrenWithoutOptions = [];
	const bracketSameLine = isBracketSameLine(options);
	for (let idx = 0; idx < children.length; idx++) {
		const currentChild = children[idx];
		if (currentChild.type === 'Text' && getUnencodedText(currentChild) === '') {
			continue;
		}
		if (
			isEmptyTextNode(currentChild) &&
			doesEmbedStartAfterNode(currentChild, path)
		) {
			continue;
		}
		if (options.svelteSortOrder !== 'none') {
			if (isCommentFollowedByOptions(currentChild, idx)) {
				svelteOptionsComment = printComment(currentChild);
				const nextChild = children[idx + 1];
				idx += nextChild && isEmptyTextNode(nextChild) ? 1 : 0;
				continue;
			}
			if (currentChild.type === 'Options') {
				printSvelteOptions(currentChild, idx, path, print);
				continue;
			}
		}
		childrenWithoutOptions.push(currentChild);
	}
	const mergedChildrenWithoutOptions = [];
	for (let idx = 0; idx < childrenWithoutOptions.length; idx++) {
		const currentChild = childrenWithoutOptions[idx];
		const nextChild = childrenWithoutOptions[idx + 1];
		if (
			currentChild.type === 'Text' &&
			nextChild &&
			nextChild.type === 'Text'
		) {
			// A tag was snipped out (f.e. svelte:options). Join text
			currentChild.raw += nextChild.raw;
			currentChild.data += nextChild.data;
			idx++;
		}
		mergedChildrenWithoutOptions.push(currentChild);
	}
	return mergedChildrenWithoutOptions;
	function printSvelteOptions(node, idx, path, print) {
		svelteOptionsDoc = group([
			[
				'<',
				node.name,
				indent(
					group([
						...path.map(
							printWithPrependedAttributeLine(node, options, print),
							'children',
							idx,
							'attributes'
						),
						bracketSameLine ? '' : dedent(line)
					])
				),
				...[bracketSameLine ? ' ' : '', '/>']
			],
			hardline
		]);
		if (svelteOptionsComment) {
			svelteOptionsDoc = group([
				svelteOptionsComment,
				hardline,
				svelteOptionsDoc
			]);
		}
	}
	function isCommentFollowedByOptions(node, idx) {
		if (
			node.type !== 'Comment' ||
			isIgnoreEndDirective(node) ||
			isIgnoreStartDirective(node)
		) {
			return false;
		}
		const nextChild = children[idx + 1];
		if (nextChild) {
			if (isEmptyTextNode(nextChild)) {
				const afterNext = children[idx + 2];
				return afterNext && afterNext.type === 'Options';
			}
			return nextChild.type === 'Options';
		}
		return false;
	}
}
/**
 * Split the text into words separated by whitespace. Replace the whitespaces by lines,
 * collapsing multiple whitespaces into a single line.
 *
 * If the text starts or ends with multiple newlines, two of those should be kept.
 */
function splitTextToDocs(node) {
	const text = getUnencodedText(node);
	const lines = text.split(/[\t\n\f\r ]+/);
	let docs = join(line, lines).filter((doc) => doc !== '');
	if (startsWithLinebreak(text)) {
		docs[0] = hardline;
	}
	if (startsWithLinebreak(text, 2)) {
		docs = [hardline, ...docs];
	}
	if (endsWithLinebreak(text)) {
		docs[docs.length - 1] = hardline;
	}
	if (endsWithLinebreak(text, 2)) {
		docs = [...docs, hardline];
	}
	return docs;
}
function printJS(path, print, name) {
	return path.call(print, name);
}
function expandNode(node, parent) {
	if (node === null) {
		return '';
	}
	if (typeof node === 'string') {
		// pre-v3.20 AST
		return ' ' + node;
	}
	switch (node.type) {
		case 'ArrayExpression':
		case 'ArrayPattern':
			return ' [' + node.elements.map(expandNode).join(',').slice(1) + ']';
		case 'AssignmentPattern':
			return expandNode(node.left) + ' =' + expandNode(node.right);
		case 'Identifier':
			return ' ' + node.name;
		case 'Literal':
			return ' ' + node.raw;
		case 'ObjectExpression':
			return (
				' {' + node.properties.map((p) => expandNode(p, node)).join(',') + ' }'
			);
		case 'ObjectPattern':
			return ' {' + node.properties.map(expandNode).join(',') + ' }';
		case 'Property':
			if (
				node.value.type === 'ObjectPattern' ||
				node.value.type === 'ArrayPattern'
			) {
				return ' ' + node.key.name + ':' + expandNode(node.value);
			} else if (
				(node.value.type === 'Identifier' &&
					node.key.name !== node.value.name) ||
				(parent && parent.type === 'ObjectExpression')
			) {
				return expandNode(node.key) + ':' + expandNode(node.value);
			} else {
				return expandNode(node.value);
			}
		case 'RestElement':
			return ' ...' + node.argument.name;
	}
	console.error(JSON.stringify(node, null, 4));
	throw new Error('unknown node type: ' + node.type);
}
function printComment(node) {
	let text = node.data;
	if (hasSnippedContent(text)) {
		text = unsnipContent(text);
	}
	return group(['<!--', text, '-->']);
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
	function adopt(value) {
		return value instanceof P
			? value
			: new P(function (resolve) {
					resolve(value);
			  });
	}
	return new (P || (P = Promise))(function (resolve, reject) {
		function fulfilled(value) {
			try {
				step(generator.next(value));
			} catch (e) {
				reject(e);
			}
		}
		function rejected(value) {
			try {
				step(generator['throw'](value));
			} catch (e) {
				reject(e);
			}
		}
		function step(result) {
			result.done
				? resolve(result.value)
				: adopt(result.value).then(fulfilled, rejected);
		}
		step((generator = generator.apply(thisArg, _arguments || [])).next());
	});
}

var _SuppressedError =
	typeof SuppressedError === 'function'
		? SuppressedError
		: function (error, suppressed, message) {
				var e = new Error(message);
				return (
					(e.name = 'SuppressedError'),
					(e.error = error),
					(e.suppressed = suppressed),
					e
				);
		  };

function getText(node, options, unsnip = false) {
	const leadingComments = node.leadingComments;
	const text = options.originalText.slice(
		options.locStart(
			// if there are comments before the node they are not included
			// in the `start` of the node itself
			(leadingComments && leadingComments[0]) || node
		),
		options.locEnd(node)
	);
	if (!unsnip || !hasSnippedContent(text)) {
		return text;
	}
	return unsnipContent(text);
}

function extractAttributes(html) {
	const extractAttributesRegex = /<[a-z]+[\s\n]*([\s\S]*?)>/im;
	const attributeRegex =
		/([^\s=]+)(?:=(?:(?:("|')([\s\S]*?)\2)|(?:(\S+?)(?:\s|>|$))))?/gim;
	const [, attributesString] = html.match(extractAttributesRegex);
	const attrs = [];
	let match;
	while ((match = attributeRegex.exec(attributesString))) {
		const [all, name, quotes, valueQuoted, valueUnquoted] = match;
		const value = valueQuoted || valueUnquoted;
		const attrStart = match.index;
		let valueNode;
		if (!value) {
			valueNode = true;
		} else {
			let valueStart = attrStart + name.length;
			if (quotes) {
				valueStart += 2;
			}
			valueNode = [
				{
					type: 'Text',
					data: value,
					start: valueStart,
					end: valueStart + value.length
				}
			];
		}
		attrs.push({
			type: 'Attribute',
			name,
			value: valueNode,
			start: attrStart,
			end: attrStart + all.length
		});
	}
	return attrs;
}

const {
	builders: {
		group: group$1,
		hardline: hardline$1,
		softline: softline$1,
		indent: indent$1,
		dedent: dedent$1,
		literalline: literalline$1
	},
	utils: { removeLines }
} = prettier.doc;
const leaveAlone = new Set([
	'Script',
	'Style',
	'Identifier',
	'MemberExpression',
	'CallExpression',
	'ArrowFunctionExpression'
]);
const dontTraverse = new Set(['start', 'end', 'type']);
function getVisitorKeys(node, nonTraversableKeys) {
	return Object.keys(node).filter((key) => {
		return (
			!nonTraversableKeys.has(key) &&
			!leaveAlone.has(node.type) &&
			!dontTraverse.has(key)
		);
	});
}
// Embed works like this in Prettier v3:
// - do depth first traversal of all node properties
// - deepest property is calling embed first
// - if embed returns a function, it will be called after the traversal in a second pass, in the same order (deepest first)
// For performance reasons we try to only return functions when we're sure we need to transform something.
function embed(path, _options) {
	var _a;
	const node = path.getNode();
	const options = _options;
	if (!options.locStart || !options.locEnd || !options.originalText) {
		throw new Error('Missing required options');
	}
	if (isASTNode(node)) {
		assignCommentsToNodes(node);
		if (node.module) {
			node.module.type = 'Script';
			node.module.attributes = extractAttributes(getText(node.module, options));
		}
		if (node.instance) {
			node.instance.type = 'Script';
			node.instance.attributes = extractAttributes(
				getText(node.instance, options)
			);
		}
		if (node.css) {
			node.css.type = 'Style';
			node.css.content.type = 'StyleProgram';
		}
		return null;
	}
	// embed does depth first traversal with deepest node called first, therefore we need to
	// check the parent to see if we are inside an expression that should be embedded.
	const parent = path.getParentNode();
	const printJsExpression = () => {
		var _a;
		return parent.expression
			? printJS$1(
					parent,
					(_a = options.svelteStrictMode) !== null && _a !== void 0
						? _a
						: false,
					false,
					false,
					'expression'
			  )
			: undefined;
	};
	const printSvelteBlockJS = (name) =>
		printJS$1(parent, false, true, false, name);
	switch (parent.type) {
		case 'IfBlock':
		case 'ElseBlock':
		case 'AwaitBlock':
		case 'KeyBlock':
			printSvelteBlockJS('expression');
			break;
		case 'EachBlock':
			printSvelteBlockJS('expression');
			printSvelteBlockJS('key');
			break;
		case 'Element':
			printJS$1(
				parent,
				(_a = options.svelteStrictMode) !== null && _a !== void 0 ? _a : false,
				false,
				false,
				'tag'
			);
			break;
		case 'MustacheTag':
			printJS$1(
				parent,
				isInsideQuotedAttribute(path, options),
				false,
				false,
				'expression'
			);
			break;
		case 'RawMustacheTag':
			printJS$1(parent, false, false, false, 'expression');
			break;
		case 'Spread':
			printJS$1(parent, false, false, false, 'expression');
			break;
		case 'ConstTag':
			printJS$1(parent, false, false, true, 'expression');
			break;
		case 'EventHandler':
		case 'Binding':
		case 'Class':
		case 'Let':
		case 'Transition':
		case 'Action':
		case 'Animation':
		case 'InlineComponent':
			printJsExpression();
			break;
	}
	if (node.isJS) {
		return (textToDoc) =>
			__awaiter(this, void 0, void 0, function* () {
				try {
					const embeddedOptions = {
						// Prettier only allows string references as parsers from v3 onwards,
						// so we need to have another public parser and defer to that
						parser: 'svelteExpressionParser',
						singleQuote: node.forceSingleQuote ? true : options.singleQuote
					};
					let docs = yield textToDoc(
						forceIntoExpression(
							// If we have snipped content, it was done wrongly and we need to unsnip it.
							// This happens for example for {@html `<script>{foo}</script>`}
							getText(node, options, true)
						),
						embeddedOptions
					);
					if (node.forceSingleLine) {
						docs = removeLines(docs);
					}
					if (node.removeParentheses) {
						docs = removeParentheses(docs);
					}
					return docs;
				} catch (e) {
					return getText(node, options, true);
				}
			});
	}
	const embedType = (tag, parser, isTopLevel) => {
		return (textToDoc, print) =>
			__awaiter(this, void 0, void 0, function* () {
				return embedTag(
					tag,
					options.originalText,
					path,
					(content) => formatBodyContent(content, parser, textToDoc, options),
					print,
					isTopLevel,
					options
				);
			});
	};
	const embedScript = (isTopLevel) =>
		embedType(
			'script',
			// Use babel-ts as fallback because the absence does not mean the content is not TS,
			// the user could have set the default language. babel-ts will format things a little
			// bit different though, especially preserving parentheses around dot notation which
			// fixes https://github.com/sveltejs/prettier-plugin-svelte/issues/218
			isTypeScript(node) ? 'typescript' : 'babel-ts',
			isTopLevel
		);
	const embedStyle = (isTopLevel) =>
		embedType(
			'style',
			isLess(node) ? 'less' : isScss(node) ? 'scss' : 'css',
			isTopLevel
		);
	const embedPug = () => embedType('template', 'pug', false);
	switch (node.type) {
		case 'Script':
			return embedScript(true);
		case 'Style':
			return embedStyle(true);
		case 'Element': {
			if (node.name === 'script') {
				return embedScript(false);
			} else if (node.name === 'style') {
				return embedStyle(false);
			} else if (isPugTemplate(node)) {
				return embedPug();
			}
		}
	}
	return null;
}
function forceIntoExpression(statement) {
	// note the trailing newline: if the statement ends in a // comment,
	// we can't add the closing bracket right afterwards
	return `(${statement}\n)`;
}
function preformattedBody(str) {
	if (!str) {
		return '';
	}
	const firstNewline = /^[\t\f\r ]*\n/;
	const lastNewline = /\n[\t\f\r ]*$/;
	// If we do not start with a new line prettier might try to break the opening tag
	// to keep it together with the string. Use a literal line to skip indentation.
	return [
		literalline$1,
		str.replace(firstNewline, '').replace(lastNewline, ''),
		hardline$1
	];
}
function getSnippedContent(node) {
	const encodedContent = getAttributeTextValue(
		snippedTagContentAttribute,
		node
	);
	if (encodedContent) {
		return Buffer.from(encodedContent, 'base64').toString('utf-8');
	} else {
		return '';
	}
}
function formatBodyContent(content, parser, textToDoc, options) {
	return __awaiter(this, void 0, void 0, function* () {
		try {
			const body = yield textToDoc(content, { parser });
			if (parser === 'pug' && typeof body === 'string') {
				// Pug returns no docs but a final string.
				// Therefore prepend the line offsets
				const whitespace = options.useTabs
					? '\t'
					: ' '.repeat(
							options.pugTabWidth && options.pugTabWidth > 0
								? options.pugTabWidth
								: options.tabWidth
					  );
				const pugBody = body
					.split('\n')
					.map((line) => (line ? whitespace + line : line))
					.join('\n');
				return [hardline$1, pugBody];
			}
			const indentIfDesired = (doc) =>
				options.svelteIndentScriptAndStyle ? indent$1(doc) : doc;
			trimRight([body], isLine);
			return [indentIfDesired([hardline$1, body]), hardline$1];
		} catch (error) {
			if (process.env.PRETTIER_DEBUG) {
				throw error;
			}
			// We will wind up here if there is a syntax error in the embedded code. If we throw an error,
			// prettier will try to print the node with the printer. That will fail with a hard-to-interpret
			// error message (e.g. "Unsupported node type", referring to `<script>`).
			// Therefore, fall back on just returning the unformatted text.
			console.error(error);
			return preformattedBody(content);
		}
	});
}
function embedTag(
	tag,
	text,
	path,
	formatBodyContent,
	print,
	isTopLevel,
	options
) {
	var _a;
	return __awaiter(this, void 0, void 0, function* () {
		const node = path.getNode();
		const content =
			tag === 'template' ? printRaw(node, text) : getSnippedContent(node);
		const previousComments =
			node.type === 'Script' || node.type === 'Style'
				? node.comments
				: [getLeadingComment(path)]
						.filter(Boolean)
						.map((comment) => ({ comment: comment, emptyLineAfter: false }));
		const canFormat =
			isNodeSupportedLanguage(node) &&
			!isIgnoreDirective(
				(_a = previousComments[previousComments.length - 1]) === null ||
					_a === void 0
					? void 0
					: _a.comment
			) &&
			(tag !== 'template' ||
				options.plugins.some(
					(plugin) =>
						typeof plugin !== 'string' && plugin.parsers && plugin.parsers.pug
				));
		const body = canFormat
			? content.trim() !== ''
				? yield formatBodyContent(content)
				: content === ''
				? ''
				: hardline$1
			: preformattedBody(content);
		const openingTag = group$1([
			'<',
			tag,
			indent$1(
				group$1([
					...path.map(
						printWithPrependedAttributeLine(node, options, print),
						'attributes'
					),
					isBracketSameLine(options) ? '' : dedent$1(softline$1)
				])
			),
			'>'
		]);
		let result = group$1([openingTag, body, '</', tag, '>']);
		const comments = [];
		for (const comment of previousComments) {
			comments.push('<!--', comment.comment.data, '-->');
			comments.push(hardline$1);
			if (comment.emptyLineAfter) {
				comments.push(hardline$1);
			}
		}
		if (isTopLevel && options.svelteSortOrder !== 'none') {
			// top level embedded nodes have been moved from their normal position in the
			// node tree. if there is a comment referring to it, it must be recreated at
			// the new position.
			return [...comments, result, hardline$1];
		} else {
			return comments.length ? [...comments, result] : result;
		}
	});
}
function printJS$1(
	node,
	forceSingleQuote,
	forceSingleLine,
	removeParentheses,
	name
) {
	if (!node[name] || typeof node[name] !== 'object') {
		return;
	}
	node[name].isJS = true;
	node[name].forceSingleQuote = forceSingleQuote;
	node[name].forceSingleLine = forceSingleLine;
	node[name].removeParentheses = removeParentheses;
}

const babelParser = dn.babel;
function locStart(node) {
	return node.start;
}
function locEnd(node) {
	return node.end;
}
const languages = [
	{
		name: 'svelte',
		parsers: ['svelte'],
		extensions: ['.svelte'],
		vscodeLanguageIds: ['svelte']
	}
];
const parsers = {
	svelte: {
		hasPragma,
		parse: (text) => {
			try {
				return Object.assign(Object.assign({}, parse(text)), {
					__isRoot: true
				});
			} catch (err) {
				if (err.start != null && err.end != null) {
					// Prettier expects error objects to have loc.start and loc.end fields.
					// Svelte uses start and end directly on the error.
					err.loc = {
						start: err.start,
						end: err.end
					};
				}
				throw err;
			}
		},
		preprocess: (text, options) => {
			text = snipScriptAndStyleTagContent(text);
			text = text.trim();
			// Prettier sets the preprocessed text as the originalText in case
			// the Svelte formatter is called directly. In case it's called
			// as an embedded parser (for example when there's a Svelte code block
			// inside markdown), the originalText is not updated after preprocessing.
			// Therefore we do it ourselves here.
			options.originalText = text;
			return text;
		},
		locStart,
		locEnd,
		astFormat: 'svelte-ast'
	},
	svelteExpressionParser: Object.assign(Object.assign({}, babelParser), {
		parse: (text, options) => {
			const ast = babelParser.parse(text, options);
			return Object.assign(Object.assign({}, ast), {
				program: ast.program.body[0].expression
			});
		}
	})
};
const printers = {
	'svelte-ast': {
		print,
		embed,
		// @ts-expect-error Prettier's type definitions are wrong
		getVisitorKeys
	}
};

export default {
	languages,
	options,
	parsers,
	printers
};
