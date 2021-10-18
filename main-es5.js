(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkng_rx1"] = self["webpackChunkng_rx1"] || []).push([["main"], {
    /***/
    8255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 8255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    6629:
    /*!********************************************!*\
      !*** ./src/app/actions/counter.actions.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "increment": function increment() {
          return (
            /* binding */
            _increment
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      7562);

      var _increment = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Counter Component] Increment');
      /***/

    },

    /***/
    158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [];

      var _AppRoutingModule = function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      };

      _AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };

      _AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    5041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngrx/store */
      7562);
      /* harmony import */


      var _actions_counter_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./actions/counter.actions */
      6629);
      /* harmony import */


      var _selectors_counter_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./selectors/counter.selectors */
      1405);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _services_todos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./services/todos.service */
      9685);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      1258);

      function AppComponent_li_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var todo_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", todo_r1.title);
        }
      }

      var _AppComponent = /*#__PURE__*/function () {
        function _AppComponent(store, todosService) {
          _classCallCheck(this, _AppComponent);

          this.store = store;
          this.todosService = todosService;
          this.title = 'ngRx1';
          this.todos$ = todosService.entities$;
          this.loading$ = todosService.loading$;
        }

        _createClass(_AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.store.dispatch((0, _actions_counter_actions__WEBPACK_IMPORTED_MODULE_0__.increment)());
            this.count$ = this.store.pipe((0, _ngrx_store__WEBPACK_IMPORTED_MODULE_4__.select)(_selectors_counter_selectors__WEBPACK_IMPORTED_MODULE_1__.selectCount));
            this.todosService.getAll(); // this.todosService.add({active: true, description: "added one", title: "added one"});
          }
        }]);

        return _AppComponent;
      }();

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_todos_service__WEBPACK_IMPORTED_MODULE_2__.TodosService));
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 14,
        vars: 7,
        consts: [[2, "text-align", "center"], [4, "ngFor", "ngForOf"], [3, "innerText"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Counter value from Store : ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Here are some links to help you start: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, AppComponent_li_11_Template, 2, 1, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "router-outlet");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Welcome to ", ctx.title, "! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 3, ctx.count$));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 5, ctx.todos$));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    6747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      1570);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-routing.module */
      158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      5041);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      3882);
      /* harmony import */


      var _store_app_store_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./store/app-store.module */
      3007);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      718);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _AppModule = function _AppModule() {
        _classCallCheck(this, _AppModule);
      };

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule, _store_app_store_module__WEBPACK_IMPORTED_MODULE_2__.AppStoreModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule, _store_app_store_module__WEBPACK_IMPORTED_MODULE_2__.AppStoreModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule]
        });
      })();
      /***/

    },

    /***/
    5327:
    /*!*********************************************!*\
      !*** ./src/app/reducers/counter.reducer.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "initialState": function initialState() {
          return (
            /* binding */
            _initialState
          );
        },

        /* harmony export */
        "reducer": function reducer() {
          return (
            /* binding */
            _reducer
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngrx/store */
      7562);
      /* harmony import */


      var _actions_counter_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../actions/counter.actions */
      6629);

      var _initialState = {
        count: 0
      };
      var counterReducer = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(_initialState, (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_counter_actions__WEBPACK_IMPORTED_MODULE_0__.increment, function (state) {
        return Object.assign(Object.assign({}, state), {
          count: state.count + 2
        });
      }));

      function _reducer(state, action) {
        return counterReducer(state, action);
      }
      /***/

    },

    /***/
    1697:
    /*!***********************************!*\
      !*** ./src/app/reducers/index.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "reducers": function reducers() {
          return (
            /* binding */
            _reducers
          );
        },

        /* harmony export */
        "metaReducers": function metaReducers() {
          return (
            /* binding */
            _metaReducers
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      2340);
      /* harmony import */


      var _counter_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./counter.reducer */
      5327);

      var _reducers = {
        counter: _counter_reducer__WEBPACK_IMPORTED_MODULE_1__.reducer
      };

      var _metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production ? [] : [];
      /***/

    },

    /***/
    1405:
    /*!************************************************!*\
      !*** ./src/app/selectors/counter.selectors.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "selectState": function selectState() {
          return (
            /* binding */
            _selectState
          );
        },

        /* harmony export */
        "selectCount": function selectCount() {
          return (
            /* binding */
            _selectCount
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      7562);

      var _selectState = function _selectState(state) {
        return state.counter;
      };

      var _selectCount = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(_selectState, function (state) {
        return state.count;
      });
      /***/

    },

    /***/
    9685:
    /*!*******************************************!*\
      !*** ./src/app/services/todos.service.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TodosService": function TodosService() {
          return (
            /* binding */
            _TodosService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ngrx_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/data */
      6386);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _TodosService = /*#__PURE__*/function (_ngrx_data__WEBPACK_I) {
        _inherits(_TodosService, _ngrx_data__WEBPACK_I);

        var _super = _createSuper(_TodosService);

        function _TodosService(serviceElementsFactory) {
          _classCallCheck(this, _TodosService);

          return _super.call(this, 'Todo', serviceElementsFactory);
        }

        return _TodosService;
      }(_ngrx_data__WEBPACK_IMPORTED_MODULE_0__.EntityCollectionServiceBase);

      _TodosService.ɵfac = function TodosService_Factory(t) {
        return new (t || _TodosService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_data__WEBPACK_IMPORTED_MODULE_0__.EntityCollectionServiceElementsFactory));
      };

      _TodosService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _TodosService,
        factory: _TodosService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    3007:
    /*!*******************************************!*\
      !*** ./src/app/store/app-store.module.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppStoreModule": function AppStoreModule() {
          return (
            /* binding */
            _AppStoreModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _entity_store_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./entity-store.module */
      499);
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngrx/store */
      7562);
      /* harmony import */


      var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../reducers */
      1697);
      /* harmony import */


      var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngrx/store-devtools */
      2373);
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngrx/effects */
      275);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      2340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _AppStoreModule = function _AppStoreModule() {
        _classCallCheck(this, _AppStoreModule);
      };

      _AppStoreModule.ɵfac = function AppStoreModule_Factory(t) {
        return new (t || _AppStoreModule)();
      };

      _AppStoreModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _AppStoreModule
      });
      _AppStoreModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.StoreModule.forRoot(_reducers__WEBPACK_IMPORTED_MODULE_1__.reducers, {
          metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_1__.metaReducers
        }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.EffectsModule.forRoot([]), !src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__.StoreDevtoolsModule.instrument() : [], _entity_store_module__WEBPACK_IMPORTED_MODULE_0__.EntityStoreModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_AppStoreModule, {
          imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.StoreRootModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.EffectsRootModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__.StoreDevtoolsModule, _entity_store_module__WEBPACK_IMPORTED_MODULE_0__.EntityStoreModule]
        });
      })();
      /***/

    },

    /***/
    2552:
    /*!******************************************!*\
      !*** ./src/app/store/entity-metadata.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "entityConfig": function entityConfig() {
          return (
            /* binding */
            _entityConfig
          );
        }
        /* harmony export */

      });

      var entityMetadata = {
        Todo: {}
      };
      var _entityConfig = {
        entityMetadata: entityMetadata
      };
      /***/
    },

    /***/
    499:
    /*!**********************************************!*\
      !*** ./src/app/store/entity-store.module.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EntityStoreModule": function EntityStoreModule() {
          return (
            /* binding */
            _EntityStoreModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ngrx_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngrx/data */
      6386);
      /* harmony import */


      var _entity_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./entity-metadata */
      2552);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _EntityStoreModule = function _EntityStoreModule() {
        _classCallCheck(this, _EntityStoreModule);
      };

      _EntityStoreModule.ɵfac = function EntityStoreModule_Factory(t) {
        return new (t || _EntityStoreModule)();
      };

      _EntityStoreModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _EntityStoreModule
      });
      _EntityStoreModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_ngrx_data__WEBPACK_IMPORTED_MODULE_2__.EntityDataModule.forRoot(_entity_metadata__WEBPACK_IMPORTED_MODULE_0__.entityConfig)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_EntityStoreModule, {
          imports: [_ngrx_data__WEBPACK_IMPORTED_MODULE_2__.EntityDataModule]
        });
      })();
      /***/

    },

    /***/
    2340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    4431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      1570);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      6747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      2340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/

    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(4431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map