module.exports=__NEXT_REGISTER_PAGE("/api-particulier.html",function(){var e=webpackJsonp([11],{13:function(e,t,a){"use strict";var n=a(0);var r=a.n(n);var i=a(1);var o=a.n(i);var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(t,a,n){if(a)e(t.prototype,a);if(n)e(t,n);return t}}();function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"===typeof t||"function"===typeof t)?t:e}function d(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var u=function(e){d(t,e);function t(e){s(this,t);var a=c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));var n=a.props.pathName;a.state={pathName:n};return a}l(t,[{key:"componentDidMount",value:function e(){var t=this.state.pathName;localStorage.setItem("redirect",t||"")}},{key:"render",value:function e(){return r.a.createElement("div",{className:"redirect"})}}]);return t}(r.a.Component);u.defaultProps={pathName:"/"};t["a"]=u},271:function(e,t,a){e.exports=a(93)},93:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=a(0);var r=a.n(n);var i=a(1);var o=a.n(i);var l=a(9);var s=a(19);var c=a.n(s);var d=a(4);var u=a(21);var m=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(t,a,n){if(a)e(t.prototype,a);if(n)e(t,n);return t}}();function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"===typeof t||"function"===typeof t)?t:e}function h(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var _=a(18);var v=[{id:"dpo",heading:"Délégué à la protection des données",description:"https://www.cnil.fr/fr/designation-dpo"},{id:"responsable_traitement",heading:"Responsable de traitement",description:"https://www.cnil.fr/fr/definition/responsable-de-traitement"},{id:"technique",heading:"Responsable technique"}];var b=function(e){h(t,e);function t(e){p(this,t);var a=f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));a.state={errors:[],enrollment:{fournisseur_de_donnees:"api-particulier",scopes:{},acl:{send_application:true},contacts:v,siren:"",demarche:{intitule:"",description:"",fondement_juridique:""},donnees:{conservation:"",destinataires:{}},validation_de_convention:false,"validation_delegue_a_la_protection_des_données":false}};a.handleChange=a.handleChange.bind(a);a.handleSubmit=a.handleSubmit.bind(a);a.getSiren=a.getSiren.bind(a);a.handleSiren=a.handleSiren.bind(a);return a}m(t,[{key:"componentDidMount",value:function e(){var t=this;var a=this.props.id;var n=void 0;if("undefined"!==typeof localStorage)n=localStorage.getItem("token");if(a)d["a"].getUserEnrollment(a,n).then(function(e){t.setState({enrollment:e})})}},{key:"handleChange",value:function e(t){var a=t.target;var n="checkbox"===a.type?a.checked:a.value;var r=a.name;var i=Object.assign({},this.state);u["a"].deepSetInState(r,n,i);this.setState(i)}},{key:"handlePeopleChange",value:function e(t){var a=this;return function(e){var n=a.state.enrollment;var r=e.target;var i=r.value;var o=r.name;n=Object.assign({},n);n.contacts=n.contacts.map(function(e){if(e.id===t.id){e[o]=i;return e}return e});a.setState({enrollment:n})}}},{key:"handleSubmit",value:function e(t){var a=this;var n=this.state;var r=localStorage.getItem("token");if(n.enrollment.id)d["a"].updateUserEnrollment(n,r).then(function(e){if(200===e.status)c.a.push("/")}).catch(function(e){if(422===e.response.status){var t=[];var n=void 0;for(n in e.response.data)if(Object.prototype.hasOwnProperty.call(e.response.data,n))t=t.concat(e.response.data[n]);a.setState({errors:t})}});else d["a"].createUserEnrollment(n,r).then(function(e){if(201===e.status)c.a.push("/")}).catch(function(e){if(422===e.response.status){var t=[];var n=void 0;for(n in e.response.data)if(Object.prototype.hasOwnProperty.call(e.response.data,n))t=t.concat(e.response.data[n]);a.setState({errors:t})}});t.preventDefault()}},{key:"handleSiren",value:function e(t){this.handleChange(t);this.getSiren()}},{key:"getSiren",value:function e(){var t=this;var a=this.state.enrollment;var n=a.siren.replace(/ /g,"");_.get("https://sirene.entreprise.api.gouv.fr/v1/siren/"+n).then(function(e){var n=e.data.siege_social[0];var r=n.nom_raison_sociale;var i=n.nom+" "+n.prenom;var o=n.activite_principale;var l=[n.l2_normalisee,n.l3_normalisee,n.l4_normalisee,n.l5_normalisee,n.l6_normalisee,n.l7_normalisee].filter(function(e){return e}).join(", ");t.setState({sirenNotFound:false});t.setState({enrollment:Object.assign(a,{raison_sociale:r,adresse:l,responsable:i,code_naf:o})})}).catch(function(){return t.setState({sirenNotFound:true})})}},{key:"render",value:function e(){var t=this;var a=this.state,n=a.enrollment,i=a.sirenNotFound,o=a.errors;var l=n.acl.send_application?false:"disabled";var s=0;var c=function e(a){a.id=a.id||"person_"+s++;return r.a.createElement("div",{key:a.id,className:"card"},r.a.createElement("div",{className:"card__content"},r.a.createElement("h3",null,a.heading),a.description&&r.a.createElement("a",{className:"card__meta",href:a.description},a.description),r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"person_"+a.id+"_nom"},"Nom et Prénom"),r.a.createElement("input",{type:"text",onChange:t.handlePeopleChange(a),name:"nom",id:"person_"+a.id+"_nom",disabled:l,value:a.nom})),r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"person_"+a.id+"_email"},"Email"),r.a.createElement("input",{type:"text",onChange:t.handlePeopleChange(a),name:"email",id:"person_"+a.id+"_email",disabled:l,value:a.email}))))};return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h1",null,"Demande d'accès à API Particulier"),r.a.createElement("p",null,"Pour avoir accès à l'API Particulier, diffusant des données personnelles, vous devez obtenir un agrément.  L'accès à cette API n'est pour l'instant disponible que si vous êtes:"),r.a.createElement("ul",null,r.a.createElement("li",null,"une administration;"),r.a.createElement("li",null,"une entreprise prestataire d'une administration ou ayant une délégation de service public.")),r.a.createElement("p",null,"Pour utiliser API Particulier, vous devez vous engager à traiter la bonne donnée par le bon agent de votre administration et informer correctement l’usager."),r.a.createElement("h2",{id:"identite"},"Identité"),r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"search-siren"},"Rechercher votre organisme avec son SIREN"),r.a.createElement("div",{className:"search__group"},r.a.createElement("input",{type:"text",value:n.siren,name:"enrollment.siren",id:"search-siren",onChange:this.handleSiren}),r.a.createElement("button",{className:"overlay-button",type:"button","aria-label":"Recherche",onClick:this.getSiren},r.a.createElement("svg",{className:"icon icon-search",id:"icon-search",width:"100%",height:"100%"},r.a.createElement("title",null,"Rechercher"),r.a.createElement("path",{d:"M15.504 13.616l-3.79-3.223c-0.392-0.353-0.811-0.514-1.149-0.499 0.895-1.048 1.435-2.407 1.435-3.893 0-3.314-2.686-6-6-6s-6 2.686-6 6 2.686 6 6 6c1.486 0 2.845-0.54 3.893-1.435-0.016 0.338 0.146 0.757 0.499 1.149l3.223 3.79c0.552 0.613 1.453 0.665 2.003 0.115s0.498-1.452-0.115-2.003zM6 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"}))))),i&&r.a.createElement("div",{className:"notification warning"},"Nos service ne parviennent pas à trouver votre SIREN"),r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"raison_sociale"},"Raison sociale"),r.a.createElement("input",{type:"text",onChange:this.handleChange,name:"enrollment.raison_sociale",id:"raison_sociale",disabled:true,value:n.raison_sociale})),r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"adresse"},"Adresse"),r.a.createElement("input",{type:"text",onChange:this.handleChange,name:"enrollment.adresse",id:"adresse",disabled:true,value:n.adresse})),r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"code_naf"},"Code NAF"),r.a.createElement("input",{type:"text",onChange:this.handleChange,name:"enrollment.code_naf",id:"code_naf",disabled:true,value:n.code_naf})),r.a.createElement("h3",null,"Contacts"),r.a.createElement("div",{className:"row card-row"},n.contacts.map(function(e){return c(e)})),r.a.createElement("h2",{id:"demarche"},"Démarche"),r.a.createElement("section",{className:"information-text"},r.a.createElement("p",null,"C'est la raison pour laquelle vous collectez des données personnelles, l'objectif qui est poursuivi par le fichier que vous mettez en place. Par exemple, « télé-procédure permettant aux usagers de demander une aide au paiement de la cantine des collégiens » ou « télé-procédure de demande de bourses de lycée »."),r.a.createElement("p",null,"Il vous est également demandé de préciser les références du cadre juridique de votre droit à demander ces informations (délibération du conseil municipal, décret …).")),r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"intitule_demarche"},"Intitulé"),r.a.createElement("input",{type:"text",onChange:this.handleChange,name:"enrollment.demarche.intitule",id:"intitule_demarche",disabled:l,value:n.demarche.intitule})),r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"description_service"},"Décrivez brièvement votre service ainsi que l‘utilisation prévue des données transmises"),r.a.createElement("textarea",{rows:"10",onChange:this.handleChange,name:"enrollment.demarche.description",id:"description_service",disabled:l,value:n.demarche.description})),r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"fondement_juridique"},"Cadre juridique ",r.a.createElement("i",null,"(indiquez la référence ou l'URL du texte vous autorisant à récolter ces données)")),r.a.createElement("input",{type:"text",onChange:this.handleChange,name:"enrollment.demarche.fondement_juridique",id:"fondement_juridique_demarche",disabled:l,value:n.demarche.fondement_juridique})),r.a.createElement("h2",{id:"donnees"},"Données"),r.a.createElement("div",{className:"form__group"},r.a.createElement("fieldset",{className:"vertical"},r.a.createElement("label",null,"Sélectionnez vos jeux de données souhaités"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column",style:{flex:1}},r.a.createElement("div",{className:"scope"},r.a.createElement("input",{className:"scope__checkbox",onChange:this.handleChange,type:"checkbox",name:"enrollment.scopes.dgfip_avis_imposition",id:"checkbox-scope_dgfip_avis_imposition",disabled:l,checked:n.scopes.dgfip_avis_imposition?"checked":false}),r.a.createElement("label",{htmlFor:"checkbox-scope_dgfip_avis_imposition",className:"label-inline"},"DGFiP - Avis d'imposition"),r.a.createElement("div",{className:"scope__destinataire"},r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"destinataire_dgfip_avis_imposition"},"Destinataires ",r.a.createElement("a",{href:"https://www.cnil.fr/fr/definition/destinataire",target:"_blank",rel:"noopener noreferrer"},"(plus d´infos)")),r.a.createElement("input",{type:"text",onChange:this.handleChange,name:"enrollment.donnees.destinataires.dgfip_avis_imposition",id:"destinataire_dgfip_avis_imposition",disabled:l,value:n.donnees.destinataires.dgfip_avis_imposition})))),r.a.createElement("div",null,r.a.createElement("input",{className:"scope__checkbox",onChange:this.handleChange,type:"checkbox",name:"enrollment.scopes.cnaf_quotient_familial",id:"checkbox-scope_cnaf_quotient_familial",disabled:l,checked:n.scopes.cnaf_quotient_familial?"checked":false}),r.a.createElement("label",{htmlFor:"checkbox-scope_cnaf_quotient_familial",className:"label-inline"},"CNAF - Quotient familial"),r.a.createElement("div",{className:"scope__destinataire"},r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"destinataire_cnaf_quotient_familial"},"Destinataires ",r.a.createElement("a",{href:"https://www.cnil.fr/fr/definition/destinataire",target:"_blank",rel:"noopener noreferrer"},"(plus d´infos)")),r.a.createElement("input",{type:"text",onChange:this.handleChange,name:"enrollment.donnees.destinataires.cnaf_quotient_familial",id:"destinataire_cnaf_quotient_familial",disabled:l,value:n.donnees.destinataires.cnaf_quotient_familial})))),r.a.createElement("div",null,r.a.createElement("input",{className:"scope__checkbox",onChange:this.handleChange,type:"checkbox",name:"enrollment.scopes.cnaf_attestation_droits",id:"checkbox-scope_cnaf_attestation_droits",disabled:l,checked:n.scopes.cnaf_attestation_droits?"checked":false}),r.a.createElement("label",{htmlFor:"checkbox-scope_cnaf_attestation_droits",className:"label-inline"},"CNAF - Attestation de droits"),r.a.createElement("div",{className:"scope__destinataire"},r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"destinataire_cnaf_attestation_droits"},"Destinataires ",r.a.createElement("a",{href:"https://www.cnil.fr/fr/definition/destinataire",target:"_blank",rel:"noopener noreferrer"},"(plus d´infos)")),r.a.createElement("input",{type:"text",onChange:this.handleChange,name:"enrollment.donnees.destinataires.cnaf_attestation_droits",id:"destinataire_cnaf_attestation_droits",disabled:l,value:n.donnees.destinataires.cnaf_attestation_droits})))))))),r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"donnees_conservation"},"Conservation des données ",r.a.createElement("i",null,"(en mois)")),r.a.createElement("input",{type:"number",onChange:this.handleChange,name:"enrollment.donnees.conservation",id:"donnees_conservation",disabled:l,value:n.donnees.conservation})),r.a.createElement("h1",{id:"cgu"},"Conditions d´utilisation"),r.a.createElement("iframe",{src:"/static/docs/charte-fc.pdf",width:"100%",height:"800px"}),r.a.createElement("div",{className:"form__group"},r.a.createElement("input",{onChange:this.handleChange,disabled:l,checked:n.validation_de_convention,type:"checkbox",name:"enrollment.validation_de_convention",id:"validation_de_convention"}),r.a.createElement("label",{htmlFor:"validation_de_convention",className:"label-inline"},"Je valide les présentes conditions d'utilisation et confirme que le DPO de mon organisme est informé de ma demande")),!l&&r.a.createElement("div",{className:"button-list"},n.id&&r.a.createElement("button",{className:"button",type:"submit",name:"subscribe",id:"submit"},"Modifier la demande"),!n.id&&r.a.createElement("button",{className:"button",type:"submit",name:"subscribe",id:"submit"},"Soumettre la demande")),o.map(function(e){var t=0;return r.a.createElement("div",{key:t++,className:"notification error"},e)}))}}]);return t}(r.a.Component);b.defaultProps={id:""};var E=b;var g=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(t,a,n){if(a)e(t.prototype,a);if(n)e(t,n);return t}}();function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function N(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"===typeof t||"function"===typeof t)?t:e}function w(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var C=function(e){w(t,e);function t(){y(this,t);return N(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}g(t,[{key:"render",value:function e(){return r.a.createElement("nav",{className:"side-pane"},r.a.createElement("ul",{className:"side-pane__menu"},r.a.createElement("li",{className:"side-pane__title"},r.a.createElement("h3",null,"Votre demande")),r.a.createElement("li",null,r.a.createElement("a",{className:"side-pane__link",href:"#identite"},"Identité")),r.a.createElement("li",null,r.a.createElement("a",{className:"side-pane__link",href:"#demarche"},"Démarche")),r.a.createElement("li",null,r.a.createElement("a",{className:"side-pane__link",href:"#donnees"},"Données")),r.a.createElement("li",null,r.a.createElement("a",{className:"side-pane__link",href:"#cgu"},"Conditions d´utilisation"))))}}]);return t}(r.a.Component);var k=C;var O=a(13);var j=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(t,a,n){if(a)e(t.prototype,a);if(n)e(t,n);return t}}();function x(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"===typeof t||"function"===typeof t)?t:e}function S(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var q=function(e){S(t,e);function t(){x(this,t);return P(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}j(t,[{key:"render",value:function e(){var t=this.props.url;console.log(t);return r.a.createElement("div",null,r.a.createElement(O["a"],{pathName:t.asPath}),r.a.createElement(l["a"],{requireUser:true},r.a.createElement("div",{className:"documentation"},r.a.createElement(k,null),r.a.createElement("div",{className:"main-pane"},r.a.createElement(E,{id:t.query.id})))))}}]);return t}(r.a.Component);var F=t["default"]=q}},[271]);return{page:e.default}});