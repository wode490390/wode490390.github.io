webpackJsonp([0], [function(t, e, n) {
    function i() {
        var t = a("#nav_box"),
            e = t.find("li a"),
            n = t.find(".ic_line");
        t.on("mouseleave", function() {
            n.hide()
        }), e.on("mouseenter", function() {
            for(var t = e.index(a(this)), i = e.eq(t).width(), o = 0, s = 0; s < t; s++) o += e.eq(s).outerWidth() + 20;
            o += 16, n.show(), n.css({
                left: o,
                width: i
            })
        });
        var i, o = a("#wrap"),
            s = function() {
                var t = document.createElement("div").style;
                for(var e in t)
                    if(e.toLowerCase().indexOf("animation") >= 0) return !0;
                return !1
            }(),
            r = a("#page_wp").find(".page"),
            h = a("#star_wp"),
            c = a("#btn_control").find("a"),
            d = [5e3, 5e3, 5e3, 1e4];
        if(s) o.addClass("css3");
        else {
            for(var p = r.find(".img_box"), u = 1; u < 5; u++) p.eq(u - 1).find("img")[0].src = "img/0" + u + ".jpg";
            window.onresize = function() {
                var t = a(window).width(),
                    e = a(window).height();
                t / e < 1920 / 1080 ? p.height(e).css({
                    width: "auto",
                    margin: -.5 * e + "px 0 0 " + -960 / 1080 * e + "px"
                }) : p.width(t).css({
                    height: "auto",
                    margin: -.5 * t * 1080 / 1920 + "px 0 0 " + -.5 * t + "px"
                })
            }
        }
        var l = {
                one: function() {
                    r.removeClass("show").eq(0).addClass("show"), s ? (h.removeClass("show"), cvsEffect.one()) : r.stop().eq(0).css({
                        opacity: 0
                    }).animate({
                        opacity: 1
                    }, 500)
                },
                two: function() {
                    s ? (r.eq(0).hasClass("show") && r.eq(0).addClass("hide"), h.removeClass("show"), cvsEffect.two(), setTimeout(function() {
                        r.eq(0).removeClass("hide")
                    }, 400)) : r.stop().eq(1).css({
                        opacity: 0
                    }).animate({
                        opacity: 1
                    }, 500), r.removeClass("show").eq(1).addClass("show")
                },
                three: function() {
                    r.removeClass("show").eq(2).addClass("show"), s ? (cvsEffect.three(), h.addClass("show")) : r.stop().eq(2).css({
                        opacity: 0
                    }).animate({
                        opacity: 1
                    }, 500)
                },
                four: function() {
                    r.removeClass("show").eq(3).addClass("show"), s ? (cvsEffect.four(), h.addClass("show")) : r.stop().eq(3).css({
                        opacity: 0
                    }).animate({
                        opacity: 1
                    }, 500)
                }
            },
            f = {
                next: function() {
                    var t = r.index(a("#page_wp").find(".page.show"));
                    t = (t + 1) % r.length, f.changeByIdx(t)
                },
                prev: function() {
                    var t = r.index(a("#page_wp").find(".page.show"));
                    t = (t + r.length - 1) % r.length, f.changeByIdx(t)
                },
                changeByIdx: function(t) {
                    switch(clearTimeout(i), t) {
                        case 0:
                            l.one();
                            break;
                        case 1:
                            l.two();
                            break;
                        case 2:
                            l.three();
                            break;
                        case 3:
                            l.four()
                    }
                    c.removeClass("cur").eq(t).addClass("cur"), f.changeInterval()
                },
                changeInterval: function() {
                    var t = r.index(a("#page_wp").find(".page.show"));
                    i = setTimeout(f.next, d[t])
                }
            };
        c.click(function() {
            var t = c.index(a(this));
            f.changeByIdx(t)
        }), a(document).on("mousewheel DOMMouseScroll", function(t) {
            var e = t.originalEvent.wheelDelta || t.originalEvent.detail * -1;
            e > 0 ? f.prev() : f.next()
        }), s && cvsEffect.start(), f.changeByIdx(0)
    }

    var a = (n(1), n(4));
    n(5),
        function() {
            i()
        }()
}, function(t, e, n) {
    n(2)
}, function() {

}, function() {

}, , function(t, e) {
    ! function() {
        function t(e, n) {
            this.point = {
                x: 0,
                y: 0
            }, this.point.x = e.x, this.point.y = e.y, this.len = n || 1, this.lWidth = 1, this.speed = f.iSpeed, this.opc = .5, this.isEnd = !1, "function" != typeof this.nextFps && (t.prototype.nextFps = function() {
                var t = this.point.y / Math.abs(this.point.y) * this.speed;
                this.point.x = this.point.x / this.point.y * (this.point.y + t), this.point.y += t, this.speed += f.dSpeed, this.len += .7, Math.abs(this.point.y) > h / 2 * .7 ? this.lWidth = 5 : Math.abs(this.point.y) > h / 2 * .5 ? this.lWidth = 4 : Math.abs(this.point.y) > h / 2 * .3 ? this.lWidth = 3 : Math.abs(this.point.y) > h / 2 * .2 && (this.lWidth = 2), this.opc = this.opc < .1 ? .1 : this.opc - .02, (Math.abs(this.point.x) > r / 2 || Math.abs(this.point.y) > h / 2) && (this.isEnd = !0)
            }), "function" != typeof this.draw && (t.prototype.draw = function(t) {
                t.save(), t.globalAlpha = this.opc, t.translate(r / 2, h / 2), t.lineWidth = this.lWidth, t.strokeStyle = "#fff", t.lineCap = "round";
                var e = f.newPoint(this.point, this.len);
                t.beginPath(), t.moveTo(this.point.x, this.point.y), t.lineTo(e.x, e.y), t.stroke(), t.restore()
            })
        }

        function e(t) {
            this.point = t || {
                x: 0,
                y: 0
            }, this.rad = Math.random(), Math.random() > .9 && (this.rad = 2), this.speed = 1 * Math.random() + .1, this.opc = Math.random() / 2 + .3, this.R = Math.sqrt(this.point.x * this.point.x + this.point.y * this.point.y), "function" != typeof this.nextFps && (e.prototype.nextFps = function() {
                if(1 == v.way) {
                    if(this.point.x = (Math.abs(this.point.x) + this.speed * (Math.abs(this.point.x) / (Math.abs(this.point.x) + Math.abs(this.point.y)))) * (this.point.x / Math.abs(this.point.x)), this.point.y = (Math.abs(this.point.y) + this.speed * (Math.abs(this.point.y) / (Math.abs(this.point.x) + Math.abs(this.point.y)))) * (this.point.y / Math.abs(this.point.y)), this.point.x < r * -.5 || this.point.x > .5 * r || this.point.y < h * -.5 || this.point.y > .5 * h) {
                        var t = Math.min(Math.abs(this.point.x), Math.abs(this.point.y)) / 40;
                        this.point.x /= t, this.point.y /= t
                    }
                } else if(0 == v.way) {
                    var e = (this.R - Math.abs(this.point.x)) / this.R * (this.speed + 1 + 3 * Math.random());
                    e = e <= .05 ? .05 : e, e = e >= 1 ? 1 : e, this.point.y > 0 ? this.point.x + e <= this.R ? (this.point.x += e, this.point.y = Math.sqrt(this.R * this.R - this.point.x * this.point.x)) : (this.point.x = this.R, this.point.y = 0) : this.point.x - e >= this.R * -1 ? (this.point.x -= e, this.point.y = Math.sqrt(this.R * this.R - this.point.x * this.point.x) * -1) : this.point.y *= -1
                }
            }), "function" != typeof this.draw && (e.prototype.draw = function(t) {
                t.save(), t.globalAlpha = this.opc, t.translate(r / 2, h / 2), t.fillStyle = "#fff", t.beginPath(), t.arc(this.point.x, this.point.y, this.rad, 0, 2 * Math.PI), t.fill(), t.restore()
            })
        }

        function n(t) {
            this.point = t || {
                x: 0,
                y: 0
            }, this.rad = Math.random(), Math.random() > .9 && (this.rad = 5), this.speed = 2, this.opc = Math.random() / 2 + .3, this.isEnd = !1, "function" != typeof this.nextFps && (n.prototype.nextFps = function() {
                this.speed += 2, this.rad += .3, this.point.x = (Math.abs(this.point.x) + this.speed * (Math.abs(this.point.x) / (Math.abs(this.point.x) + Math.abs(this.point.y)))) * (this.point.x / Math.abs(this.point.x)), this.point.y = (Math.abs(this.point.y) + this.speed * (Math.abs(this.point.y) / (Math.abs(this.point.x) + Math.abs(this.point.y)))) * (this.point.y / Math.abs(this.point.y)), (this.point.x < r * -.5 || this.point.x > .5 * r || this.point.y < h * -.5 || this.point.y > .5 * h) && (this.isEnd = !0)
            }), "function" != typeof this.draw && (n.prototype.draw = function(t) {
                t.save(), t.globalAlpha = this.opc, t.translate(r / 2, h / 2), t.fillStyle = "#fff", t.beginPath(), t.arc(this.point.x, this.point.y, this.rad, 0, 2 * Math.PI), t.fill(), t.restore()
            })
        }

        function i() {
            this.step = .05, this.isEnd = !1, this.opc = 1, "function" != typeof this.nextFps && (i.prototype.nextFps = function() {
                this.step < .5 ? this.step += .01 : this.step < 1 && (this.step += .006, this.opc > .01 && (this.opc -= .01)), this.step >= 1 && (this.isEnd = !0)
            }), "function" != typeof this.draw && (i.prototype.draw = function(t) {
                t.save();
                var e = t.createRadialGradient(r / 2, h / 2, 0, r / 2, h / 2, Math.max(r, h));
                e.addColorStop(0, "rgba(11,45,106,0)"), e.addColorStop(this.step, "rgba(11,45,106,.4)"), e.addColorStop(1, "rgba(11,45,106,.1)"), t.globalAlpha = this.opc, t.fillStyle = e, t.rect(0, 0, r, h), t.fill(), t.restore()
            })
        }
        window.requestAnimFrame = function() {
            return function(t) {
                window.setTimeout(t, 40)
            }
        }();
        var o = function() {
            try {
                return document.createElement("canvas").getContext("2d"), !0
            } catch(t) {
                return !1
            }
        }();
        if(o) {
            var a = document.getElementById("canvas"),
                s = a.getContext("2d"),
                r = document.body.offsetWidth,
                h = document.body.offsetHeight;
            a.setAttribute("width", r), a.setAttribute("height", h);
            var c = document.createElement("canvas"),
                d = c.getContext("2d");
            c.width = r, c.height = h;
            var p, u = {
                    createSign: function() {
                        return Math.random() > .5 ? -1 : 1
                    },
                    createPoints: function(t, e, n, i, o) {
                        for(var a = [], s = 0; s < o; s++) a.push({
                            x: t + Math.random() * (n - t),
                            y: e + Math.random() * (i - e)
                        });
                        return a
                    }
                },
                l = [],
                f = {
                    avgMax: 2,
                    iSpeed: 1.5,
                    dSpeed: .8,
                    newPoint: function(t, e) {
                        var n = t.x * t.x + t.y * t.y + e * e + 2 * e * Math.sqrt(t.x * t.x + t.y * t.y);
                        return {
                            x: Math.sqrt(n / (1 + t.y * t.y / (t.x * t.x))) * (t.x / Math.abs(t.x)),
                            y: Math.sqrt(n / (1 + t.x * t.x / (t.y * t.y))) * (t.y / Math.abs(t.y))
                        }
                    },
                    createRay: function(e) {
                        for(var n, i = {
                                x: 0,
                                y: 0
                            }, o = 15, a = 0; a < e; a++) i.x = Math.random() * o * u.createSign(), i.y = Math.sqrt(o * o - i.x * i.x) * u.createSign(), n = Math.ceil(3 * Math.random()), l.push(new t(i, n))
                    }
                },
                m = [],
                b = [],
                v = {
                    way: 0,
                    createParticle: function() {
                        for(var t = [], n = 0; n < 10; n++)
                            for(var i = 0; i < 5; i++) {
                                t = u.createPoints(-.5 * r + .1 * n * r, -.5 * h + .2 * i * h, -.5 * r + .1 * (n + 1) * r, -.5 * h + .2 * (i + 1) * h, 6);
                                for(var o = 0; o < t.length; o++) 0 != t[o].x && 0 != t[o].y && m.push(new e(t[o]))
                            }
                    },
                    createParticle2: function() {
                        for(var t = [], e = 0; e < 5; e++)
                            for(var i = 0; i < 2; i++) {
                                t = u.createPoints(-.5 * r + .2 * e * r, -.5 * h + .5 * i * h, -.5 * r + .2 * (e + 1) * r, -.5 * h + .5 * (i + 1) * h, 1);
                                for(var o = 0; o < t.length; o++) 0 != t[o].x && 0 != t[o].y && b.push(new n(t[o]))
                            }
                    }
                },
                w = new i,
                g = {
                    drawParticle: function() {
                        for(var t = 0; t < m.length; t++) m[t].nextFps(), m[t].draw(d)
                    },
                    drawParticle2: function() {
                        for(var t = 0; t < b.length; t++) b[t].nextFps(), b[t].isEnd ? (b.splice(t, 1), t--) : b[t].draw(d)
                    },
                    drawRay: function() {
                        for(var t = 0; t < l.length; t++) l[t].nextFps(), l[t].isEnd ? (l.splice(t, 1), t--) : l[t].draw(d)
                    }
                },
                _ = function() {
                    switch(d.clearRect(0, 0, r, h), p) {
                        case 1:
                            g.drawParticle();
                            break;
                        case 2:
                            g.drawParticle(), g.drawParticle2(), f.createRay(Math.ceil(Math.random() * f.avgMax)), g.drawRay(), w.nextFps(), w.isEnd || w.draw(d);
                            break;
                        case 3:
                            g.drawParticle(), g.drawRay();
                            break;
                        case 4:
                            g.drawParticle()
                    }
                    s.clearRect(0, 0, r, h), s.drawImage(c, 0, 0), requestAnimFrame(_)
                };
            window.onresize = function() {
                r = document.body.offsetWidth, h = document.body.offsetHeight, a.setAttribute("width", r), a.setAttribute("height", h), c.width = r, c.height = h, m = [], v.createParticle()
            }, window.cvsEffect = function(t, e) {}, cvsEffect.start = function() {
                requestAnimFrame(_)
            }, cvsEffect.one = function() {
                p = 1, v.way = 0, m = [], v.createParticle()
            }, cvsEffect.two = function() {
                p = 2, v.way = 1, m = [], v.createParticle(), b = [], v.createParticle2(), w.isEnd = !0, setTimeout(function() {
                    w.step = .05, w.opc = 1, w.isEnd = !1
                }, 50)
            }, cvsEffect.three = function() {
                p = 3, 0 == m.length && v.createParticle(), v.way = 1
            }, cvsEffect.four = function() {
                0 == m.length && v.createParticle(), v.way = 1, p = 4
            }
        }
    }()
}]);
