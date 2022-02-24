document.getElementById("button-theme").addEventListener("click", openBar = () => {
    document.getElementById("themeBar").style.width = "250px";
})
document.getElementById("closeBar").addEventListener("click", closeBar = () => {
    document.getElementById("themeBar").style.width = "0";
})
let defaultTheme = [
	"#00b0e1", "#f04f54", "#00e06c", "#be7ff5",	// teams
	"#c0c0c0",	// fallen
	"#f177dd",	// celestials
	"#999999",	// barrels
	"#5F676C",	// spike
	"#ffe46b", "#fc7676", "#768cfc", "#fca644", "#38b764", "#4a66bd", "#5d275d", "#1a1c2c", "#060011", "#403645", "#ededff", "#000000"	// polygons
]
let theme = []
let interpretTheme = json => {
	if (localStorage.getItem("theme") !== null) {
		let stored = localStorage.getItem('theme')
		let stringified = JSON.stringify(stored)
		json = stringified.replace(/[[|]|"|\\|]/g, '').split(',')
		let inputs = document.getElementById('themeInput').getElementsByTagName('input')
		for (let i = 0; i < inputs.length; i++)
			inputs[i].value = json[i]
		return json
	} else {
		localStorage.setItem("theme", JSON.stringify(defaultTheme))
		window.location.reload(true)
	}
}
document.getElementById("button-reset").addEventListener("click", resetTheme = () => {
	let inputs = document.getElementById('themeInput').getElementsByTagName('input')
	for (let i = 0; i < inputs.length; i++)
		inputs[i].value = defaultTheme[i]
	localStorage.setItem("theme", JSON.stringify(defaultTheme))
	alert("Reset Theme")
	window.location.reload(true)
	return defaultTheme
})
document.getElementById("button-save").addEventListener("click", saveTheme = () => {
	let theme = []
	let themeCompiler = () => {
		let validHex = /^#([0-9a-f]{3}){1,2}$/i
		let hexCodes = document.getElementById('themeInput').getElementsByTagName('input')
		for (let i = 0; i < hexCodes.length; i++) {
			if (validHex.test(hexCodes[i])) throw new Error('Invalid hex code')
			theme.push(hexCodes[i].value)
		}
		localStorage.setItem("theme", JSON.stringify(theme))
		alert(`Saved theme to your localStorage: ${localStorage.getItem('theme')}`)
		window.location.reload(true)
		return theme
	}
	try {
		themeCompiler()
	} catch (e) {
		console.error(e)
		alert(e)
	}
})
document.getElementById("button-import").addEventListener("click", exportTheme = () => {
	let imported = atob(prompt('Please enter your theme code here:', ''))
	let decoded = imported.match(/.{1,7}/g)
	if (imported !== null) {
		let inputs = document.getElementById('themeInput').getElementsByTagName('input')
		for (let i = 0; i < inputs.length; i++)
			inputs[i].value = decoded[i]
		localStorage.setItem("theme", JSON.stringify(decoded))
		window.location.reload(true)
		return theme = decoded
	}
})
theme = interpretTheme(theme)
document.getElementById("button-export").addEventListener("click", exportTheme = () => {
	let exported = ''
	let hexCodes = document.getElementById('themeInput').getElementsByTagName('input')
	for (let i = 0; i < hexCodes.length; i++)
		exported += hexCodes[i].value
	prompt('Here is your theme\'s code:', btoa(exported))
})

! function(e) {
	var t = {};

	function n(r) {
		if (t[r]) return t[r].exports;
		var a = t[r] = {
			i: r,
			l: !1,
			exports: {}
		};
		return e[r].call(a.exports, a, a.exports, n), a.l = !0, a.exports
	}
	n.m = e, n.c = t, n.d = function(e, t, r) {
		n.o(e, t) || Object.defineProperty(e, t, {
			enumerable: !0,
			get: r
		})
	}, n.r = function(e) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, n.t = function(e, t) {
		if (1 & t && (e = n(e)), 8 & t) return e;
		if (4 & t && "object" == typeof e && e && e.__esModule) return e;
		var r = Object.create(null);
		if (n.r(r), Object.defineProperty(r, "default", {
				enumerable: !0,
				value: e
			}), 2 & t && "string" != typeof e)
			for (var a in e) n.d(r, a, function(t) {
				return e[t]
			}.bind(null, a));
		return r
	}, n.n = function(e) {
		var t = e && e.__esModule ? function() {
			return e.default
		} : function() {
			return e
		};
		return n.d(t, "a", t), t
	}, n.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, n.p = "", n(n.s = 7)
}([function(e, t, n) {
	var r = n(14).MAX_SIDES;

	function a(e, t) {
		return Math.log(t) / Math.log(e)
	}

	function o(e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
			n = Math.pow(10, t);
		return Math.round(e * n) / n
	}
	e.exports = {
		degreesToRadians: function(e) {
			return e * (Math.PI / 180)
		},
		radiansToDegrees: function(e) {
			return e * (180 / Math.PI)
		},
		formatURL: function(e) {
			var t = e.indexOf("://"); - 1 != t && (e = e.substring(t + 3));
			var n = e.indexOf("/");
			return -1 != n && (e = e.substring(0, n)), e
		},
		round: o,
		roundToScope: function(e, t) {
			return o(e, Math.round(-a(10, t)) + 4)
		},
		baseLog: a,
		generateSign: function() {
			return Math.random() < .5 ? -1 : 1
		},
		formatTime: function(e) {
			var t = parseInt(e, 10),
				n = Math.floor(t / 3600),
				r = Math.floor((t - 3600 * n) / 60),
				a = t - 3600 * n - 60 * r;
			return n < 10 && (n = "0" + n), r < 10 && (r = "0" + r), a < 10 && (a = "0" + a), n + ":" + r + ":" + a
		},
		arrayToSentence: function(e) {
			if (0 == e.length) return "nothing";
			if (1 == e.length) return e[0];
			var t = e.pop();
			return e.join(", ") + (1 === e.length ? " and " : ", and ") + t
		},
		clampSides: function(e) {
			return Math.max(Math.min(r, e), -r)
		},
		getXPLevel: function(e) {
			for (var t = 1, n = 100; e > n;) e -= n, n *= 1.2, t++;
			return t
		}
	}
}, function(e, t, n) {
	"use strict";
	n.d(t, "E", (function() {
		return d
	})), n.d(t, "w", (function() {
		return f
	})), n.d(t, "d", (function() {
		return h
	})), n.d(t, "G", (function() {
		return p
	})), n.d(t, "F", (function() {
		return g
	})), n.d(t, "p", (function() {
		return v
	})), n.d(t, "H", (function() {
		return _
	})), n.d(t, "i", (function() {
		return m
	})), n.d(t, "l", (function() {
		return y
	})), n.d(t, "k", (function() {
		return b
	})), n.d(t, "m", (function() {
		return E
	})), n.d(t, "q", (function() {
		return O
	})), n.d(t, "j", (function() {
		return T
	})), n.d(t, "u", (function() {
		return M
	})), n.d(t, "c", (function() {
		return w
	})), n.d(t, "r", (function() {
		return S
	})), n.d(t, "v", (function() {
		return P
	})), n.d(t, "f", (function() {
		return x
	})), n.d(t, "s", (function() {
		return C
	})), n.d(t, "D", (function() {
		return B
	})), n.d(t, "C", (function() {
		return D
	})), n.d(t, "b", (function() {
		return k
	})), n.d(t, "J", (function() {
		return j
	})), n.d(t, "n", (function() {
		return L
	})), n.d(t, "o", (function() {
		return U
	})), n.d(t, "z", (function() {
		return N
	})), n.d(t, "B", (function() {
		return z
	})), n.d(t, "A", (function() {
		return W
	})), n.d(t, "t", (function() {
		return K
	})), n.d(t, "x", (function() {
		return G
	})), n.d(t, "y", (function() {
		return Y
	})), n.d(t, "e", (function() {
		return F
	})), n.d(t, "g", (function() {
		return H
	})), n.d(t, "I", (function() {
		return q
	})), n.d(t, "a", (function() {
		return X
	})), n.d(t, "h", (function() {
		return $
	}));
	var r = n(7),
		a = n(2),
		o = n(6),
		i = n(3),
		u = n(0);

	function s(e, t) {
		return function(e) {
			if (Array.isArray(e)) return e
		}(e) || function(e, t) {
			var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
			if (null == n) return;
			var r, a, o = [],
				i = !0,
				u = !1;
			try {
				for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0);
			} catch (e) {
				u = !0, a = e
			} finally {
				try {
					i || null == n.return || n.return()
				} finally {
					if (u) throw a
				}
			}
			return o
		}(e, t) || c(e, t) || function() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}()
	}

	function c(e, t) {
		if (e) {
			if ("string" == typeof e) return l(e, t);
			var n = Object.prototype.toString.call(e).slice(8, -1);
			return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(e, t) : void 0
		}
	}

	function l(e, t) {
		(null == t || t > e.length) && (t = e.length);
		for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
		return r
	}
	var d = {
		players: 0,
		spectators: 0
	};

	function f(e, t) {
		d.players = e, d.spectators = t
	}
	var h = {
		normal: {
			weapon: {},
			body: {}
		},
		celestial: {
			weapon: {},
			body: {}
		}
	};

	function p(e) {
		h = e;
		for (var t = 0; t < 4; t++)
			for (var n = (t % 2 == 0 ? h.celestial : h.normal)[t > 1 ? "weapon" : "body"], r = 0, a = Object.entries(n); r < a.length; r++) {
				var o = s(a[r], 2),
					i = o[0];
				o[1];
				n.maxTier = +i
			}
	}
	var g = !1,
		v = null;

	function _(e) {
		if (e) {
			(v = {
				entries: e[0],
				playerCount: e[1]
			}).showPlayers = -1 != v.playerCount, v.highestScore = 0;
			for (var t = 0; t < v.entries.length; t++) {
				for (var n = v.entries[t], i = {}, u = a.LEADERBOARD_STRUCTURE[n[0]], s = 0; s < n.length; s++) i[u[s]] = n[s];
				2 == n[0] && (i.team = -1), v.entries[t] = i, i.score > v.highestScore && (v.highestScore = i.score)
			}
			for (var c = 0; c < v.entries.length; c++) {
				var l = v.entries[c];
				if (l.size = 1 == l.type || l.isCelestial ? 75 : 40, 1 == !l.type && v.showPlayers) {
					for (var d = 0; d < l.barrels.length; d++) {
						l.barrels[d].animTime = 0
					}
					for (var f = 0; f < l.gadgets.length; f++) {
						var h = l.gadgets[f];
						h.animTime = 0, 0 == h.type && (h.rot = -o.upgradeRotation / 15)
					}
				}
				l.scoreRatio = l.score / v.highestScore, l.scoreRatio = Number.isNaN(l.scoreRatio) || !Number.isFinite(l.score) ? Number.isFinite(l.score) ? 0 : 1 : l.scoreRatio, l.formattedScore = Object(r.roundWithEnding)(l.score)
			}
		} else v = null
	}

	function m(e, t) {
		return (e * a.NUMBER_AVERAGE + t) / (a.NUMBER_AVERAGE + 1)
	}

	function y(e, t) {
		var n = e.x - t.x,
			r = e.y - t.y;
		return n * n + r * r <= t.r * t.r
	}

	function b(e, t) {
		return e.x > t.x && e.x < t.x + t.width && e.y < t.y + t.height && e.y > t.y
	}

	function E(e, t) {
		var n = {
				x: e.x - t.x,
				y: e.y - t.y
			},
			r = {
				width: t.width,
				height: t.height,
				x: 0,
				y: 0
			};
		return function(e, t, n) {
				var r = Math.cos(n),
					a = Math.sin(n),
					o = r * (t.x - e.x) + a * (t.y - e.y) + e.x,
					i = r * (t.y - e.y) - a * (t.x - e.x) + e.y;
				t.x = o, t.y = i
			}(r, n, t.rot),
			function(e, t) {
				return e.x > t.x - t.width / 2 && e.x < t.x + t.width / 2 && e.y < t.y + t.height / 2 && e.y > t.y - t.height / 2
			}(n, r)
	}

	function O(e, t, n) {
		return t * n + e * (1 - n)
	}

	function T(e, t) {
		return Math.random() * (t - e) + e
	}

	function M(e) {
		for (var t = 0; t < e.length; t++) {
			var n = e[t];
			switch (n.type) {
				case a.EVENT_TYPES.LANDING:
					Object(o.entityLanding)(n.data);
					break;
				case a.EVENT_TYPES.WORMHOLE_SPAWN:
					Object(o.wormholeSpawn)(n.data);
					break;
				case a.EVENT_TYPES.WORMHOLE_RUPTURE:
					Object(o.wormholeRupture)(n.data);
					break;
				case a.EVENT_TYPES.GATEWAY_ACTIVATE:
					Object(o.gatewayActivate)(n.data);
					break;
				case a.EVENT_TYPES.GATE_ACTIVATE:
					Object(o.gateActivate)(n.data);
					break;
				case a.EVENT_TYPES.CHAT:
					I(n.data.id, n.data.message);
					break;
				default:
					console.error('Recieved invalid event from server: "'.concat(n.type, '"'))
			}
		}
	}
	var w = {},
		S = [],
		A = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;

	function R(e) {
		if (!i.f.clickableLinks) return {
			sections: [{
				link: !1,
				text: e
			}],
			text: e
		};
		var t, n = e.replace(A, (function(e) {
				return "<scon><link>".concat(e, "<scon>")
			})),
			r = {
				sections: [],
				text: e
			},
			a = function(e, t) {
				var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
				if (!n) {
					if (Array.isArray(e) || (n = c(e)) || t && e && "number" == typeof e.length) {
						n && (e = n);
						var r = 0,
							a = function() {};
						return {
							s: a,
							n: function() {
								return r >= e.length ? {
									done: !0
								} : {
									done: !1,
									value: e[r++]
								}
							},
							e: function(e) {
								throw e
							},
							f: a
						}
					}
					throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}
				var o, i = !0,
					u = !1;
				return {
					s: function() {
						n = n.call(e)
					},
					n: function() {
						var e = n.next();
						return i = e.done, e
					},
					e: function(e) {
						u = !0, o = e
					},
					f: function() {
						try {
							i || null == n.return || n.return()
						} finally {
							if (u) throw o
						}
					}
				}
			}(n.split("<scon>").filter((function(e) {
				return "" != e
			})));
		try {
			for (a.s(); !(t = a.n()).done;) {
				var o = t.value;
				length += o.length, o.startsWith("<link>") ? r.sections.push({
					link: !0,
					text: o.substr(6)
				}) : r.sections.push({
					link: !1,
					text: o
				})
			}
		} catch (e) {
			a.e(e)
		} finally {
			a.f()
		}
		return r
	}

	function I(e, t) {
		e in w || (w[e] = []), w[e].length > 3 && (w[e][3].time = Math.min(w[e][3].time, a.MSG_FADE_OUT_TIME)), w[e].unshift({
			message: R(t),
			time: a.CHAT_STAY_TIME
		})
	}

	function P(e) {
		console.log("NOTIFICATION: ".concat(e)), S.unshift({
			message: R(e),
			time: a.NOTIF_STAY_TIME
		})
	}

	function x() {
		w = {}, S = []
	}

	function C(e) {
		var t = Object(u.arrayToSentence)(["You"].concat(e.helpers.map((function(e) {
			return i.f.showNames ? "" != e.name ? e.name : "an unnamed ".concat(e.className) : "a".concat(Object(r.startsWithVowel)(e.className) ? "n" : "", " ").concat(e.className)
		}))));
		t += " murdered ", t += i.f.showNames ? "" != e.name ? e.name : "an unnamed ".concat(e.className) : "a".concat(Object(r.startsWithVowel)(e.className) ? "n" : "", " ").concat(e.className), P(t += ".")
	}
	var B = [2 * a.UPGRADE_COUNT],
		D = 0,
		k = [],
		j = [],
		L = [],
		U = [];

	function N(e) {
		D = e
	}

	function z(e) {
		g = e
	}

	function W(e) {
		for (var t = 0; t < e.length; t++) B[t] = e[t]
	}

	function K(e) {
		k = e
	}

	function G(e) {
		j = e
	}

	function Y() {
		for (var e = 0; e < 2 * a.UPGRADE_COUNT; e++) B[e] = 0;
		D = 0, F(), H()
	}

	function F() {
		L = k, k = []
	}

	function H() {
		U = j, j = []
	}

	function q(e) {
		B[e - 1]++, D--
	}

	function X(e) {
		D++
	}
	var V = document.getElementById("message-popup"),
		J = document.getElementById("message-popup-title"),
		Z = document.getElementById("message-popup-text");

	function $(e, t) {
		var n, a;
		J.innerHTML = null === (n = Object(r.escapeHTML)(null == e ? void 0 : e.toString())) || void 0 === n ? void 0 : n.replaceAll("\\n", "<br>"), Z.innerHTML = null === (a = Object(r.escapeHTML)(null == t ? void 0 : t.toString())) || void 0 === a ? void 0 : a.replaceAll("\\n", "<br>"), V.classList.remove("hide")
	}
	document.getElementById("ok-button").onclick = function() {
		V.classList.add("hide")
	}
}, function(e, t) {
	e.exports = Object.freeze({
		COMMAND_PREFIX: "/",
		CAMERA_SHAKE_DIST: 1e5,
		SERVER_TPS: 30,
		MAX_PARTICLES: 1e3,
		MAX_LEADERBOARD_ENTRIES: 15,
		CAMERA_SIZE: 2e3,
		CHAT_STAY_TIME: 12,
		NOTIF_STAY_TIME: 6,
		MSG_FADE_IN_TIME: .2,
		MSG_FADE_OUT_TIME: .5,
		AUTO_SPIN_SPEED: 0.8,
		GRID_STROKE: 3,
		POLYGON_COLORS: [theme[8], theme[9], theme[10], theme[11], theme[12], theme[13], theme[14], theme[15], theme[16], theme[17], theme[18], theme[19]],
		NUMBER_ENDINGS: ["k", "mil", "bil", "tril", "qa", "qi", "sx", "sp", "oc", "no", "dc", "ud", "dd", "td", "qad", "qid", "sxd", "spd", "ocd", "nod", "vg", "uvg", "dvg", "tvg", "qavg", "qivg", "sxvg", "spvg", "ocvg", "novg", "tg", "utg", "dtg", "ttg", "qatg", "qitg", "sxtg", "sptg", "octg", "notg", "qd", "uqd", "dqd", "tqd", "qaqd", "qiqd", "sxqd", "spqd", "ocqd", "noqd", "qq", "uqq", "dqq", "tqq", "qaqq", "qiqq", "sxqq", "spqq", "ocqq", "noqq", "sg", "usg", "dsg", "tsg", "qasg", "qisg", "sxsg", "spsg", "ocsg", "nosg", "st", "ust", "dst", "tst", "qast", "qist", "sxst", "spst", "ocst", "nost", "og", "uog", "dog", "tog", "qaog", "qiog", "sxog", "spog", "ocog", "noog", "nm", "unm", "dnm", "tnm", "qanm", "qinm", "sxnm", "spnm", "ocnm", "nonm", "ct", "udct"],
		TEAM_NAMES: {
			"-1": "Fallen",
			0: "Lone",
			1: "Polygon",
			2: "Celestial",
			10: "Blue",
			11: "Red",
			12: "Green",
			13: "Purple"
		},
		GAMEMODE_COLORS: {
			"-2": "#ffffff",
			"-1": "#ffffff",
			0: "#f04f54",
			1: "#00e06c",
			2: "#00b0e1",
			3: "#be7ff5"
		},
		GAMEMODE_NAMES: {
			"-2": "The Crossroads",
			"-1": "The Sancturary",
			0: "FFA",
			1: "4 Teams",
			2: "Tank Editor"
		},
		TEAM_COLORS: [theme[0], theme[1], theme[2], theme[3]],
		FALLEN_COLOR: theme[4],
		CELESTIAL_COLOR: theme[5],
		BARREL_COLOR: theme[6],
		BACKGROUND_UI_COLOR: "#081e20",
		SPIKE_COLOR: theme[7],
		STROKE_SIZE: 5,
		STROKE_SHADE: -30,
		TEXT_STROKE: 10,
		BARREL_ROT_ROUNDING: 5,
		TANK_EDITOR_VERSION: 3,
		NUMBER_AVERAGE: 0,
		MSG_TYPES: {
			JOIN_GAME: 0,
			GAME_UPDATE: 1,
			INPUT: 2,
			MOVE: 3,
			SHOOTING: 4,
			PASSIVE_MODE: 5,
			GAME_OVER: 6,
			SEND_CHAT: 7,
			ADD_UPGRADE_POINT: 8,
			UPGRADE_STAT: 9,
			SET_STAT_UPGRADES: 10,
			RECIEVE_NOTIFICATION: 11,
			RECIEVE_BODY_UPGRADES: 12,
			RECIEVE_WEAPON_UPGRADES: 13,
			UPGRADE_BODY: 14,
			UPGRADE_WEAPON: 15,
			ASCEND: 16,
			RETURN: 17,
			REPORT_BUG: 18,
			SUBMIT_FEEDBACK: 19,
			CHANGE_CONTROL_STATE: 20,
			CHANGE_CONTROL_POSITION: 21,
			DIMENSION_ATTRIBUTES: 22,
			RENDER_ENTITY: 23,
			WORMHOLE_SPAWN: 24,
			PLAYER_COUNT: 25,
			SEND_TO_SERVER: 26,
			COPY: 27,
			EDITMODE: 28,
			RECIEVE_SERVERS: 29,
			LOAD_WEAPON_UPGRADE: 30,
			LOAD_BODY_UPGRADE: 31,
			CHANGE_WEAPON: 32,
			CHANGE_BODY: 33,
			RECIEVE_TANK: 34,
			CLASS_TREE: 35,
			POPUP: 36,
			KILL: 37,
			PING: 38,
			GLOBAL_BROADCAST: 39,
			GATES_UPDATE: 40,
			RESPAWN_IN_SERVER: 41
		},
		LEADERBOARD_STRUCTURE: [
			["type", "name", "id", "team", "radiant", "level", "score", "kills", "sides", "outerSides", "outerSize", "isCelestial", "barrels", "gadgets", "layers"],
			["type", "name", "id", "team", "radiant", "level", "score", "kills", "sides", "outerSides", "outerSize", "color"],
			["type", "name", "score"]
		],
		PACKET_STRUCTURE: [
			["id", "sType", "x", "y", "d", "size"],
			["id", "sType", "x", "y", "d", "size", "sides", "outerSides", "outerSize", "layers", "radiant", "team", "name", "showName", "className", "maxHP", "hp", "score", "totalScore", "xpToNextLevel", "level", "isInvulnurable"],
			["id", "sType", "x", "y", "d", "size", "sides", "outerSides", "outerSize", "layers", "radiant", "team", "name", "showName", "className", "maxHP", "hp", "score", "totalScore", "xpToNextLevel", "level", "isInvulnurable", "barrels", "barrelData", "gadgets", "gadgetData", "isCelestial", "weaponUpgrade", "bodyUpgrade"],
			["id", "sType", "x", "y", "d", "size", "sides", "outerSides", "outerSize", "layers", "radiant", "team", "name", "showName", "className", "maxHP", "hp", "score", "totalScore", "xpToNextLevel", "level", "isInvulnurable", "color"],
			["id", "sType", "x", "y", "d", "size", "sides", "parentID", "team", "radiant", "maxHP", "hp", "color"],
			["id", "sType", "x", "y", "d", "size", "sides", "parentID", "team", "radiant", "maxHP", "hp", "color", "barrels", "barrelData", "gadgets", "gadgetData", "outerSides", "outerSize", "layers"],
			["id", "sType", "x", "y", "d", "size", "type"],
			["id", "sType", "x", "y", "d", "size", "type", "sign", "subtype", "gamemode", "lifetime"],
			["id", "sType", "x", "y", "d", "size", "type", "sign", "lTeam", "lID", "lRadiant"]
		],
		ANALYTICS_EVENTS: {
			JOIN_GAME: "join_game",
			DEATH: "death",
			SUBMIT_FEEDBACK: "submit_feedback",
			REPORT_BUG: "report_bug",
			SEND_MESSAGE: "send_message",
			AD_BLOCKER: "ad_blocker"
		},
		EVENT_TYPES: {
			LANDING: 0,
			CHAT: 1,
			WORMHOLE_SPAWN: 2,
			WORMHOLE_RUPTURE: 3,
			GATEWAY_ACTIVATE: 4,
			GATE_ACTIVATE: 5
		},
		COOKIES: {
			TUTORIAL: {
				MOVE: "tut_move",
				AUTO_FIRE: "tut_autofire",
				ASCEND: "tut_ascend",
				DRONES: "tut_drones",
				SCREENSHOT_MODE: "tut_screenshot_mode",
				AUTO_CANNONS: "tut_auto_cannons",
				AD_BLOCKER: "ad_blocker"
			},
			SETTINGS: "settings",
			KEYBINDS: "keybinds",
			GAMEMODE: "gamemode",
			USERNAME: "username"
		},
		UPGRADE_COUNT: 4,
		MAX_UPGRADE_POINTS: 15,
		UPGRADE_COLORS: ["#768cfc", "#fc7676", "#38b764", "#ffe46b"],
		BODY_UPGRADE_NAMES: ["Max Health", "Regeneration", "Body Damage", "Movement Speed"],
		WEAPON_UPGRADE_NAMES: ["Reload", "Bullet Damage", "Bullet Speed", "Bullet Penetration"]
	})
}, function(e, t, n) {
	"use strict";
	n.d(t, "f", (function() {
		return f
	})), n.d(t, "g", (function() {
		return p
	})), n.d(t, "e", (function() {
		return g
	})), n.d(t, "d", (function() {
		return v
	})), n.d(t, "a", (function() {
		return y
	})), n.d(t, "b", (function() {
		return T
	})), n.d(t, "c", (function() {
		return w
	}));
	var r = n(7),
		a = n(2),
		o = n(8),
		i = n(6),
		u = n(5);

	function s(e, t) {
		return function(e) {
			if (Array.isArray(e)) return e
		}(e) || function(e, t) {
			var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
			if (null == n) return;
			var r, a, o = [],
				i = !0,
				u = !1;
			try {
				for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0);
			} catch (e) {
				u = !0, a = e
			} finally {
				try {
					i || null == n.return || n.return()
				} finally {
					if (u) throw a
				}
			}
			return o
		}(e, t) || function(e, t) {
			if (!e) return;
			if ("string" == typeof e) return c(e, t);
			var n = Object.prototype.toString.call(e).slice(8, -1);
			"Object" === n && e.constructor && (n = e.constructor.name);
			if ("Map" === n || "Set" === n) return Array.from(e);
			if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
		}(e, t) || function() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}()
	}

	function c(e, t) {
		(null == t || t > e.length) && (t = e.length);
		for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
		return r
	}
	var l = document.getElementById("settings"),
		d = {
			sectionNamesAndChat: {
				section: !0,
				name: "Names & Chat"
			},
			showChat: {
				name: "Show Chat",
				type: 0,
				default: !0,
				onUpdate: function() {
					i.renderMainMenu || u.d || (f.showChat ? chat.classList.remove("hidden") : chat.classList.add("hidden"))
				}
			},
			showNames: {
				name: "Show Names",
				type: 0,
				default: !0
			},
			clickableLinks: {
				name: "Clickable Links",
				type: 0,
				default: !0
			},
			showOwnName: {
				name: "Show Own Name",
				type: 0,
				default: !1
			},
			sectionDebugMode: {
				section: !0,
				name: "Debug Mode"
			},
			showClassNames: {
				name: "Show Class Names",
				type: 0,
				default: !1
			},
			showIds: {
				name: "Show IDs",
				type: 0,
				default: !1
			},
			copyIds: {
				name: "Click to Copy IDs",
				type: 0,
				default: !1
			},
			showTickTime: {
				name: "Show Tick Time",
				type: 0,
				default: !0
			},
			showServerName: {
				name: "Show Server Name",
				type: 0,
				default: !0
			},
			showPlayerCount: {
				name: "Show Player Count",
				type: 0,
				default: !0
			},
			showGlobalPlayerCount: {
				name: "Show Global Player Count",
				type: 0,
				default: !0
			},
			showFPS: {
				name: "Show FPS",
				type: 0,
				default: !0
			},
			showPing: {
				name: "Show Ping",
				type: 0,
				default: !0
			},
			showPosition: {
				name: "Show Position",
				type: 0,
				default: !1
			},
			showExtraPerformanceInfo: {
				name: "Show Extra Performance Info",
				type: 0,
				default: !0
			},
			debugModeTextSize: {
				name: "Debug Mode Text Size",
				type: 1,
				default: 100,
				min: 0,
				max: 200,
				step: 1,
				ending: "%",
				onUpdate: function() {
					for (var e = 0; e < o.j.childElementCount; e++) o.j.children[e].style.fontSize = f.debugModeTextSize / 50 + "vmin"
				}
			},
			sectionGraphics: {
				section: !0,
				name: "Graphics"
			},
			staticCamera: {
				name: "Static Camera",
				type: 0,
				default: !1
			},
			minimap: {
				name: "Show Minimap",
				type: 0,
				default: !0
			},
			showParticles: {
				name: "Show Particles",
				type: 0,
				default: !0
			},
			hudOpacity: {
				name: "Hud Opacity",
				type: 1,
				default: 100,
				min: 0,
				max: 100,
				step: 1,
				ending: "%",
				onUpdate: function() {
					Array.from(document.getElementsByClassName("hud")).forEach((function(e) {
						e.style.opacity = f.hudOpacity / 100
					}))
				}
			},
			renderDelay: {
				name: "Render Delay",
				type: 1,
				default: 100,
				min: 0,
				max: 200,
				step: 1,
				ending: "ms"
			},
			cameraShake: {
				name: "Camera Shake",
				type: 1,
				default: 100,
				min: 0,
				max: 100,
				step: 1,
				ending: "%"
			}
		},
		f = {},
		h = {},
		p = !1;

	function g() {
		Object.entries(d).forEach((function(e) {
			var t = s(e, 2),
				n = t[0],
				r = t[1];
			if (!r.section) {
				var a = h[n];
				switch (a || console.error("Could not find object for setting " + n), r.type) {
					case 0:
						a.checked = _(f[n], r.default);
						break;
					case 1:
						a.value = _(f[n], r.default), a.dispatchEvent(new CustomEvent("input", {
							detail: "to update settings"
						}))
				}
				r.hasOwnProperty("onUpdate") && r.onUpdate()
			}
		})), Object.entries(O).forEach((function(e) {
			var t = s(e, 2),
				n = t[0];
			if (t[1].editable) {
				var r = M[n],
					a = T[n];
				r.textContent = w[a], r.value = a
			}
		})), l.classList.remove("hide"), p = !0, Object(r.setPopupOpen)(!0)
	}

	function v(e, t) {
		var n = document.getElementById("settings-scroll");
		Object.entries(d).forEach((function(t) {
			var r = s(t, 2),
				a = r[0],
				o = r[1];
			if (o.section) m(n, o.name);
			else {
				switch (o.type) {
					case 0:
						f[a] = _(e[a], o.default);
						var i = Object(u.a)(n, "div");
						Object(u.a)(i, "label").textContent = o.name;
						var c = Object(u.a)(i, "label");
						c.classList.add("switch");
						var l = Object(u.a)(c, "input");
						l.type = "checkbox", Object(u.a)(c, "span").classList.add("switch-button"), h[a] = l;
						break;
					case 1:
						f[a] = _(e[a], o.default), (i = Object(u.a)(n, "div")).classList.add("slider"), Object(u.a)(i, "label").textContent = o.name;
						var d = Object(u.a)(i, "input");
						d.classList.add("slide"), d.type = "range", d.step = o.step, d.min = o.min, d.max = o.max, d.oninput = function() {
							d.previousElementSibling.textContent = "".concat(o.name, " - ").concat(d.value).concat(o.ending)
						}, h[a] = d
				}
				o.hasOwnProperty("onUpdate") && o.onUpdate()
			}
		})), m(n, "Keybinds"), Object.entries(O).forEach((function(e) {
			var r = s(e, 2),
				a = r[0],
				o = r[1];
			if (o.editable) {
				T[a] = _(t[a], o.default);
				var i = Object(u.a)(n, "div");
				i.classList.add("keybind"), Object(u.a)(i, "label").textContent = o.name;
				var c = T[a],
					l = Object(u.a)(i, "button");
				l.textContent = w[c], l.value = c, l.addEventListener("click", (function() {
					! function(e) {
						b != e ? (E(), b = e, M[e].classList.add("changing")) : E()
					}(a)
				})), M[a] = l
			}
		})), Object(u.a)(n, "hr")
	}

	function _(e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
		return null != e ? e : t
	}

	function m(e, t) {
		e.childElementCount > 0 && Object(u.a)(e, "hr"), Object(u.a)(e, "h2").textContent = t, Object(u.a)(e, "hr")
	}

	function y() {
		var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
		e && (Object.entries(d).forEach((function(e) {
			var t = s(e, 2),
				n = t[0],
				r = t[1];
			if (!r.section) {
				var a = h[n];
				switch (a || console.error("Could not find object for setting " + n), r.type) {
					case 0:
						f[n] = a.checked;
						break;
					case 1:
						f[n] = a.value
				}
				r.hasOwnProperty("onUpdate") && r.onUpdate()
			}
		})), Object.entries(O).forEach((function(e) {
			var t = s(e, 2),
				n = t[0];
			t[1].editable && (T[n] = M[n].value)
		})), Object(r.setCookie)(a.COOKIES.SETTINGS, JSON.stringify(f)), Object(r.setCookie)(a.COOKIES.KEYBINDS, JSON.stringify(T))), Object(i.updateDebugMode)(), p = !1, E(), l.classList.add("hide"), Object(r.setPopupOpen)(!1)
	}
	var b = null;

	function E() {
		b && (M[b].classList.remove("changing"), b = null)
	}
	window.addEventListener("keydown", (function(e) {
		if (b) {
			var t = e.keyCode,
				n = M[b];
			n.textContent = w[t], n.value = t, E(), e.preventDefault()
		}
	}));
	var O = {
			escape: {
				name: "Escape",
				default: 27,
				editable: !1
			},
			enter: {
				name: "Enter",
				default: 13,
				editable: !0
			},
			openCommand: {
				name: "Open Command",
				default: 191,
				editable: !0
			},
			openChat: {
				name: "Open Chat",
				default: 13,
				editable: !0
			},
			previousChatMessage: {
				name: "Move Up in Chat History",
				default: 38,
				editable: !0
			},
			nextChatMessage: {
				name: "Move Down in Chat History",
				default: 40,
				editable: !0
			},
			moveUp: {
				name: "Move Up",
				default: 87,
				editable: !0
			},
			moveDown: {
				name: "Move Down",
				default: 83,
				editable: !0
			},
			moveLeft: {
				name: "Move Left",
				default: 65,
				editable: !0
			},
			moveRight: {
				name: "Move Right",
				default: 68,
				editable: !0
			},
			moveUpAlt: {
				name: "Move Up (Alternate)",
				default: 38,
				editable: !0
			},
			moveDownAlt: {
				name: "Move Down (Alternate)",
				default: 40,
				editable: !0
			},
			moveLeftAlt: {
				name: "Move Left (Alternate)",
				default: 37,
				editable: !0
			},
			moveRightAlt: {
				name: "Move Right (Alternate)",
				default: 39,
				editable: !0
			},
			autoFire: {
				name: "Toggle Auto Fire",
				default: 69,
				editable: !0
			},
			autoSpin: {
				name: "Toggle Auto Spin",
				default: 67,
				editable: !0
			},
			spinLock: {
				name: "Toggle Spin Lock",
				default: 88,
				editable: !0
			},
			passiveMode: {
				name: "Toggle Passive Mode",
				default: 86,
				editable: !0
			},
			debugMode: {
				name: "Toggle Debug Mode",
				default: 77,
				editable: !0
			},
			screenshotMode: {
				name: "Toggle Screenshot Mode",
				default: 80,
				editable: !0
			},
			weaponTree: {
				name: "Open Weapon Upgrade Tree",
				default: 89,
				editable: !0
			},
			bodyTree: {
				name: "Open Body Upgrade Tree",
				default: 85,
				editable: !0
			},
			settings: {
				name: "Open Settings (In-Game)",
				default: 79,
				editable: !0
			}
		},
		T = {},
		M = {},
		w = ["", "", "", "CANCEL", "", "", "HELP", "", "BACK_SPACE", "TAB", "", "", "CLEAR", "ENTER", "ENTER_SPECIAL", "", "SHIFT", "CONTROL", "ALT", "PAUSE", "CAPS_LOCK", "KANA", "EISU", "JUNJA", "FINAL", "HANJA", "", "ESCAPE", "CONVERT", "NONCONVERT", "ACCEPT", "MODECHANGE", "SPACE", "PAGE_UP", "PAGE_DOWN", "END", "HOME", "LEFT ARROW", "UP ARROW", "RIGHT ARROW", "DOWN ARROW", "SELECT", "PRINT", "EXECUTE", "PRINTSCREEN", "INSERT", "DELETE", "", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "COLON", "SEMICOLON", "LESS_THAN", "EQUALS", "GREATER_THAN", "QUESTION_MARK", "AT", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "OS_KEY", "", "CONTEXT_MENU", "", "SLEEP", "NUMPAD0", "NUMPAD1", "NUMPAD2", "NUMPAD3", "NUMPAD4", "NUMPAD5", "NUMPAD6", "NUMPAD7", "NUMPAD8", "NUMPAD9", "MULTIPLY", "ADD", "SEPARATOR", "SUBTRACT", "DECIMAL", "DIVIDE", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "F13", "F14", "F15", "F16", "F17", "F18", "F19", "F20", "F21", "F22", "F23", "F24", "", "", "", "", "", "", "", "", "NUM_LOCK", "SCROLL_LOCK", "WIN_OEM_FJ_JISHO", "WIN_OEM_FJ_MASSHOU", "WIN_OEM_FJ_TOUROKU", "WIN_OEM_FJ_LOYA", "WIN_OEM_FJ_ROYA", "", "", "", "", "", "", "", "", "", "CIRCUMFLEX", "EXCLAMATION", "DOUBLE_QUOTE", "HASH", "DOLLAR", "PERCENT", "AMPERSAND", "UNDERSCORE", "OPEN_PAREN", "CLOSE_PAREN", "ASTERISK", "PLUS", "PIPE", "HYPHEN_MINUS", "OPEN_CURLY_BRACKET", "CLOSE_CURLY_BRACKET", "TILDE", "", "", "", "", "VOLUME_MUTE", "VOLUME_DOWN", "VOLUME_UP", "", "", "SEMICOLON", "EQUALS", "COMMA", "MINUS", "PERIOD", "SLASH", "BACK_QUOTE", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "OPEN_BRACKET", "BACK_SLASH", "CLOSE_BRACKET", "QUOTE", "", "META", "ALTGR", "", "WIN_ICO_HELP", "WIN_ICO_00", "", "WIN_ICO_CLEAR", "", "", "WIN_OEM_RESET", "WIN_OEM_JUMP", "WIN_OEM_PA1", "WIN_OEM_PA2", "WIN_OEM_PA3", "WIN_OEM_WSCTRL", "WIN_OEM_CUSEL", "WIN_OEM_ATTN", "WIN_OEM_FINISH", "WIN_OEM_COPY", "WIN_OEM_AUTO", "WIN_OEM_ENLW", "WIN_OEM_BACKTAB", "ATTN", "CRSEL", "EXSEL", "EREOF", "PLAY", "ZOOM", "", "PA1", "WIN_OEM_CLEAR", ""]
}, function(e, t, n) {
	"use strict";
	n.r(t), n.d(t, "socket", (function() {
		return _
	})), n.d(t, "hubSocket", (function() {
		return m
	})), n.d(t, "connectToServer", (function() {
		return w
	})), n.d(t, "disconnectFromServer", (function() {
		return S
	})), n.d(t, "closeSocket", (function() {
		return A
	})), n.d(t, "key", (function() {
		return R
	})), n.d(t, "respawningWithKey", (function() {
		return I
	})), n.d(t, "clearKey", (function() {
		return P
	})), n.d(t, "respawnInServer", (function() {
		return C
	})), n.d(t, "updateDimensionAttributes", (function() {
		return D
	})), n.d(t, "submitForm", (function() {
		return j
	})), n.d(t, "updateStats", (function() {
		return L
	})), n.d(t, "statUpgrade", (function() {
		return U
	})), n.d(t, "play", (function() {
		return N
	})), n.d(t, "updateDirection", (function() {
		return W
	})), n.d(t, "sendChatMessage", (function() {
		return K
	})), n.d(t, "updateShooting", (function() {
		return G
	})), n.d(t, "updateBody", (function() {
		return Y
	})), n.d(t, "updateWeapon", (function() {
		return F
	})), n.d(t, "loadWeaponUpgrade", (function() {
		return H
	})), n.d(t, "loadBodyUpgrade", (function() {
		return q
	})), n.d(t, "togglePassiveMode", (function() {
		return X
	})), n.d(t, "updateInput", (function() {
		return V
	})), n.d(t, "changeControlState", (function() {
		return J
	})), n.d(t, "changeControlPosition", (function() {
		return Z
	})), n.d(t, "upgradePlayer", (function() {
		return $
	}));
	var r = n(15),
		a = n(12),
		o = n(10),
		i = n(6),
		u = n(13),
		s = n(2),
		c = n(7),
		l = n(1),
		d = n(5),
		f = n(9),
		h = n(0);

	function p(e, t) {
		return function(e) {
			if (Array.isArray(e)) return e
		}(e) || function(e, t) {
			var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
			if (null == n) return;
			var r, a, o = [],
				i = !0,
				u = !1;
			try {
				for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0);
			} catch (e) {
				u = !0, a = e
			} finally {
				try {
					i || null == n.return || n.return()
				} finally {
					if (u) throw a
				}
			}
			return o
		}(e, t) || function(e, t) {
			if (!e) return;
			if ("string" == typeof e) return g(e, t);
			var n = Object.prototype.toString.call(e).slice(8, -1);
			"Object" === n && e.constructor && (n = e.constructor.name);
			if ("Map" === n || "Set" === n) return Array.from(e);
			if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return g(e, t)
		}(e, t) || function() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}()
	}

	function g(e, t) {
		(null == t || t > e.length) && (t = e.length);
		for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
		return r
	}
	n(2);
	var v = window.location.host;
	v = "localhost";
	var _, m, y, b, E = !1,
		O = "";

	function T() {
		y = setInterval((function() {
			_.sendMessage(s.MSG_TYPES.PING, Date.now())
		}), 1e3)
	}
	A();
	var M = !1;

	function w(e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
		M = t, v = e, i.serverNameDisplay.textContent = "Server Name: ".concat(Object(h.formatURL)(t ? B : v)), t ? (_ = m, T(), Object(c.onConnect)(v)) : (v.startsWith("ws://") || v.startsWith("wss://") || (v = "ws://" + v), (_ = new WebSocket(v + (v.endsWith("/") ? "" : "/") + "ws?&key=" + R)).binaryType = "arraybuffer", _.address = v, _.sendMessage = function(e, t) {
			console.warn("WebSocket not yet open. Message not sent.")
		}, _.addEventListener("open", (function() {
			_.sendMessage = function(e, t) {
				_.readyState === WebSocket.OPEN ? _.send(Object(r.encode)([e, t])) : console.warn("WebSocket closing. Message not sent.")
			}, T(), Object(c.onConnect)(v)
		})), _.addEventListener("close", (function(e) {
			console.log("Disconnected from game server ".concat(_.address, ": ") + JSON.stringify({
				reason: e.reason,
				code: e.code,
				wasClean: e.wasClean
			})), A(), Object(c.onDisconnect)(O), clearInterval(y), E || setTimeout((function() {
				console.log("Attempting to connect to ".concat(v)), w(v)
			}), 0), E = !1, O = ""
		})), _.addEventListener("error", (function(e) {
			console.log("Connection to game server failed: ".concat(JSON.stringify(e))), Object(c.onFullDisconnect)()
		}))), _.addEventListener("message", (function(e) {
			var t = Object(r.decode)(new Uint8Array(e.data)),
				n = t[0],
				a = t[1];
			switch (n) {
				case s.MSG_TYPES.RECIEVE_BODY_UPGRADES:
					Object(l.t)(a);
					break;
				case s.MSG_TYPES.RECIEVE_WEAPON_UPGRADES:
					Object(l.x)(a);
					break;
				case s.MSG_TYPES.ADD_UPGRADE_POINT:
					Object(l.a)(a);
					break;
				case s.MSG_TYPES.CLASS_TREE:
					Object(l.G)(a);
					break;
				case s.MSG_TYPES.SET_STAT_UPGRADES:
					L(a);
					break;
				case s.MSG_TYPES.EDITMODE:
					Object(d.i)(a);
					break;
				case s.MSG_TYPES.RECIEVE_TANK:
					Object(d.g)(a);
					break;
				case s.MSG_TYPES.SEND_TO_SERVER:
					x(a);
					break;
				case s.MSG_TYPES.GAME_UPDATE:
					Object(o.f)(a);
					break;
				case s.MSG_TYPES.DIMENSION_ATTRIBUTES:
					D(a);
					break;
				case s.MSG_TYPES.GATES_UPDATE:
					Object(u.d)(a[0], a[1]);
					break;
				case s.MSG_TYPES.PING:
					Object(i.setPing)(Date.now() - a);
					break;
				case s.MSG_TYPES.RENDER_ENTITY:
					Object(i.exportRenderedEntity)(a);
					break;
				case s.MSG_TYPES.COPY:
					k(a);
					break;
				case s.MSG_TYPES.RECIEVE_NOTIFICATION:
					Object(l.v)(a);
					break;
				case s.MSG_TYPES.POPUP:
					Object(l.h)(a[0], a[1]);
					break;
				case s.MSG_TYPES.KILL:
					Object(l.s)(a);
					break;
				case s.MSG_TYPES.GAME_OVER:
					Object(c.onDeath)(a)
			}
		}))
	}

	function S() {
		var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
		_.closed || (E = !e, _.close())
	}

	function A() {
		(_ = {
			closed: !0
		}).sendMessage = function(e, t) {
			console.warn("WebSocket closed. Message not sent.")
		}
	}
	var R = "",
		I = !1;

	function P() {
		R = "", I = !1
	}

	function x(e) {
		R = e[0], v = e[1];
		var t = e[2];
		Object(i.setCurrentBackgroundID)(t.loadingBackground), O = t.loadingText, E = !1;
		var n = c.servers.findIndex((function(e) {
			return e.address === v
		})); - 1 != n && (c.serverSelect.selectedIndex = n, Object(c.updateSelectedServer)()), console.log("Sending to server: ".concat(v)), S()
	}

	function C(e, t) {
		Object(i.setCurrentBackgroundID)(0), v = e;
		var n = c.servers.findIndex((function(e) {
			return e.address === v
		})); - 1 != n && (c.serverSelect.selectedIndex = n, Object(c.updateSelectedServer)(!1)), I = !0, R = t, console.log("Respawning in server: ".concat(v)), O = "Connecting...", S()
	}
	var B = window.location.protocol.replace("http", "ws") + "//" + window.location.host;
	! function e(t) {
		(m = new WebSocket(t + "/ws")).binaryType = "arraybuffer", m.addEventListener("open", (function() {
			m.sendMessage = function(e, t) {
				m.send(Object(r.encode)([e, t]))
			}, b = setInterval((function() {
				m.sendMessage(s.MSG_TYPES.PING, Date.now())
			}), 5e3), Object(c.onHubConnect)(t)
		})), m.onclose = function(t) {
			console.log("Disconnected from hub server ".concat(B, ":") + JSON.stringify({
				reason: t.reason,
				code: t.code,
				wasClean: t.wasClean
			})), M && (M = !1, Object(c.onDisconnect)(O), clearInterval(y)), clearInterval(b), setTimeout((function() {
				console.log("Attempting to reconnect to hub server ".concat(B)), e(B)
			}), 1e3)
		}, m.addEventListener("error", (function(t) {
			console.log("Error when connecting to hub server ".concat(B, ": ").concat(JSON.stringify(t))), clearInterval(b), setTimeout((function() {
				console.log("Attempting to reconnect to hub server ".concat(B)), e(B)
			}), 1e3)
		})), m.addEventListener("message", (function(e) {
			var t = Object(r.decode)(new Uint8Array(e.data)),
				n = t[0],
				a = t[1];
			switch (n) {
				case s.MSG_TYPES.RECIEVE_SERVERS:
					Object(c.recieveServers)(a)
			}
		}))
	}(B);
	var D = function(e) {
		for (var t = 0, n = Object.entries(e); t < n.length; t++) {
			var r = p(n[t], 2),
				a = r[0],
				o = r[1];
			Object(u.c)(a, o)
		}
	};

	function k(e) {
		navigator.clipboard.writeText(e)
	}
	var j = function(e, t, n, r) {
			switch (e) {
				case 1:
					m.sendMessage(s.MSG_TYPES.REPORT_BUG, [t, n, r]);
					break;
				case 2:
					m.sendMessage(s.MSG_TYPES.SUBMIT_FEEDBACK, [t, n, r])
			}
		},
		L = function(e) {
			Object(l.A)(e[0]), Object(l.z)(e[1])
		},
		U = function(e) {
			_.sendMessage(s.MSG_TYPES.UPGRADE_STAT, e)
		},
		N = function(e) {
			gtag("event", s.ANALYTICS_EVENTS.JOIN_GAME, {
				username: e
			}), _.sendMessage(s.MSG_TYPES.JOIN_GAME, e), Object(l.y)()
		},
		z = 0,
		W = Object(a.throttle)(60, (function(e) {
			var t = Math.round(1e3 * e) / 1e3;
			z != t && _.sendMessage(s.MSG_TYPES.INPUT, t), z = t
		})),
		K = Object(a.throttle)(20, (function(e) {
			gtag("event", s.ANALYTICS_EVENTS.SEND_MESSAGE, {
				message: e
			}), _.sendMessage(s.MSG_TYPES.SEND_CHAT, e)
		})),
		G = function(e) {
			_.sendMessage(s.MSG_TYPES.SHOOTING, e)
		};

	function Y() {
		_.sendMessage(s.MSG_TYPES.CHANGE_BODY, d.b)
	}

	function F() {
		_.sendMessage(s.MSG_TYPES.CHANGE_WEAPON, d.c)
	}

	function H(e) {
		_.sendMessage(s.MSG_TYPES.LOAD_WEAPON_UPGRADE, e)
	}

	function q(e) {
		_.sendMessage(s.MSG_TYPES.LOAD_BODY_UPGRADE, e)
	}
	var X = Object(f.debounce)((function(e) {
			_.sendMessage(s.MSG_TYPES.PASSIVE_MODE, e)
		}), 20),
		V = function(e, t) {
			_.sendMessage(s.MSG_TYPES.MOVE, [e, t])
		},
		J = Object(f.debounce)((function(e) {
			_.sendMessage(s.MSG_TYPES.CHANGE_CONTROL_STATE, e)
		}), 20),
		Z = Object(a.throttle)(60, (function(e, t) {
			_.sendMessage(s.MSG_TYPES.CHANGE_CONTROL_POSITION, [e, t])
		})),
		$ = function(e, t, n) {
			switch (n) {
				case 0:
					e ? _.sendMessage(s.MSG_TYPES.UPGRADE_WEAPON, t) : _.sendMessage(s.MSG_TYPES.UPGRADE_BODY, t);
					var r = !1,
						a = !1;
					if (e)
						for (var o = 0; o < l.J.length; o++) {
							var i = l.J[o];
							if (i.id == t)
								for (var u = 0; u < i.barrels.length; u++) 1 == i.barrels[u].type && (r = !0)
						} else
							for (var d = 0; d < l.b.length; d++) {
								var f = l.b[d];
								if (f.id == t)
									for (var h = 0; h < f.gadgets.length; h++) 1 == f.gadgets[h].type ? r = !0 : 0 == f.gadgets[h].type && (a = !0)
							}
					a && setTimeout((function() {
						Object(c.getCookie)(s.COOKIES.TUTORIAL.AUTO_CANNONS) || l.F || (Object(l.B)(!0), Object(c.setCookie)(s.COOKIES.TUTORIAL.AUTO_CANNONS, !0, 15), setTimeout((function() {
							Object(l.v)("You can disable your auto cannons by pressing V.")
						}), 1e3), Object(l.B)(!1))
					}), 1e4), r && (Object(c.getCookie)(s.COOKIES.TUTORIAL.DRONES) || l.F || (Object(l.B)(!0), Object(c.setCookie)(s.COOKIES.TUTORIAL.DRONES, !0, 15), setTimeout((function() {
						Object(l.v)("Hold down left click to control your drones.")
					}), 1e3), setTimeout((function() {
						Object(l.v)("You can also control them by turning on auto fire. (Press E)")
					}), 4e3), setTimeout((function() {
						Object(l.v)("Repel your drones by holding down right click.")
					}), 9e3), setTimeout((function() {
						Object(l.v)("Upgrading your bullet penetration stat upgrades your max drone cap.")
					}), 13e3), Object(l.B)(!1)))
			}
		}
}, function(module, __webpack_exports__, __webpack_require__) {
	"use strict";
	__webpack_require__.d(__webpack_exports__, "e", (function() {
		return editmode
	})), __webpack_require__.d(__webpack_exports__, "d", (function() {
		return editing
	})), __webpack_require__.d(__webpack_exports__, "c", (function() {
		return currentWeapon
	})), __webpack_require__.d(__webpack_exports__, "b", (function() {
		return currentBody
	})), __webpack_require__.d(__webpack_exports__, "f", (function() {
		return editorUI
	})), __webpack_require__.d(__webpack_exports__, "i", (function() {
		return setEditmode
	})), __webpack_require__.d(__webpack_exports__, "h", (function() {
		return selectedObject
	})), __webpack_require__.d(__webpack_exports__, "j", (function() {
		return updateSelectedObject
	})), __webpack_require__.d(__webpack_exports__, "g", (function() {
		return recieveTank
	})), __webpack_require__.d(__webpack_exports__, "a", (function() {
		return addChild
	}));
	var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9),
		lodash__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__),
		_shared_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2),
		_shared_constants__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(_shared_constants__WEBPACK_IMPORTED_MODULE_1__),
		_shared_editorconstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14),
		_shared_editorconstants__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(_shared_editorconstants__WEBPACK_IMPORTED_MODULE_2__),
		_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0),
		_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__),
		_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1),
		_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8),
		_networking__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4),
		_render__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6),
		_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3),
		_ref2;

	function _defineProperty(e, t, n) {
		return t in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e
	}
	var editmode = !1,
		editing = !1,
		currentWeapon = {},
		currentBody = {},
		editorUI = document.getElementById("tank-editor"),
		editorMenu = document.getElementById("tank-editor-menu"),
		barrelsText = document.getElementById("barrels-text"),
		gadgetsText = document.getElementById("gadgets-text"),
		layersText = document.getElementById("layers-text"),
		barrelsContent = document.getElementById("barrels-content"),
		gadgetsContent = document.getElementById("gadgets-content"),
		layersContent = document.getElementById("layers-content"),
		mainTankEditorMenu = document.getElementById("tank-editor-main"),
		selectionMenu = document.getElementById("tank-editor-selection");

	function setEditmode(e) {
		editmode = e, e ? editorUI.classList.remove("hidden") : (editorUI.classList.add("hidden"), editing && toggleEditing())
	}

	function toggleEditing() {
		(editing = !editing) ? (editorMenu.classList.remove("hide"), Object(_input__WEBPACK_IMPORTED_MODULE_5__.o)(), Object(_render__WEBPACK_IMPORTED_MODULE_7__.setShowChatBox)(!1), Object(_input__WEBPACK_IMPORTED_MODULE_5__.f)(), Object(_input__WEBPACK_IMPORTED_MODULE_5__.e)(!1), Object(_input__WEBPACK_IMPORTED_MODULE_5__.l)()) : (editorMenu.classList.add("hide"), Object(_render__WEBPACK_IMPORTED_MODULE_7__.setShowChatBox)(!0))
	}
	selectionMenu.classList.add("hidden"), document.getElementById("button-edit").onclick = function() {
		toggleEditing()
	}, document.getElementById("game-canvas").onclick = function() {
		editing && Object(_render__WEBPACK_IMPORTED_MODULE_7__.checkForTankEditorClicks)()
	};
	for (var collapsibles = document.getElementsByClassName("tank-editor-collapsible"), i = 0; i < collapsibles.length; i++) collapsibles[i].addEventListener("click", (function() {
		this.classList.toggle("active");
		var e = this.nextElementSibling;
		"flex" === e.style.display ? e.style.display = "none" : e.style.display = "flex"
	}));
	var weaponCameraSizeMultiplierInput = document.getElementById("weapon-camera-size-multiplier"),
		bodyCameraSizeMultiplierInput = document.getElementById("body-camera-size-multiplier"),
		weaponMaxDronesInput = document.getElementById("weapon-max-drones"),
		bodyMaxDronesInput = document.getElementById("body-max-drones"),
		sidesInput = document.getElementById("sides"),
		outerSidesInput = document.getElementById("outersides"),
		outerSizeInput = document.getElementById("outersize"),
		healthInput = document.getElementById("health"),
		bodyDamageInput = document.getElementById("bodydamage"),
		speedInput = document.getElementById("speed"),
		weaponNameInput = document.getElementById("weapon-name"),
		bodyNameInput = document.getElementById("body-name"),
		saveAsPngInput = document.getElementById("save-as-png-area"),
		saveAsPngButton = document.getElementById("save-as-png"),
		tankTypeSelect = document.getElementById("tank-type"),
		levelInput = document.getElementById("tank-level"),
		teamSelect = document.getElementById("tank-team"),
		visualTeamSelect = document.getElementById("visual-tank-team"),
		radiantInput = document.getElementById("radiant"),
		tankNameInput = document.getElementById("tank-name");

	function tankUpdate() {
		weaponUpdate(), bodyUpdate()
	}
	_shared_editorconstants__WEBPACK_IMPORTED_MODULE_2__.TEAMS.forEach((function(e) {
		var t = addChild(teamSelect, "option");
		t.value = e.value, t.innerText = e.name
	})), _shared_editorconstants__WEBPACK_IMPORTED_MODULE_2__.VISUAL_TEAMS.forEach((function(e) {
		var t = addChild(visualTeamSelect, "option");
		t.value = e.value, t.innerText = e.name
	})), weaponCameraSizeMultiplierInput.onchange = function() {
		currentWeapon.cameraSizeMultiplier = validateNumberAttribute(simplifyNumberInput(weaponCameraSizeMultiplierInput.value), 1), weaponCameraSizeMultiplierInput.value = Math.max(.1, currentWeapon.cameraSizeMultiplier), Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateWeapon)(), weaponUpdate()
	}, bodyCameraSizeMultiplierInput.onchange = function() {
		currentBody.cameraSizeMultiplier = validateNumberAttribute(simplifyNumberInput(bodyCameraSizeMultiplierInput.value), 1), bodyCameraSizeMultiplierInput.value = Math.max(.1, currentBody.cameraSizeMultiplier), Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), bodyUpdate()
	}, weaponMaxDronesInput.onchange = function() {
		currentWeapon.maxDrones = validateNumberAttribute(simplifyNumberInput(weaponMaxDronesInput.value), 1), weaponMaxDronesInput.value = Math.max(0, currentWeapon.maxDrones), Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateWeapon)(), weaponUpdate()
	}, bodyMaxDronesInput.onchange = function() {
		currentBody.maxDrones = validateNumberAttribute(simplifyNumberInput(bodyMaxDronesInput.value), 1), bodyMaxDronesInput.value = Math.max(0, currentBody.maxDrones), Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), bodyUpdate()
	}, sidesInput.onchange = function() {
		currentBody.sides = Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides)(validateNumberAttribute(simplifyNumberInput(sidesInput.value), 0)), sidesInput.value = currentBody.sides, Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), bodyUpdate()
	}, outerSidesInput.onchange = function() {
		currentBody.outerSides = Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides)(validateNumberAttribute(simplifyNumberInput(outerSidesInput.value), 0)), outerSidesInput.value = currentBody.outerSides, Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), bodyUpdate()
	}, outerSizeInput.onchange = function() {
		currentBody.outerSize = validateNumberAttribute(simplifyNumberInput(outerSizeInput.value), 0), outerSizeInput.value = currentBody.outerSize, Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), bodyUpdate()
	}, healthInput.onchange = function() {
		currentBody.healthMultiplier = validateNumberAttribute(simplifyNumberInput(healthInput.value), 1), healthInput.value = currentBody.healthMultiplier, Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), bodyUpdate()
	}, bodyDamageInput.onchange = function() {
		currentBody.bodyDamageMultiplier = validateNumberAttribute(simplifyNumberInput(bodyDamageInput.value), 1), bodyDamageInput.value = currentBody.bodyDamageMultiplier, Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), bodyUpdate()
	}, speedInput.onchange = function() {
		currentBody.speedMultiplier = validateNumberAttribute(simplifyNumberInput(speedInput.value), 1), speedInput.value = currentBody.speedMultiplier, Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), bodyUpdate()
	}, weaponNameInput.onchange = function() {
		currentWeapon.name = validateTextAttribute(weaponNameInput.value.trim(), ""), weaponNameInput.value = currentWeapon.name, Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateWeapon)(), weaponUpdate()
	}, bodyNameInput.onchange = function() {
		currentBody.name = validateTextAttribute(bodyNameInput.value.trim(), ""), bodyNameInput.value = currentBody.name, Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), bodyUpdate()
	}, saveAsPngButton.onclick = function() {
		Object(_render__WEBPACK_IMPORTED_MODULE_7__.exportRenderedEntity)({
			sides: currentBody.sides,
			outerSides: currentBody.outerSides,
			outerSize: currentBody.outerSize,
			gadgets: currentBody.gadgets,
			layers: currentBody.layers,
			barrels: currentWeapon.barrels,
			d: Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.degreesToRadians)(90),
			filename: saveAsPngInput.value.replace(/[\/|\\:*?"<>]/g, " ").trim(),
			size: _render__WEBPACK_IMPORTED_MODULE_7__.lastMe.size,
			team: _render__WEBPACK_IMPORTED_MODULE_7__.lastMe.team
		})
	}, saveAsPngInput.addEventListener("keydown", (function(e) {
		e.keyCode == _settings__WEBPACK_IMPORTED_MODULE_8__.b.enter && (saveAsPngButton.click(), saveAsPngInput.blur())
	})), tankTypeSelect.onchange = function() {
		currentBody.type = validateNumberAttribute(tankTypeSelect.value, 0), tankTypeSelect.value = currentBody.type, levelInput.onchange(), Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), bodyUpdate()
	}, levelInput.onchange = function() {
		currentBody.level = Math.ceil(Object(lodash__WEBPACK_IMPORTED_MODULE_0__.clamp)(validateNumberAttribute(simplifyNumberInput(levelInput.value), 1), Math.max(1 == currentBody.type ? 75 : 1), 500)), levelInput.value = currentBody.level, Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), bodyUpdate()
	}, teamSelect.onchange = function() {
		currentBody.team = validateNumberAttribute(teamSelect.value, 0), teamSelect.value = currentBody.team, Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), bodyUpdate()
	}, visualTeamSelect.onchange = function() {
		currentBody.visualTeam = validateNumberAttribute(visualTeamSelect.value, void 0), visualTeamSelect.value = currentBody.visualTeam, Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), bodyUpdate()
	}, radiantInput.onchange = function() {
		currentBody.radiant = Math.round(Object(lodash__WEBPACK_IMPORTED_MODULE_0__.clamp)(validateNumberAttribute(simplifyNumberInput(radiantInput.value), 0), 0, _shared_editorconstants__WEBPACK_IMPORTED_MODULE_2__.MAX_RADIANT)), radiantInput.value = currentBody.radiant, Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), bodyUpdate()
	}, tankNameInput.onchange = function() {
		currentBody.overrideTankName = validateTextAttribute(tankNameInput.value.trim(), ""), tankNameInput.value = currentBody.overrideTankName, Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), bodyUpdate()
	};
	var selectedObject = {};

	function updateSelectedObject(e, t) {
		if (e && (selectedObject.type == e && selectedObject.index == t ? (selectedObject = {}, mainTankEditorMenu.classList.remove("hidden"), selectionMenu.classList.add("hidden")) : (selectedObject = {
				type: e,
				index: t
			}, mainTankEditorMenu.classList.add("hidden"), selectionMenu.classList.remove("hidden"))), selectedObject.type) switch (selectedObject.type) {
			case "barrel":
				if (!currentWeapon.barrels[selectedObject.index]) return void updateSelectedObject(selectedObject.type, selectedObject.index);
				break;
			case "gadget":
				if (!currentBody.gadgets[selectedObject.index]) return void updateSelectedObject(selectedObject.type, selectedObject.index);
				break;
			case "layer":
				if (!currentBody.layers[selectedObject.index]) return void updateSelectedObject(selectedObject.type, selectedObject.index)
		}
		for (var n = 0; n < barrelButtons.length; n++) {
			var r = barrelButtons[n];
			r.classList.remove("selected"), "barrel" == selectedObject.type && selectedObject.index == n && r.classList.add("selected"), currentWeapon.barrels[n] && delete currentWeapon.barrels[n].selected
		}
		for (var a = 0; a < gadgetButtons.length; a++) {
			var o = gadgetButtons[a];
			o.classList.remove("selected"), "gadget" == selectedObject.type && selectedObject.index == a && o.classList.add("selected"), currentBody.gadgets[a] && delete currentBody.gadgets[a].selected
		}
		for (var i = 0; i < layerButtons.length; i++) {
			var u = layerButtons[i];
			u.classList.remove("selected"), "layer" == selectedObject.type && selectedObject.index == i && u.classList.add("selected"), currentBody.layers[i] && delete currentBody.layers[i].selected
		}
		selectedObject.type && updateSelectedObjectMenu()
	}
	var barrelTypes = [{
			value: 0,
			name: "Cannon"
		}, {
			value: 1,
			name: "Drone Spawner"
		}, {
			value: 2,
			name: "Trap Launcher"
		}, {
			value: 7,
			name: "Rocket Launcher"
		}, {
			value: 3,
			name: "Minion Spawner"
		}, {
			value: 8,
			name: "Custom Trap Launcher (needs name)"
		}, {
			value: 6,
			name: "Nothing Barrel"
		}, {
			value: 4,
			name: "Player Spawner (not supported)"
		}, {
			value: 5,
			name: "Polyp Spawner (not supported)"
		}, {
			value: 9,
			name: "Polygon Spawner"
		}],
		gadgetTypes = [{
			value: 0,
			name: "Auto Cannon"
		}, {
			value: 1,
			name: "Mounted Drone Spawner"
		}, {
			value: 2,
			name: "Aura"
		}],
		auraTypes = [{
			value: 0,
			name: "Damaging"
		}, {
			value: 1,
			name: "Healing"
		}, {
			value: 3,
			name: "Repulsion"
		}, {
			value: 4,
			name: "Attraction"
		}, {
			value: 2,
			name: "Cosmetic"
		}],
		visualBarrelTypes = [{
			value: void 0,
			name: "Unset"
		}, {
			value: 0,
			name: "Cannon"
		}, {
			value: 1,
			name: "Drone Spawner"
		}, {
			value: 2,
			name: "Trap Launcher"
		}, {
			value: 7,
			name: "Rocket Launcher"
		}, {
			value: 3,
			name: "Minion Spawner"
		}, {
			value: 8,
			name: "Custom Trap Launcher"
		}, {
			value: 6,
			name: "Nothing Barrel"
		}, {
			value: 4,
			name: "Player Spawner"
		}, {
			value: 5,
			name: "Polyp Spawner"
		}, {
			value: 9,
			name: "Polygon Spawner"
		}],
		barrelAttributes = [{
			bulletName: "Bullet",
			extraBulletStats: !0,
			bulletStats: !0,
			defaultLength: 1,
			defaultWidth: .5
		}, {
			bulletName: "Drone",
			extraBulletStats: !0,
			bulletStats: !0,
			droneStats: !0,
			defaultLength: .8,
			defaultWidth: .5
		}, {
			bulletName: "Trap",
			extraBulletStats: !0,
			bulletStats: !0,
			defaultLength: 1,
			defaultWidth: .65
		}, {
			bulletName: "Minion",
			extraBulletStats: !0,
			minionStats: !0,
			droneStats: !0,
			defaultLength: 1.1,
			defaultWidth: .5
		}, {
			bulletName: "Player",
			defaultLength: .7,
			defaultWidth: .5
		}, (_ref2 = {
			bulletName: "Polyp",
			extraBulletStats: !0,
			defaultLength: .7
		}, _defineProperty(_ref2, "extraBulletStats", !0), _defineProperty(_ref2, "launchSpeed", !0), _defineProperty(_ref2, "defaultWidth", .5), _ref2), {
			bulletName: "Nothing",
			defaultLength: .8,
			defaultWidth: 1
		}, {
			bulletName: "Rocket",
			extraBulletStats: !0,
			minionStats: !0,
			defaultLength: 1,
			defaultWidth: .5
		}, {
			bulletName: "Custom Trap",
			extraBulletStats: !0,
			minionStats: !0,
			defaultLength: 1,
			defaultWidth: .5
		}, {
			bulletName: "Polygon",
			defaultLength: 1,
			defaultWidth: 1,
			polygonStats: !0,
			extraBulletStats: !0,
			launchSpeed: !0
		}],
		gadgetAttributes = [{
			bulletName: "Bullet",
			bulletStats: !0,
			defaultLength: .5,
			defaultWidth: .25
		}, {
			bulletName: "Drone",
			bulletStats: !0,
			droneStats: !0,
			defaultWidth: .5
		}, {
			bulletName: "Aura",
			defaultWidth: .6
		}],
		teamColors = [{
			value: void 0,
			name: "Unset"
		}, {
			value: -1,
			name: "Fallen (Light Gray)"
		}, {
			value: 2,
			name: "Celestial (Pink)"
		}, {
			value: 10,
			name: "Blue"
		}, {
			value: 11,
			name: "Red"
		}, {
			value: 12,
			name: "Green"
		}, {
			value: 13,
			name: "Purple"
		}, {
			value: 5,
			name: "Black"
		}, {
			value: 6,
			name: "White"
		}, {
			value: 3,
			name: "Barrel (Gray)"
		}, {
			value: 7,
			name: "Spike (Dark Gray)"
		}, {
			value: 20,
			name: "Triangle Yellow"
		}, {
			value: 21,
			name: "Square Red"
		}, {
			value: 22,
			name: "Pentagon Blue"
		}, {
			value: 23,
			name: "Hexagon Orange"
		}, {
			value: 24,
			name: "Heptagon Green"
		}, {
			value: 25,
			name: "Octagon Blue"
		}, {
			value: 26,
			name: "Nonagon Dark Purple"
		}, {
			value: 27,
			name: "Decagon Dark Blue"
		}, {
			value: 28,
			name: "Hendecagon Black"
		}, {
			value: 29,
			name: "Dodecagon Dark Grey"
		}, {
			value: 30,
			name: "Tridecagon White"
		}],
		barrelColors = [{
			value: void 0,
			name: "Default (Gray)"
		}, {
			value: -1,
			name: "Fallen (Light Gray)"
		}, {
			value: 2,
			name: "Celestial (Pink)"
		}, {
			value: 10,
			name: "Blue"
		}, {
			value: 11,
			name: "Red"
		}, {
			value: 12,
			name: "Green"
		}, {
			value: 13,
			name: "Purple"
		}, {
			value: 5,
			name: "Black"
		}, {
			value: 6,
			name: "White"
		}, {
			value: 7,
			name: "Spike (Dark Gray)"
		}, {
			value: 20,
			name: "Triangle Yellow"
		}, {
			value: 21,
			name: "Square Red"
		}, {
			value: 22,
			name: "Pentagon Blue"
		}, {
			value: 23,
			name: "Hexagon Orange"
		}, {
			value: 24,
			name: "Heptagon Green"
		}, {
			value: 25,
			name: "Octagon Blue"
		}, {
			value: 26,
			name: "Nonagon Dark Purple"
		}, {
			value: 27,
			name: "Decagon Dark Blue"
		}, {
			value: 28,
			name: "Hendecagon Black"
		}, {
			value: 29,
			name: "Dodecagon Dark Grey"
		}, {
			value: 30,
			name: "Tridecagon White"
		}],
		attributes = [];

	function updateSelectedObjectMenu() {
		var e, t, n, r, a = "Error when loading object: invalid selected object";
		switch (selectedObject.type) {
			case "barrel":
				r = currentWeapon.barrels[selectedObject.index], a = (null === (e = barrelTypes.find((function(e) {
					return e.value == r.type
				}))) || void 0 === e ? void 0 : e.name) || "Invalid barrel (wrong type?)";
				break;
			case "gadget":
				a = (2 == (r = currentBody.gadgets[selectedObject.index]).type ? ((null === (t = auraTypes.find((function(e) {
					return e.value == r.subtype
				}))) || void 0 === t ? void 0 : t.name) || "Invalid (wrong subtype?)") + " " : "") + (null === (n = gadgetTypes.find((function(e) {
					return e.value == r.type
				}))) || void 0 === n ? void 0 : n.name) || "Invalid gadget (wrong type?)";
				break;
			case "layer":
				r = currentBody.layers[selectedObject.index], a = "".concat(Math.abs(r.sides), "-sided ").concat(r.sides < 0 ? "spiky " : "", "layer")
		}
		r.selected = !0, removeAllChildNodes(selectionMenu);
		var o, i, u, s, c = addChild(selectionMenu, "div");

		function l(e, t, n, r) {
			var a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
				o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : void 0;
			attributes.push({
				type: 0,
				subtype: n,
				id: t,
				name: e,
				options: r,
				deleteIfNaN: a,
				placeholder: o
			})
		}

		function d(e, t, n, r, a) {
			attributes.push({
				type: 2,
				subtype: a,
				id: t,
				name: e,
				placeholder: n,
				isNumber: r
			})
		}

		function f(e) {
			attributes.push({
				type: -1,
				name: e,
				id: e
			})
		}
		switch (c.id = "tank-editor-title", c.innerHTML = a, attributes = [], selectedObject.type) {
			case "barrel":
				var h = barrelAttributes[r.type];
				l("Barrel Type", "type", 1, barrelTypes, !1, 0), l("Override Visual Type", "visualType", 0, visualBarrelTypes, !0), h.minionStats && (o = "".concat(h.bulletName, " Tank Code"), i = 'enter a "full tank" code here', u = "minion", s = 0, attributes.push({
					type: 1,
					subtype: s,
					id: u,
					name: o,
					placeholder: i
				})), f("Size and Position"), d("Rotation", "rot", 0, !0, 1), d("Length", "length", h.defaultLength, !0, 0), d("Width", "width", h.defaultWidth, !0, 0), d("Side Offset", "offset", 0, !0, 0), d("Forward Offset", "distance", 0, !0, 0), f("Attributes"), l("Barrel Color", "color", 0, barrelColors, !0), h.polygonStats && (l("Color Type", "colorType", 0, ["Polygon Color", "Team Color"], !1, 0), l("".concat(h.bulletName, " Team"), "team", 0, _shared_editorconstants__WEBPACK_IMPORTED_MODULE_2__.POLYGON_TEAMS, !0, 1), d("Minimum ".concat(h.bulletName, " Size"), "minSize", 3, !0, 2), d("Maximum ".concat(h.bulletName, " Size"), "maxSize", 3, !0, 2), d("".concat(h.bulletName, " Radiant Level"), "radiant", 0, !0, 5)), (h.minionStats || h.bulletStats) && l("Override ".concat(h.bulletName, " Color"), "team", 0, teamColors, !0), h.droneStats && (d("".concat(h.bulletName, " Minimum Distance"), "minDist", h.minionStats ? 6 : 0, !0, 0), d("".concat(h.bulletName, " Maximum Distance"), "maxDist", h.minionStats ? 10 : 0, !0, 0)), d("Reload", "reload", 1, !0, 0), d("Recoil", "recoil", 1, !0, 0), h.extraBulletStats && (d("Spread", "spread", 0, !0, 0), d("".concat(h.bulletName, " Size"), "size", 1, !0, 0)), h.minionStats && (d("".concat(h.bulletName, " Body Damage"), "damage", 1, !0, 0), d("".concat(h.bulletName, " Speed"), "speed", 1, !0, 0), d("".concat(h.bulletName, " Health"), "penetration", 1, !0, 0)), h.launchSpeed && d("".concat(h.bulletName, " Launch Speed"), "speed", 1, !0, 0), h.bulletStats && (d("".concat(h.bulletName, " Damage"), "damage", 1, !0, 0), d("".concat(h.bulletName, " Speed"), "speed", 1, !0, 0), d("".concat(h.bulletName, " Penetration"), "penetration", 1, !0, 0)), d("Barrel Delay", "delay", 0, !0, 0);
				break;
			case "gadget":
				var p = gadgetAttributes[r.type];
				l("Gadget Type", "type", 2, gadgetTypes, !1, 0), 2 == r.type && l("Aura Type", "subtype", 0, auraTypes), f("Size and Position"), 2 == r.type && d("Aura Radius", "radius", 4, !0, 0), 0 != r.type && d("Rotation", "rot", 0, !0, 1), p.defaultLength && d("Length", "length", p.defaultLength, !0, 0), p.defaultWidth && d("Width", "width", p.defaultWidth, !0, 0), d("Side Offset", "offsetX", 0, !0, 0), d("Forward Offset", "offsetY", 0, !0, 0), f("Attributes"), l("".concat(2 == r.type ? "Aura Back" : "Barrel", " Color"), "color", 0, barrelColors, !0), p.bulletStats ? (l("Override ".concat(p.bulletName, " Color"), "team", 0, teamColors, !0), p.droneStats && (d("".concat(p.bulletName, " Minimum Distance"), "minDist", p.minionStats ? 6 : 0, !0, 0), d("".concat(p.bulletName, " Maximum Distance"), "maxDist", p.minionStats ? 10 : 0, !0, 0)), d("Reload", "reload", 1, !0, 0), 0 == r.type && (d("Recoil", "recoil", 0, !0, 0), d("Spread", "spread", 0, !0, 0), d("Bullet Size", "size", 1, !0, 0)), d("".concat(p.bulletName, " Damage"), "damage", 1, !0, 0), d("".concat(p.bulletName, " Speed"), "speed", 1, !0, 0), d("".concat(p.bulletName, " Penetration"), "penetration", 1, !0, 0), 0 == r.type && (d("Target Detect Distance", "minDistance", 15, !0, 0), d("Target Forget Distance", "maxDistance", 25, !0, 0))) : 2 == r.type && (d("Aura Back Sides", "backSides", 0, !0, 4), l("Override Aura Color", "auraColor", 0, teamColors, !0), l("Particles", "showParticles", 0, ["On", "Off"], !1, 0), l("Aura Rotation Type", "rotationType", 0, ["Unlocked", "Locked"]), d("Aura Opacity", "alpha", .3, !0, 0), 2 != r.subtype && (d("".concat(["Attack", "Heal", "Nothing", "Repel", "Attract"][r.subtype], " Interval"), "reload", .25, !0, 0), d("".concat(["Damage", "Healing", "Nothing", "Repulsion", "Attraction"][r.subtype]), "damage", .125, !0, 0)), d("Aura Sides", "sides", 0, !0, 4));
				break;
			case "layer":
				f("Size and Position"), d("Rotation", "rot", 0, !0, 1), d("Side Offset", "offsetX", 0, !0, 0), d("Forward Offset", "offsetY", 0, !0, 0), d("Size", "size", .5, !0, 0), f("Visual"), l("Override Team Color", "team", 0, teamColors, !0), d("Sides", "sides", 0, !0, 4), f("Outer Shell"), d("Outer Sides", "outerSides", 0, !0, 4), d("Outer Size", "outerSize", 0, !0, 0)
		}
		var g = "barrel" == selectedObject.type;
		attributes.forEach((function(e) {
			switch (e.type) {
				case -1:
					(i = addChild(selectionMenu, "div")).id = "tank-editor-subtitle", i.innerHTML = e.name;
					break;
				case 0:
					(o = addChild(selectionMenu, "div")).id = "tank-editor-text", o.innerHTML = e.name + "&emsp;", (i = addChild(o, "select")).classList.add("tank-editor-select");
					for (var t = 0; t < e.options.length; t++) {
						var n = addChild(i, "option");
						e.options[t].hasOwnProperty("value") ? (n.value = e.options[t].value, n.innerHTML = e.options[t].name) : (n.value = t, n.innerHTML = e.options[t])
					}
					i.value = validateTextAttribute(r[e.id], e.placeholder), i.onchange = function() {
						switch (e.deleteIfNaN ? (r[e.id] = +i.value, Number.isNaN(r[e.id]) && delete r[e.id]) : r[e.id] = validateNumberAttribute(i.value, 0), e.subtype) {
							case 1:
								switch (9 != r.type && (delete r.colorType, delete r.radiant, delete r.minSize, delete r.maxSize, delete r.radiant), r.type) {
									case 7:
										r.minion || (r.minion = {
											gadgets: [],
											layers: [],
											sides: 0,
											outerSides: 0,
											outerSize: 0,
											maxBodyDrones: 3,
											barrels: [{
												type: 0,
												rot: Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.degreesToRadians)(-145),
												offset: 0,
												width: .5,
												length: .8,
												damage: .5,
												reload: .5,
												distance: 0,
												penetration: .5,
												delay: 0
											}, {
												type: 0,
												rot: Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.degreesToRadians)(145),
												offset: 0,
												width: .5,
												length: .8,
												damage: .5,
												reload: .5,
												distance: 0,
												penetration: .5,
												delay: 0
											}],
											maxWeaponDrones: 3
										}), delete r.minDist, delete r.maxDist;
										break;
									case 8:
										r.minion || (r.minion = {
											gadgets: [],
											layers: [],
											sides: 4,
											outerSides: 0,
											outerSize: 0,
											maxBodyDrones: 3,
											barrels: [{
												type: 0,
												rot: Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.degreesToRadians)(-135),
												offset: 0,
												width: .4,
												length: .6,
												damage: .5,
												reload: 1,
												distance: 0,
												penetration: .5,
												delay: 0
											}, {
												type: 0,
												rot: Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.degreesToRadians)(135),
												offset: 0,
												width: .4,
												length: .6,
												damage: .5,
												reload: 1,
												distance: 0,
												penetration: .5,
												delay: 0
											}, {
												type: 0,
												rot: Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.degreesToRadians)(-45),
												offset: 0,
												width: .4,
												length: .6,
												damage: .5,
												reload: 1,
												distance: 0,
												penetration: .5,
												delay: 0
											}, {
												type: 0,
												rot: Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.degreesToRadians)(45),
												offset: 0,
												width: .4,
												length: .6,
												damage: .5,
												reload: 1,
												distance: 0,
												penetration: .5,
												delay: 0
											}],
											maxWeaponDrones: 3
										}), delete r.minDist, delete r.maxDist;
										break;
									case 3:
										r.minion || (r.minion = {
											sides: 0,
											barrels: [{
												type: 0,
												rot: 0,
												offset: 0,
												width: .5,
												length: 1,
												damage: .5,
												reload: 1,
												delay: 0
											}],
											gadgets: []
										});
										break;
									case 1:
										delete r.minion;
										break;
									default:
										delete r.minion, delete r.minDist, delete r.maxDist;
										break;
									case 9:
										r.colorType = 0, r.team = 1, r.minSize = 3, r.maxSize = 15, r.radiant, delete r.team
								}
								break;
							case 2:
								switch (["alpha", "length", "speed", "penetration", "sides", "backSides", "subtype", "radius", "rotationType", "showParticles"].forEach((function(e) {
										delete r[e]
									})), r.type) {
									case 0:
										r.length = 1, r.minDistance = 15, r.maxDistance = 25, r.speed = 1, r.penetration = 1;
										break;
									case 1:
										r.rot = 0, r.speed = 1, r.penetration = 1;
										break;
									case 2:
										r.rot = 0, r.sides = 0, r.backSides = 0, r.subtype = 0, r.radius = 4, r.alpha = .3, r.rotationType = 1, r.width = .6, r.damage = .1, r.reload = .25, r.showParticles = 0
								}
						}
						g ? (Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateWeapon)(), weaponUpdate()) : (Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), bodyUpdate())
					};
					break;
				case 1:
					(o = addChild(selectionMenu, "div")).id = "tank-editor-text", o.innerHTML = e.name, (i = addChild(selectionMenu, "textarea")).autocomplete = "off", i.classList.add("tank-editor-input-large");
					for (var a = 0; a < 15; a++) addChild(selectionMenu, "br");
					switch (i.placeholder = e.placeholder, i.value = r[e.id], e.subtype) {
						case 0:
							i.value = JSON.stringify({
								gadgets: clearGadgets(r[e.id].gadgets || []),
								layers: clearLayers(r[e.id].layers || []),
								sides: Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides)(r[e.id].sides || 0),
								outerSides: Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides)(r[e.id].outerSides || 0),
								outerSize: Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides)(r[e.id].outerSize || 0),
								maxBodyDrones: r[e.id].maxBodyDrones,
								barrels: clearBarrels(r[e.id].barrels || []),
								maxWeaponDrones: r[e.id].maxWeaponDrones
							})
					}
					i.lastValue = i.value, i.onchange = function() {
						switch (e.subtype) {
							case 0:
								var t;
								try {
									t = JSON.parse(i.value)
								} catch (e) {
									return Object(_client__WEBPACK_IMPORTED_MODULE_4__.h)("Tank code invalid!", e), void(i.value = i.lastValue)
								}
								if (t.type && "full" != t.type) return Object(_client__WEBPACK_IMPORTED_MODULE_4__.h)("Tank code invalid!", "Code is not a full tank code, it's a \n\t\t\t\t\t\t\t".concat({
									weapon: "weapon",
									body: "body",
									full: "full tank"
								} [t.type], ' code. Import a "full tank" code instead.')), void(i.value = i.lastValue);
								i.lastValue = i.value, r[e.id].gadgets = readGadgets(t.gadgets || []), r[e.id].layers = readLayers(t.layers || []), r[e.id].outerSize = t.outerSize || 0, r[e.id].sides = t.sides || 0, r[e.id].outerSides = t.outerSides || 0, r[e.id].maxBodyDrones = validateNumberAttribute(t.maxBodyDrones, 3), r[e.id].barrels = readBarrels(t.barrels || []), r[e.id].maxWeaponDrones = validateNumberAttribute(t.maxWeaponDrones, 3), r.penetration = t.healthMultiplier || r.penetration, r.damage = t.bodyDamageMultiplier || r.damage, r.speed = t.speedMultiplier || r.speed
						}
						g ? (Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateWeapon)(), weaponUpdate()) : (Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), bodyUpdate())
					};
					break;
				case 2:
					var o, i;
					switch ((o = addChild(selectionMenu, "div")).id = "tank-editor-text", o.innerHTML = e.name + "&emsp;", (i = addChild(o, "input")).autocomplete = "off", i.classList.add("tank-editor-input"), i.placeholder = e.placeholder, e.subtype) {
						default:
							e.isNumber ? i.value = validateNumberAttribute(r[e.id], e.placeholder) : i.value = validateTextAttribute(r[e.id], e.placeholder);
							break;
						case 1:
							i.value = Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.round)(Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.radiansToDegrees)(validateNumberAttribute(r[e.id], e.placeholder)), _shared_constants__WEBPACK_IMPORTED_MODULE_1__.BARREL_ROT_ROUNDING)
					}
					i.onchange = function() {
						switch (e.isNumber && (r[e.id] = validateNumberAttribute(simplifyNumberInput(i.value), e.placeholder)), e.subtype) {
							case 1:
								r[e.id] = Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.degreesToRadians)(r[e.id]);
								break;
							case 2:
								r[e.id] = Math.min(Math.max(3, r[e.id]), 1e3);
								break;
							case 3:
								r[e.id] = Math.max(0, Math.min(1, r[e.id]));
								break;
							case 4:
								r[e.id] = Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides)(r[e.id]);
								break;
							case 5:
								r[e.id] = Math.min(Math.max(0, r[e.id]), _shared_editorconstants__WEBPACK_IMPORTED_MODULE_2__.MAX_RADIANT)
						}
						g ? (Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateWeapon)(), weaponUpdate()) : (Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), bodyUpdate())
					}
			}
		}));
		var v = {
				barrel: "Barrel",
				layer: "Layer",
				gadget: "Gadget"
			} [selectedObject.type],
			_ = addChild(selectionMenu, "div"),
			m = addChild(selectionMenu, "div");
		_.style.textAlign = "right", m.style.textAlign = "right";
		var y = addChild(_, "button");
		y.innerHTML = "Move Forward", y.classList.add("tank-editor-button");
		var b = addChild(_, "button");
		b.innerHTML = "Move Backward", b.classList.add("tank-editor-button");
		var E = addChild(m, "button");
		E.innerHTML = "Delete ".concat(v), E.classList.add("tank-editor-button");
		var O = addChild(m, "button");
		O.innerHTML = "Duplicate ".concat(v), O.classList.add("tank-editor-button"), y.onclick = function() {
			moveForwardSelectedObject()
		}, b.onclick = function() {
			moveBackwardSelectedObject()
		}, E.onclick = function() {
			deleteSelectedObject()
		}, O.onclick = function() {
			duplicateSelectedObject()
		}
	}

	function moveForwardSelectedObject() {
		var e = {
			barrel: currentWeapon.barrels,
			layer: currentBody.layers,
			gadget: currentBody.gadgets
		} [selectedObject.type];
		if (selectedObject.index < e.length - 1) {
			var t = e[selectedObject.index + 1];
			e[selectedObject.index + 1] = e[selectedObject.index], e[selectedObject.index] = t, updateSelectedObject(selectedObject.type, selectedObject.index + 1), "barrel" == selectedObject.type ? (Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateWeapon)(), weaponUpdate()) : (Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), bodyUpdate())
		}
	}

	function moveBackwardSelectedObject() {
		var e = {
			barrel: currentWeapon.barrels,
			layer: currentBody.layers,
			gadget: currentBody.gadgets
		} [selectedObject.type];
		if (selectedObject.index > 0) {
			var t = e[selectedObject.index - 1];
			e[selectedObject.index - 1] = e[selectedObject.index], e[selectedObject.index] = t, updateSelectedObject(selectedObject.type, selectedObject.index - 1), "barrel" == selectedObject.type ? (Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateWeapon)(), weaponUpdate()) : (Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), bodyUpdate())
		}
	}

	function deleteSelectedObject() {
		var e = selectedObject.type;
		({
			barrel: currentWeapon.barrels,
			layer: currentBody.layers,
			gadget: currentBody.gadgets
		})[selectedObject.type].splice(selectedObject.index, 1), updateSelectedObject(selectedObject.type, selectedObject.index), "barrel" == e ? (Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateWeapon)(), weaponUpdate()) : (Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), bodyUpdate())
	}

	function duplicateSelectedObject() {
		var e = {
			barrel: currentWeapon.barrels,
			layer: currentBody.layers,
			gadget: currentBody.gadgets
		} [selectedObject.type];
		e.splice(selectedObject.index, 0, Object(lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(e[selectedObject.index])), updateSelectedObject(), "barrel" == selectedObject.type ? (Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateWeapon)(), weaponUpdate()) : (Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), bodyUpdate())
	}

	function validateTextAttribute(e, t) {
		return null == e || "" === e ? t : e
	}
	var allowedCommands = ["(", ")", /^[\d\.]+$/, "*", "/", "+", "-", "sin", "cos", "degToRad", "radToDeg"],
		replacements = [
			["radtodeg", "radToDeg"],
			["rad2deg", "radToDeg"],
			["radianstodegrees", "radToDeg"],
			["degtorad", "degToRad"],
			["deg2rad", "degToRad"],
			["degreestoradians", "degToRad"]
		];

	function checkCommand(e) {
		return allowedCommands.some((function(t) {
			return t instanceof RegExp ? t.test(e) : t == e
		}))
	}

	function checkAllowedCommands(e) {
		try {
			e = e.replace(/([()/*+-])/g, " $1 ").toLowerCase();
			for (var t = 0; t < replacements.length; t++) e = e.replaceAll(replacements[t][0], replacements[t][1]);
			return 0 == e.split(" ").filter((function(e) {
				return e
			})).filter((function(e) {
				return !checkCommand(e)
			})).length
		} catch (e) {
			return !1
		}
	}

	function simplifyNumberInput(input) {
		try {
			input = input.toLowerCase();
			for (var i = 0; i < replacements.length; i++) input = input.replaceAll(replacements[i][0], replacements[i][1]);
			return eval(input)
		} catch (e) {
			return null
		}
	}

	function sin(e) {
		return Math.sin(e)
	}

	function cos(e) {
		return Math.cos(e)
	}

	function radToDeg(e) {
		return Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.radiansToDegrees)(e)
	}

	function degToRad(e) {
		return Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.degreesToRadians)(e)
	}

	function validateNumberAttribute(e, t) {
		return Number.isNaN(+e) ? t : +e
	}

	function validateAttribute(e, t) {
		return null == e ? t : e
	}
	var barrelButtons = [],
		gadgetButtons = [],
		layerButtons = [];

	function weaponUpdate() {
		barrelsText.innerHTML = "Barrels (".concat(currentWeapon.barrels.length, ")"), removeAllChildNodes(barrelsContent), barrelButtons = [];
		for (var e = function(e) {
				var t, n = currentWeapon.barrels[e],
					r = addChild(barrelsContent, "button");
				r.classList.add("tank-editor-collapsible-element"), r.innerHTML = (null === (t = barrelTypes.find((function(e) {
					return e.value == n.type
				}))) || void 0 === t ? void 0 : t.name) || "Invalid barrel (wrong type?)", r.onclick = function() {
					updateSelectedObject("barrel", e)
				}, barrelButtons.push(r)
			}, t = 0; t < currentWeapon.barrels.length; t++) e(t);
		var n = addChild(barrelsContent, "button");
		n.classList.add("tank-editor-collapsible-element"), n.innerHTML = "+", n.onclick = function() {
			currentWeapon.barrels.push({
				type: 0,
				rot: 0,
				offset: 0,
				width: .5,
				length: 1,
				damage: 1,
				reload: 1,
				delay: 0,
				speed: 1,
				distance: 0,
				penetration: 1
			}), Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateWeapon)(), weaponUpdate()
		}, weaponCameraSizeMultiplierInput.value = currentWeapon.cameraSizeMultiplier, weaponMaxDronesInput.value = currentWeapon.maxDrones, weaponNameInput.value = currentWeapon.name, updateSelectedObject()
	}

	function bodyUpdate() {
		gadgetsText.innerHTML = "Gadgets (".concat(currentBody.gadgets.length, ")"), removeAllChildNodes(gadgetsContent), gadgetButtons = [];
		for (var e = function(e) {
				var t, n, r = currentBody.gadgets[e],
					a = document.createElement("button");
				gadgetsContent.appendChild(a), a.classList.add("tank-editor-collapsible-element"), a.innerHTML = (2 == r.type ? ((null === (t = auraTypes.find((function(e) {
					return e.value == r.subtype
				}))) || void 0 === t ? void 0 : t.name) || "Invalid (wrong subtype?)") + " " : "") + (null === (n = gadgetTypes.find((function(e) {
					return e.value == r.type
				}))) || void 0 === n ? void 0 : n.name) || "Invalid gadget (wrong type?)", a.onclick = function() {
					updateSelectedObject("gadget", e)
				}, gadgetButtons.push(a)
			}, t = 0; t < currentBody.gadgets.length; t++) e(t);
		var n;
		(n = addChild(gadgetsContent, "button")).classList.add("tank-editor-collapsible-element"), n.innerHTML = "+", n.onclick = function() {
			currentBody.gadgets.push({
				type: 0,
				offsetX: 0,
				offsetY: 0,
				length: .5,
				width: .25,
				reload: 1,
				damage: .5,
				speed: 1,
				penetration: 1,
				minDistance: 15,
				maxDistance: 25
			}), Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), bodyUpdate()
		}, layersText.innerHTML = "Layers (".concat(currentBody.layers.length, ")"), removeAllChildNodes(layersContent), layerButtons = [];
		for (var r = function(e) {
				var t = currentBody.layers[e],
					n = document.createElement("button");
				layersContent.appendChild(n), n.classList.add("tank-editor-collapsible-element"), n.innerHTML = "".concat(Math.abs(t.sides), "-sided ").concat(t.sides < 0 ? "spiky " : "", "layer"), n.onclick = function() {
					updateSelectedObject("layer", e)
				}, layerButtons.push(n)
			}, a = 0; a < currentBody.layers.length; a++) r(a);
		(n = addChild(layersContent, "button")).classList.add("tank-editor-collapsible-element"), n.innerHTML = "+", n.onclick = function() {
			currentBody.layers.push({
				rot: 0,
				size: .5,
				sides: 0,
				outerSides: 0,
				outerSize: 0,
				offsetX: 0,
				offsetY: 0
			}), Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), bodyUpdate()
		}, bodyCameraSizeMultiplierInput.value = currentBody.cameraSizeMultiplier, bodyMaxDronesInput.value = currentBody.maxDrones, sidesInput.value = currentBody.sides, outerSidesInput.value = currentBody.outerSides, outerSizeInput.value = currentBody.outerSize, healthInput.value = currentBody.healthMultiplier, bodyDamageInput.value = currentBody.bodyDamageMultiplier, speedInput.value = currentBody.speedMultiplier, bodyNameInput.value = currentBody.name, levelInput.value = currentBody.level, tankTypeSelect.value = currentBody.type, teamSelect.value = currentBody.team, visualTeamSelect.value = validateAttribute(currentBody.visualTeam, void 0), radiantInput.value = currentBody.radiant, tankNameInput.value = currentBody.overrideTankName, updateSelectedObject()
	}
	var importExportButton = document.getElementById("import-export-button"),
		importOrExport = document.getElementById("import-or-export"),
		importExportType = document.getElementById("import-export-type"),
		codeArea = document.getElementById("code-area"),
		loadWeaponUpgradeArea = document.getElementById("load-weapon-upgrade-area"),
		loadBodyUpgradeArea = document.getElementById("load-body-upgrade-area"),
		loadWeaponUpgradeButton = document.getElementById("load-weapon-upgrade"),
		loadBodyUpgradeButton = document.getElementById("load-body-upgrade");

	function importTank(e) {
		var t;
		try {
			t = JSON.parse(e)
		} catch (e) {
			return void Object(_client__WEBPACK_IMPORTED_MODULE_4__.h)("Tank code invalid!", e)
		}
		if (t.type && "full" != t.type) Object(_client__WEBPACK_IMPORTED_MODULE_4__.h)("Tank code invalid!", "Code is not a full tank code, it's a \n\t\t".concat({
			weapon: "weapon",
			body: "body",
			full: "full tank"
		} [t.type], ' code. Import as a "').concat({
			weapon: "Weapon Upgrade",
			body: "Body Upgrade",
			full: "Full Tank"
		} [t.type], ' instead of a "Full Tank".'));
		else {
			var n = t.version || 0;
			for (currentBody.gadgets = readGadgets(t.gadgets || []), currentBody.layers = readLayers(t.layers || []), currentBody.outerSize = t.outerSize || 0, currentBody.sides = Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides)(t.sides || 0), currentBody.outerSides = Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides)(t.outerSides || 0), currentBody.healthMultiplier = validateNumberAttribute(t.healthMultiplier, 1), currentBody.bodyDamageMultiplier = validateNumberAttribute(t.bodyDamageMultiplier, 1), currentBody.speedMultiplier = validateNumberAttribute(t.speedMultiplier, 1), currentBody.cameraSizeMultiplier = validateNumberAttribute(t.bodyCameraSizeMultiplier, 1), currentBody.maxDrones = validateNumberAttribute(t.maxBodyDrones, 3), currentBody.name = t.bodyUpgradeName || "", currentWeapon.barrels = readBarrels(t.barrels || []), currentWeapon.cameraSizeMultiplier = validateNumberAttribute(t.weaponCameraSizeMultiplier, 1), currentWeapon.maxDrones = validateNumberAttribute(t.maxWeaponDrones, 3), currentWeapon.name = t.weaponUpgradeName || "", currentBody.level = validateNumberAttribute(t.level, 1), currentBody.type = validateNumberAttribute(t.tankType, 0), currentBody.radiant = validateNumberAttribute(t.radiant, 0), currentBody.team = validateNumberAttribute(t.team, 0), currentBody.visualTeam = validateAttribute(t.visualTeam, void 0), currentBody.overrideTankName = t.overrideTankName || "", i = n; i < _shared_constants__WEBPACK_IMPORTED_MODULE_1__.TANK_EDITOR_VERSION; i++) switch (i) {
				case 0:
					for (var r = 0; r < currentWeapon.barrels.length; r++) {
						var a = currentWeapon.barrels[r];
						a.length = a.length * (3 == a.type || 4 == a.type || 5 == a.type ? 1.5 : 1)
					}
					break;
				case 1:
					var o = function(e) {
						for (var t = 0; t < e.length; t++) {
							var n = e[t];
							n.minion && (u(n.minion.gadgets), o(n.minion.barrels))
						}
					};
					(u = function(e) {
						for (var t = 0; t < e.length; t++) {
							var n = e[t];
							2 == n.type && (n.alpha = .3, n.rot = 0, n.rotationType = 2 == n.subtype ? 0 : 1, n.backSides = 2 == n.subtype ? n.sides : 0)
						}
					})(currentBody.gadgets), o(currentWeapon.barrels);
					break;
				case 2:
				case 1:
					var u;
					o = function(e) {
						for (var t = 0; t < e.length; t++) {
							var n = e[t];
							n.minion && (u(n.minion.gadgets), o(n.minion.barrels))
						}
					};
					(u = function(e) {
						for (var t = 0; t < e.length; t++) {
							var n = e[t];
							2 == n.type && (n.showParticles = 0)
						}
					})(currentBody.gadgets), o(currentWeapon.barrels)
			}
			Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), bodyUpdate(), Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateWeapon)(), weaponUpdate()
		}
	}

	function importBody(e) {
		var t;
		try {
			t = JSON.parse(e)
		} catch (e) {
			return void Object(_client__WEBPACK_IMPORTED_MODULE_4__.h)("Body code invalid!", e)
		}
		if (t.type && "body" != t.type) Object(_client__WEBPACK_IMPORTED_MODULE_4__.h)("Body code invalid!", "Code is not a body code, it's a \n\t\t".concat({
			weapon: "weapon",
			body: "body",
			full: "full tank"
		} [t.type], ' code. Import as a "').concat({
			weapon: "Weapon Upgrade",
			body: "Body Upgrade",
			full: "Full Tank"
		} [t.type], ' instead of a "Body Upgrade".'));
		else {
			var n = t.version || 0;
			for (currentBody.gadgets = readGadgets(t.gadgets || []), currentBody.layers = readLayers(t.layers || []), currentBody.outerSize = t.outerSize || 0, currentBody.sides = Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides)(t.sides || 0), currentBody.outerSides = Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides)(t.outerSides || 0), currentBody.healthMultiplier = validateNumberAttribute(t.healthMultiplier, 1), currentBody.bodyDamageMultiplier = validateNumberAttribute(t.bodyDamageMultiplier, 1), currentBody.speedMultiplier = validateNumberAttribute(t.speedMultiplier, 1), currentBody.cameraSizeMultiplier = validateNumberAttribute(t.cameraSizeMultiplier, 1), currentBody.maxDrones = validateNumberAttribute(t.maxDrones, 3), currentBody.name = t.name || "", i = n; i < _shared_constants__WEBPACK_IMPORTED_MODULE_1__.TANK_EDITOR_VERSION; i++) i;
			Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), bodyUpdate()
		}
	}

	function importWeapon(e) {
		var t;
		try {
			t = JSON.parse(e)
		} catch (e) {
			return void Object(_client__WEBPACK_IMPORTED_MODULE_4__.h)("Weapon code invalid!", e)
		}
		if (t.type && "weapon" != t.type) Object(_client__WEBPACK_IMPORTED_MODULE_4__.h)("Weapon code invalid!", "Code is not a weapon code, it's a \n\t\t".concat({
			weapon: "weapon",
			body: "body",
			full: "full tank"
		} [t.type], ' code. Import as a "').concat({
			weapon: "Weapon Upgrade",
			body: "Body Upgrade",
			full: "Full Tank"
		} [t.type], ' instead of a "Weapon Upgrade".'));
		else {
			var n = t.version || 0;
			for (currentWeapon.barrels = readBarrels(t.barrels || []), currentWeapon.cameraSizeMultiplier = validateNumberAttribute(t.cameraSizeMultiplier, 1), currentWeapon.maxDrones = validateNumberAttribute(t.maxDrones, 3), currentWeapon.name = t.name || "", i = n; i < _shared_constants__WEBPACK_IMPORTED_MODULE_1__.TANK_EDITOR_VERSION; i++) switch (i) {
				case 0:
					for (var r = 0; r < currentWeapon.barrels.length; r++) {
						var a = currentWeapon.barrels[r];
						a.length = a.length * (3 == a.type || 4 == a.type || 5 == a.type ? 1.5 : 1)
					}
			}
			Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateWeapon)(), weaponUpdate()
		}
	}

	function exportTank() {
		codeArea.value = JSON.stringify({
			type: "full",
			version: _shared_constants__WEBPACK_IMPORTED_MODULE_1__.TANK_EDITOR_VERSION,
			gadgets: clearGadgets(currentBody.gadgets || []),
			layers: clearLayers(currentBody.layers || []),
			sides: currentBody.sides || 0,
			outerSides: currentBody.outerSides || 0,
			outerSize: currentBody.outerSize || 0,
			healthMultiplier: currentBody.healthMultiplier,
			bodyDamageMultiplier: currentBody.bodyDamageMultiplier,
			speedMultiplier: currentBody.speedMultiplier,
			bodyCameraSizeMultiplier: currentBody.cameraSizeMultiplier,
			maxBodyDrones: currentBody.maxDrones,
			bodyUpgradeName: currentBody.name,
			barrels: clearBarrels(currentWeapon.barrels || []),
			weaponCameraSizeMultiplier: currentWeapon.cameraSizeMultiplier,
			maxWeaponDrones: currentWeapon.maxDrones,
			weaponUpgradeName: currentWeapon.name,
			level: currentBody.level,
			tankType: currentBody.type,
			radiant: currentBody.radiant,
			team: currentBody.team,
			visualTeam: currentBody.visualTeam,
			overrideTankName: currentBody.overrideTankName || ""
		})
	}

	function exportBody() {
		codeArea.value = JSON.stringify({
			type: "body",
			version: _shared_constants__WEBPACK_IMPORTED_MODULE_1__.TANK_EDITOR_VERSION,
			gadgets: clearGadgets(currentBody.gadgets || []),
			layers: clearLayers(currentBody.layers || []),
			sides: currentBody.sides,
			outerSides: currentBody.outerSides,
			outerSize: currentBody.outerSize,
			healthMultiplier: currentBody.healthMultiplier,
			bodyDamageMultiplier: currentBody.bodyDamageMultiplier,
			speedMultiplier: currentBody.speedMultiplier,
			maxDrones: currentBody.maxDrones,
			cameraSizeMultiplier: currentBody.cameraSizeMultiplier,
			name: currentBody.name
		})
	}

	function exportWeapon() {
		codeArea.value = JSON.stringify({
			type: "weapon",
			version: _shared_constants__WEBPACK_IMPORTED_MODULE_1__.TANK_EDITOR_VERSION,
			barrels: clearBarrels(currentWeapon.barrels || []),
			cameraSizeMultiplier: currentWeapon.cameraSizeMultiplier,
			maxDrones: currentWeapon.maxDrones,
			name: currentWeapon.name
		})
	}

	function recieveTank(e) {
		currentWeapon.barrels = readBarrels(clearBarrels(e.weapon.barrels)), currentWeapon.cameraSizeMultiplier = e.weapon.cameraSizeMultiplier, currentWeapon.maxDrones = e.weapon.maxDrones, currentWeapon.name = e.weapon.name, currentBody.gadgets = readGadgets(clearGadgets(e.body.gadgets)), currentBody.layers = readLayers(clearLayers(e.body.layers)), currentBody.sides = e.body.sides, currentBody.outerSides = e.body.outerSides, currentBody.outerSize = e.body.outerSize, currentBody.healthMultiplier = e.body.healthMultiplier, currentBody.bodyDamageMultiplier = e.body.bodyDamageMultiplier, currentBody.speedMultiplier = e.body.speedMultiplier, currentBody.cameraSizeMultiplier = e.body.cameraSizeMultiplier, currentBody.maxDrones = e.body.maxDrones, currentBody.name = e.body.name, currentBody.type = e.body.type, currentBody.level = e.body.level, currentBody.radiant = e.body.radiant, currentBody.team = e.body.team, currentBody.visualTeam = e.body.visualTeam, currentBody.overrideTankName = e.body.overrideTankName, tankUpdate()
	}

	function clearLayers(e) {
		var t = [];
		return e.forEach((function(e) {
			var n = {
				offsetX: 0,
				offsetY: 0,
				rot: 0
			};
			Object.keys(e).forEach((function(t) {
				switch (t) {
					case "selected":
						break;
					case "rot":
						n[t] = Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.round)(Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.radiansToDegrees)(e[t]), _shared_constants__WEBPACK_IMPORTED_MODULE_1__.BARREL_ROT_ROUNDING);
						break;
					default:
						n[t] = e[t]
				}
			})), t.push(n)
		})), t
	}

	function clearBarrels(e) {
		var t = [];
		return e.forEach((function(e) {
			var n = {};
			Object.keys(e).forEach((function(t) {
				switch (t) {
					case "fireCooldown":
					case "animTime":
					case "selected":
						break;
					case "rot":
						n[t] = Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.round)(Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.radiansToDegrees)(e[t]), _shared_constants__WEBPACK_IMPORTED_MODULE_1__.BARREL_ROT_ROUNDING);
						break;
					case "minion":
						n[t] = {
							sides: Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides)(e[t].sides || 0),
							outerSides: Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides)(e[t].outerSides || 0),
							outerSize: Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides)(e[t].outerSize || 0),
							maxWeaponDrones: e[t].maxWeaponDrones || 0,
							maxBodyDrones: e[t].maxBodyDrones || 0,
							barrels: clearBarrels(e[t].barrels),
							gadgets: clearGadgets(e[t].gadgets),
							layers: clearLayers(e[t].layers || [])
						};
						break;
					default:
						n[t] = e[t]
				}
			})), t.push(n)
		})), t
	}

	function clearGadgets(e) {
		var t = [];
		return e.forEach((function(e) {
			var n = {};
			Object.keys(e).forEach((function(t) {
				switch (t) {
					case "fireCooldown":
					case "targetCheckTimer":
					case "animTime":
					case "target":
					case "selected":
						break;
					case "sides":
					case "outerSides":
					case "backSides":
						n[t] = Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides)(e[t]);
						break;
					case "rot":
						0 != e.type && (n[t] = Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.round)(Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.radiansToDegrees)(e[t]), _shared_constants__WEBPACK_IMPORTED_MODULE_1__.BARREL_ROT_ROUNDING));
						break;
					default:
						n[t] = e[t]
				}
			})), t.push(n)
		})), t
	}

	function readLayers(e) {
		var t = [];
		return e.forEach((function(e) {
			var n = {
				offsetX: 0,
				offsetY: 0,
				rot: 0
			};
			Object.keys(e).forEach((function(t) {
				switch (t) {
					case "rot":
						n[t] = Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.degreesToRadians)(e[t]);
						break;
					default:
						n[t] = e[t]
				}
			})), t.push(n)
		})), t
	}

	function readBarrels(e) {
		var t = [];
		return e.forEach((function(e) {
			var n = {};
			Object.keys(e).forEach((function(t) {
				switch (t) {
					case "rot":
						n[t] = Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.degreesToRadians)(e[t]);
						break;
					case "minion":
						n[t] = {
							sides: Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides)(e[t].sides || 0),
							outerSides: Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides)(e[t].outerSides || 0),
							outerSize: Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides)(e[t].outerSize || 0),
							maxWeaponDrones: e[t].maxWeaponDrones || 0,
							maxBodyDrones: e[t].maxBodyDrones || 0,
							barrels: readBarrels(e[t].barrels),
							gadgets: readGadgets(e[t].gadgets),
							layers: readLayers(e[t].layers || [])
						};
						break;
					default:
						n[t] = e[t]
				}
			})), t.push(n)
		})), t
	}

	function readGadgets(e) {
		var t = [];
		return e.forEach((function(e) {
			var n = {};
			Object.keys(e).forEach((function(t) {
				switch (t) {
					case "rot":
						n[t] = Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.degreesToRadians)(e[t]);
						break;
					case "sides":
					case "outerSides":
					case "backSides":
						n[t] = Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides)(e[t]);
						break;
					default:
						n[t] = e[t]
				}
			})), t.push(n)
		})), t
	}

	function removeAllChildNodes(e) {
		for (; e.firstChild;) e.removeChild(e.firstChild)
	}

	function addChild(e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "div",
			n = document.createElement(t);
		return e.appendChild(n), n
	}
	loadWeaponUpgradeButton.onclick = function() {
		var e = loadWeaponUpgradeArea.value.trim().toLowerCase();
		loadWeaponUpgradeArea.value = "", 0 != e.length && Object(_networking__WEBPACK_IMPORTED_MODULE_6__.loadWeaponUpgrade)(e)
	}, loadBodyUpgradeButton.onclick = function() {
		var e = loadBodyUpgradeArea.value.trim().toLowerCase();
		loadBodyUpgradeArea.value = "", 0 != e.length && Object(_networking__WEBPACK_IMPORTED_MODULE_6__.loadBodyUpgrade)(e)
	}, loadWeaponUpgradeArea.addEventListener("keydown", (function(e) {
		e.keyCode == _settings__WEBPACK_IMPORTED_MODULE_8__.b.enter && (loadWeaponUpgradeButton.click(), loadWeaponUpgradeArea.blur())
	})), loadBodyUpgradeArea.addEventListener("keydown", (function(e) {
		e.keyCode == _settings__WEBPACK_IMPORTED_MODULE_8__.b.enter && (loadBodyUpgradeButton.click(), loadBodyUpgradeArea.blur())
	})), importExportButton.onclick = function() {
		switch (importOrExport.selectedIndex) {
			case 0:
				switch (importExportType.selectedIndex) {
					case 0:
						importTank(codeArea.value);
						break;
					case 1:
						importWeapon(codeArea.value);
						break;
					case 2:
						importBody(codeArea.value)
				}
				break;
			case 1:
				switch (importExportType.selectedIndex) {
					case 0:
						exportTank();
						break;
					case 1:
						exportWeapon();
						break;
					case 2:
						exportBody()
				}
		}
	}
}, function(e, t, n) {
	"use strict";
	n.r(t), n.d(t, "serverNameDisplay", (function() {
		return J
	})), n.d(t, "chat", (function() {
		return Z
	})), n.d(t, "renderingHUD", (function() {
		return Q
	})), n.d(t, "checkingForTankEditorClicks", (function() {
		return ee
	})), n.d(t, "checkingForIDClicks", (function() {
		return te
	})), n.d(t, "clickedObjects", (function() {
		return ne
	})), n.d(t, "oldClickedObjects", (function() {
		return re
	})), n.d(t, "checkForTankEditorClicks", (function() {
		return oe
	})), n.d(t, "checkForIDClicks", (function() {
		return ie
	})), n.d(t, "setHUDRendering", (function() {
		return ue
	})), n.d(t, "showingChatBox", (function() {
		return se
	})), n.d(t, "setShowChatBox", (function() {
		return ce
	})), n.d(t, "renderMainMenu", (function() {
		return fe
	})), n.d(t, "lastTank", (function() {
		return de
	})), n.d(t, "setCurrentBackgroundID", (function() {
		return Se
	})), n.d(t, "cdt", (function() {
		return Ie
	})), n.d(t, "lastMe", (function() {
		return Pe
	})), n.d(t, "screenSize", (function() {
		return Ue
	})), n.d(t, "offsetX", (function() {
		return Ye
	})), n.d(t, "offsetY", (function() {
		return Fe
	})), n.d(t, "setLastTank", (function() {
		return He
	})), n.d(t, "setPing", (function() {
		return qe
	})), n.d(t, "render", (function() {
		return Xe
	})), n.d(t, "updateDebugMode", (function() {
		return $e
	})), n.d(t, "scaleRatio", (function() {
		return et
	})), n.d(t, "vmin", (function() {
		return tt
	})), n.d(t, "setCanvasDimensions", (function() {
		return nt
	})), n.d(t, "gateActivate", (function() {
		return at
	})), n.d(t, "gatewayActivate", (function() {
		return ot
	})), n.d(t, "wormholeRupture", (function() {
		return it
	})), n.d(t, "wormholeSpawn", (function() {
		return ut
	})), n.d(t, "entityLanding", (function() {
		return st
	})), n.d(t, "startRendering", (function() {
		return ct
	})), n.d(t, "stopRendering", (function() {
		return lt
	})), n.d(t, "getTeamColor", (function() {
		return _t
	})), n.d(t, "upgradeRotation", (function() {
		return Pt
	})), n.d(t, "loadUpgradeTree", (function() {
		return Gt
	})), n.d(t, "exportRenderedEntity", (function() {
		return tn
	})), n.d(t, "clearCameraShakes", (function() {
		return on
	})), n.d(t, "tickCameraShakes", (function() {
		return un
	})), n.d(t, "shakeCamera", (function() {
		return sn
	})), n.d(t, "addParticle", (function() {
		return cn
	})), n.d(t, "clearParticles", (function() {
		return ln
	})), n.d(t, "clickMouse", (function() {
		return jn
	}));
	var r = n(12),
		a = (n(34), n(9)),
		o = n(10),
		i = n(8),
		u = n(7),
		s = n(13),
		c = n(2),
		l = n(4),
		d = n(1),
		f = n(0),
		h = [{
			type: 0,
			rot: Object(f.degreesToRadians)(0),
			offset: 0,
			width: .5,
			length: 1,
			damage: 1,
			reload: 1,
			delay: 0
		}],
		p = [{
			type: 0,
			rot: Object(f.degreesToRadians)(0),
			offset: 0,
			width: .5,
			length: 1.25,
			damage: 3,
			penetration: 2.5,
			reload: 2,
			delay: 0,
			speed: 1.5
		}],
		g = [{
			type: 0,
			rot: Object(f.degreesToRadians)(35),
			offset: 0,
			distance: 0,
			width: .25,
			length: .75,
			damage: .75,
			reload: 1,
			delay: 0
		}, {
			type: 0,
			rot: Object(f.degreesToRadians)(-35),
			offset: 0,
			distance: 0,
			width: .25,
			length: .75,
			damage: .75,
			reload: 1,
			delay: 0
		}, {
			type: 0,
			rot: Object(f.degreesToRadians)(0),
			offset: 0,
			distance: 0,
			width: .5,
			length: 1,
			damage: 1,
			reload: 1,
			delay: 0
		}],
		v = [{
			type: 0,
			rot: Object(f.degreesToRadians)(0),
			offset: 0,
			width: 1,
			length: 1.1,
			damage: 8,
			reload: 4,
			delay: 0
		}],
		_ = [{
			type: 0,
			rot: Object(f.degreesToRadians)(-60),
			offset: 0,
			distance: 0,
			width: .25,
			length: .7,
			damage: .5,
			reload: 1,
			delay: .75
		}, {
			type: 0,
			rot: Object(f.degreesToRadians)(60),
			offset: 0,
			distance: 0,
			width: .25,
			length: .7,
			damage: .5,
			reload: 1,
			delay: .75
		}, {
			type: 0,
			rot: Object(f.degreesToRadians)(-40),
			offset: 0,
			distance: 0,
			width: .25,
			length: .8,
			damage: .5,
			reload: 1,
			delay: .5
		}, {
			type: 0,
			rot: Object(f.degreesToRadians)(40),
			offset: 0,
			distance: 0,
			width: .25,
			length: .8,
			damage: .5,
			reload: 1,
			delay: .5
		}, {
			type: 0,
			rot: Object(f.degreesToRadians)(20),
			offset: 0,
			distance: 0,
			width: .25,
			length: .9,
			damage: .5,
			reload: 1,
			delay: .25
		}, {
			type: 0,
			rot: Object(f.degreesToRadians)(-20),
			offset: 0,
			distance: 0,
			width: .25,
			length: .9,
			damage: .5,
			reload: 1,
			delay: .25
		}, {
			type: 0,
			rot: Object(f.degreesToRadians)(0),
			offset: 0,
			distance: 0,
			width: .5,
			length: 1,
			damage: 1,
			reload: 1,
			delay: 0
		}],
		m = [{
			type: 0,
			rot: Object(f.degreesToRadians)(-75),
			offset: 0,
			width: .25,
			length: .7,
			damage: .5,
			reload: 1.5,
			delay: .8333
		}, {
			type: 0,
			rot: Object(f.degreesToRadians)(75),
			offset: 0,
			width: .25,
			length: .7,
			damage: .5,
			reload: 1.5,
			delay: .8333
		}, {
			type: 0,
			rot: Object(f.degreesToRadians)(-60),
			offset: 0,
			width: .25,
			length: .8,
			damage: .5,
			reload: 1.5,
			delay: .6666
		}, {
			type: 0,
			rot: Object(f.degreesToRadians)(60),
			offset: 0,
			width: .25,
			length: .8,
			damage: .5,
			reload: 1.5,
			delay: .6666
		}, {
			type: 0,
			rot: Object(f.degreesToRadians)(-45),
			offset: 0,
			width: .25,
			length: .9,
			damage: .5,
			reload: 1.5,
			delay: .5
		}, {
			type: 0,
			rot: Object(f.degreesToRadians)(45),
			offset: 0,
			width: .25,
			length: .9,
			damage: .5,
			reload: 1.5,
			delay: .5
		}, {
			type: 0,
			rot: Object(f.degreesToRadians)(-30),
			offset: 0,
			width: .25,
			length: 1,
			damage: .5,
			reload: 1.5,
			delay: .3333
		}, {
			type: 0,
			rot: Object(f.degreesToRadians)(30),
			offset: 0,
			width: .25,
			length: 1,
			damage: .5,
			reload: 1.5,
			delay: .3333
		}, {
			type: 0,
			rot: Object(f.degreesToRadians)(15),
			offset: 0,
			width: .25,
			length: 1.1,
			damage: .5,
			reload: 1.5,
			delay: .1666
		}, {
			type: 0,
			rot: Object(f.degreesToRadians)(-15),
			offset: 0,
			width: .25,
			length: 1.1,
			damage: .5,
			reload: 1.5,
			delay: .1666
		}, {
			type: 0,
			rot: Object(f.degreesToRadians)(0),
			offset: 0,
			width: .5,
			length: 1.2,
			damage: 1.5,
			penetration: 2,
			reload: 1.5,
			delay: 0
		}],
		y = [{
			type: 0,
			rot: Object(f.degreesToRadians)(0),
			offset: 0,
			distance: 0,
			width: .5,
			length: 1,
			damage: 1,
			reload: 1,
			delay: 0
		}, {
			type: 0,
			rot: Object(f.degreesToRadians)(180),
			offset: 0,
			distance: 0,
			width: .5,
			length: 1,
			damage: 1,
			reload: 1,
			delay: 0
		}, {
			type: 0,
			rot: Object(f.degreesToRadians)(90),
			offset: 0,
			distance: 0,
			width: .5,
			length: 1,
			damage: 1,
			reload: 1,
			delay: 0
		}, {
			type: 0,
			rot: Object(f.degreesToRadians)(-90),
			offset: 0,
			distance: 0,
			width: .5,
			length: 1,
			damage: 1,
			reload: 1,
			delay: 0
		}, {
			type: 0,
			rot: Object(f.degreesToRadians)(45),
			offset: 0,
			distance: 0,
			width: .5,
			length: 1,
			damage: 1,
			reload: 1,
			delay: 0
		}, {
			type: 0,
			rot: Object(f.degreesToRadians)(-45),
			offset: 0,
			distance: 0,
			width: .5,
			length: 1,
			damage: 1,
			reload: 1,
			delay: 0
		}, {
			type: 0,
			rot: Object(f.degreesToRadians)(135),
			offset: 0,
			distance: 0,
			width: .5,
			length: 1,
			damage: 1,
			reload: 1,
			delay: 0
		}, {
			type: 0,
			rot: Object(f.degreesToRadians)(-135),
			offset: 0,
			distance: 0,
			width: .5,
			length: 1,
			damage: 1,
			reload: 1,
			delay: 0
		}],
		b = [{
			type: 0,
			rot: Object(f.degreesToRadians)(0),
			offset: 0,
			width: .5,
			length: 1.4,
			damage: 4.5,
			reload: 2.3,
			delay: 0,
			speed: 2
		}],
		E = [{
			type: 2,
			rot: Object(f.degreesToRadians)(180),
			offset: 0,
			distance: 0,
			width: .2,
			length: .45,
			damage: 4,
			reload: 12,
			delay: 0
		}, {
			type: 2,
			rot: Object(f.degreesToRadians)(180),
			offset: .5,
			distance: 0,
			width: .1,
			length: .35,
			damage: 2,
			reload: 3,
			delay: 0
		}, {
			type: 2,
			rot: Object(f.degreesToRadians)(180),
			offset: -.5,
			distance: 0,
			width: .1,
			length: .35,
			damage: 2,
			reload: 3,
			delay: 0
		}, {
			type: 2,
			rot: Object(f.degreesToRadians)(60),
			offset: 0,
			distance: 0,
			width: .2,
			length: .45,
			damage: 4,
			reload: 12,
			delay: 0
		}, {
			type: 2,
			rot: Object(f.degreesToRadians)(60),
			offset: .5,
			distance: 0,
			width: .1,
			length: .35,
			damage: 2,
			reload: 3,
			delay: 0
		}, {
			type: 2,
			rot: Object(f.degreesToRadians)(60),
			offset: -.5,
			distance: 0,
			width: .1,
			length: .35,
			damage: 2,
			reload: 3,
			delay: 0
		}, {
			type: 2,
			rot: Object(f.degreesToRadians)(-60),
			offset: 0,
			distance: 0,
			width: .2,
			length: .45,
			damage: 4,
			reload: 12,
			delay: 0
		}, {
			type: 2,
			rot: Object(f.degreesToRadians)(-60),
			offset: .5,
			distance: 0,
			width: .1,
			length: .35,
			damage: 2,
			reload: 3,
			delay: 0
		}, {
			type: 2,
			rot: Object(f.degreesToRadians)(-60),
			offset: -.5,
			distance: 0,
			width: .1,
			length: .35,
			damage: 2,
			reload: 3,
			delay: 0
		}],
		O = [{
			type: 1,
			rot: Object(f.degreesToRadians)(180),
			offset: 0,
			distance: 0,
			width: .2,
			length: .45,
			damage: 1.5,
			reload: 4,
			delay: 0
		}, {
			type: 1,
			rot: Object(f.degreesToRadians)(180),
			offset: .5,
			distance: 0,
			width: .1,
			length: .35,
			damage: .25,
			reload: 1,
			delay: 0
		}, {
			type: 1,
			rot: Object(f.degreesToRadians)(180),
			offset: -.5,
			distance: 0,
			width: .1,
			length: .35,
			damage: .25,
			reload: 1,
			delay: 0
		}, {
			type: 1,
			rot: Object(f.degreesToRadians)(60),
			offset: 0,
			distance: 0,
			width: .2,
			length: .45,
			damage: 1.5,
			reload: 4,
			delay: 0
		}, {
			type: 1,
			rot: Object(f.degreesToRadians)(60),
			offset: .5,
			distance: 0,
			width: .1,
			length: .35,
			damage: .25,
			reload: 1,
			delay: 0
		}, {
			type: 1,
			rot: Object(f.degreesToRadians)(60),
			offset: -.5,
			distance: 0,
			width: .1,
			length: .35,
			damage: .25,
			reload: 1,
			delay: 0
		}, {
			type: 1,
			rot: Object(f.degreesToRadians)(-60),
			offset: 0,
			distance: 0,
			width: .2,
			length: .45,
			damage: 1.5,
			reload: 4,
			delay: 0
		}, {
			type: 1,
			rot: Object(f.degreesToRadians)(-60),
			offset: .5,
			distance: 0,
			width: .1,
			length: .35,
			damage: .25,
			reload: 1,
			delay: 0
		}, {
			type: 1,
			rot: Object(f.degreesToRadians)(-60),
			offset: -.5,
			distance: 0,
			width: .1,
			length: .35,
			damage: .25,
			reload: 1,
			delay: 0
		}],
		T = [{
			type: 2,
			rot: Object(f.degreesToRadians)(-60),
			offset: 0,
			width: .55,
			length: .5,
			damage: 8,
			reload: 12,
			delay: 0,
			speed: 1,
			distance: 0,
			penetration: 3.5
		}, {
			type: 2,
			rot: Object(f.degreesToRadians)(60),
			offset: 0,
			width: .55,
			length: .5,
			damage: 8,
			reload: 12,
			delay: 0,
			speed: 1,
			distance: 0,
			penetration: 3.5
		}, {
			type: 2,
			rot: Object(f.degreesToRadians)(180),
			offset: 0,
			width: .55,
			length: .5,
			damage: 8,
			reload: 12,
			delay: 0,
			speed: 1,
			distance: 0,
			penetration: 3.5
		}],
		M = [{
			type: 4,
			rot: Object(f.degreesToRadians)(180),
			offset: 0,
			distance: .4,
			width: .4,
			length: .225,
			damage: .1,
			penetration: 40,
			reload: 6,
			delay: 0
		}, {
			type: 4,
			rot: Object(f.degreesToRadians)(60),
			offset: 0,
			distance: .4,
			width: .4,
			length: .225,
			damage: .1,
			penetration: 40,
			reload: 6,
			delay: 0
		}, {
			type: 4,
			rot: Object(f.degreesToRadians)(-60),
			offset: 0,
			distance: .4,
			width: .4,
			length: .225,
			damage: .1,
			penetration: 40,
			reload: 6,
			delay: 0
		}, {
			type: 5,
			rot: Object(f.degreesToRadians)(180),
			offset: -.6,
			distance: .4,
			width: .1,
			length: .15,
			damage: .1,
			reload: 12,
			delay: 0
		}, {
			type: 5,
			rot: Object(f.degreesToRadians)(180),
			offset: .6,
			distance: .4,
			width: .1,
			length: .15,
			damage: .1,
			reload: 12,
			delay: 0
		}, {
			type: 5,
			rot: Object(f.degreesToRadians)(60),
			offset: -.6,
			distance: .4,
			width: .1,
			length: .15,
			damage: .1,
			reload: 12,
			delay: 0
		}, {
			type: 5,
			rot: Object(f.degreesToRadians)(60),
			offset: .6,
			distance: .4,
			width: .1,
			length: .15,
			damage: .1,
			reload: 12,
			delay: 0
		}, {
			type: 5,
			rot: Object(f.degreesToRadians)(-60),
			offset: -.6,
			distance: .4,
			width: .1,
			length: .15,
			damage: .1,
			reload: 12,
			delay: 0
		}, {
			type: 5,
			rot: Object(f.degreesToRadians)(-60),
			offset: .6,
			distance: .4,
			width: .1,
			length: .15,
			damage: .1,
			reload: 12,
			delay: 0
		}],
		w = [{
			type: 3,
			rot: Object(f.degreesToRadians)(180),
			offset: 0,
			width: .4,
			length: .45,
			penetration: 2,
			speed: .75,
			damage: 1,
			reload: 30,
			delay: 0
		}, {
			type: 3,
			rot: Object(f.degreesToRadians)(60),
			offset: 0,
			width: .4,
			length: .45,
			penetration: 2,
			speed: .75,
			damage: 1,
			reload: 30,
			delay: 0
		}, {
			type: 3,
			rot: Object(f.degreesToRadians)(-60),
			offset: 0,
			width: .4,
			length: .45,
			penetration: 2,
			speed: .75,
			damage: 1,
			reload: 30,
			delay: 0
		}],
		S = [{
			type: 0,
			rot: Object(f.degreesToRadians)(0),
			offset: 0,
			distance: 0,
			width: .2,
			length: 1.2,
			damage: .6,
			reload: 1,
			delay: 0
		}, {
			type: 0,
			rot: Object(f.degreesToRadians)(0),
			offset: -.5,
			distance: 0,
			width: .2,
			length: 1.2,
			damage: .6,
			reload: 1,
			delay: .33
		}, {
			type: 0,
			rot: Object(f.degreesToRadians)(0),
			offset: .5,
			distance: 0,
			width: .2,
			length: 1.2,
			damage: .6,
			reload: 1,
			delay: .66
		}, {
			type: 0,
			rot: Object(f.degreesToRadians)(0),
			offset: 0,
			distance: 0,
			width: .2,
			length: .8,
			damage: .6,
			reload: 1,
			delay: .66
		}, {
			type: 0,
			rot: Object(f.degreesToRadians)(0),
			offset: -.5,
			distance: 0,
			width: .2,
			length: .8,
			damage: .6,
			reload: 1,
			delay: .33
		}, {
			type: 0,
			rot: Object(f.degreesToRadians)(0),
			offset: .5,
			distance: 0,
			width: .2,
			length: .8,
			damage: .6,
			reload: 1,
			delay: 0
		}],
		A = [{
			rot: Object(f.degreesToRadians)(-12),
			type: 0,
			offsetX: .8 * Math.sin(Object(f.degreesToRadians)(135)),
			offsetY: .8 * Math.cos(Object(f.degreesToRadians)(135)),
			length: .5,
			width: .25,
			reload: 1,
			damage: .4,
			minDistance: 15,
			maxDistance: 25
		}, {
			rot: Object(f.degreesToRadians)(-16),
			type: 0,
			offsetX: .8 * Math.sin(Object(f.degreesToRadians)(45)),
			offsetY: .8 * Math.cos(Object(f.degreesToRadians)(45)),
			length: .5,
			width: .25,
			reload: 1,
			damage: .4,
			minDistance: 15,
			maxDistance: 25
		}, {
			rot: Object(f.degreesToRadians)(245),
			type: 0,
			offsetX: .8 * Math.sin(Object(f.degreesToRadians)(-135)),
			offsetY: .8 * Math.cos(Object(f.degreesToRadians)(-135)),
			length: .5,
			width: .25,
			reload: 1,
			damage: .4,
			minDistance: 15,
			maxDistance: 25
		}, {
			rot: Object(f.degreesToRadians)(257),
			type: 0,
			offsetX: .8 * Math.sin(Object(f.degreesToRadians)(-45)),
			offsetY: .8 * Math.cos(Object(f.degreesToRadians)(-45)),
			length: .5,
			width: .25,
			reload: 1,
			damage: .4,
			minDistance: 15,
			maxDistance: 25
		}],
		R = [{
			type: 0,
			offsetX: 0,
			offsetY: 0,
			length: .7,
			width: .4,
			reload: 2.5,
			damage: 2,
			minDistance: 25,
			maxDistance: 45,
			speed: 1.3,
			rot: Object(f.degreesToRadians)(-45)
		}],
		I = [{
			type: 0,
			offsetX: 0,
			offsetY: 0,
			length: .75,
			width: .4,
			reload: 2,
			damage: 3.5,
			minDistance: 25,
			maxDistance: 45,
			speed: 1.5,
			rot: Object(f.degreesToRadians)(170)
		}],
		P = [{
			type: 2,
			sides: 0,
			subtype: 0,
			offsetX: .7 * Math.sin(Object(f.degreesToRadians)(0)),
			offsetY: -.7 * Math.cos(Object(f.degreesToRadians)(0)),
			radius: 1.75,
			width: .15,
			damage: .125,
			reload: .25
		}, {
			type: 2,
			sides: 0,
			subtype: 0,
			offsetX: .7 * Math.sin(Object(f.degreesToRadians)(120)),
			offsetY: -.7 * Math.cos(Object(f.degreesToRadians)(120)),
			radius: 1.75,
			width: .15,
			damage: .125,
			reload: .25
		}, {
			type: 2,
			sides: 0,
			subtype: 0,
			offsetX: .7 * Math.sin(Object(f.degreesToRadians)(-120)),
			offsetY: -.7 * Math.cos(Object(f.degreesToRadians)(-120)),
			radius: 1.75,
			width: .15,
			damage: .125,
			reload: .25
		}, {
			type: 2,
			sides: 0,
			subtype: 0,
			offsetX: 0,
			offsetY: 0,
			radius: 2,
			width: .1,
			damage: .15,
			reload: .25
		}, {
			type: 2,
			sides: 0,
			subtype: 0,
			offsetX: 0,
			offsetY: 0,
			radius: 4,
			width: .3,
			damage: .15,
			reload: .25
		}],
		x = [{
			type: 0,
			offsetX: .7 * Math.sin(Object(f.degreesToRadians)(0)),
			offsetY: -.7 * Math.cos(Object(f.degreesToRadians)(0)),
			length: .15,
			width: .075,
			reload: .75,
			damage: .3,
			minDistance: 15,
			maxDistance: 25,
			rot: Object(f.degreesToRadians)(75)
		}, {
			type: 0,
			offsetX: .7 * Math.sin(Object(f.degreesToRadians)(120)),
			offsetY: -.7 * Math.cos(Object(f.degreesToRadians)(120)),
			length: .15,
			width: .075,
			reload: .75,
			damage: .3,
			minDistance: 15,
			maxDistance: 25,
			rot: Object(f.degreesToRadians)(75)
		}, {
			type: 0,
			offsetX: .7 * Math.sin(Object(f.degreesToRadians)(-120)),
			offsetY: -.7 * Math.cos(Object(f.degreesToRadians)(-120)),
			length: .15,
			width: .075,
			reload: .75,
			damage: .3,
			minDistance: 15,
			maxDistance: 25,
			rot: Object(f.degreesToRadians)(75)
		}, {
			type: 0,
			offsetX: .35 * Math.sin(Object(f.degreesToRadians)(60)),
			offsetY: -.35 * Math.cos(Object(f.degreesToRadians)(60)),
			length: .15,
			width: .075,
			reload: .75,
			damage: .3,
			minDistance: 15,
			maxDistance: 25,
			rot: Object(f.degreesToRadians)(75)
		}, {
			type: 0,
			offsetX: .35 * Math.sin(Object(f.degreesToRadians)(-60)),
			offsetY: -.35 * Math.cos(Object(f.degreesToRadians)(-60)),
			length: .15,
			width: .075,
			reload: .75,
			damage: .3,
			minDistance: 15,
			maxDistance: 25,
			rot: Object(f.degreesToRadians)(75)
		}, {
			type: 0,
			offsetX: .35 * Math.sin(Object(f.degreesToRadians)(180)),
			offsetY: -.35 * Math.cos(Object(f.degreesToRadians)(180)),
			length: .15,
			width: .075,
			reload: .75,
			damage: .3,
			minDistance: 15,
			maxDistance: 25,
			rot: Object(f.degreesToRadians)(75)
		}, {
			type: 0,
			offsetX: 0,
			offsetY: 0,
			length: .35,
			width: .2,
			reload: .75,
			damage: 1.25,
			minDistance: 30,
			maxDistance: 40,
			speed: 1.6,
			rot: Object(f.degreesToRadians)(75)
		}],
		C = [{
			size: .8,
			sides: 6,
			rot: 0,
			offsetX: 0,
			offsetY: 0
		}],
		B = [{
			size: .7,
			sides: 6,
			rot: 0,
			offsetX: 0,
			offsetY: 0
		}, {
			size: .4,
			sides: 4,
			rot: 0,
			offsetX: 0,
			offsetY: 0
		}],
		D = [{
			size: .8,
			sides: 3,
			rot: 0,
			offsetX: 0,
			offsetY: 0
		}, {
			size: .4,
			sides: 3,
			rot: 0,
			offsetX: 0,
			offsetY: 0
		}],
		k = 360 * Math.random(),
		j = [{
			tanks: [{
				x: 0,
				y: 0,
				size: 40,
				d: Object(f.degreesToRadians)(135),
				sides: 6,
				outerSides: 0,
				outerSize: 0,
				color: c.TEAM_COLORS[0],
				barrels: g,
				gadgets: [],
				layers: []
			}, {
				x: 400,
				y: 100,
				size: 30,
				d: Object(f.degreesToRadians)(-68),
				sides: 0,
				outerSides: 0,
				outerSize: 0,
				color: c.TEAM_COLORS[1],
				barrels: h,
				gadgets: [],
				layers: []
			}, {
				x: -700,
				y: -100,
				size: 60,
				d: Object(f.degreesToRadians)(74),
				sides: 8,
				outerSides: 0,
				outerSize: 0,
				color: c.TEAM_COLORS[2],
				barrels: v,
				gadgets: [],
				layers: B
			}, {
				x: 400,
				y: -500,
				size: 60,
				d: Object(f.degreesToRadians)(28),
				sides: 8,
				outerSides: 5,
				outerSize: .55,
				color: c.TEAM_COLORS[3],
				barrels: y,
				gadgets: R,
				layers: C
			}, {
				x: -200,
				y: 600,
				size: 50,
				d: Object(f.degreesToRadians)(10),
				sides: 0,
				outerSides: 0,
				outerSize: 0,
				color: c.FALLEN_COLOR,
				barrels: _,
				gadgets: I,
				layers: []
			}, {
				x: -900,
				y: -800,
				size: 60,
				d: Object(f.degreesToRadians)(69),
				sides: 0,
				outerSides: 4,
				outerSize: .6,
				color: c.TEAM_COLORS[1],
				barrels: b,
				gadgets: [],
				layers: []
			}, {
				x: 900,
				y: 200,
				size: 100,
				d: Object(f.degreesToRadians)(69),
				sides: 3,
				outerSides: 3,
				outerSize: .3,
				color: c.CELESTIAL_COLOR,
				barrels: E,
				gadgets: [],
				layers: D
			}, {
				x: -1100,
				y: 1e3,
				size: 120,
				d: Object(f.degreesToRadians)(69),
				sides: 3,
				outerSides: 0,
				outerSize: 0,
				color: c.CELESTIAL_COLOR,
				barrels: O,
				gadgets: P,
				layers: [{
					size: .6,
					sides: 3,
					rot: 0,
					offsetX: 0,
					offsetY: 0
				}]
			}],
			polygons: [{
				x: 200,
				y: -300,
				level: 4,
				d: Object(f.degreesToRadians)(32)
			}, {
				x: 500,
				y: 750,
				level: 4,
				d: Object(f.degreesToRadians)(89)
			}, {
				x: -150,
				y: -250,
				level: 3,
				d: Object(f.degreesToRadians)(57)
			}, {
				x: -170,
				y: 800,
				level: 3,
				d: Object(f.degreesToRadians)(-57)
			}, {
				x: -750,
				y: -600,
				level: 3,
				d: Object(f.degreesToRadians)(-98)
			}, {
				x: -690,
				y: 100,
				level: 2,
				d: Object(f.degreesToRadians)(-23)
			}, {
				x: -600,
				y: 180,
				level: 2,
				d: Object(f.degreesToRadians)(85)
			}, {
				x: 420,
				y: 520,
				level: 2,
				d: Object(f.degreesToRadians)(85)
			}, {
				x: 700,
				y: 700,
				level: 2,
				d: Object(f.degreesToRadians)(-74)
			}, {
				x: 650,
				y: -700,
				level: 2,
				d: Object(f.degreesToRadians)(40)
			}, {
				x: 770,
				y: -90,
				level: 2,
				d: Object(f.degreesToRadians)(40)
			}, {
				x: -630,
				y: 670,
				level: 1,
				d: Object(f.degreesToRadians)(40)
			}, {
				x: -680,
				y: 600,
				level: 1,
				d: Object(f.degreesToRadians)(74)
			}, {
				x: -250,
				y: 1580,
				level: 1,
				d: Object(f.degreesToRadians)(-6)
			}, {
				x: -200,
				y: 1500,
				level: 1,
				d: Object(f.degreesToRadians)(-49)
			}, {
				x: 910,
				y: 40,
				level: 1,
				d: Object(f.degreesToRadians)(-49)
			}, {
				x: -910,
				y: 310,
				level: 1,
				d: Object(f.degreesToRadians)(32)
			}, {
				x: -160,
				y: 400,
				level: 1,
				d: Object(f.degreesToRadians)(74)
			}, {
				x: -100,
				y: 50,
				level: 0,
				d: Object(f.degreesToRadians)(32)
			}, {
				x: 500,
				y: -870,
				level: 0,
				d: Object(f.degreesToRadians)(79)
			}, {
				x: -300,
				y: -800,
				level: 0,
				d: Object(f.degreesToRadians)(-82)
			}, {
				x: -500,
				y: 800,
				level: 0,
				d: Object(f.degreesToRadians)(4)
			}, {
				x: 800,
				y: 850,
				level: 0,
				d: Object(f.degreesToRadians)(2)
			}, {
				x: -200,
				y: 200,
				level: 0,
				d: Object(f.degreesToRadians)(-32)
			}, {
				x: -500,
				y: 300,
				level: 0,
				d: Object(f.degreesToRadians)(-32)
			}, {
				x: 500,
				y: 280,
				level: 0,
				d: Object(f.degreesToRadians)(-84)
			}, {
				x: -650,
				y: -280,
				level: 0,
				d: Object(f.degreesToRadians)(-84)
			}, {
				x: -600,
				y: -270,
				level: 0,
				d: Object(f.degreesToRadians)(-24)
			}, {
				x: 580,
				y: -320,
				level: 0,
				d: Object(f.degreesToRadians)(-24)
			}],
			dimension: {
				visual: {
					gridSize: 30,
					backgroundColor: "#081e20",
					gridColor: "#000000",
					particles: {
						spawnrate: 0 / (c.CAMERA_SIZE * c.CAMERA_SIZE),
						speed: {
							min: 0,
							max: 0
						},
						d: {
							min: 0,
							max: 360
						},
						size: {
							min: 6,
							max: 6
						},
						lifetime: {
							min: 30,
							max: 60
						},
						sides: {
							min: 0,
							max: 0
						},
						transparency: {
							min: 1,
							max: 1
						},
						color: {
							min: "#081e20",
							max: "#000000"
						}
					}
				},
				bases: [],
				walls: [],
				gates: [],
				mapSize: 1500,
				trueMapSize: 1
			}
		}, {
			polygons: [],
			tanks: [{
				x: 0,
				y: 0,
				size: 400,
				d: Object(f.degreesToRadians)(135),
				sides: 3,
				outerSides: 3,
				outerSize: .15,
				color: c.CELESTIAL_COLOR,
				barrels: M,
				gadgets: [{
					showParticles: 0,
					type: 2,
					sides: 3,
					backSides: 3,
					subtype: 2,
					offsetX: 0,
					offsetY: 0,
					radius: 3,
					width: .3,
					rotationType: 0
				}],
				layers: [{
					size: .7,
					sides: 3,
					outerSides: 3,
					outerSize: .15,
					rot: 0,
					offsetX: 0,
					offsetY: 0
				}, {
					size: .3,
					sides: 3,
					outerSides: 3,
					outerSize: .15,
					rot: 0,
					offsetX: 0,
					offsetY: 0
				}]
			}, {
				x: 900,
				y: 200,
				size: 100,
				d: Object(f.degreesToRadians)(69),
				sides: 3,
				outerSides: 3,
				outerSize: .3,
				color: c.CELESTIAL_COLOR,
				barrels: E,
				gadgets: [],
				layers: D
			}, {
				x: -700,
				y: -600,
				size: 120,
				d: Object(f.degreesToRadians)(35),
				sides: 3,
				outerSides: 0,
				outerSize: 0,
				color: c.CELESTIAL_COLOR,
				barrels: O,
				gadgets: x,
				layers: [{
					size: .6,
					sides: 3
				}]
			}, {
				x: -840,
				y: 400,
				size: 120,
				d: Object(f.degreesToRadians)(-72),
				sides: 3,
				outerSides: 3,
				outerSize: .5,
				color: c.CELESTIAL_COLOR,
				barrels: w,
				gadgets: [],
				layers: [{
					size: .8,
					sides: 3
				}, {
					size: .4,
					sides: 3
				}]
			}],
			dimension: {
				visual: {
					gridSize: 30,
					backgroundColor: "#081e20",
					gridColor: "#000000",
					particles: {
						spawnrate: .5 / (c.CAMERA_SIZE * c.CAMERA_SIZE),
						speed: {
							min: 2,
							max: 5
						},
						d: {
							min: 0 + k,
							max: 90 + k
						},
						size: {
							min: 4,
							max: 8
						},
						lifetime: {
							min: 30,
							max: 60
						},
						sides: {
							min: 0,
							max: 0
						},
						transparency: {
							min: 1,
							max: 1
						},
						color: {
							min: "#081e20",
							max: "#000000"
						}
					}
				},
				bases: [{
					width: .5,
					height: .5,
					x: 0,
					y: 0,
					team: 2
				}],
				walls: [],
				gates: [],
				mapSize: 3e3,
				trueMapSize: 1
			}
		}, {
			tanks: [{
				x: 60,
				y: -60,
				size: 54,
				d: Object(f.degreesToRadians)(135),
				sides: 8,
				outerSides: 0,
				outerSize: 0,
				color: c.TEAM_COLORS[0],
				barrels: m,
				gadgets: [],
				layers: B
			}, {
				x: -60,
				y: 60,
				size: 54,
				d: Object(f.degreesToRadians)(315),
				sides: 0,
				outerSides: 0,
				outerSize: 0,
				color: c.TEAM_COLORS[0],
				barrels: S,
				gadgets: A,
				layers: []
			}, {
				x: 400,
				y: 100,
				size: 40,
				d: Object(f.degreesToRadians)(-110),
				sides: 0,
				outerSides: 0,
				outerSize: 0,
				color: c.TEAM_COLORS[1],
				barrels: p,
				gadgets: I,
				layers: []
			}, {
				x: -600,
				y: -100,
				size: 62,
				d: Object(f.degreesToRadians)(74),
				sides: 8,
				outerSides: 0,
				outerSize: 0,
				color: c.TEAM_COLORS[2],
				barrels: v,
				gadgets: [],
				layers: B
			}, {
				x: -100,
				y: -450,
				size: 50,
				d: Object(f.degreesToRadians)(10),
				sides: 0,
				outerSides: 0,
				outerSize: 0,
				color: c.FALLEN_COLOR,
				barrels: _,
				gadgets: I,
				layers: []
			}, {
				x: 600,
				y: -600,
				size: 62,
				d: Object(f.degreesToRadians)(28),
				sides: 8,
				outerSides: 5,
				outerSize: .55,
				color: c.TEAM_COLORS[3],
				barrels: y,
				gadgets: R,
				layers: C
			}, {
				x: 900,
				y: -730,
				size: 60,
				d: Object(f.degreesToRadians)(-69),
				sides: 0,
				outerSides: 4,
				outerSize: .6,
				color: c.TEAM_COLORS[1],
				barrels: b,
				gadgets: [],
				layers: []
			}, {
				x: 800,
				y: 400,
				size: 150,
				d: Object(f.degreesToRadians)(69),
				sides: 3,
				outerSides: 3,
				outerSize: .3,
				color: c.CELESTIAL_COLOR,
				barrels: T,
				gadgets: [],
				layers: [{
					size: .35,
					sides: 3,
					outerSides: -3,
					outerSize: .5
				}]
			}, {
				x: -700,
				y: -600,
				size: 120,
				d: Object(f.degreesToRadians)(35),
				sides: 3,
				outerSides: 0,
				outerSize: 0,
				color: c.CELESTIAL_COLOR,
				barrels: O,
				gadgets: x,
				layers: [{
					size: .6,
					sides: 3
				}]
			}, {
				x: -840,
				y: 400,
				size: 120,
				d: Object(f.degreesToRadians)(-72),
				sides: 3,
				outerSides: 3,
				outerSize: .5,
				color: c.CELESTIAL_COLOR,
				barrels: w,
				gadgets: [],
				layers: [{
					size: .8,
					sides: 3
				}, {
					size: .4,
					sides: 3
				}]
			}],
			polygons: [],
			dimension: {
				visual: {
					gridSize: 120,
					showMinimap: !1,
					backgroundColor: "#303030",
					gridColor: "#232323",
					wallColor: "#00000054",
					particles: {
						spawnrate: .45 / (c.CAMERA_SIZE * c.CAMERA_SIZE),
						speed: {
							min: 8,
							max: 15
						},
						d: {
							min: 0 + k,
							max: 90 + k
						},
						size: {
							min: 40,
							max: 150
						},
						lifetime: {
							min: 30,
							max: 60
						},
						sides: {
							min: 0,
							max: 0
						},
						transparency: {
							min: .5,
							max: .8
						},
						color: {
							min: "#595959",
							max: "#4E4D4D"
						}
					},
					darkness: {
						intensity: 1,
						color: "#000000"
					},
					lights: [{
						x: 0,
						y: 0,
						size: 300,
						d: 0,
						sides: 0,
						transparency: 1
					}, {
						x: 800,
						y: -400,
						size: 180,
						d: 0,
						sides: 0,
						transparency: .5
					}, {
						x: -700,
						y: 600,
						size: 180,
						d: 0,
						sides: 0,
						transparency: .5
					}, {
						x: -840,
						y: -400,
						size: 225,
						d: 0,
						sides: 0,
						transparency: .5
					}, {
						x: 600,
						y: 600,
						size: 180,
						d: 0,
						sides: 0,
						transparency: .5
					}]
				},
				bases: [],
				walls: [],
				gates: [],
				mapSize: 3e3,
				trueMapSize: 1
			}
		}],
		L = n(5),
		U = n(3);

	function N(e, t) {
		return function(e) {
			if (Array.isArray(e)) return e
		}(e) || function(e, t) {
			var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
			if (null == n) return;
			var r, a, o = [],
				i = !0,
				u = !1;
			try {
				for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0);
			} catch (e) {
				u = !0, a = e
			} finally {
				try {
					i || null == n.return || n.return()
				} finally {
					if (u) throw a
				}
			}
			return o
		}(e, t) || function(e, t) {
			if (!e) return;
			if ("string" == typeof e) return z(e, t);
			var n = Object.prototype.toString.call(e).slice(8, -1);
			"Object" === n && e.constructor && (n = e.constructor.name);
			if ("Map" === n || "Set" === n) return Array.from(e);
			if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return z(e, t)
		}(e, t) || function() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}()
	}

	function z(e, t) {
		(null == t || t > e.length) && (t = e.length);
		for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
		return r
	}
	var W = n(2),
		K = document.getElementById("ping"),
		G = document.getElementById("server-tick-time"),
		Y = document.getElementById("client-tick-time"),
		F = document.getElementById("fps"),
		H = document.getElementById("player-count"),
		q = document.getElementById("total-players"),
		X = document.getElementById("extra-performance-info"),
		V = document.getElementById("position"),
		J = document.getElementById("server-name"),
		Z = (document.getElementById("server-speed"), document.getElementById("chat")),
		$ = Array.from(document.getElementsByClassName("hud")),
		Q = !0,
		ee = !1,
		te = !1,
		ne = [],
		re = [],
		ae = 0;

	function oe() {
		ee = !0, re = ne, ne = []
	}

	function ie() {
		te = !0
	}

	function ue(e) {
		(Q = e) ? (clearTimeout(void 0), $.forEach((function(e) {
			e.classList.remove("hidden")
		}))) : (clearTimeout(void 0), $.forEach((function(e) {
			e.classList.add("hidden")
		})))
	}
	var se = !0;

	function ce(e) {
		(se = e) && U.f.showChat ? Z.classList.remove("hidden") : Z.classList.add("hidden")
	}
	var le, de, fe = !0,
		he = 0,
		pe = 0,
		ge = 0,
		ve = 0,
		_e = 0,
		me = 0,
		ye = !1,
		be = c.TEAM_COLORS[10],
		Ee = [],
		Oe = "main",
		Te = 0,
		Me = {},
		we = -400;

	function Se(e) {
		Te = e
	}
	var Ae = Date.now(),
		Re = performance.now(),
		Ie = 16.6666667,
		Pe = null,
		xe = document.getElementById("overlay-canvas"),
		Ce = document.getElementById("darkness-canvas"),
		Be = document.getElementById("render-canvas"),
		De = document.getElementById("hud-canvas"),
		ke = document.getElementById("ui-canvas"),
		je = document.getElementById("game-canvas"),
		Le = je.getContext("2d");
	nt();
	var Ue = 1,
		Ne = 1,
		ze = 0,
		We = 0,
		Ke = W.MAP_SIZE,
		Ge = 1,
		Ye = 0,
		Fe = 0;

	function He(e) {
		de = Object(o.g)(e)
	}

	function qe(e) {
		e = Object(d.i)(pe, e), pe = he, he = Math.round(10 * e) / 10
	}

	function Xe() {
		dt = !1;
		var e = Date.now();
		Re = performance.now(), Ie = (e - Ae) / 1e3, Ae = e;
		var t = performance.now();
		Object(o.e)();
		try {
			! function(e) {
				Ee.forEach((function(t) {
					if (t.lifetime -= e, t.x += 60 * t.xVel * e, t.y += 60 * t.yVel * e, 1 != t.friction) {
						var n = 1 - 60 * (1 - t.friction) * e;
						t.xVel *= n, t.yVel *= n
					}
					t.lifetime < 0 && Ee.splice(Ee.indexOf(t), 1)
				}))
			}(Ie), un(Ie);
			e: if (fe) {
				var n = Object(o.c)();
				if (n == {} || null == n) return;
				var r = n.tanks,
					l = n.polygons,
					h = n.bullets,
					p = n.rifts,
					g = n.mapSize,
					v = (n.tickTime, n.x),
					_ = n.y;
				if (null != g) Ne = Object(d.q)(Ne, 2 * W.CAMERA_SIZE, .05), Ue = Ne / Math.max(je.height, je.width), Ge = W.STROKE_SIZE / Ue, v && _ && (ze = Object(d.q)(ze, v, .2) + rn, We = Object(d.q)(We, _, .2) + an), Ke = g, Dn(), Qe(l, r, h, p, null), Le = je.getContext("2d");
				else {
					Ne = Object(d.q)(Ne, 1 * W.CAMERA_SIZE, .05), Ue = Ne / Math.max(je.height, je.width);
					var m = e / 7500;
					ze = 200 * Math.cos(m), We = 200 * Math.sin(m);
					var y = j[Te];
					Ke = y.dimension.mapSize, Dn(!0);
					for (var b = 0; b < y.tanks.length; b++) {
						var E = y.tanks[b];
						fn(E.x, E.y, E.size, E.d, E.sides, E.outerSides, E.outerSize, E.color, E.barrels, E.gadgets, E.layers)
					}
					for (var O = 0; O < y.tanks.length; O++) {
						var T = y.tanks[O];
						T.y *= -1, T.lastColor = T.color, pn(T), T.y *= -1
					}
					for (var M = 0; M < y.polygons.length; M++) {
						var w = y.polygons[M];
						dn(w.x, w.y, w.level, w.d)
					}
					Qe([], [], [], [], null), Le = je.getContext("2d")
				}
				if (1 == u.mainMenuState) {
					(Le = xe.getContext("2d")).clearRect(0, 0, xe.width, xe.height);
					for (var S = xe.width / 2, A = xe.height / 2 - 15 * tt, R = de.isCelestial ? 100 : 50, I = Pt / 4, P = ht(_t(de.team, de.team, de.id, de.id), de.isInvulnurable, de.radiant), x = 0; x < de.gadgets.length; x++) {
						var C = de.gadgets[x];
						C.animTime = 0, 0 == C.type && (C.rot = -Pt / 15)
					}
					for (var B = 0; B < de.barrels.length; B++) {
						de.barrels[B].animTime = 0
					}
					de.outerSize > 0 && $t(S, A, R + de.outerSize * R, W.SPIKE_COLOR, de.outerSides, I, !1, 1, R), mn(S, A, R, I, de.barrels, !1, 1), $t(S, A, R, P, de.sides, I, !1, 1), hn(S, A, I, R, P, de.layers, 0, de.radiant, !1, !1, 1), vn(S, A, R, I, de.gadgets, P, !1, 1), Le = je.getContext("2d")
				}
			} else {
				var D = Object(o.c)();
				if (Object(a.isEmpty)(D)) {
					Dn();
					break e
				}
				var k = D.me,
					z = D.tanks,
					J = D.polygons,
					Z = D.bullets,
					$ = D.rifts,
					Q = D.mapSize,
					oe = D.tickTime,
					ie = (D.dt, D.dimension),
					ue = D.cameraSizeMultiplier;
				if (Oe = ie, !k) break e;
				if (oe && !Number.isNaN(oe)) {
					var se = Object(d.i)(ve, oe);
					ve = ge, ge = Math.round(10 * se) / 10
				}
				be = ht(_t(k.team, k.team, k.id, k.id), k.isInvulnurable, k.radiant), Object(i.d)(), i.a && Object(i.n)(i.m + i.b * W.AUTO_SPIN_SPEED * Ie), k.d = i.m, L.e && L.d && (L.c.barrels && (k.barrels = L.c.barrels), null != L.b.gadgets && (k.gadgets = L.b.gadgets), null != L.b.layers && (k.layers = L.b.layers), null != L.b.outerSides && (k.outerSides = L.b.outerSides), null != L.b.outerSize && (k.outerSize = L.b.outerSize), null != L.b.sides && (k.sides = L.b.sides), null != L.b.radiant && (k.radiant = L.b.radiant), null != L.b.team && (k.team = L.b.team), null != L.b.visualTeam && (k.team = L.b.visualTeam)), Ke = Q, Object.entries(d.c).forEach((function(e) {
						var t = N(e, 2),
							n = t[0],
							r = t[1];
						r.forEach((function(e) {
							e.time -= Ie, e.time < 0 && r.splice(r.indexOf(e), 1)
						})), 0 == r.length && delete d.c[n]
					})), d.r.forEach((function(e) {
						e.time -= Ie, e.time < 0 && d.r.splice(d.r.indexOf(e), 1)
					})), U.f.staticCamera ? (ze = k.x + rn, We = k.y + an) : (ze = Object(d.q)(ze, k.x, .2) + rn, We = Object(d.q)(We, k.y, .2) + an), Ye = k.x - ze, Fe = k.y - We, k.size >= .1 && (Ne = Object(d.q)(Ne, (.8 + k.size / 30 * .2) * W.CAMERA_SIZE * (ue || 1), .05), Ue = Ne / Math.max(je.height, je.width)), Ge = W.STROKE_SIZE / Ue, Dn(), Qe(J, z, Z, $, k),
					function(e, t) {
						U.f.minimap && !L.d && function(e, t) {
							var n, r = s.b[Oe];
							n = r || s.a;
							var a = Ke / n.trueMapSize,
								o = Me.visual.showMinimap,
								i = !1;
							e && ((i = e.x > -a && e.x < a && e.y > -a && e.y < a) || (o = !1));
							Yt = Object(d.q)(Yt, o ? .5 : 0, .01), Le.globalAlpha = Yt, Le.fillStyle = n.visual.backgroundColor, Le.fillRect(10, 10, 150, 150);
							for (var u = 0; u < n.bases.length; u++) {
								var c = n.bases[u];
								Le.fillStyle = _t(0, c.team, 0, 0);
								var l = c.width * n.trueMapSize,
									h = c.height * n.trueMapSize;
								Le.fillRect(85 - 150 * (-c.x / n.trueMapSize + l / 2) / 2, 85 - 150 * (-c.y / n.trueMapSize + h / 2) / 2, 150 * l / 2, 150 * h / 2)
							}
							if (e && i) {
								var p = 85 + e.x / a * 150 / 2,
									g = 85 + e.y / a * 150 / 2;
								! function(e, t, n) {
									var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 6,
										a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 10;
									Le.fillStyle = "black", Le.translate(e, t), Le.rotate(n - Object(f.degreesToRadians)(90)), Le.beginPath(), Le.moveTo(a / 2, 0), Le.lineTo(a / -2, r / 2), Le.lineTo(a / -2, r / -2), Le.fill(), Le.setTransform(1, 0, 0, 1, 0, 0)
								}(p, g, e.d)
							}
							if (t) {
								Le.globalAlpha = .5 * Yt;
								for (var v = 0; v < t.length; v++) {
									var _ = t[v];
									if (_.x > -a && _.x < a && _.y > -a && _.y < a) {
										var m = 85 + _.x / a * 150 / 2,
											y = 85 + _.y / a * 150 / 2;
										Ft(m, y, _)
									}
								}
								Le.globalAlpha = Yt
							}
							Le.lineCap = "round", Le.strokeStyle = "black", Le.lineWidth = W.STROKE_SIZE, Le.strokeRect(10, 10, 150, 150), Le.globalAlpha = 1
						}(e, t);
						Lt = Object(d.q)(Lt, i.s ? 1 : 0, .05), jt = Object(d.q)(jt, i.c ? 1 : 0, .05), Lt > .05 && zt(!0, e.isCelestial);
						jt > .05 && zt(!1, e.isCelestial);
						var n = je.width / 2,
							r = je.height;
						Le.lineCap = "round", Le.strokeStyle = "black", Le.lineWidth = 30, Le.beginPath(), Le.moveTo(-180 + n, r - 20), Le.lineTo(180 + n, r - 20), Le.stroke(), Le.strokeStyle = be, Le.lineWidth = 30 - 2 * W.STROKE_SIZE, Le.beginPath(), Le.moveTo(-180 + n, r - 20), Le.lineTo(360 * Math.min(Math.max(e.score / e.xpToNextLevel, 0), 1) - 180 + n, r - 20), Le.stroke();
						var a = e.totalScore;
						d.p && d.p.entries[0] && (a = d.p.entries[0].score);
						var o = Math.min(Math.max(e.totalScore / a, 0), 1) || 0;
						Le.lineCap = "round", Le.strokeStyle = "black", Le.lineWidth = 25, Le.beginPath(), Le.moveTo(-135 + n, r - 50), Le.lineTo(135 + n, r - 50), Le.stroke(), Le.strokeStyle = be, Le.lineWidth -= 2 * W.STROKE_SIZE, Le.beginPath(), Le.moveTo(-135 + n, r - 50), Le.lineTo(270 * o - 135 + n, r - 50), Le.stroke(), kt(n, r - 19, Object(u.roundWithEnding)(e.score) + " / " + Object(u.roundWithEnding)(e.xpToNextLevel), 22, W.TEXT_STROKE / 2), kt(n, r - 48.5, "Score: ".concat(Object(u.roundWithEnding)(e.totalScore)), 18, W.TEXT_STROKE / 2), kt(n, r - 77, "Level ".concat(e.level, " ").concat(e.className), 18, W.TEXT_STROKE), U.f.showNames && kt(n, r - 113, e.name, 50, W.TEXT_STROKE);
						L.d || (function() {
							At = !1;
							for (var e = 0; e < d.D.length; e++)
								if (d.D[e] < W.MAX_UPGRADE_POINTS) {
									At = !0;
									break
								}(we = Object(d.q)(we, d.C > 0 && At || i.k ? 0 : -400, .05)) > - 380 && (function(e) {
								for (var t = 0 + e + (L.e ? 60 : 0), n = je.height, r = 0; r < W.UPGRADE_COUNT; r++) xt(t + 20, n - 20 - 32 * r, W.WEAPON_UPGRADE_NAMES[W.UPGRADE_COUNT - r - 1], W.UPGRADE_COUNT - r, W.UPGRADE_COLORS[W.UPGRADE_COUNT - r - 1], 1);
								d.C > 0 && At && kt(t + 320, n - 23, "x".concat(d.C), 30, W.TEXT_STROKE, 1)
							}(we), function(e) {
								for (var t = je.width + e, n = je.height, r = 0; r < W.UPGRADE_COUNT; r++) xt(t - 20, n - 20 - 32 * r, W.BODY_UPGRADE_NAMES[W.UPGRADE_COUNT - r - 1], W.UPGRADE_COUNT - r + 4, W.UPGRADE_COLORS[W.UPGRADE_COUNT - r - 1], -1);
								d.C > 0 && At && kt(t - 320, n - 23, "".concat(d.C, "x"), 30, W.TEXT_STROKE, 1)
							}(-we))
						}(), function() {
							var e = 0,
								t = je.height;
							Rt = Object(d.q)(Rt, d.b.length > 0 ? 75 : -400, .05), It = Object(d.q)(It, d.J.length > 0 ? 75 : -400, .05);
							var n = d.J.length > 0 ? d.J : d.o,
								r = d.b.length > 0 ? d.b : d.n,
								a = 0,
								o = 0;
							if (0 != n.length && It > -380) {
								for (var i = 0; i < n.length; i++) {
									var u = n[i];
									Ct(e + It + 120 * a, t - 200 - 120 * o, c.POLYGON_COLORS[i], u, !0), 3 == ++a && (a = 0, o++)
								}
								2 != n[0].upgradeType && (o += a > 0 ? 1 : 0, Bt(e + It + 120 * (a = 0), t - 200 - 120 * o))
							}
							if (a = 0, o = 0, 0 != r.length && Rt > -380) {
								e = je.width;
								for (var s = 0; s < r.length; s++) {
									var l = r[s];
									Ct(e - Rt - 120 * a, t - 200 - 120 * o, c.POLYGON_COLORS[s], l, !1), 3 == ++a && (a = 0, o++)
								}
								2 != r[0].upgradeType && (o += a > 0 ? 1 : 0, Bt(e - Rt - 120 * (a = 0), t - 200 - 120 * o))
							}
						}(), function(e) {
							var t = je.width;
							if (kt(t - 140, 30, "LEADERBOARD", 30, W.TEXT_STROKE), d.p)
								for (var n = Math.max(d.p.entries.length, 5), r = 200 / n, a = t - 140, o = 40 + 150 / n, i = 0; i < d.p.entries.length; i++) {
									var u = d.p.entries[i],
										s = ht((1 == u.type ? c.POLYGON_COLORS[u.color] : null) || _t(e.team, u.team, e.id, u.id), !1, u.radiant),
										l = o + r * i,
										f = 150 / n,
										h = 200 * u.scoreRatio;
									if (d.p.showPlayers) {
										var p = u.size / n,
											g = Pt / 10,
											v = a - 100 - 150 / n;
										if (1 == !u.type)
											for (var _ = 0; _ < u.gadgets.length; _++) {
												var m = u.gadgets[_];
												0 == m.type && (m.rot = -Pt / 15)
											}
										u.outerSize > 0 && $t(v, l, p + u.outerSize * p, W.SPIKE_COLOR, u.outerSides, g, !1, .2, p), 1 == !u.type && mn(v, l, p, g, u.barrels, !1, .2), $t(v, l, p, s, u.sides, g, !1, .2), 1 == !u.type && (hn(v, l, g, p, s, u.layers, 0, u.radiant, !1, !1, .2), vn(v, l, p, g, u.gadgets, s, !1, .2))
									}
									Le.lineCap = "round", Le.strokeStyle = "black", Le.lineWidth = f, Le.beginPath(), Le.moveTo(a - 100, l), Le.lineTo(a + 100, l), Le.stroke(), Le.lineWidth = f - 10 * W.STROKE_SIZE / n, Le.strokeStyle = s, Le.beginPath(), Le.moveTo(a - 100, l), Le.lineTo(a - 100 + h, l), Le.stroke(), kt(a, l + 1, d.p.showPlayers ? U.f.showNames ? "".concat(u.name.slice(0, 3 * n)).concat("" != u.name ? " - " : "").concat(u.formattedScore) : "".concat(u.formattedScore) : u.name.slice(0, 3 * n), Math.min(120 / n, 20), 2.5 * W.TEXT_STROKE / n)
								}
						}(e))
					}(k, $),
					function() {
						var e = je.width / 2,
							t = 0;
						d.r.forEach((function(n) {
							var r = wt(n.time, W.NOTIF_STAY_TIME);
							Dt(e, 50 + 50 * t, n.message, 25, 0, !0, r), t += r
						})), Le.globalAlpha = 1
					}(), Le = je.getContext("2d");
				var ce = Math.round(10 * (performance.now() - t)) / 10;
				Number.isNaN(ce) || (ce = Object(d.i)(me, ce), me = _e, _e = Math.round(10 * ce) / 10), Ze(Ie), K.textContent = "Ping: ".concat(he, "ms"), G.textContent = "Server Tick Time: ".concat(ge, "ms"), Y.textContent = "Client Tick Time: ".concat(_e, "ms"), F.textContent = "FPS: ".concat(Je), H.textContent = "Player Count: ".concat(d.p ? d.p.showPlayers ? d.p.playerCount : "???" : 0), q.textContent = "Global Player Count: ".concat(d.p && d.p.showPlayers ? Math.max(d.E.players + 1, d.p.playerCount) : "???"), X.textContent = "Extra Performance Info: T:".concat(z.length + 1, " S:").concat(J.length, " B:").concat(Z.length, " P:").concat(Ee.length, "/").concat(c.MAX_PARTICLES), V.textContent = "Position: ".concat(Object(f.round)(k.x, 2), ", ").concat(Object(f.round)(-k.y, 2)), K.style.color = he > 250 ? he > 500 ? "red" : "yellow" : "white", G.style.color = ge > 8 ? ge > 1e3 / c.SERVER_TPS ? "red" : "yellow" : "white", Y.style.color = _e > 5 ? _e > 16.66 ? "red" : "yellow" : "white", F.style.color = Je < 50 ? Je < 15 ? "red" : "yellow" : "white", ye = !1
			}
		} catch (e) {
			console.error(e)
		} finally {
			if (ee) {
				if (0 == ne.length) Object(L.j)(L.h.type, L.h.index);
				else {
					Object(a.isEqual)(ne, re) ? ae++ : ae = 0;
					var le = ne[ne.length - 1 - ae] || L.h;
					le == L.h && (ae = -1), Object(L.j)(le.type, le.index)
				}
				ee = !1
			}
			te = !1, setTimeout(Ve, 1)
		}
	}

	function Ve() {
		requestAnimationFrame((function() {
			Xe()
		}))
	}
	var Je = 60,
		Ze = Object(r.throttle)(500, (function(e) {
			Je = Math.round(1 / e)
		}));

	function $e() {
		K.classList.toggle("hidden", !U.f.showPing), G.classList.toggle("hidden", !U.f.showTickTime), Y.classList.toggle("hidden", !U.f.showTickTime), F.classList.toggle("hidden", !U.f.showFPS), H.classList.toggle("hidden", !U.f.showPlayerCount), q.classList.toggle("hidden", !U.f.showGlobalPlayerCount), X.classList.toggle("hidden", !U.f.showExtraPerformanceInfo), V.classList.toggle("hidden", !U.f.showPosition), J.classList.toggle("hidden", !U.f.showServerName)
	}

	function Qe(e, t, n, r, a) {
		if (Pe = a, Pt += W.AUTO_SPIN_SPEED * Ie, Ee.forEach((function(e) {
				rt(e) && e.below && Jt(e)
			})), function() {
				for (var e = Me.gates, t = 0; t < e.length; t++) {
					var n = e[t],
						r = {
							x: n.x * Ke,
							y: n.y * Ke,
							size: n.size / 2 * Ke
						};
					if (rt({
							x: r.x,
							y: r.y,
							size: r.size
						}, 3)) switch (n.type) {
						case 0:
							var a = (P = performance.now() / 2500) + .5,
								o = P - Math.floor(P),
								i = a - Math.floor(a),
								u = 1 + 9 * o,
								s = 1 + 9 * i;
							if (Le.globalAlpha = .2 * Math.min(2 * (1 - o), 1), Zt(r.x, r.y, 30 * u, r.size, n.rot, "#ffffff", !0), Le.globalAlpha = .2 * Math.min(2 * (1 - i), 1), Zt(r.x, r.y, 30 * s, r.size, n.rot, "#ffffff", !0), Le.globalAlpha = 1, Zt(r.x, r.y, 30, r.size, n.rot, "#000000", !0), U.f.showParticles)
								for (var c = .0025 * r.size, l = Math.random(); l < c; l += Math.random()) {
									var h = 6 * Object(f.generateSign)(),
										p = Object(d.j)(.5, .8) * (100 / 1.5),
										g = (2 * Math.random() - 1) * (r.size - p),
										v = r.x + Math.cos(n.rot + yn) * g,
										_ = r.y + Math.sin(n.rot + yn) * g;
									cn(v, _, h * Math.cos(n.rot), h * Math.sin(n.rot), p, Math.random() * Math.PI * 2, 0, "#ffffff", 50, 1, 0, 1, !0)
								}
							break;
						case 1:
							var m = bt(Tt(ft).substr(1), "000000", n.open ? .5 : 1),
								y = (a = (P = performance.now() / (n.open ? -2500 : 1e3)) + .5, o = P - Math.floor(P), i = a - Math.floor(a), n.open ? 9 : 14);
							u = 1 + o * y, s = 1 + i * y;
							if (Le.globalAlpha = .2 * Math.min(2 * (1 - o), 1), Zt(r.x, r.y, 30 * u, r.size, n.rot, m, !0), Le.globalAlpha = .2 * Math.min(2 * (1 - i), 1), Zt(r.x, r.y, 30 * s, r.size, n.rot, m, !0), Le.globalAlpha = 1, Zt(r.x, r.y, 30, r.size, n.rot, m, !0), U.f.showParticles)
								for (var b = .0035 * r.size, E = Math.random(); E < b; E += Math.random()) {
									var O = Object(d.j)(.06, .12) * (n.open ? 30 : 100) * Object(f.generateSign)(),
										T = Object(d.j)(.3, .6) * (100 / 1.5),
										M = (2 * Math.random() - 1) * (r.size - T),
										w = r.x + Math.cos(n.rot + yn) * M,
										S = r.y + Math.sin(n.rot + yn) * M,
										A = n.rot + .3 * (2 * Math.random() - 1);
									cn(w, S, O * Math.cos(A), O * Math.sin(A), T, Math.random() * Math.PI * 2, 0, "#000000", 50, 1, n.open ? 1 : 10, 1, !0)
								}
							break;
						case 3:
							if (n.open) var R = [
								[-1, -.3, 2.5, "#000000"],
								[1, -.3, 2.5, "#000000"]
							];
							else R = [
								[-1, -.5, 2.5, "#000000"],
								[1, 1, 4.5, "#ffffff"]
							];
							for (var I = 0; I < R.length; I++) {
								var P, x = R[I];
								a = (P = performance.now() / 2500 * x[1]) + .5, o = P - Math.floor(P), i = a - Math.floor(a), u = .5 + o * x[2], s = .5 + i * x[2];
								Le.globalAlpha = .2 * Math.min(2 * (1 - o), 1);
								var C = 30 * u;
								Zt(r.x - Math.sin(-n.rot - yn) * C * x[0], r.y - Math.cos(-n.rot - yn) * C * x[0], C, r.size, n.rot, x[3], !0), Le.globalAlpha = .2 * Math.min(2 * (1 - i), 1);
								var B = 30 * s;
								Zt(r.x - Math.sin(-n.rot - yn) * B * x[0], r.y - Math.cos(-n.rot - yn) * B * x[0], B, r.size, n.rot, x[3], !0), Le.globalAlpha = 1
							}
							for (var D = [
									[60, -7, .3, "#000000"],
									[40, -5, .3, "#000000"]
								], k = 0; k < D.length; k++)
								for (var j = D[k], L = j[0], N = 2 * (r.size - L), z = Math.floor(Object(f.round)(2 * r.size, 5) / (1.5 * L)), W = 0; W < z; W++) {
									var K = n.rot + P * (W % 2 ? -1 : 1) * (n.open ? -.7 : 1),
										G = ((z - 1 ? W / (z - 1) : 0) - .5) * N;
									$t(r.x - Math.cos(n.rot + yn) * G + Math.sin(n.rot + yn) * L / 2, r.y + Math.sin(n.rot + yn) * G - Math.cos(n.rot + yn) * L / 2, L, j[3], j[1], K, !0, 1, j[2] * L)
								}
							if (Zt(r.x, r.y, 30, r.size, n.rot, "#000000", !0), U.f.showParticles) {
								if (n.open) var Y = [
									[-1, 1, .5, .5, "#000000"],
									[-1, 1, -.5, .5, "#000000"]
								];
								else Y = [
									[-1, 1, 1, 1, "#ffffff"],
									[1, 1, .5, .5, "#000000"]
								];
								for (k = 0; k < Y.length; k++)
									for (var F = Y[k], H = .00125 * r.size * F[1], q = Math.random(); q < H; q += Math.random()) {
										var X = 6 * F[2],
											V = Object(d.j)(.5, .8) * (100 / 1.5) * F[3],
											J = (2 * Math.random() - 1) * (r.size - V),
											Z = r.x + Math.cos(n.rot + yn) * J,
											$ = r.y + Math.sin(n.rot + yn) * J;
										if (1 == F[0]) {
											var Q = 50 * X;
											Z += Math.sin(-n.rot - yn) * Q, $ += Math.cos(-n.rot - yn) * Q
										}
										cn(Z, $, X * Math.sin(-n.rot + yn), X * Math.cos(-n.rot + yn), V, Math.random() * Math.PI * 2, 0, F[4], 50, 1, 0, 1, !0)
									}
							}
					}
				}
			}(), r.forEach((function(e) {
				rt(e, 12) && function(e, t) {
					var n = t.x,
						r = t.y,
						a = t.size;
					switch (Le.globalAlpha = 1, t.type) {
						case 0:
							var o = ht("#ffffff", !1, 10);
							sn(n, r, .1 * t.size);
							var i = (E = performance.now() / 500) + .5,
								u = E - Math.floor(E),
								s = i - Math.floor(i),
								c = 10 - 9 * u,
								l = 10 - 9 * s;
							if (Le.globalAlpha = .2 * Math.min(2 * u, 1), $t(t.x, t.y, t.size * c, o, 0, 0, !0), Le.globalAlpha = .2 * Math.min(2 * s, 1), $t(t.x, t.y, t.size * l, o, 0, 0, !0), Le.globalAlpha = 1, U.f.showParticles)
								for (var f = (27 + a / 8) / 30, h = Math.random(); h < f; h += Math.random()) {
									var p = Math.random() * Math.PI * 2,
										g = Object(d.j)(.03 * a, .06 * a),
										v = Object(d.j)(30, 60);
									cn(n, r, g * Math.sin(p), g * Math.cos(p), Object(d.j)(.1, .6) * (15 + a / 2), Math.random() * Math.PI * 2, 0, "#ffffff", v, 1, 10)
								} else $t(t.x, t.y, t.size, o, 0, 0, !0);
							break;
						case 1:
							switch (sn(n, r, 1.3), t.subtype) {
								case 0:
									o = vt(t.gamemode), i = (E = performance.now() / 2500) + .5, u = E - Math.floor(E), s = i - Math.floor(i), c = 1 + 3 * u, l = 1 + 3 * s;
									Le.globalAlpha = .2 * Math.min(2 * (1 - u), 1), $t(t.x, t.y, t.size * c, o, 0, 0, !0), Le.globalAlpha = .2 * Math.min(2 * (1 - s), 1), $t(t.x, t.y, t.size * l, o, 0, 0, !0), Le.globalAlpha = 1;
									var _ = "#000000";
									if (0 !== (O = 1 - Math.min(t.lifetime / 20, 1)) && (_ = Et(_, Math.floor(256 * O))), $t(t.x, t.y, t.size, _, 0, 0, !0), U.f.showParticles)
										for (var m = Math.random(); m < .75; m += Math.random()) {
											var y = Math.random() * Math.PI * 2,
												b = .06 * t.size;
											cn(n, r, b * Math.sin(y), b * Math.cos(y), Object(d.j)(.5, .8) * (t.size / 1.5), Math.random() * Math.PI * 2, 0, "#ffffff", 50, 1, 0, 1, !0)
										}
									break;
								case 1:
									var E = performance.now() / 2500,
										O = (_ = "#000000", o = vt(t.gamemode), 1 - Math.min(t.lifetime / 20, 1)),
										T = 2 * -E,
										M = T + .5;
									u = T - Math.floor(T), s = M - Math.floor(M), c = 1 + 5 * u, l = 1 + 5 * s;
									if (Le.globalAlpha = .2 * Math.min(2 * (1 - u), 1), $t(t.x, t.y, t.size * c, o, 0, 0, !0), Le.globalAlpha = .2 * Math.min(2 * (1 - s), 1), $t(t.x, t.y, t.size * l, o, 0, 0, !0), Le.globalAlpha = 1, $t(t.x, t.y, 4 * t.size, "#ffffff", -3, 20 * Math.cos(E / 10) * t.sign, !0, 1, .4 * t.size), $t(t.x, t.y, .5 * t.size * (Math.sin(10 * E + Math.PI) + 4), "#ffffff", -6, 4 * -E * t.sign, !0), $t(t.x, t.y, .5 * t.size * (Math.sin(10 * E) + 4), "#ffffff", -6, 4 * E * t.sign, !0), Le.globalAlpha = 1, 0 !== O && (_ = Et(_, Math.floor(256 * O))), $t(t.x, t.y, 1.3 * t.size, _, -8, -E * t.sign, !0, 1, .4 * t.size), $t(t.x, t.y, 1.6 * t.size, _, -6, E * t.sign, !0, 1, .4 * t.size), $t(t.x, t.y, t.size, _, 0, 0, !0), U.f.showParticles)
										for (var w = .08 * t.size, S = 50 * w, A = Math.random(); A < .2; A += Math.random()) {
											var R = Math.random() * Math.PI * 2,
												I = Math.sin(R),
												P = Math.cos(R);
											cn(n - S * I, r - S * P, w * I, w * P, Object(d.j)(.5, .8) * (t.size / 1.5), Math.random() * Math.PI * 2, 0, "#ffffff", 50, 1, 0, 1, !0)
										}
							}
							break;
						case 2:
							var x = ht(o = _t(e ? e.team : 0, t.lTeam, e ? e.id : "", t.lID), !1, t.lRadiant),
								C = (E = performance.now()) * t.sign / 1e3;
							if (Le.globalAlpha = .5, $t(t.x, t.y, t.size * (2 + Math.cos(E / 1e3) / 2), x, 4, C, !0), Le.globalAlpha = 1, $t(t.x, t.y, t.size, x, 4, C, !0), U.f.showParticles) {
								if (Math.random() < 1 / (300 / t.size)) {
									var B = Math.random() * Math.PI * 2,
										D = Math.random(),
										k = D * t.size * (2 + Math.cos(E / 1e3) / 2);
									cn(t.x + k * Math.sin(B), t.y + k * Math.cos(B), 1 * Math.random() - .5, 1 * Math.random() - .5, 18 - 8 * D, Math.random() * Math.PI * 2, 4, o, 30, .5, t.lRadiant)
								}
								if (t.lRadiant > 0 && Math.random() < 1 / (600 / t.size)) {
									var j = Math.random() * Math.PI * 2,
										L = Math.random() * t.size;
									cn(t.x + L * Math.sin(j), t.y + L * Math.cos(j), (1 * Math.random() - .5) * t.lRadiant, (1 * Math.random() - .5) * t.lRadiant, Object(d.j)(6, 6 * t.lRadiant), Math.random(), 0, o, 60, 1, t.lRadiant)
								}
							}
					}
				}(a, e)
			})), t.forEach((function(e) {
				Vt(a, e)
			})), e.forEach((function(e) {
				Vt(a, e, W.POLYGON_COLORS[e.color] || (a ? _t(a.team, e.team, a.id, e.id) : _t(e.team, e.team, 0, 0)))
			})), n.forEach((function(e) {
				Vt(a, e)
			})), a && Vt(a, a), e.forEach((function(e) {
				Xt(e, W.POLYGON_COLORS[e.color] || (a ? _t(a.team, e.team, a.id, e.id) : _t(e.team, e.team, 0, 0)), e.sides, !1)
			})), a && qt(a, a), t.forEach((function(e) {
				qt(a, e)
			})), n.forEach((function(e) {
				! function(e, t) {
					var n, r = t.x,
						a = t.y;
					Le.globalAlpha = t.fadeTime, n = e ? null != t.color ? _t(e.team, t.color, e.id, t.parentID) : _t(e.team, t.team, e.id, t.parentID) : _t(0, t.team, 0, t.parentID);
					var o = Math.round(80 * (1 - t.damageTime || 0)),
						i = Et(ht(n, !1, t.radiant), o);
					t.lastColor = i;
					var u = t.size * (1 + .5 * (1 - (t.fadeTime || 1)));
					t.outerSize > 0 && $t(r, a, u + t.outerSize * u, W.SPIKE_COLOR, t.outerSides, t.d, !0, 1, u);
					t.barrels && t.barrels.length > 0 && mn(r, a, u, t.d, t.barrels, !0);
					$t(r, a, u, i, t.sides, t.d, !0), t.layers && hn(r, a, t.d, u, i, t.layers, o, t.radiant, !1);
					t.gadgets && t.gadgets.length > 0 && vn(r, a, u, t.d, t.gadgets, i, !0);
					Le.globalAlpha = 1
				}(a, e)
			})), n.forEach((function(e) {
				pn(e)
			})), a && pn(a), t.forEach((function(e) {
				pn(e)
			})), Ee.forEach((function(e) {
				rt(e) && !e.below && Jt(e)
			})), Le = Ce.getContext("2d"), Me.visual.darkness) {
			var o = je.width / 2 - ze / Ue,
				i = je.height / 2 - We / Ue;
			Le.globalAlpha = 1, Le.fillStyle = Me.visual.darkness.color, Le.fillRect(0, 0, Ce.width, Ce.height);
			var u = Me.visual.darkness.intensity * (1 + .1 * Math.sin(performance.now() / 1e3));
			if (a) {
				Cn(o + a.x / Ue, i + a.y / Ue, 4 * a.size / u / Ue, 1), Cn(o + a.x / Ue, i + a.y / Ue, 6 * a.size / u / Ue, .5), Rn(o, i, u, a), a.radiant > 0 && In(o, i, u, a);
				for (var s = 0; s < a.barrels.length; s++) {
					var c = a.barrels[s],
						l = c.distance + 2 * c.length,
						h = a.d + c.rot,
						p = a.x + (l * Math.sin(h) + c.offset * Math.sin(h + yn)) * a.size,
						g = a.y - (c.offset * Math.cos(h + yn) + l * Math.cos(h)) * a.size;
					Cn(o + p / Ue, i + g / Ue, 8 * a.size * c.width / u / Ue, .5), Pn(o + p / Ue, i + g / Ue, h, 8 * a.size * c.length / u / Ue, 8 * a.size * c.width / u / Ue, 2 * a.size * c.width / u / Ue, 1)
				}
			}
			t.forEach((function(e) {
				e.gadgets && Rn(o, i, u, e), e.radiant > 0 && In(o, i, u, e)
			})), e.forEach((function(e) {
				e.radiant > 0 && In(o, i, u, e)
			})), Ee.forEach((function(e) {
				rt(e) && e.radiant > 0 && function(e, t, n, r) {
					xn(e + r.x / Ue, t + r.y / Ue, r.d, Math.max(r.size, 1.2 * r.size / n) / Ue, r.sides, r.transparency * St(r.lifetime, r.maxLifetime) * (1 - 1 / (r.radiant + .5)))
				}(o, i, u, e)
			})), n.forEach((function(e) {
				e.gadgets && Rn(o, i, u, e), e.radiant > 0 && In(o, i, u, e)
			})), r.forEach((function(e) {
				if (rt(e, 12)) switch (e.type) {
					case 0:
						var t = (c = performance.now() / 500) + .5,
							n = 10 - 9 * (a = c - Math.floor(c)),
							r = 10 - 9 * (s = t - Math.floor(t));
						Cn(o + e.x / Ue, i + e.y / Ue, e.size * n / Ue, .3 * Math.min(2 * a, 1)), Cn(o + e.x / Ue, i + e.y / Ue, e.size * r / Ue, .3 * Math.min(2 * s, 1));
						break;
					case 1:
						switch (e.subtype) {
							case 0:
								t = (c = performance.now() / 2500) + .5, n = 1 + 3 * (a = c - Math.floor(c)), r = 1 + 3 * (s = t - Math.floor(t));
								Cn(o + e.x / Ue, i + e.y / Ue, e.size * n / Ue, .2 * Math.min(2 * (1 - a), 1)), Cn(o + e.x / Ue, i + e.y / Ue, e.size * r / Ue, .2 * Math.min(2 * (1 - s), 1));
								break;
							case 1:
								var a, s;
								t = (c = performance.now() / -1250) + .5, n = 1 + 5 * (a = c - Math.floor(c)), r = 1 + 5 * (s = t - Math.floor(t));
								Cn(o + e.x / Ue, i + e.y / Ue, e.size * n / Ue, .2 * Math.min(2 * (1 - a), 1)), Cn(o + e.x / Ue, i + e.y / Ue, e.size * r / Ue, .2 * Math.min(2 * (1 - s), 1))
						}
						break;
					case 2:
						var c, l = (c = performance.now()) * e.sign / 1e3;
						xn(o + e.x / Ue, i + e.y / Ue, l, 2 * e.size / u / Ue, 4, 1), Le.globalAlpha = .5, xn(o + e.x / Ue, i + e.y / Ue, l, 3 * e.size / u / Ue, 4, .5)
				}
			})), Me.gates.forEach((function(e) {
				var t = e.x * Ke,
					n = e.y * Ke,
					r = e.size / 2 * Ke;
				switch (e.type) {
					case 1:
						var a = performance.now() / (e.open ? -2500 : 1e3),
							u = a + .5,
							s = a - Math.floor(a),
							c = u - Math.floor(u),
							l = e.open ? 9 : 14,
							d = 1 + c * l;
						Bn(o + t / Ue, i + n / Ue, 30 * (1 + s * l) / Ue, r / Ue, e.rot, Math.min(2 * (1 - s), 1) * e.open ? .2 : .4), Bn(o + t / Ue, i + n / Ue, 30 * d / Ue, r / Ue, e.rot, Math.min(2 * (1 - c), 1) * e.open ? .2 : .4), Le.globalAlpha = 1, Bn(o + t / Ue, i + n / Ue, 30 / Ue, r / Ue, e.rot, e.open ? .5 : 1)
				}
			})), Me.visual.lights && Me.visual.lights.forEach((function(e) {
				xn(o + e.x / Ue, i + e.y / Ue, e.d, e.size / u / Ue, e.sides, e.transparency), xn(o + e.x / Ue, i + e.y / Ue, e.d, 1.5 * e.size / u / Ue, e.sides, .2 * e.transparency)
			}))
		} else Le.clearRect(0, 0, Ce.width, Ce.height);
		(Le = De.getContext("2d")).clearRect(0, 0, De.width, De.height), e.forEach((function(e) {
			en(e, W.POLYGON_COLORS[e.color] || (a ? _t(a.team, e.team, a.id, e.id) : _t(e.team, e.team, 0, 0)), e.showName, !1)
		})), a && Qt(a, a), t.forEach((function(e) {
			Qt(a, e)
		})), (Le = ke.getContext("2d")).clearRect(0, 0, ke.width, ke.height)
	}
	var et = 1,
		tt = 1;

	function nt() {
		et = Math.max(1, 800 / Math.min(window.innerWidth, window.innerHeight)), je.width = et * window.innerWidth, je.height = et * window.innerHeight, xe.width = je.width, xe.height = je.height, De.width = je.width, De.height = je.height, ke.width = je.width, ke.height = je.height, Ce.width = je.width, Ce.height = je.height, tt = Math.min(je.height, je.width) / 100, Object(u.setCanvasScale)(et)
	}

	function rt(e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
			n = Math.max(Math.abs(ze - e.x), Math.abs(We - e.y));
		return Ne / 2 > n - e.size * t
	}

	function at(e) {
		setTimeout((function() {
			if (U.f.showParticles) {
				var t, n = .2 * e.size,
					r = 0;
				switch (e.type) {
					case 0:
						switch (e.gateType) {
							case 1:
								t = 60, r = 1;
								break;
							case 3:
								t = 60
						}
						break;
					case 1:
						switch (e.gateType) {
							case 1:
								t = 100, r = 10;
								break;
							case 3:
								t = 100
						}
						break;
					case 2:
						switch (n *= e.power / 1e4, e.gateType) {
							case 1:
								t = 100, r = 10, n *= .125;
								break;
							case 3:
								t = 100, n *= .125
						}
				}
				for (var a = Math.random(); a < n; a += Math.random()) {
					var o = Object(d.j)(.12, .24) * t * (e.direction || Object(f.generateSign)()),
						i = Object(d.j)(.3, .6) * (100 / 1.5),
						u = (2 * Math.random() - 1) * (e.size - i),
						s = e.x + Math.cos(e.rot + yn) * u,
						c = e.y + Math.sin(e.rot + yn) * u,
						l = e.rot + .3 * (2 * Math.random() - 1);
					cn(s, c, o * Math.cos(l), o * Math.sin(l), i, Math.random() * Math.PI * 2, 0, "#000000", 50, 1, r, .95)
				}
			}
		}), U.f.renderDelay)
	}

	function ot(e) {
		setTimeout((function() {
			var t, n, r = e.size / 4;
			sn(e.x, e.y, .05 * e.size, .1 * Math.sqrt(e.size));
			for (var a = _t(null === (t = Pe) || void 0 === t ? void 0 : t.team, e.team, null === (n = Pe) || void 0 === n ? void 0 : n.id, e.id), o = Math.random(); o < r; o += Math.random()) {
				var i = Math.random() * Math.PI * 2,
					u = Object(d.j)(.08 * e.size, .15 * e.size),
					s = Object(d.j)(45, 75);
				cn(e.x, e.y, u * Math.sin(i), u * Math.cos(i), Object(d.j)(.15, .22) * e.size, Math.random() * Math.PI * 2, 4, a, s, 1, e.radiant, .95)
			}
		}), 1.2 * U.f.renderDelay)
	}

	function it(e) {
		setTimeout((function() {
			e.size = Math.min(e.size, 1e3);
			var t = e.size / 2;
			sn(e.x, e.y, .1 * e.size, .2 * Math.sqrt(e.size));
			for (var n = Math.random(); n < t; n += Math.random()) {
				var r = Math.random() * Math.PI * 2,
					a = Object(d.j)(.08 * e.size, .15 * e.size),
					o = Object(d.j)(45, 75);
				cn(e.x, e.y, a * Math.sin(r), a * Math.cos(r), Object(d.j)(.5, .8) * e.size, Math.random() * Math.PI * 2, 0, "#000000", o, 1, 0, 1)
			}
		}), U.f.renderDelay)
	}

	function ut(e) {
		setTimeout((function() {
			e.size = Math.min(e.size, 1e3);
			var t = e.size / 2;
			sn(e.x, e.y, .1 * e.size, .1 * Math.sqrt(e.size));
			for (var n = Math.random(); n < t; n += Math.random()) {
				var r = Math.random() * Math.PI * 2,
					a = Object(d.j)(.1 * e.size, .2 * e.size),
					o = Object(d.j)(30, 60);
				cn(e.x, e.y, a * Math.sin(r), a * Math.cos(r), Object(d.j)(.5, .8) * e.size, Math.random() * Math.PI * 2, 0, "#ffffff", o, 1, 0, .95)
			}
		}), U.f.renderDelay)
	}

	function st(e) {
		setTimeout((function() {
			var t = e.size;
			sn(e.x, e.y, .2 * e.size, .1 * Math.sqrt(e.size));
			for (var n = _t(Pe ? Pe.team : 0, e.team, Pe ? Pe.id : 0, e.id), r = Math.random(); r < t; r += Math.random()) {
				var a = Math.random() * Math.PI * 2,
					o = Object(d.j)(.1 * e.size, .2 * e.size),
					i = Object(d.j)(30, 60);
				cn(e.x, e.y, o * Math.sin(a), o * Math.cos(a), Object(d.j)(3, 12), Math.random() * Math.PI * 2, 0, n, i, 1, e.radiant, .95)
			}
		}), 1.2 * U.f.renderDelay)
	}

	function ct() {
		window.onbeforeunload = function() {
			return "Leaving now may result in lost progress."
		}, fe = !1, ue(!0), U.f.showChat && se && Z.classList.remove("hidden"), L.e && L.f.classList.remove("hidden")
	}

	function lt() {
		window.onbeforeunload = function() {}, fe = !0, ln(), on(), ue(!1), Z.classList.add("hidden"), L.f.classList.add("hidden")
	}
	window.addEventListener("resize", Object(r.debounce)(40, (function() {
		nt()
	})));
	var dt = !1,
		ft = "#ff0000";

	function ht(e, t, n) {
		var r = e;
		if (n > 0) {
			dt || (ft = [128 * (1 + Math.sin(Re / 500)), 128 * (1 + Math.sin(Re / 500 + Math.PI * (1 / 3))), 128 * (1 + Math.sin(Re / 500 + Math.PI * (2 / 3)))]), r = bt(r.substr(1), Tt(ft).substr(1), .5 / n)
		}
		return t && (r = Et(r, Math.round(30 * Math.abs(Math.sin(Re / 50))))), r
	}

	function pt(e, t, n) {
		if (null != t) return _t(t, t);
		switch (e) {
			case 0:
				return c.POLYGON_COLORS[1];
			case 1:
				return c.POLYGON_COLORS[4];
			case 3:
				return c.POLYGON_COLORS[0];
			case 4:
				return c.POLYGON_COLORS[5];
			default:
				return n
		}
	}
	var gt = Object(a.cloneDeep)(c.GAMEMODE_COLORS);

	function vt(e) {
		return gt[e] || "#ffffff"
	}

	function _t(e, t, n, r) {
		var a;
		switch (t) {
			default:
				a = t <= 0 && n == r ? c.TEAM_COLORS[0] : c.TEAM_COLORS[1];
				break;
			case -1:
				a = W.FALLEN_COLOR;
				break;
			case 1:
				a = c.POLYGON_COLORS[1];
				break;
			case 2:
				a = W.CELESTIAL_COLOR;
				break;
			case 3:
				a = c.BARREL_COLOR;
				break;
			case 4:
				a = W.POLYGON_COLORS[0];
				break;
			case 5:
				a = "#000000";
				break;
			case 6:
				a = "#ffffff";
				break;
			case 7:
				a = c.SPIKE_COLOR;
				break;
			case 10:
				a = c.TEAM_COLORS[0];
				break;
			case 11:
				a = c.TEAM_COLORS[1];
				break;
			case 12:
				a = c.TEAM_COLORS[2];
				break;
			case 13:
				a = c.TEAM_COLORS[3];
				break;
			case 20:
				a = c.POLYGON_COLORS[0];
				break;
			case 21:
				a = c.POLYGON_COLORS[1];
				break;
			case 22:
				a = c.POLYGON_COLORS[2];
				break;
			case 23:
				a = c.POLYGON_COLORS[3];
				break;
			case 24:
				a = c.POLYGON_COLORS[4];
				break;
			case 25:
				a = c.POLYGON_COLORS[5];
				break;
			case 26:
				a = c.POLYGON_COLORS[6];
				break;
			case 27:
				a = c.POLYGON_COLORS[7];
				break;
			case 28:
				a = c.POLYGON_COLORS[8];
				break;
			case 29:
				a = c.POLYGON_COLORS[9];
				break;
			case 30:
				a = c.POLYGON_COLORS[10]
		}
		return a
	}
	Object.keys(gt).forEach((function(e) {
		gt[e] = bt(gt[e].substr(1), "ffffff", .65)
	}));
	var mt = {};

	function yt(e) {
		return mt[e] || (mt[e] = Et(e, c.STROKE_SHADE)), mt[e]
	}

	function bt(e, t) {
		var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .25;

		function r(e) {
			return e.toString(16)
		}

		function a(e) {
			return parseInt(e, 16)
		}
		for (var o = "#", i = 0; i <= 5; i += 2) {
			for (var u = a(e.substr(i, 2)), s = a(t.substr(i, 2)), c = r(Math.floor(s + (u - s) * n)); c.length < 2;) c = "0" + c;
			o += c
		}
		return o
	}

	function Et(e, t) {
		return "#" + e.replace(/^#/, "").replace(/../g, (function(e) {
			return ("0" + Math.min(255, Math.max(0, parseInt(e, 16) + t)).toString(16)).substr(-2)
		}))
	}

	function Ot(e) {
		var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
		return t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : null
	}

	function Tt(e) {
		return "#" + ((1 << 24) + (e[0] << 16) + (e[1] << 8) + e[2]).toString(16).slice(1)
	}

	function Mt(e, t, n) {
		arguments.length < 3 && (n = .5);
		for (var r = e.slice(), a = 0; a < 3; a++) r[a] = Math.round(r[a] + n * (t[a] - e[a]));
		return r
	}

	function wt(e, t) {
		var n = 1,
			r = t - e;
		return r < c.MSG_FADE_OUT_TIME ? n = r / W.MSG_FADE_IN_TIME : r > t - c.MSG_FADE_OUT_TIME && (n = 1 - (r - (t - c.MSG_FADE_OUT_TIME)) / c.MSG_FADE_OUT_TIME), Math.max(Math.min(n, 1), 0)
	}

	function St(e, t) {
		var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20,
			r = 1,
			a = (t /= 60) - e;
		return a < (n /= 60) ? r = a / n : a > t - n && (r = 1 - (a - (t - n)) / n), r
	}
	var At = !1,
		Rt = 0,
		It = 0,
		Pt = 0;

	function xt(e, t, n, r, a, o) {
		var i = 250 * o,
			u = d.D[r - 1] / W.MAX_UPGRADE_POINTS * (i - 25 * o);
		Le.lineCap = "round", Le.strokeStyle = "black", Le.lineWidth = 30, Le.beginPath(), Le.moveTo(e, t), Le.lineTo(e + i, t), Le.stroke(), Le.lineWidth = 30 - 2 * W.STROKE_SIZE, 0 != d.D[r - 1] && (Le.strokeStyle = a, Le.beginPath(), Le.moveTo(e, t), Le.lineTo(e + u, t), Le.stroke()), Le.strokeStyle = d.C > 0 && d.D[r - 1] < W.MAX_UPGRADE_POINTS ? "white" : "grey", Le.beginPath(), Le.moveTo(e + i, t), Le.lineTo(e + i, t), Le.stroke(), Le.strokeStyle = "black", Le.lineCap = "butt", Le.lineWidth = 4, Le.beginPath(), Le.moveTo(e + i + 7, t), Le.lineTo(e + i - 7, t), Le.moveTo(e + i, t + 7), Le.lineTo(e + i, t - 7), Le.stroke(), Le.lineCap = "round", kt(e + i - 32 * o, t + 1.5, "[".concat(r, "]"), 15, W.TEXT_STROKE / 2, 1), kt(e + i / 2 - 30 * o, t + 2, n, 20, W.TEXT_STROKE / 2, 1)
	}

	function Ct(e, t, n, r, a) {
		var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
			i = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
		Le.lineCap = "round", Le.strokeStyle = "black", Le.lineWidth = c.STROKE_SIZE * o, i && (n = c.BARREL_COLOR), En(e, t, 100 * o, 100 * o, 5, n), En(e, t + 25 * o, 100 * o, 50 * o, 5, yt(n)), On(e, t, 100 * o, 100 * o, 5), Le.stroke();
		var u = (r.isCelestial ? 40 : 20) * o,
			s = "",
			l = i ? c.FALLEN_COLOR : be,
			d = Pt / (i ? 10 : 1);
		switch (r.upgradeType) {
			case 0:
				if (a) mn(e, t, u, d, r.barrels, !1, 1 * o), $t(e, t, u, l, r.isCelestial ? 3 : 0, d, !1, 1 * o);
				else {
					for (var f = 0; f < r.gadgets.length; f++) {
						var h = r.gadgets[f];
						0 == h.type && (h.rot = -d / 3)
					}
					r.outerSize > 0 && $t(e, t, u + r.outerSize * u, W.SPIKE_COLOR, r.outerSides, d, !1, 1 * o, u), $t(e, t, u, l, r.sides, d, !1, 1 * o), hn(e, t, d, u, l, r.layers, 0, Pe.radiant, Pe.isInvulnurable, !1, 1 * o), vn(e, t, u, d, r.gadgets, l, !1, 1 * o)
				}
				s = r.name;
				break;
			case 1:
				$t(e, t, u, W.CELESTIAL_COLOR, 3, d, !1, 1 * o), s = "ASCEND";
				break;
			case 2:
				$t(e, t, u, W.CELESTIAL_COLOR, 3, d, !1, 1 * o), s = "RETURN"
		}
		Le.lineCap = "round", kt(e, t + 35 * o, s, 15 * o, W.TEXT_STROKE / 1.5 * o, 1, i ? c.FALLEN_COLOR : "#ffffff")
	}

	function Bt(e, t) {
		Le.lineCap = "round", Le.strokeStyle = "black", Le.lineWidth = W.STROKE_SIZE, En(e, t + 30, 100, 40, 5, "#adadad"), En(e, t + 40, 100, 20, 5, yt("#adadad")), On(e, t + 30, 100, 40, 5), Le.stroke(), Le.lineCap = "round", kt(e, t + 30, "IGNORE", 20, W.TEXT_STROKE, 1)
	}

	function Dt(e, t, n, r, a, o, i) {
		Le.font = "bold " + r + "px Roboto", Le.globalAlpha = i, Le.textAlign = "left", Le.textBaseline = "middle", Le.lineJoin = "miter", Le.miterLimit = 2, Le.strokeStyle = "black", n.width || (n.width = Le.measureText(n.text).width), o && En(e, t, n.width + 1 * r, 1.5 * r, .4 * r, "#0000008c"), e -= n.width / 2, n.sections.forEach((function(n) {
			if (n.width || (n.width = Le.measureText(n.text).width), ye && n.link && Q) {
				var r = {
					x: e,
					y: t - 12,
					width: n.width,
					height: 25
				};
				if (Object(d.k)(le, r)) return window.open(n.text, "_blank"), !0
			}
			Le.fillStyle = n.link ? c.TEAM_COLORS[0] : "white", n.link && Le.fillRect(e, t + 11, n.width, 3), 0 != a && Le.strokeText(n.text, e, t), Le.fillText(n.text, e, t), e += n.width
		}))
	}

	function kt(e, t, n, r, a, o) {
		var i = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "white";
		Le.font = "bold " + r + "px Roboto", Le.globalAlpha = o, Le.textAlign = "center", Le.textBaseline = "middle", Le.lineJoin = "miter", Le.miterLimit = 2, Le.lineWidth = a, Le.fillStyle = i, Le.strokeStyle = "black", 0 != a && Le.strokeText(n, e, t), Le.fillText(n, e, t), Le.globalAlpha = 1
	}
	var jt = 0,
		Lt = 0,
		Ut = 0,
		Nt = 0;

	function zt(e, t) {
		for (var n = e ? Lt : jt, r = je.width / 2, a = je.height / 2 - je.height * (1 - n), o = e ? Wt : Kt, i = (t ? d.d.celestial : d.d.normal)[e ? "weapon" : "body"], u = [], s = 0, l = Object.entries(i); s < l.length; s++) {
			for (var f = N(l[s], 2), h = f[0], p = f[1], g = +h, v = 0; v < p.length; v++)
				for (var _ = p[v], m = Math.min(je.width / (200 * p.length), 1), y = r + je.width * n * ((v + 1) / (p.length + 1) * .6 - .3), b = a + je.height * n * (g / i.maxTier * .6 - .3), E = 0; E < _.evolutions.length; E++) {
					var O, T = i[g + 1],
						M = _.evolutions[E],
						w = 0;
					for (w = 0; w < T.length; w++)
						if (T[w].id == M) {
							O = T[w];
							break
						} if (!O) return;
					var S = Math.min(je.width / (200 * T.length), 1),
						A = r + je.width * n * ((w + 1) / (T.length + 1) * .6 - .3),
						R = a + je.height * n * ((g + 1) / i.maxTier * .6 - .3),
						I = o.includes(_.id) && o.includes(M);
					u.push({
						points: [{
							x: y,
							y: b + 50 * m
						}, {
							x: y,
							y: b + 50 * m + 10
						}, {
							x: A,
							y: R - 50 * S - 10
						}, {
							x: A,
							y: R - 50 * S
						}],
						width: c.STROKE_SIZE * m,
						priority: I ? 1 : 0,
						color: I ? "black" : c.BARREL_COLOR
					})
				}
			u.sort((function(e, t) {
				return e.priority - t.priority
			}));
			for (var P = 0; P < u.length; P++) {
				var x = u[P];
				Le.strokeStyle = x.color, Le.lineWidth = x.width, Le.beginPath(), Le.moveTo(x.points[0].x, x.points[0].y);
				for (var C = 1; C < x.points.length; C++) {
					var B = x.points[C];
					Le.lineTo(B.x, B.y)
				}
				Le.stroke()
			}
		}
		for (var D = 0, k = Object.entries(i); D < k.length; D++)
			for (var j = N(k[D], 2), L = j[0], U = j[1], z = +L, W = 0; W < U.length; W++) {
				var K = U[W];
				K.upgradeType = 0, K.isCelestial = t, Ct(r + je.width * n * ((W + 1) / (U.length + 1) * .6 - .3), a + je.height * n * (z / i.maxTier * .6 - .3), c.POLYGON_COLORS[z], K, e, Math.min(je.width / (200 * U.length), 1), !o.includes(K.id))
			}
	}
	var Wt = [],
		Kt = [];

	function Gt(e) {
		for (var t = e ? Pe.weaponUpgrade : Pe.bodyUpgrade, n = (Pe.isCelestial ? d.d.celestial : d.d.normal)[e ? "weapon" : "body"], r = 0, o = Object.entries(n); r < o.length; r++)
			for (var i = N(o[r], 2), u = i[0], s = i[1], c = +u, l = 0; l < s.length; l++) {
				s[l].id == t && (e ? Ut = c : Nt = c)
			}
		for (var f, h = [t], p = e ? Ut : Nt, g = 0; g < n[p].length; g++) {
			var v = n[p][g];
			if (v.id == t) {
				f = v;
				break
			}
		}
		f && (h = h.concat(function e(t, n, r) {
			for (var o = t[n], i = 0; i < o.length; i++) {
				var u = o[i];
				if (u.id == r) {
					for (var s = [], c = 0; c < u.evolutions.length; c++) {
						var l = u.evolutions[c];
						(s = s.concat(e(t, n + 1, l))).push(l)
					}
					return Object(a.uniq)(s)
				}
			}
			return 0
		}(n, p, t)), e ? Wt = h : Kt = h)
	}
	var Yt = .5;

	function Ft(e, t, n) {
		var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4;
		switch (n.type) {
			case 0:
				Le.fillStyle = ht(c.FALLEN_COLOR, !1, 1);
				break;
			case 1:
				Le.fillStyle = "#000000"
		}
		Le.beginPath(), Le.arc(e, t, r, 0, 2 * Math.PI, !1), Le.fill()
	}
	var Ht = !1;

	function qt(e, t) {
		var n;
		n = e ? _t(e.team, t.team, e.id, t.id) : _t(0, t.team, 0, t.parentID), Ht = e && e.id == t.id && ee, Xt(t, n, t.sides, !0), Ht = !1
	}

	function Xt(e, t, n, r) {
		var a = Math.round(80 * (1 - e.damageTime || 0)),
			o = Et(ht(t, e.isInvulnurable, e.radiant), a);
		e.lastColor = o;
		var u = e.x,
			s = e.y,
			c = e.d,
			l = e.size * (1 + .5 * (1 - (e.fadeTime || 1)));
		if (Le.globalAlpha = e.fadeTime || 1, e.outerSize > 0 && $t(u, s, l + e.outerSize * l, W.SPIKE_COLOR, e.outerSides, c, !0, 1, l), e.barrels && e.barrels.length > 0 && mn(u, s, l, c, e.barrels, !0), $t(u, s, l, o, n, c, !0), e.layers && hn(u, s, c, l, o, e.layers, a, e.radiant, e.isInvulnurable), e.gadgets && e.gadgets.length > 0 && vn(u, s, l, c, e.gadgets, o, !0), Le.globalAlpha = 1, te) {
			var f = {
				x: je.width / 2 + (u - ze) / Ue,
				y: je.height / 2 + (s - We) / Ue,
				r: e.size / Ue,
				rot: c
			};
			Object(d.l)(le, f) && (Object(i.h)(e), te = !1)
		}
	}

	function Vt(e, t, n) {
		if (t.radiant > 0) {
			var r = t.size * (1 + .5 * (1 - (t.fadeTime || 1)));
			if (Le.globalAlpha = t.fadeTime || 1, n || (n = e ? _t(e.team, t.team, e.id, t.parentID || t.id) : _t(0, t.team, 0, t.parentID)), Math.random() < 1 / (600 / t.size)) {
				var a = Math.random() * Math.PI * 2,
					o = Math.random() * t.size;
				cn(t.x + o * Math.sin(a), t.y + o * Math.cos(a), (1 * Math.random() - .5) * t.radiant, (1 * Math.random() - .5) * t.radiant, Object(d.j)(6, 6 * t.radiant), Math.random(), 0, n, 60, 1, t.radiant)
			}
			var i = Math.min(Le.globalAlpha, 1);
			if (Le.globalAlpha = i * (1 - .7 / (t.radiant - 1)), t.radiant > 1) {
				var u = Math.max(2 + .3 * Math.sin(performance.now() / 2500 * t.radiant) * t.radiant, .1);
				$t(t.x, t.y, (r + (t.outerSize || 1) * r) * u, bt(Tt(ft).substr(1), "ffffff", .5), t.outerSize > 0 ? t.outerSides : t.sides, t.d, !0, 0, r * u)
			}
			Le.globalAlpha = i
		}
	}

	function Jt(e) {
		var t = ht(e.color, !1, e.radiant),
			n = e.size;
		Le.globalAlpha = e.transparency * St(e.lifetime, e.maxLifetime), $t(e.x, e.y, n, t, e.sides, e.d, !0), Le.globalAlpha = 1
	}

	function Zt(e, t, n, r, a, o, i) {
		var u, s, c = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1,
			l = i ? Ue : 1;
		i ? (u = je.width / 2 + (e - ze) / l, s = je.height / 2 + (t - We) / l) : (u = e, s = t), Mn(u, s, 2 * n / l, 2 * r / l, a, o, yt(o), c * W.STROKE_SIZE / l)
	}

	function $t(e, t, n, r, a, o, i) {
		var u = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1,
			s = arguments.length > 8 ? arguments[8] : void 0;
		null == s && (s = n / 2);
		var c, l, d = i ? Ue : 1;
		i ? (c = je.width / 2 + (e - ze) / d, l = je.height / 2 + (t - We) / d) : (c = e, l = t), 0 == a ? Tn(c, l, n / d, r, yt(r), u * W.STROKE_SIZE / d) : a > 0 ? An(c, l, n / d, a, r, yt(r), u * W.STROKE_SIZE / d, o) : Sn(c, l, n / d, s / d, -a, r, yt(r), u * W.STROKE_SIZE / d, o), Le.setTransform(1, 0, 0, 1, 0, 0)
	}

	function Qt(e, t) {
		var n;
		n = e ? _t(e.team, t.team, e.id, t.id) : _t(0, t.team, 0, t.parentID);
		var r = t.showName;
		e && U.f.showNames && (e.id != t.id || U.f.showOwnName) || (r = !1), en(t, n, r, !0)
	}

	function en(e, t, n, r) {
		var a = ht(t, e.isInvulnurable, e.radiant),
			o = e.x,
			u = e.y,
			s = (e.d, je.width / 2 + (o - ze) / Ue),
			c = je.height / 2 + (u - We) / Ue,
			l = e.size * (1 + .5 * (1 - (e.fadeTime || 1)));
		if (Le.globalAlpha = e.fadeTime, n && (kt(s, c - l / Ue - 20, "lv. " + Math.round(e.level), 15, W.TEXT_STROKE, Le.globalAlpha), kt(s, c - l / Ue - 50, e.name, 30, W.TEXT_STROKE, Le.globalAlpha)), i.i) {
			var f = [];
			U.f.showIds && f.push(e.id), U.f.showClassNames && f.push(e.className);
			for (var h = 0; h < f.length; h++) kt(s, c - l / Ue + 10 + 23 * h, f[h], 15, W.TEXT_STROKE)
		}
		if (e.hp < .99 * e.maxHP) {
			var p = function(e) {
					for (var t = Ot(e), n = t.reduce((function(e, t) {
							return e + t
						})) / t.length, r = Math.floor(Math.max(n, 70) - n), a = 0; a < t.length; a++) t[a] = Math.min(t[a] + r, 255);
					return Tt(t)
				}(a),
				g = l / Ue * 2,
				v = c + (l + 8) / Ue;
			Le.lineCap = "round", Le.strokeStyle = "black", Le.lineWidth = 2 * Ge, Le.beginPath(), Le.moveTo(s - l / Ue, v), Le.lineTo(s - l / Ue + g, v), Le.stroke(), Le.strokeStyle = Tt(Mt(Ot(p), "#000000", .8)), Le.lineWidth = Ge, Le.beginPath(), Le.moveTo(s - l / Ue, v), Le.lineTo(s - l / Ue + g * Math.max(1, 0), v), Le.stroke(), Le.strokeStyle = Et(p, Math.round(80 * (1 - e.damageTime || 0))), Le.lineWidth = Ge, Le.beginPath(), Le.moveTo(s - l / Ue, v), Le.lineTo(s - l / Ue + g * (Math.max(e.hp, 0) / e.maxHP), v), Le.stroke()
		}
		if (e.id in d.c && U.f.showChat) {
			var _ = d.c[e.id],
				m = 0,
				y = n ? "" == e.name ? 55 : 95 : 25;
			_.forEach((function(e) {
				var t = wt(e.time, W.CHAT_STAY_TIME);
				Dt(s, c - l / Ue - y - 50 * m, e.message, 25, 0, !0, t), m += t
			}))
		}
		Le.globalAlpha = 1
	}

	function tn(e) {
		Le = Be.getContext("2d"), Be.width = 4096, Be.height = 4096;
		var t = Be.width / 2,
			n = Be.height / 2,
			r = 1.5 * e.size,
			a = e.d,
			o = c.POLYGON_COLORS[e.color] || ht(_t(e.team, e.team, 0, 0));
		if (e.gadgets) {
			for (var i = 0; i < e.gadgets.length; i++) {
				var u = e.gadgets[i];
				u.animTime = 0, 0 == u.type && (u.rot = -a)
			}
			for (var s = 0; s < e.barrels.length; s++) {
				e.barrels[s].animTime = 0
			}
		}
		e.outerSize > 0 && $t(t, n, r + e.outerSize * r, W.SPIKE_COLOR, e.outerSides, a, !1, 1.5, r), e.gadgets && mn(t, n, r, a, e.barrels, !1, 1.5), $t(t, n, r, o, e.sides, a, !1, 1.5), e.gadgets && (hn(t, n, a, r, o, e.layers, 0, 0, !1, !1, 1.5), vn(t, n, r, a, e.gadgets, o, !1, 1.5)), Le = je.getContext("2d"),
			function(e, t) {
				var n = e.toDataURL(),
					r = document.createElement("a");
				r.href = n, r.download = t, document.body.appendChild(r), r.click()
			}(function(e) {
				var t, n, r, a = e.getContext("2d"),
					o = document.createElement("canvas").getContext("2d"),
					i = a.getImageData(0, 0, e.width, e.height),
					u = i.data.length,
					s = {
						top: null,
						left: null,
						right: null,
						bottom: null
					};
				for (t = 0; t < u; t += 4) 0 !== i.data[t + 3] && (n = t / 4 % e.width, r = ~~(t / 4 / e.width), null === s.top && (s.top = r), (null === s.left || n < s.left) && (s.left = n), (null === s.right || s.right < n) && (s.right = n), (null === s.bottom || s.bottom < r) && (s.bottom = r));
				s.bottom++, s.right++;
				var c = s.bottom - s.top,
					l = s.right - s.left,
					d = a.getImageData(s.left, s.top, l, c);
				return o.canvas.width = l, o.canvas.height = c, o.putImageData(d, 0, 0), o.canvas
			}(Be), "".concat(e.filename, ".png")), console.log("Downloading entity: ", e)
	}
	var nn = [],
		rn = 0,
		an = 0;

	function on() {
		nn = [], rn = 0, an = 0
	}

	function un(e) {
		rn = 0, an = 0, nn.forEach((function(t) {
			var n = 1 / (Math.pow(function(e) {
				var t = ze - e.x,
					n = We - e.y;
				return Math.sqrt(t * t + n * n)
			}(t), 2) / c.CAMERA_SHAKE_DIST);
			n = Math.min(1, n), rn += n * t.power * (t.time / t.maxTime) * (1 - 2 * Math.random()), an += n * t.power * (t.time / t.maxTime) * (1 - 2 * Math.random()), t.time -= e, t.time < 0 && nn.splice(nn.indexOf(t), 1)
		}))
	}

	function sn(e, t, n) {
		var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e-4;
		0 != U.f.cameraShake && nn.push({
			x: e,
			y: t,
			power: n * U.f.cameraShake / 100,
			time: r,
			maxTime: r
		})
	}

	function cn(e, t, n, r, a, o, i, u, s) {
		var l = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 1,
			d = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
			f = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 1,
			h = arguments.length > 12 && void 0 !== arguments[12] && arguments[12];
		Ee.length < c.MAX_PARTICLES && U.f.showParticles && Ee.push({
			x: e,
			y: t,
			xVel: n,
			yVel: r,
			size: a,
			d: o,
			sides: i,
			color: u,
			lifetime: s / 60,
			maxLifetime: s,
			transparency: l,
			radiant: d,
			friction: f,
			below: h
		})
	}

	function ln() {
		Ee = []
	}

	function dn(e, t, n, r) {
		for (var a = e, o = -t, i = W.POLYGON_COLORS[n], u = 20, s = 0; s < n; s++) u *= 1.5;
		$t(a, o, u, i, 3 + n, r, !0)
	}

	function fn(e, t, n, r, a, o, i, u, s) {
		var c = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : [],
			l = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : [],
			d = e,
			f = -t;
		i > 0 && $t(d, f, n + i * n, W.SPIKE_COLOR, o, r, !0, 1, n), mn(d, f, n, r, s, !0), $t(d, f, n, u, a, r, !0), hn(d, f, r, n, u, l, 0, 0, !1, !0), vn(d, f, n, r, c, u, !0)
	}

	function hn(e, t, n, r, a, o, i, u, s) {
		for (var c = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9], l = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 1, f = 0; f < o.length; f++) {
			var h = o[f],
				p = a;
			h.hasOwnProperty("team") && (p = Et(ht(_t(h.team, h.team, 0, 0), s, u), i)), h.offsetX || (h.offsetX = 0), h.offsetY || (h.offsetY = 0);
			var g = n + (h.rot || 0),
				v = e + (h.offsetX * Math.sin(1.57079633 - n) + h.offsetY * Math.cos(n + 1.57079633)) * r,
				_ = t + (h.offsetY * Math.cos(n) + h.offsetX * Math.sin(-n + Math.PI)) * r;
			if (h.outerSize > 0 && $t(v, _, (h.size + h.outerSize) * r, h.selected ? bt(W.SPIKE_COLOR.substr(1), "ffffff", .2 + (1 + Math.sin(performance.now() / 250)) / 2 * .8) : W.SPIKE_COLOR, h.outerSides, g, c, l, h.size * r), $t(v, _, h.size * r, h.selected ? bt(p.substr(1), "ffffff", .2 + (1 + Math.sin(performance.now() / 250)) / 2 * .8) : p, h.sides, g, c, l), Ht && Q) {
				var m = e + (-h.offsetY * Math.sin(n) + h.offsetX * Math.sin(n + yn)) * r,
					y = t - (h.offsetX * Math.cos(n + yn) + -h.offsetY * Math.cos(n)) * r,
					b = {
						x: je.width / 2 + (m - ze) / Ue,
						y: je.height / 2 + (y - We) / Ue,
						r: (h.size + h.outerSize) * r / Ue,
						rot: n
					};
				Object(d.l)(le, b) && ne.push({
					type: "layer",
					index: f
				})
			}
		}
	}

	function pn(e) {
		var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
		if (e.gadgets) {
			for (var n, r = e.size * (1 + .5 * (1 - (e.fadeTime || 1))), a = null !== (n = e.lastColor) && void 0 !== n ? n : "#ffffff", o = Math.min(e.fadeTime || 1, 1), i = 0; i < e.gadgets.length; i++) {
				var u = e.gadgets[i];
				2 == u.type && 0 != u.alpha && (Le.globalAlpha = o * (u.alpha || .3), gn(e.x, e.y, u.offsetX, u.offsetY, u.subtype, u.auraColor, u.rotationType, e.d, u.rot, r, u.sides, u.radius, a, u.alpha, t && 0 == u.showParticles))
			}
			Le.globalAlpha = 1
		}
	}

	function gn(e, t, n, r, a, o, i, u, s, c, l, d, f, h) {
		var p = !(arguments.length > 14 && void 0 !== arguments[14]) || arguments[14],
			g = pt(a, o, f),
			v = je.width / 2 + (e - ze) / Ue,
			_ = je.height / 2 + (t - We) / Ue;
		if (p && Math.random() < 1 / (300 / (c * d))) {
			var m = Math.random() * Math.PI * 2,
				y = Math.random() * (c * d);
			cn(e + y * Math.sin(m) + (n * Math.sin(1.57079633 - u) + r * Math.cos(u + 1.57079633)) * c, t + y * Math.cos(m) + (r * Math.cos(u) + n * Math.sin(-u + Math.PI)) * c, 1 * Math.random() - .5, 1 * Math.random() - .5, 6, Math.random() * Math.PI * 2, l, g, 30, h)
		}
		Le.translate(v, _), Le.rotate(u), Le.translate(-v, -_), $t(e + n * c, t + r * c, c * d, g, l, (0 == i ? 0 : -u) + s, !0)
	}

	function vn(e, t, n, r, a, o, i) {
		for (var u = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1, s = 0; s < a.length; s++) {
			var c = a[s];
			_n(s, e, t, n, r, c, o, i, u)
		}
	}

	function _n(e, t, n, r, a, o, i, u) {
		var s, l, f = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 1,
			h = u ? Ue : 1,
			p = o.width * (1.5 - .8 * Math.max(0, o.animTime || 0)) * r,
			g = o.length * (1 - .2 * Math.max(0, o.animTime || 0));
		u ? (s = je.width / 2 + (t - ze) / h, l = je.height / 2 + (n - We) / h) : (s = t, l = n);
		var v = null == o.color ? c.BARREL_COLOR : _t(o.color, o.color);
		switch (Le.lineJoin = "round", Le.fillStyle = o.selected ? bt(v.substr(1), "ffffff", .2 + (1 + Math.sin(performance.now() / 250)) / 2 * .8) : v, Le.lineWidth = f * W.STROKE_SIZE / h, Le.strokeStyle = yt(Le.fillStyle), Le.beginPath(), Le.translate(s, l), Le.rotate(a), Le.translate(o.offsetX * r / h, o.offsetY * r / h), o.type) {
			case 0:
				Le.rotate(-a), Le.rotate(o.rot), Le.rect(-1 * o.width * r / h, -2 * g * r / h, o.width * r * 2 / h, 2 * r * g / h)
		}
		switch (Le.fill(), Le.stroke(), o.type) {
			case 0:
				Tn(0, 0, 1.5 * o.width * r / h, Le.fillStyle, Le.strokeStyle, f * W.STROKE_SIZE / h);
				break;
			case 1:
				Le.rotate(o.rot), Le.beginPath(), Le.rect(p / h * -.5, p / h * -.5, p / h, p / h), Le.fill(), Le.stroke();
				break;
			case 2:
				Le.setTransform(1, 0, 0, 1, 0, 0), Le.translate(s, l), Le.rotate(a), Le.translate(-s, -l), $t(t + o.offsetX * r, n + o.offsetY * r, o.width * r, Le.fillStyle, o.backSides, o.rot, u, f), Le.translate(s, l), Le.rotate(a), Le.translate(-s, -l), $t(t + o.offsetX * r, n + o.offsetY * r, o.width * r * .5, pt(o.subtype, o.auraColor, i), o.sides, (0 == o.rotationType ? 0 : -a) + o.rot, u, f)
		}
		if (Ht && Q) {
			var _ = t + (-o.offsetY * Math.sin(a) + o.offsetX * Math.sin(a + yn)) * r,
				m = n - (o.offsetX * Math.cos(a + yn) + -o.offsetY * Math.cos(a)) * r,
				y = {
					x: je.width / 2 + (_ - ze) / Ue,
					y: je.height / 2 + (m - We) / Ue,
					r: o.width * r * (0 == o.type ? 1.5 : 1) / Ue
				};
			Object(d.l)(le, y) && ne.push({
				type: "gadget",
				index: e
			})
		}
		Le.setTransform(1, 0, 0, 1, 0, 0)
	}

	function mn(e, t, n, r, a, o) {
		for (var i = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1, u = 0; u < a.length; u++) {
			var s = a[u];
			bn(u, e, t, n, r + s.rot, s.offset, s.distance, s.width, s.length, s.animTime, null == s.visualType ? s.type : s.visualType, o, i, s.selected, s.color)
		}
	}
	var yn = Math.PI / 2;

	function bn(e, t, n, r, a, o, i, u, s, l, f, h) {
		var p, g, v = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
			_ = arguments.length > 13 ? arguments[13] : void 0,
			m = arguments.length > 14 ? arguments[14] : void 0,
			y = h ? Ue : 1,
			b = s * (1 - .2 * Math.max(0, l || 0));
		h ? (p = je.width / 2 + (t - ze) / y, g = je.height / 2 + (n - We) / y) : (p = t, g = n);
		var E = null == m ? c.BARREL_COLOR : _t(0, m);
		switch (Le.lineJoin = "round", Le.fillStyle = _ ? bt(E.substr(1), "ffffff", .2 + (1 + Math.sin(performance.now() / 250)) / 2 * .8) : E, Le.lineWidth = v * W.STROKE_SIZE / y, Le.strokeStyle = yt(Le.fillStyle), Le.beginPath(), Le.translate(p, g), Le.rotate(a), Le.translate(o * r / y, -i * r / y), f) {
			case 0:
				Le.rect(-1 * u * r / y, -2 * b * r / y, u * r * 2 / y, 2 * r * b / y);
				break;
			case 1:
				wn(-1 * u * r / y, 0 / y, u * r * 2 / y, -2 * r * b / y, u * r / y);
				break;
			case 2:
				Le.rect(-.5 * u * r / y, -1.5 * b * r / y, u * r / y, 1.5 * r * b / y), Le.fill(), Le.stroke(), wn(-1 * u * r / y, -1.5 * r * b / y, u * r * 2 / y, -2 * r * b / y, u * r / y);
				break;
			case 3:
				Le.rect(-u * r / y, -1.33333333333 * b * r / y, u * r * 2 / y, 1.33333333333 * r * b / y), Le.fill(), Le.stroke(), Le.rect(-.7 * u * r / y, -1.3333333333 * b * r / y, 1.4 * u * r / y, -.3333333333 * r * b / y), Le.fill(), Le.stroke(), Le.rect(-u * r / y, -1.66666666666666 * b * r / y, u * r * 2 / y, -.3333333333 * r * b / y), Le.fill(), Le.stroke();
				break;
			case 4:
				wn(-1 * u * r / y, 0 / y, u * r * 2 / y, -1.3333333333 * r * b / y, u * r / y), Le.rect(-.7 * u * r / y, -1.3333333333 * b * r / y, 1.4 * u * r / y, -.3333333333 * r * b / y), Le.fill(), Le.stroke(), wn(-.5 * u * r / y, -1.66666666666666 * b * r / y, u * r / y, -2 * r * b / y, u * r * 2 / y);
				break;
			case 5:
				wn(-1 * u * r / y, 0 / y, u * r * 2 / y, -1.3333333333 * r * b / y, u * r / y), Le.rect(-.7 * u * r / y, -1.3333333333 * b * r / y, 1.4 * u * r / y, -.3333333333 * r * b / y), Le.fill(), Le.stroke(), wn(-1 * u * r / y, -1.66666666666666 * b * r / y, 2 * u * r / y, -2 * r * b / y, u * r / y);
				break;
			case 6:
				wn(-.5 * u * r / y, 0 / y, u * r * 1 / y, -2 * r * b / y, u * r * 2 / y);
				break;
			case 7:
				Le.rect(-u * r / y, -1.33333333333 * b * r / y, u * r * 2 / y, 1.33333333333 * r * b / y), Le.fill(), Le.stroke(), wn(-1 * u * r / y, -1.33333333333 * b * r / y, 2 * u * r / y, -1.6666666666666 * r * b / y, u * r / y), Le.rect(-u * r / y, -1.66666666666666 * b * r / y, u * r * 2 / y, -.3333333333 * r * b / y), Le.fill(), Le.stroke();
				break;
			case 8:
				Le.rect(-.5 * u * r / y, -1.33333333333 * b * r / y, u * r / y, 1.33333333333 * r * b / y), Le.fill(), Le.stroke(), wn(-1 * u * r / y, -1.33333333333 * b * r / y, 2 * u * r / y, -1.6666666666666 * r * b / y, u * r / y), Le.rect(-u * r / y, -1.66666666666666 * b * r / y, u * r * 2 / y, -.3333333333 * r * b / y), Le.fill(), Le.stroke();
				break;
			case 9:
				wn(-.5 * u * r / y, 0 / y, u * r / y, -1.3333333333 * r * b / y, u * r * 2 / y), Le.fill(), Le.stroke(), Le.rect(-.6666666666666 * u * r / y, -1.3333333333 * b * r / y, 1.3333333333 * u * r / y, -.3333333333 * r * b / y), Le.fill(), Le.stroke(), wn(-1 * u * r / y, -1.66666666666666 * b * r / y, 2 * u * r / y, -2 * r * b / y, u * r / y)
		}
		if (Le.fill(), Le.stroke(), Le.setTransform(1, 0, 0, 1, 0, 0), Ht && Q) {
			var O = b,
				T = i + O,
				M = o,
				w = t + (T * Math.sin(a) + M * Math.sin(a + yn)) * r,
				S = n - (M * Math.cos(a + yn) + T * Math.cos(a)) * r,
				A = u * r * 2,
				R = O * r * 2,
				I = {
					x: je.width / 2 + (w - ze) / y,
					y: je.height / 2 + (S - We) / y,
					height: R / y,
					width: A / y,
					rot: a
				};
			Object(d.m)(le, I) && ne.push({
				type: "barrel",
				index: e
			})
		}
	}

	function En(e, t, n, r, a, o) {
		n < 2 * a && (a = n / 2), r < 2 * a && (a = r / 2), e -= n / 2, t -= r / 2, Le.beginPath(), Le.moveTo(e + a, t), Le.arcTo(e + n, t, e + n, t + r, a), Le.arcTo(e + n, t + r, e, t + r, a), Le.arcTo(e, t + r, e, t, a), Le.arcTo(e, t, e + n, t, a), Le.closePath(), Le.fillStyle = o, Le.fill()
	}

	function On(e, t, n, r, a) {
		n < 2 * a && (a = n / 2), r < 2 * a && (a = r / 2), e -= n / 2, t -= r / 2, Le.beginPath(), Le.moveTo(e + a, t), Le.arcTo(e + n, t, e + n, t + r, a), Le.arcTo(e + n, t + r, e, t + r, a), Le.arcTo(e, t + r, e, t, a), Le.arcTo(e, t, e + n, t, a), Le.closePath()
	}

	function Tn(e, t, n, r, a, o) {
		Le.lineJoin = "round", Le.beginPath(), Le.arc(e, t, n, 0, 2 * Math.PI, !1), Le.fillStyle = r, Le.lineWidth = o, Le.strokeStyle = a, Le.fill(), Le.stroke()
	}

	function Mn(e, t, n, r, a, o, i, u) {
		Le.lineJoin = "round", Le.beginPath(), Le.translate(e, t), Le.rotate(a), Le.rect(-n / 2, -r / 2, n, r), Le.fillStyle = o, Le.lineWidth = u, Le.strokeStyle = i, Le.fill(), Le.stroke(), Le.setTransform(1, 0, 0, 1, 0, 0)
	}

	function wn(e, t, n, r, a) {
		Le.lineJoin = "round", Le.beginPath(), Le.moveTo(e + (n - a) / 2, t), Le.lineTo(e + n - (n - a) / 2, t), Le.lineTo(e + n, r), Le.lineTo(e, r), Le.closePath()
	}

	function Sn(e, t, n, r, a, o, i, u, s) {
		Le.lineJoin = "round", Le.beginPath(), Le.translate(e, t), Le.rotate(s), a % 2 != 0 && Le.rotate(-90 * Math.PI / 180), Le.moveTo(n * Math.cos(0), n * Math.sin(0)), Le.lineTo(r * Math.cos(1 * Math.PI / a), r * Math.sin(1 * Math.PI / a));
		for (var c = 1; c <= a; c += 1) Le.lineTo(n * Math.cos(2 * c * Math.PI / a), n * Math.sin(2 * c * Math.PI / a)), Le.lineTo(r * Math.cos(2 * (c + .5) * Math.PI / a), r * Math.sin(2 * (c + .5) * Math.PI / a));
		Le.fillStyle = o, Le.lineWidth = u, Le.strokeStyle = i, Le.fill(), Le.stroke()
	}

	function An(e, t, n, r, a, o, i, u) {
		Le.lineJoin = "round", Le.beginPath(), Le.translate(e, t), Le.rotate(u), r % 2 != 0 && Le.rotate(-90 * Math.PI / 180), Le.moveTo(n * Math.cos(0), n * Math.sin(0));
		for (var s = 1; s <= r + 1; s += 1) Le.lineTo(n * Math.cos(2 * s * Math.PI / r), n * Math.sin(2 * s * Math.PI / r));
		Le.fillStyle = a, Le.fill(), Le.lineWidth = i, Le.strokeStyle = o, Le.stroke()
	}

	function Rn(e, t, n, r) {
		for (var a = r.size * (1 + .5 * (1 - (r.fadeTime || 1))), o = 0; o < r.gadgets.length; o++) {
			var i = r.gadgets[o];
			if (2 == i.type) {
				var u = r.x + (-i.offsetY * Math.sin(r.d) + i.offsetX * Math.sin(r.d + yn)) * a,
					s = r.y - (i.offsetX * Math.cos(r.d + yn) + -i.offsetY * Math.cos(r.d)) * a,
					c = 0 == i.rotationType ? r.d : 0;
				xn(e + u / Ue, t + s / Ue, c, 1 * a * i.radius / Ue, i.sides, r.fadeTime), xn(e + u / Ue, t + s / Ue, c, 1.5 * a * i.radius / n / Ue, i.sides, .2 * r.fadeTime)
			}
		}
	}

	function In(e, t, n, r) {
		var a = r.size * (1 + .5 * (1 - (r.fadeTime || 1))),
			o = 1 - 1 / (r.radiant + .5),
			i = Math.min(1, r.fadeTime || 1);
		if (xn(e + r.x / Ue, t + r.y / Ue, r.d, Math.max(a, 1.2 * a / n) / Ue, r.sides, i * o), o *= 1 - .7 / (r.radiant - 1), r.radiant > 1) {
			var u = Math.max(2 + .3 * Math.sin(performance.now() / 2500 * r.radiant) * r.radiant, .1);
			xn(e + r.x / Ue, t + r.y / Ue, r.d, a * u * 2 / Ue, r.outerSize > 0 ? r.outerSides : r.sides, i * o)
		}
	}

	function Pn(e, t, n, r, a, o, i) {
		var u = Le.globalAlpha;
		Le.globalAlpha = i, Le.globalCompositeOperation = "destination-out", Le.lineJoin = "round", Le.lineWidth = a / 2, Le.translate(e, t), Le.rotate(n - Object(f.degreesToRadians)(90)), Le.beginPath(), Le.moveTo(0, o / 2), Le.lineTo(r, a / 2), Le.lineTo(r, a / -2), Le.lineTo(0, o / -2), Le.fill(), Le.stroke(), Le.setTransform(1, 0, 0, 1, 0, 0), Le.globalCompositeOperation = "source-over", Le.globalAlpha = u
	}

	function xn(e, t, n, r, a, o) {
		0 == a ? Cn(e, t, r, o) : a > 0 ? function(e, t, n, r, a, o) {
			var i = Le.globalAlpha;
			Le.globalAlpha = o, Le.globalCompositeOperation = "destination-out", Le.beginPath(), Le.translate(e, t), Le.rotate(n), a % 2 != 0 && Le.rotate(-90 * Math.PI / 180);
			Le.moveTo(r * Math.cos(0), r * Math.sin(0));
			for (var u = 1; u <= a + 1; u += 1) Le.lineTo(r * Math.cos(2 * u * Math.PI / a), r * Math.sin(2 * u * Math.PI / a));
			Le.fill(), Le.setTransform(1, 0, 0, 1, 0, 0), Le.globalCompositeOperation = "source-over", Le.globalAlpha = i
		}(e, t, n, r, a, o) : function(e, t, n, r, a, o, i) {
			var u = Le.globalAlpha;
			Le.globalAlpha = i, Le.globalCompositeOperation = "destination-out", Le.beginPath(), Le.translate(e, t), Le.rotate(n), a % 2 != 0 && Le.rotate(-90 * Math.PI / 180);
			Le.moveTo(r * Math.cos(0), r * Math.sin(0)), Le.lineTo(o * Math.cos(1 * Math.PI / a), o * Math.sin(1 * Math.PI / a));
			for (var s = 1; s <= a; s += 1) Le.lineTo(r * Math.cos(2 * s * Math.PI / a), r * Math.sin(2 * s * Math.PI / a)), Le.lineTo(o * Math.cos(2 * (s + .5) * Math.PI / a), o * Math.sin(2 * (s + .5) * Math.PI / a));
			Le.fill(), Le.setTransform(1, 0, 0, 1, 0, 0), Le.globalCompositeOperation = "source-over", Le.globalAlpha = u
		}(e, t, n, r, -a, r / 2, o)
	}

	function Cn(e, t, n, r) {
		var a = Le.globalAlpha;
		Le.globalAlpha = r, Le.globalCompositeOperation = "destination-out", Le.beginPath(), Le.arc(e, t, n, 0, 2 * Math.PI, !0), Le.fill(), Le.globalCompositeOperation = "source-over", Le.globalAlpha = a
	}

	function Bn(e, t, n, r, a, o) {
		var i = Le.globalAlpha;
		Le.globalAlpha = o, Le.globalCompositeOperation = "destination-out", Le.beginPath(), Le.translate(e, t), Le.rotate(a), Le.rect(-n, -r, 2 * n, 2 * r), Le.fill(), Le.setTransform(1, 0, 0, 1, 0, 0), Le.globalCompositeOperation = "source-over", Le.globalAlpha = i
	}

	function Dn() {
		var e, t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
			n = je.width / 2 - ze / Ue,
			r = je.height / 2 - We / Ue;
		if (t) e = j[Te].dimension;
		else {
			var a = s.b[Oe];
			e = a || s.a
		}
		Me = e;
		for (var o = e.visual, i = o.particles, u = 1.2 * Ne, l = Math.min(c.MAX_PARTICLES, Ne * Ne * i.spawnrate), h = Math.random(); h < l; h += Math.random()) {
			var p = Object(f.degreesToRadians)(Object(d.j)(i.d.min, i.d.max)),
				g = Object(d.j)(i.speed.min, i.speed.max);
			cn(ze + Math.random() * u - u / 2, We + Math.random() * u - u / 2, g * Math.sin(p), g * Math.cos(p), Object(d.j)(i.size.min, i.size.max), Math.random() * Math.PI * 2, Math.round(Object(d.j)(i.sides.min, i.sides.max)), Tt(Mt(Ot(i.color.min), Ot(i.color.max), Math.random())), Object(d.j)(i.lifetime.min, i.lifetime.max), Object(d.j)(i.transparency.min, i.transparency.max), i.radiant ? 1 : 0)
		}
		Le.fillStyle = o.backgroundColor, Le.fillRect(0, 0, Le.canvas.width, Le.canvas.height);
		var v = W.GRID_STROKE / Ue;
		if (v > .3) {
			var _ = o.gridSize / Ue,
				m = Math.round(n / _) * _,
				y = Math.round(r / _) * _;
			Le.lineWidth = v, Le.strokeStyle = o.gridColor, Le.beginPath();
			for (var b = n; b < Le.canvas.width + n; b += _) Le.moveTo(b - m, 0), Le.lineTo(b - m, Le.canvas.height);
			for (var E = r; E < Le.canvas.height + r; E += _) Le.moveTo(0, E - y), Le.lineTo(Le.canvas.width, E - y);
			Le.closePath(), Le.stroke()
		}
		kn(e.visual.wallColor || "#00000029", e.bases, e.walls)
	}

	function kn(e, t, n) {
		for (var r = 0; r < t.length; r++) {
			var a = t[r];
			Le.fillStyle = _t(0, a.team, 0, 0) + "29";
			var o = a.width * Ke,
				i = a.height * Ke;
			Le.fillRect(je.width / 2 - (-a.x * Ke + ze + o / 2) / Ue, je.height / 2 - (-a.y * Ke + We + i / 2) / Ue, o / Ue, i / Ue)
		}
		Le.fillStyle = e;
		for (var u = 0; u < n.length; u++) {
			var s = n[u],
				c = s.width * Ke,
				l = s.height * Ke;
			Le.fillRect(je.width / 2 - (-s.x * Ke + ze + c / 2) / Ue, je.height / 2 - (-s.y * Ke + We + l / 2) / Ue, c / Ue, l / Ue)
		}
		Le.fillRect(0, je.height / 2 - (We + Ke) / Ue, je.width / 2 - (ze + Ke) / Ue, 2 * Ke / Ue), Le.fillRect(je.width, je.height / 2 - (We + Ke) / Ue, (-ze + Ke) / Ue - je.width / 2, 2 * Ke / Ue), Le.fillRect(0, 0, je.width, je.height / 2 - (We + Ke) / Ue), Le.fillRect(0, je.height, je.width, (-We + Ke) / Ue - je.height / 2)
	}

	function jn(e) {
		return !!Q && (i.i && U.f.copyIds && (te = !0), !!(we > -100 && function(e) {
			if (!L.d) {
				var t = 0 + (L.e ? 60 : 0),
					n = je.height;
				if (d.C > 0)
					for (var r = 0; r < W.UPGRADE_COUNT; r++) {
						var a = W.UPGRADE_COUNT - r;
						if (d.D[a - 1] < W.MAX_UPGRADE_POINTS) {
							var o = {
								x: t + 20 + 250 - 15,
								y: n - 20 - 32 * r - 15,
								width: 30,
								height: 30
							};
							if (Object(d.k)(e, o)) return Nn(a), !0
						}
					}
				if (t = je.width, d.C > 0)
					for (var i = 0; i < W.UPGRADE_COUNT; i++) {
						a = W.UPGRADE_COUNT - i + 4;
						if (d.D[a - 1] < W.MAX_UPGRADE_POINTS) {
							o = {
								x: t - 20 - 250 - 15,
								y: n - 20 - 32 * i - 15,
								width: 30,
								height: 30
							};
							if (Object(d.k)(e, o)) return Nn(a), !0
						}
					}
			}
			return !1
		}(e)) || (le = e, ye = !0, function(e) {
			if (!L.d) {
				var t = 0,
					n = je.height,
					r = 0,
					a = 0;
				if (0 != d.J.length) {
					for (var o = 0; o < d.J.length; o++) {
						var i = d.J[o],
							u = {
								x: t + It + 120 * r - 50,
								y: n - 200 - 120 * a - 50,
								width: 100,
								height: 100
							};
						if (Object(d.k)(e, u)) return Ln(!0, i.id, i.upgradeType), !0;
						3 == ++r && (r = 0, a++)
					}
					if (0 != d.J.length && 2 != d.J[0].upgradeType) {
						a += r > 0 ? 1 : 0;
						u = {
							x: t + It + 120 * (r = 0) - 50,
							y: n - 200 - 120 * a - -10,
							width: 100,
							height: 40
						};
						if (Object(d.k)(e, u)) return Un(!0), !0
					}
				}
				if (r = 0, a = 0, 0 != d.b.length) {
					t = je.width;
					for (var s = 0; s < d.b.length; s++) {
						var c = d.b[s];
						u = {
							x: t - Rt - 120 * r - 50,
							y: n - 200 - 120 * a - 50,
							width: 100,
							height: 100
						};
						if (Object(d.k)(e, u)) return Ln(!1, c.id, c.upgradeType), !0;
						3 == ++r && (r = 0, a++)
					}
					if (0 != d.b.length && 2 != d.b[0].upgradeType) {
						a += r > 0 ? 1 : 0;
						u = {
							x: t - Rt - 120 * (r = 0) - 50,
							y: n - 200 - 120 * a - -10,
							width: 100,
							height: 40
						};
						if (Object(d.k)(e, u)) return Un(!1), !0
					}
				}
			}
			return !1
		}(e)))
	}

	function Ln(e, t, n) {
		Object(l.upgradePlayer)(e, t, n), 0 != n ? (Object(d.e)(), Object(d.g)()) : e ? Object(d.g)() : Object(d.e)()
	}

	function Un(e, t) {
		e ? Object(d.g)() : Object(d.e)()
	}

	function Nn(e) {
		Object(i.r)(e)
	}
}, function(e, t, n) {
	"use strict";
	n.r(t), n.d(t, "chatInput", (function() {
		return E
	})), n.d(t, "isMobile", (function() {
		return O
	})), n.d(t, "servers", (function() {
		return T
	})), n.d(t, "setPopupOpen", (function() {
		return I
	})), n.d(t, "serverSelect", (function() {
		return J
	})), n.d(t, "mainMenuState", (function() {
		return ee
	})), n.d(t, "onConnect", (function() {
		return re
	})), n.d(t, "onHubConnect", (function() {
		return ae
	})), n.d(t, "onFullDisconnect", (function() {
		return oe
	})), n.d(t, "onDisconnect", (function() {
		return ie
	})), n.d(t, "recieveServers", (function() {
		return ue
	})), n.d(t, "updateSelectedServer", (function() {
		return se
	})), n.d(t, "startsWithVowel", (function() {
		return ge
	})), n.d(t, "escapeHTML", (function() {
		return ve
	})), n.d(t, "onDeath", (function() {
		return _e
	})), n.d(t, "setCanvasScale", (function() {
		return ye
	})), n.d(t, "setCookie", (function() {
		return be
	})), n.d(t, "getCookie", (function() {
		return Ee
	})), n.d(t, "eraseCookie", (function() {
		return Oe
	})), n.d(t, "roundWithEnding", (function() {
		return Te
	}));
	var r = n(4),
		a = n(6),
		o = n(8),
		i = (n(34), n(10)),
		u = n(2),
		s = n.n(u),
		c = (n(52), n(53), n(54), n(55), n(56), n(1)),
		l = [];

	function d() {
		/*return new Promise((function(e) {
			fetch("/changelog.txt").then((function(e) {
				return e.text()
			})).then((function(t) {
				f = t.replace(/\r?\n/g, "\r\n"),
					function() {
						for (var e = "", t = ("CHANGELOG - " + (l = f.split("\n\r\n"))[0]).split("\n"), n = 0; n < t.length; n++) t[n].startsWith("    ") || (e += "" == e ? t[n] : "<br />" + t[n]);
						var r = document.getElementById("changelog");
						r.childNodes[1].innerHTML = e.replace(/\n/g, "<br />"), r.classList.remove("hide");
						var a = document.getElementById("subtitle");
						a.textContent = l[0].split("-", 1)[0].trim(), a.classList.remove("hide"), e = "";
						for (var o = 0; o < l.length; o++) {
							"" != e && (e += "<br /><br /><hr />");
							for (var i = l[o].split("\n"), u = 0; u < i.length; u++) {
								var s = 0,
									c = "";
								for (s = 0; i[u].startsWith("    ", 4 * s); s++) c += "&emsp;&emsp;";
								0 == u ? e += "<h3>" : "" != e && 1 != u && (e += "<br />"), e += c + i[u], 0 == u && (e += "</h3>")
							}
						}
						document.getElementById("full-changelog").childNodes[1].childNodes[5].innerHTML = e.replace(/\n/g, "<br />")
					}(), e()
			}))
		}))*/
	}
	var f = "",
		h = n(3),
		p = n(12),
		g = [{
			id: "scenexe-io_970x250",
			minWidth: 1404,
			minHeight: 1040,
			deathScreen: !1
		}, {
			id: "scenexe-io_300x600",
			minWidth: 1877.2,
			minHeight: 910,
			deathScreen: !0
		}];

	function v() {
		window.usingAdBlocker = !1, fetch("https://api.adinplay.com").catch((function(e) {
			window.usingAdBlocker = !0
		})).finally((function() {
			window.usingAdBlocker && (console.log("Ad blocker detected."), Ee(u.COOKIES.TUTORIAL.AD_BLOCKER) || c.F || (Object(c.h)("Please disable your ad blocker", "Ads support the game and allow it to keep updating and expanding."), be(u.COOKIES.TUTORIAL.AD_BLOCKER, !0, 30))), gtag("event", u.ANALYTICS_EVENTS.AD_BLOCKER, {
				adBlocker: window.usingAdBlocker
			})
		}))
	}

	function _() {
		try {
			g.forEach((function(e) {
				aiptag.cmd.display.push((function() {
					aipDisplayTag.display(e.id)
				}))
			}))
		} catch (e) {
			console.log("Error when refreshing ads:", e)
		}
	}

	function m() {
		try {
			g.forEach((function(e) {
				var t = document.getElementById(e.id);
				t.classList.remove("hide");
				var n = Math.min(window.innerWidth / e.minWidth, 1),
					r = Math.min(window.innerHeight / e.minHeight, 1),
					a = Math.min(n, r),
					o = t.classList.contains("ad-bottom");
				t.classList.contains("ad-right");
				t.style.transform = "translate".concat(o ? "X" : "Y", "(-50%) scale(").concat(a, ")"), e.deathScreen || 1 != ee || t.classList.add("hide")
			}))
		} catch (e) {
			console.log("Error when updating ads:", e)
		}
	}
	window.addEventListener("resize", Object(p.debounce)(40, (function() {
		m()
	})));
	var y = n(0),
		b = document.getElementById("chat"),
		E = document.getElementById("chat-input"),
		O = !1,
		T = [],
		M = [],
		w = [],
		S = -1,
		A = 0,
		R = !1;

	function I(e) {
		R = e
	}
	var P = document.getElementById("game-over-killer"),
		x = document.getElementById("game-over-stats"),
		C = document.getElementById("game-over"),
		B = document.getElementById("overlay-canvas"),
		D = (document.getElementById("main-menu-button"), document.getElementById("full-changelog")),
		k = document.getElementById("button-settings"),
		j = (document.getElementById("button-controls"), document.getElementById("button-feedback")),
		L = document.getElementById("button-bugs"),
		U = document.getElementById("submit"),
		N = document.getElementById("cancel"),
		z = document.getElementById("popup-input"),
		W = document.getElementById("popup-input-small"),
		K = document.getElementById("popup"),
		G = document.getElementById("popup-title"),
		Y = document.getElementById("popup-subtitle"),
		F = document.getElementById("connecting"),
		H = document.getElementById("respawn-text"),
		q = document.getElementById("play-menu-wrapper"),
		X = document.getElementById("main-menu"),
		V = document.getElementById("play-button"),
		J = document.getElementById("server-select"),
		Z = document.getElementById("background"),
		$ = document.getElementById("ads"),
		Q = document.getElementById("username-input");
	J.addEventListener("change", (function() {
		se()
	}));
	var ee = 2;

	function te() {
		var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
		if (e) {
			(O = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) && (document.documentElement.webkitRequestFullScreen(), Object(c.h)("Mobile devices not yet supported", "This game may not work on your device."));
			var t = Ee(u.COOKIES.USERNAME);
			t && (Q.value = t), window.addEventListener("keydown", me)
		}
		Object(i.d)(), Array.from(document.getElementsByClassName("hud")).forEach((function(e) {
			e.classList.add("hidden")
		})), X.classList.remove("hidden"), Z.classList.remove("hide"), $.classList.remove("hidden"), F.classList.remove("hide"), q.classList.add("hide"), V.onclick = function() {
			le()
		}, k.onclick = function() {
			Object(h.e)()
		}, _(), m(), document.getElementById("full-changelog-link").onclick = function() {
			return de(), !1
		}, document.getElementById("exit-changelog").onclick = function() {
			fe()
		}, document.getElementById("apply-settings").onclick = function() {
			Object(h.a)(!0)
		}, document.getElementById("cancel-settings").onclick = function() {
			Object(h.a)()
		}, L.onclick = function() {
			he(1)
		}, j.onclick = function() {
			he(2)
		}, N.onclick = function() {
			he(0)
		}, U.onclick = function() {
			pe()
		}, e && (Object(h.d)(JSON.parse(Ee(u.COOKIES.SETTINGS)) || {}, JSON.parse(Ee(u.COOKIES.KEYBINDS)) || {}), d(), v(), Object(a.render)())
	}
	te(!0);
	var ne = !1;

	function re(e) {
		console.log("Connected to game server: ".concat(e)), ne = !0, F.classList.add("hide"), q.classList.remove("hide"), r.respawningWithKey || (H.textContent = ""), Q.focus(), "" == r.key || r.respawningWithKey || (he(0), fe(), Object(h.a)(), le())
	}

	function ae(e) {
		console.log("Connected to hub server: ".concat(e))
	}

	function oe() {
		Object(r.disconnectFromServer)(!1), document.getElementById("disconnect-modal").classList.remove("hide"), document.getElementById("reconnect-button").onclick = function() {
			//window.location.reload()
		}
	}

	function ie(e) {
		ne = !1, Object(o.q)(), Object(a.stopRendering)(), Object(i.a)(), ee = 2, m(), F.textContent = "" == e ? "Connecting..." : e, F.classList.remove("hide"), q.classList.add("hide"), C.classList.add("hide"), B.classList.add("hide"), te(), r.respawningWithKey && (C.classList.remove("hide"), B.classList.remove("hide"), X.classList.add("hidden"), ee = 1)
	}

	function ue(e) {
		if (0 == e[0].length) {
			if (2 != ee) return void console.log("No servers found, ignoring because in-game.");
			oe(), console.log("No servers found.")
		}
		T = e[0];
		e[1], e[2];
		var t = e[3],
			n = e[4];
		console.log("Recieved Servers: ".concat(JSON.stringify(T))), J.innerHTML = "";
		for (var r, a = "", o = 0; o < T.length; o++) {
			var i = T[o];
			a += '<option style="background-color:'.concat((r = i.gamemode, u.GAMEMODE_COLORS[r] || u.TEAM_COLORS[0]), '" value="').concat(o, '">').concat(ce(i.gamemode), " - ").concat(i.region, " - ").concat(i.players, " player").concat(1 == i.players ? "" : "s", "</option>")
		}
		J.innerHTML = a;
		var s = Ee(u.COOKIES.GAMEMODE);
		if (J.options[s]) J.selectedIndex = s;
		else {
			for (var l = 1e200, d = 0, f = 0; f < T.length; f++) {
				var h = T[f];
				h.players < l && (l = h.players, d = f)
			}
			J.selectedIndex = d
		}
		Object(c.w)(t, n), se()
	}

	function se() {
		var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
			t = J.options[J.selectedIndex],
			n = T[J.selectedIndex];
		if (be(u.COOKIES.GAMEMODE, J.selectedIndex), t && (J.style.backgroundColor = t.style.backgroundColor), n && 2 == ee && e) {
			var a = r.socket.closed;
			Object(r.clearKey)(), Object(r.disconnectFromServer)(!1);
			var o = setInterval((function() {
				r.socket.closed || a ? (console.log("Attempting to connect to game server: ".concat(n.address)), Object(r.connectToServer)(n.address, n.hybrid), clearInterval(o)) : console.warn("Socket is still connected, waiting for disconnect.")
			}), 10)
		}
	}

	function ce(e) {
		return u.GAMEMODE_NAMES[e] || "???"
	}

	function le() {
		2 == ee ? (0 == A && ne && !R && (Object(a.updateDebugMode)(), Object(o.g)(), Object(r.play)(Q.value), Object(a.setCanvasDimensions)(), Object(i.a)(), be(u.COOKIES.USERNAME, Q.value, 1e5), X.classList.add("hidden"), Z.classList.add("hide"), $.classList.add("hidden"), Object(i.d)(), Object(o.p)(), Object(a.startRendering)(), Object(a.setCanvasDimensions)(), ee = 0, setTimeout((function() {
			Ee(u.COOKIES.TUTORIAL.MOVE) || c.F || (Object(c.v)("Press the WASD or arrow keys to move."), be(u.COOKIES.TUTORIAL.MOVE, !0, 300))
		}), 1e3), Object(r.clearKey)()), O && document.documentElement.webkitRequestFullScreen()) : 1 == ee ? (C.classList.add("hide"), B.classList.add("hide"), X.classList.remove("hidden"), Q.focus(), ee = 2, m()) : h.f.showChat && a.showingChatBox && (E === document.activeElement ? (E.blur(), "" != E.value.trim() && M.push(E.value), Object(r.sendChatMessage)(E.value), E.value = "", S = -1) : (E.focus(), Object(o.f)(), Object(o.l)(), S = -1))
	}

	function de() {
		D.classList.remove("hide"), R = !0
	}

	function fe() {
		D.classList.add("hide"), R = !1
	}

	function he(e) {
		if (A = e, 0 == e) K.classList.add("hide");
		else {
			K.classList.remove("hide"), z.value = "", W.value = "";
			var t = 2 == e ? "Submit Feedback" : "Report Bug",
				n = 2 == e ? "Feedback:" : "Explain the bug in detail:";
			G.textContent = t, Y.textContent = n
		}
	}

	function pe() {
		0 != A && Object(r.submitForm)(A, z.value, W.value, Q.value), he(0)
	}

	function ge(e) {
		return -1 !== "aeiouAEIOU".indexOf(e[0])
	}

	function ve(e) {
		return null == e ? void 0 : e.toString().replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
	}

	function _e(e) {
		Object(i.b)(), Object(h.a)(), Object(a.setLastTank)(e.lastTank);
		var t = Object(y.getXPLevel)(e.respawnXP);
		H.textContent = t > 1 ? "You will respawn at level ".concat(t) : "", e.server && Object(r.respawnInServer)(e.server.address, e.server.key), gtag("event", u.ANALYTICS_EVENTS.DEATH, {
			timeAlive: e.timeAlive
		});
		var n = ve(Object(y.arrayToSentence)(e.killers.map((function(e) {
			return h.f.showNames ? "" != e.name ? e.name : "an unnamed ".concat(e.className) : "a".concat(ge(e.className) ? "n" : "", " ").concat(e.className)
		}))));
		0 == ee ? (P.innerHTML = "you were killed by ".concat(n), x.innerHTML = "\n\t\t\t\tLevel ".concat(e.level, " ").concat(a.lastTank.className, "\n\t\t\t\t<br />\n\t\t\t\t<br />\n\t\t\t\tTime Played: ").concat(e.timeAlive, "\n\t\t\t\t<br />\n\t\t\t\tScore: ").concat(Te(e.score), "\n\t\t\t\t<br />\n\t\t\t\tKills: ").concat(e.kills), ee = 1, document.getElementById("main-menu-button").onclick = function() {
			le()
		}, Object(o.q)(), Object(a.stopRendering)(), C.classList.remove("hide"), B.classList.remove("hide"), Z.classList.remove("hide"), $.classList.remove("hidden")) : ee = 2, m(), _()
	}

	function me(e) {
		e.keyCode == h.b.enter ? le() : e.keyCode == h.b.openCommand && 0 == ee && E !== document.activeElement && h.f.showChat && a.showingChatBox && (E.value = "", E.focus(), Object(o.f)(), Object(o.l)(), S = -1), E == document.activeElement && (e.keyCode == h.b.escape ? (E.blur(), E.value = "", S = -1) : e.keyCode == h.b.previousChatMessage ? (S < 0 ? ((w = [].concat(M)).push(E.value), 0 != (S = w.length - 1) && S--) : 0 == S || S--, S < 0 || (E.value = w[S])) : e.keyCode == h.b.nextChatMessage && -1 != S && S < w.length - 1 && (S++, E.value = w[S]))
	}

	function ye(e) {
		b && E && (b.style.right = 30 / e + "px", b.style.top = 260 / e + "px", E.style.borderRadius = 5 / e + "px", E.style.padding = 3 / e + "px", E.style.fontSize = 18 / e + "px", E.style.marginBottom = 5 / e + "px", E.style.width = 220 / e + "px")
	}

	function be(e, t, n) {
		var r = "";
		if (n) {
			var a = new Date;
			a.setTime(a.getTime() + 24 * n * 60 * 60 * 1e3), r = "; expires=" + a.toUTCString()
		}
		document.cookie = e + "=" + (t || "") + r + "; path=/"
	}

	function Ee(e) {
		for (var t = e + "=", n = document.cookie.split(";"), r = 0; r < n.length; r++) {
			for (var a = n[r];
				" " == a.charAt(0);) a = a.substring(1, a.length);
			if (0 == a.indexOf(t)) return a.substring(t.length, a.length)
		}
		return null
	}

	function Oe(e) {
		document.cookie = e + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"
	}

	function Te(e) {
		var t = Math.sign(e),
			n = Math.abs(e);
		if (!Number.isFinite(n) || Number.isNaN(e) || null == e) return (-1 == t ? "-" : "") + "∞";
		if (n < 1e3) return (-1 == t ? "-" : "") + Math.round(n).toString();
		for (var r = 0; n > 999;) r++, n /= 1e3;
		return (-1 == t ? "-" : "") + (n = n < 10 ? Math.round(100 * n) / 100 : n < 100 ? Math.round(10 * n) / 10 : Math.round(n)).toString() + s.a.NUMBER_ENDINGS[Math.min(r - 1, s.a.NUMBER_ENDINGS.length - 1)]
	}
}, function(e, t, n) {
	"use strict";
	n.d(t, "m", (function() {
		return O
	})), n.d(t, "b", (function() {
		return T
	})), n.d(t, "k", (function() {
		return h
	})), n.d(t, "s", (function() {
		return w
	})), n.d(t, "c", (function() {
		return S
	})), n.d(t, "a", (function() {
		return R
	})), n.d(t, "i", (function() {
		return P
	})), n.d(t, "g", (function() {
		return C
	})), n.d(t, "o", (function() {
		return B
	})), n.d(t, "j", (function() {
		return D
	})), n.d(t, "r", (function() {
		return L
	})), n.d(t, "h", (function() {
		return N
	})), n.d(t, "l", (function() {
		return W
	})), n.d(t, "e", (function() {
		return K
	})), n.d(t, "n", (function() {
		return q
	})), n.d(t, "d", (function() {
		return Z
	})), n.d(t, "p", (function() {
		return $
	})), n.d(t, "f", (function() {
		return Q
	})), n.d(t, "q", (function() {
		return ee
	}));
	var r = n(4),
		a = n(6),
		o = n(2),
		i = n(1),
		u = n(5),
		s = n(3);

	function c(e, t) {
		return function(e) {
			if (Array.isArray(e)) return e
		}(e) || function(e, t) {
			var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
			if (null == n) return;
			var r, a, o = [],
				i = !0,
				u = !1;
			try {
				for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0);
			} catch (e) {
				u = !0, a = e
			} finally {
				try {
					i || null == n.return || n.return()
				} finally {
					if (u) throw a
				}
			}
			return o
		}(e, t) || function(e, t) {
			if (!e) return;
			if ("string" == typeof e) return l(e, t);
			var n = Object.prototype.toString.call(e).slice(8, -1);
			"Object" === n && e.constructor && (n = e.constructor.name);
			if ("Map" === n || "Set" === n) return Array.from(e);
			if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
		}(e, t) || function() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}()
	}

	function l(e, t) {
		(null == t || t > e.length) && (t = e.length);
		for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
		return r
	}
	var d, f, h, p = n(4),
		g = n(7),
		v = n(6),
		_ = n(2),
		m = {},
		y = {},
		b = 0,
		E = 0,
		O = 0,
		T = 1,
		M = !1,
		w = !1,
		S = !1,
		A = !1,
		R = !1,
		I = !1,
		P = !1,
		x = !1;

	function C() {
		A = !1, R = !1, I = !1, x = !1
	}

	function B() {
		A = !1, R = !1, w = !1, S = !1
	}
	var D = document.getElementById("debug-mode");

	function k(e) {
		J(e.clientX, e.clientY), h = e.clientY > window.innerHeight - 150 / a.scaleRatio && Math.abs(e.clientX - window.innerWidth / 2) > window.innerWidth / 2 - 300 / a.scaleRatio
	}

	function j(e) {
		var t = e.touches[0];
		J(t.clientX, t.clientY)
	}

	function L(e) {
		i.C > 0 && e < 9 && e > 0 && i.D[e - 1] != _.MAX_UPGRADE_POINTS && (Object(i.I)(e), Object(r.statUpgrade)(e))
	}

	function U(e) {
		var t = e.keyCode;
		if (g.chatInput !== document.activeElement && !s.g) {
			var n = document.activeElement.tagName.toLowerCase();
			t != s.b.autoFire || u.d ? t != s.b.autoSpin || u.d ? t != s.b.spinLock || u.d ? t != s.b.debugMode || u.d ? t != s.b.passiveMode || u.d ? t != s.b.screenshotMode || u.d ? t == s.b.settings && "input" !== n && "textarea" !== n ? s.g ? Object(s.a)() : Object(s.e)() : u.d || Number.isNaN(e.key) || e.key > 0 && L(e.key) : u.d || (g.getCookie(o.COOKIES.TUTORIAL.SCREENSHOT_MODE) || i.F ? v.setHUDRendering(!v.renderingHUD) : (Object(i.B)(!0), g.setCookie(o.COOKIES.TUTORIAL.SCREENSHOT_MODE, !0, 255), setTimeout((function() {
				Object(i.v)("Pressing ".concat(s.c[t], " again will enable screenshot mode. This will hide all HUD elements."))
			}), 0), Object(i.B)(!1))) : (x = !x, p.togglePassiveMode(x), Object(i.v)("Passive Mode (".concat(s.c[t], "): ").concat(x ? "ON" : "OFF"))) : ((P = !P) ? D.classList.remove("hide") : D.classList.add("hide"), Object(i.v)("Debug Mode (".concat(s.c[t], "): ").concat(P ? "ON" : "OFF"))) : (I = !I, Object(i.v)("Spin Lock (".concat(s.c[t], "): ").concat(I ? "ON" : "OFF"))) : ((R = !R) || (T *= -1), Object(i.v)("Auto Spin (".concat(s.c[t], "): ").concat(R ? "ON" : "OFF"))) : (A = !A, G(), Object(i.v)("Auto Fire (".concat(s.c[t], "): ").concat(A ? "ON" : "OFF")), K(M), A || Object(r.updateShooting)(M), y[1] = !1, Y()), u.d || (m[t] = !0), W()
		}
	}

	function N(e) {
		Object(i.v)("Copied ".concat(e.name, "'s ID to clipboard. (").concat(e.id, ")")), navigator.clipboard.writeText(e.id)
	}

	function z(e) {
		var t = e.keyCode;
		g.chatInput === document.activeElement || u.d || (m[t] = !1, W())
	}

	function W() {
		var e = 0,
			t = 0;
		m[s.b.weaponTree] ? (w || v.loadUpgradeTree(!0), w = !0) : w = !1, m[s.b.bodyTree] ? (S || v.loadUpgradeTree(!1), S = !0) : S = !1, (m[s.b.moveUp] || m[s.b.moveUpAlt]) && t++, (m[s.b.moveDown] || m[s.b.moveDownAlt]) && t--, (m[s.b.moveLeft] || m[s.b.moveLeftAlt]) && e--, (m[s.b.moveRight] || m[s.b.moveRightAlt]) && e++, b == e && E == t || (b = e, E = t, Object(r.updateInput)(b, E))
	}

	function K(e) {
		u.d ? Object(r.updateShooting)(!1) : A ? Object(r.updateShooting)(!0) : M != e && (M = e, Object(r.updateShooting)(e))
	}

	function G() {
		for (var e = 0, t = Object.entries(y); e < t.length; e++) {
			var n = c(t[e], 2),
				r = n[0];
			n[1];
			y[r] = !1
		}
		Y(), K(!1)
	}

	function Y() {
		var e = 0;
		y[1] && (e = 1), y[3] && (e = 2), 2 == e ? Object(r.changeControlState)(e) : A ? Object(r.changeControlState)(1) : Object(r.changeControlState)(e)
	}

	function F(e) {
		var t = Date.now();
		t - d < 1e3 ? ++f > 4 && (g.getCookie(o.COOKIES.TUTORIAL.AUTO_FIRE) || i.F || (Object(i.B)(!0), g.setCookie(o.COOKIES.TUTORIAL.AUTO_FIRE, !0, 70), setTimeout((function() {
			Object(i.v)("Hold down click to shoot automatically.")
		}), 1e3), setTimeout((function() {
			Object(i.v)("You can also press E to turn on auto fire.")
		}), 8e3), Object(i.B)(!1))) : f = 0, d = t, v.clickMouse({
			x: e.x * a.scaleRatio,
			y: e.y * a.scaleRatio
		}) || (G(), y[e.which] = !0, Y(), K(!0))
	}

	function H(e) {
		y[e.which] = !1, Y(), K(!1)
	}

	function q(e) {
		O = e, Object(r.updateDirection)(e)
	}
	var X = 0,
		V = 0;

	function J(e, t) {
		V = t;
		var n = ((X = e) - window.innerWidth / 2 + a.offsetX) * a.screenSize * a.scaleRatio,
			o = (V - window.innerHeight / 2 + a.offsetY) * a.screenSize * a.scaleRatio;
		Object(r.changeControlPosition)(n, o)
	}

	function Z() {
		(!R && !I || u.d) && (O = u.d ? 1.5708 : Math.atan2(X - (window.innerWidth / 2 + a.offsetX / a.screenSize), window.innerHeight / 2 + a.offsetY / a.screenSize - V), Object(r.updateDirection)(O))
	}

	function $() {
		window.addEventListener("mousedown", F), window.addEventListener("mouseup", H), window.addEventListener("keydown", U), window.addEventListener("keyup", z), window.addEventListener("mousemove", k), window.addEventListener("click", k), window.addEventListener("touchstart", j), window.addEventListener("touchmove", j), window.addEventListener("focus", Q), window.addEventListener("blur", Q)
	}

	function Q() {
		for (var e = 0, t = Object.entries(m); e < t.length; e++) {
			var n = c(t[e], 2),
				r = n[0];
			n[1];
			m[r] = !1
		}
		W()
	}

	function ee() {
		Q(), M = !1, window.removeEventListener("mousedown", F), window.removeEventListener("mouseup", H), window.removeEventListener("keydown", U), window.removeEventListener("keyup", z), window.removeEventListener("mousemove", k), window.removeEventListener("click", k), window.removeEventListener("touchstart", j), window.removeEventListener("touchmove", j), window.removeEventListener("focus", Q), window.removeEventListener("blur", Q)
	}
}, function(e, t, n) {
	(function(e, r) {
		var a;
		/**
		 * @license
		 * Lodash <https://lodash.com/>
		 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
		 * Released under MIT license <https://lodash.com/license>
		 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
		 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
		 */
		(function() {
			var o = "Expected a function",
				i = "__lodash_placeholder__",
				u = [
					["ary", 128],
					["bind", 1],
					["bindKey", 2],
					["curry", 8],
					["curryRight", 16],
					["flip", 512],
					["partial", 32],
					["partialRight", 64],
					["rearg", 256]
				],
				s = "[object Arguments]",
				c = "[object Array]",
				l = "[object Boolean]",
				d = "[object Date]",
				f = "[object Error]",
				h = "[object Function]",
				p = "[object GeneratorFunction]",
				g = "[object Map]",
				v = "[object Number]",
				_ = "[object Object]",
				m = "[object RegExp]",
				y = "[object Set]",
				b = "[object String]",
				E = "[object Symbol]",
				O = "[object WeakMap]",
				T = "[object ArrayBuffer]",
				M = "[object DataView]",
				w = "[object Float32Array]",
				S = "[object Float64Array]",
				A = "[object Int8Array]",
				R = "[object Int16Array]",
				I = "[object Int32Array]",
				P = "[object Uint8Array]",
				x = "[object Uint16Array]",
				C = "[object Uint32Array]",
				B = /\b__p \+= '';/g,
				D = /\b(__p \+=) '' \+/g,
				k = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
				j = /&(?:amp|lt|gt|quot|#39);/g,
				L = /[&<>"']/g,
				U = RegExp(j.source),
				N = RegExp(L.source),
				z = /<%-([\s\S]+?)%>/g,
				W = /<%([\s\S]+?)%>/g,
				K = /<%=([\s\S]+?)%>/g,
				G = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
				Y = /^\w*$/,
				F = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
				H = /[\\^$.*+?()[\]{}|]/g,
				q = RegExp(H.source),
				X = /^\s+/,
				V = /\s/,
				J = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
				Z = /\{\n\/\* \[wrapped with (.+)\] \*/,
				$ = /,? & /,
				Q = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
				ee = /[()=,{}\[\]\/\s]/,
				te = /\\(\\)?/g,
				ne = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
				re = /\w*$/,
				ae = /^[-+]0x[0-9a-f]+$/i,
				oe = /^0b[01]+$/i,
				ie = /^\[object .+?Constructor\]$/,
				ue = /^0o[0-7]+$/i,
				se = /^(?:0|[1-9]\d*)$/,
				ce = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
				le = /($^)/,
				de = /['\n\r\u2028\u2029\\]/g,
				fe = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
				he = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
				pe = "[\\ud800-\\udfff]",
				ge = "[" + he + "]",
				ve = "[" + fe + "]",
				_e = "\\d+",
				me = "[\\u2700-\\u27bf]",
				ye = "[a-z\\xdf-\\xf6\\xf8-\\xff]",
				be = "[^\\ud800-\\udfff" + he + _e + "\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",
				Ee = "\\ud83c[\\udffb-\\udfff]",
				Oe = "[^\\ud800-\\udfff]",
				Te = "(?:\\ud83c[\\udde6-\\uddff]){2}",
				Me = "[\\ud800-\\udbff][\\udc00-\\udfff]",
				we = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
				Se = "(?:" + ye + "|" + be + ")",
				Ae = "(?:" + we + "|" + be + ")",
				Re = "(?:" + ve + "|" + Ee + ")" + "?",
				Ie = "[\\ufe0e\\ufe0f]?" + Re + ("(?:\\u200d(?:" + [Oe, Te, Me].join("|") + ")[\\ufe0e\\ufe0f]?" + Re + ")*"),
				Pe = "(?:" + [me, Te, Me].join("|") + ")" + Ie,
				xe = "(?:" + [Oe + ve + "?", ve, Te, Me, pe].join("|") + ")",
				Ce = RegExp("['’]", "g"),
				Be = RegExp(ve, "g"),
				De = RegExp(Ee + "(?=" + Ee + ")|" + xe + Ie, "g"),
				ke = RegExp([we + "?" + ye + "+(?:['’](?:d|ll|m|re|s|t|ve))?(?=" + [ge, we, "$"].join("|") + ")", Ae + "+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=" + [ge, we + Se, "$"].join("|") + ")", we + "?" + Se + "+(?:['’](?:d|ll|m|re|s|t|ve))?", we + "+(?:['’](?:D|LL|M|RE|S|T|VE))?", "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", _e, Pe].join("|"), "g"),
				je = RegExp("[\\u200d\\ud800-\\udfff" + fe + "\\ufe0e\\ufe0f]"),
				Le = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
				Ue = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
				Ne = -1,
				ze = {};
			ze[w] = ze[S] = ze[A] = ze[R] = ze[I] = ze[P] = ze["[object Uint8ClampedArray]"] = ze[x] = ze[C] = !0, ze[s] = ze[c] = ze[T] = ze[l] = ze[M] = ze[d] = ze[f] = ze[h] = ze[g] = ze[v] = ze[_] = ze[m] = ze[y] = ze[b] = ze[O] = !1;
			var We = {};
			We[s] = We[c] = We[T] = We[M] = We[l] = We[d] = We[w] = We[S] = We[A] = We[R] = We[I] = We[g] = We[v] = We[_] = We[m] = We[y] = We[b] = We[E] = We[P] = We["[object Uint8ClampedArray]"] = We[x] = We[C] = !0, We[f] = We[h] = We[O] = !1;
			var Ke = {
					"\\": "\\",
					"'": "'",
					"\n": "n",
					"\r": "r",
					"\u2028": "u2028",
					"\u2029": "u2029"
				},
				Ge = parseFloat,
				Ye = parseInt,
				Fe = "object" == typeof e && e && e.Object === Object && e,
				He = "object" == typeof self && self && self.Object === Object && self,
				qe = Fe || He || Function("return this")(),
				Xe = t && !t.nodeType && t,
				Ve = Xe && "object" == typeof r && r && !r.nodeType && r,
				Je = Ve && Ve.exports === Xe,
				Ze = Je && Fe.process,
				$e = function() {
					try {
						var e = Ve && Ve.require && Ve.require("util").types;
						return e || Ze && Ze.binding && Ze.binding("util")
					} catch (e) {}
				}(),
				Qe = $e && $e.isArrayBuffer,
				et = $e && $e.isDate,
				tt = $e && $e.isMap,
				nt = $e && $e.isRegExp,
				rt = $e && $e.isSet,
				at = $e && $e.isTypedArray;

			function ot(e, t, n) {
				switch (n.length) {
					case 0:
						return e.call(t);
					case 1:
						return e.call(t, n[0]);
					case 2:
						return e.call(t, n[0], n[1]);
					case 3:
						return e.call(t, n[0], n[1], n[2])
				}
				return e.apply(t, n)
			}

			function it(e, t, n, r) {
				for (var a = -1, o = null == e ? 0 : e.length; ++a < o;) {
					var i = e[a];
					t(r, i, n(i), e)
				}
				return r
			}

			function ut(e, t) {
				for (var n = -1, r = null == e ? 0 : e.length; ++n < r && !1 !== t(e[n], n, e););
				return e
			}

			function st(e, t) {
				for (var n = null == e ? 0 : e.length; n-- && !1 !== t(e[n], n, e););
				return e
			}

			function ct(e, t) {
				for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
					if (!t(e[n], n, e)) return !1;
				return !0
			}

			function lt(e, t) {
				for (var n = -1, r = null == e ? 0 : e.length, a = 0, o = []; ++n < r;) {
					var i = e[n];
					t(i, n, e) && (o[a++] = i)
				}
				return o
			}

			function dt(e, t) {
				return !!(null == e ? 0 : e.length) && Et(e, t, 0) > -1
			}

			function ft(e, t, n) {
				for (var r = -1, a = null == e ? 0 : e.length; ++r < a;)
					if (n(t, e[r])) return !0;
				return !1
			}

			function ht(e, t) {
				for (var n = -1, r = null == e ? 0 : e.length, a = Array(r); ++n < r;) a[n] = t(e[n], n, e);
				return a
			}

			function pt(e, t) {
				for (var n = -1, r = t.length, a = e.length; ++n < r;) e[a + n] = t[n];
				return e
			}

			function gt(e, t, n, r) {
				var a = -1,
					o = null == e ? 0 : e.length;
				for (r && o && (n = e[++a]); ++a < o;) n = t(n, e[a], a, e);
				return n
			}

			function vt(e, t, n, r) {
				var a = null == e ? 0 : e.length;
				for (r && a && (n = e[--a]); a--;) n = t(n, e[a], a, e);
				return n
			}

			function _t(e, t) {
				for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
					if (t(e[n], n, e)) return !0;
				return !1
			}
			var mt = wt("length");

			function yt(e, t, n) {
				var r;
				return n(e, (function(e, n, a) {
					if (t(e, n, a)) return r = n, !1
				})), r
			}

			function bt(e, t, n, r) {
				for (var a = e.length, o = n + (r ? 1 : -1); r ? o-- : ++o < a;)
					if (t(e[o], o, e)) return o;
				return -1
			}

			function Et(e, t, n) {
				return t == t ? function(e, t, n) {
					var r = n - 1,
						a = e.length;
					for (; ++r < a;)
						if (e[r] === t) return r;
					return -1
				}(e, t, n) : bt(e, Tt, n)
			}

			function Ot(e, t, n, r) {
				for (var a = n - 1, o = e.length; ++a < o;)
					if (r(e[a], t)) return a;
				return -1
			}

			function Tt(e) {
				return e != e
			}

			function Mt(e, t) {
				var n = null == e ? 0 : e.length;
				return n ? Rt(e, t) / n : NaN
			}

			function wt(e) {
				return function(t) {
					return null == t ? void 0 : t[e]
				}
			}

			function St(e) {
				return function(t) {
					return null == e ? void 0 : e[t]
				}
			}

			function At(e, t, n, r, a) {
				return a(e, (function(e, a, o) {
					n = r ? (r = !1, e) : t(n, e, a, o)
				})), n
			}

			function Rt(e, t) {
				for (var n, r = -1, a = e.length; ++r < a;) {
					var o = t(e[r]);
					void 0 !== o && (n = void 0 === n ? o : n + o)
				}
				return n
			}

			function It(e, t) {
				for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
				return r
			}

			function Pt(e) {
				return e ? e.slice(0, Xt(e) + 1).replace(X, "") : e
			}

			function xt(e) {
				return function(t) {
					return e(t)
				}
			}

			function Ct(e, t) {
				return ht(t, (function(t) {
					return e[t]
				}))
			}

			function Bt(e, t) {
				return e.has(t)
			}

			function Dt(e, t) {
				for (var n = -1, r = e.length; ++n < r && Et(t, e[n], 0) > -1;);
				return n
			}

			function kt(e, t) {
				for (var n = e.length; n-- && Et(t, e[n], 0) > -1;);
				return n
			}

			function jt(e, t) {
				for (var n = e.length, r = 0; n--;) e[n] === t && ++r;
				return r
			}
			var Lt = St({
					"À": "A",
					"Á": "A",
					"Â": "A",
					"Ã": "A",
					"Ä": "A",
					"Å": "A",
					"à": "a",
					"á": "a",
					"â": "a",
					"ã": "a",
					"ä": "a",
					"å": "a",
					"Ç": "C",
					"ç": "c",
					"Ð": "D",
					"ð": "d",
					"È": "E",
					"É": "E",
					"Ê": "E",
					"Ë": "E",
					"è": "e",
					"é": "e",
					"ê": "e",
					"ë": "e",
					"Ì": "I",
					"Í": "I",
					"Î": "I",
					"Ï": "I",
					"ì": "i",
					"í": "i",
					"î": "i",
					"ï": "i",
					"Ñ": "N",
					"ñ": "n",
					"Ò": "O",
					"Ó": "O",
					"Ô": "O",
					"Õ": "O",
					"Ö": "O",
					"Ø": "O",
					"ò": "o",
					"ó": "o",
					"ô": "o",
					"õ": "o",
					"ö": "o",
					"ø": "o",
					"Ù": "U",
					"Ú": "U",
					"Û": "U",
					"Ü": "U",
					"ù": "u",
					"ú": "u",
					"û": "u",
					"ü": "u",
					"Ý": "Y",
					"ý": "y",
					"ÿ": "y",
					"Æ": "Ae",
					"æ": "ae",
					"Þ": "Th",
					"þ": "th",
					"ß": "ss",
					"Ā": "A",
					"Ă": "A",
					"Ą": "A",
					"ā": "a",
					"ă": "a",
					"ą": "a",
					"Ć": "C",
					"Ĉ": "C",
					"Ċ": "C",
					"Č": "C",
					"ć": "c",
					"ĉ": "c",
					"ċ": "c",
					"č": "c",
					"Ď": "D",
					"Đ": "D",
					"ď": "d",
					"đ": "d",
					"Ē": "E",
					"Ĕ": "E",
					"Ė": "E",
					"Ę": "E",
					"Ě": "E",
					"ē": "e",
					"ĕ": "e",
					"ė": "e",
					"ę": "e",
					"ě": "e",
					"Ĝ": "G",
					"Ğ": "G",
					"Ġ": "G",
					"Ģ": "G",
					"ĝ": "g",
					"ğ": "g",
					"ġ": "g",
					"ģ": "g",
					"Ĥ": "H",
					"Ħ": "H",
					"ĥ": "h",
					"ħ": "h",
					"Ĩ": "I",
					"Ī": "I",
					"Ĭ": "I",
					"Į": "I",
					"İ": "I",
					"ĩ": "i",
					"ī": "i",
					"ĭ": "i",
					"į": "i",
					"ı": "i",
					"Ĵ": "J",
					"ĵ": "j",
					"Ķ": "K",
					"ķ": "k",
					"ĸ": "k",
					"Ĺ": "L",
					"Ļ": "L",
					"Ľ": "L",
					"Ŀ": "L",
					"Ł": "L",
					"ĺ": "l",
					"ļ": "l",
					"ľ": "l",
					"ŀ": "l",
					"ł": "l",
					"Ń": "N",
					"Ņ": "N",
					"Ň": "N",
					"Ŋ": "N",
					"ń": "n",
					"ņ": "n",
					"ň": "n",
					"ŋ": "n",
					"Ō": "O",
					"Ŏ": "O",
					"Ő": "O",
					"ō": "o",
					"ŏ": "o",
					"ő": "o",
					"Ŕ": "R",
					"Ŗ": "R",
					"Ř": "R",
					"ŕ": "r",
					"ŗ": "r",
					"ř": "r",
					"Ś": "S",
					"Ŝ": "S",
					"Ş": "S",
					"Š": "S",
					"ś": "s",
					"ŝ": "s",
					"ş": "s",
					"š": "s",
					"Ţ": "T",
					"Ť": "T",
					"Ŧ": "T",
					"ţ": "t",
					"ť": "t",
					"ŧ": "t",
					"Ũ": "U",
					"Ū": "U",
					"Ŭ": "U",
					"Ů": "U",
					"Ű": "U",
					"Ų": "U",
					"ũ": "u",
					"ū": "u",
					"ŭ": "u",
					"ů": "u",
					"ű": "u",
					"ų": "u",
					"Ŵ": "W",
					"ŵ": "w",
					"Ŷ": "Y",
					"ŷ": "y",
					"Ÿ": "Y",
					"Ź": "Z",
					"Ż": "Z",
					"Ž": "Z",
					"ź": "z",
					"ż": "z",
					"ž": "z",
					"Ĳ": "IJ",
					"ĳ": "ij",
					"Œ": "Oe",
					"œ": "oe",
					"ŉ": "'n",
					"ſ": "s"
				}),
				Ut = St({
					"&": "&amp;",
					"<": "&lt;",
					">": "&gt;",
					'"': "&quot;",
					"'": "&#39;"
				});

			function Nt(e) {
				return "\\" + Ke[e]
			}

			function zt(e) {
				return je.test(e)
			}

			function Wt(e) {
				var t = -1,
					n = Array(e.size);
				return e.forEach((function(e, r) {
					n[++t] = [r, e]
				})), n
			}

			function Kt(e, t) {
				return function(n) {
					return e(t(n))
				}
			}

			function Gt(e, t) {
				for (var n = -1, r = e.length, a = 0, o = []; ++n < r;) {
					var u = e[n];
					u !== t && u !== i || (e[n] = i, o[a++] = n)
				}
				return o
			}

			function Yt(e) {
				var t = -1,
					n = Array(e.size);
				return e.forEach((function(e) {
					n[++t] = e
				})), n
			}

			function Ft(e) {
				var t = -1,
					n = Array(e.size);
				return e.forEach((function(e) {
					n[++t] = [e, e]
				})), n
			}

			function Ht(e) {
				return zt(e) ? function(e) {
					var t = De.lastIndex = 0;
					for (; De.test(e);) ++t;
					return t
				}(e) : mt(e)
			}

			function qt(e) {
				return zt(e) ? function(e) {
					return e.match(De) || []
				}(e) : function(e) {
					return e.split("")
				}(e)
			}

			function Xt(e) {
				for (var t = e.length; t-- && V.test(e.charAt(t)););
				return t
			}
			var Vt = St({
				"&amp;": "&",
				"&lt;": "<",
				"&gt;": ">",
				"&quot;": '"',
				"&#39;": "'"
			});
			var Jt = function e(t) {
				var n, r = (t = null == t ? qe : Jt.defaults(qe.Object(), t, Jt.pick(qe, Ue))).Array,
					a = t.Date,
					V = t.Error,
					fe = t.Function,
					he = t.Math,
					pe = t.Object,
					ge = t.RegExp,
					ve = t.String,
					_e = t.TypeError,
					me = r.prototype,
					ye = fe.prototype,
					be = pe.prototype,
					Ee = t["__core-js_shared__"],
					Oe = ye.toString,
					Te = be.hasOwnProperty,
					Me = 0,
					we = (n = /[^.]+$/.exec(Ee && Ee.keys && Ee.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "",
					Se = be.toString,
					Ae = Oe.call(pe),
					Re = qe._,
					Ie = ge("^" + Oe.call(Te).replace(H, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
					Pe = Je ? t.Buffer : void 0,
					xe = t.Symbol,
					De = t.Uint8Array,
					je = Pe ? Pe.allocUnsafe : void 0,
					Ke = Kt(pe.getPrototypeOf, pe),
					Fe = pe.create,
					He = be.propertyIsEnumerable,
					Xe = me.splice,
					Ve = xe ? xe.isConcatSpreadable : void 0,
					Ze = xe ? xe.iterator : void 0,
					$e = xe ? xe.toStringTag : void 0,
					mt = function() {
						try {
							var e = eo(pe, "defineProperty");
							return e({}, "", {}), e
						} catch (e) {}
					}(),
					St = t.clearTimeout !== qe.clearTimeout && t.clearTimeout,
					Zt = a && a.now !== qe.Date.now && a.now,
					$t = t.setTimeout !== qe.setTimeout && t.setTimeout,
					Qt = he.ceil,
					en = he.floor,
					tn = pe.getOwnPropertySymbols,
					nn = Pe ? Pe.isBuffer : void 0,
					rn = t.isFinite,
					an = me.join,
					on = Kt(pe.keys, pe),
					un = he.max,
					sn = he.min,
					cn = a.now,
					ln = t.parseInt,
					dn = he.random,
					fn = me.reverse,
					hn = eo(t, "DataView"),
					pn = eo(t, "Map"),
					gn = eo(t, "Promise"),
					vn = eo(t, "Set"),
					_n = eo(t, "WeakMap"),
					mn = eo(pe, "create"),
					yn = _n && new _n,
					bn = {},
					En = Ro(hn),
					On = Ro(pn),
					Tn = Ro(gn),
					Mn = Ro(vn),
					wn = Ro(_n),
					Sn = xe ? xe.prototype : void 0,
					An = Sn ? Sn.valueOf : void 0,
					Rn = Sn ? Sn.toString : void 0;

				function In(e) {
					if (Fi(e) && !Di(e) && !(e instanceof Bn)) {
						if (e instanceof Cn) return e;
						if (Te.call(e, "__wrapped__")) return Io(e)
					}
					return new Cn(e)
				}
				var Pn = function() {
					function e() {}
					return function(t) {
						if (!Yi(t)) return {};
						if (Fe) return Fe(t);
						e.prototype = t;
						var n = new e;
						return e.prototype = void 0, n
					}
				}();

				function xn() {}

				function Cn(e, t) {
					this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
				}

				function Bn(e) {
					this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = []
				}

				function Dn(e) {
					var t = -1,
						n = null == e ? 0 : e.length;
					for (this.clear(); ++t < n;) {
						var r = e[t];
						this.set(r[0], r[1])
					}
				}

				function kn(e) {
					var t = -1,
						n = null == e ? 0 : e.length;
					for (this.clear(); ++t < n;) {
						var r = e[t];
						this.set(r[0], r[1])
					}
				}

				function jn(e) {
					var t = -1,
						n = null == e ? 0 : e.length;
					for (this.clear(); ++t < n;) {
						var r = e[t];
						this.set(r[0], r[1])
					}
				}

				function Ln(e) {
					var t = -1,
						n = null == e ? 0 : e.length;
					for (this.__data__ = new jn; ++t < n;) this.add(e[t])
				}

				function Un(e) {
					var t = this.__data__ = new kn(e);
					this.size = t.size
				}

				function Nn(e, t) {
					var n = Di(e),
						r = !n && Bi(e),
						a = !n && !r && Ui(e),
						o = !n && !r && !a && Qi(e),
						i = n || r || a || o,
						u = i ? It(e.length, ve) : [],
						s = u.length;
					for (var c in e) !t && !Te.call(e, c) || i && ("length" == c || a && ("offset" == c || "parent" == c) || o && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || uo(c, s)) || u.push(c);
					return u
				}

				function zn(e) {
					var t = e.length;
					return t ? e[Lr(0, t - 1)] : void 0
				}

				function Wn(e, t) {
					return wo(ma(e), Jn(t, 0, e.length))
				}

				function Kn(e) {
					return wo(ma(e))
				}

				function Gn(e, t, n) {
					(void 0 !== n && !Pi(e[t], n) || void 0 === n && !(t in e)) && Xn(e, t, n)
				}

				function Yn(e, t, n) {
					var r = e[t];
					Te.call(e, t) && Pi(r, n) && (void 0 !== n || t in e) || Xn(e, t, n)
				}

				function Fn(e, t) {
					for (var n = e.length; n--;)
						if (Pi(e[n][0], t)) return n;
					return -1
				}

				function Hn(e, t, n, r) {
					return tr(e, (function(e, a, o) {
						t(r, e, n(e), o)
					})), r
				}

				function qn(e, t) {
					return e && ya(t, Eu(t), e)
				}

				function Xn(e, t, n) {
					"__proto__" == t && mt ? mt(e, t, {
						configurable: !0,
						enumerable: !0,
						value: n,
						writable: !0
					}) : e[t] = n
				}

				function Vn(e, t) {
					for (var n = -1, a = t.length, o = r(a), i = null == e; ++n < a;) o[n] = i ? void 0 : vu(e, t[n]);
					return o
				}

				function Jn(e, t, n) {
					return e == e && (void 0 !== n && (e = e <= n ? e : n), void 0 !== t && (e = e >= t ? e : t)), e
				}

				function Zn(e, t, n, r, a, o) {
					var i, u = 1 & t,
						c = 2 & t,
						f = 4 & t;
					if (n && (i = a ? n(e, r, a, o) : n(e)), void 0 !== i) return i;
					if (!Yi(e)) return e;
					var O = Di(e);
					if (O) {
						if (i = function(e) {
								var t = e.length,
									n = new e.constructor(t);
								t && "string" == typeof e[0] && Te.call(e, "index") && (n.index = e.index, n.input = e.input);
								return n
							}(e), !u) return ma(e, i)
					} else {
						var B = ro(e),
							D = B == h || B == p;
						if (Ui(e)) return fa(e, u);
						if (B == _ || B == s || D && !a) {
							if (i = c || D ? {} : oo(e), !u) return c ? function(e, t) {
								return ya(e, no(e), t)
							}(e, function(e, t) {
								return e && ya(t, Ou(t), e)
							}(i, e)) : function(e, t) {
								return ya(e, to(e), t)
							}(e, qn(i, e))
						} else {
							if (!We[B]) return a ? e : {};
							i = function(e, t, n) {
								var r = e.constructor;
								switch (t) {
									case T:
										return ha(e);
									case l:
									case d:
										return new r(+e);
									case M:
										return function(e, t) {
											var n = t ? ha(e.buffer) : e.buffer;
											return new e.constructor(n, e.byteOffset, e.byteLength)
										}(e, n);
									case w:
									case S:
									case A:
									case R:
									case I:
									case P:
									case "[object Uint8ClampedArray]":
									case x:
									case C:
										return pa(e, n);
									case g:
										return new r;
									case v:
									case b:
										return new r(e);
									case m:
										return function(e) {
											var t = new e.constructor(e.source, re.exec(e));
											return t.lastIndex = e.lastIndex, t
										}(e);
									case y:
										return new r;
									case E:
										return a = e, An ? pe(An.call(a)) : {}
								}
								var a
							}(e, B, u)
						}
					}
					o || (o = new Un);
					var k = o.get(e);
					if (k) return k;
					o.set(e, i), Ji(e) ? e.forEach((function(r) {
						i.add(Zn(r, t, n, r, e, o))
					})) : Hi(e) && e.forEach((function(r, a) {
						i.set(a, Zn(r, t, n, a, e, o))
					}));
					var j = O ? void 0 : (f ? c ? qa : Ha : c ? Ou : Eu)(e);
					return ut(j || e, (function(r, a) {
						j && (r = e[a = r]), Yn(i, a, Zn(r, t, n, a, e, o))
					})), i
				}

				function $n(e, t, n) {
					var r = n.length;
					if (null == e) return !r;
					for (e = pe(e); r--;) {
						var a = n[r],
							o = t[a],
							i = e[a];
						if (void 0 === i && !(a in e) || !o(i)) return !1
					}
					return !0
				}

				function Qn(e, t, n) {
					if ("function" != typeof e) throw new _e(o);
					return Eo((function() {
						e.apply(void 0, n)
					}), t)
				}

				function er(e, t, n, r) {
					var a = -1,
						o = dt,
						i = !0,
						u = e.length,
						s = [],
						c = t.length;
					if (!u) return s;
					n && (t = ht(t, xt(n))), r ? (o = ft, i = !1) : t.length >= 200 && (o = Bt, i = !1, t = new Ln(t));
					e: for (; ++a < u;) {
						var l = e[a],
							d = null == n ? l : n(l);
						if (l = r || 0 !== l ? l : 0, i && d == d) {
							for (var f = c; f--;)
								if (t[f] === d) continue e;
							s.push(l)
						} else o(t, d, r) || s.push(l)
					}
					return s
				}
				In.templateSettings = {
					escape: z,
					evaluate: W,
					interpolate: K,
					variable: "",
					imports: {
						_: In
					}
				}, In.prototype = xn.prototype, In.prototype.constructor = In, Cn.prototype = Pn(xn.prototype), Cn.prototype.constructor = Cn, Bn.prototype = Pn(xn.prototype), Bn.prototype.constructor = Bn, Dn.prototype.clear = function() {
					this.__data__ = mn ? mn(null) : {}, this.size = 0
				}, Dn.prototype.delete = function(e) {
					var t = this.has(e) && delete this.__data__[e];
					return this.size -= t ? 1 : 0, t
				}, Dn.prototype.get = function(e) {
					var t = this.__data__;
					if (mn) {
						var n = t[e];
						return "__lodash_hash_undefined__" === n ? void 0 : n
					}
					return Te.call(t, e) ? t[e] : void 0
				}, Dn.prototype.has = function(e) {
					var t = this.__data__;
					return mn ? void 0 !== t[e] : Te.call(t, e)
				}, Dn.prototype.set = function(e, t) {
					var n = this.__data__;
					return this.size += this.has(e) ? 0 : 1, n[e] = mn && void 0 === t ? "__lodash_hash_undefined__" : t, this
				}, kn.prototype.clear = function() {
					this.__data__ = [], this.size = 0
				}, kn.prototype.delete = function(e) {
					var t = this.__data__,
						n = Fn(t, e);
					return !(n < 0) && (n == t.length - 1 ? t.pop() : Xe.call(t, n, 1), --this.size, !0)
				}, kn.prototype.get = function(e) {
					var t = this.__data__,
						n = Fn(t, e);
					return n < 0 ? void 0 : t[n][1]
				}, kn.prototype.has = function(e) {
					return Fn(this.__data__, e) > -1
				}, kn.prototype.set = function(e, t) {
					var n = this.__data__,
						r = Fn(n, e);
					return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this
				}, jn.prototype.clear = function() {
					this.size = 0, this.__data__ = {
						hash: new Dn,
						map: new(pn || kn),
						string: new Dn
					}
				}, jn.prototype.delete = function(e) {
					var t = $a(this, e).delete(e);
					return this.size -= t ? 1 : 0, t
				}, jn.prototype.get = function(e) {
					return $a(this, e).get(e)
				}, jn.prototype.has = function(e) {
					return $a(this, e).has(e)
				}, jn.prototype.set = function(e, t) {
					var n = $a(this, e),
						r = n.size;
					return n.set(e, t), this.size += n.size == r ? 0 : 1, this
				}, Ln.prototype.add = Ln.prototype.push = function(e) {
					return this.__data__.set(e, "__lodash_hash_undefined__"), this
				}, Ln.prototype.has = function(e) {
					return this.__data__.has(e)
				}, Un.prototype.clear = function() {
					this.__data__ = new kn, this.size = 0
				}, Un.prototype.delete = function(e) {
					var t = this.__data__,
						n = t.delete(e);
					return this.size = t.size, n
				}, Un.prototype.get = function(e) {
					return this.__data__.get(e)
				}, Un.prototype.has = function(e) {
					return this.__data__.has(e)
				}, Un.prototype.set = function(e, t) {
					var n = this.__data__;
					if (n instanceof kn) {
						var r = n.__data__;
						if (!pn || r.length < 199) return r.push([e, t]), this.size = ++n.size, this;
						n = this.__data__ = new jn(r)
					}
					return n.set(e, t), this.size = n.size, this
				};
				var tr = Oa(cr),
					nr = Oa(lr, !0);

				function rr(e, t) {
					var n = !0;
					return tr(e, (function(e, r, a) {
						return n = !!t(e, r, a)
					})), n
				}

				function ar(e, t, n) {
					for (var r = -1, a = e.length; ++r < a;) {
						var o = e[r],
							i = t(o);
						if (null != i && (void 0 === u ? i == i && !$i(i) : n(i, u))) var u = i,
							s = o
					}
					return s
				}

				function or(e, t) {
					var n = [];
					return tr(e, (function(e, r, a) {
						t(e, r, a) && n.push(e)
					})), n
				}

				function ir(e, t, n, r, a) {
					var o = -1,
						i = e.length;
					for (n || (n = io), a || (a = []); ++o < i;) {
						var u = e[o];
						t > 0 && n(u) ? t > 1 ? ir(u, t - 1, n, r, a) : pt(a, u) : r || (a[a.length] = u)
					}
					return a
				}
				var ur = Ta(),
					sr = Ta(!0);

				function cr(e, t) {
					return e && ur(e, t, Eu)
				}

				function lr(e, t) {
					return e && sr(e, t, Eu)
				}

				function dr(e, t) {
					return lt(t, (function(t) {
						return Wi(e[t])
					}))
				}

				function fr(e, t) {
					for (var n = 0, r = (t = sa(t, e)).length; null != e && n < r;) e = e[Ao(t[n++])];
					return n && n == r ? e : void 0
				}

				function hr(e, t, n) {
					var r = t(e);
					return Di(e) ? r : pt(r, n(e))
				}

				function pr(e) {
					return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : $e && $e in pe(e) ? function(e) {
						var t = Te.call(e, $e),
							n = e[$e];
						try {
							e[$e] = void 0;
							var r = !0
						} catch (e) {}
						var a = Se.call(e);
						r && (t ? e[$e] = n : delete e[$e]);
						return a
					}(e) : function(e) {
						return Se.call(e)
					}(e)
				}

				function gr(e, t) {
					return e > t
				}

				function vr(e, t) {
					return null != e && Te.call(e, t)
				}

				function _r(e, t) {
					return null != e && t in pe(e)
				}

				function mr(e, t, n) {
					for (var a = n ? ft : dt, o = e[0].length, i = e.length, u = i, s = r(i), c = 1 / 0, l = []; u--;) {
						var d = e[u];
						u && t && (d = ht(d, xt(t))), c = sn(d.length, c), s[u] = !n && (t || o >= 120 && d.length >= 120) ? new Ln(u && d) : void 0
					}
					d = e[0];
					var f = -1,
						h = s[0];
					e: for (; ++f < o && l.length < c;) {
						var p = d[f],
							g = t ? t(p) : p;
						if (p = n || 0 !== p ? p : 0, !(h ? Bt(h, g) : a(l, g, n))) {
							for (u = i; --u;) {
								var v = s[u];
								if (!(v ? Bt(v, g) : a(e[u], g, n))) continue e
							}
							h && h.push(g), l.push(p)
						}
					}
					return l
				}

				function yr(e, t, n) {
					var r = null == (e = _o(e, t = sa(t, e))) ? e : e[Ao(zo(t))];
					return null == r ? void 0 : ot(r, e, n)
				}

				function br(e) {
					return Fi(e) && pr(e) == s
				}

				function Er(e, t, n, r, a) {
					return e === t || (null == e || null == t || !Fi(e) && !Fi(t) ? e != e && t != t : function(e, t, n, r, a, o) {
						var i = Di(e),
							u = Di(t),
							h = i ? c : ro(e),
							p = u ? c : ro(t),
							O = (h = h == s ? _ : h) == _,
							w = (p = p == s ? _ : p) == _,
							S = h == p;
						if (S && Ui(e)) {
							if (!Ui(t)) return !1;
							i = !0, O = !1
						}
						if (S && !O) return o || (o = new Un), i || Qi(e) ? Ya(e, t, n, r, a, o) : function(e, t, n, r, a, o, i) {
							switch (n) {
								case M:
									if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
									e = e.buffer, t = t.buffer;
								case T:
									return !(e.byteLength != t.byteLength || !o(new De(e), new De(t)));
								case l:
								case d:
								case v:
									return Pi(+e, +t);
								case f:
									return e.name == t.name && e.message == t.message;
								case m:
								case b:
									return e == t + "";
								case g:
									var u = Wt;
								case y:
									var s = 1 & r;
									if (u || (u = Yt), e.size != t.size && !s) return !1;
									var c = i.get(e);
									if (c) return c == t;
									r |= 2, i.set(e, t);
									var h = Ya(u(e), u(t), r, a, o, i);
									return i.delete(e), h;
								case E:
									if (An) return An.call(e) == An.call(t)
							}
							return !1
						}(e, t, h, n, r, a, o);
						if (!(1 & n)) {
							var A = O && Te.call(e, "__wrapped__"),
								R = w && Te.call(t, "__wrapped__");
							if (A || R) {
								var I = A ? e.value() : e,
									P = R ? t.value() : t;
								return o || (o = new Un), a(I, P, n, r, o)
							}
						}
						if (!S) return !1;
						return o || (o = new Un),
							function(e, t, n, r, a, o) {
								var i = 1 & n,
									u = Ha(e),
									s = u.length,
									c = Ha(t).length;
								if (s != c && !i) return !1;
								var l = s;
								for (; l--;) {
									var d = u[l];
									if (!(i ? d in t : Te.call(t, d))) return !1
								}
								var f = o.get(e),
									h = o.get(t);
								if (f && h) return f == t && h == e;
								var p = !0;
								o.set(e, t), o.set(t, e);
								var g = i;
								for (; ++l < s;) {
									d = u[l];
									var v = e[d],
										_ = t[d];
									if (r) var m = i ? r(_, v, d, t, e, o) : r(v, _, d, e, t, o);
									if (!(void 0 === m ? v === _ || a(v, _, n, r, o) : m)) {
										p = !1;
										break
									}
									g || (g = "constructor" == d)
								}
								if (p && !g) {
									var y = e.constructor,
										b = t.constructor;
									y == b || !("constructor" in e) || !("constructor" in t) || "function" == typeof y && y instanceof y && "function" == typeof b && b instanceof b || (p = !1)
								}
								return o.delete(e), o.delete(t), p
							}(e, t, n, r, a, o)
					}(e, t, n, r, Er, a))
				}

				function Or(e, t, n, r) {
					var a = n.length,
						o = a,
						i = !r;
					if (null == e) return !o;
					for (e = pe(e); a--;) {
						var u = n[a];
						if (i && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1
					}
					for (; ++a < o;) {
						var s = (u = n[a])[0],
							c = e[s],
							l = u[1];
						if (i && u[2]) {
							if (void 0 === c && !(s in e)) return !1
						} else {
							var d = new Un;
							if (r) var f = r(c, l, s, e, t, d);
							if (!(void 0 === f ? Er(l, c, 3, r, d) : f)) return !1
						}
					}
					return !0
				}

				function Tr(e) {
					return !(!Yi(e) || (t = e, we && we in t)) && (Wi(e) ? Ie : ie).test(Ro(e));
					var t
				}

				function Mr(e) {
					return "function" == typeof e ? e : null == e ? qu : "object" == typeof e ? Di(e) ? Pr(e[0], e[1]) : Ir(e) : ns(e)
				}

				function wr(e) {
					if (!ho(e)) return on(e);
					var t = [];
					for (var n in pe(e)) Te.call(e, n) && "constructor" != n && t.push(n);
					return t
				}

				function Sr(e) {
					if (!Yi(e)) return function(e) {
						var t = [];
						if (null != e)
							for (var n in pe(e)) t.push(n);
						return t
					}(e);
					var t = ho(e),
						n = [];
					for (var r in e)("constructor" != r || !t && Te.call(e, r)) && n.push(r);
					return n
				}

				function Ar(e, t) {
					return e < t
				}

				function Rr(e, t) {
					var n = -1,
						a = ji(e) ? r(e.length) : [];
					return tr(e, (function(e, r, o) {
						a[++n] = t(e, r, o)
					})), a
				}

				function Ir(e) {
					var t = Qa(e);
					return 1 == t.length && t[0][2] ? go(t[0][0], t[0][1]) : function(n) {
						return n === e || Or(n, e, t)
					}
				}

				function Pr(e, t) {
					return co(e) && po(t) ? go(Ao(e), t) : function(n) {
						var r = vu(n, e);
						return void 0 === r && r === t ? _u(n, e) : Er(t, r, 3)
					}
				}

				function xr(e, t, n, r, a) {
					e !== t && ur(t, (function(o, i) {
						if (a || (a = new Un), Yi(o)) ! function(e, t, n, r, a, o, i) {
							var u = yo(e, n),
								s = yo(t, n),
								c = i.get(s);
							if (c) return void Gn(e, n, c);
							var l = o ? o(u, s, n + "", e, t, i) : void 0,
								d = void 0 === l;
							if (d) {
								var f = Di(s),
									h = !f && Ui(s),
									p = !f && !h && Qi(s);
								l = s, f || h || p ? Di(u) ? l = u : Li(u) ? l = ma(u) : h ? (d = !1, l = fa(s, !0)) : p ? (d = !1, l = pa(s, !0)) : l = [] : Xi(s) || Bi(s) ? (l = u, Bi(u) ? l = uu(u) : Yi(u) && !Wi(u) || (l = oo(s))) : d = !1
							}
							d && (i.set(s, l), a(l, s, r, o, i), i.delete(s));
							Gn(e, n, l)
						}(e, t, i, n, xr, r, a);
						else {
							var u = r ? r(yo(e, i), o, i + "", e, t, a) : void 0;
							void 0 === u && (u = o), Gn(e, i, u)
						}
					}), Ou)
				}

				function Cr(e, t) {
					var n = e.length;
					if (n) return uo(t += t < 0 ? n : 0, n) ? e[t] : void 0
				}

				function Br(e, t, n) {
					t = t.length ? ht(t, (function(e) {
						return Di(e) ? function(t) {
							return fr(t, 1 === e.length ? e[0] : e)
						} : e
					})) : [qu];
					var r = -1;
					return t = ht(t, xt(Za())),
						function(e, t) {
							var n = e.length;
							for (e.sort(t); n--;) e[n] = e[n].value;
							return e
						}(Rr(e, (function(e, n, a) {
							return {
								criteria: ht(t, (function(t) {
									return t(e)
								})),
								index: ++r,
								value: e
							}
						})), (function(e, t) {
							return function(e, t, n) {
								var r = -1,
									a = e.criteria,
									o = t.criteria,
									i = a.length,
									u = n.length;
								for (; ++r < i;) {
									var s = ga(a[r], o[r]);
									if (s) {
										if (r >= u) return s;
										var c = n[r];
										return s * ("desc" == c ? -1 : 1)
									}
								}
								return e.index - t.index
							}(e, t, n)
						}))
				}

				function Dr(e, t, n) {
					for (var r = -1, a = t.length, o = {}; ++r < a;) {
						var i = t[r],
							u = fr(e, i);
						n(u, i) && Kr(o, sa(i, e), u)
					}
					return o
				}

				function kr(e, t, n, r) {
					var a = r ? Ot : Et,
						o = -1,
						i = t.length,
						u = e;
					for (e === t && (t = ma(t)), n && (u = ht(e, xt(n))); ++o < i;)
						for (var s = 0, c = t[o], l = n ? n(c) : c;
							(s = a(u, l, s, r)) > -1;) u !== e && Xe.call(u, s, 1), Xe.call(e, s, 1);
					return e
				}

				function jr(e, t) {
					for (var n = e ? t.length : 0, r = n - 1; n--;) {
						var a = t[n];
						if (n == r || a !== o) {
							var o = a;
							uo(a) ? Xe.call(e, a, 1) : ea(e, a)
						}
					}
					return e
				}

				function Lr(e, t) {
					return e + en(dn() * (t - e + 1))
				}

				function Ur(e, t) {
					var n = "";
					if (!e || t < 1 || t > 9007199254740991) return n;
					do {
						t % 2 && (n += e), (t = en(t / 2)) && (e += e)
					} while (t);
					return n
				}

				function Nr(e, t) {
					return Oo(vo(e, t, qu), e + "")
				}

				function zr(e) {
					return zn(Pu(e))
				}

				function Wr(e, t) {
					var n = Pu(e);
					return wo(n, Jn(t, 0, n.length))
				}

				function Kr(e, t, n, r) {
					if (!Yi(e)) return e;
					for (var a = -1, o = (t = sa(t, e)).length, i = o - 1, u = e; null != u && ++a < o;) {
						var s = Ao(t[a]),
							c = n;
						if ("__proto__" === s || "constructor" === s || "prototype" === s) return e;
						if (a != i) {
							var l = u[s];
							void 0 === (c = r ? r(l, s, u) : void 0) && (c = Yi(l) ? l : uo(t[a + 1]) ? [] : {})
						}
						Yn(u, s, c), u = u[s]
					}
					return e
				}
				var Gr = yn ? function(e, t) {
						return yn.set(e, t), e
					} : qu,
					Yr = mt ? function(e, t) {
						return mt(e, "toString", {
							configurable: !0,
							enumerable: !1,
							value: Yu(t),
							writable: !0
						})
					} : qu;

				function Fr(e) {
					return wo(Pu(e))
				}

				function Hr(e, t, n) {
					var a = -1,
						o = e.length;
					t < 0 && (t = -t > o ? 0 : o + t), (n = n > o ? o : n) < 0 && (n += o), o = t > n ? 0 : n - t >>> 0, t >>>= 0;
					for (var i = r(o); ++a < o;) i[a] = e[a + t];
					return i
				}

				function qr(e, t) {
					var n;
					return tr(e, (function(e, r, a) {
						return !(n = t(e, r, a))
					})), !!n
				}

				function Xr(e, t, n) {
					var r = 0,
						a = null == e ? r : e.length;
					if ("number" == typeof t && t == t && a <= 2147483647) {
						for (; r < a;) {
							var o = r + a >>> 1,
								i = e[o];
							null !== i && !$i(i) && (n ? i <= t : i < t) ? r = o + 1 : a = o
						}
						return a
					}
					return Vr(e, t, qu, n)
				}

				function Vr(e, t, n, r) {
					var a = 0,
						o = null == e ? 0 : e.length;
					if (0 === o) return 0;
					for (var i = (t = n(t)) != t, u = null === t, s = $i(t), c = void 0 === t; a < o;) {
						var l = en((a + o) / 2),
							d = n(e[l]),
							f = void 0 !== d,
							h = null === d,
							p = d == d,
							g = $i(d);
						if (i) var v = r || p;
						else v = c ? p && (r || f) : u ? p && f && (r || !h) : s ? p && f && !h && (r || !g) : !h && !g && (r ? d <= t : d < t);
						v ? a = l + 1 : o = l
					}
					return sn(o, 4294967294)
				}

				function Jr(e, t) {
					for (var n = -1, r = e.length, a = 0, o = []; ++n < r;) {
						var i = e[n],
							u = t ? t(i) : i;
						if (!n || !Pi(u, s)) {
							var s = u;
							o[a++] = 0 === i ? 0 : i
						}
					}
					return o
				}

				function Zr(e) {
					return "number" == typeof e ? e : $i(e) ? NaN : +e
				}

				function $r(e) {
					if ("string" == typeof e) return e;
					if (Di(e)) return ht(e, $r) + "";
					if ($i(e)) return Rn ? Rn.call(e) : "";
					var t = e + "";
					return "0" == t && 1 / e == -1 / 0 ? "-0" : t
				}

				function Qr(e, t, n) {
					var r = -1,
						a = dt,
						o = e.length,
						i = !0,
						u = [],
						s = u;
					if (n) i = !1, a = ft;
					else if (o >= 200) {
						var c = t ? null : Ua(e);
						if (c) return Yt(c);
						i = !1, a = Bt, s = new Ln
					} else s = t ? [] : u;
					e: for (; ++r < o;) {
						var l = e[r],
							d = t ? t(l) : l;
						if (l = n || 0 !== l ? l : 0, i && d == d) {
							for (var f = s.length; f--;)
								if (s[f] === d) continue e;
							t && s.push(d), u.push(l)
						} else a(s, d, n) || (s !== u && s.push(d), u.push(l))
					}
					return u
				}

				function ea(e, t) {
					return null == (e = _o(e, t = sa(t, e))) || delete e[Ao(zo(t))]
				}

				function ta(e, t, n, r) {
					return Kr(e, t, n(fr(e, t)), r)
				}

				function na(e, t, n, r) {
					for (var a = e.length, o = r ? a : -1;
						(r ? o-- : ++o < a) && t(e[o], o, e););
					return n ? Hr(e, r ? 0 : o, r ? o + 1 : a) : Hr(e, r ? o + 1 : 0, r ? a : o)
				}

				function ra(e, t) {
					var n = e;
					return n instanceof Bn && (n = n.value()), gt(t, (function(e, t) {
						return t.func.apply(t.thisArg, pt([e], t.args))
					}), n)
				}

				function aa(e, t, n) {
					var a = e.length;
					if (a < 2) return a ? Qr(e[0]) : [];
					for (var o = -1, i = r(a); ++o < a;)
						for (var u = e[o], s = -1; ++s < a;) s != o && (i[o] = er(i[o] || u, e[s], t, n));
					return Qr(ir(i, 1), t, n)
				}

				function oa(e, t, n) {
					for (var r = -1, a = e.length, o = t.length, i = {}; ++r < a;) {
						var u = r < o ? t[r] : void 0;
						n(i, e[r], u)
					}
					return i
				}

				function ia(e) {
					return Li(e) ? e : []
				}

				function ua(e) {
					return "function" == typeof e ? e : qu
				}

				function sa(e, t) {
					return Di(e) ? e : co(e, t) ? [e] : So(su(e))
				}
				var ca = Nr;

				function la(e, t, n) {
					var r = e.length;
					return n = void 0 === n ? r : n, !t && n >= r ? e : Hr(e, t, n)
				}
				var da = St || function(e) {
					return qe.clearTimeout(e)
				};

				function fa(e, t) {
					if (t) return e.slice();
					var n = e.length,
						r = je ? je(n) : new e.constructor(n);
					return e.copy(r), r
				}

				function ha(e) {
					var t = new e.constructor(e.byteLength);
					return new De(t).set(new De(e)), t
				}

				function pa(e, t) {
					var n = t ? ha(e.buffer) : e.buffer;
					return new e.constructor(n, e.byteOffset, e.length)
				}

				function ga(e, t) {
					if (e !== t) {
						var n = void 0 !== e,
							r = null === e,
							a = e == e,
							o = $i(e),
							i = void 0 !== t,
							u = null === t,
							s = t == t,
							c = $i(t);
						if (!u && !c && !o && e > t || o && i && s && !u && !c || r && i && s || !n && s || !a) return 1;
						if (!r && !o && !c && e < t || c && n && a && !r && !o || u && n && a || !i && a || !s) return -1
					}
					return 0
				}

				function va(e, t, n, a) {
					for (var o = -1, i = e.length, u = n.length, s = -1, c = t.length, l = un(i - u, 0), d = r(c + l), f = !a; ++s < c;) d[s] = t[s];
					for (; ++o < u;)(f || o < i) && (d[n[o]] = e[o]);
					for (; l--;) d[s++] = e[o++];
					return d
				}

				function _a(e, t, n, a) {
					for (var o = -1, i = e.length, u = -1, s = n.length, c = -1, l = t.length, d = un(i - s, 0), f = r(d + l), h = !a; ++o < d;) f[o] = e[o];
					for (var p = o; ++c < l;) f[p + c] = t[c];
					for (; ++u < s;)(h || o < i) && (f[p + n[u]] = e[o++]);
					return f
				}

				function ma(e, t) {
					var n = -1,
						a = e.length;
					for (t || (t = r(a)); ++n < a;) t[n] = e[n];
					return t
				}

				function ya(e, t, n, r) {
					var a = !n;
					n || (n = {});
					for (var o = -1, i = t.length; ++o < i;) {
						var u = t[o],
							s = r ? r(n[u], e[u], u, n, e) : void 0;
						void 0 === s && (s = e[u]), a ? Xn(n, u, s) : Yn(n, u, s)
					}
					return n
				}

				function ba(e, t) {
					return function(n, r) {
						var a = Di(n) ? it : Hn,
							o = t ? t() : {};
						return a(n, e, Za(r, 2), o)
					}
				}

				function Ea(e) {
					return Nr((function(t, n) {
						var r = -1,
							a = n.length,
							o = a > 1 ? n[a - 1] : void 0,
							i = a > 2 ? n[2] : void 0;
						for (o = e.length > 3 && "function" == typeof o ? (a--, o) : void 0, i && so(n[0], n[1], i) && (o = a < 3 ? void 0 : o, a = 1), t = pe(t); ++r < a;) {
							var u = n[r];
							u && e(t, u, r, o)
						}
						return t
					}))
				}

				function Oa(e, t) {
					return function(n, r) {
						if (null == n) return n;
						if (!ji(n)) return e(n, r);
						for (var a = n.length, o = t ? a : -1, i = pe(n);
							(t ? o-- : ++o < a) && !1 !== r(i[o], o, i););
						return n
					}
				}

				function Ta(e) {
					return function(t, n, r) {
						for (var a = -1, o = pe(t), i = r(t), u = i.length; u--;) {
							var s = i[e ? u : ++a];
							if (!1 === n(o[s], s, o)) break
						}
						return t
					}
				}

				function Ma(e) {
					return function(t) {
						var n = zt(t = su(t)) ? qt(t) : void 0,
							r = n ? n[0] : t.charAt(0),
							a = n ? la(n, 1).join("") : t.slice(1);
						return r[e]() + a
					}
				}

				function wa(e) {
					return function(t) {
						return gt(Wu(Bu(t).replace(Ce, "")), e, "")
					}
				}

				function Sa(e) {
					return function() {
						var t = arguments;
						switch (t.length) {
							case 0:
								return new e;
							case 1:
								return new e(t[0]);
							case 2:
								return new e(t[0], t[1]);
							case 3:
								return new e(t[0], t[1], t[2]);
							case 4:
								return new e(t[0], t[1], t[2], t[3]);
							case 5:
								return new e(t[0], t[1], t[2], t[3], t[4]);
							case 6:
								return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
							case 7:
								return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
						}
						var n = Pn(e.prototype),
							r = e.apply(n, t);
						return Yi(r) ? r : n
					}
				}

				function Aa(e) {
					return function(t, n, r) {
						var a = pe(t);
						if (!ji(t)) {
							var o = Za(n, 3);
							t = Eu(t), n = function(e) {
								return o(a[e], e, a)
							}
						}
						var i = e(t, n, r);
						return i > -1 ? a[o ? t[i] : i] : void 0
					}
				}

				function Ra(e) {
					return Fa((function(t) {
						var n = t.length,
							r = n,
							a = Cn.prototype.thru;
						for (e && t.reverse(); r--;) {
							var i = t[r];
							if ("function" != typeof i) throw new _e(o);
							if (a && !u && "wrapper" == Va(i)) var u = new Cn([], !0)
						}
						for (r = u ? r : n; ++r < n;) {
							var s = Va(i = t[r]),
								c = "wrapper" == s ? Xa(i) : void 0;
							u = c && lo(c[0]) && 424 == c[1] && !c[4].length && 1 == c[9] ? u[Va(c[0])].apply(u, c[3]) : 1 == i.length && lo(i) ? u[s]() : u.thru(i)
						}
						return function() {
							var e = arguments,
								r = e[0];
							if (u && 1 == e.length && Di(r)) return u.plant(r).value();
							for (var a = 0, o = n ? t[a].apply(this, e) : r; ++a < n;) o = t[a].call(this, o);
							return o
						}
					}))
				}

				function Ia(e, t, n, a, o, i, u, s, c, l) {
					var d = 128 & t,
						f = 1 & t,
						h = 2 & t,
						p = 24 & t,
						g = 512 & t,
						v = h ? void 0 : Sa(e);
					return function _() {
						for (var m = arguments.length, y = r(m), b = m; b--;) y[b] = arguments[b];
						if (p) var E = Ja(_),
							O = jt(y, E);
						if (a && (y = va(y, a, o, p)), i && (y = _a(y, i, u, p)), m -= O, p && m < l) {
							var T = Gt(y, E);
							return ja(e, t, Ia, _.placeholder, n, y, T, s, c, l - m)
						}
						var M = f ? n : this,
							w = h ? M[e] : e;
						return m = y.length, s ? y = mo(y, s) : g && m > 1 && y.reverse(), d && c < m && (y.length = c), this && this !== qe && this instanceof _ && (w = v || Sa(w)), w.apply(M, y)
					}
				}

				function Pa(e, t) {
					return function(n, r) {
						return function(e, t, n, r) {
							return cr(e, (function(e, a, o) {
								t(r, n(e), a, o)
							})), r
						}(n, e, t(r), {})
					}
				}

				function xa(e, t) {
					return function(n, r) {
						var a;
						if (void 0 === n && void 0 === r) return t;
						if (void 0 !== n && (a = n), void 0 !== r) {
							if (void 0 === a) return r;
							"string" == typeof n || "string" == typeof r ? (n = $r(n), r = $r(r)) : (n = Zr(n), r = Zr(r)), a = e(n, r)
						}
						return a
					}
				}

				function Ca(e) {
					return Fa((function(t) {
						return t = ht(t, xt(Za())), Nr((function(n) {
							var r = this;
							return e(t, (function(e) {
								return ot(e, r, n)
							}))
						}))
					}))
				}

				function Ba(e, t) {
					var n = (t = void 0 === t ? " " : $r(t)).length;
					if (n < 2) return n ? Ur(t, e) : t;
					var r = Ur(t, Qt(e / Ht(t)));
					return zt(t) ? la(qt(r), 0, e).join("") : r.slice(0, e)
				}

				function Da(e) {
					return function(t, n, a) {
						return a && "number" != typeof a && so(t, n, a) && (n = a = void 0), t = ru(t), void 0 === n ? (n = t, t = 0) : n = ru(n),
							function(e, t, n, a) {
								for (var o = -1, i = un(Qt((t - e) / (n || 1)), 0), u = r(i); i--;) u[a ? i : ++o] = e, e += n;
								return u
							}(t, n, a = void 0 === a ? t < n ? 1 : -1 : ru(a), e)
					}
				}

				function ka(e) {
					return function(t, n) {
						return "string" == typeof t && "string" == typeof n || (t = iu(t), n = iu(n)), e(t, n)
					}
				}

				function ja(e, t, n, r, a, o, i, u, s, c) {
					var l = 8 & t;
					t |= l ? 32 : 64, 4 & (t &= ~(l ? 64 : 32)) || (t &= -4);
					var d = [e, t, a, l ? o : void 0, l ? i : void 0, l ? void 0 : o, l ? void 0 : i, u, s, c],
						f = n.apply(void 0, d);
					return lo(e) && bo(f, d), f.placeholder = r, To(f, e, t)
				}

				function La(e) {
					var t = he[e];
					return function(e, n) {
						if (e = iu(e), (n = null == n ? 0 : sn(au(n), 292)) && rn(e)) {
							var r = (su(e) + "e").split("e");
							return +((r = (su(t(r[0] + "e" + (+r[1] + n))) + "e").split("e"))[0] + "e" + (+r[1] - n))
						}
						return t(e)
					}
				}
				var Ua = vn && 1 / Yt(new vn([, -0]))[1] == 1 / 0 ? function(e) {
					return new vn(e)
				} : $u;

				function Na(e) {
					return function(t) {
						var n = ro(t);
						return n == g ? Wt(t) : n == y ? Ft(t) : function(e, t) {
							return ht(t, (function(t) {
								return [t, e[t]]
							}))
						}(t, e(t))
					}
				}

				function za(e, t, n, a, u, s, c, l) {
					var d = 2 & t;
					if (!d && "function" != typeof e) throw new _e(o);
					var f = a ? a.length : 0;
					if (f || (t &= -97, a = u = void 0), c = void 0 === c ? c : un(au(c), 0), l = void 0 === l ? l : au(l), f -= u ? u.length : 0, 64 & t) {
						var h = a,
							p = u;
						a = u = void 0
					}
					var g = d ? void 0 : Xa(e),
						v = [e, t, n, a, u, h, p, s, c, l];
					if (g && function(e, t) {
							var n = e[1],
								r = t[1],
								a = n | r,
								o = a < 131,
								u = 128 == r && 8 == n || 128 == r && 256 == n && e[7].length <= t[8] || 384 == r && t[7].length <= t[8] && 8 == n;
							if (!o && !u) return e;
							1 & r && (e[2] = t[2], a |= 1 & n ? 0 : 4);
							var s = t[3];
							if (s) {
								var c = e[3];
								e[3] = c ? va(c, s, t[4]) : s, e[4] = c ? Gt(e[3], i) : t[4]
							}(s = t[5]) && (c = e[5], e[5] = c ? _a(c, s, t[6]) : s, e[6] = c ? Gt(e[5], i) : t[6]);
							(s = t[7]) && (e[7] = s);
							128 & r && (e[8] = null == e[8] ? t[8] : sn(e[8], t[8]));
							null == e[9] && (e[9] = t[9]);
							e[0] = t[0], e[1] = a
						}(v, g), e = v[0], t = v[1], n = v[2], a = v[3], u = v[4], !(l = v[9] = void 0 === v[9] ? d ? 0 : e.length : un(v[9] - f, 0)) && 24 & t && (t &= -25), t && 1 != t) _ = 8 == t || 16 == t ? function(e, t, n) {
						var a = Sa(e);
						return function o() {
							for (var i = arguments.length, u = r(i), s = i, c = Ja(o); s--;) u[s] = arguments[s];
							var l = i < 3 && u[0] !== c && u[i - 1] !== c ? [] : Gt(u, c);
							if ((i -= l.length) < n) return ja(e, t, Ia, o.placeholder, void 0, u, l, void 0, void 0, n - i);
							var d = this && this !== qe && this instanceof o ? a : e;
							return ot(d, this, u)
						}
					}(e, t, l) : 32 != t && 33 != t || u.length ? Ia.apply(void 0, v) : function(e, t, n, a) {
						var o = 1 & t,
							i = Sa(e);
						return function t() {
							for (var u = -1, s = arguments.length, c = -1, l = a.length, d = r(l + s), f = this && this !== qe && this instanceof t ? i : e; ++c < l;) d[c] = a[c];
							for (; s--;) d[c++] = arguments[++u];
							return ot(f, o ? n : this, d)
						}
					}(e, t, n, a);
					else var _ = function(e, t, n) {
						var r = 1 & t,
							a = Sa(e);
						return function t() {
							var o = this && this !== qe && this instanceof t ? a : e;
							return o.apply(r ? n : this, arguments)
						}
					}(e, t, n);
					return To((g ? Gr : bo)(_, v), e, t)
				}

				function Wa(e, t, n, r) {
					return void 0 === e || Pi(e, be[n]) && !Te.call(r, n) ? t : e
				}

				function Ka(e, t, n, r, a, o) {
					return Yi(e) && Yi(t) && (o.set(t, e), xr(e, t, void 0, Ka, o), o.delete(t)), e
				}

				function Ga(e) {
					return Xi(e) ? void 0 : e
				}

				function Ya(e, t, n, r, a, o) {
					var i = 1 & n,
						u = e.length,
						s = t.length;
					if (u != s && !(i && s > u)) return !1;
					var c = o.get(e),
						l = o.get(t);
					if (c && l) return c == t && l == e;
					var d = -1,
						f = !0,
						h = 2 & n ? new Ln : void 0;
					for (o.set(e, t), o.set(t, e); ++d < u;) {
						var p = e[d],
							g = t[d];
						if (r) var v = i ? r(g, p, d, t, e, o) : r(p, g, d, e, t, o);
						if (void 0 !== v) {
							if (v) continue;
							f = !1;
							break
						}
						if (h) {
							if (!_t(t, (function(e, t) {
									if (!Bt(h, t) && (p === e || a(p, e, n, r, o))) return h.push(t)
								}))) {
								f = !1;
								break
							}
						} else if (p !== g && !a(p, g, n, r, o)) {
							f = !1;
							break
						}
					}
					return o.delete(e), o.delete(t), f
				}

				function Fa(e) {
					return Oo(vo(e, void 0, ko), e + "")
				}

				function Ha(e) {
					return hr(e, Eu, to)
				}

				function qa(e) {
					return hr(e, Ou, no)
				}
				var Xa = yn ? function(e) {
					return yn.get(e)
				} : $u;

				function Va(e) {
					for (var t = e.name + "", n = bn[t], r = Te.call(bn, t) ? n.length : 0; r--;) {
						var a = n[r],
							o = a.func;
						if (null == o || o == e) return a.name
					}
					return t
				}

				function Ja(e) {
					return (Te.call(In, "placeholder") ? In : e).placeholder
				}

				function Za() {
					var e = In.iteratee || Xu;
					return e = e === Xu ? Mr : e, arguments.length ? e(arguments[0], arguments[1]) : e
				}

				function $a(e, t) {
					var n, r, a = e.__data__;
					return ("string" == (r = typeof(n = t)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== n : null === n) ? a["string" == typeof t ? "string" : "hash"] : a.map
				}

				function Qa(e) {
					for (var t = Eu(e), n = t.length; n--;) {
						var r = t[n],
							a = e[r];
						t[n] = [r, a, po(a)]
					}
					return t
				}

				function eo(e, t) {
					var n = function(e, t) {
						return null == e ? void 0 : e[t]
					}(e, t);
					return Tr(n) ? n : void 0
				}
				var to = tn ? function(e) {
						return null == e ? [] : (e = pe(e), lt(tn(e), (function(t) {
							return He.call(e, t)
						})))
					} : os,
					no = tn ? function(e) {
						for (var t = []; e;) pt(t, to(e)), e = Ke(e);
						return t
					} : os,
					ro = pr;

				function ao(e, t, n) {
					for (var r = -1, a = (t = sa(t, e)).length, o = !1; ++r < a;) {
						var i = Ao(t[r]);
						if (!(o = null != e && n(e, i))) break;
						e = e[i]
					}
					return o || ++r != a ? o : !!(a = null == e ? 0 : e.length) && Gi(a) && uo(i, a) && (Di(e) || Bi(e))
				}

				function oo(e) {
					return "function" != typeof e.constructor || ho(e) ? {} : Pn(Ke(e))
				}

				function io(e) {
					return Di(e) || Bi(e) || !!(Ve && e && e[Ve])
				}

				function uo(e, t) {
					var n = typeof e;
					return !!(t = null == t ? 9007199254740991 : t) && ("number" == n || "symbol" != n && se.test(e)) && e > -1 && e % 1 == 0 && e < t
				}

				function so(e, t, n) {
					if (!Yi(n)) return !1;
					var r = typeof t;
					return !!("number" == r ? ji(n) && uo(t, n.length) : "string" == r && t in n) && Pi(n[t], e)
				}

				function co(e, t) {
					if (Di(e)) return !1;
					var n = typeof e;
					return !("number" != n && "symbol" != n && "boolean" != n && null != e && !$i(e)) || (Y.test(e) || !G.test(e) || null != t && e in pe(t))
				}

				function lo(e) {
					var t = Va(e),
						n = In[t];
					if ("function" != typeof n || !(t in Bn.prototype)) return !1;
					if (e === n) return !0;
					var r = Xa(n);
					return !!r && e === r[0]
				}(hn && ro(new hn(new ArrayBuffer(1))) != M || pn && ro(new pn) != g || gn && "[object Promise]" != ro(gn.resolve()) || vn && ro(new vn) != y || _n && ro(new _n) != O) && (ro = function(e) {
					var t = pr(e),
						n = t == _ ? e.constructor : void 0,
						r = n ? Ro(n) : "";
					if (r) switch (r) {
						case En:
							return M;
						case On:
							return g;
						case Tn:
							return "[object Promise]";
						case Mn:
							return y;
						case wn:
							return O
					}
					return t
				});
				var fo = Ee ? Wi : is;

				function ho(e) {
					var t = e && e.constructor;
					return e === ("function" == typeof t && t.prototype || be)
				}

				function po(e) {
					return e == e && !Yi(e)
				}

				function go(e, t) {
					return function(n) {
						return null != n && (n[e] === t && (void 0 !== t || e in pe(n)))
					}
				}

				function vo(e, t, n) {
					return t = un(void 0 === t ? e.length - 1 : t, 0),
						function() {
							for (var a = arguments, o = -1, i = un(a.length - t, 0), u = r(i); ++o < i;) u[o] = a[t + o];
							o = -1;
							for (var s = r(t + 1); ++o < t;) s[o] = a[o];
							return s[t] = n(u), ot(e, this, s)
						}
				}

				function _o(e, t) {
					return t.length < 2 ? e : fr(e, Hr(t, 0, -1))
				}

				function mo(e, t) {
					for (var n = e.length, r = sn(t.length, n), a = ma(e); r--;) {
						var o = t[r];
						e[r] = uo(o, n) ? a[o] : void 0
					}
					return e
				}

				function yo(e, t) {
					if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t]
				}
				var bo = Mo(Gr),
					Eo = $t || function(e, t) {
						return qe.setTimeout(e, t)
					},
					Oo = Mo(Yr);

				function To(e, t, n) {
					var r = t + "";
					return Oo(e, function(e, t) {
						var n = t.length;
						if (!n) return e;
						var r = n - 1;
						return t[r] = (n > 1 ? "& " : "") + t[r], t = t.join(n > 2 ? ", " : " "), e.replace(J, "{\n/* [wrapped with " + t + "] */\n")
					}(r, function(e, t) {
						return ut(u, (function(n) {
							var r = "_." + n[0];
							t & n[1] && !dt(e, r) && e.push(r)
						})), e.sort()
					}(function(e) {
						var t = e.match(Z);
						return t ? t[1].split($) : []
					}(r), n)))
				}

				function Mo(e) {
					var t = 0,
						n = 0;
					return function() {
						var r = cn(),
							a = 16 - (r - n);
						if (n = r, a > 0) {
							if (++t >= 800) return arguments[0]
						} else t = 0;
						return e.apply(void 0, arguments)
					}
				}

				function wo(e, t) {
					var n = -1,
						r = e.length,
						a = r - 1;
					for (t = void 0 === t ? r : t; ++n < t;) {
						var o = Lr(n, a),
							i = e[o];
						e[o] = e[n], e[n] = i
					}
					return e.length = t, e
				}
				var So = function(e) {
					var t = Mi(e, (function(e) {
							return 500 === n.size && n.clear(), e
						})),
						n = t.cache;
					return t
				}((function(e) {
					var t = [];
					return 46 === e.charCodeAt(0) && t.push(""), e.replace(F, (function(e, n, r, a) {
						t.push(r ? a.replace(te, "$1") : n || e)
					})), t
				}));

				function Ao(e) {
					if ("string" == typeof e || $i(e)) return e;
					var t = e + "";
					return "0" == t && 1 / e == -1 / 0 ? "-0" : t
				}

				function Ro(e) {
					if (null != e) {
						try {
							return Oe.call(e)
						} catch (e) {}
						try {
							return e + ""
						} catch (e) {}
					}
					return ""
				}

				function Io(e) {
					if (e instanceof Bn) return e.clone();
					var t = new Cn(e.__wrapped__, e.__chain__);
					return t.__actions__ = ma(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
				}
				var Po = Nr((function(e, t) {
						return Li(e) ? er(e, ir(t, 1, Li, !0)) : []
					})),
					xo = Nr((function(e, t) {
						var n = zo(t);
						return Li(n) && (n = void 0), Li(e) ? er(e, ir(t, 1, Li, !0), Za(n, 2)) : []
					})),
					Co = Nr((function(e, t) {
						var n = zo(t);
						return Li(n) && (n = void 0), Li(e) ? er(e, ir(t, 1, Li, !0), void 0, n) : []
					}));

				function Bo(e, t, n) {
					var r = null == e ? 0 : e.length;
					if (!r) return -1;
					var a = null == n ? 0 : au(n);
					return a < 0 && (a = un(r + a, 0)), bt(e, Za(t, 3), a)
				}

				function Do(e, t, n) {
					var r = null == e ? 0 : e.length;
					if (!r) return -1;
					var a = r - 1;
					return void 0 !== n && (a = au(n), a = n < 0 ? un(r + a, 0) : sn(a, r - 1)), bt(e, Za(t, 3), a, !0)
				}

				function ko(e) {
					return (null == e ? 0 : e.length) ? ir(e, 1) : []
				}

				function jo(e) {
					return e && e.length ? e[0] : void 0
				}
				var Lo = Nr((function(e) {
						var t = ht(e, ia);
						return t.length && t[0] === e[0] ? mr(t) : []
					})),
					Uo = Nr((function(e) {
						var t = zo(e),
							n = ht(e, ia);
						return t === zo(n) ? t = void 0 : n.pop(), n.length && n[0] === e[0] ? mr(n, Za(t, 2)) : []
					})),
					No = Nr((function(e) {
						var t = zo(e),
							n = ht(e, ia);
						return (t = "function" == typeof t ? t : void 0) && n.pop(), n.length && n[0] === e[0] ? mr(n, void 0, t) : []
					}));

				function zo(e) {
					var t = null == e ? 0 : e.length;
					return t ? e[t - 1] : void 0
				}
				var Wo = Nr(Ko);

				function Ko(e, t) {
					return e && e.length && t && t.length ? kr(e, t) : e
				}
				var Go = Fa((function(e, t) {
					var n = null == e ? 0 : e.length,
						r = Vn(e, t);
					return jr(e, ht(t, (function(e) {
						return uo(e, n) ? +e : e
					})).sort(ga)), r
				}));

				function Yo(e) {
					return null == e ? e : fn.call(e)
				}
				var Fo = Nr((function(e) {
						return Qr(ir(e, 1, Li, !0))
					})),
					Ho = Nr((function(e) {
						var t = zo(e);
						return Li(t) && (t = void 0), Qr(ir(e, 1, Li, !0), Za(t, 2))
					})),
					qo = Nr((function(e) {
						var t = zo(e);
						return t = "function" == typeof t ? t : void 0, Qr(ir(e, 1, Li, !0), void 0, t)
					}));

				function Xo(e) {
					if (!e || !e.length) return [];
					var t = 0;
					return e = lt(e, (function(e) {
						if (Li(e)) return t = un(e.length, t), !0
					})), It(t, (function(t) {
						return ht(e, wt(t))
					}))
				}

				function Vo(e, t) {
					if (!e || !e.length) return [];
					var n = Xo(e);
					return null == t ? n : ht(n, (function(e) {
						return ot(t, void 0, e)
					}))
				}
				var Jo = Nr((function(e, t) {
						return Li(e) ? er(e, t) : []
					})),
					Zo = Nr((function(e) {
						return aa(lt(e, Li))
					})),
					$o = Nr((function(e) {
						var t = zo(e);
						return Li(t) && (t = void 0), aa(lt(e, Li), Za(t, 2))
					})),
					Qo = Nr((function(e) {
						var t = zo(e);
						return t = "function" == typeof t ? t : void 0, aa(lt(e, Li), void 0, t)
					})),
					ei = Nr(Xo);
				var ti = Nr((function(e) {
					var t = e.length,
						n = t > 1 ? e[t - 1] : void 0;
					return n = "function" == typeof n ? (e.pop(), n) : void 0, Vo(e, n)
				}));

				function ni(e) {
					var t = In(e);
					return t.__chain__ = !0, t
				}

				function ri(e, t) {
					return t(e)
				}
				var ai = Fa((function(e) {
					var t = e.length,
						n = t ? e[0] : 0,
						r = this.__wrapped__,
						a = function(t) {
							return Vn(t, e)
						};
					return !(t > 1 || this.__actions__.length) && r instanceof Bn && uo(n) ? ((r = r.slice(n, +n + (t ? 1 : 0))).__actions__.push({
						func: ri,
						args: [a],
						thisArg: void 0
					}), new Cn(r, this.__chain__).thru((function(e) {
						return t && !e.length && e.push(void 0), e
					}))) : this.thru(a)
				}));
				var oi = ba((function(e, t, n) {
					Te.call(e, n) ? ++e[n] : Xn(e, n, 1)
				}));
				var ii = Aa(Bo),
					ui = Aa(Do);

				function si(e, t) {
					return (Di(e) ? ut : tr)(e, Za(t, 3))
				}

				function ci(e, t) {
					return (Di(e) ? st : nr)(e, Za(t, 3))
				}
				var li = ba((function(e, t, n) {
					Te.call(e, n) ? e[n].push(t) : Xn(e, n, [t])
				}));
				var di = Nr((function(e, t, n) {
						var a = -1,
							o = "function" == typeof t,
							i = ji(e) ? r(e.length) : [];
						return tr(e, (function(e) {
							i[++a] = o ? ot(t, e, n) : yr(e, t, n)
						})), i
					})),
					fi = ba((function(e, t, n) {
						Xn(e, n, t)
					}));

				function hi(e, t) {
					return (Di(e) ? ht : Rr)(e, Za(t, 3))
				}
				var pi = ba((function(e, t, n) {
					e[n ? 0 : 1].push(t)
				}), (function() {
					return [
						[],
						[]
					]
				}));
				var gi = Nr((function(e, t) {
						if (null == e) return [];
						var n = t.length;
						return n > 1 && so(e, t[0], t[1]) ? t = [] : n > 2 && so(t[0], t[1], t[2]) && (t = [t[0]]), Br(e, ir(t, 1), [])
					})),
					vi = Zt || function() {
						return qe.Date.now()
					};

				function _i(e, t, n) {
					return t = n ? void 0 : t, za(e, 128, void 0, void 0, void 0, void 0, t = e && null == t ? e.length : t)
				}

				function mi(e, t) {
					var n;
					if ("function" != typeof t) throw new _e(o);
					return e = au(e),
						function() {
							return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = void 0), n
						}
				}
				var yi = Nr((function(e, t, n) {
						var r = 1;
						if (n.length) {
							var a = Gt(n, Ja(yi));
							r |= 32
						}
						return za(e, r, t, n, a)
					})),
					bi = Nr((function(e, t, n) {
						var r = 3;
						if (n.length) {
							var a = Gt(n, Ja(bi));
							r |= 32
						}
						return za(t, r, e, n, a)
					}));

				function Ei(e, t, n) {
					var r, a, i, u, s, c, l = 0,
						d = !1,
						f = !1,
						h = !0;
					if ("function" != typeof e) throw new _e(o);

					function p(t) {
						var n = r,
							o = a;
						return r = a = void 0, l = t, u = e.apply(o, n)
					}

					function g(e) {
						return l = e, s = Eo(_, t), d ? p(e) : u
					}

					function v(e) {
						var n = e - c;
						return void 0 === c || n >= t || n < 0 || f && e - l >= i
					}

					function _() {
						var e = vi();
						if (v(e)) return m(e);
						s = Eo(_, function(e) {
							var n = t - (e - c);
							return f ? sn(n, i - (e - l)) : n
						}(e))
					}

					function m(e) {
						return s = void 0, h && r ? p(e) : (r = a = void 0, u)
					}

					function y() {
						var e = vi(),
							n = v(e);
						if (r = arguments, a = this, c = e, n) {
							if (void 0 === s) return g(c);
							if (f) return da(s), s = Eo(_, t), p(c)
						}
						return void 0 === s && (s = Eo(_, t)), u
					}
					return t = iu(t) || 0, Yi(n) && (d = !!n.leading, i = (f = "maxWait" in n) ? un(iu(n.maxWait) || 0, t) : i, h = "trailing" in n ? !!n.trailing : h), y.cancel = function() {
						void 0 !== s && da(s), l = 0, r = c = a = s = void 0
					}, y.flush = function() {
						return void 0 === s ? u : m(vi())
					}, y
				}
				var Oi = Nr((function(e, t) {
						return Qn(e, 1, t)
					})),
					Ti = Nr((function(e, t, n) {
						return Qn(e, iu(t) || 0, n)
					}));

				function Mi(e, t) {
					if ("function" != typeof e || null != t && "function" != typeof t) throw new _e(o);
					var n = function() {
						var r = arguments,
							a = t ? t.apply(this, r) : r[0],
							o = n.cache;
						if (o.has(a)) return o.get(a);
						var i = e.apply(this, r);
						return n.cache = o.set(a, i) || o, i
					};
					return n.cache = new(Mi.Cache || jn), n
				}

				function wi(e) {
					if ("function" != typeof e) throw new _e(o);
					return function() {
						var t = arguments;
						switch (t.length) {
							case 0:
								return !e.call(this);
							case 1:
								return !e.call(this, t[0]);
							case 2:
								return !e.call(this, t[0], t[1]);
							case 3:
								return !e.call(this, t[0], t[1], t[2])
						}
						return !e.apply(this, t)
					}
				}
				Mi.Cache = jn;
				var Si = ca((function(e, t) {
						var n = (t = 1 == t.length && Di(t[0]) ? ht(t[0], xt(Za())) : ht(ir(t, 1), xt(Za()))).length;
						return Nr((function(r) {
							for (var a = -1, o = sn(r.length, n); ++a < o;) r[a] = t[a].call(this, r[a]);
							return ot(e, this, r)
						}))
					})),
					Ai = Nr((function(e, t) {
						return za(e, 32, void 0, t, Gt(t, Ja(Ai)))
					})),
					Ri = Nr((function(e, t) {
						return za(e, 64, void 0, t, Gt(t, Ja(Ri)))
					})),
					Ii = Fa((function(e, t) {
						return za(e, 256, void 0, void 0, void 0, t)
					}));

				function Pi(e, t) {
					return e === t || e != e && t != t
				}
				var xi = ka(gr),
					Ci = ka((function(e, t) {
						return e >= t
					})),
					Bi = br(function() {
						return arguments
					}()) ? br : function(e) {
						return Fi(e) && Te.call(e, "callee") && !He.call(e, "callee")
					},
					Di = r.isArray,
					ki = Qe ? xt(Qe) : function(e) {
						return Fi(e) && pr(e) == T
					};

				function ji(e) {
					return null != e && Gi(e.length) && !Wi(e)
				}

				function Li(e) {
					return Fi(e) && ji(e)
				}
				var Ui = nn || is,
					Ni = et ? xt(et) : function(e) {
						return Fi(e) && pr(e) == d
					};

				function zi(e) {
					if (!Fi(e)) return !1;
					var t = pr(e);
					return t == f || "[object DOMException]" == t || "string" == typeof e.message && "string" == typeof e.name && !Xi(e)
				}

				function Wi(e) {
					if (!Yi(e)) return !1;
					var t = pr(e);
					return t == h || t == p || "[object AsyncFunction]" == t || "[object Proxy]" == t
				}

				function Ki(e) {
					return "number" == typeof e && e == au(e)
				}

				function Gi(e) {
					return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
				}

				function Yi(e) {
					var t = typeof e;
					return null != e && ("object" == t || "function" == t)
				}

				function Fi(e) {
					return null != e && "object" == typeof e
				}
				var Hi = tt ? xt(tt) : function(e) {
					return Fi(e) && ro(e) == g
				};

				function qi(e) {
					return "number" == typeof e || Fi(e) && pr(e) == v
				}

				function Xi(e) {
					if (!Fi(e) || pr(e) != _) return !1;
					var t = Ke(e);
					if (null === t) return !0;
					var n = Te.call(t, "constructor") && t.constructor;
					return "function" == typeof n && n instanceof n && Oe.call(n) == Ae
				}
				var Vi = nt ? xt(nt) : function(e) {
					return Fi(e) && pr(e) == m
				};
				var Ji = rt ? xt(rt) : function(e) {
					return Fi(e) && ro(e) == y
				};

				function Zi(e) {
					return "string" == typeof e || !Di(e) && Fi(e) && pr(e) == b
				}

				function $i(e) {
					return "symbol" == typeof e || Fi(e) && pr(e) == E
				}
				var Qi = at ? xt(at) : function(e) {
					return Fi(e) && Gi(e.length) && !!ze[pr(e)]
				};
				var eu = ka(Ar),
					tu = ka((function(e, t) {
						return e <= t
					}));

				function nu(e) {
					if (!e) return [];
					if (ji(e)) return Zi(e) ? qt(e) : ma(e);
					if (Ze && e[Ze]) return function(e) {
						for (var t, n = []; !(t = e.next()).done;) n.push(t.value);
						return n
					}(e[Ze]());
					var t = ro(e);
					return (t == g ? Wt : t == y ? Yt : Pu)(e)
				}

				function ru(e) {
					return e ? (e = iu(e)) === 1 / 0 || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
				}

				function au(e) {
					var t = ru(e),
						n = t % 1;
					return t == t ? n ? t - n : t : 0
				}

				function ou(e) {
					return e ? Jn(au(e), 0, 4294967295) : 0
				}

				function iu(e) {
					if ("number" == typeof e) return e;
					if ($i(e)) return NaN;
					if (Yi(e)) {
						var t = "function" == typeof e.valueOf ? e.valueOf() : e;
						e = Yi(t) ? t + "" : t
					}
					if ("string" != typeof e) return 0 === e ? e : +e;
					e = Pt(e);
					var n = oe.test(e);
					return n || ue.test(e) ? Ye(e.slice(2), n ? 2 : 8) : ae.test(e) ? NaN : +e
				}

				function uu(e) {
					return ya(e, Ou(e))
				}

				function su(e) {
					return null == e ? "" : $r(e)
				}
				var cu = Ea((function(e, t) {
						if (ho(t) || ji(t)) ya(t, Eu(t), e);
						else
							for (var n in t) Te.call(t, n) && Yn(e, n, t[n])
					})),
					lu = Ea((function(e, t) {
						ya(t, Ou(t), e)
					})),
					du = Ea((function(e, t, n, r) {
						ya(t, Ou(t), e, r)
					})),
					fu = Ea((function(e, t, n, r) {
						ya(t, Eu(t), e, r)
					})),
					hu = Fa(Vn);
				var pu = Nr((function(e, t) {
						e = pe(e);
						var n = -1,
							r = t.length,
							a = r > 2 ? t[2] : void 0;
						for (a && so(t[0], t[1], a) && (r = 1); ++n < r;)
							for (var o = t[n], i = Ou(o), u = -1, s = i.length; ++u < s;) {
								var c = i[u],
									l = e[c];
								(void 0 === l || Pi(l, be[c]) && !Te.call(e, c)) && (e[c] = o[c])
							}
						return e
					})),
					gu = Nr((function(e) {
						return e.push(void 0, Ka), ot(Mu, void 0, e)
					}));

				function vu(e, t, n) {
					var r = null == e ? void 0 : fr(e, t);
					return void 0 === r ? n : r
				}

				function _u(e, t) {
					return null != e && ao(e, t, _r)
				}
				var mu = Pa((function(e, t, n) {
						null != t && "function" != typeof t.toString && (t = Se.call(t)), e[t] = n
					}), Yu(qu)),
					yu = Pa((function(e, t, n) {
						null != t && "function" != typeof t.toString && (t = Se.call(t)), Te.call(e, t) ? e[t].push(n) : e[t] = [n]
					}), Za),
					bu = Nr(yr);

				function Eu(e) {
					return ji(e) ? Nn(e) : wr(e)
				}

				function Ou(e) {
					return ji(e) ? Nn(e, !0) : Sr(e)
				}
				var Tu = Ea((function(e, t, n) {
						xr(e, t, n)
					})),
					Mu = Ea((function(e, t, n, r) {
						xr(e, t, n, r)
					})),
					wu = Fa((function(e, t) {
						var n = {};
						if (null == e) return n;
						var r = !1;
						t = ht(t, (function(t) {
							return t = sa(t, e), r || (r = t.length > 1), t
						})), ya(e, qa(e), n), r && (n = Zn(n, 7, Ga));
						for (var a = t.length; a--;) ea(n, t[a]);
						return n
					}));
				var Su = Fa((function(e, t) {
					return null == e ? {} : function(e, t) {
						return Dr(e, t, (function(t, n) {
							return _u(e, n)
						}))
					}(e, t)
				}));

				function Au(e, t) {
					if (null == e) return {};
					var n = ht(qa(e), (function(e) {
						return [e]
					}));
					return t = Za(t), Dr(e, n, (function(e, n) {
						return t(e, n[0])
					}))
				}
				var Ru = Na(Eu),
					Iu = Na(Ou);

				function Pu(e) {
					return null == e ? [] : Ct(e, Eu(e))
				}
				var xu = wa((function(e, t, n) {
					return t = t.toLowerCase(), e + (n ? Cu(t) : t)
				}));

				function Cu(e) {
					return zu(su(e).toLowerCase())
				}

				function Bu(e) {
					return (e = su(e)) && e.replace(ce, Lt).replace(Be, "")
				}
				var Du = wa((function(e, t, n) {
						return e + (n ? "-" : "") + t.toLowerCase()
					})),
					ku = wa((function(e, t, n) {
						return e + (n ? " " : "") + t.toLowerCase()
					})),
					ju = Ma("toLowerCase");
				var Lu = wa((function(e, t, n) {
					return e + (n ? "_" : "") + t.toLowerCase()
				}));
				var Uu = wa((function(e, t, n) {
					return e + (n ? " " : "") + zu(t)
				}));
				var Nu = wa((function(e, t, n) {
						return e + (n ? " " : "") + t.toUpperCase()
					})),
					zu = Ma("toUpperCase");

				function Wu(e, t, n) {
					return e = su(e), void 0 === (t = n ? void 0 : t) ? function(e) {
						return Le.test(e)
					}(e) ? function(e) {
						return e.match(ke) || []
					}(e) : function(e) {
						return e.match(Q) || []
					}(e) : e.match(t) || []
				}
				var Ku = Nr((function(e, t) {
						try {
							return ot(e, void 0, t)
						} catch (e) {
							return zi(e) ? e : new V(e)
						}
					})),
					Gu = Fa((function(e, t) {
						return ut(t, (function(t) {
							t = Ao(t), Xn(e, t, yi(e[t], e))
						})), e
					}));

				function Yu(e) {
					return function() {
						return e
					}
				}
				var Fu = Ra(),
					Hu = Ra(!0);

				function qu(e) {
					return e
				}

				function Xu(e) {
					return Mr("function" == typeof e ? e : Zn(e, 1))
				}
				var Vu = Nr((function(e, t) {
						return function(n) {
							return yr(n, e, t)
						}
					})),
					Ju = Nr((function(e, t) {
						return function(n) {
							return yr(e, n, t)
						}
					}));

				function Zu(e, t, n) {
					var r = Eu(t),
						a = dr(t, r);
					null != n || Yi(t) && (a.length || !r.length) || (n = t, t = e, e = this, a = dr(t, Eu(t)));
					var o = !(Yi(n) && "chain" in n && !n.chain),
						i = Wi(e);
					return ut(a, (function(n) {
						var r = t[n];
						e[n] = r, i && (e.prototype[n] = function() {
							var t = this.__chain__;
							if (o || t) {
								var n = e(this.__wrapped__),
									a = n.__actions__ = ma(this.__actions__);
								return a.push({
									func: r,
									args: arguments,
									thisArg: e
								}), n.__chain__ = t, n
							}
							return r.apply(e, pt([this.value()], arguments))
						})
					})), e
				}

				function $u() {}
				var Qu = Ca(ht),
					es = Ca(ct),
					ts = Ca(_t);

				function ns(e) {
					return co(e) ? wt(Ao(e)) : function(e) {
						return function(t) {
							return fr(t, e)
						}
					}(e)
				}
				var rs = Da(),
					as = Da(!0);

				function os() {
					return []
				}

				function is() {
					return !1
				}
				var us = xa((function(e, t) {
						return e + t
					}), 0),
					ss = La("ceil"),
					cs = xa((function(e, t) {
						return e / t
					}), 1),
					ls = La("floor");
				var ds, fs = xa((function(e, t) {
						return e * t
					}), 1),
					hs = La("round"),
					ps = xa((function(e, t) {
						return e - t
					}), 0);
				return In.after = function(e, t) {
					if ("function" != typeof t) throw new _e(o);
					return e = au(e),
						function() {
							if (--e < 1) return t.apply(this, arguments)
						}
				}, In.ary = _i, In.assign = cu, In.assignIn = lu, In.assignInWith = du, In.assignWith = fu, In.at = hu, In.before = mi, In.bind = yi, In.bindAll = Gu, In.bindKey = bi, In.castArray = function() {
					if (!arguments.length) return [];
					var e = arguments[0];
					return Di(e) ? e : [e]
				}, In.chain = ni, In.chunk = function(e, t, n) {
					t = (n ? so(e, t, n) : void 0 === t) ? 1 : un(au(t), 0);
					var a = null == e ? 0 : e.length;
					if (!a || t < 1) return [];
					for (var o = 0, i = 0, u = r(Qt(a / t)); o < a;) u[i++] = Hr(e, o, o += t);
					return u
				}, In.compact = function(e) {
					for (var t = -1, n = null == e ? 0 : e.length, r = 0, a = []; ++t < n;) {
						var o = e[t];
						o && (a[r++] = o)
					}
					return a
				}, In.concat = function() {
					var e = arguments.length;
					if (!e) return [];
					for (var t = r(e - 1), n = arguments[0], a = e; a--;) t[a - 1] = arguments[a];
					return pt(Di(n) ? ma(n) : [n], ir(t, 1))
				}, In.cond = function(e) {
					var t = null == e ? 0 : e.length,
						n = Za();
					return e = t ? ht(e, (function(e) {
						if ("function" != typeof e[1]) throw new _e(o);
						return [n(e[0]), e[1]]
					})) : [], Nr((function(n) {
						for (var r = -1; ++r < t;) {
							var a = e[r];
							if (ot(a[0], this, n)) return ot(a[1], this, n)
						}
					}))
				}, In.conforms = function(e) {
					return function(e) {
						var t = Eu(e);
						return function(n) {
							return $n(n, e, t)
						}
					}(Zn(e, 1))
				}, In.constant = Yu, In.countBy = oi, In.create = function(e, t) {
					var n = Pn(e);
					return null == t ? n : qn(n, t)
				}, In.curry = function e(t, n, r) {
					var a = za(t, 8, void 0, void 0, void 0, void 0, void 0, n = r ? void 0 : n);
					return a.placeholder = e.placeholder, a
				}, In.curryRight = function e(t, n, r) {
					var a = za(t, 16, void 0, void 0, void 0, void 0, void 0, n = r ? void 0 : n);
					return a.placeholder = e.placeholder, a
				}, In.debounce = Ei, In.defaults = pu, In.defaultsDeep = gu, In.defer = Oi, In.delay = Ti, In.difference = Po, In.differenceBy = xo, In.differenceWith = Co, In.drop = function(e, t, n) {
					var r = null == e ? 0 : e.length;
					return r ? Hr(e, (t = n || void 0 === t ? 1 : au(t)) < 0 ? 0 : t, r) : []
				}, In.dropRight = function(e, t, n) {
					var r = null == e ? 0 : e.length;
					return r ? Hr(e, 0, (t = r - (t = n || void 0 === t ? 1 : au(t))) < 0 ? 0 : t) : []
				}, In.dropRightWhile = function(e, t) {
					return e && e.length ? na(e, Za(t, 3), !0, !0) : []
				}, In.dropWhile = function(e, t) {
					return e && e.length ? na(e, Za(t, 3), !0) : []
				}, In.fill = function(e, t, n, r) {
					var a = null == e ? 0 : e.length;
					return a ? (n && "number" != typeof n && so(e, t, n) && (n = 0, r = a), function(e, t, n, r) {
						var a = e.length;
						for ((n = au(n)) < 0 && (n = -n > a ? 0 : a + n), (r = void 0 === r || r > a ? a : au(r)) < 0 && (r += a), r = n > r ? 0 : ou(r); n < r;) e[n++] = t;
						return e
					}(e, t, n, r)) : []
				}, In.filter = function(e, t) {
					return (Di(e) ? lt : or)(e, Za(t, 3))
				}, In.flatMap = function(e, t) {
					return ir(hi(e, t), 1)
				}, In.flatMapDeep = function(e, t) {
					return ir(hi(e, t), 1 / 0)
				}, In.flatMapDepth = function(e, t, n) {
					return n = void 0 === n ? 1 : au(n), ir(hi(e, t), n)
				}, In.flatten = ko, In.flattenDeep = function(e) {
					return (null == e ? 0 : e.length) ? ir(e, 1 / 0) : []
				}, In.flattenDepth = function(e, t) {
					return (null == e ? 0 : e.length) ? ir(e, t = void 0 === t ? 1 : au(t)) : []
				}, In.flip = function(e) {
					return za(e, 512)
				}, In.flow = Fu, In.flowRight = Hu, In.fromPairs = function(e) {
					for (var t = -1, n = null == e ? 0 : e.length, r = {}; ++t < n;) {
						var a = e[t];
						r[a[0]] = a[1]
					}
					return r
				}, In.functions = function(e) {
					return null == e ? [] : dr(e, Eu(e))
				}, In.functionsIn = function(e) {
					return null == e ? [] : dr(e, Ou(e))
				}, In.groupBy = li, In.initial = function(e) {
					return (null == e ? 0 : e.length) ? Hr(e, 0, -1) : []
				}, In.intersection = Lo, In.intersectionBy = Uo, In.intersectionWith = No, In.invert = mu, In.invertBy = yu, In.invokeMap = di, In.iteratee = Xu, In.keyBy = fi, In.keys = Eu, In.keysIn = Ou, In.map = hi, In.mapKeys = function(e, t) {
					var n = {};
					return t = Za(t, 3), cr(e, (function(e, r, a) {
						Xn(n, t(e, r, a), e)
					})), n
				}, In.mapValues = function(e, t) {
					var n = {};
					return t = Za(t, 3), cr(e, (function(e, r, a) {
						Xn(n, r, t(e, r, a))
					})), n
				}, In.matches = function(e) {
					return Ir(Zn(e, 1))
				}, In.matchesProperty = function(e, t) {
					return Pr(e, Zn(t, 1))
				}, In.memoize = Mi, In.merge = Tu, In.mergeWith = Mu, In.method = Vu, In.methodOf = Ju, In.mixin = Zu, In.negate = wi, In.nthArg = function(e) {
					return e = au(e), Nr((function(t) {
						return Cr(t, e)
					}))
				}, In.omit = wu, In.omitBy = function(e, t) {
					return Au(e, wi(Za(t)))
				}, In.once = function(e) {
					return mi(2, e)
				}, In.orderBy = function(e, t, n, r) {
					return null == e ? [] : (Di(t) || (t = null == t ? [] : [t]), Di(n = r ? void 0 : n) || (n = null == n ? [] : [n]), Br(e, t, n))
				}, In.over = Qu, In.overArgs = Si, In.overEvery = es, In.overSome = ts, In.partial = Ai, In.partialRight = Ri, In.partition = pi, In.pick = Su, In.pickBy = Au, In.property = ns, In.propertyOf = function(e) {
					return function(t) {
						return null == e ? void 0 : fr(e, t)
					}
				}, In.pull = Wo, In.pullAll = Ko, In.pullAllBy = function(e, t, n) {
					return e && e.length && t && t.length ? kr(e, t, Za(n, 2)) : e
				}, In.pullAllWith = function(e, t, n) {
					return e && e.length && t && t.length ? kr(e, t, void 0, n) : e
				}, In.pullAt = Go, In.range = rs, In.rangeRight = as, In.rearg = Ii, In.reject = function(e, t) {
					return (Di(e) ? lt : or)(e, wi(Za(t, 3)))
				}, In.remove = function(e, t) {
					var n = [];
					if (!e || !e.length) return n;
					var r = -1,
						a = [],
						o = e.length;
					for (t = Za(t, 3); ++r < o;) {
						var i = e[r];
						t(i, r, e) && (n.push(i), a.push(r))
					}
					return jr(e, a), n
				}, In.rest = function(e, t) {
					if ("function" != typeof e) throw new _e(o);
					return Nr(e, t = void 0 === t ? t : au(t))
				}, In.reverse = Yo, In.sampleSize = function(e, t, n) {
					return t = (n ? so(e, t, n) : void 0 === t) ? 1 : au(t), (Di(e) ? Wn : Wr)(e, t)
				}, In.set = function(e, t, n) {
					return null == e ? e : Kr(e, t, n)
				}, In.setWith = function(e, t, n, r) {
					return r = "function" == typeof r ? r : void 0, null == e ? e : Kr(e, t, n, r)
				}, In.shuffle = function(e) {
					return (Di(e) ? Kn : Fr)(e)
				}, In.slice = function(e, t, n) {
					var r = null == e ? 0 : e.length;
					return r ? (n && "number" != typeof n && so(e, t, n) ? (t = 0, n = r) : (t = null == t ? 0 : au(t), n = void 0 === n ? r : au(n)), Hr(e, t, n)) : []
				}, In.sortBy = gi, In.sortedUniq = function(e) {
					return e && e.length ? Jr(e) : []
				}, In.sortedUniqBy = function(e, t) {
					return e && e.length ? Jr(e, Za(t, 2)) : []
				}, In.split = function(e, t, n) {
					return n && "number" != typeof n && so(e, t, n) && (t = n = void 0), (n = void 0 === n ? 4294967295 : n >>> 0) ? (e = su(e)) && ("string" == typeof t || null != t && !Vi(t)) && !(t = $r(t)) && zt(e) ? la(qt(e), 0, n) : e.split(t, n) : []
				}, In.spread = function(e, t) {
					if ("function" != typeof e) throw new _e(o);
					return t = null == t ? 0 : un(au(t), 0), Nr((function(n) {
						var r = n[t],
							a = la(n, 0, t);
						return r && pt(a, r), ot(e, this, a)
					}))
				}, In.tail = function(e) {
					var t = null == e ? 0 : e.length;
					return t ? Hr(e, 1, t) : []
				}, In.take = function(e, t, n) {
					return e && e.length ? Hr(e, 0, (t = n || void 0 === t ? 1 : au(t)) < 0 ? 0 : t) : []
				}, In.takeRight = function(e, t, n) {
					var r = null == e ? 0 : e.length;
					return r ? Hr(e, (t = r - (t = n || void 0 === t ? 1 : au(t))) < 0 ? 0 : t, r) : []
				}, In.takeRightWhile = function(e, t) {
					return e && e.length ? na(e, Za(t, 3), !1, !0) : []
				}, In.takeWhile = function(e, t) {
					return e && e.length ? na(e, Za(t, 3)) : []
				}, In.tap = function(e, t) {
					return t(e), e
				}, In.throttle = function(e, t, n) {
					var r = !0,
						a = !0;
					if ("function" != typeof e) throw new _e(o);
					return Yi(n) && (r = "leading" in n ? !!n.leading : r, a = "trailing" in n ? !!n.trailing : a), Ei(e, t, {
						leading: r,
						maxWait: t,
						trailing: a
					})
				}, In.thru = ri, In.toArray = nu, In.toPairs = Ru, In.toPairsIn = Iu, In.toPath = function(e) {
					return Di(e) ? ht(e, Ao) : $i(e) ? [e] : ma(So(su(e)))
				}, In.toPlainObject = uu, In.transform = function(e, t, n) {
					var r = Di(e),
						a = r || Ui(e) || Qi(e);
					if (t = Za(t, 4), null == n) {
						var o = e && e.constructor;
						n = a ? r ? new o : [] : Yi(e) && Wi(o) ? Pn(Ke(e)) : {}
					}
					return (a ? ut : cr)(e, (function(e, r, a) {
						return t(n, e, r, a)
					})), n
				}, In.unary = function(e) {
					return _i(e, 1)
				}, In.union = Fo, In.unionBy = Ho, In.unionWith = qo, In.uniq = function(e) {
					return e && e.length ? Qr(e) : []
				}, In.uniqBy = function(e, t) {
					return e && e.length ? Qr(e, Za(t, 2)) : []
				}, In.uniqWith = function(e, t) {
					return t = "function" == typeof t ? t : void 0, e && e.length ? Qr(e, void 0, t) : []
				}, In.unset = function(e, t) {
					return null == e || ea(e, t)
				}, In.unzip = Xo, In.unzipWith = Vo, In.update = function(e, t, n) {
					return null == e ? e : ta(e, t, ua(n))
				}, In.updateWith = function(e, t, n, r) {
					return r = "function" == typeof r ? r : void 0, null == e ? e : ta(e, t, ua(n), r)
				}, In.values = Pu, In.valuesIn = function(e) {
					return null == e ? [] : Ct(e, Ou(e))
				}, In.without = Jo, In.words = Wu, In.wrap = function(e, t) {
					return Ai(ua(t), e)
				}, In.xor = Zo, In.xorBy = $o, In.xorWith = Qo, In.zip = ei, In.zipObject = function(e, t) {
					return oa(e || [], t || [], Yn)
				}, In.zipObjectDeep = function(e, t) {
					return oa(e || [], t || [], Kr)
				}, In.zipWith = ti, In.entries = Ru, In.entriesIn = Iu, In.extend = lu, In.extendWith = du, Zu(In, In), In.add = us, In.attempt = Ku, In.camelCase = xu, In.capitalize = Cu, In.ceil = ss, In.clamp = function(e, t, n) {
					return void 0 === n && (n = t, t = void 0), void 0 !== n && (n = (n = iu(n)) == n ? n : 0), void 0 !== t && (t = (t = iu(t)) == t ? t : 0), Jn(iu(e), t, n)
				}, In.clone = function(e) {
					return Zn(e, 4)
				}, In.cloneDeep = function(e) {
					return Zn(e, 5)
				}, In.cloneDeepWith = function(e, t) {
					return Zn(e, 5, t = "function" == typeof t ? t : void 0)
				}, In.cloneWith = function(e, t) {
					return Zn(e, 4, t = "function" == typeof t ? t : void 0)
				}, In.conformsTo = function(e, t) {
					return null == t || $n(e, t, Eu(t))
				}, In.deburr = Bu, In.defaultTo = function(e, t) {
					return null == e || e != e ? t : e
				}, In.divide = cs, In.endsWith = function(e, t, n) {
					e = su(e), t = $r(t);
					var r = e.length,
						a = n = void 0 === n ? r : Jn(au(n), 0, r);
					return (n -= t.length) >= 0 && e.slice(n, a) == t
				}, In.eq = Pi, In.escape = function(e) {
					return (e = su(e)) && N.test(e) ? e.replace(L, Ut) : e
				}, In.escapeRegExp = function(e) {
					return (e = su(e)) && q.test(e) ? e.replace(H, "\\$&") : e
				}, In.every = function(e, t, n) {
					var r = Di(e) ? ct : rr;
					return n && so(e, t, n) && (t = void 0), r(e, Za(t, 3))
				}, In.find = ii, In.findIndex = Bo, In.findKey = function(e, t) {
					return yt(e, Za(t, 3), cr)
				}, In.findLast = ui, In.findLastIndex = Do, In.findLastKey = function(e, t) {
					return yt(e, Za(t, 3), lr)
				}, In.floor = ls, In.forEach = si, In.forEachRight = ci, In.forIn = function(e, t) {
					return null == e ? e : ur(e, Za(t, 3), Ou)
				}, In.forInRight = function(e, t) {
					return null == e ? e : sr(e, Za(t, 3), Ou)
				}, In.forOwn = function(e, t) {
					return e && cr(e, Za(t, 3))
				}, In.forOwnRight = function(e, t) {
					return e && lr(e, Za(t, 3))
				}, In.get = vu, In.gt = xi, In.gte = Ci, In.has = function(e, t) {
					return null != e && ao(e, t, vr)
				}, In.hasIn = _u, In.head = jo, In.identity = qu, In.includes = function(e, t, n, r) {
					e = ji(e) ? e : Pu(e), n = n && !r ? au(n) : 0;
					var a = e.length;
					return n < 0 && (n = un(a + n, 0)), Zi(e) ? n <= a && e.indexOf(t, n) > -1 : !!a && Et(e, t, n) > -1
				}, In.indexOf = function(e, t, n) {
					var r = null == e ? 0 : e.length;
					if (!r) return -1;
					var a = null == n ? 0 : au(n);
					return a < 0 && (a = un(r + a, 0)), Et(e, t, a)
				}, In.inRange = function(e, t, n) {
					return t = ru(t), void 0 === n ? (n = t, t = 0) : n = ru(n),
						function(e, t, n) {
							return e >= sn(t, n) && e < un(t, n)
						}(e = iu(e), t, n)
				}, In.invoke = bu, In.isArguments = Bi, In.isArray = Di, In.isArrayBuffer = ki, In.isArrayLike = ji, In.isArrayLikeObject = Li, In.isBoolean = function(e) {
					return !0 === e || !1 === e || Fi(e) && pr(e) == l
				}, In.isBuffer = Ui, In.isDate = Ni, In.isElement = function(e) {
					return Fi(e) && 1 === e.nodeType && !Xi(e)
				}, In.isEmpty = function(e) {
					if (null == e) return !0;
					if (ji(e) && (Di(e) || "string" == typeof e || "function" == typeof e.splice || Ui(e) || Qi(e) || Bi(e))) return !e.length;
					var t = ro(e);
					if (t == g || t == y) return !e.size;
					if (ho(e)) return !wr(e).length;
					for (var n in e)
						if (Te.call(e, n)) return !1;
					return !0
				}, In.isEqual = function(e, t) {
					return Er(e, t)
				}, In.isEqualWith = function(e, t, n) {
					var r = (n = "function" == typeof n ? n : void 0) ? n(e, t) : void 0;
					return void 0 === r ? Er(e, t, void 0, n) : !!r
				}, In.isError = zi, In.isFinite = function(e) {
					return "number" == typeof e && rn(e)
				}, In.isFunction = Wi, In.isInteger = Ki, In.isLength = Gi, In.isMap = Hi, In.isMatch = function(e, t) {
					return e === t || Or(e, t, Qa(t))
				}, In.isMatchWith = function(e, t, n) {
					return n = "function" == typeof n ? n : void 0, Or(e, t, Qa(t), n)
				}, In.isNaN = function(e) {
					return qi(e) && e != +e
				}, In.isNative = function(e) {
					if (fo(e)) throw new V("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
					return Tr(e)
				}, In.isNil = function(e) {
					return null == e
				}, In.isNull = function(e) {
					return null === e
				}, In.isNumber = qi, In.isObject = Yi, In.isObjectLike = Fi, In.isPlainObject = Xi, In.isRegExp = Vi, In.isSafeInteger = function(e) {
					return Ki(e) && e >= -9007199254740991 && e <= 9007199254740991
				}, In.isSet = Ji, In.isString = Zi, In.isSymbol = $i, In.isTypedArray = Qi, In.isUndefined = function(e) {
					return void 0 === e
				}, In.isWeakMap = function(e) {
					return Fi(e) && ro(e) == O
				}, In.isWeakSet = function(e) {
					return Fi(e) && "[object WeakSet]" == pr(e)
				}, In.join = function(e, t) {
					return null == e ? "" : an.call(e, t)
				}, In.kebabCase = Du, In.last = zo, In.lastIndexOf = function(e, t, n) {
					var r = null == e ? 0 : e.length;
					if (!r) return -1;
					var a = r;
					return void 0 !== n && (a = (a = au(n)) < 0 ? un(r + a, 0) : sn(a, r - 1)), t == t ? function(e, t, n) {
						for (var r = n + 1; r--;)
							if (e[r] === t) return r;
						return r
					}(e, t, a) : bt(e, Tt, a, !0)
				}, In.lowerCase = ku, In.lowerFirst = ju, In.lt = eu, In.lte = tu, In.max = function(e) {
					return e && e.length ? ar(e, qu, gr) : void 0
				}, In.maxBy = function(e, t) {
					return e && e.length ? ar(e, Za(t, 2), gr) : void 0
				}, In.mean = function(e) {
					return Mt(e, qu)
				}, In.meanBy = function(e, t) {
					return Mt(e, Za(t, 2))
				}, In.min = function(e) {
					return e && e.length ? ar(e, qu, Ar) : void 0
				}, In.minBy = function(e, t) {
					return e && e.length ? ar(e, Za(t, 2), Ar) : void 0
				}, In.stubArray = os, In.stubFalse = is, In.stubObject = function() {
					return {}
				}, In.stubString = function() {
					return ""
				}, In.stubTrue = function() {
					return !0
				}, In.multiply = fs, In.nth = function(e, t) {
					return e && e.length ? Cr(e, au(t)) : void 0
				}, In.noConflict = function() {
					return qe._ === this && (qe._ = Re), this
				}, In.noop = $u, In.now = vi, In.pad = function(e, t, n) {
					e = su(e);
					var r = (t = au(t)) ? Ht(e) : 0;
					if (!t || r >= t) return e;
					var a = (t - r) / 2;
					return Ba(en(a), n) + e + Ba(Qt(a), n)
				}, In.padEnd = function(e, t, n) {
					e = su(e);
					var r = (t = au(t)) ? Ht(e) : 0;
					return t && r < t ? e + Ba(t - r, n) : e
				}, In.padStart = function(e, t, n) {
					e = su(e);
					var r = (t = au(t)) ? Ht(e) : 0;
					return t && r < t ? Ba(t - r, n) + e : e
				}, In.parseInt = function(e, t, n) {
					return n || null == t ? t = 0 : t && (t = +t), ln(su(e).replace(X, ""), t || 0)
				}, In.random = function(e, t, n) {
					if (n && "boolean" != typeof n && so(e, t, n) && (t = n = void 0), void 0 === n && ("boolean" == typeof t ? (n = t, t = void 0) : "boolean" == typeof e && (n = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = ru(e), void 0 === t ? (t = e, e = 0) : t = ru(t)), e > t) {
						var r = e;
						e = t, t = r
					}
					if (n || e % 1 || t % 1) {
						var a = dn();
						return sn(e + a * (t - e + Ge("1e-" + ((a + "").length - 1))), t)
					}
					return Lr(e, t)
				}, In.reduce = function(e, t, n) {
					var r = Di(e) ? gt : At,
						a = arguments.length < 3;
					return r(e, Za(t, 4), n, a, tr)
				}, In.reduceRight = function(e, t, n) {
					var r = Di(e) ? vt : At,
						a = arguments.length < 3;
					return r(e, Za(t, 4), n, a, nr)
				}, In.repeat = function(e, t, n) {
					return t = (n ? so(e, t, n) : void 0 === t) ? 1 : au(t), Ur(su(e), t)
				}, In.replace = function() {
					var e = arguments,
						t = su(e[0]);
					return e.length < 3 ? t : t.replace(e[1], e[2])
				}, In.result = function(e, t, n) {
					var r = -1,
						a = (t = sa(t, e)).length;
					for (a || (a = 1, e = void 0); ++r < a;) {
						var o = null == e ? void 0 : e[Ao(t[r])];
						void 0 === o && (r = a, o = n), e = Wi(o) ? o.call(e) : o
					}
					return e
				}, In.round = hs, In.runInContext = e, In.sample = function(e) {
					return (Di(e) ? zn : zr)(e)
				}, In.size = function(e) {
					if (null == e) return 0;
					if (ji(e)) return Zi(e) ? Ht(e) : e.length;
					var t = ro(e);
					return t == g || t == y ? e.size : wr(e).length
				}, In.snakeCase = Lu, In.some = function(e, t, n) {
					var r = Di(e) ? _t : qr;
					return n && so(e, t, n) && (t = void 0), r(e, Za(t, 3))
				}, In.sortedIndex = function(e, t) {
					return Xr(e, t)
				}, In.sortedIndexBy = function(e, t, n) {
					return Vr(e, t, Za(n, 2))
				}, In.sortedIndexOf = function(e, t) {
					var n = null == e ? 0 : e.length;
					if (n) {
						var r = Xr(e, t);
						if (r < n && Pi(e[r], t)) return r
					}
					return -1
				}, In.sortedLastIndex = function(e, t) {
					return Xr(e, t, !0)
				}, In.sortedLastIndexBy = function(e, t, n) {
					return Vr(e, t, Za(n, 2), !0)
				}, In.sortedLastIndexOf = function(e, t) {
					if (null == e ? 0 : e.length) {
						var n = Xr(e, t, !0) - 1;
						if (Pi(e[n], t)) return n
					}
					return -1
				}, In.startCase = Uu, In.startsWith = function(e, t, n) {
					return e = su(e), n = null == n ? 0 : Jn(au(n), 0, e.length), t = $r(t), e.slice(n, n + t.length) == t
				}, In.subtract = ps, In.sum = function(e) {
					return e && e.length ? Rt(e, qu) : 0
				}, In.sumBy = function(e, t) {
					return e && e.length ? Rt(e, Za(t, 2)) : 0
				}, In.template = function(e, t, n) {
					var r = In.templateSettings;
					n && so(e, t, n) && (t = void 0), e = su(e), t = du({}, t, r, Wa);
					var a, o, i = du({}, t.imports, r.imports, Wa),
						u = Eu(i),
						s = Ct(i, u),
						c = 0,
						l = t.interpolate || le,
						d = "__p += '",
						f = ge((t.escape || le).source + "|" + l.source + "|" + (l === K ? ne : le).source + "|" + (t.evaluate || le).source + "|$", "g"),
						h = "//# sourceURL=" + (Te.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Ne + "]") + "\n";
					e.replace(f, (function(t, n, r, i, u, s) {
						return r || (r = i), d += e.slice(c, s).replace(de, Nt), n && (a = !0, d += "' +\n__e(" + n + ") +\n'"), u && (o = !0, d += "';\n" + u + ";\n__p += '"), r && (d += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"), c = s + t.length, t
					})), d += "';\n";
					var p = Te.call(t, "variable") && t.variable;
					if (p) {
						if (ee.test(p)) throw new V("Invalid `variable` option passed into `_.template`")
					} else d = "with (obj) {\n" + d + "\n}\n";
					d = (o ? d.replace(B, "") : d).replace(D, "$1").replace(k, "$1;"), d = "function(" + (p || "obj") + ") {\n" + (p ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (a ? ", __e = _.escape" : "") + (o ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + d + "return __p\n}";
					var g = Ku((function() {
						return fe(u, h + "return " + d).apply(void 0, s)
					}));
					if (g.source = d, zi(g)) throw g;
					return g
				}, In.times = function(e, t) {
					if ((e = au(e)) < 1 || e > 9007199254740991) return [];
					var n = 4294967295,
						r = sn(e, 4294967295);
					e -= 4294967295;
					for (var a = It(r, t = Za(t)); ++n < e;) t(n);
					return a
				}, In.toFinite = ru, In.toInteger = au, In.toLength = ou, In.toLower = function(e) {
					return su(e).toLowerCase()
				}, In.toNumber = iu, In.toSafeInteger = function(e) {
					return e ? Jn(au(e), -9007199254740991, 9007199254740991) : 0 === e ? e : 0
				}, In.toString = su, In.toUpper = function(e) {
					return su(e).toUpperCase()
				}, In.trim = function(e, t, n) {
					if ((e = su(e)) && (n || void 0 === t)) return Pt(e);
					if (!e || !(t = $r(t))) return e;
					var r = qt(e),
						a = qt(t);
					return la(r, Dt(r, a), kt(r, a) + 1).join("")
				}, In.trimEnd = function(e, t, n) {
					if ((e = su(e)) && (n || void 0 === t)) return e.slice(0, Xt(e) + 1);
					if (!e || !(t = $r(t))) return e;
					var r = qt(e);
					return la(r, 0, kt(r, qt(t)) + 1).join("")
				}, In.trimStart = function(e, t, n) {
					if ((e = su(e)) && (n || void 0 === t)) return e.replace(X, "");
					if (!e || !(t = $r(t))) return e;
					var r = qt(e);
					return la(r, Dt(r, qt(t))).join("")
				}, In.truncate = function(e, t) {
					var n = 30,
						r = "...";
					if (Yi(t)) {
						var a = "separator" in t ? t.separator : a;
						n = "length" in t ? au(t.length) : n, r = "omission" in t ? $r(t.omission) : r
					}
					var o = (e = su(e)).length;
					if (zt(e)) {
						var i = qt(e);
						o = i.length
					}
					if (n >= o) return e;
					var u = n - Ht(r);
					if (u < 1) return r;
					var s = i ? la(i, 0, u).join("") : e.slice(0, u);
					if (void 0 === a) return s + r;
					if (i && (u += s.length - u), Vi(a)) {
						if (e.slice(u).search(a)) {
							var c, l = s;
							for (a.global || (a = ge(a.source, su(re.exec(a)) + "g")), a.lastIndex = 0; c = a.exec(l);) var d = c.index;
							s = s.slice(0, void 0 === d ? u : d)
						}
					} else if (e.indexOf($r(a), u) != u) {
						var f = s.lastIndexOf(a);
						f > -1 && (s = s.slice(0, f))
					}
					return s + r
				}, In.unescape = function(e) {
					return (e = su(e)) && U.test(e) ? e.replace(j, Vt) : e
				}, In.uniqueId = function(e) {
					var t = ++Me;
					return su(e) + t
				}, In.upperCase = Nu, In.upperFirst = zu, In.each = si, In.eachRight = ci, In.first = jo, Zu(In, (ds = {}, cr(In, (function(e, t) {
					Te.call(In.prototype, t) || (ds[t] = e)
				})), ds), {
					chain: !1
				}), In.VERSION = "4.17.21", ut(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], (function(e) {
					In[e].placeholder = In
				})), ut(["drop", "take"], (function(e, t) {
					Bn.prototype[e] = function(n) {
						n = void 0 === n ? 1 : un(au(n), 0);
						var r = this.__filtered__ && !t ? new Bn(this) : this.clone();
						return r.__filtered__ ? r.__takeCount__ = sn(n, r.__takeCount__) : r.__views__.push({
							size: sn(n, 4294967295),
							type: e + (r.__dir__ < 0 ? "Right" : "")
						}), r
					}, Bn.prototype[e + "Right"] = function(t) {
						return this.reverse()[e](t).reverse()
					}
				})), ut(["filter", "map", "takeWhile"], (function(e, t) {
					var n = t + 1,
						r = 1 == n || 3 == n;
					Bn.prototype[e] = function(e) {
						var t = this.clone();
						return t.__iteratees__.push({
							iteratee: Za(e, 3),
							type: n
						}), t.__filtered__ = t.__filtered__ || r, t
					}
				})), ut(["head", "last"], (function(e, t) {
					var n = "take" + (t ? "Right" : "");
					Bn.prototype[e] = function() {
						return this[n](1).value()[0]
					}
				})), ut(["initial", "tail"], (function(e, t) {
					var n = "drop" + (t ? "" : "Right");
					Bn.prototype[e] = function() {
						return this.__filtered__ ? new Bn(this) : this[n](1)
					}
				})), Bn.prototype.compact = function() {
					return this.filter(qu)
				}, Bn.prototype.find = function(e) {
					return this.filter(e).head()
				}, Bn.prototype.findLast = function(e) {
					return this.reverse().find(e)
				}, Bn.prototype.invokeMap = Nr((function(e, t) {
					return "function" == typeof e ? new Bn(this) : this.map((function(n) {
						return yr(n, e, t)
					}))
				})), Bn.prototype.reject = function(e) {
					return this.filter(wi(Za(e)))
				}, Bn.prototype.slice = function(e, t) {
					e = au(e);
					var n = this;
					return n.__filtered__ && (e > 0 || t < 0) ? new Bn(n) : (e < 0 ? n = n.takeRight(-e) : e && (n = n.drop(e)), void 0 !== t && (n = (t = au(t)) < 0 ? n.dropRight(-t) : n.take(t - e)), n)
				}, Bn.prototype.takeRightWhile = function(e) {
					return this.reverse().takeWhile(e).reverse()
				}, Bn.prototype.toArray = function() {
					return this.take(4294967295)
				}, cr(Bn.prototype, (function(e, t) {
					var n = /^(?:filter|find|map|reject)|While$/.test(t),
						r = /^(?:head|last)$/.test(t),
						a = In[r ? "take" + ("last" == t ? "Right" : "") : t],
						o = r || /^find/.test(t);
					a && (In.prototype[t] = function() {
						var t = this.__wrapped__,
							i = r ? [1] : arguments,
							u = t instanceof Bn,
							s = i[0],
							c = u || Di(t),
							l = function(e) {
								var t = a.apply(In, pt([e], i));
								return r && d ? t[0] : t
							};
						c && n && "function" == typeof s && 1 != s.length && (u = c = !1);
						var d = this.__chain__,
							f = !!this.__actions__.length,
							h = o && !d,
							p = u && !f;
						if (!o && c) {
							t = p ? t : new Bn(this);
							var g = e.apply(t, i);
							return g.__actions__.push({
								func: ri,
								args: [l],
								thisArg: void 0
							}), new Cn(g, d)
						}
						return h && p ? e.apply(this, i) : (g = this.thru(l), h ? r ? g.value()[0] : g.value() : g)
					})
				})), ut(["pop", "push", "shift", "sort", "splice", "unshift"], (function(e) {
					var t = me[e],
						n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
						r = /^(?:pop|shift)$/.test(e);
					In.prototype[e] = function() {
						var e = arguments;
						if (r && !this.__chain__) {
							var a = this.value();
							return t.apply(Di(a) ? a : [], e)
						}
						return this[n]((function(n) {
							return t.apply(Di(n) ? n : [], e)
						}))
					}
				})), cr(Bn.prototype, (function(e, t) {
					var n = In[t];
					if (n) {
						var r = n.name + "";
						Te.call(bn, r) || (bn[r] = []), bn[r].push({
							name: t,
							func: n
						})
					}
				})), bn[Ia(void 0, 2).name] = [{
					name: "wrapper",
					func: void 0
				}], Bn.prototype.clone = function() {
					var e = new Bn(this.__wrapped__);
					return e.__actions__ = ma(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = ma(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = ma(this.__views__), e
				}, Bn.prototype.reverse = function() {
					if (this.__filtered__) {
						var e = new Bn(this);
						e.__dir__ = -1, e.__filtered__ = !0
					} else(e = this.clone()).__dir__ *= -1;
					return e
				}, Bn.prototype.value = function() {
					var e = this.__wrapped__.value(),
						t = this.__dir__,
						n = Di(e),
						r = t < 0,
						a = n ? e.length : 0,
						o = function(e, t, n) {
							var r = -1,
								a = n.length;
							for (; ++r < a;) {
								var o = n[r],
									i = o.size;
								switch (o.type) {
									case "drop":
										e += i;
										break;
									case "dropRight":
										t -= i;
										break;
									case "take":
										t = sn(t, e + i);
										break;
									case "takeRight":
										e = un(e, t - i)
								}
							}
							return {
								start: e,
								end: t
							}
						}(0, a, this.__views__),
						i = o.start,
						u = o.end,
						s = u - i,
						c = r ? u : i - 1,
						l = this.__iteratees__,
						d = l.length,
						f = 0,
						h = sn(s, this.__takeCount__);
					if (!n || !r && a == s && h == s) return ra(e, this.__actions__);
					var p = [];
					e: for (; s-- && f < h;) {
						for (var g = -1, v = e[c += t]; ++g < d;) {
							var _ = l[g],
								m = _.iteratee,
								y = _.type,
								b = m(v);
							if (2 == y) v = b;
							else if (!b) {
								if (1 == y) continue e;
								break e
							}
						}
						p[f++] = v
					}
					return p
				}, In.prototype.at = ai, In.prototype.chain = function() {
					return ni(this)
				}, In.prototype.commit = function() {
					return new Cn(this.value(), this.__chain__)
				}, In.prototype.next = function() {
					void 0 === this.__values__ && (this.__values__ = nu(this.value()));
					var e = this.__index__ >= this.__values__.length;
					return {
						done: e,
						value: e ? void 0 : this.__values__[this.__index__++]
					}
				}, In.prototype.plant = function(e) {
					for (var t, n = this; n instanceof xn;) {
						var r = Io(n);
						r.__index__ = 0, r.__values__ = void 0, t ? a.__wrapped__ = r : t = r;
						var a = r;
						n = n.__wrapped__
					}
					return a.__wrapped__ = e, t
				}, In.prototype.reverse = function() {
					var e = this.__wrapped__;
					if (e instanceof Bn) {
						var t = e;
						return this.__actions__.length && (t = new Bn(this)), (t = t.reverse()).__actions__.push({
							func: ri,
							args: [Yo],
							thisArg: void 0
						}), new Cn(t, this.__chain__)
					}
					return this.thru(Yo)
				}, In.prototype.toJSON = In.prototype.valueOf = In.prototype.value = function() {
					return ra(this.__wrapped__, this.__actions__)
				}, In.prototype.first = In.prototype.head, Ze && (In.prototype[Ze] = function() {
					return this
				}), In
			}();
			qe._ = Jt, void 0 === (a = function() {
				return Jt
			}.call(t, n, t, r)) || (r.exports = a)
		}).call(this)
	}).call(this, n(27), n(51)(e))
}, function(e, t, n) {
	"use strict";
	n.d(t, "d", (function() {
		return h
	})), n.d(t, "a", (function() {
		return p
	})), n.d(t, "b", (function() {
		return g
	})), n.d(t, "f", (function() {
		return _
	})), n.d(t, "e", (function() {
		return m
	})), n.d(t, "g", (function() {
		return b
	})), n.d(t, "c", (function() {
		return w
	}));
	var r = n(9),
		a = n(2),
		o = n(1),
		u = n(6),
		s = n(3),
		c = [],
		l = [],
		d = {},
		f = !1;

	function h() {
		f = !1, l = []
	}

	function p() {
		Object(o.f)(), v()
	}

	function g() {
		Object(o.f)(), Object(o.H)(null)
	}

	function v() {
		Object(o.H)(null), c = [], l = [], d = {}, f = !1, Object(u.clearCameraShakes)()
	}

	function _(e) {
		l.push(e), l.length > 10 && y(l.shift())
	}

	function m() {
		for (var e = 0; e < l.length; e++) {
			y(l[e])
		}
		l = []
	}

	function y(e) {
		var t = {};
		t.t = Date.now(), t.me = e[0], t.tanks = e[1], t.polygons = e[2], t.bullets = e[3], t.rifts = e[4], t.mapSize = e[5], t.tickTime = e[6], t.dt = e[7], t.dimension = e[8], t.events = e[9], t.me ? (t.cameraSizeMultiplier = e[10], t.leaderboard = e[11]) : (t.x = e[10], t.y = e[11], t.leaderboard = e[12]), t.me && (t.me = b(t.me)), E(t.tanks), E(t.polygons), E(t.bullets), E(t.rifts);
		var n = c[c.length - 1];
		if (n && n.dimension == t.dimension && null == n.me == (null == t.me) || (v(), Object(u.clearParticles)(), d = c[c.length - 1]), f = !0, 0 != c.length) {
			var r = c[c.length - 1];
			t.me && (t.me = T(r.me, t.me)), t.tanks = O(r.tanks, t.tanks), t.bullets = O(r.bullets, t.bullets), t.rifts = O(r.rifts, t.rifts), t.polygons = O(r.polygons, t.polygons)
		}
		c.push(t), t.leaderboard && Object(o.H)(t.leaderboard), t.events && Object(o.u)(t.events)
	}

	function b(e) {
		for (var t = {}, n = a.PACKET_STRUCTURE[e[1]], r = 0; r < e.length; r++) {
			var o = e[r];
			null != o && (t[n[r]] = o)
		}
		return t
	}

	function E(e) {
		for (var t = 0; t < e.length; t++) e[t] = b(e[t]);
		return e
	}

	function O(e, t) {
		for (var n = [], r = function(r) {
				var a = t[r];
				n.push(T(e.find((function(e) {
					return a.id === e.id
				})) || a, a))
			}, a = 0; a < t.length; a++) r(a);
		return n
	}

	function T(e, t) {
		var n = {};
		return Object.keys(e).forEach((function(a) {
			var o = t[a];
			if (null != o) n[a] = o;
			else switch (a) {
				case "barrels":
				case "gadgets":
				case "barrelData":
				case "gadgetData":
					n[a] = Object(r.cloneDeep)(e[a]);
					break;
				case "fadeTime":
					n[a] = 1, e[a] = 1;
					break;
				default:
					n[a] = e[a]
			}
		})), Object.keys(n).forEach((function(e) {
			switch (e) {
				case "barrels":
					for (var t = 0; t < n.barrels.length; t++) {
						n.barrels[t].animTime = n.barrelData[t].animTime || 0
					}
					break;
				case "gadgets":
					for (var r = 0; r < n.gadgets.length; r++) {
						var a = n.gadgets[r],
							o = n.gadgetData[r];
						a.animTime = o.animTime, o.rot && (a.rot = o.rot)
					}
			}
		})), n
	}

	function M() {
		return Date.now() - s.f.renderDelay
	}

	function w() {
		if (!f) return {};
		var e = function() {
				for (var e = M(), t = c.length - 1; t >= 0; t--)
					if (c[t].t <= e) return t;
				return -1
			}(),
			t = M(),
			n = c[e];
		if (c.splice(0, e), e < 0 || !d) d = c[c.length - 1];
		else {
			var r = c[e + 1] || n,
				a = Math.min((t - n.t) / (r.t - n.t), 1) || 0;
			d = {
				me: S(d.me || r.me, r.me, n.me, a, !0, !1),
				x: n.x,
				y: n.y,
				tanks: A(d.tanks || r.tanks, r.tanks, n.tanks, a, !0),
				polygons: A(d.polygons || r.polygons, r.polygons, n.polygons, a, !0),
				bullets: A(d.bullets || r.bullets, r.bullets, n.bullets, a, !0),
				rifts: R(d.rifts || r.rifts, r.rifts, n.rifts, a),
				mapSize: I(d.mapSize, r.mapSize, a),
				tickTime: n.tickTime,
				dt: n.dt,
				dimension: n.dimension,
				cameraSizeMultiplier: n.cameraSizeMultiplier
			}
		}
		return d
	}

	function S(e, t, n, r) {
		var a = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
			o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
		if (!t) return e;
		if (e) {
			var s = {};
			if (o && t.fadeTime ? e.fadeTime ? e.fadeTime = I(e.fadeTime, -.1, .15 * u.cdt * 60) : (e.fadeTime = 1, a && (e.hp = 0)) : e.fadeTime = 1, a) {
				var c = e.hp / e.maxHP,
					l = t.hp / t.maxHP;
				c > l ? e.damageTime ? s.damageTime = I(e.damageTime, Math.max(-.2, 1 - 30 * (c - l)), .3) : s.damageTime = 1 : e.damageTime ? s.damageTime = I(e.damageTime, 1, .3) : s.damageTime = 1
			}
			return Object.keys(t).forEach((function(a) {
				var o = t[a],
					u = e[a] || o,
					c = n && n[a] || o;
				switch (a) {
					case "d":
						s[a] = P(c, o, r);
						break;
					case "x":
					case "y":
					case "hp":
					case "lifetime":
					case "maxHP":
						s[a] = I(c, o, r);
						break;
					case "score":
					case "totalScore":
					case "xpToNextLevel":
					case "size":
						s[a] = I(u, o, .1);
						break;
					case "barrels":
						s[a] = c;
						for (var l = 0; l < c.length; l++) c[l] && o[l] && (s[a][l].animTime = I(c[l].animTime, o[l].animTime, r));
						break;
					case "gadgets":
						s[a] = c;
						for (var d = 0; d < c.length; d++) o[d] && u[d] && (u[d].animTime && o[d].animTime && (s[a][d].animTime = I(u[d].animTime, o[d].animTime, r)), u[d].rot && o[d].rot && (s[a][d].rot = P(u[d].rot, o[d].rot, r)));
						break;
					case "smoothratio":
						s[a] = I(u[i], e.hp / e.maxHP, .002);
						break;
					case "damageTime":
						break;
					default:
						s[a] = c
				}
			})), s
		}
	}

	function A(e, t, n, r) {
		var a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
		if (e) {
			if (t) {
				var o = e.concat(t.filter((function(t) {
					return !e.find((function(e) {
						return t.id === e.id
					}))
				})));
				return o.map((function(e) {
					return S(e, t.find((function(t) {
						return e.id === t.id
					})) || e, n.find((function(t) {
						return e.id === t.id
					})) || e, r, a, !0)
				})).filter((function(e) {
					return !(e.fadeTime < 0)
				}))
			}
			return e
		}
	}

	function R(e, t, n, r) {
		if (e) return t ? t.map((function(t) {
			return S(e.find((function(e) {
				return t.id === e.id
			})) || t, t, n.find((function(e) {
				return t.id === e.id
			})) || t, r, !1)
		})) : e
	}

	function I(e, t, n) {
		return t * n + e * (1 - n)
	}

	function P(e, t, n) {
		var r = (1 - n) * Math.cos(e) + n * Math.cos(t),
			a = (1 - n) * Math.sin(e) + n * Math.sin(t);
		return Math.atan2(a, r)
	}
}, function(e, t, n) {
	var r = t.global = n(35),
		a = t.hasBuffer = r && !!r.isBuffer,
		o = t.hasArrayBuffer = "undefined" != typeof ArrayBuffer,
		i = t.isArray = n(20);
	t.isArrayBuffer = o ? function(e) {
		return e instanceof ArrayBuffer || p(e)
	} : _;
	var u = t.isBuffer = a ? r.isBuffer : _,
		s = t.isView = o ? ArrayBuffer.isView || m("ArrayBuffer", "buffer") : _;
	t.alloc = h, t.concat = function(e, n) {
		n || (n = 0, Array.prototype.forEach.call(e, (function(e) {
			n += e.length
		})));
		var r = this !== t && this || e[0],
			a = h.call(r, n),
			o = 0;
		return Array.prototype.forEach.call(e, (function(e) {
			o += f.copy.call(e, a, o)
		})), a
	}, t.from = function(e) {
		return "string" == typeof e ? g.call(this, e) : v(this).from(e)
	};
	var c = t.Array = n(38),
		l = t.Buffer = n(39),
		d = t.Uint8Array = n(40),
		f = t.prototype = n(21);

	function h(e) {
		return v(this).alloc(e)
	}
	var p = m("ArrayBuffer");

	function g(e) {
		var t = 3 * e.length,
			n = h.call(this, t),
			r = f.write.call(n, e);
		return t !== r && (n = f.slice.call(n, 0, r)), n
	}

	function v(e) {
		return u(e) ? l : s(e) ? d : i(e) ? c : a ? l : o ? d : c
	}

	function _() {
		return !1
	}

	function m(e, t) {
		return e = "[object " + e + "]",
			function(n) {
				return null != n && {}.toString.call(t ? n[t] : n) === e
			}
	}
}, function(e, t, n) {
	! function(e) {
		"use strict";

		function t(e, t, n, r) {
			var a, o = !1,
				i = 0;

			function u() {
				a && clearTimeout(a)
			}

			function s() {
				for (var s = arguments.length, c = new Array(s), l = 0; l < s; l++) c[l] = arguments[l];
				var d = this,
					f = Date.now() - i;

				function h() {
					i = Date.now(), n.apply(d, c)
				}

				function p() {
					a = void 0
				}
				o || (r && !a && h(), u(), void 0 === r && f > e ? h() : !0 !== t && (a = setTimeout(r ? p : h, void 0 === r ? e - f : e)))
			}
			return "boolean" != typeof t && (r = n, n = t, t = void 0), s.cancel = function() {
				u(), o = !0
			}, s
		}
		e.debounce = function(e, n, r) {
			return void 0 === r ? t(e, n, !1) : t(e, r, !1 !== n)
		}, e.throttle = t, Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}(t)
}, function(e, t, n) {
	"use strict";
	n.d(t, "b", (function() {
		return o
	})), n.d(t, "a", (function() {
		return i
	})), n.d(t, "c", (function() {
		return u
	})), n.d(t, "d", (function() {
		return s
	}));
	var r = n(2),
		a = n(3),
		o = (n(4), n(7), n(6), n(2), {}),
		i = {
			visual: {
				gridSize: 30,
				showMinimap: !0,
				backgroundColor: "#081e20",
				gridColor: "#000000",
				particles: {
					spawnrate: 0,
					speed: {
						min: 0,
						max: 0
					},
					d: {
						min: 0,
						max: 360
					},
					size: {
						min: 6,
						max: 6
					},
					lifetime: {
						min: 30,
						max: 60
					},
					sides: {
						min: 0,
						max: 0
					},
					transparency: {
						min: 1,
						max: 1
					},
					color: {
						min: "#081e20",
						max: "#000000"
					}
				}
			},
			bases: [],
			walls: [],
			gates: [],
			trueMapSize: 1
		};

	function u(e, t) {
		t.visual.particles.spawnrate /= r.CAMERA_SIZE * r.CAMERA_SIZE, o[e] = t
	}

	function s(e, t) {
		setTimeout((function() {
			o[e].gates = t
		}), a.f.renderDelay)
	}
}, function(e, t) {
	e.exports = Object.freeze({
		TEAMS: [{
			value: 0,
			name: "Normal (FFA)"
		}, {
			value: -1,
			name: "Fallen (FFA)"
		}, {
			value: 2,
			name: "Celestial"
		}, {
			value: 1,
			name: "Polygon"
		}, {
			value: 10,
			name: "Blue"
		}, {
			value: 11,
			name: "Red"
		}, {
			value: 12,
			name: "Green"
		}, {
			value: 13,
			name: "Purple"
		}, {
			value: 4,
			name: "Yellow"
		}, {
			value: 5,
			name: "Black"
		}, {
			value: 6,
			name: "White"
		}, {
			value: 3,
			name: "Barrel"
		}, {
			value: 7,
			name: "Spike"
		}, {
			value: 20,
			name: "Triangle Yellow"
		}, {
			value: 21,
			name: "Square Red"
		}, {
			value: 22,
			name: "Pentagon Blue"
		}, {
			value: 23,
			name: "Hexagon Orange"
		}, {
			value: 24,
			name: "Heptagon Green"
		}, {
			value: 25,
			name: "Octagon Blue"
		}, {
			value: 26,
			name: "Nonagon Dark Purple"
		}, {
			value: 27,
			name: "Decagon Dark Blue"
		}, {
			value: 28,
			name: "Hendecagon Black"
		}, {
			value: 29,
			name: "Dodecagon Dark Grey"
		}, {
			value: 30,
			name: "Tridecagon White"
		}],
		POLYGON_TEAMS: [{
			value: 1,
			name: "Polygon"
		}, {
			value: 0,
			name: "Normal (FFA)"
		}, {
			value: -1,
			name: "Fallen (FFA)"
		}, {
			value: 2,
			name: "Celestial"
		}, {
			value: 10,
			name: "Blue"
		}, {
			value: 11,
			name: "Red"
		}, {
			value: 12,
			name: "Green"
		}, {
			value: 13,
			name: "Purple"
		}, {
			value: 4,
			name: "Yellow"
		}, {
			value: 5,
			name: "Black"
		}, {
			value: 6,
			name: "White"
		}, {
			value: 3,
			name: "Barrel"
		}, {
			value: 7,
			name: "Spike"
		}, {
			value: 20,
			name: "Triangle Yellow"
		}, {
			value: 21,
			name: "Square Red"
		}, {
			value: 22,
			name: "Pentagon Blue"
		}, {
			value: 23,
			name: "Hexagon Orange"
		}, {
			value: 24,
			name: "Heptagon Green"
		}, {
			value: 25,
			name: "Octagon Blue"
		}, {
			value: 26,
			name: "Nonagon Dark Purple"
		}, {
			value: 27,
			name: "Decagon Dark Blue"
		}, {
			value: 28,
			name: "Hendecagon Black"
		}, {
			value: 29,
			name: "Dodecagon Dark Grey"
		}, {
			value: 30,
			name: "Tridecagon White"
		}],
		VISUAL_TEAMS: [{
			value: void 0,
			name: "Unset"
		}, {
			value: 0,
			name: "Normal (Blue and Red)"
		}, {
			value: -1,
			name: "Fallen Light Gray"
		}, {
			value: 2,
			name: "Celestial Pink"
		}, {
			value: 10,
			name: "Blue"
		}, {
			value: 11,
			name: "Red"
		}, {
			value: 12,
			name: "Green"
		}, {
			value: 13,
			name: "Purple"
		}, {
			value: 4,
			name: "Yellow"
		}, {
			value: 5,
			name: "Black"
		}, {
			value: 6,
			name: "White"
		}, {
			value: 3,
			name: "Barrel Gray"
		}, {
			value: 7,
			name: "Spike Dark Gray"
		}, {
			value: 20,
			name: "Triangle Yellow"
		}, {
			value: 21,
			name: "Square Red"
		}, {
			value: 22,
			name: "Pentagon Blue"
		}, {
			value: 23,
			name: "Hexagon Orange"
		}, {
			value: 24,
			name: "Heptagon Green"
		}, {
			value: 25,
			name: "Octagon Blue"
		}, {
			value: 26,
			name: "Nonagon Dark Purple"
		}, {
			value: 27,
			name: "Decagon Dark Blue"
		}, {
			value: 28,
			name: "Hendecagon Black"
		}, {
			value: 29,
			name: "Dodecagon Dark Grey"
		}, {
			value: 30,
			name: "Tridecagon White"
		}],
		MAX_SIDES: 1e3,
		MAX_RADIANT: 20
	})
}, function(e, t, n) {
	t.encode = n(24).encode, t.decode = n(30).decode, t.Encoder = n(47).Encoder, t.Decoder = n(48).Decoder, t.createCodec = n(49).createCodec, t.codec = n(50).codec
}, function(e, t, n) {
	var r = n(20);
	t.createCodec = u, t.install = function(e) {
		for (var t in e) o.prototype[t] = i(o.prototype[t], e[t])
	}, t.filter = function(e) {
		return r(e) ? function(e) {
			return e = e.slice(),
				function(n) {
					return e.reduce(t, n)
				};

			function t(e, t) {
				return t(e)
			}
		}(e) : e
	};
	var a = n(11);

	function o(e) {
		if (!(this instanceof o)) return new o(e);
		this.options = e, this.init()
	}

	function i(e, t) {
		return e && t ? function() {
			return e.apply(this, arguments), t.apply(this, arguments)
		} : e || t
	}

	function u(e) {
		return new o(e)
	}
	o.prototype.init = function() {
		var e = this.options;
		return e && e.uint8array && (this.bufferish = a.Uint8Array), this
	}, t.preset = u({
		preset: !0
	})
}, function(e, t, n) {
	var r = n(18).ExtBuffer,
		a = n(42),
		o = n(43),
		i = n(16);

	function u() {
		var e = this.options;
		return this.encode = function(e) {
			var t = o.getWriteType(e);
			return function(e, n) {
				var r = t[typeof n];
				if (!r) throw new Error('Unsupported type "' + typeof n + '": ' + n);
				r(e, n)
			}
		}(e), e && e.preset && a.setExtPackers(this), this
	}
	i.install({
		addExtPacker: function(e, t, n) {
			n = i.filter(n);
			var a = t.name;
			if (a && "Object" !== a) {
				(this.extPackers || (this.extPackers = {}))[a] = o
			} else {
				(this.extEncoderList || (this.extEncoderList = [])).unshift([t, o])
			}

			function o(t) {
				return n && (t = n(t)), new r(t, e)
			}
		},
		getExtPacker: function(e) {
			var t = this.extPackers || (this.extPackers = {}),
				n = e.constructor,
				r = n && n.name && t[n.name];
			if (r) return r;
			for (var a = this.extEncoderList || (this.extEncoderList = []), o = a.length, i = 0; i < o; i++) {
				var u = a[i];
				if (n === u[0]) return u[1]
			}
		},
		init: u
	}), t.preset = u.call(i.preset)
}, function(e, t, n) {
	t.ExtBuffer = function e(t, n) {
		if (!(this instanceof e)) return new e(t, n);
		this.buffer = r.from(t), this.type = n
	};
	var r = n(11)
}, function(e, t) {
	/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
	t.read = function(e, t, n, r, a) {
		var o, i, u = 8 * a - r - 1,
			s = (1 << u) - 1,
			c = s >> 1,
			l = -7,
			d = n ? a - 1 : 0,
			f = n ? -1 : 1,
			h = e[t + d];
		for (d += f, o = h & (1 << -l) - 1, h >>= -l, l += u; l > 0; o = 256 * o + e[t + d], d += f, l -= 8);
		for (i = o & (1 << -l) - 1, o >>= -l, l += r; l > 0; i = 256 * i + e[t + d], d += f, l -= 8);
		if (0 === o) o = 1 - c;
		else {
			if (o === s) return i ? NaN : 1 / 0 * (h ? -1 : 1);
			i += Math.pow(2, r), o -= c
		}
		return (h ? -1 : 1) * i * Math.pow(2, o - r)
	}, t.write = function(e, t, n, r, a, o) {
		var i, u, s, c = 8 * o - a - 1,
			l = (1 << c) - 1,
			d = l >> 1,
			f = 23 === a ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
			h = r ? 0 : o - 1,
			p = r ? 1 : -1,
			g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
		for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (u = isNaN(t) ? 1 : 0, i = l) : (i = Math.floor(Math.log(t) / Math.LN2), t * (s = Math.pow(2, -i)) < 1 && (i--, s *= 2), (t += i + d >= 1 ? f / s : f * Math.pow(2, 1 - d)) * s >= 2 && (i++, s /= 2), i + d >= l ? (u = 0, i = l) : i + d >= 1 ? (u = (t * s - 1) * Math.pow(2, a), i += d) : (u = t * Math.pow(2, d - 1) * Math.pow(2, a), i = 0)); a >= 8; e[n + h] = 255 & u, h += p, u /= 256, a -= 8);
		for (i = i << a | u, c += a; c > 0; e[n + h] = 255 & i, h += p, i /= 256, c -= 8);
		e[n + h - p] |= 128 * g
	}
}, function(e, t) {
	var n = {}.toString;
	e.exports = Array.isArray || function(e) {
		return "[object Array]" == n.call(e)
	}
}, function(e, t, n) {
	var r, a = n(41);
	t.copy = c, t.slice = l, t.toString = function(e, t, n) {
		var r = !u && o.isBuffer(this) ? this.toString : a.toString;
		return r.apply(this, arguments)
	}, t.write = (r = "write", function() {
		var e = this[r] || a[r];
		return e.apply(this, arguments)
	});
	var o = n(11),
		i = o.global,
		u = o.hasBuffer && "TYPED_ARRAY_SUPPORT" in i,
		s = u && !i.TYPED_ARRAY_SUPPORT;

	function c(e, t, n, r) {
		var i = o.isBuffer(this),
			u = o.isBuffer(e);
		if (i && u) return this.copy(e, t, n, r);
		if (s || i || u || !o.isView(this) || !o.isView(e)) return a.copy.call(this, e, t, n, r);
		var c = n || null != r ? l.call(this, n, r) : this;
		return e.set(c, t), c.length
	}

	function l(e, t) {
		var n = this.slice || !s && this.subarray;
		if (n) return n.call(this, e, t);
		var r = o.alloc.call(this, t - e);
		return c.call(this, r, 0, e, t), r
	}
}, function(e, t, n) {
	(function(e) {
		! function(t) {
			var n, r = void 0 !== e && e,
				a = "undefined" != typeof Uint8Array && Uint8Array,
				o = "undefined" != typeof ArrayBuffer && ArrayBuffer,
				i = [0, 0, 0, 0, 0, 0, 0, 0],
				u = Array.isArray || function(e) {
					return !!e && "[object Array]" == Object.prototype.toString.call(e)
				},
				s = 4294967296;

			function c(e, u, c) {
				var b = u ? 0 : 4,
					E = u ? 4 : 0,
					O = u ? 0 : 3,
					T = u ? 1 : 2,
					M = u ? 2 : 1,
					w = u ? 3 : 0,
					S = u ? v : m,
					A = u ? _ : y,
					R = x.prototype,
					I = "is" + e,
					P = "_" + I;
				return R.buffer = void 0, R.offset = 0, R[P] = !0, R.toNumber = C, R.toString = function(e) {
					var t = this.buffer,
						n = this.offset,
						r = D(t, n + b),
						a = D(t, n + E),
						o = "",
						i = !c && 2147483648 & r;
					i && (r = ~r, a = s - a);
					e = e || 10;
					for (;;) {
						var u = r % e * s + a;
						if (r = Math.floor(r / e), a = Math.floor(u / e), o = (u % e).toString(e) + o, !r && !a) break
					}
					i && (o = "-" + o);
					return o
				}, R.toJSON = C, R.toArray = l, r && (R.toBuffer = d), a && (R.toArrayBuffer = f), x[I] = function(e) {
					return !(!e || !e[P])
				}, t[e] = x, x;

				function x(e, t, r, u) {
					return this instanceof x ? function(e, t, r, u, c) {
						a && o && (t instanceof o && (t = new a(t)), u instanceof o && (u = new a(u)));
						if (!(t || r || u || n)) return void(e.buffer = g(i, 0));
						if (!h(t, r)) {
							c = r, u = t, r = 0, t = new(n || Array)(8)
						}
						if (e.buffer = t, e.offset = r |= 0, void 0 === u) return;
						"string" == typeof u ? function(e, t, n, r) {
							var a = 0,
								o = n.length,
								i = 0,
								u = 0;
							"-" === n[0] && a++;
							var c = a;
							for (; a < o;) {
								var l = parseInt(n[a++], r);
								if (!(l >= 0)) break;
								u = u * r + l, i = i * r + Math.floor(u / s), u %= s
							}
							c && (i = ~i, u ? u = s - u : i++);
							B(e, t + b, i), B(e, t + E, u)
						}(t, r, u, c || 10) : h(u, c) ? p(t, r, u, c) : "number" == typeof c ? (B(t, r + b, u), B(t, r + E, c)) : u > 0 ? S(t, r, u) : u < 0 ? A(t, r, u) : p(t, r, i, 0)
					}(this, e, t, r, u) : new x(e, t, r, u)
				}

				function C() {
					var e = this.buffer,
						t = this.offset,
						n = D(e, t + b),
						r = D(e, t + E);
					return c || (n |= 0), n ? n * s + r : r
				}

				function B(e, t, n) {
					e[t + w] = 255 & n, n >>= 8, e[t + M] = 255 & n, n >>= 8, e[t + T] = 255 & n, n >>= 8, e[t + O] = 255 & n
				}

				function D(e, t) {
					return 16777216 * e[t + O] + (e[t + T] << 16) + (e[t + M] << 8) + e[t + w]
				}
			}

			function l(e) {
				var t = this.buffer,
					r = this.offset;
				return n = null, !1 !== e && 0 === r && 8 === t.length && u(t) ? t : g(t, r)
			}

			function d(t) {
				var a = this.buffer,
					o = this.offset;
				if (n = r, !1 !== t && 0 === o && 8 === a.length && e.isBuffer(a)) return a;
				var i = new r(8);
				return p(i, 0, a, o), i
			}

			function f(e) {
				var t = this.buffer,
					r = this.offset,
					i = t.buffer;
				if (n = a, !1 !== e && 0 === r && i instanceof o && 8 === i.byteLength) return i;
				var u = new a(8);
				return p(u, 0, t, r), u.buffer
			}

			function h(e, t) {
				var n = e && e.length;
				return t |= 0, n && t + 8 <= n && "string" != typeof e[t]
			}

			function p(e, t, n, r) {
				t |= 0, r |= 0;
				for (var a = 0; a < 8; a++) e[t++] = 255 & n[r++]
			}

			function g(e, t) {
				return Array.prototype.slice.call(e, t, t + 8)
			}

			function v(e, t, n) {
				for (var r = t + 8; r > t;) e[--r] = 255 & n, n /= 256
			}

			function _(e, t, n) {
				var r = t + 8;
				for (n++; r > t;) e[--r] = 255 & -n ^ 255, n /= 256
			}

			function m(e, t, n) {
				for (var r = t + 8; t < r;) e[t++] = 255 & n, n /= 256
			}

			function y(e, t, n) {
				var r = t + 8;
				for (n++; t < r;) e[t++] = 255 & -n ^ 255, n /= 256
			}
			c("Uint64BE", !0, !0), c("Int64BE", !0, !1), c("Uint64LE", !1, !0), c("Int64LE", !1, !1)
		}("string" != typeof t.nodeName ? t : this || {})
	}).call(this, n(26).Buffer)
}, function(e, t, n) {
	var r = n(18).ExtBuffer,
		a = n(45),
		o = n(32).readUint8,
		i = n(46),
		u = n(16);

	function s() {
		var e = this.options;
		return this.decode = function(e) {
			var t = i.getReadToken(e);
			return function(e) {
				var n = o(e),
					r = t[n];
				if (!r) throw new Error("Invalid type: " + (n ? "0x" + n.toString(16) : n));
				return r(e)
			}
		}(e), e && e.preset && a.setExtUnpackers(this), this
	}
	u.install({
		addExtUnpacker: function(e, t) {
			(this.extUnpackers || (this.extUnpackers = []))[e] = u.filter(t)
		},
		getExtUnpacker: function(e) {
			return (this.extUnpackers || (this.extUnpackers = []))[e] || function(t) {
				return new r(t, e)
			}
		},
		init: s
	}), t.preset = s.call(u.preset)
}, function(e, t, n) {
	t.encode = function(e, t) {
		var n = new r(t);
		return n.write(e), n.read()
	};
	var r = n(25).EncodeBuffer
}, function(e, t, n) {
	t.EncodeBuffer = a;
	var r = n(17).preset;

	function a(e) {
		if (!(this instanceof a)) return new a(e);
		if (e && (this.options = e, e.codec)) {
			var t = this.codec = e.codec;
			t.bufferish && (this.bufferish = t.bufferish)
		}
	}
	n(29).FlexEncoder.mixin(a.prototype), a.prototype.codec = r, a.prototype.write = function(e) {
		this.codec.encode(this, e)
	}
}, function(e, t, n) {
	"use strict";
	(function(e) {
		/*!
		 * The buffer module from node.js, for the browser.
		 *
		 * @author   Feross Aboukhadijeh <http://feross.org>
		 * @license  MIT
		 */
		var r = n(36),
			a = n(19),
			o = n(37);

		function i() {
			return s.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
		}

		function u(e, t) {
			if (i() < t) throw new RangeError("Invalid typed array length");
			return s.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = s.prototype : (null === e && (e = new s(t)), e.length = t), e
		}

		function s(e, t, n) {
			if (!(s.TYPED_ARRAY_SUPPORT || this instanceof s)) return new s(e, t, n);
			if ("number" == typeof e) {
				if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
				return d(this, e)
			}
			return c(this, e, t, n)
		}

		function c(e, t, n, r) {
			if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
			return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function(e, t, n, r) {
				if (t.byteLength, n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
				if (t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
				t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r);
				s.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = s.prototype : e = f(e, t);
				return e
			}(e, t, n, r) : "string" == typeof t ? function(e, t, n) {
				"string" == typeof n && "" !== n || (n = "utf8");
				if (!s.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
				var r = 0 | p(t, n),
					a = (e = u(e, r)).write(t, n);
				a !== r && (e = e.slice(0, a));
				return e
			}(e, t, n) : function(e, t) {
				if (s.isBuffer(t)) {
					var n = 0 | h(t.length);
					return 0 === (e = u(e, n)).length || t.copy(e, 0, 0, n), e
				}
				if (t) {
					if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (r = t.length) != r ? u(e, 0) : f(e, t);
					if ("Buffer" === t.type && o(t.data)) return f(e, t.data)
				}
				var r;
				throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
			}(e, t)
		}

		function l(e) {
			if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
			if (e < 0) throw new RangeError('"size" argument must not be negative')
		}

		function d(e, t) {
			if (l(t), e = u(e, t < 0 ? 0 : 0 | h(t)), !s.TYPED_ARRAY_SUPPORT)
				for (var n = 0; n < t; ++n) e[n] = 0;
			return e
		}

		function f(e, t) {
			var n = t.length < 0 ? 0 : 0 | h(t.length);
			e = u(e, n);
			for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
			return e
		}

		function h(e) {
			if (e >= i()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i().toString(16) + " bytes");
			return 0 | e
		}

		function p(e, t) {
			if (s.isBuffer(e)) return e.length;
			if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
			"string" != typeof e && (e = "" + e);
			var n = e.length;
			if (0 === n) return 0;
			for (var r = !1;;) switch (t) {
				case "ascii":
				case "latin1":
				case "binary":
					return n;
				case "utf8":
				case "utf-8":
				case void 0:
					return z(e).length;
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le":
					return 2 * n;
				case "hex":
					return n >>> 1;
				case "base64":
					return W(e).length;
				default:
					if (r) return z(e).length;
					t = ("" + t).toLowerCase(), r = !0
			}
		}

		function g(e, t, n) {
			var r = !1;
			if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
			if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
			if ((n >>>= 0) <= (t >>>= 0)) return "";
			for (e || (e = "utf8");;) switch (e) {
				case "hex":
					return I(this, t, n);
				case "utf8":
				case "utf-8":
					return S(this, t, n);
				case "ascii":
					return A(this, t, n);
				case "latin1":
				case "binary":
					return R(this, t, n);
				case "base64":
					return w(this, t, n);
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le":
					return P(this, t, n);
				default:
					if (r) throw new TypeError("Unknown encoding: " + e);
					e = (e + "").toLowerCase(), r = !0
			}
		}

		function v(e, t, n) {
			var r = e[t];
			e[t] = e[n], e[n] = r
		}

		function _(e, t, n, r, a) {
			if (0 === e.length) return -1;
			if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = a ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
				if (a) return -1;
				n = e.length - 1
			} else if (n < 0) {
				if (!a) return -1;
				n = 0
			}
			if ("string" == typeof t && (t = s.from(t, r)), s.isBuffer(t)) return 0 === t.length ? -1 : m(e, t, n, r, a);
			if ("number" == typeof t) return t &= 255, s.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? a ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : m(e, [t], n, r, a);
			throw new TypeError("val must be string, number or Buffer")
		}

		function m(e, t, n, r, a) {
			var o, i = 1,
				u = e.length,
				s = t.length;
			if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
				if (e.length < 2 || t.length < 2) return -1;
				i = 2, u /= 2, s /= 2, n /= 2
			}

			function c(e, t) {
				return 1 === i ? e[t] : e.readUInt16BE(t * i)
			}
			if (a) {
				var l = -1;
				for (o = n; o < u; o++)
					if (c(e, o) === c(t, -1 === l ? 0 : o - l)) {
						if (-1 === l && (l = o), o - l + 1 === s) return l * i
					} else -1 !== l && (o -= o - l), l = -1
			} else
				for (n + s > u && (n = u - s), o = n; o >= 0; o--) {
					for (var d = !0, f = 0; f < s; f++)
						if (c(e, o + f) !== c(t, f)) {
							d = !1;
							break
						} if (d) return o
				}
			return -1
		}

		function y(e, t, n, r) {
			n = Number(n) || 0;
			var a = e.length - n;
			r ? (r = Number(r)) > a && (r = a) : r = a;
			var o = t.length;
			if (o % 2 != 0) throw new TypeError("Invalid hex string");
			r > o / 2 && (r = o / 2);
			for (var i = 0; i < r; ++i) {
				var u = parseInt(t.substr(2 * i, 2), 16);
				if (isNaN(u)) return i;
				e[n + i] = u
			}
			return i
		}

		function b(e, t, n, r) {
			return K(z(t, e.length - n), e, n, r)
		}

		function E(e, t, n, r) {
			return K(function(e) {
				for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
				return t
			}(t), e, n, r)
		}

		function O(e, t, n, r) {
			return E(e, t, n, r)
		}

		function T(e, t, n, r) {
			return K(W(t), e, n, r)
		}

		function M(e, t, n, r) {
			return K(function(e, t) {
				for (var n, r, a, o = [], i = 0; i < e.length && !((t -= 2) < 0); ++i) n = e.charCodeAt(i), r = n >> 8, a = n % 256, o.push(a), o.push(r);
				return o
			}(t, e.length - n), e, n, r)
		}

		function w(e, t, n) {
			return 0 === t && n === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, n))
		}

		function S(e, t, n) {
			n = Math.min(e.length, n);
			for (var r = [], a = t; a < n;) {
				var o, i, u, s, c = e[a],
					l = null,
					d = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
				if (a + d <= n) switch (d) {
					case 1:
						c < 128 && (l = c);
						break;
					case 2:
						128 == (192 & (o = e[a + 1])) && (s = (31 & c) << 6 | 63 & o) > 127 && (l = s);
						break;
					case 3:
						o = e[a + 1], i = e[a + 2], 128 == (192 & o) && 128 == (192 & i) && (s = (15 & c) << 12 | (63 & o) << 6 | 63 & i) > 2047 && (s < 55296 || s > 57343) && (l = s);
						break;
					case 4:
						o = e[a + 1], i = e[a + 2], u = e[a + 3], 128 == (192 & o) && 128 == (192 & i) && 128 == (192 & u) && (s = (15 & c) << 18 | (63 & o) << 12 | (63 & i) << 6 | 63 & u) > 65535 && s < 1114112 && (l = s)
				}
				null === l ? (l = 65533, d = 1) : l > 65535 && (l -= 65536, r.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), r.push(l), a += d
			}
			return function(e) {
				var t = e.length;
				if (t <= 4096) return String.fromCharCode.apply(String, e);
				var n = "",
					r = 0;
				for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += 4096));
				return n
			}(r)
		}
		t.Buffer = s, t.SlowBuffer = function(e) {
			+e != e && (e = 0);
			return s.alloc(+e)
		}, t.INSPECT_MAX_BYTES = 50, s.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function() {
			try {
				var e = new Uint8Array(1);
				return e.__proto__ = {
					__proto__: Uint8Array.prototype,
					foo: function() {
						return 42
					}
				}, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
			} catch (e) {
				return !1
			}
		}(), t.kMaxLength = i(), s.poolSize = 8192, s._augment = function(e) {
			return e.__proto__ = s.prototype, e
		}, s.from = function(e, t, n) {
			return c(null, e, t, n)
		}, s.TYPED_ARRAY_SUPPORT && (s.prototype.__proto__ = Uint8Array.prototype, s.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && s[Symbol.species] === s && Object.defineProperty(s, Symbol.species, {
			value: null,
			configurable: !0
		})), s.alloc = function(e, t, n) {
			return function(e, t, n, r) {
				return l(t), t <= 0 ? u(e, t) : void 0 !== n ? "string" == typeof r ? u(e, t).fill(n, r) : u(e, t).fill(n) : u(e, t)
			}(null, e, t, n)
		}, s.allocUnsafe = function(e) {
			return d(null, e)
		}, s.allocUnsafeSlow = function(e) {
			return d(null, e)
		}, s.isBuffer = function(e) {
			return !(null == e || !e._isBuffer)
		}, s.compare = function(e, t) {
			if (!s.isBuffer(e) || !s.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
			if (e === t) return 0;
			for (var n = e.length, r = t.length, a = 0, o = Math.min(n, r); a < o; ++a)
				if (e[a] !== t[a]) {
					n = e[a], r = t[a];
					break
				} return n < r ? -1 : r < n ? 1 : 0
		}, s.isEncoding = function(e) {
			switch (String(e).toLowerCase()) {
				case "hex":
				case "utf8":
				case "utf-8":
				case "ascii":
				case "latin1":
				case "binary":
				case "base64":
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le":
					return !0;
				default:
					return !1
			}
		}, s.concat = function(e, t) {
			if (!o(e)) throw new TypeError('"list" argument must be an Array of Buffers');
			if (0 === e.length) return s.alloc(0);
			var n;
			if (void 0 === t)
				for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
			var r = s.allocUnsafe(t),
				a = 0;
			for (n = 0; n < e.length; ++n) {
				var i = e[n];
				if (!s.isBuffer(i)) throw new TypeError('"list" argument must be an Array of Buffers');
				i.copy(r, a), a += i.length
			}
			return r
		}, s.byteLength = p, s.prototype._isBuffer = !0, s.prototype.swap16 = function() {
			var e = this.length;
			if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
			for (var t = 0; t < e; t += 2) v(this, t, t + 1);
			return this
		}, s.prototype.swap32 = function() {
			var e = this.length;
			if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
			for (var t = 0; t < e; t += 4) v(this, t, t + 3), v(this, t + 1, t + 2);
			return this
		}, s.prototype.swap64 = function() {
			var e = this.length;
			if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
			for (var t = 0; t < e; t += 8) v(this, t, t + 7), v(this, t + 1, t + 6), v(this, t + 2, t + 5), v(this, t + 3, t + 4);
			return this
		}, s.prototype.toString = function() {
			var e = 0 | this.length;
			return 0 === e ? "" : 0 === arguments.length ? S(this, 0, e) : g.apply(this, arguments)
		}, s.prototype.equals = function(e) {
			if (!s.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
			return this === e || 0 === s.compare(this, e)
		}, s.prototype.inspect = function() {
			var e = "",
				n = t.INSPECT_MAX_BYTES;
			return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (e += " ... ")), "<Buffer " + e + ">"
		}, s.prototype.compare = function(e, t, n, r, a) {
			if (!s.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
			if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === a && (a = this.length), t < 0 || n > e.length || r < 0 || a > this.length) throw new RangeError("out of range index");
			if (r >= a && t >= n) return 0;
			if (r >= a) return -1;
			if (t >= n) return 1;
			if (this === e) return 0;
			for (var o = (a >>>= 0) - (r >>>= 0), i = (n >>>= 0) - (t >>>= 0), u = Math.min(o, i), c = this.slice(r, a), l = e.slice(t, n), d = 0; d < u; ++d)
				if (c[d] !== l[d]) {
					o = c[d], i = l[d];
					break
				} return o < i ? -1 : i < o ? 1 : 0
		}, s.prototype.includes = function(e, t, n) {
			return -1 !== this.indexOf(e, t, n)
		}, s.prototype.indexOf = function(e, t, n) {
			return _(this, e, t, n, !0)
		}, s.prototype.lastIndexOf = function(e, t, n) {
			return _(this, e, t, n, !1)
		}, s.prototype.write = function(e, t, n, r) {
			if (void 0 === t) r = "utf8", n = this.length, t = 0;
			else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;
			else {
				if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
				t |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
			}
			var a = this.length - t;
			if ((void 0 === n || n > a) && (n = a), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
			r || (r = "utf8");
			for (var o = !1;;) switch (r) {
				case "hex":
					return y(this, e, t, n);
				case "utf8":
				case "utf-8":
					return b(this, e, t, n);
				case "ascii":
					return E(this, e, t, n);
				case "latin1":
				case "binary":
					return O(this, e, t, n);
				case "base64":
					return T(this, e, t, n);
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le":
					return M(this, e, t, n);
				default:
					if (o) throw new TypeError("Unknown encoding: " + r);
					r = ("" + r).toLowerCase(), o = !0
			}
		}, s.prototype.toJSON = function() {
			return {
				type: "Buffer",
				data: Array.prototype.slice.call(this._arr || this, 0)
			}
		};

		function A(e, t, n) {
			var r = "";
			n = Math.min(e.length, n);
			for (var a = t; a < n; ++a) r += String.fromCharCode(127 & e[a]);
			return r
		}

		function R(e, t, n) {
			var r = "";
			n = Math.min(e.length, n);
			for (var a = t; a < n; ++a) r += String.fromCharCode(e[a]);
			return r
		}

		function I(e, t, n) {
			var r = e.length;
			(!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
			for (var a = "", o = t; o < n; ++o) a += N(e[o]);
			return a
		}

		function P(e, t, n) {
			for (var r = e.slice(t, n), a = "", o = 0; o < r.length; o += 2) a += String.fromCharCode(r[o] + 256 * r[o + 1]);
			return a
		}

		function x(e, t, n) {
			if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
			if (e + t > n) throw new RangeError("Trying to access beyond buffer length")
		}

		function C(e, t, n, r, a, o) {
			if (!s.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
			if (t > a || t < o) throw new RangeError('"value" argument is out of bounds');
			if (n + r > e.length) throw new RangeError("Index out of range")
		}

		function B(e, t, n, r) {
			t < 0 && (t = 65535 + t + 1);
			for (var a = 0, o = Math.min(e.length - n, 2); a < o; ++a) e[n + a] = (t & 255 << 8 * (r ? a : 1 - a)) >>> 8 * (r ? a : 1 - a)
		}

		function D(e, t, n, r) {
			t < 0 && (t = 4294967295 + t + 1);
			for (var a = 0, o = Math.min(e.length - n, 4); a < o; ++a) e[n + a] = t >>> 8 * (r ? a : 3 - a) & 255
		}

		function k(e, t, n, r, a, o) {
			if (n + r > e.length) throw new RangeError("Index out of range");
			if (n < 0) throw new RangeError("Index out of range")
		}

		function j(e, t, n, r, o) {
			return o || k(e, 0, n, 4), a.write(e, t, n, r, 23, 4), n + 4
		}

		function L(e, t, n, r, o) {
			return o || k(e, 0, n, 8), a.write(e, t, n, r, 52, 8), n + 8
		}
		s.prototype.slice = function(e, t) {
			var n, r = this.length;
			if ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e), s.TYPED_ARRAY_SUPPORT)(n = this.subarray(e, t)).__proto__ = s.prototype;
			else {
				var a = t - e;
				n = new s(a, void 0);
				for (var o = 0; o < a; ++o) n[o] = this[o + e]
			}
			return n
		}, s.prototype.readUIntLE = function(e, t, n) {
			e |= 0, t |= 0, n || x(e, t, this.length);
			for (var r = this[e], a = 1, o = 0; ++o < t && (a *= 256);) r += this[e + o] * a;
			return r
		}, s.prototype.readUIntBE = function(e, t, n) {
			e |= 0, t |= 0, n || x(e, t, this.length);
			for (var r = this[e + --t], a = 1; t > 0 && (a *= 256);) r += this[e + --t] * a;
			return r
		}, s.prototype.readUInt8 = function(e, t) {
			return t || x(e, 1, this.length), this[e]
		}, s.prototype.readUInt16LE = function(e, t) {
			return t || x(e, 2, this.length), this[e] | this[e + 1] << 8
		}, s.prototype.readUInt16BE = function(e, t) {
			return t || x(e, 2, this.length), this[e] << 8 | this[e + 1]
		}, s.prototype.readUInt32LE = function(e, t) {
			return t || x(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
		}, s.prototype.readUInt32BE = function(e, t) {
			return t || x(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
		}, s.prototype.readIntLE = function(e, t, n) {
			e |= 0, t |= 0, n || x(e, t, this.length);
			for (var r = this[e], a = 1, o = 0; ++o < t && (a *= 256);) r += this[e + o] * a;
			return r >= (a *= 128) && (r -= Math.pow(2, 8 * t)), r
		}, s.prototype.readIntBE = function(e, t, n) {
			e |= 0, t |= 0, n || x(e, t, this.length);
			for (var r = t, a = 1, o = this[e + --r]; r > 0 && (a *= 256);) o += this[e + --r] * a;
			return o >= (a *= 128) && (o -= Math.pow(2, 8 * t)), o
		}, s.prototype.readInt8 = function(e, t) {
			return t || x(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
		}, s.prototype.readInt16LE = function(e, t) {
			t || x(e, 2, this.length);
			var n = this[e] | this[e + 1] << 8;
			return 32768 & n ? 4294901760 | n : n
		}, s.prototype.readInt16BE = function(e, t) {
			t || x(e, 2, this.length);
			var n = this[e + 1] | this[e] << 8;
			return 32768 & n ? 4294901760 | n : n
		}, s.prototype.readInt32LE = function(e, t) {
			return t || x(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
		}, s.prototype.readInt32BE = function(e, t) {
			return t || x(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
		}, s.prototype.readFloatLE = function(e, t) {
			return t || x(e, 4, this.length), a.read(this, e, !0, 23, 4)
		}, s.prototype.readFloatBE = function(e, t) {
			return t || x(e, 4, this.length), a.read(this, e, !1, 23, 4)
		}, s.prototype.readDoubleLE = function(e, t) {
			return t || x(e, 8, this.length), a.read(this, e, !0, 52, 8)
		}, s.prototype.readDoubleBE = function(e, t) {
			return t || x(e, 8, this.length), a.read(this, e, !1, 52, 8)
		}, s.prototype.writeUIntLE = function(e, t, n, r) {
			(e = +e, t |= 0, n |= 0, r) || C(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
			var a = 1,
				o = 0;
			for (this[t] = 255 & e; ++o < n && (a *= 256);) this[t + o] = e / a & 255;
			return t + n
		}, s.prototype.writeUIntBE = function(e, t, n, r) {
			(e = +e, t |= 0, n |= 0, r) || C(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
			var a = n - 1,
				o = 1;
			for (this[t + a] = 255 & e; --a >= 0 && (o *= 256);) this[t + a] = e / o & 255;
			return t + n
		}, s.prototype.writeUInt8 = function(e, t, n) {
			return e = +e, t |= 0, n || C(this, e, t, 1, 255, 0), s.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
		}, s.prototype.writeUInt16LE = function(e, t, n) {
			return e = +e, t |= 0, n || C(this, e, t, 2, 65535, 0), s.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : B(this, e, t, !0), t + 2
		}, s.prototype.writeUInt16BE = function(e, t, n) {
			return e = +e, t |= 0, n || C(this, e, t, 2, 65535, 0), s.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : B(this, e, t, !1), t + 2
		}, s.prototype.writeUInt32LE = function(e, t, n) {
			return e = +e, t |= 0, n || C(this, e, t, 4, 4294967295, 0), s.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : D(this, e, t, !0), t + 4
		}, s.prototype.writeUInt32BE = function(e, t, n) {
			return e = +e, t |= 0, n || C(this, e, t, 4, 4294967295, 0), s.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : D(this, e, t, !1), t + 4
		}, s.prototype.writeIntLE = function(e, t, n, r) {
			if (e = +e, t |= 0, !r) {
				var a = Math.pow(2, 8 * n - 1);
				C(this, e, t, n, a - 1, -a)
			}
			var o = 0,
				i = 1,
				u = 0;
			for (this[t] = 255 & e; ++o < n && (i *= 256);) e < 0 && 0 === u && 0 !== this[t + o - 1] && (u = 1), this[t + o] = (e / i >> 0) - u & 255;
			return t + n
		}, s.prototype.writeIntBE = function(e, t, n, r) {
			if (e = +e, t |= 0, !r) {
				var a = Math.pow(2, 8 * n - 1);
				C(this, e, t, n, a - 1, -a)
			}
			var o = n - 1,
				i = 1,
				u = 0;
			for (this[t + o] = 255 & e; --o >= 0 && (i *= 256);) e < 0 && 0 === u && 0 !== this[t + o + 1] && (u = 1), this[t + o] = (e / i >> 0) - u & 255;
			return t + n
		}, s.prototype.writeInt8 = function(e, t, n) {
			return e = +e, t |= 0, n || C(this, e, t, 1, 127, -128), s.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
		}, s.prototype.writeInt16LE = function(e, t, n) {
			return e = +e, t |= 0, n || C(this, e, t, 2, 32767, -32768), s.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : B(this, e, t, !0), t + 2
		}, s.prototype.writeInt16BE = function(e, t, n) {
			return e = +e, t |= 0, n || C(this, e, t, 2, 32767, -32768), s.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : B(this, e, t, !1), t + 2
		}, s.prototype.writeInt32LE = function(e, t, n) {
			return e = +e, t |= 0, n || C(this, e, t, 4, 2147483647, -2147483648), s.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : D(this, e, t, !0), t + 4
		}, s.prototype.writeInt32BE = function(e, t, n) {
			return e = +e, t |= 0, n || C(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), s.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : D(this, e, t, !1), t + 4
		}, s.prototype.writeFloatLE = function(e, t, n) {
			return j(this, e, t, !0, n)
		}, s.prototype.writeFloatBE = function(e, t, n) {
			return j(this, e, t, !1, n)
		}, s.prototype.writeDoubleLE = function(e, t, n) {
			return L(this, e, t, !0, n)
		}, s.prototype.writeDoubleBE = function(e, t, n) {
			return L(this, e, t, !1, n)
		}, s.prototype.copy = function(e, t, n, r) {
			if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
			if (0 === e.length || 0 === this.length) return 0;
			if (t < 0) throw new RangeError("targetStart out of bounds");
			if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
			if (r < 0) throw new RangeError("sourceEnd out of bounds");
			r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
			var a, o = r - n;
			if (this === e && n < t && t < r)
				for (a = o - 1; a >= 0; --a) e[a + t] = this[a + n];
			else if (o < 1e3 || !s.TYPED_ARRAY_SUPPORT)
				for (a = 0; a < o; ++a) e[a + t] = this[a + n];
			else Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);
			return o
		}, s.prototype.fill = function(e, t, n, r) {
			if ("string" == typeof e) {
				if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === e.length) {
					var a = e.charCodeAt(0);
					a < 256 && (e = a)
				}
				if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
				if ("string" == typeof r && !s.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
			} else "number" == typeof e && (e &= 255);
			if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
			if (n <= t) return this;
			var o;
			if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
				for (o = t; o < n; ++o) this[o] = e;
			else {
				var i = s.isBuffer(e) ? e : z(new s(e, r).toString()),
					u = i.length;
				for (o = 0; o < n - t; ++o) this[o + t] = i[o % u]
			}
			return this
		};
		var U = /[^+\/0-9A-Za-z-_]/g;

		function N(e) {
			return e < 16 ? "0" + e.toString(16) : e.toString(16)
		}

		function z(e, t) {
			var n;
			t = t || 1 / 0;
			for (var r = e.length, a = null, o = [], i = 0; i < r; ++i) {
				if ((n = e.charCodeAt(i)) > 55295 && n < 57344) {
					if (!a) {
						if (n > 56319) {
							(t -= 3) > -1 && o.push(239, 191, 189);
							continue
						}
						if (i + 1 === r) {
							(t -= 3) > -1 && o.push(239, 191, 189);
							continue
						}
						a = n;
						continue
					}
					if (n < 56320) {
						(t -= 3) > -1 && o.push(239, 191, 189), a = n;
						continue
					}
					n = 65536 + (a - 55296 << 10 | n - 56320)
				} else a && (t -= 3) > -1 && o.push(239, 191, 189);
				if (a = null, n < 128) {
					if ((t -= 1) < 0) break;
					o.push(n)
				} else if (n < 2048) {
					if ((t -= 2) < 0) break;
					o.push(n >> 6 | 192, 63 & n | 128)
				} else if (n < 65536) {
					if ((t -= 3) < 0) break;
					o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
				} else {
					if (!(n < 1114112)) throw new Error("Invalid code point");
					if ((t -= 4) < 0) break;
					o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
				}
			}
			return o
		}

		function W(e) {
			return r.toByteArray(function(e) {
				if ((e = function(e) {
						return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
					}(e).replace(U, "")).length < 2) return "";
				for (; e.length % 4 != 0;) e += "=";
				return e
			}(e))
		}

		function K(e, t, n, r) {
			for (var a = 0; a < r && !(a + n >= t.length || a >= e.length); ++a) t[a + n] = e[a];
			return a
		}
	}).call(this, n(27))
}, function(e, t) {
	var n;
	n = function() {
		return this
	}();
	try {
		n = n || new Function("return this")()
	} catch (e) {
		"object" == typeof window && (n = window)
	}
	e.exports = n
}, function(e, t) {
	for (var n = t.uint8 = new Array(256), r = 0; r <= 255; r++) n[r] = a(r);

	function a(e) {
		return function(t) {
			var n = t.reserve(1);
			t.buffer[n] = e
		}
	}
}, function(e, t, n) {
	t.FlexDecoder = a, t.FlexEncoder = o;
	var r = n(11);

	function a() {
		if (!(this instanceof a)) return new a
	}

	function o() {
		if (!(this instanceof o)) return new o
	}

	function i() {
		throw new Error("method not implemented: write()")
	}

	function u() {
		throw new Error("method not implemented: fetch()")
	}

	function s() {
		return this.buffers && this.buffers.length ? (this.flush(), this.pull()) : this.fetch()
	}

	function c(e) {
		(this.buffers || (this.buffers = [])).push(e)
	}

	function l() {
		return (this.buffers || (this.buffers = [])).shift()
	}

	function d(e) {
		return function(t) {
			for (var n in e) t[n] = e[n];
			return t
		}
	}
	a.mixin = d({
		bufferish: r,
		write: function(e) {
			var t = this.offset ? r.prototype.slice.call(this.buffer, this.offset) : this.buffer;
			this.buffer = t ? e ? this.bufferish.concat([t, e]) : t : e, this.offset = 0
		},
		fetch: u,
		flush: function() {
			for (; this.offset < this.buffer.length;) {
				var e, t = this.offset;
				try {
					e = this.fetch()
				} catch (e) {
					if (e && "BUFFER_SHORTAGE" != e.message) throw e;
					this.offset = t;
					break
				}
				this.push(e)
			}
		},
		push: c,
		pull: l,
		read: s,
		reserve: function(e) {
			var t = this.offset,
				n = t + e;
			if (n > this.buffer.length) throw new Error("BUFFER_SHORTAGE");
			return this.offset = n, t
		},
		offset: 0
	}), a.mixin(a.prototype), o.mixin = d({
		bufferish: r,
		write: i,
		fetch: function() {
			var e = this.start;
			if (e < this.offset) {
				var t = this.start = this.offset;
				return r.prototype.slice.call(this.buffer, e, t)
			}
		},
		flush: function() {
			for (; this.start < this.offset;) {
				var e = this.fetch();
				e && this.push(e)
			}
		},
		push: c,
		pull: function() {
			var e = this.buffers || (this.buffers = []),
				t = e.length > 1 ? this.bufferish.concat(e) : e[0];
			return e.length = 0, t
		},
		read: s,
		reserve: function(e) {
			var t = 0 | e;
			if (this.buffer) {
				var n = this.buffer.length,
					r = 0 | this.offset,
					a = r + t;
				if (a < n) return this.offset = a, r;
				this.flush(), e = Math.max(e, Math.min(2 * n, this.maxBufferSize))
			}
			return e = Math.max(e, this.minBufferSize), this.buffer = this.bufferish.alloc(e), this.start = 0, this.offset = t, 0
		},
		send: function(e) {
			var t = e.length;
			if (t > this.minBufferSize) this.flush(), this.push(e);
			else {
				var n = this.reserve(t);
				r.prototype.copy.call(e, this.buffer, n)
			}
		},
		maxBufferSize: 65536,
		minBufferSize: 2048,
		offset: 0,
		start: 0
	}), o.mixin(o.prototype)
}, function(e, t, n) {
	t.decode = function(e, t) {
		var n = new r(t);
		return n.write(e), n.read()
	};
	var r = n(31).DecodeBuffer
}, function(e, t, n) {
	t.DecodeBuffer = a;
	var r = n(23).preset;

	function a(e) {
		if (!(this instanceof a)) return new a(e);
		if (e && (this.options = e, e.codec)) {
			var t = this.codec = e.codec;
			t.bufferish && (this.bufferish = t.bufferish)
		}
	}
	n(29).FlexDecoder.mixin(a.prototype), a.prototype.codec = r, a.prototype.fetch = function() {
		return this.codec.decode(this)
	}
}, function(e, t, n) {
	var r = n(19),
		a = n(22),
		o = a.Uint64BE,
		i = a.Int64BE;
	t.getReadFormat = function(e) {
		var t = u.hasArrayBuffer && e && e.binarraybuffer,
			n = e && e.int64;
		return {
			map: c && e && e.usemap ? d : l,
			array: f,
			str: h,
			bin: t ? g : p,
			ext: v,
			uint8: _,
			uint16: y,
			uint32: E,
			uint64: T(8, n ? S : M),
			int8: m,
			int16: b,
			int32: O,
			int64: T(8, n ? A : w),
			float32: T(4, R),
			float64: T(8, I)
		}
	}, t.readUint8 = _;
	var u = n(11),
		s = n(21),
		c = "undefined" != typeof Map;

	function l(e, t) {
		var n, r = {},
			a = new Array(t),
			o = new Array(t),
			i = e.codec.decode;
		for (n = 0; n < t; n++) a[n] = i(e), o[n] = i(e);
		for (n = 0; n < t; n++) r[a[n]] = o[n];
		return r
	}

	function d(e, t) {
		var n, r = new Map,
			a = new Array(t),
			o = new Array(t),
			i = e.codec.decode;
		for (n = 0; n < t; n++) a[n] = i(e), o[n] = i(e);
		for (n = 0; n < t; n++) r.set(a[n], o[n]);
		return r
	}

	function f(e, t) {
		for (var n = new Array(t), r = e.codec.decode, a = 0; a < t; a++) n[a] = r(e);
		return n
	}

	function h(e, t) {
		var n = e.reserve(t),
			r = n + t;
		return s.toString.call(e.buffer, "utf-8", n, r)
	}

	function p(e, t) {
		var n = e.reserve(t),
			r = n + t,
			a = s.slice.call(e.buffer, n, r);
		return u.from(a)
	}

	function g(e, t) {
		var n = e.reserve(t),
			r = n + t,
			a = s.slice.call(e.buffer, n, r);
		return u.Uint8Array.from(a).buffer
	}

	function v(e, t) {
		var n = e.reserve(t + 1),
			r = e.buffer[n++],
			a = n + t,
			o = e.codec.getExtUnpacker(r);
		if (!o) throw new Error("Invalid ext type: " + (r ? "0x" + r.toString(16) : r));
		return o(s.slice.call(e.buffer, n, a))
	}

	function _(e) {
		var t = e.reserve(1);
		return e.buffer[t]
	}

	function m(e) {
		var t = e.reserve(1),
			n = e.buffer[t];
		return 128 & n ? n - 256 : n
	}

	function y(e) {
		var t = e.reserve(2),
			n = e.buffer;
		return n[t++] << 8 | n[t]
	}

	function b(e) {
		var t = e.reserve(2),
			n = e.buffer,
			r = n[t++] << 8 | n[t];
		return 32768 & r ? r - 65536 : r
	}

	function E(e) {
		var t = e.reserve(4),
			n = e.buffer;
		return 16777216 * n[t++] + (n[t++] << 16) + (n[t++] << 8) + n[t]
	}

	function O(e) {
		var t = e.reserve(4),
			n = e.buffer;
		return n[t++] << 24 | n[t++] << 16 | n[t++] << 8 | n[t]
	}

	function T(e, t) {
		return function(n) {
			var r = n.reserve(e);
			return t.call(n.buffer, r, !0)
		}
	}

	function M(e) {
		return new o(this, e).toNumber()
	}

	function w(e) {
		return new i(this, e).toNumber()
	}

	function S(e) {
		return new o(this, e)
	}

	function A(e) {
		return new i(this, e)
	}

	function R(e) {
		return r.read(this, e, !1, 23, 4)
	}

	function I(e) {
		return r.read(this, e, !1, 52, 8)
	}
}, function(e, t, n) {
	! function(t) {
		e.exports = t;
		var n = {
			on: function(e, t) {
				return o(this, e).push(t), this
			},
			once: function(e, t) {
				var n = this;
				return r.originalListener = t, o(n, e).push(r), n;

				function r() {
					a.call(n, e, r), t.apply(this, arguments)
				}
			},
			off: a,
			emit: function(e, t) {
				var n = this,
					r = o(n, e, !0);
				if (!r) return !1;
				var a = arguments.length;
				if (1 === a) r.forEach(u);
				else if (2 === a) r.forEach(s);
				else {
					var i = Array.prototype.slice.call(arguments, 1);
					r.forEach(c)
				}
				return !!r.length;

				function u(e) {
					e.call(n)
				}

				function s(e) {
					e.call(n, t)
				}

				function c(e) {
					e.apply(n, i)
				}
			}
		};

		function r(e) {
			for (var t in n) e[t] = n[t];
			return e
		}

		function a(e, t) {
			var n, r = this;
			if (arguments.length) {
				if (t) {
					if (n = o(r, e, !0)) {
						if (!(n = n.filter(i)).length) return a.call(r, e);
						r.listeners[e] = n
					}
				} else if ((n = r.listeners) && (delete n[e], !Object.keys(n).length)) return a.call(r)
			} else delete r.listeners;
			return r;

			function i(e) {
				return e !== t && e.originalListener !== t
			}
		}

		function o(e, t, n) {
			if (!n || e.listeners) {
				var r = e.listeners || (e.listeners = {});
				return r[t] || (r[t] = [])
			}
		}
		r(t.prototype), t.mixin = r
	}((
		/**
		 * event-lite.js - Light-weight EventEmitter (less than 1KB when gzipped)
		 *
		 * @copyright Yusuke Kawasaki
		 * @license MIT
		 * @constructor
		 * @see https://github.com/kawanet/event-lite
		 * @see http://kawanet.github.io/event-lite/EventLite.html
		 * @example
		 * var EventLite = require("event-lite");
		 *
		 * function MyClass() {...}             // your class
		 *
		 * EventLite.mixin(MyClass.prototype);  // import event methods
		 *
		 * var obj = new MyClass();
		 * obj.on("foo", function() {...});     // add event listener
		 * obj.once("bar", function() {...});   // add one-time event listener
		 * obj.emit("foo");                     // dispatch event
		 * obj.emit("bar");                     // dispatch another event
		 * obj.off("foo");                      // remove event listener
		 */
		function e() {
			if (!(this instanceof e)) return new e
		}))
}, function(e, t, n) {
	"use strict";
	var r = {};
	Promise.all([].map((function(e) {
		return new Promise((function(t) {
			var n = new Image;
			n.onload = function() {
				console.log("Downloaded ".concat(e)), r[e] = n, t()
			}, n.src = "/assets/".concat(e)
		}))
	})))
}, function(e, t, n) {
	(function(t) {
		function n(e) {
			return e && e.isBuffer && e
		}
		e.exports = n(void 0 !== t && t) || n(this.Buffer) || n("undefined" != typeof window && window.Buffer) || this.Buffer
	}).call(this, n(26).Buffer)
}, function(e, t, n) {
	"use strict";
	t.byteLength = function(e) {
		var t = c(e),
			n = t[0],
			r = t[1];
		return 3 * (n + r) / 4 - r
	}, t.toByteArray = function(e) {
		var t, n, r = c(e),
			i = r[0],
			u = r[1],
			s = new o(function(e, t, n) {
				return 3 * (t + n) / 4 - n
			}(0, i, u)),
			l = 0,
			d = u > 0 ? i - 4 : i;
		for (n = 0; n < d; n += 4) t = a[e.charCodeAt(n)] << 18 | a[e.charCodeAt(n + 1)] << 12 | a[e.charCodeAt(n + 2)] << 6 | a[e.charCodeAt(n + 3)], s[l++] = t >> 16 & 255, s[l++] = t >> 8 & 255, s[l++] = 255 & t;
		2 === u && (t = a[e.charCodeAt(n)] << 2 | a[e.charCodeAt(n + 1)] >> 4, s[l++] = 255 & t);
		1 === u && (t = a[e.charCodeAt(n)] << 10 | a[e.charCodeAt(n + 1)] << 4 | a[e.charCodeAt(n + 2)] >> 2, s[l++] = t >> 8 & 255, s[l++] = 255 & t);
		return s
	}, t.fromByteArray = function(e) {
		for (var t, n = e.length, a = n % 3, o = [], i = 0, u = n - a; i < u; i += 16383) o.push(l(e, i, i + 16383 > u ? u : i + 16383));
		1 === a ? (t = e[n - 1], o.push(r[t >> 2] + r[t << 4 & 63] + "==")) : 2 === a && (t = (e[n - 2] << 8) + e[n - 1], o.push(r[t >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + "="));
		return o.join("")
	};
	for (var r = [], a = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", u = 0, s = i.length; u < s; ++u) r[u] = i[u], a[i.charCodeAt(u)] = u;

	function c(e) {
		var t = e.length;
		if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
		var n = e.indexOf("=");
		return -1 === n && (n = t), [n, n === t ? 0 : 4 - n % 4]
	}

	function l(e, t, n) {
		for (var a, o, i = [], u = t; u < n; u += 3) a = (e[u] << 16 & 16711680) + (e[u + 1] << 8 & 65280) + (255 & e[u + 2]), i.push(r[(o = a) >> 18 & 63] + r[o >> 12 & 63] + r[o >> 6 & 63] + r[63 & o]);
		return i.join("")
	}
	a["-".charCodeAt(0)] = 62, a["_".charCodeAt(0)] = 63
}, function(e, t) {
	var n = {}.toString;
	e.exports = Array.isArray || function(e) {
		return "[object Array]" == n.call(e)
	}
}, function(e, t, n) {
	var r = n(11);

	function a(e) {
		return new Array(e)
	}(t = e.exports = a(0)).alloc = a, t.concat = r.concat, t.from = function(e) {
		if (!r.isBuffer(e) && r.isView(e)) e = r.Uint8Array.from(e);
		else if (r.isArrayBuffer(e)) e = new Uint8Array(e);
		else {
			if ("string" == typeof e) return r.from.call(t, e);
			if ("number" == typeof e) throw new TypeError('"value" argument must not be a number')
		}
		return Array.prototype.slice.call(e)
	}
}, function(e, t, n) {
	var r = n(11),
		a = r.global;

	function o(e) {
		return new a(e)
	}(t = e.exports = r.hasBuffer ? o(0) : []).alloc = r.hasBuffer && a.alloc || o, t.concat = r.concat, t.from = function(e) {
		if (!r.isBuffer(e) && r.isView(e)) e = r.Uint8Array.from(e);
		else if (r.isArrayBuffer(e)) e = new Uint8Array(e);
		else {
			if ("string" == typeof e) return r.from.call(t, e);
			if ("number" == typeof e) throw new TypeError('"value" argument must not be a number')
		}
		return a.from && 1 !== a.from.length ? a.from(e) : new a(e)
	}
}, function(e, t, n) {
	var r = n(11);

	function a(e) {
		return new Uint8Array(e)
	}(t = e.exports = r.hasArrayBuffer ? a(0) : []).alloc = a, t.concat = r.concat, t.from = function(e) {
		if (r.isView(e)) {
			var n = e.byteOffset,
				a = e.byteLength;
			(e = e.buffer).byteLength !== a && (e.slice ? e = e.slice(n, n + a) : (e = new Uint8Array(e)).byteLength !== a && (e = Array.prototype.slice.call(e, n, n + a)))
		} else {
			if ("string" == typeof e) return r.from.call(t, e);
			if ("number" == typeof e) throw new TypeError('"value" argument must not be a number')
		}
		return new Uint8Array(e)
	}
}, function(e, t) {
	t.copy = function(e, t, n, r) {
		var a;
		n || (n = 0);
		r || 0 === r || (r = this.length);
		t || (t = 0);
		var o = r - n;
		if (e === this && n < t && t < r)
			for (a = o - 1; a >= 0; a--) e[a + t] = this[a + n];
		else
			for (a = 0; a < o; a++) e[a + t] = this[a + n];
		return o
	}, t.toString = function(e, t, n) {
		var r = 0 | t;
		n || (n = this.length);
		var a = "",
			o = 0;
		for (; r < n;)(o = this[r++]) < 128 ? a += String.fromCharCode(o) : (192 == (224 & o) ? o = (31 & o) << 6 | 63 & this[r++] : 224 == (240 & o) ? o = (15 & o) << 12 | (63 & this[r++]) << 6 | 63 & this[r++] : 240 == (248 & o) && (o = (7 & o) << 18 | (63 & this[r++]) << 12 | (63 & this[r++]) << 6 | 63 & this[r++]), o >= 65536 ? (o -= 65536, a += String.fromCharCode(55296 + (o >>> 10), 56320 + (1023 & o))) : a += String.fromCharCode(o));
		return a
	}, t.write = function(e, t) {
		var n = t || (t |= 0),
			r = e.length,
			a = 0,
			o = 0;
		for (; o < r;)(a = e.charCodeAt(o++)) < 128 ? this[n++] = a : a < 2048 ? (this[n++] = 192 | a >>> 6, this[n++] = 128 | 63 & a) : a < 55296 || a > 57343 ? (this[n++] = 224 | a >>> 12, this[n++] = 128 | a >>> 6 & 63, this[n++] = 128 | 63 & a) : (a = 65536 + (a - 55296 << 10 | e.charCodeAt(o++) - 56320), this[n++] = 240 | a >>> 18, this[n++] = 128 | a >>> 12 & 63, this[n++] = 128 | a >>> 6 & 63, this[n++] = 128 | 63 & a);
		return n - t
	}
}, function(e, t, n) {
	t.setExtPackers = function(e) {
		e.addExtPacker(14, Error, [d, s]), e.addExtPacker(1, EvalError, [d, s]), e.addExtPacker(2, RangeError, [d, s]), e.addExtPacker(3, ReferenceError, [d, s]), e.addExtPacker(4, SyntaxError, [d, s]), e.addExtPacker(5, TypeError, [d, s]), e.addExtPacker(6, URIError, [d, s]), e.addExtPacker(10, RegExp, [l, s]), e.addExtPacker(11, Boolean, [c, s]), e.addExtPacker(12, String, [c, s]), e.addExtPacker(13, Date, [Number, s]), e.addExtPacker(15, Number, [c, s]), "undefined" != typeof Uint8Array && (e.addExtPacker(17, Int8Array, i), e.addExtPacker(18, Uint8Array, i), e.addExtPacker(19, Int16Array, i), e.addExtPacker(20, Uint16Array, i), e.addExtPacker(21, Int32Array, i), e.addExtPacker(22, Uint32Array, i), e.addExtPacker(23, Float32Array, i), "undefined" != typeof Float64Array && e.addExtPacker(24, Float64Array, i), "undefined" != typeof Uint8ClampedArray && e.addExtPacker(25, Uint8ClampedArray, i), e.addExtPacker(26, ArrayBuffer, i), e.addExtPacker(29, DataView, i));
		a.hasBuffer && e.addExtPacker(27, o, a.from)
	};
	var r, a = n(11),
		o = a.global,
		i = a.Uint8Array.from,
		u = {
			name: 1,
			message: 1,
			stack: 1,
			columnNumber: 1,
			fileName: 1,
			lineNumber: 1
		};

	function s(e) {
		return r || (r = n(24).encode), r(e)
	}

	function c(e) {
		return e.valueOf()
	}

	function l(e) {
		(e = RegExp.prototype.toString.call(e).split("/")).shift();
		var t = [e.pop()];
		return t.unshift(e.join("/")), t
	}

	function d(e) {
		var t = {};
		for (var n in u) t[n] = e[n];
		return t
	}
}, function(e, t, n) {
	var r = n(20),
		a = n(22),
		o = a.Uint64BE,
		i = a.Int64BE,
		u = n(11),
		s = n(21),
		c = n(44),
		l = n(28).uint8,
		d = n(18).ExtBuffer,
		f = "undefined" != typeof Uint8Array,
		h = "undefined" != typeof Map,
		p = [];
	p[1] = 212, p[2] = 213, p[4] = 214, p[8] = 215, p[16] = 216, t.getWriteType = function(e) {
		var t = c.getWriteToken(e),
			n = e && e.useraw,
			a = f && e && e.binarraybuffer,
			g = a ? u.isArrayBuffer : u.isBuffer,
			v = a ? function(e, t) {
				E(e, new Uint8Array(t))
			} : E,
			_ = h && e && e.usemap ? function(e, n) {
				if (!(n instanceof Map)) return O(e, n);
				var r = n.size;
				t[r < 16 ? 128 + r : r <= 65535 ? 222 : 223](e, r);
				var a = e.codec.encode;
				n.forEach((function(t, n, r) {
					a(e, n), a(e, t)
				}))
			} : O;
		return {
			boolean: function(e, n) {
				t[n ? 195 : 194](e, n)
			},
			function: b,
			number: function(e, n) {
				var r, a = 0 | n;
				if (n !== a) return void t[r = 203](e, n);
				r = -32 <= a && a <= 127 ? 255 & a : 0 <= a ? a <= 255 ? 204 : a <= 65535 ? 205 : 206 : -128 <= a ? 208 : -32768 <= a ? 209 : 210;
				t[r](e, a)
			},
			object: n ? function(e, n) {
				if (g(n)) return function(e, n) {
					var r = n.length;
					t[r < 32 ? 160 + r : r <= 65535 ? 218 : 219](e, r), e.send(n)
				}(e, n);
				y(e, n)
			} : y,
			string: (m = n ? function(e) {
				return e < 32 ? 1 : e <= 65535 ? 3 : 5
			} : function(e) {
				return e < 32 ? 1 : e <= 255 ? 2 : e <= 65535 ? 3 : 5
			}, function(e, n) {
				var r = n.length,
					a = 5 + 3 * r;
				e.offset = e.reserve(a);
				var o = e.buffer,
					i = m(r),
					u = e.offset + i;
				r = s.write.call(o, n, u);
				var c = m(r);
				if (i !== c) {
					var l = u + c - i,
						d = u + r;
					s.copy.call(o, o, l, u, d)
				}
				t[1 === c ? 160 + r : c <= 3 ? 215 + c : 219](e, r), e.offset += r
			}),
			symbol: b,
			undefined: b
		};
		var m;

		function y(e, n) {
			if (null === n) return b(e, n);
			if (g(n)) return v(e, n);
			if (r(n)) return function(e, n) {
				var r = n.length;
				t[r < 16 ? 144 + r : r <= 65535 ? 220 : 221](e, r);
				for (var a = e.codec.encode, o = 0; o < r; o++) a(e, n[o])
			}(e, n);
			if (o.isUint64BE(n)) return function(e, n) {
				t[207](e, n.toArray())
			}(e, n);
			if (i.isInt64BE(n)) return function(e, n) {
				t[211](e, n.toArray())
			}(e, n);
			var a = e.codec.getExtPacker(n);
			if (a && (n = a(n)), n instanceof d) return function(e, n) {
				var r = n.buffer,
					a = r.length,
					o = p[a] || (a < 255 ? 199 : a <= 65535 ? 200 : 201);
				t[o](e, a), l[n.type](e), e.send(r)
			}(e, n);
			_(e, n)
		}

		function b(e, n) {
			t[192](e, n)
		}

		function E(e, n) {
			var r = n.length;
			t[r < 255 ? 196 : r <= 65535 ? 197 : 198](e, r), e.send(n)
		}

		function O(e, n) {
			var r = Object.keys(n),
				a = r.length;
			t[a < 16 ? 128 + a : a <= 65535 ? 222 : 223](e, a);
			var o = e.codec.encode;
			r.forEach((function(t) {
				o(e, t), o(e, n[t])
			}))
		}
	}
}, function(e, t, n) {
	var r = n(19),
		a = n(22),
		o = a.Uint64BE,
		i = a.Int64BE,
		u = n(28).uint8,
		s = n(11),
		c = s.global,
		l = s.hasBuffer && "TYPED_ARRAY_SUPPORT" in c && !c.TYPED_ARRAY_SUPPORT,
		d = s.hasBuffer && c.prototype || {};

	function f() {
		var e = u.slice();
		return e[196] = h(196), e[197] = p(197), e[198] = g(198), e[199] = h(199), e[200] = p(200), e[201] = g(201), e[202] = v(202, 4, d.writeFloatBE || y, !0), e[203] = v(203, 8, d.writeDoubleBE || b, !0), e[204] = h(204), e[205] = p(205), e[206] = g(206), e[207] = v(207, 8, _), e[208] = h(208), e[209] = p(209), e[210] = g(210), e[211] = v(211, 8, m), e[217] = h(217), e[218] = p(218), e[219] = g(219), e[220] = p(220), e[221] = g(221), e[222] = p(222), e[223] = g(223), e
	}

	function h(e) {
		return function(t, n) {
			var r = t.reserve(2),
				a = t.buffer;
			a[r++] = e, a[r] = n
		}
	}

	function p(e) {
		return function(t, n) {
			var r = t.reserve(3),
				a = t.buffer;
			a[r++] = e, a[r++] = n >>> 8, a[r] = n
		}
	}

	function g(e) {
		return function(t, n) {
			var r = t.reserve(5),
				a = t.buffer;
			a[r++] = e, a[r++] = n >>> 24, a[r++] = n >>> 16, a[r++] = n >>> 8, a[r] = n
		}
	}

	function v(e, t, n, r) {
		return function(a, o) {
			var i = a.reserve(t + 1);
			a.buffer[i++] = e, n.call(a.buffer, o, i, r)
		}
	}

	function _(e, t) {
		new o(this, t, e)
	}

	function m(e, t) {
		new i(this, t, e)
	}

	function y(e, t) {
		r.write(this, e, t, !1, 23, 4)
	}

	function b(e, t) {
		r.write(this, e, t, !1, 52, 8)
	}
	t.getWriteToken = function(e) {
		return e && e.uint8array ? ((t = f())[202] = v(202, 4, y), t[203] = v(203, 8, b), t) : l || s.hasBuffer && e && e.safe ? function() {
			var e = u.slice();
			return e[196] = v(196, 1, c.prototype.writeUInt8), e[197] = v(197, 2, c.prototype.writeUInt16BE), e[198] = v(198, 4, c.prototype.writeUInt32BE), e[199] = v(199, 1, c.prototype.writeUInt8), e[200] = v(200, 2, c.prototype.writeUInt16BE), e[201] = v(201, 4, c.prototype.writeUInt32BE), e[202] = v(202, 4, c.prototype.writeFloatBE), e[203] = v(203, 8, c.prototype.writeDoubleBE), e[204] = v(204, 1, c.prototype.writeUInt8), e[205] = v(205, 2, c.prototype.writeUInt16BE), e[206] = v(206, 4, c.prototype.writeUInt32BE), e[207] = v(207, 8, _), e[208] = v(208, 1, c.prototype.writeInt8), e[209] = v(209, 2, c.prototype.writeInt16BE), e[210] = v(210, 4, c.prototype.writeInt32BE), e[211] = v(211, 8, m), e[217] = v(217, 1, c.prototype.writeUInt8), e[218] = v(218, 2, c.prototype.writeUInt16BE), e[219] = v(219, 4, c.prototype.writeUInt32BE), e[220] = v(220, 2, c.prototype.writeUInt16BE), e[221] = v(221, 4, c.prototype.writeUInt32BE), e[222] = v(222, 2, c.prototype.writeUInt16BE), e[223] = v(223, 4, c.prototype.writeUInt32BE), e
		}() : f();
		var t
	}
}, function(e, t, n) {
	t.setExtUnpackers = function(e) {
		e.addExtUnpacker(14, [u, c(Error)]), e.addExtUnpacker(1, [u, c(EvalError)]), e.addExtUnpacker(2, [u, c(RangeError)]), e.addExtUnpacker(3, [u, c(ReferenceError)]), e.addExtUnpacker(4, [u, c(SyntaxError)]), e.addExtUnpacker(5, [u, c(TypeError)]), e.addExtUnpacker(6, [u, c(URIError)]), e.addExtUnpacker(10, [u, s]), e.addExtUnpacker(11, [u, l(Boolean)]), e.addExtUnpacker(12, [u, l(String)]), e.addExtUnpacker(13, [u, l(Date)]), e.addExtUnpacker(15, [u, l(Number)]), "undefined" != typeof Uint8Array && (e.addExtUnpacker(17, l(Int8Array)), e.addExtUnpacker(18, l(Uint8Array)), e.addExtUnpacker(19, [d, l(Int16Array)]), e.addExtUnpacker(20, [d, l(Uint16Array)]), e.addExtUnpacker(21, [d, l(Int32Array)]), e.addExtUnpacker(22, [d, l(Uint32Array)]), e.addExtUnpacker(23, [d, l(Float32Array)]), "undefined" != typeof Float64Array && e.addExtUnpacker(24, [d, l(Float64Array)]), "undefined" != typeof Uint8ClampedArray && e.addExtUnpacker(25, l(Uint8ClampedArray)), e.addExtUnpacker(26, d), e.addExtUnpacker(29, [d, l(DataView)]));
		a.hasBuffer && e.addExtUnpacker(27, l(o))
	};
	var r, a = n(11),
		o = a.global,
		i = {
			name: 1,
			message: 1,
			stack: 1,
			columnNumber: 1,
			fileName: 1,
			lineNumber: 1
		};

	function u(e) {
		return r || (r = n(30).decode), r(e)
	}

	function s(e) {
		return RegExp.apply(null, e)
	}

	function c(e) {
		return function(t) {
			var n = new e;
			for (var r in i) n[r] = t[r];
			return n
		}
	}

	function l(e) {
		return function(t) {
			return new e(t)
		}
	}

	function d(e) {
		return new Uint8Array(e).buffer
	}
}, function(e, t, n) {
	var r = n(32);

	function a(e) {
		var t, n = new Array(256);
		for (t = 0; t <= 127; t++) n[t] = o(t);
		for (t = 128; t <= 143; t++) n[t] = u(t - 128, e.map);
		for (t = 144; t <= 159; t++) n[t] = u(t - 144, e.array);
		for (t = 160; t <= 191; t++) n[t] = u(t - 160, e.str);
		for (n[192] = o(null), n[193] = null, n[194] = o(!1), n[195] = o(!0), n[196] = i(e.uint8, e.bin), n[197] = i(e.uint16, e.bin), n[198] = i(e.uint32, e.bin), n[199] = i(e.uint8, e.ext), n[200] = i(e.uint16, e.ext), n[201] = i(e.uint32, e.ext), n[202] = e.float32, n[203] = e.float64, n[204] = e.uint8, n[205] = e.uint16, n[206] = e.uint32, n[207] = e.uint64, n[208] = e.int8, n[209] = e.int16, n[210] = e.int32, n[211] = e.int64, n[212] = u(1, e.ext), n[213] = u(2, e.ext), n[214] = u(4, e.ext), n[215] = u(8, e.ext), n[216] = u(16, e.ext), n[217] = i(e.uint8, e.str), n[218] = i(e.uint16, e.str), n[219] = i(e.uint32, e.str), n[220] = i(e.uint16, e.array), n[221] = i(e.uint32, e.array), n[222] = i(e.uint16, e.map), n[223] = i(e.uint32, e.map), t = 224; t <= 255; t++) n[t] = o(t - 256);
		return n
	}

	function o(e) {
		return function() {
			return e
		}
	}

	function i(e, t) {
		return function(n) {
			var r = e(n);
			return t(n, r)
		}
	}

	function u(e, t) {
		return function(n) {
			return t(n, e)
		}
	}
	t.getReadToken = function(e) {
		var t = r.getReadFormat(e);
		return e && e.useraw ? function(e) {
			var t, n = a(e).slice();
			for (n[217] = n[196], n[218] = n[197], n[219] = n[198], t = 160; t <= 191; t++) n[t] = u(t - 160, e.bin);
			return n
		}(t) : a(t)
	}
}, function(e, t, n) {
	t.Encoder = o;
	var r = n(33),
		a = n(25).EncodeBuffer;

	function o(e) {
		if (!(this instanceof o)) return new o(e);
		a.call(this, e)
	}
	o.prototype = new a, r.mixin(o.prototype), o.prototype.encode = function(e) {
		this.write(e), this.emit("data", this.read())
	}, o.prototype.end = function(e) {
		arguments.length && this.encode(e), this.flush(), this.emit("end")
	}
}, function(e, t, n) {
	t.Decoder = o;
	var r = n(33),
		a = n(31).DecodeBuffer;

	function o(e) {
		if (!(this instanceof o)) return new o(e);
		a.call(this, e)
	}
	o.prototype = new a, r.mixin(o.prototype), o.prototype.decode = function(e) {
		arguments.length && this.write(e), this.flush()
	}, o.prototype.push = function(e) {
		this.emit("data", e)
	}, o.prototype.end = function(e) {
		this.decode(e), this.emit("end")
	}
}, function(e, t, n) {
	n(23), n(17), t.createCodec = n(16).createCodec
}, function(e, t, n) {
	n(23), n(17), t.codec = {
		preset: n(16).preset
	}
}, function(e, t) {
	e.exports = function(e) {
		return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
			enumerable: !0,
			get: function() {
				return e.l
			}
		}), Object.defineProperty(e, "id", {
			enumerable: !0,
			get: function() {
				return e.i
			}
		}), e.webpackPolyfill = 1), e
	}
}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}]);
