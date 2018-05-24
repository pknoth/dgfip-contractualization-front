module.exports=__NEXT_REGISTER_PAGE("/dgfip.html",function(){var e=webpackJsonp([13],{273:function(e,t,n){e.exports=n(95)},95:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=n(0);var l=n.n(a);var r=n(1);var o=n.n(r);var i=n(9);var s=n(19);var c=n.n(s);var m=n(21);var d=n(4);var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||false;a.configurable=true;if("value"in a)a.writable=true;Object.defineProperty(e,a.key,a)}}return function(t,n,a){if(n)e(t.prototype,n);if(a)e(t,a);return t}}();function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"===typeof t||"function"===typeof t)?t:e}function f(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var h=function(e){f(t,e);function t(e){p(this,t);var n=_(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.state={enrollment:{acl:{send_application:true},fournisseur_de_service:"",description_service:"",fondement_juridique:"",scope_dgfip_RFR:false,scope_dgfip_adresse_fiscale_taxation:false,nombre_demandes_annuelle:"",pic_demandes_par_heure:"",nombre_demandes_mensuelles_jan:"",nombre_demandes_mensuelles_fev:"",nombre_demandes_mensuelles_mar:"",nombre_demandes_mensuelles_avr:"",nombre_demandes_mensuelles_mai:"",nombre_demandes_mensuelles_jui:"",nombre_demandes_mensuelles_jul:"",nombre_demandes_mensuelles_aou:"",nombre_demandes_mensuelles_sep:"",nombre_demandes_mensuelles_oct:"",nombre_demandes_mensuelles_nov:"",nombre_demandes_mensuelles_dec:"",autorite_certification_nom:"",autorite_certification_fonction:"",date_homologation:"",date_fin_homologation:"",delegue_protection_donnees:"",validation_de_convention:false,certificat_pub_production:"",autorite_certification:"",fournisseur_de_donnees:"dgfip"},serviceProviders:[]};n.handleChange=n.handleChange.bind(n);n.handleSubmit=n.handleSubmit.bind(n);return n}u(t,[{key:"componentDidMount",value:function e(){var t=this;var n=this.props.id;var a=void 0;if("undefined"!==typeof localStorage)a=localStorage.getItem("token");if(n)d["a"].getUserEnrollment(n,a).then(function(e){t.setState({enrollment:e})})}},{key:"handleChange",value:function e(t){var n=t.target;var a="checkbox"===n.type?n.checked:n.value;var l=n.name;var r=Object.assign({},this.state);m["a"].deepSetInState(l,a,r);this.setState(r)}},{key:"handleSubmit",value:function e(t){var n=this.state;var a=localStorage.getItem("token");if(n.enrollment.id)d["a"].updateUserEnrollment(n,a).then(function(e){if(200===e.status)c.a.push("/");else if(422===e.status)alert("Formulaire incomplet"+e.request.response);else if(401===e.status)alert("Vous n'êtes pas autorisé"+e);else alert("Erreur inconnue"+e)});else d["a"].createUserEnrollment(n,a).then(function(e){if(201===e.status)c.a.push("/");else if(422===e.status)alert("Formulaire incomplet"+e.request.response);else if(401===e.status)alert("Vous n'êtes pas autorisé"+e);else alert("Erreur inconnue"+e)});t.preventDefault()}},{key:"render",value:function e(){var t=this.state,n=t.enrollment,a=t.serviceProviders;var r=n.acl.send_application?false:"disabled";var o=0;return l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("h1",null,"Demande d'accès à l'API Impôts Particulier"),l.a.createElement("p",null,"Dans le cadre du programme « Dites-le nous une fois - Particuliers», visant à simplifier les démarches administratives des usagers, l'API « Impôt Particulier » permet de récupérer des informations fiscales des usagers de façon à leur éviter la transmission de leur avis d'imposition papier."),l.a.createElement("p",null,"Ce portail permet de faciliter le raccordement du téléservice des fournisseurs de service à l'API « Impôt Particulier »."),l.a.createElement("p",null,"Pour cela, il vous sera demandé de compléter le plus précisément possible les informations sur :"),l.a.createElement("ul",null,l.a.createElement("li",null,"le fondement juridique"),l.a.createElement("li",null,"les données nécessaires à la démarche administrative"),l.a.createElement("li",null,"la volumétrie de sollicitation de l'API"),l.a.createElement("li",null,"la protection des données personnelles.")),l.a.createElement("p",null,"Un outil, conçu par la DGFiP et la DINSIC, est par ailleurs mis à votre disposition pour pouvoir tester l'authentification SSL et concevoir vos bouchons ."),l.a.createElement("p",null,"Ce portail permet de faciliter le raccordement du téléservice des fournisseurs de service à l'API « Impôt Particulier »."),l.a.createElement("div",null,l.a.createElement("input",{onChange:this.handleChange,type:"checkbox",name:"enrollment.administration",id:"checkbox-administration",disabled:r,checked:n.administration?"checked":false}),l.a.createElement("label",{htmlFor:"checkbox-administration",className:"label-inline"},"Êtes-vous ou représentez-vous une administration publique (État, collectivités territoriales...) ?")),l.a.createElement("div",null,l.a.createElement("input",{onChange:this.handleChange,type:"checkbox",name:"enrollment.france_connect",id:"checkbox-france_connect",disabled:r,checked:n.france_connect?"checked":false}),l.a.createElement("label",{htmlFor:"checkbox-france_connect",className:"label-inline"},"Avez-vous intégré le bouton FranceConnect ou êtes-vous éligible à son intégration ?")),l.a.createElement("div",null,l.a.createElement("input",{onChange:this.handleChange,type:"checkbox",name:"enrollment.autorisation_legale",id:"checkbox-autorisation_legale",disabled:r,checked:n.autorisation_legale?"checked":false}),l.a.createElement("label",{htmlFor:"checkbox-autorisation_legale",className:"label-inline"},"Possédez-vous un cadre légal permettant de solliciter des données fiscales auprès de la DGFiP ?")),l.a.createElement("h1",{id:"legal"},"Fondement juridique"),l.a.createElement("section",{className:"information-text"},l.a.createElement("p",null,"Pour pouvoir bénéficier du raccordement à l‘API Impôts Particulier, le cadre légal et réglementaire des fournisseurs de service doit permettre à la DGFIP de transmettre des données fiscales  à votre entité administrative."),l.a.createElement("p",null,"Il vous est donc demandé de préciser les références du fondement légal de votre droit à demander ces informations (délibération du conseil municipal, décret …) ainsi que les informations relatives à votre téléservice.")),l.a.createElement("div",{className:"form__group"},l.a.createElement("label",{htmlFor:"fournisseur_de_service"},"Sélectionnez le Fournisseur de Service FranceConnect pour lequel vous souhaitez un raccordement"),l.a.createElement("p",null,l.a.createElement("a",{className:"button",href:"http://courtier.particulier.api.gouv.fr/users/auth/france_connect"},"Se connecter auprès de France Connect afin de récupérer mes démarches")),l.a.createElement("select",{onChange:this.handleChange,name:"enrollment.fournisseur_de_service"},l.a.createElement("option",null,"-- sélectionnez une démarche --"),n.fournisseur_de_service&&l.a.createElement("option",{selected:"selected",value:n.fournisseur_de_service},n.fournisseur_de_service),l.a.createElement("option",{value:"Une démarche de test"},"Une démarche de test"),a.map(function(e){return l.a.createElement("option",{key:o++,value:e.name},e.name)}))),l.a.createElement("div",{className:"form__group"},l.a.createElement("label",{htmlFor:"description_service"},"Décrivez brièvement votre service ainsi que l‘utilisation prévue des données transmises"),l.a.createElement("textarea",{rows:"10",onChange:this.handleChange,name:"enrollment.description_service",id:"description_service",disabled:r,value:n.description_service})),l.a.createElement("div",{className:"form__group"},l.a.createElement("label",{htmlFor:"fondement_juridique"},"Veuillez transmettre le fondement juridique sur lequel s’appuie votre demande"),l.a.createElement("textarea",{rows:"10",onChange:this.handleChange,name:"enrollment.fondement_juridique",id:"fondement_juridique",disabled:r,value:n.fondement_juridique})),l.a.createElement("h1",{id:"donnees"},"Choix des données"),l.a.createElement("section",{className:"information-text"},l.a.createElement("p",null,"La loi informatique et libertés définit les principes à respecter lors de la collecte, du traitement et de la conservation de données personnelles."),l.a.createElement("p",null,"L’article 6 précise :"),l.a.createElement("ul",null,l.a.createElement("li",null,"3° [les données] sont adéquates, pertinentes et non excessives au regard des finalités pour lesquelles elles sont collectées et de leurs traitements ultérieurs ;"),l.a.createElement("li",null,"4° Elles sont exactes, complètes et, si nécessaire, mises à jour ; les mesures appropriées doivent être prises pour que les données inexactes ou incomplètes au regard des finalités pour lesquelles elles sont collectées ou traitées soient effacées ou rectifiées ;")),l.a.createElement("p",null,"Nous vous remercions de sélectionner uniquement les données strictement nécessaires à votre téléservice. Le non-respect du principe de proportionnalité vous expose vis à vis de la CNIL."),l.a.createElement("p",null,"Vous pouvez consulter le ",l.a.createElement("a",{href:"/static/docs/cst-dgfip.pdf",target:"_blank"},"Contrat de Service Technique (CST)")," pour voir le détail des données disponibles.")),l.a.createElement("div",{className:"form__group"},l.a.createElement("fieldset",{className:"vertical"},l.a.createElement("legend",null,"Sélectionnez vos jeux de données souhaités"),l.a.createElement("div",null,l.a.createElement("input",{onChange:this.handleChange,type:"checkbox",name:"enrollment.scope_dgfip_RFR",id:"checkbox-scope_dgfip_RFR",disabled:r,checked:n.scope_dgfip_RFR?"checked":false}),l.a.createElement("label",{htmlFor:"checkbox-scope_dgfip_RFR",className:"label-inline"},"DGFiP - Revenu Fiscal de Référence (RFR) et nombre de parts fiscales du foyer")),l.a.createElement("div",null,l.a.createElement("input",{onChange:this.handleChange,checked:n.scope_dgfip_adresse_fiscale_taxation?"checked":false,type:"checkbox",name:"enrollment.scope_dgfip_adresse_fiscale_taxation",id:"checkbox-scope_dgfip_adresse_fiscale_taxation",disabled:r}),l.a.createElement("label",{htmlFor:"checkbox-scope_dgfip_adresse_fiscale_taxation",className:"label-inline"},"DGFiP - Adresse fiscale de taxation au 1er janvier")))),l.a.createElement("h1",{id:"volumetrie"},"Volumétrie"),l.a.createElement("section",{className:"information-text"},l.a.createElement("p",null,"Connaitre les données relatives à la volumétrie et à la saisonnalité de votre téléservice nous permettra de vous offrir la meilleure qualité de service possible. En effet, cela permettra de prévenir les pics de charges et de transmettre ces informations aux fournisseurs de vos données."),l.a.createElement("p",null,"Conformément à notre charte, nous nous réservons le droit de réduire ou couper les appels autorisés au fournisseur de service.")),l.a.createElement("div",{className:"form__group"},l.a.createElement("label",{htmlFor:"nombre_demandes_annuelle"},"Connaissez-vous le volume global annuel des demandes de votre téléservice ?"),l.a.createElement("input",{type:"text",onChange:this.handleChange,name:"enrollment.nombre_demandes_annuelle",id:"nombre_demandes_annuelle",disabled:r,value:n.nombre_demandes_annuelle})),l.a.createElement("div",{className:"form__group"},l.a.createElement("label",{htmlFor:"pic_demandes_par_heure"},"Connaissez-vous le pic de charge (en nombre de demandes horaires) ?"),l.a.createElement("input",{type:"text",onChange:this.handleChange,name:"enrollment.pic_demandes_par_heure",id:"pic_demandes_par_heure",disabled:r,value:n.pic_demandes_par_heure})),l.a.createElement("div",{className:"form__group"},l.a.createElement("label",null,"Connaissez-vous la répartition de la charge des demandes mensuelles (0 si le service est fermé) ?"),l.a.createElement("div",{className:"form__group"},l.a.createElement("div",{className:"date_input_row"},l.a.createElement("div",{className:"date_input_col"},l.a.createElement("label",{htmlFor:"nombre_demandes_mensuelles_jan"},"Janvier"),l.a.createElement("input",{type:"text",onChange:this.handleChange,name:"enrollment.nombre_demandes_mensuelles_jan",id:"nombre_demandes_mensuelles_jan",disabled:r,value:n.nombre_demandes_mensuelles_jan})),l.a.createElement("div",{className:"date_input_col"},l.a.createElement("label",{htmlFor:"nombre_demandes_mensuelles_fev"},"Février"),l.a.createElement("input",{type:"text",onChange:this.handleChange,name:"enrollment.nombre_demandes_mensuelles_fev",id:"nombre_demandes_mensuelles_fev",disabled:r,value:n.nombre_demandes_mensuelles_fev})),l.a.createElement("div",{className:"date_input_col"},l.a.createElement("label",{htmlFor:"nombre_demandes_mensuelles_mar"},"Mars"),l.a.createElement("input",{type:"text",onChange:this.handleChange,name:"enrollment.nombre_demandes_mensuelles_mar",id:"nombre_demandes_mensuelles_mar",disabled:r,value:n.nombre_demandes_mensuelles_mar})),l.a.createElement("div",{className:"date_input_col"},l.a.createElement("label",{htmlFor:"nombre_demandes_mensuelles_avr"},"Avril"),l.a.createElement("input",{type:"text",onChange:this.handleChange,name:"enrollment.nombre_demandes_mensuelles_avr",id:"nombre_demandes_mensuelles_avr",disabled:r,value:n.nombre_demandes_mensuelles_avr})),l.a.createElement("div",{className:"date_input_col"},l.a.createElement("label",{htmlFor:"nombre_demandes_mensuelles_mai"},"Mai"),l.a.createElement("input",{type:"text",onChange:this.handleChange,name:"enrollment.nombre_demandes_mensuelles_mai",id:"nombre_demandes_mensuelles_mai",disabled:r,value:n.nombre_demandes_mensuelles_mai})),l.a.createElement("div",{className:"date_input_col"},l.a.createElement("label",{htmlFor:"nombre_demandes_mensuelles_juin"},"Juin"),l.a.createElement("input",{type:"text",onChange:this.handleChange,name:"enrollment.nombre_demandes_mensuelles_juin",id:"nombre_demandes_mensuelles_juin",disabled:r,value:n.nombrde_e_demandes_mensuelles_juin})),l.a.createElement("div",{className:"date_input_col"},l.a.createElement("label",{htmlFor:"nombre_demandes_mensuelles_jui"},"Juillet"),l.a.createElement("input",{type:"text",onChange:this.handleChange,name:"enrollment.nombre_demandes_mensuelles_jui",id:"nombre_demandes_mensuelles_jui",disabled:r,value:n.nombre_demandes_mensuelles_jui})),l.a.createElement("div",{className:"date_input_col"},l.a.createElement("label",{htmlFor:"nombre_demandes_mensuelles_aou"},"Août"),l.a.createElement("input",{type:"text",onChange:this.handleChange,name:"enrollment.nombre_demandes_mensuelles_aou",id:"nombre_demandes_mensuelles_aou",disabled:r,value:n.nombre_demandes_mensuelles_aou})),l.a.createElement("div",{className:"date_input_col"},l.a.createElement("label",{htmlFor:"nombre_demandes_mensuelles_sep"},"Septembre"),l.a.createElement("input",{type:"text",onChange:this.handleChange,name:"enrollment.nombre_demandes_mensuelles_sep",id:"nombre_demandes_mensuelles_sep",disabled:r,value:n.nombre_demandes_mensuelles_sep})),l.a.createElement("div",{className:"date_input_col"},l.a.createElement("label",{htmlFor:"nombre_demandes_mensuelles_oct"},"Octobre"),l.a.createElement("input",{type:"text",onChange:this.handleChange,name:"enrollment.nombre_demandes_mensuelles_oct",id:"nombre_demandes_mensuelles_oct",disabled:r,value:n.nombre_demandes_mensuelles_oct})),l.a.createElement("div",{className:"date_input_col"},l.a.createElement("label",{htmlFor:"nombre_demandes_mensuelles_nov"},"Novembre"),l.a.createElement("input",{type:"text",onChange:this.handleChange,name:"enrollment.nombre_demandes_mensuelles_nov",id:"nombre_demandes_mensuelles_nov",disabled:r,value:n.nombre_demandes_mensuelles_nov})),l.a.createElement("div",{className:"date_input_col"},l.a.createElement("label",{htmlFor:"nombre_demandes_mensuelles_dec"},"Décembre"),l.a.createElement("input",{type:"text",onChange:this.handleChange,name:"enrollment.nombre_demandes_mensuelles_dec",id:"nombre_demandes_mensuelles_dec",disabled:r,value:n.nombre_demandes_mensuelles_dec}))))),l.a.createElement("h1",{id:"cnil"},"Obligation CNIL"),l.a.createElement("section",{className:"information-text"},l.a.createElement("p",null,"L’entrée en vigueur le 25 mai 2018 du règlement européen sur la protection des données supprime totalement le régime déclaratif."),l.a.createElement("p",null,"Les fournisseurs de services ont en particulier l’obligation de tenir un registre de leurs activités de traitement, d’encadrer les opérations sous-traitées dans les contrats de prestation de services, de formaliser des politiques de confidentialité des données et des procédures relatives à la gestion des demandes d’exercice des droits."),l.a.createElement("p",null,"La désignation d’un délégué à la protection des données - successeur du correspondant informatique et libertés (CIL) dont la désignation est aujourd’hui facultative - devient obligatoire pour les organismes et autorités publics, et donc pour les fournisseurs de services.")),l.a.createElement("div",{className:"form__group"},l.a.createElement("label",{htmlFor:"delegue_protection_donnees"},"Délégué·e à la protection des données"),l.a.createElement("input",{type:"text",onChange:this.handleChange,name:"enrollment.delegue_protection_donnees",id:"delegue_protection_donnees",disabled:r,value:n.delegue_protection_donnees})),l.a.createElement("div",{className:"form__group"},l.a.createElement("input",{type:"checkbox",onChange:this.handleChange,name:"enrollment.demarche_cnil",id:"demarche_cnil",checked:n.demarche_cnil?"checked":false}),l.a.createElement("label",{htmlFor:"demarche_cnil",className:"label-inline"},"Je déclare avoir accompli mes démarches CNIL en accord avec le règlement général de protection des données")),l.a.createElement("h1",{id:"convention"},"Convention"),l.a.createElement("section",{className:"information-text"},l.a.createElement("p",null,"Votre raccordement à l‘API « Impôt Particulier » nécessite l‘acceptation de la convention d‘adhésion fixant vos engagements et ceux de la DGFIP et la DINSIC. ",l.a.createElement("br",null)," Les liens ci-dessous vous permettront de visualiser la convention type ainsi que ses annexes. ",l.a.createElement("br",null)," La convention générée à l‘issue de votre demande de raccordement contiendra l‘ensemble des éléments propres à votre situation. ",l.a.createElement("br",null)," Cette convention sera publiée sur api.gouv.fr et sera accessible via vos identifiants FranceConnect.")),l.a.createElement("iframe",{src:"/static/docs/charte-fc.pdf",width:"100%",height:"800px"}),l.a.createElement("div",{className:"form__group"},l.a.createElement("input",{onChange:this.handleChange,disabled:r,checked:n.validation_de_convention,type:"checkbox",name:"enrollment.validation_de_convention",id:"validation_de_convention"}),l.a.createElement("label",{htmlFor:"validation_de_convention",className:"label-inline"},"Je valide la présente convention")),!r&&l.a.createElement("div",{className:"button-list"},n.id&&l.a.createElement("button",{className:"button",type:"submit",name:"subscribe",id:"submit"},"Modifier la demande"),!n.id&&l.a.createElement("button",{className:"button",type:"submit",name:"subscribe",id:"submit"},"Soumettre la demande")))}}]);return t}(l.a.Component);h.defaultProps={id:""};var v=h;var b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var g=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||false;a.configurable=true;if("value"in a)a.writable=true;Object.defineProperty(e,a.key,a)}}return function(t,n,a){if(n)e(t.prototype,n);if(a)e(t,a);return t}}();function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"===typeof t||"function"===typeof t)?t:e}function C(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var N=function(e){C(t,e);function t(e){E(this,t);var n=y(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.state={enrollment:{acl:{}}};return n}g(t,[{key:"componentDidMount",value:function e(){var t=this;var n=this.props.id;var a=void 0;if("undefined"===typeof localStorage?"undefined":b(localStorage))a=localStorage.getItem("token");if(n)d["a"].getUserEnrollment(n,a).then(function(e){t.setState({enrollment:e})})}},{key:"render",value:function e(){var t=this.state.enrollment;return l.a.createElement("nav",{className:"side-pane"},l.a.createElement("ul",{className:"side-pane__menu"},l.a.createElement("li",{className:"text-center"},l.a.createElement("a",{className:"side-pane__link",href:"http://dgfip.com"},l.a.createElement("img",{src:"/static/images/logo-dgfip.png",style:{mixBlendMode:"multiply"}}))),l.a.createElement("li",{className:"side-pane__title"},l.a.createElement("h3",null,"Votre demande")),l.a.createElement("li",null,l.a.createElement("a",{className:"side-pane__link",href:"#legal"},"Fondement juridique")),l.a.createElement("li",null,l.a.createElement("a",{className:"side-pane__link",href:"#donnees"},"Choix des données")),l.a.createElement("li",null,l.a.createElement("a",{className:"side-pane__link",href:"#volumetrie"},"Volumétrie")),l.a.createElement("li",null,l.a.createElement("a",{className:"side-pane__link",href:"#cnil"},"Obligation CNIL")),l.a.createElement("li",null,l.a.createElement("a",{className:"side-pane__link",href:"#convention"},"Convention"))),t.acl.show_technical_inputs&&l.a.createElement("ul",{className:"side-pane__menu"},l.a.createElement("li",{className:"side-pane__title"},l.a.createElement("h3",null,"Données de productions")),l.a.createElement("li",null,l.a.createElement("a",{className:"side-pane__link",href:"#entrants-techniques"},"Entrants techniques")),l.a.createElement("li",null,l.a.createElement("a",{className:"side-pane__link",href:"#homologation-securite"},"Homologation de sécurité")),l.a.createElement("li",null,l.a.createElement("a",{className:"side-pane__link",href:"#recette-fonctionnelle"},"Recette fonctionnelle"))))}}]);return t}(l.a.Component);N.defaultProps={id:""};var x=N;var k="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var S=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||false;a.configurable=true;if("value"in a)a.writable=true;Object.defineProperty(e,a.key,a)}}return function(t,n,a){if(n)e(t.prototype,n);if(a)e(t,a);return t}}();function F(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"===typeof t||"function"===typeof t)?t:e}function j(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var q=n(18);var I=function(e){j(t,e);function t(e){F(this,t);var n=P(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.state={enrollment:{documents:[],acl:{},ips_de_production:"",autorite_certification:"",autorite_certification_nom:"",autorite_certification_fonction:"",date_homologation:"",date_fin_homologation:"",recette_fonctionnelle:false}};n.handleChange=n.handleChange.bind(n);n.handleSubmit=n.handleSubmit.bind(n);n.upload=n.upload.bind(n);return n}S(t,[{key:"componentDidMount",value:function e(){var t=this;var n=this.props.id;var a=void 0;if("undefined"===typeof localStorage?"undefined":k(localStorage))a=localStorage.getItem("token");if(n)d["a"].getUserEnrollment(n,a).then(function(e){t.setState({enrollment:e})})}},{key:"upload",value:function e(t){var n=this;var a=this.props.id;var l=new FormData;l.append("enrollment[documents_attributes][][attachment]",t.target.files[0]);l.append("enrollment[documents_attributes][][type]","Document::ProductionCertificatePublicKey");var r=void 0;if("undefined"===typeof localStorage?"undefined":k(localStorage))r=localStorage.getItem("token");q.patch("https://courtier.particulier.api.gouv.fr"+"/api/enrollments/"+a,l,{headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"}}).then(function(e){return n.setState({enrollment:e.data})})}},{key:"handleChange",value:function e(t){var n=t.target;var a="checkbox"===n.type?n.checked:n.value;var l=n.name;var r=Object.assign({},this.state);m["a"].deepSetInState(l,a,r);this.setState(r)}},{key:"handleSubmit",value:function e(t){var n=void 0;if("undefined"===typeof localStorage?"undefined":k(localStorage))n=localStorage.getItem("token");var a=this.state.enrollment;d["a"].triggerUserEnrollment("send_technical_inputs",a,n).then(function(e){if(200===e.status)c.a.push("/")}).catch(function(e){if(422===e.response.status)alert("Formulaire incomplet"+e.response.request.response);else if(401===e.response.status)alert("Vous n'êtes pas autorisé"+e.response);else alert("Erreur inconnue"+e.response)});t.preventDefault()}},{key:"render",value:function e(){var t=void 0;if("undefined"!==typeof localStorage)t=localStorage.getItem("token");var n=this.state.enrollment;var a=n.acl.send_technical_inputs?false:"disabled";var r=n.documents.filter(function(e){return"Document::ProductionCertificatePublicKey"===e.type})[0];return l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("h1",{id:"entrants-techniques"},"Entrants techniques"),l.a.createElement("section",{className:"information-text"},l.a.createElement("p",null,"Afin de permettre la liaison technique entre votre SI et celui de la DGFiP, vous devez fournir les entrants techniques suivants : ",l.a.createElement("br",null),"adresse(s) IP du(-es) serveur(s) qui va(-ont) communiquer avec l'API « Impôt Particulier »",l.a.createElement("br",null),"partie publique d’un certificat client RGS V2.0 en cours de validité avec son autorité de certification émettrice"),l.a.createElement("p",null,"Afin de permettre votre mise en production dans les meilleures conditions possibles, veuillez vous assurer de la qualité de ces livrables techniques.")),l.a.createElement("div",{className:"form__group"},l.a.createElement("label",{htmlFor:"production_certificate"},"Certificat de production"),r&&l.a.createElement("a",{href:"https://courtier.particulier.api.gouv.fr"+r.attachment.url+"?token="+t},"certificat"),l.a.createElement("input",{type:"file",onChange:this.upload,disabled:a,name:"enrollment.production_certificate",id:"production_certificate"})),l.a.createElement("div",{className:"form__group"},l.a.createElement("label",{htmlFor:"autorite_certification"},"Autorité de certification"),l.a.createElement("input",{type:"text",onChange:this.handleChange,name:"enrollment.autorite_certification",id:"autorite_certification",disabled:a,value:n.autorite_certification})),l.a.createElement("div",{className:"form__group"},l.a.createElement("section",{className:"information-text"},l.a.createElement("p",null,"La demande d'entrée en production revêt un caractère définitif et entraîne le transfert de vos entrants techniques vers les exploitants informatiques de la DGFiP. Merci de vous assurer de la bonne valorisation de l'ensemble des informations demandées avant de procéder à cette demande."),l.a.createElement("p",null,"Votre entrée en production se fera lors du premier créneau disponible à compter de l'envoi des entrants technique de production et conformément au calendrier accessible via le lien ci-dessous. ")),l.a.createElement("label",{htmlFor:"ips_de_production"},"IPs de production"),l.a.createElement("input",{type:"text",onChange:this.handleChange,name:"enrollment.ips_de_production",id:"ips_de_production",disabled:a,value:n.ips_de_production})),l.a.createElement("h1",{id:"homologation-securite"},"Homologation de sécurité"),l.a.createElement("section",{className:"information-text"},l.a.createElement("p",null,"Le Référentiel Général de Sécurité (RGS 2.0) rend la démarche d’homologation obligatoire pour les SI relatifs aux échanges entre une autorité administrative et les usagers ou entre autorités administratives."),l.a.createElement("p",null,"Si vous l'avez déjà fait, complétez les informations relatives à l'homologation et déposez la décision formelle d’homologation (également appelée attestation formelle)."),l.a.createElement("p",null,"Si vous ne l'avez pas encore fait, envoyez-nous tout de même votre demande et nous vous aiderons à entamer cette démarche.")),l.a.createElement("div",{className:"form__group"},l.a.createElement("label",{htmlFor:"autorite_certification_nom"},"Nom de l'autorité de certification"),l.a.createElement("input",{type:"text",onChange:this.handleChange,name:"enrollment.autorite_certification_nom",id:"autorite_certification_nom",disabled:a,value:n.autorite_certification_nom})),l.a.createElement("div",{className:"form__group"},l.a.createElement("label",{htmlFor:"autorite_certification_fonction"},"Fonction de l'autorité de certification"),l.a.createElement("input",{type:"text",onChange:this.handleChange,name:"enrollment.autorite_certification_fonction",id:"autorite_certification_fonction",disabled:a,value:n.autorite_certification_fonction})),l.a.createElement("div",{className:"form__group"},l.a.createElement("label",{htmlFor:"date_homologation"},"Date de début l'homologation"),l.a.createElement("input",{type:"date",onChange:this.handleChange,name:"enrollment.date_homologation",id:"date_homologation",disabled:a,value:n.date_homologation})),l.a.createElement("div",{className:"form__group"},l.a.createElement("label",{htmlFor:"date_fin_homologation"},"Date de fin de l'homologation"),l.a.createElement("input",{type:"date",onChange:this.handleChange,name:"enrollment.date_fin_homologation",id:"date_fin_homologation",disabled:a,value:n.date_fin_homologation})),l.a.createElement("h1",{id:"recette-fonctionnelle"},"Recette fonctionnelle"),l.a.createElement("section",{className:"information-text"},l.a.createElement("p",null,"Afin d’assurer la qualification de votre applicatif, un générateur de bouchons est mis à votre disposition en suivant le lien ci-dessous. Il vous permettra de valoriser les données retournées par l'API « Impôt Particulier » en fonction de vos besoins métier ou d’utiliser le jeu de données natif. Cette qualification est obligatoire tant pour votre homologation de sécurité ou vos obligations CNIL que pour demander l'entrée en production auprès de la DGFiP."),l.a.createElement("p",null,l.a.createElement("a",{href:""},"Accèder aux générateurs de bouchons"))),l.a.createElement("div",null,l.a.createElement("input",{onChange:this.handleChange,checked:n.recette_fonctionnelle,type:"checkbox",name:"enrollment.recette_fonctionnelle",id:"checkbox-recette_fonctionnelle",disabled:a}),l.a.createElement("label",{htmlFor:"checkbox-recette_fonctionnelle",className:"label-inline"},"J'atteste avoir réalisé une recette fonctionnelle")),!a&&l.a.createElement("div",{className:"submit"},l.a.createElement("section",{className:"section"},l.a.createElement("div",{className:"notification"},l.a.createElement("p",null,"La demande d’entrée en production revêt un caractère définitif et entraîne le transfert de vos entrants techniques vers les exploitants informatiques de la DGFiP. Merci de vous assurer de la bonne valorisation de l'ensemble des informations demandées avant de procéder à cette demande."),l.a.createElement("p",null,"Votre entrée en production se fera lors du premier créneau disponible à compter de l'envoi des entrants technique de production et conformément au calendrier accessible via le lien ci-dessous. "),l.a.createElement("button",{className:"button",type:"submit",name:"subscribe",id:"submit"},"Envoyer les entrants techniques")))))}}]);return t}(l.a.Component);I.defaultProps={id:""};var w=I;var O=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||false;a.configurable=true;if("value"in a)a.writable=true;Object.defineProperty(e,a.key,a)}}return function(t,n,a){if(n)e(t.prototype,n);if(a)e(t,a);return t}}();function D(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function R(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"===typeof t||"function"===typeof t)?t:e}function z(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var A=function(e){z(t,e);function t(e){D(this,t);var n=R(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.state={enrollment:{acl:{}}};return n}O(t,[{key:"componentDidMount",value:function e(){var t=this;var n=this.props.url;var a=n.query.token;var l=void 0;if("undefined"!==typeof localStorage&&a)localStorage.setItem("token-fc",a);if("undefined"!==typeof localStorage)l=localStorage.getItem("token");if(n.query.id)d["a"].getUserEnrollment(n.query.id,l).then(function(e){t.setState({enrollment:e})})}},{key:"render",value:function e(){var t=this.props.url;var n=this.state.enrollment;return l.a.createElement(i["a"],null,l.a.createElement("div",{className:"documentation"},l.a.createElement(x,{id:t.query.id}),l.a.createElement("div",{className:"main-pane"},l.a.createElement(v,{id:t.query.id}),n.acl.show_technical_inputs&&l.a.createElement(w,{id:t.query.id}))))}}]);return t}(l.a.Component);var L=t["default"]=A}},[273]);return{page:e.default}});