import { createContext as e, useContext as t, useEffect as n, useRef as r, useState as i } from "react";
import { AnimatePresence as a, motion as o } from "framer-motion";
//#region \0rolldown/runtime.js
var s = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), c = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), l = /* @__PURE__ */ s(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
	function r(e, n, r) {
		var i = null;
		if (r !== void 0 && (i = "" + r), n.key !== void 0 && (i = "" + n.key), "key" in n) for (var a in r = {}, n) a !== "key" && (r[a] = n[a]);
		else r = n;
		return n = r.ref, {
			$$typeof: t,
			type: e,
			key: i,
			ref: n === void 0 ? null : n,
			props: r
		};
	}
	e.Fragment = n, e.jsx = r, e.jsxs = r;
})), u = /* @__PURE__ */ s(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e) {
			if (e == null) return null;
			if (typeof e == "function") return e.$$typeof === k ? null : e.displayName || e.name || null;
			if (typeof e == "string") return e;
			switch (e) {
				case v: return "Fragment";
				case b: return "Profiler";
				case y: return "StrictMode";
				case w: return "Suspense";
				case T: return "SuspenseList";
				case O: return "Activity";
			}
			if (typeof e == "object") switch (typeof e.tag == "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), e.$$typeof) {
				case _: return "Portal";
				case S: return e.displayName || "Context";
				case x: return (e._context.displayName || "Context") + ".Consumer";
				case C:
					var n = e.render;
					return e = e.displayName, e ||= (e = n.displayName || n.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
				case E: return n = e.displayName || null, n === null ? t(e.type) || "Memo" : n;
				case D:
					n = e._payload, e = e._init;
					try {
						return t(e(n));
					} catch {}
			}
			return null;
		}
		function n(e) {
			return "" + e;
		}
		function r(e) {
			try {
				n(e);
				var t = !1;
			} catch {
				t = !0;
			}
			if (t) {
				t = console;
				var r = t.error, i = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
				return r.call(t, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", i), n(e);
			}
		}
		function i(e) {
			if (e === v) return "<>";
			if (typeof e == "object" && e && e.$$typeof === D) return "<...>";
			try {
				var n = t(e);
				return n ? "<" + n + ">" : "<...>";
			} catch {
				return "<...>";
			}
		}
		function a() {
			var e = A.A;
			return e === null ? null : e.getOwner();
		}
		function o() {
			return Error("react-stack-top-frame");
		}
		function s(e) {
			if (j.call(e, "key")) {
				var t = Object.getOwnPropertyDescriptor(e, "key").get;
				if (t && t.isReactWarning) return !1;
			}
			return e.key !== void 0;
		}
		function l(e, t) {
			function n() {
				P || (P = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", t));
			}
			n.isReactWarning = !0, Object.defineProperty(e, "key", {
				get: n,
				configurable: !0
			});
		}
		function u() {
			var e = t(this.type);
			return F[e] || (F[e] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), e = this.props.ref, e === void 0 ? null : e;
		}
		function d(e, t, n, r, i, a) {
			var o = n.ref;
			return e = {
				$$typeof: g,
				type: e,
				key: t,
				props: n,
				_owner: r
			}, (o === void 0 ? null : o) === null ? Object.defineProperty(e, "ref", {
				enumerable: !1,
				value: null
			}) : Object.defineProperty(e, "ref", {
				enumerable: !1,
				get: u
			}), e._store = {}, Object.defineProperty(e._store, "validated", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: 0
			}), Object.defineProperty(e, "_debugInfo", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: null
			}), Object.defineProperty(e, "_debugStack", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: i
			}), Object.defineProperty(e, "_debugTask", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: a
			}), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
		}
		function f(e, n, i, o, c, u) {
			var f = n.children;
			if (f !== void 0) if (o) if (M(f)) {
				for (o = 0; o < f.length; o++) p(f[o]);
				Object.freeze && Object.freeze(f);
			} else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
			else p(f);
			if (j.call(n, "key")) {
				f = t(e);
				var m = Object.keys(n).filter(function(e) {
					return e !== "key";
				});
				o = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", R[f + o] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error("A props object containing a \"key\" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />", o, f, m, f), R[f + o] = !0);
			}
			if (f = null, i !== void 0 && (r(i), f = "" + i), s(n) && (r(n.key), f = "" + n.key), "key" in n) for (var h in i = {}, n) h !== "key" && (i[h] = n[h]);
			else i = n;
			return f && l(i, typeof e == "function" ? e.displayName || e.name || "Unknown" : e), d(e, f, i, a(), c, u);
		}
		function p(e) {
			m(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e && e.$$typeof === D && (e._payload.status === "fulfilled" ? m(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
		}
		function m(e) {
			return typeof e == "object" && !!e && e.$$typeof === g;
		}
		var h = c("react"), g = Symbol.for("react.transitional.element"), _ = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), x = Symbol.for("react.consumer"), S = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), O = Symbol.for("react.activity"), k = Symbol.for("react.client.reference"), A = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = Object.prototype.hasOwnProperty, M = Array.isArray, N = console.createTask ? console.createTask : function() {
			return null;
		};
		h = { react_stack_bottom_frame: function(e) {
			return e();
		} };
		var P, F = {}, I = h.react_stack_bottom_frame.bind(h, o)(), L = N(i(o)), R = {};
		e.Fragment = v, e.jsx = function(e, t, n) {
			var r = 1e4 > A.recentlyCreatedOwnerStacks++;
			return f(e, t, n, !1, r ? Error("react-stack-top-frame") : I, r ? N(i(e)) : L);
		}, e.jsxs = function(e, t, n) {
			var r = 1e4 > A.recentlyCreatedOwnerStacks++;
			return f(e, t, n, !0, r ? Error("react-stack-top-frame") : I, r ? N(i(e)) : L);
		};
	})();
})), d = (/* @__PURE__ */ s(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = l() : t.exports = u();
})))(), f = { base: {
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	gap: "8px",
	border: "none",
	borderRadius: "8px",
	fontFamily: "inherit",
	fontWeight: 600,
	cursor: "pointer",
	transition: "all 0.15s ease",
	outline: "none",
	textDecoration: "none"
} }, p = {
	primary: {
		backgroundColor: "var(--color-primary)",
		color: "#ffffff"
	},
	secondary: {
		backgroundColor: "var(--color-bg-subtle)",
		color: "var(--color-text)",
		border: "1px solid var(--color-border)"
	},
	outline: {
		backgroundColor: "transparent",
		color: "var(--color-primary)",
		border: "2px solid var(--color-primary)"
	},
	ghost: {
		backgroundColor: "transparent",
		color: "var(--color-text)"
	},
	danger: {
		backgroundColor: "#ef4444",
		color: "#ffffff"
	}
}, m = {
	sm: {
		padding: "6px 12px",
		fontSize: "0.875rem",
		minHeight: "32px"
	},
	md: {
		padding: "8px 16px",
		fontSize: "1rem",
		minHeight: "40px"
	},
	lg: {
		padding: "12px 24px",
		fontSize: "1.125rem",
		minHeight: "48px"
	}
}, h = ({ variant: e = "primary", size: t = "md", isLoading: n = !1, leftIcon: r, rightIcon: i, fullWidth: a = !1, children: s, disabled: c, style: l, ...u }) => /* @__PURE__ */ (0, d.jsx)(o.button, {
	whileHover: { scale: c || n ? 1 : 1.02 },
	whileTap: { scale: c || n ? 1 : .98 },
	style: {
		...f.base,
		...p[e],
		...m[t],
		width: a ? "100%" : void 0,
		opacity: c || n ? .6 : 1,
		cursor: c || n ? "not-allowed" : "pointer",
		...l
	},
	disabled: c || n,
	...u,
	children: n ? /* @__PURE__ */ (0, d.jsx)(g, { size: "sm" }) : /* @__PURE__ */ (0, d.jsxs)(d.Fragment, { children: [
		r && r,
		s,
		i && i
	] })
}), g = ({ size: e }) => /* @__PURE__ */ (0, d.jsx)(o.div, {
	animate: { rotate: 360 },
	transition: {
		duration: .8,
		repeat: Infinity,
		ease: "linear"
	},
	style: {
		width: e === "sm" ? 16 : 20,
		height: e === "sm" ? 16 : 20,
		border: "2px solid rgba(255,255,255,0.3)",
		borderTopColor: "#ffffff",
		borderRadius: "50%"
	}
}), _ = ({ label: e, helperText: t, error: n, leftIcon: r, rightIcon: a, id: s, style: c, ...l }) => {
	let [u, f] = i(!1), p = s || e?.toLowerCase().replace(/\s+/g, "-");
	return /* @__PURE__ */ (0, d.jsxs)("div", {
		style: {
			display: "flex",
			flexDirection: "column",
			gap: "6px",
			width: "100%"
		},
		children: [
			e && /* @__PURE__ */ (0, d.jsx)("label", {
				htmlFor: p,
				style: {
					fontSize: "0.875rem",
					fontWeight: 600,
					color: n ? "#ef4444" : "var(--color-text)"
				},
				children: e
			}),
			/* @__PURE__ */ (0, d.jsxs)("div", {
				style: {
					position: "relative",
					display: "flex",
					alignItems: "center"
				},
				children: [
					r && /* @__PURE__ */ (0, d.jsx)("span", {
						style: {
							position: "absolute",
							left: 12,
							color: "var(--color-text-muted)"
						},
						children: r
					}),
					/* @__PURE__ */ (0, d.jsx)(o.input, {
						id: p,
						animate: {
							borderColor: n ? "#ef4444" : u ? "var(--color-primary)" : "var(--color-border)",
							boxShadow: u ? n ? "0 0 0 3px rgba(239,68,68,0.15)" : "0 0 0 3px rgba(59,130,246,0.15)" : "none"
						},
						transition: { duration: .15 },
						onFocus: () => f(!0),
						onBlur: () => f(!1),
						style: {
							width: "100%",
							padding: r ? "10px 12px 10px 38px" : "10px 12px",
							paddingRight: a ? "38px" : "12px",
							fontSize: "1rem",
							fontFamily: "inherit",
							backgroundColor: "var(--color-bg)",
							color: "var(--color-text)",
							border: "1.5px solid var(--color-border)",
							borderRadius: "8px",
							outline: "none",
							transition: "all 0.15s ease",
							...c
						},
						...l
					}),
					a && /* @__PURE__ */ (0, d.jsx)("span", {
						style: {
							position: "absolute",
							right: 12,
							color: "var(--color-text-muted)"
						},
						children: a
					})
				]
			}),
			(t || n) && /* @__PURE__ */ (0, d.jsx)("span", {
				style: {
					fontSize: "0.8rem",
					color: n ? "#ef4444" : "var(--color-text-muted)"
				},
				children: n || t
			})
		]
	});
}, v = {
	sm: "400px",
	md: "560px",
	lg: "800px"
}, y = ({ isOpen: e, onClose: t, title: r, children: i, size: s = "md" }) => (n(() => {
	let n = (e) => {
		e.key === "Escape" && t();
	};
	return e && document.addEventListener("keydown", n), () => document.removeEventListener("keydown", n);
}, [e, t]), n(() => (document.body.style.overflow = e ? "hidden" : "", () => {
	document.body.style.overflow = "";
}), [e]), /* @__PURE__ */ (0, d.jsx)(a, { children: e && /* @__PURE__ */ (0, d.jsx)(d.Fragment, { children: /* @__PURE__ */ (0, d.jsx)(o.div, {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
	transition: { duration: .2 },
	onClick: t,
	style: {
		position: "fixed",
		inset: 0,
		backgroundColor: "rgba(0,0,0,0.5)",
		backdropFilter: "blur(4px)",
		zIndex: 1e3,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		padding: "16px"
	},
	children: /* @__PURE__ */ (0, d.jsxs)(o.div, {
		initial: {
			opacity: 0,
			scale: .95,
			y: 10
		},
		animate: {
			opacity: 1,
			scale: 1,
			y: 0
		},
		exit: {
			opacity: 0,
			scale: .95,
			y: 10
		},
		transition: {
			type: "spring",
			stiffness: 300,
			damping: 30
		},
		onClick: (e) => e.stopPropagation(),
		style: {
			width: "100%",
			maxWidth: v[s],
			backgroundColor: "var(--color-bg)",
			borderRadius: "16px",
			boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
			overflow: "hidden",
			zIndex: 1001
		},
		children: [r && /* @__PURE__ */ (0, d.jsxs)("div", {
			style: {
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				padding: "20px 24px",
				borderBottom: "1px solid var(--color-border)"
			},
			children: [/* @__PURE__ */ (0, d.jsx)("h2", {
				style: {
					fontSize: "1.25rem",
					fontWeight: 700
				},
				children: r
			}), /* @__PURE__ */ (0, d.jsx)("button", {
				onClick: t,
				style: {
					background: "none",
					border: "none",
					cursor: "pointer",
					fontSize: "1.25rem",
					color: "var(--color-text-muted)",
					padding: "4px"
				},
				children: "✕"
			})]
		}), /* @__PURE__ */ (0, d.jsx)("div", {
			style: { padding: "24px" },
			children: i
		})]
	}, "modal")
}, "backdrop") }) })), b = {
	default: {
		bg: "#e2e8f0",
		color: "#334155"
	},
	success: {
		bg: "#d1fae5",
		color: "#065f46"
	},
	warning: {
		bg: "#fef3c7",
		color: "#92400e"
	},
	error: {
		bg: "#fee2e2",
		color: "#991b1b"
	},
	info: {
		bg: "#dbeafe",
		color: "#1e40af"
	}
}, x = ({ variant: e = "default", children: t, dot: n = !1 }) => {
	let { bg: r, color: i } = b[e];
	return /* @__PURE__ */ (0, d.jsxs)("span", {
		style: {
			display: "inline-flex",
			alignItems: "center",
			gap: "6px",
			padding: "3px 10px",
			borderRadius: "9999px",
			fontSize: "0.75rem",
			fontWeight: 600,
			backgroundColor: r,
			color: i
		},
		children: [n && /* @__PURE__ */ (0, d.jsx)("span", { style: {
			width: 6,
			height: 6,
			borderRadius: "50%",
			backgroundColor: i
		} }), t]
	});
}, S = ({ children: e, hoverable: t = !1, padding: n = "md", style: r }) => /* @__PURE__ */ (0, d.jsx)(o.div, {
	whileHover: t ? {
		y: -4,
		boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)"
	} : {},
	transition: { duration: .2 },
	style: {
		backgroundColor: "var(--color-bg)",
		border: "1px solid var(--color-border)",
		borderRadius: "12px",
		padding: {
			sm: "12px",
			md: "20px",
			lg: "32px"
		}[n],
		boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
		...r
	},
	children: e
});
//#endregion
//#region src/components/Table/Table.tsx
function C({ columns: e, data: t, onRowClick: n, loading: r }) {
	return /* @__PURE__ */ (0, d.jsx)("div", {
		style: {
			overflowX: "auto",
			borderRadius: "12px",
			border: "1px solid var(--color-border)"
		},
		children: /* @__PURE__ */ (0, d.jsxs)("table", {
			style: {
				width: "100%",
				borderCollapse: "collapse",
				fontSize: "0.875rem"
			},
			children: [/* @__PURE__ */ (0, d.jsx)("thead", { children: /* @__PURE__ */ (0, d.jsx)("tr", {
				style: { backgroundColor: "var(--color-bg-subtle)" },
				children: e.map((e) => /* @__PURE__ */ (0, d.jsx)("th", {
					style: {
						padding: "12px 16px",
						textAlign: "left",
						fontWeight: 600,
						color: "var(--color-text-muted)",
						borderBottom: "1px solid var(--color-border)",
						width: e.width,
						whiteSpace: "nowrap"
					},
					children: e.header
				}, String(e.key)))
			}) }), /* @__PURE__ */ (0, d.jsx)("tbody", { children: r ? Array.from({ length: 5 }).map((t, n) => /* @__PURE__ */ (0, d.jsx)("tr", { children: e.map((e) => /* @__PURE__ */ (0, d.jsx)("td", {
				style: { padding: "12px 16px" },
				children: /* @__PURE__ */ (0, d.jsx)("div", {
					className: "animate-pulse",
					style: {
						height: 16,
						backgroundColor: "var(--color-border)",
						borderRadius: 4
					}
				})
			}, String(e.key))) }, n)) : t.map((r, i) => /* @__PURE__ */ (0, d.jsx)("tr", {
				onClick: () => n?.(r),
				style: {
					borderBottom: i < t.length - 1 ? "1px solid var(--color-border)" : "none",
					cursor: n ? "pointer" : "default",
					transition: "background-color 0.1s ease"
				},
				children: e.map((e) => /* @__PURE__ */ (0, d.jsx)("td", {
					style: {
						padding: "12px 16px",
						color: "var(--color-text)"
					},
					children: e.render ? e.render(r) : String(r[e.key] ?? "")
				}, String(e.key)))
			}, i)) })]
		})
	});
}
//#endregion
//#region src/components/Spinner/Spinner.tsx
var w = {
	sm: 16,
	md: 24,
	lg: 40
}, T = ({ size: e = "md", color: t = "var(--color-primary)" }) => /* @__PURE__ */ (0, d.jsx)(o.div, {
	animate: { rotate: 360 },
	transition: {
		duration: .7,
		repeat: Infinity,
		ease: "linear"
	},
	style: {
		width: w[e],
		height: w[e],
		border: `3px solid ${t}33`,
		borderTopColor: t,
		borderRadius: "50%"
	}
}), E = ({ checked: e, onChange: t, label: n, disabled: r }) => /* @__PURE__ */ (0, d.jsxs)("label", {
	style: {
		display: "inline-flex",
		alignItems: "center",
		gap: "10px",
		cursor: r ? "not-allowed" : "pointer",
		opacity: r ? .5 : 1
	},
	children: [/* @__PURE__ */ (0, d.jsx)(o.div, {
		onClick: () => !r && t(!e),
		animate: { backgroundColor: e ? "var(--color-primary)" : "#cbd5e1" },
		style: {
			width: 44,
			height: 24,
			borderRadius: "9999px",
			padding: 2,
			display: "flex",
			alignItems: "center",
			cursor: r ? "not-allowed" : "pointer"
		},
		children: /* @__PURE__ */ (0, d.jsx)(o.div, {
			animate: { x: e ? 20 : 0 },
			transition: {
				type: "spring",
				stiffness: 500,
				damping: 30
			},
			style: {
				width: 20,
				height: 20,
				borderRadius: "50%",
				backgroundColor: "#ffffff",
				boxShadow: "0 1px 3px rgba(0,0,0,0.2)"
			}
		})
	}), n && /* @__PURE__ */ (0, d.jsx)("span", {
		style: {
			fontSize: "0.875rem",
			fontWeight: 500
		},
		children: n
	})]
}), D = ({ title: e, children: t }) => {
	let [n, r] = i(!1);
	return /* @__PURE__ */ (0, d.jsxs)("div", {
		style: {
			borderBottom: "1px solid var(--color-border)",
			width: "100%"
		},
		children: [/* @__PURE__ */ (0, d.jsxs)("button", {
			onClick: () => r(!n),
			style: {
				width: "100%",
				padding: "16px 0",
				display: "flex",
				justifyContent: "space-between",
				background: "none",
				border: "none",
				color: "var(--color-text)",
				cursor: "pointer",
				fontWeight: 600
			},
			children: [e, /* @__PURE__ */ (0, d.jsx)(o.span, {
				animate: { rotate: n ? 180 : 0 },
				children: "▼"
			})]
		}), /* @__PURE__ */ (0, d.jsx)(a, { children: n && /* @__PURE__ */ (0, d.jsx)(o.div, {
			initial: {
				height: 0,
				opacity: 0
			},
			animate: {
				height: "auto",
				opacity: 1
			},
			exit: {
				height: 0,
				opacity: 0
			},
			style: { overflow: "hidden" },
			children: /* @__PURE__ */ (0, d.jsx)("div", {
				style: {
					padding: "0 0 16px 0",
					color: "var(--color-text-muted)"
				},
				children: t
			})
		}) })]
	});
}, O = ({ src: e, alt: t, size: n = "md", fallback: r }) => {
	let i = {
		sm: 32,
		md: 48,
		lg: 64
	}[n];
	return /* @__PURE__ */ (0, d.jsx)("div", {
		style: {
			width: i,
			height: i,
			borderRadius: "50%",
			backgroundColor: "var(--color-primary)",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			overflow: "hidden",
			color: "white",
			fontWeight: "bold",
			fontSize: i / 2.5
		},
		children: e ? /* @__PURE__ */ (0, d.jsx)("img", {
			src: e,
			alt: t,
			style: {
				width: "100%",
				height: "100%",
				objectFit: "cover"
			}
		}) : r
	});
}, k = ({ checked: e, onChange: t, label: n }) => /* @__PURE__ */ (0, d.jsxs)("label", {
	style: {
		display: "flex",
		alignItems: "center",
		gap: "8px",
		cursor: "pointer"
	},
	children: [/* @__PURE__ */ (0, d.jsxs)("div", {
		style: {
			position: "relative",
			width: "20px",
			height: "20px"
		},
		children: [/* @__PURE__ */ (0, d.jsx)("input", {
			type: "checkbox",
			checked: e,
			onChange: (e) => t(e.target.checked),
			style: {
				opacity: 0,
				position: "absolute",
				cursor: "pointer"
			}
		}), /* @__PURE__ */ (0, d.jsx)(o.div, {
			animate: {
				backgroundColor: e ? "var(--color-primary)" : "transparent",
				borderColor: e ? "var(--color-primary)" : "var(--color-border)"
			},
			style: {
				width: "20px",
				height: "20px",
				border: "2px solid",
				borderRadius: "4px",
				display: "flex",
				alignItems: "center",
				justifyContent: "center"
			},
			children: e && /* @__PURE__ */ (0, d.jsx)(o.span, {
				initial: { scale: 0 },
				animate: { scale: 1 },
				style: {
					color: "white",
					fontSize: "12px"
				},
				children: "✓"
			})
		})]
	}), n && /* @__PURE__ */ (0, d.jsx)("span", {
		style: { color: "var(--color-text)" },
		children: n
	})]
}), A = ({ trigger: e, options: t }) => {
	let [s, c] = i(!1), l = r(null);
	return n(() => {
		let e = (e) => {
			l.current && !l.current.contains(e.target) && c(!1);
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, []), /* @__PURE__ */ (0, d.jsxs)("div", {
		ref: l,
		style: {
			position: "relative",
			display: "inline-block"
		},
		children: [/* @__PURE__ */ (0, d.jsx)("div", {
			onClick: () => c(!s),
			style: { cursor: "pointer" },
			children: e
		}), /* @__PURE__ */ (0, d.jsx)(a, { children: s && /* @__PURE__ */ (0, d.jsx)(o.div, {
			initial: {
				opacity: 0,
				y: 10,
				scale: .95
			},
			animate: {
				opacity: 1,
				y: 0,
				scale: 1
			},
			exit: {
				opacity: 0,
				y: 10,
				scale: .95
			},
			style: {
				position: "absolute",
				top: "100%",
				right: 0,
				marginTop: "8px",
				minWidth: "160px",
				backgroundColor: "var(--color-bg)",
				border: "1.5px solid var(--color-border)",
				borderRadius: "8px",
				boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
				zIndex: 1e3,
				padding: "4px"
			},
			children: t.map((e) => /* @__PURE__ */ (0, d.jsx)("div", {
				onClick: () => {
					e.onClick(), c(!1);
				},
				style: {
					padding: "8px 12px",
					cursor: "pointer",
					borderRadius: "6px",
					color: "var(--color-text)",
					fontSize: "0.875rem"
				},
				onMouseEnter: (e) => e.currentTarget.style.backgroundColor = "var(--color-border)",
				onMouseLeave: (e) => e.currentTarget.style.backgroundColor = "transparent",
				children: e.label
			}, e.id))
		}) })]
	});
}, j = ({ tabs: e }) => {
	let [t, n] = i(e[0].id);
	return /* @__PURE__ */ (0, d.jsxs)("div", { children: [/* @__PURE__ */ (0, d.jsx)("div", {
		style: {
			display: "flex",
			borderBottom: "1px solid var(--color-border)",
			marginBottom: "16px"
		},
		children: e.map((e) => /* @__PURE__ */ (0, d.jsxs)("button", {
			onClick: () => n(e.id),
			style: {
				padding: "10px 20px",
				border: "none",
				background: "none",
				cursor: "pointer",
				position: "relative",
				color: t === e.id ? "var(--color-primary)" : "var(--color-text-muted)"
			},
			children: [e.label, t === e.id && /* @__PURE__ */ (0, d.jsx)(o.div, {
				layoutId: "activeTab",
				style: {
					position: "absolute",
					bottom: -1,
					left: 0,
					right: 0,
					height: "2px",
					backgroundColor: "var(--color-primary)"
				}
			})]
		}, e.id))
	}), /* @__PURE__ */ (0, d.jsx)("div", { children: e.find((e) => e.id === t)?.content })] });
}, M = ({ message: e, type: t = "info", isVisible: n, onClose: r }) => /* @__PURE__ */ (0, d.jsx)("div", {
	style: {
		position: "fixed",
		bottom: 24,
		right: 24,
		zIndex: 9999
	},
	children: /* @__PURE__ */ (0, d.jsx)(a, { children: n && /* @__PURE__ */ (0, d.jsxs)(o.div, {
		initial: {
			opacity: 0,
			x: 50
		},
		animate: {
			opacity: 1,
			x: 0
		},
		exit: {
			opacity: 0,
			x: 50
		},
		style: {
			padding: "12px 20px",
			borderRadius: "8px",
			backgroundColor: "var(--color-bg)",
			color: "var(--color-text)",
			borderLeft: `4px solid ${{
				success: "#10b981",
				error: "#ef4444",
				info: "#3b82f6"
			}[t]}`,
			boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
			display: "flex",
			alignItems: "center",
			gap: "12px",
			minWidth: "200px"
		},
		children: [/* @__PURE__ */ (0, d.jsx)("span", { children: e }), /* @__PURE__ */ (0, d.jsx)("button", {
			onClick: r,
			style: {
				marginLeft: "auto",
				background: "none",
				border: "none",
				cursor: "pointer",
				color: "var(--color-text-muted)"
			},
			children: "✕"
		})]
	}) })
}), N = ({ text: e, children: t }) => {
	let [n, r] = i(!1);
	return /* @__PURE__ */ (0, d.jsxs)("div", {
		style: {
			position: "relative",
			display: "inline-block"
		},
		onMouseEnter: () => r(!0),
		onMouseLeave: () => r(!1),
		children: [t, /* @__PURE__ */ (0, d.jsx)(a, { children: n && /* @__PURE__ */ (0, d.jsx)(o.div, {
			initial: {
				opacity: 0,
				y: 10
			},
			animate: {
				opacity: 1,
				y: 0
			},
			exit: {
				opacity: 0,
				y: 10
			},
			style: {
				position: "absolute",
				bottom: "120%",
				left: "50%",
				transform: "translateX(-50%)",
				padding: "6px 10px",
				backgroundColor: "#333",
				color: "#fff",
				borderRadius: "4px",
				fontSize: "0.75rem",
				whiteSpace: "nowrap",
				zIndex: 100
			},
			children: e
		}) })]
	});
}, P = {
	primary: {
		50: "#eff6ff",
		100: "#dbeafe",
		200: "#bfdbfe",
		300: "#93c5fd",
		400: "#60a5fa",
		500: "#3b82f6",
		600: "#2563eb",
		700: "#1d4ed8",
		800: "#1e40af",
		900: "#1e3a8a"
	},
	neutral: {
		0: "#ffffff",
		50: "#f8fafc",
		100: "#f1f5f9",
		200: "#e2e8f0",
		300: "#cbd5e1",
		400: "#94a3b8",
		500: "#64748b",
		600: "#475569",
		700: "#334155",
		800: "#1e293b",
		900: "#0f172a",
		1e3: "#000000"
	},
	success: {
		light: "#d1fae5",
		main: "#10b981",
		dark: "#065f46"
	},
	warning: {
		light: "#fef3c7",
		main: "#f59e0b",
		dark: "#92400e"
	},
	error: {
		light: "#fee2e2",
		main: "#ef4444",
		dark: "#991b1b"
	},
	info: {
		light: "#dbeafe",
		main: "#3b82f6",
		dark: "#1e40af"
	}
}, F = {
	fontFamily: {
		sans: "'Inter', system-ui, -apple-system, sans-serif",
		mono: "'Fira Code', 'Courier New', monospace"
	},
	fontSize: {
		xs: "0.75rem",
		sm: "0.875rem",
		base: "1rem",
		lg: "1.125rem",
		xl: "1.25rem",
		"2xl": "1.5rem",
		"3xl": "1.875rem",
		"4xl": "2.25rem"
	},
	fontWeight: {
		normal: 400,
		medium: 500,
		semibold: 600,
		bold: 700
	},
	lineHeight: {
		tight: 1.25,
		normal: 1.5,
		loose: 1.75
	}
}, I = {
	0: "0px",
	1: "4px",
	2: "8px",
	3: "12px",
	4: "16px",
	5: "20px",
	6: "24px",
	8: "32px",
	10: "40px",
	12: "48px",
	16: "64px",
	20: "80px"
}, L = {
	none: "0px",
	sm: "4px",
	md: "8px",
	lg: "12px",
	xl: "16px",
	full: "9999px"
}, R = {
	sm: "0 1px 2px rgba(0,0,0,0.05)",
	md: "0 4px 6px -1px rgba(0,0,0,0.1)",
	lg: "0 10px 15px -3px rgba(0,0,0,0.1)",
	xl: "0 20px 25px -5px rgba(0,0,0,0.1)"
}, z = e({
	theme: "light",
	toggleTheme: () => {}
}), B = () => t(z);
//#endregion
export { D as Accordion, O as Avatar, x as Badge, h as Button, S as Card, k as Checkbox, A as Dropdown, _ as Input, y as Modal, T as Spinner, E as Switch, C as Table, j as Tabs, z as ThemeContext, M as Toast, N as Tooltip, L as borderRadius, P as colors, R as shadows, I as spacing, F as typography, B as useTheme };
