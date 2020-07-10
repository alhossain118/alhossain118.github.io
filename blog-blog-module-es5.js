function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blog-blog-module"], {
  /***/
  "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js ***!
    \*************************************************************************/

  /*! exports provided: ɵb, ɵa, NgxPaginationModule, PaginationService, PaginationControlsComponent, PaginationControlsDirective, PaginatePipe */

  /***/
  function node_modulesNgxPagination__ivy_ngcc__DistNgxPaginationJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return DEFAULT_STYLES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return DEFAULT_TEMPLATE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxPaginationModule", function () {
      return NgxPaginationModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginationService", function () {
      return PaginationService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginationControlsComponent", function () {
      return PaginationControlsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginationControlsDirective", function () {
      return PaginationControlsDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginatePipe", function () {
      return PaginatePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PaginationControlsComponent_ul_2_li_1_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function PaginationControlsComponent_ul_2_li_1_a_1_Template_a_keyup_enter_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          return _r0.previous();
        })("click", function PaginationControlsComponent_ul_2_li_1_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          return _r0.previous();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r5.previousLabel + " " + ctx_r5.screenReaderPageLabel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.previousLabel, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.screenReaderPageLabel);
      }
    }

    function PaginationControlsComponent_ul_2_li_1_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.previousLabel, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.screenReaderPageLabel);
      }
    }

    function PaginationControlsComponent_ul_2_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationControlsComponent_ul_2_li_1_a_1_Template, 4, 3, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaginationControlsComponent_ul_2_li_1_span_2_Template, 4, 2, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", _r0.isFirstPage());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", 1 < _r0.getCurrent());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.isFirstPage());
      }
    }

    function PaginationControlsComponent_ul_2_li_4_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function PaginationControlsComponent_ul_2_li_4_a_1_Template_a_keyup_enter_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var page_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          return _r0.setCurrent(page_r10.value);
        })("click", function PaginationControlsComponent_ul_2_li_4_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var page_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          return _r0.setCurrent(page_r10.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var page_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r11.screenReaderPageLabel, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r10.label === "..." ? page_r10.label : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 2, page_r10.label, ""));
      }
    }

    function PaginationControlsComponent_ul_2_li_4_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var page_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r12.screenReaderCurrentLabel, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r10.label === "..." ? page_r10.label : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 2, page_r10.label, ""));
      }
    }

    function PaginationControlsComponent_ul_2_li_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationControlsComponent_ul_2_li_4_a_1_Template, 6, 5, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaginationControlsComponent_ul_2_li_4_ng_container_2_Template, 6, 5, "ng-container", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var page_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("current", _r0.getCurrent() === page_r10.value)("ellipsis", page_r10.label === "...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.getCurrent() !== page_r10.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.getCurrent() === page_r10.value);
      }
    }

    function PaginationControlsComponent_ul_2_li_5_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function PaginationControlsComponent_ul_2_li_5_a_1_Template_a_keyup_enter_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          return _r0.next();
        })("click", function PaginationControlsComponent_ul_2_li_5_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          return _r0.next();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r20.nextLabel + " " + ctx_r20.screenReaderPageLabel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r20.nextLabel, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r20.screenReaderPageLabel);
      }
    }

    function PaginationControlsComponent_ul_2_li_5_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r21.nextLabel, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r21.screenReaderPageLabel);
      }
    }

    function PaginationControlsComponent_ul_2_li_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationControlsComponent_ul_2_li_5_a_1_Template, 4, 3, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaginationControlsComponent_ul_2_li_5_span_2_Template, 4, 2, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", _r0.isLastPage());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r0.isLastPage());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.isLastPage());
      }
    }

    function PaginationControlsComponent_ul_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationControlsComponent_ul_2_li_1_Template, 3, 4, "li", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PaginationControlsComponent_ul_2_li_4_Template, 3, 6, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PaginationControlsComponent_ul_2_li_5_Template, 3, 4, "li", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("responsive", ctx_r1.responsive);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.screenReaderPaginationLabel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.directionLinks);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _r0.getCurrent(), " / ", _r0.getLastPage(), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r0.pages);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.directionLinks);
      }
    }

    var PaginationService =
    /** @class */
    function () {
      function PaginationService() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.instances = {};
        this.DEFAULT_ID = 'DEFAULT_PAGINATION_ID';
      }

      PaginationService.prototype.defaultId = function () {
        return this.DEFAULT_ID;
      };
      /**
       * Register a PaginationInstance with this service. Returns a
       * boolean value signifying whether the instance is new or
       * updated (true = new or updated, false = unchanged).
       */


      PaginationService.prototype.register = function (instance) {
        if (instance.id == null) {
          instance.id = this.DEFAULT_ID;
        }

        if (!this.instances[instance.id]) {
          this.instances[instance.id] = instance;
          return true;
        } else {
          return this.updateInstance(instance);
        }
      };
      /**
       * Check each property of the instance and update any that have changed. Return
       * true if any changes were made, else return false.
       */


      PaginationService.prototype.updateInstance = function (instance) {
        var changed = false;

        for (var prop in this.instances[instance.id]) {
          if (instance[prop] !== this.instances[instance.id][prop]) {
            this.instances[instance.id][prop] = instance[prop];
            changed = true;
          }
        }

        return changed;
      };
      /**
       * Returns the current page number.
       */


      PaginationService.prototype.getCurrentPage = function (id) {
        if (this.instances[id]) {
          return this.instances[id].currentPage;
        }
      };
      /**
       * Sets the current page number.
       */


      PaginationService.prototype.setCurrentPage = function (id, page) {
        if (this.instances[id]) {
          var instance = this.instances[id];
          var maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);

          if (page <= maxPage && 1 <= page) {
            this.instances[id].currentPage = page;
            this.change.emit(id);
          }
        }
      };
      /**
       * Sets the value of instance.totalItems
       */


      PaginationService.prototype.setTotalItems = function (id, totalItems) {
        if (this.instances[id] && 0 <= totalItems) {
          this.instances[id].totalItems = totalItems;
          this.change.emit(id);
        }
      };
      /**
       * Sets the value of instance.itemsPerPage.
       */


      PaginationService.prototype.setItemsPerPage = function (id, itemsPerPage) {
        if (this.instances[id]) {
          this.instances[id].itemsPerPage = itemsPerPage;
          this.change.emit(id);
        }
      };
      /**
       * Returns a clone of the pagination instance object matching the id. If no
       * id specified, returns the instance corresponding to the default id.
       */


      PaginationService.prototype.getInstance = function (id) {
        if (id === void 0) {
          id = this.DEFAULT_ID;
        }

        if (this.instances[id]) {
          return this.clone(this.instances[id]);
        }

        return {};
      };
      /**
       * Perform a shallow clone of an object.
       */


      PaginationService.prototype.clone = function (obj) {
        var target = {};

        for (var i in obj) {
          if (obj.hasOwnProperty(i)) {
            target[i] = obj[i];
          }
        }

        return target;
      };

      PaginationService.ɵfac = function PaginationService_Factory(t) {
        return new (t || PaginationService)();
      };

      PaginationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: PaginationService,
        factory: function factory(t) {
          return PaginationService.ɵfac(t);
        }
      });
      return PaginationService;
    }();

    var __decorate$1 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var LARGE_NUMBER = Number.MAX_SAFE_INTEGER;

    var PaginatePipe =
    /** @class */
    function () {
      function PaginatePipe(service) {
        this.service = service; // store the values from the last time the pipe was invoked

        this.state = {};
      }

      PaginatePipe.prototype.transform = function (collection, args) {
        // When an observable is passed through the AsyncPipe, it will output
        // `null` until the subscription resolves. In this case, we want to
        // use the cached data from the `state` object to prevent the NgFor
        // from flashing empty until the real values arrive.
        if (!(collection instanceof Array)) {
          var _id = args.id || this.service.defaultId();

          if (this.state[_id]) {
            return this.state[_id].slice;
          } else {
            return collection;
          }
        }

        var serverSideMode = args.totalItems && args.totalItems !== collection.length;
        var instance = this.createInstance(collection, args);
        var id = instance.id;
        var start, end;
        var perPage = instance.itemsPerPage;
        var emitChange = this.service.register(instance);

        if (!serverSideMode && collection instanceof Array) {
          perPage = +perPage || LARGE_NUMBER;
          start = (instance.currentPage - 1) * perPage;
          end = start + perPage;
          var isIdentical = this.stateIsIdentical(id, collection, start, end);

          if (isIdentical) {
            return this.state[id].slice;
          } else {
            var slice = collection.slice(start, end);
            this.saveState(id, collection, slice, start, end);
            this.service.change.emit(id);
            return slice;
          }
        } else {
          if (emitChange) {
            this.service.change.emit(id);
          } // save the state for server-side collection to avoid null
          // flash as new data loads.


          this.saveState(id, collection, collection, start, end);
          return collection;
        }
      };
      /**
       * Create an PaginationInstance object, using defaults for any optional properties not supplied.
       */


      PaginatePipe.prototype.createInstance = function (collection, config) {
        this.checkConfig(config);
        return {
          id: config.id != null ? config.id : this.service.defaultId(),
          itemsPerPage: +config.itemsPerPage || 0,
          currentPage: +config.currentPage || 1,
          totalItems: +config.totalItems || collection.length
        };
      };
      /**
       * Ensure the argument passed to the filter contains the required properties.
       */


      PaginatePipe.prototype.checkConfig = function (config) {
        var required = ['itemsPerPage', 'currentPage'];
        var missing = required.filter(function (prop) {
          return !(prop in config);
        });

        if (0 < missing.length) {
          throw new Error("PaginatePipe: Argument is missing the following required properties: " + missing.join(', '));
        }
      };
      /**
       * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
       * array for a given id. This means that the next time the pipe is run on this collection & id, we just
       * need to check that the collection, start and end points are all identical, and if so, return the
       * last sliced array.
       */


      PaginatePipe.prototype.saveState = function (id, collection, slice, start, end) {
        this.state[id] = {
          collection: collection,
          size: collection.length,
          slice: slice,
          start: start,
          end: end
        };
      };
      /**
       * For a given id, returns true if the collection, size, start and end values are identical.
       */


      PaginatePipe.prototype.stateIsIdentical = function (id, collection, start, end) {
        var state = this.state[id];

        if (!state) {
          return false;
        }

        var isMetaDataIdentical = state.size === collection.length && state.start === start && state.end === end;

        if (!isMetaDataIdentical) {
          return false;
        }

        return state.slice.every(function (element, index) {
          return element === collection[start + index];
        });
      };

      PaginatePipe = __decorate$1([__metadata("design:paramtypes", [PaginationService])], PaginatePipe);

      PaginatePipe.ɵfac = function PaginatePipe_Factory(t) {
        return new (t || PaginatePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PaginationService));
      };

      PaginatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "paginate",
        type: PaginatePipe,
        pure: false
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginatePipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'paginate',
            pure: false
          }]
        }], function () {
          return [{
            type: PaginationService
          }];
        }, null);
      })();

      return PaginatePipe;
    }();
    /**
     * The default template and styles for the pagination links are borrowed directly
     * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
     */


    var DEFAULT_TEMPLATE = "\n    <pagination-template  #p=\"paginationApi\"\n                         [id]=\"id\"\n                         [maxSize]=\"maxSize\"\n                         (pageChange)=\"pageChange.emit($event)\"\n                         (pageBoundsCorrection)=\"pageBoundsCorrection.emit($event)\">\n    <ul class=\"ngx-pagination\" \n        role=\"navigation\" \n        [attr.aria-label]=\"screenReaderPaginationLabel\" \n        [class.responsive]=\"responsive\"\n        *ngIf=\"!(autoHide && p.pages.length <= 1)\">\n\n        <li class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\" *ngIf=\"directionLinks\"> \n            <a tabindex=\"0\" *ngIf=\"1 < p.getCurrent()\" (keyup.enter)=\"p.previous()\" (click)=\"p.previous()\" [attr.aria-label]=\"previousLabel + ' ' + screenReaderPageLabel\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isFirstPage()\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li> \n\n        <li class=\"small-screen\">\n            {{ p.getCurrent() }} / {{ p.getLastPage() }}\n        </li>\n\n        <li [class.current]=\"p.getCurrent() === page.value\" \n            [class.ellipsis]=\"page.label === '...'\"\n            *ngFor=\"let page of p.pages\">\n            <a tabindex=\"0\" (keyup.enter)=\"p.setCurrent(page.value)\" (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderPageLabel }} </span>\n                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span>\n            </a>\n            <ng-container *ngIf=\"p.getCurrent() === page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderCurrentLabel }} </span>\n                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span> \n            </ng-container>\n        </li>\n\n        <li class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\" *ngIf=\"directionLinks\">\n            <a tabindex=\"0\" *ngIf=\"!p.isLastPage()\" (keyup.enter)=\"p.next()\" (click)=\"p.next()\" [attr.aria-label]=\"nextLabel + ' ' + screenReaderPageLabel\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isLastPage()\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n    </ul>\n    </pagination-template>\n    ";
    var DEFAULT_STYLES = "\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\xAB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\xBB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  ";

    var __decorate$2 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata$1 = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    function coerceToBoolean(input) {
      return !!input && input !== 'false';
    }
    /**
     * The default pagination controls component. Actually just a default implementation of a custom template.
     */


    var PaginationControlsComponent =
    /** @class */
    function () {
      function PaginationControlsComponent() {
        this.maxSize = 7;
        this.previousLabel = 'Previous';
        this.nextLabel = 'Next';
        this.screenReaderPaginationLabel = 'Pagination';
        this.screenReaderPageLabel = 'page';
        this.screenReaderCurrentLabel = "You're on page";
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageBoundsCorrection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._directionLinks = true;
        this._autoHide = false;
        this._responsive = false;
      }

      Object.defineProperty(PaginationControlsComponent.prototype, "directionLinks", {
        get: function get() {
          return this._directionLinks;
        },
        set: function set(value) {
          this._directionLinks = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(PaginationControlsComponent.prototype, "autoHide", {
        get: function get() {
          return this._autoHide;
        },
        set: function set(value) {
          this._autoHide = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(PaginationControlsComponent.prototype, "responsive", {
        get: function get() {
          return this._responsive;
        },
        set: function set(value) {
          this._responsive = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
      });

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", String)], PaginationControlsComponent.prototype, "id", void 0);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", Number)], PaginationControlsComponent.prototype, "maxSize", void 0);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", Boolean), __metadata$1("design:paramtypes", [Boolean])], PaginationControlsComponent.prototype, "directionLinks", null);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", Boolean), __metadata$1("design:paramtypes", [Boolean])], PaginationControlsComponent.prototype, "autoHide", null);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", Boolean), __metadata$1("design:paramtypes", [Boolean])], PaginationControlsComponent.prototype, "responsive", null);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", String)], PaginationControlsComponent.prototype, "previousLabel", void 0);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", String)], PaginationControlsComponent.prototype, "nextLabel", void 0);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", String)], PaginationControlsComponent.prototype, "screenReaderPaginationLabel", void 0);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", String)], PaginationControlsComponent.prototype, "screenReaderPageLabel", void 0);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", String)], PaginationControlsComponent.prototype, "screenReaderCurrentLabel", void 0);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata$1("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], PaginationControlsComponent.prototype, "pageChange", void 0);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata$1("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], PaginationControlsComponent.prototype, "pageBoundsCorrection", void 0);

      PaginationControlsComponent.ɵfac = function PaginationControlsComponent_Factory(t) {
        return new (t || PaginationControlsComponent)();
      };

      PaginationControlsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PaginationControlsComponent,
        selectors: [["pagination-controls"]],
        inputs: {
          maxSize: "maxSize",
          previousLabel: "previousLabel",
          nextLabel: "nextLabel",
          screenReaderPaginationLabel: "screenReaderPaginationLabel",
          screenReaderPageLabel: "screenReaderPageLabel",
          screenReaderCurrentLabel: "screenReaderCurrentLabel",
          directionLinks: "directionLinks",
          autoHide: "autoHide",
          responsive: "responsive",
          id: "id"
        },
        outputs: {
          pageChange: "pageChange",
          pageBoundsCorrection: "pageBoundsCorrection"
        },
        decls: 3,
        vars: 3,
        consts: [[3, "id", "maxSize", "pageChange", "pageBoundsCorrection"], ["p", "paginationApi"], ["class", "ngx-pagination", "role", "navigation", 3, "responsive", 4, "ngIf"], ["role", "navigation", 1, "ngx-pagination"], ["class", "pagination-previous", 3, "disabled", 4, "ngIf"], [1, "small-screen"], [3, "current", "ellipsis", 4, "ngFor", "ngForOf"], ["class", "pagination-next", 3, "disabled", 4, "ngIf"], [1, "pagination-previous"], ["tabindex", "0", 3, "keyup.enter", "click", 4, "ngIf"], [4, "ngIf"], ["tabindex", "0", 3, "keyup.enter", "click"], [1, "show-for-sr"], [1, "pagination-next"]],
        template: function PaginationControlsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pagination-template", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PaginationControlsComponent_Template_pagination_template_pageChange_0_listener($event) {
              return ctx.pageChange.emit($event);
            })("pageBoundsCorrection", function PaginationControlsComponent_Template_pagination_template_pageBoundsCorrection_0_listener($event) {
              return ctx.pageBoundsCorrection.emit($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaginationControlsComponent_ul_2_Template, 6, 8, "ul", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id)("maxSize", ctx.maxSize);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.autoHide && _r0.pages.length <= 1));
          }
        },
        directives: function directives() {
          return [PaginationControlsDirective, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]];
        },
        pipes: function pipes() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]];
        },
        styles: ["\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\xAB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\xBB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  "],
        encapsulation: 2,
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationControlsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'pagination-controls',
            template: DEFAULT_TEMPLATE,
            styles: [DEFAULT_STYLES],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [];
        }, {
          maxSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          previousLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nextLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          screenReaderPaginationLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          screenReaderPageLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          screenReaderCurrentLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          pageChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          pageBoundsCorrection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          directionLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          autoHide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          responsive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      return PaginationControlsComponent;
    }();

    var __decorate$3 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata$2 = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    /**
     * This directive is what powers all pagination controls components, including the default one.
     * It exposes an API which is hooked up to the PaginationService to keep the PaginatePipe in sync
     * with the pagination controls.
     */


    var PaginationControlsDirective =
    /** @class */
    function () {
      function PaginationControlsDirective(service, changeDetectorRef) {
        var _this = this;

        this.service = service;
        this.changeDetectorRef = changeDetectorRef;
        this.maxSize = 7;
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageBoundsCorrection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pages = [];
        this.changeSub = this.service.change.subscribe(function (id) {
          if (_this.id === id) {
            _this.updatePageLinks();

            _this.changeDetectorRef.markForCheck();

            _this.changeDetectorRef.detectChanges();
          }
        });
      }

      PaginationControlsDirective.prototype.ngOnInit = function () {
        if (this.id === undefined) {
          this.id = this.service.defaultId();
        }

        this.updatePageLinks();
      };

      PaginationControlsDirective.prototype.ngOnChanges = function (changes) {
        this.updatePageLinks();
      };

      PaginationControlsDirective.prototype.ngOnDestroy = function () {
        this.changeSub.unsubscribe();
      };
      /**
       * Go to the previous page
       */


      PaginationControlsDirective.prototype.previous = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() - 1);
      };
      /**
       * Go to the next page
       */


      PaginationControlsDirective.prototype.next = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() + 1);
      };
      /**
       * Returns true if current page is first page
       */


      PaginationControlsDirective.prototype.isFirstPage = function () {
        return this.getCurrent() === 1;
      };
      /**
       * Returns true if current page is last page
       */


      PaginationControlsDirective.prototype.isLastPage = function () {
        return this.getLastPage() === this.getCurrent();
      };
      /**
       * Set the current page number.
       */


      PaginationControlsDirective.prototype.setCurrent = function (page) {
        this.pageChange.emit(page);
      };
      /**
       * Get the current page number.
       */


      PaginationControlsDirective.prototype.getCurrent = function () {
        return this.service.getCurrentPage(this.id);
      };
      /**
       * Returns the last page number
       */


      PaginationControlsDirective.prototype.getLastPage = function () {
        var inst = this.service.getInstance(this.id);

        if (inst.totalItems < 1) {
          // when there are 0 or fewer (an error case) items, there are no "pages" as such,
          // but it makes sense to consider a single, empty page as the last page.
          return 1;
        }

        return Math.ceil(inst.totalItems / inst.itemsPerPage);
      };

      PaginationControlsDirective.prototype.getTotalItems = function () {
        return this.service.getInstance(this.id).totalItems;
      };

      PaginationControlsDirective.prototype.checkValidId = function () {
        if (this.service.getInstance(this.id).id == null) {
          console.warn("PaginationControlsDirective: the specified id \"" + this.id + "\" does not match any registered PaginationInstance");
        }
      };
      /**
       * Updates the page links and checks that the current page is valid. Should run whenever the
       * PaginationService.change stream emits a value matching the current ID, or when any of the
       * input values changes.
       */


      PaginationControlsDirective.prototype.updatePageLinks = function () {
        var _this = this;

        var inst = this.service.getInstance(this.id);
        var correctedCurrentPage = this.outOfBoundCorrection(inst);

        if (correctedCurrentPage !== inst.currentPage) {
          setTimeout(function () {
            _this.pageBoundsCorrection.emit(correctedCurrentPage);

            _this.pages = _this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, _this.maxSize);
          });
        } else {
          this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
        }
      };
      /**
       * Checks that the instance.currentPage property is within bounds for the current page range.
       * If not, return a correct value for currentPage, or the current value if OK.
       */


      PaginationControlsDirective.prototype.outOfBoundCorrection = function (instance) {
        var totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);

        if (totalPages < instance.currentPage && 0 < totalPages) {
          return totalPages;
        } else if (instance.currentPage < 1) {
          return 1;
        }

        return instance.currentPage;
      };
      /**
       * Returns an array of Page objects to use in the pagination controls.
       */


      PaginationControlsDirective.prototype.createPageArray = function (currentPage, itemsPerPage, totalItems, paginationRange) {
        // paginationRange could be a string if passed from attribute, so cast to number.
        paginationRange = +paginationRange;
        var pages = [];
        var totalPages = Math.ceil(totalItems / itemsPerPage);
        var halfWay = Math.ceil(paginationRange / 2);
        var isStart = currentPage <= halfWay;
        var isEnd = totalPages - halfWay < currentPage;
        var isMiddle = !isStart && !isEnd;
        var ellipsesNeeded = paginationRange < totalPages;
        var i = 1;

        while (i <= totalPages && i <= paginationRange) {
          var label = void 0;
          var pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
          var openingEllipsesNeeded = i === 2 && (isMiddle || isEnd);
          var closingEllipsesNeeded = i === paginationRange - 1 && (isMiddle || isStart);

          if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
            label = '...';
          } else {
            label = pageNumber;
          }

          pages.push({
            label: label,
            value: pageNumber
          });
          i++;
        }

        return pages;
      };
      /**
       * Given the position in the sequence of pagination links [i],
       * figure out what page number corresponds to that position.
       */


      PaginationControlsDirective.prototype.calculatePageNumber = function (i, currentPage, paginationRange, totalPages) {
        var halfWay = Math.ceil(paginationRange / 2);

        if (i === paginationRange) {
          return totalPages;
        } else if (i === 1) {
          return i;
        } else if (paginationRange < totalPages) {
          if (totalPages - halfWay < currentPage) {
            return totalPages - paginationRange + i;
          } else if (halfWay < currentPage) {
            return currentPage - halfWay + i;
          } else {
            return i;
          }
        } else {
          return i;
        }
      };

      __decorate$3([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$2("design:type", String)], PaginationControlsDirective.prototype, "id", void 0);

      __decorate$3([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$2("design:type", Number)], PaginationControlsDirective.prototype, "maxSize", void 0);

      __decorate$3([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata$2("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], PaginationControlsDirective.prototype, "pageChange", void 0);

      __decorate$3([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata$2("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], PaginationControlsDirective.prototype, "pageBoundsCorrection", void 0);

      PaginationControlsDirective = __decorate$3([__metadata$2("design:paramtypes", [PaginationService, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], PaginationControlsDirective);

      PaginationControlsDirective.ɵfac = function PaginationControlsDirective_Factory(t) {
        return new (t || PaginationControlsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      PaginationControlsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: PaginationControlsDirective,
        selectors: [["pagination-template"], ["", "pagination-template", ""]],
        inputs: {
          maxSize: "maxSize",
          id: "id"
        },
        outputs: {
          pageChange: "pageChange",
          pageBoundsCorrection: "pageBoundsCorrection"
        },
        exportAs: ["paginationApi"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationControlsDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'pagination-template,[pagination-template]',
            exportAs: 'paginationApi'
          }]
        }], function () {
          return [{
            type: PaginationService
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, {
          maxSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          pageChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          pageBoundsCorrection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      return PaginationControlsDirective;
    }();

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var NgxPaginationModule =
    /** @class */
    function () {
      function NgxPaginationModule() {}

      NgxPaginationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: NgxPaginationModule
      });
      NgxPaginationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function NgxPaginationModule_Factory(t) {
          return new (t || NgxPaginationModule)();
        },
        providers: [PaginationService],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxPaginationModule, {
          declarations: function declarations() {
            return [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
          },
          exports: function exports() {
            return [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxPaginationModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective],
            providers: [PaginationService],
            exports: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]
          }]
        }], function () {
          return [];
        }, null);
      })();

      return NgxPaginationModule;
    }();
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXBhZ2luYXRpb24uanMiLCJzb3VyY2VzIjpbIm5neC1wYWdpbmF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FLTztBQUNQOzs7Ozs7Ozs7MkVBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFTb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFLTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dEQVk0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgTmdNb2R1bGUsIE91dHB1dCwgUGlwZSwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbnZhciBQYWdpbmF0aW9uU2VydmljZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFBhZ2luYXRpb25TZXJ2aWNlKCkge1xyXG4gICAgICAgIHRoaXMuY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2VzID0ge307XHJcbiAgICAgICAgdGhpcy5ERUZBVUxUX0lEID0gJ0RFRkFVTFRfUEFHSU5BVElPTl9JRCc7XHJcbiAgICB9XHJcbiAgICBQYWdpbmF0aW9uU2VydmljZS5wcm90b3R5cGUuZGVmYXVsdElkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5ERUZBVUxUX0lEOyB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciBhIFBhZ2luYXRpb25JbnN0YW5jZSB3aXRoIHRoaXMgc2VydmljZS4gUmV0dXJucyBhXHJcbiAgICAgKiBib29sZWFuIHZhbHVlIHNpZ25pZnlpbmcgd2hldGhlciB0aGUgaW5zdGFuY2UgaXMgbmV3IG9yXHJcbiAgICAgKiB1cGRhdGVkICh0cnVlID0gbmV3IG9yIHVwZGF0ZWQsIGZhbHNlID0gdW5jaGFuZ2VkKS5cclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGlvblNlcnZpY2UucHJvdG90eXBlLnJlZ2lzdGVyID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XHJcbiAgICAgICAgaWYgKGluc3RhbmNlLmlkID09IG51bGwpIHtcclxuICAgICAgICAgICAgaW5zdGFuY2UuaWQgPSB0aGlzLkRFRkFVTFRfSUQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UuaWRdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLmlkXSA9IGluc3RhbmNlO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZUluc3RhbmNlKGluc3RhbmNlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBlYWNoIHByb3BlcnR5IG9mIHRoZSBpbnN0YW5jZSBhbmQgdXBkYXRlIGFueSB0aGF0IGhhdmUgY2hhbmdlZC4gUmV0dXJuXHJcbiAgICAgKiB0cnVlIGlmIGFueSBjaGFuZ2VzIHdlcmUgbWFkZSwgZWxzZSByZXR1cm4gZmFsc2UuXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25TZXJ2aWNlLnByb3RvdHlwZS51cGRhdGVJbnN0YW5jZSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xyXG4gICAgICAgIHZhciBjaGFuZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5pZF0pIHtcclxuICAgICAgICAgICAgaWYgKGluc3RhbmNlW3Byb3BdICE9PSB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5pZF1bcHJvcF0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLmlkXVtwcm9wXSA9IGluc3RhbmNlW3Byb3BdO1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNoYW5nZWQ7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHBhZ2UgbnVtYmVyLlxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0aW9uU2VydmljZS5wcm90b3R5cGUuZ2V0Q3VycmVudFBhZ2UgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZXNbaWRdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlc1tpZF0uY3VycmVudFBhZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgY3VycmVudCBwYWdlIG51bWJlci5cclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGlvblNlcnZpY2UucHJvdG90eXBlLnNldEN1cnJlbnRQYWdlID0gZnVuY3Rpb24gKGlkLCBwYWdlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2VzW2lkXSkge1xyXG4gICAgICAgICAgICB2YXIgaW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlc1tpZF07XHJcbiAgICAgICAgICAgIHZhciBtYXhQYWdlID0gTWF0aC5jZWlsKGluc3RhbmNlLnRvdGFsSXRlbXMgLyBpbnN0YW5jZS5pdGVtc1BlclBhZ2UpO1xyXG4gICAgICAgICAgICBpZiAocGFnZSA8PSBtYXhQYWdlICYmIDEgPD0gcGFnZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXNbaWRdLmN1cnJlbnRQYWdlID0gcGFnZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlLmVtaXQoaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgdmFsdWUgb2YgaW5zdGFuY2UudG90YWxJdGVtc1xyXG4gICAgICovXHJcbiAgICBQYWdpbmF0aW9uU2VydmljZS5wcm90b3R5cGUuc2V0VG90YWxJdGVtcyA9IGZ1bmN0aW9uIChpZCwgdG90YWxJdGVtcykge1xyXG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlc1tpZF0gJiYgMCA8PSB0b3RhbEl0ZW1zKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VzW2lkXS50b3RhbEl0ZW1zID0gdG90YWxJdGVtcztcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2UuZW1pdChpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgdmFsdWUgb2YgaW5zdGFuY2UuaXRlbXNQZXJQYWdlLlxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0aW9uU2VydmljZS5wcm90b3R5cGUuc2V0SXRlbXNQZXJQYWdlID0gZnVuY3Rpb24gKGlkLCBpdGVtc1BlclBhZ2UpIHtcclxuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZXNbaWRdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VzW2lkXS5pdGVtc1BlclBhZ2UgPSBpdGVtc1BlclBhZ2U7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlLmVtaXQoaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYSBjbG9uZSBvZiB0aGUgcGFnaW5hdGlvbiBpbnN0YW5jZSBvYmplY3QgbWF0Y2hpbmcgdGhlIGlkLiBJZiBub1xyXG4gICAgICogaWQgc3BlY2lmaWVkLCByZXR1cm5zIHRoZSBpbnN0YW5jZSBjb3JyZXNwb25kaW5nIHRvIHRoZSBkZWZhdWx0IGlkLlxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0aW9uU2VydmljZS5wcm90b3R5cGUuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICBpZiAoaWQgPT09IHZvaWQgMCkgeyBpZCA9IHRoaXMuREVGQVVMVF9JRDsgfVxyXG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlc1tpZF0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmUodGhpcy5pbnN0YW5jZXNbaWRdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUGVyZm9ybSBhIHNoYWxsb3cgY2xvbmUgb2YgYW4gb2JqZWN0LlxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0aW9uU2VydmljZS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICAgICAgdmFyIHRhcmdldCA9IHt9O1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaSkpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldFtpXSA9IG9ialtpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBQYWdpbmF0aW9uU2VydmljZTtcclxufSgpKTtcblxudmFyIF9fZGVjb3JhdGUkMSA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgTEFSR0VfTlVNQkVSID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XHJcbnZhciBQYWdpbmF0ZVBpcGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBQYWdpbmF0ZVBpcGUoc2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuc2VydmljZSA9IHNlcnZpY2U7XHJcbiAgICAgICAgLy8gc3RvcmUgdGhlIHZhbHVlcyBmcm9tIHRoZSBsYXN0IHRpbWUgdGhlIHBpcGUgd2FzIGludm9rZWRcclxuICAgICAgICB0aGlzLnN0YXRlID0ge307XHJcbiAgICB9XHJcbiAgICBQYWdpbmF0ZVBpcGUucHJvdG90eXBlLnRyYW5zZm9ybSA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBhcmdzKSB7XHJcbiAgICAgICAgLy8gV2hlbiBhbiBvYnNlcnZhYmxlIGlzIHBhc3NlZCB0aHJvdWdoIHRoZSBBc3luY1BpcGUsIGl0IHdpbGwgb3V0cHV0XHJcbiAgICAgICAgLy8gYG51bGxgIHVudGlsIHRoZSBzdWJzY3JpcHRpb24gcmVzb2x2ZXMuIEluIHRoaXMgY2FzZSwgd2Ugd2FudCB0b1xyXG4gICAgICAgIC8vIHVzZSB0aGUgY2FjaGVkIGRhdGEgZnJvbSB0aGUgYHN0YXRlYCBvYmplY3QgdG8gcHJldmVudCB0aGUgTmdGb3JcclxuICAgICAgICAvLyBmcm9tIGZsYXNoaW5nIGVtcHR5IHVudGlsIHRoZSByZWFsIHZhbHVlcyBhcnJpdmUuXHJcbiAgICAgICAgaWYgKCEoY29sbGVjdGlvbiBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICB2YXIgX2lkID0gYXJncy5pZCB8fCB0aGlzLnNlcnZpY2UuZGVmYXVsdElkKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlW19pZF0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlW19pZF0uc2xpY2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29sbGVjdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc2VydmVyU2lkZU1vZGUgPSBhcmdzLnRvdGFsSXRlbXMgJiYgYXJncy50b3RhbEl0ZW1zICE9PSBjb2xsZWN0aW9uLmxlbmd0aDtcclxuICAgICAgICB2YXIgaW5zdGFuY2UgPSB0aGlzLmNyZWF0ZUluc3RhbmNlKGNvbGxlY3Rpb24sIGFyZ3MpO1xyXG4gICAgICAgIHZhciBpZCA9IGluc3RhbmNlLmlkO1xyXG4gICAgICAgIHZhciBzdGFydCwgZW5kO1xyXG4gICAgICAgIHZhciBwZXJQYWdlID0gaW5zdGFuY2UuaXRlbXNQZXJQYWdlO1xyXG4gICAgICAgIHZhciBlbWl0Q2hhbmdlID0gdGhpcy5zZXJ2aWNlLnJlZ2lzdGVyKGluc3RhbmNlKTtcclxuICAgICAgICBpZiAoIXNlcnZlclNpZGVNb2RlICYmIGNvbGxlY3Rpb24gaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICBwZXJQYWdlID0gK3BlclBhZ2UgfHwgTEFSR0VfTlVNQkVSO1xyXG4gICAgICAgICAgICBzdGFydCA9IChpbnN0YW5jZS5jdXJyZW50UGFnZSAtIDEpICogcGVyUGFnZTtcclxuICAgICAgICAgICAgZW5kID0gc3RhcnQgKyBwZXJQYWdlO1xyXG4gICAgICAgICAgICB2YXIgaXNJZGVudGljYWwgPSB0aGlzLnN0YXRlSXNJZGVudGljYWwoaWQsIGNvbGxlY3Rpb24sIHN0YXJ0LCBlbmQpO1xyXG4gICAgICAgICAgICBpZiAoaXNJZGVudGljYWwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlW2lkXS5zbGljZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBzbGljZSA9IGNvbGxlY3Rpb24uc2xpY2Uoc3RhcnQsIGVuZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVTdGF0ZShpZCwgY29sbGVjdGlvbiwgc2xpY2UsIHN0YXJ0LCBlbmQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLmNoYW5nZS5lbWl0KGlkKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzbGljZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGVtaXRDaGFuZ2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZS5jaGFuZ2UuZW1pdChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gc2F2ZSB0aGUgc3RhdGUgZm9yIHNlcnZlci1zaWRlIGNvbGxlY3Rpb24gdG8gYXZvaWQgbnVsbFxyXG4gICAgICAgICAgICAvLyBmbGFzaCBhcyBuZXcgZGF0YSBsb2Fkcy5cclxuICAgICAgICAgICAgdGhpcy5zYXZlU3RhdGUoaWQsIGNvbGxlY3Rpb24sIGNvbGxlY3Rpb24sIHN0YXJ0LCBlbmQpO1xyXG4gICAgICAgICAgICByZXR1cm4gY29sbGVjdGlvbjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYW4gUGFnaW5hdGlvbkluc3RhbmNlIG9iamVjdCwgdXNpbmcgZGVmYXVsdHMgZm9yIGFueSBvcHRpb25hbCBwcm9wZXJ0aWVzIG5vdCBzdXBwbGllZC5cclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGVQaXBlLnByb3RvdHlwZS5jcmVhdGVJbnN0YW5jZSA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBjb25maWcpIHtcclxuICAgICAgICB0aGlzLmNoZWNrQ29uZmlnKGNvbmZpZyk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGNvbmZpZy5pZCAhPSBudWxsID8gY29uZmlnLmlkIDogdGhpcy5zZXJ2aWNlLmRlZmF1bHRJZCgpLFxyXG4gICAgICAgICAgICBpdGVtc1BlclBhZ2U6ICtjb25maWcuaXRlbXNQZXJQYWdlIHx8IDAsXHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlOiArY29uZmlnLmN1cnJlbnRQYWdlIHx8IDEsXHJcbiAgICAgICAgICAgIHRvdGFsSXRlbXM6ICtjb25maWcudG90YWxJdGVtcyB8fCBjb2xsZWN0aW9uLmxlbmd0aFxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBFbnN1cmUgdGhlIGFyZ3VtZW50IHBhc3NlZCB0byB0aGUgZmlsdGVyIGNvbnRhaW5zIHRoZSByZXF1aXJlZCBwcm9wZXJ0aWVzLlxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0ZVBpcGUucHJvdG90eXBlLmNoZWNrQ29uZmlnID0gZnVuY3Rpb24gKGNvbmZpZykge1xyXG4gICAgICAgIHZhciByZXF1aXJlZCA9IFsnaXRlbXNQZXJQYWdlJywgJ2N1cnJlbnRQYWdlJ107XHJcbiAgICAgICAgdmFyIG1pc3NpbmcgPSByZXF1aXJlZC5maWx0ZXIoZnVuY3Rpb24gKHByb3ApIHsgcmV0dXJuICEocHJvcCBpbiBjb25maWcpOyB9KTtcclxuICAgICAgICBpZiAoMCA8IG1pc3NpbmcubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhZ2luYXRlUGlwZTogQXJndW1lbnQgaXMgbWlzc2luZyB0aGUgZm9sbG93aW5nIHJlcXVpcmVkIHByb3BlcnRpZXM6IFwiICsgbWlzc2luZy5qb2luKCcsICcpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUbyBhdm9pZCByZXR1cm5pbmcgYSBicmFuZCBuZXcgYXJyYXkgZWFjaCB0aW1lIHRoZSBwaXBlIGlzIHJ1biwgd2Ugc3RvcmUgdGhlIHN0YXRlIG9mIHRoZSBzbGljZWRcclxuICAgICAqIGFycmF5IGZvciBhIGdpdmVuIGlkLiBUaGlzIG1lYW5zIHRoYXQgdGhlIG5leHQgdGltZSB0aGUgcGlwZSBpcyBydW4gb24gdGhpcyBjb2xsZWN0aW9uICYgaWQsIHdlIGp1c3RcclxuICAgICAqIG5lZWQgdG8gY2hlY2sgdGhhdCB0aGUgY29sbGVjdGlvbiwgc3RhcnQgYW5kIGVuZCBwb2ludHMgYXJlIGFsbCBpZGVudGljYWwsIGFuZCBpZiBzbywgcmV0dXJuIHRoZVxyXG4gICAgICogbGFzdCBzbGljZWQgYXJyYXkuXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRlUGlwZS5wcm90b3R5cGUuc2F2ZVN0YXRlID0gZnVuY3Rpb24gKGlkLCBjb2xsZWN0aW9uLCBzbGljZSwgc3RhcnQsIGVuZCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGVbaWRdID0ge1xyXG4gICAgICAgICAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uLFxyXG4gICAgICAgICAgICBzaXplOiBjb2xsZWN0aW9uLmxlbmd0aCxcclxuICAgICAgICAgICAgc2xpY2U6IHNsaWNlLFxyXG4gICAgICAgICAgICBzdGFydDogc3RhcnQsXHJcbiAgICAgICAgICAgIGVuZDogZW5kXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEZvciBhIGdpdmVuIGlkLCByZXR1cm5zIHRydWUgaWYgdGhlIGNvbGxlY3Rpb24sIHNpemUsIHN0YXJ0IGFuZCBlbmQgdmFsdWVzIGFyZSBpZGVudGljYWwuXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRlUGlwZS5wcm90b3R5cGUuc3RhdGVJc0lkZW50aWNhbCA9IGZ1bmN0aW9uIChpZCwgY29sbGVjdGlvbiwgc3RhcnQsIGVuZCkge1xyXG4gICAgICAgIHZhciBzdGF0ZSA9IHRoaXMuc3RhdGVbaWRdO1xyXG4gICAgICAgIGlmICghc3RhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaXNNZXRhRGF0YUlkZW50aWNhbCA9IHN0YXRlLnNpemUgPT09IGNvbGxlY3Rpb24ubGVuZ3RoICYmXHJcbiAgICAgICAgICAgIHN0YXRlLnN0YXJ0ID09PSBzdGFydCAmJlxyXG4gICAgICAgICAgICBzdGF0ZS5lbmQgPT09IGVuZDtcclxuICAgICAgICBpZiAoIWlzTWV0YURhdGFJZGVudGljYWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RhdGUuc2xpY2UuZXZlcnkoZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4KSB7IHJldHVybiBlbGVtZW50ID09PSBjb2xsZWN0aW9uW3N0YXJ0ICsgaW5kZXhdOyB9KTtcclxuICAgIH07XHJcbiAgICBQYWdpbmF0ZVBpcGUgPSBfX2RlY29yYXRlJDEoW1xyXG4gICAgICAgIFBpcGUoe1xyXG4gICAgICAgICAgICBuYW1lOiAncGFnaW5hdGUnLFxyXG4gICAgICAgICAgICBwdXJlOiBmYWxzZVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbUGFnaW5hdGlvblNlcnZpY2VdKVxyXG4gICAgXSwgUGFnaW5hdGVQaXBlKTtcclxuICAgIHJldHVybiBQYWdpbmF0ZVBpcGU7XHJcbn0oKSk7XG5cbi8qKlxyXG4gKiBUaGUgZGVmYXVsdCB0ZW1wbGF0ZSBhbmQgc3R5bGVzIGZvciB0aGUgcGFnaW5hdGlvbiBsaW5rcyBhcmUgYm9ycm93ZWQgZGlyZWN0bHlcclxuICogZnJvbSBadXJiIEZvdW5kYXRpb24gNjogaHR0cDovL2ZvdW5kYXRpb24uenVyYi5jb20vc2l0ZXMvZG9jcy9wYWdpbmF0aW9uLmh0bWxcclxuICovXHJcbnZhciBERUZBVUxUX1RFTVBMQVRFID0gXCJcXG4gICAgPHBhZ2luYXRpb24tdGVtcGxhdGUgICNwPVxcXCJwYWdpbmF0aW9uQXBpXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICBbaWRdPVxcXCJpZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgW21heFNpemVdPVxcXCJtYXhTaXplXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAocGFnZUNoYW5nZSk9XFxcInBhZ2VDaGFuZ2UuZW1pdCgkZXZlbnQpXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAocGFnZUJvdW5kc0NvcnJlY3Rpb24pPVxcXCJwYWdlQm91bmRzQ29ycmVjdGlvbi5lbWl0KCRldmVudClcXFwiPlxcbiAgICA8dWwgY2xhc3M9XFxcIm5neC1wYWdpbmF0aW9uXFxcIiBcXG4gICAgICAgIHJvbGU9XFxcIm5hdmlnYXRpb25cXFwiIFxcbiAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XFxcInNjcmVlblJlYWRlclBhZ2luYXRpb25MYWJlbFxcXCIgXFxuICAgICAgICBbY2xhc3MucmVzcG9uc2l2ZV09XFxcInJlc3BvbnNpdmVcXFwiXFxuICAgICAgICAqbmdJZj1cXFwiIShhdXRvSGlkZSAmJiBwLnBhZ2VzLmxlbmd0aCA8PSAxKVxcXCI+XFxuXFxuICAgICAgICA8bGkgY2xhc3M9XFxcInBhZ2luYXRpb24tcHJldmlvdXNcXFwiIFtjbGFzcy5kaXNhYmxlZF09XFxcInAuaXNGaXJzdFBhZ2UoKVxcXCIgKm5nSWY9XFxcImRpcmVjdGlvbkxpbmtzXFxcIj4gXFxuICAgICAgICAgICAgPGEgdGFiaW5kZXg9XFxcIjBcXFwiICpuZ0lmPVxcXCIxIDwgcC5nZXRDdXJyZW50KClcXFwiIChrZXl1cC5lbnRlcik9XFxcInAucHJldmlvdXMoKVxcXCIgKGNsaWNrKT1cXFwicC5wcmV2aW91cygpXFxcIiBbYXR0ci5hcmlhLWxhYmVsXT1cXFwicHJldmlvdXNMYWJlbCArICcgJyArIHNjcmVlblJlYWRlclBhZ2VMYWJlbFxcXCI+XFxuICAgICAgICAgICAgICAgIHt7IHByZXZpb3VzTGFiZWwgfX0gPHNwYW4gY2xhc3M9XFxcInNob3ctZm9yLXNyXFxcIj57eyBzY3JlZW5SZWFkZXJQYWdlTGFiZWwgfX08L3NwYW4+XFxuICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVxcXCJwLmlzRmlyc3RQYWdlKClcXFwiPlxcbiAgICAgICAgICAgICAgICB7eyBwcmV2aW91c0xhYmVsIH19IDxzcGFuIGNsYXNzPVxcXCJzaG93LWZvci1zclxcXCI+e3sgc2NyZWVuUmVhZGVyUGFnZUxhYmVsIH19PC9zcGFuPlxcbiAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgIDwvbGk+IFxcblxcbiAgICAgICAgPGxpIGNsYXNzPVxcXCJzbWFsbC1zY3JlZW5cXFwiPlxcbiAgICAgICAgICAgIHt7IHAuZ2V0Q3VycmVudCgpIH19IC8ge3sgcC5nZXRMYXN0UGFnZSgpIH19XFxuICAgICAgICA8L2xpPlxcblxcbiAgICAgICAgPGxpIFtjbGFzcy5jdXJyZW50XT1cXFwicC5nZXRDdXJyZW50KCkgPT09IHBhZ2UudmFsdWVcXFwiIFxcbiAgICAgICAgICAgIFtjbGFzcy5lbGxpcHNpc109XFxcInBhZ2UubGFiZWwgPT09ICcuLi4nXFxcIlxcbiAgICAgICAgICAgICpuZ0Zvcj1cXFwibGV0IHBhZ2Ugb2YgcC5wYWdlc1xcXCI+XFxuICAgICAgICAgICAgPGEgdGFiaW5kZXg9XFxcIjBcXFwiIChrZXl1cC5lbnRlcik9XFxcInAuc2V0Q3VycmVudChwYWdlLnZhbHVlKVxcXCIgKGNsaWNrKT1cXFwicC5zZXRDdXJyZW50KHBhZ2UudmFsdWUpXFxcIiAqbmdJZj1cXFwicC5nZXRDdXJyZW50KCkgIT09IHBhZ2UudmFsdWVcXFwiPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwic2hvdy1mb3Itc3JcXFwiPnt7IHNjcmVlblJlYWRlclBhZ2VMYWJlbCB9fSA8L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxzcGFuPnt7IChwYWdlLmxhYmVsID09PSAnLi4uJykgPyBwYWdlLmxhYmVsIDogKHBhZ2UubGFiZWwgfCBudW1iZXI6JycpIH19PC9zcGFuPlxcbiAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVxcXCJwLmdldEN1cnJlbnQoKSA9PT0gcGFnZS52YWx1ZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzaG93LWZvci1zclxcXCI+e3sgc2NyZWVuUmVhZGVyQ3VycmVudExhYmVsIH19IDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPHNwYW4+e3sgKHBhZ2UubGFiZWwgPT09ICcuLi4nKSA/IHBhZ2UubGFiZWwgOiAocGFnZS5sYWJlbCB8IG51bWJlcjonJykgfX08L3NwYW4+IFxcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxcbiAgICAgICAgPC9saT5cXG5cXG4gICAgICAgIDxsaSBjbGFzcz1cXFwicGFnaW5hdGlvbi1uZXh0XFxcIiBbY2xhc3MuZGlzYWJsZWRdPVxcXCJwLmlzTGFzdFBhZ2UoKVxcXCIgKm5nSWY9XFxcImRpcmVjdGlvbkxpbmtzXFxcIj5cXG4gICAgICAgICAgICA8YSB0YWJpbmRleD1cXFwiMFxcXCIgKm5nSWY9XFxcIiFwLmlzTGFzdFBhZ2UoKVxcXCIgKGtleXVwLmVudGVyKT1cXFwicC5uZXh0KClcXFwiIChjbGljayk9XFxcInAubmV4dCgpXFxcIiBbYXR0ci5hcmlhLWxhYmVsXT1cXFwibmV4dExhYmVsICsgJyAnICsgc2NyZWVuUmVhZGVyUGFnZUxhYmVsXFxcIj5cXG4gICAgICAgICAgICAgICAgIHt7IG5leHRMYWJlbCB9fSA8c3BhbiBjbGFzcz1cXFwic2hvdy1mb3Itc3JcXFwiPnt7IHNjcmVlblJlYWRlclBhZ2VMYWJlbCB9fTwvc3Bhbj5cXG4gICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XFxcInAuaXNMYXN0UGFnZSgpXFxcIj5cXG4gICAgICAgICAgICAgICAgIHt7IG5leHRMYWJlbCB9fSA8c3BhbiBjbGFzcz1cXFwic2hvdy1mb3Itc3JcXFwiPnt7IHNjcmVlblJlYWRlclBhZ2VMYWJlbCB9fTwvc3Bhbj5cXG4gICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICA8L2xpPlxcblxcbiAgICA8L3VsPlxcbiAgICA8L3BhZ2luYXRpb24tdGVtcGxhdGU+XFxuICAgIFwiO1xyXG52YXIgREVGQVVMVF9TVFlMRVMgPSBcIlxcbi5uZ3gtcGFnaW5hdGlvbiB7XFxuICBtYXJnaW4tbGVmdDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07IH1cXG4gIC5uZ3gtcGFnaW5hdGlvbjo6YmVmb3JlLCAubmd4LXBhZ2luYXRpb246OmFmdGVyIHtcXG4gICAgY29udGVudDogJyAnO1xcbiAgICBkaXNwbGF5OiB0YWJsZTsgfVxcbiAgLm5neC1wYWdpbmF0aW9uOjphZnRlciB7XFxuICAgIGNsZWFyOiBib3RoOyB9XFxuICAubmd4LXBhZ2luYXRpb24gbGkge1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIG1hcmdpbi1yaWdodDogMC4wNjI1cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwOyB9XFxuICAubmd4LXBhZ2luYXRpb24gbGkge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG4gIC5uZ3gtcGFnaW5hdGlvbiBhLFxcbiAgLm5neC1wYWdpbmF0aW9uIGJ1dHRvbiB7XFxuICAgIGNvbG9yOiAjMGEwYTBhOyBcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmc6IDAuMTg3NXJlbSAwLjYyNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMDsgfVxcbiAgICAubmd4LXBhZ2luYXRpb24gYTpob3ZlcixcXG4gICAgLm5neC1wYWdpbmF0aW9uIGJ1dHRvbjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZDogI2U2ZTZlNjsgfVxcbiAgLm5neC1wYWdpbmF0aW9uIC5jdXJyZW50IHtcXG4gICAgcGFkZGluZzogMC4xODc1cmVtIDAuNjI1cmVtO1xcbiAgICBiYWNrZ3JvdW5kOiAjMjE5OWU4O1xcbiAgICBjb2xvcjogI2ZlZmVmZTtcXG4gICAgY3Vyc29yOiBkZWZhdWx0OyB9XFxuICAubmd4LXBhZ2luYXRpb24gLmRpc2FibGVkIHtcXG4gICAgcGFkZGluZzogMC4xODc1cmVtIDAuNjI1cmVtO1xcbiAgICBjb2xvcjogI2NhY2FjYTtcXG4gICAgY3Vyc29yOiBkZWZhdWx0OyB9IFxcbiAgICAubmd4LXBhZ2luYXRpb24gLmRpc2FibGVkOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfVxcbiAgLm5neC1wYWdpbmF0aW9uIGEsIC5uZ3gtcGFnaW5hdGlvbiBidXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4ubmd4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tcHJldmlvdXMgYTo6YmVmb3JlLFxcbi5uZ3gtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1wcmV2aW91cy5kaXNhYmxlZDo6YmVmb3JlIHsgXFxuICBjb250ZW50OiAnXFx1MDBBQic7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTsgfVxcblxcbi5uZ3gtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1uZXh0IGE6OmFmdGVyLFxcbi5uZ3gtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1uZXh0LmRpc2FibGVkOjphZnRlciB7XFxuICBjb250ZW50OiAnXFx1MDBCQic7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tbGVmdDogMC41cmVtOyB9XFxuXFxuLm5neC1wYWdpbmF0aW9uIC5zaG93LWZvci1zciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcXG4gIHdpZHRoOiAxcHg7XFxuICBoZWlnaHQ6IDFweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBjbGlwOiByZWN0KDAsIDAsIDAsIDApOyB9XFxuLm5neC1wYWdpbmF0aW9uIC5zbWFsbC1zY3JlZW4ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMXB4KSB7XFxuICAubmd4LXBhZ2luYXRpb24ucmVzcG9uc2l2ZSAuc21hbGwtc2NyZWVuIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9IFxcbiAgLm5neC1wYWdpbmF0aW9uLnJlc3BvbnNpdmUgbGk6bm90KC5zbWFsbC1zY3JlZW4pOm5vdCgucGFnaW5hdGlvbi1wcmV2aW91cyk6bm90KC5wYWdpbmF0aW9uLW5leHQpIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcbn1cXG4gIFwiO1xuXG52YXIgX19kZWNvcmF0ZSQyID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSQxID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxuZnVuY3Rpb24gY29lcmNlVG9Cb29sZWFuKGlucHV0KSB7XHJcbiAgICByZXR1cm4gISFpbnB1dCAmJiBpbnB1dCAhPT0gJ2ZhbHNlJztcclxufVxyXG4vKipcclxuICogVGhlIGRlZmF1bHQgcGFnaW5hdGlvbiBjb250cm9scyBjb21wb25lbnQuIEFjdHVhbGx5IGp1c3QgYSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIGEgY3VzdG9tIHRlbXBsYXRlLlxyXG4gKi9cclxudmFyIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudCgpIHtcclxuICAgICAgICB0aGlzLm1heFNpemUgPSA3O1xyXG4gICAgICAgIHRoaXMucHJldmlvdXNMYWJlbCA9ICdQcmV2aW91cyc7XHJcbiAgICAgICAgdGhpcy5uZXh0TGFiZWwgPSAnTmV4dCc7XHJcbiAgICAgICAgdGhpcy5zY3JlZW5SZWFkZXJQYWdpbmF0aW9uTGFiZWwgPSAnUGFnaW5hdGlvbic7XHJcbiAgICAgICAgdGhpcy5zY3JlZW5SZWFkZXJQYWdlTGFiZWwgPSAncGFnZSc7XHJcbiAgICAgICAgdGhpcy5zY3JlZW5SZWFkZXJDdXJyZW50TGFiZWwgPSBcIllvdSdyZSBvbiBwYWdlXCI7XHJcbiAgICAgICAgdGhpcy5wYWdlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgICAgIHRoaXMucGFnZUJvdW5kc0NvcnJlY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICAgICAgdGhpcy5fZGlyZWN0aW9uTGlua3MgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX2F1dG9IaWRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fcmVzcG9uc2l2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudC5wcm90b3R5cGUsIFwiZGlyZWN0aW9uTGlua3NcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGlyZWN0aW9uTGlua3M7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9kaXJlY3Rpb25MaW5rcyA9IGNvZXJjZVRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUGFnaW5hdGlvbkNvbnRyb2xzQ29tcG9uZW50LnByb3RvdHlwZSwgXCJhdXRvSGlkZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hdXRvSGlkZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2F1dG9IaWRlID0gY29lcmNlVG9Cb29sZWFuKHZhbHVlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQucHJvdG90eXBlLCBcInJlc3BvbnNpdmVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVzcG9uc2l2ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jlc3BvbnNpdmUgPSBjb2VyY2VUb0Jvb2xlYW4odmFsdWUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgX19kZWNvcmF0ZSQyKFtcclxuICAgICAgICBJbnB1dCgpLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcclxuICAgIF0sIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudC5wcm90b3R5cGUsIFwiaWRcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUkMihbXHJcbiAgICAgICAgSW5wdXQoKSxcclxuICAgICAgICBfX21ldGFkYXRhJDEoXCJkZXNpZ246dHlwZVwiLCBOdW1iZXIpXHJcbiAgICBdLCBQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQucHJvdG90eXBlLCBcIm1heFNpemVcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUkMihbXHJcbiAgICAgICAgSW5wdXQoKSxcclxuICAgICAgICBfX21ldGFkYXRhJDEoXCJkZXNpZ246dHlwZVwiLCBCb29sZWFuKSxcclxuICAgICAgICBfX21ldGFkYXRhJDEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbQm9vbGVhbl0pXHJcbiAgICBdLCBQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQucHJvdG90eXBlLCBcImRpcmVjdGlvbkxpbmtzXCIsIG51bGwpO1xyXG4gICAgX19kZWNvcmF0ZSQyKFtcclxuICAgICAgICBJbnB1dCgpLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMShcImRlc2lnbjp0eXBlXCIsIEJvb2xlYW4pLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtCb29sZWFuXSlcclxuICAgIF0sIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudC5wcm90b3R5cGUsIFwiYXV0b0hpZGVcIiwgbnVsbCk7XHJcbiAgICBfX2RlY29yYXRlJDIoW1xyXG4gICAgICAgIElucHV0KCksXHJcbiAgICAgICAgX19tZXRhZGF0YSQxKFwiZGVzaWduOnR5cGVcIiwgQm9vbGVhbiksXHJcbiAgICAgICAgX19tZXRhZGF0YSQxKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW0Jvb2xlYW5dKVxyXG4gICAgXSwgUGFnaW5hdGlvbkNvbnRyb2xzQ29tcG9uZW50LnByb3RvdHlwZSwgXCJyZXNwb25zaXZlXCIsIG51bGwpO1xyXG4gICAgX19kZWNvcmF0ZSQyKFtcclxuICAgICAgICBJbnB1dCgpLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcclxuICAgIF0sIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudC5wcm90b3R5cGUsIFwicHJldmlvdXNMYWJlbFwiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZSQyKFtcclxuICAgICAgICBJbnB1dCgpLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcclxuICAgIF0sIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudC5wcm90b3R5cGUsIFwibmV4dExhYmVsXCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlJDIoW1xyXG4gICAgICAgIElucHV0KCksXHJcbiAgICAgICAgX19tZXRhZGF0YSQxKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxyXG4gICAgXSwgUGFnaW5hdGlvbkNvbnRyb2xzQ29tcG9uZW50LnByb3RvdHlwZSwgXCJzY3JlZW5SZWFkZXJQYWdpbmF0aW9uTGFiZWxcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUkMihbXHJcbiAgICAgICAgSW5wdXQoKSxcclxuICAgICAgICBfX21ldGFkYXRhJDEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXHJcbiAgICBdLCBQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQucHJvdG90eXBlLCBcInNjcmVlblJlYWRlclBhZ2VMYWJlbFwiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZSQyKFtcclxuICAgICAgICBJbnB1dCgpLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcclxuICAgIF0sIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudC5wcm90b3R5cGUsIFwic2NyZWVuUmVhZGVyQ3VycmVudExhYmVsXCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlJDIoW1xyXG4gICAgICAgIE91dHB1dCgpLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMShcImRlc2lnbjp0eXBlXCIsIEV2ZW50RW1pdHRlcilcclxuICAgIF0sIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudC5wcm90b3R5cGUsIFwicGFnZUNoYW5nZVwiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZSQyKFtcclxuICAgICAgICBPdXRwdXQoKSxcclxuICAgICAgICBfX21ldGFkYXRhJDEoXCJkZXNpZ246dHlwZVwiLCBFdmVudEVtaXR0ZXIpXHJcbiAgICBdLCBQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQucHJvdG90eXBlLCBcInBhZ2VCb3VuZHNDb3JyZWN0aW9uXCIsIHZvaWQgMCk7XHJcbiAgICBQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQgPSBfX2RlY29yYXRlJDIoW1xyXG4gICAgICAgIENvbXBvbmVudCh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAncGFnaW5hdGlvbi1jb250cm9scycsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiBERUZBVUxUX1RFTVBMQVRFLFxyXG4gICAgICAgICAgICBzdHlsZXM6IFtERUZBVUxUX1NUWUxFU10sXHJcbiAgICAgICAgICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gICAgICAgICAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbiAgICAgICAgfSlcclxuICAgIF0sIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudCk7XHJcbiAgICByZXR1cm4gUGFnaW5hdGlvbkNvbnRyb2xzQ29tcG9uZW50O1xyXG59KCkpO1xuXG52YXIgX19kZWNvcmF0ZSQzID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSQyID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxuLyoqXHJcbiAqIFRoaXMgZGlyZWN0aXZlIGlzIHdoYXQgcG93ZXJzIGFsbCBwYWdpbmF0aW9uIGNvbnRyb2xzIGNvbXBvbmVudHMsIGluY2x1ZGluZyB0aGUgZGVmYXVsdCBvbmUuXHJcbiAqIEl0IGV4cG9zZXMgYW4gQVBJIHdoaWNoIGlzIGhvb2tlZCB1cCB0byB0aGUgUGFnaW5hdGlvblNlcnZpY2UgdG8ga2VlcCB0aGUgUGFnaW5hdGVQaXBlIGluIHN5bmNcclxuICogd2l0aCB0aGUgcGFnaW5hdGlvbiBjb250cm9scy5cclxuICovXHJcbnZhciBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUoc2VydmljZSwgY2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc2VydmljZSA9IHNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZiA9IGNoYW5nZURldGVjdG9yUmVmO1xyXG4gICAgICAgIHRoaXMubWF4U2l6ZSA9IDc7XHJcbiAgICAgICAgdGhpcy5wYWdlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgICAgIHRoaXMucGFnZUJvdW5kc0NvcnJlY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICAgICAgdGhpcy5wYWdlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlU3ViID0gdGhpcy5zZXJ2aWNlLmNoYW5nZVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMuaWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVQYWdlTGlua3MoKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5pZCA9IHRoaXMuc2VydmljZS5kZWZhdWx0SWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51cGRhdGVQYWdlTGlua3MoKTtcclxuICAgIH07XHJcbiAgICBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUucHJvdG90eXBlLm5nT25DaGFuZ2VzID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVBhZ2VMaW5rcygpO1xyXG4gICAgfTtcclxuICAgIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUubmdPbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VTdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEdvIHRvIHRoZSBwcmV2aW91cyBwYWdlXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUucHJldmlvdXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jaGVja1ZhbGlkSWQoKTtcclxuICAgICAgICB0aGlzLnNldEN1cnJlbnQodGhpcy5nZXRDdXJyZW50KCkgLSAxKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEdvIHRvIHRoZSBuZXh0IHBhZ2VcclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2hlY2tWYWxpZElkKCk7XHJcbiAgICAgICAgdGhpcy5zZXRDdXJyZW50KHRoaXMuZ2V0Q3VycmVudCgpICsgMSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgY3VycmVudCBwYWdlIGlzIGZpcnN0IHBhZ2VcclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLnByb3RvdHlwZS5pc0ZpcnN0UGFnZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW50KCkgPT09IDE7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgY3VycmVudCBwYWdlIGlzIGxhc3QgcGFnZVxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUucHJvdG90eXBlLmlzTGFzdFBhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TGFzdFBhZ2UoKSA9PT0gdGhpcy5nZXRDdXJyZW50KCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdGhlIGN1cnJlbnQgcGFnZSBudW1iZXIuXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUuc2V0Q3VycmVudCA9IGZ1bmN0aW9uIChwYWdlKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlQ2hhbmdlLmVtaXQocGFnZSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGN1cnJlbnQgcGFnZSBudW1iZXIuXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUuZ2V0Q3VycmVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmdldEN1cnJlbnRQYWdlKHRoaXMuaWQpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgbGFzdCBwYWdlIG51bWJlclxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUucHJvdG90eXBlLmdldExhc3RQYWdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBpbnN0ID0gdGhpcy5zZXJ2aWNlLmdldEluc3RhbmNlKHRoaXMuaWQpO1xyXG4gICAgICAgIGlmIChpbnN0LnRvdGFsSXRlbXMgPCAxKSB7XHJcbiAgICAgICAgICAgIC8vIHdoZW4gdGhlcmUgYXJlIDAgb3IgZmV3ZXIgKGFuIGVycm9yIGNhc2UpIGl0ZW1zLCB0aGVyZSBhcmUgbm8gXCJwYWdlc1wiIGFzIHN1Y2gsXHJcbiAgICAgICAgICAgIC8vIGJ1dCBpdCBtYWtlcyBzZW5zZSB0byBjb25zaWRlciBhIHNpbmdsZSwgZW1wdHkgcGFnZSBhcyB0aGUgbGFzdCBwYWdlLlxyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbChpbnN0LnRvdGFsSXRlbXMgLyBpbnN0Lml0ZW1zUGVyUGFnZSk7XHJcbiAgICB9O1xyXG4gICAgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLnByb3RvdHlwZS5nZXRUb3RhbEl0ZW1zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuZ2V0SW5zdGFuY2UodGhpcy5pZCkudG90YWxJdGVtcztcclxuICAgIH07XHJcbiAgICBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUucHJvdG90eXBlLmNoZWNrVmFsaWRJZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5zZXJ2aWNlLmdldEluc3RhbmNlKHRoaXMuaWQpLmlkID09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlOiB0aGUgc3BlY2lmaWVkIGlkIFxcXCJcIiArIHRoaXMuaWQgKyBcIlxcXCIgZG9lcyBub3QgbWF0Y2ggYW55IHJlZ2lzdGVyZWQgUGFnaW5hdGlvbkluc3RhbmNlXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgdGhlIHBhZ2UgbGlua3MgYW5kIGNoZWNrcyB0aGF0IHRoZSBjdXJyZW50IHBhZ2UgaXMgdmFsaWQuIFNob3VsZCBydW4gd2hlbmV2ZXIgdGhlXHJcbiAgICAgKiBQYWdpbmF0aW9uU2VydmljZS5jaGFuZ2Ugc3RyZWFtIGVtaXRzIGEgdmFsdWUgbWF0Y2hpbmcgdGhlIGN1cnJlbnQgSUQsIG9yIHdoZW4gYW55IG9mIHRoZVxyXG4gICAgICogaW5wdXQgdmFsdWVzIGNoYW5nZXMuXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUudXBkYXRlUGFnZUxpbmtzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGluc3QgPSB0aGlzLnNlcnZpY2UuZ2V0SW5zdGFuY2UodGhpcy5pZCk7XHJcbiAgICAgICAgdmFyIGNvcnJlY3RlZEN1cnJlbnRQYWdlID0gdGhpcy5vdXRPZkJvdW5kQ29ycmVjdGlvbihpbnN0KTtcclxuICAgICAgICBpZiAoY29ycmVjdGVkQ3VycmVudFBhZ2UgIT09IGluc3QuY3VycmVudFBhZ2UpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5wYWdlQm91bmRzQ29ycmVjdGlvbi5lbWl0KGNvcnJlY3RlZEN1cnJlbnRQYWdlKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLnBhZ2VzID0gX3RoaXMuY3JlYXRlUGFnZUFycmF5KGluc3QuY3VycmVudFBhZ2UsIGluc3QuaXRlbXNQZXJQYWdlLCBpbnN0LnRvdGFsSXRlbXMsIF90aGlzLm1heFNpemUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZXMgPSB0aGlzLmNyZWF0ZVBhZ2VBcnJheShpbnN0LmN1cnJlbnRQYWdlLCBpbnN0Lml0ZW1zUGVyUGFnZSwgaW5zdC50b3RhbEl0ZW1zLCB0aGlzLm1heFNpemUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyB0aGF0IHRoZSBpbnN0YW5jZS5jdXJyZW50UGFnZSBwcm9wZXJ0eSBpcyB3aXRoaW4gYm91bmRzIGZvciB0aGUgY3VycmVudCBwYWdlIHJhbmdlLlxyXG4gICAgICogSWYgbm90LCByZXR1cm4gYSBjb3JyZWN0IHZhbHVlIGZvciBjdXJyZW50UGFnZSwgb3IgdGhlIGN1cnJlbnQgdmFsdWUgaWYgT0suXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUub3V0T2ZCb3VuZENvcnJlY3Rpb24gPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcclxuICAgICAgICB2YXIgdG90YWxQYWdlcyA9IE1hdGguY2VpbChpbnN0YW5jZS50b3RhbEl0ZW1zIC8gaW5zdGFuY2UuaXRlbXNQZXJQYWdlKTtcclxuICAgICAgICBpZiAodG90YWxQYWdlcyA8IGluc3RhbmNlLmN1cnJlbnRQYWdlICYmIDAgPCB0b3RhbFBhZ2VzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0b3RhbFBhZ2VzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpbnN0YW5jZS5jdXJyZW50UGFnZSA8IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZS5jdXJyZW50UGFnZTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgUGFnZSBvYmplY3RzIHRvIHVzZSBpbiB0aGUgcGFnaW5hdGlvbiBjb250cm9scy5cclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLnByb3RvdHlwZS5jcmVhdGVQYWdlQXJyYXkgPSBmdW5jdGlvbiAoY3VycmVudFBhZ2UsIGl0ZW1zUGVyUGFnZSwgdG90YWxJdGVtcywgcGFnaW5hdGlvblJhbmdlKSB7XHJcbiAgICAgICAgLy8gcGFnaW5hdGlvblJhbmdlIGNvdWxkIGJlIGEgc3RyaW5nIGlmIHBhc3NlZCBmcm9tIGF0dHJpYnV0ZSwgc28gY2FzdCB0byBudW1iZXIuXHJcbiAgICAgICAgcGFnaW5hdGlvblJhbmdlID0gK3BhZ2luYXRpb25SYW5nZTtcclxuICAgICAgICB2YXIgcGFnZXMgPSBbXTtcclxuICAgICAgICB2YXIgdG90YWxQYWdlcyA9IE1hdGguY2VpbCh0b3RhbEl0ZW1zIC8gaXRlbXNQZXJQYWdlKTtcclxuICAgICAgICB2YXIgaGFsZldheSA9IE1hdGguY2VpbChwYWdpbmF0aW9uUmFuZ2UgLyAyKTtcclxuICAgICAgICB2YXIgaXNTdGFydCA9IGN1cnJlbnRQYWdlIDw9IGhhbGZXYXk7XHJcbiAgICAgICAgdmFyIGlzRW5kID0gdG90YWxQYWdlcyAtIGhhbGZXYXkgPCBjdXJyZW50UGFnZTtcclxuICAgICAgICB2YXIgaXNNaWRkbGUgPSAhaXNTdGFydCAmJiAhaXNFbmQ7XHJcbiAgICAgICAgdmFyIGVsbGlwc2VzTmVlZGVkID0gcGFnaW5hdGlvblJhbmdlIDwgdG90YWxQYWdlcztcclxuICAgICAgICB2YXIgaSA9IDE7XHJcbiAgICAgICAgd2hpbGUgKGkgPD0gdG90YWxQYWdlcyAmJiBpIDw9IHBhZ2luYXRpb25SYW5nZSkge1xyXG4gICAgICAgICAgICB2YXIgbGFiZWwgPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHZhciBwYWdlTnVtYmVyID0gdGhpcy5jYWxjdWxhdGVQYWdlTnVtYmVyKGksIGN1cnJlbnRQYWdlLCBwYWdpbmF0aW9uUmFuZ2UsIHRvdGFsUGFnZXMpO1xyXG4gICAgICAgICAgICB2YXIgb3BlbmluZ0VsbGlwc2VzTmVlZGVkID0gKGkgPT09IDIgJiYgKGlzTWlkZGxlIHx8IGlzRW5kKSk7XHJcbiAgICAgICAgICAgIHZhciBjbG9zaW5nRWxsaXBzZXNOZWVkZWQgPSAoaSA9PT0gcGFnaW5hdGlvblJhbmdlIC0gMSAmJiAoaXNNaWRkbGUgfHwgaXNTdGFydCkpO1xyXG4gICAgICAgICAgICBpZiAoZWxsaXBzZXNOZWVkZWQgJiYgKG9wZW5pbmdFbGxpcHNlc05lZWRlZCB8fCBjbG9zaW5nRWxsaXBzZXNOZWVkZWQpKSB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbCA9ICcuLi4nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGFiZWwgPSBwYWdlTnVtYmVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBhZ2VzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IGxhYmVsLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHBhZ2VOdW1iZXJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGkrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhZ2VzO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogR2l2ZW4gdGhlIHBvc2l0aW9uIGluIHRoZSBzZXF1ZW5jZSBvZiBwYWdpbmF0aW9uIGxpbmtzIFtpXSxcclxuICAgICAqIGZpZ3VyZSBvdXQgd2hhdCBwYWdlIG51bWJlciBjb3JyZXNwb25kcyB0byB0aGF0IHBvc2l0aW9uLlxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUucHJvdG90eXBlLmNhbGN1bGF0ZVBhZ2VOdW1iZXIgPSBmdW5jdGlvbiAoaSwgY3VycmVudFBhZ2UsIHBhZ2luYXRpb25SYW5nZSwgdG90YWxQYWdlcykge1xyXG4gICAgICAgIHZhciBoYWxmV2F5ID0gTWF0aC5jZWlsKHBhZ2luYXRpb25SYW5nZSAvIDIpO1xyXG4gICAgICAgIGlmIChpID09PSBwYWdpbmF0aW9uUmFuZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRvdGFsUGFnZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGkgPT09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHBhZ2luYXRpb25SYW5nZSA8IHRvdGFsUGFnZXMpIHtcclxuICAgICAgICAgICAgaWYgKHRvdGFsUGFnZXMgLSBoYWxmV2F5IDwgY3VycmVudFBhZ2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0b3RhbFBhZ2VzIC0gcGFnaW5hdGlvblJhbmdlICsgaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChoYWxmV2F5IDwgY3VycmVudFBhZ2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50UGFnZSAtIGhhbGZXYXkgKyBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBfX2RlY29yYXRlJDMoW1xyXG4gICAgICAgIElucHV0KCksXHJcbiAgICAgICAgX19tZXRhZGF0YSQyKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxyXG4gICAgXSwgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJpZFwiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZSQzKFtcclxuICAgICAgICBJbnB1dCgpLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMihcImRlc2lnbjp0eXBlXCIsIE51bWJlcilcclxuICAgIF0sIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUsIFwibWF4U2l6ZVwiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZSQzKFtcclxuICAgICAgICBPdXRwdXQoKSxcclxuICAgICAgICBfX21ldGFkYXRhJDIoXCJkZXNpZ246dHlwZVwiLCBFdmVudEVtaXR0ZXIpXHJcbiAgICBdLCBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUucHJvdG90eXBlLCBcInBhZ2VDaGFuZ2VcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUkMyhbXHJcbiAgICAgICAgT3V0cHV0KCksXHJcbiAgICAgICAgX19tZXRhZGF0YSQyKFwiZGVzaWduOnR5cGVcIiwgRXZlbnRFbWl0dGVyKVxyXG4gICAgXSwgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJwYWdlQm91bmRzQ29ycmVjdGlvblwiLCB2b2lkIDApO1xyXG4gICAgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlID0gX19kZWNvcmF0ZSQzKFtcclxuICAgICAgICBEaXJlY3RpdmUoe1xyXG4gICAgICAgICAgICBzZWxlY3RvcjogJ3BhZ2luYXRpb24tdGVtcGxhdGUsW3BhZ2luYXRpb24tdGVtcGxhdGVdJyxcclxuICAgICAgICAgICAgZXhwb3J0QXM6ICdwYWdpbmF0aW9uQXBpJ1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMihcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtQYWdpbmF0aW9uU2VydmljZSxcclxuICAgICAgICAgICAgQ2hhbmdlRGV0ZWN0b3JSZWZdKVxyXG4gICAgXSwgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlKTtcclxuICAgIHJldHVybiBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmU7XHJcbn0oKSk7XG5cbnZhciBfX2RlY29yYXRlID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgTmd4UGFnaW5hdGlvbk1vZHVsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE5neFBhZ2luYXRpb25Nb2R1bGUoKSB7XHJcbiAgICB9XHJcbiAgICBOZ3hQYWdpbmF0aW9uTW9kdWxlID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgTmdNb2R1bGUoe1xyXG4gICAgICAgICAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICAgICAgICAgICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgICAgICAgICBQYWdpbmF0ZVBpcGUsXHJcbiAgICAgICAgICAgICAgICBQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmVcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbUGFnaW5hdGlvblNlcnZpY2VdLFxyXG4gICAgICAgICAgICBleHBvcnRzOiBbUGFnaW5hdGVQaXBlLCBQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQsIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZV1cclxuICAgICAgICB9KVxyXG4gICAgXSwgTmd4UGFnaW5hdGlvbk1vZHVsZSk7XHJcbiAgICByZXR1cm4gTmd4UGFnaW5hdGlvbk1vZHVsZTtcclxufSgpKTtcblxuLyoqXHJcbiAqIEdlbmVyYXRlZCBidW5kbGUgaW5kZXguIERvIG5vdCBlZGl0LlxyXG4gKi9cblxuZXhwb3J0IHsgREVGQVVMVF9TVFlMRVMgYXMgybViLCBERUZBVUxUX1RFTVBMQVRFIGFzIMm1YSwgTmd4UGFnaW5hdGlvbk1vZHVsZSwgUGFnaW5hdGlvblNlcnZpY2UsIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudCwgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLCBQYWdpbmF0ZVBpcGUgfTtcbiJdfQ==

    /***/

  },

  /***/
  "./src/app/main/blog/article-data/article-data.ts":
  /*!********************************************************!*\
    !*** ./src/app/main/blog/article-data/article-data.ts ***!
    \********************************************************/

  /*! exports provided: Articles */

  /***/
  function srcAppMainBlogArticleDataArticleDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Articles", function () {
      return Articles;
    });

    var Articles = [{
      date: 'April 14, 2018',
      description: "Dieting is hard, especailly when you need to\n    restrain yourself from all the sugary treats you enjoy.\n    I've put together way to still satisfy your cravings without kicking you out of ketosis.",
      image: 'assets/photoshop/article-cover/keto-candy-1.jpg',
      header: 'Candy for a Keto Diet',
      link: 'candy-keto-diet'
    }, {
      date: 'April 14, 2018',
      description: "Welcome to my list of the World's Top Candy Companies. The companies\n    are ranked based on the annual net sales.",
      image: 'assets/photoshop/article-cover/lots-of-candy.jpg',
      header: 'Top 5 Candy Companies in 2020',
      link: 'top-10-candy-companies'
    }, {
      date: 'April 14, 2018',
      description: "A new sold out sour candy? Whattt?\n                      Could there really be sour candy that actually delivers?\n                      Or is it just is over-hyped?",
      image: 'assets/photoshop/article-cover/sour-strips-1.jpg',
      header: 'My Journey into Sour Strips',
      link: 'my-journey-into-sour-strips'
    }];
    /***/
  },

  /***/
  "./src/app/main/blog/blog-routing.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/main/blog/blog-routing.module.ts ***!
    \**************************************************/

  /*! exports provided: BlogRoutingModule */

  /***/
  function srcAppMainBlogBlogRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogRoutingModule", function () {
      return BlogRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _blog_blog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../blog/blog.component */
    "./src/app/main/blog/blog.component.ts");
    /* harmony import */


    var _pages_keto_diet_keto_diet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/keto-diet/keto-diet.component */
    "./src/app/main/blog/pages/keto-diet/keto-diet.component.ts");
    /* harmony import */


    var _pages_sour_strips_discovery_sour_strips_discovery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/sour-strips-discovery/sour-strips-discovery.component */
    "./src/app/main/blog/pages/sour-strips-discovery/sour-strips-discovery.component.ts");
    /* harmony import */


    var _pages_top_25_top_25_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/top-25/top-25.component */
    "./src/app/main/blog/pages/top-25/top-25.component.ts");

    var routes = [{
      path: '',
      component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_2__["BlogComponent"]
    }, {
      path: 'my-journey-into-sour-strips',
      component: _pages_sour_strips_discovery_sour_strips_discovery_component__WEBPACK_IMPORTED_MODULE_4__["SourStripsDiscoveryComponent"]
    }, {
      path: 'top-10-candy-companies',
      component: _pages_top_25_top_25_component__WEBPACK_IMPORTED_MODULE_5__["Top25Component"]
    }, {
      path: 'candy-keto-diet',
      component: _pages_keto_diet_keto_diet_component__WEBPACK_IMPORTED_MODULE_3__["KetoDietComponent"]
    }];

    var BlogRoutingModule = function BlogRoutingModule() {
      _classCallCheck(this, BlogRoutingModule);
    };

    BlogRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: BlogRoutingModule
    });
    BlogRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function BlogRoutingModule_Factory(t) {
        return new (t || BlogRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BlogRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/blog/blog.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/main/blog/blog.component.ts ***!
    \*********************************************/

  /*! exports provided: BlogComponent */

  /***/
  function srcAppMainBlogBlogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogComponent", function () {
      return BlogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _article_data_article_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./article-data/article-data */
    "./src/app/main/blog/article-data/article-data.ts");
    /* harmony import */


    var _components_article_overview_article_overview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/article-overview/article-overview.component */
    "./src/app/main/blog/components/article-overview/article-overview.component.ts");

    var BlogComponent = function BlogComponent() {
      _classCallCheck(this, BlogComponent);

      this.articles = _article_data_article_data__WEBPACK_IMPORTED_MODULE_1__["Articles"];
    };

    BlogComponent.ɵfac = function BlogComponent_Factory(t) {
      return new (t || BlogComponent)();
    };

    BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlogComponent,
      selectors: [["candy-blog"]],
      decls: 2,
      vars: 1,
      consts: [[1, "blog_article", "blog_grid_module"], [3, "articles"]],
      template: function BlogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "candy-article-overview", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("articles", ctx.articles);
        }
      },
      directives: [_components_article_overview_article_overview_component__WEBPACK_IMPORTED_MODULE_2__["ArticleOverviewComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vYmxvZy9ibG9nLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'candy-blog',
          templateUrl: './blog.component.html',
          styleUrls: ['./blog.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/blog/blog.module.ts":
  /*!******************************************!*\
    !*** ./src/app/main/blog/blog.module.ts ***!
    \******************************************/

  /*! exports provided: BlogModule */

  /***/
  function srcAppMainBlogBlogModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogModule", function () {
      return BlogModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
    /* harmony import */


    var ngx_youtube_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-youtube-player */
    "./node_modules/ngx-youtube-player/__ivy_ngcc__/fesm2015/ngx-youtube-player.js");
    /* harmony import */


    var _core_components_youtube_player_youtube_player_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../core/components/youtube-player/youtube-player.component */
    "./src/app/core/components/youtube-player/youtube-player.component.ts");
    /* harmony import */


    var _blog_components_article_overview_article_overview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../blog/components/article-overview/article-overview.component */
    "./src/app/main/blog/components/article-overview/article-overview.component.ts");
    /* harmony import */


    var _company_company_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../company/company.component */
    "./src/app/main/company/company.component.ts");
    /* harmony import */


    var _company_ferrero_ferrero_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../company/ferrero/ferrero.component */
    "./src/app/main/company/ferrero/ferrero.component.ts");
    /* harmony import */


    var _company_hersheys_hersheys_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../company/hersheys/hersheys.component */
    "./src/app/main/company/hersheys/hersheys.component.ts");
    /* harmony import */


    var _company_mars_mars_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../company/mars/mars.component */
    "./src/app/main/company/mars/mars.component.ts");
    /* harmony import */


    var _company_meiji_meiji_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../company/meiji/meiji.component */
    "./src/app/main/company/meiji/meiji.component.ts");
    /* harmony import */


    var _company_mondelez_mondelez_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../company/mondelez/mondelez.component */
    "./src/app/main/company/mondelez/mondelez.component.ts");
    /* harmony import */


    var _company_nestle_nestle_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../company/nestle/nestle.component */
    "./src/app/main/company/nestle/nestle.component.ts");
    /* harmony import */


    var _blog_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./blog-routing.module */
    "./src/app/main/blog/blog-routing.module.ts");
    /* harmony import */


    var _blog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./blog.component */
    "./src/app/main/blog/blog.component.ts");
    /* harmony import */


    var _pages_keto_diet_keto_diet_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pages/keto-diet/keto-diet.component */
    "./src/app/main/blog/pages/keto-diet/keto-diet.component.ts");
    /* harmony import */


    var _pages_sour_strips_discovery_sour_strips_discovery_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./pages/sour-strips-discovery/sour-strips-discovery.component */
    "./src/app/main/blog/pages/sour-strips-discovery/sour-strips-discovery.component.ts");
    /* harmony import */


    var _pages_top_25_top_25_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./pages/top-25/top-25.component */
    "./src/app/main/blog/pages/top-25/top-25.component.ts"); // <-- import the module


    var pages = [_pages_sour_strips_discovery_sour_strips_discovery_component__WEBPACK_IMPORTED_MODULE_16__["SourStripsDiscoveryComponent"], _pages_top_25_top_25_component__WEBPACK_IMPORTED_MODULE_17__["Top25Component"], _pages_keto_diet_keto_diet_component__WEBPACK_IMPORTED_MODULE_15__["KetoDietComponent"]];

    var BlogModule = function BlogModule() {
      _classCallCheck(this, BlogModule);
    };

    BlogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: BlogModule
    });
    BlogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function BlogModule_Factory(t) {
        return new (t || BlogModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _blog_routing_module__WEBPACK_IMPORTED_MODULE_13__["BlogRoutingModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_2__["NgxPaginationModule"], // CoreModule,
      // FormsModule,
      // ReactiveFormsModule,
      ngx_youtube_player__WEBPACK_IMPORTED_MODULE_3__["NgxYoutubePlayerModule"].forRoot()]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BlogModule, {
        declarations: [_pages_sour_strips_discovery_sour_strips_discovery_component__WEBPACK_IMPORTED_MODULE_16__["SourStripsDiscoveryComponent"], _pages_top_25_top_25_component__WEBPACK_IMPORTED_MODULE_17__["Top25Component"], _pages_keto_diet_keto_diet_component__WEBPACK_IMPORTED_MODULE_15__["KetoDietComponent"], _blog_component__WEBPACK_IMPORTED_MODULE_14__["BlogComponent"], _blog_components_article_overview_article_overview_component__WEBPACK_IMPORTED_MODULE_5__["ArticleOverviewComponent"], _company_company_component__WEBPACK_IMPORTED_MODULE_6__["CompanyComponent"], _company_mars_mars_component__WEBPACK_IMPORTED_MODULE_9__["MarsComponent"], _company_ferrero_ferrero_component__WEBPACK_IMPORTED_MODULE_7__["FerreroComponent"], _company_mondelez_mondelez_component__WEBPACK_IMPORTED_MODULE_11__["MondelezComponent"], _company_meiji_meiji_component__WEBPACK_IMPORTED_MODULE_10__["MeijiComponent"], _company_hersheys_hersheys_component__WEBPACK_IMPORTED_MODULE_8__["HersheysComponent"], _company_nestle_nestle_component__WEBPACK_IMPORTED_MODULE_12__["NestleComponent"], _core_components_youtube_player_youtube_player_component__WEBPACK_IMPORTED_MODULE_4__["YoutubePlayerComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _blog_routing_module__WEBPACK_IMPORTED_MODULE_13__["BlogRoutingModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_2__["NgxPaginationModule"], ngx_youtube_player__WEBPACK_IMPORTED_MODULE_3__["NgxYoutubePlayerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BlogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _blog_routing_module__WEBPACK_IMPORTED_MODULE_13__["BlogRoutingModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_2__["NgxPaginationModule"], // CoreModule,
          // FormsModule,
          // ReactiveFormsModule,
          ngx_youtube_player__WEBPACK_IMPORTED_MODULE_3__["NgxYoutubePlayerModule"].forRoot()],
          declarations: [].concat(pages, [_blog_component__WEBPACK_IMPORTED_MODULE_14__["BlogComponent"], _blog_components_article_overview_article_overview_component__WEBPACK_IMPORTED_MODULE_5__["ArticleOverviewComponent"], _company_company_component__WEBPACK_IMPORTED_MODULE_6__["CompanyComponent"], _company_mars_mars_component__WEBPACK_IMPORTED_MODULE_9__["MarsComponent"], _company_ferrero_ferrero_component__WEBPACK_IMPORTED_MODULE_7__["FerreroComponent"], _company_mondelez_mondelez_component__WEBPACK_IMPORTED_MODULE_11__["MondelezComponent"], _company_meiji_meiji_component__WEBPACK_IMPORTED_MODULE_10__["MeijiComponent"], _company_hersheys_hersheys_component__WEBPACK_IMPORTED_MODULE_8__["HersheysComponent"], _company_nestle_nestle_component__WEBPACK_IMPORTED_MODULE_12__["NestleComponent"], _core_components_youtube_player_youtube_player_component__WEBPACK_IMPORTED_MODULE_4__["YoutubePlayerComponent"]])
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/blog/components/article-overview/article-overview.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/main/blog/components/article-overview/article-overview.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: ArticleOverviewComponent */

  /***/
  function srcAppMainBlogComponentsArticleOverviewArticleOverviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleOverviewComponent", function () {
      return ArticleOverviewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function ArticleOverviewComponent_div_0_div_1_hr_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");
      }
    }

    var _c0 = function _c0(a1) {
      return ["/", a1];
    };

    function ArticleOverviewComponent_div_0_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Read More \xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ArticleOverviewComponent_div_0_div_1_hr_17_Template, 1, 0, "hr", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var article_r2 = ctx.$implicit;
        var i_r3 = ctx.index;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", article_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, article_r2.link));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", article_r2.header, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r2.date);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r2.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, article_r2.link));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r3 !== ctx_r1.articles.length - 1);
      }
    }

    function ArticleOverviewComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ArticleOverviewComponent_div_0_div_1_Template, 18, 11, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.articles);
      }
    }

    var ArticleOverviewComponent = function ArticleOverviewComponent() {
      _classCallCheck(this, ArticleOverviewComponent);
    };

    ArticleOverviewComponent.ɵfac = function ArticleOverviewComponent_Factory(t) {
      return new (t || ArticleOverviewComponent)();
    };

    ArticleOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ArticleOverviewComponent,
      selectors: [["candy-article-overview"]],
      inputs: {
        articles: "articles"
      },
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], ["class", "blog_post ", 4, "ngFor", "ngForOf"], [1, "blog_post"], [1, "blog_img"], ["alt", "blog_img1", 3, "src"], [1, "blog_content"], [1, "blog_text"], [1, "blog_heading"], [3, "routerLink"], [1, "blog_meta"], [1, "fas", "fa-calendar"], [1, "btn", "btn-default", "btn-sm", 3, "routerLink"], [1, "fas", "fa-play"]],
      template: function ArticleOverviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ArticleOverviewComponent_div_0_Template, 2, 1, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.articles);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: ["i[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n\n.fa-calendar[_ngcontent-%COMP%] {\n  color: #ff324d;\n  margin-right: 5px;\n}\n\nh5[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  cursor: pointer;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-height: 425px;\n  width: auto;\n}\n\nh5[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.blog_meta[_ngcontent-%COMP%] {\n  margin: 2% 0;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 1% 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9ibG9nL2NvbXBvbmVudHMvYXJ0aWNsZS1vdmVydmlldy9DOlxcVXNlcnNcXGFzaGVyMTE4XFxEb2N1bWVudHNcXGNhbmR5LWJsb2cvc3JjXFxhcHBcXG1haW5cXGJsb2dcXGNvbXBvbmVudHNcXGFydGljbGUtb3ZlcnZpZXdcXGFydGljbGUtb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vYmxvZy9jb21wb25lbnRzL2FydGljbGUtb3ZlcnZpZXcvYXJ0aWNsZS1vdmVydmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLDBCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL2Jsb2cvY29tcG9uZW50cy9hcnRpY2xlLW92ZXJ2aWV3L2FydGljbGUtb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpIHtcclxuICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbn1cclxuXHJcbi5mYS1jYWxlbmRhciB7XHJcbiAgY29sb3I6ICNmZjMyNGQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbmg1IHtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgbWF4LWhlaWdodDogNDI1cHg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbmg1IHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbnAge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmJsb2dfbWV0YSB7XHJcbiAgbWFyZ2luOiAyJSAwO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIG1hcmdpbjogMSUgMDtcclxufVxyXG4iLCJpIHtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuXG4uZmEtY2FsZW5kYXIge1xuICBjb2xvcjogI2ZmMzI0ZDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbmg1IHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaW1nIHtcbiAgbWF4LWhlaWdodDogNDI1cHg7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG5oNSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmJsb2dfbWV0YSB7XG4gIG1hcmdpbjogMiUgMDtcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luOiAxJSAwO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleOverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'candy-article-overview',
          templateUrl: './article-overview.component.html',
          styleUrls: ['./article-overview.component.scss']
        }]
      }], null, {
        articles: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/main/blog/pages/keto-diet/keto-diet.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/main/blog/pages/keto-diet/keto-diet.component.ts ***!
    \******************************************************************/

  /*! exports provided: KetoDietComponent */

  /***/
  function srcAppMainBlogPagesKetoDietKetoDietComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KetoDietComponent", function () {
      return KetoDietComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _article_data_article_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../article-data/article-data */
    "./src/app/main/blog/article-data/article-data.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _core_components_youtube_player_youtube_player_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../core/components/youtube-player/youtube-player.component */
    "./src/app/core/components/youtube-player/youtube-player.component.ts");

    function KetoDietComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Kind Bar Display");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " by ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Mike Mozart");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Licensed under ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Attribution 2.0 Generic (CC BY 2.0)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " What is Keto? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " A ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "keto diet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "(short for ketogenic diet) is based on eating a low-carb, high-fat diet, with a moderate amount of protein. By reducing your carb intake and replacing it with fat, this puts your body into a metabolic state called ketosis. This allows your body to properly burn fat for energy, leading to weight loss and good energy levels for the brain. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " So in order to figure out how to add candy to our diet, we first need to check if the desired candy has the makeup of a keto-friendly candy. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Dark Chocolate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " I find that Dark Chocolate is one of those things that people completely either love it or hate it. But if you're like me and enjoy dark chocolate regularly, this might be worth adding into your diet. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " The build-up of ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Dark chocolate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " is primarily made up of fat and sugar mixed with cocoa. Unlike milk chocolate, dark chocolate is made with little to no milk solids and contains less sugar and more cocoa. The higher the cocoa percentage in the chocolate, the less sugar it has. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Calculating your carbs");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " It's important to ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "calculate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " your daily carb intake when factoring dark chocolate into your diet. 1 ounce(28 grams) of dark chocolate with 70%-85% cocoa contains up to 13 grams of carbs and 3 grams of fiber, totalling about 10 grams of net carbs. Here are a few examples to give you an idea of what to expect. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " At a low end of cocoa content(70%), ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Pascha Organic Bar Zero Dark Chocolate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " has 11g of fat, 13g of carbs, 0g of sugar, and 2g of protein. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " On the high end, nearing almost 100%, one of the richest dark chocolate is ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Excellence Cocoa 99%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " . This chocolate bar has 51g of fat,1g of sugar, 4.7g of carbohydratesm and 15g of protein. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Home made recipes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " You won't find much keto-friendly candy at the store, but its really easy to make your keto tailored candy to go with your diet. Personally I love eating haribo gummy bears, but the 14 grams of sugar in each serving is a real let down when I'm trying to get into shape. Check out this video to learn how to make home made keto gummy candy! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "candy-youtube-player", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Keto Candy Recipes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Of course, let's not forget keto candy recipes by other great bloggers! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "ul", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " 37 Keto Candy Recipes to satisfy your sweethtooth by Bulletproof ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " 36 Best low carb candy recipes by All Day I Dream About Food ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Keto Butterscotch Candy by Better Than Bread Keto");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " Low Carb Turtle Reciple by Low Carb Maven ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Keto Candy Bar Fat Bombs by How to This and That ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Buttery Walnut Toffee Candy by Joy Filled Eats");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Keto Candy: 3 Ingredient Keto Almond Bark Recipe (Low Carb) by beaming baker");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Divine Chocolate Dream Keto Candy Recipe by Low Carb Inspirations");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " 3 Ingredient Keto Chocolate Coconut Cups (Paleo, Vegan, Sugar Free) by The Big Man's World ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.article.header, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.article.date);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.article.description, " But before looking jumping straight into what sweets you can still eat, let's first discuss what constitues a keto diet. ");
      }
    }

    var KetoDietComponent = /*#__PURE__*/function () {
      function KetoDietComponent() {
        _classCallCheck(this, KetoDietComponent);
      }

      _createClass(KetoDietComponent, [{
        key: "article",
        get: function get() {
          return _article_data_article_data__WEBPACK_IMPORTED_MODULE_1__["Articles"].find(function (article) {
            return article.header === 'Candy for a Keto Diet';
          });
        }
      }]);

      return KetoDietComponent;
    }();

    KetoDietComponent.ɵfac = function KetoDietComponent_Factory(t) {
      return new (t || KetoDietComponent)();
    };

    KetoDietComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: KetoDietComponent,
      selectors: [["candy-keto-diet"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [1, "blog_post"], [1, "blog_content"], [1, "blog_text"], [1, "blog_heading"], [1, "blog_meta"], [1, "fas", "fa-calendar"], [1, "topic-section"], [1, "licensed-img"], ["src", "assets/photoshop/candy/kind-bar.jpg", "alt", ""], ["href", "https://www.flickr.com/photos/jeepersmedia/16197555730/in/photostream/"], ["href", "https://www.flickr.com/photos/jeepersmedia/"], ["href", "https://creativecommons.org/licenses/by/2.0/"], ["href", "https://drdavinahseats.com/keto-blog/what-is-keto", "target", "_blank"], ["href", "https://www.healthline.com/nutrition/is-dark-chocolate-keto"], ["src", "assets/photoshop/candy/chocolate-1.jpg", "alt", ""], ["href", "https://www.healthline.com/nutrition/is-dark-chocolate-keto#carb-content"], ["href", "https://paschachocolate.com/collections/all/products/sugar-free-70-cacao-organic-dark-chocolate-2-8-oz-bar"], ["href", "https://www.chocolate.lindt.com/shop/chocolate-flavours/dark-chocolate/excellence-cocoa-90-1"], ["id", "KNoSYkZ3QuU"], [1, "mb-4"], [1, "other-recipes"], ["href", "https://www.bulletproof.com/recipes/keto-recipes/keto-candy-recipes-3c3g4b4c4t4m/"], ["href", "https://alldayidreamaboutfood.com/best-low-carb-keto-candy-recipes/"], ["href", "https://betterthanbreadketo.com/keto-butterscotch-candy/"], ["href", "https://www.lowcarbmaven.com/low-carb-turtle-recipe/"], ["href", "https://howtothisandthat.com/keto-candy-bar-fat-bombs/"], ["href", "https://joyfilledeats.com/buttery-walnut-toffee/"], ["href", "https://beamingbaker.com/keto-candy-3-ingredient-keto-almond-bark-recipe-low-carb/"], ["href", "https://lowcarbinspirations.com/divine-chocolate-dream-keto-candy-recipe/"], ["href", "https://thebigmansworld.com/3-ingredient-keto-chocolate-coconut-cups/"]],
      template: function KetoDietComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, KetoDietComponent_div_0_Template, 101, 3, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.article);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _core_components_youtube_player_youtube_player_component__WEBPACK_IMPORTED_MODULE_3__["YoutubePlayerComponent"]],
      styles: [".fa-calendar[_ngcontent-%COMP%] {\n  color: #ff324d;\n  margin-right: 5px;\n}\n\n.blog_meta[_ngcontent-%COMP%] {\n  margin: 1% 0;\n}\n\n.topic-section[_ngcontent-%COMP%] {\n  margin: 5% 0;\n}\n\nh2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%] {\n  font-weight: 700;\n  text-transform: capitalize;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-width: 85%;\n  margin: 5% 0;\n}\n\na[_ngcontent-%COMP%] {\n  color: #ff324d;\n}\n\nul.other-recipes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 10px 0px;\n}\n\n.random-candy[_ngcontent-%COMP%] {\n  max-width: 65%;\n}\n\n.licensed-img[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n.licensed-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9ibG9nL3BhZ2VzL2tldG8tZGlldC9DOlxcVXNlcnNcXGFzaGVyMTE4XFxEb2N1bWVudHNcXGNhbmR5LWJsb2cvc3JjXFxhcHBcXG1haW5cXGJsb2dcXHBhZ2VzXFxrZXRvLWRpZXRcXGtldG8tZGlldC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9ibG9nL3BhZ2VzL2tldG8tZGlldC9rZXRvLWRpZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTs7O0VBR0UsZ0JBQUE7RUFDQSwwQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFJRSxlQUFBO0FDRkY7O0FEREU7RUFDRSxnQkFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9ibG9nL3BhZ2VzL2tldG8tZGlldC9rZXRvLWRpZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmEtY2FsZW5kYXIge1xyXG4gIGNvbG9yOiAjZmYzMjRkO1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4uYmxvZ19tZXRhIHtcclxuICBtYXJnaW46IDElIDA7XHJcbn1cclxuXHJcbi50b3BpYy1zZWN0aW9uIHtcclxuICBtYXJnaW46IDUlIDA7XHJcbn1cclxuXHJcbmgyLFxyXG5oMyxcclxuaDQge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgbWF4LXdpZHRoOiA4NSU7XHJcbiAgbWFyZ2luOiA1JSAwO1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogI2ZmMzI0ZDtcclxufVxyXG5cclxudWwub3RoZXItcmVjaXBlcyBsaSB7XHJcbiAgbWFyZ2luOiAxMHB4IDBweDtcclxufVxyXG5cclxuLnJhbmRvbS1jYW5keSB7XHJcbiAgbWF4LXdpZHRoOiA2NSU7XHJcbn1cclxuXHJcbi5saWNlbnNlZC1pbWcge1xyXG4gIGltZyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuIiwiLmZhLWNhbGVuZGFyIHtcbiAgY29sb3I6ICNmZjMyNGQ7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uYmxvZ19tZXRhIHtcbiAgbWFyZ2luOiAxJSAwO1xufVxuXG4udG9waWMtc2VjdGlvbiB7XG4gIG1hcmdpbjogNSUgMDtcbn1cblxuaDIsXG5oMyxcbmg0IHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbmltZyB7XG4gIG1heC13aWR0aDogODUlO1xuICBtYXJnaW46IDUlIDA7XG59XG5cbmEge1xuICBjb2xvcjogI2ZmMzI0ZDtcbn1cblxudWwub3RoZXItcmVjaXBlcyBsaSB7XG4gIG1hcmdpbjogMTBweCAwcHg7XG59XG5cbi5yYW5kb20tY2FuZHkge1xuICBtYXgtd2lkdGg6IDY1JTtcbn1cblxuLmxpY2Vuc2VkLWltZyB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5saWNlbnNlZC1pbWcgaW1nIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KetoDietComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'candy-keto-diet',
          templateUrl: './keto-diet.component.html',
          styleUrls: ['./keto-diet.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/blog/pages/sour-strips-discovery/sour-strips-discovery.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/main/blog/pages/sour-strips-discovery/sour-strips-discovery.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: SourStripsDiscoveryComponent */

  /***/
  function srcAppMainBlogPagesSourStripsDiscoverySourStripsDiscoveryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SourStripsDiscoveryComponent", function () {
      return SourStripsDiscoveryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _article_data_article_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../article-data/article-data */
    "./src/app/main/blog/article-data/article-data.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SourStripsDiscoveryComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " I've always loved sour candy, ex: sour Sweettarts, sour straws, Warheads and others. And then there are some candy companies that don't seem to know the definition of sour. It's like they just put the word \"Sour\", in big bold packaging, just because the package printing ink is cheap or something. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "What sucks about sour candy");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Here are just some of the issues I tend to come across with majority of sour candy. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " A lot of sour candies just aren't that sour, and sometimes just bland. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Not sealable(after a while, the sour content fades, leaving the consumer with bland candy) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Wet and sticky");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " After the 2nd or 3rd piece of candy, the sour sensation afterwards with every bite disappears ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Is \"extreme sour\" really as sour as the manufactor can make it? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "The Good news and the Bad news...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Let's start off with the bad news. Somehow within an hour and a half, Alphalete had sold almost run out of stock of Sour Strips, and my brother managed to get me only 2 packs Sour Strips, about $7 or so of the total of the $20 I initially wanted... ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Still, nonetheless, the famed candy had arrived.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " And now the good news. At a first glance, I liked the packaging and design. More importantly to me, there was a ziplock on the top of the bag so if this candy was the real deal, I could savor it for days. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " So I tore off the seal and tried out a candy strip. And boy was it sour! It was tasty too. This candy had all the elements of what sour candy should be. And to put the cherry on top, it wasn't wet! Combined with the great packaging, this really is a great product. Somehow I managed to eat 2-3 strips before it felt like the sour content was burning my tongue, and yet I craved more. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Overall, it's really great candy that I would recommend to everyone, the only issue is the price, at about $3.50 a bag, it's a bit pricy. Hopefully, that comes down in the future ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Anyways here's the ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "LINK");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " to the sour strips website if anyone is interested. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.article.header, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.article.date);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.article.description, " I had first heard about sour strips from my brother when he was on his way to Houston to workout at the Alphalete gym. He had called me to let me know that the gym had some sour candy in stock and it was supposedly what people were calling \"The best candy they've ever had\". I checked online and it was already sold out online and would take a while before they restocked, so on a whim, I told me to get $20 worth of the candy. ");
      }
    }

    var SourStripsDiscoveryComponent = /*#__PURE__*/function () {
      function SourStripsDiscoveryComponent() {
        _classCallCheck(this, SourStripsDiscoveryComponent);
      }

      _createClass(SourStripsDiscoveryComponent, [{
        key: "article",
        get: function get() {
          return _article_data_article_data__WEBPACK_IMPORTED_MODULE_1__["Articles"].find(function (article) {
            return article.header === 'My Journey into Sour Strips';
          });
        }
      }]);

      return SourStripsDiscoveryComponent;
    }();

    SourStripsDiscoveryComponent.ɵfac = function SourStripsDiscoveryComponent_Factory(t) {
      return new (t || SourStripsDiscoveryComponent)();
    };

    SourStripsDiscoveryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SourStripsDiscoveryComponent,
      selectors: [["candy-sour-strips-discovery"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [1, "blog_post"], [1, "blog_content"], [1, "blog_text"], [1, "blog_heading"], [1, "blog_meta"], [1, "fas", "fa-calendar"], [1, "topic-section"], ["src", "assets\\imgs\\candy\\sour-candy.jfif", "alt", "", 1, "generic-img"], [1, "candy-issues"], [1, "image-layout"], ["src", "assets\\images\\sour-strips\\strawberry.jpg", "alt", ""], ["src", "assets\\images\\sour-strips\\nutrition-facts4.png", "alt", ""], ["href", "https://www.sourstrips.com/"], [1, "url-link"]],
      template: function SourStripsDiscoveryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SourStripsDiscoveryComponent_div_0_Template, 55, 3, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.article);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: ["@charset \"UTF-8\";\np[_ngcontent-%COMP%] {\n  font-size: 16px;\n  max-width: 80%;\n  margin: 20px 0;\n}\nh2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%] {\n  font-weight: 700;\n  text-transform: capitalize;\n}\nimg[_ngcontent-%COMP%] {\n  width: 25%;\n  margin: 2.5% 5%;\n}\n.topic-section[_ngcontent-%COMP%] {\n  margin: 5% 0;\n}\n.fa-calendar[_ngcontent-%COMP%] {\n  color: #ff324d;\n  margin-right: 5px;\n}\n.blog_meta[_ngcontent-%COMP%] {\n  margin: 1% 0;\n}\n.image-layout[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n}\n.topic-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: \"\u2022\";\n  color: black;\n  font-size: 24px;\n  margin: 0 2%;\n}\n.topic-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 16px;\n}\n.url-link[_ngcontent-%COMP%] {\n  color: blue;\n}\n.generic-img[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: 0;\n  max-width: 600px;\n}\n@media only screen and (min-width: 961px) {\n  .image-layout[_ngcontent-%COMP%] {\n    flex-direction: center;\n  }\n\n  img[_ngcontent-%COMP%] {\n    width: 25%;\n  }\n}\n@media only screen and (max-width: 960px) {\n  .image-layout[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  img[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9ibG9nL3BhZ2VzL3NvdXItc3RyaXBzLWRpc2NvdmVyeS9zb3VyLXN0cmlwcy1kaXNjb3ZlcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vYmxvZy9wYWdlcy9zb3VyLXN0cmlwcy1kaXNjb3ZlcnkvQzpcXFVzZXJzXFxhc2hlcjExOFxcRG9jdW1lbnRzXFxjYW5keS1ibG9nL3NyY1xcYXBwXFxtYWluXFxibG9nXFxwYWdlc1xcc291ci1zdHJpcHMtZGlzY292ZXJ5XFxzb3VyLXN0cmlwcy1kaXNjb3ZlcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FERUY7QUNDQTs7O0VBR0UsZ0JBQUE7RUFDQSwwQkFBQTtBREVGO0FDQ0E7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBREVGO0FDQ0E7RUFDRSxZQUFBO0FERUY7QUNDQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBREVGO0FDQ0E7RUFDRSxZQUFBO0FERUY7QUNDQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtBREVGO0FDQ0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FERUY7QUNDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QURFRjtBQ0NBO0VBQ0UsV0FBQTtBREVGO0FDQ0E7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FERUo7QUNFQTtFQUNFO0lBQ0Usc0JBQUE7RURDRjs7RUNFQTtJQUNFLFVBQUE7RURDRjtBQUNGO0FDRUE7RUFDRTtJQUNFLHNCQUFBO0VEQUY7O0VDR0E7SUFDRSxVQUFBO0VEQUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21haW4vYmxvZy9wYWdlcy9zb3VyLXN0cmlwcy1kaXNjb3Zlcnkvc291ci1zdHJpcHMtZGlzY292ZXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xucCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWF4LXdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuXG5oMixcbmgzLFxuaDQge1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDI1JTtcbiAgbWFyZ2luOiAyLjUlIDUlO1xufVxuXG4udG9waWMtc2VjdGlvbiB7XG4gIG1hcmdpbjogNSUgMDtcbn1cblxuLmZhLWNhbGVuZGFyIHtcbiAgY29sb3I6ICNmZjMyNGQ7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uYmxvZ19tZXRhIHtcbiAgbWFyZ2luOiAxJSAwO1xufVxuXG4uaW1hZ2UtbGF5b3V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4udG9waWMtc2VjdGlvbiB1bCBsaTo6YmVmb3JlIHtcbiAgY29udGVudDogXCLigKJcIjtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbjogMCAyJTtcbn1cblxuLnRvcGljLXNlY3Rpb24gdWwgbGkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi51cmwtbGluayB7XG4gIGNvbG9yOiBibHVlO1xufVxuXG4uZ2VuZXJpYy1pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1heC13aWR0aDogNjAwcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYxcHgpIHtcbiAgLmltYWdlLWxheW91dCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNlbnRlcjtcbiAgfVxuXG4gIGltZyB7XG4gICAgd2lkdGg6IDI1JTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAuaW1hZ2UtbGF5b3V0IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG59IiwicCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1heC13aWR0aDogODAlO1xyXG4gIG1hcmdpbjogMjBweCAwO1xyXG59XHJcblxyXG5oMixcclxuaDMsXHJcbmg0IHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIHdpZHRoOiAyNSU7XHJcbiAgbWFyZ2luOiAyLjUlIDUlO1xyXG59XHJcblxyXG4udG9waWMtc2VjdGlvbiB7XHJcbiAgbWFyZ2luOiA1JSAwO1xyXG59XHJcblxyXG4uZmEtY2FsZW5kYXIge1xyXG4gIGNvbG9yOiAjZmYzMjRkO1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4uYmxvZ19tZXRhIHtcclxuICBtYXJnaW46IDElIDA7XHJcbn1cclxuXHJcbi5pbWFnZS1sYXlvdXQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4udG9waWMtc2VjdGlvbiB1bCBsaTo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKAolwiO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbWFyZ2luOiAwIDIlO1xyXG59XHJcblxyXG4udG9waWMtc2VjdGlvbiB1bCBsaSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLnVybC1saW5rIHtcclxuICBjb2xvcjogYmx1ZTtcclxufVxyXG5cclxuLmdlbmVyaWMtaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG5cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjFweCkge1xyXG4gIC5pbWFnZS1sYXlvdXQge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gIC5pbWFnZS1sYXlvdXQge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SourStripsDiscoveryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'candy-sour-strips-discovery',
          templateUrl: './sour-strips-discovery.component.html',
          styleUrls: ['./sour-strips-discovery.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/blog/pages/top-25/top-25.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/main/blog/pages/top-25/top-25.component.ts ***!
    \************************************************************/

  /*! exports provided: Top25Component */

  /***/
  function srcAppMainBlogPagesTop25Top25ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Top25Component", function () {
      return Top25Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _article_data_article_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../article-data/article-data */
    "./src/app/main/blog/article-data/article-data.ts");
    /* harmony import */


    var _top_25_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./top-25-data */
    "./src/app/main/blog/pages/top-25/top-25-data.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");

    function Top25Component_div_0_div_14_div_4_button_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Top25Component_div_0_div_14_div_4_button_17_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var company_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r7.routeToCompany(company_r4.name);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " More Info ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Top25Component_div_0_div_14_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Top25Component_div_0_div_14_div_4_Template_a_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var company_r4 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r10.routeToCompany(company_r4.name);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Top25Component_div_0_div_14_div_4_Template_a_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var company_r4 = ctx.$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r12.routeToCompany(company_r4.name);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, Top25Component_div_0_div_14_div_4_button_17_Template, 2, 0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var company_r4 = ctx.$implicit;
        var i_r5 = ctx.index;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", company_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", 6 * (ctx_r3.p - 1) + i_r5 + 1, ") ", company_r4.name, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Location: ", company_r4.location, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Net Sales: ", company_r4.netSales, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", company_r4.infoAvailable);
      }
    }

    var _c0 = function _c0(a1) {
      return {
        itemsPerPage: 4,
        currentPage: a1
      };
    };

    function Top25Component_div_0_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, Top25Component_div_0_div_14_div_4_Template, 18, 6, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "paginate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 1, ctx_r1.companies, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r1.p)));
      }
    }

    function Top25Component_div_0_div_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "pagination-controls", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function Top25Component_div_0_div_15_Template_pagination_controls_pageChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r13.pageChangeEvent($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function Top25Component_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, Top25Component_div_0_div_14_Template, 6, 6, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, Top25Component_div_0_div_15_Template, 2, 0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.article.header, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.article.date);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.article.description, " More info for additional companies will be added soon. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.gridViewSelected);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.gridViewSelected);
      }
    }

    var Top25Component = /*#__PURE__*/function () {
      function Top25Component(router, renderer) {
        _classCallCheck(this, Top25Component);

        this.router = router;
        this.renderer = renderer;
        this.companies = _top_25_data__WEBPACK_IMPORTED_MODULE_2__["Companies"];
        this.p = 1;
        this.gridViewSelected = true;
        this.tableViewSelected = false;
      }

      _createClass(Top25Component, [{
        key: "pageChangeEvent",
        value: function pageChangeEvent(e) {
          window.scrollTo(0, 0);
          this.p = e;
        }
      }, {
        key: "changeLayoutView",
        value: function changeLayoutView(view) {
          if (view === 'gridViewSelected') {
            this.gridViewSelected = true;
            this.tableViewSelected = false;
            this.renderer.addClass(document.querySelector('#gridBtn'), 'selectedView');
            this.renderer.removeClass(document.querySelector('#tableBtn'), 'selectedView');
          } else {
            this.gridViewSelected = false;
            this.tableViewSelected = true;
            this.renderer.addClass(document.querySelector('#tableBtn'), 'selectedView');
            this.renderer.removeClass(document.querySelector('#gridBtn'), 'selectedView');
          }
        }
      }, {
        key: "routeToCompany",
        value: function routeToCompany(name) {
          var link = name.split(' ').join('-');
          this.router.navigate(['../company', link]);
        }
      }, {
        key: "article",
        get: function get() {
          return _article_data_article_data__WEBPACK_IMPORTED_MODULE_1__["Articles"].find(function (article) {
            return article.header === 'Top 5 Candy Companies in 2020';
          });
        }
      }]);

      return Top25Component;
    }();

    Top25Component.ɵfac = function Top25Component_Factory(t) {
      return new (t || Top25Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
    };

    Top25Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Top25Component,
      selectors: [["candy-top-25"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [1, "blog_post"], [1, "blog_content"], [1, "blog_text"], [1, "blog_heading"], [1, "blog_meta"], [1, "fas", "fa-calendar"], [1, "topic-section"], ["class", "flex-container", 4, "ngIf"], [1, "tranding_post", "pb_70"], [1, "container"], [1, "row"], ["class", "col-lg-6 col-sm-6", 4, "ngFor", "ngForOf"], [1, "col-lg-6", "col-sm-6"], [1, "blog_post", "blog_grid_overlay"], [1, "routerlink", 3, "click"], ["alt", "tranding_post_img", 3, "src"], [1, "align-info"], [1, "location"], ["class", "btn btn-default btn-sm", "type", "button", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-default", "btn-sm", 3, "click"], [1, "flex-container"], [1, "my-pagination", 3, "pageChange"]],
      template: function Top25Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Top25Component_div_0_Template, 16, 5, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.article);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationControlsComponent"]],
      pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginatePipe"]],
      styles: ["@charset \"UTF-8\";\np[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\nh2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%] {\n  font-weight: 700;\n  text-transform: capitalize;\n}\nh5[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\ntable[_ngcontent-%COMP%] {\n  margin: 5% 0;\n}\n.heading-row[_ngcontent-%COMP%] {\n  background-color: #ff324d;\n  color: white;\n}\n.flex-btn-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #ff324d;\n  text-transform: none;\n}\n.btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #ff324d;\n}\n.btn-group[_ngcontent-%COMP%]   .selectedView[_ngcontent-%COMP%] {\n  background-color: #ff324d;\n  color: white;\n}\n.topic-section[_ngcontent-%COMP%] {\n  margin: 5% 0;\n}\n.fa-calendar[_ngcontent-%COMP%] {\n  color: #ff324d;\n  margin-right: 5px;\n}\n.blog_meta[_ngcontent-%COMP%] {\n  margin: 1% 0;\n}\n.image-layout[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n}\n.topic-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: \"\u2022\";\n  color: black;\n  font-size: 24px;\n  margin: 0 2%;\n}\n.topic-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 16px;\n}\n.url-link[_ngcontent-%COMP%] {\n  color: blue;\n}\n.generic-img[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: 0;\n  max-width: 600px;\n}\n.align-info[_ngcontent-%COMP%] {\n  color: white;\n  display: flex;\n  justify-content: space-between;\n}\n.align-info[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  text-transform: none;\n  padding: 3px;\n}\n.flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9ibG9nL3BhZ2VzL3RvcC0yNS90b3AtMjUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vYmxvZy9wYWdlcy90b3AtMjUvQzpcXFVzZXJzXFxhc2hlcjExOFxcRG9jdW1lbnRzXFxjYW5keS1ibG9nL3NyY1xcYXBwXFxtYWluXFxibG9nXFxwYWdlc1xcdG9wLTI1XFx0b3AtMjUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0UsY0FBQTtBREVGO0FDQ0E7OztFQUdFLGdCQUFBO0VBQ0EsMEJBQUE7QURFRjtBQ0NBO0VBQ0UsZUFBQTtBREVGO0FDQ0E7RUFDRSxZQUFBO0FERUY7QUNDQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBREVGO0FDQ0E7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QURFRjtBQ0VFO0VBQ0UseUJBQUE7RUFDQSxvQkFBQTtBRENKO0FDQ0U7RUFDRSx5QkFBQTtBRENKO0FDRUU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QURBSjtBQ0lBO0VBQ0UsWUFBQTtBRERGO0FDSUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QURERjtBQ0lBO0VBQ0UsWUFBQTtBRERGO0FDSUE7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7QURERjtBQ0lBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBRERGO0FDSUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FEREY7QUNJQTtFQUNFLFdBQUE7QURERjtBQ0lBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBRERGO0FDSUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FEREY7QUNHRTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtBRERKO0FDS0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FERkYiLCJmaWxlIjoic3JjL2FwcC9tYWluL2Jsb2cvcGFnZXMvdG9wLTI1L3RvcC0yNS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbnAge1xuICBtYXJnaW46IDIwcHggMDtcbn1cblxuaDIsXG5oMyxcbmg0IHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbmg1IDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxudGFibGUge1xuICBtYXJnaW46IDUlIDA7XG59XG5cbi5oZWFkaW5nLXJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjMyNGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZsZXgtYnRuLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5idG4tZ3JvdXAgYnV0dG9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmMzI0ZDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG4uYnRuLWdyb3VwIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjMyNGQ7XG59XG4uYnRuLWdyb3VwIC5zZWxlY3RlZFZpZXcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzMjRkO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50b3BpYy1zZWN0aW9uIHtcbiAgbWFyZ2luOiA1JSAwO1xufVxuXG4uZmEtY2FsZW5kYXIge1xuICBjb2xvcjogI2ZmMzI0ZDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5ibG9nX21ldGEge1xuICBtYXJnaW46IDElIDA7XG59XG5cbi5pbWFnZS1sYXlvdXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbi50b3BpYy1zZWN0aW9uIHVsIGxpOjpiZWZvcmUge1xuICBjb250ZW50OiBcIuKAolwiO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luOiAwIDIlO1xufVxuXG4udG9waWMtc2VjdGlvbiB1bCBsaSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnVybC1saW5rIHtcbiAgY29sb3I6IGJsdWU7XG59XG5cbi5nZW5lcmljLWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbn1cblxuLmFsaWduLWluZm8ge1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5hbGlnbi1pbmZvIGJ1dHRvbiB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBwYWRkaW5nOiAzcHg7XG59XG5cbi5mbGV4LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufSIsInAge1xyXG4gIG1hcmdpbjogMjBweCAwO1xyXG59XHJcblxyXG5oMixcclxuaDMsXHJcbmg0IHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG5oNSA6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxudGFibGUge1xyXG4gIG1hcmdpbjogNSUgMDtcclxufVxyXG5cclxuLmhlYWRpbmctcm93IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzMjRkO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmZsZXgtYnRuLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uYnRuLWdyb3VwIHtcclxuICBidXR0b24ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmMzI0ZDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxuICBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMzI0ZDtcclxuICB9XHJcblxyXG4gIC5zZWxlY3RlZFZpZXcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMzI0ZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbn1cclxuXHJcbi50b3BpYy1zZWN0aW9uIHtcclxuICBtYXJnaW46IDUlIDA7XHJcbn1cclxuXHJcbi5mYS1jYWxlbmRhciB7XHJcbiAgY29sb3I6ICNmZjMyNGQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5ibG9nX21ldGEge1xyXG4gIG1hcmdpbjogMSUgMDtcclxufVxyXG5cclxuLmltYWdlLWxheW91dCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi50b3BpYy1zZWN0aW9uIHVsIGxpOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4oCiXCI7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBtYXJnaW46IDAgMiU7XHJcbn1cclxuXHJcbi50b3BpYy1zZWN0aW9uIHVsIGxpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4udXJsLWxpbmsge1xyXG4gIGNvbG9yOiBibHVlO1xyXG59XHJcblxyXG4uZ2VuZXJpYy1pbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbn1cclxuXHJcbi5hbGlnbi1pbmZvIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICB9XHJcbn1cclxuXHJcbi5mbGV4LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Top25Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'candy-top-25',
          templateUrl: './top-25.component.html',
          styleUrls: ['./top-25.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=blog-blog-module-es5.js.map