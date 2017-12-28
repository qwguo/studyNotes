/*!
 * Less - Leaner CSS v1.7.3
 * http://lesscss.org
 *
 * Copyright (c) 2009-2014, Alexis Sellier <self@cloudhead.net>
 * Licensed under the Apache v2 License.
 *
 */

/** * @license Apache v2
 */

!
function(a, b) {
  function c(b) {
    return a.less[b.split("/")[1]]
  }
  function d(a, b) {
    "undefined" != typeof console && w.logLevel >= b && console.log("less: " + a)
  }
  function e(a) {
    return a.replace(/^[a-z-]+:\/+?[^\/]+/, "").replace(/^\//, "").replace(/\.[a-zA-Z]+$/, "").replace(/[^\.\w-]+/g, "-").replace(/\./g, ":")
  }
  function f(a, c) {
    var e = "{line} {content}",
    f = a.filename || c,
    g = [],
    h = (a.type || "Syntax") + "Error: " + (a.message || "There is an error in your .less file") + " in " + f + " ",
    i = function(a, c, d) {
      a.extract[c] !== b && g.push(e.replace(/\{line\}/, (parseInt(a.line, 10) || 0) + (c - 1)).replace(/\{class\}/, d).replace(/\{content\}/, a.extract[c]))
    };
    a.extract ? (i(a, 0, ""), i(a, 1, "line"), i(a, 2, ""), h += "on line " + a.line + ", column " + (a.column + 1) + ":\n" + g.join("\n")) : a.stack && (h += a.stack),
    d(h, z.errors)
  }
  function g(a, b, c) {
    var f = b.href || "",
    g = "less:" + (b.title || e(f)),
    h = document.getElementById(g),
    i = !1,
    j = document.createElement("style");
    j.setAttribute("type", "text/css"),
    b.media && j.setAttribute("media", b.media),
    j.id = g,
    j.styleSheet || (j.appendChild(document.createTextNode(a)), i = null !== h && h.childNodes.length > 0 && j.childNodes.length > 0 && h.firstChild.nodeValue === j.firstChild.nodeValue);
    var k = document.getElementsByTagName("head")[0];
    if (null === h || i === !1) {
      var l = b && b.nextSibling || null;
      l ? l.parentNode.insertBefore(j, l) : k.appendChild(j)
    }
    if (h && i === !1 && h.parentNode.removeChild(h), j.styleSheet) try {
      j.styleSheet.cssText = a
    } catch(m) {
      throw new Error("Couldn't reassign styleSheet.cssText.")
    }
    if (c && D) {
      d("saving " + f + " to cache.", z.info);
      try {
        D.setItem(f, a),
        D.setItem(f + ":timestamp", c)
      } catch(m) {
        d("failed to save", z.errors)
      }
    }
  }
  function h(a) {
    return w.postProcessor && "function" == typeof w.postProcessor && (a = w.postProcessor.call(a, a) || a),
    a
  }
  function i(a, c) {
    var d, f, h = "less-error-message:" + e(c || ""),
    i = '<li><label>{line}</label><pre class="{class}">{content}</pre></li>',
    j = document.createElement("div"),
    k = [],
    l = a.filename || c,
    m = l.match(/([^\/]+(\?.*)?)$/)[1];
    j.id = h,
    j.className = "less-error-message",
    f = "<h3>" + (a.type || "Syntax") + "Error: " + (a.message || "There is an error in your .less file") + '</h3><p>in <a href="' + l + '">' + m + "</a> ";
    var n = function(a, c, d) {
      a.extract[c] !== b && k.push(i.replace(/\{line\}/, (parseInt(a.line, 10) || 0) + (c - 1)).replace(/\{class\}/, d).replace(/\{content\}/, a.extract[c]))
    };
    a.extract ? (n(a, 0, ""), n(a, 1, "line"), n(a, 2, ""), f += "on line " + a.line + ", column " + (a.column + 1) + ":</p><ul>" + k.join("") + "</ul>") : a.stack && (f += "<br/>" + a.stack.split("\n").slice(1).join("<br/>")),
    j.innerHTML = f,
    g([".less-error-message ul, .less-error-message li {", "list-style-type: none;", "margin-right: 15px;", "padding: 4px 0;", "margin: 0;", "}", ".less-error-message label {", "font-size: 12px;", "margin-right: 15px;", "padding: 4px 0;", "color: #cc7777;", "}", ".less-error-message pre {", "color: #dd6666;", "padding: 4px 0;", "margin: 0;", "display: inline-block;", "}", ".less-error-message pre.line {", "color: #ff0000;", "}", ".less-error-message h3 {", "font-size: 20px;", "font-weight: bold;", "padding: 15px 0 5px 0;", "margin: 0;", "}", ".less-error-message a {", "color: #10a", "}", ".less-error-message .error {", "color: red;", "font-weight: bold;", "padding-bottom: 2px;", "border-bottom: 1px dashed red;", "}"].join("\n"), {
      title: "error-message"
    }),
    j.style.cssText = ["font-family: Arial, sans-serif", "border: 1px solid #e00", "background-color: #eee", "border-radius: 5px", "-webkit-border-radius: 5px", "-moz-border-radius: 5px", "color: #e00", "padding: 15px", "margin-bottom: 15px"].join(";"),
    "development" == w.env && (d = setInterval(function() {
      document.body && (document.getElementById(h) ? document.body.replaceChild(j, document.getElementById(h)) : document.body.insertBefore(j, document.body.firstChild), clearInterval(d))
    },
    10))
  }
  function j(a, b) {
    w.errorReporting && "html" !== w.errorReporting ? "console" === w.errorReporting ? f(a, b) : "function" == typeof w.errorReporting && w.errorReporting("add", a, b) : i(a, b)
  }
  function k(a) {
    var b = document.getElementById("less-error-message:" + e(a));
    b && b.parentNode.removeChild(b)
  }
  function l() {}
  function m(a) {
    w.errorReporting && "html" !== w.errorReporting ? "console" === w.errorReporting ? l(a) : "function" == typeof w.errorReporting && w.errorReporting("remove", a) : k(a)
  }
  function n(a) {
    for (var b, c = document.getElementsByTagName("style"), d = 0; d < c.length; d++) if (b = c[d], b.type.match(C)) {
      var e = new w.tree.parseEnv(w),
      f = b.innerHTML || "";
      e.filename = document.location.href.replace(/#.*$/, ""),
      (a || w.globalVars) && (e.useFileCache = !0);
      var g = function(a) {
        return function(b, c) {
          if (b) return j(b, "inline");
          var d = c.toCSS(w);
          a.type = "text/css",
          a.styleSheet ? a.styleSheet.cssText = d: a.innerHTML = d
        }
      } (b);
      new w.Parser(e).parse(f, g, {
        globalVars: w.globalVars,
        modifyVars: a
      })
    }
  }
  function o(a, b) {
    var c, d, e = /^((?:[a-z-]+:)?\/+?(?:[^\/\?#]*\/)|([\/\\]))?((?:[^\/\\\?#]*[\/\\])*)([^\/\\\?#]*)([#\?].*)?$/i,
    f = a.match(e),
    g = {},
    h = [];
    if (!f) throw new Error("Could not parse sheet href - '" + a + "'");
    if (!f[1] || f[2]) {
      if (d = b.match(e), !d) throw new Error("Could not parse page url - '" + b + "'");
      f[1] = f[1] || d[1] || "",
      f[2] || (f[3] = d[3] + f[3])
    }
    if (f[3]) {
      for (h = f[3].replace(/\\/g, "/").split("/"), c = 0; c < h.length; c++)"." === h[c] && (h.splice(c, 1), c -= 1);
      for (c = 0; c < h.length; c++)".." === h[c] && c > 0 && (h.splice(c - 1, 2), c -= 2)
    }
    return g.hostPart = f[1],
    g.directories = h,
    g.path = f[1] + h.join("/"),
    g.fileUrl = g.path + (f[4] || ""),
    g.url = g.fileUrl + (f[5] || ""),
    g
  }
  function p(a, b) {
    var c, d, e, f, g = o(a),
    h = o(b),
    i = "";
    if (g.hostPart !== h.hostPart) return "";
    for (d = Math.max(h.directories.length, g.directories.length), c = 0; d > c && h.directories[c] === g.directories[c]; c++);
    for (f = h.directories.slice(c), e = g.directories.slice(c), c = 0; c < f.length - 1; c++) i += "../";
    for (c = 0; c < e.length - 1; c++) i += e[c] + "/";
    return i
  }
  function q() {
    if (a.XMLHttpRequest && !("file:" === a.location.protocol && "ActiveXObject" in a)) return new XMLHttpRequest;
    try {
      return new ActiveXObject("Microsoft.XMLHTTP")
    } catch(b) {
      return d("browser doesn't support AJAX.", z.errors),
      null
    }
  }
  function r(a, b, c, e) {
    function f(b, c, d) {
      b.status >= 200 && b.status < 300 ? c(b.responseText, b.getResponseHeader("Last-Modified")) : "function" == typeof d && d(b.status, a)
    }
    var g = q(),
    h = y ? w.fileAsync: w.async;
    "function" == typeof g.overrideMimeType && g.overrideMimeType("text/css"),
    d("XHR: Getting '" + a + "'", z.debug),
    g.open("GET", a, h),
    g.setRequestHeader("Accept", b || "text/x-less, text/css; q=0.9, */*; q=0.5"),
    g.send(null),
    y && !w.fileAsync ? 0 === g.status || g.status >= 200 && g.status < 300 ? c(g.responseText) : e(g.status, a) : h ? g.onreadystatechange = function() {
      4 == g.readyState && f(g, c, e)
    }: f(g, c, e)
  }
  function s(b, c, d, e) {
    c && c.currentDirectory && !/^([a-z-]+:)?\//.test(b) && (b = c.currentDirectory + b);
    var f = o(b, a.location.href),
    g = f.url,
    h = {
      currentDirectory: f.path,
      filename: g
    };
    if (c ? (h.entryPath = c.entryPath, h.rootpath = c.rootpath, h.rootFilename = c.rootFilename, h.relativeUrls = c.relativeUrls) : (h.entryPath = f.path, h.rootpath = w.rootpath || f.path, h.rootFilename = g, h.relativeUrls = e.relativeUrls), h.relativeUrls && (h.rootpath = e.rootpath ? o(e.rootpath + p(f.path, h.entryPath)).path: f.path), e.useFileCache && E[g]) try {
      var i = E[g];
      d(null, i, g, h, {
        lastModified: new Date
      })
    } catch(j) {
      d(j, null, g)
    } else r(g, e.mime,
    function(a, b) {
      E[g] = a;
      try {
        d(null, a, g, h, {
          lastModified: b
        })
      } catch(c) {
        d(c, null, g)
      }
    },
    function(a, b) {
      d({
        type: "File",
        message: "'" + b + "' wasn't found (" + a + ")"
      },
      null, g)
    })
  }
  function t(a, b, c, d, e) {
    var f = new w.tree.parseEnv(w);
    f.mime = a.type,
    (e || w.globalVars) && (f.useFileCache = !0),
    s(a.href, null,
    function(h, i, j, k, l) {
      if (l) {
        l.remaining = d;
        var n = D && D.getItem(j),
        o = D && D.getItem(j + ":timestamp");
        if (!c && o && l.lastModified && new Date(l.lastModified).valueOf() === new Date(o).valueOf()) return g(n, a),
        l.local = !0,
        void b(null, null, i, a, l, j)
      }
      m(j),
      i ? (f.currentFileInfo = k, new w.Parser(f).parse(i,
      function(c, d) {
        if (c) return b(c, null, null, a);
        try {
          b(c, d, i, a, l, j)
        } catch(c) {
          b(c, null, null, a)
        }
      },
      {
        modifyVars: e,
        globalVars: w.globalVars
      })) : b(h, null, null, a, l, j)
    },
    f, e)
  }
  function u(a, b, c) {
    for (var d = 0; d < w.sheets.length; d++) t(w.sheets[d], a, b, w.sheets.length - (d + 1), c)
  }
  function v() {
    "development" === w.env ? (w.optimization = 0, w.watchTimer = setInterval(function() {
      w.watchMode && u(function(a, b, c, d, e) {
        if (a) j(a, d.href);
        else if (b) {
          var f = b.toCSS(w);
          f = h(f),
          g(f, d, e.lastModified)
        }
      })
    },
    w.poll)) : w.optimization = 3
  } ("undefined" == typeof a.less || "undefined" != typeof a.less.nodeType) && (a.less = {}),
  w = a.less,
  x = a.less.tree = {},
  w.mode = "browser";
  var w, x;
  w === b && (w = exports, x = c("./tree"), w.mode = "node"),
  w.Parser = function(a) {
    function d() {
      D = y,
      G.push({
        current: C,
        i: y,
        j: z
      })
    }
    function e() {
      var a = G.pop();
      C = a.current,
      D = y = a.i,
      z = a.j
    }
    function f() {
      G.pop()
    }
    function g() {
      y > D && (C = C.slice(y - D), D = y)
    }
    function h(a, b) {
      var c = a.charCodeAt(0 | b);
      return 32 >= c && (32 === c || 10 === c || 9 === c)
    }
    function i(a) {
      var b, c, d = typeof a;
      return "string" === d ? v.charAt(y) !== a ? null: (l(1), a) : (g(), (b = a.exec(C)) ? (c = b[0].length, l(c), "string" == typeof b ? b: 1 === b.length ? b[0] : b) : null)
    }
    function j(a) {
      y > D && (C = C.slice(y - D), D = y);
      var b = a.exec(C);
      return b ? (l(b[0].length), "string" == typeof b ? b: 1 === b.length ? b[0] : b) : null
    }
    function k(a) {
      return v.charAt(y) !== a ? null: (l(1), a)
    }
    function l(a) {
      for (var b, c = y,
      d = z,
      e = y - D,
      f = y + C.length - e,
      g = y += a,
      h = v; f > y && (b = h.charCodeAt(y), !(b > 32)) && (32 === b || 10 === b || 9 === b || 13 === b); y++);
      return C = C.slice(a + y - g + e),
      D = y,
      !C.length && z < B.length - 1 ? (C = B[++z], l(0), !0) : c !== y || d !== z
    }
    function m(a, b) {
      var c = "[object Function]" === Object.prototype.toString.call(a) ? a.call(F) : i(a);
      return c ? c: void o(b || ("string" == typeof a ? "expected '" + a + "' got '" + v.charAt(y) + "'": "unexpected token"))
    }
    function n(a, b) {
      return v.charAt(y) === a ? (l(1), a) : void o(b || "expected '" + a + "' got '" + v.charAt(y) + "'")
    }
    function o(a, b) {
      var c = new Error(a);
      throw c.index = y,
      c.type = b || "Syntax",
      c
    }
    function p(a) {
      return "string" == typeof a ? v.charAt(y) === a: a.test(C)
    }
    function q(a) {
      return v.charAt(y) === a
    }
    function r(a, b) {
      return a.filename && b.currentFileInfo.filename && a.filename !== b.currentFileInfo.filename ? E.imports.contents[a.filename] : v
    }
    function s(a, b) {
      for (var c = a + 1,
      d = null,
      e = -1; --c >= 0 && "\n" !== b.charAt(c);) e++;
      return "number" == typeof a && (d = (b.slice(0, a).match(/\n/g) || "").length),
      {
        line: d,
        column: e
      }
    }
    function t(a, b, d) {
      var e = d.currentFileInfo.filename;
      return "browser" !== w.mode && "rhino" !== w.mode && (e = c("path").resolve(e)),
      {
        lineNumber: s(a, b).line + 1,
        fileName: e
      }
    }
    function u(a, b) {
      var c = r(a, b),
      d = s(a.index, c),
      e = d.line,
      f = d.column,
      g = a.call && s(a.call, c).line,
      h = c.split("\n");
      this.type = a.type || "Syntax",
      this.message = a.message,
      this.filename = a.filename || b.currentFileInfo.filename,
      this.index = a.index,
      this.line = "number" == typeof e ? e + 1 : null,
      this.callLine = g + 1,
      this.callExtract = h[g],
      this.stack = a.stack,
      this.column = f,
      this.extract = [h[e - 1], h[e], h[e + 1]]
    }
    var v, y, z, A, B, C, D, E, F, G = [],
    H = a && a.filename;
    a instanceof x.parseEnv || (a = new x.parseEnv(a));
    var I = this.imports = {
      paths: a.paths || [],
      queue: [],
      files: a.files,
      contents: a.contents,
      contentsIgnoredChars: a.contentsIgnoredChars,
      mime: a.mime,
      error: null,
      push: function(b, c, d, e) {
        var f = this;
        this.queue.push(b);
        var g = function(a, c, d) {
          f.queue.splice(f.queue.indexOf(b), 1);
          var g = d === H;
          f.files[d] = c,
          a && !f.error && (f.error = a),
          e(a, c, g, d)
        };
        w.Parser.importer ? w.Parser.importer(b, c, g, a) : w.Parser.fileLoader(b, c,
        function(b, e, f, h) {
          if (b) return void g(b);
          var i = new x.parseEnv(a);
          i.currentFileInfo = h,
          i.processImports = !1,
          i.contents[f] = e,
          (c.reference || d.reference) && (h.reference = !0),
          d.inline ? g(null, e, f) : new w.Parser(i).parse(e,
          function(a, b) {
            g(a, b, f)
          })
        },
        a)
      }
    },
    J = j;
    return u.prototype = new Error,
    u.prototype.constructor = u,
    this.env = a = a || {},
    this.optimization = "optimization" in this.env ? this.env.optimization: 1,
    E = {
      imports: I,
      parse: function(d, e, f) {
        var g, h, i, j, k, l = null,
        m = "";
        if (y = z = D = A = 0, j = f && f.globalVars ? w.Parser.serializeVars(f.globalVars) + "\n": "", k = f && f.modifyVars ? "\n" + w.Parser.serializeVars(f.modifyVars) : "", (j || f && f.banner) && (m = (f && f.banner ? f.banner: "") + j, E.imports.contentsIgnoredChars[a.currentFileInfo.filename] = m.length), d = d.replace(/\r\n/g, "\n"), v = d = m + d.replace(/^\uFEFF/, "") + k, E.imports.contents[a.currentFileInfo.filename] = d, B = function(b) {
          function c(b, c) {
            l = new u({
              index: c || i,
              type: "Parse",
              message: b,
              filename: a.currentFileInfo.filename
            },
            a)
          }
          function d(a) {
            var c = i - s;
            512 > c && !a || !c || (r.push(b.slice(s, i + 1)), s = i + 1)
          }
          var e, f, g, h, i, j, k, m, n, o = b.length,
          p = 0,
          q = 0,
          r = [],
          s = 0;
          for (i = 0; o > i; i++) if (k = b.charCodeAt(i), !(k >= 97 && 122 >= k || 34 > k)) switch (k) {
          case 40:
            q++,
            f = i;
            continue;
          case 41:
            if (--q < 0) return c("missing opening `(`");
            continue;
          case 59:
            q || d();
            continue;
          case 123:
            p++,
            e = i;
            continue;
          case 125:
            if (--p < 0) return c("missing opening `{`");
            p || q || d();
            continue;
          case 92:
            if (o - 1 > i) {
              i++;
              continue
            }
            return c("unescaped `\\`");
          case 34:
          case 39:
          case 96:
            for (n = 0, j = i, i += 1; o > i; i++) if (m = b.charCodeAt(i), !(m > 96)) {
              if (m == k) {
                n = 1;
                break
              }
              if (92 == m) {
                if (i == o - 1) return c("unescaped `\\`");
                i++
              }
            }
            if (n) continue;
            return c("unmatched `" + String.fromCharCode(k) + "`", j);
          case 47:
            if (q || i == o - 1) continue;
            if (m = b.charCodeAt(i + 1), 47 == m) for (i += 2; o > i && (m = b.charCodeAt(i), !(13 >= m) || 10 != m && 13 != m); i++);
            else if (42 == m) {
              for (g = j = i, i += 2; o - 1 > i && (m = b.charCodeAt(i), 125 == m && (h = i), 42 != m || 47 != b.charCodeAt(i + 1)); i++);
              if (i == o - 1) return c("missing closing `*/`", j);
              i++
            }
            continue;
          case 42:
            if (o - 1 > i && 47 == b.charCodeAt(i + 1)) return c("unmatched `/*`");
            continue
          }
          return 0 !== p ? g > e && h > g ? c("missing closing `}` or `*/`", e) : c("missing closing `}`", e) : 0 !== q ? c("missing closing `)`", f) : (d(!0), r)
        } (d), l) return e(new u(l, a));
        C = B[0];
        try {
          g = new x.Ruleset(null, this.parsers.primary()),
          g.root = !0,
          g.firstRoot = !0
        } catch(n) {
          return e(new u(n, a))
        }
        if (g.toCSS = function(d) {
          return function(e, f) {
            e = e || {};
            var g, h, i = new x.evalEnv(e);
            "object" != typeof f || Array.isArray(f) || (f = Object.keys(f).map(function(a) {
              var b = f[a];
              return b instanceof x.Value || (b instanceof x.Expression || (b = new x.Expression([b])), b = new x.Value([b])),
              new x.Rule("@" + a, b, !1, null, 0)
            }), i.frames = [new x.Ruleset(null, f)]);
            try {
              var j, k = [],
              l = [new x.joinSelectorVisitor, new x.processExtendsVisitor, new x.toCSSVisitor({
                compress: Boolean(e.compress)
              })],
              m = this;
              if (e.plugins) for (j = 0; j < e.plugins.length; j++) e.plugins[j].isPreEvalVisitor ? k.push(e.plugins[j]) : e.plugins[j].isPreVisitor ? l.splice(0, 0, e.plugins[j]) : l.push(e.plugins[j]);
              for (j = 0; j < k.length; j++) k[j].run(m);
              for (g = d.call(m, i), j = 0; j < l.length; j++) l[j].run(g);
              e.sourceMap && (g = new x.sourceMapOutput({
                contentsIgnoredCharsMap: E.imports.contentsIgnoredChars,
                writeSourceMap: e.writeSourceMap,
                rootNode: g,
                contentsMap: E.imports.contents,
                sourceMapFilename: e.sourceMapFilename,
                sourceMapURL: e.sourceMapURL,
                outputFilename: e.sourceMapOutputFilename,
                sourceMapBasepath: e.sourceMapBasepath,
                sourceMapRootpath: e.sourceMapRootpath,
                outputSourceFiles: e.outputSourceFiles,
                sourceMapGenerator: e.sourceMapGenerator
              })),
              h = g.toCSS({
                compress: Boolean(e.compress),
                dumpLineNumbers: a.dumpLineNumbers,
                strictUnits: Boolean(e.strictUnits),
                numPrecision: 8
              })
            } catch(n) {
              throw new u(n, a)
            }
            if (e.cleancss && "node" === w.mode) {
              var o = c("clean-css"),
              p = e.cleancssOptions || {};
              return p.keepSpecialComments === b && (p.keepSpecialComments = "*"),
              p.processImport = !1,
              p.noRebase = !0,
              p.noAdvanced === b && (p.noAdvanced = !0),
              new o(p).minify(h)
            }
            return e.compress ? h.replace(/(^(\s)+)|((\s)+$)/g, "") : h
          }
        } (g.eval), y < v.length - 1) {
          y = A;
          var o = s(y, v);
          i = v.split("\n"),
          h = o.line + 1,
          l = {
            type: "Parse",
            message: "Unrecognised input",
            index: y,
            filename: a.currentFileInfo.filename,
            line: h,
            column: o.column,
            extract: [i[h - 2], i[h - 1], i[h]]
          }
        }
        var p = function(b) {
          return b = l || b || E.imports.error,
          b ? (b instanceof u || (b = new u(b, a)), e(b)) : e(null, g)
        };
        return a.processImports === !1 ? p() : void new x.importVisitor(this.imports, p).run(g)
      },
      parsers: F = {
        primary: function() {
          for (var a, b = this.mixin,
          c = J,
          d = []; C;) {
            if (a = this.extendRule() || b.definition() || this.rule() || this.ruleset() || b.call() || this.comment() || this.rulesetCall() || this.directive()) d.push(a);
            else if (!c(/^[\s\n]+/) && !c(/^;+/)) break;
            if (q("}")) break
          }
          return d
        },
        comment: function() {
          var b;
          if ("/" === v.charAt(y)) return "/" === v.charAt(y + 1) ? new x.Comment(j(/^\/\/.*/), !0, y, a.currentFileInfo) : (b = j(/^\/\*(?:[^*]|\*+[^\/*])*\*+\/\n?/), b ? new x.Comment(b, !1, y, a.currentFileInfo) : void 0)
        },
        comments: function() {
          for (var a, b = [];;) {
            if (a = this.comment(), !a) break;
            b.push(a)
          }
          return b
        },
        entities: {
          quoted: function() {
            var b, c, d = y,
            e = y;
            return "~" === v.charAt(d) && (d++, c = !0),
            '"' === v.charAt(d) || "'" === v.charAt(d) ? (c && k("~"), b = j(/^"((?:[^"\\\r\n]|\\.)*)"|'((?:[^'\\\r\n]|\\.)*)'/), b ? new x.Quoted(b[0], b[1] || b[2], c, e, a.currentFileInfo) : void 0) : void 0
          },
          keyword: function() {
            var a;
            if (a = j(/^%|^[_A-Za-z-][_A-Za-z0-9-]*/)) {
              var b = x.Color.fromKeyword(a);
              return b ? b: new x.Keyword(a)
            }
          },
          call: function() {
            var b, c, d, e, f = y;
            if (b = /^([\w-]+|%|progid:[\w\.]+)\(/.exec(C)) {
              if (b = b[1], c = b.toLowerCase(), "url" === c) return null;
              if (y += b.length, "alpha" === c && (e = F.alpha(), "undefined" != typeof e)) return e;
              if (k("("), d = this.arguments(), k(")")) return b ? new x.Call(b, d, f, a.currentFileInfo) : void 0
            }
          },
          arguments: function() {
            for (var a, b = [];;) {
              if (a = this.assignment() || F.expression(), !a) break;
              if (b.push(a), !k(",")) break
            }
            return b
          },
          literal: function() {
            return this.dimension() || this.color() || this.quoted() || this.unicodeDescriptor()
          },
          assignment: function() {
            var a, b;
            return a = j(/^\w+(?=\s?=)/i),
            a && k("=") ? (b = F.entity(), b ? new x.Assignment(a, b) : void 0) : void 0
          },
          url: function() {
            var b;
            if ("u" === v.charAt(y) && j(/^url\(/)) return b = this.quoted() || this.variable() || j(/^(?:(?:\\[\(\)'"])|[^\(\)'"])+/) || "",
            n(")"),
            new x.URL(null != b.value || b instanceof x.Variable ? b: new x.Anonymous(b), a.currentFileInfo)
          },
          variable: function() {
            var b, c = y;
            return "@" === v.charAt(y) && (b = j(/^@@?[\w-]+/)) ? new x.Variable(b, c, a.currentFileInfo) : void 0
          },
          variableCurly: function() {
            var b, c = y;
            return "@" === v.charAt(y) && (b = j(/^@\{([\w-]+)\}/)) ? new x.Variable("@" + b[1], c, a.currentFileInfo) : void 0
          },
          color: function() {
            var a;
            if ("#" === v.charAt(y) && (a = j(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/))) {
              var b = a.input.match(/^#([\w]+).*/);
              return b = b[1],
              b.match(/^[A-Fa-f0-9]+$/) || o("Invalid HEX color code"),
              new x.Color(a[1])
            }
          },
          dimension: function() {
            var a, b = v.charCodeAt(y);
            if (! (b > 57 || 43 > b || 47 === b || 44 == b)) return a = j(/^([+-]?\d*\.?\d+)(%|[a-z]+)?/),
            a ? new x.Dimension(a[1], a[2]) : void 0
          },
          unicodeDescriptor: function() {
            var a;
            return a = j(/^U\+[0-9a-fA-F?]+(\-[0-9a-fA-F?]+)?/),
            a ? new x.UnicodeDescriptor(a[0]) : void 0
          },
          javascript: function() {
            var c, d, e = y;
            return "~" === v.charAt(e) && (e++, d = !0),
            "`" === v.charAt(e) ? (a.javascriptEnabled === b || a.javascriptEnabled || o("You are using JavaScript, which has been disabled."), d && k("~"), c = j(/^`([^`]*)`/), c ? new x.JavaScript(c[1], y, d) : void 0) : void 0
          }
        },
        variable: function() {
          var a;
          return "@" === v.charAt(y) && (a = j(/^(@[\w-]+)\s*:/)) ? a[1] : void 0
        },
        rulesetCall: function() {
          var a;
          return "@" === v.charAt(y) && (a = j(/^(@[\w-]+)\s*\(\s*\)\s*;/)) ? new x.RulesetCall(a[1]) : void 0
        },
        extend: function(a) {
          var b, c, d, e, f, g = y;
          if (j(a ? /^&:extend\(/: /^:extend\(/)) {
            do {
              for (d = null, b = null; ! (d = j(/^(all)(?=\s*(\)|,))/)) && (c = this.element());) b ? b.push(c) : b = [c];
              d = d && d[1], f = new x.Extend(new x.Selector(b), d, g), e ? e.push(f) : e = [f]
            } while ( k (","));
            return m(/^\)/),
            a && m(/^;/),
            e
          }
        },
        extendRule: function() {
          return this.extend(!0)
        },
        mixin: {
          call: function() {
            var b, c, g, h, i, l, m = v.charAt(y),
            o = !1,
            p = y;
            if ("." === m || "#" === m) {
              for (d();;) {
                if (b = y, h = j(/^[#.](?:[\w-]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+/), !h) break;
                g = new x.Element(i, h, b, a.currentFileInfo),
                c ? c.push(g) : c = [g],
                i = k(">")
              }
              return c && (k("(") && (l = this.args(!0).args, n(")")), F.important() && (o = !0), F.end()) ? (f(), new x.mixin.Call(c, l, p, a.currentFileInfo, o)) : void e()
            }
          },
          args: function(a) {
            var b, c, g, h, i, l, m = E.parsers,
            n = m.entities,
            p = {
              args: null,
              variadic: !1
            },
            q = [],
            r = [],
            s = [];
            for (d();;) {
              if (a) l = m.detachedRuleset() || m.expression();
              else {
                if (m.comments(), "." === v.charAt(y) && j(/^\.{3}/)) {
                  p.variadic = !0,
                  k(";") && !b && (b = !0),
                  (b ? r: s).push({
                    variadic: !0
                  });
                  break
                }
                l = n.variable() || n.literal() || n.keyword()
              }
              if (!l) break;
              h = null,
              l.throwAwayComments && l.throwAwayComments(),
              i = l;
              var t = null;
              if (a ? l.value && 1 == l.value.length && (t = l.value[0]) : t = l, t && t instanceof x.Variable) if (k(":")) {
                if (q.length > 0 && (b && o("Cannot mix ; and , as delimiter types"), c = !0), i = a && m.detachedRuleset() || m.expression(), !i) {
                  if (!a) return e(),
                  p.args = [],
                  p;
                  o("could not understand value for named argument")
                }
                h = g = t.name
              } else {
                if (!a && j(/^\.{3}/)) {
                  p.variadic = !0,
                  k(";") && !b && (b = !0),
                  (b ? r: s).push({
                    name: l.name,
                    variadic: !0
                  });
                  break
                }
                a || (g = h = t.name, i = null)
              }
              i && q.push(i),
              s.push({
                name: h,
                value: i
              }),
              k(",") || (k(";") || b) && (c && o("Cannot mix ; and , as delimiter types"), b = !0, q.length > 1 && (i = new x.Value(q)), r.push({
                name: g,
                value: i
              }), g = null, q = [], c = !1)
            }
            return f(),
            p.args = b ? r: s,
            p
          },
          definition: function() {
            var a, b, c, g, h = [],
            i = !1;
            if (! ("." !== v.charAt(y) && "#" !== v.charAt(y) || p(/^[^{]*\}/))) if (d(), b = j(/^([#.](?:[\w-]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+)\s*\(/)) {
              a = b[1];
              var l = this.args(!1);
              if (h = l.args, i = l.variadic, !k(")")) return A = y,
              void e();
              if (F.comments(), j(/^when/) && (g = m(F.conditions, "expected condition")), c = F.block()) return f(),
              new x.mixin.Definition(a, h, c, g, i);
              e()
            } else f()
          }
        },
        entity: function() {
          var a = this.entities;
          return a.literal() || a.variable() || a.url() || a.call() || a.keyword() || a.javascript() || this.comment()
        },
        end: function() {
          return k(";") || q("}")
        },
        alpha: function() {
          var a;
          if (j(/^\(opacity=/i)) return a = j(/^\d+/) || this.entities.variable(),
          a ? (n(")"), new x.Alpha(a)) : void 0
        },
        element: function() {
          var b, c, g, h = y;
          return c = this.combinator(),
          b = j(/^(?:\d+\.\d+|\d+)%/) || j(/^(?:[.#]?|:*)(?:[\w-]|[^\x00-\x9f]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+/) || k("*") || k("&") || this.attribute() || j(/^\([^()@]+\)/) || j(/^[\.#](?=@)/) || this.entities.variableCurly(),
          b || (d(), k("(") ? (g = this.selector()) && k(")") ? (b = new x.Paren(g), f()) : e() : f()),
          b ? new x.Element(c, b, h, a.currentFileInfo) : void 0
        },
        combinator: function() {
          var a = v.charAt(y);
          if (">" === a || "+" === a || "~" === a || "|" === a || "^" === a) {
            for (y++, "^" === v.charAt(y) && (a = "^^", y++); h(v, y);) y++;
            return new x.Combinator(a)
          }
          return new x.Combinator(h(v, y - 1) ? " ": null)
        },
        lessSelector: function() {
          return this.selector(!0)
        },
        selector: function(b) {
          for (var c, d, e, f, g, h, i, j = y,
          k = J; (b && (g = this.extend()) || b && (h = k(/^when/)) || (f = this.element())) && (h ? i = m(this.conditions, "expected condition") : i ? o("CSS guard can only be used at the end of selector") : g ? d ? d.push(g) : d = [g] : (d && o("Extend can only be used at the end of selector"), e = v.charAt(y), c ? c.push(f) : c = [f], f = null), "{" !== e && "}" !== e && ";" !== e && "," !== e && ")" !== e););
          return c ? new x.Selector(c, d, i, j, a.currentFileInfo) : void(d && o("Extend must be used to extend a selector, it cannot be used on its own"))
        },
        attribute: function() {
          if (k("[")) {
            var a, b, c, d = this.entities;
            return (a = d.variableCurly()) || (a = m(/^(?:[_A-Za-z0-9-\*]*\|)?(?:[_A-Za-z0-9-]|\\.)+/)),
            c = j(/^[|~*$^]?=/),
            c && (b = d.quoted() || j(/^[0-9]+%/) || j(/^[\w-]+/) || d.variableCurly()),
            n("]"),
            new x.Attribute(a, c, b)
          }
        },
        block: function() {
          var a;
          return k("{") && (a = this.primary()) && k("}") ? a: void 0
        },
        blockRuleset: function() {
          var a = this.block();
          return a && (a = new x.Ruleset(null, a)),
          a
        },
        detachedRuleset: function() {
          var a = this.blockRuleset();
          return a ? new x.DetachedRuleset(a) : void 0
        },
        ruleset: function() {
          var b, c, g, h;
          for (d(), a.dumpLineNumbers && (h = t(y, v, a));;) {
            if (c = this.lessSelector(), !c) break;
            if (b ? b.push(c) : b = [c], this.comments(), c.condition && b.length > 1 && o("Guards are only currently allowed on a single selector."), !k(",")) break;
            c.condition && o("Guards are only currently allowed on a single selector."),
            this.comments()
          }
          if (b && (g = this.block())) {
            f();
            var i = new x.Ruleset(b, g, a.strictImports);
            return a.dumpLineNumbers && (i.debugInfo = h),
            i
          }
          A = y,
          e()
        },
        rule: function(b) {
          var c, g, h, i, j, k = y,
          l = v.charAt(k);
          if ("." !== l && "#" !== l && "&" !== l) if (d(), c = this.variable() || this.ruleProperty()) {
            if (j = "string" == typeof c, j && (g = this.detachedRuleset()), g || (g = b || !a.compress && !j ? this.anonymousValue() || this.value() : this.value() || this.anonymousValue(), h = this.important(), i = !j && c.pop().value), g && this.end()) return f(),
            new x.Rule(c, g, h, i, k, a.currentFileInfo);
            if (A = y, e(), g && !b) return this.rule(!0)
          } else f()
        },
        anonymousValue: function() {
          var a;
          return a = /^([^@+\/'"*`(;{}-]*);/.exec(C),
          a ? (y += a[0].length - 1, new x.Anonymous(a[1])) : void 0
        },
        "import": function() {
          var b, c, g = y;
          d();
          var h = j(/^@import?\s+/),
          i = (h ? this.importOptions() : null) || {};
          return h && (b = this.entities.quoted() || this.entities.url()) && (c = this.mediaFeatures(), k(";")) ? (f(), c = c && new x.Value(c), new x.Import(b, c, i, g, a.currentFileInfo)) : void e()
        },
        importOptions: function() {
          var a, b, c, d = {};
          if (!k("(")) return null;
          do
          if (a = this.importOption()) {
            switch (b = a, c = !0, b) {
            case "css":
              b = "less",
              c = !1;
              break;
            case "once":
              b = "multiple",
              c = !1
            }
            if (d[b] = c, !k(",")) break
          }
          while (a);
          return n(")"),
          d
        },
        importOption: function() {
          var a = j(/^(less|css|multiple|once|inline|reference)/);
          return a ? a[1] : void 0
        },
        mediaFeature: function() {
          var b, c, d = this.entities,
          e = [];
          do
          if (b = d.keyword() || d.variable()) e.push(b);
          else if (k("(")) {
            if (c = this.property(), b = this.value(), !k(")")) return null;
            if (c && b) e.push(new x.Paren(new x.Rule(c, b, null, null, y, a.currentFileInfo, !0)));
            else {
              if (!b) return null;
              e.push(new x.Paren(b))
            }
          }
          while (b);
          return e.length > 0 ? new x.Expression(e) : void 0
        },
        mediaFeatures: function() {
          var a, b = this.entities,
          c = [];
          do
          if (a = this.mediaFeature()) {
            if (c.push(a), !k(",")) break
          } else if (a = b.variable(), a && (c.push(a), !k(","))) break;
          while (a);
          return c.length > 0 ? c: null
        },
        media: function() {
          var b, c, d, e;
          return a.dumpLineNumbers && (e = t(y, v, a)),
          j(/^@media/) && (b = this.mediaFeatures(), c = this.block()) ? (d = new x.Media(c, b, y, a.currentFileInfo), a.dumpLineNumbers && (d.debugInfo = e), d) : void 0
        },
        directive: function() {
          var b, c, g, h, i, l, m, n = y,
          p = !0;
          if ("@" === v.charAt(y)) {
            if (c = this["import"]() || this.media()) return c;
            if (d(), b = j(/^@[a-z-]+/)) {
              switch (h = b, "-" == b.charAt(1) && b.indexOf("-", 2) > 0 && (h = "@" + b.slice(b.indexOf("-", 2) + 1)), h) {
              case "@charset":
                i = !0,
                p = !1;
                break;
              case "@namespace":
                l = !0,
                p = !1;
                break;
              case "@keyframes":
                i = !0;
                break;
              case "@host":
              case "@page":
              case "@document":
              case "@supports":
                m = !0
              }
              return i ? (c = this.entity(), c || o("expected " + b + " identifier")) : l ? (c = this.expression(), c || o("expected " + b + " expression")) : m && (c = (j(/^[^{;]+/) || "").trim(), c && (c = new x.Anonymous(c))),
              p && (g = this.blockRuleset()),
              g || !p && c && k(";") ? (f(), new x.Directive(b, c, g, n, a.currentFileInfo, a.dumpLineNumbers ? t(n, v, a) : null)) : void e()
            }
          }
        },
        value: function() {
          var a, b = [];
          do
          if (a = this.expression(), a && (b.push(a), !k(","))) break;
          while (a);
          return b.length > 0 ? new x.Value(b) : void 0
        },
        important: function() {
          return "!" === v.charAt(y) ? j(/^! *important/) : void 0
        },
        sub: function() {
          var a, b;
          return k("(") && (a = this.addition()) ? (b = new x.Expression([a]), n(")"), b.parens = !0, b) : void 0
        },
        multiplication: function() {
          var a, b, c, g, i;
          if (a = this.operand()) {
            for (i = h(v, y - 1);;) {
              if (p(/^\/[*\/]/)) break;
              if (d(), c = k("/") || k("*"), !c) {
                f();
                break
              }
              if (b = this.operand(), !b) {
                e();
                break
              }
              f(),
              a.parensInOp = !0,
              b.parensInOp = !0,
              g = new x.Operation(c, [g || a, b], i),
              i = h(v, y - 1)
            }
            return g || a
          }
        },
        addition: function() {
          var a, b, c, d, e;
          if (a = this.multiplication()) {
            for (e = h(v, y - 1);;) {
              if (c = j(/^[-+]\s+/) || !e && (k("+") || k("-")), !c) break;
              if (b = this.multiplication(), !b) break;
              a.parensInOp = !0,
              b.parensInOp = !0,
              d = new x.Operation(c, [d || a, b], e),
              e = h(v, y - 1)
            }
            return d || a
          }
        },
        conditions: function() {
          var a, b, c, d = y;
          if (a = this.condition()) {
            for (;;) {
              if (!p(/^,\s*(not\s*)?\(/) || !k(",")) break;
              if (b = this.condition(), !b) break;
              c = new x.Condition("or", c || a, b, d)
            }
            return c || a
          }
        },
        condition: function() {
          var a, b, c, d, e = this.entities,
          f = y,
          g = !1;
          return j(/^not/) && (g = !0),
          n("("),
          a = this.addition() || e.keyword() || e.quoted(),
          a ? (d = j(/^(?:>=|<=|=<|[<=>])/), d ? (b = this.addition() || e.keyword() || e.quoted(), b ? c = new x.Condition(d, a, b, f, g) : o("expected expression")) : c = new x.Condition("=", a, new x.Keyword("true"), f, g), n(")"), j(/^and/) ? new x.Condition("and", c, this.condition()) : c) : void 0
        },
        operand: function() {
          var a, b = this.entities,
          c = v.charAt(y + 1);
          "-" !== v.charAt(y) || "@" !== c && "(" !== c || (a = k("-"));
          var d = this.sub() || b.dimension() || b.color() || b.variable() || b.call();
          return a && (d.parensInOp = !0, d = new x.Negative(d)),
          d
        },
        expression: function() {
          var a, b, c = [];
          do a = this.addition() || this.entity(),
          a && (c.push(a), p(/^\/[\/*]/) || (b = k("/"), b && c.push(new x.Anonymous(b))));
          while (a);
          return c.length > 0 ? new x.Expression(c) : void 0
        },
        property: function() {
          var a = j(/^(\*?-?[_a-zA-Z0-9-]+)\s*:/);
          return a ? a[1] : void 0
        },
        ruleProperty: function() {
          function b(a) {
            var b = a.exec(e);
            return b ? (g.push(y + h), h += b[0].length, e = e.slice(b[1].length), f.push(b[1])) : void 0
          }
          var c, d, e = C,
          f = [],
          g = [],
          h = 0;
          for (b(/^(\*?)/); b(/^((?:[\w-]+)|(?:@\{[\w-]+\}))/););
          if (f.length > 1 && b(/^\s*((?:\+_|\+)?)\s*:/)) {
            for (l(h), "" === f[0] && (f.shift(), g.shift()), d = 0; d < f.length; d++) c = f[d],
            f[d] = "@" !== c.charAt(0) ? new x.Keyword(c) : new x.Variable("@" + c.slice(2, -1), g[d], a.currentFileInfo);
            return f
          }
        }
      }
    }
  },
  w.Parser.serializeVars = function(a) {
    var b = "";
    for (var c in a) if (Object.hasOwnProperty.call(a, c)) {
      var d = a[c];
      b += ("@" === c[0] ? "": "@") + c + ": " + d + (";" === ("" + d).slice( - 1) ? "": ";")
    }
    return b
  },
  function(d) {
    function e(a, b, c) {
      if (! (c instanceof d.Dimension)) throw {
        type: "Argument",
        message: "argument must be a number"
      };
      return null == b ? b = c.unit: c = c.unify(),
      new d.Dimension(a(parseFloat(c.value)), b)
    }
    function f(a, b, c) {
      var e, f, g, h, i = b.alpha,
      j = c.alpha,
      k = [];
      g = j + i * (1 - j);
      for (var l = 0; 3 > l; l++) e = b.rgb[l] / 255,
      f = c.rgb[l] / 255,
      h = a(e, f),
      g && (h = (j * f + i * (e - j * (e + f - h))) / g),
      k[l] = 255 * h;
      return new d.Color(k, g)
    }
    function g() {
      var a, b = d.functions;
      for (a in l) l.hasOwnProperty(a) && (b[a] = e.bind(null, Math[a], l[a]));
      for (a in m) m.hasOwnProperty(a) && (b[a] = f.bind(null, m[a]));
      a = d.defaultFunc,
      b["default"] = a.eval.bind(a)
    }
    function h(a) {
      return d.functions.hsla(a.h, a.s, a.l, a.a)
    }
    function i(a, b) {
      return a instanceof d.Dimension && a.unit.is("%") ? parseFloat(a.value * b / 100) : j(a)
    }
    function j(a) {
      if (a instanceof d.Dimension) return parseFloat(a.unit.is("%") ? a.value / 100 : a.value);
      if ("number" == typeof a) return a;
      throw {
        error: "RuntimeError",
        message: "color functions take numbers as parameters"
      }
    }
    function k(a) {
      return Math.min(1, Math.max(0, a))
    }
    d.functions = {
      rgb: function(a, b, c) {
        return this.rgba(a, b, c, 1)
      },
      rgba: function(a, b, c, e) {
        var f = [a, b, c].map(function(a) {
          return i(a, 255)
        });
        return e = j(e),
        new d.Color(f, e)
      },
      hsl: function(a, b, c) {
        return this.hsla(a, b, c, 1)
      },
      hsla: function(a, b, c, d) {
        function e(a) {
          return a = 0 > a ? a + 1 : a > 1 ? a - 1 : a,
          1 > 6 * a ? g + (f - g) * a * 6 : 1 > 2 * a ? f: 2 > 3 * a ? g + (f - g) * (2 / 3 - a) * 6 : g
        }
        a = j(a) % 360 / 360,
        b = k(j(b)),
        c = k(j(c)),
        d = k(j(d));
        var f = .5 >= c ? c * (b + 1) : c + b - c * b,
        g = 2 * c - f;
        return this.rgba(255 * e(a + 1 / 3), 255 * e(a), 255 * e(a - 1 / 3), d)
      },
      hsv: function(a, b, c) {
        return this.hsva(a, b, c, 1)
      },
      hsva: function(a, b, c, d) {
        a = j(a) % 360 / 360 * 360,
        b = j(b),
        c = j(c),
        d = j(d);
        var e, f;
        e = Math.floor(a / 60 % 6),
        f = a / 60 - e;
        var g = [c, c * (1 - b), c * (1 - f * b), c * (1 - (1 - f) * b)],
        h = [[0, 3, 1], [2, 0, 1], [1, 0, 3], [1, 2, 0], [3, 1, 0], [0, 1, 2]];
        return this.rgba(255 * g[h[e][0]], 255 * g[h[e][1]], 255 * g[h[e][2]], d)
      },
      hue: function(a) {
        return new d.Dimension(a.toHSL().h)
      },
      saturation: function(a) {
        return new d.Dimension(100 * a.toHSL().s, "%")
      },
      lightness: function(a) {
        return new d.Dimension(100 * a.toHSL().l, "%")
      },
      hsvhue: function(a) {
        return new d.Dimension(a.toHSV().h)
      },
      hsvsaturation: function(a) {
        return new d.Dimension(100 * a.toHSV().s, "%")
      },
      hsvvalue: function(a) {
        return new d.Dimension(100 * a.toHSV().v, "%")
      },
      red: function(a) {
        return new d.Dimension(a.rgb[0])
      },
      green: function(a) {
        return new d.Dimension(a.rgb[1])
      },
      blue: function(a) {
        return new d.Dimension(a.rgb[2])
      },
      alpha: function(a) {
        return new d.Dimension(a.toHSL().a)
      },
      luma: function(a) {
        return new d.Dimension(a.luma() * a.alpha * 100, "%")
      },
      luminance: function(a) {
        var b = .2126 * a.rgb[0] / 255 + .7152 * a.rgb[1] / 255 + .0722 * a.rgb[2] / 255;
        return new d.Dimension(b * a.alpha * 100, "%")
      },
      saturate: function(a, b) {
        if (!a.rgb) return null;
        var c = a.toHSL();
        return c.s += b.value / 100,
        c.s = k(c.s),
        h(c)
      },
      desaturate: function(a, b) {
        var c = a.toHSL();
        return c.s -= b.value / 100,
        c.s = k(c.s),
        h(c)
      },
      lighten: function(a, b) {
        var c = a.toHSL();
        return c.l += b.value / 100,
        c.l = k(c.l),
        h(c)
      },
      darken: function(a, b) {
        var c = a.toHSL();
        return c.l -= b.value / 100,
        c.l = k(c.l),
        h(c)
      },
      fadein: function(a, b) {
        var c = a.toHSL();
        return c.a += b.value / 100,
        c.a = k(c.a),
        h(c)
      },
      fadeout: function(a, b) {
        var c = a.toHSL();
        return c.a -= b.value / 100,
        c.a = k(c.a),
        h(c)
      },
      fade: function(a, b) {
        var c = a.toHSL();
        return c.a = b.value / 100,
        c.a = k(c.a),
        h(c)
      },
      spin: function(a, b) {
        var c = a.toHSL(),
        d = (c.h + b.value) % 360;
        return c.h = 0 > d ? 360 + d: d,
        h(c)
      },
      mix: function(a, b, c) {
        c || (c = new d.Dimension(50));
        var e = c.value / 100,
        f = 2 * e - 1,
        g = a.toHSL().a - b.toHSL().a,
        h = ((f * g == -1 ? f: (f + g) / (1 + f * g)) + 1) / 2,
        i = 1 - h,
        j = [a.rgb[0] * h + b.rgb[0] * i, a.rgb[1] * h + b.rgb[1] * i, a.rgb[2] * h + b.rgb[2] * i],
        k = a.alpha * e + b.alpha * (1 - e);
        return new d.Color(j, k)
      },
      greyscale: function(a) {
        return this.desaturate(a, new d.Dimension(100))
      },
      contrast: function(a, b, c, d) {
        if (!a.rgb) return null;
        if ("undefined" == typeof c && (c = this.rgba(255, 255, 255, 1)), "undefined" == typeof b && (b = this.rgba(0, 0, 0, 1)), b.luma() > c.luma()) {
          var e = c;
          c = b,
          b = e
        }
        return d = "undefined" == typeof d ? .43 : j(d),
        a.luma() < d ? c: b
      },
      e: function(a) {
        return new d.Anonymous(a instanceof d.JavaScript ? a.evaluated: a.value)
      },
      escape: function(a) {
        return new d.Anonymous(encodeURI(a.value).replace(/=/g, "%3D").replace(/:/g, "%3A").replace(/#/g, "%23").replace(/;/g, "%3B").replace(/\(/g, "%28").replace(/\)/g, "%29"))
      },
      replace: function(a, b, c, e) {
        var f = a.value;
        return f = f.replace(new RegExp(b.value, e ? e.value: ""), c.value),
        new d.Quoted(a.quote || "", f, a.escaped)
      },
      "%": function(a) {
        for (var b = Array.prototype.slice.call(arguments, 1), c = a.value, e = 0; e < b.length; e++) c = c.replace(/%[sda]/i,
        function(a) {
          var c = a.match(/s/i) ? b[e].value: b[e].toCSS();
          return a.match(/[A-Z]$/) ? encodeURIComponent(c) : c
        });
        return c = c.replace(/%%/g, "%"),
        new d.Quoted(a.quote || "", c, a.escaped)
      },
      unit: function(a, b) {
        if (! (a instanceof d.Dimension)) throw {
          type: "Argument",
          message: "the first argument to unit must be a number" + (a instanceof d.Operation ? ". Have you forgotten parenthesis?": "")
        };
        return b = b ? b instanceof d.Keyword ? b.value: b.toCSS() : "",
        new d.Dimension(a.value, b)
      },
      convert: function(a, b) {
        return a.convertTo(b.value)
      },
      round: function(a, b) {
        var c = "undefined" == typeof b ? 0 : b.value;
        return e(function(a) {
          return a.toFixed(c)
        },
        null, a)
      },
      pi: function() {
        return new d.Dimension(Math.PI)
      },
      mod: function(a, b) {
        return new d.Dimension(a.value % b.value, a.unit)
      },
      pow: function(a, b) {
        if ("number" == typeof a && "number" == typeof b) a = new d.Dimension(a),
        b = new d.Dimension(b);
        else if (! (a instanceof d.Dimension && b instanceof d.Dimension)) throw {
          type: "Argument",
          message: "arguments must be numbers"
        };
        return new d.Dimension(Math.pow(a.value, b.value), a.unit)
      },
      _minmax: function(a, c) {
        switch (c = Array.prototype.slice.call(c), c.length) {
        case 0:
          throw {
            type:
            "Argument",
            message: "one or more arguments required"
          }
        }
        var e, f, g, h, i, j, k, l, m = [],
        n = {};
        for (e = 0; e < c.length; e++) if (g = c[e], g instanceof d.Dimension) if (h = "" === g.unit.toString() && l !== b ? new d.Dimension(g.value, l).unify() : g.unify(), j = "" === h.unit.toString() && k !== b ? k: h.unit.toString(), k = "" !== j && k === b || "" !== j && "" === m[0].unify().unit.toString() ? j: k, l = "" !== j && l === b ? g.unit.toString() : l, f = n[""] !== b && "" !== j && j === k ? n[""] : n[j], f !== b) i = "" === m[f].unit.toString() && l !== b ? new d.Dimension(m[f].value, l).unify() : m[f].unify(),
        (a && h.value < i.value || !a && h.value > i.value) && (m[f] = g);
        else {
          if (k !== b && j !== k) throw {
            type: "Argument",
            message: "incompatible types"
          };
          n[j] = m.length,
          m.push(g)
        } else Array.isArray(c[e].value) && Array.prototype.push.apply(c, Array.prototype.slice.call(c[e].value));
        return 1 == m.length ? m[0] : (c = m.map(function(a) {
          return a.toCSS(this.env)
        }).join(this.env.compress ? ",": ", "), new d.Anonymous((a ? "min": "max") + "(" + c + ")"))
      },
      min: function() {
        return this._minmax(!0, arguments)
      },
      max: function() {
        return this._minmax(!1, arguments)
      },
      "get-unit": function(a) {
        return new d.Anonymous(a.unit)
      },
      argb: function(a) {
        return new d.Anonymous(a.toARGB())
      },
      percentage: function(a) {
        return new d.Dimension(100 * a.value, "%")
      },
      color: function(a) {
        if (a instanceof d.Quoted) {
          var b, c = a.value;
          if (b = d.Color.fromKeyword(c)) return b;
          if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/.test(c)) return new d.Color(c.slice(1));
          throw {
            type: "Argument",
            message: "argument must be a color keyword or 3/6 digit hex e.g. #FFF"
          }
        }
        throw {
          type: "Argument",
          message: "argument must be a string"
        }
      },
      iscolor: function(a) {
        return this._isa(a, d.Color)
      },
      isnumber: function(a) {
        return this._isa(a, d.Dimension)
      },
      isstring: function(a) {
        return this._isa(a, d.Quoted)
      },
      iskeyword: function(a) {
        return this._isa(a, d.Keyword)
      },
      isurl: function(a) {
        return this._isa(a, d.URL)
      },
      ispixel: function(a) {
        return this.isunit(a, "px")
      },
      ispercentage: function(a) {
        return this.isunit(a, "%")
      },
      isem: function(a) {
        return this.isunit(a, "em")
      },
      isunit: function(a, b) {
        return a instanceof d.Dimension && a.unit.is(b.value || b) ? d.True: d.False
      },
      _isa: function(a, b) {
        return a instanceof b ? d.True: d.False
      },
      tint: function(a, b) {
        return this.mix(this.rgb(255, 255, 255), a, b)
      },
      shade: function(a, b) {
        return this.mix(this.rgb(0, 0, 0), a, b)
      },
      extract: function(a, b) {
        return b = b.value - 1,
        Array.isArray(a.value) ? a.value[b] : Array(a)[b]
      },
      length: function(a) {
        var b = Array.isArray(a.value) ? a.value.length: 1;
        return new d.Dimension(b)
      },
      "data-uri": function(b, e) {
        if ("undefined" != typeof a) return new d.URL(e || b, this.currentFileInfo).eval(this.env);
        var f = b.value,
        g = e && e.value,
        h = c("./fs"),
        i = c("path"),
        j = !1;
        if (arguments.length < 2 && (g = f), this.env.isPathRelative(g) && (g = this.currentFileInfo.relativeUrls ? i.join(this.currentFileInfo.currentDirectory, g) : i.join(this.currentFileInfo.entryPath, g)), arguments.length < 2) {
          var k;
          try {
            k = c("mime")
          } catch(l) {
            k = d._mime
          }
          f = k.lookup(g);
          var m = k.charsets.lookup(f);
          j = ["US-ASCII", "UTF-8"].indexOf(m) < 0,
          j && (f += ";base64")
        } else j = /;base64$/.test(f);
        var n = h.readFileSync(g),
        o = 32,
        p = parseInt(n.length / 1024, 10);
        if (p >= o && this.env.ieCompat !== !1) return this.env.silent || console.warn("Skipped data-uri embedding of %s because its size (%dKB) exceeds IE8-safe %dKB!", g, p, o),
        new d.URL(e || b, this.currentFileInfo).eval(this.env);
        n = j ? n.toString("base64") : encodeURIComponent(n);
        var q = '"data:' + f + "," + n + '"';
        return new d.URL(new d.Anonymous(q))
      },
      "svg-gradient": function(a) {
        function e() {
          throw {
            type: "Argument",
            message: "svg-gradient expects direction, start_color [start_position], [color position,]..., end_color [end_position]"
          }
        }
        arguments.length < 3 && e();
        var f, g, h, i, j, k, l, m = Array.prototype.slice.call(arguments, 1),
        n = "linear",
        o = 'x="0" y="0" width="1" height="1"',
        p = !0,
        q = {
          compress: !1
        },
        r = a.toCSS(q);
        switch (r) {
        case "to bottom":
          f = 'x1="0%" y1="0%" x2="0%" y2="100%"';
          break;
        case "to right":
          f = 'x1="0%" y1="0%" x2="100%" y2="0%"';
          break;
        case "to bottom right":
          f = 'x1="0%" y1="0%" x2="100%" y2="100%"';
          break;
        case "to top right":
          f = 'x1="0%" y1="100%" x2="100%" y2="0%"';
          break;
        case "ellipse":
        case "ellipse at center":
          n = "radial",
          f = 'cx="50%" cy="50%" r="75%"',
          o = 'x="-50" y="-50" width="101" height="101"';
          break;
        default:
          throw {
            type:
            "Argument",
            message: "svg-gradient direction must be 'to bottom', 'to right', 'to bottom right', 'to top right' or 'ellipse at center'"
          }
        }
        for (g = '<?xml version="1.0" ?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" viewBox="0 0 1 1" preserveAspectRatio="none"><' + n + 'Gradient id="gradient" gradientUnits="userSpaceOnUse" ' + f + ">", h = 0; h < m.length; h += 1) m[h].value ? (i = m[h].value[0], j = m[h].value[1]) : (i = m[h], j = b),
        i instanceof d.Color && ((0 === h || h + 1 === m.length) && j === b || j instanceof d.Dimension) || e(),
        k = j ? j.toCSS(q) : 0 === h ? "0%": "100%",
        l = i.alpha,
        g += '<stop offset="' + k + '" stop-color="' + i.toRGB() + '"' + (1 > l ? ' stop-opacity="' + l + '"': "") + "/>";
        if (g += "</" + n + "Gradient><rect " + o + ' fill="url(#gradient)" /></svg>', p) try {
          g = c("./encoder").encodeBase64(g)
        } catch(s) {
          p = !1
        }
        return g = "'data:image/svg+xml" + (p ? ";base64": "") + "," + g + "'",
        new d.URL(new d.Anonymous(g))
      }
    },
    d._mime = {
      _types: {
        ".htm": "text/html",
        ".html": "text/html",
        ".gif": "image/gif",
        ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg",
        ".png": "image/png"
      },
      lookup: function(a) {
        var e = c("path").extname(a),
        f = d._mime._types[e];
        if (f === b) throw new Error('Optional dependency "mime" is required for ' + e);
        return f
      },
      charsets: {
        lookup: function(a) {
          return a && /^text\//.test(a) ? "UTF-8": ""
        }
      }
    };
    var l = {
      ceil: null,
      floor: null,
      sqrt: null,
      abs: null,
      tan: "",
      sin: "",
      cos: "",
      atan: "rad",
      asin: "rad",
      acos: "rad"
    },
    m = {
      multiply: function(a, b) {
        return a * b
      },
      screen: function(a, b) {
        return a + b - a * b
      },
      overlay: function(a, b) {
        return a *= 2,
        1 >= a ? m.multiply(a, b) : m.screen(a - 1, b)
      },
      softlight: function(a, b) {
        var c = 1,
        d = a;
        return b > .5 && (d = 1, c = a > .25 ? Math.sqrt(a) : ((16 * a - 12) * a + 4) * a),
        a - (1 - 2 * b) * d * (c - a)
      },
      hardlight: function(a, b) {
        return m.overlay(b, a)
      },
      difference: function(a, b) {
        return Math.abs(a - b)
      },
      exclusion: function(a, b) {
        return a + b - 2 * a * b
      },
      average: function(a, b) {
        return (a + b) / 2
      },
      negation: function(a, b) {
        return 1 - Math.abs(a + b - 1)
      }
    };
    d.defaultFunc = {
      eval: function() {
        var a = this.value_,
        b = this.error_;
        if (b) throw b;
        return null != a ? a ? d.True: d.False: void 0
      },
      value: function(a) {
        this.value_ = a
      },
      error: function(a) {
        this.error_ = a
      },
      reset: function() {
        this.value_ = this.error_ = null
      }
    },
    g(),
    d.fround = function(a, b) {
      var c = a && a.numPrecision;
      return null == c ? b: Number((b + 2e-16).toFixed(c))
    },
    d.functionCall = function(a, b) {
      this.env = a,
      this.currentFileInfo = b
    },
    d.functionCall.prototype = d.functions
  } (c("./tree")),
  function(a) {
    a.colors = {
      aliceblue: "#f0f8ff",
      antiquewhite: "#faebd7",
      aqua: "#00ffff",
      aquamarine: "#7fffd4",
      azure: "#f0ffff",
      beige: "#f5f5dc",
      bisque: "#ffe4c4",
      black: "#000000",
      blanchedalmond: "#ffebcd",
      blue: "#0000ff",
      blueviolet: "#8a2be2",
      brown: "#a52a2a",
      burlywood: "#deb887",
      cadetblue: "#5f9ea0",
      chartreuse: "#7fff00",
      chocolate: "#d2691e",
      coral: "#ff7f50",
      cornflowerblue: "#6495ed",
      cornsilk: "#fff8dc",
      crimson: "#dc143c",
      cyan: "#00ffff",
      darkblue: "#00008b",
      darkcyan: "#008b8b",
      darkgoldenrod: "#b8860b",
      darkgray: "#a9a9a9",
      darkgrey: "#a9a9a9",
      darkgreen: "#006400",
      darkkhaki: "#bdb76b",
      darkmagenta: "#8b008b",
      darkolivegreen: "#556b2f",
      darkorange: "#ff8c00",
      darkorchid: "#9932cc",
      darkred: "#8b0000",
      darksalmon: "#e9967a",
      darkseagreen: "#8fbc8f",
      darkslateblue: "#483d8b",
      darkslategray: "#2f4f4f",
      darkslategrey: "#2f4f4f",
      darkturquoise: "#00ced1",
      darkviolet: "#9400d3",
      deeppink: "#ff1493",
      deepskyblue: "#00bfff",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1e90ff",
      firebrick: "#b22222",
      floralwhite: "#fffaf0",
      forestgreen: "#228b22",
      fuchsia: "#ff00ff",
      gainsboro: "#dcdcdc",
      ghostwhite: "#f8f8ff",
      gold: "#ffd700",
      goldenrod: "#daa520",
      gray: "#808080",
      grey: "#808080",
      green: "#008000",
      greenyellow: "#adff2f",
      honeydew: "#f0fff0",
      hotpink: "#ff69b4",
      indianred: "#cd5c5c",
      indigo: "#4b0082",
      ivory: "#fffff0",
      khaki: "#f0e68c",
      lavender: "#e6e6fa",
      lavenderblush: "#fff0f5",
      lawngreen: "#7cfc00",
      lemonchiffon: "#fffacd",
      lightblue: "#add8e6",
      lightcoral: "#f08080",
      lightcyan: "#e0ffff",
      lightgoldenrodyellow: "#fafad2",
      lightgray: "#d3d3d3",
      lightgrey: "#d3d3d3",
      lightgreen: "#90ee90",
      lightpink: "#ffb6c1",
      lightsalmon: "#ffa07a",
      lightseagreen: "#20b2aa",
      lightskyblue: "#87cefa",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#b0c4de",
      lightyellow: "#ffffe0",
      lime: "#00ff00",
      limegreen: "#32cd32",
      linen: "#faf0e6",
      magenta: "#ff00ff",
      maroon: "#800000",
      mediumaquamarine: "#66cdaa",
      mediumblue: "#0000cd",
      mediumorchid: "#ba55d3",
      mediumpurple: "#9370d8",
      mediumseagreen: "#3cb371",
      mediumslateblue: "#7b68ee",
      mediumspringgreen: "#00fa9a",
      mediumturquoise: "#48d1cc",
      mediumvioletred: "#c71585",
      midnightblue: "#191970",
      mintcream: "#f5fffa",
      mistyrose: "#ffe4e1",
      moccasin: "#ffe4b5",
      navajowhite: "#ffdead",
      navy: "#000080",
      oldlace: "#fdf5e6",
      olive: "#808000",
      olivedrab: "#6b8e23",
      orange: "#ffa500",
      orangered: "#ff4500",
      orchid: "#da70d6",
      palegoldenrod: "#eee8aa",
      palegreen: "#98fb98",
      paleturquoise: "#afeeee",
      palevioletred: "#d87093",
      papayawhip: "#ffefd5",
      peachpuff: "#ffdab9",
      peru: "#cd853f",
      pink: "#ffc0cb",
      plum: "#dda0dd",
      powderblue: "#b0e0e6",
      purple: "#800080",
      red: "#ff0000",
      rosybrown: "#bc8f8f",
      royalblue: "#4169e1",
      saddlebrown: "#8b4513",
      salmon: "#fa8072",
      sandybrown: "#f4a460",
      seagreen: "#2e8b57",
      seashell: "#fff5ee",
      sienna: "#a0522d",
      silver: "#c0c0c0",
      skyblue: "#87ceeb",
      slateblue: "#6a5acd",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#fffafa",
      springgreen: "#00ff7f",
      steelblue: "#4682b4",
      tan: "#d2b48c",
      teal: "#008080",
      thistle: "#d8bfd8",
      tomato: "#ff6347",
      turquoise: "#40e0d0",
      violet: "#ee82ee",
      wheat: "#f5deb3",
      white: "#ffffff",
      whitesmoke: "#f5f5f5",
      yellow: "#ffff00",
      yellowgreen: "#9acd32"
    }
  } (c("./tree")),
  function(a) {
    a.debugInfo = function(b, c, d) {
      var e = "";
      if (b.dumpLineNumbers && !b.compress) switch (b.dumpLineNumbers) {
      case "comments":
        e = a.debugInfo.asComment(c);
        break;
      case "mediaquery":
        e = a.debugInfo.asMediaQuery(c);
        break;
      case "all":
        e = a.debugInfo.asComment(c) + (d || "") + a.debugInfo.asMediaQuery(c)
      }
      return e
    },
    a.debugInfo.asComment = function(a) {
      return "/* line " + a.debugInfo.lineNumber + ", " + a.debugInfo.fileName + " */\n"
    },
    a.debugInfo.asMediaQuery = function(a) {
      return "@media -sass-debug-info{filename{font-family:" + ("file://" + a.debugInfo.fileName).replace(/([.:\/\\])/g,
      function(a) {
        return "\\" == a && (a = "/"),
        "\\" + a
      }) + "}line{font-family:\\00003" + a.debugInfo.lineNumber + "}}\n"
    },
    a.find = function(a, b) {
      for (var c, d = 0; d < a.length; d++) if (c = b.call(a, a[d])) return c;
      return null
    },
    a.jsify = function(a) {
      return Array.isArray(a.value) && a.value.length > 1 ? "[" + a.value.map(function(a) {
        return a.toCSS()
      }).join(", ") + "]": a.toCSS()
    },
    a.toCSS = function(a) {
      var b = [];
      return this.genCSS(a, {
        add: function(a) {
          b.push(a)
        },
        isEmpty: function() {
          return 0 === b.length
        }
      }),
      b.join("")
    },
    a.outputRuleset = function(a, b, c) {
      var d, e = c.length;
      if (a.tabLevel = (0 | a.tabLevel) + 1, a.compress) {
        for (b.add("{"), d = 0; e > d; d++) c[d].genCSS(a, b);
        return b.add("}"),
        void a.tabLevel--
      }
      var f = "\n" + Array(a.tabLevel).join("  "),
      g = f + "  ";
      if (e) {
        for (b.add(" {" + g), c[0].genCSS(a, b), d = 1; e > d; d++) b.add(g),
        c[d].genCSS(a, b);
        b.add(f + "}")
      } else b.add(" {" + f + "}");
      a.tabLevel--
    }
  } (c("./tree")),
  function(a) {
    a.Alpha = function(a) {
      this.value = a
    },
    a.Alpha.prototype = {
      type: "Alpha",
      accept: function(a) {
        this.value = a.visit(this.value)
      },
      eval: function(b) {
        return this.value.eval ? new a.Alpha(this.value.eval(b)) : this
      },
      genCSS: function(a, b) {
        b.add("alpha(opacity="),
        this.value.genCSS ? this.value.genCSS(a, b) : b.add(this.value),
        b.add(")")
      },
      toCSS: a.toCSS
    }
  } (c("../tree")),
  function(a) {
    a.Anonymous = function(a, b, c, d) {
      this.value = a,
      this.index = b,
      this.mapLines = d,
      this.currentFileInfo = c
    },
    a.Anonymous.prototype = {
      type: "Anonymous",
      eval: function() {
        return new a.Anonymous(this.value, this.index, this.currentFileInfo, this.mapLines)
      },
      compare: function(a) {
        if (!a.toCSS) return - 1;
        var b = this.toCSS(),
        c = a.toCSS();
        return b === c ? 0 : c > b ? -1 : 1
      },
      genCSS: function(a, b) {
        b.add(this.value, this.currentFileInfo, this.index, this.mapLines)
      },
      toCSS: a.toCSS
    }
  } (c("../tree")),
  function(a) {
    a.Assignment = function(a, b) {
      this.key = a,
      this.value = b
    },
    a.Assignment.prototype = {
      type: "Assignment",
      accept: function(a) {
        this.value = a.visit(this.value)
      },
      eval: function(b) {
        return this.value.eval ? new a.Assignment(this.key, this.value.eval(b)) : this
      },
      genCSS: function(a, b) {
        b.add(this.key + "="),
        this.value.genCSS ? this.value.genCSS(a, b) : b.add(this.value)
      },
      toCSS: a.toCSS
    }
  } (c("../tree")),
  function(a) {
    a.Call = function(a, b, c, d) {
      this.name = a,
      this.args = b,
      this.index = c,
      this.currentFileInfo = d
    },
    a.Call.prototype = {
      type: "Call",
      accept: function(a) {
        this.args && (this.args = a.visitArray(this.args))
      },
      eval: function(b) {
        var c, d, e = this.args.map(function(a) {
          return a.eval(b)
        }),
        f = this.name.toLowerCase();
        if (f in a.functions) try {
          if (d = new a.functionCall(b, this.currentFileInfo), c = d[f].apply(d, e), null != c) return c
        } catch(g) {
          throw {
            type: g.type || "Runtime",
            message: "error evaluating function `" + this.name + "`" + (g.message ? ": " + g.message: ""),
            index: this.index,
            filename: this.currentFileInfo.filename
          }
        }
        return new a.Call(this.name, e, this.index, this.currentFileInfo)
      },
      genCSS: function(a, b) {
        b.add(this.name + "(", this.currentFileInfo, this.index);
        for (var c = 0; c < this.args.length; c++) this.args[c].genCSS(a, b),
        c + 1 < this.args.length && b.add(", ");
        b.add(")")
      },
      toCSS: a.toCSS
    }
  } (c("../tree")),
  function(a) {
    function b(a) {
      return "#" + a.map(function(a) {
        return a = c(Math.round(a), 255),
        (16 > a ? "0": "") + a.toString(16)
      }).join("")
    }
    function c(a, b) {
      return Math.min(Math.max(a, 0), b)
    }
    a.Color = function(a, b) {
      this.rgb = Array.isArray(a) ? a: 6 == a.length ? a.match(/.{2}/g).map(function(a) {
        return parseInt(a, 16)
      }) : a.split("").map(function(a) {
        return parseInt(a + a, 16)
      }),
      this.alpha = "number" == typeof b ? b: 1
    };
    var d = "transparent";
    a.Color.prototype = {
      type: "Color",
      eval: function() {
        return this
      },
      luma: function() {
        var a = this.rgb[0] / 255,
        b = this.rgb[1] / 255,
        c = this.rgb[2] / 255;
        return a = .03928 >= a ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4),
        b = .03928 >= b ? b / 12.92 : Math.pow((b + .055) / 1.055, 2.4),
        c = .03928 >= c ? c / 12.92 : Math.pow((c + .055) / 1.055, 2.4),
        .2126 * a + .7152 * b + .0722 * c
      },
      genCSS: function(a, b) {
        b.add(this.toCSS(a))
      },
      toCSS: function(b, e) {
        var f = b && b.compress && !e,
        g = a.fround(b, this.alpha);
        if (1 > g) return 0 === g && this.isTransparentKeyword ? d: "rgba(" + this.rgb.map(function(a) {
          return c(Math.round(a), 255)
        }).concat(c(g, 1)).join("," + (f ? "": " ")) + ")";
        var h = this.toRGB();
        if (f) {
          var i = h.split("");
          i[1] === i[2] && i[3] === i[4] && i[5] === i[6] && (h = "#" + i[1] + i[3] + i[5])
        }
        return h
      },
      operate: function(b, c, d) {
        for (var e = [], f = this.alpha * (1 - d.alpha) + d.alpha, g = 0; 3 > g; g++) e[g] = a.operate(b, c, this.rgb[g], d.rgb[g]);
        return new a.Color(e, f)
      },
      toRGB: function() {
        return b(this.rgb)
      },
      toHSL: function() {
        var a, b, c = this.rgb[0] / 255,
        d = this.rgb[1] / 255,
        e = this.rgb[2] / 255,
        f = this.alpha,
        g = Math.max(c, d, e),
        h = Math.min(c, d, e),
        i = (g + h) / 2,
        j = g - h;
        if (g === h) a = b = 0;
        else {
          switch (b = i > .5 ? j / (2 - g - h) : j / (g + h), g) {
          case c:
            a = (d - e) / j + (e > d ? 6 : 0);
            break;
          case d:
            a = (e - c) / j + 2;
            break;
          case e:
            a = (c - d) / j + 4
          }
          a /= 6
        }
        return {
          h: 360 * a,
          s: b,
          l: i,
          a: f
        }
      },
      toHSV: function() {
        var a, b, c = this.rgb[0] / 255,
        d = this.rgb[1] / 255,
        e = this.rgb[2] / 255,
        f = this.alpha,
        g = Math.max(c, d, e),
        h = Math.min(c, d, e),
        i = g,
        j = g - h;
        if (b = 0 === g ? 0 : j / g, g === h) a = 0;
        else {
          switch (g) {
          case c:
            a = (d - e) / j + (e > d ? 6 : 0);
            break;
          case d:
            a = (e - c) / j + 2;
            break;
          case e:
            a = (c - d) / j + 4
          }
          a /= 6
        }
        return {
          h: 360 * a,
          s: b,
          v: i,
          a: f
        }
      },
      toARGB: function() {
        return b([255 * this.alpha].concat(this.rgb))
      },
      compare: function(a) {
        return a.rgb && a.rgb[0] === this.rgb[0] && a.rgb[1] === this.rgb[1] && a.rgb[2] === this.rgb[2] && a.alpha === this.alpha ? 0 : -1
      }
    },
    a.Color.fromKeyword = function(b) {
      if (b = b.toLowerCase(), a.colors.hasOwnProperty(b)) return new a.Color(a.colors[b].slice(1));
      if (b === d) {
        var c = new a.Color([0, 0, 0], 0);
        return c.isTransparentKeyword = !0,
        c
      }
    }
  } (c("../tree")),
  function(a) {
    a.Comment = function(a, b, c, d) {
      this.value = a,
      this.silent = !!b,
      this.currentFileInfo = d
    },
    a.Comment.prototype = {
      type: "Comment",
      genCSS: function(b, c) {
        this.debugInfo && c.add(a.debugInfo(b, this), this.currentFileInfo, this.index),
        c.add(this.value.trim())
      },
      toCSS: a.toCSS,
      isSilent: function(a) {
        var b = this.currentFileInfo && this.currentFileInfo.reference && !this.isReferenced,
        c = a.compress && !this.value.match(/^\/\*!/);
        return this.silent || b || c
      },
      eval: function() {
        return this
      },
      markReferenced: function() {
        this.isReferenced = !0
      }
    }
  } (c("../tree")),
  function(a) {
    a.Condition = function(a, b, c, d, e) {
      this.op = a.trim(),
      this.lvalue = b,
      this.rvalue = c,
      this.index = d,
      this.negate = e
    },
    a.Condition.prototype = {
      type: "Condition",
      accept: function(a) {
        this.lvalue = a.visit(this.lvalue),
        this.rvalue = a.visit(this.rvalue)
      },
      eval: function(a) {
        var b, c = this.lvalue.eval(a),
        d = this.rvalue.eval(a),
        e = this.index;
        return b = function(a) {
          switch (a) {
          case "and":
            return c && d;
          case "or":
            return c || d;
          default:
            if (c.compare) b = c.compare(d);
            else {
              if (!d.compare) throw {
                type: "Type",
                message: "Unable to perform comparison",
                index: e
              };
              b = d.compare(c)
            }
            switch (b) {
            case - 1 : return "<" === a || "=<" === a || "<=" === a;
            case 0:
              return "=" === a || ">=" === a || "=<" === a || "<=" === a;
            case 1:
              return ">" === a || ">=" === a
            }
          }
        } (this.op),
        this.negate ? !b: b
      }
    }
  } (c("../tree")),
  function(a) {
    a.DetachedRuleset = function(a, b) {
      this.ruleset = a,
      this.frames = b
    },
    a.DetachedRuleset.prototype = {
      type: "DetachedRuleset",
      accept: function(a) {
        this.ruleset = a.visit(this.ruleset)
      },
      eval: function(b) {
        var c = this.frames || b.frames.slice(0);
        return new a.DetachedRuleset(this.ruleset, c)
      },
      callEval: function(b) {
        return this.ruleset.eval(this.frames ? new a.evalEnv(b, this.frames.concat(b.frames)) : b)
      }
    }
  } (c("../tree")),
  function(a) {
    a.Dimension = function(c, d) {
      this.value = parseFloat(c),
      this.unit = d && d instanceof a.Unit ? d: new a.Unit(d ? [d] : b)
    },
    a.Dimension.prototype = {
      type: "Dimension",
      accept: function(a) {
        this.unit = a.visit(this.unit)
      },
      eval: function() {
        return this
      },
      toColor: function() {
        return new a.Color([this.value, this.value, this.value])
      },
      genCSS: function(b, c) {
        if (b && b.strictUnits && !this.unit.isSingular()) throw new Error("Multiple units in dimension. Correct the units or use the unit function. Bad unit: " + this.unit.toString());
        var d = a.fround(b, this.value),
        e = String(d);
        if (0 !== d && 1e-6 > d && d > -1e-6 && (e = d.toFixed(20).replace(/0+$/, "")), b && b.compress) {
          if (0 === d && this.unit.isLength()) return void c.add(e);
          d > 0 && 1 > d && (e = e.substr(1))
        }
        c.add(e),
        this.unit.genCSS(b, c)
      },
      toCSS: a.toCSS,
      operate: function(b, c, d) {
        var e = a.operate(b, c, this.value, d.value),
        f = this.unit.clone();
        if ("+" === c || "-" === c) if (0 === f.numerator.length && 0 === f.denominator.length) f.numerator = d.unit.numerator.slice(0),
        f.denominator = d.unit.denominator.slice(0);
        else if (0 === d.unit.numerator.length && 0 === f.denominator.length);
        else {
          if (d = d.convertTo(this.unit.usedUnits()), b.strictUnits && d.unit.toString() !== f.toString()) throw new Error("Incompatible units. Change the units or use the unit function. Bad units: '" + f.toString() + "' and '" + d.unit.toString() + "'.");
          e = a.operate(b, c, this.value, d.value)
        } else "*" === c ? (f.numerator = f.numerator.concat(d.unit.numerator).sort(), f.denominator = f.denominator.concat(d.unit.denominator).sort(), f.cancel()) : "/" === c && (f.numerator = f.numerator.concat(d.unit.denominator).sort(), f.denominator = f.denominator.concat(d.unit.numerator).sort(), f.cancel());
        return new a.Dimension(e, f)
      },
      compare: function(b) {
        if (b instanceof a.Dimension) {
          var c, d, e, f;
          if (this.unit.isEmpty() || b.unit.isEmpty()) c = this,
          d = b;
          else if (c = this.unify(), d = b.unify(), 0 !== c.unit.compare(d.unit)) return - 1;
          return e = c.value,
          f = d.value,
          f > e ? -1 : e > f ? 1 : 0
        }
        return - 1
      },
      unify: function() {
        return this.convertTo({
          length: "px",
          duration: "s",
          angle: "rad"
        })
      },
      convertTo: function(b) {
        var c, d, e, f, g, h = this.value,
        i = this.unit.clone(),
        j = {};
        if ("string" == typeof b) {
          for (c in a.UnitConversions) a.UnitConversions[c].hasOwnProperty(b) && (j = {},
          j[c] = b);
          b = j
        }
        g = function(a, b) {
          return e.hasOwnProperty(a) ? (b ? h /= e[a] / e[f] : h *= e[a] / e[f], f) : a
        };
        for (d in b) b.hasOwnProperty(d) && (f = b[d], e = a.UnitConversions[d], i.map(g));
        return i.cancel(),
        new a.Dimension(h, i)
      }
    },
    a.UnitConversions = {
      length: {
        m: 1,
        cm: .01,
        mm: .001,
        "in": .0254,
        px: .0254 / 96,
        pt: .0254 / 72,
        pc: .0254 / 72 * 12
      },
      duration: {
        s: 1,
        ms: .001
      },
      angle: {
        rad: 1 / (2 * Math.PI),
        deg: 1 / 360,
        grad: .0025,
        turn: 1
      }
    },
    a.Unit = function(a, b, c) {
      this.numerator = a ? a.slice(0).sort() : [],
      this.denominator = b ? b.slice(0).sort() : [],
      this.backupUnit = c
    },
    a.Unit.prototype = {
      type: "Unit",
      clone: function() {
        return new a.Unit(this.numerator.slice(0), this.denominator.slice(0), this.backupUnit)
      },
      genCSS: function(a, b) {
        this.numerator.length >= 1 ? b.add(this.numerator[0]) : this.denominator.length >= 1 ? b.add(this.denominator[0]) : a && a.strictUnits || !this.backupUnit || b.add(this.backupUnit)
      },
      toCSS: a.toCSS,
      toString: function() {
        var a, b = this.numerator.join("*");
        for (a = 0; a < this.denominator.length; a++) b += "/" + this.denominator[a];
        return b
      },
      compare: function(a) {
        return this.is(a.toString()) ? 0 : -1
      },
      is: function(a) {
        return this.toString() === a
      },
      isLength: function() {
        return Boolean(this.toCSS().match(/px|em|%|in|cm|mm|pc|pt|ex/))
      },
      isEmpty: function() {
        return 0 === this.numerator.length && 0 === this.denominator.length
      },
      isSingular: function() {
        return this.numerator.length <= 1 && 0 === this.denominator.length
      },
      map: function(a) {
        var b;
        for (b = 0; b < this.numerator.length; b++) this.numerator[b] = a(this.numerator[b], !1);
        for (b = 0; b < this.denominator.length; b++) this.denominator[b] = a(this.denominator[b], !0)
      },
      usedUnits: function() {
        var b, c, d = {};
        c = function(a) {
          return b.hasOwnProperty(a) && !d[e] && (d[e] = a),
          a
        };
        for (var e in a.UnitConversions) a.UnitConversions.hasOwnProperty(e) && (b = a.UnitConversions[e], this.map(c));
        return d
      },
      cancel: function() {
        var a, b, c, d = {};
        for (b = 0; b < this.numerator.length; b++) a = this.numerator[b],
        c || (c = a),
        d[a] = (d[a] || 0) + 1;
        for (b = 0; b < this.denominator.length; b++) a = this.denominator[b],
        c || (c = a),
        d[a] = (d[a] || 0) - 1;
        this.numerator = [],
        this.denominator = [];
        for (a in d) if (d.hasOwnProperty(a)) {
          var e = d[a];
          if (e > 0) for (b = 0; e > b; b++) this.numerator.push(a);
          else if (0 > e) for (b = 0; - e > b; b++) this.denominator.push(a)
        }
        0 === this.numerator.length && 0 === this.denominator.length && c && (this.backupUnit = c),
        this.numerator.sort(),
        this.denominator.sort()
      }
    }
  } (c("../tree")),
  function(a) {
    a.Directive = function(a, b, c, d, e, f) {
      this.name = a,
      this.value = b,
      c && (this.rules = c, this.rules.allowImports = !0),
      this.index = d,
      this.currentFileInfo = e,
      this.debugInfo = f
    },
    a.Directive.prototype = {
      type: "Directive",
      accept: function(a) {
        var b = this.value,
        c = this.rules;
        c && (c = a.visit(c)),
        b && (b = a.visit(b))
      },
      genCSS: function(b, c) {
        var d = this.value,
        e = this.rules;
        c.add(this.name, this.currentFileInfo, this.index),
        d && (c.add(" "), d.genCSS(b, c)),
        e ? a.outputRuleset(b, c, [e]) : c.add(";")
      },
      toCSS: a.toCSS,
      eval: function(b) {
        var c = this.value,
        d = this.rules;
        return c && (c = c.eval(b)),
        d && (d = d.eval(b), d.root = !0),
        new a.Directive(this.name, c, d, this.index, this.currentFileInfo, this.debugInfo)
      },
      variable: function(b) {
        return this.rules ? a.Ruleset.prototype.variable.call(this.rules, b) : void 0
      },
      find: function() {
        return this.rules ? a.Ruleset.prototype.find.apply(this.rules, arguments) : void 0
      },
      rulesets: function() {
        return this.rules ? a.Ruleset.prototype.rulesets.apply(this.rules) : void 0
      },
      markReferenced: function() {
        var a, b;
        if (this.isReferenced = !0, this.rules) for (b = this.rules.rules, a = 0; a < b.length; a++) b[a].markReferenced && b[a].markReferenced()
      }
    }
  } (c("../tree")),
  function(a) {
    a.Element = function(b, c, d, e) {
      this.combinator = b instanceof a.Combinator ? b: new a.Combinator(b),
      this.value = "string" == typeof c ? c.trim() : c ? c: "",
      this.index = d,
      this.currentFileInfo = e
    },
    a.Element.prototype = {
      type: "Element",
      accept: function(a) {
        var b = this.value;
        this.combinator = a.visit(this.combinator),
        "object" == typeof b && (this.value = a.visit(b))
      },
      eval: function(b) {
        return new a.Element(this.combinator, this.value.eval ? this.value.eval(b) : this.value, this.index, this.currentFileInfo)
      },
      genCSS: function(a, b) {
        b.add(this.toCSS(a), this.currentFileInfo, this.index)
      },
      toCSS: function(a) {
        var b = this.value.toCSS ? this.value.toCSS(a) : this.value;
        return "" === b && "&" === this.combinator.value.charAt(0) ? "": this.combinator.toCSS(a || {}) + b
      }
    },
    a.Attribute = function(a, b, c) {
      this.key = a,
      this.op = b,
      this.value = c
    },
    a.Attribute.prototype = {
      type: "Attribute",
      eval: function(b) {
        return new a.Attribute(this.key.eval ? this.key.eval(b) : this.key, this.op, this.value && this.value.eval ? this.value.eval(b) : this.value)
      },
      genCSS: function(a, b) {
        b.add(this.toCSS(a))
      },
      toCSS: function(a) {
        var b = this.key.toCSS ? this.key.toCSS(a) : this.key;
        return this.op && (b += this.op, b += this.value.toCSS ? this.value.toCSS(a) : this.value),
        "[" + b + "]"
      }
    },
    a.Combinator = function(a) {
      this.value = " " === a ? " ": a ? a.trim() : ""
    },
    a.Combinator.prototype = {
      type: "Combinator",
      _outputMap: {
        "": "",
        " ": " ",
        ":": " :",
        "+": " + ",
        "~": " ~ ",
        ">": " > ",
        "|": "|",
        "^": " ^ ",
        "^^": " ^^ "
      },
      _outputMapCompressed: {
        "": "",
        " ": " ",
        ":": " :",
        "+": "+",
        "~": "~",
        ">": ">",
        "|": "|",
        "^": "^",
        "^^": "^^"
      },
      genCSS: function(a, b) {
        b.add((a.compress ? this._outputMapCompressed: this._outputMap)[this.value])
      },
      toCSS: a.toCSS
    }
  } (c("../tree")),
  function(a) {
    a.Expression = function(a) {
      this.value = a
    },
    a.Expression.prototype = {
      type: "Expression",
      accept: function(a) {
        this.value && (this.value = a.visitArray(this.value))
      },
      eval: function(b) {
        var c, d = this.parens && !this.parensInOp,
        e = !1;
        return d && b.inParenthesis(),
        this.value.length > 1 ? c = new a.Expression(this.value.map(function(a) {
          return a.eval(b)
        })) : 1 === this.value.length ? (this.value[0].parens && !this.value[0].parensInOp && (e = !0), c = this.value[0].eval(b)) : c = this,
        d && b.outOfParenthesis(),
        this.parens && this.parensInOp && !b.isMathOn() && !e && (c = new a.Paren(c)),
        c
      },
      genCSS: function(a, b) {
        for (var c = 0; c < this.value.length; c++) this.value[c].genCSS(a, b),
        c + 1 < this.value.length && b.add(" ")
      },
      toCSS: a.toCSS,
      throwAwayComments: function() {
        this.value = this.value.filter(function(b) {
          return ! (b instanceof a.Comment)
        })
      }
    }
  } (c("../tree")),
  function(a) {
    a.Extend = function(b, c, d) {
      switch (this.selector = b, this.option = c, this.index = d, this.object_id = a.Extend.next_id++, this.parent_ids = [this.object_id], c) {
      case "all":
        this.allowBefore = !0,
        this.allowAfter = !0;
        break;
      default:
        this.allowBefore = !1,
        this.allowAfter = !1
      }
    },
    a.Extend.next_id = 0,
    a.Extend.prototype = {
      type: "Extend",
      accept: function(a) {
        this.selector = a.visit(this.selector)
      },
      eval: function(b) {
        return new a.Extend(this.selector.eval(b), this.option, this.index)
      },
      clone: function() {
        return new a.Extend(this.selector, this.option, this.index)
      },
      findSelfSelectors: function(a) {
        var b, c, d = [];
        for (b = 0; b < a.length; b++) c = a[b].elements,
        b > 0 && c.length && "" === c[0].combinator.value && (c[0].combinator.value = " "),
        d = d.concat(a[b].elements);
        this.selfSelectors = [{
          elements: d
        }]
      }
    }
  } (c("../tree")),
  function(a) {
    a.Import = function(a, c, d, e, f) {
      if (this.options = d, this.index = e, this.path = a, this.features = c, this.currentFileInfo = f, this.options.less !== b || this.options.inline) this.css = !this.options.less || this.options.inline;
      else {
        var g = this.getPath();
        g && /css([\?;].*)?$/.test(g) && (this.css = !0)
      }
    },
    a.Import.prototype = {
      type: "Import",
      accept: function(a) {
        this.features && (this.features = a.visit(this.features)),
        this.path = a.visit(this.path),
        !this.options.inline && this.root && (this.root = a.visit(this.root))
      },
      genCSS: function(a, b) {
        this.css && (b.add("@import ", this.currentFileInfo, this.index), this.path.genCSS(a, b), this.features && (b.add(" "), this.features.genCSS(a, b)), b.add(";"))
      },
      toCSS: a.toCSS,
      getPath: function() {
        if (this.path instanceof a.Quoted) {
          var c = this.path.value;
          return this.css !== b || /(\.[a-z]*$)|([\?;].*)$/.test(c) ? c: c + ".less"
        }
        return this.path instanceof a.URL ? this.path.value.value: null
      },
      evalForImport: function(b) {
        return new a.Import(this.path.eval(b), this.features, this.options, this.index, this.currentFileInfo)
      },
      evalPath: function(b) {
        var c = this.path.eval(b),
        d = this.currentFileInfo && this.currentFileInfo.rootpath;
        if (! (c instanceof a.URL)) {
          if (d) {
            var e = c.value;
            e && b.isPathRelative(e) && (c.value = d + e)
          }
          c.value = b.normalizePath(c.value)
        }
        return c
      },
      eval: function(b) {
        var c, d = this.features && this.features.eval(b);
        if (this.skip && ("function" == typeof this.skip && (this.skip = this.skip()), this.skip)) return [];
        if (this.options.inline) {
          var e = new a.Anonymous(this.root, 0, {
            filename: this.importedFilename
          },
          !0);
          return this.features ? new a.Media([e], this.features.value) : [e]
        }
        if (this.css) {
          var f = new a.Import(this.evalPath(b), d, this.options, this.index);
          if (!f.css && this.error) throw this.error;
          return f
        }
        return c = new a.Ruleset(null, this.root.rules.slice(0)),
        c.evalImports(b),
        this.features ? new a.Media(c.rules, this.features.value) : c.rules
      }
    }
  } (c("../tree")),
  function(a) {
    a.JavaScript = function(a, b, c) {
      this.escaped = c,
      this.expression = a,
      this.index = b
    },
    a.JavaScript.prototype = {
      type: "JavaScript",
      eval: function(b) {
        var c, d = this,
        e = {},
        f = this.expression.replace(/@\{([\w-]+)\}/g,
        function(c, e) {
          return a.jsify(new a.Variable("@" + e, d.index).eval(b))
        });
        try {
          f = new Function("return (" + f + ")")
        } catch(g) {
          throw {
            message: "JavaScript evaluation error: " + g.message + " from `" + f + "`",
            index: this.index
          }
        }
        var h = b.frames[0].variables();
        for (var i in h) h.hasOwnProperty(i) && (e[i.slice(1)] = {
          value: h[i].value,
          toJS: function() {
            return this.value.eval(b).toCSS()
          }
        });
        try {
          c = f.call(e)
        } catch(g) {
          throw {
            message: "JavaScript evaluation error: '" + g.name + ": " + g.message.replace(/["]/g, "'") + "'",
            index: this.index
          }
        }
        return "number" == typeof c ? new a.Dimension(c) : "string" == typeof c ? new a.Quoted('"' + c + '"', c, this.escaped, this.index) : new a.Anonymous(Array.isArray(c) ? c.join(", ") : c)
      }
    }
  } (c("../tree")),
  function(a) {
    a.Keyword = function(a) {
      this.value = a
    },
    a.Keyword.prototype = {
      type: "Keyword",
      eval: function() {
        return this
      },
      genCSS: function(a, b) {
        if ("%" === this.value) throw {
          type: "Syntax",
          message: "Invalid % without number"
        };
        b.add(this.value)
      },
      toCSS: a.toCSS,
      compare: function(b) {
        return b instanceof a.Keyword ? b.value === this.value ? 0 : 1 : -1
      }
    },
    a.True = new a.Keyword("true"),
    a.False = new a.Keyword("false")
  } (c("../tree")),
  function(a) {
    a.Media = function(b, c, d, e) {
      this.index = d,
      this.currentFileInfo = e;
      var f = this.emptySelectors();
      this.features = new a.Value(c),
      this.rules = [new a.Ruleset(f, b)],
      this.rules[0].allowImports = !0
    },
    a.Media.prototype = {
      type: "Media",
      accept: function(a) {
        this.features && (this.features = a.visit(this.features)),
        this.rules && (this.rules = a.visitArray(this.rules))
      },
      genCSS: function(b, c) {
        c.add("@media ", this.currentFileInfo, this.index),
        this.features.genCSS(b, c),
        a.outputRuleset(b, c, this.rules)
      },
      toCSS: a.toCSS,
      eval: function(b) {
        b.mediaBlocks || (b.mediaBlocks = [], b.mediaPath = []);
        var c = new a.Media(null, [], this.index, this.currentFileInfo);
        this.debugInfo && (this.rules[0].debugInfo = this.debugInfo, c.debugInfo = this.debugInfo);
        var d = !1;
        b.strictMath || (d = !0, b.strictMath = !0);
        try {
          c.features = this.features.eval(b)
        } finally {
          d && (b.strictMath = !1)
        }
        return b.mediaPath.push(c),
        b.mediaBlocks.push(c),
        b.frames.unshift(this.rules[0]),
        c.rules = [this.rules[0].eval(b)],
        b.frames.shift(),
        b.mediaPath.pop(),
        0 === b.mediaPath.length ? c.evalTop(b) : c.evalNested(b)
      },
      variable: function(b) {
        return a.Ruleset.prototype.variable.call(this.rules[0], b)
      },
      find: function() {
        return a.Ruleset.prototype.find.apply(this.rules[0], arguments)
      },
      rulesets: function() {
        return a.Ruleset.prototype.rulesets.apply(this.rules[0])
      },
      emptySelectors: function() {
        var b = new a.Element("", "&", this.index, this.currentFileInfo),
        c = [new a.Selector([b], null, null, this.index, this.currentFileInfo)];
        return c[0].mediaEmpty = !0,
        c
      },
      markReferenced: function() {
        var a, b = this.rules[0].rules;
        for (this.rules[0].markReferenced(), this.isReferenced = !0, a = 0; a < b.length; a++) b[a].markReferenced && b[a].markReferenced()
      },
      evalTop: function(b) {
        var c = this;
        if (b.mediaBlocks.length > 1) {
          var d = this.emptySelectors();
          c = new a.Ruleset(d, b.mediaBlocks),
          c.multiMedia = !0
        }
        return delete b.mediaBlocks,
        delete b.mediaPath,
        c
      },
      evalNested: function(b) {
        var c, d, e = b.mediaPath.concat([this]);
        for (c = 0; c < e.length; c++) d = e[c].features instanceof a.Value ? e[c].features.value: e[c].features,
        e[c] = Array.isArray(d) ? d: [d];
        return this.features = new a.Value(this.permute(e).map(function(b) {
          for (b = b.map(function(b) {
            return b.toCSS ? b: new a.Anonymous(b)
          }), c = b.length - 1; c > 0; c--) b.splice(c, 0, new a.Anonymous("and"));
          return new a.Expression(b)
        })),
        new a.Ruleset([], [])
      },
      permute: function(a) {
        if (0 === a.length) return [];
        if (1 === a.length) return a[0];
        for (var b = [], c = this.permute(a.slice(1)), d = 0; d < c.length; d++) for (var e = 0; e < a[0].length; e++) b.push([a[0][e]].concat(c[d]));
        return b
      },
      bubbleSelectors: function(b) {
        b && (this.rules = [new a.Ruleset(b.slice(0), [this.rules[0]])])
      }
    }
  } (c("../tree")),
  function(a) {
    a.mixin = {},
    a.mixin.Call = function(b, c, d, e, f) {
      this.selector = new a.Selector(b),
      this.arguments = c && c.length ? c: null,
      this.index = d,
      this.currentFileInfo = e,
      this.important = f
    },
    a.mixin.Call.prototype = {
      type: "MixinCall",
      accept: function(a) {
        this.selector && (this.selector = a.visit(this.selector)),
        this.arguments && (this.arguments = a.visitArray(this.arguments))
      },
      eval: function(b) {
        var c, d, e, f, g, h, i, j, k, l, m, n, o, p = [],
        q = !1,
        r = [],
        s = [],
        t = a.defaultFunc,
        u = 0,
        v = 1,
        w = 2;
        for (e = this.arguments && this.arguments.map(function(a) {
          return {
            name: a.name,
            value: a.value.eval(b)
          }
        }), f = 0; f < b.frames.length; f++) if ((c = b.frames[f].find(this.selector)).length > 0) {
          for (j = !0, g = 0; g < c.length; g++) {
            for (d = c[g], i = !1, h = 0; h < b.frames.length; h++) if (! (d instanceof a.mixin.Definition) && d === (b.frames[h].originalRuleset || b.frames[h])) {
              i = !0;
              break
            }
            if (!i && d.matchArgs(e, b)) {
              if (l = {
                mixin: d,
                group: u
              },
              d.matchCondition) {
                for (h = 0; 2 > h; h++) t.value(h),
                s[h] = d.matchCondition(e, b); (s[0] || s[1]) && (s[0] != s[1] && (l.group = s[1] ? v: w), r.push(l))
              } else r.push(l);
              q = !0
            }
          }
          for (t.reset(), n = [0, 0, 0], g = 0; g < r.length; g++) n[r[g].group]++;
          if (n[u] > 0) m = w;
          else if (m = v, n[v] + n[w] > 1) throw {
            type: "Runtime",
            message: "Ambiguous use of `default()` found when matching for `" + this.format(e) + "`",
            index: this.index,
            filename: this.currentFileInfo.filename
          };
          for (g = 0; g < r.length; g++) if (l = r[g].group, l === u || l === m) try {
            d = r[g].mixin,
            d instanceof a.mixin.Definition || (o = d.originalRuleset || d, d = new a.mixin.Definition("", [], d.rules, null, !1), d.originalRuleset = o),
            Array.prototype.push.apply(p, d.evalCall(b, e, this.important).rules)
          } catch(x) {
            throw {
              message: x.message,
              index: this.index,
              filename: this.currentFileInfo.filename,
              stack: x.stack
            }
          }
          if (q) {
            if (!this.currentFileInfo || !this.currentFileInfo.reference) for (f = 0; f < p.length; f++) k = p[f],
            k.markReferenced && k.markReferenced();
            return p
          }
        }
        throw j ? {
          type: "Runtime",
          message: "No matching definition was found for `" + this.format(e) + "`",
          index: this.index,
          filename: this.currentFileInfo.filename
        }: {
          type: "Name",
          message: this.selector.toCSS().trim() + " is undefined",
          index: this.index,
          filename: this.currentFileInfo.filename
        }
      },
      format: function(a) {
        return this.selector.toCSS().trim() + "(" + (a ? a.map(function(a) {
          var b = "";
          return a.name && (b += a.name + ":"),
          b += a.value.toCSS ? a.value.toCSS() : "???"
        }).join(", ") : "") + ")"
      }
    },
    a.mixin.Definition = function(b, c, d, e, f, g) {
      this.name = b,
      this.selectors = [new a.Selector([new a.Element(null, b, this.index, this.currentFileInfo)])],
      this.params = c,
      this.condition = e,
      this.variadic = f,
      this.arity = c.length,
      this.rules = d,
      this._lookups = {},
      this.required = c.reduce(function(a, b) {
        return ! b.name || b.name && !b.value ? a + 1 : a
      },
      0),
      this.parent = a.Ruleset.prototype,
      this.frames = g
    },
    a.mixin.Definition.prototype = {
      type: "MixinDefinition",
      accept: function(a) {
        this.params && this.params.length && (this.params = a.visitArray(this.params)),
        this.rules = a.visitArray(this.rules),
        this.condition && (this.condition = a.visit(this.condition))
      },
      variable: function(a) {
        return this.parent.variable.call(this, a)
      },
      variables: function() {
        return this.parent.variables.call(this)
      },
      find: function() {
        return this.parent.find.apply(this, arguments)
      },
      rulesets: function() {
        return this.parent.rulesets.apply(this)
      },
      evalParams: function(b, c, d, e) {
        var f, g, h, i, j, k, l, m, n = new a.Ruleset(null, null),
        o = this.params.slice(0),
        p = 0;
        if (c = new a.evalEnv(c, [n].concat(c.frames)), d) for (d = d.slice(0), p = d.length, h = 0; p > h; h++) if (g = d[h], k = g && g.name) {
          for (l = !1, i = 0; i < o.length; i++) if (!e[i] && k === o[i].name) {
            e[i] = g.value.eval(b),
            n.prependRule(new a.Rule(k, g.value.eval(b))),
            l = !0;
            break
          }
          if (l) {
            d.splice(h, 1),
            h--;
            continue
          }
          throw {
            type: "Runtime",
            message: "Named argument for " + this.name + " " + d[h].name + " not found"
          }
        }
        for (m = 0, h = 0; h < o.length; h++) if (!e[h]) {
          if (g = d && d[m], k = o[h].name) if (o[h].variadic) {
            for (f = [], i = m; p > i; i++) f.push(d[i].value.eval(b));
            n.prependRule(new a.Rule(k, new a.Expression(f).eval(b)))
          } else {
            if (j = g && g.value) j = j.eval(b);
            else {
              if (!o[h].value) throw {
                type: "Runtime",
                message: "wrong number of arguments for " + this.name + " (" + p + " for " + this.arity + ")"
              };
              j = o[h].value.eval(c),
              n.resetCache()
            }
            n.prependRule(new a.Rule(k, j)),
            e[h] = j
          }
          if (o[h].variadic && d) for (i = m; p > i; i++) e[i] = d[i].value.eval(b);
          m++
        }
        return n
      },
      eval: function(b) {
        return new a.mixin.Definition(this.name, this.params, this.rules, this.condition, this.variadic, this.frames || b.frames.slice(0))
      },
      evalCall: function(b, c, d) {
        var e, f, g = [],
        h = this.frames ? this.frames.concat(b.frames) : b.frames,
        i = this.evalParams(b, new a.evalEnv(b, h), c, g);
        return i.prependRule(new a.Rule("@arguments", new a.Expression(g).eval(b))),
        e = this.rules.slice(0),
        f = new a.Ruleset(null, e),
        f.originalRuleset = this,
        f = f.eval(new a.evalEnv(b, [this, i].concat(h))),
        d && (f = this.parent.makeImportant.apply(f)),
        f
      },
      matchCondition: function(b, c) {
        return this.condition && !this.condition.eval(new a.evalEnv(c, [this.evalParams(c, new a.evalEnv(c, this.frames ? this.frames.concat(c.frames) : c.frames), b, [])].concat(this.frames).concat(c.frames))) ? !1 : !0
      },
      matchArgs: function(a, b) {
        var c, d = a && a.length || 0;
        if (this.variadic) {
          if (d < this.required - 1) return ! 1
        } else {
          if (d < this.required) return ! 1;
          if (d > this.params.length) return ! 1
        }
        c = Math.min(d, this.arity);
        for (var e = 0; c > e; e++) if (!this.params[e].name && !this.params[e].variadic && a[e].value.eval(b).toCSS() != this.params[e].value.eval(b).toCSS()) return ! 1;
        return ! 0
      }
    }
  } (c("../tree")),
  function(a) {
    a.Negative = function(a) {
      this.value = a
    },
    a.Negative.prototype = {
      type: "Negative",
      accept: function(a) {
        this.value = a.visit(this.value)
      },
      genCSS: function(a, b) {
        b.add("-"),
        this.value.genCSS(a, b)
      },
      toCSS: a.toCSS,
      eval: function(b) {
        return b.isMathOn() ? new a.Operation("*", [new a.Dimension( - 1), this.value]).eval(b) : new a.Negative(this.value.eval(b))
      }
    }
  } (c("../tree")),
  function(a) {
    a.Operation = function(a, b, c) {
      this.op = a.trim(),
      this.operands = b,
      this.isSpaced = c
    },
    a.Operation.prototype = {
      type: "Operation",
      accept: function(a) {
        this.operands = a.visit(this.operands)
      },
      eval: function(b) {
        var c = this.operands[0].eval(b),
        d = this.operands[1].eval(b);
        if (b.isMathOn()) {
          if (c instanceof a.Dimension && d instanceof a.Color && (c = c.toColor()), d instanceof a.Dimension && c instanceof a.Color && (d = d.toColor()), !c.operate) throw {
            type: "Operation",
            message: "Operation on an invalid type"
          };
          return c.operate(b, this.op, d)
        }
        return new a.Operation(this.op, [c, d], this.isSpaced)
      },
      genCSS: function(a, b) {
        this.operands[0].genCSS(a, b),
        this.isSpaced && b.add(" "),
        b.add(this.op),
        this.isSpaced && b.add(" "),
        this.operands[1].genCSS(a, b)
      },
      toCSS: a.toCSS
    },
    a.operate = function(a, b, c, d) {
      switch (b) {
      case "+":
        return c + d;
      case "-":
        return c - d;
      case "*":
        return c * d;
      case "/":
        return c / d
      }
    }
  } (c("../tree")),
  function(a) {
    a.Paren = function(a) {
      this.value = a
    },
    a.Paren.prototype = {
      type: "Paren",
      accept: function(a) {
        this.value = a.visit(this.value)
      },
      genCSS: function(a, b) {
        b.add("("),
        this.value.genCSS(a, b),
        b.add(")")
      },
      toCSS: a.toCSS,
      eval: function(b) {
        return new a.Paren(this.value.eval(b))
      }
    }
  } (c("../tree")),
  function(a) {
    a.Quoted = function(a, b, c, d, e) {
      this.escaped = c,
      this.value = b || "",
      this.quote = a.charAt(0),
      this.index = d,
      this.currentFileInfo = e
    },
    a.Quoted.prototype = {
      type: "Quoted",
      genCSS: function(a, b) {
        this.escaped || b.add(this.quote, this.currentFileInfo, this.index),
        b.add(this.value),
        this.escaped || b.add(this.quote)
      },
      toCSS: a.toCSS,
      eval: function(b) {
        var c = this,
        d = this.value.replace(/`([^`]+)`/g,
        function(d, e) {
          return new a.JavaScript(e, c.index, !0).eval(b).value
        }).replace(/@\{([\w-]+)\}/g,
        function(d, e) {
          var f = new a.Variable("@" + e, c.index, c.currentFileInfo).eval(b, !0);
          return f instanceof a.Quoted ? f.value: f.toCSS()
        });
        return new a.Quoted(this.quote + d + this.quote, d, this.escaped, this.index, this.currentFileInfo)
      },
      compare: function(a) {
        if (!a.toCSS) return - 1;
        var b, c;
        return "Quoted" !== a.type || this.escaped || a.escaped ? (b = this.toCSS(), c = a.toCSS()) : (b = a.value, c = this.value),
        b === c ? 0 : c > b ? -1 : 1
      }
    }
  } (c("../tree")),
  function(a) {
    function b(a, b) {
      var c, d = "",
      e = b.length,
      f = {
        add: function(a) {
          d += a
        }
      };
      for (c = 0; e > c; c++) b[c].eval(a).genCSS(a, f);
      return d
    }
    a.Rule = function(b, c, d, e, f, g, h) {
      this.name = b,
      this.value = c instanceof a.Value || c instanceof a.Ruleset ? c: new a.Value([c]),
      this.important = d ? " " + d.trim() : "",
      this.merge = e,
      this.index = f,
      this.currentFileInfo = g,
      this.inline = h || !1,
      this.variable = b.charAt && "@" === b.charAt(0)
    },
    a.Rule.prototype = {
      type: "Rule",
      accept: function(a) {
        this.value = a.visit(this.value)
      },
      genCSS: function(a, b) {
        b.add(this.name + (a.compress ? ":": ": "), this.currentFileInfo, this.index);
        try {
          this.value.genCSS(a, b)
        } catch(c) {
          throw c.index = this.index,
          c.filename = this.currentFileInfo.filename,
          c
        }
        b.add(this.important + (this.inline || a.lastRule && a.compress ? "": ";"), this.currentFileInfo, this.index)
      },
      toCSS: a.toCSS,
      eval: function(c) {
        var d, e = !1,
        f = this.name;
        "string" != typeof f && (f = 1 === f.length && f[0] instanceof a.Keyword ? f[0].value: b(c, f)),
        "font" !== f || c.strictMath || (e = !0, c.strictMath = !0);
        try {
          if (d = this.value.eval(c), !this.variable && "DetachedRuleset" === d.type) throw {
            message: "Rulesets cannot be evaluated on a property.",
            index: this.index,
            filename: this.currentFileInfo.filename
          };
          return new a.Rule(f, d, this.important, this.merge, this.index, this.currentFileInfo, this.inline)
        } catch(g) {
          throw "number" != typeof g.index && (g.index = this.index, g.filename = this.currentFileInfo.filename),
          g
        } finally {
          e && (c.strictMath = !1)
        }
      },
      makeImportant: function() {
        return new a.Rule(this.name, this.value, "!important", this.merge, this.index, this.currentFileInfo, this.inline)
      }
    }
  } (c("../tree")),
  function(a) {
    a.RulesetCall = function(a) {
      this.variable = a
    },
    a.RulesetCall.prototype = {
      type: "RulesetCall",
      accept: function() {},
      eval: function(b) {
        var c = new a.Variable(this.variable).eval(b);
        return c.callEval(b)
      }
    }
  } (c("../tree")),
  function(a) {
    a.Ruleset = function(a, b, c) {
      this.selectors = a,
      this.rules = b,
      this._lookups = {},
      this.strictImports = c
    },
    a.Ruleset.prototype = {
      type: "Ruleset",
      accept: function(a) {
        this.paths ? a.visitArray(this.paths, !0) : this.selectors && (this.selectors = a.visitArray(this.selectors)),
        this.rules && this.rules.length && (this.rules = a.visitArray(this.rules))
      },
      eval: function(b) {
        var c, d, e, f, g = this.selectors,
        h = a.defaultFunc,
        i = !1;
        if (g && (d = g.length)) {
          for (c = [], h.error({
            type: "Syntax",
            message: "it is currently only allowed in parametric mixin guards,"
          }), f = 0; d > f; f++) e = g[f].eval(b),
          c.push(e),
          e.evaldCondition && (i = !0);
          h.reset()
        } else i = !0;
        var j, k, l = this.rules ? this.rules.slice(0) : null,
        m = new a.Ruleset(c, l, this.strictImports);
        m.originalRuleset = this,
        m.root = this.root,
        m.firstRoot = this.firstRoot,
        m.allowImports = this.allowImports,
        this.debugInfo && (m.debugInfo = this.debugInfo),
        i || (l.length = 0);
        var n = b.frames;
        n.unshift(m);
        var o = b.selectors;
        o || (b.selectors = o = []),
        o.unshift(this.selectors),
        (m.root || m.allowImports || !m.strictImports) && m.evalImports(b);
        var p = m.rules,
        q = p ? p.length: 0;
        for (f = 0; q > f; f++)(p[f] instanceof a.mixin.Definition || p[f] instanceof a.DetachedRuleset) && (p[f] = p[f].eval(b));
        var r = b.mediaBlocks && b.mediaBlocks.length || 0;
        for (f = 0; q > f; f++) p[f] instanceof a.mixin.Call ? (l = p[f].eval(b).filter(function(b) {
          return b instanceof a.Rule && b.variable ? !m.variable(b.name) : !0
        }), p.splice.apply(p, [f, 1].concat(l)), q += l.length - 1, f += l.length - 1, m.resetCache()) : p[f] instanceof a.RulesetCall && (l = p[f].eval(b).rules.filter(function(b) {
          return b instanceof a.Rule && b.variable ? !1 : !0
        }), p.splice.apply(p, [f, 1].concat(l)), q += l.length - 1, f += l.length - 1, m.resetCache());
        for (f = 0; f < p.length; f++) j = p[f],
        j instanceof a.mixin.Definition || j instanceof a.DetachedRuleset || (p[f] = j = j.eval ? j.eval(b) : j);
        for (f = 0; f < p.length; f++) if (j = p[f], j instanceof a.Ruleset && j.selectors && 1 === j.selectors.length && j.selectors[0].isJustParentSelector()) {
          p.splice(f--, 1);
          for (var s = 0; s < j.rules.length; s++) k = j.rules[s],
          k instanceof a.Rule && k.variable || p.splice(++f, 0, k)
        }
        if (n.shift(), o.shift(), b.mediaBlocks) for (f = r; f < b.mediaBlocks.length; f++) b.mediaBlocks[f].bubbleSelectors(c);
        return m
      },
      evalImports: function(b) {
        var c, d, e = this.rules;
        if (e) for (c = 0; c < e.length; c++) e[c] instanceof a.Import && (d = e[c].eval(b), d && d.length ? (e.splice.apply(e, [c, 1].concat(d)), c += d.length - 1) : e.splice(c, 1, d), this.resetCache())
      },
      makeImportant: function() {
        return new a.Ruleset(this.selectors, this.rules.map(function(a) {
          return a.makeImportant ? a.makeImportant() : a
        }), this.strictImports)
      },
      matchArgs: function(a) {
        return ! a || 0 === a.length
      },
      matchCondition: function(b, c) {
        var d = this.selectors[this.selectors.length - 1];
        return d.evaldCondition ? d.condition && !d.condition.eval(new a.evalEnv(c, c.frames)) ? !1 : !0 : !1
      },
      resetCache: function() {
        this._rulesets = null,
        this._variables = null,
        this._lookups = {}
      },
      variables: function() {
        return this._variables || (this._variables = this.rules ? this.rules.reduce(function(b, c) {
          return c instanceof a.Rule && c.variable === !0 && (b[c.name] = c),
          b
        },
        {}) : {}),
        this._variables
      },
      variable: function(a) {
        return this.variables()[a]
      },
      rulesets: function() {
        if (!this.rules) return null;
        var b, c, d = a.Ruleset,
        e = a.mixin.Definition,
        f = [],
        g = this.rules,
        h = g.length;
        for (b = 0; h > b; b++) c = g[b],
        (c instanceof d || c instanceof e) && f.push(c);
        return f
      },
      prependRule: function(a) {
        var b = this.rules;
        b ? b.unshift(a) : this.rules = [a]
      },
      find: function(b, c) {
        c = c || this;
        var d, e = [],
        f = b.toCSS();
        return f in this._lookups ? this._lookups[f] : (this.rulesets().forEach(function(f) {
          if (f !== c) for (var g = 0; g < f.selectors.length; g++) if (d = b.match(f.selectors[g])) {
            b.elements.length > d ? Array.prototype.push.apply(e, f.find(new a.Selector(b.elements.slice(d)), c)) : e.push(f);
            break
          }
        }), this._lookups[f] = e, e)
      },
      genCSS: function(b, c) {
        var d, e, f, g, h, i, j = [],
        k = [];
        b.tabLevel = b.tabLevel || 0,
        this.root || b.tabLevel++;
        var l, m = b.compress ? "": Array(b.tabLevel + 1).join("  "),
        n = b.compress ? "": Array(b.tabLevel).join("  ");
        for (d = 0; d < this.rules.length; d++) h = this.rules[d],
        h.rules || h instanceof a.Media || h instanceof a.Directive || this.root && h instanceof a.Comment ? k.push(h) : j.push(h);
        if (!this.root) {
          g = a.debugInfo(b, this, n),
          g && (c.add(g), c.add(n));
          var o, p = this.paths,
          q = p.length;
          for (l = b.compress ? ",": ",\n" + n, d = 0; q > d; d++) if (i = p[d], o = i.length) for (d > 0 && c.add(l), b.firstSelector = !0, i[0].genCSS(b, c), b.firstSelector = !1, e = 1; o > e; e++) i[e].genCSS(b, c);
          c.add((b.compress ? "{": " {\n") + m)
        }
        for (d = 0; d < j.length; d++) h = j[d],
        d + 1 !== j.length || this.root && 0 !== k.length && !this.firstRoot || (b.lastRule = !0),
        h.genCSS ? h.genCSS(b, c) : h.value && c.add(h.value.toString()),
        b.lastRule ? b.lastRule = !1 : c.add(b.compress ? "": "\n" + m);
        if (this.root || (c.add(b.compress ? "}": "\n" + n + "}"), b.tabLevel--), l = (b.compress ? "": "\n") + (this.root ? m: n), f = k.length) for (j.length && l && c.add(l), k[0].genCSS(b, c), d = 1; f > d; d++) l && c.add(l),
        k[d].genCSS(b, c);
        c.isEmpty() || b.compress || !this.firstRoot || c.add("\n")
      },
      toCSS: a.toCSS,
      markReferenced: function() {
        if (this.selectors) for (var a = 0; a < this.selectors.length; a++) this.selectors[a].markReferenced()
      },
      joinSelectors: function(a, b, c) {
        for (var d = 0; d < c.length; d++) this.joinSelector(a, b, c[d])
      },
      joinSelector: function(b, c, d) {
        var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s;
        for (e = 0; e < d.elements.length; e++) j = d.elements[e],
        "&" === j.value && (h = !0);
        if (h) {
          for (r = [], i = [[]], e = 0; e < d.elements.length; e++) if (j = d.elements[e], "&" !== j.value) r.push(j);
          else {
            for (s = [], r.length > 0 && this.mergeElementsOnToSelectors(r, i), f = 0; f < i.length; f++) if (k = i[f], 0 === c.length) k.length > 0 && (k[0].elements = k[0].elements.slice(0), k[0].elements.push(new a.Element(j.combinator, "", j.index, j.currentFileInfo))),
            s.push(k);
            else for (g = 0; g < c.length; g++) l = c[g],
            m = [],
            n = [],
            p = !0,
            k.length > 0 ? (m = k.slice(0), q = m.pop(), o = d.createDerived(q.elements.slice(0)), p = !1) : o = d.createDerived([]),
            l.length > 1 && (n = n.concat(l.slice(1))),
            l.length > 0 && (p = !1, o.elements.push(new a.Element(j.combinator, l[0].elements[0].value, j.index, j.currentFileInfo)), o.elements = o.elements.concat(l[0].elements.slice(1))),
            p || m.push(o),
            m = m.concat(n),
            s.push(m);
            i = s,
            r = []
          }
          for (r.length > 0 && this.mergeElementsOnToSelectors(r, i), e = 0; e < i.length; e++) i[e].length > 0 && b.push(i[e])
        } else if (c.length > 0) for (e = 0; e < c.length; e++) b.push(c[e].concat(d));
        else b.push([d])
      },
      mergeElementsOnToSelectors: function(b, c) {
        var d, e;
        if (0 === c.length) return void c.push([new a.Selector(b)]);
        for (d = 0; d < c.length; d++) e = c[d],
        e.length > 0 ? e[e.length - 1] = e[e.length - 1].createDerived(e[e.length - 1].elements.concat(b)) : e.push(new a.Selector(b))
      }
    }
  } (c("../tree")),
  function(a) {
    a.Selector = function(a, b, c, d, e, f) {
      this.elements = a,
      this.extendList = b,
      this.condition = c,
      this.currentFileInfo = e || {},
      this.isReferenced = f,
      c || (this.evaldCondition = !0)
    },
    a.Selector.prototype = {
      type: "Selector",
      accept: function(a) {
        this.elements && (this.elements = a.visitArray(this.elements)),
        this.extendList && (this.extendList = a.visitArray(this.extendList)),
        this.condition && (this.condition = a.visit(this.condition))
      },
      createDerived: function(b, c, d) {
        d = null != d ? d: this.evaldCondition;
        var e = new a.Selector(b, c || this.extendList, null, this.index, this.currentFileInfo, this.isReferenced);
        return e.evaldCondition = d,
        e.mediaEmpty = this.mediaEmpty,
        e
      },
      match: function(a) {
        var b, c, d = this.elements,
        e = d.length;
        if (a.CacheElements(), b = a._elements.length, 0 === b || b > e) return 0;
        for (c = 0; b > c; c++) if (d[c].value !== a._elements[c]) return 0;
        return b
      },
      CacheElements: function() {
        var a, b, c, d = "";
        if (!this._elements) {
          for (a = this.elements.length, c = 0; a > c; c++) if (b = this.elements[c], d += b.combinator.value, b.value.value) {
            if ("string" != typeof b.value.value) {
              d = "";
              break
            }
            d += b.value.value
          } else d += b.value;
          this._elements = d.match(/[,&#\.\w-]([\w-]|(\\.))*/g),
          this._elements ? "&" === this._elements[0] && this._elements.shift() : this._elements = []
        }
      },
      isJustParentSelector: function() {
        return ! this.mediaEmpty && 1 === this.elements.length && "&" === this.elements[0].value && (" " === this.elements[0].combinator.value || "" === this.elements[0].combinator.value)
      },
      eval: function(a) {
        var b = this.condition && this.condition.eval(a),
        c = this.elements,
        d = this.extendList;
        return c = c && c.map(function(b) {
          return b.eval(a)
        }),
        d = d && d.map(function(b) {
          return b.eval(a)
        }),
        this.createDerived(c, d, b)
      },
      genCSS: function(a, b) {
        var c, d;
        if (a && a.firstSelector || "" !== this.elements[0].combinator.value || b.add(" ", this.currentFileInfo, this.index), !this._css) for (c = 0; c < this.elements.length; c++) d = this.elements[c],
        d.genCSS(a, b)
      },
      toCSS: a.toCSS,
      markReferenced: function() {
        this.isReferenced = !0
      },
      getIsReferenced: function() {
        return ! this.currentFileInfo.reference || this.isReferenced
      },
      getIsOutput: function() {
        return this.evaldCondition
      }
    }
  } (c("../tree")),
  function(a) {
    a.UnicodeDescriptor = function(a) {
      this.value = a
    },
    a.UnicodeDescriptor.prototype = {
      type: "UnicodeDescriptor",
      genCSS: function(a, b) {
        b.add(this.value)
      },
      toCSS: a.toCSS,
      eval: function() {
        return this
      }
    }
  } (c("../tree")),
  function(a) {
    a.URL = function(a, b, c) {
      this.value = a,
      this.currentFileInfo = b,
      this.isEvald = c
    },
    a.URL.prototype = {
      type: "Url",
      accept: function(a) {
        this.value = a.visit(this.value)
      },
      genCSS: function(a, b) {
        b.add("url("),
        this.value.genCSS(a, b),
        b.add(")")
      },
      toCSS: a.toCSS,
      eval: function(b) {
        var c, d = this.value.eval(b);
        if (!this.isEvald && (c = this.currentFileInfo && this.currentFileInfo.rootpath, c && "string" == typeof d.value && b.isPathRelative(d.value) && (d.quote || (c = c.replace(/[\(\)'"\s]/g,
        function(a) {
          return "\\" + a
        })), d.value = c + d.value), d.value = b.normalizePath(d.value), b.urlArgs && !d.value.match(/^\s*data:/))) {
          var e = -1 === d.value.indexOf("?") ? "?": "&",
          f = e + b.urlArgs; - 1 !== d.value.indexOf("#") ? d.value = d.value.replace("#", f + "#") : d.value += f
        }
        return new a.URL(d, this.currentFileInfo, !0)
      }
    }
  } (c("../tree")),
  function(a) {
    a.Value = function(a) {
      this.value = a
    },
    a.Value.prototype = {
      type: "Value",
      accept: function(a) {
        this.value && (this.value = a.visitArray(this.value))
      },
      eval: function(b) {
        return 1 === this.value.length ? this.value[0].eval(b) : new a.Value(this.value.map(function(a) {
          return a.eval(b)
        }))
      },
      genCSS: function(a, b) {
        var c;
        for (c = 0; c < this.value.length; c++) this.value[c].genCSS(a, b),
        c + 1 < this.value.length && b.add(a && a.compress ? ",": ", ")
      },
      toCSS: a.toCSS
    }
  } (c("../tree")),
  function(a) {
    a.Variable = function(a, b, c) {
      this.name = a,
      this.index = b,
      this.currentFileInfo = c || {}
    },
    a.Variable.prototype = {
      type: "Variable",
      eval: function(b) {
        var c, d = this.name;
        if (0 === d.indexOf("@@") && (d = "@" + new a.Variable(d.slice(1)).eval(b).value), this.evaluating) throw {
          type: "Name",
          message: "Recursive variable definition for " + d,
          filename: this.currentFileInfo.file,
          index: this.index
        };
        if (this.evaluating = !0, c = a.find(b.frames,
        function(a) {
          var c = a.variable(d);
          return c ? c.value.eval(b) : void 0
        })) return this.evaluating = !1,
        c;
        throw {
          type: "Name",
          message: "variable " + d + " is undefined",
          filename: this.currentFileInfo.filename,
          index: this.index
        }
      }
    }
  } (c("../tree")),
  function(a) {
    var b = ["paths", "optimization", "files", "contents", "contentsIgnoredChars", "relativeUrls", "rootpath", "strictImports", "insecure", "dumpLineNumbers", "compress", "processImports", "syncImport", "javascriptEnabled", "mime", "useFileCache", "currentFileInfo"];
    a.parseEnv = function(a) {
      if (d(a, this, b), this.contents || (this.contents = {}), this.contentsIgnoredChars || (this.contentsIgnoredChars = {}), this.files || (this.files = {}), "string" == typeof this.paths && (this.paths = [this.paths]), !this.currentFileInfo) {
        var c = a && a.filename || "input",
        e = c.replace(/[^\/\\]*$/, "");
        a && (a.filename = null),
        this.currentFileInfo = {
          filename: c,
          relativeUrls: this.relativeUrls,
          rootpath: a && a.rootpath || "",
          currentDirectory: e,
          entryPath: e,
          rootFilename: c
        }
      }
    };
    var c = ["silent", "verbose", "compress", "yuicompress", "ieCompat", "strictMath", "strictUnits", "cleancss", "sourceMap", "importMultiple", "urlArgs"];
    a.evalEnv = function(a, b) {
      d(a, this, c),
      this.frames = b || []
    },
    a.evalEnv.prototype.inParenthesis = function() {
      this.parensStack || (this.parensStack = []),
      this.parensStack.push(!0)
    },
    a.evalEnv.prototype.outOfParenthesis = function() {
      this.parensStack.pop()
    },
    a.evalEnv.prototype.isMathOn = function() {
      return this.strictMath ? this.parensStack && this.parensStack.length: !0
    },
    a.evalEnv.prototype.isPathRelative = function(a) {
      return ! /^(?:[a-z-]+:|\/)/.test(a)
    },
    a.evalEnv.prototype.normalizePath = function(a) {
      var b, c = a.split("/").reverse();
      for (a = []; 0 !== c.length;) switch (b = c.pop()) {
      case ".":
        break;
      case "..":
        0 === a.length || ".." === a[a.length - 1] ? a.push(b) : a.pop();
        break;
      default:
        a.push(b)
      }
      return a.join("/")
    };
    var d = function(a, b, c) {
      if (a) for (var d = 0; d < c.length; d++) a.hasOwnProperty(c[d]) && (b[c[d]] = a[c[d]])
    }
  } (c("./tree")),
  function(a) {
    function b(a) {
      return a
    }
    function c(a, b) {
      var d, e;
      for (d in a) if (a.hasOwnProperty(d)) switch (e = a[d], typeof e) {
      case "function":
        e.prototype && e.prototype.type && (e.prototype.typeIndex = b++);
        break;
      case "object":
        b = c(e, b)
      }
      return b
    }
    var d = {
      visitDeeper: !0
    },
    e = !1;
    a.visitor = function(b) {
      this._implementation = b,
      this._visitFnCache = [],
      e || (c(a, 1), e = !0)
    },
    a.visitor.prototype = {
      visit: function(a) {
        if (!a) return a;
        var c = a.typeIndex;
        if (!c) return a;
        var e, f = this._visitFnCache,
        g = this._implementation,
        h = c << 1,
        i = 1 | h,
        j = f[h],
        k = f[i],
        l = d;
        if (l.visitDeeper = !0, j || (e = "visit" + a.type, j = g[e] || b, k = g[e + "Out"] || b, f[h] = j, f[i] = k), j !== b) {
          var m = j.call(g, a, l);
          g.isReplacing && (a = m)
        }
        return l.visitDeeper && a && a.accept && a.accept(this),
        k != b && k.call(g, a),
        a
      },
      visitArray: function(a, b) {
        if (!a) return a;
        var c, d = a.length;
        if (b || !this._implementation.isReplacing) {
          for (c = 0; d > c; c++) this.visit(a[c]);
          return a
        }
        var e = [];
        for (c = 0; d > c; c++) {
          var f = this.visit(a[c]);
          f.splice ? f.length && this.flatten(f, e) : e.push(f)
        }
        return e
      },
      flatten: function(a, b) {
        b || (b = []);
        var c, d, e, f, g, h;
        for (d = 0, c = a.length; c > d; d++) if (e = a[d], e.splice) for (g = 0, f = e.length; f > g; g++) h = e[g],
        h.splice ? h.length && this.flatten(h, b) : b.push(h);
        else b.push(e);
        return b
      }
    }
  } (c("./tree")),
  function(a) {
    a.importVisitor = function(b, c, d, e, f) {
      if (this._visitor = new a.visitor(this), this._importer = b, this._finish = c, this.env = d || new a.evalEnv, this.importCount = 0, this.onceFileDetectionMap = e || {},
      this.recursionDetector = {},
      f) for (var g in f) f.hasOwnProperty(g) && (this.recursionDetector[g] = !0)
    },
    a.importVisitor.prototype = {
      isReplacing: !0,
      run: function(a) {
        var b;
        try {
          this._visitor.visit(a)
        } catch(c) {
          b = c
        }
        this.isFinished = !0,
        0 === this.importCount && this._finish(b)
      },
      visitImport: function(b, c) {
        var d, e = this,
        f = b.options.inline;
        if (!b.css || f) {
          try {
            d = b.evalForImport(this.env)
          } catch(g) {
            g.filename || (g.index = b.index, g.filename = b.currentFileInfo.filename),
            b.css = !0,
            b.error = g
          }
          if (d && (!d.css || f)) {
            b = d,
            this.importCount++;
            var h = new a.evalEnv(this.env, this.env.frames.slice(0));
            b.options.multiple && (h.importMultiple = !0),
            this._importer.push(b.getPath(), b.currentFileInfo, b.options,
            function(c, d, g, i) {
              c && !c.filename && (c.index = b.index, c.filename = b.currentFileInfo.filename),
              h.importMultiple || (b.skip = g ? !0 : function() {
                return i in e.onceFileDetectionMap ? !0 : (e.onceFileDetectionMap[i] = !0, !1)
              });
              var j = function(a) {
                e.importCount--,
                0 === e.importCount && e.isFinished && e._finish(a)
              };
              if (d) {
                b.root = d,
                b.importedFilename = i;
                var k = g || i in e.recursionDetector;
                if (!f && (h.importMultiple || !k)) return e.recursionDetector[i] = !0,
                void new a.importVisitor(e._importer, j, h, e.onceFileDetectionMap, e.recursionDetector).run(d)
              }
              j()
            })
          }
        }
        return c.visitDeeper = !1,
        b
      },
      visitRule: function(a, b) {
        return b.visitDeeper = !1,
        a
      },
      visitDirective: function(a) {
        return this.env.frames.unshift(a),
        a
      },
      visitDirectiveOut: function() {
        this.env.frames.shift()
      },
      visitMixinDefinition: function(a) {
        return this.env.frames.unshift(a),
        a
      },
      visitMixinDefinitionOut: function() {
        this.env.frames.shift()
      },
      visitRuleset: function(a) {
        return this.env.frames.unshift(a),
        a
      },
      visitRulesetOut: function() {
        this.env.frames.shift()
      },
      visitMedia: function(a) {
        return this.env.frames.unshift(a.ruleset),
        a
      },
      visitMediaOut: function() {
        this.env.frames.shift()
      }
    }
  } (c("./tree")),
  function(a) {
    a.joinSelectorVisitor = function() {
      this.contexts = [[]],
      this._visitor = new a.visitor(this)
    },
    a.joinSelectorVisitor.prototype = {
      run: function(a) {
        return this._visitor.visit(a)
      },
      visitRule: function(a, b) {
        b.visitDeeper = !1
      },
      visitMixinDefinition: function(a, b) {
        b.visitDeeper = !1
      },
      visitRuleset: function(a) {
        var b, c = this.contexts[this.contexts.length - 1],
        d = [];
        this.contexts.push(d),
        a.root || (b = a.selectors, b && (b = b.filter(function(a) {
          return a.getIsOutput()
        }), a.selectors = b.length ? b: b = null, b && a.joinSelectors(d, c, b)), b || (a.rules = null), a.paths = d)
      },
      visitRulesetOut: function() {
        this.contexts.length = this.contexts.length - 1
      },
      visitMedia: function(a) {
        var b = this.contexts[this.contexts.length - 1];
        a.rules[0].root = 0 === b.length || b[0].multiMedia
      }
    }
  } (c("./tree")),
  function(a) {
    a.toCSSVisitor = function(b) {
      this._visitor = new a.visitor(this),
      this._env = b
    },
    a.toCSSVisitor.prototype = {
      isReplacing: !0,
      run: function(a) {
        return this._visitor.visit(a)
      },
      visitRule: function(a) {
        return a.variable ? [] : a
      },
      visitMixinDefinition: function(a) {
        return a.frames = [],
        []
      },
      visitExtend: function() {
        return []
      },
      visitComment: function(a) {
        return a.isSilent(this._env) ? [] : a
      },
      visitMedia: function(a, b) {
        return a.accept(this._visitor),
        b.visitDeeper = !1,
        a.rules.length ? a: []
      },
      visitDirective: function(b) {
        if (b.currentFileInfo.reference && !b.isReferenced) return [];
        if ("@charset" === b.name) {
          if (this.charset) {
            if (b.debugInfo) {
              var c = new a.Comment("/* " + b.toCSS(this._env).replace(/\n/g, "") + " */\n");
              return c.debugInfo = b.debugInfo,
              this._visitor.visit(c)
            }
            return []
          }
          this.charset = !0
        }
        return b
      },
      checkPropertiesInRoot: function(b) {
        for (var c, d = 0; d < b.length; d++) if (c = b[d], c instanceof a.Rule && !c.variable) throw {
          message: "properties must be inside selector blocks, they cannot be in the root.",
          index: c.index,
          filename: c.currentFileInfo ? c.currentFileInfo.filename: null
        }
      },
      visitRuleset: function(b, c) {
        var d, e = [];
        if (b.firstRoot && this.checkPropertiesInRoot(b.rules), b.root) b.accept(this._visitor),
        c.visitDeeper = !1,
        (b.firstRoot || b.rules && b.rules.length > 0) && e.splice(0, 0, b);
        else {
          b.paths && (b.paths = b.paths.filter(function(b) {
            var c;
            for (" " === b[0].elements[0].combinator.value && (b[0].elements[0].combinator = new a.Combinator("")), c = 0; c < b.length; c++) if (b[c].getIsReferenced() && b[c].getIsOutput()) return ! 0;
            return ! 1
          }));
          for (var f = b.rules,
          g = f ? f.length: 0, h = 0; g > h;) d = f[h],
          d && d.rules ? (e.push(this._visitor.visit(d)), f.splice(h, 1), g--) : h++;
          g > 0 ? b.accept(this._visitor) : b.rules = null,
          c.visitDeeper = !1,
          f = b.rules,
          f && (this._mergeRules(f), f = b.rules),
          f && (this._removeDuplicateRules(f), f = b.rules),
          f && f.length > 0 && b.paths.length > 0 && e.splice(0, 0, b)
        }
        return 1 === e.length ? e[0] : e
      },
      _removeDuplicateRules: function(b) {
        if (b) {
          var c, d, e, f = {};
          for (e = b.length - 1; e >= 0; e--) if (d = b[e], d instanceof a.Rule) if (f[d.name]) {
            c = f[d.name],
            c instanceof a.Rule && (c = f[d.name] = [f[d.name].toCSS(this._env)]);
            var g = d.toCSS(this._env); - 1 !== c.indexOf(g) ? b.splice(e, 1) : c.push(g)
          } else f[d.name] = d
        }
      },
      _mergeRules: function(b) {
        if (b) {
          for (var c, d, e, f = {},
          g = 0; g < b.length; g++) d = b[g],
          d instanceof a.Rule && d.merge && (e = [d.name, d.important ? "!": ""].join(","), f[e] ? b.splice(g--, 1) : f[e] = [], f[e].push(d));
          Object.keys(f).map(function(b) {
            function e(b) {
              return new a.Expression(b.map(function(a) {
                return a.value
              }))
            }
            function g(b) {
              return new a.Value(b.map(function(a) {
                return a
              }))
            }
            if (c = f[b], c.length > 1) {
              d = c[0];
              var h = [],
              i = [];
              c.map(function(a) {
                "+" === a.merge && (i.length > 0 && h.push(e(i)), i = []),
                i.push(a)
              }),
              h.push(e(i)),
              d.value = g(h)
            }
          })
        }
      }
    }
  } (c("./tree")),
  function(a) {
    a.extendFinderVisitor = function() {
      this._visitor = new a.visitor(this),
      this.contexts = [],
      this.allExtendsStack = [[]]
    },
    a.extendFinderVisitor.prototype = {
      run: function(a) {
        return a = this._visitor.visit(a),
        a.allExtends = this.allExtendsStack[0],
        a
      },
      visitRule: function(a, b) {
        b.visitDeeper = !1
      },
      visitMixinDefinition: function(a, b) {
        b.visitDeeper = !1
      },
      visitRuleset: function(b) {
        if (!b.root) {
          var c, d, e, f, g = [],
          h = b.rules,
          i = h ? h.length: 0;
          for (c = 0; i > c; c++) b.rules[c] instanceof a.Extend && (g.push(h[c]), b.extendOnEveryPath = !0);
          var j = b.paths;
          for (c = 0; c < j.length; c++) {
            var k = j[c],
            l = k[k.length - 1],
            m = l.extendList;
            for (f = m ? m.slice(0).concat(g) : g, f && (f = f.map(function(a) {
              return a.clone()
            })), d = 0; d < f.length; d++) this.foundExtends = !0,
            e = f[d],
            e.findSelfSelectors(k),
            e.ruleset = b,
            0 === d && (e.firstExtendOnThisSelectorPath = !0),
            this.allExtendsStack[this.allExtendsStack.length - 1].push(e)
          }
          this.contexts.push(b.selectors)
        }
      },
      visitRulesetOut: function(a) {
        a.root || (this.contexts.length = this.contexts.length - 1)
      },
      visitMedia: function(a) {
        a.allExtends = [],
        this.allExtendsStack.push(a.allExtends)
      },
      visitMediaOut: function() {
        this.allExtendsStack.length = this.allExtendsStack.length - 1
      },
      visitDirective: function(a) {
        a.allExtends = [],
        this.allExtendsStack.push(a.allExtends)
      },
      visitDirectiveOut: function() {
        this.allExtendsStack.length = this.allExtendsStack.length - 1
      }
    },
    a.processExtendsVisitor = function() {
      this._visitor = new a.visitor(this)
    },
    a.processExtendsVisitor.prototype = {
      run: function(b) {
        var c = new a.extendFinderVisitor;
        return c.run(b),
        c.foundExtends ? (b.allExtends = b.allExtends.concat(this.doExtendChaining(b.allExtends, b.allExtends)), this.allExtendsStack = [b.allExtends], this._visitor.visit(b)) : b
      },
      doExtendChaining: function(b, c, d) {
        var e, f, g, h, i, j, k, l, m = [],
        n = this;
        for (d = d || 0, e = 0; e < b.length; e++) for (f = 0; f < c.length; f++) j = b[e],
        k = c[f],
        j.parent_ids.indexOf(k.object_id) >= 0 || (i = [k.selfSelectors[0]], g = n.findMatch(j, i), g.length && j.selfSelectors.forEach(function(b) {
          h = n.extendSelector(g, i, b),
          l = new a.Extend(k.selector, k.option, 0),
          l.selfSelectors = h,
          h[h.length - 1].extendList = [l],
          m.push(l),
          l.ruleset = k.ruleset,
          l.parent_ids = l.parent_ids.concat(k.parent_ids, j.parent_ids),
          k.firstExtendOnThisSelectorPath && (l.firstExtendOnThisSelectorPath = !0, k.ruleset.paths.push(h))
        }));
        if (m.length) {
          if (this.extendChainCount++, d > 100) {
            var o = "{unable to calculate}",
            p = "{unable to calculate}";
            try {
              o = m[0].selfSelectors[0].toCSS(),
              p = m[0].selector.toCSS()
            } catch(q) {}
            throw {
              message: "extend circular reference detected. One of the circular extends is currently:" + o + ":extend(" + p + ")"
            }
          }
          return m.concat(n.doExtendChaining(m, c, d + 1))
        }
        return m
      },
      visitRule: function(a, b) {
        b.visitDeeper = !1
      },
      visitMixinDefinition: function(a, b) {
        b.visitDeeper = !1
      },
      visitSelector: function(a, b) {
        b.visitDeeper = !1
      },
      visitRuleset: function(a) {
        if (!a.root) {
          var b, c, d, e, f = this.allExtendsStack[this.allExtendsStack.length - 1],
          g = [],
          h = this;
          for (d = 0; d < f.length; d++) for (c = 0; c < a.paths.length; c++) if (e = a.paths[c], !a.extendOnEveryPath) {
            var i = e[e.length - 1].extendList;
            i && i.length || (b = this.findMatch(f[d], e), b.length && f[d].selfSelectors.forEach(function(a) {
              g.push(h.extendSelector(b, e, a))
            }))
          }
          a.paths = a.paths.concat(g)
        }
      },
      findMatch: function(a, b) {
        var c, d, e, f, g, h, i, j = this,
        k = a.selector.elements,
        l = [],
        m = [];
        for (c = 0; c < b.length; c++) for (d = b[c], e = 0; e < d.elements.length; e++) for (f = d.elements[e], (a.allowBefore || 0 === c && 0 === e) && l.push({
          pathIndex: c,
          index: e,
          matched: 0,
          initialCombinator: f.combinator
        }), h = 0; h < l.length; h++) i = l[h],
        g = f.combinator.value,
        "" === g && 0 === e && (g = " "),
        !j.isElementValuesEqual(k[i.matched].value, f.value) || i.matched > 0 && k[i.matched].combinator.value !== g ? i = null: i.matched++,
        i && (i.finished = i.matched === k.length, i.finished && !a.allowAfter && (e + 1 < d.elements.length || c + 1 < b.length) && (i = null)),
        i ? i.finished && (i.length = k.length, i.endPathIndex = c, i.endPathElementIndex = e + 1, l.length = 0, m.push(i)) : (l.splice(h, 1), h--);
        return m
      },
      isElementValuesEqual: function(b, c) {
        if ("string" == typeof b || "string" == typeof c) return b === c;
        if (b instanceof a.Attribute) return b.op !== c.op || b.key !== c.key ? !1 : b.value && c.value ? (b = b.value.value || b.value, c = c.value.value || c.value, b === c) : b.value || c.value ? !1 : !0;
        if (b = b.value, c = c.value, b instanceof a.Selector) {
          if (! (c instanceof a.Selector) || b.elements.length !== c.elements.length) return ! 1;
          for (var d = 0; d < b.elements.length; d++) {
            if (b.elements[d].combinator.value !== c.elements[d].combinator.value && (0 !== d || (b.elements[d].combinator.value || " ") !== (c.elements[d].combinator.value || " "))) return ! 1;
            if (!this.isElementValuesEqual(b.elements[d].value, c.elements[d].value)) return ! 1
          }
          return ! 0
        }
        return ! 1
      },
      extendSelector: function(b, c, d) {
        var e, f, g, h, i, j = 0,
        k = 0,
        l = [];
        for (e = 0; e < b.length; e++) h = b[e],
        f = c[h.pathIndex],
        g = new a.Element(h.initialCombinator, d.elements[0].value, d.elements[0].index, d.elements[0].currentFileInfo),
        h.pathIndex > j && k > 0 && (l[l.length - 1].elements = l[l.length - 1].elements.concat(c[j].elements.slice(k)), k = 0, j++),
        i = f.elements.slice(k, h.index).concat([g]).concat(d.elements.slice(1)),
        j === h.pathIndex && e > 0 ? l[l.length - 1].elements = l[l.length - 1].elements.concat(i) : (l = l.concat(c.slice(j, h.pathIndex)), l.push(new a.Selector(i))),
        j = h.endPathIndex,
        k = h.endPathElementIndex,
        k >= c[j].elements.length && (k = 0, j++);
        return j < c.length && k > 0 && (l[l.length - 1].elements = l[l.length - 1].elements.concat(c[j].elements.slice(k)), j++),
        l = l.concat(c.slice(j, c.length))
      },
      visitRulesetOut: function() {},
      visitMedia: function(a) {
        var b = a.allExtends.concat(this.allExtendsStack[this.allExtendsStack.length - 1]);
        b = b.concat(this.doExtendChaining(b, a.allExtends)),
        this.allExtendsStack.push(b)
      },
      visitMediaOut: function() {
        this.allExtendsStack.length = this.allExtendsStack.length - 1
      },
      visitDirective: function(a) {
        var b = a.allExtends.concat(this.allExtendsStack[this.allExtendsStack.length - 1]);
        b = b.concat(this.doExtendChaining(b, a.allExtends)),
        this.allExtendsStack.push(b)
      },
      visitDirectiveOut: function() {
        this.allExtendsStack.length = this.allExtendsStack.length - 1
      }
    }
  } (c("./tree")),
  function(a) {
    a.sourceMapOutput = function(a) {
      this._css = [],
      this._rootNode = a.rootNode,
      this._writeSourceMap = a.writeSourceMap,
      this._contentsMap = a.contentsMap,
      this._contentsIgnoredCharsMap = a.contentsIgnoredCharsMap,
      this._sourceMapFilename = a.sourceMapFilename,
      this._outputFilename = a.outputFilename,
      this._sourceMapURL = a.sourceMapURL,
      a.sourceMapBasepath && (this._sourceMapBasepath = a.sourceMapBasepath.replace(/\\/g, "/")),
      this._sourceMapRootpath = a.sourceMapRootpath,
      this._outputSourceFiles = a.outputSourceFiles,
      this._sourceMapGeneratorConstructor = a.sourceMapGenerator || c("source-map").SourceMapGenerator,
      this._sourceMapRootpath && "/" !== this._sourceMapRootpath.charAt(this._sourceMapRootpath.length - 1) && (this._sourceMapRootpath += "/"),
      this._lineNumber = 0,
      this._column = 0
    },
    a.sourceMapOutput.prototype.normalizeFilename = function(a) {
      return a = a.replace(/\\/g, "/"),
      this._sourceMapBasepath && 0 === a.indexOf(this._sourceMapBasepath) && (a = a.substring(this._sourceMapBasepath.length), ("\\" === a.charAt(0) || "/" === a.charAt(0)) && (a = a.substring(1))),
      (this._sourceMapRootpath || "") + a
    },
    a.sourceMapOutput.prototype.add = function(a, b, c, d) {
      if (a) {
        var e, f, g, h, i;
        if (b) {
          var j = this._contentsMap[b.filename];
          this._contentsIgnoredCharsMap[b.filename] && (c -= this._contentsIgnoredCharsMap[b.filename], 0 > c && (c = 0), j = j.slice(this._contentsIgnoredCharsMap[b.filename])),
          j = j.substring(0, c),
          f = j.split("\n"),
          h = f[f.length - 1]
        }
        if (e = a.split("\n"), g = e[e.length - 1], b) if (d) for (i = 0; i < e.length; i++) this._sourceMapGenerator.addMapping({
          generated: {
            line: this._lineNumber + i + 1,
            column: 0 === i ? this._column: 0
          },
          original: {
            line: f.length + i,
            column: 0 === i ? h.length: 0
          },
          source: this.normalizeFilename(b.filename)
        });
        else this._sourceMapGenerator.addMapping({
          generated: {
            line: this._lineNumber + 1,
            column: this._column
          },
          original: {
            line: f.length,
            column: h.length
          },
          source: this.normalizeFilename(b.filename)
        });
        1 === e.length ? this._column += g.length: (this._lineNumber += e.length - 1, this._column = g.length),
        this._css.push(a)
      }
    },
    a.sourceMapOutput.prototype.isEmpty = function() {
      return 0 === this._css.length
    },
    a.sourceMapOutput.prototype.toCSS = function(a) {
      if (this._sourceMapGenerator = new this._sourceMapGeneratorConstructor({
        file: this._outputFilename,
        sourceRoot: null
      }), this._outputSourceFiles) for (var b in this._contentsMap) if (this._contentsMap.hasOwnProperty(b)) {
        var d = this._contentsMap[b];
        this._contentsIgnoredCharsMap[b] && (d = d.slice(this._contentsIgnoredCharsMap[b])),
        this._sourceMapGenerator.setSourceContent(this.normalizeFilename(b), d)
      }
      if (this._rootNode.genCSS(a, this), this._css.length > 0) {
        var e, f = JSON.stringify(this._sourceMapGenerator.toJSON());
        this._sourceMapURL ? e = this._sourceMapURL: this._sourceMapFilename && (e = this.normalizeFilename(this._sourceMapFilename)),
        this._writeSourceMap ? this._writeSourceMap(f) : e = "data:application/json;base64," + c("./encoder.js").encodeBase64(f),
        e && this._css.push("/*# sourceMappingURL=" + e + " */")
      }
      return this._css.join("")
    }
  } (c("./tree"));
  var y = /^(file|chrome(-extension)?|resource|qrc|app):/.test(location.protocol);
  w.env = w.env || ("127.0.0.1" == location.hostname || "0.0.0.0" == location.hostname || "localhost" == location.hostname || location.port && location.port.length > 0 || y ? "development": "production");
  var z = {
    debug: 3,
    info: 2,
    errors: 1,
    none: 0
  };
  if (w.logLevel = "undefined" != typeof w.logLevel ? w.logLevel: "development" === w.env ? z.debug: z.errors, w.async = w.async || !1, w.fileAsync = w.fileAsync || !1, w.poll = w.poll || (y ? 1e3: 1500), w.functions) for (var A in w.functions) w.functions.hasOwnProperty(A) && (w.tree.functions[A] = w.functions[A]);
  var B = /!dumpLineNumbers:(comments|mediaquery|all)/.exec(location.hash);
  B && (w.dumpLineNumbers = B[1]);
  var C = /^text\/(x-)?less$/,
  D = null,
  E = {};
  if (w.watch = function() {
    return w.watchMode || (w.env = "development", v()),
    this.watchMode = !0,
    !0
  },
  w.unwatch = function() {
    return clearInterval(w.watchTimer),
    this.watchMode = !1,
    !1
  },
  /!watch/.test(location.hash) && w.watch(), "development" != w.env) try {
    D = "undefined" == typeof a.localStorage ? null: a.localStorage
  } catch(F) {}
  var G = document.getElementsByTagName("link");
  w.sheets = [];
  for (var H = 0; H < G.length; H++)("stylesheet/less" === G[H].rel || G[H].rel.match(/stylesheet/) && G[H].type.match(C)) && w.sheets.push(G[H]);
  w.modifyVars = function(a) {
    w.refresh(!1, a)
  },
  w.refresh = function(a, b) {
    var c, e;
    c = e = new Date,
    u(function(a, b, f, i, k) {
      if (a) return j(a, i.href);
      if (k.local) d("loading " + i.href + " from cache.", z.info);
      else {
        d("parsed " + i.href + " successfully.", z.debug);
        var l = b.toCSS(w);
        l = h(l),
        g(l, i, k.lastModified)
      }
      d("css for " + i.href + " generated in " + (new Date - e) + "ms", z.info),
      0 === k.remaining && d("less has finished. css generated in " + (new Date - c) + "ms", z.info),
      e = new Date
    },
    a, b),
    n(b)
  },
  w.refreshStyles = n,
  w.Parser.fileLoader = s,
  w.refresh("development" === w.env),
  "function" == typeof define && define.amd && define(function() {
    return w
  })
} (window);