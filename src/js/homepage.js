webpackJsonp([10], {
  318 : function(e, t, n) {
    "use strict";
    function i(e) {
      return e && e.__esModule ? e: {
      default:
        e
      }
    }
    var u = n(13),
    l = i(u),
    a = n(319),
    s = i(a);
    l.
  default.onReady(function() {
      return new s.
    default
    })
  },
  319 : function(e, t, n) {
    "use strict";
    function i(e) {
      return e && e.__esModule ? e: {
      default:
        e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var u = n(0),
    l = i(u),
    a = n(10),
    s = i(a),
    o = n(320),
    c = i(o),
    d = function e() { (0, l.
    default)(this, e),
      this.modules = s.
    default.loadModules(c.
    default)
    };
    t.
  default = d
  },
  320 : function(e, t, n) {
    "use strict";
    function i(e) {
      return e && e.__esModule ? e: {
      default:
        e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var u = n(81),
    l = i(u),
    a = n(329),
    s = i(a);
    t.
  default = {
      HeroBannerCarousel: l.
    default,
      VehiclePanel: s.
    default
    }
  },
  329 : function(e, t, n) {
    "use strict";
    function i(e) {
      return e && e.__esModule ? e: {
      default:
        e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var u = n(0),
    l = i(u),
    a = n(2),
    s = i(a),
    o = n(3),
    c = n(22),
    d = i(c),
    f = {
      VECHICLE_PANEL_ITEM: "vehicle-panel__item",
      VECHICLE_PANEL_ITEM_TEXT: "vehicle-panel__item-text"
    },
    r = function() {
      function e(t) { (0, l.
      default)(this, e),
        this.element = t,
        this.items = [],
        this.cacheDom(),
        this.init()
      }
      return (0, s.
    default)(e, [{
        key: "cacheDom",
        value: function() {
          this.items = [].slice.call(this.element.querySelectorAll("." + f.VECHICLE_PANEL_ITEM))
        }
      },
      {
        key: "init",
        value: function() {
          var e = this;
          d.
        default.getData().then(function(t) {
            e.items.forEach(function(e, n) {
              t.bodStyle[n] && (e.querySelector("." + f.VECHICLE_PANEL_ITEM_TEXT).textContent = t.bodStyle[n].bodyStyleChineseName, e.addEventListener(o.EVENTS.CLICK,
              function() {
                window.location.href = t.navigationLinks.allVechiclePageLink + "#" + t.bodStyle[n].bodyStyleName
              }))
            })
          })
        }
      },
      {
        key: "switchItem",
        value: function(e) {
          this.navs[e] && (this.navs[this.active].classList.remove(f.NAV_LIST_ITEM_ACTIVE), this.active = e, this.navs[e].classList.add(f.NAV_LIST_ITEM_ACTIVE), this.slides[0].style.marginLeft = "-" + 100 * e + "%")
        }
      }]),
      e
    } ();
    t.
  default = r
  }
},
[318]);