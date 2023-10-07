if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
! function(t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 2) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")
}(jQuery),
function(t) {
    "use strict";
    t.fn.emulateTransitionEnd = function(e) {
        var i = !1,
            s = this;
        t(this).one("bsTransitionEnd", function() {
            i = !0
        });
        return setTimeout(function() {
            i || t(s).trigger(t.support.transition.end)
        }, e), this
    }, t(function() {
        t.support.transition = function() {
            var t = document.createElement("bootstrap"),
                e = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var i in e)
                if (void 0 !== t.style[i]) return {
                    end: e[i]
                };
            return !1
        }(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery),
function(t) {
    "use strict";
    var e = '[data-dismiss="alert"]',
        i = function(i) {
            t(i).on("click", e, this.close)
        };
    i.VERSION = "3.3.6", i.TRANSITION_DURATION = 150, i.prototype.close = function(e) {
        var s = t(this),
            n = s.attr("data-target");
        n || (n = (n = s.attr("href")) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var r = t(n);

        function a() {
            r.detach().trigger("closed.bs.alert").remove()
        }
        e && e.preventDefault(), r.length || (r = s.closest(".alert")), r.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", a).emulateTransitionEnd(i.TRANSITION_DURATION) : a())
    };
    var s = t.fn.alert;
    t.fn.alert = function(e) {
        return this.each(function() {
            var s = t(this),
                n = s.data("bs.alert");
            n || s.data("bs.alert", n = new i(this)), "string" == typeof e && n[e].call(s)
        })
    }, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function() {
        return t.fn.alert = s, this
    }, t(document).on("click.bs.alert.data-api", e, i.prototype.close)
}(jQuery),
function(t) {
    "use strict";
    var e = function(i, s) {
        this.$element = t(i), this.options = t.extend({}, e.DEFAULTS, s), this.isLoading = !1
    };

    function i(i) {
        return this.each(function() {
            var s = t(this),
                n = s.data("bs.button"),
                r = "object" == typeof i && i;
            n || s.data("bs.button", n = new e(this, r)), "toggle" == i ? n.toggle() : i && n.setState(i)
        })
    }
    e.VERSION = "3.3.6", e.DEFAULTS = {
        loadingText: "loading..."
    }, e.prototype.setState = function(e) {
        var i = "disabled",
            s = this.$element,
            n = s.is("input") ? "val" : "html",
            r = s.data();
        e += "Text", null == r.resetText && s.data("resetText", s[n]()), setTimeout(t.proxy(function() {
            s[n](null == r[e] ? this.options[e] : r[e]), "loadingText" == e ? (this.isLoading = !0, s.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, s.removeClass(i).removeAttr(i))
        }, this), 0)
    }, e.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var s = t.fn.button;
    t.fn.button = i, t.fn.button.Constructor = e, t.fn.button.noConflict = function() {
        return t.fn.button = s, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        var s = t(e.target);
        s.hasClass("btn") || (s = s.closest(".btn")), i.call(s, "toggle"), t(e.target).is('input[type="radio"]') || t(e.target).is('input[type="checkbox"]') || e.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery),
function(t) {
    "use strict";
    var e = function(e, i) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };

    function i(i) {
        return this.each(function() {
            var s = t(this),
                n = s.data("bs.carousel"),
                r = t.extend({}, e.DEFAULTS, s.data(), "object" == typeof i && i),
                a = "string" == typeof i ? i : r.slide;
            n || s.data("bs.carousel", n = new e(this, r)), "number" == typeof i ? n.to(i) : a ? n[a]() : r.interval && n.pause().cycle()
        })
    }
    e.VERSION = "3.3.6", e.TRANSITION_DURATION = 600, e.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, e.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, e.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, e.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, e.prototype.getItemForDirection = function(t, e) {
        var i = this.getItemIndex(e);
        if (("prev" == t && 0 === i || "next" == t && i == this.$items.length - 1) && !this.options.wrap) return e;
        var s = (i + ("prev" == t ? -1 : 1)) % this.$items.length;
        return this.$items.eq(s)
    }, e.prototype.to = function(t) {
        var e = this,
            i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
            e.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
    }, e.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, e.prototype.next = function() {
        if (!this.sliding) return this.slide("next")
    }, e.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev")
    }, e.prototype.slide = function(i, s) {
        var n = this.$element.find(".item.active"),
            r = s || this.getItemForDirection(i, n),
            a = this.interval,
            o = "next" == i ? "left" : "right",
            l = this;
        if (r.hasClass("active")) return this.sliding = !1;
        var h = r[0],
            u = t.Event("slide.bs.carousel", {
                relatedTarget: h,
                direction: o
            });
        if (this.$element.trigger(u), !u.isDefaultPrevented()) {
            if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var c = t(this.$indicators.children()[this.getItemIndex(r)]);
                c && c.addClass("active")
            }
            var d = t.Event("slid.bs.carousel", {
                relatedTarget: h,
                direction: o
            });
            return t.support.transition && this.$element.hasClass("slide") ? (r.addClass(i), r[0].offsetWidth, n.addClass(o), r.addClass(o), n.one("bsTransitionEnd", function() {
                r.removeClass([i, o].join(" ")).addClass("active"), n.removeClass(["active", o].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(d)
                }, 0)
            }).emulateTransitionEnd(e.TRANSITION_DURATION)) : (n.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(d)), a && this.cycle(), this
        }
    };
    var s = t.fn.carousel;
    t.fn.carousel = i, t.fn.carousel.Constructor = e, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = s, this
    };
    var n = function(e) {
        var s, n = t(this),
            r = t(n.attr("data-target") || (s = n.attr("href")) && s.replace(/.*(?=#[^\s]+$)/, ""));
        if (r.hasClass("carousel")) {
            var a = t.extend({}, r.data(), n.data()),
                o = n.attr("data-slide-to");
            o && (a.interval = !1), i.call(r, a), o && r.data("bs.carousel").to(o), e.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", n).on("click.bs.carousel.data-api", "[data-slide-to]", n), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var e = t(this);
            i.call(e, e.data())
        })
    })
}(jQuery),
function(t) {
    "use strict";
    var e = function(i, s) {
        this.$element = t(i), this.options = t.extend({}, e.DEFAULTS, s), this.$trigger = t('[data-toggle="collapse"][href="#' + i.id + '"],[data-toggle="collapse"][data-target="#' + i.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };

    function i(e) {
        var i, s = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return t(s)
    }

    function s(i) {
        return this.each(function() {
            var s = t(this),
                n = s.data("bs.collapse"),
                r = t.extend({}, e.DEFAULTS, s.data(), "object" == typeof i && i);
            !n && r.toggle && /show|hide/.test(i) && (r.toggle = !1), n || s.data("bs.collapse", n = new e(this, r)), "string" == typeof i && n[i]()
        })
    }
    e.VERSION = "3.3.6", e.TRANSITION_DURATION = 350, e.DEFAULTS = {
        toggle: !0
    }, e.prototype.dimension = function() {
        return this.$element.hasClass("width") ? "width" : "height"
    }, e.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var i, n = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(n && n.length && (i = n.data("bs.collapse")) && i.transitioning)) {
                var r = t.Event("show.bs.collapse");
                if (this.$element.trigger(r), !r.isDefaultPrevented()) {
                    n && n.length && (s.call(n, "hide"), i || n.data("bs.collapse", null));
                    var a = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var o = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return o.call(this);
                    var l = t.camelCase(["scroll", a].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(e.TRANSITION_DURATION)[a](this.$element[0][l])
                }
            }
        }
    }, e.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var i = t.Event("hide.bs.collapse");
            if (this.$element.trigger(i), !i.isDefaultPrevented()) {
                var s = this.dimension();
                this.$element[s](this.$element[s]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var n = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                if (!t.support.transition) return n.call(this);
                this.$element[s](0).one("bsTransitionEnd", t.proxy(n, this)).emulateTransitionEnd(e.TRANSITION_DURATION)
            }
        }
    }, e.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, e.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(e, s) {
            var n = t(s);
            this.addAriaAndCollapsedClass(i(n), n)
        }, this)).end()
    }, e.prototype.addAriaAndCollapsedClass = function(t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var n = t.fn.collapse;
    t.fn.collapse = s, t.fn.collapse.Constructor = e, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = n, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(e) {
        var n = t(this);
        n.attr("data-target") || e.preventDefault();
        var r = i(n),
            a = r.data("bs.collapse") ? "toggle" : n.data();
        s.call(r, a)
    })
}(jQuery),
function(t) {
    "use strict";
    var e = ".dropdown-backdrop",
        i = '[data-toggle="dropdown"]',
        s = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };

    function n(e) {
        var i = e.attr("data-target");
        i || (i = (i = e.attr("href")) && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var s = i && t(i);
        return s && s.length ? s : e.parent()
    }

    function r(s) {
        s && 3 === s.which || (t(e).remove(), t(i).each(function() {
            var e = t(this),
                i = n(e),
                r = {
                    relatedTarget: this
                };
            i.hasClass("open") && (s && "click" == s.type && /input|textarea/i.test(s.target.tagName) && t.contains(i[0], s.target) || (i.trigger(s = t.Event("hide.bs.dropdown", r)), s.isDefaultPrevented() || (e.attr("aria-expanded", "false"), i.removeClass("open").trigger(t.Event("hidden.bs.dropdown", r)))))
        }))
    }
    s.VERSION = "3.3.6", s.prototype.toggle = function(e) {
        var i = t(this);
        if (!i.is(".disabled, :disabled")) {
            var s = n(i),
                a = s.hasClass("open");
            if (r(), !a) {
                "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", r);
                var o = {
                    relatedTarget: this
                };
                if (s.trigger(e = t.Event("show.bs.dropdown", o)), e.isDefaultPrevented()) return;
                i.trigger("focus").attr("aria-expanded", "true"), s.toggleClass("open").trigger(t.Event("shown.bs.dropdown", o))
            }
            return !1
        }
    }, s.prototype.keydown = function(e) {
        if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
            var s = t(this);
            if (e.preventDefault(), e.stopPropagation(), !s.is(".disabled, :disabled")) {
                var r = n(s),
                    a = r.hasClass("open");
                if (!a && 27 != e.which || a && 27 == e.which) return 27 == e.which && r.find(i).trigger("focus"), s.trigger("click");
                var o = r.find(".dropdown-menu li:not(.disabled):visible a");
                if (o.length) {
                    var l = o.index(e.target);
                    38 == e.which && l > 0 && l--, 40 == e.which && l < o.length - 1 && l++, ~l || (l = 0), o.eq(l).trigger("focus")
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = function(e) {
        return this.each(function() {
            var i = t(this),
                n = i.data("bs.dropdown");
            n || i.data("bs.dropdown", n = new s(this)), "string" == typeof e && n[e].call(i)
        })
    }, t.fn.dropdown.Constructor = s, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", r).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", i, s.prototype.toggle).on("keydown.bs.dropdown.data-api", i, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown)
}(jQuery),
function(t) {
    "use strict";
    var e = function(e, i) {
        this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };

    function i(i, s) {
        return this.each(function() {
            var n = t(this),
                r = n.data("bs.modal"),
                a = t.extend({}, e.DEFAULTS, n.data(), "object" == typeof i && i);
            r || n.data("bs.modal", r = new e(this, a)), "string" == typeof i ? r[i](s) : a.show && r.show(s)
        })
    }
    e.VERSION = "3.3.6", e.TRANSITION_DURATION = 300, e.BACKDROP_TRANSITION_DURATION = 150, e.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, e.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, e.prototype.show = function(i) {
        var s = this,
            n = t.Event("show.bs.modal", {
                relatedTarget: i
            });
        this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            s.$element.one("mouseup.dismiss.bs.modal", function(e) {
                t(e.target).is(s.$element) && (s.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var n = t.support.transition && s.$element.hasClass("fade");
            s.$element.parent().length || s.$element.appendTo(s.$body), s.$element.show().scrollTop(0), s.adjustDialog(), n && s.$element[0].offsetWidth, s.$element.addClass("in"), s.enforceFocus();
            var r = t.Event("shown.bs.modal", {
                relatedTarget: i
            });
            n ? s.$dialog.one("bsTransitionEnd", function() {
                s.$element.trigger("focus").trigger(r)
            }).emulateTransitionEnd(e.TRANSITION_DURATION) : s.$element.trigger("focus").trigger(r)
        }))
    }, e.prototype.hide = function(i) {
        i && i.preventDefault(), i = t.Event("hide.bs.modal"), this.$element.trigger(i), this.isShown && !i.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(e.TRANSITION_DURATION) : this.hideModal())
    }, e.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, e.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, e.prototype.resize = function() {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, e.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, e.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, e.prototype.backdrop = function(i) {
        var s = this,
            n = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var r = t.support.transition && n;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + n).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                    this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
                }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !i) return;
            r ? this.$backdrop.one("bsTransitionEnd", i).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION) : i()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var a = function() {
                s.removeBackdrop(), i && i()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION) : a()
        } else i && i()
    }, e.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, e.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, e.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, e.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, e.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, e.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, e.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var s = t.fn.modal;
    t.fn.modal = i, t.fn.modal.Constructor = e, t.fn.modal.noConflict = function() {
        return t.fn.modal = s, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(e) {
        var s = t(this),
            n = s.attr("href"),
            r = t(s.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")),
            a = r.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(n) && n
            }, r.data(), s.data());
        s.is("a") && e.preventDefault(), r.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || r.one("hidden.bs.modal", function() {
                s.is(":visible") && s.trigger("focus")
            })
        }), i.call(r, a, this)
    })
}(jQuery),
function(t) {
    "use strict";
    var e = function(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    e.VERSION = "3.3.6", e.TRANSITION_DURATION = 150, e.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, e.prototype.init = function(e, i, s) {
        if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(s), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var n = this.options.trigger.split(" "), r = n.length; r--;) {
            var a = n[r];
            if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != a) {
                var o = "hover" == a ? "mouseenter" : "focusin",
                    l = "hover" == a ? "mouseleave" : "focusout";
                this.$element.on(o + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, e.prototype.getDefaults = function() {
        return e.DEFAULTS
    }, e.prototype.getOptions = function(e) {
        return (e = t.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, e.prototype.getDelegateOptions = function() {
        var e = {},
            i = this.getDefaults();
        return this._options && t.each(this._options, function(t, s) {
            i[t] != s && (e[t] = s)
        }), e
    }, e.prototype.enter = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState) i.hoverState = "in";
        else {
            if (clearTimeout(i.timeout), i.hoverState = "in", !i.options.delay || !i.options.delay.show) return i.show();
            i.timeout = setTimeout(function() {
                "in" == i.hoverState && i.show()
            }, i.options.delay.show)
        }
    }, e.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, e.prototype.leave = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), !i.isInStateTrue()) {
            if (clearTimeout(i.timeout), i.hoverState = "out", !i.options.delay || !i.options.delay.hide) return i.hide();
            i.timeout = setTimeout(function() {
                "out" == i.hoverState && i.hide()
            }, i.options.delay.hide)
        }
    }, e.prototype.show = function() {
        var i = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(i);
            var s = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (i.isDefaultPrevented() || !s) return;
            var n = this,
                r = this.tip(),
                a = this.getUID(this.type);
            this.setContent(), r.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && r.addClass("fade");
            var o = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                h = l.test(o);
            h && (o = o.replace(l, "") || "top"), r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(o).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var u = this.getPosition(),
                c = r[0].offsetWidth,
                d = r[0].offsetHeight;
            if (h) {
                var p = o,
                    f = this.getPosition(this.$viewport);
                o = "bottom" == o && u.bottom + d > f.bottom ? "top" : "top" == o && u.top - d < f.top ? "bottom" : "right" == o && u.right + c > f.width ? "left" : "left" == o && u.left - c < f.left ? "right" : o, r.removeClass(p).addClass(o)
            }
            var m = this.getCalculatedOffset(o, u, c, d);
            this.applyPlacement(m, o);
            var v = function() {
                var t = n.hoverState;
                n.$element.trigger("shown.bs." + n.type), n.hoverState = null, "out" == t && n.leave(n)
            };
            t.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", v).emulateTransitionEnd(e.TRANSITION_DURATION) : v()
        }
    }, e.prototype.applyPlacement = function(e, i) {
        var s = this.tip(),
            n = s[0].offsetWidth,
            r = s[0].offsetHeight,
            a = parseInt(s.css("margin-top"), 10),
            o = parseInt(s.css("margin-left"), 10);
        isNaN(a) && (a = 0), isNaN(o) && (o = 0), e.top += a, e.left += o, t.offset.setOffset(s[0], t.extend({
            using: function(t) {
                s.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), s.addClass("in");
        var l = s[0].offsetWidth,
            h = s[0].offsetHeight;
        "top" == i && h != r && (e.top = e.top + r - h);
        var u = this.getViewportAdjustedDelta(i, e, l, h);
        u.left ? e.left += u.left : e.top += u.top;
        var c = /top|bottom/.test(i),
            d = c ? 2 * u.left - n + l : 2 * u.top - r + h,
            p = c ? "offsetWidth" : "offsetHeight";
        s.offset(e), this.replaceArrow(d, s[0][p], c)
    }, e.prototype.replaceArrow = function(t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }, e.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, e.prototype.hide = function(i) {
        var s = this,
            n = t(this.$tip),
            r = t.Event("hide.bs." + this.type);

        function a() {
            "in" != s.hoverState && n.detach(), s.$element.removeAttr("aria-describedby").trigger("hidden.bs." + s.type), i && i()
        }
        if (this.$element.trigger(r), !r.isDefaultPrevented()) return n.removeClass("in"), t.support.transition && n.hasClass("fade") ? n.one("bsTransitionEnd", a).emulateTransitionEnd(e.TRANSITION_DURATION) : a(), this.hoverState = null, this
    }, e.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, e.prototype.hasContent = function() {
        return this.getTitle()
    }, e.prototype.getPosition = function(e) {
        var i = (e = e || this.$element)[0],
            s = "BODY" == i.tagName,
            n = i.getBoundingClientRect();
        null == n.width && (n = t.extend({}, n, {
            width: n.right - n.left,
            height: n.bottom - n.top
        }));
        var r = s ? {
                top: 0,
                left: 0
            } : e.offset(),
            a = {
                scroll: s ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            o = s ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, n, a, o, r)
    }, e.prototype.getCalculatedOffset = function(t, e, i, s) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - s,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - s / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - s / 2,
            left: e.left + e.width
        }
    }, e.prototype.getViewportAdjustedDelta = function(t, e, i, s) {
        var n = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return n;
        var r = this.options.viewport && this.options.viewport.padding || 0,
            a = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var o = e.top - r - a.scroll,
                l = e.top + r - a.scroll + s;
            o < a.top ? n.top = a.top - o : l > a.top + a.height && (n.top = a.top + a.height - l)
        } else {
            var h = e.left - r,
                u = e.left + r + i;
            h < a.left ? n.left = a.left - h : u > a.right && (n.left = a.left + a.width - u)
        }
        return n
    }, e.prototype.getTitle = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
    }, e.prototype.getUID = function(t) {
        do {
            t += ~~(1e6 * Math.random())
        } while (document.getElementById(t));
        return t
    }, e.prototype.tip = function() {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, e.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, e.prototype.enable = function() {
        this.enabled = !0
    }, e.prototype.disable = function() {
        this.enabled = !1
    }, e.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, e.prototype.toggle = function(e) {
        var i = this;
        e && ((i = t(e.currentTarget).data("bs." + this.type)) || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, e.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null
        })
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = function(i) {
        return this.each(function() {
            var s = t(this),
                n = s.data("bs.tooltip"),
                r = "object" == typeof i && i;
            !n && /destroy|hide/.test(i) || (n || s.data("bs.tooltip", n = new e(this, r)), "string" == typeof i && n[i]())
        })
    }, t.fn.tooltip.Constructor = e, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = i, this
    }
}(jQuery),
function(t) {
    "use strict";
    var e = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    e.VERSION = "3.3.6", e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), e.prototype.constructor = e, e.prototype.getDefaults = function() {
        return e.DEFAULTS
    }, e.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, e.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, e.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, e.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var i = t.fn.popover;
    t.fn.popover = function(i) {
        return this.each(function() {
            var s = t(this),
                n = s.data("bs.popover"),
                r = "object" == typeof i && i;
            !n && /destroy|hide/.test(i) || (n || s.data("bs.popover", n = new e(this, r)), "string" == typeof i && n[i]())
        })
    }, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function() {
        return t.fn.popover = i, this
    }
}(jQuery),
function(t) {
    "use strict";

    function e(i, s) {
        this.$body = t(document.body), this.$scrollElement = t(i).is(document.body) ? t(window) : t(i), this.options = t.extend({}, e.DEFAULTS, s), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function i(i) {
        return this.each(function() {
            var s = t(this),
                n = s.data("bs.scrollspy"),
                r = "object" == typeof i && i;
            n || s.data("bs.scrollspy", n = new e(this, r)), "string" == typeof i && n[i]()
        })
    }
    e.VERSION = "3.3.6", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var e = this,
            i = "offset",
            s = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", s = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var e = t(this),
                n = e.data("target") || e.attr("href"),
                r = /^#./.test(n) && t(n);
            return r && r.length && r.is(":visible") && [
                [r[i]().top + s, n]
            ] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            i = this.getScrollHeight(),
            s = this.options.offset + i - this.$scrollElement.height(),
            n = this.offsets,
            r = this.targets,
            a = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), e >= s) return a != (t = r[r.length - 1]) && this.activate(t);
        if (a && e < n[0]) return this.activeTarget = null, this.clear();
        for (t = n.length; t--;) a != r[t] && e >= n[t] && (void 0 === n[t + 1] || e < n[t + 1]) && this.activate(r[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, this.clear();
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            s = t(i).parents("li").addClass("active");
        s.parent(".dropdown-menu").length && (s = s.closest("li.dropdown").addClass("active")), s.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function() {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var s = t.fn.scrollspy;
    t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = s, this
    }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            i.call(e, e.data())
        })
    })
}(jQuery),
function(t) {
    "use strict";
    var e = function(e) {
        this.element = t(e)
    };

    function i(i) {
        return this.each(function() {
            var s = t(this),
                n = s.data("bs.tab");
            n || s.data("bs.tab", n = new e(this)), "string" == typeof i && n[i]()
        })
    }
    e.VERSION = "3.3.6", e.TRANSITION_DURATION = 150, e.prototype.show = function() {
        var e = this.element,
            i = e.closest("ul:not(.dropdown-menu)"),
            s = e.data("target");
        if (s || (s = (s = e.attr("href")) && s.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var n = i.find(".active:last a"),
                r = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                a = t.Event("show.bs.tab", {
                    relatedTarget: n[0]
                });
            if (n.trigger(r), e.trigger(a), !a.isDefaultPrevented() && !r.isDefaultPrevented()) {
                var o = t(s);
                this.activate(e.closest("li"), i), this.activate(o, o.parent(), function() {
                    n.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: n[0]
                    })
                })
            }
        }
    }, e.prototype.activate = function(i, s, n) {
        var r = s.find("> .active"),
            a = n && t.support.transition && (r.length && r.hasClass("fade") || !!s.find("> .fade").length);

        function o() {
            r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), i.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (i[0].offsetWidth, i.addClass("in")) : i.removeClass("fade"), i.parent(".dropdown-menu").length && i.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), n && n()
        }
        r.length && a ? r.one("bsTransitionEnd", o).emulateTransitionEnd(e.TRANSITION_DURATION) : o(), r.removeClass("in")
    };
    var s = t.fn.tab;
    t.fn.tab = i, t.fn.tab.Constructor = e, t.fn.tab.noConflict = function() {
        return t.fn.tab = s, this
    };
    var n = function(e) {
        e.preventDefault(), i.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', n).on("click.bs.tab.data-api", '[data-toggle="pill"]', n)
}(jQuery),
function(t) {
    "use strict";
    var e = function(i, s) {
        this.options = t.extend({}, e.DEFAULTS, s), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(i), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };

    function i(i) {
        return this.each(function() {
            var s = t(this),
                n = s.data("bs.affix"),
                r = "object" == typeof i && i;
            n || s.data("bs.affix", n = new e(this, r)), "string" == typeof i && n[i]()
        })
    }
    e.VERSION = "3.3.6", e.RESET = "affix affix-top affix-bottom", e.DEFAULTS = {
        offset: 0,
        target: window
    }, e.prototype.getState = function(t, e, i, s) {
        var n = this.$target.scrollTop(),
            r = this.$element.offset(),
            a = this.$target.height();
        if (null != i && "top" == this.affixed) return n < i && "top";
        if ("bottom" == this.affixed) return null != i ? !(n + this.unpin <= r.top) && "bottom" : !(n + a <= t - s) && "bottom";
        var o = null == this.affixed,
            l = o ? n : r.top;
        return null != i && n <= i ? "top" : null != s && l + (o ? a : e) >= t - s && "bottom"
    }, e.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(e.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            i = this.$element.offset();
        return this.pinnedOffset = i.top - t
    }, e.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, e.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var i = this.$element.height(),
                s = this.options.offset,
                n = s.top,
                r = s.bottom,
                a = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof s && (r = n = s), "function" == typeof n && (n = s.top(this.$element)), "function" == typeof r && (r = s.bottom(this.$element));
            var o = this.getState(a, i, n, r);
            if (this.affixed != o) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (o ? "-" + o : ""),
                    h = t.Event(l + ".bs.affix");
                if (this.$element.trigger(h), h.isDefaultPrevented()) return;
                this.affixed = o, this.unpin = "bottom" == o ? this.getPinnedOffset() : null, this.$element.removeClass(e.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == o && this.$element.offset({
                top: a - i - r
            })
        }
    };
    var s = t.fn.affix;
    t.fn.affix = i, t.fn.affix.Constructor = e, t.fn.affix.noConflict = function() {
        return t.fn.affix = s, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var e = t(this),
                s = e.data();
            s.offset = s.offset || {}, null != s.offsetBottom && (s.offset.bottom = s.offsetBottom), null != s.offsetTop && (s.offset.top = s.offsetTop), i.call(e, s)
        })
    })
}(jQuery),
function(t) {
    function e(e) {
        var i, s, n, r, a, o;
        if (i = this, s = e[0], !(r = t(i.args.layer_sel, e)).length) return !1;
        for (n = window.cws_prlx.servant.uniq_id("cws_prlx_section_"), s.id = n, window.cws_prlx.sections[n] = {
                el: s,
                height: null,
                layer_sel: i.args.layer_sel
            }, /cws_Yt_video_bg/.test(s.className) && (s.addEventListener("DOMNodeRemoved", function(e) {
                var s = e.srcElement ? e.srcElement : e.target;
                t(s).is(i.args.layer_sel) && i.remove_layer(s.id)
            }, !1), s.addEventListener("DOMNodeInserted", function(e) {
                var s = e.srcElement ? e.srcElement : e.target;
                t(s).is(i.args.layer_sel) && i.add_layer(s, n)
            }, !1)), s.addEventListener("DOMNodeRemoved", function(t) {
                window.cws_prlx.prepare_section_data(n)
            }, !1), s.addEventListener("DOMNodeInserted", function(t) {
                window.cws_prlx.prepare_section_data(n)
            }, !1), o = 0; o < r.length; o++) a = r[o], i.add_layer(a, n);
        return n
    }

    function i(e, i) {
        var s, n;
        return this, e.id = e.id.length ? e.id : window.cws_prlx.servant.uniq_id("cws_prlx_layer_"), n = {
            el: e,
            section_id: i,
            height: null,
            loaded: !1,
            rel_speed: s = void 0 != (s = t(e).data("scroll-speed")) ? s : this.args.def_speed,
            speed: null
        }, window.cws_prlx.layers[e.id] = n, e.id
    }

    function s(t) {
        var e;
        void 0 != (e = window.cws_prlx.layers)[t] && delete e[t]
    }

    function n(e) {
        var i, s, n, r, a;
        if (!Object.keys(window.cws_prlx.sections).length || void 0 == window.cws_prlx.sections[e]) return !1;
        for (i = (s = window.cws_prlx.sections[e]).el, s.height = i.offsetHeight, section_obj = t(i), n = t(s.layer_sel, section_obj), a = 0; a < n.length; a++)(r = n[a].id) && window.cws_prlx.prepare_layer_data(r, e)
    }

    function r(t, e) {
        window.cws_prlx.servant.wait_for("layer_loaded", [t], function(t) {
            var e, i;
            i = (e = window.cws_prlx.layers[t]).el, e.height = i.offsetHeight, window.cws_prlx.calc_layer_speed(t), window.cws_prlx.translate_layer(t), e.loaded = !0
        }, [t])
    }

    function a() {
        var t, e, i, s;
        if (void 0 != window.cws_prlx)
            for (t = window.cws_prlx.layers, e = Object.keys(t), s = 0; s < e.length; s++) i = e[s], window.cws_prlx.translate_layer(i)
    }

    function o(t) {
        var e, i, s, n, r;
        if (void 0 == window.cws_prlx || void 0 == window.cws_prlx.layers[t]) return !1;
        if (null == (e = window.cws_prlx.layers[t]).speed) return !1;
        if (void 0 == e.section_id || void 0 == window.cws_prlx.sections[e.section_id]) return !1;
        if (i = window.cws_prlx.sections[e.section_id].el, window.cws_prlx.servant.is_visible(i)) {
            s = e.el, r = {
                WebkitTransform: "translate(-50%," + (n = (i.getBoundingClientRect().top - window.innerHeight) * e.speed) + "px)",
                MozTransform: "translate(-50%," + n + "px)",
                msTransform: "translate(-50%," + n + "px)",
                OTransform: "translate(-50%," + n + "px)",
                transform: "translate(-50%," + n + "px)"
            };
            for (key in r) s.style[key] = r[key]
        }
    }

    function l(t) {
        var e;
        t = void 0 != t ? t : "";
        return e = (new Date).getTime(), t + parseInt(Math.random() * e)
    }

    function h(t, e, i, s) {
        var n = !1;
        e = void 0 != e && "object" == typeof e ? e : new Array, s = void 0 != s && "object" == typeof s ? s : new Array;
        return void 0 == t || "string" != typeof t || void 0 == i || "function" != typeof i ? n : 1 == (n = window.cws_prlx.conditions[t].apply(window, e)) ? (i.apply(window, s), !0) : 0 == n && void setTimeout(function() {
            h(t, e, i, s)
        }, 10)
    }

    function u(e) {
        var i, s, n, r;
        return s = (i = window.pageYOffset) + window.innerHeight, r = (n = t(e).offset().top) + e.offsetHeight, n > i && n < s || n < i && r > s || r > i && r < s
    }

    function c() {
        return window.innerWidth < 768
    }

    function d(t) {
        var e;
        if (!1, void 0 == t || "string" != typeof t) return !1;
        if (void 0 == window.cws_prlx.layers[t]) return !1;
        switch ((e = window.cws_prlx.layers[t].el).tagName) {
            case "IMG":
                if (void 0 == e.complete) console.log("img hasn't complete property");
                else if (!e.complete) return !1;
                break;
            case "DIV":
                if (/^video-/.test(e.id)) return !1
        }
        return !0
    }

    function p(t) {
        var e, i, s, n;
        (e = window.cws_prlx.layers[t]).el, i = e.section_id, s = window.cws_prlx.sections[i], n = window.innerHeight, e.speed = (e.height - s.height) / (n + s.height) * (e.rel_speed / 100)
    }
    t.fn.cws_prlx = function(f) {
        var m, v;
        if (!(v = t(this)).length) return;
        m = new function(t) {
            (t = void 0 != t ? t : {}).def_speed = void 0 != t.def_speed && !isNaN(parseInt(t.def_speed)) && parseInt(t.def_speed > 0) && parseInt(t.def_speed <= 100) ? t.def_speed : 50, t.layer_sel = void 0 != t.layer_sel && "string" == typeof t.layer_sel && t.layer_sel.length ? t.layer_sel : ".cws_prlx_layer", this.args = t, this.add_section = e, this.add_layer = i, this.remove_layer = s
        }(f), window.cws_prlx = void 0 != window.cws_prlx ? window.cws_prlx : new function() {
            this.servant = new function() {
                this.uniq_id = l, this.wait_for = h, this.is_visible = u, this.is_mobile = c
            }, this.sections = {}, this.layers = {}, this.calc_layer_speed = p, this.prepare_section_data = n, this.prepare_layer_data = r, this.translate_layers = a, this.translate_layer = o, this.conditions = {}, this.conditions.layer_loaded = d, this.disabled = !1
        }, v.each(function() {
            var e = t(this),
                i = m.add_section(e);
            i && window.cws_prlx.prepare_section_data(i)
        })
    }, window.addEventListener("scroll", function() {
        void 0 == window.cws_prlx || window.cws_prlx.disabled || window.cws_prlx.translate_layers()
    }, !1), window.addEventListener("resize", function() {
        var t, e;
        if (void 0 != window.cws_prlx)
            if (window.cws_prlx.servant.is_mobile()) {
                if (!window.cws_prlx.disabled) {
                    for (layer_id in window.cws_prlx.layers) window.cws_prlx.layers[layer_id].el.removeAttribute("style");
                    window.cws_prlx.disabled = !0
                }
            } else {
                window.cws_prlx.disabled && (window.cws_prlx.disabled = !1);
                for (t in window.cws_prlx.sections)(e = window.cws_prlx.sections[t]).height != e.el.offsetHeight && window.cws_prlx.prepare_section_data(t)
            }
    }, !1)
}(jQuery),
function() {
    "use strict";

    function t() {}

    function e(t, e) {
        for (var i = t.length; i--;)
            if (t[i].listener === e) return i;
        return -1
    }

    function i(t) {
        return function() {
            return this[t].apply(this, arguments)
        }
    }
    var s = t.prototype,
        n = this,
        r = n.EventEmitter;
    s.getListeners = function(t) {
        var e, i, s = this._getEvents();
        if ("object" == typeof t) {
            e = {};
            for (i in s) s.hasOwnProperty(i) && t.test(i) && (e[i] = s[i])
        } else e = s[t] || (s[t] = []);
        return e
    }, s.flattenListeners = function(t) {
        var e, i = [];
        for (e = 0; e < t.length; e += 1) i.push(t[e].listener);
        return i
    }, s.getListenersAsObject = function(t) {
        var e, i = this.getListeners(t);
        return i instanceof Array && ((e = {})[t] = i), e || i
    }, s.addListener = function(t, i) {
        var s, n = this.getListenersAsObject(t),
            r = "object" == typeof i;
        for (s in n) n.hasOwnProperty(s) && -1 === e(n[s], i) && n[s].push(r ? i : {
            listener: i,
            once: !1
        });
        return this
    }, s.on = i("addListener"), s.addOnceListener = function(t, e) {
        return this.addListener(t, {
            listener: e,
            once: !0
        })
    }, s.once = i("addOnceListener"), s.defineEvent = function(t) {
        return this.getListeners(t), this
    }, s.defineEvents = function(t) {
        for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
        return this
    }, s.removeListener = function(t, i) {
        var s, n, r = this.getListenersAsObject(t);
        for (n in r) r.hasOwnProperty(n) && (s = e(r[n], i), -1 !== s && r[n].splice(s, 1));
        return this
    }, s.off = i("removeListener"), s.addListeners = function(t, e) {
        return this.manipulateListeners(!1, t, e)
    }, s.removeListeners = function(t, e) {
        return this.manipulateListeners(!0, t, e)
    }, s.manipulateListeners = function(t, e, i) {
        var s, n, r = t ? this.removeListener : this.addListener,
            a = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp)
            for (s = i.length; s--;) r.call(this, e, i[s]);
        else
            for (s in e) e.hasOwnProperty(s) && (n = e[s]) && ("function" == typeof n ? r.call(this, s, n) : a.call(this, s, n));
        return this
    }, s.removeEvent = function(t) {
        var e, i = typeof t,
            s = this._getEvents();
        if ("string" === i) delete s[t];
        else if ("object" === i)
            for (e in s) s.hasOwnProperty(e) && t.test(e) && delete s[e];
        else delete this._events;
        return this
    }, s.removeAllListeners = i("removeEvent"), s.emitEvent = function(t, e) {
        var i, s, n, r, a = this.getListenersAsObject(t);
        for (n in a)
            if (a.hasOwnProperty(n))
                for (s = a[n].length; s--;) i = a[n][s], !0 === i.once && this.removeListener(t, i.listener), r = i.listener.apply(this, e || []), r === this._getOnceReturnValue() && this.removeListener(t, i.listener);
        return this
    }, s.trigger = i("emitEvent"), s.emit = function(t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e)
    }, s.setOnceReturnValue = function(t) {
        return this._onceReturnValue = t, this
    }, s._getOnceReturnValue = function() {
        return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
    }, s._getEvents = function() {
        return this._events || (this._events = {})
    }, t.noConflict = function() {
        return n.EventEmitter = r, t
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
}.call(this),
    function(t) {
        function e(e) {
            var i = t.event;
            return i.target = i.target || i.srcElement || e, i
        }
        var i = document.documentElement,
            s = function() {};
        i.addEventListener ? s = function(t, e, i) {
            t.addEventListener(e, i, !1)
        } : i.attachEvent && (s = function(t, i, s) {
            t[i + s] = s.handleEvent ? function() {
                var i = e(t);
                s.handleEvent.call(s, i)
            } : function() {
                var i = e(t);
                s.call(t, i)
            }, t.attachEvent("on" + i, t[i + s])
        });
        var n = function() {};
        i.removeEventListener ? n = function(t, e, i) {
            t.removeEventListener(e, i, !1)
        } : i.detachEvent && (n = function(t, e, i) {
            t.detachEvent("on" + e, t[e + i]);
            try {
                delete t[e + i]
            } catch (s) {
                t[e + i] = void 0
            }
        });
        var r = {
            bind: s,
            unbind: n
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", r) : t.eventie = r
    }(this),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(i, s) {
            return e(t, i, s)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("eventie")) : t.imagesLoaded = e(t, t.EventEmitter, t.eventie)
    }(window, function(t, e, i) {
        function s(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function n(t) {
            var e, i = [];
            if (e = t, "[object Array]" == u.call(e)) i = t;
            else if ("number" == typeof t.length)
                for (var s = 0; s < t.length; s++) i.push(t[s]);
            else i.push(t);
            return i
        }

        function r(t, e, i) {
            if (!(this instanceof r)) return new r(t, e, i);
            "string" == typeof t && (t = document.querySelectorAll(t)), this.elements = n(t), this.options = s({}, this.options), "function" == typeof e ? i = e : s(this.options, e), i && this.on("always", i), this.getImages(), l && (this.jqDeferred = new l.Deferred);
            var a = this;
            setTimeout(function() {
                a.check()
            })
        }

        function a(t) {
            this.img = t
        }

        function o(t, e) {
            this.url = t, this.element = e, this.img = new Image
        }
        var l = t.jQuery,
            h = t.console,
            u = Object.prototype.toString;
        r.prototype = new e, r.prototype.options = {}, r.prototype.getImages = function() {
            this.images = [];
            for (var t = 0; t < this.elements.length; t++) {
                var e = this.elements[t];
                this.addElementImages(e)
            }
        }, r.prototype.addElementImages = function(t) {
            "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
            var e = t.nodeType;
            if (e && c[e]) {
                for (var i = t.querySelectorAll("img"), s = 0; s < i.length; s++) {
                    var n = i[s];
                    this.addImage(n)
                }
                if ("string" == typeof this.options.background) {
                    var r = t.querySelectorAll(this.options.background);
                    for (s = 0; s < r.length; s++) {
                        var a = r[s];
                        this.addElementBackgroundImages(a)
                    }
                }
            }
        };
        var c = {
            1: !0,
            9: !0,
            11: !0
        };
        r.prototype.addElementBackgroundImages = function(t) {
            for (var e = d(t), i = /url\(['"]*([^'"\)]+)['"]*\)/gi, s = i.exec(e.backgroundImage); null !== s;) {
                var n = s && s[1];
                n && this.addBackground(n, t), s = i.exec(e.backgroundImage)
            }
        };
        var d = t.getComputedStyle || function(t) {
            return t.currentStyle
        };
        return r.prototype.addImage = function(t) {
            var e = new a(t);
            this.images.push(e)
        }, r.prototype.addBackground = function(t, e) {
            var i = new o(t, e);
            this.images.push(i)
        }, r.prototype.check = function() {
            function t(t, i, s) {
                setTimeout(function() {
                    e.progress(t, i, s)
                })
            }
            var e = this;
            if (this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length)
                for (var i = 0; i < this.images.length; i++) {
                    var s = this.images[i];
                    s.once("progress", t), s.check()
                } else this.complete()
        }, r.prototype.progress = function(t, e, i) {
            this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emit("progress", this, t, e), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && h && h.log("progress: " + i, t, e)
        }, r.prototype.complete = function() {
            var t = this.hasAnyBroken ? "fail" : "done";
            if (this.isComplete = !0, this.emit(t, this), this.emit("always", this), this.jqDeferred) {
                var e = this.hasAnyBroken ? "reject" : "resolve";
                this.jqDeferred[e](this)
            }
        }, a.prototype = new e, a.prototype.check = function() {
            return this.getIsImageComplete() ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, i.bind(this.proxyImage, "load", this), i.bind(this.proxyImage, "error", this), i.bind(this.img, "load", this), i.bind(this.img, "error", this), void(this.proxyImage.src = this.img.src))
        }, a.prototype.getIsImageComplete = function() {
            return this.img.complete && void 0 !== this.img.naturalWidth
        }, a.prototype.confirm = function(t, e) {
            this.isLoaded = t, this.emit("progress", this, this.img, e)
        }, a.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, a.prototype.onload = function() {
            this.confirm(!0, "onload"), this.unbindEvents()
        }, a.prototype.onerror = function() {
            this.confirm(!1, "onerror"), this.unbindEvents()
        }, a.prototype.unbindEvents = function() {
            i.unbind(this.proxyImage, "load", this), i.unbind(this.proxyImage, "error", this), i.unbind(this.img, "load", this), i.unbind(this.img, "error", this)
        }, o.prototype = new a, o.prototype.check = function() {
            i.bind(this.img, "load", this), i.bind(this.img, "error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
        }, o.prototype.unbindEvents = function() {
            i.unbind(this.img, "load", this), i.unbind(this.img, "error", this)
        }, o.prototype.confirm = function(t, e) {
            this.isLoaded = t, this.emit("progress", this, this.element, e)
        }, r.makeJQueryPlugin = function(e) {
            (e = e || t.jQuery) && ((l = e).fn.imagesLoaded = function(t, e) {
                return new r(this, t, e).jqDeferred.promise(l(this))
            })
        }, r.makeJQueryPlugin(), r
    }),
    function(t) {
        var e = !0;
        t.flexslider = function(i, s) {
            var n = t(i);
            n.vars = t.extend({}, t.flexslider.defaults, s);
            var r, a = n.vars.namespace,
                o = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
                l = ("ontouchstart" in window || o || window.DocumentTouch && document instanceof DocumentTouch) && n.vars.touch,
                h = "click touchend MSPointerUp keyup",
                u = "",
                c = "vertical" === n.vars.direction,
                d = n.vars.reverse,
                p = n.vars.itemWidth > 0,
                f = "fade" === n.vars.animation,
                m = "" !== n.vars.asNavFor,
                v = {};
            t.data(i, "flexslider", n), v = {
                init: function() {
                    n.animating = !1, n.currentSlide = parseInt(n.vars.startAt ? n.vars.startAt : 0, 10), isNaN(n.currentSlide) && (n.currentSlide = 0), n.animatingTo = n.currentSlide, n.atEnd = 0 === n.currentSlide || n.currentSlide === n.last, n.containerSelector = n.vars.selector.substr(0, n.vars.selector.search(" ")), n.slides = t(n.vars.selector, n), n.container = t(n.containerSelector, n), n.count = n.slides.length, n.syncExists = t(n.vars.sync).length > 0, "slide" === n.vars.animation && (n.vars.animation = "swing"), n.prop = c ? "top" : "marginLeft", n.args = {}, n.manualPause = !1, n.stopped = !1, n.started = !1, n.startTimeout = null, n.transitions = !n.vars.video && !f && n.vars.useCSS && function() {
                        var t = document.createElement("div"),
                            e = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                        for (var i in e)
                            if (void 0 !== t.style[e[i]]) return n.pfx = e[i].replace("Perspective", "").toLowerCase(), n.prop = "-" + n.pfx + "-transform", !0;
                        return !1
                    }(), n.ensureAnimationEnd = "", "" !== n.vars.controlsContainer && (n.controlsContainer = t(n.vars.controlsContainer).length > 0 && t(n.vars.controlsContainer)), "" !== n.vars.manualControls && (n.manualControls = t(n.vars.manualControls).length > 0 && t(n.vars.manualControls)), "" !== n.vars.customDirectionNav && (n.customDirectionNav = 2 === t(n.vars.customDirectionNav).length && t(n.vars.customDirectionNav)), n.vars.randomize && (n.slides.sort(function() {
                        return Math.round(Math.random()) - .5
                    }), n.container.empty().append(n.slides)), n.doMath(), n.setup("init"), n.vars.controlNav && v.controlNav.setup(), n.vars.directionNav && v.directionNav.setup(), n.vars.keyboard && (1 === t(n.containerSelector).length || n.vars.multipleKeyboard) && t(document).bind("keyup", function(t) {
                        var e = t.keyCode;
                        if (!n.animating && (39 === e || 37 === e)) {
                            var i = 39 === e ? n.getTarget("next") : 37 === e && n.getTarget("prev");
                            n.flexAnimate(i, n.vars.pauseOnAction)
                        }
                    }), n.vars.mousewheel && n.bind("mousewheel", function(t, e, i, s) {
                        t.preventDefault();
                        var r = e < 0 ? n.getTarget("next") : n.getTarget("prev");
                        n.flexAnimate(r, n.vars.pauseOnAction)
                    }), n.vars.pausePlay && v.pausePlay.setup(), n.vars.slideshow && n.vars.pauseInvisible && v.pauseInvisible.init(), n.vars.slideshow && (n.vars.pauseOnHover && n.hover(function() {
                        n.manualPlay || n.manualPause || n.pause()
                    }, function() {
                        n.manualPause || n.manualPlay || n.stopped || n.play()
                    }), n.vars.pauseInvisible && v.pauseInvisible.isHidden() || (n.vars.initDelay > 0 ? n.startTimeout = setTimeout(n.play, n.vars.initDelay) : n.play())), m && v.asNav.setup(), l && n.vars.touch && v.touch(), (!f || f && n.vars.smoothHeight) && t(window).bind("resize orientationchange focus", v.resize), n.find("img").attr("draggable", "false"), setTimeout(function() {
                        n.vars.start(n)
                    }, 200)
                },
                asNav: {
                    setup: function() {
                        n.asNav = !0, n.animatingTo = Math.floor(n.currentSlide / n.move), n.currentItem = n.currentSlide, n.slides.removeClass(a + "active-slide").eq(n.currentItem).addClass(a + "active-slide"), o ? (i._slider = n, n.slides.each(function() {
                            var e = this;
                            e._gesture = new MSGesture, e._gesture.target = e, e.addEventListener("MSPointerDown", function(t) {
                                t.preventDefault(), t.currentTarget._gesture && t.currentTarget._gesture.addPointer(t.pointerId)
                            }, !1), e.addEventListener("MSGestureTap", function(e) {
                                e.preventDefault();
                                var i = t(this),
                                    s = i.index();
                                t(n.vars.asNavFor).data("flexslider").animating || i.hasClass("active") || (n.direction = n.currentItem < s ? "next" : "prev", n.flexAnimate(s, n.vars.pauseOnAction, !1, !0, !0))
                            })
                        })) : n.slides.on(h, function(e) {
                            e.preventDefault();
                            var i = t(this),
                                s = i.index();
                            i.offset().left - t(n).scrollLeft() <= 0 && i.hasClass(a + "active-slide") ? n.flexAnimate(n.getTarget("prev"), !0) : t(n.vars.asNavFor).data("flexslider").animating || i.hasClass(a + "active-slide") || (n.direction = n.currentItem < s ? "next" : "prev", n.flexAnimate(s, n.vars.pauseOnAction, !1, !0, !0))
                        })
                    }
                },
                controlNav: {
                    setup: function() {
                        n.manualControls ? v.controlNav.setupManual() : v.controlNav.setupPaging()
                    },
                    setupPaging: function() {
                        var e, i, s = "thumbnails" === n.vars.controlNav ? "control-thumbs" : "control-paging",
                            r = 1;
                        if (n.controlNavScaffold = t('<ol class="' + a + "control-nav " + a + s + '"></ol>'), n.pagingCount > 1)
                            for (var o = 0; o < n.pagingCount; o++) {
                                void 0 === (i = n.slides.eq(o)).attr("data-thumb-alt") && i.attr("data-thumb-alt", "");
                                var l = "" !== i.attr("data-thumb-alt") ? l = ' alt="' + i.attr("data-thumb-alt") + '"' : "";
                                if (e = "thumbnails" === n.vars.controlNav ? '<img src="' + i.attr("data-thumb") + '"' + l + "/>" : '<a href="#">' + r + "</a>", "thumbnails" === n.vars.controlNav && !0 === n.vars.thumbCaptions) {
                                    var c = i.attr("data-thumbcaption");
                                    "" !== c && void 0 !== c && (e += '<span class="' + a + 'caption">' + c + "</span>")
                                }
                                n.controlNavScaffold.append("<li>" + e + "</li>"), r++
                            }
                        n.controlsContainer ? t(n.controlsContainer).append(n.controlNavScaffold) : n.append(n.controlNavScaffold), v.controlNav.set(), v.controlNav.active(), n.controlNavScaffold.delegate("a, img", h, function(e) {
                            if (e.preventDefault(), "" === u || u === e.type) {
                                var i = t(this),
                                    s = n.controlNav.index(i);
                                i.hasClass(a + "active") || (n.direction = s > n.currentSlide ? "next" : "prev", n.flexAnimate(s, n.vars.pauseOnAction))
                            }
                            "" === u && (u = e.type), v.setToClearWatchedEvent()
                        })
                    },
                    setupManual: function() {
                        n.controlNav = n.manualControls, v.controlNav.active(), n.controlNav.bind(h, function(e) {
                            if (e.preventDefault(), "" === u || u === e.type) {
                                var i = t(this),
                                    s = n.controlNav.index(i);
                                i.hasClass(a + "active") || (s > n.currentSlide ? n.direction = "next" : n.direction = "prev", n.flexAnimate(s, n.vars.pauseOnAction))
                            }
                            "" === u && (u = e.type), v.setToClearWatchedEvent()
                        })
                    },
                    set: function() {
                        var e = "thumbnails" === n.vars.controlNav ? "img" : "a";
                        n.controlNav = t("." + a + "control-nav li " + e, n.controlsContainer ? n.controlsContainer : n)
                    },
                    active: function() {
                        n.controlNav.removeClass(a + "active").eq(n.animatingTo).addClass(a + "active")
                    },
                    update: function(e, i) {
                        n.pagingCount > 1 && "add" === e ? n.controlNavScaffold.append(t('<li><a href="#">' + n.count + "</a></li>")) : 1 === n.pagingCount ? n.controlNavScaffold.find("li").remove() : n.controlNav.eq(i).closest("li").remove(), v.controlNav.set(), n.pagingCount > 1 && n.pagingCount !== n.controlNav.length ? n.update(i, e) : v.controlNav.active()
                    }
                },
                directionNav: {
                    setup: function() {
                        var e = t('<ul class="' + a + 'direction-nav"><li class="' + a + 'nav-prev"><a class="' + a + 'prev" href="#">' + n.vars.prevText + '</a></li><li class="' + a + 'nav-next"><a class="' + a + 'next" href="#">' + n.vars.nextText + "</a></li></ul>");
                        n.customDirectionNav ? n.directionNav = n.customDirectionNav : n.controlsContainer ? (t(n.controlsContainer).append(e), n.directionNav = t("." + a + "direction-nav li a", n.controlsContainer)) : (n.append(e), n.directionNav = t("." + a + "direction-nav li a", n)), v.directionNav.update(), n.directionNav.bind(h, function(e) {
                            var i;
                            e.preventDefault(), "" !== u && u !== e.type || (i = t(this).hasClass(a + "next") ? n.getTarget("next") : n.getTarget("prev"), n.flexAnimate(i, n.vars.pauseOnAction)), "" === u && (u = e.type), v.setToClearWatchedEvent()
                        })
                    },
                    update: function() {
                        var t = a + "disabled";
                        1 === n.pagingCount ? n.directionNav.addClass(t).attr("tabindex", "-1") : n.vars.animationLoop ? n.directionNav.removeClass(t).removeAttr("tabindex") : 0 === n.animatingTo ? n.directionNav.removeClass(t).filter("." + a + "prev").addClass(t).attr("tabindex", "-1") : n.animatingTo === n.last ? n.directionNav.removeClass(t).filter("." + a + "next").addClass(t).attr("tabindex", "-1") : n.directionNav.removeClass(t).removeAttr("tabindex")
                    }
                },
                pausePlay: {
                    setup: function() {
                        var e = t('<div class="' + a + 'pauseplay"><a href="#"></a></div>');
                        n.controlsContainer ? (n.controlsContainer.append(e), n.pausePlay = t("." + a + "pauseplay a", n.controlsContainer)) : (n.append(e), n.pausePlay = t("." + a + "pauseplay a", n)), v.pausePlay.update(n.vars.slideshow ? a + "pause" : a + "play"), n.pausePlay.bind(h, function(e) {
                            e.preventDefault(), "" !== u && u !== e.type || (t(this).hasClass(a + "pause") ? (n.manualPause = !0, n.manualPlay = !1, n.pause()) : (n.manualPause = !1, n.manualPlay = !0, n.play())), "" === u && (u = e.type), v.setToClearWatchedEvent()
                        })
                    },
                    update: function(t) {
                        "play" === t ? n.pausePlay.removeClass(a + "pause").addClass(a + "play").html(n.vars.playText) : n.pausePlay.removeClass(a + "play").addClass(a + "pause").html(n.vars.pauseText)
                    }
                },
                touch: function() {
                    var t, e, s, r, a, l, h, u, m, v = !1,
                        g = 0,
                        _ = 0,
                        y = 0;
                    if (o) {
                        i.style.msTouchAction = "none", i._gesture = new MSGesture, i._gesture.target = i, i.addEventListener("MSPointerDown", function(t) {
                            t.stopPropagation(), n.animating ? t.preventDefault() : (n.pause(), i._gesture.addPointer(t.pointerId), y = 0, r = c ? n.h : n.w, l = Number(new Date), s = p && d && n.animatingTo === n.last ? 0 : p && d ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : p && n.currentSlide === n.last ? n.limit : p ? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide : d ? (n.last - n.currentSlide + n.cloneOffset) * r : (n.currentSlide + n.cloneOffset) * r)
                        }, !1), i._slider = n, i.addEventListener("MSGestureChange", function(t) {
                            t.stopPropagation();
                            var e = t.target._slider;
                            if (!e) return;
                            var n = -t.translationX,
                                o = -t.translationY;
                            if (a = y += c ? o : n, v = c ? Math.abs(y) < Math.abs(-n) : Math.abs(y) < Math.abs(-o), t.detail === t.MSGESTURE_FLAG_INERTIA) return void setImmediate(function() {
                                i._gesture.stop()
                            });
                            (!v || Number(new Date) - l > 500) && (t.preventDefault(), !f && e.transitions && (e.vars.animationLoop || (a = y / (0 === e.currentSlide && y < 0 || e.currentSlide === e.last && y > 0 ? Math.abs(y) / r + 2 : 1)), e.setProps(s + a, "setTouch")))
                        }, !1), i.addEventListener("MSGestureEnd", function(i) {
                            i.stopPropagation();
                            var n = i.target._slider;
                            if (!n) return;
                            if (n.animatingTo === n.currentSlide && !v && null !== a) {
                                var o = d ? -a : a,
                                    h = o > 0 ? n.getTarget("next") : n.getTarget("prev");
                                n.canAdvance(h) && (Number(new Date) - l < 550 && Math.abs(o) > 50 || Math.abs(o) > r / 2) ? n.flexAnimate(h, n.vars.pauseOnAction) : f || n.flexAnimate(n.currentSlide, n.vars.pauseOnAction, !0)
                            }
                            t = null, e = null, a = null, s = null, y = 0
                        }, !1)
                    } else h = function(a) {
                        n.animating ? a.preventDefault() : (window.navigator.msPointerEnabled || 1 === a.touches.length) && (n.pause(), r = c ? n.h : n.w, l = Number(new Date), g = a.touches[0].pageX, _ = a.touches[0].pageY, s = p && d && n.animatingTo === n.last ? 0 : p && d ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : p && n.currentSlide === n.last ? n.limit : p ? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide : d ? (n.last - n.currentSlide + n.cloneOffset) * r : (n.currentSlide + n.cloneOffset) * r, t = c ? _ : g, e = c ? g : _, i.addEventListener("touchmove", u, !1), i.addEventListener("touchend", m, !1))
                    }, u = function(i) {
                        g = i.touches[0].pageX, _ = i.touches[0].pageY, a = c ? t - _ : t - g;
                        (!(v = c ? Math.abs(a) < Math.abs(g - e) : Math.abs(a) < Math.abs(_ - e)) || Number(new Date) - l > 500) && (i.preventDefault(), !f && n.transitions && (n.vars.animationLoop || (a /= 0 === n.currentSlide && a < 0 || n.currentSlide === n.last && a > 0 ? Math.abs(a) / r + 2 : 1), n.setProps(s + a, "setTouch")))
                    }, m = function(o) {
                        if (i.removeEventListener("touchmove", u, !1), n.animatingTo === n.currentSlide && !v && null !== a) {
                            var h = d ? -a : a,
                                c = h > 0 ? n.getTarget("next") : n.getTarget("prev");
                            n.canAdvance(c) && (Number(new Date) - l < 550 && Math.abs(h) > 50 || Math.abs(h) > r / 2) ? n.flexAnimate(c, n.vars.pauseOnAction) : f || n.flexAnimate(n.currentSlide, n.vars.pauseOnAction, !0)
                        }
                        i.removeEventListener("touchend", m, !1), t = null, e = null, a = null, s = null
                    }, i.addEventListener("touchstart", h, !1)
                },
                resize: function() {
                    !n.animating && n.is(":visible") && (p || n.doMath(), f ? v.smoothHeight() : p ? (n.slides.width(n.computedW), n.update(n.pagingCount), n.setProps()) : c ? (n.viewport.height(n.h), n.setProps(n.h, "setTotal")) : (n.vars.smoothHeight && v.smoothHeight(), n.newSlides.width(n.computedW), n.setProps(n.computedW, "setTotal")))
                },
                smoothHeight: function(t) {
                    if (!c || f) {
                        var e = f ? n : n.viewport;
                        t ? e.animate({
                            height: n.slides.eq(n.animatingTo).innerHeight()
                        }, t) : e.innerHeight(n.slides.eq(n.animatingTo).innerHeight())
                    }
                },
                sync: function(e) {
                    var i = t(n.vars.sync).data("flexslider"),
                        s = n.animatingTo;
                    switch (e) {
                        case "animate":
                            i.flexAnimate(s, n.vars.pauseOnAction, !1, !0);
                            break;
                        case "play":
                            i.playing || i.asNav || i.play();
                            break;
                        case "pause":
                            i.pause()
                    }
                },
                uniqueID: function(e) {
                    return e.filter("[id]").add(e.find("[id]")).each(function() {
                        var e = t(this);
                        e.attr("id", e.attr("id") + "_clone")
                    }), e
                },
                pauseInvisible: {
                    visProp: null,
                    init: function() {
                        var t = v.pauseInvisible.getHiddenProp();
                        if (t) {
                            var e = t.replace(/[H|h]idden/, "") + "visibilitychange";
                            document.addEventListener(e, function() {
                                v.pauseInvisible.isHidden() ? n.startTimeout ? clearTimeout(n.startTimeout) : n.pause() : n.started ? n.play() : n.vars.initDelay > 0 ? setTimeout(n.play, n.vars.initDelay) : n.play()
                            })
                        }
                    },
                    isHidden: function() {
                        var t = v.pauseInvisible.getHiddenProp();
                        return !!t && document[t]
                    },
                    getHiddenProp: function() {
                        var t = ["webkit", "moz", "ms", "o"];
                        if ("hidden" in document) return "hidden";
                        for (var e = 0; e < t.length; e++)
                            if (t[e] + "Hidden" in document) return t[e] + "Hidden";
                        return null
                    }
                },
                setToClearWatchedEvent: function() {
                    clearTimeout(r), r = setTimeout(function() {
                        u = ""
                    }, 3e3)
                }
            }, n.flexAnimate = function(e, i, s, r, o) {
                if (n.vars.animationLoop || e === n.currentSlide || (n.direction = e > n.currentSlide ? "next" : "prev"), m && 1 === n.pagingCount && (n.direction = n.currentItem < e ? "next" : "prev"), !n.animating && (n.canAdvance(e, o) || s) && n.is(":visible")) {
                    if (m && r) {
                        var h = t(n.vars.asNavFor).data("flexslider");
                        if (n.atEnd = 0 === e || e === n.count - 1, h.flexAnimate(e, !0, !1, !0, o), n.direction = n.currentItem < e ? "next" : "prev", h.direction = n.direction, Math.ceil((e + 1) / n.visible) - 1 === n.currentSlide || 0 === e) return n.currentItem = e, n.slides.removeClass(a + "active-slide").eq(e).addClass(a + "active-slide"), !1;
                        n.currentItem = e, n.slides.removeClass(a + "active-slide").eq(e).addClass(a + "active-slide"), e = Math.floor(e / n.visible)
                    }
                    if (n.animating = !0, n.animatingTo = e, i && n.pause(), n.vars.before(n), n.syncExists && !o && v.sync("animate"), n.vars.controlNav && v.controlNav.active(), p || n.slides.removeClass(a + "active-slide").eq(e).addClass(a + "active-slide"), n.atEnd = 0 === e || e === n.last, n.vars.directionNav && v.directionNav.update(), e === n.last && (n.vars.end(n), n.vars.animationLoop || n.pause()), f) l ? (n.slides.eq(n.currentSlide).css({
                        opacity: 0,
                        zIndex: 1
                    }), n.slides.eq(e).css({
                        opacity: 1,
                        zIndex: 2
                    }), n.wrapup(y)) : (n.slides.eq(n.currentSlide).css({
                        zIndex: 1
                    }).animate({
                        opacity: 0
                    }, n.vars.animationSpeed, n.vars.easing), n.slides.eq(e).css({
                        zIndex: 2
                    }).animate({
                        opacity: 1
                    }, n.vars.animationSpeed, n.vars.easing, n.wrapup));
                    else {
                        var u, g, _, y = c ? n.slides.filter(":first").height() : n.computedW;
                        p ? (u = n.vars.itemMargin, g = (_ = (n.itemW + u) * n.move * n.animatingTo) > n.limit && 1 !== n.visible ? n.limit : _) : g = 0 === n.currentSlide && e === n.count - 1 && n.vars.animationLoop && "next" !== n.direction ? d ? (n.count + n.cloneOffset) * y : 0 : n.currentSlide === n.last && 0 === e && n.vars.animationLoop && "prev" !== n.direction ? d ? 0 : (n.count + 1) * y : d ? (n.count - 1 - e + n.cloneOffset) * y : (e + n.cloneOffset) * y, n.setProps(g, "", n.vars.animationSpeed), n.transitions ? (n.vars.animationLoop && n.atEnd || (n.animating = !1, n.currentSlide = n.animatingTo), n.container.unbind("webkitTransitionEnd transitionend"), n.container.bind("webkitTransitionEnd transitionend", function() {
                            clearTimeout(n.ensureAnimationEnd), n.wrapup(y)
                        }), clearTimeout(n.ensureAnimationEnd), n.ensureAnimationEnd = setTimeout(function() {
                            n.wrapup(y)
                        }, n.vars.animationSpeed + 100)) : n.container.animate(n.args, n.vars.animationSpeed, n.vars.easing, function() {
                            n.wrapup(y)
                        })
                    }
                    n.vars.smoothHeight && v.smoothHeight(n.vars.animationSpeed)
                }
            }, n.wrapup = function(t) {
                f || p || (0 === n.currentSlide && n.animatingTo === n.last && n.vars.animationLoop ? n.setProps(t, "jumpEnd") : n.currentSlide === n.last && 0 === n.animatingTo && n.vars.animationLoop && n.setProps(t, "jumpStart")), n.animating = !1, n.currentSlide = n.animatingTo, n.vars.after(n)
            }, n.animateSlides = function() {
                !n.animating && e && n.flexAnimate(n.getTarget("next"))
            }, n.pause = function() {
                clearInterval(n.animatedSlides), n.animatedSlides = null, n.playing = !1, n.vars.pausePlay && v.pausePlay.update("play"), n.syncExists && v.sync("pause")
            }, n.play = function() {
                n.playing && clearInterval(n.animatedSlides), n.animatedSlides = n.animatedSlides || setInterval(n.animateSlides, n.vars.slideshowSpeed), n.started = n.playing = !0, n.vars.pausePlay && v.pausePlay.update("pause"), n.syncExists && v.sync("play")
            }, n.stop = function() {
                n.pause(), n.stopped = !0
            }, n.canAdvance = function(t, e) {
                var i = m ? n.pagingCount - 1 : n.last;
                return !!e || (!(!m || n.currentItem !== n.count - 1 || 0 !== t || "prev" !== n.direction) || (!m || 0 !== n.currentItem || t !== n.pagingCount - 1 || "next" === n.direction) && (!(t === n.currentSlide && !m) && (!!n.vars.animationLoop || (!n.atEnd || 0 !== n.currentSlide || t !== i || "next" === n.direction) && (!n.atEnd || n.currentSlide !== i || 0 !== t || "next" !== n.direction))))
            }, n.getTarget = function(t) {
                return n.direction = t, "next" === t ? n.currentSlide === n.last ? 0 : n.currentSlide + 1 : 0 === n.currentSlide ? n.last : n.currentSlide - 1
            }, n.setProps = function(t, e, i) {
                var s, r = (s = t || (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo, -1 * function() {
                    if (p) return "setTouch" === e ? t : d && n.animatingTo === n.last ? 0 : d ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : n.animatingTo === n.last ? n.limit : s;
                    switch (e) {
                        case "setTotal":
                            return d ? (n.count - 1 - n.currentSlide + n.cloneOffset) * t : (n.currentSlide + n.cloneOffset) * t;
                        case "setTouch":
                            return t;
                        case "jumpEnd":
                            return d ? t : n.count * t;
                        case "jumpStart":
                            return d ? n.count * t : t;
                        default:
                            return t
                    }
                }() + "px");
                n.transitions && (r = c ? "translate3d(0," + r + ",0)" : "translate3d(" + r + ",0,0)", i = void 0 !== i ? i / 1e3 + "s" : "0s", n.container.css("-" + n.pfx + "-transition-duration", i), n.container.css("transition-duration", i)), n.args[n.prop] = r, (n.transitions || void 0 === i) && n.container.css(n.args), n.container.css("transform", r)
            }, n.setup = function(e) {
                var i, s;
                f ? (n.slides.css({
                    width: "100%",
                    float: "left",
                    marginRight: "-100%",
                    position: "relative"
                }), "init" === e && (l ? n.slides.css({
                    opacity: 0,
                    display: "block",
                    webkitTransition: "opacity " + n.vars.animationSpeed / 1e3 + "s ease",
                    zIndex: 1
                }).eq(n.currentSlide).css({
                    opacity: 1,
                    zIndex: 2
                }) : 0 == n.vars.fadeFirstSlide ? n.slides.css({
                    opacity: 0,
                    display: "block",
                    zIndex: 1
                }).eq(n.currentSlide).css({
                    zIndex: 2
                }).css({
                    opacity: 1
                }) : n.slides.css({
                    opacity: 0,
                    display: "block",
                    zIndex: 1
                }).eq(n.currentSlide).css({
                    zIndex: 2
                }).animate({
                    opacity: 1
                }, n.vars.animationSpeed, n.vars.easing)), n.vars.smoothHeight && v.smoothHeight()) : ("init" === e && (n.viewport = t('<div class="' + a + 'viewport"></div>').css({
                    overflow: "hidden",
                    position: "relative"
                }).appendTo(n).append(n.container), n.cloneCount = 0, n.cloneOffset = 0, d && (s = t.makeArray(n.slides).reverse(), n.slides = t(s), n.container.empty().append(n.slides))), n.vars.animationLoop && !p && (n.cloneCount = 2, n.cloneOffset = 1, "init" !== e && n.container.find(".clone").remove(), n.container.append(v.uniqueID(n.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(v.uniqueID(n.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), n.newSlides = t(n.vars.selector, n), i = d ? n.count - 1 - n.currentSlide + n.cloneOffset : n.currentSlide + n.cloneOffset, c && !p ? (n.container.height(200 * (n.count + n.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
                    n.newSlides.css({
                        display: "block"
                    }), n.doMath(), n.viewport.height(n.h), n.setProps(i * n.h, "init")
                }, "init" === e ? 100 : 0)) : (n.container.width(200 * (n.count + n.cloneCount) + "%"), n.setProps(i * n.computedW, "init"), setTimeout(function() {
                    n.doMath(), n.newSlides.css({
                        width: n.computedW,
                        marginRight: n.computedM,
                        float: "left",
                        display: "block"
                    }), n.vars.smoothHeight && v.smoothHeight()
                }, "init" === e ? 100 : 0)));
                p || n.slides.removeClass(a + "active-slide").eq(n.currentSlide).addClass(a + "active-slide"), n.vars.init(n)
            }, n.doMath = function() {
                var t = n.slides.first(),
                    e = n.vars.itemMargin,
                    i = n.vars.minItems,
                    s = n.vars.maxItems;
                n.w = void 0 === n.viewport ? n.width() : n.viewport.width(), n.h = t.height(), n.boxPadding = t.outerWidth() - t.width(), p ? (n.itemT = n.vars.itemWidth + e, n.itemM = e, n.minW = i ? i * n.itemT : n.w, n.maxW = s ? s * n.itemT - e : n.w, n.itemW = n.minW > n.w ? (n.w - e * (i - 1)) / i : n.maxW < n.w ? (n.w - e * (s - 1)) / s : n.vars.itemWidth > n.w ? n.w : n.vars.itemWidth, n.visible = Math.floor(n.w / n.itemW), n.move = n.vars.move > 0 && n.vars.move < n.visible ? n.vars.move : n.visible, n.pagingCount = Math.ceil((n.count - n.visible) / n.move + 1), n.last = n.pagingCount - 1, n.limit = 1 === n.pagingCount ? 0 : n.vars.itemWidth > n.w ? n.itemW * (n.count - 1) + e * (n.count - 1) : (n.itemW + e) * n.count - n.w - e) : (n.itemW = n.w, n.itemM = e, n.pagingCount = n.count, n.last = n.count - 1), n.computedW = n.itemW - n.boxPadding, n.computedM = n.itemM
            }, n.update = function(t, e) {
                n.doMath(), p || (t < n.currentSlide ? n.currentSlide += 1 : t <= n.currentSlide && 0 !== t && (n.currentSlide -= 1), n.animatingTo = n.currentSlide), n.vars.controlNav && !n.manualControls && ("add" === e && !p || n.pagingCount > n.controlNav.length ? v.controlNav.update("add") : ("remove" === e && !p || n.pagingCount < n.controlNav.length) && (p && n.currentSlide > n.last && (n.currentSlide -= 1, n.animatingTo -= 1), v.controlNav.update("remove", n.last))), n.vars.directionNav && v.directionNav.update()
            }, n.addSlide = function(e, i) {
                var s = t(e);
                n.count += 1, n.last = n.count - 1, c && d ? void 0 !== i ? n.slides.eq(n.count - i).after(s) : n.container.prepend(s) : void 0 !== i ? n.slides.eq(i).before(s) : n.container.append(s), n.update(i, "add"), n.slides = t(n.vars.selector + ":not(.clone)", n), n.setup(), n.vars.added(n)
            }, n.removeSlide = function(e) {
                var i = isNaN(e) ? n.slides.index(t(e)) : e;
                n.count -= 1, n.last = n.count - 1, isNaN(e) ? t(e, n.slides).remove() : c && d ? n.slides.eq(n.last).remove() : n.slides.eq(e).remove(), n.doMath(), n.update(i, "remove"), n.slides = t(n.vars.selector + ":not(.clone)", n), n.setup(), n.vars.removed(n)
            }, v.init()
        }, t(window).blur(function(t) {
            e = !1
        }).focus(function(t) {
            e = !0
        }), t.flexslider.defaults = {
            namespace: "flex-",
            selector: ".slides > li",
            animation: "fade",
            easing: "swing",
            direction: "horizontal",
            reverse: !1,
            animationLoop: !0,
            smoothHeight: !1,
            startAt: 0,
            slideshow: !0,
            slideshowSpeed: 7e3,
            animationSpeed: 600,
            initDelay: 0,
            randomize: !1,
            fadeFirstSlide: !0,
            thumbCaptions: !1,
            pauseOnAction: !0,
            pauseOnHover: !1,
            pauseInvisible: !0,
            useCSS: !0,
            touch: !0,
            video: !1,
            controlNav: !0,
            directionNav: !0,
            prevText: "Previous",
            nextText: "Next",
            keyboard: !0,
            multipleKeyboard: !1,
            mousewheel: !1,
            pausePlay: !1,
            pauseText: "Pause",
            playText: "Play",
            controlsContainer: "",
            manualControls: "",
            customDirectionNav: "",
            sync: "",
            asNavFor: "",
            itemWidth: 0,
            itemMargin: 0,
            minItems: 1,
            maxItems: 0,
            move: 0,
            allowOneSlide: !0,
            start: function() {},
            before: function() {},
            after: function() {},
            end: function() {},
            added: function() {},
            removed: function() {},
            init: function() {}
        }, t.fn.flexslider = function(e) {
            if (void 0 === e && (e = {}), "object" == typeof e) return this.each(function() {
                var i = t(this),
                    s = e.selector ? e.selector : ".slides > li",
                    n = i.find(s);
                1 === n.length && !1 === e.allowOneSlide || 0 === n.length ? (n.fadeIn(400), e.start && e.start(i)) : void 0 === i.data("flexslider") && new t.flexslider(this, e)
            });
            var i = t(this).data("flexslider");
            switch (e) {
                case "play":
                    i.play();
                    break;
                case "pause":
                    i.pause();
                    break;
                case "stop":
                    i.stop();
                    break;
                case "next":
                    i.flexAnimate(i.getTarget("next"), !0);
                    break;
                case "prev":
                case "previous":
                    i.flexAnimate(i.getTarget("prev"), !0);
                    break;
                default:
                    "number" == typeof e && i.flexAnimate(e, !0)
            }
        }
    }(jQuery),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function(t) {
        t.fn.tweet = function(e) {
            var i = t.extend({
                    modpath: "php/twitter/cws_tweet.php",
                    username: null,
                    list_id: null,
                    list: null,
                    favorites: !1,
                    query: null,
                    avatar_size: null,
                    count: 3,
                    fetch: null,
                    page: 1,
                    retweets: !0,
                    intro_text: null,
                    outro_text: null,
                    join_text: null,
                    auto_join_text_default: "i said,",
                    auto_join_text_ed: "i",
                    auto_join_text_ing: "i am",
                    auto_join_text_reply: "i replied to",
                    auto_join_text_url: "i was looking at",
                    loading_text: null,
                    refresh_interval: null,
                    twitter_url: "twitter.com",
                    twitter_api_url: "api.twitter.com",
                    twitter_search_url: "api.twitter.com",
                    template: "{avatar}{time}{join}{text}",
                    comparator: function(t, e) {
                        return e.tweet_time - t.tweet_time
                    },
                    filter: function(t) {
                        return !0
                    }
                }, e),
                s = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi;

            function n(t, e) {
                if ("string" == typeof t) {
                    var i = t;
                    for (var s in e) {
                        var n = e[s];
                        i = i.replace(new RegExp("{" + s + "}", "g"), null === n ? "" : n)
                    }
                    return i
                }
                return t(e)
            }

            function r(e, i) {
                return function() {
                    var s = [];
                    return this.each(function() {
                        s.push(this.replace(e, i))
                    }), t(s)
                }
            }

            function a(t) {
                return t.replace(/</g, "&lt;").replace(/>/g, "^&gt;")
            }

            function o(e) {
                var r, o, l, h, u = {};
                return u.item = e, u.source = e.source, u.name = e.from_user_name || e.user.name, u.screen_name = e.from_user || e.user.screen_name, u.avatar_size = i.avatar_size, u.avatar_url = function t(e, i) {
                    return i ? "user" in e ? e.user.profile_image_url_https : t(e, !1).replace(/^http:\/\/[a-z0-9]{1,3}\.twimg\.com\//, "https://s3.amazonaws.com/twitter_production/") : e.profile_image_url || e.user.profile_image_url
                }(e, "https:" === document.location.protocol), u.retweet = void 0 !== e.retweeted_status, u.tweet_time = (r = e.created_at, Date.parse(r.replace(/^([a-z]{3})( [a-z]{3} \d\d?)(.*)( \d{4})$/i, "$1,$2$4$3"))), u.join_text = "auto" == i.join_text ? (o = e.text).match(/^(@([A-Za-z0-9-_]+)) .*/i) ? i.auto_join_text_reply : o.match(s) ? i.auto_join_text_url : o.match(/^((\w+ed)|just) .*/im) ? i.auto_join_text_ed : o.match(/^(\w*ing) .*/i) ? i.auto_join_text_ing : i.auto_join_text_default : i.join_text, u.tweet_id = e.id_str, u.twitter_base = "http://" + i.twitter_url + "/", u.user_url = u.twitter_base + u.screen_name, u.tweet_url = u.user_url + "/status/" + u.tweet_id, u.reply_url = u.twitter_base + "intent/tweet?in_reply_to=" + u.tweet_id, u.retweet_url = u.twitter_base + "intent/retweet?tweet_id=" + u.tweet_id, u.favorite_url = u.twitter_base + "intent/favorite?tweet_id=" + u.tweet_id, u.retweeted_screen_name = u.retweet && e.retweeted_status.user.screen_name, u.tweet_relative_time = function(t) {
                    var e = arguments.length > 1 ? arguments[1] : new Date,
                        i = parseInt((e.getTime() - t) / 1e3, 10);
                    return i < 1 ? "just now" : i < 60 ? i + " seconds ago" : i < 120 ? "about a minute ago" : i < 2700 ? "about " + parseInt(i / 60, 10).toString() + " minutes ago" : i < 7200 ? "about an hour ago" : i < 86400 ? "about " + parseInt(i / 3600, 10).toString() + " hours ago" : i < 172800 ? "about a day ago" : "about " + parseInt(i / 86400, 10).toString() + " days ago"
                }(u.tweet_time), u.entities = e.entities ? (e.entities.urls || []).concat(e.entities.media || []) : [], u.tweet_raw_text = u.retweet ? "RT @" + u.retweeted_screen_name + " " + e.retweeted_status.text : e.text, u.tweet_text = t([(l = u.tweet_raw_text, h = u.entities, l.replace(s, function(t) {
                    for (var e = /^[a-z]+:/i.test(t) ? t : "http://" + t, i = t, s = 0; s < h.length; ++s) {
                        var n = h[s];
                        if (n.url == e && n.expanded_url) {
                            e = n.expanded_url, i = n.display_url;
                            break
                        }
                    }
                    return '<a href="' + a(e) + '">' + a(i) + "</a>"
                }))]).linkUser().linkHash()[0], u.tweet_text_fancy = t([u.tweet_text]).makeHeart()[0], u.user = n('<a class="tweet_user" href="{user_url}">{screen_name}</a>', u), u.join = i.join_text ? n(' <span class="tweet_join">{join_text}</span> ', u) : " ", u.avatar = u.avatar_size ? n('<a class="tweet_avatar" href="{user_url}"><img src="{avatar_url}" height="{avatar_size}" width="{avatar_size}" alt="{screen_name}\'s avatar" title="{screen_name}\'s avatar" border="0"/></a>', u) : "", u.time = n('<span class="tweet_time"><a href="{tweet_url}" title="view tweet on twitter">{tweet_relative_time}</a></span>', u), u.text = n('<span class="tweet_text">{tweet_text_fancy}</span>', u), u.reply_action = n('<a class="tweet_action tweet_reply" href="{reply_url}">reply</a>', u), u.retweet_action = n('<a class="tweet_action tweet_retweet" href="{retweet_url}">retweet</a>', u), u.favorite_action = n('<a class="tweet_action tweet_favorite" href="{favorite_url}">favorite</a>', u), u
            }
            return t.extend({
                tweet: {
                    t: n
                }
            }), t.fn.extend({
                linkUser: r(/(^|[\W])@(\w+)/gi, '$1<span class="at">@</span><a href="http://' + i.twitter_url + '/$2">$2</a>'),
                linkHash: r(/(?:^| )[\#]+([\w\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0600-\u06ff]+)/gi, ' <a href="https://twitter.com/search?q=%23$1' + (i.username && 1 == i.username.length && !i.list ? "&from=" + i.username.join("%2BOR%2B") : "") + '" class="tweet_hashtag">#$1</a>'),
                makeHeart: r(/(&lt;)+[3]/gi, "<tt class='heart'>&#x2665;</tt>")
            }), this.each(function(e, s) {
                var r = t('<ul class="tweet_list">'),
                    a = '<p class="tweet_intro">' + i.intro_text + "</p>",
                    l = '<p class="tweet_outro">' + i.outro_text + "</p>",
                    h = t('<p class="loading">' + i.loading_text + "</p>");
                i.username && "string" == typeof i.username && (i.username = [i.username]), t(s).unbind("tweet:load").bind("tweet:load", function() {
                    i.loading_text && t(s).empty().append(h), t.ajax({
                        dataType: "json",
                        type: "post",
                        async: !1,
                        url: i.modpath || "/twitter/",
                        data: {
                            request: function() {
                                i.modpath;
                                var e = null === i.fetch ? i.count : i.fetch,
                                    s = {
                                        include_entities: 1
                                    };
                                if (i.list) return {
                                    host: i.twitter_api_url,
                                    url: "/1.1/lists/statuses.json",
                                    parameters: t.extend({}, s, {
                                        list_id: i.list_id,
                                        slug: i.list,
                                        owner_screen_name: i.username,
                                        page: i.page,
                                        count: e,
                                        include_rts: i.retweets ? 1 : 0
                                    })
                                };
                                if (i.favorites) return {
                                    host: i.twitter_api_url,
                                    url: "/1.1/favorites/list.json",
                                    parameters: t.extend({}, s, {
                                        list_id: i.list_id,
                                        screen_name: i.username,
                                        page: i.page,
                                        count: e
                                    })
                                };
                                if (null === i.query && 1 === i.username.length) return {
                                    host: i.twitter_api_url,
                                    url: "/1.1/statuses/user_timeline.json",
                                    parameters: t.extend({}, s, {
                                        screen_name: i.username,
                                        page: i.page,
                                        count: e,
                                        include_rts: i.retweets ? 1 : 0
                                    })
                                };
                                var n = i.query || "from:" + i.username.join(" OR from:");
                                return {
                                    host: i.twitter_search_url,
                                    url: "/1.1/search/tweets.json",
                                    parameters: t.extend({}, s, {
                                        q: n,
                                        count: e
                                    })
                                }
                            }()
                        },
                        success: function(e, h) {
                            e.message && console.log(e.message);
                            var u = e;
                            t(s).empty().append(r), i.intro_text && r.before(a), r.empty(), resp = u;
                            var c = t.map(resp, o);
                            c = t.grep(c, i.filter).sort(i.comparator).slice(0, i.count), r.append(t.map(c, function(t) {
                                return "<li>" + n(i.template, t) + "</li>"
                            }).join("")).children("li:first").addClass("tweet_first").end().children("li:odd").addClass("tweet_even").end().children("li:even").addClass("tweet_odd"), i.outro_text && r.after(l), t(s).trigger("loaded").trigger(c ? "empty" : "full"), i.refresh_interval && window.setTimeout(function() {
                                t(s).trigger("tweet:load")
                            }, 1e3 * i.refresh_interval)
                        }
                    })
                }).trigger("tweet:load")
            })
        }
    }),
    function(t) {
        t.extend(t.fn, {
            validate: function(e) {
                if (this.length) {
                    var i = t.data(this[0], "validator");
                    return i || (this.attr("novalidate", "novalidate"), i = new t.validator(e, this[0]), t.data(this[0], "validator", i), i.settings.onsubmit && (this.validateDelegate(":submit", "click", function(e) {
                        i.settings.submitHandler && (i.submitButton = e.target), t(e.target).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== t(e.target).attr("formnovalidate") && (i.cancelSubmit = !0)
                    }), this.submit(function(e) {
                        function s() {
                            var s;
                            return !i.settings.submitHandler || (i.submitButton && (s = t("<input type='hidden'/>").attr("name", i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)), i.settings.submitHandler.call(i, i.currentForm, e), i.submitButton && s.remove(), !1)
                        }
                        return i.settings.debug && e.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, s()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : s() : (i.focusInvalid(), !1)
                    })), i)
                }
                e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
            },
            valid: function() {
                var e, i;
                return t(this[0]).is("form") ? e = this.validate().form() : (e = !0, i = t(this[0].form).validate(), this.each(function() {
                    e = i.element(this) && e
                })), e
            },
            removeAttrs: function(e) {
                var i = {},
                    s = this;
                return t.each(e.split(/\s/), function(t, e) {
                    i[e] = s.attr(e), s.removeAttr(e)
                }), i
            },
            rules: function(e, i) {
                var s, n, r, a, o, l, h = this[0];
                if (e) switch (s = t.data(h.form, "validator").settings, n = s.rules, r = t.validator.staticRules(h), e) {
                    case "add":
                        t.extend(r, t.validator.normalizeRule(i)), delete r.messages, n[h.name] = r, i.messages && (s.messages[h.name] = t.extend(s.messages[h.name], i.messages));
                        break;
                    case "remove":
                        return i ? (l = {}, t.each(i.split(/\s/), function(e, i) {
                            l[i] = r[i], delete r[i], "required" === i && t(h).removeAttr("aria-required")
                        }), l) : (delete n[h.name], r)
                }
                return (a = t.validator.normalizeRules(t.extend({}, t.validator.classRules(h), t.validator.attributeRules(h), t.validator.dataRules(h), t.validator.staticRules(h)), h)).required && (o = a.required, delete a.required, a = t.extend({
                    required: o
                }, a), t(h).attr("aria-required", "true")), a.remote && (o = a.remote, delete a.remote, a = t.extend(a, {
                    remote: o
                })), a
            }
        }), t.extend(t.expr[":"], {
            blank: function(e) {
                return !t.trim("" + t(e).val())
            },
            filled: function(e) {
                return !!t.trim("" + t(e).val())
            },
            unchecked: function(e) {
                return !t(e).prop("checked")
            }
        }), t.validator = function(e, i) {
            this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = i, this.init()
        }, t.validator.format = function(e, i) {
            return 1 === arguments.length ? function() {
                var i = t.makeArray(arguments);
                return i.unshift(e), t.validator.format.apply(this, i)
            } : (arguments.length > 2 && i.constructor !== Array && (i = t.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), t.each(i, function(t, i) {
                e = e.replace(new RegExp("\\{" + t + "\\}", "g"), function() {
                    return i
                })
            }), e)
        }, t.extend(t.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                validClass: "valid",
                errorElement: "label",
                focusInvalid: !0,
                errorContainer: t([]),
                errorLabelContainer: t([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function(t) {
                    this.lastActive = t, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(t)).hide())
                },
                onfocusout: function(t) {
                    this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
                },
                onkeyup: function(t, e) {
                    (9 !== e.which || "" !== this.elementValue(t)) && (t.name in this.submitted || t === this.lastElement) && this.element(t)
                },
                onclick: function(t) {
                    t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
                },
                highlight: function(e, i, s) {
                    "radio" === e.type ? this.findByName(e.name).addClass(i).removeClass(s) : t(e).addClass(i).removeClass(s)
                },
                unhighlight: function(e, i, s) {
                    "radio" === e.type ? this.findByName(e.name).removeClass(i).addClass(s) : t(e).removeClass(i).addClass(s)
                }
            },
            setDefaults: function(e) {
                t.extend(t.validator.defaults, e)
            },
            messages: {
                required: "This field is required.",
                remote: "Please fix this field.",
                email: "Please enter a valid email address.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date (ISO).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                creditcard: "Please enter a valid credit card number.",
                equalTo: "Please enter the same value again.",
                maxlength: t.validator.format("Please enter no more than {0} characters."),
                minlength: t.validator.format("Please enter at least {0} characters."),
                rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
                range: t.validator.format("Please enter a value between {0} and {1}."),
                max: t.validator.format("Please enter a value less than or equal to {0}."),
                min: t.validator.format("Please enter a value greater than or equal to {0}.")
            },
            autoCreateRanges: !1,
            prototype: {
                init: function() {
                    function e(e) {
                        var i = t.data(this[0].form, "validator"),
                            s = "on" + e.type.replace(/^validate/, ""),
                            n = i.settings;
                        n[s] && !this.is(n.ignore) && n[s].call(i, this[0], e)
                    }
                    this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                    var i, s = this.groups = {};
                    t.each(this.settings.groups, function(e, i) {
                        "string" == typeof i && (i = i.split(/\s/)), t.each(i, function(t, i) {
                            s[i] = e
                        })
                    }), i = this.settings.rules, t.each(i, function(e, s) {
                        i[e] = t.validator.normalizeRule(s)
                    }), t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", e).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", e), this.settings.invalidHandler && t(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler), t(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
                },
                form: function() {
                    return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
                },
                checkForm: function() {
                    this.prepareForm();
                    for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
                    return this.valid()
                },
                element: function(e) {
                    var i = this.clean(e),
                        s = this.validationTargetFor(i),
                        n = !0;
                    return this.lastElement = s, void 0 === s ? delete this.invalid[i.name] : (this.prepareElement(s), this.currentElements = t(s), (n = !1 !== this.check(s)) ? delete this.invalid[s.name] : this.invalid[s.name] = !0), t(e).attr("aria-invalid", !n), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), n
                },
                showErrors: function(e) {
                    if (e) {
                        t.extend(this.errorMap, e), this.errorList = [];
                        for (var i in e) this.errorList.push({
                            message: e[i],
                            element: this.findByName(i)[0]
                        });
                        this.successList = t.grep(this.successList, function(t) {
                            return !(t.name in e)
                        })
                    }
                    this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
                },
                resetForm: function() {
                    t.fn.resetForm && t(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")
                },
                numberOfInvalids: function() {
                    return this.objectLength(this.invalid)
                },
                objectLength: function(t) {
                    var e, i = 0;
                    for (e in t) i++;
                    return i
                },
                hideErrors: function() {
                    this.addWrapper(this.toHide).hide()
                },
                valid: function() {
                    return 0 === this.size()
                },
                size: function() {
                    return this.errorList.length
                },
                focusInvalid: function() {
                    if (this.settings.focusInvalid) try {
                        t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (t) {}
                },
                findLastActive: function() {
                    var e = this.lastActive;
                    return e && 1 === t.grep(this.errorList, function(t) {
                        return t.element.name === e.name
                    }).length && e
                },
                elements: function() {
                    var e = this,
                        i = {};
                    return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                        return !this.name && e.settings.debug && window.console && console.error("%o has no name assigned", this), !(this.name in i || !e.objectLength(t(this).rules())) && (i[this.name] = !0, !0)
                    })
                },
                clean: function(e) {
                    return t(e)[0]
                },
                errors: function() {
                    var e = this.settings.errorClass.split(" ").join(".");
                    return t(this.settings.errorElement + "." + e, this.errorContext)
                },
                reset: function() {
                    this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([]), this.currentElements = t([])
                },
                prepareForm: function() {
                    this.reset(), this.toHide = this.errors().add(this.containers)
                },
                prepareElement: function(t) {
                    this.reset(), this.toHide = this.errorsFor(t)
                },
                elementValue: function(e) {
                    var i, s = t(e),
                        n = s.attr("type");
                    return "radio" === n || "checkbox" === n ? t("input[name='" + s.attr("name") + "']:checked").val() : "string" == typeof(i = s.val()) ? i.replace(/\r/g, "") : i
                },
                check: function(e) {
                    e = this.validationTargetFor(this.clean(e));
                    var i, s, n, r = t(e).rules(),
                        a = t.map(r, function(t, e) {
                            return e
                        }).length,
                        o = !1,
                        l = this.elementValue(e);
                    for (s in r) {
                        n = {
                            method: s,
                            parameters: r[s]
                        };
                        try {
                            if ("dependency-mismatch" === (i = t.validator.methods[s].call(this, l, e, n.parameters)) && 1 === a) {
                                o = !0;
                                continue
                            }
                            if (o = !1, "pending" === i) return void(this.toHide = this.toHide.not(this.errorsFor(e)));
                            if (!i) return this.formatAndAdd(e, n), !1
                        } catch (t) {
                            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + n.method + "' method.", t), t
                        }
                    }
                    if (!o) return this.objectLength(r) && this.successList.push(e), !0
                },
                customDataMessage: function(e, i) {
                    return t(e).data("msg" + i[0].toUpperCase() + i.substring(1).toLowerCase()) || t(e).data("msg")
                },
                customMessage: function(t, e) {
                    var i = this.settings.messages[t];
                    return i && (i.constructor === String ? i : i[e])
                },
                findDefined: function() {
                    for (var t = 0; t < arguments.length; t++)
                        if (void 0 !== arguments[t]) return arguments[t]
                },
                defaultMessage: function(e, i) {
                    return this.findDefined(this.customMessage(e.name, i), this.customDataMessage(e, i), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[i], "<strong>Warning: No message defined for " + e.name + "</strong>")
                },
                formatAndAdd: function(e, i) {
                    var s = this.defaultMessage(e, i.method),
                        n = /\$?\{(\d+)\}/g;
                    "function" == typeof s ? s = s.call(this, i.parameters, e) : n.test(s) && (s = t.validator.format(s.replace(n, "{$1}"), i.parameters)), this.errorList.push({
                        message: s,
                        element: e,
                        method: i.method
                    }), this.errorMap[e.name] = s, this.submitted[e.name] = s
                },
                addWrapper: function(t) {
                    return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
                },
                defaultShowErrors: function() {
                    var t, e, i;
                    for (t = 0; this.errorList[t]; t++) i = this.errorList[t], this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message);
                    if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                        for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
                    if (this.settings.unhighlight)
                        for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
                    this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
                },
                validElements: function() {
                    return this.currentElements.not(this.invalidElements())
                },
                invalidElements: function() {
                    return t(this.errorList).map(function() {
                        return this.element
                    })
                },
                showLabel: function(e, i) {
                    var s = this.errorsFor(e);
                    s.length ? (s.removeClass(this.settings.validClass).addClass(this.settings.errorClass), s.html(i)) : (s = t("<" + this.settings.errorElement + ">").attr("for", this.idOrName(e)).addClass(this.settings.errorClass).html(i || ""), this.settings.wrapper && (s = s.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(s).length || (this.settings.errorPlacement ? this.settings.errorPlacement(s, t(e)) : s.insertAfter(e))), !i && this.settings.success && (s.text(""), "string" == typeof this.settings.success ? s.addClass(this.settings.success) : this.settings.success(s, e)), this.toShow = this.toShow.add(s)
                },
                errorsFor: function(e) {
                    var i = this.idOrName(e);
                    return this.errors().filter(function() {
                        return t(this).attr("for") === i
                    })
                },
                idOrName: function(t) {
                    return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
                },
                validationTargetFor: function(t) {
                    return this.checkable(t) && (t = this.findByName(t.name).not(this.settings.ignore)[0]), t
                },
                checkable: function(t) {
                    return /radio|checkbox/i.test(t.type)
                },
                findByName: function(e) {
                    return t(this.currentForm).find("[name='" + e + "']")
                },
                getLength: function(e, i) {
                    switch (i.nodeName.toLowerCase()) {
                        case "select":
                            return t("option:selected", i).length;
                        case "input":
                            if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
                    }
                    return e.length
                },
                depend: function(t, e) {
                    return !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e)
                },
                dependTypes: {
                    boolean: function(t) {
                        return t
                    },
                    string: function(e, i) {
                        return !!t(e, i.form).length
                    },
                    function: function(t, e) {
                        return t(e)
                    }
                },
                optional: function(e) {
                    var i = this.elementValue(e);
                    return !t.validator.methods.required.call(this, i, e) && "dependency-mismatch"
                },
                startRequest: function(t) {
                    this.pending[t.name] || (this.pendingRequest++, this.pending[t.name] = !0)
                },
                stopRequest: function(e, i) {
                    this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
                },
                previousValue: function(e) {
                    return t.data(e, "previousValue") || t.data(e, "previousValue", {
                        old: null,
                        valid: !0,
                        message: this.defaultMessage(e, "remote")
                    })
                }
            },
            classRuleSettings: {
                required: {
                    required: !0
                },
                email: {
                    email: !0
                },
                url: {
                    url: !0
                },
                date: {
                    date: !0
                },
                dateISO: {
                    dateISO: !0
                },
                number: {
                    number: !0
                },
                digits: {
                    digits: !0
                },
                creditcard: {
                    creditcard: !0
                }
            },
            addClassRules: function(e, i) {
                e.constructor === String ? this.classRuleSettings[e] = i : t.extend(this.classRuleSettings, e)
            },
            classRules: function(e) {
                var i = {},
                    s = t(e).attr("class");
                return s && t.each(s.split(" "), function() {
                    this in t.validator.classRuleSettings && t.extend(i, t.validator.classRuleSettings[this])
                }), i
            },
            attributeRules: function(e) {
                var i, s, n = {},
                    r = t(e),
                    a = e.getAttribute("type");
                for (i in t.validator.methods) "required" === i ? (s = e.getAttribute(i), "" === s && (s = !0), s = !!s) : s = r.attr(i), /min|max/.test(i) && (null === a || /number|range|text/.test(a)) && (s = Number(s)), s || 0 === s ? n[i] = s : a === i && "range" !== a && (n[i] = !0);
                return n.maxlength && /-1|2147483647|524288/.test(n.maxlength) && delete n.maxlength, n
            },
            dataRules: function(e) {
                var i, s, n = {},
                    r = t(e);
                for (i in t.validator.methods) s = r.data("rule" + i[0].toUpperCase() + i.substring(1).toLowerCase()), void 0 !== s && (n[i] = s);
                return n
            },
            staticRules: function(e) {
                var i = {},
                    s = t.data(e.form, "validator");
                return s.settings.rules && (i = t.validator.normalizeRule(s.settings.rules[e.name]) || {}), i
            },
            normalizeRules: function(e, i) {
                return t.each(e, function(s, n) {
                    if (!1 !== n) {
                        if (n.param || n.depends) {
                            var r = !0;
                            switch (typeof n.depends) {
                                case "string":
                                    r = !!t(n.depends, i.form).length;
                                    break;
                                case "function":
                                    r = n.depends.call(i, i)
                            }
                            r ? e[s] = void 0 === n.param || n.param : delete e[s]
                        }
                    } else delete e[s]
                }), t.each(e, function(s, n) {
                    e[s] = t.isFunction(n) ? n(i) : n
                }), t.each(["minlength", "maxlength"], function() {
                    e[this] && (e[this] = Number(e[this]))
                }), t.each(["rangelength", "range"], function() {
                    var i;
                    e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (i = e[this].split(/[\s,]+/), e[this] = [Number(i[0]), Number(i[1])]))
                }), t.validator.autoCreateRanges && (e.min && e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), e.minlength && e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e
            },
            normalizeRule: function(e) {
                if ("string" == typeof e) {
                    var i = {};
                    t.each(e.split(/\s/), function() {
                        i[this] = !0
                    }), e = i
                }
                return e
            },
            addMethod: function(e, i, s) {
                t.validator.methods[e] = i, t.validator.messages[e] = void 0 !== s ? s : t.validator.messages[e], i.length < 3 && t.validator.addClassRules(e, t.validator.normalizeRule(e))
            },
            methods: {
                required: function(e, i, s) {
                    if (!this.depend(s, i)) return "dependency-mismatch";
                    if ("select" === i.nodeName.toLowerCase()) {
                        var n = t(i).val();
                        return n && n.length > 0
                    }
                    return this.checkable(i) ? this.getLength(e, i) > 0 : t.trim(e).length > 0
                },
                email: function(t, e) {
                    return this.optional(e) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)
                },
                url: function(t, e) {
                    return this.optional(e) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)
                },
                date: function(t, e) {
                    return this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString())
                },
                dateISO: function(t, e) {
                    return this.optional(e) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t)
                },
                number: function(t, e) {
                    return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
                },
                digits: function(t, e) {
                    return this.optional(e) || /^\d+$/.test(t)
                },
                creditcard: function(t, e) {
                    if (this.optional(e)) return "dependency-mismatch";
                    if (/[^0-9 \-]+/.test(t)) return !1;
                    var i, s, n = 0,
                        r = 0,
                        a = !1;
                    if ((t = t.replace(/\D/g, "")).length < 13 || t.length > 19) return !1;
                    for (i = t.length - 1; i >= 0; i--) s = t.charAt(i), r = parseInt(s, 10), a && (r *= 2) > 9 && (r -= 9), n += r, a = !a;
                    return n % 10 == 0
                },
                minlength: function(e, i, s) {
                    var n = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
                    return this.optional(i) || n >= s
                },
                maxlength: function(e, i, s) {
                    var n = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
                    return this.optional(i) || s >= n
                },
                rangelength: function(e, i, s) {
                    var n = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
                    return this.optional(i) || n >= s[0] && n <= s[1]
                },
                min: function(t, e, i) {
                    return this.optional(e) || t >= i
                },
                max: function(t, e, i) {
                    return this.optional(e) || i >= t
                },
                range: function(t, e, i) {
                    return this.optional(e) || t >= i[0] && t <= i[1]
                },
                equalTo: function(e, i, s) {
                    var n = t(s);
                    return this.settings.onfocusout && n.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                        t(i).valid()
                    }), e === n.val()
                },
                remote: function(e, i, s) {
                    if (this.optional(i)) return "dependency-mismatch";
                    var n, r, a = this.previousValue(i);
                    return this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), a.originalMessage = this.settings.messages[i.name].remote, this.settings.messages[i.name].remote = a.message, s = "string" == typeof s && {
                        url: s
                    } || s, a.old === e ? a.valid : (a.old = e, n = this, this.startRequest(i), (r = {})[i.name] = e, t.ajax(t.extend(!0, {
                        url: s,
                        mode: "abort",
                        port: "validate" + i.name,
                        dataType: "json",
                        data: r,
                        context: n.currentForm,
                        success: function(s) {
                            var r, o, l, h = !0 === s || "true" === s;
                            n.settings.messages[i.name].remote = a.originalMessage, h ? (l = n.formSubmitted, n.prepareElement(i), n.formSubmitted = l, n.successList.push(i), delete n.invalid[i.name], n.showErrors()) : (r = {}, o = s || n.defaultMessage(i, "remote"), r[i.name] = a.message = t.isFunction(o) ? o(e) : o, n.invalid[i.name] = !0, n.showErrors(r)), a.valid = h, n.stopRequest(i, h)
                        }
                    }, s)), "pending")
                }
            }
        }), t.format = function() {
            throw "$.format has been deprecated. Please use $.validator.format instead."
        }
    }(jQuery),
    function(t) {
        var e, i = {};
        t.ajaxPrefilter ? t.ajaxPrefilter(function(t, e, s) {
            var n = t.port;
            "abort" === t.mode && (i[n] && i[n].abort(), i[n] = s)
        }) : (e = t.ajax, t.ajax = function(s) {
            var n = ("mode" in s ? s : t.ajaxSettings).mode,
                r = ("port" in s ? s : t.ajaxSettings).port;
            return "abort" === n ? (i[r] && i[r].abort(), i[r] = e.apply(this, arguments), i[r]) : e.apply(this, arguments)
        })
    }(jQuery),
    function(t) {
        t.extend(t.fn, {
            validateDelegate: function(e, i, s) {
                return this.bind(i, function(i) {
                    var n = t(i.target);
                    return n.is(e) ? s.apply(n, arguments) : void 0
                })
            }
        })
    }(jQuery), "function" != typeof Object.create && (Object.create = function(t) {
        function e() {}
        return e.prototype = t, new e
    }),
    function(t, e, i) {
        var s = {
            init: function(e, i) {
                var s = this;
                s.$elem = t(i), s.options = t.extend({}, t.fn.owlCarousel.options, s.$elem.data(), e), s.userOptions = e, s.loadContent()
            },
            loadContent: function() {
                var e, i = this;
                "function" == typeof i.options.beforeInit && i.options.beforeInit.apply(this, [i.$elem]), "string" == typeof i.options.jsonPath ? (e = i.options.jsonPath, t.getJSON(e, function(t) {
                    var e, s = "";
                    if ("function" == typeof i.options.jsonSuccess) i.options.jsonSuccess.apply(this, [t]);
                    else {
                        for (e in t.owl) t.owl.hasOwnProperty(e) && (s += t.owl[e].item);
                        i.$elem.html(s)
                    }
                    i.logIn()
                })) : i.logIn()
            },
            logIn: function() {
                var t = this;
                t.$elem.data("owl-originalStyles", t.$elem.attr("style")), t.$elem.data("owl-originalClasses", t.$elem.attr("class")), t.$elem.css({
                    opacity: 0
                }), t.orignalItems = t.options.items, t.checkBrowser(), t.wrapperWidth = 0, t.checkVisible = null, t.setVars()
            },
            setVars: function() {
                var t = this;
                if (0 === t.$elem.children().length) return !1;
                t.baseClass(), t.eventTypes(), t.$userItems = t.$elem.children(), t.itemsAmount = t.$userItems.length, t.wrapItems(), t.$owlItems = t.$elem.find(".owl-item"), t.$owlWrapper = t.$elem.find(".owl-wrapper"), t.playDirection = "next", t.prevItem = 0, t.prevArr = [0], t.currentItem = 0, t.customEvents(), t.onStartup()
            },
            onStartup: function() {
                var t = this;
                t.updateItems(), t.calculateAll(), t.buildControls(), t.updateControls(), t.response(), t.moveEvents(), t.stopOnHover(), t.owlStatus(), !1 !== t.options.transitionStyle && t.transitionTypes(t.options.transitionStyle), !0 === t.options.autoPlay && (t.options.autoPlay = 5e3), t.play(), t.$elem.find(".owl-wrapper").css("display", "block"), t.$elem.is(":visible") ? t.$elem.css("opacity", 1) : t.watchVisibility(), t.onstartup = !1, t.eachMoveUpdate(), "function" == typeof t.options.afterInit && t.options.afterInit.apply(this, [t.$elem])
            },
            eachMoveUpdate: function() {
                var t = this;
                !0 === t.options.lazyLoad && t.lazyLoad(), !0 === t.options.autoHeight && t.autoHeight(), t.onVisibleItems(), "function" == typeof t.options.afterAction && t.options.afterAction.apply(this, [t.$elem])
            },
            updateVars: function() {
                var t = this;
                "function" == typeof t.options.beforeUpdate && t.options.beforeUpdate.apply(this, [t.$elem]), t.watchVisibility(), t.updateItems(), t.calculateAll(), t.updatePosition(), t.updateControls(), t.eachMoveUpdate(), "function" == typeof t.options.afterUpdate && t.options.afterUpdate.apply(this, [t.$elem])
            },
            reload: function() {
                var t = this;
                e.setTimeout(function() {
                    t.updateVars()
                }, 0)
            },
            watchVisibility: function() {
                var t = this;
                if (!1 !== t.$elem.is(":visible")) return !1;
                t.$elem.css({
                    opacity: 0
                }), e.clearInterval(t.autoPlayInterval), e.clearInterval(t.checkVisible), t.checkVisible = e.setInterval(function() {
                    t.$elem.is(":visible") && (t.reload(), t.$elem.animate({
                        opacity: 1
                    }, 200), e.clearInterval(t.checkVisible))
                }, 500)
            },
            wrapItems: function() {
                var t = this;
                t.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'), t.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'), t.wrapperOuter = t.$elem.find(".owl-wrapper-outer"), t.$elem.css("display", "block")
            },
            baseClass: function() {
                var t = this,
                    e = t.$elem.hasClass(t.options.baseClass),
                    i = t.$elem.hasClass(t.options.theme);
                e || t.$elem.addClass(t.options.baseClass), i || t.$elem.addClass(t.options.theme)
            },
            updateItems: function() {
                var e, i, s = this;
                if (!1 === s.options.responsive) return !1;
                if (!0 === s.options.singleItem) return s.options.items = s.orignalItems = 1, s.options.itemsCustom = !1, s.options.itemsDesktop = !1, s.options.itemsDesktopSmall = !1, s.options.itemsTablet = !1, s.options.itemsTabletSmall = !1, s.options.itemsMobile = !1, !1;
                if ((e = t(s.options.responsiveBaseWidth).width()) > (s.options.itemsDesktop[0] || s.orignalItems) && (s.options.items = s.orignalItems), !1 !== s.options.itemsCustom)
                    for (s.options.itemsCustom.sort(function(t, e) {
                            return t[0] - e[0]
                        }), i = 0; i < s.options.itemsCustom.length; i += 1) s.options.itemsCustom[i][0] <= e && (s.options.items = s.options.itemsCustom[i][1]);
                else e <= s.options.itemsDesktop[0] && !1 !== s.options.itemsDesktop && (s.options.items = s.options.itemsDesktop[1]), e <= s.options.itemsDesktopSmall[0] && !1 !== s.options.itemsDesktopSmall && (s.options.items = s.options.itemsDesktopSmall[1]), e <= s.options.itemsTablet[0] && !1 !== s.options.itemsTablet && (s.options.items = s.options.itemsTablet[1]), e <= s.options.itemsTabletSmall[0] && !1 !== s.options.itemsTabletSmall && (s.options.items = s.options.itemsTabletSmall[1]), e <= s.options.itemsMobile[0] && !1 !== s.options.itemsMobile && (s.options.items = s.options.itemsMobile[1]);
                s.options.items > s.itemsAmount && !0 === s.options.itemsScaleUp && (s.options.items = s.itemsAmount)
            },
            response: function() {
                var i, s, n = this;
                if (!0 !== n.options.responsive) return !1;
                s = t(e).width(), n.resizer = function() {
                    t(e).width() !== s && (!1 !== n.options.autoPlay && e.clearInterval(n.autoPlayInterval), e.clearTimeout(i), i = e.setTimeout(function() {
                        s = t(e).width(), n.updateVars()
                    }, n.options.responsiveRefreshRate))
                }, t(e).resize(n.resizer)
            },
            updatePosition: function() {
                this.jumpTo(this.currentItem), !1 !== this.options.autoPlay && this.checkAp()
            },
            appendItemsSizes: function() {
                var e = this,
                    i = 0,
                    s = e.itemsAmount - e.options.items;
                e.$owlItems.each(function(n) {
                    var r = t(this);
                    r.css({
                        width: e.itemWidth
                    }).data("owl-item", Number(n)), n % e.options.items != 0 && n !== s || n > s || (i += 1), r.data("owl-roundPages", i)
                })
            },
            appendWrapperSizes: function() {
                var t = this.$owlItems.length * this.itemWidth;
                this.$owlWrapper.css({
                    width: 2 * t,
                    left: 0
                }), this.appendItemsSizes()
            },
            calculateAll: function() {
                this.calculateWidth(), this.appendWrapperSizes(), this.loops(), this.max()
            },
            calculateWidth: function() {
                this.itemWidth = Math.round(this.$elem.width() / this.options.items)
            },
            max: function() {
                var t = this,
                    e = -1 * (t.itemsAmount * t.itemWidth - t.options.items * t.itemWidth);
                return t.options.items > t.itemsAmount ? (t.maximumItem = 0, e = 0, t.maximumPixels = 0) : (t.maximumItem = t.itemsAmount - t.options.items, t.maximumPixels = e), e
            },
            min: function() {
                return 0
            },
            loops: function() {
                var e, i, s = this,
                    n = 0,
                    r = 0;
                for (s.positionsInArray = [0], s.pagesInArray = [], e = 0; e < s.itemsAmount; e += 1) r += s.itemWidth, s.positionsInArray.push(-r), !0 === s.options.scrollPerPage && (i = t(s.$owlItems[e]).data("owl-roundPages")) !== n && (s.pagesInArray[n] = s.positionsInArray[e], n = i)
            },
            buildControls: function() {
                var e = this;
                !0 !== e.options.navigation && !0 !== e.options.pagination || (e.owlControls = t('<div class="owl-controls"/>').toggleClass("clickable", !e.browser.isTouch).appendTo(e.$elem)), !0 === e.options.pagination && e.buildPagination(), !0 === e.options.navigation && e.buildButtons()
            },
            buildButtons: function() {
                var e = this,
                    i = t('<div class="owl-buttons"/>');
                e.owlControls.append(i), e.buttonPrev = t("<div/>", {
                    class: "owl-prev",
                    html: e.options.navigationText[0] || ""
                }), e.buttonNext = t("<div/>", {
                    class: "owl-next",
                    html: e.options.navigationText[1] || ""
                }), i.append(e.buttonPrev).append(e.buttonNext), i.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function(t) {
                    t.preventDefault()
                }), i.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function(i) {
                    i.preventDefault(), t(this).hasClass("owl-next") ? e.next() : e.prev()
                })
            },
            buildPagination: function() {
                var e = this;
                e.paginationWrapper = t('<div class="owl-pagination"/>'), e.owlControls.append(e.paginationWrapper), e.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(i) {
                    i.preventDefault(), Number(t(this).data("owl-page")) !== e.currentItem && e.goTo(Number(t(this).data("owl-page")), !0)
                })
            },
            updatePagination: function() {
                var e, i, s, n, r, a, o = this;
                if (!1 === o.options.pagination) return !1;
                for (o.paginationWrapper.html(""), e = 0, i = o.itemsAmount - o.itemsAmount % o.options.items, n = 0; n < o.itemsAmount; n += 1) n % o.options.items == 0 && (e += 1, i === n && (s = o.itemsAmount - o.options.items), r = t("<div/>", {
                    class: "owl-page"
                }), a = t("<span></span>", {
                    text: !0 === o.options.paginationNumbers ? e : "",
                    class: !0 === o.options.paginationNumbers ? "owl-numbers" : ""
                }), r.append(a), r.data("owl-page", i === n ? s : n), r.data("owl-roundPages", e), o.paginationWrapper.append(r));
                o.checkPagination()
            },
            checkPagination: function() {
                var e = this;
                if (!1 === e.options.pagination) return !1;
                e.paginationWrapper.find(".owl-page").each(function() {
                    t(this).data("owl-roundPages") === t(e.$owlItems[e.currentItem]).data("owl-roundPages") && (e.paginationWrapper.find(".owl-page").removeClass("active"), t(this).addClass("active"))
                })
            },
            checkNavigation: function() {
                var t = this;
                if (!1 === t.options.navigation) return !1;
                !1 === t.options.rewindNav && (0 === t.currentItem && 0 === t.maximumItem ? (t.buttonPrev.addClass("disabled"), t.buttonNext.addClass("disabled")) : 0 === t.currentItem && 0 !== t.maximumItem ? (t.buttonPrev.addClass("disabled"), t.buttonNext.removeClass("disabled")) : t.currentItem === t.maximumItem ? (t.buttonPrev.removeClass("disabled"), t.buttonNext.addClass("disabled")) : 0 !== t.currentItem && t.currentItem !== t.maximumItem && (t.buttonPrev.removeClass("disabled"), t.buttonNext.removeClass("disabled")))
            },
            updateControls: function() {
                var t = this;
                t.updatePagination(), t.checkNavigation(), t.owlControls && (t.options.items >= t.itemsAmount ? t.owlControls.hide() : t.owlControls.show())
            },
            destroyControls: function() {
                this.owlControls && this.owlControls.remove()
            },
            next: function(t) {
                var e = this;
                if (e.isTransition) return !1;
                if (e.currentItem += !0 === e.options.scrollPerPage ? e.options.items : 1, e.currentItem > e.maximumItem + (!0 === e.options.scrollPerPage ? e.options.items - 1 : 0)) {
                    if (!0 !== e.options.rewindNav) return e.currentItem = e.maximumItem, !1;
                    e.currentItem = 0, t = "rewind"
                }
                e.goTo(e.currentItem, t)
            },
            prev: function(t) {
                var e = this;
                if (e.isTransition) return !1;
                if (!0 === e.options.scrollPerPage && e.currentItem > 0 && e.currentItem < e.options.items ? e.currentItem = 0 : e.currentItem -= !0 === e.options.scrollPerPage ? e.options.items : 1, e.currentItem < 0) {
                    if (!0 !== e.options.rewindNav) return e.currentItem = 0, !1;
                    e.currentItem = e.maximumItem, t = "rewind"
                }
                e.goTo(e.currentItem, t)
            },
            goTo: function(t, i, s) {
                var n, r = this;
                return !r.isTransition && ("function" == typeof r.options.beforeMove && r.options.beforeMove.apply(this, [r.$elem]), t >= r.maximumItem ? t = r.maximumItem : t <= 0 && (t = 0), r.currentItem = r.owl.currentItem = t, !1 !== r.options.transitionStyle && "drag" !== s && 1 === r.options.items && !0 === r.browser.support3d ? (r.swapSpeed(0), !0 === r.browser.support3d ? r.transition3d(r.positionsInArray[t]) : r.css2slide(r.positionsInArray[t], 1), r.afterGo(), r.singleItemTransition(), !1) : (n = r.positionsInArray[t], !0 === r.browser.support3d ? (r.isCss3Finish = !1, !0 === i ? (r.swapSpeed("paginationSpeed"), e.setTimeout(function() {
                    r.isCss3Finish = !0
                }, r.options.paginationSpeed)) : "rewind" === i ? (r.swapSpeed(r.options.rewindSpeed), e.setTimeout(function() {
                    r.isCss3Finish = !0
                }, r.options.rewindSpeed)) : (r.swapSpeed("slideSpeed"), e.setTimeout(function() {
                    r.isCss3Finish = !0
                }, r.options.slideSpeed)), r.transition3d(n)) : !0 === i ? r.css2slide(n, r.options.paginationSpeed) : "rewind" === i ? r.css2slide(n, r.options.rewindSpeed) : r.css2slide(n, r.options.slideSpeed), void r.afterGo()))
            },
            jumpTo: function(t) {
                var e = this;
                "function" == typeof e.options.beforeMove && e.options.beforeMove.apply(this, [e.$elem]), t >= e.maximumItem || -1 === t ? t = e.maximumItem : t <= 0 && (t = 0), e.swapSpeed(0), !0 === e.browser.support3d ? e.transition3d(e.positionsInArray[t]) : e.css2slide(e.positionsInArray[t], 1), e.currentItem = e.owl.currentItem = t, e.afterGo()
            },
            afterGo: function() {
                var t = this;
                t.prevArr.push(t.currentItem), t.prevItem = t.owl.prevItem = t.prevArr[t.prevArr.length - 2], t.prevArr.shift(0), t.prevItem !== t.currentItem && (t.checkPagination(), t.checkNavigation(), t.eachMoveUpdate(), !1 !== t.options.autoPlay && t.checkAp()), "function" == typeof t.options.afterMove && t.prevItem !== t.currentItem && t.options.afterMove.apply(this, [t.$elem])
            },
            stop: function() {
                this.apStatus = "stop", e.clearInterval(this.autoPlayInterval)
            },
            checkAp: function() {
                "stop" !== this.apStatus && this.play()
            },
            play: function() {
                var t = this;
                if (t.apStatus = "play", !1 === t.options.autoPlay) return !1;
                e.clearInterval(t.autoPlayInterval), t.autoPlayInterval = e.setInterval(function() {
                    t.next(!0)
                }, t.options.autoPlay)
            },
            swapSpeed: function(t) {
                var e = this;
                "slideSpeed" === t ? e.$owlWrapper.css(e.addCssSpeed(e.options.slideSpeed)) : "paginationSpeed" === t ? e.$owlWrapper.css(e.addCssSpeed(e.options.paginationSpeed)) : "string" != typeof t && e.$owlWrapper.css(e.addCssSpeed(t))
            },
            addCssSpeed: function(t) {
                return {
                    "-webkit-transition": "all " + t + "ms ease",
                    "-moz-transition": "all " + t + "ms ease",
                    "-o-transition": "all " + t + "ms ease",
                    transition: "all " + t + "ms ease"
                }
            },
            removeTransition: function() {
                return {
                    "-webkit-transition": "",
                    "-moz-transition": "",
                    "-o-transition": "",
                    transition: ""
                }
            },
            doTranslate: function(t) {
                return {
                    "-webkit-transform": "translate3d(" + t + "px, 0px, 0px)",
                    "-moz-transform": "translate3d(" + t + "px, 0px, 0px)",
                    "-o-transform": "translate3d(" + t + "px, 0px, 0px)",
                    "-ms-transform": "translate3d(" + t + "px, 0px, 0px)",
                    transform: "translate3d(" + t + "px, 0px,0px)"
                }
            },
            transition3d: function(t) {
                this.$owlWrapper.css(this.doTranslate(t))
            },
            css2move: function(t) {
                this.$owlWrapper.css({
                    left: t
                })
            },
            css2slide: function(t, e) {
                var i = this;
                i.isCssFinish = !1, i.$owlWrapper.stop(!0, !0).animate({
                    left: t
                }, {
                    duration: e || i.options.slideSpeed,
                    complete: function() {
                        i.isCssFinish = !0
                    }
                })
            },
            checkBrowser: function() {
                var t, s, n, r, a = "translate3d(0px, 0px, 0px)",
                    o = i.createElement("div");
                o.style.cssText = "  -moz-transform:" + a + "; -ms-transform:" + a + "; -o-transform:" + a + "; -webkit-transform:" + a + "; transform:" + a, t = /translate3d\(0px, 0px, 0px\)/g, n = null !== (s = o.style.cssText.match(t)) && 1 === s.length, r = "ontouchstart" in e || e.navigator.msMaxTouchPoints, this.browser = {
                    support3d: n,
                    isTouch: r
                }
            },
            moveEvents: function() {
                !1 === this.options.mouseDrag && !1 === this.options.touchDrag || (this.gestures(), this.disabledEvents())
            },
            eventTypes: function() {
                var t = this,
                    e = ["s", "e", "x"];
                t.ev_types = {}, !0 === t.options.mouseDrag && !0 === t.options.touchDrag ? e = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : !1 === t.options.mouseDrag && !0 === t.options.touchDrag ? e = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : !0 === t.options.mouseDrag && !1 === t.options.touchDrag && (e = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]), t.ev_types.start = e[0], t.ev_types.move = e[1], t.ev_types.end = e[2]
            },
            disabledEvents: function() {
                this.$elem.on("dragstart.owl", function(t) {
                    t.preventDefault()
                }), this.$elem.on("mousedown.disableTextSelect", function(e) {
                    return t(e.target).is("input, textarea, select, option")
                })
            },
            gestures: function() {
                var s = this,
                    n = {
                        offsetX: 0,
                        offsetY: 0,
                        baseElWidth: 0,
                        relativePos: 0,
                        position: null,
                        minSwipe: null,
                        maxSwipe: null,
                        sliding: null,
                        dargging: null,
                        targetElement: null
                    };

                function r(t) {
                    if (void 0 !== t.touches) return {
                        x: t.touches[0].pageX,
                        y: t.touches[0].pageY
                    };
                    if (void 0 === t.touches) {
                        if (void 0 !== t.pageX) return {
                            x: t.pageX,
                            y: t.pageY
                        };
                        if (void 0 === t.pageX) return {
                            x: t.clientX,
                            y: t.clientY
                        }
                    }
                }

                function a(e) {
                    "on" === e ? (t(i).on(s.ev_types.move, o), t(i).on(s.ev_types.end, l)) : "off" === e && (t(i).off(s.ev_types.move), t(i).off(s.ev_types.end))
                }

                function o(a) {
                    var o, l, h = a.originalEvent || a || e.event;
                    s.newPosX = r(h).x - n.offsetX, s.newPosY = r(h).y - n.offsetY, s.newRelativeX = s.newPosX - n.relativePos, "function" == typeof s.options.startDragging && !0 !== n.dragging && 0 !== s.newRelativeX && (n.dragging = !0, s.options.startDragging.apply(s, [s.$elem])), (s.newRelativeX > 8 || s.newRelativeX < -8) && !0 === s.browser.isTouch && (void 0 !== h.preventDefault ? h.preventDefault() : h.returnValue = !1, n.sliding = !0), (s.newPosY > 10 || s.newPosY < -10) && !1 === n.sliding && t(i).off("touchmove.owl"), o = function() {
                        return s.newRelativeX / 5
                    }, l = function() {
                        return s.maximumPixels + s.newRelativeX / 5
                    }, s.newPosX = Math.max(Math.min(s.newPosX, o()), l()), !0 === s.browser.support3d ? s.transition3d(s.newPosX) : s.css2move(s.newPosX)
                }

                function l(i) {
                    var r, o, l, h = i.originalEvent || i || e.event;
                    h.target = h.target || h.srcElement, n.dragging = !1, !0 !== s.browser.isTouch && s.$owlWrapper.removeClass("grabbing"), s.newRelativeX < 0 ? s.dragDirection = s.owl.dragDirection = "left" : s.dragDirection = s.owl.dragDirection = "right", 0 !== s.newRelativeX && (r = s.getNewPosition(), s.goTo(r, !1, "drag"), n.targetElement === h.target && !0 !== s.browser.isTouch && (t(h.target).on("click.disable", function(e) {
                        e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault(), t(e.target).off("click.disable")
                    }), l = (o = t._data(h.target, "events").click).pop(), o.splice(0, 0, l))), a("off")
                }
                s.isCssFinish = !0, s.$elem.on(s.ev_types.start, ".owl-wrapper", function(i) {
                    var o, l = i.originalEvent || i || e.event;
                    if (3 === l.which) return !1;
                    if (!(s.itemsAmount <= s.options.items)) {
                        if (!1 === s.isCssFinish && !s.options.dragBeforeAnimFinish) return !1;
                        if (!1 === s.isCss3Finish && !s.options.dragBeforeAnimFinish) return !1;
                        !1 !== s.options.autoPlay && e.clearInterval(s.autoPlayInterval), !0 === s.browser.isTouch || s.$owlWrapper.hasClass("grabbing") || s.$owlWrapper.addClass("grabbing"), s.newPosX = 0, s.newRelativeX = 0, t(this).css(s.removeTransition()), o = t(this).position(), n.relativePos = o.left, n.offsetX = r(l).x - o.left, n.offsetY = r(l).y - o.top, a("on"), n.sliding = !1, n.targetElement = l.target || l.srcElement
                    }
                })
            },
            getNewPosition: function() {
                var t = this,
                    e = t.closestItem();
                return e > t.maximumItem ? (t.currentItem = t.maximumItem, e = t.maximumItem) : t.newPosX >= 0 && (e = 0, t.currentItem = 0), e
            },
            closestItem: function() {
                var e = this,
                    i = !0 === e.options.scrollPerPage ? e.pagesInArray : e.positionsInArray,
                    s = e.newPosX,
                    n = null;
                return t.each(i, function(r, a) {
                    s - e.itemWidth / 20 > i[r + 1] && s - e.itemWidth / 20 < a && "left" === e.moveDirection() ? (n = a, !0 === e.options.scrollPerPage ? e.currentItem = t.inArray(n, e.positionsInArray) : e.currentItem = r) : s + e.itemWidth / 20 < a && s + e.itemWidth / 20 > (i[r + 1] || i[r] - e.itemWidth) && "right" === e.moveDirection() && (!0 === e.options.scrollPerPage ? (n = i[r + 1] || i[i.length - 1], e.currentItem = t.inArray(n, e.positionsInArray)) : (n = i[r + 1], e.currentItem = r + 1))
                }), e.currentItem
            },
            moveDirection: function() {
                var t;
                return this.newRelativeX < 0 ? (t = "right", this.playDirection = "next") : (t = "left", this.playDirection = "prev"), t
            },
            customEvents: function() {
                var t = this;
                t.$elem.on("owl.next", function() {
                    t.next()
                }), t.$elem.on("owl.prev", function() {
                    t.prev()
                }), t.$elem.on("owl.play", function(e, i) {
                    t.options.autoPlay = i, t.play(), t.hoverStatus = "play"
                }), t.$elem.on("owl.stop", function() {
                    t.stop(), t.hoverStatus = "stop"
                }), t.$elem.on("owl.goTo", function(e, i) {
                    t.goTo(i)
                }), t.$elem.on("owl.jumpTo", function(e, i) {
                    t.jumpTo(i)
                })
            },
            stopOnHover: function() {
                var t = this;
                !0 === t.options.stopOnHover && !0 !== t.browser.isTouch && !1 !== t.options.autoPlay && (t.$elem.on("mouseover", function() {
                    t.stop()
                }), t.$elem.on("mouseout", function() {
                    "stop" !== t.hoverStatus && t.play()
                }))
            },
            lazyLoad: function() {
                var e, i, s, n, r = this;
                if (!1 === r.options.lazyLoad) return !1;
                for (e = 0; e < r.itemsAmount; e += 1) "loaded" !== (i = t(r.$owlItems[e])).data("owl-loaded") && (s = i.data("owl-item"), "string" == typeof(n = i.find(".lazyOwl")).data("src") ? (void 0 === i.data("owl-loaded") && (n.hide(), i.addClass("loading").data("owl-loaded", "checked")), (!0 !== r.options.lazyFollow || s >= r.currentItem) && s < r.currentItem + r.options.items && n.length && r.lazyPreload(i, n)) : i.data("owl-loaded", "loaded"))
            },
            lazyPreload: function(t, i) {
                var s, n = this,
                    r = 0;

                function a() {
                    t.data("owl-loaded", "loaded").removeClass("loading"), i.removeAttr("data-src"), "fade" === n.options.lazyEffect ? i.fadeIn(400) : i.show(), "function" == typeof n.options.afterLazyLoad && n.options.afterLazyLoad.apply(this, [n.$elem])
                }
                "DIV" === i.prop("tagName") ? (i.css("background-image", "url(" + i.data("src") + ")"), s = !0) : i[0].src = i.data("src"),
                    function t() {
                        r += 1, n.completeImg(i.get(0)) || !0 === s ? a() : r <= 100 ? e.setTimeout(t, 100) : a()
                    }()
            },
            autoHeight: function() {
                var i, s = this,
                    n = t(s.$owlItems[s.currentItem]).find("img");

                function r() {
                    var i = t(s.$owlItems[s.currentItem]).height();
                    s.wrapperOuter.css("height", i + "px"), s.wrapperOuter.hasClass("autoHeight") || e.setTimeout(function() {
                        s.wrapperOuter.addClass("autoHeight")
                    }, 0)
                }
                void 0 !== n.get(0) ? (i = 0, function t() {
                    i += 1, s.completeImg(n.get(0)) ? r() : i <= 100 ? e.setTimeout(t, 100) : s.wrapperOuter.css("height", "")
                }()) : r()
            },
            completeImg: function(t) {
                return !!t.complete && ("undefined" === typeof t.naturalWidth || 0 !== t.naturalWidth)
            },
            onVisibleItems: function() {
                var e, i = this;
                for (!0 === i.options.addClassActive && i.$owlItems.removeClass("active"), i.visibleItems = [], e = i.currentItem; e < i.currentItem + i.options.items; e += 1) i.visibleItems.push(e), !0 === i.options.addClassActive && t(i.$owlItems[e]).addClass("active");
                i.owl.visibleItems = i.visibleItems
            },
            transitionTypes: function(t) {
                this.outClass = "owl-" + t + "-out", this.inClass = "owl-" + t + "-in"
            },
            singleItemTransition: function() {
                var t, e = this,
                    i = e.outClass,
                    s = e.inClass,
                    n = e.$owlItems.eq(e.currentItem),
                    r = e.$owlItems.eq(e.prevItem),
                    a = Math.abs(e.positionsInArray[e.currentItem]) + e.positionsInArray[e.prevItem],
                    o = Math.abs(e.positionsInArray[e.currentItem]) + e.itemWidth / 2,
                    l = "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";
                e.isTransition = !0, e.$owlWrapper.addClass("owl-origin").css({
                    "-webkit-transform-origin": o + "px",
                    "-moz-perspective-origin": o + "px",
                    "perspective-origin": o + "px"
                }), r.css((t = a, {
                    position: "relative",
                    left: t + "px"
                })).addClass(i).on(l, function() {
                    e.endPrev = !0, r.off(l), e.clearTransStyle(r, i)
                }), n.addClass(s).on(l, function() {
                    e.endCurrent = !0, n.off(l), e.clearTransStyle(n, s)
                })
            },
            clearTransStyle: function(t, e) {
                var i = this;
                t.css({
                    position: "",
                    left: ""
                }).removeClass(e), i.endPrev && i.endCurrent && (i.$owlWrapper.removeClass("owl-origin"), i.endPrev = !1, i.endCurrent = !1, i.isTransition = !1)
            },
            owlStatus: function() {
                var t = this;
                t.owl = {
                    userOptions: t.userOptions,
                    baseElement: t.$elem,
                    userItems: t.$userItems,
                    owlItems: t.$owlItems,
                    currentItem: t.currentItem,
                    prevItem: t.prevItem,
                    visibleItems: t.visibleItems,
                    isTouch: t.browser.isTouch,
                    browser: t.browser,
                    dragDirection: t.dragDirection
                }
            },
            clearEvents: function() {
                this.$elem.off(".owl owl mousedown.disableTextSelect"), t(i).off(".owl owl"), t(e).off("resize", this.resizer)
            },
            unWrap: function() {
                var t = this;
                0 !== t.$elem.children().length && (t.$owlWrapper.unwrap(), t.$userItems.unwrap().unwrap(), t.owlControls && t.owlControls.remove()), t.clearEvents(), t.$elem.attr("style", t.$elem.data("owl-originalStyles") || "").attr("class", t.$elem.data("owl-originalClasses"))
            },
            destroy: function() {
                this.stop(), e.clearInterval(this.checkVisible), this.unWrap(), this.$elem.removeData()
            },
            reinit: function(e) {
                var i = t.extend({}, this.userOptions, e);
                this.unWrap(), this.init(i, this.$elem)
            },
            addItem: function(t, e) {
                var i, s = this;
                return !!t && (0 === s.$elem.children().length ? (s.$elem.append(t), s.setVars(), !1) : (s.unWrap(), (i = void 0 === e || -1 === e ? -1 : e) >= s.$userItems.length || -1 === i ? s.$userItems.eq(-1).after(t) : s.$userItems.eq(i).before(t), void s.setVars()))
            },
            removeItem: function(t) {
                var e;
                if (0 === this.$elem.children().length) return !1;
                e = void 0 === t || -1 === t ? -1 : t, this.unWrap(), this.$userItems.eq(e).remove(), this.setVars()
            }
        };
        t.fn.owlCarousel = function(e) {
            return this.each(function() {
                if (!0 === t(this).data("owl-init")) return !1;
                t(this).data("owl-init", !0);
                var i = Object.create(s);
                i.init(e, this), t.data(this, "owlCarousel", i)
            })
        }, t.fn.owlCarousel.options = {
            items: 5,
            itemsCustom: !1,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [979, 3],
            itemsTablet: [768, 2],
            itemsTabletSmall: !1,
            itemsMobile: [479, 1],
            singleItem: !1,
            itemsScaleUp: !1,
            slideSpeed: 200,
            paginationSpeed: 800,
            rewindSpeed: 1e3,
            autoPlay: !1,
            stopOnHover: !1,
            navigation: !1,
            navigationText: ["prev", "next"],
            rewindNav: !0,
            scrollPerPage: !1,
            pagination: !0,
            paginationNumbers: !1,
            responsive: !0,
            responsiveRefreshRate: 200,
            responsiveBaseWidth: e,
            baseClass: "owl-carousel",
            theme: "owl-theme",
            lazyLoad: !1,
            lazyFollow: !0,
            lazyEffect: "fade",
            autoHeight: !1,
            jsonPath: !1,
            jsonSuccess: !1,
            dragBeforeAnimFinish: !0,
            mouseDrag: !0,
            touchDrag: !0,
            addClassActive: !1,
            transitionStyle: !1,
            beforeUpdate: !1,
            afterUpdate: !1,
            beforeInit: !1,
            afterInit: !1,
            beforeMove: !1,
            afterMove: !1,
            afterAction: !1,
            startDragging: !1,
            afterLazyLoad: !1
        }
    }(jQuery, window, document);
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        var t, e, i, s, n, r, a, o, l, h, u, c, d, p, f;
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
            var s = function(t) {
                    var e, i = [],
                        s = t.length;
                    for (e = 0; e !== s; i.push(t[e++]));
                    return i
                },
                n = function(t, e, s) {
                    i.call(this, t, e, s), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = n.prototype.render
                },
                r = 1e-10,
                a = i._internals,
                o = a.isSelector,
                l = a.isArray,
                h = n.prototype = i.to({}, .1, {}),
                u = [];
            n.version = "1.15.1", h.constructor = n, h.kill()._gc = !1, n.killTweensOf = n.killDelayedCallsTo = i.killTweensOf, n.getTweensOf = i.getTweensOf, n.lagSmoothing = i.lagSmoothing, n.ticker = i.ticker, n.render = i.render, h.invalidate = function() {
                return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
            }, h.updateTo = function(t, e) {
                var s, n = this.ratio,
                    r = this.vars.immediateRender || t.immediateRender;
                e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                for (s in t) this.vars[s] = t[s];
                if (this._initted || r)
                    if (e) this._initted = !1, r && this.render(0, !0, !0);
                    else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                    var a = this._time;
                    this.render(0, !0, !1), this._initted = !1, this.render(a, !0, !1)
                } else if (this._time > 0 || r) {
                    this._initted = !1, this._init();
                    for (var o, l = 1 / (1 - n), h = this._firstPT; h;) o = h.s + h.c, h.c *= l, h.s = o - h.c, h = h._next
                }
                return this
            }, h.render = function(t, e, i) {
                this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                var s, n, o, l, h, c, d, p, f = this._dirty ? this.totalDuration() : this._totalDuration,
                    m = this._time,
                    v = this._totalTime,
                    g = this._cycle,
                    _ = this._duration,
                    y = this._rawPrevTime;
                if (t >= f ? (this._totalTime = f, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = _, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (s = !0, n = "onComplete"), 0 === _ && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > y || y === r) && y !== t && (i = !0, y > r && (n = "onReverseComplete")), this._rawPrevTime = p = !e || t || y === t ? t : r)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== v || 0 === _ && y > 0 && y !== r) && (n = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === _ && (this._initted || !this.vars.lazy || i) && (y >= 0 && (i = !0), this._rawPrevTime = p = !e || t || y === t ? t : r)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = _ + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 != (1 & this._cycle) && (this._time = _ - this._time), this._time > _ ? this._time = _ : 0 > this._time && (this._time = 0)), this._easeType ? (h = this._time / _, c = this._easeType, d = this._easePower, (1 === c || 3 === c && h >= .5) && (h = 1 - h), 3 === c && (h *= 2), 1 === d ? h *= h : 2 === d ? h *= h * h : 3 === d ? h *= h * h * h : 4 === d && (h *= h * h * h * h), this.ratio = 1 === c ? 1 - h : 2 === c ? h : .5 > this._time / _ ? h / 2 : 1 - h / 2) : this.ratio = this._ease.getRatio(this._time / _)), m !== this._time || i || g !== this._cycle) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = m, this._totalTime = v, this._rawPrevTime = y, this._cycle = g, a.lazyTweens.push(this), void(this._lazy = [t, e]);
                        this._time && !s ? this.ratio = this._ease.getRatio(this._time / _) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== m && t >= 0 && (this._active = !0), 0 === v && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : n || (n = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === _) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || u))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                    this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== v || s) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || u)), this._cycle !== g && (e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || u)), n && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[n] && this.vars[n].apply(this.vars[n + "Scope"] || this, this.vars[n + "Params"] || u), 0 === _ && this._rawPrevTime === r && p !== r && (this._rawPrevTime = 0))
                } else v !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || u))
            }, n.to = function(t, e, i) {
                return new n(t, e, i)
            }, n.from = function(t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new n(t, e, i)
            }, n.fromTo = function(t, e, i, s) {
                return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new n(t, e, s)
            }, n.staggerTo = n.allTo = function(t, e, r, a, h, c, d) {
                a = a || 0;
                var p, f, m, v, g = r.delay || 0,
                    _ = [],
                    y = function() {
                        r.onComplete && r.onComplete.apply(r.onCompleteScope || this, arguments), h.apply(d || this, c || u)
                    };
                for (l(t) || ("string" == typeof t && (t = i.selector(t) || t), o(t) && (t = s(t))), t = t || [], 0 > a && ((t = s(t)).reverse(), a *= -1), p = t.length - 1, m = 0; p >= m; m++) {
                    f = {};
                    for (v in r) f[v] = r[v];
                    f.delay = g, m === p && h && (f.onComplete = y), _[m] = new n(t[m], e, f), g += a
                }
                return _
            }, n.staggerFrom = n.allFrom = function(t, e, i, s, r, a, o) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, n.staggerTo(t, e, i, s, r, a, o)
            }, n.staggerFromTo = n.allFromTo = function(t, e, i, s, r, a, o, l) {
                return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, n.staggerTo(t, e, s, r, a, o, l)
            }, n.delayedCall = function(t, e, i, s, r) {
                return new n(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    onCompleteScope: s,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    onReverseCompleteScope: s,
                    immediateRender: !1,
                    useFrames: r,
                    overwrite: 0
                })
            }, n.set = function(t, e) {
                return new n(t, 0, e)
            }, n.isTweening = function(t) {
                return i.getTweensOf(t, !0).length > 0
            };
            var c = function(t, e) {
                    for (var s = [], n = 0, r = t._first; r;) r instanceof i ? s[n++] = r : (e && (s[n++] = r), s = s.concat(c(r, e)), n = s.length), r = r._next;
                    return s
                },
                d = n.getAllTweens = function(e) {
                    return c(t._rootTimeline, e).concat(c(t._rootFramesTimeline, e))
                };
            n.killAll = function(t, i, s, n) {
                null == i && (i = !0), null == s && (s = !0);
                var r, a, o, l = d(0 != n),
                    h = l.length,
                    u = i && s && n;
                for (o = 0; h > o; o++) a = l[o], (u || a instanceof e || (r = a.target === a.vars.onComplete) && s || i && !r) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
            }, n.killChildTweensOf = function(t, e) {
                if (null != t) {
                    var r, h, u, c, d, p = a.tweenLookup;
                    if ("string" == typeof t && (t = i.selector(t) || t), o(t) && (t = s(t)), l(t))
                        for (c = t.length; --c > -1;) n.killChildTweensOf(t[c], e);
                    else {
                        r = [];
                        for (u in p)
                            for (h = p[u].target.parentNode; h;) h === t && (r = r.concat(p[u].tweens)), h = h.parentNode;
                        for (d = r.length, c = 0; d > c; c++) e && r[c].totalTime(r[c].totalDuration()), r[c]._enabled(!1, !1)
                    }
                }
            };
            var p = function(t, i, s, n) {
                i = !1 !== i, s = !1 !== s;
                for (var r, a, o = d(n = !1 !== n), l = i && s && n, h = o.length; --h > -1;) a = o[h], (l || a instanceof e || (r = a.target === a.vars.onComplete) && s || i && !r) && a.paused(t)
            };
            return n.pauseAll = function(t, e, i) {
                p(!0, t, e, i)
            }, n.resumeAll = function(t, e, i) {
                p(!1, t, e, i)
            }, n.globalTimeScale = function(e) {
                var s = t._rootTimeline,
                    n = i.ticker.time;
                return arguments.length ? (e = e || r, s._startTime = n - (n - s._startTime) * s._timeScale / e, s = t._rootFramesTimeline, n = i.ticker.frame, s._startTime = n - (n - s._startTime) * s._timeScale / e, s._timeScale = t._rootTimeline._timeScale = e, e) : s._timeScale
            }, h.progress = function(t) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
            }, h.totalProgress = function(t) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
            }, h.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
            }, h.duration = function(e) {
                return arguments.length ? t.prototype.duration.call(this, e) : this._duration
            }, h.totalDuration = function(t) {
                return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
            }, h.repeat = function(t) {
                return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
            }, h.repeatDelay = function(t) {
                return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
            }, h.yoyo = function(t) {
                return arguments.length ? (this._yoyo = t, this) : this._yoyo
            }, n
        }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
            var s = function(t) {
                    e.call(this, t), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                    var i, s, n = this.vars;
                    for (s in n) i = n[s], l(i) && -1 !== i.join("").indexOf("{self}") && (n[s] = this._swapSelfInParams(i));
                    l(n.tweens) && this.add(n.tweens, 0, n.align, n.stagger)
                },
                n = 1e-10,
                r = i._internals,
                a = s._internals = {},
                o = r.isSelector,
                l = r.isArray,
                h = r.lazyTweens,
                u = r.lazyRender,
                c = [],
                d = _gsScope._gsDefine.globals,
                p = function(t) {
                    var e, i = {};
                    for (e in t) i[e] = t[e];
                    return i
                },
                f = a.pauseCallback = function(t, e, i, s) {
                    var n = t._timeline,
                        r = n._totalTime;
                    !e && this._forcingPlayhead || n._rawPrevTime === t._startTime || (n.pause(t._startTime), e && e.apply(s || n, i || c), this._forcingPlayhead && n.seek(r))
                },
                m = function(t) {
                    var e, i = [],
                        s = t.length;
                    for (e = 0; e !== s; i.push(t[e++]));
                    return i
                },
                v = s.prototype = new e;
            return s.version = "1.15.1", v.constructor = s, v.kill()._gc = v._forcingPlayhead = !1, v.to = function(t, e, s, n) {
                var r = s.repeat && d.TweenMax || i;
                return e ? this.add(new r(t, e, s), n) : this.set(t, s, n)
            }, v.from = function(t, e, s, n) {
                return this.add((s.repeat && d.TweenMax || i).from(t, e, s), n)
            }, v.fromTo = function(t, e, s, n, r) {
                var a = n.repeat && d.TweenMax || i;
                return e ? this.add(a.fromTo(t, e, s, n), r) : this.set(t, n, r)
            }, v.staggerTo = function(t, e, n, r, a, l, h, u) {
                var c, d = new s({
                    onComplete: l,
                    onCompleteParams: h,
                    onCompleteScope: u,
                    smoothChildTiming: this.smoothChildTiming
                });
                for ("string" == typeof t && (t = i.selector(t) || t), o(t = t || []) && (t = m(t)), 0 > (r = r || 0) && ((t = m(t)).reverse(), r *= -1), c = 0; t.length > c; c++) n.startAt && (n.startAt = p(n.startAt)), d.to(t[c], e, p(n), c * r);
                return this.add(d, a)
            }, v.staggerFrom = function(t, e, i, s, n, r, a, o) {
                return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, s, n, r, a, o)
            }, v.staggerFromTo = function(t, e, i, s, n, r, a, o, l) {
                return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, s, n, r, a, o, l)
            }, v.call = function(t, e, s, n) {
                return this.add(i.delayedCall(0, t, e, s), n)
            }, v.set = function(t, e, s) {
                return s = this._parseTimeOrLabel(s, 0, !0), null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused), this.add(new i(t, 0, e), s)
            }, s.exportRoot = function(t, e) {
                null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
                var n, r, a = new s(t),
                    o = a._timeline;
                for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, n = o._first; n;) r = n._next, e && n instanceof i && n.target === n.vars.onComplete || a.add(n, n._startTime - n._delay), n = r;
                return o.add(a, 0), a
            }, v.add = function(n, r, a, o) {
                var h, u, c, d, p, f;
                if ("number" != typeof r && (r = this._parseTimeOrLabel(r, 0, !0, n)), !(n instanceof t)) {
                    if (n instanceof Array || n && n.push && l(n)) {
                        for (a = a || "normal", o = o || 0, h = r, u = n.length, c = 0; u > c; c++) l(d = n[c]) && (d = new s({
                            tweens: d
                        })), this.add(d, h), "string" != typeof d && "function" != typeof d && ("sequence" === a ? h = d._startTime + d.totalDuration() / d._timeScale : "start" === a && (d._startTime -= d.delay())), h += o;
                        return this._uncache(!0)
                    }
                    if ("string" == typeof n) return this.addLabel(n, r);
                    if ("function" != typeof n) throw "Cannot add " + n + " into the timeline; it is not a tween, timeline, function, or string.";
                    n = i.delayedCall(0, n)
                }
                if (e.prototype.add.call(this, n, r), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                    for (p = this, f = p.rawTime() > n._startTime; p._timeline;) f && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1), p = p._timeline;
                return this
            }, v.remove = function(e) {
                if (e instanceof t) return this._remove(e, !1);
                if (e instanceof Array || e && e.push && l(e)) {
                    for (var i = e.length; --i > -1;) this.remove(e[i]);
                    return this
                }
                return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
            }, v._remove = function(t, i) {
                e.prototype._remove.call(this, t, i);
                var s = this._last;
                return s ? this._time > s._startTime + s._totalDuration / s._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
            }, v.append = function(t, e) {
                return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
            }, v.insert = v.insertMultiple = function(t, e, i, s) {
                return this.add(t, e || 0, i, s)
            }, v.appendMultiple = function(t, e, i, s) {
                return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s)
            }, v.addLabel = function(t, e) {
                return this._labels[t] = this._parseTimeOrLabel(e), this
            }, v.addPause = function(t, e, s, n) {
                var r = i.delayedCall(0, f, ["{self}", e, s, n], this);
                return r.data = "isPause", this.add(r, t)
            }, v.removeLabel = function(t) {
                return delete this._labels[t], this
            }, v.getLabelTime = function(t) {
                return null != this._labels[t] ? this._labels[t] : -1
            }, v._parseTimeOrLabel = function(e, i, s, n) {
                var r;
                if (n instanceof t && n.timeline === this) this.remove(n);
                else if (n && (n instanceof Array || n.push && l(n)))
                    for (r = n.length; --r > -1;) n[r] instanceof t && n[r].timeline === this && this.remove(n[r]);
                if ("string" == typeof i) return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, s);
                if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                else {
                    if (-1 === (r = e.indexOf("="))) return null == this._labels[e] ? s ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                    i = parseInt(e.charAt(r - 1) + "1", 10) * Number(e.substr(r + 1)), e = r > 1 ? this._parseTimeOrLabel(e.substr(0, r - 1), 0, s) : this.duration()
                }
                return Number(e) + i
            }, v.seek = function(t, e) {
                return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
            }, v.stop = function() {
                return this.paused(!0)
            }, v.gotoAndPlay = function(t, e) {
                return this.play(t, e)
            }, v.gotoAndStop = function(t, e) {
                return this.pause(t, e)
            }, v.render = function(t, e, i) {
                this._gc && this._enabled(!0, !1);
                var s, r, a, o, l, d = this._dirty ? this.totalDuration() : this._totalDuration,
                    p = this._time,
                    f = this._startTime,
                    m = this._timeScale,
                    v = this._paused;
                if (t >= d ? (this._totalTime = this._time = d, this._reversed || this._hasPausedChild() || (r = !0, o = "onComplete", 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === n) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > n && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : n, t = d + 1e-4) : 1e-7 > t ? (this._totalTime = this._time = 0, (0 !== p || 0 === this._duration && this._rawPrevTime !== n && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (o = "onReverseComplete", r = this._reversed), 0 > t ? (this._active = !1, this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t) : (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : n, t = 0, this._initted || (l = !0))) : this._totalTime = this._time = this._rawPrevTime = t, this._time !== p && this._first || i || l) {
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== p && t > 0 && (this._active = !0), 0 === p && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || c)), this._time >= p)
                        for (s = this._first; s && (a = s._next, !this._paused || v);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                    else
                        for (s = this._last; s && (a = s._prev, !this._paused || v);)(s._active || p >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                    this._onUpdate && (e || (h.length && u(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || c))), o && (this._gc || (f === this._startTime || m !== this._timeScale) && (0 === this._time || d >= this.totalDuration()) && (r && (h.length && u(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this.vars[o].apply(this.vars[o + "Scope"] || this, this.vars[o + "Params"] || c)))
                }
            }, v._hasPausedChild = function() {
                for (var t = this._first; t;) {
                    if (t._paused || t instanceof s && t._hasPausedChild()) return !0;
                    t = t._next
                }
                return !1
            }, v.getChildren = function(t, e, s, n) {
                n = n || -9999999999;
                for (var r = [], a = this._first, o = 0; a;) n > a._startTime || (a instanceof i ? !1 !== e && (r[o++] = a) : (!1 !== s && (r[o++] = a), !1 !== t && (r = r.concat(a.getChildren(!0, e, s)), o = r.length))), a = a._next;
                return r
            }, v.getTweensOf = function(t, e) {
                var s, n, r = this._gc,
                    a = [],
                    o = 0;
                for (r && this._enabled(!0, !0), n = (s = i.getTweensOf(t)).length; --n > -1;)(s[n].timeline === this || e && this._contains(s[n])) && (a[o++] = s[n]);
                return r && this._enabled(!1, !0), a
            }, v.recent = function() {
                return this._recent
            }, v._contains = function(t) {
                for (var e = t.timeline; e;) {
                    if (e === this) return !0;
                    e = e.timeline
                }
                return !1
            }, v.shiftChildren = function(t, e, i) {
                i = i || 0;
                for (var s, n = this._first, r = this._labels; n;) n._startTime >= i && (n._startTime += t), n = n._next;
                if (e)
                    for (s in r) r[s] >= i && (r[s] += t);
                return this._uncache(!0)
            }, v._kill = function(t, e) {
                if (!t && !e) return this._enabled(!1, !1);
                for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, n = !1; --s > -1;) i[s]._kill(t, e) && (n = !0);
                return n
            }, v.clear = function(t) {
                var e = this.getChildren(!1, !0, !0),
                    i = e.length;
                for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                return !1 !== t && (this._labels = {}), this._uncache(!0)
            }, v.invalidate = function() {
                for (var e = this._first; e;) e.invalidate(), e = e._next;
                return t.prototype.invalidate.call(this)
            }, v._enabled = function(t, i) {
                if (t === this._gc)
                    for (var s = this._first; s;) s._enabled(t, !0), s = s._next;
                return e.prototype._enabled.call(this, t, i)
            }, v.totalTime = function() {
                this._forcingPlayhead = !0;
                var e = t.prototype.totalTime.apply(this, arguments);
                return this._forcingPlayhead = !1, e
            }, v.duration = function(t) {
                return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
            }, v.totalDuration = function(t) {
                if (!arguments.length) {
                    if (this._dirty) {
                        for (var e, i, s = 0, n = this._last, r = 999999999999; n;) e = n._prev, n._dirty && n.totalDuration(), n._startTime > r && this._sortChildren && !n._paused ? this.add(n, n._startTime - n._delay) : r = n._startTime, 0 > n._startTime && !n._paused && (s -= n._startTime, this._timeline.smoothChildTiming && (this._startTime += n._startTime / this._timeScale), this.shiftChildren(-n._startTime, !1, -9999999999), r = 0), i = n._startTime + n._totalDuration / n._timeScale, i > s && (s = i), n = e;
                        this._duration = this._totalDuration = s, this._dirty = !1
                    }
                    return this._totalDuration
                }
                return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
            }, v.usesFrames = function() {
                for (var e = this._timeline; e._timeline;) e = e._timeline;
                return e === t._rootFramesTimeline
            }, v.rawTime = function() {
                return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
            }, s
        }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
            var s = function(e) {
                    t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0
                },
                n = 1e-10,
                r = [],
                a = e._internals,
                o = a.lazyTweens,
                l = a.lazyRender,
                h = new i(null, null, 1, 0),
                u = s.prototype = new t;
            return u.constructor = s, u.kill()._gc = !1, s.version = "1.15.1", u.invalidate = function() {
                return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
            }, u.addCallback = function(t, i, s, n) {
                return this.add(e.delayedCall(0, t, s, n), i)
            }, u.removeCallback = function(t, e) {
                if (t)
                    if (null == e) this._kill(null, t);
                    else
                        for (var i = this.getTweensOf(t, !1), s = i.length, n = this._parseTimeOrLabel(e); --s > -1;) i[s]._startTime === n && i[s]._enabled(!1, !1);
                return this
            }, u.removePause = function(e) {
                return this.removeCallback(t._internals.pauseCallback, e)
            }, u.tweenTo = function(t, i) {
                i = i || {};
                var s, n, a, o = {
                    ease: h,
                    useFrames: this.usesFrames(),
                    immediateRender: !1
                };
                for (n in i) o[n] = i[n];
                return o.time = this._parseTimeOrLabel(t), s = Math.abs(Number(o.time) - this._time) / this._timeScale || .001, a = new e(this, s, o), o.onStart = function() {
                    a.target.paused(!0), a.vars.time !== a.target.time() && s === a.duration() && a.duration(Math.abs(a.vars.time - a.target.time()) / a.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || a, i.onStartParams || r)
                }, a
            }, u.tweenFromTo = function(t, e, i) {
                i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                    onComplete: this.seek,
                    onCompleteParams: [t],
                    onCompleteScope: this
                }, i.immediateRender = !1 !== i.immediateRender;
                var s = this.tweenTo(e, i);
                return s.duration(Math.abs(s.vars.time - t) / this._timeScale || .001)
            }, u.render = function(t, e, i) {
                this._gc && this._enabled(!0, !1);
                var s, a, h, u, c, d, p = this._dirty ? this.totalDuration() : this._totalDuration,
                    f = this._duration,
                    m = this._time,
                    v = this._totalTime,
                    g = this._startTime,
                    _ = this._timeScale,
                    y = this._rawPrevTime,
                    w = this._paused,
                    b = this._cycle;
                if (t >= p ? (this._locked || (this._totalTime = p, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (a = !0, u = "onComplete", 0 === this._duration && (0 === t || 0 > y || y === n) && y !== t && this._first && (c = !0, y > n && (u = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : n, this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : (this._time = f, t = f + 1e-4)) : 1e-7 > t ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== m || 0 === f && y !== n && (y > 0 || 0 > t && y >= 0) && !this._locked) && (u = "onReverseComplete", a = this._reversed), 0 > t ? (this._active = !1, y >= 0 && this._first && (c = !0), this._rawPrevTime = t) : (this._rawPrevTime = f || !e || t || this._rawPrevTime === t ? t : n, t = 0, this._initted || (c = !0))) : (0 === f && 0 > y && (c = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (d = f + this._repeatDelay, this._cycle = this._totalTime / d >> 0, 0 !== this._cycle && this._cycle === this._totalTime / d && this._cycle--, this._time = this._totalTime - this._cycle * d, this._yoyo && 0 != (1 & this._cycle) && (this._time = f - this._time), this._time > f ? (this._time = f, t = f + 1e-4) : 0 > this._time ? this._time = t = 0 : t = this._time))), this._cycle !== b && !this._locked) {
                    var x = this._yoyo && 0 != (1 & b),
                        T = x === (this._yoyo && 0 != (1 & this._cycle)),
                        C = this._totalTime,
                        S = this._cycle,
                        P = this._rawPrevTime,
                        I = this._time;
                    if (this._totalTime = b * f, b > this._cycle ? x = !x : this._totalTime += f, this._time = m, this._rawPrevTime = 0 === f ? y - 1e-4 : y, this._cycle = b, this._locked = !0, m = x ? 0 : f, this.render(m, e, 0 === f), e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || r), T && (m = x ? f + 1e-4 : -1e-4, this.render(m, !0, !1)), this._locked = !1, this._paused && !w) return;
                    this._time = I, this._totalTime = C, this._cycle = S, this._rawPrevTime = P
                }
                if (this._time !== m && this._first || i || c) {
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== v && t > 0 && (this._active = !0), 0 === v && this.vars.onStart && 0 !== this._totalTime && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || r)), this._time >= m)
                        for (s = this._first; s && (h = s._next, !this._paused || w);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = h;
                    else
                        for (s = this._last; s && (h = s._prev, !this._paused || w);)(s._active || m >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = h;
                    this._onUpdate && (e || (o.length && l(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || r))), u && (this._locked || this._gc || (g === this._startTime || _ !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (a && (o.length && l(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[u] && this.vars[u].apply(this.vars[u + "Scope"] || this, this.vars[u + "Params"] || r)))
                } else v !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || r))
            }, u.getActive = function(t, e, i) {
                null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                var s, n, r = [],
                    a = this.getChildren(t, e, i),
                    o = 0,
                    l = a.length;
                for (s = 0; l > s; s++) n = a[s], n.isActive() && (r[o++] = n);
                return r
            }, u.getLabelAfter = function(t) {
                t || 0 !== t && (t = this._time);
                var e, i = this.getLabelsArray(),
                    s = i.length;
                for (e = 0; s > e; e++)
                    if (i[e].time > t) return i[e].name;
                return null
            }, u.getLabelBefore = function(t) {
                null == t && (t = this._time);
                for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                    if (t > e[i].time) return e[i].name;
                return null
            }, u.getLabelsArray = function() {
                var t, e = [],
                    i = 0;
                for (t in this._labels) e[i++] = {
                    time: this._labels[t],
                    name: t
                };
                return e.sort(function(t, e) {
                    return t.time - e.time
                }), e
            }, u.progress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
            }, u.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
            }, u.totalDuration = function(e) {
                return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
            }, u.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
            }, u.repeat = function(t) {
                return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
            }, u.repeatDelay = function(t) {
                return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
            }, u.yoyo = function(t) {
                return arguments.length ? (this._yoyo = t, this) : this._yoyo
            }, u.currentLabel = function(t) {
                return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
            }, s
        }, !0), e = 180 / Math.PI, i = [], s = [], n = [], r = {}, a = _gsScope._gsDefine.globals, o = function(t, e, i, s) {
            this.a = t, this.b = e, this.c = i, this.d = s, this.da = s - t, this.ca = i - t, this.ba = e - t
        }, l = function(t, e, i, s) {
            var n = {
                    a: t
                },
                r = {},
                a = {},
                o = {
                    c: s
                },
                l = (t + e) / 2,
                h = (e + i) / 2,
                u = (i + s) / 2,
                c = (l + h) / 2,
                d = (h + u) / 2,
                p = (d - c) / 8;
            return n.b = l + (t - l) / 4, r.b = c + p, n.c = r.a = (n.b + r.b) / 2, r.c = a.a = (c + d) / 2, a.b = d - p, o.b = u + (s - u) / 4, a.c = o.a = (a.b + o.b) / 2, [n, r, a, o]
        }, h = function(t, e, r, a, o) {
            var h, u, c, d, p, f, m, v, g, _, y, w, b, x = t.length - 1,
                T = 0,
                C = t[0].a;
            for (h = 0; x > h; h++) p = t[T], u = p.a, c = p.d, d = t[T + 1].d, o ? (y = i[h], w = s[h], b = .25 * (w + y) * e / (a ? .5 : n[h] || .5), f = c - (c - u) * (a ? .5 * e : 0 !== y ? b / y : 0), m = c + (d - c) * (a ? .5 * e : 0 !== w ? b / w : 0), v = c - (f + ((m - f) * (3 * y / (y + w) + .5) / 4 || 0))) : (f = c - .5 * (c - u) * e, m = c + .5 * (d - c) * e, v = c - (f + m) / 2), f += v, m += v, p.c = g = f, p.b = 0 !== h ? C : C = p.a + .6 * (p.c - p.a), p.da = c - u, p.ca = g - u, p.ba = C - u, r ? (_ = l(u, C, g, c), t.splice(T, 1, _[0], _[1], _[2], _[3]), T += 4) : T++, C = m;
            (p = t[T]).b = C, p.c = C + .4 * (p.d - C), p.da = p.d - p.a, p.ca = p.c - p.a, p.ba = C - p.a, r && (_ = l(p.a, C, p.c, p.d), t.splice(T, 1, _[0], _[1], _[2], _[3]))
        }, u = function(t, e, n, r) {
            var a, l, h, u, c, d, p = [];
            if (r)
                for (t = [r].concat(t), l = t.length; --l > -1;) "string" == typeof(d = t[l][e]) && "=" === d.charAt(1) && (t[l][e] = r[e] + Number(d.charAt(0) + d.substr(2)));
            if (0 > (a = t.length - 2)) return p[0] = new o(t[0][e], 0, 0, t[-1 > a ? 0 : 1][e]), p;
            for (l = 0; a > l; l++) h = t[l][e], u = t[l + 1][e], p[l] = new o(h, 0, 0, u), n && (c = t[l + 2][e], i[l] = (i[l] || 0) + (u - h) * (u - h), s[l] = (s[l] || 0) + (c - u) * (c - u));
            return p[l] = new o(t[l][e], 0, 0, t[l + 1][e]), p
        }, c = function(t, e, a, o, l, c) {
            var d, p, f, m, v, g, _, y, w = {},
                b = [],
                x = c || t[0];
            l = "string" == typeof l ? "," + l + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == e && (e = 1);
            for (p in t[0]) b.push(p);
            if (t.length > 1) {
                for (y = t[t.length - 1], _ = !0, d = b.length; --d > -1;)
                    if (p = b[d], Math.abs(x[p] - y[p]) > .05) {
                        _ = !1;
                        break
                    } _ && (t = t.concat(), c && t.unshift(c), t.push(t[1]), c = t[t.length - 3])
            }
            for (i.length = s.length = n.length = 0, d = b.length; --d > -1;) p = b[d], r[p] = -1 !== l.indexOf("," + p + ","), w[p] = u(t, p, r[p], c);
            for (d = i.length; --d > -1;) i[d] = Math.sqrt(i[d]), s[d] = Math.sqrt(s[d]);
            if (!o) {
                for (d = b.length; --d > -1;)
                    if (r[p])
                        for (f = w[b[d]], g = f.length - 1, m = 0; g > m; m++) v = f[m + 1].da / s[m] + f[m].da / i[m], n[m] = (n[m] || 0) + v * v;
                for (d = n.length; --d > -1;) n[d] = Math.sqrt(n[d])
            }
            for (d = b.length, m = a ? 4 : 1; --d > -1;) p = b[d], f = w[p], h(f, e, a, o, r[p]), _ && (f.splice(0, m), f.splice(f.length - m, m));
            return w
        }, d = function(t, e, i) {
            for (var s, n, r, a, o, l, h, u, c, d, p, f = 1 / i, m = t.length; --m > -1;)
                for (d = t[m], r = d.a, a = d.d - r, o = d.c - r, l = d.b - r, s = n = 0, u = 1; i >= u; u++) h = f * u, c = 1 - h, s = n - (n = (h * h * a + 3 * c * (h * o + c * l)) * h), p = m * i + u - 1, e[p] = (e[p] || 0) + s * s
        }, p = _gsScope._gsDefine.plugin({
            propName: "bezier",
            priority: -1,
            version: "1.3.4",
            API: 2,
            global: !0,
            init: function(t, e, i) {
                this._target = t, e instanceof Array && (e = {
                    values: e
                }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                var s, n, r, a, l, h = e.values || [],
                    u = {},
                    p = h[0],
                    f = e.autoRotate || i.vars.orientToBezier;
                this._autoRotate = f ? f instanceof Array ? f : [
                    ["x", "y", "rotation", !0 === f ? 0 : Number(f) || 0]
                ] : null;
                for (s in p) this._props.push(s);
                for (r = this._props.length; --r > -1;) s = this._props[r], this._overwriteProps.push(s), n = this._func[s] = "function" == typeof t[s], u[s] = n ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]), l || u[s] !== h[0][s] && (l = u);
                if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? c(h, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, l) : function(t, e, i) {
                        var s, n, r, a, l, h, u, c, d, p, f, m = {},
                            v = "cubic" === (e = e || "soft") ? 3 : 2,
                            g = "soft" === e,
                            _ = [];
                        if (g && i && (t = [i].concat(t)), null == t || v + 1 > t.length) throw "invalid Bezier data";
                        for (d in t[0]) _.push(d);
                        for (h = _.length; --h > -1;) {
                            for (m[d = _[h]] = l = [], p = 0, c = t.length, u = 0; c > u; u++) s = null == i ? t[u][d] : "string" == typeof(f = t[u][d]) && "=" === f.charAt(1) ? i[d] + Number(f.charAt(0) + f.substr(2)) : Number(f), g && u > 1 && c - 1 > u && (l[p++] = (s + l[p - 2]) / 2), l[p++] = s;
                            for (c = p - v + 1, p = 0, u = 0; c > u; u += v) s = l[u], n = l[u + 1], r = l[u + 2], a = 2 === v ? 0 : l[u + 3], l[p++] = f = 3 === v ? new o(s, n, r, a) : new o(s, (2 * n + s) / 3, (2 * n + r) / 3, r);
                            l.length = p
                        }
                        return m
                    }(h, e.type, u), this._segCount = this._beziers[s].length, this._timeRes) {
                    var m = function(t, e) {
                        var i, s, n, r, a = [],
                            o = [],
                            l = 0,
                            h = 0,
                            u = (e = e >> 0 || 6) - 1,
                            c = [],
                            p = [];
                        for (i in t) d(t[i], a, e);
                        for (n = a.length, s = 0; n > s; s++) l += Math.sqrt(a[s]), r = s % e, p[r] = l, r === u && (h += l, r = s / e >> 0, c[r] = p, o[r] = h, l = 0, p = []);
                        return {
                            length: h,
                            lengths: o,
                            segments: c
                        }
                    }(this._beziers, this._timeRes);
                    this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                }
                if (f = this._autoRotate)
                    for (this._initialRotations = [], f[0] instanceof Array || (this._autoRotate = f = [f]), r = f.length; --r > -1;) {
                        for (a = 0; 3 > a; a++) s = f[r][a], this._func[s] = "function" == typeof t[s] && t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)];
                        s = f[r][2], this._initialRotations[r] = this._func[s] ? this._func[s].call(this._target) : this._target[s]
                    }
                return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
            },
            set: function(t) {
                var i, s, n, r, a, o, l, h, u, c, d = this._segCount,
                    p = this._func,
                    f = this._target,
                    m = t !== this._startRatio;
                if (this._timeRes) {
                    if (u = this._lengths, c = this._curSeg, t *= this._length, n = this._li, t > this._l2 && d - 1 > n) {
                        for (h = d - 1; h > n && t >= (this._l2 = u[++n]););
                        this._l1 = u[n - 1], this._li = n, this._curSeg = c = this._segments[n], this._s2 = c[this._s1 = this._si = 0]
                    } else if (this._l1 > t && n > 0) {
                        for (; n > 0 && (this._l1 = u[--n]) >= t;);
                        0 === n && this._l1 > t ? this._l1 = 0 : n++, this._l2 = u[n], this._li = n, this._curSeg = c = this._segments[n], this._s1 = c[(this._si = c.length - 1) - 1] || 0, this._s2 = c[this._si]
                    }
                    if (i = n, t -= this._l1, n = this._si, t > this._s2 && c.length - 1 > n) {
                        for (h = c.length - 1; h > n && t >= (this._s2 = c[++n]););
                        this._s1 = c[n - 1], this._si = n
                    } else if (this._s1 > t && n > 0) {
                        for (; n > 0 && (this._s1 = c[--n]) >= t;);
                        0 === n && this._s1 > t ? this._s1 = 0 : n++, this._s2 = c[n], this._si = n
                    }
                    o = (n + (t - this._s1) / (this._s2 - this._s1)) * this._prec
                } else i = 0 > t ? 0 : t >= 1 ? d - 1 : d * t >> 0, o = (t - i * (1 / d)) * d;
                for (s = 1 - o, n = this._props.length; --n > -1;) r = this._props[n], a = this._beziers[r][i], l = (o * o * a.da + 3 * s * (o * a.ca + s * a.ba)) * o + a.a, this._round[r] && (l = Math.round(l)), p[r] ? f[r](l) : f[r] = l;
                if (this._autoRotate) {
                    var v, g, _, y, w, b, x, T = this._autoRotate;
                    for (n = T.length; --n > -1;) r = T[n][2], b = T[n][3] || 0, x = !0 === T[n][4] ? 1 : e, a = this._beziers[T[n][0]], v = this._beziers[T[n][1]], a && v && (a = a[i], v = v[i], g = a.a + (a.b - a.a) * o, y = a.b + (a.c - a.b) * o, g += (y - g) * o, y += (a.c + (a.d - a.c) * o - y) * o, _ = v.a + (v.b - v.a) * o, w = v.b + (v.c - v.b) * o, _ += (w - _) * o, w += (v.c + (v.d - v.c) * o - w) * o, l = m ? Math.atan2(w - _, y - g) * x + b : this._initialRotations[n], p[r] ? f[r](l) : f[r] = l)
                }
            }
        }), f = p.prototype, p.bezierThrough = c, p.cubicToQuadratic = l, p._autoCSS = !0, p.quadraticToCubic = function(t, e, i) {
            return new o(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
        }, p._cssRegister = function() {
            var t = a.CSSPlugin;
            if (t) {
                var e = t._internals,
                    i = e._parseToProxy,
                    s = e._setPluginRatio,
                    n = e.CSSPropTween;
                e._registerComplexSpecialProp("bezier", {
                    parser: function(t, e, r, a, o, l) {
                        e instanceof Array && (e = {
                            values: e
                        }), l = new p;
                        var h, u, c, d = e.values,
                            f = d.length - 1,
                            m = [],
                            v = {};
                        if (0 > f) return o;
                        for (h = 0; f >= h; h++) c = i(t, d[h], a, o, l, f !== h), m[h] = c.end;
                        for (u in e) v[u] = e[u];
                        return v.values = m, (o = new n(t, "bezier", 0, 0, c.pt, 2)).data = c, o.plugin = l, o.setRatio = s, 0 === v.autoRotate && (v.autoRotate = !0), !v.autoRotate || v.autoRotate instanceof Array || (h = !0 === v.autoRotate ? 0 : Number(v.autoRotate), v.autoRotate = null != c.end.left ? [
                            ["left", "top", "rotation", h, !1]
                        ] : null != c.end.x && [
                            ["x", "y", "rotation", h, !1]
                        ]), v.autoRotate && (a._transform || a._enableTransforms(!1), c.autoRotate = a._target._gsTransform), l._onInitTween(c.proxy, v, a._tween), o
                    }
                })
            }
        }, f._roundProps = function(t, e) {
            for (var i = this._overwriteProps, s = i.length; --s > -1;)(t[i[s]] || t.bezier || t.bezierThrough) && (this._round[i[s]] = e)
        }, f._kill = function(t) {
            var e, i, s = this._props;
            for (e in this._beziers)
                if (e in t)
                    for (delete this._beziers[e], delete this._func[e], i = s.length; --i > -1;) s[i] === e && s.splice(i, 1);
            return this._super._kill.call(this, t)
        }, _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
            var i, s, n, r, a = function() {
                    t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
                },
                o = _gsScope._gsDefine.globals,
                l = {},
                h = a.prototype = new t("css");
            h.constructor = a, a.version = "1.15.1", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", h = "px", a.suffixMap = {
                top: h,
                right: h,
                bottom: h,
                left: h,
                width: h,
                height: h,
                fontSize: h,
                padding: h,
                margin: h,
                perspective: h,
                lineHeight: ""
            };
            var u, c, d, p, f, m, v, g, _ = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                y = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                w = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                b = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                x = /(?:\d|\-|\+|=|#|\.)*/g,
                T = /opacity *= *([^)]*)/i,
                C = /opacity:([^;]*)/i,
                S = /alpha\(opacity *=.+?\)/i,
                P = /^(rgb|hsl)/,
                I = /([A-Z])/g,
                A = /-([a-z])/gi,
                k = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                D = function(t, e) {
                    return e.toUpperCase()
                },
                E = /(?:Left|Right|Width)/i,
                O = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                R = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                $ = /,(?=[^\)]*(?:\(|$))/gi,
                F = Math.PI / 180,
                N = 180 / Math.PI,
                M = {},
                L = document,
                z = function(t) {
                    return L.createElementNS ? L.createElementNS("http://www.w3.org/1999/xhtml", t) : L.createElement(t)
                },
                j = z("div"),
                W = z("img"),
                q = a._internals = {
                    _specialProps: l
                },
                X = navigator.userAgent,
                U = (v = X.indexOf("Android"), g = z("a"), d = -1 !== X.indexOf("Safari") && -1 === X.indexOf("Chrome") && (-1 === v || Number(X.substr(v + 8, 1)) > 3), f = d && 6 > Number(X.substr(X.indexOf("Version/") + 8, 1)), p = -1 !== X.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(X) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(X)) && (m = parseFloat(RegExp.$1)), !!g && (g.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(g.style.opacity))),
                B = function(t) {
                    return T.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                },
                H = function(t) {
                    window.console && console.log(t)
                },
                V = "",
                Y = "",
                Q = function(t, e) {
                    var i, s, n = (e = e || j).style;
                    if (void 0 !== n[t]) return t;
                    for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], s = 5; --s > -1 && void 0 === n[i[s] + t];);
                    return s >= 0 ? (V = "-" + (Y = 3 === s ? "ms" : i[s]).toLowerCase() + "-", Y + t) : null
                },
                Z = L.defaultView ? L.defaultView.getComputedStyle : function() {},
                G = a.getStyle = function(t, e, i, s, n) {
                    var r;
                    return U || "opacity" !== e ? (!s && t.style[e] ? r = t.style[e] : (i = i || Z(t)) ? r = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(I, "-$1").toLowerCase()) : t.currentStyle && (r = t.currentStyle[e]), null == n || r && "none" !== r && "auto" !== r && "auto auto" !== r ? r : n) : B(t)
                },
                K = q.convertToPixels = function(t, i, s, n, r) {
                    if ("px" === n || !n) return s;
                    if ("auto" === n || !s) return 0;
                    var o, l, h, u = E.test(i),
                        c = t,
                        d = j.style,
                        p = 0 > s;
                    if (p && (s = -s), "%" === n && -1 !== i.indexOf("border")) o = s / 100 * (u ? t.clientWidth : t.clientHeight);
                    else {
                        if (d.cssText = "border:0 solid red;position:" + G(t, "position") + ";line-height:0;", "%" !== n && c.appendChild) d[u ? "borderLeftWidth" : "borderTopWidth"] = s + n;
                        else {
                            if (l = (c = t.parentNode || L.body)._gsCache, h = e.ticker.frame, l && u && l.time === h) return l.width * s / 100;
                            d[u ? "width" : "height"] = s + n
                        }
                        c.appendChild(j), o = parseFloat(j[u ? "offsetWidth" : "offsetHeight"]), c.removeChild(j), u && "%" === n && !1 !== a.cacheWidths && ((l = c._gsCache = c._gsCache || {}).time = h, l.width = o / s * 100), 0 !== o || r || (o = K(t, i, s, n, !0))
                    }
                    return p ? -o : o
                },
                J = q.calculateOffset = function(t, e, i) {
                    if ("absolute" !== G(t, "position", i)) return 0;
                    var s = "left" === e ? "Left" : "Top",
                        n = G(t, "margin" + s, i);
                    return t["offset" + s] - (K(t, e, parseFloat(n), n.replace(x, "")) || 0)
                },
                tt = function(t, e) {
                    var i, s, n = {};
                    if (e = e || Z(t, null))
                        for (i in e)(-1 === i.indexOf("Transform") || At === i) && (n[i] = e[i]);
                    else if (e = t.currentStyle || t.style)
                        for (i in e) "string" == typeof i && void 0 === n[i] && (n[i.replace(A, D)] = e[i]);
                    return U || (n.opacity = B(t)), s = Lt(t, e, !1), n.rotation = s.rotation, n.skewX = s.skewX, n.scaleX = s.scaleX, n.scaleY = s.scaleY, n.x = s.x, n.y = s.y, Et && (n.z = s.z, n.rotationX = s.rotationX, n.rotationY = s.rotationY, n.scaleZ = s.scaleZ), n.filters && delete n.filters, n
                },
                et = function(t, e, i, s, n) {
                    var r, a, o, l = {},
                        h = t.style;
                    for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (r = i[a]) || n && n[a]) && -1 === a.indexOf("Origin") && ("number" == typeof r || "string" == typeof r) && (l[a] = "auto" !== r || "left" !== a && "top" !== a ? "" !== r && "auto" !== r && "none" !== r || "string" != typeof e[a] || "" === e[a].replace(b, "") ? r : 0 : J(t, a), void 0 !== h[a] && (o = new mt(h, a, h[a], o)));
                    if (s)
                        for (a in s) "className" !== a && (l[a] = s[a]);
                    return {
                        difs: l,
                        firstMPT: o
                    }
                },
                it = {
                    width: ["Left", "Right"],
                    height: ["Top", "Bottom"]
                },
                st = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                nt = function(t, e, i) {
                    var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                        n = it[e],
                        r = n.length;
                    for (i = i || Z(t, null); --r > -1;) s -= parseFloat(G(t, "padding" + n[r], i, !0)) || 0, s -= parseFloat(G(t, "border" + n[r] + "Width", i, !0)) || 0;
                    return s
                },
                rt = function(t, e) {
                    (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
                    var i = t.split(" "),
                        s = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                        n = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                    return null == n ? n = "center" === s ? "50%" : "0" : "center" === n && (n = "50%"), ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"), e && (e.oxp = -1 !== s.indexOf("%"), e.oyp = -1 !== n.indexOf("%"), e.oxr = "=" === s.charAt(1), e.oyr = "=" === n.charAt(1), e.ox = parseFloat(s.replace(b, "")), e.oy = parseFloat(n.replace(b, ""))), s + " " + n + (i.length > 2 ? " " + i[2] : "")
                },
                at = function(t, e) {
                    return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
                },
                ot = function(t, e) {
                    return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
                },
                lt = function(t, e, i, s) {
                    var n, r, a, o, l;
                    return null == t ? o = e : "number" == typeof t ? o = t : (n = 360, r = t.split("_"), a = ((l = "=" === t.charAt(1)) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(r[0].substr(2)) : parseFloat(r[0])) * (-1 === t.indexOf("rad") ? 1 : N) - (l ? 0 : e), r.length && (s && (s[i] = e + a), -1 !== t.indexOf("short") && ((a %= n) !== a % (n / 2) && (a = 0 > a ? a + n : a - n)), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * n) % n - (0 | a / n) * n : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * n) % n - (0 | a / n) * n)), o = e + a), 1e-6 > o && o > -1e-6 && (o = 0), o
                },
                ht = {
                    aqua: [0, 255, 255],
                    lime: [0, 255, 0],
                    silver: [192, 192, 192],
                    black: [0, 0, 0],
                    maroon: [128, 0, 0],
                    teal: [0, 128, 128],
                    blue: [0, 0, 255],
                    navy: [0, 0, 128],
                    white: [255, 255, 255],
                    fuchsia: [255, 0, 255],
                    olive: [128, 128, 0],
                    yellow: [255, 255, 0],
                    orange: [255, 165, 0],
                    gray: [128, 128, 128],
                    purple: [128, 0, 128],
                    green: [0, 128, 0],
                    red: [255, 0, 0],
                    pink: [255, 192, 203],
                    cyan: [0, 255, 255],
                    transparent: [255, 255, 255, 0]
                },
                ut = function(t, e, i) {
                    return 0 | 255 * (1 > 6 * (t = 0 > t ? t + 1 : t > 1 ? t - 1 : t) ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
                },
                ct = a.parseColor = function(t) {
                    var e, i, s, n, r, a;
                    return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ht[t] ? ht[t] : "#" === t.charAt(0) ? (4 === t.length && (t = "#" + (e = t.charAt(1)) + e + (i = t.charAt(2)) + i + (s = t.charAt(3)) + s), [(t = parseInt(t.substr(1), 16)) >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(_), n = Number(t[0]) % 360 / 360, r = Number(t[1]) / 100, e = 2 * (a = Number(t[2]) / 100) - (i = .5 >= a ? a * (r + 1) : a + r - a * r), t.length > 3 && (t[3] = Number(t[3])), t[0] = ut(n + 1 / 3, e, i), t[1] = ut(n, e, i), t[2] = ut(n - 1 / 3, e, i), t) : ((t = t.match(_) || ht.transparent)[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : ht.black
                },
                dt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
            for (h in ht) dt += "|" + h + "\\b";
            dt = RegExp(dt + ")", "gi");
            var pt = function(t, e, i, s) {
                    if (null == t) return function(t) {
                        return t
                    };
                    var n, r = e ? (t.match(dt) || [""])[0] : "",
                        a = t.split(r).join("").match(w) || [],
                        o = t.substr(0, t.indexOf(a[0])),
                        l = ")" === t.charAt(t.length - 1) ? ")" : "",
                        h = -1 !== t.indexOf(" ") ? " " : ",",
                        u = a.length,
                        c = u > 0 ? a[0].replace(_, "") : "";
                    return u ? n = e ? function(t) {
                        var e, d, p, f;
                        if ("number" == typeof t) t += c;
                        else if (s && $.test(t)) {
                            for (f = t.replace($, "|").split("|"), p = 0; f.length > p; p++) f[p] = n(f[p]);
                            return f.join(",")
                        }
                        if (e = (t.match(dt) || [r])[0], p = (d = t.split(e).join("").match(w) || []).length, u > p--)
                            for (; u > ++p;) d[p] = i ? d[0 | (p - 1) / 2] : a[p];
                        return o + d.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                    } : function(t) {
                        var e, r, d;
                        if ("number" == typeof t) t += c;
                        else if (s && $.test(t)) {
                            for (r = t.replace($, "|").split("|"), d = 0; r.length > d; d++) r[d] = n(r[d]);
                            return r.join(",")
                        }
                        if (d = (e = t.match(w) || []).length, u > d--)
                            for (; u > ++d;) e[d] = i ? e[0 | (d - 1) / 2] : a[d];
                        return o + e.join(h) + l
                    } : function(t) {
                        return t
                    }
                },
                ft = function(t) {
                    return t = t.split(","),
                        function(e, i, s, n, r, a, o) {
                            var l, h = (i + "").split(" ");
                            for (o = {}, l = 0; 4 > l; l++) o[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
                            return n.parse(e, o, r, a)
                        }
                },
                mt = (q._setPluginRatio = function(t) {
                    this.plugin.setRatio(t);
                    for (var e, i, s, n, r = this.data, a = r.proxy, o = r.firstMPT; o;) e = a[o.v], o.r ? e = Math.round(e) : 1e-6 > e && e > -1e-6 && (e = 0), o.t[o.p] = e, o = o._next;
                    if (r.autoRotate && (r.autoRotate.rotation = a.rotation), 1 === t)
                        for (o = r.firstMPT; o;) {
                            if ((i = o.t).type) {
                                if (1 === i.type) {
                                    for (n = i.xs0 + i.s + i.xs1, s = 1; i.l > s; s++) n += i["xn" + s] + i["xs" + (s + 1)];
                                    i.e = n
                                }
                            } else i.e = i.s + i.xs0;
                            o = o._next
                        }
                }, function(t, e, i, s, n) {
                    this.t = t, this.p = e, this.v = i, this.r = n, s && (s._prev = this, this._next = s)
                }),
                vt = (q._parseToProxy = function(t, e, i, s, n, r) {
                    var a, o, l, h, u, c = s,
                        d = {},
                        p = {},
                        f = i._transform,
                        m = M;
                    for (i._transform = null, M = e, s = u = i.parse(t, e, s, n), M = m, r && (i._transform = f, c && (c._prev = null, c._prev && (c._prev._next = null))); s && s !== c;) {
                        if (1 >= s.type && (p[o = s.p] = s.s + s.c, d[o] = s.s, r || (h = new mt(s, "s", o, h, s.r), s.c = 0), 1 === s.type))
                            for (a = s.l; --a > 0;) l = "xn" + a, o = s.p + "_" + l, p[o] = s.data[l], d[o] = s[l], r || (h = new mt(s, l, o, h, s.rxp[l]));
                        s = s._next
                    }
                    return {
                        proxy: d,
                        end: p,
                        firstMPT: h,
                        pt: u
                    }
                }, q.CSSPropTween = function(t, e, s, n, a, o, l, h, u, c, d) {
                    this.t = t, this.p = e, this.s = s, this.c = n, this.n = l || e, t instanceof vt || r.push(this.n), this.r = h, this.type = o || 0, u && (this.pr = u, i = !0), this.b = void 0 === c ? s : c, this.e = void 0 === d ? s + n : d, a && (this._next = a, a._prev = this)
                }),
                gt = a.parseComplex = function(t, e, i, s, n, r, a, o, l, h) {
                    i = i || r || "", a = new vt(t, e, 0, 0, a, h ? 2 : 1, null, !1, o, i, s), s += "";
                    var c, d, p, f, m, v, g, w, b, x, T, C, S = i.split(", ").join(",").split(" "),
                        I = s.split(", ").join(",").split(" "),
                        A = S.length,
                        k = !1 !== u;
                    for ((-1 !== s.indexOf(",") || -1 !== i.indexOf(",")) && (S = S.join(" ").replace($, ", ").split(" "), I = I.join(" ").replace($, ", ").split(" "), A = S.length), A !== I.length && (A = (S = (r || "").split(" ")).length), a.plugin = l, a.setRatio = h, c = 0; A > c; c++)
                        if (f = S[c], m = I[c], w = parseFloat(f), w || 0 === w) a.appendXtra("", w, at(m, w), m.replace(y, ""), k && -1 !== m.indexOf("px"), !0);
                        else if (n && ("#" === f.charAt(0) || ht[f] || P.test(f))) C = "," === m.charAt(m.length - 1) ? ")," : ")", f = ct(f), m = ct(m), b = f.length + m.length > 6, b && !U && 0 === m[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(I[c]).join("transparent")) : (U || (b = !1), a.appendXtra(b ? "rgba(" : "rgb(", f[0], m[0] - f[0], ",", !0, !0).appendXtra("", f[1], m[1] - f[1], ",", !0).appendXtra("", f[2], m[2] - f[2], b ? "," : C, !0), b && (f = 4 > f.length ? 1 : f[3], a.appendXtra("", f, (4 > m.length ? 1 : m[3]) - f, C, !1)));
                    else if (v = f.match(_)) {
                        if (!(g = m.match(y)) || g.length !== v.length) return a;
                        for (p = 0, d = 0; v.length > d; d++) T = v[d], x = f.indexOf(T, p), a.appendXtra(f.substr(p, x - p), Number(T), at(g[d], T), "", k && "px" === f.substr(x + T.length, 2), 0 === d), p = x + T.length;
                        a["xs" + a.l] += f.substr(p)
                    } else a["xs" + a.l] += a.l ? " " + f : f;
                    if (-1 !== s.indexOf("=") && a.data) {
                        for (C = a.xs0 + a.data.s, c = 1; a.l > c; c++) C += a["xs" + c] + a.data["xn" + c];
                        a.e = C + a["xs" + c]
                    }
                    return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
                },
                _t = 9;
            for ((h = vt.prototype).l = h.pr = 0; --_t > 0;) h["xn" + _t] = 0, h["xs" + _t] = "";
            h.xs0 = "", h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null, h.appendXtra = function(t, e, i, s, n, r) {
                var a = this,
                    o = a.l;
                return a["xs" + o] += r && o ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = s || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = n, a["xn" + o] = e, a.plugin || (a.xfirst = new vt(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, n, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
                    s: e + i
                }, a.rxp = {}, a.s = e, a.c = i, a.r = n, a)) : (a["xs" + o] += e + (s || ""), a)
            };
            var yt = function(t, e) {
                    e = e || {}, this.p = e.prefix && Q(t) || t, l[t] = l[this.p] = this, this.format = e.formatter || pt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                },
                wt = q._registerComplexSpecialProp = function(t, e, i) {
                    "object" != typeof e && (e = {
                        parser: i
                    });
                    var s, n = t.split(","),
                        r = e.defaultValue;
                    for (i = i || [r], s = 0; n.length > s; s++) e.prefix = 0 === s && e.prefix, e.defaultValue = i[s] || r, new yt(n[s], e)
                },
                bt = function(t) {
                    if (!l[t]) {
                        var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                        wt(t, {
                            parser: function(t, i, s, n, r, a, h) {
                                var u = o.com.greensock.plugins[e];
                                return u ? (u._cssRegister(), l[s].parse(t, i, s, n, r, a, h)) : (H("Error: " + e + " js file not loaded."), r)
                            }
                        })
                    }
                };
            (h = yt.prototype).parseComplex = function(t, e, i, s, n, r) {
                var a, o, l, h, u, c, d = this.keyword;
                if (this.multi && ($.test(i) || $.test(e) ? (o = e.replace($, "|").split("|"), l = i.replace($, "|").split("|")) : d && (o = [e], l = [i])), l) {
                    for (h = l.length > o.length ? l.length : o.length, a = 0; h > a; a++) e = o[a] = o[a] || this.dflt, i = l[a] = l[a] || this.dflt, d && (u = e.indexOf(d), c = i.indexOf(d), u !== c && (i = -1 === c ? l : o, i[a] += " " + d));
                    e = o.join(", "), i = l.join(", ")
                }
                return gt(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, n, r)
            }, h.parse = function(t, e, i, s, r, a) {
                return this.parseComplex(t.style, this.format(G(t, this.p, n, !1, this.dflt)), this.format(e), r, a)
            }, a.registerSpecialProp = function(t, e, i) {
                wt(t, {
                    parser: function(t, s, n, r, a, o) {
                        var l = new vt(t, n, 0, 0, a, 2, n, !1, i);
                        return l.plugin = o, l.setRatio = e(t, s, r._tween, n), l
                    },
                    priority: i
                })
            };
            var xt, Tt, Ct, St, Pt, It = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                At = Q("transform"),
                kt = V + "transform",
                Dt = Q("transformOrigin"),
                Et = null !== Q("perspective"),
                Ot = q.Transform = function() {
                    this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = !(!1 === a.defaultForce3D || !Et) && (a.defaultForce3D || "auto")
                },
                Rt = window.SVGElement,
                $t = function(t, e, i) {
                    var s, n = L.createElementNS("http://www.w3.org/2000/svg", t),
                        r = /([a-z])([A-Z])/g;
                    for (s in i) n.setAttributeNS(null, s.replace(r, "$1-$2").toLowerCase(), i[s]);
                    return e.appendChild(n), n
                },
                Ft = document.documentElement,
                Nt = (Pt = m || /Android/i.test(X) && !window.chrome, L.createElementNS && !Pt && (Tt = $t("svg", Ft), St = (Ct = $t("rect", Tt, {
                    width: 100,
                    height: 50,
                    x: 100
                })).getBoundingClientRect().width, Ct.style[Dt] = "50% 50%", Ct.style[At] = "scaleX(0.5)", Pt = St === Ct.getBoundingClientRect().width && !(p && Et), Ft.removeChild(Tt)), Pt),
                Mt = function(t, e, i) {
                    var s = t.getBBox();
                    e = rt(e).split(" "), i.xOrigin = (-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * s.width : parseFloat(e[0])) + s.x, i.yOrigin = (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * s.height : parseFloat(e[1])) + s.y
                },
                Lt = q.getTransform = function(t, e, i, s) {
                    if (t._gsTransform && i && !s) return t._gsTransform;
                    var r, o, l, h, u, c, d, p, f, m, v = i && t._gsTransform || new Ot,
                        g = 0 > v.scaleX,
                        _ = 1e5,
                        y = Et && (parseFloat(G(t, Dt, e, !1, "0 0 0").split(" ")[2]) || v.zOrigin) || 0,
                        w = parseFloat(a.defaultTransformPerspective) || 0;
                    if (At ? o = G(t, kt, e, !0) : t.currentStyle && (o = (o = t.currentStyle.filter.match(O)) && 4 === o.length ? [o[0].substr(4), Number(o[2].substr(4)), Number(o[1].substr(4)), o[3].substr(4), v.x || 0, v.y || 0].join(",") : ""), r = !o || "none" === o || "matrix(1, 0, 0, 1, 0, 0)" === o, v.svg = !!(Rt && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM)), v.svg && (Mt(t, G(t, Dt, n, !1, "50% 50%") + "", v), xt = a.useSVGTransformAttr || Nt, l = t.getAttribute("transform"), r && l && -1 !== l.indexOf("matrix") && (o = l, r = 0)), !r) {
                        for (h = (l = (o || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || []).length; --h > -1;) u = Number(l[h]), l[h] = (c = u - (u |= 0)) ? (0 | c * _ + (0 > c ? -.5 : .5)) / _ + u : u;
                        if (16 === l.length) {
                            var b, x, T, C, S, P = l[0],
                                I = l[1],
                                A = l[2],
                                k = l[3],
                                D = l[4],
                                E = l[5],
                                R = l[6],
                                $ = l[7],
                                F = l[8],
                                M = l[9],
                                L = l[10],
                                z = l[12],
                                j = l[13],
                                W = l[14],
                                q = l[11],
                                X = Math.atan2(R, L);
                            v.zOrigin && (z = F * (W = -v.zOrigin) - l[12], j = M * W - l[13], W = L * W + v.zOrigin - l[14]), v.rotationX = X * N, X && (b = D * (C = Math.cos(-X)) + F * (S = Math.sin(-X)), x = E * C + M * S, T = R * C + L * S, F = D * -S + F * C, M = E * -S + M * C, L = R * -S + L * C, q = $ * -S + q * C, D = b, E = x, R = T), X = Math.atan2(F, L), v.rotationY = X * N, X && (x = I * (C = Math.cos(-X)) - M * (S = Math.sin(-X)), T = A * C - L * S, M = I * S + M * C, L = A * S + L * C, q = k * S + q * C, P = b = P * C - F * S, I = x, A = T), X = Math.atan2(I, P), v.rotation = X * N, X && (P = P * (C = Math.cos(-X)) + D * (S = Math.sin(-X)), x = I * C + E * S, E = I * -S + E * C, R = A * -S + R * C, I = x), v.rotationX && Math.abs(v.rotationX) + Math.abs(v.rotation) > 359.9 && (v.rotationX = v.rotation = 0, v.rotationY += 180), v.scaleX = (0 | Math.sqrt(P * P + I * I) * _ + .5) / _, v.scaleY = (0 | Math.sqrt(E * E + M * M) * _ + .5) / _, v.scaleZ = (0 | Math.sqrt(R * R + L * L) * _ + .5) / _, v.skewX = 0, v.perspective = q ? 1 / (0 > q ? -q : q) : 0, v.x = z, v.y = j, v.z = W
                        } else if (!(Et && !s && l.length && v.x === l[4] && v.y === l[5] && (v.rotationX || v.rotationY) || void 0 !== v.x && "none" === G(t, "display", e))) {
                            var U = l.length >= 6,
                                B = U ? l[0] : 1,
                                H = l[1] || 0,
                                V = l[2] || 0,
                                Y = U ? l[3] : 1;
                            v.x = l[4] || 0, v.y = l[5] || 0, d = Math.sqrt(B * B + H * H), p = Math.sqrt(Y * Y + V * V), f = B || H ? Math.atan2(H, B) * N : v.rotation || 0, m = V || Y ? Math.atan2(V, Y) * N + f : v.skewX || 0, Math.abs(m) > 90 && 270 > Math.abs(m) && (g ? (d *= -1, m += 0 >= f ? 180 : -180, f += 0 >= f ? 180 : -180) : (p *= -1, m += 0 >= m ? 180 : -180)), v.scaleX = d, v.scaleY = p, v.rotation = f, v.skewX = m, Et && (v.rotationX = v.rotationY = v.z = 0, v.perspective = w, v.scaleZ = 1)
                        }
                        v.zOrigin = y;
                        for (h in v) 2e-5 > v[h] && v[h] > -2e-5 && (v[h] = 0)
                    }
                    return i && (t._gsTransform = v), v
                },
                zt = function(t) {
                    var e, i, s = this.data,
                        n = -s.rotation * F,
                        r = n + s.skewX * F,
                        a = 1e5,
                        o = (0 | Math.cos(n) * s.scaleX * a) / a,
                        l = (0 | Math.sin(n) * s.scaleX * a) / a,
                        h = (0 | Math.sin(r) * -s.scaleY * a) / a,
                        u = (0 | Math.cos(r) * s.scaleY * a) / a,
                        c = this.t.style,
                        d = this.t.currentStyle;
                    if (d) {
                        i = l, l = -h, h = -i, e = d.filter, c.filter = "";
                        var p, f, v = this.t.offsetWidth,
                            g = this.t.offsetHeight,
                            _ = "absolute" !== d.position,
                            y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + l + ", M21=" + h + ", M22=" + u,
                            w = s.x + v * s.xPercent / 100,
                            b = s.y + g * s.yPercent / 100;
                        if (null != s.ox && (w += (p = (s.oxp ? .01 * v * s.ox : s.ox) - v / 2) - (p * o + (f = (s.oyp ? .01 * g * s.oy : s.oy) - g / 2) * l), b += f - (p * h + f * u)), _ ? y += ", Dx=" + ((p = v / 2) - (p * o + (f = g / 2) * l) + w) + ", Dy=" + (f - (p * h + f * u) + b) + ")" : y += ", sizingMethod='auto expand')", c.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(R, y) : y + " " + e, (0 === t || 1 === t) && 1 === o && 0 === l && 0 === h && 1 === u && (_ && -1 === y.indexOf("Dx=0, Dy=0") || T.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && c.removeAttribute("filter")), !_) {
                            var C, S, P, I = 8 > m ? 1 : -1;
                            for (p = s.ieOffsetX || 0, f = s.ieOffsetY || 0, s.ieOffsetX = Math.round((v - ((0 > o ? -o : o) * v + (0 > l ? -l : l) * g)) / 2 + w), s.ieOffsetY = Math.round((g - ((0 > u ? -u : u) * g + (0 > h ? -h : h) * v)) / 2 + b), _t = 0; 4 > _t; _t++) S = st[_t], C = d[S], i = -1 !== C.indexOf("px") ? parseFloat(C) : K(this.t, S, parseFloat(C), C.replace(x, "")) || 0, P = i !== s[S] ? 2 > _t ? -s.ieOffsetX : -s.ieOffsetY : 2 > _t ? p - s.ieOffsetX : f - s.ieOffsetY, c[S] = (s[S] = Math.round(i - P * (0 === _t || 2 === _t ? 1 : I))) + "px"
                        }
                    }
                },
                jt = q.set3DTransformRatio = function(t) {
                    var e, i, s, n, r, a, o, l, h, u, c, d, f, m, v, g, _, y, w, b, x, T = this.data,
                        C = this.t.style,
                        S = T.rotation * F,
                        P = T.scaleX,
                        I = T.scaleY,
                        A = T.scaleZ,
                        k = T.x,
                        D = T.y,
                        E = T.z,
                        O = T.perspective;
                    if (1 !== t && 0 !== t && T.force3D || !0 === T.force3D || T.rotationY || T.rotationX || 1 !== A || O || E) {
                        if (p && ((m = 1e-4) > P && P > -m && (P = A = 2e-5), m > I && I > -m && (I = A = 2e-5), !O || T.z || T.rotationX || T.rotationY || (O = 0)), S || T.skewX) v = e = Math.cos(S), g = n = Math.sin(S), T.skewX && (S -= T.skewX * F, v = Math.cos(S), g = Math.sin(S), "simple" === T.skewType && (_ = Math.tan(T.skewX * F), _ = Math.sqrt(1 + _ * _), v *= _, g *= _)), i = -g, r = v;
                        else {
                            if (!(T.rotationY || T.rotationX || 1 !== A || O || T.svg)) return void(C[At] = (T.xPercent || T.yPercent ? "translate(" + T.xPercent + "%," + T.yPercent + "%) translate3d(" : "translate3d(") + k + "px," + D + "px," + E + "px)" + (1 !== P || 1 !== I ? " scale(" + P + "," + I + ")" : ""));
                            e = r = 1, i = n = 0
                        }
                        h = 1, s = a = o = l = u = c = 0, d = O ? -1 / O : 0, f = T.zOrigin, m = 1e-6, b = ",", x = "0", (S = T.rotationY * F) && (v = Math.cos(S), o = -(g = Math.sin(S)), u = d * -g, s = e * g, a = n * g, h = v, d *= v, e *= v, n *= v), (S = T.rotationX * F) && (_ = i * (v = Math.cos(S)) + s * (g = Math.sin(S)), y = r * v + a * g, l = h * g, c = d * g, s = i * -g + s * v, a = r * -g + a * v, h *= v, d *= v, i = _, r = y), 1 !== A && (s *= A, a *= A, h *= A, d *= A), 1 !== I && (i *= I, r *= I, l *= I, c *= I), 1 !== P && (e *= P, n *= P, o *= P, u *= P), (f || T.svg) && (f && (k += s * -f, D += a * -f, E += h * -f + f), T.svg && (k += T.xOrigin - (T.xOrigin * e + T.yOrigin * i), D += T.yOrigin - (T.xOrigin * n + T.yOrigin * r)), m > k && k > -m && (k = x), m > D && D > -m && (D = x), m > E && E > -m && (E = 0)), w = T.xPercent || T.yPercent ? "translate(" + T.xPercent + "%," + T.yPercent + "%) matrix3d(" : "matrix3d(", w += (m > e && e > -m ? x : e) + b + (m > n && n > -m ? x : n) + b + (m > o && o > -m ? x : o), w += b + (m > u && u > -m ? x : u) + b + (m > i && i > -m ? x : i) + b + (m > r && r > -m ? x : r), T.rotationX || T.rotationY ? (w += b + (m > l && l > -m ? x : l) + b + (m > c && c > -m ? x : c) + b + (m > s && s > -m ? x : s), w += b + (m > a && a > -m ? x : a) + b + (m > h && h > -m ? x : h) + b + (m > d && d > -m ? x : d) + b) : w += ",0,0,0,0,1,0,", w += k + b + D + b + E + b + (O ? 1 + -E / O : 1) + ")", C[At] = w
                    } else Wt.call(this, t)
                },
                Wt = q.set2DTransformRatio = function(t) {
                    var e, i, s, n, r, a, o, l, h, u, c, d = this.data,
                        p = this.t,
                        f = p.style,
                        m = d.x,
                        v = d.y;
                    return !(d.rotationX || d.rotationY || d.z || !0 === d.force3D || "auto" === d.force3D && 1 !== t && 0 !== t) || d.svg && xt || !Et ? (n = d.scaleX, r = d.scaleY, void(d.rotation || d.skewX || d.svg ? (e = d.rotation * F, i = e - d.skewX * F, s = 1e5, a = Math.cos(e) * n, o = Math.sin(e) * n, l = Math.sin(i) * -r, h = Math.cos(i) * r, d.svg && (m += d.xOrigin - (d.xOrigin * a + d.yOrigin * l), v += d.yOrigin - (d.xOrigin * o + d.yOrigin * h), c = 1e-6, c > m && m > -c && (m = 0), c > v && v > -c && (v = 0)), u = (0 | a * s) / s + "," + (0 | o * s) / s + "," + (0 | l * s) / s + "," + (0 | h * s) / s + "," + m + "," + v + ")", d.svg && xt ? p.setAttribute("transform", "matrix(" + u) : f[At] = (d.xPercent || d.yPercent ? "translate(" + d.xPercent + "%," + d.yPercent + "%) matrix(" : "matrix(") + u) : f[At] = (d.xPercent || d.yPercent ? "translate(" + d.xPercent + "%," + d.yPercent + "%) matrix(" : "matrix(") + n + ",0,0," + r + "," + m + "," + v + ")")) : (this.setRatio = jt, void jt.call(this, t))
                };
            (h = Ot.prototype).x = h.y = h.z = h.skewX = h.skewY = h.rotation = h.rotationX = h.rotationY = h.zOrigin = h.xPercent = h.yPercent = 0, h.scaleX = h.scaleY = h.scaleZ = 1, wt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent", {
                parser: function(t, e, i, s, r, o, l) {
                    if (s._lastParsedTransform === l) return r;
                    s._lastParsedTransform = l;
                    var h, u, c, d, p, f, m, v = s._transform = Lt(t, n, !0, l.parseTransform),
                        g = t.style,
                        _ = It.length,
                        y = l,
                        w = {};
                    if ("string" == typeof y.transform && At) c = j.style, c[At] = y.transform, c.display = "block", c.position = "absolute", L.body.appendChild(j), h = Lt(j, null, !1), L.body.removeChild(j);
                    else if ("object" == typeof y) {
                        if (h = {
                                scaleX: ot(null != y.scaleX ? y.scaleX : y.scale, v.scaleX),
                                scaleY: ot(null != y.scaleY ? y.scaleY : y.scale, v.scaleY),
                                scaleZ: ot(y.scaleZ, v.scaleZ),
                                x: ot(y.x, v.x),
                                y: ot(y.y, v.y),
                                z: ot(y.z, v.z),
                                xPercent: ot(y.xPercent, v.xPercent),
                                yPercent: ot(y.yPercent, v.yPercent),
                                perspective: ot(y.transformPerspective, v.perspective)
                            }, null != (m = y.directionalRotation))
                            if ("object" == typeof m)
                                for (c in m) y[c] = m[c];
                            else y.rotation = m;
                        "string" == typeof y.x && -1 !== y.x.indexOf("%") && (h.x = 0, h.xPercent = ot(y.x, v.xPercent)), "string" == typeof y.y && -1 !== y.y.indexOf("%") && (h.y = 0, h.yPercent = ot(y.y, v.yPercent)), h.rotation = lt("rotation" in y ? y.rotation : "shortRotation" in y ? y.shortRotation + "_short" : "rotationZ" in y ? y.rotationZ : v.rotation, v.rotation, "rotation", w), Et && (h.rotationX = lt("rotationX" in y ? y.rotationX : "shortRotationX" in y ? y.shortRotationX + "_short" : v.rotationX || 0, v.rotationX, "rotationX", w), h.rotationY = lt("rotationY" in y ? y.rotationY : "shortRotationY" in y ? y.shortRotationY + "_short" : v.rotationY || 0, v.rotationY, "rotationY", w)), h.skewX = null == y.skewX ? v.skewX : lt(y.skewX, v.skewX), h.skewY = null == y.skewY ? v.skewY : lt(y.skewY, v.skewY), (u = h.skewY - v.skewY) && (h.skewX += u, h.rotation += u)
                    }
                    for (Et && null != y.force3D && (v.force3D = y.force3D, f = !0), v.skewType = y.skewType || v.skewType || a.defaultSkewType, (p = v.force3D || v.z || v.rotationX || v.rotationY || h.z || h.rotationX || h.rotationY || h.perspective) || null == y.scale || (h.scaleZ = 1); --_ > -1;) i = It[_], d = h[i] - v[i], (d > 1e-6 || -1e-6 > d || null != y[i] || null != M[i]) && (f = !0, r = new vt(v, i, v[i], d, r), i in w && (r.e = w[i]), r.xs0 = 0, r.plugin = o, s._overwriteProps.push(r.n));
                    return (d = y.transformOrigin) && v.svg && (Mt(t, rt(d), h), (r = new vt(v, "xOrigin", v.xOrigin, h.xOrigin - v.xOrigin, r, -1, "transformOrigin")).b = v.xOrigin, r.e = r.xs0 = h.xOrigin, (r = new vt(v, "yOrigin", v.yOrigin, h.yOrigin - v.yOrigin, r, -1, "transformOrigin")).b = v.yOrigin, r.e = r.xs0 = h.yOrigin, d = "0px 0px"), (d || Et && p && v.zOrigin) && (At ? (f = !0, i = Dt, d = (d || G(t, i, n, !1, "50% 50%")) + "", (r = new vt(g, i, 0, 0, r, -1, "transformOrigin")).b = g[i], r.plugin = o, Et ? (c = v.zOrigin, d = d.split(" "), v.zOrigin = (d.length > 2 && (0 === c || "0px" !== d[2]) ? parseFloat(d[2]) : c) || 0, r.xs0 = r.e = d[0] + " " + (d[1] || "50%") + " 0px", (r = new vt(v, "zOrigin", 0, 0, r, -1, r.n)).b = c, r.xs0 = r.e = v.zOrigin) : r.xs0 = r.e = d) : rt(d + "", v)), f && (s._transformType = v.svg && xt || !p && 3 !== this._transformType ? 2 : 3), r
                },
                prefix: !0
            }), wt("boxShadow", {
                defaultValue: "0px 0px 0px 0px #999",
                prefix: !0,
                color: !0,
                multi: !0,
                keyword: "inset"
            }), wt("borderRadius", {
                defaultValue: "0px",
                parser: function(t, e, i, r, a) {
                    e = this.format(e);
                    var o, l, h, u, c, d, p, f, m, v, g, _, y, w, b, x, T = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                        C = t.style;
                    for (m = parseFloat(t.offsetWidth), v = parseFloat(t.offsetHeight), o = e.split(" "), l = 0; T.length > l; l++) this.p.indexOf("border") && (T[l] = Q(T[l])), c = u = G(t, T[l], n, !1, "0px"), -1 !== c.indexOf(" ") && (u = c.split(" "), c = u[0], u = u[1]), d = h = o[l], p = parseFloat(c), _ = c.substr((p + "").length), y = "=" === d.charAt(1), y ? (f = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), f *= parseFloat(d), g = d.substr((f + "").length - (0 > f ? 1 : 0)) || "") : (f = parseFloat(d), g = d.substr((f + "").length)), "" === g && (g = s[i] || _), g !== _ && (w = K(t, "borderLeft", p, _), b = K(t, "borderTop", p, _), "%" === g ? (c = w / m * 100 + "%", u = b / v * 100 + "%") : "em" === g ? (x = K(t, "borderLeft", 1, "em"), c = w / x + "em", u = b / x + "em") : (c = w + "px", u = b + "px"), y && (d = parseFloat(c) + f + g, h = parseFloat(u) + f + g)), a = gt(C, T[l], c + " " + u, d + " " + h, !1, "0px", a);
                    return a
                },
                prefix: !0,
                formatter: pt("0px 0px 0px 0px", !1, !0)
            }), wt("backgroundPosition", {
                defaultValue: "0 0",
                parser: function(t, e, i, s, r, a) {
                    var o, l, h, u, c, d, p = "background-position",
                        f = n || Z(t, null),
                        v = this.format((f ? m ? f.getPropertyValue(p + "-x") + " " + f.getPropertyValue(p + "-y") : f.getPropertyValue(p) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                        g = this.format(e);
                    if (-1 !== v.indexOf("%") != (-1 !== g.indexOf("%")) && ((d = G(t, "backgroundImage").replace(k, "")) && "none" !== d)) {
                        for (o = v.split(" "), l = g.split(" "), W.setAttribute("src", d), h = 2; --h > -1;) v = o[h], u = -1 !== v.indexOf("%"), u !== (-1 !== l[h].indexOf("%")) && (c = 0 === h ? t.offsetWidth - W.width : t.offsetHeight - W.height, o[h] = u ? parseFloat(v) / 100 * c + "px" : parseFloat(v) / c * 100 + "%");
                        v = o.join(" ")
                    }
                    return this.parseComplex(t.style, v, g, r, a)
                },
                formatter: rt
            }), wt("backgroundSize", {
                defaultValue: "0 0",
                formatter: rt
            }), wt("perspective", {
                defaultValue: "0px",
                prefix: !0
            }), wt("perspectiveOrigin", {
                defaultValue: "50% 50%",
                prefix: !0
            }), wt("transformStyle", {
                prefix: !0
            }), wt("backfaceVisibility", {
                prefix: !0
            }), wt("userSelect", {
                prefix: !0
            }), wt("margin", {
                parser: ft("marginTop,marginRight,marginBottom,marginLeft")
            }), wt("padding", {
                parser: ft("paddingTop,paddingRight,paddingBottom,paddingLeft")
            }), wt("clip", {
                defaultValue: "rect(0px,0px,0px,0px)",
                parser: function(t, e, i, s, r, a) {
                    var o, l, h;
                    return 9 > m ? (l = t.currentStyle, h = 8 > m ? " " : ",", o = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (o = this.format(G(t, this.p, n, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, r, a)
                }
            }), wt("textShadow", {
                defaultValue: "0px 0px 0px #999",
                color: !0,
                multi: !0
            }), wt("autoRound,strictUnits", {
                parser: function(t, e, i, s, n) {
                    return n
                }
            }), wt("border", {
                defaultValue: "0px solid #000",
                parser: function(t, e, i, s, r, a) {
                    return this.parseComplex(t.style, this.format(G(t, "borderTopWidth", n, !1, "0px") + " " + G(t, "borderTopStyle", n, !1, "solid") + " " + G(t, "borderTopColor", n, !1, "#000")), this.format(e), r, a)
                },
                color: !0,
                formatter: function(t) {
                    var e = t.split(" ");
                    return e[0] + " " + (e[1] || "solid") + " " + (t.match(dt) || ["#000"])[0]
                }
            }), wt("borderWidth", {
                parser: ft("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
            }), wt("float,cssFloat,styleFloat", {
                parser: function(t, e, i, s, n) {
                    var r = t.style,
                        a = "cssFloat" in r ? "cssFloat" : "styleFloat";
                    return new vt(r, a, 0, 0, n, -1, i, !1, 0, r[a], e)
                }
            });
            var qt = function(t) {
                var e, i = this.t,
                    s = i.filter || G(this.data, "filter") || "",
                    n = 0 | this.s + this.c * t;
                100 === n && (-1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") && -1 === s.indexOf("oader(") ? (i.removeAttribute("filter"), e = !G(this.data, "filter")) : (i.filter = s.replace(S, ""), e = !0)), e || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + n + ")"), -1 === s.indexOf("pacity") ? 0 === n && this.xn1 || (i.filter = s + " alpha(opacity=" + n + ")") : i.filter = s.replace(T, "opacity=" + n))
            };
            wt("opacity,alpha,autoAlpha", {
                defaultValue: "1",
                parser: function(t, e, i, s, r, a) {
                    var o = parseFloat(G(t, "opacity", n, !1, "1")),
                        l = t.style,
                        h = "autoAlpha" === i;
                    return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), h && 1 === o && "hidden" === G(t, "visibility", n) && 0 !== e && (o = 0), U ? r = new vt(l, "opacity", o, e - o, r) : ((r = new vt(l, "opacity", 100 * o, 100 * (e - o), r)).xn1 = h ? 1 : 0, l.zoom = 1, r.type = 2, r.b = "alpha(opacity=" + r.s + ")", r.e = "alpha(opacity=" + (r.s + r.c) + ")", r.data = t, r.plugin = a, r.setRatio = qt), h && ((r = new vt(l, "visibility", 0, 0, r, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit")).xs0 = "inherit", s._overwriteProps.push(r.n), s._overwriteProps.push(i)), r
                }
            });
            var Xt = function(t, e) {
                    e && (t.removeProperty ? ("ms" === e.substr(0, 2) && (e = "M" + e.substr(1)), t.removeProperty(e.replace(I, "-$1").toLowerCase())) : t.removeAttribute(e))
                },
                Ut = function(t) {
                    if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                        this.t.setAttribute("class", 0 === t ? this.b : this.e);
                        for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Xt(i, e.p), e = e._next;
                        1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                    } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                };
            wt("className", {
                parser: function(t, e, s, r, a, o, l) {
                    var h, u, c, d, p, f = t.getAttribute("class") || "",
                        m = t.style.cssText;
                    if ((a = r._classNamePT = new vt(t, s, 0, 0, a, 2)).setRatio = Ut, a.pr = -11, i = !0, a.b = f, u = tt(t, n), c = t._gsClassPT) {
                        for (d = {}, p = c.data; p;) d[p.p] = 1, p = p._next;
                        c.setRatio(1)
                    }
                    return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : f.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), r._tween._duration && (t.setAttribute("class", a.e), h = et(t, u, tt(t), l, d), t.setAttribute("class", f), a.data = h.firstMPT, t.style.cssText = m, a = a.xfirst = r.parse(t, h.difs, a, o)), a
                }
            });
            var Bt = function(t) {
                if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                    var e, i, s, n, r = this.t.style,
                        a = l.transform.parse;
                    if ("all" === this.e) r.cssText = "", n = !0;
                    else
                        for (e = this.e.split(" ").join("").split(","), s = e.length; --s > -1;) i = e[s], l[i] && (l[i].parse === a ? n = !0 : i = "transformOrigin" === i ? Dt : l[i].p), Xt(r, i);
                    n && (Xt(r, At), this.t._gsTransform && delete this.t._gsTransform)
                }
            };
            for (wt("clearProps", {
                    parser: function(t, e, s, n, r) {
                        return (r = new vt(t, s, 0, 0, r, 2)).setRatio = Bt, r.e = e, r.pr = -10, r.data = n._tween, i = !0, r
                    }
                }), h = "bezier,throwProps,physicsProps,physics2D".split(","), _t = h.length; _t--;) bt(h[_t]);
            (h = a.prototype)._firstPT = h._lastParsedTransform = h._transform = null, h._onInitTween = function(t, e, o) {
                if (!t.nodeType) return !1;
                this._target = t, this._tween = o, this._vars = e, u = e.autoRound, i = !1, s = e.suffixMap || a.suffixMap, n = Z(t, ""), r = this._overwriteProps;
                var l, h, p, m, v, g, _, y, w, b = t.style;
                if (c && "" === b.zIndex && (("auto" === (l = G(t, "zIndex", n)) || "" === l) && this._addLazySet(b, "zIndex", 0)), "string" == typeof e && (m = b.cssText, l = tt(t, n), b.cssText = m + ";" + e, l = et(t, l, tt(t)).difs, !U && C.test(e) && (l.opacity = parseFloat(RegExp.$1)), e = l, b.cssText = m), this._firstPT = h = this.parse(t, e, null), this._transformType) {
                    for (w = 3 === this._transformType, At ? d && (c = !0, "" === b.zIndex && (("auto" === (_ = G(t, "zIndex", n)) || "" === _) && this._addLazySet(b, "zIndex", 0)), f && this._addLazySet(b, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (w ? "visible" : "hidden"))) : b.zoom = 1, p = h; p && p._next;) p = p._next;
                    y = new vt(t, "transform", 0, 0, null, 2), this._linkCSSP(y, null, p), y.setRatio = w && Et ? jt : At ? Wt : zt, y.data = this._transform || Lt(t, n, !0), r.pop()
                }
                if (i) {
                    for (; h;) {
                        for (g = h._next, p = m; p && p.pr > h.pr;) p = p._next;
                        (h._prev = p ? p._prev : v) ? h._prev._next = h: m = h, (h._next = p) ? p._prev = h : v = h, h = g
                    }
                    this._firstPT = m
                }
                return !0
            }, h.parse = function(t, e, i, r) {
                var a, o, h, c, d, p, f, m, v, g, _ = t.style;
                for (a in e) p = e[a], o = l[a], o ? i = o.parse(t, p, a, this, i, r, e) : (d = G(t, a, n) + "", v = "string" == typeof p, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || v && P.test(p) ? (v || (p = ct(p), p = (p.length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), i = gt(_, a, d, p, !0, "transparent", i, 0, r)) : !v || -1 === p.indexOf(" ") && -1 === p.indexOf(",") ? (h = parseFloat(d), f = h || 0 === h ? d.substr((h + "").length) : "", ("" === d || "auto" === d) && ("width" === a || "height" === a ? (h = nt(t, a, n), f = "px") : "left" === a || "top" === a ? (h = J(t, a, n), f = "px") : (h = "opacity" !== a ? 0 : 1, f = "")), g = v && "=" === p.charAt(1), g ? (c = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), c *= parseFloat(p), m = p.replace(x, "")) : (c = parseFloat(p), m = v ? p.replace(x, "") : ""), "" === m && (m = a in s ? s[a] : f), p = c || 0 === c ? (g ? c + h : c) + m : e[a], f !== m && "" !== m && (c || 0 === c) && h && (h = K(t, a, h, f), "%" === m ? (h /= K(t, a, 100, "%") / 100, !0 !== e.strictUnits && (d = h + "%")) : "em" === m ? h /= K(t, a, 1, "em") : "px" !== m && (c = K(t, a, c, m), m = "px"), g && (c || 0 === c) && (p = c + h + m)), g && (c += h), !h && 0 !== h || !c && 0 !== c ? void 0 !== _[a] && (p || "NaN" != p + "" && null != p) ? (i = new vt(_, a, c || h || 0, 0, i, -1, a, !1, 0, d, p), i.xs0 = "none" !== p || "display" !== a && -1 === a.indexOf("Style") ? p : d) : H("invalid " + a + " tween value: " + e[a]) : (i = new vt(_, a, h, c - h, i, 0, a, !1 !== u && ("px" === m || "zIndex" === a), 0, d, p), i.xs0 = m)) : i = gt(_, a, d, p, !0, null, i, 0, r)), r && i && !i.plugin && (i.plugin = r);
                return i
            }, h.setRatio = function(t) {
                var e, i, s, n = this._firstPT;
                if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                    if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                        for (; n;) {
                            if (e = n.c * t + n.s, n.r ? e = Math.round(e) : 1e-6 > e && e > -1e-6 && (e = 0), n.type)
                                if (1 === n.type)
                                    if (s = n.l, 2 === s) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2;
                                    else if (3 === s) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3;
                            else if (4 === s) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4;
                            else if (5 === s) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4 + n.xn4 + n.xs5;
                            else {
                                for (i = n.xs0 + e + n.xs1, s = 1; n.l > s; s++) i += n["xn" + s] + n["xs" + (s + 1)];
                                n.t[n.p] = i
                            } else -1 === n.type ? n.t[n.p] = n.xs0 : n.setRatio && n.setRatio(t);
                            else n.t[n.p] = e + n.xs0;
                            n = n._next
                        } else
                            for (; n;) 2 !== n.type ? n.t[n.p] = n.b : n.setRatio(t), n = n._next;
                    else
                        for (; n;) 2 !== n.type ? n.t[n.p] = n.e : n.setRatio(t), n = n._next
            }, h._enableTransforms = function(t) {
                this._transform = this._transform || Lt(this._target, n, !0), this._transformType = this._transform.svg && xt || !t && 3 !== this._transformType ? 2 : 3
            };
            var Ht = function() {
                this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
            };
            h._addLazySet = function(t, e, i) {
                var s = this._firstPT = new vt(t, e, 0, 0, this._firstPT, 2);
                s.e = i, s.setRatio = Ht, s.data = this
            }, h._linkCSSP = function(t, e, i, s) {
                return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, s = !0), i ? i._next = t : s || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
            }, h._kill = function(e) {
                var i, s, n, r = e;
                if (e.autoAlpha || e.alpha) {
                    r = {};
                    for (s in e) r[s] = e[s];
                    r.opacity = 1, r.autoAlpha && (r.visibility = 1)
                }
                return e.className && (i = this._classNamePT) && ((n = i.xfirst) && n._prev ? this._linkCSSP(n._prev, i._next, n._prev._prev) : n === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, n._prev), this._classNamePT = null), t.prototype._kill.call(this, r)
            };
            var Vt = function(t, e, i) {
                var s, n, r, a;
                if (t.slice)
                    for (n = t.length; --n > -1;) Vt(t[n], e, i);
                else
                    for (s = t.childNodes, n = s.length; --n > -1;) r = s[n], a = r.type, r.style && (e.push(tt(r)), i && i.push(r)), 1 !== a && 9 !== a && 11 !== a || !r.childNodes.length || Vt(r, e, i)
            };
            return a.cascadeTo = function(t, i, s) {
                var n, r, a, o = e.to(t, i, s),
                    l = [o],
                    h = [],
                    u = [],
                    c = [],
                    d = e._internals.reservedProps;
                for (t = o._targets || o.target, Vt(t, h, c), o.render(i, !0), Vt(t, u), o.render(0, !0), o._enabled(!0), n = c.length; --n > -1;)
                    if (r = et(c[n], h[n], u[n]), r.firstMPT) {
                        r = r.difs;
                        for (a in s) d[a] && (r[a] = s[a]);
                        l.push(e.to(c[n], i, r))
                    } return l
            }, t.activate([a]), a
        }, !0), (t = _gsScope._gsDefine.plugin({
            propName: "roundProps",
            priority: -1,
            API: 2,
            init: function(t, e, i) {
                return this._tween = i, !0
            }
        }).prototype)._onInitAllProps = function() {
            for (var t, e, i, s = this._tween, n = s.vars.roundProps instanceof Array ? s.vars.roundProps : s.vars.roundProps.split(","), r = n.length, a = {}, o = s._propLookup.roundProps; --r > -1;) a[n[r]] = 1;
            for (r = n.length; --r > -1;)
                for (t = n[r], e = s._firstPT; e;) i = e._next, e.pg ? e.t._roundProps(a, !0) : e.n === t && (this._add(e.t, t, e.s, e.c), i && (i._prev = e._prev), e._prev ? e._prev._next = i : s._firstPT === e && (s._firstPT = i), e._next = e._prev = null, s._propLookup[t] = o), e = i;
            return !1
        }, t._add = function(t, e, i, s) {
            this._addTween(t, e, i, i + s, e, !0), this._overwriteProps.push(e)
        }, _gsScope._gsDefine.plugin({
            propName: "attr",
            API: 2,
            version: "0.3.3",
            init: function(t, e) {
                var i, s, n;
                if ("function" != typeof t.setAttribute) return !1;
                this._target = t, this._proxy = {}, this._start = {}, this._end = {};
                for (i in e) this._start[i] = this._proxy[i] = s = t.getAttribute(i), n = this._addTween(this._proxy, i, parseFloat(s), e[i], i), this._end[i] = n ? n.s + n.c : e[i], this._overwriteProps.push(i);
                return !0
            },
            set: function(t) {
                this._super.setRatio.call(this, t);
                for (var e, i = this._overwriteProps, s = i.length, n = 1 === t ? this._end : t ? this._proxy : this._start; --s > -1;) e = i[s], this._target.setAttribute(e, n[e] + "")
            }
        }), _gsScope._gsDefine.plugin({
            propName: "directionalRotation",
            version: "0.2.1",
            API: 2,
            init: function(t, e) {
                "object" != typeof e && (e = {
                    rotation: e
                }), this.finals = {};
                var i, s, n, r, a, o, l = !0 === e.useRadians ? 2 * Math.PI : 360;
                for (i in e) "useRadians" !== i && (o = (e[i] + "").split("_"), s = o[0], n = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), r = this.finals[i] = "string" == typeof s && "=" === s.charAt(1) ? n + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0, a = r - n, o.length && (s = o.join("_"), -1 !== s.indexOf("short") && (a %= l, a !== a % (l / 2) && (a = 0 > a ? a + l : a - l)), -1 !== s.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * l) % l - (0 | a / l) * l : -1 !== s.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * l) % l - (0 | a / l) * l)), (a > 1e-6 || -1e-6 > a) && (this._addTween(t, i, n, n + a, i), this._overwriteProps.push(i)));
                return !0
            },
            set: function(t) {
                var e;
                if (1 !== t) this._super.setRatio.call(this, t);
                else
                    for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
            }
        })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
            var e, i, s, n = _gsScope.GreenSockGlobals || _gsScope,
                r = n.com.greensock,
                a = 2 * Math.PI,
                o = Math.PI / 2,
                l = r._class,
                h = function(e, i) {
                    var s = l("easing." + e, function() {}, !0),
                        n = s.prototype = new t;
                    return n.constructor = s, n.getRatio = i, s
                },
                u = t.register || function() {},
                c = function(t, e, i, s) {
                    var n = l("easing." + t, {
                        easeOut: new e,
                        easeIn: new i,
                        easeInOut: new s
                    }, !0);
                    return u(n, t), n
                },
                d = function(t, e, i) {
                    this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                },
                p = function(e, i) {
                    var s = l("easing." + e, function(t) {
                            this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                        }, !0),
                        n = s.prototype = new t;
                    return n.constructor = s, n.getRatio = i, n.config = function(t) {
                        return new s(t)
                    }, s
                },
                f = c("Back", p("BackOut", function(t) {
                    return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                }), p("BackIn", function(t) {
                    return t * t * ((this._p1 + 1) * t - this._p1)
                }), p("BackInOut", function(t) {
                    return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                })),
                m = l("easing.SlowMo", function(t, e, i) {
                    e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i
                }, !0),
                v = m.prototype = new t;
            return v.constructor = m, v.getRatio = function(t) {
                var e = t + (.5 - t) * this._p;
                return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
            }, m.ease = new m(.7, .7), v.config = m.config = function(t, e, i) {
                return new m(t, e, i)
            }, (v = (e = l("easing.SteppedEase", function(t) {
                t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
            }, !0)).prototype = new t).constructor = e, v.getRatio = function(t) {
                return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
            }, v.config = e.config = function(t) {
                return new e(t)
            }, (v = (i = l("easing.RoughEase", function(e) {
                for (var i, s, n, r, a, o, l = (e = e || {}).taper || "none", h = [], u = 0, c = 0 | (e.points || 20), p = c, f = !1 !== e.randomize, m = !0 === e.clamp, v = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --p > -1;) i = f ? Math.random() : 1 / c * p, s = v ? v.getRatio(i) : i, "none" === l ? n = g : "out" === l ? (r = 1 - i, n = r * r * g) : "in" === l ? n = i * i * g : .5 > i ? (r = 2 * i, n = .5 * r * r * g) : (r = 2 * (1 - i), n = .5 * r * r * g), f ? s += Math.random() * n - .5 * n : p % 2 ? s += .5 * n : s -= .5 * n, m && (s > 1 ? s = 1 : 0 > s && (s = 0)), h[u++] = {
                    x: i,
                    y: s
                };
                for (h.sort(function(t, e) {
                        return t.x - e.x
                    }), o = new d(1, 1, null), p = c; --p > -1;) a = h[p], o = new d(a.x, a.y, o);
                this._prev = new d(0, 0, 0 !== o.t ? o : o.next)
            }, !0)).prototype = new t).constructor = i, v.getRatio = function(t) {
                var e = this._prev;
                if (t > e.t) {
                    for (; e.next && t >= e.t;) e = e.next;
                    e = e.prev
                } else
                    for (; e.prev && e.t >= t;) e = e.prev;
                return this._prev = e, e.v + (t - e.t) / e.gap * e.c
            }, v.config = function(t) {
                return new i(t)
            }, i.ease = new i, c("Bounce", h("BounceOut", function(t) {
                return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            }), h("BounceIn", function(t) {
                return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
            }), h("BounceInOut", function(t) {
                var e = .5 > t;
                return t = 1 / 2.75 > (t = e ? 1 - 2 * t : 2 * t - 1) ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
            })), c("Circ", h("CircOut", function(t) {
                return Math.sqrt(1 - (t -= 1) * t)
            }), h("CircIn", function(t) {
                return -(Math.sqrt(1 - t * t) - 1)
            }), h("CircInOut", function(t) {
                return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            })), c("Elastic", (s = function(e, i, s) {
                var n = l("easing." + e, function(t, e) {
                        this._p1 = t || 1, this._p2 = e || s, this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0)
                    }, !0),
                    r = n.prototype = new t;
                return r.constructor = n, r.getRatio = i, r.config = function(t, e) {
                    return new n(t, e)
                }, n
            })("ElasticOut", function(t) {
                return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * a / this._p2) + 1
            }, .3), s("ElasticIn", function(t) {
                return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2)
            }, .3), s("ElasticInOut", function(t) {
                return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) + 1
            }, .45)), c("Expo", h("ExpoOut", function(t) {
                return 1 - Math.pow(2, -10 * t)
            }), h("ExpoIn", function(t) {
                return Math.pow(2, 10 * (t - 1)) - .001
            }), h("ExpoInOut", function(t) {
                return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
            })), c("Sine", h("SineOut", function(t) {
                return Math.sin(t * o)
            }), h("SineIn", function(t) {
                return 1 - Math.cos(t * o)
            }), h("SineInOut", function(t) {
                return -.5 * (Math.cos(Math.PI * t) - 1)
            })), l("easing.EaseLookup", {
                find: function(e) {
                    return t.map[e]
                }
            }, !0), u(n.SlowMo, "SlowMo", "ease,"), u(i, "RoughEase", "ease,"), u(e, "SteppedEase", "ease,"), f
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t, e) {
        "use strict";
        var i, s, n = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (!n.TweenLite) {
            var r, a, o, l, h, u = function(t) {
                    var e, i = t.split("."),
                        s = n;
                    for (e = 0; i.length > e; e++) s[i[e]] = s = s[i[e]] || {};
                    return s
                },
                c = u("com.greensock"),
                d = 1e-10,
                p = function(t) {
                    var e, i = [],
                        s = t.length;
                    for (e = 0; e !== s; i.push(t[e++]));
                    return i
                },
                f = function() {},
                m = (i = Object.prototype.toString, s = i.call([]), function(t) {
                    return null != t && (t instanceof Array || "object" == typeof t && !!t.push && i.call(t) === s)
                }),
                v = {},
                g = function(e, i, s, r) {
                    this.sc = v[e] ? v[e].sc : [], v[e] = this, this.gsClass = null, this.func = s;
                    var a = [];
                    this.check = function(o) {
                        for (var l, h, c, d, p = i.length, f = p; --p > -1;)(l = v[i[p]] || new g(i[p], [])).gsClass ? (a[p] = l.gsClass, f--) : o && l.sc.push(this);
                        if (0 === f && s)
                            for (h = ("com.greensock." + e).split("."), c = h.pop(), d = u(h.join("."))[c] = this.gsClass = s.apply(s, a), r && (n[c] = d, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + e.split(".").pop(), [], function() {
                                    return d
                                }) : "TweenMax" === e && "undefined" != typeof module && module.exports && (module.exports = d)), p = 0; this.sc.length > p; p++) this.sc[p].check()
                    }, this.check(!0)
                },
                _ = t._gsDefine = function(t, e, i, s) {
                    return new g(t, e, i, s)
                },
                y = c._class = function(t, e, i) {
                    return e = e || function() {}, _(t, [], function() {
                        return e
                    }, i), e
                };
            _.globals = n;
            var w = [0, 0, 1, 1],
                b = [],
                x = y("easing.Ease", function(t, e, i, s) {
                    this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? w.concat(e) : w
                }, !0),
                T = x.map = {},
                C = x.register = function(t, e, i, s) {
                    for (var n, r, a, o, l = e.split(","), h = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1;)
                        for (r = l[h], n = s ? y("easing." + r, null, !0) : c.easing[r] || {}, a = u.length; --a > -1;) o = u[a], T[r + "." + o] = T[o + r] = n[o] = t.getRatio ? t : t[o] || new t
                };
            for ((o = x.prototype)._calcEnd = !1, o.getRatio = function(t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                    return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2
                }, a = (r = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --a > -1;) o = r[a] + ",Power" + a, C(new x(null, null, 1, a), o, "easeOut", !0), C(new x(null, null, 2, a), o, "easeIn" + (0 === a ? ",easeNone" : "")), C(new x(null, null, 3, a), o, "easeInOut");
            T.linear = c.easing.Linear.easeIn, T.swing = c.easing.Quad.easeInOut;
            var S = y("events.EventDispatcher", function(t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            (o = S.prototype).addEventListener = function(t, e, i, s, n) {
                n = n || 0;
                var r, a, o = this._listeners[t],
                    u = 0;
                for (null == o && (this._listeners[t] = o = []), a = o.length; --a > -1;) r = o[a], r.c === e && r.s === i ? o.splice(a, 1) : 0 === u && n > r.pr && (u = a + 1);
                o.splice(u, 0, {
                    c: e,
                    s: i,
                    up: s,
                    pr: n
                }), this !== l || h || l.wake()
            }, o.removeEventListener = function(t, e) {
                var i, s = this._listeners[t];
                if (s)
                    for (i = s.length; --i > -1;)
                        if (s[i].c === e) return void s.splice(i, 1)
            }, o.dispatchEvent = function(t) {
                var e, i, s, n = this._listeners[t];
                if (n)
                    for (e = n.length, i = this._eventTarget; --e > -1;) s = n[e], s && (s.up ? s.c.call(s.s || i, {
                        type: t,
                        target: i
                    }) : s.c.call(s.s || i))
            };
            var P = t.requestAnimationFrame,
                I = t.cancelAnimationFrame,
                A = Date.now || function() {
                    return (new Date).getTime()
                },
                k = A();
            for (a = (r = ["ms", "moz", "webkit", "o"]).length; --a > -1 && !P;) P = t[r[a] + "RequestAnimationFrame"], I = t[r[a] + "CancelAnimationFrame"] || t[r[a] + "CancelRequestAnimationFrame"];
            y("Ticker", function(t, e) {
                var i, s, n, r, a, o = this,
                    u = A(),
                    c = !1 !== e && P,
                    d = 500,
                    p = 33,
                    m = function(t) {
                        var e, l, h = A() - k;
                        h > d && (u += h - p), k += h, o.time = (k - u) / 1e3, e = o.time - a, (!i || e > 0 || !0 === t) && (o.frame++, a += e + (e >= r ? .004 : r - e), l = !0), !0 !== t && (n = s(m)), l && o.dispatchEvent("tick")
                    };
                S.call(o), o.time = o.frame = 0, o.tick = function() {
                    m(!0)
                }, o.lagSmoothing = function(t, e) {
                    d = t || 1e10, p = Math.min(e, d, 0)
                }, o.sleep = function() {
                    null != n && (c && I ? I(n) : clearTimeout(n), s = f, n = null, o === l && (h = !1))
                }, o.wake = function() {
                    null !== n ? o.sleep() : o.frame > 10 && (k = A() - d + 5), s = 0 === i ? f : c && P ? P : function(t) {
                        return setTimeout(t, 0 | 1e3 * (a - o.time) + 1)
                    }, o === l && (h = !0), m(2)
                }, o.fps = function(t) {
                    return arguments.length ? (r = 1 / ((i = t) || 60), a = this.time + r, void o.wake()) : i
                }, o.useRAF = function(t) {
                    return arguments.length ? (o.sleep(), c = t, void o.fps(i)) : c
                }, o.fps(t), setTimeout(function() {
                    c && (!n || 5 > o.frame) && o.useRAF(!1)
                }, 1500)
            }), (o = c.Ticker.prototype = new c.events.EventDispatcher).constructor = c.Ticker;
            var D = y("core.Animation", function(t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, U) {
                    h || l.wake();
                    var i = this.vars.useFrames ? X : U;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            l = D.ticker = new c.Ticker, (o = D.prototype)._dirty = o._gc = o._initted = o._paused = !1, o._totalTime = o._time = 0, o._rawPrevTime = -1, o._next = o._last = o._onUpdate = o._timeline = o.timeline = null, o._paused = !1;
            var E = function() {
                h && A() - k > 2e3 && l.wake(), setTimeout(E, 2e3)
            };
            E(), o.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, o.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, o.resume = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!1)
            }, o.seek = function(t, e) {
                return this.totalTime(Number(t), !1 !== e)
            }, o.restart = function(t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
            }, o.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, o.render = function() {}, o.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, o.isActive = function() {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
            }, o._enabled = function(t, e) {
                return h || l.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, o._kill = function() {
                return this._enabled(!1, !1)
            }, o.kill = function(t, e) {
                return this._kill(t, e), this
            }, o._uncache = function(t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                return this
            }, o._swapSelfInParams = function(t) {
                for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                return i
            }, o.eventCallback = function(t, e, i, s) {
                if ("on" === (t || "").substr(0, 2)) {
                    var n = this.vars;
                    if (1 === arguments.length) return n[t];
                    null == e ? delete n[t] : (n[t] = e, n[t + "Params"] = m(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, n[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, o.delay = function(t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, o.duration = function(t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, o.totalDuration = function(t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, o.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, o.totalTime = function(t, e, i) {
                if (h || l.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var s = this._totalDuration,
                            n = this._timeline;
                        if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : n._time) - (this._reversed ? s - t : t) / this._timeScale, n._dirty || this._uncache(!1), n._timeline)
                            for (; n._timeline;) n._timeline._time !== (n._startTime + n._totalTime) / n._timeScale && n.totalTime(n._totalTime, !0), n = n._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), F.length && B())
                }
                return this
            }, o.progress = o.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
            }, o.startTime = function(t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, o.endTime = function(t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
            }, o.timeScale = function(t) {
                if (!arguments.length) return this._timeScale;
                if (t = t || d, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime,
                        i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t, this._uncache(!1)
            }, o.reversed = function(t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, o.paused = function(t) {
                if (!arguments.length) return this._paused;
                if (t != this._paused && this._timeline) {
                    h || t || l.wake();
                    var e = this._timeline,
                        i = e.rawTime(),
                        s = i - this._pauseTime;
                    !t && e.smoothChildTiming && (this._startTime += s, this._uncache(!1)), this._pauseTime = t ? i : null, this._paused = t, this._active = this.isActive(), !t && 0 !== s && this._initted && this.duration() && this.render(e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)
                }
                return this._gc && !t && this._enabled(!0, !1), this
            };
            var O = y("core.SimpleTimeline", function(t) {
                D.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            (o = O.prototype = new D).constructor = O, o.kill()._gc = !1, o._first = o._last = o._recent = null, o._sortChildren = !1, o.add = o.insert = function(t, e) {
                var i, s;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                    for (s = t._startTime; i && i._startTime > s;) i = i._prev;
                return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this
            }, o._remove = function(t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, o.render = function(t, e, i) {
                var s, n = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; n;) s = n._next, (n._active || t >= n._startTime && !n._paused) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = s
            }, o.rawTime = function() {
                return h || l.wake(), this._totalTime
            };
            var R = y("TweenLite", function(e, i, s) {
                    if (D.call(this, i, s), this.render = R.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : R.selector(e) || e;
                    var n, r, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                        l = this.vars.overwrite;
                    if (this._overwrite = l = null == l ? q[R.defaultOverwrite] : "number" == typeof l ? l >> 0 : q[l], (o || e instanceof Array || e.push && m(e)) && "number" != typeof e[0])
                        for (this._targets = a = p(e), this._propLookup = [], this._siblings = [], n = 0; a.length > n; n++) r = a[n], r ? "string" != typeof r ? r.length && r !== t && r[0] && (r[0] === t || r[0].nodeType && r[0].style && !r.nodeType) ? (a.splice(n--, 1), this._targets = a = a.concat(p(r))) : (this._siblings[n] = H(r, this, !1), 1 === l && this._siblings[n].length > 1 && Y(r, this, null, 1, this._siblings[n])) : (r = a[n--] = R.selector(r), "string" == typeof r && a.splice(n + 1, 1)) : a.splice(n--, 1);
                    else this._propLookup = {}, this._siblings = H(e, this, !1), 1 === l && this._siblings.length > 1 && Y(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -d, this.render(-this._delay))
                }, !0),
                $ = function(e) {
                    return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                };
            (o = R.prototype = new D).constructor = R, o.kill()._gc = !1, o.ratio = 0, o._firstPT = o._targets = o._overwrittenProps = o._startAt = null, o._notifyPluginsOfEnabled = o._lazy = !1, R.version = "1.15.1", R.defaultEase = o._ease = new x(null, null, 1, 1), R.defaultOverwrite = "auto", R.ticker = l, R.autoSleep = !0, R.lagSmoothing = function(t, e) {
                l.lagSmoothing(t, e)
            }, R.selector = t.$ || t.jQuery || function(e) {
                var i = t.$ || t.jQuery;
                return i ? (R.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            };
            var F = [],
                N = {},
                M = R._internals = {
                    isArray: m,
                    isSelector: $,
                    lazyTweens: F
                },
                L = R._plugins = {},
                z = M.tweenLookup = {},
                j = 0,
                W = M.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1
                },
                q = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    true: 1,
                    false: 0
                },
                X = D._rootFramesTimeline = new O,
                U = D._rootTimeline = new O,
                B = M.lazyRender = function() {
                    var t, e = F.length;
                    for (N = {}; --e > -1;) t = F[e], t && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                    F.length = 0
                };
            U._startTime = l.time, X._startTime = l.frame, U._active = X._active = !0, setTimeout(B, 1), D._updateRoot = R.render = function() {
                var t, e, i;
                if (F.length && B(), U.render((l.time - U._startTime) * U._timeScale, !1, !1), X.render((l.frame - X._startTime) * X._timeScale, !1, !1), F.length && B(), !(l.frame % 120)) {
                    for (i in z) {
                        for (t = (e = z[i].tweens).length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete z[i]
                    }
                    if ((!(i = U._first) || i._paused) && R.autoSleep && !X._first && 1 === l._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || l.sleep()
                    }
                }
            }, l.addEventListener("tick", D._updateRoot);
            var H = function(t, e, i) {
                    var s, n, r = t._gsTweenID;
                    if (z[r || (t._gsTweenID = r = "t" + j++)] || (z[r] = {
                            target: t,
                            tweens: []
                        }), e && ((s = z[r].tweens)[n = s.length] = e, i))
                        for (; --n > -1;) s[n] === e && s.splice(n, 1);
                    return z[r].tweens
                },
                V = function(t, e, i, s) {
                    var n, r, a = t.vars.onOverwrite;
                    return a && (n = a(t, e, i, s)), (a = R.onOverwrite) && (r = a(t, e, i, s)), !1 !== n && !1 !== r
                },
                Y = function(t, e, i, s, n) {
                    var r, a, o, l;
                    if (1 === s || s >= 4) {
                        for (l = n.length, r = 0; l > r; r++)
                            if ((o = n[r]) !== e) o._gc || V(o, e) && o._enabled(!1, !1) && (a = !0);
                            else if (5 === s) break;
                        return a
                    }
                    var h, u = e._startTime + d,
                        c = [],
                        p = 0,
                        f = 0 === e._duration;
                    for (r = n.length; --r > -1;)(o = n[r]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (h = h || Q(e, 0, f), 0 === Q(o, h, f) && (c[p++] = o)) : u >= o._startTime && o._startTime + o.totalDuration() / o._timeScale > u && ((f || !o._initted) && 2e-10 >= u - o._startTime || (c[p++] = o)));
                    for (r = p; --r > -1;)
                        if (o = c[r], 2 === s && o._kill(i, t, e) && (a = !0), 2 !== s || !o._firstPT && o._initted) {
                            if (2 !== s && !V(o, e)) continue;
                            o._enabled(!1, !1) && (a = !0)
                        } return a
                },
                Q = function(t, e, i) {
                    for (var s = t._timeline, n = s._timeScale, r = t._startTime; s._timeline;) {
                        if (r += s._startTime, n *= s._timeScale, s._paused) return -100;
                        s = s._timeline
                    }
                    return (r /= n) > e ? r - e : i && r === e || !t._initted && 2 * d > r - e ? d : (r += t.totalDuration() / t._timeScale / n) > e + d ? 0 : r - e - d
                };
            o._init = function() {
                var t, e, i, s, n, r = this.vars,
                    a = this._overwrittenProps,
                    o = this._duration,
                    l = !!r.immediateRender,
                    h = r.ease;
                if (r.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), n = {};
                    for (s in r.startAt) n[s] = r.startAt[s];
                    if (n.overwrite = !1, n.immediateRender = !0, n.lazy = l && !1 !== r.lazy, n.startAt = n.delay = null, this._startAt = R.to(this.target, 0, n), l)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== o) return
                } else if (r.runBackwards && 0 !== o)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        0 !== this._time && (l = !1), i = {};
                        for (s in r) W[s] && "autoCSS" !== s || (i[s] = r[s]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && !1 !== r.lazy, i.immediateRender = l, this._startAt = R.to(this.target, 0, i), l) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    } if (this._ease = h = h ? h instanceof x ? h : "function" == typeof h ? new x(h, r.easeParams) : T[h] || R.defaultEase : R.defaultEase, r.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, r.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, a);
                if (e && R._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), r.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = r.onUpdate, this._initted = !0
            }, o._initProps = function(e, i, s, n) {
                var r, a, o, l, h, u;
                if (null == e) return !1;
                N[e._gsTweenID] && B(), this.vars.css || e.style && e !== t && e.nodeType && L.css && !1 !== this.vars.autoCSS && function(t, e) {
                    var i, s = {};
                    for (i in t) W[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!L[i] || L[i] && L[i]._autoCSS) || (s[i] = t[i], delete t[i]);
                    t.css = s
                }(this.vars, e);
                for (r in this.vars) {
                    if (u = this.vars[r], W[r]) u && (u instanceof Array || u.push && m(u)) && -1 !== u.join("").indexOf("{self}") && (this.vars[r] = u = this._swapSelfInParams(u, this));
                    else if (L[r] && (l = new L[r])._onInitTween(e, this.vars[r], this)) {
                        for (this._firstPT = h = {
                                _next: this._firstPT,
                                t: l,
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: !0,
                                n: r,
                                pg: !0,
                                pr: l._priority
                            }, a = l._overwriteProps.length; --a > -1;) i[l._overwriteProps[a]] = this._firstPT;
                        (l._priority || l._onInitAllProps) && (o = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
                    } else this._firstPT = i[r] = h = {
                        _next: this._firstPT,
                        t: e,
                        p: r,
                        f: "function" == typeof e[r],
                        n: r,
                        pg: !1,
                        pr: 0
                    }, h.s = h.f ? e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : parseFloat(e[r]), h.c = "string" == typeof u && "=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * Number(u.substr(2)) : Number(u) - h.s || 0;
                    h && h._next && (h._next._prev = h)
                }
                return n && this._kill(n, e) ? this._initProps(e, i, s, n) : this._overwrite > 1 && this._firstPT && s.length > 1 && Y(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, n)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (N[e._gsTweenID] = !0), o)
            }, o.render = function(t, e, i) {
                var s, n, r, a, o = this._time,
                    l = this._duration,
                    h = this._rawPrevTime;
                if (t >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, n = "onComplete"), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > h || h === d && "isPause" !== this.data) && h !== t && (i = !0, h > d && (n = "onReverseComplete")), this._rawPrevTime = a = !e || t || h === t ? t : d);
                else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === l && h > 0 && h !== d) && (n = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (h !== d || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || h === t ? t : d)), this._initted || (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var u = t / l,
                        c = this._easeType,
                        p = this._easePower;
                    (1 === c || 3 === c && u >= .5) && (u = 1 - u), 3 === c && (u *= 2), 1 === p ? u *= u : 2 === p ? u *= u * u : 3 === p ? u *= u * u * u : 4 === p && (u *= u * u * u * u), this.ratio = 1 === c ? 1 - u : 2 === c ? u : .5 > t / l ? u / 2 : 1 - u / 2
                } else this.ratio = this._ease.getRatio(t / l);
                if (this._time !== o || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = h, F.push(this), void(this._lazy = [t, e]);
                        this._time && !s ? this.ratio = this._ease.getRatio(this._time / l) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : n || (n = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || b))), r = this._firstPT; r;) r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s, r = r._next;
                    this._onUpdate && (0 > t && this._startAt && -1e-4 !== t && this._startAt.render(t, e, i), e || (this._time !== o || s) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || b)), n && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[n] && this.vars[n].apply(this.vars[n + "Scope"] || this, this.vars[n + "Params"] || b), 0 === l && this._rawPrevTime === d && a !== d && (this._rawPrevTime = 0))
                }
            }, o._kill = function(t, e, i) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                var s, n, r, a, o, l, h, u, c;
                if (e = "string" != typeof e ? e || this._targets || this.target : R.selector(e) || e, (m(e) || $(e)) && "number" != typeof e[0])
                    for (s = e.length; --s > -1;) this._kill(t, e[s]) && (l = !0);
                else {
                    if (this._targets) {
                        for (s = this._targets.length; --s > -1;)
                            if (e === this._targets[s]) {
                                o = this._propLookup[s] || {}, this._overwrittenProps = this._overwrittenProps || [], n = this._overwrittenProps[s] = t ? this._overwrittenProps[s] || {} : "all";
                                break
                            }
                    } else {
                        if (e !== this.target) return !1;
                        o = this._propLookup, n = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (o) {
                        if (h = t || o, u = t !== n && "all" !== n && t !== o && ("object" != typeof t || !t._tempKill), i && (R.onOverwrite || this.vars.onOverwrite)) {
                            for (r in h) o[r] && (c || (c = []), c.push(r));
                            if (!V(this, i, e, c)) return !1
                        }
                        for (r in h)(a = o[r]) && (a.pg && a.t._kill(h) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[r]), u && (n[r] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return l
            }, o.invalidate = function() {
                return this._notifyPluginsOfEnabled && R._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], D.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -d, this.render(-this._delay)), this
            }, o._enabled = function(t, e) {
                if (h || l.wake(), t && this._gc) {
                    var i, s = this._targets;
                    if (s)
                        for (i = s.length; --i > -1;) this._siblings[i] = H(s[i], this, !0);
                    else this._siblings = H(this.target, this, !0)
                }
                return D.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && R._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
            }, R.to = function(t, e, i) {
                return new R(t, e, i)
            }, R.from = function(t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new R(t, e, i)
            }, R.fromTo = function(t, e, i, s) {
                return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new R(t, e, s)
            }, R.delayedCall = function(t, e, i, s, n) {
                return new R(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    onCompleteScope: s,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    onReverseCompleteScope: s,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: n,
                    overwrite: 0
                })
            }, R.set = function(t, e) {
                return new R(t, 0, e)
            }, R.getTweensOf = function(t, e) {
                if (null == t) return [];
                var i, s, n, r;
                if (t = "string" != typeof t ? t : R.selector(t) || t, (m(t) || $(t)) && "number" != typeof t[0]) {
                    for (i = t.length, s = []; --i > -1;) s = s.concat(R.getTweensOf(t[i], e));
                    for (i = s.length; --i > -1;)
                        for (r = s[i], n = i; --n > -1;) r === s[n] && s.splice(i, 1)
                } else
                    for (s = H(t).concat(), i = s.length; --i > -1;)(s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
                return s
            }, R.killTweensOf = R.killDelayedCallsTo = function(t, e, i) {
                "object" == typeof e && (i = e, e = !1);
                for (var s = R.getTweensOf(t, e), n = s.length; --n > -1;) s[n]._kill(i, t)
            };
            var Z = y("plugins.TweenPlugin", function(t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = Z.prototype
            }, !0);
            if (o = Z.prototype, Z.version = "1.10.1", Z.API = 2, o._firstPT = null, o._addTween = function(t, e, i, s, n, r) {
                    var a, o;
                    return null != s && (a = "number" == typeof s || "=" !== s.charAt(1) ? Number(s) - i : parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2))) ? (this._firstPT = o = {
                        _next: this._firstPT,
                        t: t,
                        p: e,
                        s: i,
                        c: a,
                        f: "function" == typeof t[e],
                        n: n || e,
                        r: r
                    }, o._next && (o._next._prev = o), o) : void 0
                }, o.setRatio = function(t) {
                    for (var e, i = this._firstPT; i;) e = i.c * t + i.s, i.r ? e = Math.round(e) : 1e-6 > e && e > -1e-6 && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
                }, o._kill = function(t) {
                    var e, i = this._overwriteProps,
                        s = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                    for (; s;) null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
                    return !1
                }, o._roundProps = function(t, e) {
                    for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
                }, R._onPluginEvent = function(t, e) {
                    var i, s, n, r, a, o = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; o;) {
                            for (a = o._next, s = n; s && s.pr > o.pr;) s = s._next;
                            (o._prev = s ? s._prev : r) ? o._prev._next = o: n = o, (o._next = s) ? s._prev = o : r = o, o = a
                        }
                        o = e._firstPT = n
                    }
                    for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
                    return i
                }, Z.activate = function(t) {
                    for (var e = t.length; --e > -1;) t[e].API === Z.API && (L[(new t[e])._propName] = t[e]);
                    return !0
                }, _.plugin = function(t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e, i = t.propName,
                        s = t.priority || 0,
                        n = t.overwriteProps,
                        r = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        a = y("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                            Z.call(this, i, s), this._overwriteProps = n || []
                        }, !0 === t.global),
                        o = a.prototype = new Z(i);
                    o.constructor = a, a.API = t.API;
                    for (e in r) "function" == typeof t[e] && (o[r[e]] = t[e]);
                    return a.version = t.version, Z.activate([a]), a
                }, r = t._gsQueue) {
                for (a = 0; r.length > a; a++) r[a]();
                for (o in v) v[o].func || t.console.log("GSAP encountered missing dependency: com.greensock." + o)
            }
            h = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window);