module.exports=__NEXT_REGISTER_PAGE("/api-particulier",function(){var e=webpackJsonp([10],{264:function(e,t,n){e.exports=n(90)},9:function(e,t,n){"use strict";var a=n(31);var r=n.n(a);var i=n(4);i.defaults.adapter=r.a;var o={createUserEnrollment:function e(t,n){return i.post("https://courtier.particulier.api.gouv.fr"+"/api/enrollments/",t,{headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}}).then(function(e){return e})},updateUserEnrollment:function e(t,n){return i.patch("https://courtier.particulier.api.gouv.fr"+"/api/enrollments/"+t.enrollment.id,t,{headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}}).then(function(e){return e})},getUserEnrollment:function e(t,n){n=n||localStorage.getItem("token");return i.get("https://courtier.particulier.api.gouv.fr"+"/api/enrollments/"+t,{headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}}).then(function(e){return e.data})},getUserEnrollments:function e(t){t=t||localStorage.getItem("token");return i.get("https://courtier.particulier.api.gouv.fr"+"/api/enrollments/",{headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"}}).then(function(e){return e.data})},triggerUserEnrollment:function e(t,n){var a=localStorage.getItem("token");return i.patch("https://courtier.particulier.api.gouv.fr"+"/api/enrollments/"+n.id+"/trigger",{event:t,enrollment:n},{headers:{Authorization:"Bearer "+a,"Content-Type":"application/json"}}).then(function(e){return e})},deleteUserEnrollment:function e(t,n){return i.delete("https://courtier.particulier.api.gouv.fr"+"/api/enrollments/"+n,{headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"}}).then(function(e){return e})},getResourceProviderService:function e(){return i.get("https://courtier.particulier.api.gouv.fr"+"/api/resource_providers").then(function(e){return e.data})}};t["a"]=o},90:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=n(0);var r=n.n(a);var i=n(15);var o=n(2);var l=n.n(o);var s=n(29);var c=n(9);var u=n(32);var d=n.n(u);var m=n(30);var p=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||false;a.configurable=true;if("value"in a)a.writable=true;Object.defineProperty(e,a.key,a)}}return function(t,n,a){if(n)e(t.prototype,n);if(a)e(t,a);return t}}();function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"===typeof t||"function"===typeof t)?t:e}function v(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var _=n(4);var b=[{id:"dpo",heading:"Délégué à la protection des données"},{id:"responsable_traitement",heading:"Responsable de traitement"},{id:"metier",heading:"Responsable métier"},{id:"technique",heading:"Responsable technique"},{id:"support",heading:"Responsable support"},{id:"autre",heading:"Autre contact"}];var g=function(e){v(t,e);function t(e){f(this,t);var n=h(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.getSiren=n.getSiren.bind(n);n.state={suggestions:[],enrollment:{scopes:{},acl:{send_application:true},contacts:b,siren:"",demarche:{intitule:"",description:"",cadre_juridique:""},donnees:{conservation:"",destinataires:""},fondement_juridique:"",validation_de_convention:false,"validation_delegue_a_la_protection_des_données":false},serviceProviders:[]};n.handleChange=n.handleChange.bind(n);n.handleSubmit=n.handleSubmit.bind(n);return n}p(t,[{key:"componentDidMount",value:function e(){var t=this;var n=this.props.id;var a=void 0;if("undefined"!==typeof localStorage)a=localStorage.getItem("token");if(n)_.get("https://courtier.particulier.api.gouv.fr"+"/api/enrollments/"+n,{headers:{Authorization:"Bearer "+a,"Content-Type":"application/json"}}).then(function(e){var n=e.data;t.setState({enrollment:n})})}},{key:"handleChange",value:function e(t){var n=t.target;var a="checkbox"===n.type?n.checked:n.value;var r=n.name;var i=Object.assign({},this.state);m["a"].deepSetInState(r,a,i);this.setState(i)}},{key:"handlePeopleChange",value:function e(t){var n=this;return function(e){var a=n.state.enrollment;var r=e.target;var i=r.value;var o=r.name;a=Object.assign({},a);a.contacts=a.contacts.map(function(e){if(e.id===t.id){e[o]=i;return e}return e});n.setState({enrollment:a})}}},{key:"handleSubmit",value:function e(t){var n=this.state;var a=localStorage.getItem("token");if(n.enrollment.id)c["a"].updateUserEnrollment(n,a).then(function(e){if(200===e.status)console.log(e)}).catch(function(e){return console.log(e)});else c["a"].createUserEnrollment(n,a).then(function(e){if(201===e.status)console.log(e)}).catch(function(e){return console.log(e)});t.preventDefault()}},{key:"getSiren",value:function e(t){var n=this;var a=this.state.enrollment;this.handleChange(t);_.get("https://sirene.entreprise.api.gouv.fr/v1/siren/"+t.target.value).then(function(e){var t=e.data.siege_social[0];var r=t.nom_raison_sociale;var i=t.nom+" "+t.prenom;var o=t.activite_principale;var l=[t.l2_normalisee,t.l3_normalisee,t.l4_normalisee,t.l5_normalisee,t.l6_normalisee,t.l7_normalisee].filter(function(e){return e}).join(", ");n.setState({sirenNotFound:false});n.setState({enrollment:Object.assign(a,{raison_sociale:r,adresse:l,responsable:i,code_naf:o})})}).catch(function(){return n.setState({sirenNotFound:true})})}},{key:"render",value:function e(){var t=this;var n=this.state,a=n.enrollment,i=n.sirenNotFound;var o=a.acl.send_application?false:"disabled";var l=0;var s=function e(n){n.id=n.id||"person_"+l++;return r.a.createElement("div",{key:n.id,className:"column",style:{minWidth:"400px",flex:1}},r.a.createElement("h4",null,n.heading),n.description&&r.a.createElement("section",{className:"information-text"},r.a.createElement("p",null,n.description)),r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"person_"+n.id+"_nom"},"Nom"),r.a.createElement("input",{type:"text",onChange:t.handlePeopleChange(n),name:"nom",id:"person_"+n.id+"_nom",disabled:o,value:n.nom})),r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"person_"+n.id+"_email"},"Email"),r.a.createElement("input",{type:"text",onChange:t.handlePeopleChange(n),name:"email",id:"person_"+n.id+"_email",disabled:o,value:n.email})))};return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h1",null,"Demande d'accès à API Particulier"),r.a.createElement("section",{className:"information-text"},r.a.createElement("p",null,"Pour avoir accès à l'API Particulier, diffusant des données personnelles, vous devez obtenir un agrément.  L'accès à cette API n'est pour l'instant disponible que si vous êtes:"),r.a.createElement("ul",null,r.a.createElement("li",null,"une administration"),r.a.createElement("li",null,"une entreprise prestataire d'une administration ou ayant une délégation de service public")),r.a.createElement("p",null,"Vous devez justifier d'une simplification pour les citoyens, et vous engager à n'accéder aux données personnelles qu’avec l’accord explicite de l’usager.")),r.a.createElement("h2",{id:"identite"},"Identité"),r.a.createElement("section",{className:"information-text"},r.a.createElement("p",null,"Pour vous identifier veuillez renseigner votre SIREN, ce qui permettra de renseigner votre raison sociale et votre adresse de par une connection à ",r.a.createElement("a",{href:"https://entreprise.data.gouv.fr/",target:"_blank",rel:"noopener noreferrer"},"l'API SIREN"))),r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"siren"},"Siren"),r.a.createElement("input",{type:"text",name:"enrollment.siren",onChange:this.getSiren,value:a.siren})),i&&r.a.createElement("p",null,r.a.createElement("div",{className:"notification warning"},"Nos service ne parviennent pas à trouver votre SIREN")),r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"raison_sociale"},"Raison sociale"),r.a.createElement("input",{type:"text",onChange:this.handleChange,name:"enrollment.raison_sociale",id:"raison_sociale",disabled:true,value:a.raison_sociale})),r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"adresse"},"Adresse"),r.a.createElement("input",{type:"text",onChange:this.handleChange,name:"enrollment.adresse",id:"adresse",disabled:true,value:a.adresse})),r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"code_naf"},"Code NAF"),r.a.createElement("input",{type:"text",onChange:this.handleChange,name:"enrollment.code_naf",id:"code_naf",disabled:true,value:a.code_naf})),r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"responsable"},"Responsable"),r.a.createElement("input",{type:"text",onChange:this.handleChange,name:"enrollment.responsable",id:"responsable",disabled:true,value:a.responsable})),r.a.createElement("h3",null,"Contacts"),r.a.createElement("div",{className:"row",style:{flexWrap:"wrap",justifyContent:"center"}},a.contacts.map(function(e){return s(e)})),r.a.createElement("h2",{id:"demarche"},"Démarche"),r.a.createElement("section",{className:"information-text"},r.a.createElement("p",null,"C'est la raison pour laquelle vous collectez des données personnelles, l'objectif qui est poursuivi par le fichier que vous mettez en place. Par exemple, « télé-procédure permettant aux usagers de demander une aide au paiement de la cantine des collégiens » ou « télé-procédure de demande de bourses de lycée ».")),r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"intitule_demarche"},"Intitulé"),r.a.createElement("input",{type:"text",onChange:this.handleChange,name:"enrollment.demarche.intitule",id:"intitule_demarche",disabled:o,value:a.demarche.intitule})),r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"description_service"},"Décrivez brièvement votre service ainsi que l‘utilisation prévue des données transmises"),r.a.createElement("textarea",{rows:"10",onChange:this.handleChange,name:"enrollment.demarche.description",id:"description_service",disabled:o,value:a.demarche.description})),r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"fondement_juridique"},"Cadre juridique ",r.a.createElement("i",null,"(Indiquez la référence ou l'URL du texte de loi)")),r.a.createElement("input",{type:"text",onChange:this.handleChange,name:"enrollment.demarche.fondement_juridique",id:"fondement_juridique",disabled:o,value:a.demarche.fondement_juridique})),r.a.createElement("section",{className:"information-text"},r.a.createElement("p",null,"Pour pouvoir bénéficier du raccordement à l‘API Particulier, le cadre légal et réglementaire des fournisseurs de service doit permettre à la DINSIC de transmettre des données fiscales  à votre entité administrative."),r.a.createElement("p",null,"Il vous est donc demandé de préciser les références du fondement légal de votre droit à demander ces informations (délibération du conseil municipal, décret …) ainsi que les informations relatives à votre téléservice.")),r.a.createElement("h2",{id:"donnees"},"Données"),r.a.createElement("div",{className:"form__group"},r.a.createElement("fieldset",{className:"vertical"},r.a.createElement("label",null,"Sélectionnez vos jeux de données souhaités"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column",style:{flex:1}},r.a.createElement("div",null,r.a.createElement("input",{onChange:this.handleChange,type:"checkbox",name:"enrollment.scopes.dgfip_avis_imposition",id:"checkbox-scope_dgfip_avis_imposition",disabled:o,checked:a.scopes.dgfip_avis_imposition?"checked":false}),r.a.createElement("label",{htmlFor:"checkbox-scope_dgfip_avis_imposition",className:"label-inline"},"DGFiP - Revenu fiscal de référence")),r.a.createElement("div",null,r.a.createElement("input",{onChange:this.handleChange,type:"checkbox",name:"enrollment.scopes.cnaf_quotient_familial",id:"checkbox-scope_cnaf_quotient_familial",disabled:o,checked:a.scopes.cnaf_quotient_familial?"checked":false}),r.a.createElement("label",{htmlFor:"checkbox-scope_cnaf_quotient_familial",className:"label-inline"},"CNAF - Quatient familial")),r.a.createElement("div",null,r.a.createElement("input",{onChange:this.handleChange,type:"checkbox",name:"enrollment.scopes.cnaf_attestation_droits",id:"checkbox-scope_cnaf_attestation_droits",disabled:o,checked:a.scopes.cnaf_attestation_droits?"checked":false}),r.a.createElement("label",{htmlFor:"checkbox-scope_cnaf_attestation_droits",className:"label-inline"},"CNAF - Attestation de droits")))))),r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"donnees_conservation"},"Conservation des données ",r.a.createElement("i",null,"(en mois)")),r.a.createElement("input",{type:"number",onChange:this.handleChange,name:"enrollment.donnees.conservation",id:"donnees_conservation",disabled:o,value:a.donnees.conservation})),r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"donnees_destinataires"},"Destinataires"),r.a.createElement("input",{type:"text",onChange:this.handleChange,name:"enrollment.donnees.destinataires",id:"donnees_destinataires",disabled:o,value:a.donnees.destinataires})),r.a.createElement("h1",{id:"convention"},"Convention"),r.a.createElement("section",{className:"information-text"},r.a.createElement("p",null,"Votre raccordement à l'API « Impôt Particulier » nécessite l'acceptation de la convention d'adhésion fixant vos engagements et ceux de la DGFIP et la DINSIC. ",r.a.createElement("br",null)," Les liens ci-dessous vous permettront de visualiser la convention type ainsi que ses annexes. ",r.a.createElement("br",null)," La convention générée à l'issue de votre demande de raccordement contiendra l'ensemble des éléments propres à votre situation. ",r.a.createElement("br",null)," Cette convention sera publiée sur api.gouv.fr et sera accessible via vos identifiants FranceConnect.")),r.a.createElement("iframe",{src:"static/docs/charte-fc.pdf",width:"100%",height:"800px"}),r.a.createElement("div",{className:"form__group"},r.a.createElement("input",{onChange:this.handleChange,disabled:o,checked:a.validation_de_convention,type:"checkbox",name:"enrollment.validation_de_convention",id:"validation_de_convention"}),r.a.createElement("label",{htmlFor:"validation_de_convention",className:"label-inline"},"Je valide la présente convention")),r.a.createElement("div",{className:"form__group"},r.a.createElement("input",{onChange:this.handleChange,disabled:o,checked:a.validation_delegue_a_la_protection_des_données,type:"checkbox",name:"enrollment.validation_delegue_a_la_protection_des_données",id:"dpo"}),r.a.createElement("label",{htmlFor:"dpo",className:"label-inline"},"Je confirme que le DPO de mon organisme est informé de la présente demande")),!o&&r.a.createElement("div",{className:"button-list"},a.id&&r.a.createElement("button",{className:"button",type:"submit",name:"subscribe",id:"submit"},"Modifier la demande"),!a.id&&r.a.createElement("button",{className:"button",type:"submit",name:"subscribe",id:"submit"},"Soumettre la demande")))}}]);return t}(r.a.Component);g.defaultProps={id:""};var E=g;var y=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||false;a.configurable=true;if("value"in a)a.writable=true;Object.defineProperty(e,a.key,a)}}return function(t,n,a){if(n)e(t.prototype,n);if(a)e(t,a);return t}}();function C(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function N(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"===typeof t||"function"===typeof t)?t:e}function x(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var k=function(e){x(t,e);function t(){C(this,t);return N(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}y(t,[{key:"render",value:function e(){return r.a.createElement("nav",{className:"side-pane"},r.a.createElement("ul",{className:"side-pane__menu"},r.a.createElement("li",{className:"side-pane__title"},r.a.createElement("h3",null,"Votre demande")),r.a.createElement("li",null,r.a.createElement("a",{className:"side-pane__link",href:"#identite"},"Identité")),r.a.createElement("li",null,r.a.createElement("a",{className:"side-pane__link",href:"#demarche"},"Démarche")),r.a.createElement("li",null,r.a.createElement("a",{className:"side-pane__link",href:"#donnees"},"Données"))))}}]);return t}(r.a.Component);var j=k;var P=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||false;a.configurable=true;if("value"in a)a.writable=true;Object.defineProperty(e,a.key,a)}}return function(t,n,a){if(n)e(t.prototype,n);if(a)e(t,a);return t}}();function S(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"===typeof t||"function"===typeof t)?t:e}function O(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var I=function(e){O(t,e);function t(){S(this,t);return w(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}P(t,[{key:"render",value:function e(){var t=this.props.url;return r.a.createElement(i["a"],{requireUser:true},r.a.createElement("div",{className:"documentation"},r.a.createElement(j,null),r.a.createElement("div",{className:"main-pane"},r.a.createElement(E,{id:t.query.id}))))}}]);return t}(r.a.Component);var q=t["default"]=I}},[264]);return{page:e.default}});