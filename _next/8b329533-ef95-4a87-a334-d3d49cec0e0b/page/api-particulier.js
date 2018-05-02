module.exports=__NEXT_REGISTER_PAGE("/api-particulier",function(){var e=webpackJsonp([13],{270:function(e,t,n){e.exports=n(92)},92:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=n(0);var r=n.n(a);var i=n(9);var l=n(1);var o=n.n(l);var s=n(20);var c=n.n(s);var d=n(13);var u=n(19);var m=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||false;a.configurable=true;if("value"in a)a.writable=true;Object.defineProperty(e,a.key,a)}}return function(t,n,a){if(n)e(t.prototype,n);if(a)e(t,a);return t}}();function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"===typeof t||"function"===typeof t)?t:e}function h(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var v=n(4);var _=[{id:"dpo",heading:"Délégué à la protection des données",description:"https://www.cnil.fr/fr/designation-dpo"},{id:"responsable_traitement",heading:"Responsable de traitement",description:"https://www.cnil.fr/fr/definition/responsable-de-traitement"},{id:"technique",heading:"Responsable technique"}];var b=function(e){h(t,e);function t(e){p(this,t);var n=f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.state={errors:[],enrollment:{fournisseur_de_donnees:"api-particulier",scopes:{},acl:{send_application:true},contacts:_,siren:"",demarche:{intitule:"",description:"",fondement_juridique:""},donnees:{conservation:"",destinataires:""},validation_de_convention:false,"validation_delegue_a_la_protection_des_données":false}};n.handleChange=n.handleChange.bind(n);n.handleSubmit=n.handleSubmit.bind(n);n.getSiren=n.getSiren.bind(n);n.handleSiren=n.handleSiren.bind(n);return n}m(t,[{key:"componentDidMount",value:function e(){var t=this;var n=this.props.id;var a=void 0;if("undefined"!==typeof localStorage)a=localStorage.getItem("token");if(n)d["a"].getUserEnrollment(n).then(function(e){t.setState({enrollment:e})})}},{key:"handleChange",value:function e(t){var n=t.target;var a="checkbox"===n.type?n.checked:n.value;var r=n.name;var i=Object.assign({},this.state);u["a"].deepSetInState(r,a,i);this.setState(i)}},{key:"handlePeopleChange",value:function e(t){var n=this;return function(e){var a=n.state.enrollment;var r=e.target;var i=r.value;var l=r.name;a=Object.assign({},a);a.contacts=a.contacts.map(function(e){if(e.id===t.id){e[l]=i;return e}return e});n.setState({enrollment:a})}}},{key:"handleSubmit",value:function e(t){var n=this;var a=this.state;var r=localStorage.getItem("token");if(a.enrollment.id)d["a"].updateUserEnrollment(a,r).then(function(e){if(200===e.status)c.a.push("/")}).catch(function(e){if(!(422==e.response.status))return;var t=[];for(var a in e.response.data)t=t.concat(e.response.data[a]);n.setState({errors:t})});else d["a"].createUserEnrollment(a,r).then(function(e){if(201===e.status)c.a.push("/")}).catch(function(e){if(!(422==e.response.status))return;var t=[];for(var a in e.response.data)t=t.concat(e.response.data[a]);n.setState({errors:t})});t.preventDefault()}},{key:"handleSiren",value:function e(t){this.handleChange(t);this.getSiren()}},{key:"getSiren",value:function e(){var t=this;var n=this.state.enrollment;var a=n.siren.replace(/ /g,"");v.get("https://sirene.entreprise.api.gouv.fr/v1/siren/"+a).then(function(e){var a=e.data.siege_social[0];var r=a.nom_raison_sociale;var i=a.nom+" "+a.prenom;var l=a.activite_principale;var o=[a.l2_normalisee,a.l3_normalisee,a.l4_normalisee,a.l5_normalisee,a.l6_normalisee,a.l7_normalisee].filter(function(e){return e}).join(", ");t.setState({sirenNotFound:false});t.setState({enrollment:Object.assign(n,{raison_sociale:r,adresse:o,responsable:i,code_naf:l})})}).catch(function(){return t.setState({sirenNotFound:true})})}},{key:"render",value:function e(){var t=this;var n=this.state,a=n.enrollment,i=n.sirenNotFound,l=n.errors;var o=a.acl.send_application?false:"disabled";var s=0;var c=function e(n){n.id=n.id||"person_"+s++;return r.a.createElement("div",{key:n.id,className:"card"},r.a.createElement("div",{className:"card__content"},r.a.createElement("h3",null,n.heading),n.description&&r.a.createElement("a",{className:"card__meta",href:n.description},n.description),r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"person_"+n.id+"_nom"},"Nom et Prénom"),r.a.createElement("input",{type:"text",onChange:t.handlePeopleChange(n),name:"nom",id:"person_"+n.id+"_nom",disabled:o,value:n.nom})),r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"person_"+n.id+"_email"},"Email"),r.a.createElement("input",{type:"text",onChange:t.handlePeopleChange(n),name:"email",id:"person_"+n.id+"_email",disabled:o,value:n.email}))))};return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h1",null,"Demande d'accès à API Particulier"),r.a.createElement("p",null,"Pour avoir accès à l'API Particulier, diffusant des données personnelles, vous devez obtenir un agrément.  L'accès à cette API n'est pour l'instant disponible que si vous êtes:"),r.a.createElement("ul",null,r.a.createElement("li",null,"une administration;"),r.a.createElement("li",null,"une entreprise prestataire d'une administration ou ayant une délégation de service public.")),r.a.createElement("p",null,"Pour utiliser API Particulier, vous devez vous engager à traiter la bonne donnée par le bon agent de votre administration et informer correctement l’usager."),r.a.createElement("h2",{id:"identite"},"Identité"),r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"search-siren"},"Rechercher votre organisme avec son SIREN"),r.a.createElement("div",{className:"search__group"},r.a.createElement("input",{type:"text",value:a.siren,name:"enrollment.siren",id:"search-siren",onChange:this.handleSiren}),r.a.createElement("button",{className:"overlay-button",type:"button","aria-label":"Recherche",onClick:this.getSiren},r.a.createElement("svg",{className:"icon icon-search",id:"icon-search",width:"100%",height:"100%"},r.a.createElement("title",null,"Rechercher"),r.a.createElement("path",{d:"M15.504 13.616l-3.79-3.223c-0.392-0.353-0.811-0.514-1.149-0.499 0.895-1.048 1.435-2.407 1.435-3.893 0-3.314-2.686-6-6-6s-6 2.686-6 6 2.686 6 6 6c1.486 0 2.845-0.54 3.893-1.435-0.016 0.338 0.146 0.757 0.499 1.149l3.223 3.79c0.552 0.613 1.453 0.665 2.003 0.115s0.498-1.452-0.115-2.003zM6 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"}))))),i&&r.a.createElement("div",{className:"notification warning"},"Nos service ne parviennent pas à trouver votre SIREN"),r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"raison_sociale"},"Raison sociale"),r.a.createElement("input",{type:"text",onChange:this.handleChange,name:"enrollment.raison_sociale",id:"raison_sociale",disabled:true,value:a.raison_sociale})),r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"adresse"},"Adresse"),r.a.createElement("input",{type:"text",onChange:this.handleChange,name:"enrollment.adresse",id:"adresse",disabled:true,value:a.adresse})),r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"code_naf"},"Code NAF"),r.a.createElement("input",{type:"text",onChange:this.handleChange,name:"enrollment.code_naf",id:"code_naf",disabled:true,value:a.code_naf})),r.a.createElement("h3",null,"Contacts"),r.a.createElement("div",{className:"row card-row"},a.contacts.map(function(e){return c(e)})),r.a.createElement("h2",{id:"demarche"},"Démarche"),r.a.createElement("section",{className:"information-text"},r.a.createElement("p",null,"C'est la raison pour laquelle vous collectez des données personnelles, l'objectif qui est poursuivi par le fichier que vous mettez en place. Par exemple, « télé-procédure permettant aux usagers de demander une aide au paiement de la cantine des collégiens » ou « télé-procédure de demande de bourses de lycée »."),r.a.createElement("p",null,"Il vous est également demandé de préciser les références du cadre juridique de votre droit à demander ces informations (délibération du conseil municipal, décret …).")),r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"intitule_demarche"},"Intitulé"),r.a.createElement("input",{type:"text",onChange:this.handleChange,name:"enrollment.demarche.intitule",id:"intitule_demarche",disabled:o,value:a.demarche.intitule})),r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"description_service"},"Décrivez brièvement votre service ainsi que l‘utilisation prévue des données transmises"),r.a.createElement("textarea",{rows:"10",onChange:this.handleChange,name:"enrollment.demarche.description",id:"description_service",disabled:o,value:a.demarche.description})),r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"fondement_juridique"},"Cadre juridique ",r.a.createElement("i",null,"(indiquez la référence ou l'URL du texte vous autorisant à récolter ces données)")),r.a.createElement("input",{type:"text",onChange:this.handleChange,name:"enrollment.demarche.fondement_juridique",id:"fondement_juridique_demarche",disabled:o,value:a.demarche.fondement_juridique})),r.a.createElement("h2",{id:"donnees"},"Données"),r.a.createElement("div",{className:"form__group"},r.a.createElement("fieldset",{className:"vertical"},r.a.createElement("label",null,"Sélectionnez vos jeux de données souhaités"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column",style:{flex:1}},r.a.createElement("div",null,r.a.createElement("input",{onChange:this.handleChange,type:"checkbox",name:"enrollment.scopes.dgfip_avis_imposition",id:"checkbox-scope_dgfip_avis_imposition",disabled:o,checked:a.scopes.dgfip_avis_imposition?"checked":false}),r.a.createElement("label",{htmlFor:"checkbox-scope_dgfip_avis_imposition",className:"label-inline"},"DGFiP - Revenu fiscal de référence")),r.a.createElement("div",null,r.a.createElement("input",{onChange:this.handleChange,type:"checkbox",name:"enrollment.scopes.cnaf_quotient_familial",id:"checkbox-scope_cnaf_quotient_familial",disabled:o,checked:a.scopes.cnaf_quotient_familial?"checked":false}),r.a.createElement("label",{htmlFor:"checkbox-scope_cnaf_quotient_familial",className:"label-inline"},"CNAF - Quotient familial")),r.a.createElement("div",null,r.a.createElement("input",{onChange:this.handleChange,type:"checkbox",name:"enrollment.scopes.cnaf_attestation_droits",id:"checkbox-scope_cnaf_attestation_droits",disabled:o,checked:a.scopes.cnaf_attestation_droits?"checked":false}),r.a.createElement("label",{htmlFor:"checkbox-scope_cnaf_attestation_droits",className:"label-inline"},"CNAF - Attestation de droits")))))),r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"donnees_conservation"},"Conservation des données ",r.a.createElement("i",null,"(en mois)")),r.a.createElement("input",{type:"number",onChange:this.handleChange,name:"enrollment.donnees.conservation",id:"donnees_conservation",disabled:o,value:a.donnees.conservation})),r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"donnees_destinataires"},"Destinataires ",r.a.createElement("a",{href:"https://www.cnil.fr/fr/definition/destinataire"},"(plus d´infos)")),r.a.createElement("input",{type:"text",onChange:this.handleChange,name:"enrollment.donnees.destinataires",id:"donnees_destinataires",disabled:o,value:a.donnees.destinataires})),r.a.createElement("h1",{id:"cgu"},"Conditions d´utilisation"),r.a.createElement("iframe",{src:"/static/docs/charte-fc.pdf",width:"100%",height:"800px"}),r.a.createElement("div",{className:"form__group"},r.a.createElement("input",{onChange:this.handleChange,disabled:o,checked:a.validation_de_convention,type:"checkbox",name:"enrollment.validation_de_convention",id:"validation_de_convention"}),r.a.createElement("label",{htmlFor:"validation_de_convention",className:"label-inline"},"Je valide les présentes conditions d'utilisation et confirme que le DPO de mon organisme est informé de ma demande")),!o&&r.a.createElement("div",{className:"button-list"},a.id&&r.a.createElement("button",{className:"button",type:"submit",name:"subscribe",id:"submit"},"Modifier la demande"),!a.id&&r.a.createElement("button",{className:"button",type:"submit",name:"subscribe",id:"submit"},"Soumettre la demande")),l.map(function(e){return r.a.createElement("div",{className:"notification error"},e)}))}}]);return t}(r.a.Component);b.defaultProps={id:""};var E=b;var g=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||false;a.configurable=true;if("value"in a)a.writable=true;Object.defineProperty(e,a.key,a)}}return function(t,n,a){if(n)e(t.prototype,n);if(a)e(t,a);return t}}();function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function N(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"===typeof t||"function"===typeof t)?t:e}function C(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var w=function(e){C(t,e);function t(){y(this,t);return N(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}g(t,[{key:"render",value:function e(){return r.a.createElement("nav",{className:"side-pane"},r.a.createElement("ul",{className:"side-pane__menu"},r.a.createElement("li",{className:"side-pane__title"},r.a.createElement("h3",null,"Votre demande")),r.a.createElement("li",null,r.a.createElement("a",{className:"side-pane__link",href:"#identite"},"Identité")),r.a.createElement("li",null,r.a.createElement("a",{className:"side-pane__link",href:"#demarche"},"Démarche")),r.a.createElement("li",null,r.a.createElement("a",{className:"side-pane__link",href:"#donnees"},"Données")),r.a.createElement("li",null,r.a.createElement("a",{className:"side-pane__link",href:"#cgu"},"Conditions d´utilisation"))))}}]);return t}(r.a.Component);var k=w;var S=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||false;a.configurable=true;if("value"in a)a.writable=true;Object.defineProperty(e,a.key,a)}}return function(t,n,a){if(n)e(t.prototype,n);if(a)e(t,a);return t}}();function x(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"===typeof t||"function"===typeof t)?t:e}function P(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var O=function(e){P(t,e);function t(){x(this,t);return j(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}S(t,[{key:"render",value:function e(){var t=this.props.url;return r.a.createElement(i["a"],{requireUser:true},r.a.createElement("div",{className:"documentation"},r.a.createElement(k,null),r.a.createElement("div",{className:"main-pane"},r.a.createElement(E,{id:t.query.id}))))}}]);return t}(r.a.Component);var q=t["default"]=O}},[270]);return{page:e.default}});