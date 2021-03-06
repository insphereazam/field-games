((function() {
    (function(a) {
        var b;
        return b = {
            edit: function(b) {
                return this.each(function() {
                    return a(this).attr("contentEditable", b || !1)
                })
            },
            save: function(b) {
                return this.each(function() {
                    return b(a(this).attr("id"), a(this).html())
                })
            },
            createlink: function() {
                var a;
                return a = prompt("Enter URL:", "http://"), document.execCommand("createlink", !1, a)
            },
            insertimage: function() {
                var a;
                return a = prompt("Enter Image URL:", "http://"), document.execCommand("insertimage", !1, a)
            },
            formatblock: function(a) {
                return document.execCommand("formatblock", null, a)
            },
            init: function(c) {
                var d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z;
                p = c || {}, o = [
                    [{
                        name: "bold",
                        label: "<span style='font-weight:bold;'>B</span>",
                        title: "Bold (Ctrl+B)",
                        classname: "toolbar_bold"
                    }, {
                        name: "italic",
                        label: "<span style='font-style:italic;'>I</span>",
                        title: "Italic (Ctrl+I)",
                        classname: "toolbar_italic"
                    }, {
                        name: "underline",
                        label: "<span style='text-decoration:underline!important;'>U</span>",
                        title: "Underline (Ctrl+U)",
                        classname: "toolbar_underline"
                    }, {
                        name: "strikethrough",
                        label: "<span style='text-shadow:none;text-decoration:line-through;'>S</span>",
                        title: "Strikethrough",
                        classname: "toolbar_strikethrough"
                    }, {
                        name: "removeFormat",
                        label: "<i class='icon-minus'></i>",
                        title: "Remove Formating (Ctrl+M)",
                        classname: "toolbar_remove"
                    }],
                    [{
                        name: "fontname",
                        label: "F <span class='caret'></span>",
                        title: "Select font name",
                        classname: "toolbar_fontname dropdown-toggle",
                        dropdown: !0
                    }],
                    [{
                        name: "FontSize",
                        label: "<span style='font:bold 16px;'>A</span><span style='font-size:8px;'>A</span> <span class='caret'></span>",
                        title: "Select font size",
                        classname: "toolbar_fontsize dropdown-toggle",
                        dropdown: !0
                    }],
                    [{
                        name: "forecolor",
                        label: "<div style='color:#ff0000;'>A <span class='caret'></span></div>",
                        title: "Select font color",
                        classname: "toolbar_forecolor dropdown-toggle",
                        dropdown: !0
                    }],
                    [{
                        name: "backcolor",
                        label: "<div style='display:inline-block;margin:3px;width:15px;height:12px;background-color:#0000ff;'></div> <span class='caret'></span>",
                        title: "Select background color",
                        classname: "toolbar_bgcolor dropdown-toggle",
                        dropdown: !0
                    }],
                    [{
                        name: "createlink",
                        label: "<i class='icon-list-alt' style='margin-top:2px;'></i>",
                        title: "Link to a web page (Ctrl+L)",
                        userinput: "yes",
                        classname: "toolbar_link"
                    }, {
                        name: "insertimage",
                        label: "<i style='margin-top:2px;' class='icon-picture'></i>",
                        title: "Insert an image (Ctrl+G)",
                        userinput: "yes",
                        classname: "toolbar_image"
                    }, {
                        name: "insertorderedlist",
                        label: "<i class='icon-list-alt' style='margin-top:2px;'></i>",
                        title: "Insert ordered list",
                        classname: "toolbar_ol"
                    }, {
                        name: "insertunorderedlist",
                        label: "<i class='icon-list' style='margin-top:2px;'></i>",
                        title: "Insert unordered list",
                        classname: "toolbar_ul"
                    }],
                    [{
                        name: "insertparagraph",
                        label: "P",
                        title: "Insert a paragraph (Ctrl+Alt+0)",
                        classname: "toolbar_p",
                        block: "p"
                    }, {
                        name: "insertheading1",
                        label: "H1",
                        title: "Heading 1 (Ctrl+Alt+1)",
                        classname: "toolbar_h1 dropdown-toggle",
                        block: "h1"
                    }, {
                        name: "insertheading2",
                        label: "H2",
                        title: "Heading 2 (Ctrl+Alt+2)",
                        classname: "toolbar_h2",
                        block: "h2"
                    }, {
                        name: "insertheading3",
                        label: "H3",
                        title: "Heading 3 (Ctrl+Alt+3)",
                        classname: "toolbar_h3",
                        block: "h3"
                    }, {
                        name: "insertheading4",
                        label: "H4",
                        title: "Heading 4 (Ctrl+Alt+4)",
                        classname: "toolbar_h4",
                        block: "h4"
                    }],
                    [{
                        name: "blockquote",
                        label: "<i style='margin-top:2px;' class='icon-comment'></i>",
                        title: "Blockquote (Ctrl+Q)",
                        classname: "toolbar_blockquote",
                        block: "blockquote"
                    }, {
                        name: "code",
                        label: "{&nbsp;}",
                        title: "Code (Ctrl+Alt+K)",
                        classname: "toolbar_code",
                        block: "pre"
                    }, {
                        name: "superscript",
                        label: "x<sup>2</sup>",
                        title: "Superscript",
                        classname: "toolbar_superscript"
                    }, {
                        name: "subscript",
                        label: "x<sub>2</sub>",
                        title: "Subscript",
                        classname: "toolbar_subscript"
                    }],
                    [{
                        name: "justifyleft",
                        label: "<i class='icon-align-left' style='margin-top:2px;'></i>",
                        title: "Left justify",
                        classname: "toolbar_justifyleft"
                    }, {
                        name: "justifycenter",
                        label: "<i class='icon-align-center' style='margin-top:2px;'></i>",
                        title: "Center justify",
                        classname: "toolbar_justifycenter"
                    }, {
                        name: "justifyright",
                        label: "<i class='icon-align-right' style='margin-top:2px;'></i>",
                        title: "Right justify",
                        classname: "toolbar_justifyright"
                    }, {
                        name: "justifyfull",
                        label: "<i class='icon-align-justify' style='margin-top:2px;'></i>",
                        title: "Full justify",
                        classname: "toolbar_justifyfull"
                    }]
                ], p.toolbar_selector != null ? d = a(p.toolbar_selector) : (a(this).before("<div id='editor-toolbar'></div>"), d = a("#editor-toolbar")), d.addClass("fresheditor-toolbar"), d.append("<div class='btn-toolbar'></div>"), h = p.excludes || [];
                for (s = 0, w = o.length; s < w; s++) {
                    g = o[s], n = "";
                    for (t = 0, x = g.length; t < x; t++) f = g[t], jQuery.inArray(f.name, h) < 0 && (e = "<a href='#' class='btn toolbar-btn toolbar-cmd " + f.classname + "' title='" + f.title + "' command='" + f.name + "'", f.userinput != null && (e += " userinput='" + f.userinput + "'"), f.block != null && (e += " block='" + f.block + "'"), f.dropdown && (e += " data-toggle='dropdown'"), e += ">" + f.label + "</a>", n += e);
                    a(".btn-toolbar", d).append("<div class='btn-group'>" + n + "</div>")
                }
                a("[data-toggle='dropdown']").removeClass("toolbar-cmd"), k = ["Arial", "Arial Black", "Comic Sans MS", "Courier New", "Georgia", "Helvetica", "Sans Serif", "Tahoma", "Times New Roman", "Trebuchet MS", "Verdana"], j = "";
                for (u = 0, y = k.length; u < y; u++) i = k[u], j += "<li><a href='#' class='fontname-option' style='font-family:" + i + ";'>" + i + "</a></li>";
                a(".toolbar_fontname").after("<ul class='dropdown-menu'>" + j + "</ul>"), a(".fontname-option").on("click", function() {
                    return document.execCommand("fontname", !1, a(this).text()), a(this).closest(".btn-group").removeClass("open"), !1
                }), m = [{
                    size: 1,
                    point: 8
                }, {
                    size: 2,
                    point: 10
                }, {
                    size: 3,
                    point: 12
                }, {
                    size: 4,
                    point: 14
                }, {
                    size: 5,
                    point: 18
                }, {
                    size: 6,
                    point: 24
                }, {
                    size: 7,
                    point: 36
                }], r = "";
                for (v = 0, z = m.length; v < z; v++) l = m[v], r += "<li><a href='#' class='font-option fontsize-option' style='font-size:" + l.point + "px;fontsize='" + l.size + "'>" + l.size + "(" + l.point + "pt)</a></li>";
                return a(".toolbar_fontsize").after("<ul class='dropdown-menu'>" + r + "</ul>"), a("a.fontsize-option").on("click", function() {
                    return document.execCommand("FontSize", !1, a(this).attr("fontsize")), a(this).closest(".btn-group").removeClass("open"), !1
                }), a("a.toolbar_forecolor").after("<ul class='dropdown-menu colorpanel'><input type='text' id='forecolor-input' value='#000000' /><div id='forecolor-picker'></div></ul>"), a("#forecolor-picker").farbtastic(function(b) {
                    return a("#forecolor-input").val(b), document.execCommand("forecolor", !1, b), a(this).closest(".btn-group").removeClass("open"), a(".toolbar_forecolor div").css({
                        color: b
                    }), !1
                }), a("a.toolbar_bgcolor").after("<ul class='dropdown-menu colorpanel'><input type='text' id='bgcolor-input' value='#000000' /><div id='bgcolor-picker'></div></ul>"), a("#bgcolor-picker").farbtastic(function(b) {
                    return a("#bgcolor-input").val(b), document.execCommand("backcolor", !1, b), a(this).closest(".btn-group").removeClass("open"), a(".toolbar_bgcolor div").css({
                        "background-color": b
                    }), !1
                }), a(this).on("focus", function() {
                    var b;
                    return b = a(this), b.data("before", b.html()), b
                }).on("blur keyup paste", function() {
                    var b;
                    return b = a(this), b.data("before") !== b.html() && (b.data("before", b.html()), b.trigger("change")), b
                }), a("a.toolbar-cmd").on("click", function() {
                    var c, d, e, f;
                    d = a(this).attr("command");
                    if (a(this).attr("userinput") === "yes") b[d].apply(this);
                    else if (a(this).attr("block")) b.formatblock.apply(this, ["<" + a(this).attr("block") + ">"]);
                    else if (d === "justifyright" || d === "justifyleft" || d === "justifycenter" || d === "justifyfull") try {
                        document.execCommand(d, !1, null)
                    } catch (g) {
                        if (g && g.result === 2147500037) {
                            f = window.getSelection().getRangeAt(0), e = document.createElement("br"), c = f.startContainer.parentNode;
                            while (c != null && c.contentEditable !== "true") c = c.parentNode;
                            if (!c) throw "Selected node is not editable!";
                            c.insertBefore(e, c.childNodes[0]), document.execCommand(d, !1, null), e.parentNode.removeChild(e)
                        } else console && console.log && console.log(g)
                    } else document.execCommand(d, !1, null);
                    return !1
                }), q = [{
                    keys: "Ctrl+l",
                    method: function() {
                        return b.createlink.apply(this)
                    }
                }, {
                    keys: "Ctrl+g",
                    method: function() {
                        return b.insertimage.apply(this)
                    }
                }, {
                    keys: "Ctrl+Alt+U",
                    method: function() {
                        return document.execCommand("insertunorderedlist", !1, null)
                    }
                }, {
                    keys: "Ctrl+Alt+O",
                    method: function() {
                        return document.execCommand("insertorderedlist", !1, null)
                    }
                }, {
                    keys: "Ctrl+q",
                    method: function() {
                        return b.formatblock.apply(this, ["<blockquote>"])
                    }
                }, {
                    keys: "Ctrl+Alt+k",
                    method: function() {
                        return b.formatblock.apply(this, ["<pre>"])
                    }
                }, {
                    keys: "Ctrl+.",
                    method: function() {
                        return document.execCommand("superscript", !1, null)
                    }
                }, {
                    keys: "Ctrl+Shift+.",
                    method: function() {
                        return document.execCommand("subscript", !1, null)
                    }
                }, {
                    keys: "Ctrl+Alt+0",
                    method: function() {
                        return b.formatblock.apply(this, ["p"])
                    }
                }, {
                    keys: "Ctrl+b",
                    method: function() {
                        return document.execCommand("bold", !1, null)
                    }
                }, {
                    keys: "Ctrl+i",
                    method: function() {
                        return document.execCommand("italic", !1, null)
                    }
                }, {
                    keys: "Ctrl+Alt+1",
                    method: function() {
                        return b.formatblock.apply(this, ["H1"])
                    }
                }, {
                    keys: "Ctrl+Alt+2",
                    method: function() {
                        return b.formatblock.apply(this, ["H2"])
                    }
                }, {
                    keys: "Ctrl+Alt+3",
                    method: function() {
                        return b.formatblock.apply(this, ["H3"])
                    }
                }, {
                    keys: "Ctrl+Alt+4",
                    method: function() {
                        return b.formatblock.apply(this, ["H4"])
                    }
                }, {
                    keys: "Ctrl+m",
                    method: function() {
                        return document.execCommand("removeFormat", !1, null)
                    }
                }, {
                    keys: "Ctrl+u",
                    method: function() {
                        return document.execCommand("underline", !1, null)
                    }
                }, {
                    keys: "tab",
                    method: function() {
                        return document.execCommand("indent", !1, null)
                    }
                }, {
                    keys: "Ctrl+tab",
                    method: function() {
                        return document.execCommand("indent", !1, null)
                    }
                }, {
                    keys: "Shift+tab",
                    method: function() {
                        return document.execCommand("outdent", !1, null)
                    }
                }], a.each(q, function(a, b) {
                    return shortcut.add(b.keys, function() {
                        return b.method(), !1
                    }, {
                        type: "keydown",
                        propagate: !1
                    })
                }), this.each(function() {
                    var b, c, d;
                    b = a(this), c = b.data("fresheditor"), d = a("<div/>", {
                        text: b.attr("title")
                    });
                    if (!c) return a(this).data("fresheditor", {
                        target: b,
                        tooltip: d
                    })
                })
            }
        }, a.fn.freshereditor = function(c) {
            b[c] ? b[c].apply(this, Array.prototype.slice.call(arguments, 1)) : typeof c == "object" || !c ? b.init.apply(this, arguments) : a.error("Method " + c + " does not exist on jQuery.contentEditable")
        }
    })(jQuery)
})).call(this);