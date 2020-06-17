(this.webpackJsonpgroels_site=this.webpackJsonpgroels_site||[]).push([[0],{10:function(e,t,a){e.exports=a(23)},15:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),l=a.n(i),o=(a(15),a(9)),s=a(8),c=a.n(s),m=function(e){var t=e.name;return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",id:"sideNav"},r.a.createElement("a",{className:"navbar-brand js-scroll-trigger",href:"#about"},r.a.createElement("span",{className:"d-block d-lg-none"},t),r.a.createElement("span",{className:"d-none d-lg-block"},r.a.createElement("img",{className:"img-fluid img-profile rounded-circle mx-auto mb-2",src:c.a,alt:"profile picture"}))),r.a.createElement("button",{className:"navbar-toggle",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-expanded":"false","aria-label":"toggle navigation"},r.a.createElement("span",{className:"navbar-toggle-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#about"},"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#experience"},"Work Experience")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#education"},"Education")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#portfolio"},"Portfolio")))))},d=function(e){var t=e.experienceData;return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex justify-content-left",id:"experience"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Work Experience"),t&&t.map((function(e,t){return r.a.createElement("div",{key:t,className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-0"},r.a.createElement("div",{className:"resume-content"},r.a.createElement("h3",{className:"mb-0"},e.company),r.a.createElement("h4",null,e.position),r.a.createElement("div",{className:"text-primary mb-1"},e.skills),r.a.createElement("div",{className:"subheading"},"Roles and Responsibilities"),r.a.createElement("ul",null,e.description.map((function(e,t){return r.a.createElement("li",{key:t,className:"text-primary"},e)})))),r.a.createElement("div",{className:"resume-date text-md-right mb-3"},r.a.createElement("span",{className:"text-primary"},e.fromDate," - ",e.toDate)))}))))},p=a(3),u=a(5),g=function(e){e.landingData;return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"about"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h1",{className:"mb-0"},"Gabriel",r.a.createElement("span",{className:"text-primary text-title-surname"},"Roels")),r.a.createElement("div",{className:"subheading mb-5"},r.a.createElement("a",{href:"mailto:gabrielroels@gmail.com",className:"dark-link"},"gabrielroels@gmail.com")),r.a.createElement("div",{className:"text-primary mb-0"},"A competent graduate student with experience as a professional C++ developer at IBM."),r.a.createElement("div",{className:"text-primary mb-4"},"Strong background in both technical and social work environments."),r.a.createElement("div",{className:"text-primary mb-0"},"I have experience in production-ready C++, Python and with writing libraries in Rust."),r.a.createElement("div",{className:"text-primary mb-0"},"I am:"),r.a.createElement("ul",{className:"mb-4"},r.a.createElement("li",null,"A strong team-player with a passion for development."),r.a.createElement("li",null,"A natural leader with experience working alongside senior developers."),r.a.createElement("li",null,"A developer responsible for the implementation of notable client-facing features in IBM's product: App Connect Enterprise.")),r.a.createElement("div",{className:"mb-5"},"In my free time I enjoy working on personal projects and exploring technologies such as the Semantic Web and WebAssembly."),r.a.createElement("div",{className:"social-icons"},r.a.createElement("a",{href:"https://github.com/GGabi"},r.a.createElement(p.a,{icon:u.a})),r.a.createElement("a",{href:"https://www.linkedin.com/in/gabriel-roels-a20048169/"},r.a.createElement(p.a,{icon:u.b})))))},f=function(e){var t=e.educationData;return r.a.createElement("section",{className:"education-section p-3 p-lg-5 d-flex justify-content-left",id:"education"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Education"),r.a.createElement("h3",{className:"university-name mb-0"},"The University of Portsmouth"),r.a.createElement("div",{className:"degree-title d-flex flex-column flex-md-row justify-content-between mb-0"},r.a.createElement("h4",{className:"degree-title-content mb-0"},"Bsc Computer Science"),r.a.createElement("span",{className:"text-primary mb-0"},"N/A")),r.a.createElement("div",{className:"education-content"},t.map((function(e,t){return r.a.createElement("div",{key:t,className:"education-year"},r.a.createElement("div",{className:"subheading mb-0"},e.title),r.a.createElement("ul",null,e.modules.map((function(e,t){return r.a.createElement("li",null,r.a.createElement("div",{className:"education-module d-flex flex-column flex-md-row justify-content-between mb-0"},r.a.createElement("div",{className:"education-module-content"},r.a.createElement("div",{className:"text-primary mb-0"},e.name)),r.a.createElement("div",{className:"education-module-grade text-md-right"},r.a.createElement("span",{className:"text-primary mb-0"},e.grade))))}))))})))))},b=function(e){var t=e.portfolioData;return r.a.createElement("section",{className:"portfolio-section p-3 p-lg-5 d-flex justify-content-left",id:"portfolio"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Portfolio"),r.a.createElement("div",{className:"portfolio-item d-flex flex-column flex-md-row justify-content-between mb-0"},r.a.createElement("div",{className:"portfolio-content"},r.a.createElement("h3",{className:"mb-1"},"Projects"),t&&t.projects.map((function(e,t){return r.a.createElement("div",{key:t,className:"portfolio-content-project"},r.a.createElement("a",{href:e.link,className:"subheading portfolio-content-project-title"},e.title),r.a.createElement("div",{className:"text-primary portfolio-content-project-desc"},e.description))})),r.a.createElement("h3",{className:"mt-2 mb-1"},"Experiments"),t&&t.experiments.map((function(e,t){return r.a.createElement("div",{key:t,className:"portfolio-content-experiment"},r.a.createElement("a",{href:e.link,className:"subheading portfolio-content-experiment-title"},e.title),r.a.createElement("div",{className:"text-primary portfolio-content-experiment-desc"},e.description))})),r.a.createElement("h3",{className:"mt-2 mb-1"},"Open-Source Contributions"),t&&t.contributions.map((function(e,t){return r.a.createElement("div",{key:t,className:"portfolio-content-cont"},r.a.createElement("a",{href:e.link,className:"subheading portfolio-content-cont-title"},e.title),r.a.createElement("div",{className:"text-primary portfolio-content-cont-desc"},e.description))}))))))},E=[{title:"Final Year Project",modules:[{name:"Building an Accessible, Lightweight and Embedded Graph Database with Rust",grade:"N/A"}]},{title:"3rd Year",modules:[{name:"Theoretical Computer Science",grade:"84%"},{name:"Fuzzy Systems and Networks",grade:"73%"},{name:"Distributed Systems and Security",grade:"N/A"},{name:"Neural Networks and Genetic Algorithms",grade:"N/A"}]},{title:"2nd Year",modules:[{name:"Discrete Mathematics and Functional Programming",grade:"86%"},{name:"Data Structures and Algorithms",grade:"81%"},{name:"Computer Operating Systems and Intermediate Networks",grade:"73%"},{name:"Advanced Programming Concepts",grade:"72%"},{name:"Introduction to Software Engineering",grade:"66%"},{name:"Web-Script Programming",grade:"60%"}]},{title:"1st Year",modules:[{name:"Introduction to Programming",grade:"88%"},{name:"Computer Architecture",grade:"85%"},{name:"Introduction to Database Design and Development",grade:"74%"},{name:"Network Fundamentals",grade:"74%"},{name:"Web Foundations",grade:"66%"}]}],h=[{position:"Software Developer (University Placement Year)",company:"IBM, Hursley",skills:"C++, Python, CLI, Agile",description:['Worked "competently at a graduate level" in a production C++ codebase while on a placement year.',"Developed client-facing features for IBM's product: App Connect Enterprise (ACE).","Shared dual responsibility for extending and maintaining two critically-important, in-house testing frameworks written in Python: Laputa and Skynet.","Became the first port-of-call for key members of the documentation team regarding new and extended Command behaviour, especially in: Monitoring, Statistics, Component Start/Stop and Config Restore; where I reimplemented the related commands for ACE."],fromDate:"Jul 2018",toDate:"Jul 2019"},{position:"Youth Assistant Worker",company:"Dorset County Council, Gillingham",skills:"Problem-Solving, Inclusiveness, Assertiveness, Communication",description:["Was responsible for the safety and well-being of all young people attending the venue.","Provided counsel for countless young people over the years, many of whom have gone onto recover from conditions such as depression or anxiety.","Adapted activities from a set curriculum to be as inclusive as possible.","Changed my approach to problems depending on the situation and people involved."],fromDate:"Sep 2014",toDate:"May 2016"}],v={projects:[{title:"k2_tree",description:"A Rust implementation of the K\xb2-Tree data-structure which excels at compressing sparse bit-matrices.",link:"https://github.com/ggabi/k2_tree"},{title:"RippleDB",description:"An RDF Triple-Store based on K\xb2-Trees and the deliverable for my university dissertation. RippleDB provides all the functionality expected of a graph-database e.g. queries and efficient persistence. Supports import/export between RdfXml.",link:"https://github.com/ggabi/RippleDB"}],experiments:[{title:"k2_zip",description:"A compression algorithm based on my k2_tree data-structure.",link:"https://github.com/ggabi/k2_zip"},{title:"OjiDB",description:"My first attempt at creating a graph-database and was a precursor to RippleDB. OjiDB is a plain Triple-Store based on the Hexastore architecture.",link:"https://github.com/ggabi/OjiDB"}],contributions:[{title:"Coming soon...",description:""}]},N=function(){var e=Object(n.useState)({}),t=Object(o.a)(e,2);t[0],t[1];return Object(n.useEffect)((function(){}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(m,{sidebarData:{name:"Gabriel Roels"}}),r.a.createElement("div",{id:"mainContent",className:"container-fluid p-0"},r.a.createElement(g,null),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(d,{experienceData:h}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(f,{educationData:E}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(b,{portfolioData:v}),r.a.createElement("hr",{className:"m-0"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(21),a(22);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a.p+"static/media/pp.606fb6a9.jpeg"}},[[10,1,2]]]);
//# sourceMappingURL=main.06c83808.chunk.js.map