(function () {
	const U = document.createElement('link').relList;
	if (U && U.supports && U.supports('modulepreload')) return;
	for (const R of document.querySelectorAll('link[rel="modulepreload"]')) y(R);
	new MutationObserver(R => {
		for (const G of R)
			if (G.type === 'childList')
				for (const w of G.addedNodes)
					w.tagName === 'LINK' && w.rel === 'modulepreload' && y(w);
	}).observe(document, { childList: !0, subtree: !0 });
	function p(R) {
		const G = {};
		return (
			R.integrity && (G.integrity = R.integrity),
			R.referrerPolicy && (G.referrerPolicy = R.referrerPolicy),
			R.crossOrigin === 'use-credentials'
				? (G.credentials = 'include')
				: R.crossOrigin === 'anonymous'
				? (G.credentials = 'omit')
				: (G.credentials = 'same-origin'),
			G
		);
	}
	function y(R) {
		if (R.ep) return;
		R.ep = !0;
		const G = p(R);
		fetch(R.href, G);
	}
})();
var Ic = { exports: {} },
	me = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var to;
function jv() {
	if (to) return me;
	to = 1;
	var M = Symbol.for('react.transitional.element'),
		U = Symbol.for('react.fragment');
	function p(y, R, G) {
		var w = null;
		if (
			(G !== void 0 && (w = '' + G),
			R.key !== void 0 && (w = '' + R.key),
			'key' in R)
		) {
			G = {};
			for (var ul in R) ul !== 'key' && (G[ul] = R[ul]);
		} else G = R;
		return (
			(R = G.ref),
			{ $$typeof: M, type: y, key: w, ref: R !== void 0 ? R : null, props: G }
		);
	}
	return (me.Fragment = U), (me.jsx = p), (me.jsxs = p), me;
}
var ao;
function Gv() {
	return ao || ((ao = 1), (Ic.exports = jv())), Ic.exports;
}
var O = Gv(),
	li = { exports: {} },
	Z = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var uo;
function Xv() {
	if (uo) return Z;
	uo = 1;
	var M = Symbol.for('react.transitional.element'),
		U = Symbol.for('react.portal'),
		p = Symbol.for('react.fragment'),
		y = Symbol.for('react.strict_mode'),
		R = Symbol.for('react.profiler'),
		G = Symbol.for('react.consumer'),
		w = Symbol.for('react.context'),
		ul = Symbol.for('react.forward_ref'),
		C = Symbol.for('react.suspense'),
		A = Symbol.for('react.memo'),
		N = Symbol.for('react.lazy'),
		I = Symbol.iterator;
	function $(s) {
		return s === null || typeof s != 'object'
			? null
			: ((s = (I && s[I]) || s['@@iterator']),
			  typeof s == 'function' ? s : null);
	}
	var sl = {
			isMounted: function () {
				return !1;
			},
			enqueueForceUpdate: function () {},
			enqueueReplaceState: function () {},
			enqueueSetState: function () {},
		},
		Ml = Object.assign,
		Ul = {};
	function Sl(s, T, _) {
		(this.props = s),
			(this.context = T),
			(this.refs = Ul),
			(this.updater = _ || sl);
	}
	(Sl.prototype.isReactComponent = {}),
		(Sl.prototype.setState = function (s, T) {
			if (typeof s != 'object' && typeof s != 'function' && s != null)
				throw Error(
					'takes an object of state variables to update or a function which returns an object of state variables.'
				);
			this.updater.enqueueSetState(this, s, T, 'setState');
		}),
		(Sl.prototype.forceUpdate = function (s) {
			this.updater.enqueueForceUpdate(this, s, 'forceUpdate');
		});
	function Jl() {}
	Jl.prototype = Sl.prototype;
	function Pl(s, T, _) {
		(this.props = s),
			(this.context = T),
			(this.refs = Ul),
			(this.updater = _ || sl);
	}
	var yl = (Pl.prototype = new Jl());
	(yl.constructor = Pl), Ml(yl, Sl.prototype), (yl.isPureReactComponent = !0);
	var Ql = Array.isArray,
		F = { H: null, A: null, T: null, S: null, V: null },
		Rl = Object.prototype.hasOwnProperty;
	function ql(s, T, _, D, x, ll) {
		return (
			(_ = ll.ref),
			{ $$typeof: M, type: s, key: T, ref: _ !== void 0 ? _ : null, props: ll }
		);
	}
	function Yl(s, T) {
		return ql(s.type, T, void 0, void 0, void 0, s.props);
	}
	function st(s) {
		return typeof s == 'object' && s !== null && s.$$typeof === M;
	}
	function Lt(s) {
		var T = { '=': '=0', ':': '=2' };
		return (
			'$' +
			s.replace(/[=:]/g, function (_) {
				return T[_];
			})
		);
	}
	var Ol = /\/+/g;
	function rl(s, T) {
		return typeof s == 'object' && s !== null && s.key != null
			? Lt('' + s.key)
			: T.toString(36);
	}
	function K() {}
	function Bt(s) {
		switch (s.status) {
			case 'fulfilled':
				return s.value;
			case 'rejected':
				throw s.reason;
			default:
				switch (
					(typeof s.status == 'string'
						? s.then(K, K)
						: ((s.status = 'pending'),
						  s.then(
								function (T) {
									s.status === 'pending' &&
										((s.status = 'fulfilled'), (s.value = T));
								},
								function (T) {
									s.status === 'pending' &&
										((s.status = 'rejected'), (s.reason = T));
								}
						  )),
					s.status)
				) {
					case 'fulfilled':
						return s.value;
					case 'rejected':
						throw s.reason;
				}
		}
		throw s;
	}
	function Nl(s, T, _, D, x) {
		var ll = typeof s;
		(ll === 'undefined' || ll === 'boolean') && (s = null);
		var Q = !1;
		if (s === null) Q = !0;
		else
			switch (ll) {
				case 'bigint':
				case 'string':
				case 'number':
					Q = !0;
					break;
				case 'object':
					switch (s.$$typeof) {
						case M:
						case U:
							Q = !0;
							break;
						case N:
							return (Q = s._init), Nl(Q(s._payload), T, _, D, x);
					}
			}
		if (Q)
			return (
				(x = x(s)),
				(Q = D === '' ? '.' + rl(s, 0) : D),
				Ql(x)
					? ((_ = ''),
					  Q != null && (_ = Q.replace(Ol, '$&/') + '/'),
					  Nl(x, T, _, '', function (Kt) {
							return Kt;
					  }))
					: x != null &&
					  (st(x) &&
							(x = Yl(
								x,
								_ +
									(x.key == null || (s && s.key === x.key)
										? ''
										: ('' + x.key).replace(Ol, '$&/') + '/') +
									Q
							)),
					  T.push(x)),
				1
			);
		Q = 0;
		var Il = D === '' ? '.' : D + ':';
		if (Ql(s))
			for (var hl = 0; hl < s.length; hl++)
				(D = s[hl]), (ll = Il + rl(D, hl)), (Q += Nl(D, T, _, ll, x));
		else if (((hl = $(s)), typeof hl == 'function'))
			for (s = hl.call(s), hl = 0; !(D = s.next()).done; )
				(D = D.value), (ll = Il + rl(D, hl++)), (Q += Nl(D, T, _, ll, x));
		else if (ll === 'object') {
			if (typeof s.then == 'function') return Nl(Bt(s), T, _, D, x);
			throw (
				((T = String(s)),
				Error(
					'Objects are not valid as a React child (found: ' +
						(T === '[object Object]'
							? 'object with keys {' + Object.keys(s).join(', ') + '}'
							: T) +
						'). If you meant to render a collection of children, use an array instead.'
				))
			);
		}
		return Q;
	}
	function g(s, T, _) {
		if (s == null) return s;
		var D = [],
			x = 0;
		return (
			Nl(s, D, '', '', function (ll) {
				return T.call(_, ll, x++);
			}),
			D
		);
	}
	function z(s) {
		if (s._status === -1) {
			var T = s._result;
			(T = T()),
				T.then(
					function (_) {
						(s._status === 0 || s._status === -1) &&
							((s._status = 1), (s._result = _));
					},
					function (_) {
						(s._status === 0 || s._status === -1) &&
							((s._status = 2), (s._result = _));
					}
				),
				s._status === -1 && ((s._status = 0), (s._result = T));
		}
		if (s._status === 1) return s._result.default;
		throw s._result;
	}
	var j =
		typeof reportError == 'function'
			? reportError
			: function (s) {
					if (
						typeof window == 'object' &&
						typeof window.ErrorEvent == 'function'
					) {
						var T = new window.ErrorEvent('error', {
							bubbles: !0,
							cancelable: !0,
							message:
								typeof s == 'object' &&
								s !== null &&
								typeof s.message == 'string'
									? String(s.message)
									: String(s),
							error: s,
						});
						if (!window.dispatchEvent(T)) return;
					} else if (
						typeof process == 'object' &&
						typeof process.emit == 'function'
					) {
						process.emit('uncaughtException', s);
						return;
					}
					console.error(s);
			  };
	function dl() {}
	return (
		(Z.Children = {
			map: g,
			forEach: function (s, T, _) {
				g(
					s,
					function () {
						T.apply(this, arguments);
					},
					_
				);
			},
			count: function (s) {
				var T = 0;
				return (
					g(s, function () {
						T++;
					}),
					T
				);
			},
			toArray: function (s) {
				return (
					g(s, function (T) {
						return T;
					}) || []
				);
			},
			only: function (s) {
				if (!st(s))
					throw Error(
						'React.Children.only expected to receive a single React element child.'
					);
				return s;
			},
		}),
		(Z.Component = Sl),
		(Z.Fragment = p),
		(Z.Profiler = R),
		(Z.PureComponent = Pl),
		(Z.StrictMode = y),
		(Z.Suspense = C),
		(Z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = F),
		(Z.__COMPILER_RUNTIME = {
			__proto__: null,
			c: function (s) {
				return F.H.useMemoCache(s);
			},
		}),
		(Z.cache = function (s) {
			return function () {
				return s.apply(null, arguments);
			};
		}),
		(Z.cloneElement = function (s, T, _) {
			if (s == null)
				throw Error(
					'The argument must be a React element, but you passed ' + s + '.'
				);
			var D = Ml({}, s.props),
				x = s.key,
				ll = void 0;
			if (T != null)
				for (Q in (T.ref !== void 0 && (ll = void 0),
				T.key !== void 0 && (x = '' + T.key),
				T))
					!Rl.call(T, Q) ||
						Q === 'key' ||
						Q === '__self' ||
						Q === '__source' ||
						(Q === 'ref' && T.ref === void 0) ||
						(D[Q] = T[Q]);
			var Q = arguments.length - 2;
			if (Q === 1) D.children = _;
			else if (1 < Q) {
				for (var Il = Array(Q), hl = 0; hl < Q; hl++)
					Il[hl] = arguments[hl + 2];
				D.children = Il;
			}
			return ql(s.type, x, void 0, void 0, ll, D);
		}),
		(Z.createContext = function (s) {
			return (
				(s = {
					$$typeof: w,
					_currentValue: s,
					_currentValue2: s,
					_threadCount: 0,
					Provider: null,
					Consumer: null,
				}),
				(s.Provider = s),
				(s.Consumer = { $$typeof: G, _context: s }),
				s
			);
		}),
		(Z.createElement = function (s, T, _) {
			var D,
				x = {},
				ll = null;
			if (T != null)
				for (D in (T.key !== void 0 && (ll = '' + T.key), T))
					Rl.call(T, D) &&
						D !== 'key' &&
						D !== '__self' &&
						D !== '__source' &&
						(x[D] = T[D]);
			var Q = arguments.length - 2;
			if (Q === 1) x.children = _;
			else if (1 < Q) {
				for (var Il = Array(Q), hl = 0; hl < Q; hl++)
					Il[hl] = arguments[hl + 2];
				x.children = Il;
			}
			if (s && s.defaultProps)
				for (D in ((Q = s.defaultProps), Q)) x[D] === void 0 && (x[D] = Q[D]);
			return ql(s, ll, void 0, void 0, null, x);
		}),
		(Z.createRef = function () {
			return { current: null };
		}),
		(Z.forwardRef = function (s) {
			return { $$typeof: ul, render: s };
		}),
		(Z.isValidElement = st),
		(Z.lazy = function (s) {
			return { $$typeof: N, _payload: { _status: -1, _result: s }, _init: z };
		}),
		(Z.memo = function (s, T) {
			return { $$typeof: A, type: s, compare: T === void 0 ? null : T };
		}),
		(Z.startTransition = function (s) {
			var T = F.T,
				_ = {};
			F.T = _;
			try {
				var D = s(),
					x = F.S;
				x !== null && x(_, D),
					typeof D == 'object' &&
						D !== null &&
						typeof D.then == 'function' &&
						D.then(dl, j);
			} catch (ll) {
				j(ll);
			} finally {
				F.T = T;
			}
		}),
		(Z.unstable_useCacheRefresh = function () {
			return F.H.useCacheRefresh();
		}),
		(Z.use = function (s) {
			return F.H.use(s);
		}),
		(Z.useActionState = function (s, T, _) {
			return F.H.useActionState(s, T, _);
		}),
		(Z.useCallback = function (s, T) {
			return F.H.useCallback(s, T);
		}),
		(Z.useContext = function (s) {
			return F.H.useContext(s);
		}),
		(Z.useDebugValue = function () {}),
		(Z.useDeferredValue = function (s, T) {
			return F.H.useDeferredValue(s, T);
		}),
		(Z.useEffect = function (s, T, _) {
			var D = F.H;
			if (typeof _ == 'function')
				throw Error(
					'useEffect CRUD overload is not enabled in this build of React.'
				);
			return D.useEffect(s, T);
		}),
		(Z.useId = function () {
			return F.H.useId();
		}),
		(Z.useImperativeHandle = function (s, T, _) {
			return F.H.useImperativeHandle(s, T, _);
		}),
		(Z.useInsertionEffect = function (s, T) {
			return F.H.useInsertionEffect(s, T);
		}),
		(Z.useLayoutEffect = function (s, T) {
			return F.H.useLayoutEffect(s, T);
		}),
		(Z.useMemo = function (s, T) {
			return F.H.useMemo(s, T);
		}),
		(Z.useOptimistic = function (s, T) {
			return F.H.useOptimistic(s, T);
		}),
		(Z.useReducer = function (s, T, _) {
			return F.H.useReducer(s, T, _);
		}),
		(Z.useRef = function (s) {
			return F.H.useRef(s);
		}),
		(Z.useState = function (s) {
			return F.H.useState(s);
		}),
		(Z.useSyncExternalStore = function (s, T, _) {
			return F.H.useSyncExternalStore(s, T, _);
		}),
		(Z.useTransition = function () {
			return F.H.useTransition();
		}),
		(Z.version = '19.1.0'),
		Z
	);
}
var eo;
function fi() {
	return eo || ((eo = 1), (li.exports = Xv())), li.exports;
}
var L = fi(),
	ti = { exports: {} },
	Se = {},
	ai = { exports: {} },
	ui = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var no;
function Qv() {
	return (
		no ||
			((no = 1),
			(function (M) {
				function U(g, z) {
					var j = g.length;
					g.push(z);
					l: for (; 0 < j; ) {
						var dl = (j - 1) >>> 1,
							s = g[dl];
						if (0 < R(s, z)) (g[dl] = z), (g[j] = s), (j = dl);
						else break l;
					}
				}
				function p(g) {
					return g.length === 0 ? null : g[0];
				}
				function y(g) {
					if (g.length === 0) return null;
					var z = g[0],
						j = g.pop();
					if (j !== z) {
						g[0] = j;
						l: for (var dl = 0, s = g.length, T = s >>> 1; dl < T; ) {
							var _ = 2 * (dl + 1) - 1,
								D = g[_],
								x = _ + 1,
								ll = g[x];
							if (0 > R(D, j))
								x < s && 0 > R(ll, D)
									? ((g[dl] = ll), (g[x] = j), (dl = x))
									: ((g[dl] = D), (g[_] = j), (dl = _));
							else if (x < s && 0 > R(ll, j))
								(g[dl] = ll), (g[x] = j), (dl = x);
							else break l;
						}
					}
					return z;
				}
				function R(g, z) {
					var j = g.sortIndex - z.sortIndex;
					return j !== 0 ? j : g.id - z.id;
				}
				if (
					((M.unstable_now = void 0),
					typeof performance == 'object' &&
						typeof performance.now == 'function')
				) {
					var G = performance;
					M.unstable_now = function () {
						return G.now();
					};
				} else {
					var w = Date,
						ul = w.now();
					M.unstable_now = function () {
						return w.now() - ul;
					};
				}
				var C = [],
					A = [],
					N = 1,
					I = null,
					$ = 3,
					sl = !1,
					Ml = !1,
					Ul = !1,
					Sl = !1,
					Jl = typeof setTimeout == 'function' ? setTimeout : null,
					Pl = typeof clearTimeout == 'function' ? clearTimeout : null,
					yl = typeof setImmediate < 'u' ? setImmediate : null;
				function Ql(g) {
					for (var z = p(A); z !== null; ) {
						if (z.callback === null) y(A);
						else if (z.startTime <= g)
							y(A), (z.sortIndex = z.expirationTime), U(C, z);
						else break;
						z = p(A);
					}
				}
				function F(g) {
					if (((Ul = !1), Ql(g), !Ml))
						if (p(C) !== null) (Ml = !0), Rl || ((Rl = !0), rl());
						else {
							var z = p(A);
							z !== null && Nl(F, z.startTime - g);
						}
				}
				var Rl = !1,
					ql = -1,
					Yl = 5,
					st = -1;
				function Lt() {
					return Sl ? !0 : !(M.unstable_now() - st < Yl);
				}
				function Ol() {
					if (((Sl = !1), Rl)) {
						var g = M.unstable_now();
						st = g;
						var z = !0;
						try {
							l: {
								(Ml = !1), Ul && ((Ul = !1), Pl(ql), (ql = -1)), (sl = !0);
								var j = $;
								try {
									t: {
										for (
											Ql(g), I = p(C);
											I !== null && !(I.expirationTime > g && Lt());

										) {
											var dl = I.callback;
											if (typeof dl == 'function') {
												(I.callback = null), ($ = I.priorityLevel);
												var s = dl(I.expirationTime <= g);
												if (((g = M.unstable_now()), typeof s == 'function')) {
													(I.callback = s), Ql(g), (z = !0);
													break t;
												}
												I === p(C) && y(C), Ql(g);
											} else y(C);
											I = p(C);
										}
										if (I !== null) z = !0;
										else {
											var T = p(A);
											T !== null && Nl(F, T.startTime - g), (z = !1);
										}
									}
									break l;
								} finally {
									(I = null), ($ = j), (sl = !1);
								}
								z = void 0;
							}
						} finally {
							z ? rl() : (Rl = !1);
						}
					}
				}
				var rl;
				if (typeof yl == 'function')
					rl = function () {
						yl(Ol);
					};
				else if (typeof MessageChannel < 'u') {
					var K = new MessageChannel(),
						Bt = K.port2;
					(K.port1.onmessage = Ol),
						(rl = function () {
							Bt.postMessage(null);
						});
				} else
					rl = function () {
						Jl(Ol, 0);
					};
				function Nl(g, z) {
					ql = Jl(function () {
						g(M.unstable_now());
					}, z);
				}
				(M.unstable_IdlePriority = 5),
					(M.unstable_ImmediatePriority = 1),
					(M.unstable_LowPriority = 4),
					(M.unstable_NormalPriority = 3),
					(M.unstable_Profiling = null),
					(M.unstable_UserBlockingPriority = 2),
					(M.unstable_cancelCallback = function (g) {
						g.callback = null;
					}),
					(M.unstable_forceFrameRate = function (g) {
						0 > g || 125 < g
							? console.error(
									'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
							  )
							: (Yl = 0 < g ? Math.floor(1e3 / g) : 5);
					}),
					(M.unstable_getCurrentPriorityLevel = function () {
						return $;
					}),
					(M.unstable_next = function (g) {
						switch ($) {
							case 1:
							case 2:
							case 3:
								var z = 3;
								break;
							default:
								z = $;
						}
						var j = $;
						$ = z;
						try {
							return g();
						} finally {
							$ = j;
						}
					}),
					(M.unstable_requestPaint = function () {
						Sl = !0;
					}),
					(M.unstable_runWithPriority = function (g, z) {
						switch (g) {
							case 1:
							case 2:
							case 3:
							case 4:
							case 5:
								break;
							default:
								g = 3;
						}
						var j = $;
						$ = g;
						try {
							return z();
						} finally {
							$ = j;
						}
					}),
					(M.unstable_scheduleCallback = function (g, z, j) {
						var dl = M.unstable_now();
						switch (
							(typeof j == 'object' && j !== null
								? ((j = j.delay),
								  (j = typeof j == 'number' && 0 < j ? dl + j : dl))
								: (j = dl),
							g)
						) {
							case 1:
								var s = -1;
								break;
							case 2:
								s = 250;
								break;
							case 5:
								s = 1073741823;
								break;
							case 4:
								s = 1e4;
								break;
							default:
								s = 5e3;
						}
						return (
							(s = j + s),
							(g = {
								id: N++,
								callback: z,
								priorityLevel: g,
								startTime: j,
								expirationTime: s,
								sortIndex: -1,
							}),
							j > dl
								? ((g.sortIndex = j),
								  U(A, g),
								  p(C) === null &&
										g === p(A) &&
										(Ul ? (Pl(ql), (ql = -1)) : (Ul = !0), Nl(F, j - dl)))
								: ((g.sortIndex = s),
								  U(C, g),
								  Ml || sl || ((Ml = !0), Rl || ((Rl = !0), rl()))),
							g
						);
					}),
					(M.unstable_shouldYield = Lt),
					(M.unstable_wrapCallback = function (g) {
						var z = $;
						return function () {
							var j = $;
							$ = z;
							try {
								return g.apply(this, arguments);
							} finally {
								$ = j;
							}
						};
					});
			})(ui)),
		ui
	);
}
var fo;
function Zv() {
	return fo || ((fo = 1), (ai.exports = Qv())), ai.exports;
}
var ei = { exports: {} },
	Ll = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var co;
function Vv() {
	if (co) return Ll;
	co = 1;
	var M = fi();
	function U(C) {
		var A = 'https://react.dev/errors/' + C;
		if (1 < arguments.length) {
			A += '?args[]=' + encodeURIComponent(arguments[1]);
			for (var N = 2; N < arguments.length; N++)
				A += '&args[]=' + encodeURIComponent(arguments[N]);
		}
		return (
			'Minified React error #' +
			C +
			'; visit ' +
			A +
			' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
		);
	}
	function p() {}
	var y = {
			d: {
				f: p,
				r: function () {
					throw Error(U(522));
				},
				D: p,
				C: p,
				L: p,
				m: p,
				X: p,
				S: p,
				M: p,
			},
			p: 0,
			findDOMNode: null,
		},
		R = Symbol.for('react.portal');
	function G(C, A, N) {
		var I =
			3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return {
			$$typeof: R,
			key: I == null ? null : '' + I,
			children: C,
			containerInfo: A,
			implementation: N,
		};
	}
	var w = M.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function ul(C, A) {
		if (C === 'font') return '';
		if (typeof A == 'string') return A === 'use-credentials' ? A : '';
	}
	return (
		(Ll.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = y),
		(Ll.createPortal = function (C, A) {
			var N =
				2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
			if (!A || (A.nodeType !== 1 && A.nodeType !== 9 && A.nodeType !== 11))
				throw Error(U(299));
			return G(C, A, null, N);
		}),
		(Ll.flushSync = function (C) {
			var A = w.T,
				N = y.p;
			try {
				if (((w.T = null), (y.p = 2), C)) return C();
			} finally {
				(w.T = A), (y.p = N), y.d.f();
			}
		}),
		(Ll.preconnect = function (C, A) {
			typeof C == 'string' &&
				(A
					? ((A = A.crossOrigin),
					  (A =
							typeof A == 'string'
								? A === 'use-credentials'
									? A
									: ''
								: void 0))
					: (A = null),
				y.d.C(C, A));
		}),
		(Ll.prefetchDNS = function (C) {
			typeof C == 'string' && y.d.D(C);
		}),
		(Ll.preinit = function (C, A) {
			if (typeof C == 'string' && A && typeof A.as == 'string') {
				var N = A.as,
					I = ul(N, A.crossOrigin),
					$ = typeof A.integrity == 'string' ? A.integrity : void 0,
					sl = typeof A.fetchPriority == 'string' ? A.fetchPriority : void 0;
				N === 'style'
					? y.d.S(C, typeof A.precedence == 'string' ? A.precedence : void 0, {
							crossOrigin: I,
							integrity: $,
							fetchPriority: sl,
					  })
					: N === 'script' &&
					  y.d.X(C, {
							crossOrigin: I,
							integrity: $,
							fetchPriority: sl,
							nonce: typeof A.nonce == 'string' ? A.nonce : void 0,
					  });
			}
		}),
		(Ll.preinitModule = function (C, A) {
			if (typeof C == 'string')
				if (typeof A == 'object' && A !== null) {
					if (A.as == null || A.as === 'script') {
						var N = ul(A.as, A.crossOrigin);
						y.d.M(C, {
							crossOrigin: N,
							integrity: typeof A.integrity == 'string' ? A.integrity : void 0,
							nonce: typeof A.nonce == 'string' ? A.nonce : void 0,
						});
					}
				} else A == null && y.d.M(C);
		}),
		(Ll.preload = function (C, A) {
			if (
				typeof C == 'string' &&
				typeof A == 'object' &&
				A !== null &&
				typeof A.as == 'string'
			) {
				var N = A.as,
					I = ul(N, A.crossOrigin);
				y.d.L(C, N, {
					crossOrigin: I,
					integrity: typeof A.integrity == 'string' ? A.integrity : void 0,
					nonce: typeof A.nonce == 'string' ? A.nonce : void 0,
					type: typeof A.type == 'string' ? A.type : void 0,
					fetchPriority:
						typeof A.fetchPriority == 'string' ? A.fetchPriority : void 0,
					referrerPolicy:
						typeof A.referrerPolicy == 'string' ? A.referrerPolicy : void 0,
					imageSrcSet:
						typeof A.imageSrcSet == 'string' ? A.imageSrcSet : void 0,
					imageSizes: typeof A.imageSizes == 'string' ? A.imageSizes : void 0,
					media: typeof A.media == 'string' ? A.media : void 0,
				});
			}
		}),
		(Ll.preloadModule = function (C, A) {
			if (typeof C == 'string')
				if (A) {
					var N = ul(A.as, A.crossOrigin);
					y.d.m(C, {
						as: typeof A.as == 'string' && A.as !== 'script' ? A.as : void 0,
						crossOrigin: N,
						integrity: typeof A.integrity == 'string' ? A.integrity : void 0,
					});
				} else y.d.m(C);
		}),
		(Ll.requestFormReset = function (C) {
			y.d.r(C);
		}),
		(Ll.unstable_batchedUpdates = function (C, A) {
			return C(A);
		}),
		(Ll.useFormState = function (C, A, N) {
			return w.H.useFormState(C, A, N);
		}),
		(Ll.useFormStatus = function () {
			return w.H.useHostTransitionStatus();
		}),
		(Ll.version = '19.1.0'),
		Ll
	);
}
var io;
function yo() {
	if (io) return ei.exports;
	io = 1;
	function M() {
		if (
			!(
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
			)
		)
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M);
			} catch (U) {
				console.error(U);
			}
	}
	return M(), (ei.exports = Vv()), ei.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var so;
function Lv() {
	if (so) return Se;
	so = 1;
	var M = Zv(),
		U = fi(),
		p = yo();
	function y(l) {
		var t = 'https://react.dev/errors/' + l;
		if (1 < arguments.length) {
			t += '?args[]=' + encodeURIComponent(arguments[1]);
			for (var a = 2; a < arguments.length; a++)
				t += '&args[]=' + encodeURIComponent(arguments[a]);
		}
		return (
			'Minified React error #' +
			l +
			'; visit ' +
			t +
			' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
		);
	}
	function R(l) {
		return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
	}
	function G(l) {
		var t = l,
			a = l;
		if (l.alternate) for (; t.return; ) t = t.return;
		else {
			l = t;
			do (t = l), (t.flags & 4098) !== 0 && (a = t.return), (l = t.return);
			while (l);
		}
		return t.tag === 3 ? a : null;
	}
	function w(l) {
		if (l.tag === 13) {
			var t = l.memoizedState;
			if (
				(t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
				t !== null)
			)
				return t.dehydrated;
		}
		return null;
	}
	function ul(l) {
		if (G(l) !== l) throw Error(y(188));
	}
	function C(l) {
		var t = l.alternate;
		if (!t) {
			if (((t = G(l)), t === null)) throw Error(y(188));
			return t !== l ? null : l;
		}
		for (var a = l, u = t; ; ) {
			var e = a.return;
			if (e === null) break;
			var n = e.alternate;
			if (n === null) {
				if (((u = e.return), u !== null)) {
					a = u;
					continue;
				}
				break;
			}
			if (e.child === n.child) {
				for (n = e.child; n; ) {
					if (n === a) return ul(e), l;
					if (n === u) return ul(e), t;
					n = n.sibling;
				}
				throw Error(y(188));
			}
			if (a.return !== u.return) (a = e), (u = n);
			else {
				for (var f = !1, c = e.child; c; ) {
					if (c === a) {
						(f = !0), (a = e), (u = n);
						break;
					}
					if (c === u) {
						(f = !0), (u = e), (a = n);
						break;
					}
					c = c.sibling;
				}
				if (!f) {
					for (c = n.child; c; ) {
						if (c === a) {
							(f = !0), (a = n), (u = e);
							break;
						}
						if (c === u) {
							(f = !0), (u = n), (a = e);
							break;
						}
						c = c.sibling;
					}
					if (!f) throw Error(y(189));
				}
			}
			if (a.alternate !== u) throw Error(y(190));
		}
		if (a.tag !== 3) throw Error(y(188));
		return a.stateNode.current === a ? l : t;
	}
	function A(l) {
		var t = l.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return l;
		for (l = l.child; l !== null; ) {
			if (((t = A(l)), t !== null)) return t;
			l = l.sibling;
		}
		return null;
	}
	var N = Object.assign,
		I = Symbol.for('react.element'),
		$ = Symbol.for('react.transitional.element'),
		sl = Symbol.for('react.portal'),
		Ml = Symbol.for('react.fragment'),
		Ul = Symbol.for('react.strict_mode'),
		Sl = Symbol.for('react.profiler'),
		Jl = Symbol.for('react.provider'),
		Pl = Symbol.for('react.consumer'),
		yl = Symbol.for('react.context'),
		Ql = Symbol.for('react.forward_ref'),
		F = Symbol.for('react.suspense'),
		Rl = Symbol.for('react.suspense_list'),
		ql = Symbol.for('react.memo'),
		Yl = Symbol.for('react.lazy'),
		st = Symbol.for('react.activity'),
		Lt = Symbol.for('react.memo_cache_sentinel'),
		Ol = Symbol.iterator;
	function rl(l) {
		return l === null || typeof l != 'object'
			? null
			: ((l = (Ol && l[Ol]) || l['@@iterator']),
			  typeof l == 'function' ? l : null);
	}
	var K = Symbol.for('react.client.reference');
	function Bt(l) {
		if (l == null) return null;
		if (typeof l == 'function')
			return l.$$typeof === K ? null : l.displayName || l.name || null;
		if (typeof l == 'string') return l;
		switch (l) {
			case Ml:
				return 'Fragment';
			case Sl:
				return 'Profiler';
			case Ul:
				return 'StrictMode';
			case F:
				return 'Suspense';
			case Rl:
				return 'SuspenseList';
			case st:
				return 'Activity';
		}
		if (typeof l == 'object')
			switch (l.$$typeof) {
				case sl:
					return 'Portal';
				case yl:
					return (l.displayName || 'Context') + '.Provider';
				case Pl:
					return (l._context.displayName || 'Context') + '.Consumer';
				case Ql:
					var t = l.render;
					return (
						(l = l.displayName),
						l ||
							((l = t.displayName || t.name || ''),
							(l = l !== '' ? 'ForwardRef(' + l + ')' : 'ForwardRef')),
						l
					);
				case ql:
					return (
						(t = l.displayName || null), t !== null ? t : Bt(l.type) || 'Memo'
					);
				case Yl:
					(t = l._payload), (l = l._init);
					try {
						return Bt(l(t));
					} catch {}
			}
		return null;
	}
	var Nl = Array.isArray,
		g = U.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
		z = p.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
		j = { pending: !1, data: null, method: null, action: null },
		dl = [],
		s = -1;
	function T(l) {
		return { current: l };
	}
	function _(l) {
		0 > s || ((l.current = dl[s]), (dl[s] = null), s--);
	}
	function D(l, t) {
		s++, (dl[s] = l.current), (l.current = t);
	}
	var x = T(null),
		ll = T(null),
		Q = T(null),
		Il = T(null);
	function hl(l, t) {
		switch ((D(Q, t), D(ll, l), D(x, null), t.nodeType)) {
			case 9:
			case 11:
				l = (l = t.documentElement) && (l = l.namespaceURI) ? Ud(l) : 0;
				break;
			default:
				if (((l = t.tagName), (t = t.namespaceURI)))
					(t = Ud(t)), (l = Rd(t, l));
				else
					switch (l) {
						case 'svg':
							l = 1;
							break;
						case 'math':
							l = 2;
							break;
						default:
							l = 0;
					}
		}
		_(x), D(x, l);
	}
	function Kt() {
		_(x), _(ll), _(Q);
	}
	function Yn(l) {
		l.memoizedState !== null && D(Il, l);
		var t = x.current,
			a = Rd(t, l.type);
		t !== a && (D(ll, l), D(x, a));
	}
	function be(l) {
		ll.current === l && (_(x), _(ll)),
			Il.current === l && (_(Il), (oe._currentValue = j));
	}
	var jn = Object.prototype.hasOwnProperty,
		Gn = M.unstable_scheduleCallback,
		Xn = M.unstable_cancelCallback,
		mo = M.unstable_shouldYield,
		So = M.unstable_requestPaint,
		Tt = M.unstable_now,
		go = M.unstable_getCurrentPriorityLevel,
		si = M.unstable_ImmediatePriority,
		di = M.unstable_UserBlockingPriority,
		Ee = M.unstable_NormalPriority,
		bo = M.unstable_LowPriority,
		oi = M.unstable_IdlePriority,
		Eo = M.log,
		Ao = M.unstable_setDisableYieldValue,
		bu = null,
		lt = null;
	function Jt(l) {
		if (
			(typeof Eo == 'function' && Ao(l),
			lt && typeof lt.setStrictMode == 'function')
		)
			try {
				lt.setStrictMode(bu, l);
			} catch {}
	}
	var tt = Math.clz32 ? Math.clz32 : Oo,
		To = Math.log,
		Mo = Math.LN2;
	function Oo(l) {
		return (l >>>= 0), l === 0 ? 32 : (31 - ((To(l) / Mo) | 0)) | 0;
	}
	var Ae = 256,
		Te = 4194304;
	function ma(l) {
		var t = l & 42;
		if (t !== 0) return t;
		switch (l & -l) {
			case 1:
				return 1;
			case 2:
				return 2;
			case 4:
				return 4;
			case 8:
				return 8;
			case 16:
				return 16;
			case 32:
				return 32;
			case 64:
				return 64;
			case 128:
				return 128;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
				return l & 4194048;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				return l & 62914560;
			case 67108864:
				return 67108864;
			case 134217728:
				return 134217728;
			case 268435456:
				return 268435456;
			case 536870912:
				return 536870912;
			case 1073741824:
				return 0;
			default:
				return l;
		}
	}
	function Me(l, t, a) {
		var u = l.pendingLanes;
		if (u === 0) return 0;
		var e = 0,
			n = l.suspendedLanes,
			f = l.pingedLanes;
		l = l.warmLanes;
		var c = u & 134217727;
		return (
			c !== 0
				? ((u = c & ~n),
				  u !== 0
						? (e = ma(u))
						: ((f &= c),
						  f !== 0
								? (e = ma(f))
								: a || ((a = c & ~l), a !== 0 && (e = ma(a)))))
				: ((c = u & ~n),
				  c !== 0
						? (e = ma(c))
						: f !== 0
						? (e = ma(f))
						: a || ((a = u & ~l), a !== 0 && (e = ma(a)))),
			e === 0
				? 0
				: t !== 0 &&
				  t !== e &&
				  (t & n) === 0 &&
				  ((n = e & -e),
				  (a = t & -t),
				  n >= a || (n === 32 && (a & 4194048) !== 0))
				? t
				: e
		);
	}
	function Eu(l, t) {
		return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
	}
	function Do(l, t) {
		switch (l) {
			case 1:
			case 2:
			case 4:
			case 8:
			case 64:
				return t + 250;
			case 16:
			case 32:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
				return t + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				return -1;
			case 67108864:
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824:
				return -1;
			default:
				return -1;
		}
	}
	function ri() {
		var l = Ae;
		return (Ae <<= 1), (Ae & 4194048) === 0 && (Ae = 256), l;
	}
	function vi() {
		var l = Te;
		return (Te <<= 1), (Te & 62914560) === 0 && (Te = 4194304), l;
	}
	function Qn(l) {
		for (var t = [], a = 0; 31 > a; a++) t.push(l);
		return t;
	}
	function Au(l, t) {
		(l.pendingLanes |= t),
			t !== 268435456 &&
				((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0));
	}
	function zo(l, t, a, u, e, n) {
		var f = l.pendingLanes;
		(l.pendingLanes = a),
			(l.suspendedLanes = 0),
			(l.pingedLanes = 0),
			(l.warmLanes = 0),
			(l.expiredLanes &= a),
			(l.entangledLanes &= a),
			(l.errorRecoveryDisabledLanes &= a),
			(l.shellSuspendCounter = 0);
		var c = l.entanglements,
			i = l.expirationTimes,
			v = l.hiddenUpdates;
		for (a = f & ~a; 0 < a; ) {
			var S = 31 - tt(a),
				E = 1 << S;
			(c[S] = 0), (i[S] = -1);
			var h = v[S];
			if (h !== null)
				for (v[S] = null, S = 0; S < h.length; S++) {
					var m = h[S];
					m !== null && (m.lane &= -536870913);
				}
			a &= ~E;
		}
		u !== 0 && yi(l, u, 0),
			n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(f & ~t));
	}
	function yi(l, t, a) {
		(l.pendingLanes |= t), (l.suspendedLanes &= ~t);
		var u = 31 - tt(t);
		(l.entangledLanes |= t),
			(l.entanglements[u] = l.entanglements[u] | 1073741824 | (a & 4194090));
	}
	function hi(l, t) {
		var a = (l.entangledLanes |= t);
		for (l = l.entanglements; a; ) {
			var u = 31 - tt(a),
				e = 1 << u;
			(e & t) | (l[u] & t) && (l[u] |= t), (a &= ~e);
		}
	}
	function Zn(l) {
		switch (l) {
			case 2:
				l = 1;
				break;
			case 8:
				l = 4;
				break;
			case 32:
				l = 16;
				break;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				l = 128;
				break;
			case 268435456:
				l = 134217728;
				break;
			default:
				l = 0;
		}
		return l;
	}
	function Vn(l) {
		return (
			(l &= -l),
			2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
		);
	}
	function mi() {
		var l = z.p;
		return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : kd(l.type));
	}
	function _o(l, t) {
		var a = z.p;
		try {
			return (z.p = l), t();
		} finally {
			z.p = a;
		}
	}
	var wt = Math.random().toString(36).slice(2),
		Zl = '__reactFiber$' + wt,
		wl = '__reactProps$' + wt,
		pa = '__reactContainer$' + wt,
		Ln = '__reactEvents$' + wt,
		Bo = '__reactListeners$' + wt,
		Uo = '__reactHandles$' + wt,
		Si = '__reactResources$' + wt,
		Tu = '__reactMarker$' + wt;
	function Kn(l) {
		delete l[Zl], delete l[wl], delete l[Ln], delete l[Bo], delete l[Uo];
	}
	function xa(l) {
		var t = l[Zl];
		if (t) return t;
		for (var a = l.parentNode; a; ) {
			if ((t = a[pa] || a[Zl])) {
				if (
					((a = t.alternate),
					t.child !== null || (a !== null && a.child !== null))
				)
					for (l = pd(l); l !== null; ) {
						if ((a = l[Zl])) return a;
						l = pd(l);
					}
				return t;
			}
			(l = a), (a = l.parentNode);
		}
		return null;
	}
	function qa(l) {
		if ((l = l[Zl] || l[pa])) {
			var t = l.tag;
			if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
				return l;
		}
		return null;
	}
	function Mu(l) {
		var t = l.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
		throw Error(y(33));
	}
	function Ya(l) {
		var t = l[Si];
		return (
			t ||
				(t = l[Si] =
					{ hoistableStyles: new Map(), hoistableScripts: new Map() }),
			t
		);
	}
	function Cl(l) {
		l[Tu] = !0;
	}
	var gi = new Set(),
		bi = {};
	function Sa(l, t) {
		ja(l, t), ja(l + 'Capture', t);
	}
	function ja(l, t) {
		for (bi[l] = t, l = 0; l < t.length; l++) gi.add(t[l]);
	}
	var Ro = RegExp(
			'^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
		),
		Ei = {},
		Ai = {};
	function No(l) {
		return jn.call(Ai, l)
			? !0
			: jn.call(Ei, l)
			? !1
			: Ro.test(l)
			? (Ai[l] = !0)
			: ((Ei[l] = !0), !1);
	}
	function Oe(l, t, a) {
		if (No(t))
			if (a === null) l.removeAttribute(t);
			else {
				switch (typeof a) {
					case 'undefined':
					case 'function':
					case 'symbol':
						l.removeAttribute(t);
						return;
					case 'boolean':
						var u = t.toLowerCase().slice(0, 5);
						if (u !== 'data-' && u !== 'aria-') {
							l.removeAttribute(t);
							return;
						}
				}
				l.setAttribute(t, '' + a);
			}
	}
	function De(l, t, a) {
		if (a === null) l.removeAttribute(t);
		else {
			switch (typeof a) {
				case 'undefined':
				case 'function':
				case 'symbol':
				case 'boolean':
					l.removeAttribute(t);
					return;
			}
			l.setAttribute(t, '' + a);
		}
	}
	function Ut(l, t, a, u) {
		if (u === null) l.removeAttribute(a);
		else {
			switch (typeof u) {
				case 'undefined':
				case 'function':
				case 'symbol':
				case 'boolean':
					l.removeAttribute(a);
					return;
			}
			l.setAttributeNS(t, a, '' + u);
		}
	}
	var Jn, Ti;
	function Ga(l) {
		if (Jn === void 0)
			try {
				throw Error();
			} catch (a) {
				var t = a.stack.trim().match(/\n( *(at )?)/);
				(Jn = (t && t[1]) || ''),
					(Ti =
						-1 <
						a.stack.indexOf(`
    at`)
							? ' (<anonymous>)'
							: -1 < a.stack.indexOf('@')
							? '@unknown:0:0'
							: '');
			}
		return (
			`
` +
			Jn +
			l +
			Ti
		);
	}
	var wn = !1;
	function Wn(l, t) {
		if (!l || wn) return '';
		wn = !0;
		var a = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var u = {
				DetermineComponentFrameRoot: function () {
					try {
						if (t) {
							var E = function () {
								throw Error();
							};
							if (
								(Object.defineProperty(E.prototype, 'props', {
									set: function () {
										throw Error();
									},
								}),
								typeof Reflect == 'object' && Reflect.construct)
							) {
								try {
									Reflect.construct(E, []);
								} catch (m) {
									var h = m;
								}
								Reflect.construct(l, [], E);
							} else {
								try {
									E.call();
								} catch (m) {
									h = m;
								}
								l.call(E.prototype);
							}
						} else {
							try {
								throw Error();
							} catch (m) {
								h = m;
							}
							(E = l()) &&
								typeof E.catch == 'function' &&
								E.catch(function () {});
						}
					} catch (m) {
						if (m && h && typeof m.stack == 'string') return [m.stack, h.stack];
					}
					return [null, null];
				},
			};
			u.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
			var e = Object.getOwnPropertyDescriptor(
				u.DetermineComponentFrameRoot,
				'name'
			);
			e &&
				e.configurable &&
				Object.defineProperty(u.DetermineComponentFrameRoot, 'name', {
					value: 'DetermineComponentFrameRoot',
				});
			var n = u.DetermineComponentFrameRoot(),
				f = n[0],
				c = n[1];
			if (f && c) {
				var i = f.split(`
`),
					v = c.split(`
`);
				for (
					e = u = 0;
					u < i.length && !i[u].includes('DetermineComponentFrameRoot');

				)
					u++;
				for (; e < v.length && !v[e].includes('DetermineComponentFrameRoot'); )
					e++;
				if (u === i.length || e === v.length)
					for (
						u = i.length - 1, e = v.length - 1;
						1 <= u && 0 <= e && i[u] !== v[e];

					)
						e--;
				for (; 1 <= u && 0 <= e; u--, e--)
					if (i[u] !== v[e]) {
						if (u !== 1 || e !== 1)
							do
								if ((u--, e--, 0 > e || i[u] !== v[e])) {
									var S =
										`
` + i[u].replace(' at new ', ' at ');
									return (
										l.displayName &&
											S.includes('<anonymous>') &&
											(S = S.replace('<anonymous>', l.displayName)),
										S
									);
								}
							while (1 <= u && 0 <= e);
						break;
					}
			}
		} finally {
			(wn = !1), (Error.prepareStackTrace = a);
		}
		return (a = l ? l.displayName || l.name : '') ? Ga(a) : '';
	}
	function Co(l) {
		switch (l.tag) {
			case 26:
			case 27:
			case 5:
				return Ga(l.type);
			case 16:
				return Ga('Lazy');
			case 13:
				return Ga('Suspense');
			case 19:
				return Ga('SuspenseList');
			case 0:
			case 15:
				return Wn(l.type, !1);
			case 11:
				return Wn(l.type.render, !1);
			case 1:
				return Wn(l.type, !0);
			case 31:
				return Ga('Activity');
			default:
				return '';
		}
	}
	function Mi(l) {
		try {
			var t = '';
			do (t += Co(l)), (l = l.return);
			while (l);
			return t;
		} catch (a) {
			return (
				`
Error generating stack: ` +
				a.message +
				`
` +
				a.stack
			);
		}
	}
	function dt(l) {
		switch (typeof l) {
			case 'bigint':
			case 'boolean':
			case 'number':
			case 'string':
			case 'undefined':
				return l;
			case 'object':
				return l;
			default:
				return '';
		}
	}
	function Oi(l) {
		var t = l.type;
		return (
			(l = l.nodeName) &&
			l.toLowerCase() === 'input' &&
			(t === 'checkbox' || t === 'radio')
		);
	}
	function Ho(l) {
		var t = Oi(l) ? 'checked' : 'value',
			a = Object.getOwnPropertyDescriptor(l.constructor.prototype, t),
			u = '' + l[t];
		if (
			!l.hasOwnProperty(t) &&
			typeof a < 'u' &&
			typeof a.get == 'function' &&
			typeof a.set == 'function'
		) {
			var e = a.get,
				n = a.set;
			return (
				Object.defineProperty(l, t, {
					configurable: !0,
					get: function () {
						return e.call(this);
					},
					set: function (f) {
						(u = '' + f), n.call(this, f);
					},
				}),
				Object.defineProperty(l, t, { enumerable: a.enumerable }),
				{
					getValue: function () {
						return u;
					},
					setValue: function (f) {
						u = '' + f;
					},
					stopTracking: function () {
						(l._valueTracker = null), delete l[t];
					},
				}
			);
		}
	}
	function ze(l) {
		l._valueTracker || (l._valueTracker = Ho(l));
	}
	function Di(l) {
		if (!l) return !1;
		var t = l._valueTracker;
		if (!t) return !0;
		var a = t.getValue(),
			u = '';
		return (
			l && (u = Oi(l) ? (l.checked ? 'true' : 'false') : l.value),
			(l = u),
			l !== a ? (t.setValue(l), !0) : !1
		);
	}
	function _e(l) {
		if (
			((l = l || (typeof document < 'u' ? document : void 0)), typeof l > 'u')
		)
			return null;
		try {
			return l.activeElement || l.body;
		} catch {
			return l.body;
		}
	}
	var po = /[\n"\\]/g;
	function ot(l) {
		return l.replace(po, function (t) {
			return '\\' + t.charCodeAt(0).toString(16) + ' ';
		});
	}
	function kn(l, t, a, u, e, n, f, c) {
		(l.name = ''),
			f != null &&
			typeof f != 'function' &&
			typeof f != 'symbol' &&
			typeof f != 'boolean'
				? (l.type = f)
				: l.removeAttribute('type'),
			t != null
				? f === 'number'
					? ((t === 0 && l.value === '') || l.value != t) &&
					  (l.value = '' + dt(t))
					: l.value !== '' + dt(t) && (l.value = '' + dt(t))
				: (f !== 'submit' && f !== 'reset') || l.removeAttribute('value'),
			t != null
				? $n(l, f, dt(t))
				: a != null
				? $n(l, f, dt(a))
				: u != null && l.removeAttribute('value'),
			e == null && n != null && (l.defaultChecked = !!n),
			e != null &&
				(l.checked = e && typeof e != 'function' && typeof e != 'symbol'),
			c != null &&
			typeof c != 'function' &&
			typeof c != 'symbol' &&
			typeof c != 'boolean'
				? (l.name = '' + dt(c))
				: l.removeAttribute('name');
	}
	function zi(l, t, a, u, e, n, f, c) {
		if (
			(n != null &&
				typeof n != 'function' &&
				typeof n != 'symbol' &&
				typeof n != 'boolean' &&
				(l.type = n),
			t != null || a != null)
		) {
			if (!((n !== 'submit' && n !== 'reset') || t != null)) return;
			(a = a != null ? '' + dt(a) : ''),
				(t = t != null ? '' + dt(t) : a),
				c || t === l.value || (l.value = t),
				(l.defaultValue = t);
		}
		(u = u ?? e),
			(u = typeof u != 'function' && typeof u != 'symbol' && !!u),
			(l.checked = c ? l.checked : !!u),
			(l.defaultChecked = !!u),
			f != null &&
				typeof f != 'function' &&
				typeof f != 'symbol' &&
				typeof f != 'boolean' &&
				(l.name = f);
	}
	function $n(l, t, a) {
		(t === 'number' && _e(l.ownerDocument) === l) ||
			l.defaultValue === '' + a ||
			(l.defaultValue = '' + a);
	}
	function Xa(l, t, a, u) {
		if (((l = l.options), t)) {
			t = {};
			for (var e = 0; e < a.length; e++) t['$' + a[e]] = !0;
			for (a = 0; a < l.length; a++)
				(e = t.hasOwnProperty('$' + l[a].value)),
					l[a].selected !== e && (l[a].selected = e),
					e && u && (l[a].defaultSelected = !0);
		} else {
			for (a = '' + dt(a), t = null, e = 0; e < l.length; e++) {
				if (l[e].value === a) {
					(l[e].selected = !0), u && (l[e].defaultSelected = !0);
					return;
				}
				t !== null || l[e].disabled || (t = l[e]);
			}
			t !== null && (t.selected = !0);
		}
	}
	function _i(l, t, a) {
		if (
			t != null &&
			((t = '' + dt(t)), t !== l.value && (l.value = t), a == null)
		) {
			l.defaultValue !== t && (l.defaultValue = t);
			return;
		}
		l.defaultValue = a != null ? '' + dt(a) : '';
	}
	function Bi(l, t, a, u) {
		if (t == null) {
			if (u != null) {
				if (a != null) throw Error(y(92));
				if (Nl(u)) {
					if (1 < u.length) throw Error(y(93));
					u = u[0];
				}
				a = u;
			}
			a == null && (a = ''), (t = a);
		}
		(a = dt(t)),
			(l.defaultValue = a),
			(u = l.textContent),
			u === a && u !== '' && u !== null && (l.value = u);
	}
	function Qa(l, t) {
		if (t) {
			var a = l.firstChild;
			if (a && a === l.lastChild && a.nodeType === 3) {
				a.nodeValue = t;
				return;
			}
		}
		l.textContent = t;
	}
	var xo = new Set(
		'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
			' '
		)
	);
	function Ui(l, t, a) {
		var u = t.indexOf('--') === 0;
		a == null || typeof a == 'boolean' || a === ''
			? u
				? l.setProperty(t, '')
				: t === 'float'
				? (l.cssFloat = '')
				: (l[t] = '')
			: u
			? l.setProperty(t, a)
			: typeof a != 'number' || a === 0 || xo.has(t)
			? t === 'float'
				? (l.cssFloat = a)
				: (l[t] = ('' + a).trim())
			: (l[t] = a + 'px');
	}
	function Ri(l, t, a) {
		if (t != null && typeof t != 'object') throw Error(y(62));
		if (((l = l.style), a != null)) {
			for (var u in a)
				!a.hasOwnProperty(u) ||
					(t != null && t.hasOwnProperty(u)) ||
					(u.indexOf('--') === 0
						? l.setProperty(u, '')
						: u === 'float'
						? (l.cssFloat = '')
						: (l[u] = ''));
			for (var e in t)
				(u = t[e]), t.hasOwnProperty(e) && a[e] !== u && Ui(l, e, u);
		} else for (var n in t) t.hasOwnProperty(n) && Ui(l, n, t[n]);
	}
	function Fn(l) {
		if (l.indexOf('-') === -1) return !1;
		switch (l) {
			case 'annotation-xml':
			case 'color-profile':
			case 'font-face':
			case 'font-face-src':
			case 'font-face-uri':
			case 'font-face-format':
			case 'font-face-name':
			case 'missing-glyph':
				return !1;
			default:
				return !0;
		}
	}
	var qo = new Map([
			['acceptCharset', 'accept-charset'],
			['htmlFor', 'for'],
			['httpEquiv', 'http-equiv'],
			['crossOrigin', 'crossorigin'],
			['accentHeight', 'accent-height'],
			['alignmentBaseline', 'alignment-baseline'],
			['arabicForm', 'arabic-form'],
			['baselineShift', 'baseline-shift'],
			['capHeight', 'cap-height'],
			['clipPath', 'clip-path'],
			['clipRule', 'clip-rule'],
			['colorInterpolation', 'color-interpolation'],
			['colorInterpolationFilters', 'color-interpolation-filters'],
			['colorProfile', 'color-profile'],
			['colorRendering', 'color-rendering'],
			['dominantBaseline', 'dominant-baseline'],
			['enableBackground', 'enable-background'],
			['fillOpacity', 'fill-opacity'],
			['fillRule', 'fill-rule'],
			['floodColor', 'flood-color'],
			['floodOpacity', 'flood-opacity'],
			['fontFamily', 'font-family'],
			['fontSize', 'font-size'],
			['fontSizeAdjust', 'font-size-adjust'],
			['fontStretch', 'font-stretch'],
			['fontStyle', 'font-style'],
			['fontVariant', 'font-variant'],
			['fontWeight', 'font-weight'],
			['glyphName', 'glyph-name'],
			['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
			['glyphOrientationVertical', 'glyph-orientation-vertical'],
			['horizAdvX', 'horiz-adv-x'],
			['horizOriginX', 'horiz-origin-x'],
			['imageRendering', 'image-rendering'],
			['letterSpacing', 'letter-spacing'],
			['lightingColor', 'lighting-color'],
			['markerEnd', 'marker-end'],
			['markerMid', 'marker-mid'],
			['markerStart', 'marker-start'],
			['overlinePosition', 'overline-position'],
			['overlineThickness', 'overline-thickness'],
			['paintOrder', 'paint-order'],
			['panose-1', 'panose-1'],
			['pointerEvents', 'pointer-events'],
			['renderingIntent', 'rendering-intent'],
			['shapeRendering', 'shape-rendering'],
			['stopColor', 'stop-color'],
			['stopOpacity', 'stop-opacity'],
			['strikethroughPosition', 'strikethrough-position'],
			['strikethroughThickness', 'strikethrough-thickness'],
			['strokeDasharray', 'stroke-dasharray'],
			['strokeDashoffset', 'stroke-dashoffset'],
			['strokeLinecap', 'stroke-linecap'],
			['strokeLinejoin', 'stroke-linejoin'],
			['strokeMiterlimit', 'stroke-miterlimit'],
			['strokeOpacity', 'stroke-opacity'],
			['strokeWidth', 'stroke-width'],
			['textAnchor', 'text-anchor'],
			['textDecoration', 'text-decoration'],
			['textRendering', 'text-rendering'],
			['transformOrigin', 'transform-origin'],
			['underlinePosition', 'underline-position'],
			['underlineThickness', 'underline-thickness'],
			['unicodeBidi', 'unicode-bidi'],
			['unicodeRange', 'unicode-range'],
			['unitsPerEm', 'units-per-em'],
			['vAlphabetic', 'v-alphabetic'],
			['vHanging', 'v-hanging'],
			['vIdeographic', 'v-ideographic'],
			['vMathematical', 'v-mathematical'],
			['vectorEffect', 'vector-effect'],
			['vertAdvY', 'vert-adv-y'],
			['vertOriginX', 'vert-origin-x'],
			['vertOriginY', 'vert-origin-y'],
			['wordSpacing', 'word-spacing'],
			['writingMode', 'writing-mode'],
			['xmlnsXlink', 'xmlns:xlink'],
			['xHeight', 'x-height'],
		]),
		Yo =
			/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function Be(l) {
		return Yo.test('' + l)
			? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
			: l;
	}
	var Pn = null;
	function In(l) {
		return (
			(l = l.target || l.srcElement || window),
			l.correspondingUseElement && (l = l.correspondingUseElement),
			l.nodeType === 3 ? l.parentNode : l
		);
	}
	var Za = null,
		Va = null;
	function Ni(l) {
		var t = qa(l);
		if (t && (l = t.stateNode)) {
			var a = l[wl] || null;
			l: switch (((l = t.stateNode), t.type)) {
				case 'input':
					if (
						(kn(
							l,
							a.value,
							a.defaultValue,
							a.defaultValue,
							a.checked,
							a.defaultChecked,
							a.type,
							a.name
						),
						(t = a.name),
						a.type === 'radio' && t != null)
					) {
						for (a = l; a.parentNode; ) a = a.parentNode;
						for (
							a = a.querySelectorAll(
								'input[name="' + ot('' + t) + '"][type="radio"]'
							),
								t = 0;
							t < a.length;
							t++
						) {
							var u = a[t];
							if (u !== l && u.form === l.form) {
								var e = u[wl] || null;
								if (!e) throw Error(y(90));
								kn(
									u,
									e.value,
									e.defaultValue,
									e.defaultValue,
									e.checked,
									e.defaultChecked,
									e.type,
									e.name
								);
							}
						}
						for (t = 0; t < a.length; t++)
							(u = a[t]), u.form === l.form && Di(u);
					}
					break l;
				case 'textarea':
					_i(l, a.value, a.defaultValue);
					break l;
				case 'select':
					(t = a.value), t != null && Xa(l, !!a.multiple, t, !1);
			}
		}
	}
	var lf = !1;
	function Ci(l, t, a) {
		if (lf) return l(t, a);
		lf = !0;
		try {
			var u = l(t);
			return u;
		} finally {
			if (
				((lf = !1),
				(Za !== null || Va !== null) &&
					(yn(), Za && ((t = Za), (l = Va), (Va = Za = null), Ni(t), l)))
			)
				for (t = 0; t < l.length; t++) Ni(l[t]);
		}
	}
	function Ou(l, t) {
		var a = l.stateNode;
		if (a === null) return null;
		var u = a[wl] || null;
		if (u === null) return null;
		a = u[t];
		l: switch (t) {
			case 'onClick':
			case 'onClickCapture':
			case 'onDoubleClick':
			case 'onDoubleClickCapture':
			case 'onMouseDown':
			case 'onMouseDownCapture':
			case 'onMouseMove':
			case 'onMouseMoveCapture':
			case 'onMouseUp':
			case 'onMouseUpCapture':
			case 'onMouseEnter':
				(u = !u.disabled) ||
					((l = l.type),
					(u = !(
						l === 'button' ||
						l === 'input' ||
						l === 'select' ||
						l === 'textarea'
					))),
					(l = !u);
				break l;
			default:
				l = !1;
		}
		if (l) return null;
		if (a && typeof a != 'function') throw Error(y(231, t, typeof a));
		return a;
	}
	var Rt = !(
			typeof window > 'u' ||
			typeof window.document > 'u' ||
			typeof window.document.createElement > 'u'
		),
		tf = !1;
	if (Rt)
		try {
			var Du = {};
			Object.defineProperty(Du, 'passive', {
				get: function () {
					tf = !0;
				},
			}),
				window.addEventListener('test', Du, Du),
				window.removeEventListener('test', Du, Du);
		} catch {
			tf = !1;
		}
	var Wt = null,
		af = null,
		Ue = null;
	function Hi() {
		if (Ue) return Ue;
		var l,
			t = af,
			a = t.length,
			u,
			e = 'value' in Wt ? Wt.value : Wt.textContent,
			n = e.length;
		for (l = 0; l < a && t[l] === e[l]; l++);
		var f = a - l;
		for (u = 1; u <= f && t[a - u] === e[n - u]; u++);
		return (Ue = e.slice(l, 1 < u ? 1 - u : void 0));
	}
	function Re(l) {
		var t = l.keyCode;
		return (
			'charCode' in l
				? ((l = l.charCode), l === 0 && t === 13 && (l = 13))
				: (l = t),
			l === 10 && (l = 13),
			32 <= l || l === 13 ? l : 0
		);
	}
	function Ne() {
		return !0;
	}
	function pi() {
		return !1;
	}
	function Wl(l) {
		function t(a, u, e, n, f) {
			(this._reactName = a),
				(this._targetInst = e),
				(this.type = u),
				(this.nativeEvent = n),
				(this.target = f),
				(this.currentTarget = null);
			for (var c in l)
				l.hasOwnProperty(c) && ((a = l[c]), (this[c] = a ? a(n) : n[c]));
			return (
				(this.isDefaultPrevented = (
					n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
				)
					? Ne
					: pi),
				(this.isPropagationStopped = pi),
				this
			);
		}
		return (
			N(t.prototype, {
				preventDefault: function () {
					this.defaultPrevented = !0;
					var a = this.nativeEvent;
					a &&
						(a.preventDefault
							? a.preventDefault()
							: typeof a.returnValue != 'unknown' && (a.returnValue = !1),
						(this.isDefaultPrevented = Ne));
				},
				stopPropagation: function () {
					var a = this.nativeEvent;
					a &&
						(a.stopPropagation
							? a.stopPropagation()
							: typeof a.cancelBubble != 'unknown' && (a.cancelBubble = !0),
						(this.isPropagationStopped = Ne));
				},
				persist: function () {},
				isPersistent: Ne,
			}),
			t
		);
	}
	var ga = {
			eventPhase: 0,
			bubbles: 0,
			cancelable: 0,
			timeStamp: function (l) {
				return l.timeStamp || Date.now();
			},
			defaultPrevented: 0,
			isTrusted: 0,
		},
		Ce = Wl(ga),
		zu = N({}, ga, { view: 0, detail: 0 }),
		jo = Wl(zu),
		uf,
		ef,
		_u,
		He = N({}, zu, {
			screenX: 0,
			screenY: 0,
			clientX: 0,
			clientY: 0,
			pageX: 0,
			pageY: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			getModifierState: ff,
			button: 0,
			buttons: 0,
			relatedTarget: function (l) {
				return l.relatedTarget === void 0
					? l.fromElement === l.srcElement
						? l.toElement
						: l.fromElement
					: l.relatedTarget;
			},
			movementX: function (l) {
				return 'movementX' in l
					? l.movementX
					: (l !== _u &&
							(_u && l.type === 'mousemove'
								? ((uf = l.screenX - _u.screenX), (ef = l.screenY - _u.screenY))
								: (ef = uf = 0),
							(_u = l)),
					  uf);
			},
			movementY: function (l) {
				return 'movementY' in l ? l.movementY : ef;
			},
		}),
		xi = Wl(He),
		Go = N({}, He, { dataTransfer: 0 }),
		Xo = Wl(Go),
		Qo = N({}, zu, { relatedTarget: 0 }),
		nf = Wl(Qo),
		Zo = N({}, ga, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
		Vo = Wl(Zo),
		Lo = N({}, ga, {
			clipboardData: function (l) {
				return 'clipboardData' in l ? l.clipboardData : window.clipboardData;
			},
		}),
		Ko = Wl(Lo),
		Jo = N({}, ga, { data: 0 }),
		qi = Wl(Jo),
		wo = {
			Esc: 'Escape',
			Spacebar: ' ',
			Left: 'ArrowLeft',
			Up: 'ArrowUp',
			Right: 'ArrowRight',
			Down: 'ArrowDown',
			Del: 'Delete',
			Win: 'OS',
			Menu: 'ContextMenu',
			Apps: 'ContextMenu',
			Scroll: 'ScrollLock',
			MozPrintableKey: 'Unidentified',
		},
		Wo = {
			8: 'Backspace',
			9: 'Tab',
			12: 'Clear',
			13: 'Enter',
			16: 'Shift',
			17: 'Control',
			18: 'Alt',
			19: 'Pause',
			20: 'CapsLock',
			27: 'Escape',
			32: ' ',
			33: 'PageUp',
			34: 'PageDown',
			35: 'End',
			36: 'Home',
			37: 'ArrowLeft',
			38: 'ArrowUp',
			39: 'ArrowRight',
			40: 'ArrowDown',
			45: 'Insert',
			46: 'Delete',
			112: 'F1',
			113: 'F2',
			114: 'F3',
			115: 'F4',
			116: 'F5',
			117: 'F6',
			118: 'F7',
			119: 'F8',
			120: 'F9',
			121: 'F10',
			122: 'F11',
			123: 'F12',
			144: 'NumLock',
			145: 'ScrollLock',
			224: 'Meta',
		},
		ko = {
			Alt: 'altKey',
			Control: 'ctrlKey',
			Meta: 'metaKey',
			Shift: 'shiftKey',
		};
	function $o(l) {
		var t = this.nativeEvent;
		return t.getModifierState
			? t.getModifierState(l)
			: (l = ko[l])
			? !!t[l]
			: !1;
	}
	function ff() {
		return $o;
	}
	var Fo = N({}, zu, {
			key: function (l) {
				if (l.key) {
					var t = wo[l.key] || l.key;
					if (t !== 'Unidentified') return t;
				}
				return l.type === 'keypress'
					? ((l = Re(l)), l === 13 ? 'Enter' : String.fromCharCode(l))
					: l.type === 'keydown' || l.type === 'keyup'
					? Wo[l.keyCode] || 'Unidentified'
					: '';
			},
			code: 0,
			location: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			repeat: 0,
			locale: 0,
			getModifierState: ff,
			charCode: function (l) {
				return l.type === 'keypress' ? Re(l) : 0;
			},
			keyCode: function (l) {
				return l.type === 'keydown' || l.type === 'keyup' ? l.keyCode : 0;
			},
			which: function (l) {
				return l.type === 'keypress'
					? Re(l)
					: l.type === 'keydown' || l.type === 'keyup'
					? l.keyCode
					: 0;
			},
		}),
		Po = Wl(Fo),
		Io = N({}, He, {
			pointerId: 0,
			width: 0,
			height: 0,
			pressure: 0,
			tangentialPressure: 0,
			tiltX: 0,
			tiltY: 0,
			twist: 0,
			pointerType: 0,
			isPrimary: 0,
		}),
		Yi = Wl(Io),
		lr = N({}, zu, {
			touches: 0,
			targetTouches: 0,
			changedTouches: 0,
			altKey: 0,
			metaKey: 0,
			ctrlKey: 0,
			shiftKey: 0,
			getModifierState: ff,
		}),
		tr = Wl(lr),
		ar = N({}, ga, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
		ur = Wl(ar),
		er = N({}, He, {
			deltaX: function (l) {
				return 'deltaX' in l
					? l.deltaX
					: 'wheelDeltaX' in l
					? -l.wheelDeltaX
					: 0;
			},
			deltaY: function (l) {
				return 'deltaY' in l
					? l.deltaY
					: 'wheelDeltaY' in l
					? -l.wheelDeltaY
					: 'wheelDelta' in l
					? -l.wheelDelta
					: 0;
			},
			deltaZ: 0,
			deltaMode: 0,
		}),
		nr = Wl(er),
		fr = N({}, ga, { newState: 0, oldState: 0 }),
		cr = Wl(fr),
		ir = [9, 13, 27, 32],
		cf = Rt && 'CompositionEvent' in window,
		Bu = null;
	Rt && 'documentMode' in document && (Bu = document.documentMode);
	var sr = Rt && 'TextEvent' in window && !Bu,
		ji = Rt && (!cf || (Bu && 8 < Bu && 11 >= Bu)),
		Gi = ' ',
		Xi = !1;
	function Qi(l, t) {
		switch (l) {
			case 'keyup':
				return ir.indexOf(t.keyCode) !== -1;
			case 'keydown':
				return t.keyCode !== 229;
			case 'keypress':
			case 'mousedown':
			case 'focusout':
				return !0;
			default:
				return !1;
		}
	}
	function Zi(l) {
		return (l = l.detail), typeof l == 'object' && 'data' in l ? l.data : null;
	}
	var La = !1;
	function dr(l, t) {
		switch (l) {
			case 'compositionend':
				return Zi(t);
			case 'keypress':
				return t.which !== 32 ? null : ((Xi = !0), Gi);
			case 'textInput':
				return (l = t.data), l === Gi && Xi ? null : l;
			default:
				return null;
		}
	}
	function or(l, t) {
		if (La)
			return l === 'compositionend' || (!cf && Qi(l, t))
				? ((l = Hi()), (Ue = af = Wt = null), (La = !1), l)
				: null;
		switch (l) {
			case 'paste':
				return null;
			case 'keypress':
				if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
					if (t.char && 1 < t.char.length) return t.char;
					if (t.which) return String.fromCharCode(t.which);
				}
				return null;
			case 'compositionend':
				return ji && t.locale !== 'ko' ? null : t.data;
			default:
				return null;
		}
	}
	var rr = {
		color: !0,
		date: !0,
		datetime: !0,
		'datetime-local': !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0,
	};
	function Vi(l) {
		var t = l && l.nodeName && l.nodeName.toLowerCase();
		return t === 'input' ? !!rr[l.type] : t === 'textarea';
	}
	function Li(l, t, a, u) {
		Za ? (Va ? Va.push(u) : (Va = [u])) : (Za = u),
			(t = En(t, 'onChange')),
			0 < t.length &&
				((a = new Ce('onChange', 'change', null, a, u)),
				l.push({ event: a, listeners: t }));
	}
	var Uu = null,
		Ru = null;
	function vr(l) {
		Od(l, 0);
	}
	function pe(l) {
		var t = Mu(l);
		if (Di(t)) return l;
	}
	function Ki(l, t) {
		if (l === 'change') return t;
	}
	var Ji = !1;
	if (Rt) {
		var sf;
		if (Rt) {
			var df = 'oninput' in document;
			if (!df) {
				var wi = document.createElement('div');
				wi.setAttribute('oninput', 'return;'),
					(df = typeof wi.oninput == 'function');
			}
			sf = df;
		} else sf = !1;
		Ji = sf && (!document.documentMode || 9 < document.documentMode);
	}
	function Wi() {
		Uu && (Uu.detachEvent('onpropertychange', ki), (Ru = Uu = null));
	}
	function ki(l) {
		if (l.propertyName === 'value' && pe(Ru)) {
			var t = [];
			Li(t, Ru, l, In(l)), Ci(vr, t);
		}
	}
	function yr(l, t, a) {
		l === 'focusin'
			? (Wi(), (Uu = t), (Ru = a), Uu.attachEvent('onpropertychange', ki))
			: l === 'focusout' && Wi();
	}
	function hr(l) {
		if (l === 'selectionchange' || l === 'keyup' || l === 'keydown')
			return pe(Ru);
	}
	function mr(l, t) {
		if (l === 'click') return pe(t);
	}
	function Sr(l, t) {
		if (l === 'input' || l === 'change') return pe(t);
	}
	function gr(l, t) {
		return (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t);
	}
	var at = typeof Object.is == 'function' ? Object.is : gr;
	function Nu(l, t) {
		if (at(l, t)) return !0;
		if (
			typeof l != 'object' ||
			l === null ||
			typeof t != 'object' ||
			t === null
		)
			return !1;
		var a = Object.keys(l),
			u = Object.keys(t);
		if (a.length !== u.length) return !1;
		for (u = 0; u < a.length; u++) {
			var e = a[u];
			if (!jn.call(t, e) || !at(l[e], t[e])) return !1;
		}
		return !0;
	}
	function $i(l) {
		for (; l && l.firstChild; ) l = l.firstChild;
		return l;
	}
	function Fi(l, t) {
		var a = $i(l);
		l = 0;
		for (var u; a; ) {
			if (a.nodeType === 3) {
				if (((u = l + a.textContent.length), l <= t && u >= t))
					return { node: a, offset: t - l };
				l = u;
			}
			l: {
				for (; a; ) {
					if (a.nextSibling) {
						a = a.nextSibling;
						break l;
					}
					a = a.parentNode;
				}
				a = void 0;
			}
			a = $i(a);
		}
	}
	function Pi(l, t) {
		return l && t
			? l === t
				? !0
				: l && l.nodeType === 3
				? !1
				: t && t.nodeType === 3
				? Pi(l, t.parentNode)
				: 'contains' in l
				? l.contains(t)
				: l.compareDocumentPosition
				? !!(l.compareDocumentPosition(t) & 16)
				: !1
			: !1;
	}
	function Ii(l) {
		l =
			l != null &&
			l.ownerDocument != null &&
			l.ownerDocument.defaultView != null
				? l.ownerDocument.defaultView
				: window;
		for (var t = _e(l.document); t instanceof l.HTMLIFrameElement; ) {
			try {
				var a = typeof t.contentWindow.location.href == 'string';
			} catch {
				a = !1;
			}
			if (a) l = t.contentWindow;
			else break;
			t = _e(l.document);
		}
		return t;
	}
	function of(l) {
		var t = l && l.nodeName && l.nodeName.toLowerCase();
		return (
			t &&
			((t === 'input' &&
				(l.type === 'text' ||
					l.type === 'search' ||
					l.type === 'tel' ||
					l.type === 'url' ||
					l.type === 'password')) ||
				t === 'textarea' ||
				l.contentEditable === 'true')
		);
	}
	var br = Rt && 'documentMode' in document && 11 >= document.documentMode,
		Ka = null,
		rf = null,
		Cu = null,
		vf = !1;
	function ls(l, t, a) {
		var u =
			a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
		vf ||
			Ka == null ||
			Ka !== _e(u) ||
			((u = Ka),
			'selectionStart' in u && of(u)
				? (u = { start: u.selectionStart, end: u.selectionEnd })
				: ((u = (
						(u.ownerDocument && u.ownerDocument.defaultView) ||
						window
				  ).getSelection()),
				  (u = {
						anchorNode: u.anchorNode,
						anchorOffset: u.anchorOffset,
						focusNode: u.focusNode,
						focusOffset: u.focusOffset,
				  })),
			(Cu && Nu(Cu, u)) ||
				((Cu = u),
				(u = En(rf, 'onSelect')),
				0 < u.length &&
					((t = new Ce('onSelect', 'select', null, t, a)),
					l.push({ event: t, listeners: u }),
					(t.target = Ka))));
	}
	function ba(l, t) {
		var a = {};
		return (
			(a[l.toLowerCase()] = t.toLowerCase()),
			(a['Webkit' + l] = 'webkit' + t),
			(a['Moz' + l] = 'moz' + t),
			a
		);
	}
	var Ja = {
			animationend: ba('Animation', 'AnimationEnd'),
			animationiteration: ba('Animation', 'AnimationIteration'),
			animationstart: ba('Animation', 'AnimationStart'),
			transitionrun: ba('Transition', 'TransitionRun'),
			transitionstart: ba('Transition', 'TransitionStart'),
			transitioncancel: ba('Transition', 'TransitionCancel'),
			transitionend: ba('Transition', 'TransitionEnd'),
		},
		yf = {},
		ts = {};
	Rt &&
		((ts = document.createElement('div').style),
		'AnimationEvent' in window ||
			(delete Ja.animationend.animation,
			delete Ja.animationiteration.animation,
			delete Ja.animationstart.animation),
		'TransitionEvent' in window || delete Ja.transitionend.transition);
	function Ea(l) {
		if (yf[l]) return yf[l];
		if (!Ja[l]) return l;
		var t = Ja[l],
			a;
		for (a in t) if (t.hasOwnProperty(a) && a in ts) return (yf[l] = t[a]);
		return l;
	}
	var as = Ea('animationend'),
		us = Ea('animationiteration'),
		es = Ea('animationstart'),
		Er = Ea('transitionrun'),
		Ar = Ea('transitionstart'),
		Tr = Ea('transitioncancel'),
		ns = Ea('transitionend'),
		fs = new Map(),
		hf =
			'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
				' '
			);
	hf.push('scrollEnd');
	function bt(l, t) {
		fs.set(l, t), Sa(t, [l]);
	}
	var cs = new WeakMap();
	function rt(l, t) {
		if (typeof l == 'object' && l !== null) {
			var a = cs.get(l);
			return a !== void 0
				? a
				: ((t = { value: l, source: t, stack: Mi(t) }), cs.set(l, t), t);
		}
		return { value: l, source: t, stack: Mi(t) };
	}
	var vt = [],
		wa = 0,
		mf = 0;
	function xe() {
		for (var l = wa, t = (mf = wa = 0); t < l; ) {
			var a = vt[t];
			vt[t++] = null;
			var u = vt[t];
			vt[t++] = null;
			var e = vt[t];
			vt[t++] = null;
			var n = vt[t];
			if (((vt[t++] = null), u !== null && e !== null)) {
				var f = u.pending;
				f === null ? (e.next = e) : ((e.next = f.next), (f.next = e)),
					(u.pending = e);
			}
			n !== 0 && is(a, e, n);
		}
	}
	function qe(l, t, a, u) {
		(vt[wa++] = l),
			(vt[wa++] = t),
			(vt[wa++] = a),
			(vt[wa++] = u),
			(mf |= u),
			(l.lanes |= u),
			(l = l.alternate),
			l !== null && (l.lanes |= u);
	}
	function Sf(l, t, a, u) {
		return qe(l, t, a, u), Ye(l);
	}
	function Wa(l, t) {
		return qe(l, null, null, t), Ye(l);
	}
	function is(l, t, a) {
		l.lanes |= a;
		var u = l.alternate;
		u !== null && (u.lanes |= a);
		for (var e = !1, n = l.return; n !== null; )
			(n.childLanes |= a),
				(u = n.alternate),
				u !== null && (u.childLanes |= a),
				n.tag === 22 &&
					((l = n.stateNode), l === null || l._visibility & 1 || (e = !0)),
				(l = n),
				(n = n.return);
		return l.tag === 3
			? ((n = l.stateNode),
			  e &&
					t !== null &&
					((e = 31 - tt(a)),
					(l = n.hiddenUpdates),
					(u = l[e]),
					u === null ? (l[e] = [t]) : u.push(t),
					(t.lane = a | 536870912)),
			  n)
			: null;
	}
	function Ye(l) {
		if (50 < ue) throw ((ue = 0), (Mc = null), Error(y(185)));
		for (var t = l.return; t !== null; ) (l = t), (t = l.return);
		return l.tag === 3 ? l.stateNode : null;
	}
	var ka = {};
	function Mr(l, t, a, u) {
		(this.tag = l),
			(this.key = a),
			(this.sibling =
				this.child =
				this.return =
				this.stateNode =
				this.type =
				this.elementType =
					null),
			(this.index = 0),
			(this.refCleanup = this.ref = null),
			(this.pendingProps = t),
			(this.dependencies =
				this.memoizedState =
				this.updateQueue =
				this.memoizedProps =
					null),
			(this.mode = u),
			(this.subtreeFlags = this.flags = 0),
			(this.deletions = null),
			(this.childLanes = this.lanes = 0),
			(this.alternate = null);
	}
	function ut(l, t, a, u) {
		return new Mr(l, t, a, u);
	}
	function gf(l) {
		return (l = l.prototype), !(!l || !l.isReactComponent);
	}
	function Nt(l, t) {
		var a = l.alternate;
		return (
			a === null
				? ((a = ut(l.tag, t, l.key, l.mode)),
				  (a.elementType = l.elementType),
				  (a.type = l.type),
				  (a.stateNode = l.stateNode),
				  (a.alternate = l),
				  (l.alternate = a))
				: ((a.pendingProps = t),
				  (a.type = l.type),
				  (a.flags = 0),
				  (a.subtreeFlags = 0),
				  (a.deletions = null)),
			(a.flags = l.flags & 65011712),
			(a.childLanes = l.childLanes),
			(a.lanes = l.lanes),
			(a.child = l.child),
			(a.memoizedProps = l.memoizedProps),
			(a.memoizedState = l.memoizedState),
			(a.updateQueue = l.updateQueue),
			(t = l.dependencies),
			(a.dependencies =
				t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
			(a.sibling = l.sibling),
			(a.index = l.index),
			(a.ref = l.ref),
			(a.refCleanup = l.refCleanup),
			a
		);
	}
	function ss(l, t) {
		l.flags &= 65011714;
		var a = l.alternate;
		return (
			a === null
				? ((l.childLanes = 0),
				  (l.lanes = t),
				  (l.child = null),
				  (l.subtreeFlags = 0),
				  (l.memoizedProps = null),
				  (l.memoizedState = null),
				  (l.updateQueue = null),
				  (l.dependencies = null),
				  (l.stateNode = null))
				: ((l.childLanes = a.childLanes),
				  (l.lanes = a.lanes),
				  (l.child = a.child),
				  (l.subtreeFlags = 0),
				  (l.deletions = null),
				  (l.memoizedProps = a.memoizedProps),
				  (l.memoizedState = a.memoizedState),
				  (l.updateQueue = a.updateQueue),
				  (l.type = a.type),
				  (t = a.dependencies),
				  (l.dependencies =
						t === null
							? null
							: { lanes: t.lanes, firstContext: t.firstContext })),
			l
		);
	}
	function je(l, t, a, u, e, n) {
		var f = 0;
		if (((u = l), typeof l == 'function')) gf(l) && (f = 1);
		else if (typeof l == 'string')
			f = Dv(l, a, x.current)
				? 26
				: l === 'html' || l === 'head' || l === 'body'
				? 27
				: 5;
		else
			l: switch (l) {
				case st:
					return (l = ut(31, a, t, e)), (l.elementType = st), (l.lanes = n), l;
				case Ml:
					return Aa(a.children, e, n, t);
				case Ul:
					(f = 8), (e |= 24);
					break;
				case Sl:
					return (
						(l = ut(12, a, t, e | 2)), (l.elementType = Sl), (l.lanes = n), l
					);
				case F:
					return (l = ut(13, a, t, e)), (l.elementType = F), (l.lanes = n), l;
				case Rl:
					return (l = ut(19, a, t, e)), (l.elementType = Rl), (l.lanes = n), l;
				default:
					if (typeof l == 'object' && l !== null)
						switch (l.$$typeof) {
							case Jl:
							case yl:
								f = 10;
								break l;
							case Pl:
								f = 9;
								break l;
							case Ql:
								f = 11;
								break l;
							case ql:
								f = 14;
								break l;
							case Yl:
								(f = 16), (u = null);
								break l;
						}
					(f = 29),
						(a = Error(y(130, l === null ? 'null' : typeof l, ''))),
						(u = null);
			}
		return (
			(t = ut(f, a, t, e)), (t.elementType = l), (t.type = u), (t.lanes = n), t
		);
	}
	function Aa(l, t, a, u) {
		return (l = ut(7, l, u, t)), (l.lanes = a), l;
	}
	function bf(l, t, a) {
		return (l = ut(6, l, null, t)), (l.lanes = a), l;
	}
	function Ef(l, t, a) {
		return (
			(t = ut(4, l.children !== null ? l.children : [], l.key, t)),
			(t.lanes = a),
			(t.stateNode = {
				containerInfo: l.containerInfo,
				pendingChildren: null,
				implementation: l.implementation,
			}),
			t
		);
	}
	var $a = [],
		Fa = 0,
		Ge = null,
		Xe = 0,
		yt = [],
		ht = 0,
		Ta = null,
		Ct = 1,
		Ht = '';
	function Ma(l, t) {
		($a[Fa++] = Xe), ($a[Fa++] = Ge), (Ge = l), (Xe = t);
	}
	function ds(l, t, a) {
		(yt[ht++] = Ct), (yt[ht++] = Ht), (yt[ht++] = Ta), (Ta = l);
		var u = Ct;
		l = Ht;
		var e = 32 - tt(u) - 1;
		(u &= ~(1 << e)), (a += 1);
		var n = 32 - tt(t) + e;
		if (30 < n) {
			var f = e - (e % 5);
			(n = (u & ((1 << f) - 1)).toString(32)),
				(u >>= f),
				(e -= f),
				(Ct = (1 << (32 - tt(t) + e)) | (a << e) | u),
				(Ht = n + l);
		} else (Ct = (1 << n) | (a << e) | u), (Ht = l);
	}
	function Af(l) {
		l.return !== null && (Ma(l, 1), ds(l, 1, 0));
	}
	function Tf(l) {
		for (; l === Ge; )
			(Ge = $a[--Fa]), ($a[Fa] = null), (Xe = $a[--Fa]), ($a[Fa] = null);
		for (; l === Ta; )
			(Ta = yt[--ht]),
				(yt[ht] = null),
				(Ht = yt[--ht]),
				(yt[ht] = null),
				(Ct = yt[--ht]),
				(yt[ht] = null);
	}
	var Kl = null,
		bl = null,
		al = !1,
		Oa = null,
		Mt = !1,
		Mf = Error(y(519));
	function Da(l) {
		var t = Error(y(418, ''));
		throw (xu(rt(t, l)), Mf);
	}
	function os(l) {
		var t = l.stateNode,
			a = l.type,
			u = l.memoizedProps;
		switch (((t[Zl] = l), (t[wl] = u), a)) {
			case 'dialog':
				k('cancel', t), k('close', t);
				break;
			case 'iframe':
			case 'object':
			case 'embed':
				k('load', t);
				break;
			case 'video':
			case 'audio':
				for (a = 0; a < ne.length; a++) k(ne[a], t);
				break;
			case 'source':
				k('error', t);
				break;
			case 'img':
			case 'image':
			case 'link':
				k('error', t), k('load', t);
				break;
			case 'details':
				k('toggle', t);
				break;
			case 'input':
				k('invalid', t),
					zi(
						t,
						u.value,
						u.defaultValue,
						u.checked,
						u.defaultChecked,
						u.type,
						u.name,
						!0
					),
					ze(t);
				break;
			case 'select':
				k('invalid', t);
				break;
			case 'textarea':
				k('invalid', t), Bi(t, u.value, u.defaultValue, u.children), ze(t);
		}
		(a = u.children),
			(typeof a != 'string' && typeof a != 'number' && typeof a != 'bigint') ||
			t.textContent === '' + a ||
			u.suppressHydrationWarning === !0 ||
			Bd(t.textContent, a)
				? (u.popover != null && (k('beforetoggle', t), k('toggle', t)),
				  u.onScroll != null && k('scroll', t),
				  u.onScrollEnd != null && k('scrollend', t),
				  u.onClick != null && (t.onclick = An),
				  (t = !0))
				: (t = !1),
			t || Da(l);
	}
	function rs(l) {
		for (Kl = l.return; Kl; )
			switch (Kl.tag) {
				case 5:
				case 13:
					Mt = !1;
					return;
				case 27:
				case 3:
					Mt = !0;
					return;
				default:
					Kl = Kl.return;
			}
	}
	function Hu(l) {
		if (l !== Kl) return !1;
		if (!al) return rs(l), (al = !0), !1;
		var t = l.tag,
			a;
		if (
			((a = t !== 3 && t !== 27) &&
				((a = t === 5) &&
					((a = l.type),
					(a =
						!(a !== 'form' && a !== 'button') || Gc(l.type, l.memoizedProps))),
				(a = !a)),
			a && bl && Da(l),
			rs(l),
			t === 13)
		) {
			if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
				throw Error(y(317));
			l: {
				for (l = l.nextSibling, t = 0; l; ) {
					if (l.nodeType === 8)
						if (((a = l.data), a === '/$')) {
							if (t === 0) {
								bl = At(l.nextSibling);
								break l;
							}
							t--;
						} else (a !== '$' && a !== '$!' && a !== '$?') || t++;
					l = l.nextSibling;
				}
				bl = null;
			}
		} else
			t === 27
				? ((t = bl), da(l.type) ? ((l = Vc), (Vc = null), (bl = l)) : (bl = t))
				: (bl = Kl ? At(l.stateNode.nextSibling) : null);
		return !0;
	}
	function pu() {
		(bl = Kl = null), (al = !1);
	}
	function vs() {
		var l = Oa;
		return (
			l !== null &&
				(Fl === null ? (Fl = l) : Fl.push.apply(Fl, l), (Oa = null)),
			l
		);
	}
	function xu(l) {
		Oa === null ? (Oa = [l]) : Oa.push(l);
	}
	var Of = T(null),
		za = null,
		pt = null;
	function kt(l, t, a) {
		D(Of, t._currentValue), (t._currentValue = a);
	}
	function xt(l) {
		(l._currentValue = Of.current), _(Of);
	}
	function Df(l, t, a) {
		for (; l !== null; ) {
			var u = l.alternate;
			if (
				((l.childLanes & t) !== t
					? ((l.childLanes |= t), u !== null && (u.childLanes |= t))
					: u !== null && (u.childLanes & t) !== t && (u.childLanes |= t),
				l === a)
			)
				break;
			l = l.return;
		}
	}
	function zf(l, t, a, u) {
		var e = l.child;
		for (e !== null && (e.return = l); e !== null; ) {
			var n = e.dependencies;
			if (n !== null) {
				var f = e.child;
				n = n.firstContext;
				l: for (; n !== null; ) {
					var c = n;
					n = e;
					for (var i = 0; i < t.length; i++)
						if (c.context === t[i]) {
							(n.lanes |= a),
								(c = n.alternate),
								c !== null && (c.lanes |= a),
								Df(n.return, a, l),
								u || (f = null);
							break l;
						}
					n = c.next;
				}
			} else if (e.tag === 18) {
				if (((f = e.return), f === null)) throw Error(y(341));
				(f.lanes |= a),
					(n = f.alternate),
					n !== null && (n.lanes |= a),
					Df(f, a, l),
					(f = null);
			} else f = e.child;
			if (f !== null) f.return = e;
			else
				for (f = e; f !== null; ) {
					if (f === l) {
						f = null;
						break;
					}
					if (((e = f.sibling), e !== null)) {
						(e.return = f.return), (f = e);
						break;
					}
					f = f.return;
				}
			e = f;
		}
	}
	function qu(l, t, a, u) {
		l = null;
		for (var e = t, n = !1; e !== null; ) {
			if (!n) {
				if ((e.flags & 524288) !== 0) n = !0;
				else if ((e.flags & 262144) !== 0) break;
			}
			if (e.tag === 10) {
				var f = e.alternate;
				if (f === null) throw Error(y(387));
				if (((f = f.memoizedProps), f !== null)) {
					var c = e.type;
					at(e.pendingProps.value, f.value) ||
						(l !== null ? l.push(c) : (l = [c]));
				}
			} else if (e === Il.current) {
				if (((f = e.alternate), f === null)) throw Error(y(387));
				f.memoizedState.memoizedState !== e.memoizedState.memoizedState &&
					(l !== null ? l.push(oe) : (l = [oe]));
			}
			e = e.return;
		}
		l !== null && zf(t, l, a, u), (t.flags |= 262144);
	}
	function Qe(l) {
		for (l = l.firstContext; l !== null; ) {
			if (!at(l.context._currentValue, l.memoizedValue)) return !0;
			l = l.next;
		}
		return !1;
	}
	function _a(l) {
		(za = l),
			(pt = null),
			(l = l.dependencies),
			l !== null && (l.firstContext = null);
	}
	function Vl(l) {
		return ys(za, l);
	}
	function Ze(l, t) {
		return za === null && _a(l), ys(l, t);
	}
	function ys(l, t) {
		var a = t._currentValue;
		if (((t = { context: t, memoizedValue: a, next: null }), pt === null)) {
			if (l === null) throw Error(y(308));
			(pt = t),
				(l.dependencies = { lanes: 0, firstContext: t }),
				(l.flags |= 524288);
		} else pt = pt.next = t;
		return a;
	}
	var Or =
			typeof AbortController < 'u'
				? AbortController
				: function () {
						var l = [],
							t = (this.signal = {
								aborted: !1,
								addEventListener: function (a, u) {
									l.push(u);
								},
							});
						this.abort = function () {
							(t.aborted = !0),
								l.forEach(function (a) {
									return a();
								});
						};
				  },
		Dr = M.unstable_scheduleCallback,
		zr = M.unstable_NormalPriority,
		_l = {
			$$typeof: yl,
			Consumer: null,
			Provider: null,
			_currentValue: null,
			_currentValue2: null,
			_threadCount: 0,
		};
	function _f() {
		return { controller: new Or(), data: new Map(), refCount: 0 };
	}
	function Yu(l) {
		l.refCount--,
			l.refCount === 0 &&
				Dr(zr, function () {
					l.controller.abort();
				});
	}
	var ju = null,
		Bf = 0,
		Pa = 0,
		Ia = null;
	function _r(l, t) {
		if (ju === null) {
			var a = (ju = []);
			(Bf = 0),
				(Pa = Rc()),
				(Ia = {
					status: 'pending',
					value: void 0,
					then: function (u) {
						a.push(u);
					},
				});
		}
		return Bf++, t.then(hs, hs), t;
	}
	function hs() {
		if (--Bf === 0 && ju !== null) {
			Ia !== null && (Ia.status = 'fulfilled');
			var l = ju;
			(ju = null), (Pa = 0), (Ia = null);
			for (var t = 0; t < l.length; t++) (0, l[t])();
		}
	}
	function Br(l, t) {
		var a = [],
			u = {
				status: 'pending',
				value: null,
				reason: null,
				then: function (e) {
					a.push(e);
				},
			};
		return (
			l.then(
				function () {
					(u.status = 'fulfilled'), (u.value = t);
					for (var e = 0; e < a.length; e++) (0, a[e])(t);
				},
				function (e) {
					for (u.status = 'rejected', u.reason = e, e = 0; e < a.length; e++)
						(0, a[e])(void 0);
				}
			),
			u
		);
	}
	var ms = g.S;
	g.S = function (l, t) {
		typeof t == 'object' &&
			t !== null &&
			typeof t.then == 'function' &&
			_r(l, t),
			ms !== null && ms(l, t);
	};
	var Ba = T(null);
	function Uf() {
		var l = Ba.current;
		return l !== null ? l : vl.pooledCache;
	}
	function Ve(l, t) {
		t === null ? D(Ba, Ba.current) : D(Ba, t.pool);
	}
	function Ss() {
		var l = Uf();
		return l === null ? null : { parent: _l._currentValue, pool: l };
	}
	var Gu = Error(y(460)),
		gs = Error(y(474)),
		Le = Error(y(542)),
		Rf = { then: function () {} };
	function bs(l) {
		return (l = l.status), l === 'fulfilled' || l === 'rejected';
	}
	function Ke() {}
	function Es(l, t, a) {
		switch (
			((a = l[a]),
			a === void 0 ? l.push(t) : a !== t && (t.then(Ke, Ke), (t = a)),
			t.status)
		) {
			case 'fulfilled':
				return t.value;
			case 'rejected':
				throw ((l = t.reason), Ts(l), l);
			default:
				if (typeof t.status == 'string') t.then(Ke, Ke);
				else {
					if (((l = vl), l !== null && 100 < l.shellSuspendCounter))
						throw Error(y(482));
					(l = t),
						(l.status = 'pending'),
						l.then(
							function (u) {
								if (t.status === 'pending') {
									var e = t;
									(e.status = 'fulfilled'), (e.value = u);
								}
							},
							function (u) {
								if (t.status === 'pending') {
									var e = t;
									(e.status = 'rejected'), (e.reason = u);
								}
							}
						);
				}
				switch (t.status) {
					case 'fulfilled':
						return t.value;
					case 'rejected':
						throw ((l = t.reason), Ts(l), l);
				}
				throw ((Xu = t), Gu);
		}
	}
	var Xu = null;
	function As() {
		if (Xu === null) throw Error(y(459));
		var l = Xu;
		return (Xu = null), l;
	}
	function Ts(l) {
		if (l === Gu || l === Le) throw Error(y(483));
	}
	var $t = !1;
	function Nf(l) {
		l.updateQueue = {
			baseState: l.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: { pending: null, lanes: 0, hiddenCallbacks: null },
			callbacks: null,
		};
	}
	function Cf(l, t) {
		(l = l.updateQueue),
			t.updateQueue === l &&
				(t.updateQueue = {
					baseState: l.baseState,
					firstBaseUpdate: l.firstBaseUpdate,
					lastBaseUpdate: l.lastBaseUpdate,
					shared: l.shared,
					callbacks: null,
				});
	}
	function Ft(l) {
		return { lane: l, tag: 0, payload: null, callback: null, next: null };
	}
	function Pt(l, t, a) {
		var u = l.updateQueue;
		if (u === null) return null;
		if (((u = u.shared), (el & 2) !== 0)) {
			var e = u.pending;
			return (
				e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)),
				(u.pending = t),
				(t = Ye(l)),
				is(l, null, a),
				t
			);
		}
		return qe(l, u, t, a), Ye(l);
	}
	function Qu(l, t, a) {
		if (
			((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194048) !== 0))
		) {
			var u = t.lanes;
			(u &= l.pendingLanes), (a |= u), (t.lanes = a), hi(l, a);
		}
	}
	function Hf(l, t) {
		var a = l.updateQueue,
			u = l.alternate;
		if (u !== null && ((u = u.updateQueue), a === u)) {
			var e = null,
				n = null;
			if (((a = a.firstBaseUpdate), a !== null)) {
				do {
					var f = {
						lane: a.lane,
						tag: a.tag,
						payload: a.payload,
						callback: null,
						next: null,
					};
					n === null ? (e = n = f) : (n = n.next = f), (a = a.next);
				} while (a !== null);
				n === null ? (e = n = t) : (n = n.next = t);
			} else e = n = t;
			(a = {
				baseState: u.baseState,
				firstBaseUpdate: e,
				lastBaseUpdate: n,
				shared: u.shared,
				callbacks: u.callbacks,
			}),
				(l.updateQueue = a);
			return;
		}
		(l = a.lastBaseUpdate),
			l === null ? (a.firstBaseUpdate = t) : (l.next = t),
			(a.lastBaseUpdate = t);
	}
	var pf = !1;
	function Zu() {
		if (pf) {
			var l = Ia;
			if (l !== null) throw l;
		}
	}
	function Vu(l, t, a, u) {
		pf = !1;
		var e = l.updateQueue;
		$t = !1;
		var n = e.firstBaseUpdate,
			f = e.lastBaseUpdate,
			c = e.shared.pending;
		if (c !== null) {
			e.shared.pending = null;
			var i = c,
				v = i.next;
			(i.next = null), f === null ? (n = v) : (f.next = v), (f = i);
			var S = l.alternate;
			S !== null &&
				((S = S.updateQueue),
				(c = S.lastBaseUpdate),
				c !== f &&
					(c === null ? (S.firstBaseUpdate = v) : (c.next = v),
					(S.lastBaseUpdate = i)));
		}
		if (n !== null) {
			var E = e.baseState;
			(f = 0), (S = v = i = null), (c = n);
			do {
				var h = c.lane & -536870913,
					m = h !== c.lane;
				if (m ? (P & h) === h : (u & h) === h) {
					h !== 0 && h === Pa && (pf = !0),
						S !== null &&
							(S = S.next =
								{
									lane: 0,
									tag: c.tag,
									payload: c.payload,
									callback: null,
									next: null,
								});
					l: {
						var X = l,
							q = c;
						h = t;
						var il = a;
						switch (q.tag) {
							case 1:
								if (((X = q.payload), typeof X == 'function')) {
									E = X.call(il, E, h);
									break l;
								}
								E = X;
								break l;
							case 3:
								X.flags = (X.flags & -65537) | 128;
							case 0:
								if (
									((X = q.payload),
									(h = typeof X == 'function' ? X.call(il, E, h) : X),
									h == null)
								)
									break l;
								E = N({}, E, h);
								break l;
							case 2:
								$t = !0;
						}
					}
					(h = c.callback),
						h !== null &&
							((l.flags |= 64),
							m && (l.flags |= 8192),
							(m = e.callbacks),
							m === null ? (e.callbacks = [h]) : m.push(h));
				} else
					(m = {
						lane: h,
						tag: c.tag,
						payload: c.payload,
						callback: c.callback,
						next: null,
					}),
						S === null ? ((v = S = m), (i = E)) : (S = S.next = m),
						(f |= h);
				if (((c = c.next), c === null)) {
					if (((c = e.shared.pending), c === null)) break;
					(m = c),
						(c = m.next),
						(m.next = null),
						(e.lastBaseUpdate = m),
						(e.shared.pending = null);
				}
			} while (!0);
			S === null && (i = E),
				(e.baseState = i),
				(e.firstBaseUpdate = v),
				(e.lastBaseUpdate = S),
				n === null && (e.shared.lanes = 0),
				(fa |= f),
				(l.lanes = f),
				(l.memoizedState = E);
		}
	}
	function Ms(l, t) {
		if (typeof l != 'function') throw Error(y(191, l));
		l.call(t);
	}
	function Os(l, t) {
		var a = l.callbacks;
		if (a !== null)
			for (l.callbacks = null, l = 0; l < a.length; l++) Ms(a[l], t);
	}
	var lu = T(null),
		Je = T(0);
	function Ds(l, t) {
		(l = Zt), D(Je, l), D(lu, t), (Zt = l | t.baseLanes);
	}
	function xf() {
		D(Je, Zt), D(lu, lu.current);
	}
	function qf() {
		(Zt = Je.current), _(lu), _(Je);
	}
	var It = 0,
		V = null,
		fl = null,
		Dl = null,
		we = !1,
		tu = !1,
		Ua = !1,
		We = 0,
		Lu = 0,
		au = null,
		Ur = 0;
	function Al() {
		throw Error(y(321));
	}
	function Yf(l, t) {
		if (t === null) return !1;
		for (var a = 0; a < t.length && a < l.length; a++)
			if (!at(l[a], t[a])) return !1;
		return !0;
	}
	function jf(l, t, a, u, e, n) {
		return (
			(It = n),
			(V = t),
			(t.memoizedState = null),
			(t.updateQueue = null),
			(t.lanes = 0),
			(g.H = l === null || l.memoizedState === null ? i0 : s0),
			(Ua = !1),
			(n = a(u, e)),
			(Ua = !1),
			tu && (n = _s(t, a, u, e)),
			zs(l),
			n
		);
	}
	function zs(l) {
		g.H = ln;
		var t = fl !== null && fl.next !== null;
		if (((It = 0), (Dl = fl = V = null), (we = !1), (Lu = 0), (au = null), t))
			throw Error(y(300));
		l === null ||
			Hl ||
			((l = l.dependencies), l !== null && Qe(l) && (Hl = !0));
	}
	function _s(l, t, a, u) {
		V = l;
		var e = 0;
		do {
			if ((tu && (au = null), (Lu = 0), (tu = !1), 25 <= e))
				throw Error(y(301));
			if (((e += 1), (Dl = fl = null), l.updateQueue != null)) {
				var n = l.updateQueue;
				(n.lastEffect = null),
					(n.events = null),
					(n.stores = null),
					n.memoCache != null && (n.memoCache.index = 0);
			}
			(g.H = qr), (n = t(a, u));
		} while (tu);
		return n;
	}
	function Rr() {
		var l = g.H,
			t = l.useState()[0];
		return (
			(t = typeof t.then == 'function' ? Ku(t) : t),
			(l = l.useState()[0]),
			(fl !== null ? fl.memoizedState : null) !== l && (V.flags |= 1024),
			t
		);
	}
	function Gf() {
		var l = We !== 0;
		return (We = 0), l;
	}
	function Xf(l, t, a) {
		(t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~a);
	}
	function Qf(l) {
		if (we) {
			for (l = l.memoizedState; l !== null; ) {
				var t = l.queue;
				t !== null && (t.pending = null), (l = l.next);
			}
			we = !1;
		}
		(It = 0), (Dl = fl = V = null), (tu = !1), (Lu = We = 0), (au = null);
	}
	function kl() {
		var l = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null,
		};
		return Dl === null ? (V.memoizedState = Dl = l) : (Dl = Dl.next = l), Dl;
	}
	function zl() {
		if (fl === null) {
			var l = V.alternate;
			l = l !== null ? l.memoizedState : null;
		} else l = fl.next;
		var t = Dl === null ? V.memoizedState : Dl.next;
		if (t !== null) (Dl = t), (fl = l);
		else {
			if (l === null)
				throw V.alternate === null ? Error(y(467)) : Error(y(310));
			(fl = l),
				(l = {
					memoizedState: fl.memoizedState,
					baseState: fl.baseState,
					baseQueue: fl.baseQueue,
					queue: fl.queue,
					next: null,
				}),
				Dl === null ? (V.memoizedState = Dl = l) : (Dl = Dl.next = l);
		}
		return Dl;
	}
	function Zf() {
		return { lastEffect: null, events: null, stores: null, memoCache: null };
	}
	function Ku(l) {
		var t = Lu;
		return (
			(Lu += 1),
			au === null && (au = []),
			(l = Es(au, l, t)),
			(t = V),
			(Dl === null ? t.memoizedState : Dl.next) === null &&
				((t = t.alternate),
				(g.H = t === null || t.memoizedState === null ? i0 : s0)),
			l
		);
	}
	function ke(l) {
		if (l !== null && typeof l == 'object') {
			if (typeof l.then == 'function') return Ku(l);
			if (l.$$typeof === yl) return Vl(l);
		}
		throw Error(y(438, String(l)));
	}
	function Vf(l) {
		var t = null,
			a = V.updateQueue;
		if ((a !== null && (t = a.memoCache), t == null)) {
			var u = V.alternate;
			u !== null &&
				((u = u.updateQueue),
				u !== null &&
					((u = u.memoCache),
					u != null &&
						(t = {
							data: u.data.map(function (e) {
								return e.slice();
							}),
							index: 0,
						})));
		}
		if (
			(t == null && (t = { data: [], index: 0 }),
			a === null && ((a = Zf()), (V.updateQueue = a)),
			(a.memoCache = t),
			(a = t.data[t.index]),
			a === void 0)
		)
			for (a = t.data[t.index] = Array(l), u = 0; u < l; u++) a[u] = Lt;
		return t.index++, a;
	}
	function qt(l, t) {
		return typeof t == 'function' ? t(l) : t;
	}
	function $e(l) {
		var t = zl();
		return Lf(t, fl, l);
	}
	function Lf(l, t, a) {
		var u = l.queue;
		if (u === null) throw Error(y(311));
		u.lastRenderedReducer = a;
		var e = l.baseQueue,
			n = u.pending;
		if (n !== null) {
			if (e !== null) {
				var f = e.next;
				(e.next = n.next), (n.next = f);
			}
			(t.baseQueue = e = n), (u.pending = null);
		}
		if (((n = l.baseState), e === null)) l.memoizedState = n;
		else {
			t = e.next;
			var c = (f = null),
				i = null,
				v = t,
				S = !1;
			do {
				var E = v.lane & -536870913;
				if (E !== v.lane ? (P & E) === E : (It & E) === E) {
					var h = v.revertLane;
					if (h === 0)
						i !== null &&
							(i = i.next =
								{
									lane: 0,
									revertLane: 0,
									action: v.action,
									hasEagerState: v.hasEagerState,
									eagerState: v.eagerState,
									next: null,
								}),
							E === Pa && (S = !0);
					else if ((It & h) === h) {
						(v = v.next), h === Pa && (S = !0);
						continue;
					} else
						(E = {
							lane: 0,
							revertLane: v.revertLane,
							action: v.action,
							hasEagerState: v.hasEagerState,
							eagerState: v.eagerState,
							next: null,
						}),
							i === null ? ((c = i = E), (f = n)) : (i = i.next = E),
							(V.lanes |= h),
							(fa |= h);
					(E = v.action),
						Ua && a(n, E),
						(n = v.hasEagerState ? v.eagerState : a(n, E));
				} else
					(h = {
						lane: E,
						revertLane: v.revertLane,
						action: v.action,
						hasEagerState: v.hasEagerState,
						eagerState: v.eagerState,
						next: null,
					}),
						i === null ? ((c = i = h), (f = n)) : (i = i.next = h),
						(V.lanes |= E),
						(fa |= E);
				v = v.next;
			} while (v !== null && v !== t);
			if (
				(i === null ? (f = n) : (i.next = c),
				!at(n, l.memoizedState) && ((Hl = !0), S && ((a = Ia), a !== null)))
			)
				throw a;
			(l.memoizedState = n),
				(l.baseState = f),
				(l.baseQueue = i),
				(u.lastRenderedState = n);
		}
		return e === null && (u.lanes = 0), [l.memoizedState, u.dispatch];
	}
	function Kf(l) {
		var t = zl(),
			a = t.queue;
		if (a === null) throw Error(y(311));
		a.lastRenderedReducer = l;
		var u = a.dispatch,
			e = a.pending,
			n = t.memoizedState;
		if (e !== null) {
			a.pending = null;
			var f = (e = e.next);
			do (n = l(n, f.action)), (f = f.next);
			while (f !== e);
			at(n, t.memoizedState) || (Hl = !0),
				(t.memoizedState = n),
				t.baseQueue === null && (t.baseState = n),
				(a.lastRenderedState = n);
		}
		return [n, u];
	}
	function Bs(l, t, a) {
		var u = V,
			e = zl(),
			n = al;
		if (n) {
			if (a === void 0) throw Error(y(407));
			a = a();
		} else a = t();
		var f = !at((fl || e).memoizedState, a);
		f && ((e.memoizedState = a), (Hl = !0)), (e = e.queue);
		var c = Ns.bind(null, u, e, l);
		if (
			(Ju(2048, 8, c, [l]),
			e.getSnapshot !== t || f || (Dl !== null && Dl.memoizedState.tag & 1))
		) {
			if (
				((u.flags |= 2048),
				uu(9, Fe(), Rs.bind(null, u, e, a, t), null),
				vl === null)
			)
				throw Error(y(349));
			n || (It & 124) !== 0 || Us(u, t, a);
		}
		return a;
	}
	function Us(l, t, a) {
		(l.flags |= 16384),
			(l = { getSnapshot: t, value: a }),
			(t = V.updateQueue),
			t === null
				? ((t = Zf()), (V.updateQueue = t), (t.stores = [l]))
				: ((a = t.stores), a === null ? (t.stores = [l]) : a.push(l));
	}
	function Rs(l, t, a, u) {
		(t.value = a), (t.getSnapshot = u), Cs(t) && Hs(l);
	}
	function Ns(l, t, a) {
		return a(function () {
			Cs(t) && Hs(l);
		});
	}
	function Cs(l) {
		var t = l.getSnapshot;
		l = l.value;
		try {
			var a = t();
			return !at(l, a);
		} catch {
			return !0;
		}
	}
	function Hs(l) {
		var t = Wa(l, 2);
		t !== null && it(t, l, 2);
	}
	function Jf(l) {
		var t = kl();
		if (typeof l == 'function') {
			var a = l;
			if (((l = a()), Ua)) {
				Jt(!0);
				try {
					a();
				} finally {
					Jt(!1);
				}
			}
		}
		return (
			(t.memoizedState = t.baseState = l),
			(t.queue = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: qt,
				lastRenderedState: l,
			}),
			t
		);
	}
	function ps(l, t, a, u) {
		return (l.baseState = a), Lf(l, fl, typeof u == 'function' ? u : qt);
	}
	function Nr(l, t, a, u, e) {
		if (Ie(l)) throw Error(y(485));
		if (((l = t.action), l !== null)) {
			var n = {
				payload: e,
				action: l,
				next: null,
				isTransition: !0,
				status: 'pending',
				value: null,
				reason: null,
				listeners: [],
				then: function (f) {
					n.listeners.push(f);
				},
			};
			g.T !== null ? a(!0) : (n.isTransition = !1),
				u(n),
				(a = t.pending),
				a === null
					? ((n.next = t.pending = n), xs(t, n))
					: ((n.next = a.next), (t.pending = a.next = n));
		}
	}
	function xs(l, t) {
		var a = t.action,
			u = t.payload,
			e = l.state;
		if (t.isTransition) {
			var n = g.T,
				f = {};
			g.T = f;
			try {
				var c = a(e, u),
					i = g.S;
				i !== null && i(f, c), qs(l, t, c);
			} catch (v) {
				wf(l, t, v);
			} finally {
				g.T = n;
			}
		} else
			try {
				(n = a(e, u)), qs(l, t, n);
			} catch (v) {
				wf(l, t, v);
			}
	}
	function qs(l, t, a) {
		a !== null && typeof a == 'object' && typeof a.then == 'function'
			? a.then(
					function (u) {
						Ys(l, t, u);
					},
					function (u) {
						return wf(l, t, u);
					}
			  )
			: Ys(l, t, a);
	}
	function Ys(l, t, a) {
		(t.status = 'fulfilled'),
			(t.value = a),
			js(t),
			(l.state = a),
			(t = l.pending),
			t !== null &&
				((a = t.next),
				a === t ? (l.pending = null) : ((a = a.next), (t.next = a), xs(l, a)));
	}
	function wf(l, t, a) {
		var u = l.pending;
		if (((l.pending = null), u !== null)) {
			u = u.next;
			do (t.status = 'rejected'), (t.reason = a), js(t), (t = t.next);
			while (t !== u);
		}
		l.action = null;
	}
	function js(l) {
		l = l.listeners;
		for (var t = 0; t < l.length; t++) (0, l[t])();
	}
	function Gs(l, t) {
		return t;
	}
	function Xs(l, t) {
		if (al) {
			var a = vl.formState;
			if (a !== null) {
				l: {
					var u = V;
					if (al) {
						if (bl) {
							t: {
								for (var e = bl, n = Mt; e.nodeType !== 8; ) {
									if (!n) {
										e = null;
										break t;
									}
									if (((e = At(e.nextSibling)), e === null)) {
										e = null;
										break t;
									}
								}
								(n = e.data), (e = n === 'F!' || n === 'F' ? e : null);
							}
							if (e) {
								(bl = At(e.nextSibling)), (u = e.data === 'F!');
								break l;
							}
						}
						Da(u);
					}
					u = !1;
				}
				u && (t = a[0]);
			}
		}
		return (
			(a = kl()),
			(a.memoizedState = a.baseState = t),
			(u = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Gs,
				lastRenderedState: t,
			}),
			(a.queue = u),
			(a = n0.bind(null, V, u)),
			(u.dispatch = a),
			(u = Jf(!1)),
			(n = Pf.bind(null, V, !1, u.queue)),
			(u = kl()),
			(e = { state: t, dispatch: null, action: l, pending: null }),
			(u.queue = e),
			(a = Nr.bind(null, V, e, n, a)),
			(e.dispatch = a),
			(u.memoizedState = l),
			[t, a, !1]
		);
	}
	function Qs(l) {
		var t = zl();
		return Zs(t, fl, l);
	}
	function Zs(l, t, a) {
		if (
			((t = Lf(l, t, Gs)[0]),
			(l = $e(qt)[0]),
			typeof t == 'object' && t !== null && typeof t.then == 'function')
		)
			try {
				var u = Ku(t);
			} catch (f) {
				throw f === Gu ? Le : f;
			}
		else u = t;
		t = zl();
		var e = t.queue,
			n = e.dispatch;
		return (
			a !== t.memoizedState &&
				((V.flags |= 2048), uu(9, Fe(), Cr.bind(null, e, a), null)),
			[u, n, l]
		);
	}
	function Cr(l, t) {
		l.action = t;
	}
	function Vs(l) {
		var t = zl(),
			a = fl;
		if (a !== null) return Zs(t, a, l);
		zl(), (t = t.memoizedState), (a = zl());
		var u = a.queue.dispatch;
		return (a.memoizedState = l), [t, u, !1];
	}
	function uu(l, t, a, u) {
		return (
			(l = { tag: l, create: a, deps: u, inst: t, next: null }),
			(t = V.updateQueue),
			t === null && ((t = Zf()), (V.updateQueue = t)),
			(a = t.lastEffect),
			a === null
				? (t.lastEffect = l.next = l)
				: ((u = a.next), (a.next = l), (l.next = u), (t.lastEffect = l)),
			l
		);
	}
	function Fe() {
		return { destroy: void 0, resource: void 0 };
	}
	function Ls() {
		return zl().memoizedState;
	}
	function Pe(l, t, a, u) {
		var e = kl();
		(u = u === void 0 ? null : u),
			(V.flags |= l),
			(e.memoizedState = uu(1 | t, Fe(), a, u));
	}
	function Ju(l, t, a, u) {
		var e = zl();
		u = u === void 0 ? null : u;
		var n = e.memoizedState.inst;
		fl !== null && u !== null && Yf(u, fl.memoizedState.deps)
			? (e.memoizedState = uu(t, n, a, u))
			: ((V.flags |= l), (e.memoizedState = uu(1 | t, n, a, u)));
	}
	function Ks(l, t) {
		Pe(8390656, 8, l, t);
	}
	function Js(l, t) {
		Ju(2048, 8, l, t);
	}
	function ws(l, t) {
		return Ju(4, 2, l, t);
	}
	function Ws(l, t) {
		return Ju(4, 4, l, t);
	}
	function ks(l, t) {
		if (typeof t == 'function') {
			l = l();
			var a = t(l);
			return function () {
				typeof a == 'function' ? a() : t(null);
			};
		}
		if (t != null)
			return (
				(l = l()),
				(t.current = l),
				function () {
					t.current = null;
				}
			);
	}
	function $s(l, t, a) {
		(a = a != null ? a.concat([l]) : null), Ju(4, 4, ks.bind(null, t, l), a);
	}
	function Wf() {}
	function Fs(l, t) {
		var a = zl();
		t = t === void 0 ? null : t;
		var u = a.memoizedState;
		return t !== null && Yf(t, u[1]) ? u[0] : ((a.memoizedState = [l, t]), l);
	}
	function Ps(l, t) {
		var a = zl();
		t = t === void 0 ? null : t;
		var u = a.memoizedState;
		if (t !== null && Yf(t, u[1])) return u[0];
		if (((u = l()), Ua)) {
			Jt(!0);
			try {
				l();
			} finally {
				Jt(!1);
			}
		}
		return (a.memoizedState = [u, t]), u;
	}
	function kf(l, t, a) {
		return a === void 0 || (It & 1073741824) !== 0
			? (l.memoizedState = t)
			: ((l.memoizedState = a), (l = td()), (V.lanes |= l), (fa |= l), a);
	}
	function Is(l, t, a, u) {
		return at(a, t)
			? a
			: lu.current !== null
			? ((l = kf(l, a, u)), at(l, t) || (Hl = !0), l)
			: (It & 42) === 0
			? ((Hl = !0), (l.memoizedState = a))
			: ((l = td()), (V.lanes |= l), (fa |= l), t);
	}
	function l0(l, t, a, u, e) {
		var n = z.p;
		z.p = n !== 0 && 8 > n ? n : 8;
		var f = g.T,
			c = {};
		(g.T = c), Pf(l, !1, t, a);
		try {
			var i = e(),
				v = g.S;
			if (
				(v !== null && v(c, i),
				i !== null && typeof i == 'object' && typeof i.then == 'function')
			) {
				var S = Br(i, u);
				wu(l, t, S, ct(l));
			} else wu(l, t, u, ct(l));
		} catch (E) {
			wu(l, t, { then: function () {}, status: 'rejected', reason: E }, ct());
		} finally {
			(z.p = n), (g.T = f);
		}
	}
	function Hr() {}
	function $f(l, t, a, u) {
		if (l.tag !== 5) throw Error(y(476));
		var e = t0(l).queue;
		l0(
			l,
			e,
			t,
			j,
			a === null
				? Hr
				: function () {
						return a0(l), a(u);
				  }
		);
	}
	function t0(l) {
		var t = l.memoizedState;
		if (t !== null) return t;
		t = {
			memoizedState: j,
			baseState: j,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: qt,
				lastRenderedState: j,
			},
			next: null,
		};
		var a = {};
		return (
			(t.next = {
				memoizedState: a,
				baseState: a,
				baseQueue: null,
				queue: {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: qt,
					lastRenderedState: a,
				},
				next: null,
			}),
			(l.memoizedState = t),
			(l = l.alternate),
			l !== null && (l.memoizedState = t),
			t
		);
	}
	function a0(l) {
		var t = t0(l).next.queue;
		wu(l, t, {}, ct());
	}
	function Ff() {
		return Vl(oe);
	}
	function u0() {
		return zl().memoizedState;
	}
	function e0() {
		return zl().memoizedState;
	}
	function pr(l) {
		for (var t = l.return; t !== null; ) {
			switch (t.tag) {
				case 24:
				case 3:
					var a = ct();
					l = Ft(a);
					var u = Pt(t, l, a);
					u !== null && (it(u, t, a), Qu(u, t, a)),
						(t = { cache: _f() }),
						(l.payload = t);
					return;
			}
			t = t.return;
		}
	}
	function xr(l, t, a) {
		var u = ct();
		(a = {
			lane: u,
			revertLane: 0,
			action: a,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
			Ie(l)
				? f0(t, a)
				: ((a = Sf(l, t, a, u)), a !== null && (it(a, l, u), c0(a, t, u)));
	}
	function n0(l, t, a) {
		var u = ct();
		wu(l, t, a, u);
	}
	function wu(l, t, a, u) {
		var e = {
			lane: u,
			revertLane: 0,
			action: a,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		};
		if (Ie(l)) f0(t, e);
		else {
			var n = l.alternate;
			if (
				l.lanes === 0 &&
				(n === null || n.lanes === 0) &&
				((n = t.lastRenderedReducer), n !== null)
			)
				try {
					var f = t.lastRenderedState,
						c = n(f, a);
					if (((e.hasEagerState = !0), (e.eagerState = c), at(c, f)))
						return qe(l, t, e, 0), vl === null && xe(), !1;
				} catch {
				} finally {
				}
			if (((a = Sf(l, t, e, u)), a !== null))
				return it(a, l, u), c0(a, t, u), !0;
		}
		return !1;
	}
	function Pf(l, t, a, u) {
		if (
			((u = {
				lane: 2,
				revertLane: Rc(),
				action: u,
				hasEagerState: !1,
				eagerState: null,
				next: null,
			}),
			Ie(l))
		) {
			if (t) throw Error(y(479));
		} else (t = Sf(l, a, u, 2)), t !== null && it(t, l, 2);
	}
	function Ie(l) {
		var t = l.alternate;
		return l === V || (t !== null && t === V);
	}
	function f0(l, t) {
		tu = we = !0;
		var a = l.pending;
		a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
			(l.pending = t);
	}
	function c0(l, t, a) {
		if ((a & 4194048) !== 0) {
			var u = t.lanes;
			(u &= l.pendingLanes), (a |= u), (t.lanes = a), hi(l, a);
		}
	}
	var ln = {
			readContext: Vl,
			use: ke,
			useCallback: Al,
			useContext: Al,
			useEffect: Al,
			useImperativeHandle: Al,
			useLayoutEffect: Al,
			useInsertionEffect: Al,
			useMemo: Al,
			useReducer: Al,
			useRef: Al,
			useState: Al,
			useDebugValue: Al,
			useDeferredValue: Al,
			useTransition: Al,
			useSyncExternalStore: Al,
			useId: Al,
			useHostTransitionStatus: Al,
			useFormState: Al,
			useActionState: Al,
			useOptimistic: Al,
			useMemoCache: Al,
			useCacheRefresh: Al,
		},
		i0 = {
			readContext: Vl,
			use: ke,
			useCallback: function (l, t) {
				return (kl().memoizedState = [l, t === void 0 ? null : t]), l;
			},
			useContext: Vl,
			useEffect: Ks,
			useImperativeHandle: function (l, t, a) {
				(a = a != null ? a.concat([l]) : null),
					Pe(4194308, 4, ks.bind(null, t, l), a);
			},
			useLayoutEffect: function (l, t) {
				return Pe(4194308, 4, l, t);
			},
			useInsertionEffect: function (l, t) {
				Pe(4, 2, l, t);
			},
			useMemo: function (l, t) {
				var a = kl();
				t = t === void 0 ? null : t;
				var u = l();
				if (Ua) {
					Jt(!0);
					try {
						l();
					} finally {
						Jt(!1);
					}
				}
				return (a.memoizedState = [u, t]), u;
			},
			useReducer: function (l, t, a) {
				var u = kl();
				if (a !== void 0) {
					var e = a(t);
					if (Ua) {
						Jt(!0);
						try {
							a(t);
						} finally {
							Jt(!1);
						}
					}
				} else e = t;
				return (
					(u.memoizedState = u.baseState = e),
					(l = {
						pending: null,
						lanes: 0,
						dispatch: null,
						lastRenderedReducer: l,
						lastRenderedState: e,
					}),
					(u.queue = l),
					(l = l.dispatch = xr.bind(null, V, l)),
					[u.memoizedState, l]
				);
			},
			useRef: function (l) {
				var t = kl();
				return (l = { current: l }), (t.memoizedState = l);
			},
			useState: function (l) {
				l = Jf(l);
				var t = l.queue,
					a = n0.bind(null, V, t);
				return (t.dispatch = a), [l.memoizedState, a];
			},
			useDebugValue: Wf,
			useDeferredValue: function (l, t) {
				var a = kl();
				return kf(a, l, t);
			},
			useTransition: function () {
				var l = Jf(!1);
				return (
					(l = l0.bind(null, V, l.queue, !0, !1)),
					(kl().memoizedState = l),
					[!1, l]
				);
			},
			useSyncExternalStore: function (l, t, a) {
				var u = V,
					e = kl();
				if (al) {
					if (a === void 0) throw Error(y(407));
					a = a();
				} else {
					if (((a = t()), vl === null)) throw Error(y(349));
					(P & 124) !== 0 || Us(u, t, a);
				}
				e.memoizedState = a;
				var n = { value: a, getSnapshot: t };
				return (
					(e.queue = n),
					Ks(Ns.bind(null, u, n, l), [l]),
					(u.flags |= 2048),
					uu(9, Fe(), Rs.bind(null, u, n, a, t), null),
					a
				);
			},
			useId: function () {
				var l = kl(),
					t = vl.identifierPrefix;
				if (al) {
					var a = Ht,
						u = Ct;
					(a = (u & ~(1 << (32 - tt(u) - 1))).toString(32) + a),
						(t = '«' + t + 'R' + a),
						(a = We++),
						0 < a && (t += 'H' + a.toString(32)),
						(t += '»');
				} else (a = Ur++), (t = '«' + t + 'r' + a.toString(32) + '»');
				return (l.memoizedState = t);
			},
			useHostTransitionStatus: Ff,
			useFormState: Xs,
			useActionState: Xs,
			useOptimistic: function (l) {
				var t = kl();
				t.memoizedState = t.baseState = l;
				var a = {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: null,
					lastRenderedState: null,
				};
				return (
					(t.queue = a), (t = Pf.bind(null, V, !0, a)), (a.dispatch = t), [l, t]
				);
			},
			useMemoCache: Vf,
			useCacheRefresh: function () {
				return (kl().memoizedState = pr.bind(null, V));
			},
		},
		s0 = {
			readContext: Vl,
			use: ke,
			useCallback: Fs,
			useContext: Vl,
			useEffect: Js,
			useImperativeHandle: $s,
			useInsertionEffect: ws,
			useLayoutEffect: Ws,
			useMemo: Ps,
			useReducer: $e,
			useRef: Ls,
			useState: function () {
				return $e(qt);
			},
			useDebugValue: Wf,
			useDeferredValue: function (l, t) {
				var a = zl();
				return Is(a, fl.memoizedState, l, t);
			},
			useTransition: function () {
				var l = $e(qt)[0],
					t = zl().memoizedState;
				return [typeof l == 'boolean' ? l : Ku(l), t];
			},
			useSyncExternalStore: Bs,
			useId: u0,
			useHostTransitionStatus: Ff,
			useFormState: Qs,
			useActionState: Qs,
			useOptimistic: function (l, t) {
				var a = zl();
				return ps(a, fl, l, t);
			},
			useMemoCache: Vf,
			useCacheRefresh: e0,
		},
		qr = {
			readContext: Vl,
			use: ke,
			useCallback: Fs,
			useContext: Vl,
			useEffect: Js,
			useImperativeHandle: $s,
			useInsertionEffect: ws,
			useLayoutEffect: Ws,
			useMemo: Ps,
			useReducer: Kf,
			useRef: Ls,
			useState: function () {
				return Kf(qt);
			},
			useDebugValue: Wf,
			useDeferredValue: function (l, t) {
				var a = zl();
				return fl === null ? kf(a, l, t) : Is(a, fl.memoizedState, l, t);
			},
			useTransition: function () {
				var l = Kf(qt)[0],
					t = zl().memoizedState;
				return [typeof l == 'boolean' ? l : Ku(l), t];
			},
			useSyncExternalStore: Bs,
			useId: u0,
			useHostTransitionStatus: Ff,
			useFormState: Vs,
			useActionState: Vs,
			useOptimistic: function (l, t) {
				var a = zl();
				return fl !== null
					? ps(a, fl, l, t)
					: ((a.baseState = l), [l, a.queue.dispatch]);
			},
			useMemoCache: Vf,
			useCacheRefresh: e0,
		},
		eu = null,
		Wu = 0;
	function tn(l) {
		var t = Wu;
		return (Wu += 1), eu === null && (eu = []), Es(eu, l, t);
	}
	function ku(l, t) {
		(t = t.props.ref), (l.ref = t !== void 0 ? t : null);
	}
	function an(l, t) {
		throw t.$$typeof === I
			? Error(y(525))
			: ((l = Object.prototype.toString.call(t)),
			  Error(
					y(
						31,
						l === '[object Object]'
							? 'object with keys {' + Object.keys(t).join(', ') + '}'
							: l
					)
			  ));
	}
	function d0(l) {
		var t = l._init;
		return t(l._payload);
	}
	function o0(l) {
		function t(o, d) {
			if (l) {
				var r = o.deletions;
				r === null ? ((o.deletions = [d]), (o.flags |= 16)) : r.push(d);
			}
		}
		function a(o, d) {
			if (!l) return null;
			for (; d !== null; ) t(o, d), (d = d.sibling);
			return null;
		}
		function u(o) {
			for (var d = new Map(); o !== null; )
				o.key !== null ? d.set(o.key, o) : d.set(o.index, o), (o = o.sibling);
			return d;
		}
		function e(o, d) {
			return (o = Nt(o, d)), (o.index = 0), (o.sibling = null), o;
		}
		function n(o, d, r) {
			return (
				(o.index = r),
				l
					? ((r = o.alternate),
					  r !== null
							? ((r = r.index), r < d ? ((o.flags |= 67108866), d) : r)
							: ((o.flags |= 67108866), d))
					: ((o.flags |= 1048576), d)
			);
		}
		function f(o) {
			return l && o.alternate === null && (o.flags |= 67108866), o;
		}
		function c(o, d, r, b) {
			return d === null || d.tag !== 6
				? ((d = bf(r, o.mode, b)), (d.return = o), d)
				: ((d = e(d, r)), (d.return = o), d);
		}
		function i(o, d, r, b) {
			var B = r.type;
			return B === Ml
				? S(o, d, r.props.children, b, r.key)
				: d !== null &&
				  (d.elementType === B ||
						(typeof B == 'object' &&
							B !== null &&
							B.$$typeof === Yl &&
							d0(B) === d.type))
				? ((d = e(d, r.props)), ku(d, r), (d.return = o), d)
				: ((d = je(r.type, r.key, r.props, null, o.mode, b)),
				  ku(d, r),
				  (d.return = o),
				  d);
		}
		function v(o, d, r, b) {
			return d === null ||
				d.tag !== 4 ||
				d.stateNode.containerInfo !== r.containerInfo ||
				d.stateNode.implementation !== r.implementation
				? ((d = Ef(r, o.mode, b)), (d.return = o), d)
				: ((d = e(d, r.children || [])), (d.return = o), d);
		}
		function S(o, d, r, b, B) {
			return d === null || d.tag !== 7
				? ((d = Aa(r, o.mode, b, B)), (d.return = o), d)
				: ((d = e(d, r)), (d.return = o), d);
		}
		function E(o, d, r) {
			if (
				(typeof d == 'string' && d !== '') ||
				typeof d == 'number' ||
				typeof d == 'bigint'
			)
				return (d = bf('' + d, o.mode, r)), (d.return = o), d;
			if (typeof d == 'object' && d !== null) {
				switch (d.$$typeof) {
					case $:
						return (
							(r = je(d.type, d.key, d.props, null, o.mode, r)),
							ku(r, d),
							(r.return = o),
							r
						);
					case sl:
						return (d = Ef(d, o.mode, r)), (d.return = o), d;
					case Yl:
						var b = d._init;
						return (d = b(d._payload)), E(o, d, r);
				}
				if (Nl(d) || rl(d))
					return (d = Aa(d, o.mode, r, null)), (d.return = o), d;
				if (typeof d.then == 'function') return E(o, tn(d), r);
				if (d.$$typeof === yl) return E(o, Ze(o, d), r);
				an(o, d);
			}
			return null;
		}
		function h(o, d, r, b) {
			var B = d !== null ? d.key : null;
			if (
				(typeof r == 'string' && r !== '') ||
				typeof r == 'number' ||
				typeof r == 'bigint'
			)
				return B !== null ? null : c(o, d, '' + r, b);
			if (typeof r == 'object' && r !== null) {
				switch (r.$$typeof) {
					case $:
						return r.key === B ? i(o, d, r, b) : null;
					case sl:
						return r.key === B ? v(o, d, r, b) : null;
					case Yl:
						return (B = r._init), (r = B(r._payload)), h(o, d, r, b);
				}
				if (Nl(r) || rl(r)) return B !== null ? null : S(o, d, r, b, null);
				if (typeof r.then == 'function') return h(o, d, tn(r), b);
				if (r.$$typeof === yl) return h(o, d, Ze(o, r), b);
				an(o, r);
			}
			return null;
		}
		function m(o, d, r, b, B) {
			if (
				(typeof b == 'string' && b !== '') ||
				typeof b == 'number' ||
				typeof b == 'bigint'
			)
				return (o = o.get(r) || null), c(d, o, '' + b, B);
			if (typeof b == 'object' && b !== null) {
				switch (b.$$typeof) {
					case $:
						return (
							(o = o.get(b.key === null ? r : b.key) || null), i(d, o, b, B)
						);
					case sl:
						return (
							(o = o.get(b.key === null ? r : b.key) || null), v(d, o, b, B)
						);
					case Yl:
						var J = b._init;
						return (b = J(b._payload)), m(o, d, r, b, B);
				}
				if (Nl(b) || rl(b)) return (o = o.get(r) || null), S(d, o, b, B, null);
				if (typeof b.then == 'function') return m(o, d, r, tn(b), B);
				if (b.$$typeof === yl) return m(o, d, r, Ze(d, b), B);
				an(d, b);
			}
			return null;
		}
		function X(o, d, r, b) {
			for (
				var B = null, J = null, H = d, Y = (d = 0), xl = null;
				H !== null && Y < r.length;
				Y++
			) {
				H.index > Y ? ((xl = H), (H = null)) : (xl = H.sibling);
				var tl = h(o, H, r[Y], b);
				if (tl === null) {
					H === null && (H = xl);
					break;
				}
				l && H && tl.alternate === null && t(o, H),
					(d = n(tl, d, Y)),
					J === null ? (B = tl) : (J.sibling = tl),
					(J = tl),
					(H = xl);
			}
			if (Y === r.length) return a(o, H), al && Ma(o, Y), B;
			if (H === null) {
				for (; Y < r.length; Y++)
					(H = E(o, r[Y], b)),
						H !== null &&
							((d = n(H, d, Y)),
							J === null ? (B = H) : (J.sibling = H),
							(J = H));
				return al && Ma(o, Y), B;
			}
			for (H = u(H); Y < r.length; Y++)
				(xl = m(H, o, Y, r[Y], b)),
					xl !== null &&
						(l &&
							xl.alternate !== null &&
							H.delete(xl.key === null ? Y : xl.key),
						(d = n(xl, d, Y)),
						J === null ? (B = xl) : (J.sibling = xl),
						(J = xl));
			return (
				l &&
					H.forEach(function (ha) {
						return t(o, ha);
					}),
				al && Ma(o, Y),
				B
			);
		}
		function q(o, d, r, b) {
			if (r == null) throw Error(y(151));
			for (
				var B = null, J = null, H = d, Y = (d = 0), xl = null, tl = r.next();
				H !== null && !tl.done;
				Y++, tl = r.next()
			) {
				H.index > Y ? ((xl = H), (H = null)) : (xl = H.sibling);
				var ha = h(o, H, tl.value, b);
				if (ha === null) {
					H === null && (H = xl);
					break;
				}
				l && H && ha.alternate === null && t(o, H),
					(d = n(ha, d, Y)),
					J === null ? (B = ha) : (J.sibling = ha),
					(J = ha),
					(H = xl);
			}
			if (tl.done) return a(o, H), al && Ma(o, Y), B;
			if (H === null) {
				for (; !tl.done; Y++, tl = r.next())
					(tl = E(o, tl.value, b)),
						tl !== null &&
							((d = n(tl, d, Y)),
							J === null ? (B = tl) : (J.sibling = tl),
							(J = tl));
				return al && Ma(o, Y), B;
			}
			for (H = u(H); !tl.done; Y++, tl = r.next())
				(tl = m(H, o, Y, tl.value, b)),
					tl !== null &&
						(l &&
							tl.alternate !== null &&
							H.delete(tl.key === null ? Y : tl.key),
						(d = n(tl, d, Y)),
						J === null ? (B = tl) : (J.sibling = tl),
						(J = tl));
			return (
				l &&
					H.forEach(function (Yv) {
						return t(o, Yv);
					}),
				al && Ma(o, Y),
				B
			);
		}
		function il(o, d, r, b) {
			if (
				(typeof r == 'object' &&
					r !== null &&
					r.type === Ml &&
					r.key === null &&
					(r = r.props.children),
				typeof r == 'object' && r !== null)
			) {
				switch (r.$$typeof) {
					case $:
						l: {
							for (var B = r.key; d !== null; ) {
								if (d.key === B) {
									if (((B = r.type), B === Ml)) {
										if (d.tag === 7) {
											a(o, d.sibling),
												(b = e(d, r.props.children)),
												(b.return = o),
												(o = b);
											break l;
										}
									} else if (
										d.elementType === B ||
										(typeof B == 'object' &&
											B !== null &&
											B.$$typeof === Yl &&
											d0(B) === d.type)
									) {
										a(o, d.sibling),
											(b = e(d, r.props)),
											ku(b, r),
											(b.return = o),
											(o = b);
										break l;
									}
									a(o, d);
									break;
								} else t(o, d);
								d = d.sibling;
							}
							r.type === Ml
								? ((b = Aa(r.props.children, o.mode, b, r.key)),
								  (b.return = o),
								  (o = b))
								: ((b = je(r.type, r.key, r.props, null, o.mode, b)),
								  ku(b, r),
								  (b.return = o),
								  (o = b));
						}
						return f(o);
					case sl:
						l: {
							for (B = r.key; d !== null; ) {
								if (d.key === B)
									if (
										d.tag === 4 &&
										d.stateNode.containerInfo === r.containerInfo &&
										d.stateNode.implementation === r.implementation
									) {
										a(o, d.sibling),
											(b = e(d, r.children || [])),
											(b.return = o),
											(o = b);
										break l;
									} else {
										a(o, d);
										break;
									}
								else t(o, d);
								d = d.sibling;
							}
							(b = Ef(r, o.mode, b)), (b.return = o), (o = b);
						}
						return f(o);
					case Yl:
						return (B = r._init), (r = B(r._payload)), il(o, d, r, b);
				}
				if (Nl(r)) return X(o, d, r, b);
				if (rl(r)) {
					if (((B = rl(r)), typeof B != 'function')) throw Error(y(150));
					return (r = B.call(r)), q(o, d, r, b);
				}
				if (typeof r.then == 'function') return il(o, d, tn(r), b);
				if (r.$$typeof === yl) return il(o, d, Ze(o, r), b);
				an(o, r);
			}
			return (typeof r == 'string' && r !== '') ||
				typeof r == 'number' ||
				typeof r == 'bigint'
				? ((r = '' + r),
				  d !== null && d.tag === 6
						? (a(o, d.sibling), (b = e(d, r)), (b.return = o), (o = b))
						: (a(o, d), (b = bf(r, o.mode, b)), (b.return = o), (o = b)),
				  f(o))
				: a(o, d);
		}
		return function (o, d, r, b) {
			try {
				Wu = 0;
				var B = il(o, d, r, b);
				return (eu = null), B;
			} catch (H) {
				if (H === Gu || H === Le) throw H;
				var J = ut(29, H, null, o.mode);
				return (J.lanes = b), (J.return = o), J;
			} finally {
			}
		};
	}
	var nu = o0(!0),
		r0 = o0(!1),
		mt = T(null),
		Ot = null;
	function la(l) {
		var t = l.alternate;
		D(Bl, Bl.current & 1),
			D(mt, l),
			Ot === null &&
				(t === null || lu.current !== null || t.memoizedState !== null) &&
				(Ot = l);
	}
	function v0(l) {
		if (l.tag === 22) {
			if ((D(Bl, Bl.current), D(mt, l), Ot === null)) {
				var t = l.alternate;
				t !== null && t.memoizedState !== null && (Ot = l);
			}
		} else ta();
	}
	function ta() {
		D(Bl, Bl.current), D(mt, mt.current);
	}
	function Yt(l) {
		_(mt), Ot === l && (Ot = null), _(Bl);
	}
	var Bl = T(0);
	function un(l) {
		for (var t = l; t !== null; ) {
			if (t.tag === 13) {
				var a = t.memoizedState;
				if (
					a !== null &&
					((a = a.dehydrated), a === null || a.data === '$?' || Zc(a))
				)
					return t;
			} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
				if ((t.flags & 128) !== 0) return t;
			} else if (t.child !== null) {
				(t.child.return = t), (t = t.child);
				continue;
			}
			if (t === l) break;
			for (; t.sibling === null; ) {
				if (t.return === null || t.return === l) return null;
				t = t.return;
			}
			(t.sibling.return = t.return), (t = t.sibling);
		}
		return null;
	}
	function If(l, t, a, u) {
		(t = l.memoizedState),
			(a = a(u, t)),
			(a = a == null ? t : N({}, t, a)),
			(l.memoizedState = a),
			l.lanes === 0 && (l.updateQueue.baseState = a);
	}
	var lc = {
		enqueueSetState: function (l, t, a) {
			l = l._reactInternals;
			var u = ct(),
				e = Ft(u);
			(e.payload = t),
				a != null && (e.callback = a),
				(t = Pt(l, e, u)),
				t !== null && (it(t, l, u), Qu(t, l, u));
		},
		enqueueReplaceState: function (l, t, a) {
			l = l._reactInternals;
			var u = ct(),
				e = Ft(u);
			(e.tag = 1),
				(e.payload = t),
				a != null && (e.callback = a),
				(t = Pt(l, e, u)),
				t !== null && (it(t, l, u), Qu(t, l, u));
		},
		enqueueForceUpdate: function (l, t) {
			l = l._reactInternals;
			var a = ct(),
				u = Ft(a);
			(u.tag = 2),
				t != null && (u.callback = t),
				(t = Pt(l, u, a)),
				t !== null && (it(t, l, a), Qu(t, l, a));
		},
	};
	function y0(l, t, a, u, e, n, f) {
		return (
			(l = l.stateNode),
			typeof l.shouldComponentUpdate == 'function'
				? l.shouldComponentUpdate(u, n, f)
				: t.prototype && t.prototype.isPureReactComponent
				? !Nu(a, u) || !Nu(e, n)
				: !0
		);
	}
	function h0(l, t, a, u) {
		(l = t.state),
			typeof t.componentWillReceiveProps == 'function' &&
				t.componentWillReceiveProps(a, u),
			typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
				t.UNSAFE_componentWillReceiveProps(a, u),
			t.state !== l && lc.enqueueReplaceState(t, t.state, null);
	}
	function Ra(l, t) {
		var a = t;
		if ('ref' in t) {
			a = {};
			for (var u in t) u !== 'ref' && (a[u] = t[u]);
		}
		if ((l = l.defaultProps)) {
			a === t && (a = N({}, a));
			for (var e in l) a[e] === void 0 && (a[e] = l[e]);
		}
		return a;
	}
	var en =
		typeof reportError == 'function'
			? reportError
			: function (l) {
					if (
						typeof window == 'object' &&
						typeof window.ErrorEvent == 'function'
					) {
						var t = new window.ErrorEvent('error', {
							bubbles: !0,
							cancelable: !0,
							message:
								typeof l == 'object' &&
								l !== null &&
								typeof l.message == 'string'
									? String(l.message)
									: String(l),
							error: l,
						});
						if (!window.dispatchEvent(t)) return;
					} else if (
						typeof process == 'object' &&
						typeof process.emit == 'function'
					) {
						process.emit('uncaughtException', l);
						return;
					}
					console.error(l);
			  };
	function m0(l) {
		en(l);
	}
	function S0(l) {
		console.error(l);
	}
	function g0(l) {
		en(l);
	}
	function nn(l, t) {
		try {
			var a = l.onUncaughtError;
			a(t.value, { componentStack: t.stack });
		} catch (u) {
			setTimeout(function () {
				throw u;
			});
		}
	}
	function b0(l, t, a) {
		try {
			var u = l.onCaughtError;
			u(a.value, {
				componentStack: a.stack,
				errorBoundary: t.tag === 1 ? t.stateNode : null,
			});
		} catch (e) {
			setTimeout(function () {
				throw e;
			});
		}
	}
	function tc(l, t, a) {
		return (
			(a = Ft(a)),
			(a.tag = 3),
			(a.payload = { element: null }),
			(a.callback = function () {
				nn(l, t);
			}),
			a
		);
	}
	function E0(l) {
		return (l = Ft(l)), (l.tag = 3), l;
	}
	function A0(l, t, a, u) {
		var e = a.type.getDerivedStateFromError;
		if (typeof e == 'function') {
			var n = u.value;
			(l.payload = function () {
				return e(n);
			}),
				(l.callback = function () {
					b0(t, a, u);
				});
		}
		var f = a.stateNode;
		f !== null &&
			typeof f.componentDidCatch == 'function' &&
			(l.callback = function () {
				b0(t, a, u),
					typeof e != 'function' &&
						(ca === null ? (ca = new Set([this])) : ca.add(this));
				var c = u.stack;
				this.componentDidCatch(u.value, {
					componentStack: c !== null ? c : '',
				});
			});
	}
	function Yr(l, t, a, u, e) {
		if (
			((a.flags |= 32768),
			u !== null && typeof u == 'object' && typeof u.then == 'function')
		) {
			if (
				((t = a.alternate),
				t !== null && qu(t, a, e, !0),
				(a = mt.current),
				a !== null)
			) {
				switch (a.tag) {
					case 13:
						return (
							Ot === null ? Dc() : a.alternate === null && El === 0 && (El = 3),
							(a.flags &= -257),
							(a.flags |= 65536),
							(a.lanes = e),
							u === Rf
								? (a.flags |= 16384)
								: ((t = a.updateQueue),
								  t === null ? (a.updateQueue = new Set([u])) : t.add(u),
								  _c(l, u, e)),
							!1
						);
					case 22:
						return (
							(a.flags |= 65536),
							u === Rf
								? (a.flags |= 16384)
								: ((t = a.updateQueue),
								  t === null
										? ((t = {
												transitions: null,
												markerInstances: null,
												retryQueue: new Set([u]),
										  }),
										  (a.updateQueue = t))
										: ((a = t.retryQueue),
										  a === null ? (t.retryQueue = new Set([u])) : a.add(u)),
								  _c(l, u, e)),
							!1
						);
				}
				throw Error(y(435, a.tag));
			}
			return _c(l, u, e), Dc(), !1;
		}
		if (al)
			return (
				(t = mt.current),
				t !== null
					? ((t.flags & 65536) === 0 && (t.flags |= 256),
					  (t.flags |= 65536),
					  (t.lanes = e),
					  u !== Mf && ((l = Error(y(422), { cause: u })), xu(rt(l, a))))
					: (u !== Mf && ((t = Error(y(423), { cause: u })), xu(rt(t, a))),
					  (l = l.current.alternate),
					  (l.flags |= 65536),
					  (e &= -e),
					  (l.lanes |= e),
					  (u = rt(u, a)),
					  (e = tc(l.stateNode, u, e)),
					  Hf(l, e),
					  El !== 4 && (El = 2)),
				!1
			);
		var n = Error(y(520), { cause: u });
		if (
			((n = rt(n, a)),
			ae === null ? (ae = [n]) : ae.push(n),
			El !== 4 && (El = 2),
			t === null)
		)
			return !0;
		(u = rt(u, a)), (a = t);
		do {
			switch (a.tag) {
				case 3:
					return (
						(a.flags |= 65536),
						(l = e & -e),
						(a.lanes |= l),
						(l = tc(a.stateNode, u, l)),
						Hf(a, l),
						!1
					);
				case 1:
					if (
						((t = a.type),
						(n = a.stateNode),
						(a.flags & 128) === 0 &&
							(typeof t.getDerivedStateFromError == 'function' ||
								(n !== null &&
									typeof n.componentDidCatch == 'function' &&
									(ca === null || !ca.has(n)))))
					)
						return (
							(a.flags |= 65536),
							(e &= -e),
							(a.lanes |= e),
							(e = E0(e)),
							A0(e, l, a, u),
							Hf(a, e),
							!1
						);
			}
			a = a.return;
		} while (a !== null);
		return !1;
	}
	var T0 = Error(y(461)),
		Hl = !1;
	function jl(l, t, a, u) {
		t.child = l === null ? r0(t, null, a, u) : nu(t, l.child, a, u);
	}
	function M0(l, t, a, u, e) {
		a = a.render;
		var n = t.ref;
		if ('ref' in u) {
			var f = {};
			for (var c in u) c !== 'ref' && (f[c] = u[c]);
		} else f = u;
		return (
			_a(t),
			(u = jf(l, t, a, f, n, e)),
			(c = Gf()),
			l !== null && !Hl
				? (Xf(l, t, e), jt(l, t, e))
				: (al && c && Af(t), (t.flags |= 1), jl(l, t, u, e), t.child)
		);
	}
	function O0(l, t, a, u, e) {
		if (l === null) {
			var n = a.type;
			return typeof n == 'function' &&
				!gf(n) &&
				n.defaultProps === void 0 &&
				a.compare === null
				? ((t.tag = 15), (t.type = n), D0(l, t, n, u, e))
				: ((l = je(a.type, null, u, t, t.mode, e)),
				  (l.ref = t.ref),
				  (l.return = t),
				  (t.child = l));
		}
		if (((n = l.child), !sc(l, e))) {
			var f = n.memoizedProps;
			if (
				((a = a.compare), (a = a !== null ? a : Nu), a(f, u) && l.ref === t.ref)
			)
				return jt(l, t, e);
		}
		return (
			(t.flags |= 1),
			(l = Nt(n, u)),
			(l.ref = t.ref),
			(l.return = t),
			(t.child = l)
		);
	}
	function D0(l, t, a, u, e) {
		if (l !== null) {
			var n = l.memoizedProps;
			if (Nu(n, u) && l.ref === t.ref)
				if (((Hl = !1), (t.pendingProps = u = n), sc(l, e)))
					(l.flags & 131072) !== 0 && (Hl = !0);
				else return (t.lanes = l.lanes), jt(l, t, e);
		}
		return ac(l, t, a, u, e);
	}
	function z0(l, t, a) {
		var u = t.pendingProps,
			e = u.children,
			n = l !== null ? l.memoizedState : null;
		if (u.mode === 'hidden') {
			if ((t.flags & 128) !== 0) {
				if (((u = n !== null ? n.baseLanes | a : a), l !== null)) {
					for (e = t.child = l.child, n = 0; e !== null; )
						(n = n | e.lanes | e.childLanes), (e = e.sibling);
					t.childLanes = n & ~u;
				} else (t.childLanes = 0), (t.child = null);
				return _0(l, t, u, a);
			}
			if ((a & 536870912) !== 0)
				(t.memoizedState = { baseLanes: 0, cachePool: null }),
					l !== null && Ve(t, n !== null ? n.cachePool : null),
					n !== null ? Ds(t, n) : xf(),
					v0(t);
			else
				return (
					(t.lanes = t.childLanes = 536870912),
					_0(l, t, n !== null ? n.baseLanes | a : a, a)
				);
		} else
			n !== null
				? (Ve(t, n.cachePool), Ds(t, n), ta(), (t.memoizedState = null))
				: (l !== null && Ve(t, null), xf(), ta());
		return jl(l, t, e, a), t.child;
	}
	function _0(l, t, a, u) {
		var e = Uf();
		return (
			(e = e === null ? null : { parent: _l._currentValue, pool: e }),
			(t.memoizedState = { baseLanes: a, cachePool: e }),
			l !== null && Ve(t, null),
			xf(),
			v0(t),
			l !== null && qu(l, t, u, !0),
			null
		);
	}
	function fn(l, t) {
		var a = t.ref;
		if (a === null) l !== null && l.ref !== null && (t.flags |= 4194816);
		else {
			if (typeof a != 'function' && typeof a != 'object') throw Error(y(284));
			(l === null || l.ref !== a) && (t.flags |= 4194816);
		}
	}
	function ac(l, t, a, u, e) {
		return (
			_a(t),
			(a = jf(l, t, a, u, void 0, e)),
			(u = Gf()),
			l !== null && !Hl
				? (Xf(l, t, e), jt(l, t, e))
				: (al && u && Af(t), (t.flags |= 1), jl(l, t, a, e), t.child)
		);
	}
	function B0(l, t, a, u, e, n) {
		return (
			_a(t),
			(t.updateQueue = null),
			(a = _s(t, u, a, e)),
			zs(l),
			(u = Gf()),
			l !== null && !Hl
				? (Xf(l, t, n), jt(l, t, n))
				: (al && u && Af(t), (t.flags |= 1), jl(l, t, a, n), t.child)
		);
	}
	function U0(l, t, a, u, e) {
		if ((_a(t), t.stateNode === null)) {
			var n = ka,
				f = a.contextType;
			typeof f == 'object' && f !== null && (n = Vl(f)),
				(n = new a(u, n)),
				(t.memoizedState =
					n.state !== null && n.state !== void 0 ? n.state : null),
				(n.updater = lc),
				(t.stateNode = n),
				(n._reactInternals = t),
				(n = t.stateNode),
				(n.props = u),
				(n.state = t.memoizedState),
				(n.refs = {}),
				Nf(t),
				(f = a.contextType),
				(n.context = typeof f == 'object' && f !== null ? Vl(f) : ka),
				(n.state = t.memoizedState),
				(f = a.getDerivedStateFromProps),
				typeof f == 'function' && (If(t, a, f, u), (n.state = t.memoizedState)),
				typeof a.getDerivedStateFromProps == 'function' ||
					typeof n.getSnapshotBeforeUpdate == 'function' ||
					(typeof n.UNSAFE_componentWillMount != 'function' &&
						typeof n.componentWillMount != 'function') ||
					((f = n.state),
					typeof n.componentWillMount == 'function' && n.componentWillMount(),
					typeof n.UNSAFE_componentWillMount == 'function' &&
						n.UNSAFE_componentWillMount(),
					f !== n.state && lc.enqueueReplaceState(n, n.state, null),
					Vu(t, u, n, e),
					Zu(),
					(n.state = t.memoizedState)),
				typeof n.componentDidMount == 'function' && (t.flags |= 4194308),
				(u = !0);
		} else if (l === null) {
			n = t.stateNode;
			var c = t.memoizedProps,
				i = Ra(a, c);
			n.props = i;
			var v = n.context,
				S = a.contextType;
			(f = ka), typeof S == 'object' && S !== null && (f = Vl(S));
			var E = a.getDerivedStateFromProps;
			(S =
				typeof E == 'function' ||
				typeof n.getSnapshotBeforeUpdate == 'function'),
				(c = t.pendingProps !== c),
				S ||
					(typeof n.UNSAFE_componentWillReceiveProps != 'function' &&
						typeof n.componentWillReceiveProps != 'function') ||
					((c || v !== f) && h0(t, n, u, f)),
				($t = !1);
			var h = t.memoizedState;
			(n.state = h),
				Vu(t, u, n, e),
				Zu(),
				(v = t.memoizedState),
				c || h !== v || $t
					? (typeof E == 'function' && (If(t, a, E, u), (v = t.memoizedState)),
					  (i = $t || y0(t, a, i, u, h, v, f))
							? (S ||
									(typeof n.UNSAFE_componentWillMount != 'function' &&
										typeof n.componentWillMount != 'function') ||
									(typeof n.componentWillMount == 'function' &&
										n.componentWillMount(),
									typeof n.UNSAFE_componentWillMount == 'function' &&
										n.UNSAFE_componentWillMount()),
							  typeof n.componentDidMount == 'function' &&
									(t.flags |= 4194308))
							: (typeof n.componentDidMount == 'function' &&
									(t.flags |= 4194308),
							  (t.memoizedProps = u),
							  (t.memoizedState = v)),
					  (n.props = u),
					  (n.state = v),
					  (n.context = f),
					  (u = i))
					: (typeof n.componentDidMount == 'function' && (t.flags |= 4194308),
					  (u = !1));
		} else {
			(n = t.stateNode),
				Cf(l, t),
				(f = t.memoizedProps),
				(S = Ra(a, f)),
				(n.props = S),
				(E = t.pendingProps),
				(h = n.context),
				(v = a.contextType),
				(i = ka),
				typeof v == 'object' && v !== null && (i = Vl(v)),
				(c = a.getDerivedStateFromProps),
				(v =
					typeof c == 'function' ||
					typeof n.getSnapshotBeforeUpdate == 'function') ||
					(typeof n.UNSAFE_componentWillReceiveProps != 'function' &&
						typeof n.componentWillReceiveProps != 'function') ||
					((f !== E || h !== i) && h0(t, n, u, i)),
				($t = !1),
				(h = t.memoizedState),
				(n.state = h),
				Vu(t, u, n, e),
				Zu();
			var m = t.memoizedState;
			f !== E ||
			h !== m ||
			$t ||
			(l !== null && l.dependencies !== null && Qe(l.dependencies))
				? (typeof c == 'function' && (If(t, a, c, u), (m = t.memoizedState)),
				  (S =
						$t ||
						y0(t, a, S, u, h, m, i) ||
						(l !== null && l.dependencies !== null && Qe(l.dependencies)))
						? (v ||
								(typeof n.UNSAFE_componentWillUpdate != 'function' &&
									typeof n.componentWillUpdate != 'function') ||
								(typeof n.componentWillUpdate == 'function' &&
									n.componentWillUpdate(u, m, i),
								typeof n.UNSAFE_componentWillUpdate == 'function' &&
									n.UNSAFE_componentWillUpdate(u, m, i)),
						  typeof n.componentDidUpdate == 'function' && (t.flags |= 4),
						  typeof n.getSnapshotBeforeUpdate == 'function' &&
								(t.flags |= 1024))
						: (typeof n.componentDidUpdate != 'function' ||
								(f === l.memoizedProps && h === l.memoizedState) ||
								(t.flags |= 4),
						  typeof n.getSnapshotBeforeUpdate != 'function' ||
								(f === l.memoizedProps && h === l.memoizedState) ||
								(t.flags |= 1024),
						  (t.memoizedProps = u),
						  (t.memoizedState = m)),
				  (n.props = u),
				  (n.state = m),
				  (n.context = i),
				  (u = S))
				: (typeof n.componentDidUpdate != 'function' ||
						(f === l.memoizedProps && h === l.memoizedState) ||
						(t.flags |= 4),
				  typeof n.getSnapshotBeforeUpdate != 'function' ||
						(f === l.memoizedProps && h === l.memoizedState) ||
						(t.flags |= 1024),
				  (u = !1));
		}
		return (
			(n = u),
			fn(l, t),
			(u = (t.flags & 128) !== 0),
			n || u
				? ((n = t.stateNode),
				  (a =
						u && typeof a.getDerivedStateFromError != 'function'
							? null
							: n.render()),
				  (t.flags |= 1),
				  l !== null && u
						? ((t.child = nu(t, l.child, null, e)),
						  (t.child = nu(t, null, a, e)))
						: jl(l, t, a, e),
				  (t.memoizedState = n.state),
				  (l = t.child))
				: (l = jt(l, t, e)),
			l
		);
	}
	function R0(l, t, a, u) {
		return pu(), (t.flags |= 256), jl(l, t, a, u), t.child;
	}
	var uc = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0,
		hydrationErrors: null,
	};
	function ec(l) {
		return { baseLanes: l, cachePool: Ss() };
	}
	function nc(l, t, a) {
		return (l = l !== null ? l.childLanes & ~a : 0), t && (l |= St), l;
	}
	function N0(l, t, a) {
		var u = t.pendingProps,
			e = !1,
			n = (t.flags & 128) !== 0,
			f;
		if (
			((f = n) ||
				(f =
					l !== null && l.memoizedState === null ? !1 : (Bl.current & 2) !== 0),
			f && ((e = !0), (t.flags &= -129)),
			(f = (t.flags & 32) !== 0),
			(t.flags &= -33),
			l === null)
		) {
			if (al) {
				if ((e ? la(t) : ta(), al)) {
					var c = bl,
						i;
					if ((i = c)) {
						l: {
							for (i = c, c = Mt; i.nodeType !== 8; ) {
								if (!c) {
									c = null;
									break l;
								}
								if (((i = At(i.nextSibling)), i === null)) {
									c = null;
									break l;
								}
							}
							c = i;
						}
						c !== null
							? ((t.memoizedState = {
									dehydrated: c,
									treeContext: Ta !== null ? { id: Ct, overflow: Ht } : null,
									retryLane: 536870912,
									hydrationErrors: null,
							  }),
							  (i = ut(18, null, null, 0)),
							  (i.stateNode = c),
							  (i.return = t),
							  (t.child = i),
							  (Kl = t),
							  (bl = null),
							  (i = !0))
							: (i = !1);
					}
					i || Da(t);
				}
				if (
					((c = t.memoizedState),
					c !== null && ((c = c.dehydrated), c !== null))
				)
					return Zc(c) ? (t.lanes = 32) : (t.lanes = 536870912), null;
				Yt(t);
			}
			return (
				(c = u.children),
				(u = u.fallback),
				e
					? (ta(),
					  (e = t.mode),
					  (c = cn({ mode: 'hidden', children: c }, e)),
					  (u = Aa(u, e, a, null)),
					  (c.return = t),
					  (u.return = t),
					  (c.sibling = u),
					  (t.child = c),
					  (e = t.child),
					  (e.memoizedState = ec(a)),
					  (e.childLanes = nc(l, f, a)),
					  (t.memoizedState = uc),
					  u)
					: (la(t), fc(t, c))
			);
		}
		if (
			((i = l.memoizedState), i !== null && ((c = i.dehydrated), c !== null))
		) {
			if (n)
				t.flags & 256
					? (la(t), (t.flags &= -257), (t = cc(l, t, a)))
					: t.memoizedState !== null
					? (ta(), (t.child = l.child), (t.flags |= 128), (t = null))
					: (ta(),
					  (e = u.fallback),
					  (c = t.mode),
					  (u = cn({ mode: 'visible', children: u.children }, c)),
					  (e = Aa(e, c, a, null)),
					  (e.flags |= 2),
					  (u.return = t),
					  (e.return = t),
					  (u.sibling = e),
					  (t.child = u),
					  nu(t, l.child, null, a),
					  (u = t.child),
					  (u.memoizedState = ec(a)),
					  (u.childLanes = nc(l, f, a)),
					  (t.memoizedState = uc),
					  (t = e));
			else if ((la(t), Zc(c))) {
				if (((f = c.nextSibling && c.nextSibling.dataset), f)) var v = f.dgst;
				(f = v),
					(u = Error(y(419))),
					(u.stack = ''),
					(u.digest = f),
					xu({ value: u, source: null, stack: null }),
					(t = cc(l, t, a));
			} else if (
				(Hl || qu(l, t, a, !1), (f = (a & l.childLanes) !== 0), Hl || f)
			) {
				if (
					((f = vl),
					f !== null &&
						((u = a & -a),
						(u = (u & 42) !== 0 ? 1 : Zn(u)),
						(u = (u & (f.suspendedLanes | a)) !== 0 ? 0 : u),
						u !== 0 && u !== i.retryLane))
				)
					throw ((i.retryLane = u), Wa(l, u), it(f, l, u), T0);
				c.data === '$?' || Dc(), (t = cc(l, t, a));
			} else
				c.data === '$?'
					? ((t.flags |= 192), (t.child = l.child), (t = null))
					: ((l = i.treeContext),
					  (bl = At(c.nextSibling)),
					  (Kl = t),
					  (al = !0),
					  (Oa = null),
					  (Mt = !1),
					  l !== null &&
							((yt[ht++] = Ct),
							(yt[ht++] = Ht),
							(yt[ht++] = Ta),
							(Ct = l.id),
							(Ht = l.overflow),
							(Ta = t)),
					  (t = fc(t, u.children)),
					  (t.flags |= 4096));
			return t;
		}
		return e
			? (ta(),
			  (e = u.fallback),
			  (c = t.mode),
			  (i = l.child),
			  (v = i.sibling),
			  (u = Nt(i, { mode: 'hidden', children: u.children })),
			  (u.subtreeFlags = i.subtreeFlags & 65011712),
			  v !== null ? (e = Nt(v, e)) : ((e = Aa(e, c, a, null)), (e.flags |= 2)),
			  (e.return = t),
			  (u.return = t),
			  (u.sibling = e),
			  (t.child = u),
			  (u = e),
			  (e = t.child),
			  (c = l.child.memoizedState),
			  c === null
					? (c = ec(a))
					: ((i = c.cachePool),
					  i !== null
							? ((v = _l._currentValue),
							  (i = i.parent !== v ? { parent: v, pool: v } : i))
							: (i = Ss()),
					  (c = { baseLanes: c.baseLanes | a, cachePool: i })),
			  (e.memoizedState = c),
			  (e.childLanes = nc(l, f, a)),
			  (t.memoizedState = uc),
			  u)
			: (la(t),
			  (a = l.child),
			  (l = a.sibling),
			  (a = Nt(a, { mode: 'visible', children: u.children })),
			  (a.return = t),
			  (a.sibling = null),
			  l !== null &&
					((f = t.deletions),
					f === null ? ((t.deletions = [l]), (t.flags |= 16)) : f.push(l)),
			  (t.child = a),
			  (t.memoizedState = null),
			  a);
	}
	function fc(l, t) {
		return (
			(t = cn({ mode: 'visible', children: t }, l.mode)),
			(t.return = l),
			(l.child = t)
		);
	}
	function cn(l, t) {
		return (
			(l = ut(22, l, null, t)),
			(l.lanes = 0),
			(l.stateNode = {
				_visibility: 1,
				_pendingMarkers: null,
				_retryCache: null,
				_transitions: null,
			}),
			l
		);
	}
	function cc(l, t, a) {
		return (
			nu(t, l.child, null, a),
			(l = fc(t, t.pendingProps.children)),
			(l.flags |= 2),
			(t.memoizedState = null),
			l
		);
	}
	function C0(l, t, a) {
		l.lanes |= t;
		var u = l.alternate;
		u !== null && (u.lanes |= t), Df(l.return, t, a);
	}
	function ic(l, t, a, u, e) {
		var n = l.memoizedState;
		n === null
			? (l.memoizedState = {
					isBackwards: t,
					rendering: null,
					renderingStartTime: 0,
					last: u,
					tail: a,
					tailMode: e,
			  })
			: ((n.isBackwards = t),
			  (n.rendering = null),
			  (n.renderingStartTime = 0),
			  (n.last = u),
			  (n.tail = a),
			  (n.tailMode = e));
	}
	function H0(l, t, a) {
		var u = t.pendingProps,
			e = u.revealOrder,
			n = u.tail;
		if ((jl(l, t, u.children, a), (u = Bl.current), (u & 2) !== 0))
			(u = (u & 1) | 2), (t.flags |= 128);
		else {
			if (l !== null && (l.flags & 128) !== 0)
				l: for (l = t.child; l !== null; ) {
					if (l.tag === 13) l.memoizedState !== null && C0(l, a, t);
					else if (l.tag === 19) C0(l, a, t);
					else if (l.child !== null) {
						(l.child.return = l), (l = l.child);
						continue;
					}
					if (l === t) break l;
					for (; l.sibling === null; ) {
						if (l.return === null || l.return === t) break l;
						l = l.return;
					}
					(l.sibling.return = l.return), (l = l.sibling);
				}
			u &= 1;
		}
		switch ((D(Bl, u), e)) {
			case 'forwards':
				for (a = t.child, e = null; a !== null; )
					(l = a.alternate),
						l !== null && un(l) === null && (e = a),
						(a = a.sibling);
				(a = e),
					a === null
						? ((e = t.child), (t.child = null))
						: ((e = a.sibling), (a.sibling = null)),
					ic(t, !1, e, a, n);
				break;
			case 'backwards':
				for (a = null, e = t.child, t.child = null; e !== null; ) {
					if (((l = e.alternate), l !== null && un(l) === null)) {
						t.child = e;
						break;
					}
					(l = e.sibling), (e.sibling = a), (a = e), (e = l);
				}
				ic(t, !0, a, null, n);
				break;
			case 'together':
				ic(t, !1, null, null, void 0);
				break;
			default:
				t.memoizedState = null;
		}
		return t.child;
	}
	function jt(l, t, a) {
		if (
			(l !== null && (t.dependencies = l.dependencies),
			(fa |= t.lanes),
			(a & t.childLanes) === 0)
		)
			if (l !== null) {
				if ((qu(l, t, a, !1), (a & t.childLanes) === 0)) return null;
			} else return null;
		if (l !== null && t.child !== l.child) throw Error(y(153));
		if (t.child !== null) {
			for (
				l = t.child, a = Nt(l, l.pendingProps), t.child = a, a.return = t;
				l.sibling !== null;

			)
				(l = l.sibling),
					(a = a.sibling = Nt(l, l.pendingProps)),
					(a.return = t);
			a.sibling = null;
		}
		return t.child;
	}
	function sc(l, t) {
		return (l.lanes & t) !== 0
			? !0
			: ((l = l.dependencies), !!(l !== null && Qe(l)));
	}
	function jr(l, t, a) {
		switch (t.tag) {
			case 3:
				hl(t, t.stateNode.containerInfo),
					kt(t, _l, l.memoizedState.cache),
					pu();
				break;
			case 27:
			case 5:
				Yn(t);
				break;
			case 4:
				hl(t, t.stateNode.containerInfo);
				break;
			case 10:
				kt(t, t.type, t.memoizedProps.value);
				break;
			case 13:
				var u = t.memoizedState;
				if (u !== null)
					return u.dehydrated !== null
						? (la(t), (t.flags |= 128), null)
						: (a & t.child.childLanes) !== 0
						? N0(l, t, a)
						: (la(t), (l = jt(l, t, a)), l !== null ? l.sibling : null);
				la(t);
				break;
			case 19:
				var e = (l.flags & 128) !== 0;
				if (
					((u = (a & t.childLanes) !== 0),
					u || (qu(l, t, a, !1), (u = (a & t.childLanes) !== 0)),
					e)
				) {
					if (u) return H0(l, t, a);
					t.flags |= 128;
				}
				if (
					((e = t.memoizedState),
					e !== null &&
						((e.rendering = null), (e.tail = null), (e.lastEffect = null)),
					D(Bl, Bl.current),
					u)
				)
					break;
				return null;
			case 22:
			case 23:
				return (t.lanes = 0), z0(l, t, a);
			case 24:
				kt(t, _l, l.memoizedState.cache);
		}
		return jt(l, t, a);
	}
	function p0(l, t, a) {
		if (l !== null)
			if (l.memoizedProps !== t.pendingProps) Hl = !0;
			else {
				if (!sc(l, a) && (t.flags & 128) === 0) return (Hl = !1), jr(l, t, a);
				Hl = (l.flags & 131072) !== 0;
			}
		else (Hl = !1), al && (t.flags & 1048576) !== 0 && ds(t, Xe, t.index);
		switch (((t.lanes = 0), t.tag)) {
			case 16:
				l: {
					l = t.pendingProps;
					var u = t.elementType,
						e = u._init;
					if (((u = e(u._payload)), (t.type = u), typeof u == 'function'))
						gf(u)
							? ((l = Ra(u, l)), (t.tag = 1), (t = U0(null, t, u, l, a)))
							: ((t.tag = 0), (t = ac(null, t, u, l, a)));
					else {
						if (u != null) {
							if (((e = u.$$typeof), e === Ql)) {
								(t.tag = 11), (t = M0(null, t, u, l, a));
								break l;
							} else if (e === ql) {
								(t.tag = 14), (t = O0(null, t, u, l, a));
								break l;
							}
						}
						throw ((t = Bt(u) || u), Error(y(306, t, '')));
					}
				}
				return t;
			case 0:
				return ac(l, t, t.type, t.pendingProps, a);
			case 1:
				return (u = t.type), (e = Ra(u, t.pendingProps)), U0(l, t, u, e, a);
			case 3:
				l: {
					if ((hl(t, t.stateNode.containerInfo), l === null))
						throw Error(y(387));
					u = t.pendingProps;
					var n = t.memoizedState;
					(e = n.element), Cf(l, t), Vu(t, u, null, a);
					var f = t.memoizedState;
					if (
						((u = f.cache),
						kt(t, _l, u),
						u !== n.cache && zf(t, [_l], a, !0),
						Zu(),
						(u = f.element),
						n.isDehydrated)
					)
						if (
							((n = { element: u, isDehydrated: !1, cache: f.cache }),
							(t.updateQueue.baseState = n),
							(t.memoizedState = n),
							t.flags & 256)
						) {
							t = R0(l, t, u, a);
							break l;
						} else if (u !== e) {
							(e = rt(Error(y(424)), t)), xu(e), (t = R0(l, t, u, a));
							break l;
						} else {
							switch (((l = t.stateNode.containerInfo), l.nodeType)) {
								case 9:
									l = l.body;
									break;
								default:
									l = l.nodeName === 'HTML' ? l.ownerDocument.body : l;
							}
							for (
								bl = At(l.firstChild),
									Kl = t,
									al = !0,
									Oa = null,
									Mt = !0,
									a = r0(t, null, u, a),
									t.child = a;
								a;

							)
								(a.flags = (a.flags & -3) | 4096), (a = a.sibling);
						}
					else {
						if ((pu(), u === e)) {
							t = jt(l, t, a);
							break l;
						}
						jl(l, t, u, a);
					}
					t = t.child;
				}
				return t;
			case 26:
				return (
					fn(l, t),
					l === null
						? (a = jd(t.type, null, t.pendingProps, null))
							? (t.memoizedState = a)
							: al ||
							  ((a = t.type),
							  (l = t.pendingProps),
							  (u = Tn(Q.current).createElement(a)),
							  (u[Zl] = t),
							  (u[wl] = l),
							  Xl(u, a, l),
							  Cl(u),
							  (t.stateNode = u))
						: (t.memoizedState = jd(
								t.type,
								l.memoizedProps,
								t.pendingProps,
								l.memoizedState
						  )),
					null
				);
			case 27:
				return (
					Yn(t),
					l === null &&
						al &&
						((u = t.stateNode = xd(t.type, t.pendingProps, Q.current)),
						(Kl = t),
						(Mt = !0),
						(e = bl),
						da(t.type) ? ((Vc = e), (bl = At(u.firstChild))) : (bl = e)),
					jl(l, t, t.pendingProps.children, a),
					fn(l, t),
					l === null && (t.flags |= 4194304),
					t.child
				);
			case 5:
				return (
					l === null &&
						al &&
						((e = u = bl) &&
							((u = rv(u, t.type, t.pendingProps, Mt)),
							u !== null
								? ((t.stateNode = u),
								  (Kl = t),
								  (bl = At(u.firstChild)),
								  (Mt = !1),
								  (e = !0))
								: (e = !1)),
						e || Da(t)),
					Yn(t),
					(e = t.type),
					(n = t.pendingProps),
					(f = l !== null ? l.memoizedProps : null),
					(u = n.children),
					Gc(e, n) ? (u = null) : f !== null && Gc(e, f) && (t.flags |= 32),
					t.memoizedState !== null &&
						((e = jf(l, t, Rr, null, null, a)), (oe._currentValue = e)),
					fn(l, t),
					jl(l, t, u, a),
					t.child
				);
			case 6:
				return (
					l === null &&
						al &&
						((l = a = bl) &&
							((a = vv(a, t.pendingProps, Mt)),
							a !== null
								? ((t.stateNode = a), (Kl = t), (bl = null), (l = !0))
								: (l = !1)),
						l || Da(t)),
					null
				);
			case 13:
				return N0(l, t, a);
			case 4:
				return (
					hl(t, t.stateNode.containerInfo),
					(u = t.pendingProps),
					l === null ? (t.child = nu(t, null, u, a)) : jl(l, t, u, a),
					t.child
				);
			case 11:
				return M0(l, t, t.type, t.pendingProps, a);
			case 7:
				return jl(l, t, t.pendingProps, a), t.child;
			case 8:
				return jl(l, t, t.pendingProps.children, a), t.child;
			case 12:
				return jl(l, t, t.pendingProps.children, a), t.child;
			case 10:
				return (
					(u = t.pendingProps),
					kt(t, t.type, u.value),
					jl(l, t, u.children, a),
					t.child
				);
			case 9:
				return (
					(e = t.type._context),
					(u = t.pendingProps.children),
					_a(t),
					(e = Vl(e)),
					(u = u(e)),
					(t.flags |= 1),
					jl(l, t, u, a),
					t.child
				);
			case 14:
				return O0(l, t, t.type, t.pendingProps, a);
			case 15:
				return D0(l, t, t.type, t.pendingProps, a);
			case 19:
				return H0(l, t, a);
			case 31:
				return (
					(u = t.pendingProps),
					(a = t.mode),
					(u = { mode: u.mode, children: u.children }),
					l === null
						? ((a = cn(u, a)),
						  (a.ref = t.ref),
						  (t.child = a),
						  (a.return = t),
						  (t = a))
						: ((a = Nt(l.child, u)),
						  (a.ref = t.ref),
						  (t.child = a),
						  (a.return = t),
						  (t = a)),
					t
				);
			case 22:
				return z0(l, t, a);
			case 24:
				return (
					_a(t),
					(u = Vl(_l)),
					l === null
						? ((e = Uf()),
						  e === null &&
								((e = vl),
								(n = _f()),
								(e.pooledCache = n),
								n.refCount++,
								n !== null && (e.pooledCacheLanes |= a),
								(e = n)),
						  (t.memoizedState = { parent: u, cache: e }),
						  Nf(t),
						  kt(t, _l, e))
						: ((l.lanes & a) !== 0 && (Cf(l, t), Vu(t, null, null, a), Zu()),
						  (e = l.memoizedState),
						  (n = t.memoizedState),
						  e.parent !== u
								? ((e = { parent: u, cache: u }),
								  (t.memoizedState = e),
								  t.lanes === 0 &&
										(t.memoizedState = t.updateQueue.baseState = e),
								  kt(t, _l, u))
								: ((u = n.cache),
								  kt(t, _l, u),
								  u !== e.cache && zf(t, [_l], a, !0))),
					jl(l, t, t.pendingProps.children, a),
					t.child
				);
			case 29:
				throw t.pendingProps;
		}
		throw Error(y(156, t.tag));
	}
	function Gt(l) {
		l.flags |= 4;
	}
	function x0(l, t) {
		if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0)
			l.flags &= -16777217;
		else if (((l.flags |= 16777216), !Vd(t))) {
			if (
				((t = mt.current),
				t !== null &&
					((P & 4194048) === P
						? Ot !== null
						: ((P & 62914560) !== P && (P & 536870912) === 0) || t !== Ot))
			)
				throw ((Xu = Rf), gs);
			l.flags |= 8192;
		}
	}
	function sn(l, t) {
		t !== null && (l.flags |= 4),
			l.flags & 16384 &&
				((t = l.tag !== 22 ? vi() : 536870912), (l.lanes |= t), (su |= t));
	}
	function $u(l, t) {
		if (!al)
			switch (l.tailMode) {
				case 'hidden':
					t = l.tail;
					for (var a = null; t !== null; )
						t.alternate !== null && (a = t), (t = t.sibling);
					a === null ? (l.tail = null) : (a.sibling = null);
					break;
				case 'collapsed':
					a = l.tail;
					for (var u = null; a !== null; )
						a.alternate !== null && (u = a), (a = a.sibling);
					u === null
						? t || l.tail === null
							? (l.tail = null)
							: (l.tail.sibling = null)
						: (u.sibling = null);
			}
	}
	function gl(l) {
		var t = l.alternate !== null && l.alternate.child === l.child,
			a = 0,
			u = 0;
		if (t)
			for (var e = l.child; e !== null; )
				(a |= e.lanes | e.childLanes),
					(u |= e.subtreeFlags & 65011712),
					(u |= e.flags & 65011712),
					(e.return = l),
					(e = e.sibling);
		else
			for (e = l.child; e !== null; )
				(a |= e.lanes | e.childLanes),
					(u |= e.subtreeFlags),
					(u |= e.flags),
					(e.return = l),
					(e = e.sibling);
		return (l.subtreeFlags |= u), (l.childLanes = a), t;
	}
	function Gr(l, t, a) {
		var u = t.pendingProps;
		switch ((Tf(t), t.tag)) {
			case 31:
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14:
				return gl(t), null;
			case 1:
				return gl(t), null;
			case 3:
				return (
					(a = t.stateNode),
					(u = null),
					l !== null && (u = l.memoizedState.cache),
					t.memoizedState.cache !== u && (t.flags |= 2048),
					xt(_l),
					Kt(),
					a.pendingContext &&
						((a.context = a.pendingContext), (a.pendingContext = null)),
					(l === null || l.child === null) &&
						(Hu(t)
							? Gt(t)
							: l === null ||
							  (l.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
							  ((t.flags |= 1024), vs())),
					gl(t),
					null
				);
			case 26:
				return (
					(a = t.memoizedState),
					l === null
						? (Gt(t),
						  a !== null ? (gl(t), x0(t, a)) : (gl(t), (t.flags &= -16777217)))
						: a
						? a !== l.memoizedState
							? (Gt(t), gl(t), x0(t, a))
							: (gl(t), (t.flags &= -16777217))
						: (l.memoizedProps !== u && Gt(t), gl(t), (t.flags &= -16777217)),
					null
				);
			case 27:
				be(t), (a = Q.current);
				var e = t.type;
				if (l !== null && t.stateNode != null) l.memoizedProps !== u && Gt(t);
				else {
					if (!u) {
						if (t.stateNode === null) throw Error(y(166));
						return gl(t), null;
					}
					(l = x.current),
						Hu(t) ? os(t) : ((l = xd(e, u, a)), (t.stateNode = l), Gt(t));
				}
				return gl(t), null;
			case 5:
				if ((be(t), (a = t.type), l !== null && t.stateNode != null))
					l.memoizedProps !== u && Gt(t);
				else {
					if (!u) {
						if (t.stateNode === null) throw Error(y(166));
						return gl(t), null;
					}
					if (((l = x.current), Hu(t))) os(t);
					else {
						switch (((e = Tn(Q.current)), l)) {
							case 1:
								l = e.createElementNS('http://www.w3.org/2000/svg', a);
								break;
							case 2:
								l = e.createElementNS('http://www.w3.org/1998/Math/MathML', a);
								break;
							default:
								switch (a) {
									case 'svg':
										l = e.createElementNS('http://www.w3.org/2000/svg', a);
										break;
									case 'math':
										l = e.createElementNS(
											'http://www.w3.org/1998/Math/MathML',
											a
										);
										break;
									case 'script':
										(l = e.createElement('div')),
											(l.innerHTML = '<script></script>'),
											(l = l.removeChild(l.firstChild));
										break;
									case 'select':
										(l =
											typeof u.is == 'string'
												? e.createElement('select', { is: u.is })
												: e.createElement('select')),
											u.multiple
												? (l.multiple = !0)
												: u.size && (l.size = u.size);
										break;
									default:
										l =
											typeof u.is == 'string'
												? e.createElement(a, { is: u.is })
												: e.createElement(a);
								}
						}
						(l[Zl] = t), (l[wl] = u);
						l: for (e = t.child; e !== null; ) {
							if (e.tag === 5 || e.tag === 6) l.appendChild(e.stateNode);
							else if (e.tag !== 4 && e.tag !== 27 && e.child !== null) {
								(e.child.return = e), (e = e.child);
								continue;
							}
							if (e === t) break l;
							for (; e.sibling === null; ) {
								if (e.return === null || e.return === t) break l;
								e = e.return;
							}
							(e.sibling.return = e.return), (e = e.sibling);
						}
						t.stateNode = l;
						l: switch ((Xl(l, a, u), a)) {
							case 'button':
							case 'input':
							case 'select':
							case 'textarea':
								l = !!u.autoFocus;
								break l;
							case 'img':
								l = !0;
								break l;
							default:
								l = !1;
						}
						l && Gt(t);
					}
				}
				return gl(t), (t.flags &= -16777217), null;
			case 6:
				if (l && t.stateNode != null) l.memoizedProps !== u && Gt(t);
				else {
					if (typeof u != 'string' && t.stateNode === null) throw Error(y(166));
					if (((l = Q.current), Hu(t))) {
						if (
							((l = t.stateNode),
							(a = t.memoizedProps),
							(u = null),
							(e = Kl),
							e !== null)
						)
							switch (e.tag) {
								case 27:
								case 5:
									u = e.memoizedProps;
							}
						(l[Zl] = t),
							(l = !!(
								l.nodeValue === a ||
								(u !== null && u.suppressHydrationWarning === !0) ||
								Bd(l.nodeValue, a)
							)),
							l || Da(t);
					} else (l = Tn(l).createTextNode(u)), (l[Zl] = t), (t.stateNode = l);
				}
				return gl(t), null;
			case 13:
				if (
					((u = t.memoizedState),
					l === null ||
						(l.memoizedState !== null && l.memoizedState.dehydrated !== null))
				) {
					if (((e = Hu(t)), u !== null && u.dehydrated !== null)) {
						if (l === null) {
							if (!e) throw Error(y(318));
							if (
								((e = t.memoizedState),
								(e = e !== null ? e.dehydrated : null),
								!e)
							)
								throw Error(y(317));
							e[Zl] = t;
						} else
							pu(),
								(t.flags & 128) === 0 && (t.memoizedState = null),
								(t.flags |= 4);
						gl(t), (e = !1);
					} else
						(e = vs()),
							l !== null &&
								l.memoizedState !== null &&
								(l.memoizedState.hydrationErrors = e),
							(e = !0);
					if (!e) return t.flags & 256 ? (Yt(t), t) : (Yt(t), null);
				}
				if ((Yt(t), (t.flags & 128) !== 0)) return (t.lanes = a), t;
				if (
					((a = u !== null), (l = l !== null && l.memoizedState !== null), a)
				) {
					(u = t.child),
						(e = null),
						u.alternate !== null &&
							u.alternate.memoizedState !== null &&
							u.alternate.memoizedState.cachePool !== null &&
							(e = u.alternate.memoizedState.cachePool.pool);
					var n = null;
					u.memoizedState !== null &&
						u.memoizedState.cachePool !== null &&
						(n = u.memoizedState.cachePool.pool),
						n !== e && (u.flags |= 2048);
				}
				return (
					a !== l && a && (t.child.flags |= 8192),
					sn(t, t.updateQueue),
					gl(t),
					null
				);
			case 4:
				return Kt(), l === null && pc(t.stateNode.containerInfo), gl(t), null;
			case 10:
				return xt(t.type), gl(t), null;
			case 19:
				if ((_(Bl), (e = t.memoizedState), e === null)) return gl(t), null;
				if (((u = (t.flags & 128) !== 0), (n = e.rendering), n === null))
					if (u) $u(e, !1);
					else {
						if (El !== 0 || (l !== null && (l.flags & 128) !== 0))
							for (l = t.child; l !== null; ) {
								if (((n = un(l)), n !== null)) {
									for (
										t.flags |= 128,
											$u(e, !1),
											l = n.updateQueue,
											t.updateQueue = l,
											sn(t, l),
											t.subtreeFlags = 0,
											l = a,
											a = t.child;
										a !== null;

									)
										ss(a, l), (a = a.sibling);
									return D(Bl, (Bl.current & 1) | 2), t.child;
								}
								l = l.sibling;
							}
						e.tail !== null &&
							Tt() > rn &&
							((t.flags |= 128), (u = !0), $u(e, !1), (t.lanes = 4194304));
					}
				else {
					if (!u)
						if (((l = un(n)), l !== null)) {
							if (
								((t.flags |= 128),
								(u = !0),
								(l = l.updateQueue),
								(t.updateQueue = l),
								sn(t, l),
								$u(e, !0),
								e.tail === null &&
									e.tailMode === 'hidden' &&
									!n.alternate &&
									!al)
							)
								return gl(t), null;
						} else
							2 * Tt() - e.renderingStartTime > rn &&
								a !== 536870912 &&
								((t.flags |= 128), (u = !0), $u(e, !1), (t.lanes = 4194304));
					e.isBackwards
						? ((n.sibling = t.child), (t.child = n))
						: ((l = e.last),
						  l !== null ? (l.sibling = n) : (t.child = n),
						  (e.last = n));
				}
				return e.tail !== null
					? ((t = e.tail),
					  (e.rendering = t),
					  (e.tail = t.sibling),
					  (e.renderingStartTime = Tt()),
					  (t.sibling = null),
					  (l = Bl.current),
					  D(Bl, u ? (l & 1) | 2 : l & 1),
					  t)
					: (gl(t), null);
			case 22:
			case 23:
				return (
					Yt(t),
					qf(),
					(u = t.memoizedState !== null),
					l !== null
						? (l.memoizedState !== null) !== u && (t.flags |= 8192)
						: u && (t.flags |= 8192),
					u
						? (a & 536870912) !== 0 &&
						  (t.flags & 128) === 0 &&
						  (gl(t), t.subtreeFlags & 6 && (t.flags |= 8192))
						: gl(t),
					(a = t.updateQueue),
					a !== null && sn(t, a.retryQueue),
					(a = null),
					l !== null &&
						l.memoizedState !== null &&
						l.memoizedState.cachePool !== null &&
						(a = l.memoizedState.cachePool.pool),
					(u = null),
					t.memoizedState !== null &&
						t.memoizedState.cachePool !== null &&
						(u = t.memoizedState.cachePool.pool),
					u !== a && (t.flags |= 2048),
					l !== null && _(Ba),
					null
				);
			case 24:
				return (
					(a = null),
					l !== null && (a = l.memoizedState.cache),
					t.memoizedState.cache !== a && (t.flags |= 2048),
					xt(_l),
					gl(t),
					null
				);
			case 25:
				return null;
			case 30:
				return null;
		}
		throw Error(y(156, t.tag));
	}
	function Xr(l, t) {
		switch ((Tf(t), t.tag)) {
			case 1:
				return (
					(l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
				);
			case 3:
				return (
					xt(_l),
					Kt(),
					(l = t.flags),
					(l & 65536) !== 0 && (l & 128) === 0
						? ((t.flags = (l & -65537) | 128), t)
						: null
				);
			case 26:
			case 27:
			case 5:
				return be(t), null;
			case 13:
				if (
					(Yt(t), (l = t.memoizedState), l !== null && l.dehydrated !== null)
				) {
					if (t.alternate === null) throw Error(y(340));
					pu();
				}
				return (
					(l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
				);
			case 19:
				return _(Bl), null;
			case 4:
				return Kt(), null;
			case 10:
				return xt(t.type), null;
			case 22:
			case 23:
				return (
					Yt(t),
					qf(),
					l !== null && _(Ba),
					(l = t.flags),
					l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
				);
			case 24:
				return xt(_l), null;
			case 25:
				return null;
			default:
				return null;
		}
	}
	function q0(l, t) {
		switch ((Tf(t), t.tag)) {
			case 3:
				xt(_l), Kt();
				break;
			case 26:
			case 27:
			case 5:
				be(t);
				break;
			case 4:
				Kt();
				break;
			case 13:
				Yt(t);
				break;
			case 19:
				_(Bl);
				break;
			case 10:
				xt(t.type);
				break;
			case 22:
			case 23:
				Yt(t), qf(), l !== null && _(Ba);
				break;
			case 24:
				xt(_l);
		}
	}
	function Fu(l, t) {
		try {
			var a = t.updateQueue,
				u = a !== null ? a.lastEffect : null;
			if (u !== null) {
				var e = u.next;
				a = e;
				do {
					if ((a.tag & l) === l) {
						u = void 0;
						var n = a.create,
							f = a.inst;
						(u = n()), (f.destroy = u);
					}
					a = a.next;
				} while (a !== e);
			}
		} catch (c) {
			ol(t, t.return, c);
		}
	}
	function aa(l, t, a) {
		try {
			var u = t.updateQueue,
				e = u !== null ? u.lastEffect : null;
			if (e !== null) {
				var n = e.next;
				u = n;
				do {
					if ((u.tag & l) === l) {
						var f = u.inst,
							c = f.destroy;
						if (c !== void 0) {
							(f.destroy = void 0), (e = t);
							var i = a,
								v = c;
							try {
								v();
							} catch (S) {
								ol(e, i, S);
							}
						}
					}
					u = u.next;
				} while (u !== n);
			}
		} catch (S) {
			ol(t, t.return, S);
		}
	}
	function Y0(l) {
		var t = l.updateQueue;
		if (t !== null) {
			var a = l.stateNode;
			try {
				Os(t, a);
			} catch (u) {
				ol(l, l.return, u);
			}
		}
	}
	function j0(l, t, a) {
		(a.props = Ra(l.type, l.memoizedProps)), (a.state = l.memoizedState);
		try {
			a.componentWillUnmount();
		} catch (u) {
			ol(l, t, u);
		}
	}
	function Pu(l, t) {
		try {
			var a = l.ref;
			if (a !== null) {
				switch (l.tag) {
					case 26:
					case 27:
					case 5:
						var u = l.stateNode;
						break;
					case 30:
						u = l.stateNode;
						break;
					default:
						u = l.stateNode;
				}
				typeof a == 'function' ? (l.refCleanup = a(u)) : (a.current = u);
			}
		} catch (e) {
			ol(l, t, e);
		}
	}
	function Dt(l, t) {
		var a = l.ref,
			u = l.refCleanup;
		if (a !== null)
			if (typeof u == 'function')
				try {
					u();
				} catch (e) {
					ol(l, t, e);
				} finally {
					(l.refCleanup = null),
						(l = l.alternate),
						l != null && (l.refCleanup = null);
				}
			else if (typeof a == 'function')
				try {
					a(null);
				} catch (e) {
					ol(l, t, e);
				}
			else a.current = null;
	}
	function G0(l) {
		var t = l.type,
			a = l.memoizedProps,
			u = l.stateNode;
		try {
			l: switch (t) {
				case 'button':
				case 'input':
				case 'select':
				case 'textarea':
					a.autoFocus && u.focus();
					break l;
				case 'img':
					a.src ? (u.src = a.src) : a.srcSet && (u.srcset = a.srcSet);
			}
		} catch (e) {
			ol(l, l.return, e);
		}
	}
	function dc(l, t, a) {
		try {
			var u = l.stateNode;
			cv(u, l.type, a, t), (u[wl] = t);
		} catch (e) {
			ol(l, l.return, e);
		}
	}
	function X0(l) {
		return (
			l.tag === 5 ||
			l.tag === 3 ||
			l.tag === 26 ||
			(l.tag === 27 && da(l.type)) ||
			l.tag === 4
		);
	}
	function oc(l) {
		l: for (;;) {
			for (; l.sibling === null; ) {
				if (l.return === null || X0(l.return)) return null;
				l = l.return;
			}
			for (
				l.sibling.return = l.return, l = l.sibling;
				l.tag !== 5 && l.tag !== 6 && l.tag !== 18;

			) {
				if (
					(l.tag === 27 && da(l.type)) ||
					l.flags & 2 ||
					l.child === null ||
					l.tag === 4
				)
					continue l;
				(l.child.return = l), (l = l.child);
			}
			if (!(l.flags & 2)) return l.stateNode;
		}
	}
	function rc(l, t, a) {
		var u = l.tag;
		if (u === 5 || u === 6)
			(l = l.stateNode),
				t
					? (a.nodeType === 9
							? a.body
							: a.nodeName === 'HTML'
							? a.ownerDocument.body
							: a
					  ).insertBefore(l, t)
					: ((t =
							a.nodeType === 9
								? a.body
								: a.nodeName === 'HTML'
								? a.ownerDocument.body
								: a),
					  t.appendChild(l),
					  (a = a._reactRootContainer),
					  a != null || t.onclick !== null || (t.onclick = An));
		else if (
			u !== 4 &&
			(u === 27 && da(l.type) && ((a = l.stateNode), (t = null)),
			(l = l.child),
			l !== null)
		)
			for (rc(l, t, a), l = l.sibling; l !== null; )
				rc(l, t, a), (l = l.sibling);
	}
	function dn(l, t, a) {
		var u = l.tag;
		if (u === 5 || u === 6)
			(l = l.stateNode), t ? a.insertBefore(l, t) : a.appendChild(l);
		else if (
			u !== 4 &&
			(u === 27 && da(l.type) && (a = l.stateNode), (l = l.child), l !== null)
		)
			for (dn(l, t, a), l = l.sibling; l !== null; )
				dn(l, t, a), (l = l.sibling);
	}
	function Q0(l) {
		var t = l.stateNode,
			a = l.memoizedProps;
		try {
			for (var u = l.type, e = t.attributes; e.length; )
				t.removeAttributeNode(e[0]);
			Xl(t, u, a), (t[Zl] = l), (t[wl] = a);
		} catch (n) {
			ol(l, l.return, n);
		}
	}
	var Xt = !1,
		Tl = !1,
		vc = !1,
		Z0 = typeof WeakSet == 'function' ? WeakSet : Set,
		pl = null;
	function Qr(l, t) {
		if (((l = l.containerInfo), (Yc = Bn), (l = Ii(l)), of(l))) {
			if ('selectionStart' in l)
				var a = { start: l.selectionStart, end: l.selectionEnd };
			else
				l: {
					a = ((a = l.ownerDocument) && a.defaultView) || window;
					var u = a.getSelection && a.getSelection();
					if (u && u.rangeCount !== 0) {
						a = u.anchorNode;
						var e = u.anchorOffset,
							n = u.focusNode;
						u = u.focusOffset;
						try {
							a.nodeType, n.nodeType;
						} catch {
							a = null;
							break l;
						}
						var f = 0,
							c = -1,
							i = -1,
							v = 0,
							S = 0,
							E = l,
							h = null;
						t: for (;;) {
							for (
								var m;
								E !== a || (e !== 0 && E.nodeType !== 3) || (c = f + e),
									E !== n || (u !== 0 && E.nodeType !== 3) || (i = f + u),
									E.nodeType === 3 && (f += E.nodeValue.length),
									(m = E.firstChild) !== null;

							)
								(h = E), (E = m);
							for (;;) {
								if (E === l) break t;
								if (
									(h === a && ++v === e && (c = f),
									h === n && ++S === u && (i = f),
									(m = E.nextSibling) !== null)
								)
									break;
								(E = h), (h = E.parentNode);
							}
							E = m;
						}
						a = c === -1 || i === -1 ? null : { start: c, end: i };
					} else a = null;
				}
			a = a || { start: 0, end: 0 };
		} else a = null;
		for (
			jc = { focusedElem: l, selectionRange: a }, Bn = !1, pl = t;
			pl !== null;

		)
			if (
				((t = pl), (l = t.child), (t.subtreeFlags & 1024) !== 0 && l !== null)
			)
				(l.return = t), (pl = l);
			else
				for (; pl !== null; ) {
					switch (((t = pl), (n = t.alternate), (l = t.flags), t.tag)) {
						case 0:
							break;
						case 11:
						case 15:
							break;
						case 1:
							if ((l & 1024) !== 0 && n !== null) {
								(l = void 0),
									(a = t),
									(e = n.memoizedProps),
									(n = n.memoizedState),
									(u = a.stateNode);
								try {
									var X = Ra(a.type, e, a.elementType === a.type);
									(l = u.getSnapshotBeforeUpdate(X, n)),
										(u.__reactInternalSnapshotBeforeUpdate = l);
								} catch (q) {
									ol(a, a.return, q);
								}
							}
							break;
						case 3:
							if ((l & 1024) !== 0) {
								if (
									((l = t.stateNode.containerInfo), (a = l.nodeType), a === 9)
								)
									Qc(l);
								else if (a === 1)
									switch (l.nodeName) {
										case 'HEAD':
										case 'HTML':
										case 'BODY':
											Qc(l);
											break;
										default:
											l.textContent = '';
									}
							}
							break;
						case 5:
						case 26:
						case 27:
						case 6:
						case 4:
						case 17:
							break;
						default:
							if ((l & 1024) !== 0) throw Error(y(163));
					}
					if (((l = t.sibling), l !== null)) {
						(l.return = t.return), (pl = l);
						break;
					}
					pl = t.return;
				}
	}
	function V0(l, t, a) {
		var u = a.flags;
		switch (a.tag) {
			case 0:
			case 11:
			case 15:
				ua(l, a), u & 4 && Fu(5, a);
				break;
			case 1:
				if ((ua(l, a), u & 4))
					if (((l = a.stateNode), t === null))
						try {
							l.componentDidMount();
						} catch (f) {
							ol(a, a.return, f);
						}
					else {
						var e = Ra(a.type, t.memoizedProps);
						t = t.memoizedState;
						try {
							l.componentDidUpdate(e, t, l.__reactInternalSnapshotBeforeUpdate);
						} catch (f) {
							ol(a, a.return, f);
						}
					}
				u & 64 && Y0(a), u & 512 && Pu(a, a.return);
				break;
			case 3:
				if ((ua(l, a), u & 64 && ((l = a.updateQueue), l !== null))) {
					if (((t = null), a.child !== null))
						switch (a.child.tag) {
							case 27:
							case 5:
								t = a.child.stateNode;
								break;
							case 1:
								t = a.child.stateNode;
						}
					try {
						Os(l, t);
					} catch (f) {
						ol(a, a.return, f);
					}
				}
				break;
			case 27:
				t === null && u & 4 && Q0(a);
			case 26:
			case 5:
				ua(l, a), t === null && u & 4 && G0(a), u & 512 && Pu(a, a.return);
				break;
			case 12:
				ua(l, a);
				break;
			case 13:
				ua(l, a),
					u & 4 && J0(l, a),
					u & 64 &&
						((l = a.memoizedState),
						l !== null &&
							((l = l.dehydrated),
							l !== null && ((a = $r.bind(null, a)), yv(l, a))));
				break;
			case 22:
				if (((u = a.memoizedState !== null || Xt), !u)) {
					(t = (t !== null && t.memoizedState !== null) || Tl), (e = Xt);
					var n = Tl;
					(Xt = u),
						(Tl = t) && !n ? ea(l, a, (a.subtreeFlags & 8772) !== 0) : ua(l, a),
						(Xt = e),
						(Tl = n);
				}
				break;
			case 30:
				break;
			default:
				ua(l, a);
		}
	}
	function L0(l) {
		var t = l.alternate;
		t !== null && ((l.alternate = null), L0(t)),
			(l.child = null),
			(l.deletions = null),
			(l.sibling = null),
			l.tag === 5 && ((t = l.stateNode), t !== null && Kn(t)),
			(l.stateNode = null),
			(l.return = null),
			(l.dependencies = null),
			(l.memoizedProps = null),
			(l.memoizedState = null),
			(l.pendingProps = null),
			(l.stateNode = null),
			(l.updateQueue = null);
	}
	var ml = null,
		$l = !1;
	function Qt(l, t, a) {
		for (a = a.child; a !== null; ) K0(l, t, a), (a = a.sibling);
	}
	function K0(l, t, a) {
		if (lt && typeof lt.onCommitFiberUnmount == 'function')
			try {
				lt.onCommitFiberUnmount(bu, a);
			} catch {}
		switch (a.tag) {
			case 26:
				Tl || Dt(a, t),
					Qt(l, t, a),
					a.memoizedState
						? a.memoizedState.count--
						: a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a));
				break;
			case 27:
				Tl || Dt(a, t);
				var u = ml,
					e = $l;
				da(a.type) && ((ml = a.stateNode), ($l = !1)),
					Qt(l, t, a),
					ce(a.stateNode),
					(ml = u),
					($l = e);
				break;
			case 5:
				Tl || Dt(a, t);
			case 6:
				if (
					((u = ml),
					(e = $l),
					(ml = null),
					Qt(l, t, a),
					(ml = u),
					($l = e),
					ml !== null)
				)
					if ($l)
						try {
							(ml.nodeType === 9
								? ml.body
								: ml.nodeName === 'HTML'
								? ml.ownerDocument.body
								: ml
							).removeChild(a.stateNode);
						} catch (n) {
							ol(a, t, n);
						}
					else
						try {
							ml.removeChild(a.stateNode);
						} catch (n) {
							ol(a, t, n);
						}
				break;
			case 18:
				ml !== null &&
					($l
						? ((l = ml),
						  Hd(
								l.nodeType === 9
									? l.body
									: l.nodeName === 'HTML'
									? l.ownerDocument.body
									: l,
								a.stateNode
						  ),
						  he(l))
						: Hd(ml, a.stateNode));
				break;
			case 4:
				(u = ml),
					(e = $l),
					(ml = a.stateNode.containerInfo),
					($l = !0),
					Qt(l, t, a),
					(ml = u),
					($l = e);
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				Tl || aa(2, a, t), Tl || aa(4, a, t), Qt(l, t, a);
				break;
			case 1:
				Tl ||
					(Dt(a, t),
					(u = a.stateNode),
					typeof u.componentWillUnmount == 'function' && j0(a, t, u)),
					Qt(l, t, a);
				break;
			case 21:
				Qt(l, t, a);
				break;
			case 22:
				(Tl = (u = Tl) || a.memoizedState !== null), Qt(l, t, a), (Tl = u);
				break;
			default:
				Qt(l, t, a);
		}
	}
	function J0(l, t) {
		if (
			t.memoizedState === null &&
			((l = t.alternate),
			l !== null &&
				((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
		)
			try {
				he(l);
			} catch (a) {
				ol(t, t.return, a);
			}
	}
	function Zr(l) {
		switch (l.tag) {
			case 13:
			case 19:
				var t = l.stateNode;
				return t === null && (t = l.stateNode = new Z0()), t;
			case 22:
				return (
					(l = l.stateNode),
					(t = l._retryCache),
					t === null && (t = l._retryCache = new Z0()),
					t
				);
			default:
				throw Error(y(435, l.tag));
		}
	}
	function yc(l, t) {
		var a = Zr(l);
		t.forEach(function (u) {
			var e = Fr.bind(null, l, u);
			a.has(u) || (a.add(u), u.then(e, e));
		});
	}
	function et(l, t) {
		var a = t.deletions;
		if (a !== null)
			for (var u = 0; u < a.length; u++) {
				var e = a[u],
					n = l,
					f = t,
					c = f;
				l: for (; c !== null; ) {
					switch (c.tag) {
						case 27:
							if (da(c.type)) {
								(ml = c.stateNode), ($l = !1);
								break l;
							}
							break;
						case 5:
							(ml = c.stateNode), ($l = !1);
							break l;
						case 3:
						case 4:
							(ml = c.stateNode.containerInfo), ($l = !0);
							break l;
					}
					c = c.return;
				}
				if (ml === null) throw Error(y(160));
				K0(n, f, e),
					(ml = null),
					($l = !1),
					(n = e.alternate),
					n !== null && (n.return = null),
					(e.return = null);
			}
		if (t.subtreeFlags & 13878)
			for (t = t.child; t !== null; ) w0(t, l), (t = t.sibling);
	}
	var Et = null;
	function w0(l, t) {
		var a = l.alternate,
			u = l.flags;
		switch (l.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				et(t, l),
					nt(l),
					u & 4 && (aa(3, l, l.return), Fu(3, l), aa(5, l, l.return));
				break;
			case 1:
				et(t, l),
					nt(l),
					u & 512 && (Tl || a === null || Dt(a, a.return)),
					u & 64 &&
						Xt &&
						((l = l.updateQueue),
						l !== null &&
							((u = l.callbacks),
							u !== null &&
								((a = l.shared.hiddenCallbacks),
								(l.shared.hiddenCallbacks = a === null ? u : a.concat(u)))));
				break;
			case 26:
				var e = Et;
				if (
					(et(t, l),
					nt(l),
					u & 512 && (Tl || a === null || Dt(a, a.return)),
					u & 4)
				) {
					var n = a !== null ? a.memoizedState : null;
					if (((u = l.memoizedState), a === null))
						if (u === null)
							if (l.stateNode === null) {
								l: {
									(u = l.type),
										(a = l.memoizedProps),
										(e = e.ownerDocument || e);
									t: switch (u) {
										case 'title':
											(n = e.getElementsByTagName('title')[0]),
												(!n ||
													n[Tu] ||
													n[Zl] ||
													n.namespaceURI === 'http://www.w3.org/2000/svg' ||
													n.hasAttribute('itemprop')) &&
													((n = e.createElement(u)),
													e.head.insertBefore(
														n,
														e.querySelector('head > title')
													)),
												Xl(n, u, a),
												(n[Zl] = l),
												Cl(n),
												(u = n);
											break l;
										case 'link':
											var f = Qd('link', 'href', e).get(u + (a.href || ''));
											if (f) {
												for (var c = 0; c < f.length; c++)
													if (
														((n = f[c]),
														n.getAttribute('href') ===
															(a.href == null || a.href === ''
																? null
																: a.href) &&
															n.getAttribute('rel') ===
																(a.rel == null ? null : a.rel) &&
															n.getAttribute('title') ===
																(a.title == null ? null : a.title) &&
															n.getAttribute('crossorigin') ===
																(a.crossOrigin == null ? null : a.crossOrigin))
													) {
														f.splice(c, 1);
														break t;
													}
											}
											(n = e.createElement(u)),
												Xl(n, u, a),
												e.head.appendChild(n);
											break;
										case 'meta':
											if (
												(f = Qd('meta', 'content', e).get(
													u + (a.content || '')
												))
											) {
												for (c = 0; c < f.length; c++)
													if (
														((n = f[c]),
														n.getAttribute('content') ===
															(a.content == null ? null : '' + a.content) &&
															n.getAttribute('name') ===
																(a.name == null ? null : a.name) &&
															n.getAttribute('property') ===
																(a.property == null ? null : a.property) &&
															n.getAttribute('http-equiv') ===
																(a.httpEquiv == null ? null : a.httpEquiv) &&
															n.getAttribute('charset') ===
																(a.charSet == null ? null : a.charSet))
													) {
														f.splice(c, 1);
														break t;
													}
											}
											(n = e.createElement(u)),
												Xl(n, u, a),
												e.head.appendChild(n);
											break;
										default:
											throw Error(y(468, u));
									}
									(n[Zl] = l), Cl(n), (u = n);
								}
								l.stateNode = u;
							} else Zd(e, l.type, l.stateNode);
						else l.stateNode = Xd(e, u, l.memoizedProps);
					else
						n !== u
							? (n === null
									? a.stateNode !== null &&
									  ((a = a.stateNode), a.parentNode.removeChild(a))
									: n.count--,
							  u === null
									? Zd(e, l.type, l.stateNode)
									: Xd(e, u, l.memoizedProps))
							: u === null &&
							  l.stateNode !== null &&
							  dc(l, l.memoizedProps, a.memoizedProps);
				}
				break;
			case 27:
				et(t, l),
					nt(l),
					u & 512 && (Tl || a === null || Dt(a, a.return)),
					a !== null && u & 4 && dc(l, l.memoizedProps, a.memoizedProps);
				break;
			case 5:
				if (
					(et(t, l),
					nt(l),
					u & 512 && (Tl || a === null || Dt(a, a.return)),
					l.flags & 32)
				) {
					e = l.stateNode;
					try {
						Qa(e, '');
					} catch (m) {
						ol(l, l.return, m);
					}
				}
				u & 4 &&
					l.stateNode != null &&
					((e = l.memoizedProps), dc(l, e, a !== null ? a.memoizedProps : e)),
					u & 1024 && (vc = !0);
				break;
			case 6:
				if ((et(t, l), nt(l), u & 4)) {
					if (l.stateNode === null) throw Error(y(162));
					(u = l.memoizedProps), (a = l.stateNode);
					try {
						a.nodeValue = u;
					} catch (m) {
						ol(l, l.return, m);
					}
				}
				break;
			case 3:
				if (
					((Dn = null),
					(e = Et),
					(Et = Mn(t.containerInfo)),
					et(t, l),
					(Et = e),
					nt(l),
					u & 4 && a !== null && a.memoizedState.isDehydrated)
				)
					try {
						he(t.containerInfo);
					} catch (m) {
						ol(l, l.return, m);
					}
				vc && ((vc = !1), W0(l));
				break;
			case 4:
				(u = Et),
					(Et = Mn(l.stateNode.containerInfo)),
					et(t, l),
					nt(l),
					(Et = u);
				break;
			case 12:
				et(t, l), nt(l);
				break;
			case 13:
				et(t, l),
					nt(l),
					l.child.flags & 8192 &&
						(l.memoizedState !== null) !=
							(a !== null && a.memoizedState !== null) &&
						(Ec = Tt()),
					u & 4 &&
						((u = l.updateQueue),
						u !== null && ((l.updateQueue = null), yc(l, u)));
				break;
			case 22:
				e = l.memoizedState !== null;
				var i = a !== null && a.memoizedState !== null,
					v = Xt,
					S = Tl;
				if (
					((Xt = v || e),
					(Tl = S || i),
					et(t, l),
					(Tl = S),
					(Xt = v),
					nt(l),
					u & 8192)
				)
					l: for (
						t = l.stateNode,
							t._visibility = e ? t._visibility & -2 : t._visibility | 1,
							e && (a === null || i || Xt || Tl || Na(l)),
							a = null,
							t = l;
						;

					) {
						if (t.tag === 5 || t.tag === 26) {
							if (a === null) {
								i = a = t;
								try {
									if (((n = i.stateNode), e))
										(f = n.style),
											typeof f.setProperty == 'function'
												? f.setProperty('display', 'none', 'important')
												: (f.display = 'none');
									else {
										c = i.stateNode;
										var E = i.memoizedProps.style,
											h =
												E != null && E.hasOwnProperty('display')
													? E.display
													: null;
										c.style.display =
											h == null || typeof h == 'boolean' ? '' : ('' + h).trim();
									}
								} catch (m) {
									ol(i, i.return, m);
								}
							}
						} else if (t.tag === 6) {
							if (a === null) {
								i = t;
								try {
									i.stateNode.nodeValue = e ? '' : i.memoizedProps;
								} catch (m) {
									ol(i, i.return, m);
								}
							}
						} else if (
							((t.tag !== 22 && t.tag !== 23) ||
								t.memoizedState === null ||
								t === l) &&
							t.child !== null
						) {
							(t.child.return = t), (t = t.child);
							continue;
						}
						if (t === l) break l;
						for (; t.sibling === null; ) {
							if (t.return === null || t.return === l) break l;
							a === t && (a = null), (t = t.return);
						}
						a === t && (a = null),
							(t.sibling.return = t.return),
							(t = t.sibling);
					}
				u & 4 &&
					((u = l.updateQueue),
					u !== null &&
						((a = u.retryQueue),
						a !== null && ((u.retryQueue = null), yc(l, a))));
				break;
			case 19:
				et(t, l),
					nt(l),
					u & 4 &&
						((u = l.updateQueue),
						u !== null && ((l.updateQueue = null), yc(l, u)));
				break;
			case 30:
				break;
			case 21:
				break;
			default:
				et(t, l), nt(l);
		}
	}
	function nt(l) {
		var t = l.flags;
		if (t & 2) {
			try {
				for (var a, u = l.return; u !== null; ) {
					if (X0(u)) {
						a = u;
						break;
					}
					u = u.return;
				}
				if (a == null) throw Error(y(160));
				switch (a.tag) {
					case 27:
						var e = a.stateNode,
							n = oc(l);
						dn(l, n, e);
						break;
					case 5:
						var f = a.stateNode;
						a.flags & 32 && (Qa(f, ''), (a.flags &= -33));
						var c = oc(l);
						dn(l, c, f);
						break;
					case 3:
					case 4:
						var i = a.stateNode.containerInfo,
							v = oc(l);
						rc(l, v, i);
						break;
					default:
						throw Error(y(161));
				}
			} catch (S) {
				ol(l, l.return, S);
			}
			l.flags &= -3;
		}
		t & 4096 && (l.flags &= -4097);
	}
	function W0(l) {
		if (l.subtreeFlags & 1024)
			for (l = l.child; l !== null; ) {
				var t = l;
				W0(t),
					t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
					(l = l.sibling);
			}
	}
	function ua(l, t) {
		if (t.subtreeFlags & 8772)
			for (t = t.child; t !== null; ) V0(l, t.alternate, t), (t = t.sibling);
	}
	function Na(l) {
		for (l = l.child; l !== null; ) {
			var t = l;
			switch (t.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					aa(4, t, t.return), Na(t);
					break;
				case 1:
					Dt(t, t.return);
					var a = t.stateNode;
					typeof a.componentWillUnmount == 'function' && j0(t, t.return, a),
						Na(t);
					break;
				case 27:
					ce(t.stateNode);
				case 26:
				case 5:
					Dt(t, t.return), Na(t);
					break;
				case 22:
					t.memoizedState === null && Na(t);
					break;
				case 30:
					Na(t);
					break;
				default:
					Na(t);
			}
			l = l.sibling;
		}
	}
	function ea(l, t, a) {
		for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
			var u = t.alternate,
				e = l,
				n = t,
				f = n.flags;
			switch (n.tag) {
				case 0:
				case 11:
				case 15:
					ea(e, n, a), Fu(4, n);
					break;
				case 1:
					if (
						(ea(e, n, a),
						(u = n),
						(e = u.stateNode),
						typeof e.componentDidMount == 'function')
					)
						try {
							e.componentDidMount();
						} catch (v) {
							ol(u, u.return, v);
						}
					if (((u = n), (e = u.updateQueue), e !== null)) {
						var c = u.stateNode;
						try {
							var i = e.shared.hiddenCallbacks;
							if (i !== null)
								for (e.shared.hiddenCallbacks = null, e = 0; e < i.length; e++)
									Ms(i[e], c);
						} catch (v) {
							ol(u, u.return, v);
						}
					}
					a && f & 64 && Y0(n), Pu(n, n.return);
					break;
				case 27:
					Q0(n);
				case 26:
				case 5:
					ea(e, n, a), a && u === null && f & 4 && G0(n), Pu(n, n.return);
					break;
				case 12:
					ea(e, n, a);
					break;
				case 13:
					ea(e, n, a), a && f & 4 && J0(e, n);
					break;
				case 22:
					n.memoizedState === null && ea(e, n, a), Pu(n, n.return);
					break;
				case 30:
					break;
				default:
					ea(e, n, a);
			}
			t = t.sibling;
		}
	}
	function hc(l, t) {
		var a = null;
		l !== null &&
			l.memoizedState !== null &&
			l.memoizedState.cachePool !== null &&
			(a = l.memoizedState.cachePool.pool),
			(l = null),
			t.memoizedState !== null &&
				t.memoizedState.cachePool !== null &&
				(l = t.memoizedState.cachePool.pool),
			l !== a && (l != null && l.refCount++, a != null && Yu(a));
	}
	function mc(l, t) {
		(l = null),
			t.alternate !== null && (l = t.alternate.memoizedState.cache),
			(t = t.memoizedState.cache),
			t !== l && (t.refCount++, l != null && Yu(l));
	}
	function zt(l, t, a, u) {
		if (t.subtreeFlags & 10256)
			for (t = t.child; t !== null; ) k0(l, t, a, u), (t = t.sibling);
	}
	function k0(l, t, a, u) {
		var e = t.flags;
		switch (t.tag) {
			case 0:
			case 11:
			case 15:
				zt(l, t, a, u), e & 2048 && Fu(9, t);
				break;
			case 1:
				zt(l, t, a, u);
				break;
			case 3:
				zt(l, t, a, u),
					e & 2048 &&
						((l = null),
						t.alternate !== null && (l = t.alternate.memoizedState.cache),
						(t = t.memoizedState.cache),
						t !== l && (t.refCount++, l != null && Yu(l)));
				break;
			case 12:
				if (e & 2048) {
					zt(l, t, a, u), (l = t.stateNode);
					try {
						var n = t.memoizedProps,
							f = n.id,
							c = n.onPostCommit;
						typeof c == 'function' &&
							c(
								f,
								t.alternate === null ? 'mount' : 'update',
								l.passiveEffectDuration,
								-0
							);
					} catch (i) {
						ol(t, t.return, i);
					}
				} else zt(l, t, a, u);
				break;
			case 13:
				zt(l, t, a, u);
				break;
			case 23:
				break;
			case 22:
				(n = t.stateNode),
					(f = t.alternate),
					t.memoizedState !== null
						? n._visibility & 2
							? zt(l, t, a, u)
							: Iu(l, t)
						: n._visibility & 2
						? zt(l, t, a, u)
						: ((n._visibility |= 2),
						  fu(l, t, a, u, (t.subtreeFlags & 10256) !== 0)),
					e & 2048 && hc(f, t);
				break;
			case 24:
				zt(l, t, a, u), e & 2048 && mc(t.alternate, t);
				break;
			default:
				zt(l, t, a, u);
		}
	}
	function fu(l, t, a, u, e) {
		for (e = e && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
			var n = l,
				f = t,
				c = a,
				i = u,
				v = f.flags;
			switch (f.tag) {
				case 0:
				case 11:
				case 15:
					fu(n, f, c, i, e), Fu(8, f);
					break;
				case 23:
					break;
				case 22:
					var S = f.stateNode;
					f.memoizedState !== null
						? S._visibility & 2
							? fu(n, f, c, i, e)
							: Iu(n, f)
						: ((S._visibility |= 2), fu(n, f, c, i, e)),
						e && v & 2048 && hc(f.alternate, f);
					break;
				case 24:
					fu(n, f, c, i, e), e && v & 2048 && mc(f.alternate, f);
					break;
				default:
					fu(n, f, c, i, e);
			}
			t = t.sibling;
		}
	}
	function Iu(l, t) {
		if (t.subtreeFlags & 10256)
			for (t = t.child; t !== null; ) {
				var a = l,
					u = t,
					e = u.flags;
				switch (u.tag) {
					case 22:
						Iu(a, u), e & 2048 && hc(u.alternate, u);
						break;
					case 24:
						Iu(a, u), e & 2048 && mc(u.alternate, u);
						break;
					default:
						Iu(a, u);
				}
				t = t.sibling;
			}
	}
	var le = 8192;
	function cu(l) {
		if (l.subtreeFlags & le)
			for (l = l.child; l !== null; ) $0(l), (l = l.sibling);
	}
	function $0(l) {
		switch (l.tag) {
			case 26:
				cu(l),
					l.flags & le &&
						l.memoizedState !== null &&
						_v(Et, l.memoizedState, l.memoizedProps);
				break;
			case 5:
				cu(l);
				break;
			case 3:
			case 4:
				var t = Et;
				(Et = Mn(l.stateNode.containerInfo)), cu(l), (Et = t);
				break;
			case 22:
				l.memoizedState === null &&
					((t = l.alternate),
					t !== null && t.memoizedState !== null
						? ((t = le), (le = 16777216), cu(l), (le = t))
						: cu(l));
				break;
			default:
				cu(l);
		}
	}
	function F0(l) {
		var t = l.alternate;
		if (t !== null && ((l = t.child), l !== null)) {
			t.child = null;
			do (t = l.sibling), (l.sibling = null), (l = t);
			while (l !== null);
		}
	}
	function te(l) {
		var t = l.deletions;
		if ((l.flags & 16) !== 0) {
			if (t !== null)
				for (var a = 0; a < t.length; a++) {
					var u = t[a];
					(pl = u), I0(u, l);
				}
			F0(l);
		}
		if (l.subtreeFlags & 10256)
			for (l = l.child; l !== null; ) P0(l), (l = l.sibling);
	}
	function P0(l) {
		switch (l.tag) {
			case 0:
			case 11:
			case 15:
				te(l), l.flags & 2048 && aa(9, l, l.return);
				break;
			case 3:
				te(l);
				break;
			case 12:
				te(l);
				break;
			case 22:
				var t = l.stateNode;
				l.memoizedState !== null &&
				t._visibility & 2 &&
				(l.return === null || l.return.tag !== 13)
					? ((t._visibility &= -3), on(l))
					: te(l);
				break;
			default:
				te(l);
		}
	}
	function on(l) {
		var t = l.deletions;
		if ((l.flags & 16) !== 0) {
			if (t !== null)
				for (var a = 0; a < t.length; a++) {
					var u = t[a];
					(pl = u), I0(u, l);
				}
			F0(l);
		}
		for (l = l.child; l !== null; ) {
			switch (((t = l), t.tag)) {
				case 0:
				case 11:
				case 15:
					aa(8, t, t.return), on(t);
					break;
				case 22:
					(a = t.stateNode),
						a._visibility & 2 && ((a._visibility &= -3), on(t));
					break;
				default:
					on(t);
			}
			l = l.sibling;
		}
	}
	function I0(l, t) {
		for (; pl !== null; ) {
			var a = pl;
			switch (a.tag) {
				case 0:
				case 11:
				case 15:
					aa(8, a, t);
					break;
				case 23:
				case 22:
					if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
						var u = a.memoizedState.cachePool.pool;
						u != null && u.refCount++;
					}
					break;
				case 24:
					Yu(a.memoizedState.cache);
			}
			if (((u = a.child), u !== null)) (u.return = a), (pl = u);
			else
				l: for (a = l; pl !== null; ) {
					u = pl;
					var e = u.sibling,
						n = u.return;
					if ((L0(u), u === a)) {
						pl = null;
						break l;
					}
					if (e !== null) {
						(e.return = n), (pl = e);
						break l;
					}
					pl = n;
				}
		}
	}
	var Vr = {
			getCacheForType: function (l) {
				var t = Vl(_l),
					a = t.data.get(l);
				return a === void 0 && ((a = l()), t.data.set(l, a)), a;
			},
		},
		Lr = typeof WeakMap == 'function' ? WeakMap : Map,
		el = 0,
		vl = null,
		W = null,
		P = 0,
		nl = 0,
		ft = null,
		na = !1,
		iu = !1,
		Sc = !1,
		Zt = 0,
		El = 0,
		fa = 0,
		Ca = 0,
		gc = 0,
		St = 0,
		su = 0,
		ae = null,
		Fl = null,
		bc = !1,
		Ec = 0,
		rn = 1 / 0,
		vn = null,
		ca = null,
		Gl = 0,
		ia = null,
		du = null,
		ou = 0,
		Ac = 0,
		Tc = null,
		ld = null,
		ue = 0,
		Mc = null;
	function ct() {
		if ((el & 2) !== 0 && P !== 0) return P & -P;
		if (g.T !== null) {
			var l = Pa;
			return l !== 0 ? l : Rc();
		}
		return mi();
	}
	function td() {
		St === 0 && (St = (P & 536870912) === 0 || al ? ri() : 536870912);
		var l = mt.current;
		return l !== null && (l.flags |= 32), St;
	}
	function it(l, t, a) {
		((l === vl && (nl === 2 || nl === 9)) || l.cancelPendingCommit !== null) &&
			(ru(l, 0), sa(l, P, St, !1)),
			Au(l, a),
			((el & 2) === 0 || l !== vl) &&
				(l === vl &&
					((el & 2) === 0 && (Ca |= a), El === 4 && sa(l, P, St, !1)),
				_t(l));
	}
	function ad(l, t, a) {
		if ((el & 6) !== 0) throw Error(y(327));
		var u = (!a && (t & 124) === 0 && (t & l.expiredLanes) === 0) || Eu(l, t),
			e = u ? wr(l, t) : zc(l, t, !0),
			n = u;
		do {
			if (e === 0) {
				iu && !u && sa(l, t, 0, !1);
				break;
			} else {
				if (((a = l.current.alternate), n && !Kr(a))) {
					(e = zc(l, t, !1)), (n = !1);
					continue;
				}
				if (e === 2) {
					if (((n = t), l.errorRecoveryDisabledLanes & n)) var f = 0;
					else
						(f = l.pendingLanes & -536870913),
							(f = f !== 0 ? f : f & 536870912 ? 536870912 : 0);
					if (f !== 0) {
						t = f;
						l: {
							var c = l;
							e = ae;
							var i = c.current.memoizedState.isDehydrated;
							if ((i && (ru(c, f).flags |= 256), (f = zc(c, f, !1)), f !== 2)) {
								if (Sc && !i) {
									(c.errorRecoveryDisabledLanes |= n), (Ca |= n), (e = 4);
									break l;
								}
								(n = Fl),
									(Fl = e),
									n !== null && (Fl === null ? (Fl = n) : Fl.push.apply(Fl, n));
							}
							e = f;
						}
						if (((n = !1), e !== 2)) continue;
					}
				}
				if (e === 1) {
					ru(l, 0), sa(l, t, 0, !0);
					break;
				}
				l: {
					switch (((u = l), (n = e), n)) {
						case 0:
						case 1:
							throw Error(y(345));
						case 4:
							if ((t & 4194048) !== t) break;
						case 6:
							sa(u, t, St, !na);
							break l;
						case 2:
							Fl = null;
							break;
						case 3:
						case 5:
							break;
						default:
							throw Error(y(329));
					}
					if ((t & 62914560) === t && ((e = Ec + 300 - Tt()), 10 < e)) {
						if ((sa(u, t, St, !na), Me(u, 0, !0) !== 0)) break l;
						u.timeoutHandle = Nd(
							ud.bind(null, u, a, Fl, vn, bc, t, St, Ca, su, na, n, 2, -0, 0),
							e
						);
						break l;
					}
					ud(u, a, Fl, vn, bc, t, St, Ca, su, na, n, 0, -0, 0);
				}
			}
			break;
		} while (!0);
		_t(l);
	}
	function ud(l, t, a, u, e, n, f, c, i, v, S, E, h, m) {
		if (
			((l.timeoutHandle = -1),
			(E = t.subtreeFlags),
			(E & 8192 || (E & 16785408) === 16785408) &&
				((de = { stylesheets: null, count: 0, unsuspend: zv }),
				$0(t),
				(E = Bv()),
				E !== null))
		) {
			(l.cancelPendingCommit = E(
				dd.bind(null, l, t, n, a, u, e, f, c, i, S, 1, h, m)
			)),
				sa(l, n, f, !v);
			return;
		}
		dd(l, t, n, a, u, e, f, c, i);
	}
	function Kr(l) {
		for (var t = l; ; ) {
			var a = t.tag;
			if (
				(a === 0 || a === 11 || a === 15) &&
				t.flags & 16384 &&
				((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
			)
				for (var u = 0; u < a.length; u++) {
					var e = a[u],
						n = e.getSnapshot;
					e = e.value;
					try {
						if (!at(n(), e)) return !1;
					} catch {
						return !1;
					}
				}
			if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
				(a.return = t), (t = a);
			else {
				if (t === l) break;
				for (; t.sibling === null; ) {
					if (t.return === null || t.return === l) return !0;
					t = t.return;
				}
				(t.sibling.return = t.return), (t = t.sibling);
			}
		}
		return !0;
	}
	function sa(l, t, a, u) {
		(t &= ~gc),
			(t &= ~Ca),
			(l.suspendedLanes |= t),
			(l.pingedLanes &= ~t),
			u && (l.warmLanes |= t),
			(u = l.expirationTimes);
		for (var e = t; 0 < e; ) {
			var n = 31 - tt(e),
				f = 1 << n;
			(u[n] = -1), (e &= ~f);
		}
		a !== 0 && yi(l, a, t);
	}
	function yn() {
		return (el & 6) === 0 ? (ee(0), !1) : !0;
	}
	function Oc() {
		if (W !== null) {
			if (nl === 0) var l = W.return;
			else (l = W), (pt = za = null), Qf(l), (eu = null), (Wu = 0), (l = W);
			for (; l !== null; ) q0(l.alternate, l), (l = l.return);
			W = null;
		}
	}
	function ru(l, t) {
		var a = l.timeoutHandle;
		a !== -1 && ((l.timeoutHandle = -1), sv(a)),
			(a = l.cancelPendingCommit),
			a !== null && ((l.cancelPendingCommit = null), a()),
			Oc(),
			(vl = l),
			(W = a = Nt(l.current, null)),
			(P = t),
			(nl = 0),
			(ft = null),
			(na = !1),
			(iu = Eu(l, t)),
			(Sc = !1),
			(su = St = gc = Ca = fa = El = 0),
			(Fl = ae = null),
			(bc = !1),
			(t & 8) !== 0 && (t |= t & 32);
		var u = l.entangledLanes;
		if (u !== 0)
			for (l = l.entanglements, u &= t; 0 < u; ) {
				var e = 31 - tt(u),
					n = 1 << e;
				(t |= l[e]), (u &= ~n);
			}
		return (Zt = t), xe(), a;
	}
	function ed(l, t) {
		(V = null),
			(g.H = ln),
			t === Gu || t === Le
				? ((t = As()), (nl = 3))
				: t === gs
				? ((t = As()), (nl = 4))
				: (nl =
						t === T0
							? 8
							: t !== null &&
							  typeof t == 'object' &&
							  typeof t.then == 'function'
							? 6
							: 1),
			(ft = t),
			W === null && ((El = 1), nn(l, rt(t, l.current)));
	}
	function nd() {
		var l = g.H;
		return (g.H = ln), l === null ? ln : l;
	}
	function fd() {
		var l = g.A;
		return (g.A = Vr), l;
	}
	function Dc() {
		(El = 4),
			na || ((P & 4194048) !== P && mt.current !== null) || (iu = !0),
			((fa & 134217727) === 0 && (Ca & 134217727) === 0) ||
				vl === null ||
				sa(vl, P, St, !1);
	}
	function zc(l, t, a) {
		var u = el;
		el |= 2;
		var e = nd(),
			n = fd();
		(vl !== l || P !== t) && ((vn = null), ru(l, t)), (t = !1);
		var f = El;
		l: do
			try {
				if (nl !== 0 && W !== null) {
					var c = W,
						i = ft;
					switch (nl) {
						case 8:
							Oc(), (f = 6);
							break l;
						case 3:
						case 2:
						case 9:
						case 6:
							mt.current === null && (t = !0);
							var v = nl;
							if (((nl = 0), (ft = null), vu(l, c, i, v), a && iu)) {
								f = 0;
								break l;
							}
							break;
						default:
							(v = nl), (nl = 0), (ft = null), vu(l, c, i, v);
					}
				}
				Jr(), (f = El);
				break;
			} catch (S) {
				ed(l, S);
			}
		while (!0);
		return (
			t && l.shellSuspendCounter++,
			(pt = za = null),
			(el = u),
			(g.H = e),
			(g.A = n),
			W === null && ((vl = null), (P = 0), xe()),
			f
		);
	}
	function Jr() {
		for (; W !== null; ) cd(W);
	}
	function wr(l, t) {
		var a = el;
		el |= 2;
		var u = nd(),
			e = fd();
		vl !== l || P !== t
			? ((vn = null), (rn = Tt() + 500), ru(l, t))
			: (iu = Eu(l, t));
		l: do
			try {
				if (nl !== 0 && W !== null) {
					t = W;
					var n = ft;
					t: switch (nl) {
						case 1:
							(nl = 0), (ft = null), vu(l, t, n, 1);
							break;
						case 2:
						case 9:
							if (bs(n)) {
								(nl = 0), (ft = null), id(t);
								break;
							}
							(t = function () {
								(nl !== 2 && nl !== 9) || vl !== l || (nl = 7), _t(l);
							}),
								n.then(t, t);
							break l;
						case 3:
							nl = 7;
							break l;
						case 4:
							nl = 5;
							break l;
						case 7:
							bs(n)
								? ((nl = 0), (ft = null), id(t))
								: ((nl = 0), (ft = null), vu(l, t, n, 7));
							break;
						case 5:
							var f = null;
							switch (W.tag) {
								case 26:
									f = W.memoizedState;
								case 5:
								case 27:
									var c = W;
									if (!f || Vd(f)) {
										(nl = 0), (ft = null);
										var i = c.sibling;
										if (i !== null) W = i;
										else {
											var v = c.return;
											v !== null ? ((W = v), hn(v)) : (W = null);
										}
										break t;
									}
							}
							(nl = 0), (ft = null), vu(l, t, n, 5);
							break;
						case 6:
							(nl = 0), (ft = null), vu(l, t, n, 6);
							break;
						case 8:
							Oc(), (El = 6);
							break l;
						default:
							throw Error(y(462));
					}
				}
				Wr();
				break;
			} catch (S) {
				ed(l, S);
			}
		while (!0);
		return (
			(pt = za = null),
			(g.H = u),
			(g.A = e),
			(el = a),
			W !== null ? 0 : ((vl = null), (P = 0), xe(), El)
		);
	}
	function Wr() {
		for (; W !== null && !mo(); ) cd(W);
	}
	function cd(l) {
		var t = p0(l.alternate, l, Zt);
		(l.memoizedProps = l.pendingProps), t === null ? hn(l) : (W = t);
	}
	function id(l) {
		var t = l,
			a = t.alternate;
		switch (t.tag) {
			case 15:
			case 0:
				t = B0(a, t, t.pendingProps, t.type, void 0, P);
				break;
			case 11:
				t = B0(a, t, t.pendingProps, t.type.render, t.ref, P);
				break;
			case 5:
				Qf(t);
			default:
				q0(a, t), (t = W = ss(t, Zt)), (t = p0(a, t, Zt));
		}
		(l.memoizedProps = l.pendingProps), t === null ? hn(l) : (W = t);
	}
	function vu(l, t, a, u) {
		(pt = za = null), Qf(t), (eu = null), (Wu = 0);
		var e = t.return;
		try {
			if (Yr(l, e, t, a, P)) {
				(El = 1), nn(l, rt(a, l.current)), (W = null);
				return;
			}
		} catch (n) {
			if (e !== null) throw ((W = e), n);
			(El = 1), nn(l, rt(a, l.current)), (W = null);
			return;
		}
		t.flags & 32768
			? (al || u === 1
					? (l = !0)
					: iu || (P & 536870912) !== 0
					? (l = !1)
					: ((na = l = !0),
					  (u === 2 || u === 9 || u === 3 || u === 6) &&
							((u = mt.current),
							u !== null && u.tag === 13 && (u.flags |= 16384))),
			  sd(t, l))
			: hn(t);
	}
	function hn(l) {
		var t = l;
		do {
			if ((t.flags & 32768) !== 0) {
				sd(t, na);
				return;
			}
			l = t.return;
			var a = Gr(t.alternate, t, Zt);
			if (a !== null) {
				W = a;
				return;
			}
			if (((t = t.sibling), t !== null)) {
				W = t;
				return;
			}
			W = t = l;
		} while (t !== null);
		El === 0 && (El = 5);
	}
	function sd(l, t) {
		do {
			var a = Xr(l.alternate, l);
			if (a !== null) {
				(a.flags &= 32767), (W = a);
				return;
			}
			if (
				((a = l.return),
				a !== null &&
					((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
				!t && ((l = l.sibling), l !== null))
			) {
				W = l;
				return;
			}
			W = l = a;
		} while (l !== null);
		(El = 6), (W = null);
	}
	function dd(l, t, a, u, e, n, f, c, i) {
		l.cancelPendingCommit = null;
		do mn();
		while (Gl !== 0);
		if ((el & 6) !== 0) throw Error(y(327));
		if (t !== null) {
			if (t === l.current) throw Error(y(177));
			if (
				((n = t.lanes | t.childLanes),
				(n |= mf),
				zo(l, a, n, f, c, i),
				l === vl && ((W = vl = null), (P = 0)),
				(du = t),
				(ia = l),
				(ou = a),
				(Ac = n),
				(Tc = e),
				(ld = u),
				(t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
					? ((l.callbackNode = null),
					  (l.callbackPriority = 0),
					  Pr(Ee, function () {
							return hd(), null;
					  }))
					: ((l.callbackNode = null), (l.callbackPriority = 0)),
				(u = (t.flags & 13878) !== 0),
				(t.subtreeFlags & 13878) !== 0 || u)
			) {
				(u = g.T), (g.T = null), (e = z.p), (z.p = 2), (f = el), (el |= 4);
				try {
					Qr(l, t, a);
				} finally {
					(el = f), (z.p = e), (g.T = u);
				}
			}
			(Gl = 1), od(), rd(), vd();
		}
	}
	function od() {
		if (Gl === 1) {
			Gl = 0;
			var l = ia,
				t = du,
				a = (t.flags & 13878) !== 0;
			if ((t.subtreeFlags & 13878) !== 0 || a) {
				(a = g.T), (g.T = null);
				var u = z.p;
				z.p = 2;
				var e = el;
				el |= 4;
				try {
					w0(t, l);
					var n = jc,
						f = Ii(l.containerInfo),
						c = n.focusedElem,
						i = n.selectionRange;
					if (
						f !== c &&
						c &&
						c.ownerDocument &&
						Pi(c.ownerDocument.documentElement, c)
					) {
						if (i !== null && of(c)) {
							var v = i.start,
								S = i.end;
							if ((S === void 0 && (S = v), 'selectionStart' in c))
								(c.selectionStart = v),
									(c.selectionEnd = Math.min(S, c.value.length));
							else {
								var E = c.ownerDocument || document,
									h = (E && E.defaultView) || window;
								if (h.getSelection) {
									var m = h.getSelection(),
										X = c.textContent.length,
										q = Math.min(i.start, X),
										il = i.end === void 0 ? q : Math.min(i.end, X);
									!m.extend && q > il && ((f = il), (il = q), (q = f));
									var o = Fi(c, q),
										d = Fi(c, il);
									if (
										o &&
										d &&
										(m.rangeCount !== 1 ||
											m.anchorNode !== o.node ||
											m.anchorOffset !== o.offset ||
											m.focusNode !== d.node ||
											m.focusOffset !== d.offset)
									) {
										var r = E.createRange();
										r.setStart(o.node, o.offset),
											m.removeAllRanges(),
											q > il
												? (m.addRange(r), m.extend(d.node, d.offset))
												: (r.setEnd(d.node, d.offset), m.addRange(r));
									}
								}
							}
						}
						for (E = [], m = c; (m = m.parentNode); )
							m.nodeType === 1 &&
								E.push({ element: m, left: m.scrollLeft, top: m.scrollTop });
						for (
							typeof c.focus == 'function' && c.focus(), c = 0;
							c < E.length;
							c++
						) {
							var b = E[c];
							(b.element.scrollLeft = b.left), (b.element.scrollTop = b.top);
						}
					}
					(Bn = !!Yc), (jc = Yc = null);
				} finally {
					(el = e), (z.p = u), (g.T = a);
				}
			}
			(l.current = t), (Gl = 2);
		}
	}
	function rd() {
		if (Gl === 2) {
			Gl = 0;
			var l = ia,
				t = du,
				a = (t.flags & 8772) !== 0;
			if ((t.subtreeFlags & 8772) !== 0 || a) {
				(a = g.T), (g.T = null);
				var u = z.p;
				z.p = 2;
				var e = el;
				el |= 4;
				try {
					V0(l, t.alternate, t);
				} finally {
					(el = e), (z.p = u), (g.T = a);
				}
			}
			Gl = 3;
		}
	}
	function vd() {
		if (Gl === 4 || Gl === 3) {
			(Gl = 0), So();
			var l = ia,
				t = du,
				a = ou,
				u = ld;
			(t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
				? (Gl = 5)
				: ((Gl = 0), (du = ia = null), yd(l, l.pendingLanes));
			var e = l.pendingLanes;
			if (
				(e === 0 && (ca = null),
				Vn(a),
				(t = t.stateNode),
				lt && typeof lt.onCommitFiberRoot == 'function')
			)
				try {
					lt.onCommitFiberRoot(bu, t, void 0, (t.current.flags & 128) === 128);
				} catch {}
			if (u !== null) {
				(t = g.T), (e = z.p), (z.p = 2), (g.T = null);
				try {
					for (var n = l.onRecoverableError, f = 0; f < u.length; f++) {
						var c = u[f];
						n(c.value, { componentStack: c.stack });
					}
				} finally {
					(g.T = t), (z.p = e);
				}
			}
			(ou & 3) !== 0 && mn(),
				_t(l),
				(e = l.pendingLanes),
				(a & 4194090) !== 0 && (e & 42) !== 0
					? l === Mc
						? ue++
						: ((ue = 0), (Mc = l))
					: (ue = 0),
				ee(0);
		}
	}
	function yd(l, t) {
		(l.pooledCacheLanes &= t) === 0 &&
			((t = l.pooledCache), t != null && ((l.pooledCache = null), Yu(t)));
	}
	function mn(l) {
		return od(), rd(), vd(), hd();
	}
	function hd() {
		if (Gl !== 5) return !1;
		var l = ia,
			t = Ac;
		Ac = 0;
		var a = Vn(ou),
			u = g.T,
			e = z.p;
		try {
			(z.p = 32 > a ? 32 : a), (g.T = null), (a = Tc), (Tc = null);
			var n = ia,
				f = ou;
			if (((Gl = 0), (du = ia = null), (ou = 0), (el & 6) !== 0))
				throw Error(y(331));
			var c = el;
			if (
				((el |= 4),
				P0(n.current),
				k0(n, n.current, f, a),
				(el = c),
				ee(0, !1),
				lt && typeof lt.onPostCommitFiberRoot == 'function')
			)
				try {
					lt.onPostCommitFiberRoot(bu, n);
				} catch {}
			return !0;
		} finally {
			(z.p = e), (g.T = u), yd(l, t);
		}
	}
	function md(l, t, a) {
		(t = rt(a, t)),
			(t = tc(l.stateNode, t, 2)),
			(l = Pt(l, t, 2)),
			l !== null && (Au(l, 2), _t(l));
	}
	function ol(l, t, a) {
		if (l.tag === 3) md(l, l, a);
		else
			for (; t !== null; ) {
				if (t.tag === 3) {
					md(t, l, a);
					break;
				} else if (t.tag === 1) {
					var u = t.stateNode;
					if (
						typeof t.type.getDerivedStateFromError == 'function' ||
						(typeof u.componentDidCatch == 'function' &&
							(ca === null || !ca.has(u)))
					) {
						(l = rt(a, l)),
							(a = E0(2)),
							(u = Pt(t, a, 2)),
							u !== null && (A0(a, u, t, l), Au(u, 2), _t(u));
						break;
					}
				}
				t = t.return;
			}
	}
	function _c(l, t, a) {
		var u = l.pingCache;
		if (u === null) {
			u = l.pingCache = new Lr();
			var e = new Set();
			u.set(t, e);
		} else (e = u.get(t)), e === void 0 && ((e = new Set()), u.set(t, e));
		e.has(a) ||
			((Sc = !0), e.add(a), (l = kr.bind(null, l, t, a)), t.then(l, l));
	}
	function kr(l, t, a) {
		var u = l.pingCache;
		u !== null && u.delete(t),
			(l.pingedLanes |= l.suspendedLanes & a),
			(l.warmLanes &= ~a),
			vl === l &&
				(P & a) === a &&
				(El === 4 || (El === 3 && (P & 62914560) === P && 300 > Tt() - Ec)
					? (el & 2) === 0 && ru(l, 0)
					: (gc |= a),
				su === P && (su = 0)),
			_t(l);
	}
	function Sd(l, t) {
		t === 0 && (t = vi()), (l = Wa(l, t)), l !== null && (Au(l, t), _t(l));
	}
	function $r(l) {
		var t = l.memoizedState,
			a = 0;
		t !== null && (a = t.retryLane), Sd(l, a);
	}
	function Fr(l, t) {
		var a = 0;
		switch (l.tag) {
			case 13:
				var u = l.stateNode,
					e = l.memoizedState;
				e !== null && (a = e.retryLane);
				break;
			case 19:
				u = l.stateNode;
				break;
			case 22:
				u = l.stateNode._retryCache;
				break;
			default:
				throw Error(y(314));
		}
		u !== null && u.delete(t), Sd(l, a);
	}
	function Pr(l, t) {
		return Gn(l, t);
	}
	var Sn = null,
		yu = null,
		Bc = !1,
		gn = !1,
		Uc = !1,
		Ha = 0;
	function _t(l) {
		l !== yu &&
			l.next === null &&
			(yu === null ? (Sn = yu = l) : (yu = yu.next = l)),
			(gn = !0),
			Bc || ((Bc = !0), lv());
	}
	function ee(l, t) {
		if (!Uc && gn) {
			Uc = !0;
			do
				for (var a = !1, u = Sn; u !== null; ) {
					if (l !== 0) {
						var e = u.pendingLanes;
						if (e === 0) var n = 0;
						else {
							var f = u.suspendedLanes,
								c = u.pingedLanes;
							(n = (1 << (31 - tt(42 | l) + 1)) - 1),
								(n &= e & ~(f & ~c)),
								(n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0);
						}
						n !== 0 && ((a = !0), Ad(u, n));
					} else
						(n = P),
							(n = Me(
								u,
								u === vl ? n : 0,
								u.cancelPendingCommit !== null || u.timeoutHandle !== -1
							)),
							(n & 3) === 0 || Eu(u, n) || ((a = !0), Ad(u, n));
					u = u.next;
				}
			while (a);
			Uc = !1;
		}
	}
	function Ir() {
		gd();
	}
	function gd() {
		gn = Bc = !1;
		var l = 0;
		Ha !== 0 && (iv() && (l = Ha), (Ha = 0));
		for (var t = Tt(), a = null, u = Sn; u !== null; ) {
			var e = u.next,
				n = bd(u, t);
			n === 0
				? ((u.next = null),
				  a === null ? (Sn = e) : (a.next = e),
				  e === null && (yu = a))
				: ((a = u), (l !== 0 || (n & 3) !== 0) && (gn = !0)),
				(u = e);
		}
		ee(l);
	}
	function bd(l, t) {
		for (
			var a = l.suspendedLanes,
				u = l.pingedLanes,
				e = l.expirationTimes,
				n = l.pendingLanes & -62914561;
			0 < n;

		) {
			var f = 31 - tt(n),
				c = 1 << f,
				i = e[f];
			i === -1
				? ((c & a) === 0 || (c & u) !== 0) && (e[f] = Do(c, t))
				: i <= t && (l.expiredLanes |= c),
				(n &= ~c);
		}
		if (
			((t = vl),
			(a = P),
			(a = Me(
				l,
				l === t ? a : 0,
				l.cancelPendingCommit !== null || l.timeoutHandle !== -1
			)),
			(u = l.callbackNode),
			a === 0 ||
				(l === t && (nl === 2 || nl === 9)) ||
				l.cancelPendingCommit !== null)
		)
			return (
				u !== null && u !== null && Xn(u),
				(l.callbackNode = null),
				(l.callbackPriority = 0)
			);
		if ((a & 3) === 0 || Eu(l, a)) {
			if (((t = a & -a), t === l.callbackPriority)) return t;
			switch ((u !== null && Xn(u), Vn(a))) {
				case 2:
				case 8:
					a = di;
					break;
				case 32:
					a = Ee;
					break;
				case 268435456:
					a = oi;
					break;
				default:
					a = Ee;
			}
			return (
				(u = Ed.bind(null, l)),
				(a = Gn(a, u)),
				(l.callbackPriority = t),
				(l.callbackNode = a),
				t
			);
		}
		return (
			u !== null && u !== null && Xn(u),
			(l.callbackPriority = 2),
			(l.callbackNode = null),
			2
		);
	}
	function Ed(l, t) {
		if (Gl !== 0 && Gl !== 5)
			return (l.callbackNode = null), (l.callbackPriority = 0), null;
		var a = l.callbackNode;
		if (mn() && l.callbackNode !== a) return null;
		var u = P;
		return (
			(u = Me(
				l,
				l === vl ? u : 0,
				l.cancelPendingCommit !== null || l.timeoutHandle !== -1
			)),
			u === 0
				? null
				: (ad(l, u, t),
				  bd(l, Tt()),
				  l.callbackNode != null && l.callbackNode === a
						? Ed.bind(null, l)
						: null)
		);
	}
	function Ad(l, t) {
		if (mn()) return null;
		ad(l, t, !0);
	}
	function lv() {
		dv(function () {
			(el & 6) !== 0 ? Gn(si, Ir) : gd();
		});
	}
	function Rc() {
		return Ha === 0 && (Ha = ri()), Ha;
	}
	function Td(l) {
		return l == null || typeof l == 'symbol' || typeof l == 'boolean'
			? null
			: typeof l == 'function'
			? l
			: Be('' + l);
	}
	function Md(l, t) {
		var a = t.ownerDocument.createElement('input');
		return (
			(a.name = t.name),
			(a.value = t.value),
			l.id && a.setAttribute('form', l.id),
			t.parentNode.insertBefore(a, t),
			(l = new FormData(l)),
			a.parentNode.removeChild(a),
			l
		);
	}
	function tv(l, t, a, u, e) {
		if (t === 'submit' && a && a.stateNode === e) {
			var n = Td((e[wl] || null).action),
				f = u.submitter;
			f &&
				((t = (t = f[wl] || null)
					? Td(t.formAction)
					: f.getAttribute('formAction')),
				t !== null && ((n = t), (f = null)));
			var c = new Ce('action', 'action', null, u, e);
			l.push({
				event: c,
				listeners: [
					{
						instance: null,
						listener: function () {
							if (u.defaultPrevented) {
								if (Ha !== 0) {
									var i = f ? Md(e, f) : new FormData(e);
									$f(
										a,
										{ pending: !0, data: i, method: e.method, action: n },
										null,
										i
									);
								}
							} else
								typeof n == 'function' &&
									(c.preventDefault(),
									(i = f ? Md(e, f) : new FormData(e)),
									$f(
										a,
										{ pending: !0, data: i, method: e.method, action: n },
										n,
										i
									));
						},
						currentTarget: e,
					},
				],
			});
		}
	}
	for (var Nc = 0; Nc < hf.length; Nc++) {
		var Cc = hf[Nc],
			av = Cc.toLowerCase(),
			uv = Cc[0].toUpperCase() + Cc.slice(1);
		bt(av, 'on' + uv);
	}
	bt(as, 'onAnimationEnd'),
		bt(us, 'onAnimationIteration'),
		bt(es, 'onAnimationStart'),
		bt('dblclick', 'onDoubleClick'),
		bt('focusin', 'onFocus'),
		bt('focusout', 'onBlur'),
		bt(Er, 'onTransitionRun'),
		bt(Ar, 'onTransitionStart'),
		bt(Tr, 'onTransitionCancel'),
		bt(ns, 'onTransitionEnd'),
		ja('onMouseEnter', ['mouseout', 'mouseover']),
		ja('onMouseLeave', ['mouseout', 'mouseover']),
		ja('onPointerEnter', ['pointerout', 'pointerover']),
		ja('onPointerLeave', ['pointerout', 'pointerover']),
		Sa(
			'onChange',
			'change click focusin focusout input keydown keyup selectionchange'.split(
				' '
			)
		),
		Sa(
			'onSelect',
			'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
				' '
			)
		),
		Sa('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
		Sa(
			'onCompositionEnd',
			'compositionend focusout keydown keypress keyup mousedown'.split(' ')
		),
		Sa(
			'onCompositionStart',
			'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
		),
		Sa(
			'onCompositionUpdate',
			'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
		);
	var ne =
			'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
				' '
			),
		ev = new Set(
			'beforetoggle cancel close invalid load scroll scrollend toggle'
				.split(' ')
				.concat(ne)
		);
	function Od(l, t) {
		t = (t & 4) !== 0;
		for (var a = 0; a < l.length; a++) {
			var u = l[a],
				e = u.event;
			u = u.listeners;
			l: {
				var n = void 0;
				if (t)
					for (var f = u.length - 1; 0 <= f; f--) {
						var c = u[f],
							i = c.instance,
							v = c.currentTarget;
						if (((c = c.listener), i !== n && e.isPropagationStopped()))
							break l;
						(n = c), (e.currentTarget = v);
						try {
							n(e);
						} catch (S) {
							en(S);
						}
						(e.currentTarget = null), (n = i);
					}
				else
					for (f = 0; f < u.length; f++) {
						if (
							((c = u[f]),
							(i = c.instance),
							(v = c.currentTarget),
							(c = c.listener),
							i !== n && e.isPropagationStopped())
						)
							break l;
						(n = c), (e.currentTarget = v);
						try {
							n(e);
						} catch (S) {
							en(S);
						}
						(e.currentTarget = null), (n = i);
					}
			}
		}
	}
	function k(l, t) {
		var a = t[Ln];
		a === void 0 && (a = t[Ln] = new Set());
		var u = l + '__bubble';
		a.has(u) || (Dd(t, l, 2, !1), a.add(u));
	}
	function Hc(l, t, a) {
		var u = 0;
		t && (u |= 4), Dd(a, l, u, t);
	}
	var bn = '_reactListening' + Math.random().toString(36).slice(2);
	function pc(l) {
		if (!l[bn]) {
			(l[bn] = !0),
				gi.forEach(function (a) {
					a !== 'selectionchange' && (ev.has(a) || Hc(a, !1, l), Hc(a, !0, l));
				});
			var t = l.nodeType === 9 ? l : l.ownerDocument;
			t === null || t[bn] || ((t[bn] = !0), Hc('selectionchange', !1, t));
		}
	}
	function Dd(l, t, a, u) {
		switch (kd(t)) {
			case 2:
				var e = Nv;
				break;
			case 8:
				e = Cv;
				break;
			default:
				e = Wc;
		}
		(a = e.bind(null, t, a, l)),
			(e = void 0),
			!tf ||
				(t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
				(e = !0),
			u
				? e !== void 0
					? l.addEventListener(t, a, { capture: !0, passive: e })
					: l.addEventListener(t, a, !0)
				: e !== void 0
				? l.addEventListener(t, a, { passive: e })
				: l.addEventListener(t, a, !1);
	}
	function xc(l, t, a, u, e) {
		var n = u;
		if ((t & 1) === 0 && (t & 2) === 0 && u !== null)
			l: for (;;) {
				if (u === null) return;
				var f = u.tag;
				if (f === 3 || f === 4) {
					var c = u.stateNode.containerInfo;
					if (c === e) break;
					if (f === 4)
						for (f = u.return; f !== null; ) {
							var i = f.tag;
							if ((i === 3 || i === 4) && f.stateNode.containerInfo === e)
								return;
							f = f.return;
						}
					for (; c !== null; ) {
						if (((f = xa(c)), f === null)) return;
						if (((i = f.tag), i === 5 || i === 6 || i === 26 || i === 27)) {
							u = n = f;
							continue l;
						}
						c = c.parentNode;
					}
				}
				u = u.return;
			}
		Ci(function () {
			var v = n,
				S = In(a),
				E = [];
			l: {
				var h = fs.get(l);
				if (h !== void 0) {
					var m = Ce,
						X = l;
					switch (l) {
						case 'keypress':
							if (Re(a) === 0) break l;
						case 'keydown':
						case 'keyup':
							m = Po;
							break;
						case 'focusin':
							(X = 'focus'), (m = nf);
							break;
						case 'focusout':
							(X = 'blur'), (m = nf);
							break;
						case 'beforeblur':
						case 'afterblur':
							m = nf;
							break;
						case 'click':
							if (a.button === 2) break l;
						case 'auxclick':
						case 'dblclick':
						case 'mousedown':
						case 'mousemove':
						case 'mouseup':
						case 'mouseout':
						case 'mouseover':
						case 'contextmenu':
							m = xi;
							break;
						case 'drag':
						case 'dragend':
						case 'dragenter':
						case 'dragexit':
						case 'dragleave':
						case 'dragover':
						case 'dragstart':
						case 'drop':
							m = Xo;
							break;
						case 'touchcancel':
						case 'touchend':
						case 'touchmove':
						case 'touchstart':
							m = tr;
							break;
						case as:
						case us:
						case es:
							m = Vo;
							break;
						case ns:
							m = ur;
							break;
						case 'scroll':
						case 'scrollend':
							m = jo;
							break;
						case 'wheel':
							m = nr;
							break;
						case 'copy':
						case 'cut':
						case 'paste':
							m = Ko;
							break;
						case 'gotpointercapture':
						case 'lostpointercapture':
						case 'pointercancel':
						case 'pointerdown':
						case 'pointermove':
						case 'pointerout':
						case 'pointerover':
						case 'pointerup':
							m = Yi;
							break;
						case 'toggle':
						case 'beforetoggle':
							m = cr;
					}
					var q = (t & 4) !== 0,
						il = !q && (l === 'scroll' || l === 'scrollend'),
						o = q ? (h !== null ? h + 'Capture' : null) : h;
					q = [];
					for (var d = v, r; d !== null; ) {
						var b = d;
						if (
							((r = b.stateNode),
							(b = b.tag),
							(b !== 5 && b !== 26 && b !== 27) ||
								r === null ||
								o === null ||
								((b = Ou(d, o)), b != null && q.push(fe(d, b, r))),
							il)
						)
							break;
						d = d.return;
					}
					0 < q.length &&
						((h = new m(h, X, null, a, S)), E.push({ event: h, listeners: q }));
				}
			}
			if ((t & 7) === 0) {
				l: {
					if (
						((h = l === 'mouseover' || l === 'pointerover'),
						(m = l === 'mouseout' || l === 'pointerout'),
						h &&
							a !== Pn &&
							(X = a.relatedTarget || a.fromElement) &&
							(xa(X) || X[pa]))
					)
						break l;
					if (
						(m || h) &&
						((h =
							S.window === S
								? S
								: (h = S.ownerDocument)
								? h.defaultView || h.parentWindow
								: window),
						m
							? ((X = a.relatedTarget || a.toElement),
							  (m = v),
							  (X = X ? xa(X) : null),
							  X !== null &&
									((il = G(X)),
									(q = X.tag),
									X !== il || (q !== 5 && q !== 27 && q !== 6)) &&
									(X = null))
							: ((m = null), (X = v)),
						m !== X)
					) {
						if (
							((q = xi),
							(b = 'onMouseLeave'),
							(o = 'onMouseEnter'),
							(d = 'mouse'),
							(l === 'pointerout' || l === 'pointerover') &&
								((q = Yi),
								(b = 'onPointerLeave'),
								(o = 'onPointerEnter'),
								(d = 'pointer')),
							(il = m == null ? h : Mu(m)),
							(r = X == null ? h : Mu(X)),
							(h = new q(b, d + 'leave', m, a, S)),
							(h.target = il),
							(h.relatedTarget = r),
							(b = null),
							xa(S) === v &&
								((q = new q(o, d + 'enter', X, a, S)),
								(q.target = r),
								(q.relatedTarget = il),
								(b = q)),
							(il = b),
							m && X)
						)
							t: {
								for (q = m, o = X, d = 0, r = q; r; r = hu(r)) d++;
								for (r = 0, b = o; b; b = hu(b)) r++;
								for (; 0 < d - r; ) (q = hu(q)), d--;
								for (; 0 < r - d; ) (o = hu(o)), r--;
								for (; d--; ) {
									if (q === o || (o !== null && q === o.alternate)) break t;
									(q = hu(q)), (o = hu(o));
								}
								q = null;
							}
						else q = null;
						m !== null && zd(E, h, m, q, !1),
							X !== null && il !== null && zd(E, il, X, q, !0);
					}
				}
				l: {
					if (
						((h = v ? Mu(v) : window),
						(m = h.nodeName && h.nodeName.toLowerCase()),
						m === 'select' || (m === 'input' && h.type === 'file'))
					)
						var B = Ki;
					else if (Vi(h))
						if (Ji) B = Sr;
						else {
							B = hr;
							var J = yr;
						}
					else
						(m = h.nodeName),
							!m ||
							m.toLowerCase() !== 'input' ||
							(h.type !== 'checkbox' && h.type !== 'radio')
								? v && Fn(v.elementType) && (B = Ki)
								: (B = mr);
					if (B && (B = B(l, v))) {
						Li(E, B, a, S);
						break l;
					}
					J && J(l, h, v),
						l === 'focusout' &&
							v &&
							h.type === 'number' &&
							v.memoizedProps.value != null &&
							$n(h, 'number', h.value);
				}
				switch (((J = v ? Mu(v) : window), l)) {
					case 'focusin':
						(Vi(J) || J.contentEditable === 'true') &&
							((Ka = J), (rf = v), (Cu = null));
						break;
					case 'focusout':
						Cu = rf = Ka = null;
						break;
					case 'mousedown':
						vf = !0;
						break;
					case 'contextmenu':
					case 'mouseup':
					case 'dragend':
						(vf = !1), ls(E, a, S);
						break;
					case 'selectionchange':
						if (br) break;
					case 'keydown':
					case 'keyup':
						ls(E, a, S);
				}
				var H;
				if (cf)
					l: {
						switch (l) {
							case 'compositionstart':
								var Y = 'onCompositionStart';
								break l;
							case 'compositionend':
								Y = 'onCompositionEnd';
								break l;
							case 'compositionupdate':
								Y = 'onCompositionUpdate';
								break l;
						}
						Y = void 0;
					}
				else
					La
						? Qi(l, a) && (Y = 'onCompositionEnd')
						: l === 'keydown' &&
						  a.keyCode === 229 &&
						  (Y = 'onCompositionStart');
				Y &&
					(ji &&
						a.locale !== 'ko' &&
						(La || Y !== 'onCompositionStart'
							? Y === 'onCompositionEnd' && La && (H = Hi())
							: ((Wt = S),
							  (af = 'value' in Wt ? Wt.value : Wt.textContent),
							  (La = !0))),
					(J = En(v, Y)),
					0 < J.length &&
						((Y = new qi(Y, l, null, a, S)),
						E.push({ event: Y, listeners: J }),
						H ? (Y.data = H) : ((H = Zi(a)), H !== null && (Y.data = H)))),
					(H = sr ? dr(l, a) : or(l, a)) &&
						((Y = En(v, 'onBeforeInput')),
						0 < Y.length &&
							((J = new qi('onBeforeInput', 'beforeinput', null, a, S)),
							E.push({ event: J, listeners: Y }),
							(J.data = H))),
					tv(E, l, v, a, S);
			}
			Od(E, t);
		});
	}
	function fe(l, t, a) {
		return { instance: l, listener: t, currentTarget: a };
	}
	function En(l, t) {
		for (var a = t + 'Capture', u = []; l !== null; ) {
			var e = l,
				n = e.stateNode;
			if (
				((e = e.tag),
				(e !== 5 && e !== 26 && e !== 27) ||
					n === null ||
					((e = Ou(l, a)),
					e != null && u.unshift(fe(l, e, n)),
					(e = Ou(l, t)),
					e != null && u.push(fe(l, e, n))),
				l.tag === 3)
			)
				return u;
			l = l.return;
		}
		return [];
	}
	function hu(l) {
		if (l === null) return null;
		do l = l.return;
		while (l && l.tag !== 5 && l.tag !== 27);
		return l || null;
	}
	function zd(l, t, a, u, e) {
		for (var n = t._reactName, f = []; a !== null && a !== u; ) {
			var c = a,
				i = c.alternate,
				v = c.stateNode;
			if (((c = c.tag), i !== null && i === u)) break;
			(c !== 5 && c !== 26 && c !== 27) ||
				v === null ||
				((i = v),
				e
					? ((v = Ou(a, n)), v != null && f.unshift(fe(a, v, i)))
					: e || ((v = Ou(a, n)), v != null && f.push(fe(a, v, i)))),
				(a = a.return);
		}
		f.length !== 0 && l.push({ event: t, listeners: f });
	}
	var nv = /\r\n?/g,
		fv = /\u0000|\uFFFD/g;
	function _d(l) {
		return (typeof l == 'string' ? l : '' + l)
			.replace(
				nv,
				`
`
			)
			.replace(fv, '');
	}
	function Bd(l, t) {
		return (t = _d(t)), _d(l) === t;
	}
	function An() {}
	function cl(l, t, a, u, e, n) {
		switch (a) {
			case 'children':
				typeof u == 'string'
					? t === 'body' || (t === 'textarea' && u === '') || Qa(l, u)
					: (typeof u == 'number' || typeof u == 'bigint') &&
					  t !== 'body' &&
					  Qa(l, '' + u);
				break;
			case 'className':
				De(l, 'class', u);
				break;
			case 'tabIndex':
				De(l, 'tabindex', u);
				break;
			case 'dir':
			case 'role':
			case 'viewBox':
			case 'width':
			case 'height':
				De(l, a, u);
				break;
			case 'style':
				Ri(l, u, n);
				break;
			case 'data':
				if (t !== 'object') {
					De(l, 'data', u);
					break;
				}
			case 'src':
			case 'href':
				if (u === '' && (t !== 'a' || a !== 'href')) {
					l.removeAttribute(a);
					break;
				}
				if (
					u == null ||
					typeof u == 'function' ||
					typeof u == 'symbol' ||
					typeof u == 'boolean'
				) {
					l.removeAttribute(a);
					break;
				}
				(u = Be('' + u)), l.setAttribute(a, u);
				break;
			case 'action':
			case 'formAction':
				if (typeof u == 'function') {
					l.setAttribute(
						a,
						"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
					);
					break;
				} else
					typeof n == 'function' &&
						(a === 'formAction'
							? (t !== 'input' && cl(l, t, 'name', e.name, e, null),
							  cl(l, t, 'formEncType', e.formEncType, e, null),
							  cl(l, t, 'formMethod', e.formMethod, e, null),
							  cl(l, t, 'formTarget', e.formTarget, e, null))
							: (cl(l, t, 'encType', e.encType, e, null),
							  cl(l, t, 'method', e.method, e, null),
							  cl(l, t, 'target', e.target, e, null)));
				if (u == null || typeof u == 'symbol' || typeof u == 'boolean') {
					l.removeAttribute(a);
					break;
				}
				(u = Be('' + u)), l.setAttribute(a, u);
				break;
			case 'onClick':
				u != null && (l.onclick = An);
				break;
			case 'onScroll':
				u != null && k('scroll', l);
				break;
			case 'onScrollEnd':
				u != null && k('scrollend', l);
				break;
			case 'dangerouslySetInnerHTML':
				if (u != null) {
					if (typeof u != 'object' || !('__html' in u)) throw Error(y(61));
					if (((a = u.__html), a != null)) {
						if (e.children != null) throw Error(y(60));
						l.innerHTML = a;
					}
				}
				break;
			case 'multiple':
				l.multiple = u && typeof u != 'function' && typeof u != 'symbol';
				break;
			case 'muted':
				l.muted = u && typeof u != 'function' && typeof u != 'symbol';
				break;
			case 'suppressContentEditableWarning':
			case 'suppressHydrationWarning':
			case 'defaultValue':
			case 'defaultChecked':
			case 'innerHTML':
			case 'ref':
				break;
			case 'autoFocus':
				break;
			case 'xlinkHref':
				if (
					u == null ||
					typeof u == 'function' ||
					typeof u == 'boolean' ||
					typeof u == 'symbol'
				) {
					l.removeAttribute('xlink:href');
					break;
				}
				(a = Be('' + u)),
					l.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', a);
				break;
			case 'contentEditable':
			case 'spellCheck':
			case 'draggable':
			case 'value':
			case 'autoReverse':
			case 'externalResourcesRequired':
			case 'focusable':
			case 'preserveAlpha':
				u != null && typeof u != 'function' && typeof u != 'symbol'
					? l.setAttribute(a, '' + u)
					: l.removeAttribute(a);
				break;
			case 'inert':
			case 'allowFullScreen':
			case 'async':
			case 'autoPlay':
			case 'controls':
			case 'default':
			case 'defer':
			case 'disabled':
			case 'disablePictureInPicture':
			case 'disableRemotePlayback':
			case 'formNoValidate':
			case 'hidden':
			case 'loop':
			case 'noModule':
			case 'noValidate':
			case 'open':
			case 'playsInline':
			case 'readOnly':
			case 'required':
			case 'reversed':
			case 'scoped':
			case 'seamless':
			case 'itemScope':
				u && typeof u != 'function' && typeof u != 'symbol'
					? l.setAttribute(a, '')
					: l.removeAttribute(a);
				break;
			case 'capture':
			case 'download':
				u === !0
					? l.setAttribute(a, '')
					: u !== !1 &&
					  u != null &&
					  typeof u != 'function' &&
					  typeof u != 'symbol'
					? l.setAttribute(a, u)
					: l.removeAttribute(a);
				break;
			case 'cols':
			case 'rows':
			case 'size':
			case 'span':
				u != null &&
				typeof u != 'function' &&
				typeof u != 'symbol' &&
				!isNaN(u) &&
				1 <= u
					? l.setAttribute(a, u)
					: l.removeAttribute(a);
				break;
			case 'rowSpan':
			case 'start':
				u == null || typeof u == 'function' || typeof u == 'symbol' || isNaN(u)
					? l.removeAttribute(a)
					: l.setAttribute(a, u);
				break;
			case 'popover':
				k('beforetoggle', l), k('toggle', l), Oe(l, 'popover', u);
				break;
			case 'xlinkActuate':
				Ut(l, 'http://www.w3.org/1999/xlink', 'xlink:actuate', u);
				break;
			case 'xlinkArcrole':
				Ut(l, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', u);
				break;
			case 'xlinkRole':
				Ut(l, 'http://www.w3.org/1999/xlink', 'xlink:role', u);
				break;
			case 'xlinkShow':
				Ut(l, 'http://www.w3.org/1999/xlink', 'xlink:show', u);
				break;
			case 'xlinkTitle':
				Ut(l, 'http://www.w3.org/1999/xlink', 'xlink:title', u);
				break;
			case 'xlinkType':
				Ut(l, 'http://www.w3.org/1999/xlink', 'xlink:type', u);
				break;
			case 'xmlBase':
				Ut(l, 'http://www.w3.org/XML/1998/namespace', 'xml:base', u);
				break;
			case 'xmlLang':
				Ut(l, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', u);
				break;
			case 'xmlSpace':
				Ut(l, 'http://www.w3.org/XML/1998/namespace', 'xml:space', u);
				break;
			case 'is':
				Oe(l, 'is', u);
				break;
			case 'innerText':
			case 'textContent':
				break;
			default:
				(!(2 < a.length) ||
					(a[0] !== 'o' && a[0] !== 'O') ||
					(a[1] !== 'n' && a[1] !== 'N')) &&
					((a = qo.get(a) || a), Oe(l, a, u));
		}
	}
	function qc(l, t, a, u, e, n) {
		switch (a) {
			case 'style':
				Ri(l, u, n);
				break;
			case 'dangerouslySetInnerHTML':
				if (u != null) {
					if (typeof u != 'object' || !('__html' in u)) throw Error(y(61));
					if (((a = u.__html), a != null)) {
						if (e.children != null) throw Error(y(60));
						l.innerHTML = a;
					}
				}
				break;
			case 'children':
				typeof u == 'string'
					? Qa(l, u)
					: (typeof u == 'number' || typeof u == 'bigint') && Qa(l, '' + u);
				break;
			case 'onScroll':
				u != null && k('scroll', l);
				break;
			case 'onScrollEnd':
				u != null && k('scrollend', l);
				break;
			case 'onClick':
				u != null && (l.onclick = An);
				break;
			case 'suppressContentEditableWarning':
			case 'suppressHydrationWarning':
			case 'innerHTML':
			case 'ref':
				break;
			case 'innerText':
			case 'textContent':
				break;
			default:
				if (!bi.hasOwnProperty(a))
					l: {
						if (
							a[0] === 'o' &&
							a[1] === 'n' &&
							((e = a.endsWith('Capture')),
							(t = a.slice(2, e ? a.length - 7 : void 0)),
							(n = l[wl] || null),
							(n = n != null ? n[a] : null),
							typeof n == 'function' && l.removeEventListener(t, n, e),
							typeof u == 'function')
						) {
							typeof n != 'function' &&
								n !== null &&
								(a in l
									? (l[a] = null)
									: l.hasAttribute(a) && l.removeAttribute(a)),
								l.addEventListener(t, u, e);
							break l;
						}
						a in l
							? (l[a] = u)
							: u === !0
							? l.setAttribute(a, '')
							: Oe(l, a, u);
					}
		}
	}
	function Xl(l, t, a) {
		switch (t) {
			case 'div':
			case 'span':
			case 'svg':
			case 'path':
			case 'a':
			case 'g':
			case 'p':
			case 'li':
				break;
			case 'img':
				k('error', l), k('load', l);
				var u = !1,
					e = !1,
					n;
				for (n in a)
					if (a.hasOwnProperty(n)) {
						var f = a[n];
						if (f != null)
							switch (n) {
								case 'src':
									u = !0;
									break;
								case 'srcSet':
									e = !0;
									break;
								case 'children':
								case 'dangerouslySetInnerHTML':
									throw Error(y(137, t));
								default:
									cl(l, t, n, f, a, null);
							}
					}
				e && cl(l, t, 'srcSet', a.srcSet, a, null),
					u && cl(l, t, 'src', a.src, a, null);
				return;
			case 'input':
				k('invalid', l);
				var c = (n = f = e = null),
					i = null,
					v = null;
				for (u in a)
					if (a.hasOwnProperty(u)) {
						var S = a[u];
						if (S != null)
							switch (u) {
								case 'name':
									e = S;
									break;
								case 'type':
									f = S;
									break;
								case 'checked':
									i = S;
									break;
								case 'defaultChecked':
									v = S;
									break;
								case 'value':
									n = S;
									break;
								case 'defaultValue':
									c = S;
									break;
								case 'children':
								case 'dangerouslySetInnerHTML':
									if (S != null) throw Error(y(137, t));
									break;
								default:
									cl(l, t, u, S, a, null);
							}
					}
				zi(l, n, c, i, v, f, e, !1), ze(l);
				return;
			case 'select':
				k('invalid', l), (u = f = n = null);
				for (e in a)
					if (a.hasOwnProperty(e) && ((c = a[e]), c != null))
						switch (e) {
							case 'value':
								n = c;
								break;
							case 'defaultValue':
								f = c;
								break;
							case 'multiple':
								u = c;
							default:
								cl(l, t, e, c, a, null);
						}
				(t = n),
					(a = f),
					(l.multiple = !!u),
					t != null ? Xa(l, !!u, t, !1) : a != null && Xa(l, !!u, a, !0);
				return;
			case 'textarea':
				k('invalid', l), (n = e = u = null);
				for (f in a)
					if (a.hasOwnProperty(f) && ((c = a[f]), c != null))
						switch (f) {
							case 'value':
								u = c;
								break;
							case 'defaultValue':
								e = c;
								break;
							case 'children':
								n = c;
								break;
							case 'dangerouslySetInnerHTML':
								if (c != null) throw Error(y(91));
								break;
							default:
								cl(l, t, f, c, a, null);
						}
				Bi(l, u, e, n), ze(l);
				return;
			case 'option':
				for (i in a)
					if (a.hasOwnProperty(i) && ((u = a[i]), u != null))
						switch (i) {
							case 'selected':
								l.selected =
									u && typeof u != 'function' && typeof u != 'symbol';
								break;
							default:
								cl(l, t, i, u, a, null);
						}
				return;
			case 'dialog':
				k('beforetoggle', l), k('toggle', l), k('cancel', l), k('close', l);
				break;
			case 'iframe':
			case 'object':
				k('load', l);
				break;
			case 'video':
			case 'audio':
				for (u = 0; u < ne.length; u++) k(ne[u], l);
				break;
			case 'image':
				k('error', l), k('load', l);
				break;
			case 'details':
				k('toggle', l);
				break;
			case 'embed':
			case 'source':
			case 'link':
				k('error', l), k('load', l);
			case 'area':
			case 'base':
			case 'br':
			case 'col':
			case 'hr':
			case 'keygen':
			case 'meta':
			case 'param':
			case 'track':
			case 'wbr':
			case 'menuitem':
				for (v in a)
					if (a.hasOwnProperty(v) && ((u = a[v]), u != null))
						switch (v) {
							case 'children':
							case 'dangerouslySetInnerHTML':
								throw Error(y(137, t));
							default:
								cl(l, t, v, u, a, null);
						}
				return;
			default:
				if (Fn(t)) {
					for (S in a)
						a.hasOwnProperty(S) &&
							((u = a[S]), u !== void 0 && qc(l, t, S, u, a, void 0));
					return;
				}
		}
		for (c in a)
			a.hasOwnProperty(c) && ((u = a[c]), u != null && cl(l, t, c, u, a, null));
	}
	function cv(l, t, a, u) {
		switch (t) {
			case 'div':
			case 'span':
			case 'svg':
			case 'path':
			case 'a':
			case 'g':
			case 'p':
			case 'li':
				break;
			case 'input':
				var e = null,
					n = null,
					f = null,
					c = null,
					i = null,
					v = null,
					S = null;
				for (m in a) {
					var E = a[m];
					if (a.hasOwnProperty(m) && E != null)
						switch (m) {
							case 'checked':
								break;
							case 'value':
								break;
							case 'defaultValue':
								i = E;
							default:
								u.hasOwnProperty(m) || cl(l, t, m, null, u, E);
						}
				}
				for (var h in u) {
					var m = u[h];
					if (((E = a[h]), u.hasOwnProperty(h) && (m != null || E != null)))
						switch (h) {
							case 'type':
								n = m;
								break;
							case 'name':
								e = m;
								break;
							case 'checked':
								v = m;
								break;
							case 'defaultChecked':
								S = m;
								break;
							case 'value':
								f = m;
								break;
							case 'defaultValue':
								c = m;
								break;
							case 'children':
							case 'dangerouslySetInnerHTML':
								if (m != null) throw Error(y(137, t));
								break;
							default:
								m !== E && cl(l, t, h, m, u, E);
						}
				}
				kn(l, f, c, i, v, S, n, e);
				return;
			case 'select':
				m = f = c = h = null;
				for (n in a)
					if (((i = a[n]), a.hasOwnProperty(n) && i != null))
						switch (n) {
							case 'value':
								break;
							case 'multiple':
								m = i;
							default:
								u.hasOwnProperty(n) || cl(l, t, n, null, u, i);
						}
				for (e in u)
					if (
						((n = u[e]),
						(i = a[e]),
						u.hasOwnProperty(e) && (n != null || i != null))
					)
						switch (e) {
							case 'value':
								h = n;
								break;
							case 'defaultValue':
								c = n;
								break;
							case 'multiple':
								f = n;
							default:
								n !== i && cl(l, t, e, n, u, i);
						}
				(t = c),
					(a = f),
					(u = m),
					h != null
						? Xa(l, !!a, h, !1)
						: !!u != !!a &&
						  (t != null ? Xa(l, !!a, t, !0) : Xa(l, !!a, a ? [] : '', !1));
				return;
			case 'textarea':
				m = h = null;
				for (c in a)
					if (
						((e = a[c]),
						a.hasOwnProperty(c) && e != null && !u.hasOwnProperty(c))
					)
						switch (c) {
							case 'value':
								break;
							case 'children':
								break;
							default:
								cl(l, t, c, null, u, e);
						}
				for (f in u)
					if (
						((e = u[f]),
						(n = a[f]),
						u.hasOwnProperty(f) && (e != null || n != null))
					)
						switch (f) {
							case 'value':
								h = e;
								break;
							case 'defaultValue':
								m = e;
								break;
							case 'children':
								break;
							case 'dangerouslySetInnerHTML':
								if (e != null) throw Error(y(91));
								break;
							default:
								e !== n && cl(l, t, f, e, u, n);
						}
				_i(l, h, m);
				return;
			case 'option':
				for (var X in a)
					if (
						((h = a[X]),
						a.hasOwnProperty(X) && h != null && !u.hasOwnProperty(X))
					)
						switch (X) {
							case 'selected':
								l.selected = !1;
								break;
							default:
								cl(l, t, X, null, u, h);
						}
				for (i in u)
					if (
						((h = u[i]),
						(m = a[i]),
						u.hasOwnProperty(i) && h !== m && (h != null || m != null))
					)
						switch (i) {
							case 'selected':
								l.selected =
									h && typeof h != 'function' && typeof h != 'symbol';
								break;
							default:
								cl(l, t, i, h, u, m);
						}
				return;
			case 'img':
			case 'link':
			case 'area':
			case 'base':
			case 'br':
			case 'col':
			case 'embed':
			case 'hr':
			case 'keygen':
			case 'meta':
			case 'param':
			case 'source':
			case 'track':
			case 'wbr':
			case 'menuitem':
				for (var q in a)
					(h = a[q]),
						a.hasOwnProperty(q) &&
							h != null &&
							!u.hasOwnProperty(q) &&
							cl(l, t, q, null, u, h);
				for (v in u)
					if (
						((h = u[v]),
						(m = a[v]),
						u.hasOwnProperty(v) && h !== m && (h != null || m != null))
					)
						switch (v) {
							case 'children':
							case 'dangerouslySetInnerHTML':
								if (h != null) throw Error(y(137, t));
								break;
							default:
								cl(l, t, v, h, u, m);
						}
				return;
			default:
				if (Fn(t)) {
					for (var il in a)
						(h = a[il]),
							a.hasOwnProperty(il) &&
								h !== void 0 &&
								!u.hasOwnProperty(il) &&
								qc(l, t, il, void 0, u, h);
					for (S in u)
						(h = u[S]),
							(m = a[S]),
							!u.hasOwnProperty(S) ||
								h === m ||
								(h === void 0 && m === void 0) ||
								qc(l, t, S, h, u, m);
					return;
				}
		}
		for (var o in a)
			(h = a[o]),
				a.hasOwnProperty(o) &&
					h != null &&
					!u.hasOwnProperty(o) &&
					cl(l, t, o, null, u, h);
		for (E in u)
			(h = u[E]),
				(m = a[E]),
				!u.hasOwnProperty(E) ||
					h === m ||
					(h == null && m == null) ||
					cl(l, t, E, h, u, m);
	}
	var Yc = null,
		jc = null;
	function Tn(l) {
		return l.nodeType === 9 ? l : l.ownerDocument;
	}
	function Ud(l) {
		switch (l) {
			case 'http://www.w3.org/2000/svg':
				return 1;
			case 'http://www.w3.org/1998/Math/MathML':
				return 2;
			default:
				return 0;
		}
	}
	function Rd(l, t) {
		if (l === 0)
			switch (t) {
				case 'svg':
					return 1;
				case 'math':
					return 2;
				default:
					return 0;
			}
		return l === 1 && t === 'foreignObject' ? 0 : l;
	}
	function Gc(l, t) {
		return (
			l === 'textarea' ||
			l === 'noscript' ||
			typeof t.children == 'string' ||
			typeof t.children == 'number' ||
			typeof t.children == 'bigint' ||
			(typeof t.dangerouslySetInnerHTML == 'object' &&
				t.dangerouslySetInnerHTML !== null &&
				t.dangerouslySetInnerHTML.__html != null)
		);
	}
	var Xc = null;
	function iv() {
		var l = window.event;
		return l && l.type === 'popstate'
			? l === Xc
				? !1
				: ((Xc = l), !0)
			: ((Xc = null), !1);
	}
	var Nd = typeof setTimeout == 'function' ? setTimeout : void 0,
		sv = typeof clearTimeout == 'function' ? clearTimeout : void 0,
		Cd = typeof Promise == 'function' ? Promise : void 0,
		dv =
			typeof queueMicrotask == 'function'
				? queueMicrotask
				: typeof Cd < 'u'
				? function (l) {
						return Cd.resolve(null).then(l).catch(ov);
				  }
				: Nd;
	function ov(l) {
		setTimeout(function () {
			throw l;
		});
	}
	function da(l) {
		return l === 'head';
	}
	function Hd(l, t) {
		var a = t,
			u = 0,
			e = 0;
		do {
			var n = a.nextSibling;
			if ((l.removeChild(a), n && n.nodeType === 8))
				if (((a = n.data), a === '/$')) {
					if (0 < u && 8 > u) {
						a = u;
						var f = l.ownerDocument;
						if ((a & 1 && ce(f.documentElement), a & 2 && ce(f.body), a & 4))
							for (a = f.head, ce(a), f = a.firstChild; f; ) {
								var c = f.nextSibling,
									i = f.nodeName;
								f[Tu] ||
									i === 'SCRIPT' ||
									i === 'STYLE' ||
									(i === 'LINK' && f.rel.toLowerCase() === 'stylesheet') ||
									a.removeChild(f),
									(f = c);
							}
					}
					if (e === 0) {
						l.removeChild(n), he(t);
						return;
					}
					e--;
				} else
					a === '$' || a === '$?' || a === '$!'
						? e++
						: (u = a.charCodeAt(0) - 48);
			else u = 0;
			a = n;
		} while (a);
		he(t);
	}
	function Qc(l) {
		var t = l.firstChild;
		for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
			var a = t;
			switch (((t = t.nextSibling), a.nodeName)) {
				case 'HTML':
				case 'HEAD':
				case 'BODY':
					Qc(a), Kn(a);
					continue;
				case 'SCRIPT':
				case 'STYLE':
					continue;
				case 'LINK':
					if (a.rel.toLowerCase() === 'stylesheet') continue;
			}
			l.removeChild(a);
		}
	}
	function rv(l, t, a, u) {
		for (; l.nodeType === 1; ) {
			var e = a;
			if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
				if (!u && (l.nodeName !== 'INPUT' || l.type !== 'hidden')) break;
			} else if (u) {
				if (!l[Tu])
					switch (t) {
						case 'meta':
							if (!l.hasAttribute('itemprop')) break;
							return l;
						case 'link':
							if (
								((n = l.getAttribute('rel')),
								n === 'stylesheet' && l.hasAttribute('data-precedence'))
							)
								break;
							if (
								n !== e.rel ||
								l.getAttribute('href') !==
									(e.href == null || e.href === '' ? null : e.href) ||
								l.getAttribute('crossorigin') !==
									(e.crossOrigin == null ? null : e.crossOrigin) ||
								l.getAttribute('title') !== (e.title == null ? null : e.title)
							)
								break;
							return l;
						case 'style':
							if (l.hasAttribute('data-precedence')) break;
							return l;
						case 'script':
							if (
								((n = l.getAttribute('src')),
								(n !== (e.src == null ? null : e.src) ||
									l.getAttribute('type') !== (e.type == null ? null : e.type) ||
									l.getAttribute('crossorigin') !==
										(e.crossOrigin == null ? null : e.crossOrigin)) &&
									n &&
									l.hasAttribute('async') &&
									!l.hasAttribute('itemprop'))
							)
								break;
							return l;
						default:
							return l;
					}
			} else if (t === 'input' && l.type === 'hidden') {
				var n = e.name == null ? null : '' + e.name;
				if (e.type === 'hidden' && l.getAttribute('name') === n) return l;
			} else return l;
			if (((l = At(l.nextSibling)), l === null)) break;
		}
		return null;
	}
	function vv(l, t, a) {
		if (t === '') return null;
		for (; l.nodeType !== 3; )
			if (
				((l.nodeType !== 1 || l.nodeName !== 'INPUT' || l.type !== 'hidden') &&
					!a) ||
				((l = At(l.nextSibling)), l === null)
			)
				return null;
		return l;
	}
	function Zc(l) {
		return (
			l.data === '$!' ||
			(l.data === '$?' && l.ownerDocument.readyState === 'complete')
		);
	}
	function yv(l, t) {
		var a = l.ownerDocument;
		if (l.data !== '$?' || a.readyState === 'complete') t();
		else {
			var u = function () {
				t(), a.removeEventListener('DOMContentLoaded', u);
			};
			a.addEventListener('DOMContentLoaded', u), (l._reactRetry = u);
		}
	}
	function At(l) {
		for (; l != null; l = l.nextSibling) {
			var t = l.nodeType;
			if (t === 1 || t === 3) break;
			if (t === 8) {
				if (
					((t = l.data),
					t === '$' || t === '$!' || t === '$?' || t === 'F!' || t === 'F')
				)
					break;
				if (t === '/$') return null;
			}
		}
		return l;
	}
	var Vc = null;
	function pd(l) {
		l = l.previousSibling;
		for (var t = 0; l; ) {
			if (l.nodeType === 8) {
				var a = l.data;
				if (a === '$' || a === '$!' || a === '$?') {
					if (t === 0) return l;
					t--;
				} else a === '/$' && t++;
			}
			l = l.previousSibling;
		}
		return null;
	}
	function xd(l, t, a) {
		switch (((t = Tn(a)), l)) {
			case 'html':
				if (((l = t.documentElement), !l)) throw Error(y(452));
				return l;
			case 'head':
				if (((l = t.head), !l)) throw Error(y(453));
				return l;
			case 'body':
				if (((l = t.body), !l)) throw Error(y(454));
				return l;
			default:
				throw Error(y(451));
		}
	}
	function ce(l) {
		for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
		Kn(l);
	}
	var gt = new Map(),
		qd = new Set();
	function Mn(l) {
		return typeof l.getRootNode == 'function'
			? l.getRootNode()
			: l.nodeType === 9
			? l
			: l.ownerDocument;
	}
	var Vt = z.d;
	z.d = { f: hv, r: mv, D: Sv, C: gv, L: bv, m: Ev, X: Tv, S: Av, M: Mv };
	function hv() {
		var l = Vt.f(),
			t = yn();
		return l || t;
	}
	function mv(l) {
		var t = qa(l);
		t !== null && t.tag === 5 && t.type === 'form' ? a0(t) : Vt.r(l);
	}
	var mu = typeof document > 'u' ? null : document;
	function Yd(l, t, a) {
		var u = mu;
		if (u && typeof t == 'string' && t) {
			var e = ot(t);
			(e = 'link[rel="' + l + '"][href="' + e + '"]'),
				typeof a == 'string' && (e += '[crossorigin="' + a + '"]'),
				qd.has(e) ||
					(qd.add(e),
					(l = { rel: l, crossOrigin: a, href: t }),
					u.querySelector(e) === null &&
						((t = u.createElement('link')),
						Xl(t, 'link', l),
						Cl(t),
						u.head.appendChild(t)));
		}
	}
	function Sv(l) {
		Vt.D(l), Yd('dns-prefetch', l, null);
	}
	function gv(l, t) {
		Vt.C(l, t), Yd('preconnect', l, t);
	}
	function bv(l, t, a) {
		Vt.L(l, t, a);
		var u = mu;
		if (u && l && t) {
			var e = 'link[rel="preload"][as="' + ot(t) + '"]';
			t === 'image' && a && a.imageSrcSet
				? ((e += '[imagesrcset="' + ot(a.imageSrcSet) + '"]'),
				  typeof a.imageSizes == 'string' &&
						(e += '[imagesizes="' + ot(a.imageSizes) + '"]'))
				: (e += '[href="' + ot(l) + '"]');
			var n = e;
			switch (t) {
				case 'style':
					n = Su(l);
					break;
				case 'script':
					n = gu(l);
			}
			gt.has(n) ||
				((l = N(
					{
						rel: 'preload',
						href: t === 'image' && a && a.imageSrcSet ? void 0 : l,
						as: t,
					},
					a
				)),
				gt.set(n, l),
				u.querySelector(e) !== null ||
					(t === 'style' && u.querySelector(ie(n))) ||
					(t === 'script' && u.querySelector(se(n))) ||
					((t = u.createElement('link')),
					Xl(t, 'link', l),
					Cl(t),
					u.head.appendChild(t)));
		}
	}
	function Ev(l, t) {
		Vt.m(l, t);
		var a = mu;
		if (a && l) {
			var u = t && typeof t.as == 'string' ? t.as : 'script',
				e =
					'link[rel="modulepreload"][as="' + ot(u) + '"][href="' + ot(l) + '"]',
				n = e;
			switch (u) {
				case 'audioworklet':
				case 'paintworklet':
				case 'serviceworker':
				case 'sharedworker':
				case 'worker':
				case 'script':
					n = gu(l);
			}
			if (
				!gt.has(n) &&
				((l = N({ rel: 'modulepreload', href: l }, t)),
				gt.set(n, l),
				a.querySelector(e) === null)
			) {
				switch (u) {
					case 'audioworklet':
					case 'paintworklet':
					case 'serviceworker':
					case 'sharedworker':
					case 'worker':
					case 'script':
						if (a.querySelector(se(n))) return;
				}
				(u = a.createElement('link')),
					Xl(u, 'link', l),
					Cl(u),
					a.head.appendChild(u);
			}
		}
	}
	function Av(l, t, a) {
		Vt.S(l, t, a);
		var u = mu;
		if (u && l) {
			var e = Ya(u).hoistableStyles,
				n = Su(l);
			t = t || 'default';
			var f = e.get(n);
			if (!f) {
				var c = { loading: 0, preload: null };
				if ((f = u.querySelector(ie(n)))) c.loading = 5;
				else {
					(l = N({ rel: 'stylesheet', href: l, 'data-precedence': t }, a)),
						(a = gt.get(n)) && Lc(l, a);
					var i = (f = u.createElement('link'));
					Cl(i),
						Xl(i, 'link', l),
						(i._p = new Promise(function (v, S) {
							(i.onload = v), (i.onerror = S);
						})),
						i.addEventListener('load', function () {
							c.loading |= 1;
						}),
						i.addEventListener('error', function () {
							c.loading |= 2;
						}),
						(c.loading |= 4),
						On(f, t, u);
				}
				(f = { type: 'stylesheet', instance: f, count: 1, state: c }),
					e.set(n, f);
			}
		}
	}
	function Tv(l, t) {
		Vt.X(l, t);
		var a = mu;
		if (a && l) {
			var u = Ya(a).hoistableScripts,
				e = gu(l),
				n = u.get(e);
			n ||
				((n = a.querySelector(se(e))),
				n ||
					((l = N({ src: l, async: !0 }, t)),
					(t = gt.get(e)) && Kc(l, t),
					(n = a.createElement('script')),
					Cl(n),
					Xl(n, 'link', l),
					a.head.appendChild(n)),
				(n = { type: 'script', instance: n, count: 1, state: null }),
				u.set(e, n));
		}
	}
	function Mv(l, t) {
		Vt.M(l, t);
		var a = mu;
		if (a && l) {
			var u = Ya(a).hoistableScripts,
				e = gu(l),
				n = u.get(e);
			n ||
				((n = a.querySelector(se(e))),
				n ||
					((l = N({ src: l, async: !0, type: 'module' }, t)),
					(t = gt.get(e)) && Kc(l, t),
					(n = a.createElement('script')),
					Cl(n),
					Xl(n, 'link', l),
					a.head.appendChild(n)),
				(n = { type: 'script', instance: n, count: 1, state: null }),
				u.set(e, n));
		}
	}
	function jd(l, t, a, u) {
		var e = (e = Q.current) ? Mn(e) : null;
		if (!e) throw Error(y(446));
		switch (l) {
			case 'meta':
			case 'title':
				return null;
			case 'style':
				return typeof a.precedence == 'string' && typeof a.href == 'string'
					? ((t = Su(a.href)),
					  (a = Ya(e).hoistableStyles),
					  (u = a.get(t)),
					  u ||
							((u = { type: 'style', instance: null, count: 0, state: null }),
							a.set(t, u)),
					  u)
					: { type: 'void', instance: null, count: 0, state: null };
			case 'link':
				if (
					a.rel === 'stylesheet' &&
					typeof a.href == 'string' &&
					typeof a.precedence == 'string'
				) {
					l = Su(a.href);
					var n = Ya(e).hoistableStyles,
						f = n.get(l);
					if (
						(f ||
							((e = e.ownerDocument || e),
							(f = {
								type: 'stylesheet',
								instance: null,
								count: 0,
								state: { loading: 0, preload: null },
							}),
							n.set(l, f),
							(n = e.querySelector(ie(l))) &&
								!n._p &&
								((f.instance = n), (f.state.loading = 5)),
							gt.has(l) ||
								((a = {
									rel: 'preload',
									as: 'style',
									href: a.href,
									crossOrigin: a.crossOrigin,
									integrity: a.integrity,
									media: a.media,
									hrefLang: a.hrefLang,
									referrerPolicy: a.referrerPolicy,
								}),
								gt.set(l, a),
								n || Ov(e, l, a, f.state))),
						t && u === null)
					)
						throw Error(y(528, ''));
					return f;
				}
				if (t && u !== null) throw Error(y(529, ''));
				return null;
			case 'script':
				return (
					(t = a.async),
					(a = a.src),
					typeof a == 'string' &&
					t &&
					typeof t != 'function' &&
					typeof t != 'symbol'
						? ((t = gu(a)),
						  (a = Ya(e).hoistableScripts),
						  (u = a.get(t)),
						  u ||
								((u = {
									type: 'script',
									instance: null,
									count: 0,
									state: null,
								}),
								a.set(t, u)),
						  u)
						: { type: 'void', instance: null, count: 0, state: null }
				);
			default:
				throw Error(y(444, l));
		}
	}
	function Su(l) {
		return 'href="' + ot(l) + '"';
	}
	function ie(l) {
		return 'link[rel="stylesheet"][' + l + ']';
	}
	function Gd(l) {
		return N({}, l, { 'data-precedence': l.precedence, precedence: null });
	}
	function Ov(l, t, a, u) {
		l.querySelector('link[rel="preload"][as="style"][' + t + ']')
			? (u.loading = 1)
			: ((t = l.createElement('link')),
			  (u.preload = t),
			  t.addEventListener('load', function () {
					return (u.loading |= 1);
			  }),
			  t.addEventListener('error', function () {
					return (u.loading |= 2);
			  }),
			  Xl(t, 'link', a),
			  Cl(t),
			  l.head.appendChild(t));
	}
	function gu(l) {
		return '[src="' + ot(l) + '"]';
	}
	function se(l) {
		return 'script[async]' + l;
	}
	function Xd(l, t, a) {
		if ((t.count++, t.instance === null))
			switch (t.type) {
				case 'style':
					var u = l.querySelector('style[data-href~="' + ot(a.href) + '"]');
					if (u) return (t.instance = u), Cl(u), u;
					var e = N({}, a, {
						'data-href': a.href,
						'data-precedence': a.precedence,
						href: null,
						precedence: null,
					});
					return (
						(u = (l.ownerDocument || l).createElement('style')),
						Cl(u),
						Xl(u, 'style', e),
						On(u, a.precedence, l),
						(t.instance = u)
					);
				case 'stylesheet':
					e = Su(a.href);
					var n = l.querySelector(ie(e));
					if (n) return (t.state.loading |= 4), (t.instance = n), Cl(n), n;
					(u = Gd(a)),
						(e = gt.get(e)) && Lc(u, e),
						(n = (l.ownerDocument || l).createElement('link')),
						Cl(n);
					var f = n;
					return (
						(f._p = new Promise(function (c, i) {
							(f.onload = c), (f.onerror = i);
						})),
						Xl(n, 'link', u),
						(t.state.loading |= 4),
						On(n, a.precedence, l),
						(t.instance = n)
					);
				case 'script':
					return (
						(n = gu(a.src)),
						(e = l.querySelector(se(n)))
							? ((t.instance = e), Cl(e), e)
							: ((u = a),
							  (e = gt.get(n)) && ((u = N({}, a)), Kc(u, e)),
							  (l = l.ownerDocument || l),
							  (e = l.createElement('script')),
							  Cl(e),
							  Xl(e, 'link', u),
							  l.head.appendChild(e),
							  (t.instance = e))
					);
				case 'void':
					return null;
				default:
					throw Error(y(443, t.type));
			}
		else
			t.type === 'stylesheet' &&
				(t.state.loading & 4) === 0 &&
				((u = t.instance), (t.state.loading |= 4), On(u, a.precedence, l));
		return t.instance;
	}
	function On(l, t, a) {
		for (
			var u = a.querySelectorAll(
					'link[rel="stylesheet"][data-precedence],style[data-precedence]'
				),
				e = u.length ? u[u.length - 1] : null,
				n = e,
				f = 0;
			f < u.length;
			f++
		) {
			var c = u[f];
			if (c.dataset.precedence === t) n = c;
			else if (n !== e) break;
		}
		n
			? n.parentNode.insertBefore(l, n.nextSibling)
			: ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(l, t.firstChild));
	}
	function Lc(l, t) {
		l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
			l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
			l.title == null && (l.title = t.title);
	}
	function Kc(l, t) {
		l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
			l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
			l.integrity == null && (l.integrity = t.integrity);
	}
	var Dn = null;
	function Qd(l, t, a) {
		if (Dn === null) {
			var u = new Map(),
				e = (Dn = new Map());
			e.set(a, u);
		} else (e = Dn), (u = e.get(a)), u || ((u = new Map()), e.set(a, u));
		if (u.has(l)) return u;
		for (
			u.set(l, null), a = a.getElementsByTagName(l), e = 0;
			e < a.length;
			e++
		) {
			var n = a[e];
			if (
				!(
					n[Tu] ||
					n[Zl] ||
					(l === 'link' && n.getAttribute('rel') === 'stylesheet')
				) &&
				n.namespaceURI !== 'http://www.w3.org/2000/svg'
			) {
				var f = n.getAttribute(t) || '';
				f = l + f;
				var c = u.get(f);
				c ? c.push(n) : u.set(f, [n]);
			}
		}
		return u;
	}
	function Zd(l, t, a) {
		(l = l.ownerDocument || l),
			l.head.insertBefore(
				a,
				t === 'title' ? l.querySelector('head > title') : null
			);
	}
	function Dv(l, t, a) {
		if (a === 1 || t.itemProp != null) return !1;
		switch (l) {
			case 'meta':
			case 'title':
				return !0;
			case 'style':
				if (
					typeof t.precedence != 'string' ||
					typeof t.href != 'string' ||
					t.href === ''
				)
					break;
				return !0;
			case 'link':
				if (
					typeof t.rel != 'string' ||
					typeof t.href != 'string' ||
					t.href === '' ||
					t.onLoad ||
					t.onError
				)
					break;
				switch (t.rel) {
					case 'stylesheet':
						return (
							(l = t.disabled), typeof t.precedence == 'string' && l == null
						);
					default:
						return !0;
				}
			case 'script':
				if (
					t.async &&
					typeof t.async != 'function' &&
					typeof t.async != 'symbol' &&
					!t.onLoad &&
					!t.onError &&
					t.src &&
					typeof t.src == 'string'
				)
					return !0;
		}
		return !1;
	}
	function Vd(l) {
		return !(l.type === 'stylesheet' && (l.state.loading & 3) === 0);
	}
	var de = null;
	function zv() {}
	function _v(l, t, a) {
		if (de === null) throw Error(y(475));
		var u = de;
		if (
			t.type === 'stylesheet' &&
			(typeof a.media != 'string' || matchMedia(a.media).matches !== !1) &&
			(t.state.loading & 4) === 0
		) {
			if (t.instance === null) {
				var e = Su(a.href),
					n = l.querySelector(ie(e));
				if (n) {
					(l = n._p),
						l !== null &&
							typeof l == 'object' &&
							typeof l.then == 'function' &&
							(u.count++, (u = zn.bind(u)), l.then(u, u)),
						(t.state.loading |= 4),
						(t.instance = n),
						Cl(n);
					return;
				}
				(n = l.ownerDocument || l),
					(a = Gd(a)),
					(e = gt.get(e)) && Lc(a, e),
					(n = n.createElement('link')),
					Cl(n);
				var f = n;
				(f._p = new Promise(function (c, i) {
					(f.onload = c), (f.onerror = i);
				})),
					Xl(n, 'link', a),
					(t.instance = n);
			}
			u.stylesheets === null && (u.stylesheets = new Map()),
				u.stylesheets.set(t, l),
				(l = t.state.preload) &&
					(t.state.loading & 3) === 0 &&
					(u.count++,
					(t = zn.bind(u)),
					l.addEventListener('load', t),
					l.addEventListener('error', t));
		}
	}
	function Bv() {
		if (de === null) throw Error(y(475));
		var l = de;
		return (
			l.stylesheets && l.count === 0 && Jc(l, l.stylesheets),
			0 < l.count
				? function (t) {
						var a = setTimeout(function () {
							if ((l.stylesheets && Jc(l, l.stylesheets), l.unsuspend)) {
								var u = l.unsuspend;
								(l.unsuspend = null), u();
							}
						}, 6e4);
						return (
							(l.unsuspend = t),
							function () {
								(l.unsuspend = null), clearTimeout(a);
							}
						);
				  }
				: null
		);
	}
	function zn() {
		if ((this.count--, this.count === 0)) {
			if (this.stylesheets) Jc(this, this.stylesheets);
			else if (this.unsuspend) {
				var l = this.unsuspend;
				(this.unsuspend = null), l();
			}
		}
	}
	var _n = null;
	function Jc(l, t) {
		(l.stylesheets = null),
			l.unsuspend !== null &&
				(l.count++,
				(_n = new Map()),
				t.forEach(Uv, l),
				(_n = null),
				zn.call(l));
	}
	function Uv(l, t) {
		if (!(t.state.loading & 4)) {
			var a = _n.get(l);
			if (a) var u = a.get(null);
			else {
				(a = new Map()), _n.set(l, a);
				for (
					var e = l.querySelectorAll(
							'link[data-precedence],style[data-precedence]'
						),
						n = 0;
					n < e.length;
					n++
				) {
					var f = e[n];
					(f.nodeName === 'LINK' || f.getAttribute('media') !== 'not all') &&
						(a.set(f.dataset.precedence, f), (u = f));
				}
				u && a.set(null, u);
			}
			(e = t.instance),
				(f = e.getAttribute('data-precedence')),
				(n = a.get(f) || u),
				n === u && a.set(null, e),
				a.set(f, e),
				this.count++,
				(u = zn.bind(this)),
				e.addEventListener('load', u),
				e.addEventListener('error', u),
				n
					? n.parentNode.insertBefore(e, n.nextSibling)
					: ((l = l.nodeType === 9 ? l.head : l),
					  l.insertBefore(e, l.firstChild)),
				(t.state.loading |= 4);
		}
	}
	var oe = {
		$$typeof: yl,
		Provider: null,
		Consumer: null,
		_currentValue: j,
		_currentValue2: j,
		_threadCount: 0,
	};
	function Rv(l, t, a, u, e, n, f, c) {
		(this.tag = 1),
			(this.containerInfo = l),
			(this.pingCache = this.current = this.pendingChildren = null),
			(this.timeoutHandle = -1),
			(this.callbackNode =
				this.next =
				this.pendingContext =
				this.context =
				this.cancelPendingCommit =
					null),
			(this.callbackPriority = 0),
			(this.expirationTimes = Qn(-1)),
			(this.entangledLanes =
				this.shellSuspendCounter =
				this.errorRecoveryDisabledLanes =
				this.expiredLanes =
				this.warmLanes =
				this.pingedLanes =
				this.suspendedLanes =
				this.pendingLanes =
					0),
			(this.entanglements = Qn(0)),
			(this.hiddenUpdates = Qn(null)),
			(this.identifierPrefix = u),
			(this.onUncaughtError = e),
			(this.onCaughtError = n),
			(this.onRecoverableError = f),
			(this.pooledCache = null),
			(this.pooledCacheLanes = 0),
			(this.formState = c),
			(this.incompleteTransitions = new Map());
	}
	function Ld(l, t, a, u, e, n, f, c, i, v, S, E) {
		return (
			(l = new Rv(l, t, a, f, c, i, v, E)),
			(t = 1),
			n === !0 && (t |= 24),
			(n = ut(3, null, null, t)),
			(l.current = n),
			(n.stateNode = l),
			(t = _f()),
			t.refCount++,
			(l.pooledCache = t),
			t.refCount++,
			(n.memoizedState = { element: u, isDehydrated: a, cache: t }),
			Nf(n),
			l
		);
	}
	function Kd(l) {
		return l ? ((l = ka), l) : ka;
	}
	function Jd(l, t, a, u, e, n) {
		(e = Kd(e)),
			u.context === null ? (u.context = e) : (u.pendingContext = e),
			(u = Ft(t)),
			(u.payload = { element: a }),
			(n = n === void 0 ? null : n),
			n !== null && (u.callback = n),
			(a = Pt(l, u, t)),
			a !== null && (it(a, l, t), Qu(a, l, t));
	}
	function wd(l, t) {
		if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
			var a = l.retryLane;
			l.retryLane = a !== 0 && a < t ? a : t;
		}
	}
	function wc(l, t) {
		wd(l, t), (l = l.alternate) && wd(l, t);
	}
	function Wd(l) {
		if (l.tag === 13) {
			var t = Wa(l, 67108864);
			t !== null && it(t, l, 67108864), wc(l, 67108864);
		}
	}
	var Bn = !0;
	function Nv(l, t, a, u) {
		var e = g.T;
		g.T = null;
		var n = z.p;
		try {
			(z.p = 2), Wc(l, t, a, u);
		} finally {
			(z.p = n), (g.T = e);
		}
	}
	function Cv(l, t, a, u) {
		var e = g.T;
		g.T = null;
		var n = z.p;
		try {
			(z.p = 8), Wc(l, t, a, u);
		} finally {
			(z.p = n), (g.T = e);
		}
	}
	function Wc(l, t, a, u) {
		if (Bn) {
			var e = kc(u);
			if (e === null) xc(l, t, u, Un, a), $d(l, u);
			else if (pv(e, l, t, a, u)) u.stopPropagation();
			else if (($d(l, u), t & 4 && -1 < Hv.indexOf(l))) {
				for (; e !== null; ) {
					var n = qa(e);
					if (n !== null)
						switch (n.tag) {
							case 3:
								if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
									var f = ma(n.pendingLanes);
									if (f !== 0) {
										var c = n;
										for (c.pendingLanes |= 2, c.entangledLanes |= 2; f; ) {
											var i = 1 << (31 - tt(f));
											(c.entanglements[1] |= i), (f &= ~i);
										}
										_t(n), (el & 6) === 0 && ((rn = Tt() + 500), ee(0));
									}
								}
								break;
							case 13:
								(c = Wa(n, 2)), c !== null && it(c, n, 2), yn(), wc(n, 2);
						}
					if (((n = kc(u)), n === null && xc(l, t, u, Un, a), n === e)) break;
					e = n;
				}
				e !== null && u.stopPropagation();
			} else xc(l, t, u, null, a);
		}
	}
	function kc(l) {
		return (l = In(l)), $c(l);
	}
	var Un = null;
	function $c(l) {
		if (((Un = null), (l = xa(l)), l !== null)) {
			var t = G(l);
			if (t === null) l = null;
			else {
				var a = t.tag;
				if (a === 13) {
					if (((l = w(t)), l !== null)) return l;
					l = null;
				} else if (a === 3) {
					if (t.stateNode.current.memoizedState.isDehydrated)
						return t.tag === 3 ? t.stateNode.containerInfo : null;
					l = null;
				} else t !== l && (l = null);
			}
		}
		return (Un = l), null;
	}
	function kd(l) {
		switch (l) {
			case 'beforetoggle':
			case 'cancel':
			case 'click':
			case 'close':
			case 'contextmenu':
			case 'copy':
			case 'cut':
			case 'auxclick':
			case 'dblclick':
			case 'dragend':
			case 'dragstart':
			case 'drop':
			case 'focusin':
			case 'focusout':
			case 'input':
			case 'invalid':
			case 'keydown':
			case 'keypress':
			case 'keyup':
			case 'mousedown':
			case 'mouseup':
			case 'paste':
			case 'pause':
			case 'play':
			case 'pointercancel':
			case 'pointerdown':
			case 'pointerup':
			case 'ratechange':
			case 'reset':
			case 'resize':
			case 'seeked':
			case 'submit':
			case 'toggle':
			case 'touchcancel':
			case 'touchend':
			case 'touchstart':
			case 'volumechange':
			case 'change':
			case 'selectionchange':
			case 'textInput':
			case 'compositionstart':
			case 'compositionend':
			case 'compositionupdate':
			case 'beforeblur':
			case 'afterblur':
			case 'beforeinput':
			case 'blur':
			case 'fullscreenchange':
			case 'focus':
			case 'hashchange':
			case 'popstate':
			case 'select':
			case 'selectstart':
				return 2;
			case 'drag':
			case 'dragenter':
			case 'dragexit':
			case 'dragleave':
			case 'dragover':
			case 'mousemove':
			case 'mouseout':
			case 'mouseover':
			case 'pointermove':
			case 'pointerout':
			case 'pointerover':
			case 'scroll':
			case 'touchmove':
			case 'wheel':
			case 'mouseenter':
			case 'mouseleave':
			case 'pointerenter':
			case 'pointerleave':
				return 8;
			case 'message':
				switch (go()) {
					case si:
						return 2;
					case di:
						return 8;
					case Ee:
					case bo:
						return 32;
					case oi:
						return 268435456;
					default:
						return 32;
				}
			default:
				return 32;
		}
	}
	var Fc = !1,
		oa = null,
		ra = null,
		va = null,
		re = new Map(),
		ve = new Map(),
		ya = [],
		Hv =
			'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
				' '
			);
	function $d(l, t) {
		switch (l) {
			case 'focusin':
			case 'focusout':
				oa = null;
				break;
			case 'dragenter':
			case 'dragleave':
				ra = null;
				break;
			case 'mouseover':
			case 'mouseout':
				va = null;
				break;
			case 'pointerover':
			case 'pointerout':
				re.delete(t.pointerId);
				break;
			case 'gotpointercapture':
			case 'lostpointercapture':
				ve.delete(t.pointerId);
		}
	}
	function ye(l, t, a, u, e, n) {
		return l === null || l.nativeEvent !== n
			? ((l = {
					blockedOn: t,
					domEventName: a,
					eventSystemFlags: u,
					nativeEvent: n,
					targetContainers: [e],
			  }),
			  t !== null && ((t = qa(t)), t !== null && Wd(t)),
			  l)
			: ((l.eventSystemFlags |= u),
			  (t = l.targetContainers),
			  e !== null && t.indexOf(e) === -1 && t.push(e),
			  l);
	}
	function pv(l, t, a, u, e) {
		switch (t) {
			case 'focusin':
				return (oa = ye(oa, l, t, a, u, e)), !0;
			case 'dragenter':
				return (ra = ye(ra, l, t, a, u, e)), !0;
			case 'mouseover':
				return (va = ye(va, l, t, a, u, e)), !0;
			case 'pointerover':
				var n = e.pointerId;
				return re.set(n, ye(re.get(n) || null, l, t, a, u, e)), !0;
			case 'gotpointercapture':
				return (
					(n = e.pointerId), ve.set(n, ye(ve.get(n) || null, l, t, a, u, e)), !0
				);
		}
		return !1;
	}
	function Fd(l) {
		var t = xa(l.target);
		if (t !== null) {
			var a = G(t);
			if (a !== null) {
				if (((t = a.tag), t === 13)) {
					if (((t = w(a)), t !== null)) {
						(l.blockedOn = t),
							_o(l.priority, function () {
								if (a.tag === 13) {
									var u = ct();
									u = Zn(u);
									var e = Wa(a, u);
									e !== null && it(e, a, u), wc(a, u);
								}
							});
						return;
					}
				} else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
					l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
					return;
				}
			}
		}
		l.blockedOn = null;
	}
	function Rn(l) {
		if (l.blockedOn !== null) return !1;
		for (var t = l.targetContainers; 0 < t.length; ) {
			var a = kc(l.nativeEvent);
			if (a === null) {
				a = l.nativeEvent;
				var u = new a.constructor(a.type, a);
				(Pn = u), a.target.dispatchEvent(u), (Pn = null);
			} else return (t = qa(a)), t !== null && Wd(t), (l.blockedOn = a), !1;
			t.shift();
		}
		return !0;
	}
	function Pd(l, t, a) {
		Rn(l) && a.delete(t);
	}
	function xv() {
		(Fc = !1),
			oa !== null && Rn(oa) && (oa = null),
			ra !== null && Rn(ra) && (ra = null),
			va !== null && Rn(va) && (va = null),
			re.forEach(Pd),
			ve.forEach(Pd);
	}
	function Nn(l, t) {
		l.blockedOn === t &&
			((l.blockedOn = null),
			Fc ||
				((Fc = !0),
				M.unstable_scheduleCallback(M.unstable_NormalPriority, xv)));
	}
	var Cn = null;
	function Id(l) {
		Cn !== l &&
			((Cn = l),
			M.unstable_scheduleCallback(M.unstable_NormalPriority, function () {
				Cn === l && (Cn = null);
				for (var t = 0; t < l.length; t += 3) {
					var a = l[t],
						u = l[t + 1],
						e = l[t + 2];
					if (typeof u != 'function') {
						if ($c(u || a) === null) continue;
						break;
					}
					var n = qa(a);
					n !== null &&
						(l.splice(t, 3),
						(t -= 3),
						$f(n, { pending: !0, data: e, method: a.method, action: u }, u, e));
				}
			}));
	}
	function he(l) {
		function t(i) {
			return Nn(i, l);
		}
		oa !== null && Nn(oa, l),
			ra !== null && Nn(ra, l),
			va !== null && Nn(va, l),
			re.forEach(t),
			ve.forEach(t);
		for (var a = 0; a < ya.length; a++) {
			var u = ya[a];
			u.blockedOn === l && (u.blockedOn = null);
		}
		for (; 0 < ya.length && ((a = ya[0]), a.blockedOn === null); )
			Fd(a), a.blockedOn === null && ya.shift();
		if (((a = (l.ownerDocument || l).$$reactFormReplay), a != null))
			for (u = 0; u < a.length; u += 3) {
				var e = a[u],
					n = a[u + 1],
					f = e[wl] || null;
				if (typeof n == 'function') f || Id(a);
				else if (f) {
					var c = null;
					if (n && n.hasAttribute('formAction')) {
						if (((e = n), (f = n[wl] || null))) c = f.formAction;
						else if ($c(e) !== null) continue;
					} else c = f.action;
					typeof c == 'function' ? (a[u + 1] = c) : (a.splice(u, 3), (u -= 3)),
						Id(a);
				}
			}
	}
	function Pc(l) {
		this._internalRoot = l;
	}
	(Hn.prototype.render = Pc.prototype.render =
		function (l) {
			var t = this._internalRoot;
			if (t === null) throw Error(y(409));
			var a = t.current,
				u = ct();
			Jd(a, u, l, t, null, null);
		}),
		(Hn.prototype.unmount = Pc.prototype.unmount =
			function () {
				var l = this._internalRoot;
				if (l !== null) {
					this._internalRoot = null;
					var t = l.containerInfo;
					Jd(l.current, 2, null, l, null, null), yn(), (t[pa] = null);
				}
			});
	function Hn(l) {
		this._internalRoot = l;
	}
	Hn.prototype.unstable_scheduleHydration = function (l) {
		if (l) {
			var t = mi();
			l = { blockedOn: null, target: l, priority: t };
			for (var a = 0; a < ya.length && t !== 0 && t < ya[a].priority; a++);
			ya.splice(a, 0, l), a === 0 && Fd(l);
		}
	};
	var lo = U.version;
	if (lo !== '19.1.0') throw Error(y(527, lo, '19.1.0'));
	z.findDOMNode = function (l) {
		var t = l._reactInternals;
		if (t === void 0)
			throw typeof l.render == 'function'
				? Error(y(188))
				: ((l = Object.keys(l).join(',')), Error(y(268, l)));
		return (
			(l = C(t)),
			(l = l !== null ? A(l) : null),
			(l = l === null ? null : l.stateNode),
			l
		);
	};
	var qv = {
		bundleType: 0,
		version: '19.1.0',
		rendererPackageName: 'react-dom',
		currentDispatcherRef: g,
		reconcilerVersion: '19.1.0',
	};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
		var pn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!pn.isDisabled && pn.supportsFiber)
			try {
				(bu = pn.inject(qv)), (lt = pn);
			} catch {}
	}
	return (
		(Se.createRoot = function (l, t) {
			if (!R(l)) throw Error(y(299));
			var a = !1,
				u = '',
				e = m0,
				n = S0,
				f = g0,
				c = null;
			return (
				t != null &&
					(t.unstable_strictMode === !0 && (a = !0),
					t.identifierPrefix !== void 0 && (u = t.identifierPrefix),
					t.onUncaughtError !== void 0 && (e = t.onUncaughtError),
					t.onCaughtError !== void 0 && (n = t.onCaughtError),
					t.onRecoverableError !== void 0 && (f = t.onRecoverableError),
					t.unstable_transitionCallbacks !== void 0 &&
						(c = t.unstable_transitionCallbacks)),
				(t = Ld(l, 1, !1, null, null, a, u, e, n, f, c, null)),
				(l[pa] = t.current),
				pc(l),
				new Pc(t)
			);
		}),
		(Se.hydrateRoot = function (l, t, a) {
			if (!R(l)) throw Error(y(299));
			var u = !1,
				e = '',
				n = m0,
				f = S0,
				c = g0,
				i = null,
				v = null;
			return (
				a != null &&
					(a.unstable_strictMode === !0 && (u = !0),
					a.identifierPrefix !== void 0 && (e = a.identifierPrefix),
					a.onUncaughtError !== void 0 && (n = a.onUncaughtError),
					a.onCaughtError !== void 0 && (f = a.onCaughtError),
					a.onRecoverableError !== void 0 && (c = a.onRecoverableError),
					a.unstable_transitionCallbacks !== void 0 &&
						(i = a.unstable_transitionCallbacks),
					a.formState !== void 0 && (v = a.formState)),
				(t = Ld(l, 1, !0, t, a ?? null, u, e, n, f, c, i, v)),
				(t.context = Kd(null)),
				(a = t.current),
				(u = ct()),
				(u = Zn(u)),
				(e = Ft(u)),
				(e.callback = null),
				Pt(a, e, u),
				(a = u),
				(t.current.lanes = a),
				Au(t, a),
				_t(t),
				(l[pa] = t.current),
				pc(l),
				new Hn(t)
			);
		}),
		(Se.version = '19.1.0'),
		Se
	);
}
var oo;
function Kv() {
	if (oo) return ti.exports;
	oo = 1;
	function M() {
		if (
			!(
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
			)
		)
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M);
			} catch (U) {
				console.error(U);
			}
	}
	return M(), (ti.exports = Lv()), ti.exports;
}
var Jv = Kv(),
	ni = yo();
const wv = () =>
		O.jsx('header', { children: O.jsx('h1', { children: 'Tic-Tac-Toe' }) }),
	qn = L.createContext(null),
	Wv = ({ square: M, markCell: U }) => {
		const { currentPlayer: p } = L.useContext(qn),
			[y, R] = L.useState(!1),
			G = () => {
				M.mark || R(!0);
			},
			w = () => {
				R(!1);
			},
			ul = () => {
				R(!1), U(M.id);
			};
		return O.jsxs('div', {
			id: M.id,
			className: 'square',
			style: { backgroundColor: `#${M.color}` },
			onClick: ul,
			onMouseEnter: G,
			onMouseLeave: w,
			children: [
				M.mark &&
					O.jsx('span', {
						className: `${M.mark.toLowerCase()}-mark`,
						children: M.mark,
					}),
				p &&
					y &&
					O.jsx('span', {
						className: `${p.toLowerCase()}-mark translucent`,
						children: p,
					}),
			],
		});
	};
let ro = [0, 1, 2],
	kv = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
	];
const $v = ({ squareValues: M, markCell: U }) => {
		const p = ro.map(y =>
			O.jsx(
				'div',
				{
					className: `row row-${y}`,
					children: ro.map(R => {
						let G = kv[y][R];
						return O.jsx(Wv, { square: M[G], markCell: U }, G);
					}),
				},
				`row-${y}`
			)
		);
		return O.jsx('div', { id: 'grid', children: p });
	},
	ge = L.createContext(null),
	ci = ({ id: M, closeModal: U, align: p, children: y }) => {
		const { darkMode: R } = L.useContext(ge);
		return O.jsx('div', {
			id: M,
			className: 'modal',
			children: O.jsxs('div', {
				id: 'modal-content',
				className: `${R ? 'light-mode' : 'dark-mode'} align-${p}`,
				children: [
					O.jsx('div', {
						className: 'modal-button',
						onClick: U,
						children: O.jsx('i', { className: 'fa-solid fa-xmark' }),
					}),
					O.jsx('div', { children: y }),
				],
			}),
		});
	},
	Fv = ({ winner: M, closeModal: U }) =>
		O.jsx(ci, {
			id: 'game-over-modal',
			align: 'middle',
			closeModal: U,
			children: O.jsx('div', {
				id: 'game-over',
				children: M
					? O.jsx('h1', { children: `Congrats, Player ${M}!` })
					: O.jsx('h1', { children: 'Game Over (Draw)' }),
			}),
		}),
	xn = M => {
		let U = Math.floor(Math.random() * M.length);
		return M[U];
	},
	vo = ({ currentPlayer: M, isPlayerTurn: U }) => {
		const { darkMode: p } = L.useContext(ge),
			[y, R] = L.useState(!1);
		let G = U
			? p
				? 'light-mode'
				: 'dark-mode'
			: p
			? 'dark-mode'
			: 'light-mode';
		const w = () => {
				R(!!(M && U));
			},
			ul = () => {
				R(!1);
			};
		return O.jsx('div', {
			className: `player-container ${G} ${U && y && 'scale-up'}`,
			onMouseEnter: w,
			onMouseLeave: ul,
			children: O.jsxs('h2', { children: ['Player ', M] }),
		});
	},
	Pv = ({ resetGame: M }) => {
		const { currentPlayer: U } = L.useContext(qn);
		return O.jsx('div', {
			id: 'players',
			children: U
				? O.jsxs(O.Fragment, {
						children: [
							O.jsx(vo, { currentPlayer: 'X', isPlayerTurn: U == 'X' }),
							O.jsx(vo, { currentPlayer: 'O', isPlayerTurn: U == 'O' }),
						],
				  })
				: O.jsx('div', {
						id: 'reset-game',
						children: O.jsx('h2', { onClick: M, children: 'Reset Game' }),
				  }),
		});
	},
	ii = L.createContext(null),
	Iv = ({ gamesPlayedPair: M, gamesWonByXPair: U, gamesWonByOPair: p }) => {
		const { gamesPlayed: y, setGamesPlayed: R } = M,
			{ gamesWonByX: G, setGamesWonByX: w } = U,
			{ gamesWonByO: ul, setGamesWonByO: C } = p,
			{ currentPlayer: A, setCurrentPlayer: N } = L.useContext(qn),
			{ currentPalette: I } = L.useContext(ii),
			[$, sl] = L.useState(Ql()),
			[Ml, Ul] = L.useState(0),
			[Sl, Jl] = L.useState(null),
			[Pl, yl] = L.useState(!1);
		L.useEffect(() => {
			F();
		}, [I]),
			L.useEffect(() => {
				A && !Sl && st();
			}, [$]),
			L.useEffect(() => {
				Sl && (R(y + 1), Sl == 'X' ? w(G + 1) : C(ul + 1), yl(!0));
			}, [Sl]);
		function Ql() {
			let Ol = [];
			for (let rl = 0; rl < 9; rl++)
				Ol[rl] = { id: rl, mark: null, color: xn(I) };
			return Ol;
		}
		function F() {
			let Ol = $.map((rl, K) => ({ ...$[K], color: xn(I) }));
			sl(Ol);
		}
		function Rl() {
			Jl(null), sl(Ql()), Ul(0), N(xn(['X', 'O']));
		}
		const ql = () => {
				yl(!1), N(null);
			},
			Yl = () => {
				R(y + 1), yl(!0), N(null);
			};
		function st() {
			let Ol = !1,
				rl = ['XXX', 'OOO'],
				K = $,
				Bt = [
					`${K[0].mark}${K[1].mark}${K[2].mark}`,
					`${K[3].mark}${K[4].mark}${K[5].mark}`,
					`${K[6].mark}${K[7].mark}${K[8].mark}`,
					`${K[0].mark}${K[3].mark}${K[6].mark}`,
					`${K[1].mark}${K[4].mark}${K[7].mark}`,
					`${K[2].mark}${K[5].mark}${K[8].mark}`,
					`${K[0].mark}${K[4].mark}${K[8].mark}`,
					`${K[2].mark}${K[4].mark}${K[6].mark}`,
				];
			for (let Nl of Bt)
				if (rl.includes(Nl)) {
					Ol = !0;
					break;
				}
			Ol ? Jl(A) : Ml === 9 ? Yl() : N(A === 'X' ? 'O' : 'X');
		}
		const Lt = Ol => {
			if (!Sl && !$[Ol].mark) {
				let rl = $.map(K => (K.id == Ol ? { ...K, mark: A } : { ...K }));
				sl(rl), Ul(Ml + 1);
			}
		};
		return O.jsxs('main', {
			children: [
				O.jsx($v, { squareValues: $, markCell: Lt }),
				O.jsx(Pv, { resetGame: Rl }),
				Pl &&
					ni.createPortal(
						O.jsx(Fv, { winner: Sl, createNewGame: Rl, closeModal: ql }),
						document.getElementById('modal-root')
					),
			],
		});
	},
	ly = ({ openSettingsModal: M, openStatsModal: U }) =>
		O.jsx('footer', {
			children: O.jsxs('div', {
				id: 'footer-icons',
				children: [
					O.jsx('i', { className: 'fa-solid fa-gear fa-lg', onClick: M }),
					O.jsx('i', {
						className: 'fa-solid fa-chart-simple fa-lg',
						onClick: U,
					}),
				],
			}),
		}),
	ty = [
		'9CD8C7',
		'8BC0BB',
		'7AA9B0',
		'6991A4',
		'587A98',
		'47628D',
		'364B81',
		'253375',
		'141C6A',
		'03045E',
	],
	ay = [
		'FAAE7B',
		'EF9D74',
		'E58C6D',
		'DA7B66',
		'D06A5F',
		'C55957',
		'BB4850',
		'B03749',
		'A62642',
		'9B153B',
	],
	uy = [
		'CEC255',
		'BFBB62',
		'B0B46E',
		'A1AD7B',
		'92A688',
		'839F94',
		'7498A1',
		'6591AE',
		'568ABA',
		'4783C7',
	],
	ey = [
		'F3CBB0',
		'DAC0A5',
		'C2B59A',
		'A9AA8F',
		'919F84',
		'789578',
		'608A6D',
		'477F62',
		'2F7457',
		'16694C',
	],
	ny = [
		'9B2226',
		'8A292F',
		'793037',
		'673640',
		'563D48',
		'454451',
		'344B59',
		'225162',
		'11586A',
		'005F73',
	],
	fy = [
		'BB8806',
		'AD7E09',
		'A0740C',
		'926A0F',
		'846012',
		'775716',
		'694D19',
		'5B431C',
		'4E391F',
		'402F22',
	],
	cy = [
		'D3497C',
		'C55686',
		'B76390',
		'AA709A',
		'9C7DA4',
		'8E8BAE',
		'8098B8',
		'73A5C2',
		'65B2CC',
		'57BFD6',
	],
	iy = [
		'FDA9B7',
		'F299A9',
		'E7889B',
		'DC788E',
		'D16780',
		'C75772',
		'BC4664',
		'B13657',
		'A62549',
		'9B153B',
	],
	sy = [
		'FAAE7B',
		'E69F7A',
		'D18F79',
		'BD8078',
		'A97077',
		'946175',
		'805174',
		'6C4273',
		'573272',
		'432371',
	],
	dy = [
		'C9E8EC',
		'B5D7E0',
		'A2C6D5',
		'8EB5C9',
		'7AA4BE',
		'6794B2',
		'5383A7',
		'3F729B',
		'2C6190',
		'185084',
	],
	oy = [
		'9CD8C7',
		'97C7C0',
		'91B5B9',
		'8CA4B2',
		'8692AB',
		'8181A3',
		'7B6F9C',
		'765E95',
		'704C8E',
		'6B3B87',
	],
	ry = [
		'9B8074',
		'91786C',
		'886F64',
		'7E675C',
		'755F54',
		'6B564C',
		'624E44',
		'58463C',
		'4F3D34',
		'45352C',
	],
	vy = [
		'DEE2E6',
		'CCD0D3',
		'BABDC1',
		'A7ABAE',
		'95989B',
		'838689',
		'717376',
		'5E6163',
		'4C4E51',
		'3A3C3E',
	],
	yy = [
		'0F7D8E',
		'0E7488',
		'0E6A82',
		'0D617C',
		'0D5876',
		'0C4E70',
		'0C456A',
		'0B3C64',
		'0B325E',
		'0A2958',
	],
	hy = [
		'3FBED1',
		'3AB0C9',
		'35A2C0',
		'3094B8',
		'2B86AF',
		'2678A7',
		'216A9E',
		'1C5C96',
		'174E8D',
		'124085',
	],
	my = [
		'FFCDB2',
		'EFC2AB',
		'DFB7A4',
		'CEAB9E',
		'BEA097',
		'AE9590',
		'9E8A89',
		'8D7E83',
		'7D737C',
		'6D6875',
	],
	Sy = [
		'895429',
		'7F5227',
		'745024',
		'6A4E22',
		'5F4C1F',
		'554A1D',
		'4A481A',
		'404618',
		'354415',
		'2B4213',
	],
	gy = [
		'C4C444',
		'B0BB47',
		'9BB349',
		'87AA4C',
		'73A14F',
		'5E9951',
		'4A9054',
		'368757',
		'217F59',
		'0D765C',
	],
	by = [
		'BBCB83',
		'A9BE83',
		'97B184',
		'84A484',
		'729785',
		'608B85',
		'4E7E86',
		'3B7186',
		'296487',
		'175787',
	],
	Ey = [
		'F0D74A',
		'EDCD48',
		'EAC246',
		'E7B844',
		'E4AD42',
		'E1A33F',
		'DE983D',
		'DB8E3B',
		'D88339',
		'D57937',
	],
	Ay = [
		'F0C2A1',
		'EAB798',
		'E5AB8E',
		'DFA085',
		'D9957C',
		'D48972',
		'CE7E69',
		'C87360',
		'C36756',
		'BD5C4D',
	],
	Ty = [
		'C27E80',
		'B77478',
		'AC6970',
		'A05F68',
		'955460',
		'8A4A57',
		'7F3F4F',
		'733547',
		'682A3F',
		'5D2037',
	],
	ho = [
		ny,
		cy,
		iy,
		Ty,
		sy,
		ay,
		Ay,
		my,
		fy,
		Ey,
		ey,
		Sy,
		gy,
		by,
		uy,
		dy,
		hy,
		yy,
		ty,
		oy,
		ry,
		vy,
	],
	My = ({ id: M, palette: U }) => {
		const { darkMode: p } = L.useContext(ge),
			{ currentPalette: y, setCurrentPalette: R } = L.useContext(ii),
			[G, w] = L.useState(''),
			ul = () => {
				R(U);
			};
		L.useEffect(() => {
			y == U ? w(p ? 'border-dark' : 'border-light') : w('');
		}, [y, p]);
		const C = U.map((A, N) =>
			O.jsx(
				'div',
				{ className: 'color', style: { backgroundColor: `#${A}` } },
				N
			)
		);
		return O.jsx('div', {
			id: `palette-${M}`,
			className: `palette ${G}`,
			onClick: ul,
			children: C,
		});
	},
	Oy = () => {
		const M = ho.map((U, p) => O.jsx(My, { id: p, palette: U }, p));
		return O.jsx('div', { id: 'palettes', children: M });
	},
	Dy = ({ closeModal: M }) => {
		const { darkMode: U, setDarkMode: p } = L.useContext(ge),
			[y, R] = L.useState(!1),
			G = () => {
				p(!U);
			},
			w = () => {
				R(!0);
			},
			ul = () => {
				R(!1);
			};
		return O.jsx(ci, {
			id: 'settings-modal',
			align: 'top',
			closeModal: M,
			children: O.jsxs('div', {
				id: 'settings-content',
				children: [
					O.jsxs('div', {
						id: 'dark-mode-toggle',
						children: [
							'DARK MODE:  ',
							O.jsx('span', {
								id: 'on-off',
								className: `${y && 'scale-up'}`,
								onClick: G,
								onMouseEnter: w,
								onMouseLeave: ul,
								children: U ? 'ON' : 'OFF',
							}),
						],
					}),
					O.jsx(Oy, {}),
				],
			}),
		});
	},
	zy = ({ closeModal: M }) => {
		let U = JSON.parse(localStorage.getItem('gamesPlayed')) || 0,
			p = JSON.parse(localStorage.getItem('gamesWonByX')) || 0,
			y = U ? Math.round((100 * p) / U) : 0,
			R = JSON.parse(localStorage.getItem('gamesWonByO')) || 0,
			G = U ? Math.round((100 * R) / U) : 0,
			w = U - p - R,
			ul = U ? Math.round((100 * w) / U) : 0;
		return O.jsx(ci, {
			id: 'stats-modal',
			align: 'middle',
			closeModal: M,
			children: O.jsxs('div', {
				id: 'stats-content',
				children: [
					O.jsx('h2', { children: 'Statistics' }),
					O.jsxs('table', {
						id: 'stats-table',
						children: [
							O.jsxs('tr', {
								children: [
									O.jsx('td', { children: 'Games Played:' }),
									O.jsx('td', { children: U }),
									O.jsx('td', {}),
								],
							}),
							O.jsxs('tr', {
								children: [
									O.jsx('td', { children: 'Games won by Player X:' }),
									O.jsx('td', { children: p }),
									O.jsxs('td', { children: ['(', y, '%)'] }),
								],
							}),
							O.jsxs('tr', {
								children: [
									O.jsx('td', { children: 'Games won by Player O:' }),
									O.jsx('td', { children: R }),
									O.jsxs('td', { children: ['(', G, '%)'] }),
								],
							}),
							O.jsxs('tr', {
								children: [
									O.jsx('td', { children: 'Draws:' }),
									O.jsx('td', { children: w }),
									O.jsxs('td', { children: ['(', ul, '%)'] }),
								],
							}),
						],
					}),
				],
			}),
		});
	};
function _y() {
	let M = JSON.parse(localStorage.getItem('palette')) || xn(ho),
		U = JSON.parse(localStorage.getItem('darkMode')) || !1,
		p = JSON.parse(localStorage.getItem('gamesPlayed')) || 0,
		y = JSON.parse(localStorage.getItem('gamesWonByX')) || 0,
		R = JSON.parse(localStorage.getItem('gamesWonByO')) || 0;
	const [G, w] = L.useState(['X', 'O'][Math.floor(Math.random() * 2)]),
		[ul, C] = L.useState(!1),
		[A, N] = L.useState(!1),
		[I, $] = L.useState(M),
		[sl, Ml] = L.useState(U),
		[Ul, Sl] = L.useState(p),
		[Jl, Pl] = L.useState(y),
		[yl, Ql] = L.useState(R);
	L.useEffect(() => {
		document
			.querySelector('html')
			.classList.add(sl ? 'dark-mode' : 'light-mode'),
			document
				.querySelector('html')
				.classList.remove(sl ? 'light-mode' : 'dark-mode');
	}, [sl]),
		L.useEffect(() => {
			localStorage.setItem('palette', JSON.stringify(I));
		}, [I]),
		L.useEffect(() => {
			localStorage.setItem('darkMode', JSON.stringify(sl));
		}, [sl]),
		L.useEffect(() => {
			localStorage.setItem('gamesPlayed', JSON.stringify(Ul));
		}, [Ul]),
		L.useEffect(() => {
			localStorage.setItem('gamesWonByX', JSON.stringify(Jl));
		}, [Jl]),
		L.useEffect(() => {
			localStorage.setItem('gamesWonByO', JSON.stringify(yl));
		}, [yl]);
	const F = () => C(!0),
		Rl = () => C(!1),
		ql = () => N(!0),
		Yl = () => N(!1);
	return O.jsx('div', {
		id: 'window',
		className: sl ? 'dark-mode' : 'light-mode',
		children: O.jsx(ii.Provider, {
			value: { currentPalette: I, setCurrentPalette: $ },
			children: O.jsx(qn.Provider, {
				value: { currentPlayer: G, setCurrentPlayer: w },
				children: O.jsxs(ge.Provider, {
					value: { darkMode: sl, setDarkMode: Ml },
					children: [
						O.jsx(wv, {}),
						O.jsx(Iv, {
							gamesPlayedPair: { gamesPlayed: Ul, setGamesPlayed: Sl },
							gamesWonByXPair: { gamesWonByX: Jl, setGamesWonByX: Pl },
							gamesWonByOPair: { gamesWonByO: yl, setGamesWonByO: Ql },
						}),
						ul &&
							ni.createPortal(
								O.jsx(Dy, { closeModal: Rl }),
								document.getElementById('modal-root')
							),
						A &&
							ni.createPortal(
								O.jsx(zy, { closeModal: Yl }),
								document.getElementById('modal-root')
							),
						O.jsx(ly, { openSettingsModal: F, openStatsModal: ql }),
					],
				}),
			}),
		}),
	});
}
Jv.createRoot(document.getElementById('root')).render(
	O.jsx(L.StrictMode, { children: O.jsx(_y, {}) })
);
