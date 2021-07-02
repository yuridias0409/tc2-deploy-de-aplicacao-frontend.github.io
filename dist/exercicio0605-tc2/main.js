(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ydsex\Documents\GitHub\tc2-deploy-de-aplicacao-frontend.github.io\src\main.ts */"zUnb");


/***/ }),

/***/ "0GiD":
/*!**********************************************!*\
  !*** ./src/app/database/database.service.ts ***!
  \**********************************************/
/*! exports provided: DatabaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseService", function() { return DatabaseService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");




class DatabaseService {
    constructor(http) {
        this.http = http;
        this.fire = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // Headers
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        this.baseURL = "https://sc300161x-tc2-deploy-aplicacao.herokuapp.com/api/";
    }
    //baseURL = "http://localhost:8080/api/";
    getAllPeople() {
        return this.http.get(this.baseURL + "pessoa/");
    }
    addPessoa(person) {
        return this.http.post(this.baseURL + 'pessoa/', person, { observe: "response" });
    }
    deletarPessoa(id) {
        return this.http.delete(this.baseURL + 'pessoa/' + id, { observe: "response" });
    }
    atualizarPessoa(person) {
        return this.http.put(this.baseURL + 'pessoa/' + person._id, person, { observe: "response" });
    }
}
DatabaseService.ɵfac = function DatabaseService_Factory(t) { return new (t || DatabaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
DatabaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DatabaseService, factory: DatabaseService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "GJhy":
/*!**********************************************************************!*\
  !*** ./src/app/formulario-cadastro/formulario-cadastro.component.ts ***!
  \**********************************************************************/
/*! exports provided: FormularioCadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormularioCadastroComponent", function() { return FormularioCadastroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _database_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../database/database.service */ "0GiD");






class FormularioCadastroComponent {
    constructor(databaseService) {
        this.databaseService = databaseService;
        this.clearPessoa = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.registroDePessoa = null;
        this.cond = null;
    }
    onSubmit() {
        if (!this.registroDePessoa.invalid) {
            if (!this.registroDePessoa.value.foto) {
                this.registroDePessoa.value.foto = 'https://pbs.twimg.com/profile_images/1185564118/bart2.JPG';
            }
            //Caso for uma adição
            if (this.pessoaEditar == null) {
                this.databaseService.addPessoa(this.registroDePessoa.value).subscribe(res => {
                    console.log(res);
                    if (res.ok == true) {
                        alert("Pessoa cadastrada com sucesso!");
                        //Atualizar Página
                        location.href = location.href;
                    }
                    else {
                        alert("Não foi possível cadastrar a pessoa!");
                    }
                });
            }
            else {
                //Salva os novos dados
                this.pessoaEditar.nome = this.registroDePessoa.value.nome;
                this.pessoaEditar.idade = this.registroDePessoa.value.idade;
                this.pessoaEditar.foto = this.registroDePessoa.value.foto;
                //Atualiza
                this.databaseService.atualizarPessoa(this.pessoaEditar).subscribe(res => {
                    console.log(res);
                    if (res.ok == true) {
                        alert("Pessoa editada com sucesso!");
                        this.clearPessoa.emit(null);
                        this.cond = null;
                        //Atualizar Página
                        location.href = location.href;
                    }
                    else {
                        alert("Não foi possível editar a pessoa!");
                    }
                });
            }
            this.registroDePessoa.reset();
        }
        else {
            alert('Nome e Idade são necessários!');
        }
    }
    carregaDados() {
        if (this.registroDePessoa == null || (this.pessoaEditar != null && this.cond == null)) {
            if (this.pessoaEditar == null) {
                this.registroDePessoa = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                    nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                    idade: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                    foto: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                });
                this.buttonText = "Cadastrar";
            }
            else {
                this.cond = "block";
                this.registroDePessoa = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                    nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.pessoaEditar.nome, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                    idade: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.pessoaEditar.idade, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                    foto: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.pessoaEditar.foto),
                });
                this.buttonText = "Editar";
            }
        }
        return this.registroDePessoa;
    }
    ngOnInit() {
    }
}
FormularioCadastroComponent.ɵfac = function FormularioCadastroComponent_Factory(t) { return new (t || FormularioCadastroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_database_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"])); };
FormularioCadastroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormularioCadastroComponent, selectors: [["app-formulario-cadastro"]], inputs: { pessoaEditar: "pessoaEditar" }, outputs: { clearPessoa: "clearPessoa" }, decls: 16, vars: 2, consts: [[3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "nome"], ["type", "text", "formControlName", "nome", "id", "nome", "placeholder", "Digite o nome da pessoa", "required", "", 1, "form-control"], ["for", "idade"], ["type", "number", "formControlName", "idade", "id", "idade", "placeholder", "Digite a idade da pessoa", "required", "", 1, "form-control"], ["for", "imagem"], ["type", "text", "formControlName", "foto", "id", "imagem", "placeholder", "Link da imagem", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"]], template: function FormularioCadastroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormularioCadastroComponent_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Idade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Imagem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.carregaDados());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.buttonText);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtdWxhcmlvLWNhZGFzdHJvLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "MIOm":
/*!****************************************************************!*\
  !*** ./src/app/lista-de-pessoas/lista-de-pessoas.component.ts ***!
  \****************************************************************/
/*! exports provided: ListaDePessoasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaDePessoasComponent", function() { return ListaDePessoasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _database_database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../database/database.service */ "0GiD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _mostrar_pessoa_mostrar_pessoa_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mostrar-pessoa/mostrar-pessoa.component */ "oAIX");





function ListaDePessoasComponent_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListaDePessoasComponent_ul_3_li_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const p_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.getPessoa(p_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("completed", p_r4.complete);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r4.nome);
} }
function ListaDePessoasComponent_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListaDePessoasComponent_ul_3_li_1_Template, 3, 3, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.pessoas);
} }
function ListaDePessoasComponent_app_mostrar_pessoa_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-mostrar-pessoa", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clearPessoa", function ListaDePessoasComponent_app_mostrar_pessoa_4_Template_app_mostrar_pessoa_clearPessoa_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.clearPessoa($event); })("pessoaParaEditar", function ListaDePessoasComponent_app_mostrar_pessoa_4_Template_app_mostrar_pessoa_pessoaParaEditar_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.editarPessoa($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pessoa", ctx_r1.selectedPessoa)("show", true);
} }
function ListaDePessoasComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nenhuma pessoa foi cadastrada");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ListaDePessoasComponent {
    constructor(databaseService) {
        this.databaseService = databaseService;
        this.pessoaParaEditar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pessoas = [];
    }
    getAllPeople() {
        this.databaseService.getAllPeople().subscribe(res => {
            this.pessoas = res;
            this.pessoas = this.pessoas.filter(p => p.nome);
        });
    }
    getPessoa(person) {
        this.selectedPessoa = person;
    }
    clearPessoa() {
        this.selectedPessoa = null;
    }
    editarPessoa(pessoa) {
        this.pessoaParaEditar.emit(pessoa);
    }
    ngOnInit() {
        this.getAllPeople();
    }
}
ListaDePessoasComponent.ɵfac = function ListaDePessoasComponent_Factory(t) { return new (t || ListaDePessoasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_database_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"])); };
ListaDePessoasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListaDePessoasComponent, selectors: [["app-lista-de-pessoas"]], outputs: { pessoaParaEditar: "pessoaParaEditar" }, decls: 6, vars: 3, consts: [[4, "ngIf"], [3, "pessoa", "show", "clearPessoa", "pessoaParaEditar", 4, "ngIf"], [3, "completed", 4, "ngFor", "ngForOf"], ["href", "#", 3, "click"], [3, "pessoa", "show", "clearPessoa", "pessoaParaEditar"]], template: function ListaDePessoasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Pessoas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ListaDePessoasComponent_ul_3_Template, 2, 1, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ListaDePessoasComponent_app_mostrar_pessoa_4_Template, 1, 2, "app-mostrar-pessoa", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ListaDePessoasComponent_p_5_Template, 2, 0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pessoas.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedPessoa);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pessoas.length === 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _mostrar_pessoa_mostrar_pessoa_component__WEBPACK_IMPORTED_MODULE_3__["MostrarPessoaComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0YS1kZS1wZXNzb2FzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _lista_de_pessoas_lista_de_pessoas_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lista-de-pessoas/lista-de-pessoas.component */ "MIOm");
/* harmony import */ var _formulario_cadastro_formulario_cadastro_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formulario-cadastro/formulario-cadastro.component */ "GJhy");



class AppComponent {
    constructor() {
        this.title = 'Exercicio 06/05 - TC2';
        this.show2 = true;
        this.pessoaParaEditar = null;
    }
    hiddenOrShow() {
        this.show2 = !this.show2;
    }
    editarPessoa(pessoa) {
        this.show2 = false;
        this.pessoaParaEditar = pessoa;
    }
    clearPessoa(n) {
        this.pessoaParaEditar = null;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 10, vars: 3, consts: [[1, "grid", "container"], [3, "pessoaParaEditar"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "btn", "btn-outline-danger", 2, "float", "right", 3, "hidden", "click"], [3, "hidden", "pessoaEditar", "clearPessoa"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-lista-de-pessoas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pessoaParaEditar", function AppComponent_Template_app_lista_de_pessoas_pessoaParaEditar_2_listener($event) { return ctx.editarPessoa($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_3_listener() { return ctx.hiddenOrShow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Adicionar Pessoa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_6_listener() { return ctx.hiddenOrShow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-formulario-cadastro", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clearPessoa", function AppComponent_Template_app_formulario_cadastro_clearPessoa_9_listener($event) { return ctx.clearPessoa($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.show2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.show2)("pessoaEditar", ctx.pessoaParaEditar);
    } }, directives: [_lista_de_pessoas_lista_de_pessoas_component__WEBPACK_IMPORTED_MODULE_1__["ListaDePessoasComponent"], _formulario_cadastro_formulario_cadastro_component__WEBPACK_IMPORTED_MODULE_2__["FormularioCadastroComponent"]], styles: ["@media (min-width: 1024px) {\n  .grid[_ngcontent-%COMP%] {\n    padding-top: 2%;\n    display: grid;\n    column-gap: 90px;\n    min-height: calc(100vh - 190px);\n    grid-template-columns: 2fr 4fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsYUFBQTtJQUNBLGdCQUFBO0lBQ0EsK0JBQUE7SUFDQSw4QkFBQTtFQUNGO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAuZ3JpZCB7XG4gICAgcGFkZGluZy10b3A6IDIlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgY29sdW1uLWdhcDogOTBweDtcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTkwcHgpO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDRmcjtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _formulario_cadastro_formulario_cadastro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formulario-cadastro/formulario-cadastro.component */ "GJhy");
/* harmony import */ var _lista_de_pessoas_lista_de_pessoas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lista-de-pessoas/lista-de-pessoas.component */ "MIOm");
/* harmony import */ var _mostrar_pessoa_mostrar_pessoa_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mostrar-pessoa/mostrar-pessoa.component */ "oAIX");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _formulario_cadastro_formulario_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["FormularioCadastroComponent"], _lista_de_pessoas_lista_de_pessoas_component__WEBPACK_IMPORTED_MODULE_5__["ListaDePessoasComponent"], _mostrar_pessoa_mostrar_pessoa_component__WEBPACK_IMPORTED_MODULE_6__["MostrarPessoaComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]] }); })();


/***/ }),

/***/ "oAIX":
/*!************************************************************!*\
  !*** ./src/app/mostrar-pessoa/mostrar-pessoa.component.ts ***!
  \************************************************************/
/*! exports provided: MostrarPessoaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MostrarPessoaComponent", function() { return MostrarPessoaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _database_database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../database/database.service */ "0GiD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




class MostrarPessoaComponent {
    constructor(databaseService) {
        this.databaseService = databaseService;
        this.clearPessoa = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pessoaParaEditar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    fecharCard() {
        this.show = false;
        this.clearPessoa.emit(null);
    }
    removerPessoa(id) {
        this.databaseService.deletarPessoa(id).subscribe(res => {
            if (res.ok == true) {
                alert("Pessoa removida com sucesso!");
                this.fecharCard();
                location.href = location.origin;
            }
            else {
                alert("Não foi possível remover a pessoa!");
            }
        });
    }
    editarPessoa(pessoa) {
        this.pessoaParaEditar.emit(pessoa);
        this.fecharCard();
    }
}
MostrarPessoaComponent.ɵfac = function MostrarPessoaComponent_Factory(t) { return new (t || MostrarPessoaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_database_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"])); };
MostrarPessoaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MostrarPessoaComponent, selectors: [["app-mostrar-pessoa"]], inputs: { pessoa: "pessoa", show: "show" }, outputs: { clearPessoa: "clearPessoa", pessoaParaEditar: "pessoaParaEditar" }, decls: 16, vars: 6, consts: [[3, "ngClass"], [1, "card", 2, "width", "18rem"], [1, "btn", "btn-outline-danger", 3, "click"], [1, "card-img-top", 3, "src", "alt", "title"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "btn", "btn-outline-success", "btn-block", 3, "click"], [1, "btn", "btn-outline-danger", "btn-block", 3, "click"]], template: function MostrarPessoaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MostrarPessoaComponent_Template_button_click_2_listener() { return ctx.fecharCard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MostrarPessoaComponent_Template_button_click_10_listener() { return ctx.editarPessoa(ctx.pessoa); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Editar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MostrarPessoaComponent_Template_button_click_13_listener() { return ctx.removerPessoa(ctx.pessoa._id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Remover");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.show ? "show" : "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.pessoa.foto, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.pessoa.nome);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.pessoa.nome);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pessoa.nome);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Idade: ", ctx.pessoa.idade, " anos");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb3N0cmFyLXBlc3NvYS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map